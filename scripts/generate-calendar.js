const fs = require("node:fs").promises;
const path = require("node:path");
const { format } = require("date-fns");
const { enGB } = require("date-fns/locale/en-GB");
const ics = require("ics");
const replaceSpecialCharacters = require("replace-special-characters");

const websiteUrl = "https://clusterflick.com";

const readJSON = async (filePath) => {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
};

const setupDirectory = async (name) => {
  const directoryPath = path.join(process.cwd(), name);
  let needsCreated = false;
  try {
    needsCreated = !(await fs.stat(directoryPath)).isDirectory();
  } catch (e) {
    needsCreated = e.code === "ENOENT";
  }
  if (needsCreated) await fs.mkdir(directoryPath, { recursive: true });
};

const parseMinsToMs = (value) => parseInt(value, 10) * 60 * 1000;

const getDuration = (eventTitle, overview) => {
  const title = eventTitle.toLowerCase();
  const isAllNighter =
    !!title.match(/all[\s|-]night/i) || !!title.match(/\s+marathon$/i);
  // Default to 90 minutes if we don't know the duration
  // unless it's an all nighter/marathon, then make it 6 hours
  const defaultDuration = isAllNighter ? parseMinsToMs(360) : parseMinsToMs(90);
  return overview.duration || defaultDuration;
};

const sanitize = (value) =>
  replaceSpecialCharacters(value.replace(/\s+/g, " "));

const generateEventDescription = (movie, showing, performance) => {
  const { overview, url } = showing;
  let description = "";
  if (performance.screen)
    description += `Showing in screen ${performance.screen}\n`;
  if (overview.classification)
    description += `Film classification: ${overview.classification}\n`;
  if (overview.actors && overview.actors.length > 0)
    description += `Starring ${overview.actors.join(", ")}\n`;
  if (overview.directors && overview.directors.length > 0)
    description += `Directed by ${overview.directors.join(", ")}\n`;
  if (url) description += `For more details, see ${url}\n`;
  if (performance.bookingUrl)
    description += `Book tickets at ${performance.bookingUrl}\n`;
  if (performance.notes) description += `\nNotes:\n${performance.notes}\n`;
  // A film that matched The Movie Database is keyed by its TMDB id, and carries
  // that entry's title, year and synopsis - so the movie itself is the match.
  if (!movie.isUnmatched) {
    const year = movie.year ? ` (${movie.year})` : "";
    description += `\n---\n\n`;
    description += `[Match found in The Movie Database]\n`;
    description += `${movie.title}${year} - https://www.themoviedb.org/movie/${movie.id}\n`;
    description += `${movie.overview || "No summary available"}\n`;
  }
  return description.trim();
};

const getEventDate = (time) =>
  format(time, "yyyy-M-d-H-m", { locale: enGB })
    .split("-")
    .map((value) => parseInt(value, 10));

/**
 * Group every performance in the release by the venue showing it, as the event
 * the calendar publishes.
 *
 * Built from the combined data rather than the per-venue transformed data so
 * that each event can link to the film's page on the website. That page is
 * addressed by the id and title `combine` settles on, which is not derivable
 * from a single venue's data: an unmatched film is merged with every other
 * venue's listing of the same title and keeps only one of them, and the website
 * is a static export, so a URL that is even slightly off is a 404 rather than a
 * redirect.
 */
const getEventsByVenue = ({ movies, venues }, slugify) => {
  // Every venue in the release gets a feed, including any with nothing on -
  // an empty calendar is the honest answer, and it fills up again by itself.
  const eventsByVenue = Object.fromEntries(
    Object.keys(venues).map((venueId) => [venueId, []]),
  );

  for (const movie of Object.values(movies)) {
    const movieUrl = `${websiteUrl}/movies/${movie.id}/${slugify(movie.title)}`;

    for (const performance of movie.performances) {
      const showing = movie.showings[performance.showingId];
      if (!showing) {
        throw new Error(
          `Movie "${movie.id}" has a performance for unknown showing "${performance.showingId}"`,
        );
      }

      const venue = venues[showing.venueId];
      if (!venue) {
        throw new Error(
          `Showing "${showing.id}" is at unknown venue "${showing.venueId}"`,
        );
      }

      // The venue's own name for the screening, which is only carried when it
      // differs from the film's title.
      const title = showing.title || movie.title;

      eventsByVenue[showing.venueId].push({
        time: performance.time,
        event: {
          title: sanitize(title),
          description: generateEventDescription(movie, showing, performance),
          categories: [].concat(showing.overview.categories),
          start: getEventDate(performance.time),
          end: getEventDate(
            performance.time + getDuration(title, showing.overview),
          ),
          // The film's page on the website, which collects every screening of
          // it across London. The venue's own listing is still in the
          // description, alongside the link to book.
          url: movieUrl,
          location: `${venue.name}, ${venue.address}`,
          geo: venue.geo,
        },
      });
    }
  }

  return eventsByVenue;
};

(async function () {
  const { default: slugify } = await import("@sindresorhus/slugify");
  await setupDirectory("combined-data");
  const dataPath = path.join(process.cwd(), "combined-data", "combined-data.json");
  const data = await readJSON(dataPath);
  const eventsByVenue = getEventsByVenue(data, slugify);

  for (const venueId of Object.keys(eventsByVenue)) {
    console.log(`[🎞️  Cinema: ${venueId}]`);
    const start = Date.now();
    const calName = data.venues[venueId].name;
    // A film's performances arrive grouped by film, so order the venue's feed
    // by when the screenings actually happen.
    const icsFormattedEvents = eventsByVenue[venueId]
      .sort((a, b) => a.time - b.time)
      .map(({ event }) => event);

    const { error, value } = ics.createEvents(icsFormattedEvents, { calName });
    if (error) {
      console.log(` - ❌ Error generating`, error);
      throw new Error("Error generating ICS format");
    }

    await setupDirectory("calendar-data");
    const calendarPath = path.join(process.cwd(), "calendar-data", venueId);
    await fs.writeFile(calendarPath, value);

    const duration = Math.round((Date.now() - start) / 1000);
    console.log(` - ✅ Generated (${duration}s)`);
  }
})();
