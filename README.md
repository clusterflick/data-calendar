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

## Usage

The calendar feeds are published as ICS files in each
[GitHub release](https://github.com/clusterflick/data-calendar/releases). You
can subscribe to any venue's calendar using its direct download URL:

```
https://github.com/clusterflick/data-calendar/releases/latest/download/<venue-id>
```

Replace `<venue-id>` with the filename of the venue you want to follow (e.g.
`prince-charles-cinema.ics`).

### Subscribing in Google Calendar

1. Copy the URL for the venue calendar you want to subscribe to
2. Open [Google Calendar](https://calendar.google.com)
3. Go to **Settings** > **Add calendar** > **From URL**
   ([direct link](https://calendar.google.com/calendar/u/0/r/settings/addbyurl))
4. Paste the URL and click **Add calendar**

The calendar will appear in your sidebar under **Other calendars**. Google
Calendar will periodically fetch the latest version, so new screenings will
appear automatically. You can toggle the calendar on or off, and copy individual
events to your personal calendar if you'd like to keep them permanently.

### Subscribing in Apple Calendar

1. In Apple Calendar, go to **File** > **New Calendar Subscription…**
2. Paste the venue calendar URL and click **Subscribe**
3. Choose your preferred auto-refresh interval and click **OK**

### Subscribing in Outlook

1. Go to **Calendar** > **Add calendar** > **Subscribe from web**
2. Paste the venue calendar URL and give it a name
3. Click **Import**

### Other Calendar Apps

Most calendar applications support subscribing to ICS feeds via URL. Look for an
option like "Add calendar by URL", "Subscribe to calendar", or "Import from
URL", and paste the venue calendar URL.

## Schedule

The workflow is automatically triggered when the
[data transformation workflow](https://github.com/clusterflick/data-transformed)
completes successfully. It can also be triggered manually via workflow dispatch
if needed.

## Maintenance

### Dependencies

The workflow requires a GitHub secret:

- `PAT` - Personal Access Token for downloading releases from other repositories
