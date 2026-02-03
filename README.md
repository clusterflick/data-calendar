# data-calendar

This repository contains the automated workflow for generating calendar feeds
from cinema data for the Clusterflick project.

## Purpose

The calendar workflow processes transformed cinema data and generates ICS
(iCalendar) format files for each venue. These calendar feeds allow users to
subscribe to cinema schedules and receive automatic updates about upcoming
screenings.

## How It Works

The workflow downloads the latest transformed data and executes a calendar
generation script:

```bash
npm run generate-calendar
```

This script:

- Reads the transformed cinema data for each venue
- Extracts screening information (title, time, location, description)
- Determines event duration (defaults to 90 minutes, or 6 hours for marathons)
- Includes movie metadata when available (cast, director, classification)
- Generates ICS calendar files with proper formatting
- Outputs calendar files for each venue

Each calendar event includes:

- Movie title and screening time
- Venue name, screen number, and address
- Film classification and duration
- Cast and director information
- Booking URL and additional notes
- Movie Database link when available

## Schedule

The workflow is automatically triggered when the
[data transformation workflow](https://github.com/clusterflick/data-transformed)
completes successfully. It can also be triggered manually via workflow dispatch
if needed.

## Maintenance

### Dependencies

The workflow requires a GitHub secret:

- `PAT` - Personal Access Token for downloading releases from other repositories
