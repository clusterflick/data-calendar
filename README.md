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
`princecharlescinema.com`, just the domain no extension).

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

There are currently 251 supported venues. The calendar filename for each venue
is listed below and can be used with the download URL pattern above.

| Venue | Calendar File |
| --- | --- |
| 229 | [`229.london`](https://github.com/clusterflick/data-calendar/releases/latest/download/229.london) |
| Austrian Cultural Forum London | [`acflondon.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/acflondon.org) |
| ActOne Cinema | [`actonecinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/actonecinema.co.uk) |
| All is Joy Studios | [`allisjoysoho.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/allisjoysoho.com) |
| The Foundry | [`aplaceforchange.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/aplaceforchange.co.uk) |
| ArtHouse Crouch End | [`arthousecrouchend.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/arthousecrouchend.co.uk) |
| JOIA | [`artotel.com-battersea-power-station`](https://github.com/clusterflick/data-calendar/releases/latest/download/artotel.com-battersea-power-station) |
| Art'otel London Hoxton | [`artotel.com-hoxton`](https://github.com/clusterflick/data-calendar/releases/latest/download/artotel.com-hoxton) |
| Backyard Cinema | [`backyardcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/backyardcinema.co.uk) |
| The Barbican | [`barbican.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/barbican.org.uk) |
| Birkbeck Central | [`bbk.ac.uk-central`](https://github.com/clusterflick/data-calendar/releases/latest/download/bbk.ac.uk-central) |
| Birkbeck Cinema | [`bbk.ac.uk-cinema`](https://github.com/clusterflick/data-calendar/releases/latest/download/bbk.ac.uk-cinema) |
| The Beehive Pub | [`beehiven17.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/beehiven17.com) |
| Beer Merchants Tap | [`beermerchantstap.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/beermerchantstap.com) |
| Croydon Sports Arena | [`better.org.uk-croydon-sports-arena`](https://github.com/clusterflick/data-calendar/releases/latest/download/better.org.uk-croydon-sports-arena) |
| BFI IMAX | [`bfi.org.uk-imax`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-imax) |
| BFI Southbank | [`bfi.org.uk-southbank`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-southbank) |
| BFI Stephen Street | [`bfi.org.uk-stephen-street`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-stephen-street) |
| The Boathouse Studios | [`boathousebarkingstudios.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/boathousebarkingstudios.com) |
| Boxpark Wembley | [`boxpark.co.uk-wembley`](https://github.com/clusterflick/data-calendar/releases/latest/download/boxpark.co.uk-wembley) |
| The Private Cinema | [`bulgarihotels.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/bulgarihotels.com) |
| Castlehaven Community Cinema | [`castlehaven.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/castlehaven.org.uk) |
| The Castle Sidcup | [`castlesidcup.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/castlesidcup.com) |
| The Cave | [`contactthecaveldn.wixsite.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/contactthecaveldn.wixsite.com) |
| Chadwell Heath Community Centre | [`chcc.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/chcc.org.uk) |
| The Chiswick Cinema | [`chiswickcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/chiswickcinema.co.uk) |
| Ciné-Real | [`cine-real.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/cine-real.com) |
| The Cinema Museum | [`cinemamuseum.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/cinemamuseum.org.uk) |
| Cineworld Bexleyheath | [`cineworld.co.uk-bexleyheath`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-bexleyheath) |
| Cineworld Enfield | [`cineworld.co.uk-enfield`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-enfield) |
| Cineworld Feltham | [`cineworld.co.uk-feltham`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-feltham) |
| Cineworld Hounslow | [`cineworld.co.uk-hounslow`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-hounslow) |
| Cineworld Ilford | [`cineworld.co.uk-ilford`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-ilford) |
| Cineworld Leicester Square | [`cineworld.co.uk-leicester-square`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-leicester-square) |
| Cineworld South Ruislip | [`cineworld.co.uk-south-ruislip`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-south-ruislip) |
| Cineworld The O2 Greenwich | [`cineworld.co.uk-the-o2-greenwich`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-the-o2-greenwich) |
| Cineworld Wandsworth | [`cineworld.co.uk-wandsworth`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-wandsworth) |
| Cineworld Wembley | [`cineworld.co.uk-wembley`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-wembley) |
| Cineworld West India Quay | [`cineworld.co.uk-west-india-quay`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-west-india-quay) |
| Cineworld Wood Green | [`cineworld.co.uk-wood-green`](https://github.com/clusterflick/data-calendar/releases/latest/download/cineworld.co.uk-wood-green) |
| The Clapham Grand | [`claphamgrand.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/claphamgrand.com) |
| Close-Up Film Centre | [`closeupfilmcentre.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/closeupfilmcentre.com) |
| Coldharbour Blue | [`coldharbourblue.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/coldharbourblue.com) |
| Courthouse Hotel Shoreditch | [`courthouse-hotel.com-shoreditch`](https://github.com/clusterflick/data-calendar/releases/latest/download/courthouse-hotel.com-shoreditch) |
| Courthouse Hotel Soho | [`courthouse-hotel.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/courthouse-hotel.com-soho) |
| The Francis Crick Institute | [`crick.ac.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/crick.ac.uk) |
| Liszt Institute | [`culture.hu-london`](https://github.com/clusterflick/data-calendar/releases/latest/download/culture.hu-london) |
| Curzon Aldgate | [`curzon.com-aldgate`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-aldgate) |
| Curzon Bloomsbury | [`curzon.com-bloomsbury`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-bloomsbury) |
| Curzon Camden | [`curzon.com-camden`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-camden) |
| Curzon Hoxton | [`curzon.com-hoxton`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-hoxton) |
| Curzon Kingston | [`curzon.com-kingston`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-kingston) |
| Curzon Mayfair | [`curzon.com-mayfair`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-mayfair) |
| Curzon Richmond | [`curzon.com-richmond`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-richmond) |
| Curzon Soho | [`curzon.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-soho) |
| Curzon Victoria | [`curzon.com-victoria`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-victoria) |
| Curzon Wimbledon | [`curzon.com-wimbledon`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-wimbledon) |
| Curzon Sea Containers | [`curzonseacontainers.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzonseacontainers.com) |
| Dalston Superstore | [`dalstonsuperstore.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/dalstonsuperstore.com) |
| The David Lean Cinema | [`davidleancinema.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/davidleancinema.org.uk) |
| Dugdale Arts Centre | [`dugdaleartscentre.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/dugdaleartscentre.co.uk) |
| Electric Cinema Portobello | [`electriccinema.co.uk-portobello`](https://github.com/clusterflick/data-calendar/releases/latest/download/electriccinema.co.uk-portobello) |
| Electric Cinema White City | [`electriccinema.co.uk-white-city`](https://github.com/clusterflick/data-calendar/releases/latest/download/electriccinema.co.uk-white-city) |
| The Green House | [`ethicalproperty.co.uk-the-green-house`](https://github.com/clusterflick/data-calendar/releases/latest/download/ethicalproperty.co.uk-the-green-house) |
| Eventim Apollo | [`eventimapollo.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/eventimapollo.com) |
| Everyman Baker Street | [`everymancinema.com-baker-street`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-baker-street) |
| Everyman Barnet | [`everymancinema.com-barnet`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-barnet) |
| Everyman Belsize Park | [`everymancinema.com-belsize-park`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-belsize-park) |
| Everyman Borough Yards | [`everymancinema.com-borough-yards`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-borough-yards) |
| Everyman Brentford | [`everymancinema.com-brentford`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-brentford) |
| Everyman Broadgate | [`everymancinema.com-broadgate`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-broadgate) |
| Everyman Canary Wharf | [`everymancinema.com-canary-wharf`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-canary-wharf) |
| Everyman Chelsea | [`everymancinema.com-chelsea`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-chelsea) |
| Everyman Crystal Palace | [`everymancinema.com-crystal-palace`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-crystal-palace) |
| Everyman Hampstead | [`everymancinema.com-hampstead`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-hampstead) |
| Everyman King's Cross | [`everymancinema.com-kings-cross`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-kings-cross) |
| Everyman Maida Vale | [`everymancinema.com-maida-vale`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-maida-vale) |
| Everyman Muswell Hill | [`everymancinema.com-muswell-hill`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-muswell-hill) |
| Everyman Screen on the Green | [`everymancinema.com-screen-on-the-green`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-screen-on-the-green) |
| Everyman Stratford International | [`everymancinema.com-stratford-international`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-stratford-international) |
| Everyman at The Whiteley | [`everymancinema.com-the-whiteley`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-the-whiteley) |
| The Exchange Twickenham | [`exchangetwickenham.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/exchangetwickenham.co.uk) |
| The Haggerston | [`facebook.com-thehaggerston`](https://github.com/clusterflick/data-calendar/releases/latest/download/facebook.com-thehaggerston) |
| The Fellowship Cinema | [`fellowshipinn.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/fellowshipinn.co.uk) |
| The Feminist Library | [`feministlibrary.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/feministlibrary.co.uk) |
| Firmdale Charlotte Street Hotel | [`firmdalehotels.com-charlotte-street`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-charlotte-street) |
| Firmdale Covent Garden Hotel | [`firmdalehotels.com-covent-garden`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-covent-garden) |
| Firmdale The Soho Hotel | [`firmdalehotels.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-soho) |
| The Forest Cinema | [`forestcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/forestcinema.co.uk) |
| Freud Museum London | [`freud.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/freud.org.uk) |
| Frontline Club | [`frontlineclub.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/frontlineclub.com) |
| Fulham Pier | [`fulhampier.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/fulhampier.com) |
| Galleria Objets | [`objetstrouves.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/objetstrouves.co.uk) |
| Genesis Cinema | [`genesiscinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/genesiscinema.co.uk) |
| Goethe-Institut London | [`goethe.de`](https://github.com/clusterflick/data-calendar/releases/latest/download/goethe.de) |
| Goldsmiths | [`gold.ac.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/gold.ac.uk) |
| Good Hotel London | [`goodhotel.co-london`](https://github.com/clusterflick/data-calendar/releases/latest/download/goodhotel.co-london) |
| Good Shepherd Studios | [`goodshepherdstudios.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/goodshepherdstudios.com) |
| Institute of Contemporary Arts | [`ica.art`](https://github.com/clusterflick/data-calendar/releases/latest/download/ica.art) |
| Imperial College London | [`imperial.ac.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/imperial.ac.uk) |
| Ciné Lumière | [`institut-francais.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/institut-francais.org.uk) |
| Irish Cultural Centre | [`irishculturalcentre.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/irishculturalcentre.co.uk) |
| The Black Cultural Centre Islington | [`islington.gov.uk-black-cultural-centre`](https://github.com/clusterflick/data-calendar/releases/latest/download/islington.gov.uk-black-cultural-centre) |
| Islington Museum | [`islington.gov.uk-islington-museum`](https://github.com/clusterflick/data-calendar/releases/latest/download/islington.gov.uk-islington-museum) |
| The Ivy House | [`ivyhousenunhead.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/ivyhousenunhead.com) |
| Japan House London | [`japanhouselondon.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/japanhouselondon.uk) |
| JW3 | [`jw3.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/jw3.org.uk) |
| Strand Building | [`kcl.ac.uk-strand`](https://github.com/clusterflick/data-calendar/releases/latest/download/kcl.ac.uk-strand) |
| KERB Social Club | [`kerbsocialclub.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/kerbsocialclub.com) |
| Kingsley Hall Church & Community Centre | [`khccc.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/khccc.com) |
| Kiln Theatre | [`kilntheatre.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/kilntheatre.com) |
| Langley Park FILMBOX | [`langleyfilmbox.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/langleyfilmbox.com) |
| Deptford Lounge | [`lewisham.gov.uk-deptford-lounge`](https://github.com/clusterflick/data-calendar/releases/latest/download/lewisham.gov.uk-deptford-lounge) |
| London Welsh Centre | [`londonwelsh.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/londonwelsh.org) |
| Lost Cinema | [`lost.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/lost.org) |
| Lumiere Cinema Romford | [`lumiereromford.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/lumiereromford.com) |
| LUX | [`lux.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/lux.org.uk) |
| W London | [`marriott.com-w-london`](https://github.com/clusterflick/data-calendar/releases/latest/download/marriott.com-w-london) |
| Mason & Fifth | [`mason-fifth.com-westbourne-park`](https://github.com/clusterflick/data-calendar/releases/latest/download/mason-fifth.com-westbourne-park) |
| Metro Cinema | [`metrocinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/metrocinema.co.uk) |
| Metroland Studios | [`metrolandcultures.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/metrolandcultures.com) |
| MOTH Club | [`mothclub.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/mothclub.co.uk) |
| My Heathway | [`myheathway.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/myheathway.com) |
| Vue Bromley | [`myvue.com-bromley`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-bromley) |
| Vue Croydon Grant's | [`myvue.com-croydon-grants`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-croydon-grants) |
| Vue Croydon Purley Way | [`myvue.com-croydon-purley-way`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-croydon-purley-way) |
| Vue Dagenham | [`myvue.com-dagenham`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-dagenham) |
| Vue Eltham | [`myvue.com-eltham`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-eltham) |
| Vue Finchley Road | [`myvue.com-finchley-road`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-finchley-road) |
| Vue Fulham Broadway | [`myvue.com-fulham-broadway`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-fulham-broadway) |
| Vue Harrow | [`myvue.com-harrow`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-harrow) |
| Vue Islington | [`myvue.com-islington`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-islington) |
| Vue West End | [`myvue.com-leicester-square`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-leicester-square) |
| Vue North Finchley | [`myvue.com-north-finchley`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-north-finchley) |
| Vue Piccadilly | [`myvue.com-piccadilly`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-piccadilly) |
| Vue Romford | [`myvue.com-romford`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-romford) |
| Vue Shepherd's Bush | [`myvue.com-shepherds-bush`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-shepherds-bush) |
| Vue Westfield London | [`myvue.com-westfield`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-westfield) |
| Vue Westfield Stratford | [`myvue.com-westfield-stratford-city`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-westfield-stratford-city) |
| Vue Wood Green | [`myvue.com-wood-green`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-wood-green) |
| Czech Centre | [`london.czechcentres.cz`](https://github.com/clusterflick/data-calendar/releases/latest/download/london.czechcentres.cz) |
| Women's Museum | [`newtownculture.org-womens-museum`](https://github.com/clusterflick/data-calendar/releases/latest/download/newtownculture.org-womens-museum) |
| ODEON Luxe Acton | [`odeon.co.uk-acton`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-acton) |
| ODEON Beckenham | [`odeon.co.uk-beckenham`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-beckenham) |
| ODEON Camden | [`odeon.co.uk-camden`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-camden) |
| ODEON Greenwich | [`odeon.co.uk-greenwich`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-greenwich) |
| ODEON Luxe Haymarket | [`odeon.co.uk-haymarket`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-haymarket) |
| ODEON Luxe Holloway | [`odeon.co.uk-holloway`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-holloway) |
| ODEON Luxe & Dine Islington | [`odeon.co.uk-islington`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-islington) |
| ODEON Kingston | [`odeon.co.uk-kingston`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-kingston) |
| ODEON Luxe Lee Valley | [`odeon.co.uk-lee-valley`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-lee-valley) |
| ODEON Luxe Leicester Square | [`odeon.co.uk-leicester-square`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-leicester-square) |
| ODEON Orpington | [`odeon.co.uk-orpington`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-orpington) |
| ODEON Luxe Putney | [`odeon.co.uk-putney`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-putney) |
| ODEON Richmond | [`odeon.co.uk-richmond`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-richmond) |
| ODEON South Woodford | [`odeon.co.uk-south-woodford`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-south-woodford) |
| ODEON Streatham | [`odeon.co.uk-streatham`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-streatham) |
| ODEON Luxe Swiss Cottage | [`odeon.co.uk-swiss-cottage`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-swiss-cottage) |
| ODEON Tottenham Court Road | [`odeon.co.uk-tottenham-court-road`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-tottenham-court-road) |
| ODEON Luxe Uxbridge | [`odeon.co.uk-uxbridge`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-uxbridge) |
| ODEON Luxe West End | [`odeon.co.uk-west-end`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-west-end) |
| ODEON Wimbledon | [`odeon.co.uk-wimbledon`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-wimbledon) |
| The Olympic Cinema | [`olympiccinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/olympiccinema.com) |
| Omniplex Sutton | [`omniplex.co.uk-sutton`](https://github.com/clusterflick/data-calendar/releases/latest/download/omniplex.co.uk-sutton) |
| Peckham Levels | [`peckhamlevels.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/peckhamlevels.org) |
| Peckhamplex | [`peckhamplex.london`](https://github.com/clusterflick/data-calendar/releases/latest/download/peckhamplex.london) |
| Pelican House | [`pelicanhouse.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/pelicanhouse.org) |
| Phoenix Cinema | [`phoenixcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/phoenixcinema.co.uk) |
| Picturehouse Central | [`picturehouses.com-central`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-central) |
| Clapham Picturehouse | [`picturehouses.com-clapham`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-clapham) |
| Crouch End Picturehouse | [`picturehouses.com-crouch-end`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-crouch-end) |
| Ealing Picturehouse | [`picturehouses.com-ealing`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-ealing) |
| East Dulwich Picturehouse & Cafe | [`picturehouses.com-east-dulwich`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-east-dulwich) |
| Finsbury Park Picturehouse | [`picturehouses.com-finsbury-park`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-finsbury-park) |
| Greenwich Picturehouse | [`picturehouses.com-greenwich`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-greenwich) |
| Hackney Picturehouse | [`picturehouses.com-hackney`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-hackney) |
| The Gate Picturehouse | [`picturehouses.com-the-gate`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-the-gate) |
| The Ritzy Picturehouse | [`picturehouses.com-the-ritzy`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-the-ritzy) |
| West Norwood Library & Picturehouse | [`picturehouses.com-west-norwood`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-west-norwood) |
| Piehouse Co-Op | [`piehousecoop.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/piehousecoop.co.uk) |
| Prince Charles Cinema | [`princecharlescinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/princecharlescinema.com) |
| Prince of Peckham | [`princeofpeckham.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/princeofpeckham.co.uk) |
| Dolby Screening Room Soho | [`professional.dolby.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/professional.dolby.com-soho) |
| BLOC Cinema | [`qmul.ac.uk-bloc`](https://github.com/clusterflick/data-calendar/releases/latest/download/qmul.ac.uk-bloc) |
| Kensington Central Library | [`rbkc.gov.uk-kensington-central-library`](https://github.com/clusterflick/data-calendar/releases/latest/download/rbkc.gov.uk-kensington-central-library) |
| RCA Battersea | [`rca.ac.uk-battersea`](https://github.com/clusterflick/data-calendar/releases/latest/download/rca.ac.uk-battersea) |
| RCA Kensington | [`rca.ac.uk-kensington`](https://github.com/clusterflick/data-calendar/releases/latest/download/rca.ac.uk-kensington) |
| Regent Street Cinema | [`regentstreetcinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/regentstreetcinema.com) |
| The Tate Institute | [`reinstate.info`](https://github.com/clusterflick/data-calendar/releases/latest/download/reinstate.info) |
| Rich Mix | [`richmix.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/richmix.org.uk) |
| Rio Cinema | [`riocinema.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/riocinema.org.uk) |
| Riverside Studios | [`riversidestudios.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/riversidestudios.co.uk) |
| Rivoli Ballroom | [`rivoliballroom.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/rivoliballroom.com) |
| The Rocketvan Coffee Shop and The Box Shop Bar | [`rocketvan.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/rocketvan.co.uk) |
| Rons Coffee House | [`ronspeckham.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/ronspeckham.com) |
| Royal Albert Hall | [`royalalberthall.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/royalalberthall.com) |
| Sands Films Cinema | [`sandsfilms.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sandsfilms.co.uk) |
| Subtitle Cinema | [`scarlettmalone.com-subtitlecinema`](https://github.com/clusterflick/data-calendar/releases/latest/download/scarlettmalone.com-subtitlecinema) |
| Science Museum | [`sciencemuseum.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sciencemuseum.org.uk) |
| SCRT | [`scrt.onl`](https://github.com/clusterflick/data-calendar/releases/latest/download/scrt.onl) |
| SET Social | [`setspace.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/setspace.uk) |
| Shai Space | [`shaispace.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/shaispace.com) |
| Signature Brewery | [`signaturebrew.co.uk-blackhorseroad`](https://github.com/clusterflick/data-calendar/releases/latest/download/signaturebrew.co.uk-blackhorseroad) |
| Siobhan Davies Studios | [`siobhandavies.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/siobhandavies.com) |
| The Soho Screening Rooms | [`sohoscreeningrooms.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sohoscreeningrooms.co.uk) |
| The 1850 | [`stmarys.ac.uk-the-1850`](https://github.com/clusterflick/data-calendar/releases/latest/download/stmarys.ac.uk-the-1850) |
| St Matthias Church | [`stmchurch.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/stmchurch.co.uk) |
| Strongroom Bar | [`strongroombar.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/strongroombar.com) |
| Sydenham Arts | [`sydenhamarts.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sydenhamarts.co.uk) |
| Tate Britain | [`tate.org.uk-tate-britain`](https://github.com/clusterflick/data-calendar/releases/latest/download/tate.org.uk-tate-britain) |
| Tate Modern | [`tate.org.uk-tate-modern`](https://github.com/clusterflick/data-calendar/releases/latest/download/tate.org.uk-tate-modern) |
| The Nest | [`thamesmeadnow.org.uk-the-nest`](https://github.com/clusterflick/data-calendar/releases/latest/download/thamesmeadnow.org.uk-the-nest) |
| Telegraph Hill Centre | [`thcentre.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thcentre.com) |
| The Arzner | [`thearzner.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thearzner.com) |
| Theatreship | [`theatreship.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/theatreship.co.uk) |
| The Bath House | [`thebathhouse.co`](https://github.com/clusterflick/data-calendar/releases/latest/download/thebathhouse.co) |
| The Castle Cinema | [`thecastlecinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecastlecinema.com) |
| The Cinema at Selfridges | [`thecinemaatselfridges.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecinemaatselfridges.com) |
| The Cinema in the Power Station (and the Arches) | [`thecinemainthepowerstation.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecinemainthepowerstation.com) |
| The Divine | [`thedivine.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thedivine.co.uk) |
| The Exhibit | [`theexhibit.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/theexhibit.co.uk) |
| The Garden Cinema | [`thegardencinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thegardencinema.co.uk) |
| The Green | [`thegreennunhead.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/thegreennunhead.org) |
| The Hammond Theatre | [`thehammondtheatre.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehammondtheatre.co.uk) |
| The Hen & Chickens Theatre Bar | [`thehenandchickenstheatrebar.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehenandchickenstheatrebar.co.uk) |
| The Horse Hospital | [`thehorsehospital.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehorsehospital.com) |
| The Lexi Cinema | [`thelexicinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thelexicinema.co.uk) |
| The London Archives | [`thelondonarchives.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/thelondonarchives.org) |
| May Fair Theatre | [`themayfairhotel.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/themayfairhotel.co.uk) |
| The Nickel | [`thenickel.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thenickel.co.uk) |
| The RSA | [`thersa.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/thersa.org) |
| Thomas Wall Centre | [`thethomaswallcentre.harleystreethypnosis.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thethomaswallcentre.harleystreethypnosis.co.uk) |
| The Wilds at Barking Riverside | [`thewildsbarkingriverside.london`](https://github.com/clusterflick/data-calendar/releases/latest/download/thewildsbarkingriverside.london) |
| The Exchange at W9 | [`thexchange.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thexchange.org.uk) |
| Triangle LGBTQ+ Cultural Centre | [`triangledeptford.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/triangledeptford.org) |
| UCL Bentham House | [`ucl.ac.uk-bentham-house`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-bentham-house) |
| UCL School of Slavonic and East European Studies | [`ucl.ac.uk-ssees`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-ssees) |
| UCL East Community Cinema | [`ucl.ac.uk-ucl-east-community-cinema`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-ucl-east-community-cinema) |
| The Source | [`uel.ac.uk-the-source`](https://github.com/clusterflick/data-calendar/releases/latest/download/uel.ac.uk-the-source) |
| University Square Stratford | [`uel.ac.uk-univeristy-square-stratford`](https://github.com/clusterflick/data-calendar/releases/latest/download/uel.ac.uk-univeristy-square-stratford) |
| KEF Music Gallery London | [`uk.kef.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/uk.kef.com) |
| Vagina Museum | [`vaginamuseum.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/vaginamuseum.co.uk) |
| Waltham Forest Town Hall | [`walthamforest.gov.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/walthamforest.gov.uk) |
| Whitechapel Gallery | [`whitechapelgallery.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/whitechapelgallery.org) |
| The Wiener Holocaust Library | [`wienerholocaustlibrary.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/wienerholocaustlibrary.org) |
| William The Fourth | [`william-the-fourth.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/william-the-fourth.com) |
| not/nowhere | [`not-nowhere.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/not-nowhere.org) |
| The Refinery Citypoint | [`drakeandmorgan.co.uk-the-refinery-citypoint`](https://github.com/clusterflick/data-calendar/releases/latest/download/drakeandmorgan.co.uk-the-refinery-citypoint) |
| The Moniker | [`drakeandmorgan.co.uk-the-moniker`](https://github.com/clusterflick/data-calendar/releases/latest/download/drakeandmorgan.co.uk-the-moniker) |
| Parlour | [`parlourkensal.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/parlourkensal.com) |
| The Vine | [`thevinenw5.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thevinenw5.co.uk) |

## Schedule

The workflow is automatically triggered when the
[data transformation workflow](https://github.com/clusterflick/data-transformed)
completes successfully. It can also be triggered manually via workflow dispatch
if needed.

## Maintenance

### Dependencies

The workflow requires a GitHub secret:

- `PAT` - Personal Access Token for downloading releases from other repositories
