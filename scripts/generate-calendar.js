const fs = require("node:fs").promises;
const path = require("node:path");
const { format } = require("date-fns");
const { enGB } = require("date-fns/locale/en-GB");
const ics = require("ics");
const replaceSpecialCharacters = require("replace-special-characters");

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

const getDuration = (show) => {
  const title = show.title.toLowerCase();
  const isAllNighter =
    !!title.match(/all[\s|-]night/i) || !!title.match(/\s+marathon$/i);
  // Default to 90 minutes if we don't know the duration
  // unless it's an all nighter/marathon, then make it 6 hours
  const defaultDuration = isAllNighter ? parseMinsToMs(360) : parseMinsToMs(90);
  return show.overview.duration || defaultDuration;
};

const sanitize = (value) =>
  replaceSpecialCharacters(value.replace(/\s+/g, " "));

const generateEventDescription = (
  { overview, url, themoviedb },
  performance,
) => {
  console.log(">>> generateEventDescription", themoviedb);
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
  if (themoviedb) {
    description += `\n---\n\n`;
    description += `[Match found in The Movie Database]\n`;
    description += `${themoviedb.title} (${themoviedb.releaseDate.split("-")[0]}) - https://www.themoviedb.org/movie/${themoviedb.id}\n`;
    description += `${themoviedb.summary || "No summary available"}\n`;
  }
  return description.trim();
};

const getEventDate = (time) =>
  format(time, "yyyy-M-d-H-m", { locale: enGB })
    .split("-")
    .map((value) => parseInt(value, 10));

async function getCinemaNames() {
  const dataPath = path.join(process.cwd(), "transformed-data");
  const files = await fs.readdir(dataPath);
  const dataFiles = [];
  for (const file of files) {
    if (!(await fs.stat(path.join(dataPath, file))).isDirectory()) {
      dataFiles.push(file);
    }
  }
  return dataFiles;
}

(async function () {
  await setupDirectory("transformed-data");
  const cinemas = await getCinemaNames();

  for (const cinema of cinemas) {
    console.log(`[🎞️  Cinema: ${cinema}]`);
    const start = Date.now();
    let icsFormattedEvents;
    try {
      const cinemaPath = path.join(process.cwd(), "transformed-data", cinema);
      const movies = await readJSON(cinemaPath);
      const { attributes } = require(`scripts/cinemas/${cinema}`);
      const { url, name, address, geo } = attributes;

      icsFormattedEvents = movies.reduce((events, movie) => {
        const duration = getDuration(movie);
        const moviePerformances = movie.performances.map((performance) => ({
          title: sanitize(movie.title),
          description: generateEventDescription(movie, performance),
          categories: [].concat(movie.overview.categories),
          start: getEventDate(performance.time),
          end: getEventDate(performance.time + duration),
          url,
          location: `${name}, ${address}`,
          geo,
        }));

        return events.concat(moviePerformances);
      }, []);
    } catch (e) {
      console.log(` - ❌ Error generating`, e);
      throw new Error("Error generating events");
    }

    const { error, value } = ics.createEvents(icsFormattedEvents);
    if (error) {
      console.log(` - ❌ Error generating`, error);
      throw new Error("Error generating ICS format");
    }

    await setupDirectory("calendar-data");
    const calendarPath = path.join(process.cwd(), "calendar-data", cinema);
    await fs.writeFile(calendarPath, value);

    const duration = Math.round((Date.now() - start) / 1000);
    console.log(` - ✅ Generated (${duration}s)`);
  }
})();
