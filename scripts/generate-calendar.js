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

const MAX_BILLED_CAST = 3;

/**
 * Resolve a matched film's TMDB person ids to names, falling back to the names
 * the venue published. The match covers more screenings than the venue listings
 * do, and its cast is in billing order, so it is preferred where both exist.
 */
const getPeopleNames = (ids, people, fallbackNames) => {
  const names = (ids || []).map((id) => people[id]?.name).filter(Boolean);
  return names.length > 0 ? names : fallbackNames || [];
};

/**
 * The event body, ordered so that everything a reader acts on sits above the
 * synopsis: identity, then this particular screening, then the links. The
 * synopsis is the only block of unbounded length, so anything below it can be
 * pushed behind a "show more" fold in the calendar client.
 */
const generateEventDescription = (
  movie,
  showing,
  performance,
  people,
  movieUrl,
) => {
  const { overview, url } = showing;
  const blocks = [];
  const summary = [];

  // The film as it is catalogued, which is worth stating because the venue's
  // own title for the screening frequently is not it - a concert performance,
  // a season strand, a rerelease carrying its certificate in the title.
  const directors = getPeopleNames(movie.directors, people, overview.directors);
  const directedBy =
    directors.length > 0 ? `directed by ${directors.join(", ")}` : "";
  if (!movie.isUnmatched) {
    const year = movie.year ? ` (${movie.year})` : "";
    const credit = directedBy ? `, ${directedBy}` : "";
    summary.push(`${movie.title}${year}${credit}`);
  } else if (directedBy) {
    summary.push(`Directed by ${directors.join(", ")}`);
  }

  const facts = [];
  if (performance.screen) facts.push(`Screen ${performance.screen}`);
  if (overview.classification) facts.push(`Cert ${overview.classification}`);
  if (facts.length > 0) summary.push(facts.join(" · "));

  // What makes this screening different from the venue's others: the format,
  // the accessibility provision, the live orchestra, the free popcorn.
  if (performance.notes) summary.push(performance.notes);
  if (summary.length > 0) blocks.push(summary.join("\n"));

  const links = [];
  if (performance.bookingUrl)
    links.push(`Book tickets: ${performance.bookingUrl}`);
  // The venue's own page is a different URL from the booking flow for all but
  // a twentieth of screenings, and is the fallback when that flow has expired.
  if (url && url !== performance.bookingUrl)
    links.push(`Venue listing: ${url}`);
  // Repeated from the event's URL property because Google Calendar drops that
  // property on import, where Apple Calendar surfaces it as its own field.
  links.push(`All screenings: ${movieUrl}`);
  blocks.push(links.join("\n"));

  const details = [];
  if (!movie.isUnmatched && movie.overview) details.push(movie.overview);
  const actors = getPeopleNames(movie.actors, people, overview.actors).slice(
    0,
    MAX_BILLED_CAST,
  );
  if (actors.length > 0) details.push(`Starring ${actors.join(", ")}`);
  if (details.length > 0) blocks.push(`---\n${details.join("\n")}`);

  return blocks.join("\n\n");
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
const getEventsByVenue = ({ movies, people, venues }, slugify) => {
  // Every venue in the release gets a feed, including any with nothing on -
  // an empty calendar is the honest answer, and it fills up again by itself.
  const eventsByVenue = Object.fromEntries(
    Object.keys(venues).map((venueId) => [venueId, []]),
  );

  for (const movie of Object.values(movies)) {
    // `#show-all` because the film's page applies the reader's saved filters,
    // which default to the coming week - without it a link to a screening a
    // month out lands on a page reporting that nothing matches.
    const movieUrl = `${websiteUrl}/movies/${movie.id}/${slugify(movie.title)}#show-all`;

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
          description: generateEventDescription(
            movie,
            showing,
            performance,
            people,
            movieUrl,
          ),
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
