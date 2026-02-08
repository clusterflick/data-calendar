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

## Supported Venues

There are currently 240 supported venues. The calendar filename for each venue
is listed below and can be used with the download URL pattern above.

| Venue | Calendar File |
| --- | --- |
| Austrian Cultural Forum London | [`acflondon.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/acflondon.org.ics) |
| ActOne Cinema | [`actonecinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/actonecinema.co.uk.ics) |
| The Foundry | [`aplaceforchange.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/aplaceforchange.co.uk.ics) |
| ArtHouse Crouch End | [`arthousecrouchend.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/arthousecrouchend.co.uk.ics) |
| JOIA | [`artotel.com-battersea-power-station.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/artotel.com-battersea-power-station.ics) |
| Art'otel London Hoxton | [`artotel.com-hoxton.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/artotel.com-hoxton.ics) |
| Backyard Cinema | [`backyardcinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/backyardcinema.co.uk.ics) |
| The Barbican | [`barbican.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/barbican.org.uk.ics) |
| Birkbeck | [`bbk.ac.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/bbk.ac.uk.ics) |
| The Beehive Pub | [`beehiven17.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/beehiven17.com.ics) |
| Beer Merchants Tap | [`beermerchantstap.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/beermerchantstap.com.ics) |
| Croydon Sports Arena | [`better.org.uk-croydon-sports-arena.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/better.org.uk-croydon-sports-arena.ics) |
| BFI IMAX | [`bfi.org.uk-imax.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-imax.ics) |
| BFI Southbank | [`bfi.org.uk-southbank.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-southbank.ics) |
| BFI Stephen Street | [`bfi.org.uk-stephen-street.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-stephen-street.ics) |
| The Boathouse Studios | [`boathousebarkingstudios.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/boathousebarkingstudios.com.ics) |
| Boxpark Wembley | [`boxpark.co.uk-wembley.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/boxpark.co.uk-wembley.ics) |
| The Private Cinema | [`bulgarihotels.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/bulgarihotels.com.ics) |
| Castlehaven Community Cinema | [`castlehaven.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/castlehaven.org.uk.ics) |
| The Castle Sidcup | [`castlesidcup.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/castlesidcup.com.ics) |
| Chadwell Heath Community Centre | [`chcc.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/chcc.org.uk.ics) |
| The Chiswick Cinema | [`chiswickcinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/chiswickcinema.co.uk.ics) |
| Ciné-Real | [`cine-real.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cine-real.com.ics) |
| The Cinema Museum | [`cinemamuseum.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cinemamuseum.org.uk.ics) |
| Cineworld Bexleyheath | [`cineworld.co.uk-bexleyheath.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-bexleyheath.ics) |
| Cineworld Enfield | [`cineworld.co.uk-enfield.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-enfield.ics) |
| Cineworld Feltham | [`cineworld.co.uk-feltham.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-feltham.ics) |
| Cineworld Hounslow | [`cineworld.co.uk-hounslow.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-hounslow.ics) |
| Cineworld Ilford | [`cineworld.co.uk-ilford.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-ilford.ics) |
| Cineworld Leicester Square | [`cineworld.co.uk-leicester-square.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-leicester-square.ics) |
| Cineworld South Ruislip | [`cineworld.co.uk-south-ruislip.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-south-ruislip.ics) |
| Cineworld The O2 Greenwich | [`cineworld.co.uk-the-o2-greenwich.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-the-o2-greenwich.ics) |
| Cineworld Wandsworth | [`cineworld.co.uk-wandsworth.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-wandsworth.ics) |
| Cineworld Wembley | [`cineworld.co.uk-wembley.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-wembley.ics) |
| Cineworld West India Quay | [`cineworld.co.uk-west-india-quay.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-west-india-quay.ics) |
| Cineworld Wood Green | [`cineworld.co.uk-wood-green.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-wood-green.ics) |
| The Clapham Grand | [`claphamgrand.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/claphamgrand.com.ics) |
| Close-Up Film Centre | [`closeupfilmcentre.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/closeupfilmcentre.com.ics) |
| Coldharbour Blue | [`coldharbourblue.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/coldharbourblue.com.ics) |
| Courthouse Hotel Shoreditch | [`courthouse-hotel.com-shoreditch.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/courthouse-hotel.com-shoreditch.ics) |
| Courthouse Hotel Soho | [`courthouse-hotel.com-soho.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/courthouse-hotel.com-soho.ics) |
| The Francis Crick Institute | [`crick.ac.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/crick.ac.uk.ics) |
| Liszt Institute | [`culture.hu-london.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/culture.hu-london.ics) |
| Curzon Aldgate | [`curzon.com-aldgate.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-aldgate.ics) |
| Curzon Bloomsbury | [`curzon.com-bloomsbury.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-bloomsbury.ics) |
| Curzon Camden | [`curzon.com-camden.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-camden.ics) |
| Curzon Hoxton | [`curzon.com-hoxton.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-hoxton.ics) |
| Curzon Kingston | [`curzon.com-kingston.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-kingston.ics) |
| Curzon Mayfair | [`curzon.com-mayfair.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-mayfair.ics) |
| Curzon Richmond | [`curzon.com-richmond.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-richmond.ics) |
| Curzon Soho | [`curzon.com-soho.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-soho.ics) |
| Curzon Victoria | [`curzon.com-victoria.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-victoria.ics) |
| Curzon Wimbledon | [`curzon.com-wimbledon.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-wimbledon.ics) |
| Curzon Sea Containers | [`curzonseacontainers.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzonseacontainers.com.ics) |
| Dalston Superstore | [`dalstonsuperstore.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/dalstonsuperstore.com.ics) |
| The David Lean Cinema | [`davidleancinema.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/davidleancinema.org.uk.ics) |
| Dugdale Arts Centre | [`dugdaleartscentre.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/dugdaleartscentre.co.uk.ics) |
| Electric Cinema Portobello | [`electriccinema.co.uk-portobello.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/electriccinema.co.uk-portobello.ics) |
| Electric Cinema White City | [`electriccinema.co.uk-white-city.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/electriccinema.co.uk-white-city.ics) |
| The Green House | [`ethicalproperty.co.uk-the-green-house.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/ethicalproperty.co.uk-the-green-house.ics) |
| Eventim Apollo | [`eventimapollo.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/eventimapollo.com.ics) |
| Everyman Baker Street | [`everymancinema.com-baker-street.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-baker-street.ics) |
| Everyman Barnet | [`everymancinema.com-barnet.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-barnet.ics) |
| Everyman Belsize Park | [`everymancinema.com-belsize-park.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-belsize-park.ics) |
| Everyman Borough Yards | [`everymancinema.com-borough-yards.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-borough-yards.ics) |
| Everyman Brentford | [`everymancinema.com-brentford.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-brentford.ics) |
| Everyman Broadgate | [`everymancinema.com-broadgate.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-broadgate.ics) |
| Everyman Canary Wharf | [`everymancinema.com-canary-wharf.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-canary-wharf.ics) |
| Everyman Chelsea | [`everymancinema.com-chelsea.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-chelsea.ics) |
| Everyman Crystal Palace | [`everymancinema.com-crystal-palace.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-crystal-palace.ics) |
| Everyman Hampstead | [`everymancinema.com-hampstead.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-hampstead.ics) |
| Everyman King's Cross | [`everymancinema.com-kings-cross.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-kings-cross.ics) |
| Everyman Maida Vale | [`everymancinema.com-maida-vale.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-maida-vale.ics) |
| Everyman Muswell Hill | [`everymancinema.com-muswell-hill.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-muswell-hill.ics) |
| Everyman Screen on the Green | [`everymancinema.com-screen-on-the-green.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-screen-on-the-green.ics) |
| Everyman Stratford International | [`everymancinema.com-stratford-international.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-stratford-international.ics) |
| Everyman at The Whiteley | [`everymancinema.com-the-whiteley.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-the-whiteley.ics) |
| The Exchange Twickenham | [`exchangetwickenham.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/exchangetwickenham.co.uk.ics) |
| The Haggerston | [`facebook.com-thehaggerston.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/facebook.com-thehaggerston.ics) |
| The Fellowship Cinema | [`fellowshipinn.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/fellowshipinn.co.uk.ics) |
| The Feminist Library | [`feministlibrary.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/feministlibrary.co.uk.ics) |
| Firmdale Charlotte Street Hotel | [`firmdalehotels.com-charlotte-street.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-charlotte-street.ics) |
| Firmdale Covent Garden Hotel | [`firmdalehotels.com-covent-garden.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-covent-garden.ics) |
| Firmdale The Soho Hotel | [`firmdalehotels.com-soho.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-soho.ics) |
| The Forest Cinema | [`forestcinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/forestcinema.co.uk.ics) |
| Freud Museum London | [`freud.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/freud.org.uk.ics) |
| Frontline Club | [`frontlineclub.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/frontlineclub.com.ics) |
| Fulham Pier | [`fulhampier.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/fulhampier.com.ics) |
| Genesis Cinema | [`genesiscinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/genesiscinema.co.uk.ics) |
| Goethe-Institut London | [`goethe.de.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/goethe.de.ics) |
| Goldsmiths | [`gold.ac.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/gold.ac.uk.ics) |
| Good Hotel London | [`goodhotel.co-london.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/goodhotel.co-london.ics) |
| Good Shepherd Studios | [`goodshepherdstudios.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/goodshepherdstudios.com.ics) |
| Institute of Contemporary Arts | [`ica.art.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/ica.art.ics) |
| Imperial College London | [`imperial.ac.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/imperial.ac.uk.ics) |
| Ciné Lumière | [`institut-francais.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/institut-francais.org.uk.ics) |
| Irish Cultural Centre | [`irishculturalcentre.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/irishculturalcentre.co.uk.ics) |
| The Black Cultural Centre Islington | [`islington.gov.uk-black-cultural-centre.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/islington.gov.uk-black-cultural-centre.ics) |
| Islington Museum | [`islington.gov.uk-islington-museum.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/islington.gov.uk-islington-museum.ics) |
| The Ivy House | [`ivyhousenunhead.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/ivyhousenunhead.com.ics) |
| Japan House London | [`japanhouselondon.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/japanhouselondon.uk.ics) |
| JW3 | [`jw3.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/jw3.org.uk.ics) |
| Strand Building | [`kcl.ac.uk-strand.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/kcl.ac.uk-strand.ics) |
| KERB Social Club | [`kerbsocialclub.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/kerbsocialclub.com.ics) |
| Kingsley Hall Church & Community Centre | [`khccc.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/khccc.com.ics) |
| Kiln Theatre | [`kilntheatre.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/kilntheatre.com.ics) |
| Langley Park FILMBOX | [`langleyfilmbox.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/langleyfilmbox.com.ics) |
| Deptford Lounge | [`lewisham.gov.uk-deptford-lounge.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/lewisham.gov.uk-deptford-lounge.ics) |
| London Welsh Centre | [`londonwelsh.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/londonwelsh.org.ics) |
| Lost Cinema | [`lost.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/lost.org.ics) |
| Lumiere Cinema Romford | [`lumiereromford.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/lumiereromford.com.ics) |
| LUX | [`lux.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/lux.org.uk.ics) |
| W London | [`marriott.com-w-london.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/marriott.com-w-london.ics) |
| Mason & Fifth | [`mason-fifth.com-westbourne-park.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/mason-fifth.com-westbourne-park.ics) |
| Metro Cinema | [`metrocinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/metrocinema.co.uk.ics) |
| Metroland Studios | [`metrolandcultures.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/metrolandcultures.com.ics) |
| MOTH Club | [`mothclub.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/mothclub.co.uk.ics) |
| My Heathway | [`myheathway.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myheathway.com.ics) |
| Vue Bromley | [`myvue.com-bromley.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-bromley.ics) |
| Vue Croydon Grant's | [`myvue.com-croydon-grants.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-croydon-grants.ics) |
| Vue Croydon Purley Way | [`myvue.com-croydon-purley-way.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-croydon-purley-way.ics) |
| Vue Dagenham | [`myvue.com-dagenham.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-dagenham.ics) |
| Vue Eltham | [`myvue.com-eltham.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-eltham.ics) |
| Vue Finchley Road | [`myvue.com-finchley-road.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-finchley-road.ics) |
| Vue Fulham Broadway | [`myvue.com-fulham-broadway.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-fulham-broadway.ics) |
| Vue Harrow | [`myvue.com-harrow.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-harrow.ics) |
| Vue Islington | [`myvue.com-islington.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-islington.ics) |
| Vue West End | [`myvue.com-leicester-square.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-leicester-square.ics) |
| Vue North Finchley | [`myvue.com-north-finchley.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-north-finchley.ics) |
| Vue Piccadilly | [`myvue.com-piccadilly.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-piccadilly.ics) |
| Vue Romford | [`myvue.com-romford.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-romford.ics) |
| Vue Shepherd's Bush | [`myvue.com-shepherds-bush.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-shepherds-bush.ics) |
| Vue Westfield London | [`myvue.com-westfield.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-westfield.ics) |
| Vue Westfield Stratford | [`myvue.com-westfield-stratford-city.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-westfield-stratford-city.ics) |
| Vue Wood Green | [`myvue.com-wood-green.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-wood-green.ics) |
| Czech Centre | [`mzv.gov.cz-london.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/mzv.gov.cz-london.ics) |
| Women's Museum | [`newtownculture.org-womens-museum.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/newtownculture.org-womens-museum.ics) |
| ODEON Luxe Acton | [`odeon.co.uk-acton.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-acton.ics) |
| ODEON Beckenham | [`odeon.co.uk-beckenham.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-beckenham.ics) |
| ODEON Camden | [`odeon.co.uk-camden.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-camden.ics) |
| ODEON Greenwich | [`odeon.co.uk-greenwich.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-greenwich.ics) |
| ODEON Luxe Haymarket | [`odeon.co.uk-haymarket.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-haymarket.ics) |
| ODEON Luxe Holloway | [`odeon.co.uk-holloway.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-holloway.ics) |
| ODEON Luxe & Dine Islington | [`odeon.co.uk-islington.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-islington.ics) |
| ODEON Kingston | [`odeon.co.uk-kingston.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-kingston.ics) |
| ODEON Luxe Lee Valley | [`odeon.co.uk-lee-valley.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-lee-valley.ics) |
| ODEON Luxe Leicester Square | [`odeon.co.uk-leicester-square.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-leicester-square.ics) |
| ODEON Orpington | [`odeon.co.uk-orpington.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-orpington.ics) |
| ODEON Luxe Putney | [`odeon.co.uk-putney.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-putney.ics) |
| ODEON Richmond | [`odeon.co.uk-richmond.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-richmond.ics) |
| ODEON South Woodford | [`odeon.co.uk-south-woodford.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-south-woodford.ics) |
| ODEON Streatham | [`odeon.co.uk-streatham.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-streatham.ics) |
| ODEON Luxe Swiss Cottage | [`odeon.co.uk-swiss-cottage.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-swiss-cottage.ics) |
| ODEON Tottenham Court Road | [`odeon.co.uk-tottenham-court-road.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-tottenham-court-road.ics) |
| ODEON Luxe Uxbridge | [`odeon.co.uk-uxbridge.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-uxbridge.ics) |
| ODEON Luxe West End | [`odeon.co.uk-west-end.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-west-end.ics) |
| ODEON Wimbledon | [`odeon.co.uk-wimbledon.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-wimbledon.ics) |
| The Olympic Cinema | [`olympiccinema.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/olympiccinema.com.ics) |
| Omniplex Sutton | [`omniplex.co.uk-sutton.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/omniplex.co.uk-sutton.ics) |
| Peckham Levels | [`peckhamlevels.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/peckhamlevels.org.ics) |
| Peckhamplex | [`peckhamplex.london.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/peckhamplex.london.ics) |
| Pelican House | [`pelicanhouse.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/pelicanhouse.org.ics) |
| Phoenix Cinema | [`phoenixcinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/phoenixcinema.co.uk.ics) |
| Picturehouse Central | [`picturehouses.com-central.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-central.ics) |
| Clapham Picturehouse | [`picturehouses.com-clapham.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-clapham.ics) |
| Crouch End Picturehouse | [`picturehouses.com-crouch-end.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-crouch-end.ics) |
| Ealing Picturehouse | [`picturehouses.com-ealing.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-ealing.ics) |
| East Dulwich Picturehouse & Cafe | [`picturehouses.com-east-dulwich.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-east-dulwich.ics) |
| Finsbury Park Picturehouse | [`picturehouses.com-finsbury-park.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-finsbury-park.ics) |
| Greenwich Picturehouse | [`picturehouses.com-greenwich.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-greenwich.ics) |
| Hackney Picturehouse | [`picturehouses.com-hackney.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-hackney.ics) |
| The Gate Picturehouse | [`picturehouses.com-the-gate.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-the-gate.ics) |
| The Ritzy Picturehouse | [`picturehouses.com-the-ritzy.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-the-ritzy.ics) |
| West Norwood Library & Picturehouse | [`picturehouses.com-west-norwood.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-west-norwood.ics) |
| Piehouse Co-Op | [`piehousecoop.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/piehousecoop.co.uk.ics) |
| Prince Charles Cinema | [`princecharlescinema.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/princecharlescinema.com.ics) |
| Prince of Peckham | [`princeofpeckham.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/princeofpeckham.co.uk.ics) |
| Dolby Screening Room Soho | [`professional.dolby.com-soho.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/professional.dolby.com-soho.ics) |
| BLOC Cinema | [`qmul.ac.uk-bloc.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/qmul.ac.uk-bloc.ics) |
| Kensington Central Library | [`rbkc.gov.uk-kensington-central-library.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/rbkc.gov.uk-kensington-central-library.ics) |
| RCA Battersea | [`rca.ac.uk-battersea.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/rca.ac.uk-battersea.ics) |
| RCA Kensington | [`rca.ac.uk-kensington.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/rca.ac.uk-kensington.ics) |
| Regent Street Cinema | [`regentstreetcinema.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/regentstreetcinema.com.ics) |
| The Tate Institute | [`reinstate.info.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/reinstate.info.ics) |
| Rich Mix | [`richmix.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/richmix.org.uk.ics) |
| Rio Cinema | [`riocinema.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/riocinema.org.uk.ics) |
| Riverside Studios | [`riversidestudios.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/riversidestudios.co.uk.ics) |
| Rivoli Ballroom | [`rivoliballroom.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/rivoliballroom.com.ics) |
| The Rocketvan Coffee Shop and The Box Shop Bar | [`rocketvan.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/rocketvan.co.uk.ics) |
| Rons Coffee House | [`ronspeckham.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/ronspeckham.com.ics) |
| Royal Albert Hall | [`royalalberthall.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/royalalberthall.com.ics) |
| Sands Films Cinema | [`sandsfilms.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/sandsfilms.co.uk.ics) |
| Subtitle Cinema | [`scarlettmalone.com-subtitlecinema.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/scarlettmalone.com-subtitlecinema.ics) |
| Science Museum | [`sciencemuseum.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/sciencemuseum.org.uk.ics) |
| SCRT | [`scrt.onl.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/scrt.onl.ics) |
| SET Social | [`setspace.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/setspace.uk.ics) |
| Shai Space | [`shaispace.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/shaispace.com.ics) |
| Signature Brewery | [`signaturebrew.co.uk-blackhorseroad.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/signaturebrew.co.uk-blackhorseroad.ics) |
| Siobhan Davies Studios | [`siobhandavies.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/siobhandavies.com.ics) |
| The Soho Screening Rooms | [`sohoscreeningrooms.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/sohoscreeningrooms.co.uk.ics) |
| The 1850 | [`stmarys.ac.uk-the-1850.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/stmarys.ac.uk-the-1850.ics) |
| Strongroom Bar | [`strongroombar.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/strongroombar.com.ics) |
| Sydenham Arts | [`sydenhamarts.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/sydenhamarts.co.uk.ics) |
| Tate Britain | [`tate.org.uk-tate-britain.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/tate.org.uk-tate-britain.ics) |
| Tate Modern | [`tate.org.uk-tate-modern.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/tate.org.uk-tate-modern.ics) |
| The Nest | [`thamesmeadnow.org.uk-the-nest.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thamesmeadnow.org.uk-the-nest.ics) |
| Telegraph Hill Centre | [`thcentre.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thcentre.com.ics) |
| The Arzner | [`thearzner.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thearzner.com.ics) |
| Theatreship | [`theatreship.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/theatreship.co.uk.ics) |
| The Bath House | [`thebathhouse.co.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thebathhouse.co.ics) |
| The Castle Cinema | [`thecastlecinema.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecastlecinema.com.ics) |
| The Cinema at Selfridges | [`thecinemaatselfridges.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecinemaatselfridges.com.ics) |
| The Cinema in the Power Station (and the Arches) | [`thecinemainthepowerstation.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecinemainthepowerstation.com.ics) |
| The Divine | [`thedivine.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thedivine.co.uk.ics) |
| The Exhibit | [`theexhibit.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/theexhibit.co.uk.ics) |
| The Garden Cinema | [`thegardencinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thegardencinema.co.uk.ics) |
| The Green | [`thegreennunhead.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thegreennunhead.org.ics) |
| The Hammond Theatre | [`thehammondtheatre.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehammondtheatre.co.uk.ics) |
| The Hen & Chickens Theatre Bar | [`thehenandchickenstheatrebar.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehenandchickenstheatrebar.co.uk.ics) |
| The Horse Hospital | [`thehorsehospital.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehorsehospital.com.ics) |
| The Lexi Cinema | [`thelexicinema.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thelexicinema.co.uk.ics) |
| The London Archives | [`thelondonarchives.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thelondonarchives.org.ics) |
| May Fair Theatre | [`themayfairhotel.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/themayfairhotel.co.uk.ics) |
| The Nickel | [`thenickel.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thenickel.co.uk.ics) |
| The RSA | [`thersa.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thersa.org.ics) |
| Thomas Wall Centre | [`thethomaswallcentre.harleystreethypnosis.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thethomaswallcentre.harleystreethypnosis.co.uk.ics) |
| The Wilds at Barking Riverside | [`thewildsbarkingriverside.london.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thewildsbarkingriverside.london.ics) |
| The Exchange at W9 | [`thexchange.org.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/thexchange.org.uk.ics) |
| Triangle LGBTQ+ Cultural Centre | [`triangledeptford.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/triangledeptford.org.ics) |
| UCL Bentham House | [`ucl.ac.uk-bentham-house.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-bentham-house.ics) |
| UCL School of Slavonic and East European Studies | [`ucl.ac.uk-ssees.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-ssees.ics) |
| UCL East Community Cinema | [`ucl.ac.uk-ucl-east-community-cinema.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-ucl-east-community-cinema.ics) |
| The Source | [`uel.ac.uk-the-source.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/uel.ac.uk-the-source.ics) |
| University Square Stratford | [`uel.ac.uk-univeristy-square-stratford.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/uel.ac.uk-univeristy-square-stratford.ics) |
| KEF Music Gallery London | [`uk.kef.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/uk.kef.com.ics) |
| Vagina Museum | [`vaginamuseum.co.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/vaginamuseum.co.uk.ics) |
| Waltham Forest Town Hall | [`walthamforest.gov.uk.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/walthamforest.gov.uk.ics) |
| Whitechapel Gallery | [`whitechapelgallery.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/whitechapelgallery.org.ics) |
| The Wiener Holocaust Library | [`wienerholocaustlibrary.org.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/wienerholocaustlibrary.org.ics) |
| William The Fourth | [`william-the-fourth.com.ics`](https://github.com/clusterflick/data-calendar/releases/latest/download/william-the-fourth.com.ics) |

## Schedule

The workflow is automatically triggered when the
[data transformation workflow](https://github.com/clusterflick/data-transformed)
completes successfully. It can also be triggered manually via workflow dispatch
if needed.

## Maintenance

### Dependencies

The workflow requires a GitHub secret:

- `PAT` - Personal Access Token for downloading releases from other repositories
