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

There are currently 302 supported venues. The calendar filename for each venue
is listed below and can be used with the download URL pattern above.

| Venue | Calendar File |
| --- | --- |
| 229 | [`229.london`](https://github.com/clusterflick/data-calendar/releases/latest/download/229.london) |
| ActOne Cinema | [`actonecinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/actonecinema.co.uk) |
| Adventure Cinema Kew Gardens | [`adventurecinema.co.uk-kew-gardens`](https://github.com/clusterflick/data-calendar/releases/latest/download/adventurecinema.co.uk-kew-gardens) |
| Aga Khan Centre | [`agakhancentre.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/agakhancentre.org.uk) |
| All is Joy Studios | [`allisjoysoho.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/allisjoysoho.com) |
| All Saints Church | [`allsaintsislington.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/allsaintsislington.org) |
| Art'otel London Hoxton | [`artotel.com-hoxton`](https://github.com/clusterflick/data-calendar/releases/latest/download/artotel.com-hoxton) |
| ArtHouse Crouch End | [`arthousecrouchend.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/arthousecrouchend.co.uk) |
| Austrian Cultural Forum London | [`acflondon.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/acflondon.org) |
| Backyard Cinema | [`backyardcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/backyardcinema.co.uk) |
| Beer Merchants Tap | [`beermerchantstap.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/beermerchantstap.com) |
| BFI IMAX | [`bfi.org.uk-imax`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-imax) |
| BFI Southbank | [`bfi.org.uk-southbank`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-southbank) |
| BFI Stephen Street | [`bfi.org.uk-stephen-street`](https://github.com/clusterflick/data-calendar/releases/latest/download/bfi.org.uk-stephen-street) |
| Birkbeck Central | [`bbk.ac.uk-central`](https://github.com/clusterflick/data-calendar/releases/latest/download/bbk.ac.uk-central) |
| Birkbeck Cinema | [`bbk.ac.uk-cinema`](https://github.com/clusterflick/data-calendar/releases/latest/download/bbk.ac.uk-cinema) |
| BLOC Cinema | [`qmul.ac.uk-bloc`](https://github.com/clusterflick/data-calendar/releases/latest/download/qmul.ac.uk-bloc) |
| Bloomsbury Central Baptist Church | [`bloomsbury.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/bloomsbury.org.uk) |
| Boxpark Wembley | [`boxpark.co.uk-wembley`](https://github.com/clusterflick/data-calendar/releases/latest/download/boxpark.co.uk-wembley) |
| Caledonian Park Clock Tower | [`callypark.london`](https://github.com/clusterflick/data-calendar/releases/latest/download/callypark.london) |
| Canary Wharf Summer Screens | [`canarywharf.com-summer-screens`](https://github.com/clusterflick/data-calendar/releases/latest/download/canarywharf.com-summer-screens) |
| Casa Lavanda | [`instagram.com-casalavandauk`](https://github.com/clusterflick/data-calendar/releases/latest/download/instagram.com-casalavandauk) |
| Castlehaven Community Cinema | [`castlehaven.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/castlehaven.org.uk) |
| Chadwell Heath Community Centre | [`chcc.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/chcc.org.uk) |
| Christ Church Spitalfields | [`spitalfields.church`](https://github.com/clusterflick/data-calendar/releases/latest/download/spitalfields.church) |
| Ciné Lumière | [`institut-francais.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/institut-francais.org.uk) |
| Ciné-Real | [`cine-real.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/cine-real.com) |
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
| Clapham Picturehouse | [`picturehouses.com-clapham`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-clapham) |
| Close-Up Film Centre | [`closeupfilmcentre.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/closeupfilmcentre.com) |
| Coldharbour Blue | [`coldharbourblue.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/coldharbourblue.com) |
| Courthouse Hotel Shoreditch | [`courthouse-hotel.com-shoreditch`](https://github.com/clusterflick/data-calendar/releases/latest/download/courthouse-hotel.com-shoreditch) |
| Courthouse Hotel Soho | [`courthouse-hotel.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/courthouse-hotel.com-soho) |
| Crossroads Women's Centre | [`crossroadswomen.net`](https://github.com/clusterflick/data-calendar/releases/latest/download/crossroadswomen.net) |
| Crouch End Picturehouse | [`picturehouses.com-crouch-end`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-crouch-end) |
| Croydon Sports Arena | [`better.org.uk-croydon-sports-arena`](https://github.com/clusterflick/data-calendar/releases/latest/download/better.org.uk-croydon-sports-arena) |
| Curzon Aldgate | [`curzon.com-aldgate`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-aldgate) |
| Curzon Bloomsbury | [`curzon.com-bloomsbury`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-bloomsbury) |
| Curzon Camden | [`curzon.com-camden`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-camden) |
| Curzon Hoxton | [`curzon.com-hoxton`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-hoxton) |
| Curzon Kingston | [`curzon.com-kingston`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-kingston) |
| Curzon Mayfair | [`curzon.com-mayfair`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-mayfair) |
| Curzon Richmond | [`curzon.com-richmond`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-richmond) |
| Curzon Sea Containers | [`curzonseacontainers.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzonseacontainers.com) |
| Curzon Soho | [`curzon.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-soho) |
| Curzon Victoria | [`curzon.com-victoria`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-victoria) |
| Curzon Wimbledon | [`curzon.com-wimbledon`](https://github.com/clusterflick/data-calendar/releases/latest/download/curzon.com-wimbledon) |
| Czech Centre | [`london.czechcentres.cz`](https://github.com/clusterflick/data-calendar/releases/latest/download/london.czechcentres.cz) |
| Dalston Superstore | [`dalstonsuperstore.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/dalstonsuperstore.com) |
| Deptford Lounge | [`lewisham.gov.uk-deptford-lounge`](https://github.com/clusterflick/data-calendar/releases/latest/download/lewisham.gov.uk-deptford-lounge) |
| Dolby Screening Room Soho | [`professional.dolby.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/professional.dolby.com-soho) |
| Dugdale Arts Centre | [`dugdaleartscentre.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/dugdaleartscentre.co.uk) |
| Ealing Picturehouse | [`picturehouses.com-ealing`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-ealing) |
| East Dulwich Picturehouse & Cafe | [`picturehouses.com-east-dulwich`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-east-dulwich) |
| Electric Cinema Portobello | [`electriccinema.co.uk-portobello`](https://github.com/clusterflick/data-calendar/releases/latest/download/electriccinema.co.uk-portobello) |
| Electric Cinema White City | [`electriccinema.co.uk-white-city`](https://github.com/clusterflick/data-calendar/releases/latest/download/electriccinema.co.uk-white-city) |
| Eventim Apollo | [`eventimapollo.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/eventimapollo.com) |
| Everyman at The Whiteley | [`everymancinema.com-the-whiteley`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-the-whiteley) |
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
| Everyman on the Canal at King's Cross | [`everymancinema.com-everyman-on-the-canal-at-kings-cross`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-everyman-on-the-canal-at-kings-cross) |
| Everyman Screen on the Green | [`everymancinema.com-screen-on-the-green`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-screen-on-the-green) |
| Everyman Stratford International | [`everymancinema.com-stratford-international`](https://github.com/clusterflick/data-calendar/releases/latest/download/everymancinema.com-stratford-international) |
| Feltham Park | [`hounslow.gov.uk-feltham-park`](https://github.com/clusterflick/data-calendar/releases/latest/download/hounslow.gov.uk-feltham-park) |
| Fen Court | [`fen-court.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/fen-court.com) |
| Finch Community Cinema | [`finchcafe.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/finchcafe.co.uk) |
| Finsbury Park Picturehouse | [`picturehouses.com-finsbury-park`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-finsbury-park) |
| Firmdale Charlotte Street Hotel | [`firmdalehotels.com-charlotte-street`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-charlotte-street) |
| Firmdale Covent Garden Hotel | [`firmdalehotels.com-covent-garden`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-covent-garden) |
| Firmdale The Soho Hotel | [`firmdalehotels.com-soho`](https://github.com/clusterflick/data-calendar/releases/latest/download/firmdalehotels.com-soho) |
| Freud Museum London | [`freud.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/freud.org.uk) |
| Frontline Club | [`frontlineclub.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/frontlineclub.com) |
| Fulham Pier | [`fulhampier.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/fulhampier.com) |
| Galleria Objets | [`objetstrouves.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/objetstrouves.co.uk) |
| Genesis Cinema | [`genesiscinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/genesiscinema.co.uk) |
| Goethe-Institut London | [`goethe.de`](https://github.com/clusterflick/data-calendar/releases/latest/download/goethe.de) |
| Goldsmiths | [`gold.ac.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/gold.ac.uk) |
| Good Hotel London | [`goodhotel.co-london`](https://github.com/clusterflick/data-calendar/releases/latest/download/goodhotel.co-london) |
| Good Shepherd Studios | [`goodshepherdstudios.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/goodshepherdstudios.com) |
| Goodenough College | [`goodenough.ac.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/goodenough.ac.uk) |
| Greenwich Picturehouse | [`picturehouses.com-greenwich`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-greenwich) |
| Hackney Picturehouse | [`picturehouses.com-hackney`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-hackney) |
| Hackney Showroom | [`hackneyshowroom.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/hackneyshowroom.com) |
| Hausu | [`hausulondon.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/hausulondon.co.uk) |
| Heston Park | [`hounslow.gov.uk-heston-park`](https://github.com/clusterflick/data-calendar/releases/latest/download/hounslow.gov.uk-heston-park) |
| Hypha Studio Kentish Town | [`hyphastudios.com-kentish-town`](https://github.com/clusterflick/data-calendar/releases/latest/download/hyphastudios.com-kentish-town) |
| Imperial College London | [`imperial.ac.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/imperial.ac.uk) |
| Institute of Contemporary Arts | [`ica.art`](https://github.com/clusterflick/data-calendar/releases/latest/download/ica.art) |
| Irish Cultural Centre | [`irishculturalcentre.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/irishculturalcentre.co.uk) |
| Islington Museum | [`islington.gov.uk-islington-museum`](https://github.com/clusterflick/data-calendar/releases/latest/download/islington.gov.uk-islington-museum) |
| Japan House London | [`japanhouselondon.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/japanhouselondon.uk) |
| JOIA | [`artotel.com-battersea-power-station`](https://github.com/clusterflick/data-calendar/releases/latest/download/artotel.com-battersea-power-station) |
| JW3 | [`jw3.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/jw3.org.uk) |
| Karma Sanctum Soho Hotel | [`sanctumsoho.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/sanctumsoho.com) |
| KEF Music Gallery London | [`uk.kef.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/uk.kef.com) |
| Kensington Central Library | [`rbkc.gov.uk-kensington-central-library`](https://github.com/clusterflick/data-calendar/releases/latest/download/rbkc.gov.uk-kensington-central-library) |
| Kanaloa House | [`kanaloa.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/kanaloa.org) |
| KERB Social Club | [`kerbsocialclub.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/kerbsocialclub.com) |
| Kiln Theatre | [`kilntheatre.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/kilntheatre.com) |
| Kingsley Hall Church & Community Centre | [`khccc.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/khccc.com) |
| Langley Park FILMBOX | [`langleyfilmbox.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/langleyfilmbox.com) |
| Lanzarote Works | [`lanzaroteworks.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/lanzaroteworks.com) |
| Liszt Institute | [`culture.hu-london`](https://github.com/clusterflick/data-calendar/releases/latest/download/culture.hu-london) |
| Little Nan's 2.0 | [`littlenans.co.uk-2-0`](https://github.com/clusterflick/data-calendar/releases/latest/download/littlenans.co.uk-2-0) |
| London Welsh Centre | [`londonwelsh.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/londonwelsh.org) |
| Lower Marsh | [`lowermarshmarket.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/lowermarshmarket.com) |
| Lumiere Cinema Romford | [`lumiereromford.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/lumiereromford.com) |
| LUX | [`lux.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/lux.org.uk) |
| Maida Vale Library | [`westminster.gov.uk-maida-vale-library`](https://github.com/clusterflick/data-calendar/releases/latest/download/westminster.gov.uk-maida-vale-library) |
| Mason & Fifth | [`mason-fifth.com-westbourne-park`](https://github.com/clusterflick/data-calendar/releases/latest/download/mason-fifth.com-westbourne-park) |
| May Fair Theatre | [`themayfairhotel.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/themayfairhotel.co.uk) |
| Metro Cinema | [`metrocinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/metrocinema.co.uk) |
| Metroland Studios | [`metrolandcultures.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/metrolandcultures.com) |
| MOTH Club | [`mothclub.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/mothclub.co.uk) |
| Museum of the Home | [`museumofthehome.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/museumofthehome.org.uk) |
| My Heathway | [`myheathway.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/myheathway.com) |
| New Cross Inn | [`newcrossinn.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/newcrossinn.com) |
| Newington Green Meeting House | [`newingtongreenmeetinghouse.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/newingtongreenmeetinghouse.org.uk) |
| not/nowhere | [`not-nowhere.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/not-nowhere.org) |
| ODEON Beckenham | [`odeon.co.uk-beckenham`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-beckenham) |
| ODEON Greenwich | [`odeon.co.uk-greenwich`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-greenwich) |
| ODEON Kingston | [`odeon.co.uk-kingston`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-kingston) |
| ODEON Luxe & Dine Islington | [`odeon.co.uk-islington`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-islington) |
| ODEON Luxe Acton | [`odeon.co.uk-acton`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-acton) |
| ODEON Luxe Haymarket | [`odeon.co.uk-haymarket`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-haymarket) |
| ODEON Luxe Holloway | [`odeon.co.uk-holloway`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-holloway) |
| ODEON Luxe Lee Valley | [`odeon.co.uk-lee-valley`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-lee-valley) |
| ODEON Luxe Leicester Square | [`odeon.co.uk-leicester-square`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-leicester-square) |
| ODEON Luxe Putney | [`odeon.co.uk-putney`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-putney) |
| ODEON Luxe Swiss Cottage | [`odeon.co.uk-swiss-cottage`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-swiss-cottage) |
| ODEON Luxe Uxbridge | [`odeon.co.uk-uxbridge`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-uxbridge) |
| ODEON Luxe West End | [`odeon.co.uk-west-end`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-west-end) |
| ODEON Orpington | [`odeon.co.uk-orpington`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-orpington) |
| ODEON Richmond | [`odeon.co.uk-richmond`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-richmond) |
| ODEON South Woodford | [`odeon.co.uk-south-woodford`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-south-woodford) |
| ODEON Streatham | [`odeon.co.uk-streatham`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-streatham) |
| ODEON Tottenham Court Road | [`odeon.co.uk-tottenham-court-road`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-tottenham-court-road) |
| ODEON Wimbledon | [`odeon.co.uk-wimbledon`](https://github.com/clusterflick/data-calendar/releases/latest/download/odeon.co.uk-wimbledon) |
| Omniplex Sutton | [`omniplex.co.uk-sutton`](https://github.com/clusterflick/data-calendar/releases/latest/download/omniplex.co.uk-sutton) |
| Otter Chaos | [`otterchaos.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/otterchaos.co.uk) |
| Parkside Community Centre | [`parksideca.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/parksideca.org.uk) |
| Parlour | [`parlourkensal.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/parlourkensal.com) |
| Peckham Levels | [`peckhamlevels.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/peckhamlevels.org) |
| Peckhamplex | [`peckhamplex.london`](https://github.com/clusterflick/data-calendar/releases/latest/download/peckhamplex.london) |
| Pelican House | [`pelicanhouse.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/pelicanhouse.org) |
| Phoenix Cinema | [`phoenixcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/phoenixcinema.co.uk) |
| Phonica Records | [`phonicarecords.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/phonicarecords.com) |
| Picturehouse Central | [`picturehouses.com-central`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-central) |
| Piehouse Co-Op | [`piehousecoop.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/piehousecoop.co.uk) |
| Prince Charles Cinema | [`princecharlescinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/princecharlescinema.com) |
| Prince of Peckham | [`princeofpeckham.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/princeofpeckham.co.uk) |
| RCA Battersea | [`rca.ac.uk-battersea`](https://github.com/clusterflick/data-calendar/releases/latest/download/rca.ac.uk-battersea) |
| RCA Kensington | [`rca.ac.uk-kensington`](https://github.com/clusterflick/data-calendar/releases/latest/download/rca.ac.uk-kensington) |
| Regent Street Cinema | [`regentstreetcinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/regentstreetcinema.com) |
| Rich Mix | [`richmix.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/richmix.org.uk) |
| Rio Cinema | [`riocinema.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/riocinema.org.uk) |
| Riverside Studios | [`riversidestudios.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/riversidestudios.co.uk) |
| Rivoli Ballroom | [`rivoliballroom.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/rivoliballroom.com) |
| Rons Coffee House | [`ronspeckham.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/ronspeckham.com) |
| Rooftop Cinema Club Peckham | [`rooftopcinemaclub.com-peckham`](https://github.com/clusterflick/data-calendar/releases/latest/download/rooftopcinemaclub.com-peckham) |
| Rooftop Cinema Club Stratford | [`rooftopcinemaclub.com-stratford`](https://github.com/clusterflick/data-calendar/releases/latest/download/rooftopcinemaclub.com-stratford) |
| Rosetta Arts | [`rosettaarts.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/rosettaarts.org) |
| Rosslyn Hill Chapel | [`rosslynhillchapel.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/rosslynhillchapel.org.uk) |
| Royal Albert Hall | [`royalalberthall.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/royalalberthall.com) |
| Sands Films Cinema | [`sandsfilms.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sandsfilms.co.uk) |
| Science Museum | [`sciencemuseum.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sciencemuseum.org.uk) |
| SCRT | [`scrt.onl`](https://github.com/clusterflick/data-calendar/releases/latest/download/scrt.onl) |
| SET Social | [`setspace.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/setspace.uk) |
| Shai Space | [`shaispace.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/shaispace.com) |
| Signature Brewery | [`signaturebrew.co.uk-blackhorseroad`](https://github.com/clusterflick/data-calendar/releases/latest/download/signaturebrew.co.uk-blackhorseroad) |
| Siobhan Davies Studios | [`siobhandavies.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/siobhandavies.com) |
| South London Gallery | [`southlondongallery.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/southlondongallery.org) |
| St Barnabas Church | [`stbarnabas-southfields.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/stbarnabas-southfields.org.uk) |
| St Lawrence Jewry | [`stlawrencejewry.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/stlawrencejewry.org.uk) |
| St Matthias Church | [`stmchurch.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/stmchurch.co.uk) |
| Stanley Arts | [`stanleyarts.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/stanleyarts.org) |
| Strand Building | [`kcl.ac.uk-strand`](https://github.com/clusterflick/data-calendar/releases/latest/download/kcl.ac.uk-strand) |
| Strongroom Bar | [`strongroombar.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/strongroombar.com) |
| Subtitle Cinema | [`scarlettmalone.com-subtitlecinema`](https://github.com/clusterflick/data-calendar/releases/latest/download/scarlettmalone.com-subtitlecinema) |
| Sydenham Arts | [`sydenhamarts.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sydenhamarts.co.uk) |
| Tate Britain | [`tate.org.uk-tate-britain`](https://github.com/clusterflick/data-calendar/releases/latest/download/tate.org.uk-tate-britain) |
| Tate Modern | [`tate.org.uk-tate-modern`](https://github.com/clusterflick/data-calendar/releases/latest/download/tate.org.uk-tate-modern) |
| Telegraph Hill Centre | [`thcentre.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thcentre.com) |
| The 1850 | [`stmarys.ac.uk-the-1850`](https://github.com/clusterflick/data-calendar/releases/latest/download/stmarys.ac.uk-the-1850) |
| The Arzner | [`thearzner.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thearzner.com) |
| The Barbican | [`barbican.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/barbican.org.uk) |
| The Bath House | [`thebathhouse.co`](https://github.com/clusterflick/data-calendar/releases/latest/download/thebathhouse.co) |
| The Beehive Pub | [`beehiven17.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/beehiven17.com) |
| The Bill Murray | [`angelcomedy.co.uk-bill-murray`](https://github.com/clusterflick/data-calendar/releases/latest/download/angelcomedy.co.uk-bill-murray) |
| The Black Cultural Centre Islington | [`islington.gov.uk-black-cultural-centre`](https://github.com/clusterflick/data-calendar/releases/latest/download/islington.gov.uk-black-cultural-centre) |
| The Boathouse Studios | [`boathousebarkingstudios.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/boathousebarkingstudios.com) |
| The Castle Cinema | [`thecastlecinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecastlecinema.com) |
| The Castle Sidcup | [`castlesidcup.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/castlesidcup.com) |
| The Cave | [`contactthecaveldn.wixsite.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/contactthecaveldn.wixsite.com) |
| The Chiswick Cinema | [`chiswickcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/chiswickcinema.co.uk) |
| The Cinema at Selfridges | [`thecinemaatselfridges.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecinemaatselfridges.com) |
| The Cinema in the Power Station (and the Arches) | [`thecinemainthepowerstation.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thecinemainthepowerstation.com) |
| The Cinema Museum | [`cinemamuseum.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/cinemamuseum.org.uk) |
| The Clapham Grand | [`claphamgrand.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/claphamgrand.com) |
| The Common Press Shoreditch | [`commonpress.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/commonpress.co.uk) |
| The David Lean Cinema | [`davidleancinema.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/davidleancinema.org.uk) |
| The Divine | [`thedivine.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thedivine.co.uk) |
| The Drum Labs | [`labs.thedrum.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/labs.thedrum.com) |
| The Eagle Hoxton | [`theeaglehoxton.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/theeaglehoxton.co.uk) |
| The Etcetera Theatre | [`etceteratheatrecamden.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/etceteratheatrecamden.com) |
| The Exchange at W9 | [`thexchange.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thexchange.org.uk) |
| The Exchange Twickenham | [`exchangetwickenham.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/exchangetwickenham.co.uk) |
| The Exhibit | [`theexhibit.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/theexhibit.co.uk) |
| The Fellowship Cinema | [`fellowshipinn.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/fellowshipinn.co.uk) |
| The Feminist Library | [`feministlibrary.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/feministlibrary.co.uk) |
| The Forest Cinema | [`forestcinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/forestcinema.co.uk) |
| The Foundry | [`aplaceforchange.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/aplaceforchange.co.uk) |
| The Francis Crick Institute | [`crick.ac.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/crick.ac.uk) |
| The Garden Cinema | [`thegardencinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thegardencinema.co.uk) |
| The Gate Picturehouse | [`picturehouses.com-the-gate`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-the-gate) |
| The Green | [`thegreennunhead.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/thegreennunhead.org) |
| The Green House | [`ethicalproperty.co.uk-the-green-house`](https://github.com/clusterflick/data-calendar/releases/latest/download/ethicalproperty.co.uk-the-green-house) |
| The Guild Church of St Katharine Cree | [`stkatharinecree.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/stkatharinecree.org) |
| The Haggerston | [`facebook.com-thehaggerston`](https://github.com/clusterflick/data-calendar/releases/latest/download/facebook.com-thehaggerston) |
| The Hammond Theatre | [`thehammondtheatre.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehammondtheatre.co.uk) |
| The Hen & Chickens Theatre Bar | [`thehenandchickenstheatrebar.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehenandchickenstheatrebar.co.uk) |
| The Horse Hospital | [`thehorsehospital.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/thehorsehospital.com) |
| The Ivy House | [`ivyhousenunhead.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/ivyhousenunhead.com) |
| The Lexi Cinema | [`thelexicinema.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thelexicinema.co.uk) |
| The Leyton Engineer | [`theleytonengineer.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/theleytonengineer.co.uk) |
| The London Archives | [`thelondonarchives.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/thelondonarchives.org) |
| The London Art Bar | [`londonartbar.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/londonartbar.com) |
| The Moniker | [`drakeandmorgan.co.uk-the-moniker`](https://github.com/clusterflick/data-calendar/releases/latest/download/drakeandmorgan.co.uk-the-moniker) |
| The Nest | [`thamesmeadnow.org.uk-the-nest`](https://github.com/clusterflick/data-calendar/releases/latest/download/thamesmeadnow.org.uk-the-nest) |
| The Nickel | [`thenickel.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thenickel.co.uk) |
| The Olympic Cinema | [`olympiccinema.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/olympiccinema.com) |
| The Others | [`theothers.uk.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/theothers.uk.com) |
| The Private Cinema | [`bulgarihotels.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/bulgarihotels.com) |
| The Refinery Citypoint | [`drakeandmorgan.co.uk-the-refinery-citypoint`](https://github.com/clusterflick/data-calendar/releases/latest/download/drakeandmorgan.co.uk-the-refinery-citypoint) |
| The Ritzy Picturehouse | [`picturehouses.com-the-ritzy`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-the-ritzy) |
| The Rocketvan Coffee Shop and The Box Shop Bar | [`rocketvan.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/rocketvan.co.uk) |
| The RSA | [`thersa.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/thersa.org) |
| The Soho Screening Rooms | [`sohoscreeningrooms.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/sohoscreeningrooms.co.uk) |
| The Source | [`uel.ac.uk-the-source`](https://github.com/clusterflick/data-calendar/releases/latest/download/uel.ac.uk-the-source) |
| The Tate Institute | [`reinstate.info`](https://github.com/clusterflick/data-calendar/releases/latest/download/reinstate.info) |
| The Vine | [`thevinenw5.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thevinenw5.co.uk) |
| The Wanstead Curtain | [`wansteadfringe.org-the-wanstead-curtain`](https://github.com/clusterflick/data-calendar/releases/latest/download/wansteadfringe.org-the-wanstead-curtain) |
| The Wiener Holocaust Library | [`wienerholocaustlibrary.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/wienerholocaustlibrary.org) |
| The Wilds at Barking Riverside | [`thewildsbarkingriverside.london`](https://github.com/clusterflick/data-calendar/releases/latest/download/thewildsbarkingriverside.london) |
| The Writers' Room | [`writersroom.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/writersroom.org.uk) |
| Theatreship | [`theatreship.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/theatreship.co.uk) |
| Thomas Wall Centre | [`thethomaswallcentre.harleystreethypnosis.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/thethomaswallcentre.harleystreethypnosis.co.uk) |
| Thornbury Playing Fields | [`hounslow.gov.uk-thornbury-playing-fields`](https://github.com/clusterflick/data-calendar/releases/latest/download/hounslow.gov.uk-thornbury-playing-fields) |
| Triangle LGBTQ+ Cultural Centre | [`triangledeptford.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/triangledeptford.org) |
| UCL Bentham House | [`ucl.ac.uk-bentham-house`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-bentham-house) |
| UCL East Community Cinema | [`ucl.ac.uk-ucl-east-community-cinema`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-ucl-east-community-cinema) |
| UCL School of Slavonic and East European Studies | [`ucl.ac.uk-ssees`](https://github.com/clusterflick/data-calendar/releases/latest/download/ucl.ac.uk-ssees) |
| University Square Stratford | [`uel.ac.uk-univeristy-square-stratford`](https://github.com/clusterflick/data-calendar/releases/latest/download/uel.ac.uk-univeristy-square-stratford) |
| Vagina Museum | [`vaginamuseum.co.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/vaginamuseum.co.uk) |
| Vauxhall Pleasure Gardens | [`lambeth.gov.uk-vauxhall-pleasure-gardens`](https://github.com/clusterflick/data-calendar/releases/latest/download/lambeth.gov.uk-vauxhall-pleasure-gardens) |
| Vue Bromley | [`myvue.com-bromley`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-bromley) |
| Vue Croydon Purley Way | [`myvue.com-croydon-purley-way`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-croydon-purley-way) |
| Vue Dagenham | [`myvue.com-dagenham`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-dagenham) |
| Vue Eltham | [`myvue.com-eltham`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-eltham) |
| Vue Finchley Road | [`myvue.com-finchley-road`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-finchley-road) |
| Vue Fulham Broadway | [`myvue.com-fulham-broadway`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-fulham-broadway) |
| Vue Harrow | [`myvue.com-harrow`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-harrow) |
| Vue Islington | [`myvue.com-islington`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-islington) |
| Vue North Finchley | [`myvue.com-north-finchley`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-north-finchley) |
| Vue Piccadilly | [`myvue.com-piccadilly`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-piccadilly) |
| Vue Romford | [`myvue.com-romford`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-romford) |
| Vue Shepherd's Bush | [`myvue.com-shepherds-bush`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-shepherds-bush) |
| Vue West End | [`myvue.com-leicester-square`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-leicester-square) |
| Vue Westfield London | [`myvue.com-westfield`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-westfield) |
| Vue Westfield Stratford | [`myvue.com-westfield-stratford-city`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-westfield-stratford-city) |
| Vue Wood Green | [`myvue.com-wood-green`](https://github.com/clusterflick/data-calendar/releases/latest/download/myvue.com-wood-green) |
| W London | [`marriott.com-w-london`](https://github.com/clusterflick/data-calendar/releases/latest/download/marriott.com-w-london) |
| Waltham Forest Town Hall | [`walthamforest.gov.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/walthamforest.gov.uk) |
| Walthamstow Trades Hall | [`walthamstowtradeshall.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/walthamstowtradeshall.com) |
| West Norwood Library & Picturehouse | [`picturehouses.com-west-norwood`](https://github.com/clusterflick/data-calendar/releases/latest/download/picturehouses.com-west-norwood) |
| Whitechapel Gallery | [`whitechapelgallery.org`](https://github.com/clusterflick/data-calendar/releases/latest/download/whitechapelgallery.org) |
| William The Fourth | [`william-the-fourth.com`](https://github.com/clusterflick/data-calendar/releases/latest/download/william-the-fourth.com) |
| Wilton's Music Hall | [`wiltons.org.uk`](https://github.com/clusterflick/data-calendar/releases/latest/download/wiltons.org.uk) |
| Women's Museum | [`newtownculture.org-womens-museum`](https://github.com/clusterflick/data-calendar/releases/latest/download/newtownculture.org-womens-museum) |
| WPP Sea Containers Campus | [`wpp.com-sea-containers`](https://github.com/clusterflick/data-calendar/releases/latest/download/wpp.com-sea-containers) |

## Schedule

The workflow is automatically triggered when the
[data transformation workflow](https://github.com/clusterflick/data-transformed)
completes successfully. It can also be triggered manually via workflow dispatch
if needed.

## Maintenance

### Dependencies

The workflow requires a GitHub secret:

- `PAT` - Personal Access Token for downloading releases from other repositories
