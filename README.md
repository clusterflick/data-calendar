# data-calendar

This repository contains the automated workflow for generating calendar feeds
from cinema data for the Clusterflick project.

## Purpose

The calendar workflow processes combined cinema data and generates ICS
(iCalendar) format files for each venue. These calendar feeds allow users to
subscribe to cinema schedules and receive automatic updates about upcoming
screenings.

## How It Works

The workflow downloads the latest combined data and executes a calendar
generation script:

```bash
npm run generate-calendar
```

This script:

- Reads the combined cinema data and groups every performance by its venue
- Extracts screening information (title, time, location, description)
- Determines event duration (defaults to 90 minutes, or 6 hours for marathons)
- Includes movie metadata when available (cast, director, classification)
- Generates ICS calendar files with proper formatting
- Outputs calendar files for each venue

Each calendar event includes:

- Movie title and screening time
- A link to the film's page on [clusterflick.com](https://clusterflick.com),
  which lists every screening of it across London
- Venue name, screen number, and address
- Film classification and duration
- Cast and director information
- Booking URL and additional notes
- Movie Database link when available

The slug in that link is built with `@sindresorhus/slugify`, exactly as
[clusterflick.com](https://github.com/clusterflick/clusterflick.com) builds it
for the page itself. Keep the version here in step with the website's: the major
versions differ in how they treat characters like a curly apostrophe, and a slug
that disagrees with the site's is a 404 rather than a redirect.

The combined data is the input rather than the transformed data because the
event link needs the film's page address, and that is built from the id and
title the combine stage settles on. Neither is derivable from a single venue's
transformed listing: an unmatched film is merged with every other venue's
listing of the same title and only one of those titles survives. The website is
a static export, so a URL that is even slightly off is a 404 rather than a
redirect.

## Usage

The calendar feeds are hosted on [clusterflick.com](https://clusterflick.com).
You can subscribe to any venue's calendar using its URL:

```
https://clusterflick.com/datasets/calendars/<venue-id>.ics
```

Replace `<venue-id>` with the id of the venue you want to follow (e.g.
`princecharlescinema.com`). Each venue's page on clusterflick.com also links to
its feed.

The feeds are still published as assets on each
[GitHub release](https://github.com/clusterflick/data-calendar/releases), named
after the venue id with no extension, and clusterflick.com is built from them.
Existing subscriptions to
`https://github.com/clusterflick/data-calendar/releases/latest/download/<venue-id>`
keep working, but the clusterflick.com URL is the one to use: it isn't subject
to GitHub's rate limits, and it's the same feed the site's own calendar pages
load.

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

There are currently 479 supported venues. Each venue's id is listed below,
linked to its calendar feed.

| Venue                                            | Calendar File                                                                                                                                                        |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 229                                              | [`229.london`](https://clusterflick.com/datasets/calendars/229.london.ics)                                                                                           |
| ActOne Cinema                                    | [`actonecinema.co.uk`](https://clusterflick.com/datasets/calendars/actonecinema.co.uk.ics)                                                                           |
| Adventure Cinema Kew Gardens                     | [`adventurecinema.co.uk-kew-gardens`](https://clusterflick.com/datasets/calendars/adventurecinema.co.uk-kew-gardens.ics)                                             |
| Aga Khan Centre                                  | [`agakhancentre.org.uk`](https://clusterflick.com/datasets/calendars/agakhancentre.org.uk.ics)                                                                       |
| Alexandra Palace Theatre                         | [`alexandrapalace.com`](https://clusterflick.com/datasets/calendars/alexandrapalace.com.ics)                                                                         |
| Algha's Plantroom                                | [`plantroom.space`](https://clusterflick.com/datasets/calendars/plantroom.space.ics)                                                                                 |
| All is Joy Studios                               | [`allisjoysoho.com`](https://clusterflick.com/datasets/calendars/allisjoysoho.com.ics)                                                                               |
| All Saints Church                                | [`allsaintsislington.org`](https://clusterflick.com/datasets/calendars/allsaintsislington.org.ics)                                                                   |
| All Saints Kingston                              | [`allsaintskingston.co.uk`](https://clusterflick.com/datasets/calendars/allsaintskingston.co.uk.ics)                                                                 |
| AMP Studios                                      | [`ampstudios.co.uk`](https://clusterflick.com/datasets/calendars/ampstudios.co.uk.ics)                                                                               |
| Angel Community Centre                           | [`enfield.gov.uk-angel-community-centre`](https://clusterflick.com/datasets/calendars/enfield.gov.uk-angel-community-centre.ics)                                     |
| Anomalous Space                                  | [`anomalous.co.uk`](https://clusterflick.com/datasets/calendars/anomalous.co.uk.ics)                                                                                 |
| Armenian Institute                               | [`armenianinstitute.org.uk`](https://clusterflick.com/datasets/calendars/armenianinstitute.org.uk.ics)                                                               |
| Art Hub Studios                                  | [`arthub.org.uk`](https://clusterflick.com/datasets/calendars/arthub.org.uk.ics)                                                                                     |
| Art'otel London Hoxton                           | [`artotel.com-hoxton`](https://clusterflick.com/datasets/calendars/artotel.com-hoxton.ics)                                                                           |
| ArtHouse Crouch End                              | [`arthousecrouchend.co.uk`](https://clusterflick.com/datasets/calendars/arthousecrouchend.co.uk.ics)                                                                 |
| Austrian Cultural Forum London                   | [`acflondon.org`](https://clusterflick.com/datasets/calendars/acflondon.org.ics)                                                                                     |
| Backyard Cinema                                  | [`backyardcinema.co.uk`](https://clusterflick.com/datasets/calendars/backyardcinema.co.uk.ics)                                                                       |
| Batch & Co. Coffee                               | [`powku1.wixsite.com-batchandco`](https://clusterflick.com/datasets/calendars/powku1.wixsite.com-batchandco.ics)                                                     |
| Beer Merchants Tap                               | [`beermerchantstap.com`](https://clusterflick.com/datasets/calendars/beermerchantstap.com.ics)                                                                       |
| Bernie Grant Arts Centre                         | [`berniegrantcentre.co.uk`](https://clusterflick.com/datasets/calendars/berniegrantcentre.co.uk.ics)                                                                 |
| Bethnal Green Nature Reserve                     | [`bethnalgreennaturereserve.org`](https://clusterflick.com/datasets/calendars/bethnalgreennaturereserve.org.ics)                                                     |
| Better Space                                     | [`betterspace.london`](https://clusterflick.com/datasets/calendars/betterspace.london.ics)                                                                           |
| BFI IMAX                                         | [`bfi.org.uk-imax`](https://clusterflick.com/datasets/calendars/bfi.org.uk-imax.ics)                                                                                 |
| BFI Southbank                                    | [`bfi.org.uk-southbank`](https://clusterflick.com/datasets/calendars/bfi.org.uk-southbank.ics)                                                                       |
| BFI Stephen Street                               | [`bfi.org.uk-stephen-street`](https://clusterflick.com/datasets/calendars/bfi.org.uk-stephen-street.ics)                                                             |
| Big Penny Social                                 | [`bigpennysocial.co.uk`](https://clusterflick.com/datasets/calendars/bigpennysocial.co.uk.ics)                                                                       |
| Bird House Brewery                               | [`birdhousebrewing.com`](https://clusterflick.com/datasets/calendars/birdhousebrewing.com.ics)                                                                       |
| Birkbeck Central                                 | [`bbk.ac.uk-central`](https://clusterflick.com/datasets/calendars/bbk.ac.uk-central.ics)                                                                             |
| Birkbeck Cinema                                  | [`bbk.ac.uk-cinema`](https://clusterflick.com/datasets/calendars/bbk.ac.uk-cinema.ics)                                                                               |
| BLOC Cinema                                      | [`qmul.ac.uk-bloc`](https://clusterflick.com/datasets/calendars/qmul.ac.uk-bloc.ics)                                                                                 |
| Blondies Brewery                                 | [`blondiesbar.co.uk-taproom`](https://clusterflick.com/datasets/calendars/blondiesbar.co.uk-taproom.ics)                                                             |
| Bloomsbury Central Baptist Church                | [`bloomsbury.org.uk`](https://clusterflick.com/datasets/calendars/bloomsbury.org.uk.ics)                                                                             |
| Blown Away Studios                               | [`instagram.com-blown-away-studios`](https://clusterflick.com/datasets/calendars/instagram.com-blown-away-studios.ics)                                               |
| Bojangles Brasserie                              | [`wearebojangles.com`](https://clusterflick.com/datasets/calendars/wearebojangles.com.ics)                                                                           |
| Boxpark Wembley                                  | [`boxpark.co.uk-wembley`](https://clusterflick.com/datasets/calendars/boxpark.co.uk-wembley.ics)                                                                     |
| Brenchley Gardens Community Centre               | [`brenchleygardens.co.uk`](https://clusterflick.com/datasets/calendars/brenchleygardens.co.uk.ics)                                                                   |
| Buchan Tenants and Residents Hall                | [`instagram.com-buchanhall`](https://clusterflick.com/datasets/calendars/instagram.com-buchanhall.ics)                                                               |
| Building Centre                                  | [`buildingcentre.co.uk`](https://clusterflick.com/datasets/calendars/buildingcentre.co.uk.ics)                                                                       |
| Bush Theatre                                     | [`bushtheatre.co.uk`](https://clusterflick.com/datasets/calendars/bushtheatre.co.uk.ics)                                                                             |
| Cadogan Hall                                     | [`cadoganhall.com`](https://clusterflick.com/datasets/calendars/cadoganhall.com.ics)                                                                                 |
| Cafe OTO                                         | [`cafeoto.co.uk`](https://clusterflick.com/datasets/calendars/cafeoto.co.uk.ics)                                                                                     |
| Caledonian Park Clock Tower                      | [`callypark.london`](https://clusterflick.com/datasets/calendars/callypark.london.ics)                                                                               |
| Camden Town Hall                                 | [`spaces.townhall.co.uk`](https://clusterflick.com/datasets/calendars/spaces.townhall.co.uk.ics)                                                                     |
| Camouflage Cafe                                  | [`camouflagecafe.co.uk`](https://clusterflick.com/datasets/calendars/camouflagecafe.co.uk.ics)                                                                       |
| Canada Water Library                             | [`southwark.gov.uk-canada-water-library`](https://clusterflick.com/datasets/calendars/southwark.gov.uk-canada-water-library.ics)                                     |
| Canal Film Club                                  | [`instagram.com-canalfilmclub`](https://clusterflick.com/datasets/calendars/instagram.com-canalfilmclub.ics)                                                         |
| Canary Wharf Summer Screens                      | [`canarywharf.com-summer-screens`](https://clusterflick.com/datasets/calendars/canarywharf.com-summer-screens.ics)                                                   |
| Casa Lavanda                                     | [`instagram.com-casalavandauk`](https://clusterflick.com/datasets/calendars/instagram.com-casalavandauk.ics)                                                         |
| Castlehaven Community Cinema                     | [`castlehaven.org.uk`](https://clusterflick.com/datasets/calendars/castlehaven.org.uk.ics)                                                                           |
| Central Film School                              | [`centralfilmschool.com`](https://clusterflick.com/datasets/calendars/centralfilmschool.com.ics)                                                                     |
| Central Saint Martins                            | [`arts.ac.uk-central-saint-martins`](https://clusterflick.com/datasets/calendars/arts.ac.uk-central-saint-martins.ics)                                               |
| Centre 151                                       | [`centre151.com`](https://clusterflick.com/datasets/calendars/centre151.com.ics)                                                                                     |
| Chadwell Heath Community Centre                  | [`chcc.org.uk`](https://clusterflick.com/datasets/calendars/chcc.org.uk.ics)                                                                                         |
| Chestnuts Community Centre                       | [`bridgerenewaltrust.org.uk-chestnuts-community-centre`](https://clusterflick.com/datasets/calendars/bridgerenewaltrust.org.uk-chestnuts-community-centre.ics)       |
| Christ Church Peckham                            | [`christchurchpeckham.org`](https://clusterflick.com/datasets/calendars/christchurchpeckham.org.ics)                                                                 |
| Christ Church Spitalfields                       | [`spitalfields.church`](https://clusterflick.com/datasets/calendars/spitalfields.church.ics)                                                                         |
| Christ Church Surbiton Hill                      | [`ccsurbiton.org`](https://clusterflick.com/datasets/calendars/ccsurbiton.org.ics)                                                                                   |
| Ciné Lumière                                     | [`institut-francais.org.uk`](https://clusterflick.com/datasets/calendars/institut-francais.org.uk.ics)                                                               |
| Ciné-Real                                        | [`cine-real.com`](https://clusterflick.com/datasets/calendars/cine-real.com.ics)                                                                                     |
| Cineworld Bexleyheath                            | [`cineworld.co.uk-bexleyheath`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-bexleyheath.ics)                                                         |
| Cineworld Enfield                                | [`cineworld.co.uk-enfield`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-enfield.ics)                                                                 |
| Cineworld Feltham                                | [`cineworld.co.uk-feltham`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-feltham.ics)                                                                 |
| Cineworld Hounslow                               | [`cineworld.co.uk-hounslow`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-hounslow.ics)                                                               |
| Cineworld Ilford                                 | [`cineworld.co.uk-ilford`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-ilford.ics)                                                                   |
| Cineworld Leicester Square                       | [`cineworld.co.uk-leicester-square`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-leicester-square.ics)                                               |
| Cineworld South Ruislip                          | [`cineworld.co.uk-south-ruislip`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-south-ruislip.ics)                                                     |
| Cineworld The O2 Greenwich                       | [`cineworld.co.uk-the-o2-greenwich`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-the-o2-greenwich.ics)                                               |
| Cineworld Wandsworth                             | [`cineworld.co.uk-wandsworth`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-wandsworth.ics)                                                           |
| Cineworld Wembley                                | [`cineworld.co.uk-wembley`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-wembley.ics)                                                                 |
| Cineworld West India Quay                        | [`cineworld.co.uk-west-india-quay`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-west-india-quay.ics)                                                 |
| Cineworld Wood Green                             | [`cineworld.co.uk-wood-green`](https://clusterflick.com/datasets/calendars/cineworld.co.uk-wood-green.ics)                                                           |
| Clapham Picturehouse                             | [`picturehouses.com-clapham`](https://clusterflick.com/datasets/calendars/picturehouses.com-clapham.ics)                                                             |
| Close-Up Film Centre                             | [`closeupfilmcentre.com`](https://clusterflick.com/datasets/calendars/closeupfilmcentre.com.ics)                                                                     |
| Coldharbour Blue                                 | [`coldharbourblue.com`](https://clusterflick.com/datasets/calendars/coldharbourblue.com.ics)                                                                         |
| Conway Hall                                      | [`conwayhall.org.uk`](https://clusterflick.com/datasets/calendars/conwayhall.org.uk.ics)                                                                             |
| Cossall Community Hall                           | [`cossallresidents.wordpress.com`](https://clusterflick.com/datasets/calendars/cossallresidents.wordpress.com.ics)                                                   |
| Courthouse Hotel Shoreditch                      | [`courthouse-hotel.com-shoreditch`](https://clusterflick.com/datasets/calendars/courthouse-hotel.com-shoreditch.ics)                                                 |
| Courthouse Hotel Soho                            | [`courthouse-hotel.com-soho`](https://clusterflick.com/datasets/calendars/courthouse-hotel.com-soho.ics)                                                             |
| Crossroads Women's Centre                        | [`crossroadswomen.net`](https://clusterflick.com/datasets/calendars/crossroadswomen.net.ics)                                                                         |
| Crouch End Picturehouse                          | [`picturehouses.com-crouch-end`](https://clusterflick.com/datasets/calendars/picturehouses.com-crouch-end.ics)                                                       |
| Croydon Sports Arena                             | [`better.org.uk-croydon-sports-arena`](https://clusterflick.com/datasets/calendars/better.org.uk-croydon-sports-arena.ics)                                           |
| Curzon Aldgate                                   | [`curzon.com-aldgate`](https://clusterflick.com/datasets/calendars/curzon.com-aldgate.ics)                                                                           |
| Curzon Bloomsbury                                | [`curzon.com-bloomsbury`](https://clusterflick.com/datasets/calendars/curzon.com-bloomsbury.ics)                                                                     |
| Curzon Camden                                    | [`curzon.com-camden`](https://clusterflick.com/datasets/calendars/curzon.com-camden.ics)                                                                             |
| Curzon Hoxton                                    | [`curzon.com-hoxton`](https://clusterflick.com/datasets/calendars/curzon.com-hoxton.ics)                                                                             |
| Curzon Kingston                                  | [`curzon.com-kingston`](https://clusterflick.com/datasets/calendars/curzon.com-kingston.ics)                                                                         |
| Curzon Mayfair                                   | [`curzon.com-mayfair`](https://clusterflick.com/datasets/calendars/curzon.com-mayfair.ics)                                                                           |
| Curzon Richmond                                  | [`curzon.com-richmond`](https://clusterflick.com/datasets/calendars/curzon.com-richmond.ics)                                                                         |
| Curzon Sea Containers                            | [`curzonseacontainers.com`](https://clusterflick.com/datasets/calendars/curzonseacontainers.com.ics)                                                                 |
| Curzon Soho                                      | [`curzon.com-soho`](https://clusterflick.com/datasets/calendars/curzon.com-soho.ics)                                                                                 |
| Curzon Victoria                                  | [`curzon.com-victoria`](https://clusterflick.com/datasets/calendars/curzon.com-victoria.ics)                                                                         |
| Curzon Wimbledon                                 | [`curzon.com-wimbledon`](https://clusterflick.com/datasets/calendars/curzon.com-wimbledon.ics)                                                                       |
| Czech Centre                                     | [`london.czechcentres.cz`](https://clusterflick.com/datasets/calendars/london.czechcentres.cz.ics)                                                                   |
| Dalston Superstore                               | [`dalstonsuperstore.com`](https://clusterflick.com/datasets/calendars/dalstonsuperstore.com.ics)                                                                     |
| De Hems Dutch Cafe Bar                           | [`dehemspub.co.uk`](https://clusterflick.com/datasets/calendars/dehemspub.co.uk.ics)                                                                                 |
| Deptford Lounge                                  | [`lewisham.gov.uk-deptford-lounge`](https://clusterflick.com/datasets/calendars/lewisham.gov.uk-deptford-lounge.ics)                                                 |
| Dolby Screening Room Soho                        | [`professional.dolby.com-soho`](https://clusterflick.com/datasets/calendars/professional.dolby.com-soho.ics)                                                         |
| Dugdale Arts Centre                              | [`dugdaleartscentre.co.uk`](https://clusterflick.com/datasets/calendars/dugdaleartscentre.co.uk.ics)                                                                 |
| Ealing Picturehouse                              | [`picturehouses.com-ealing`](https://clusterflick.com/datasets/calendars/picturehouses.com-ealing.ics)                                                               |
| EartH                                            | [`earthackney.co.uk`](https://clusterflick.com/datasets/calendars/earthackney.co.uk.ics)                                                                             |
| East Dulwich Picturehouse & Cafe                 | [`picturehouses.com-east-dulwich`](https://clusterflick.com/datasets/calendars/picturehouses.com-east-dulwich.ics)                                                   |
| EbonyLife Place London                           | [`ebonylifeplacelondon.com`](https://clusterflick.com/datasets/calendars/ebonylifeplacelondon.com.ics)                                                               |
| El Chico's                                       | [`elchicos.co.uk`](https://clusterflick.com/datasets/calendars/elchicos.co.uk.ics)                                                                                   |
| Electric Cinema Portobello                       | [`electriccinema.co.uk-portobello`](https://clusterflick.com/datasets/calendars/electriccinema.co.uk-portobello.ics)                                                 |
| Electric Cinema White City                       | [`electriccinema.co.uk-white-city`](https://clusterflick.com/datasets/calendars/electriccinema.co.uk-white-city.ics)                                                 |
| Eltham Park South                                | [`royalgreenwich.gov.uk-eltham-park-south`](https://clusterflick.com/datasets/calendars/royalgreenwich.gov.uk-eltham-park-south.ics)                                 |
| Enfield Town Library                             | [`enfield.gov.uk-enfield-town-library`](https://clusterflick.com/datasets/calendars/enfield.gov.uk-enfield-town-library.ics)                                         |
| ESEA Community Centre                            | [`eseacommunitycentre.org.uk`](https://clusterflick.com/datasets/calendars/eseacommunitycentre.org.uk.ics)                                                           |
| Eventim Apollo                                   | [`eventimapollo.com`](https://clusterflick.com/datasets/calendars/eventimapollo.com.ics)                                                                             |
| Everyman at The Whiteley                         | [`everymancinema.com-the-whiteley`](https://clusterflick.com/datasets/calendars/everymancinema.com-the-whiteley.ics)                                                 |
| Everyman Baker Street                            | [`everymancinema.com-baker-street`](https://clusterflick.com/datasets/calendars/everymancinema.com-baker-street.ics)                                                 |
| Everyman Barnet                                  | [`everymancinema.com-barnet`](https://clusterflick.com/datasets/calendars/everymancinema.com-barnet.ics)                                                             |
| Everyman Belsize Park                            | [`everymancinema.com-belsize-park`](https://clusterflick.com/datasets/calendars/everymancinema.com-belsize-park.ics)                                                 |
| Everyman Borough Yards                           | [`everymancinema.com-borough-yards`](https://clusterflick.com/datasets/calendars/everymancinema.com-borough-yards.ics)                                               |
| Everyman Brentford                               | [`everymancinema.com-brentford`](https://clusterflick.com/datasets/calendars/everymancinema.com-brentford.ics)                                                       |
| Everyman Broadgate                               | [`everymancinema.com-broadgate`](https://clusterflick.com/datasets/calendars/everymancinema.com-broadgate.ics)                                                       |
| Everyman Canary Wharf                            | [`everymancinema.com-canary-wharf`](https://clusterflick.com/datasets/calendars/everymancinema.com-canary-wharf.ics)                                                 |
| Everyman Chelsea                                 | [`everymancinema.com-chelsea`](https://clusterflick.com/datasets/calendars/everymancinema.com-chelsea.ics)                                                           |
| Everyman Crystal Palace                          | [`everymancinema.com-crystal-palace`](https://clusterflick.com/datasets/calendars/everymancinema.com-crystal-palace.ics)                                             |
| Everyman Hampstead                               | [`everymancinema.com-hampstead`](https://clusterflick.com/datasets/calendars/everymancinema.com-hampstead.ics)                                                       |
| Everyman King's Cross                            | [`everymancinema.com-kings-cross`](https://clusterflick.com/datasets/calendars/everymancinema.com-kings-cross.ics)                                                   |
| Everyman Maida Vale                              | [`everymancinema.com-maida-vale`](https://clusterflick.com/datasets/calendars/everymancinema.com-maida-vale.ics)                                                     |
| Everyman Muswell Hill                            | [`everymancinema.com-muswell-hill`](https://clusterflick.com/datasets/calendars/everymancinema.com-muswell-hill.ics)                                                 |
| Everyman on the Canal at King's Cross            | [`everymancinema.com-everyman-on-the-canal-at-kings-cross`](https://clusterflick.com/datasets/calendars/everymancinema.com-everyman-on-the-canal-at-kings-cross.ics) |
| Everyman Screen on the Green                     | [`everymancinema.com-screen-on-the-green`](https://clusterflick.com/datasets/calendars/everymancinema.com-screen-on-the-green.ics)                                   |
| Everyman Stratford International                 | [`everymancinema.com-stratford-international`](https://clusterflick.com/datasets/calendars/everymancinema.com-stratford-international.ics)                           |
| Feltham Park                                     | [`hounslow.gov.uk-feltham-park`](https://clusterflick.com/datasets/calendars/hounslow.gov.uk-feltham-park.ics)                                                       |
| Fen Court                                        | [`fen-court.com`](https://clusterflick.com/datasets/calendars/fen-court.com.ics)                                                                                     |
| Finch Community Cinema                           | [`finchcafe.co.uk`](https://clusterflick.com/datasets/calendars/finchcafe.co.uk.ics)                                                                                 |
| Finsbury Park Picturehouse                       | [`picturehouses.com-finsbury-park`](https://clusterflick.com/datasets/calendars/picturehouses.com-finsbury-park.ics)                                                 |
| Firmdale Charlotte Street Hotel                  | [`firmdalehotels.com-charlotte-street`](https://clusterflick.com/datasets/calendars/firmdalehotels.com-charlotte-street.ics)                                         |
| Firmdale Covent Garden Hotel                     | [`firmdalehotels.com-covent-garden`](https://clusterflick.com/datasets/calendars/firmdalehotels.com-covent-garden.ics)                                               |
| Firmdale Ham Yard Hotel                          | [`firmdalehotels.com-ham-yard`](https://clusterflick.com/datasets/calendars/firmdalehotels.com-ham-yard.ics)                                                         |
| Firmdale The Soho Hotel                          | [`firmdalehotels.com-soho`](https://clusterflick.com/datasets/calendars/firmdalehotels.com-soho.ics)                                                                 |
| Folklore                                         | [`folklorehoxton.co.uk`](https://clusterflick.com/datasets/calendars/folklorehoxton.co.uk.ics)                                                                       |
| Fortune Green                                    | [`fortunegreen.org.uk`](https://clusterflick.com/datasets/calendars/fortunegreen.org.uk.ics)                                                                         |
| Frequency Coffee Camden Passage                  | [`frequencycoffee.com-camden-passage`](https://clusterflick.com/datasets/calendars/frequencycoffee.com-camden-passage.ics)                                           |
| Freud Museum London                              | [`freud.org.uk`](https://clusterflick.com/datasets/calendars/freud.org.uk.ics)                                                                                       |
| Frontline Club                                   | [`frontlineclub.com`](https://clusterflick.com/datasets/calendars/frontlineclub.com.ics)                                                                             |
| Fulham Pier                                      | [`fulhampier.com`](https://clusterflick.com/datasets/calendars/fulhampier.com.ics)                                                                                   |
| Galleria Objets                                  | [`objetstrouves.co.uk`](https://clusterflick.com/datasets/calendars/objetstrouves.co.uk.ics)                                                                         |
| Genesis Cinema                                   | [`genesiscinema.co.uk`](https://clusterflick.com/datasets/calendars/genesiscinema.co.uk.ics)                                                                         |
| Goethe-Institut London                           | [`goethe.de`](https://clusterflick.com/datasets/calendars/goethe.de.ics)                                                                                             |
| Goldsmiths                                       | [`gold.ac.uk`](https://clusterflick.com/datasets/calendars/gold.ac.uk.ics)                                                                                           |
| Good Hotel London                                | [`goodhotel.co-london`](https://clusterflick.com/datasets/calendars/goodhotel.co-london.ics)                                                                         |
| Good Shepherd Studios                            | [`goodshepherdstudios.com`](https://clusterflick.com/datasets/calendars/goodshepherdstudios.com.ics)                                                                 |
| Goodenough College                               | [`goodenough.ac.uk`](https://clusterflick.com/datasets/calendars/goodenough.ac.uk.ics)                                                                               |
| Green Alley Studios                              | [`instagram.com-green-alley-studios`](https://clusterflick.com/datasets/calendars/instagram.com-green-alley-studios.ics)                                             |
| Greener and Cleaner                              | [`greenerandcleaner.co.uk`](https://clusterflick.com/datasets/calendars/greenerandcleaner.co.uk.ics)                                                                 |
| Greenford Quay                                   | [`greenfordquay.com`](https://clusterflick.com/datasets/calendars/greenfordquay.com.ics)                                                                             |
| Greenwich Picturehouse                           | [`picturehouses.com-greenwich`](https://clusterflick.com/datasets/calendars/picturehouses.com-greenwich.ics)                                                         |
| Gunnersbury Park Museum                          | [`visitgunnersbury.org`](https://clusterflick.com/datasets/calendars/visitgunnersbury.org.ics)                                                                       |
| Hackney Picturehouse                             | [`picturehouses.com-hackney`](https://clusterflick.com/datasets/calendars/picturehouses.com-hackney.ics)                                                             |
| Hackney Showroom                                 | [`hackneyshowroom.com`](https://clusterflick.com/datasets/calendars/hackneyshowroom.com.ics)                                                                         |
| Harris Institute of Teaching and Leadership      | [`harrisinstitute.org.uk`](https://clusterflick.com/datasets/calendars/harrisinstitute.org.uk.ics)                                                                   |
| Hartfield Hub                                    | [`hartfieldhub.com`](https://clusterflick.com/datasets/calendars/hartfieldhub.com.ics)                                                                               |
| Hausu                                            | [`hausulondon.co.uk`](https://clusterflick.com/datasets/calendars/hausulondon.co.uk.ics)                                                                             |
| Heathcote & Star                                 | [`heathcoteandstar.co.uk`](https://clusterflick.com/datasets/calendars/heathcoteandstar.co.uk.ics)                                                                   |
| Heston Park                                      | [`hounslow.gov.uk-heston-park`](https://clusterflick.com/datasets/calendars/hounslow.gov.uk-heston-park.ics)                                                         |
| Hillside Gardens Park                            | [`hillsidegardenspark.co.uk`](https://clusterflick.com/datasets/calendars/hillsidegardenspark.co.uk.ics)                                                             |
| HKUK Kingston Community Centre                   | [`hk.uk`](https://clusterflick.com/datasets/calendars/hk.uk.ics)                                                                                                     |
| Hornsey Library                                  | [`haringey.gov.uk-hornsey-library`](https://clusterflick.com/datasets/calendars/haringey.gov.uk-hornsey-library.ics)                                                 |
| House of Annetta                                 | [`houseofannetta.org`](https://clusterflick.com/datasets/calendars/houseofannetta.org.ics)                                                                           |
| Hundred Years Gallery                            | [`hundredyearsgallery.co.uk`](https://clusterflick.com/datasets/calendars/hundredyearsgallery.co.uk.ics)                                                             |
| Hyde Park                                        | [`royalparks.org.uk-hyde-park`](https://clusterflick.com/datasets/calendars/royalparks.org.uk-hyde-park.ics)                                                         |
| Hypha Studio Kentish Town                        | [`hyphastudios.com-kentish-town`](https://clusterflick.com/datasets/calendars/hyphastudios.com-kentish-town.ics)                                                     |
| Ibraaz                                           | [`ibraaz.org`](https://clusterflick.com/datasets/calendars/ibraaz.org.ics)                                                                                           |
| Imperial College London                          | [`imperial.ac.uk`](https://clusterflick.com/datasets/calendars/imperial.ac.uk.ics)                                                                                   |
| Institute of Advanced Legal Studies              | [`ials.sas.ac.uk`](https://clusterflick.com/datasets/calendars/ials.sas.ac.uk.ics)                                                                                   |
| Institute of Contemporary Arts                   | [`ica.art`](https://clusterflick.com/datasets/calendars/ica.art.ics)                                                                                                 |
| Instituto Cervantes                              | [`londres.cervantes.es`](https://clusterflick.com/datasets/calendars/londres.cervantes.es.ics)                                                                       |
| Irish Cultural Centre                            | [`irishculturalcentre.co.uk`](https://clusterflick.com/datasets/calendars/irishculturalcentre.co.uk.ics)                                                             |
| Islington Museum                                 | [`islington.gov.uk-islington-museum`](https://clusterflick.com/datasets/calendars/islington.gov.uk-islington-museum.ics)                                             |
| Japan House London                               | [`japanhouselondon.uk`](https://clusterflick.com/datasets/calendars/japanhouselondon.uk.ics)                                                                         |
| Joe Allen                                        | [`joeallen.co.uk`](https://clusterflick.com/datasets/calendars/joeallen.co.uk.ics)                                                                                   |
| JOIA                                             | [`artotel.com-battersea-power-station`](https://clusterflick.com/datasets/calendars/artotel.com-battersea-power-station.ics)                                         |
| JW3                                              | [`jw3.org.uk`](https://clusterflick.com/datasets/calendars/jw3.org.uk.ics)                                                                                           |
| K.C. Continental Stores                          | [`kccontinentalstores.co.uk`](https://clusterflick.com/datasets/calendars/kccontinentalstores.co.uk.ics)                                                             |
| Kanaloa House                                    | [`kanaloa.org`](https://clusterflick.com/datasets/calendars/kanaloa.org.ics)                                                                                         |
| Karamel N22                                      | [`collage-arts.org-karamel-n22`](https://clusterflick.com/datasets/calendars/collage-arts.org-karamel-n22.ics)                                                       |
| Karma Sanctum Soho Hotel                         | [`sanctumsoho.com`](https://clusterflick.com/datasets/calendars/sanctumsoho.com.ics)                                                                                 |
| KEF Music Gallery London                         | [`uk.kef.com`](https://clusterflick.com/datasets/calendars/uk.kef.com.ics)                                                                                           |
| Kensington Central Library                       | [`rbkc.gov.uk-kensington-central-library`](https://clusterflick.com/datasets/calendars/rbkc.gov.uk-kensington-central-library.ics)                                   |
| KERB Social Club                                 | [`kerbsocialclub.com`](https://clusterflick.com/datasets/calendars/kerbsocialclub.com.ics)                                                                           |
| Kiln Theatre                                     | [`kilntheatre.com`](https://clusterflick.com/datasets/calendars/kilntheatre.com.ics)                                                                                 |
| Kingsley Hall Church & Community Centre          | [`khccc.com`](https://clusterflick.com/datasets/calendars/khccc.com.ics)                                                                                             |
| Kingston Methodist Church                        | [`kingstonmethodist.church`](https://clusterflick.com/datasets/calendars/kingstonmethodist.church.ics)                                                               |
| Kingston Museum                                  | [`kingstonheritage.org.uk-kingston-museum`](https://clusterflick.com/datasets/calendars/kingstonheritage.org.uk-kingston-museum.ics)                                 |
| Kingston University Town House                   | [`kingston.ac.uk-town-house`](https://clusterflick.com/datasets/calendars/kingston.ac.uk-town-house.ics)                                                             |
| Kurdish Community Centre                         | [`facebook.com-kurdishcommunitycentre`](https://clusterflick.com/datasets/calendars/facebook.com-kurdishcommunitycentre.ics)                                         |
| La Camionera                                     | [`lacamionera.com`](https://clusterflick.com/datasets/calendars/lacamionera.com.ics)                                                                                 |
| Ladbroke Hall                                    | [`ladbrokehall.com`](https://clusterflick.com/datasets/calendars/ladbrokehall.com.ics)                                                                               |
| Langley Park FILMBOX                             | [`langleyfilmbox.com`](https://clusterflick.com/datasets/calendars/langleyfilmbox.com.ics)                                                                           |
| Langthorne Park                                  | [`walthamforest.gov.uk-langthorne-park`](https://clusterflick.com/datasets/calendars/walthamforest.gov.uk-langthorne-park.ics)                                       |
| Lanzarote Works                                  | [`lanzaroteworks.com`](https://clusterflick.com/datasets/calendars/lanzaroteworks.com.ics)                                                                           |
| LEX2 Livesey Exchange                            | [`liveseyexchange.com`](https://clusterflick.com/datasets/calendars/liveseyexchange.com.ics)                                                                         |
| Leyton Library                                   | [`walthamforest.gov.uk-leyton-library`](https://clusterflick.com/datasets/calendars/walthamforest.gov.uk-leyton-library.ics)                                         |
| Leytonstone Library                              | [`walthamforest.gov.uk-leytonstone-library`](https://clusterflick.com/datasets/calendars/walthamforest.gov.uk-leytonstone-library.ics)                               |
| Liszt Institute                                  | [`culture.hu-london`](https://clusterflick.com/datasets/calendars/culture.hu-london.ics)                                                                             |
| Little Nan's 2.0                                 | [`littlenans.co.uk-2-0`](https://clusterflick.com/datasets/calendars/littlenans.co.uk-2-0.ics)                                                                       |
| Live At St Giles                                 | [`liveatstgiles.com`](https://clusterflick.com/datasets/calendars/liveatstgiles.com.ics)                                                                             |
| London Action Resource Centre                    | [`larc.noblogs.org`](https://clusterflick.com/datasets/calendars/larc.noblogs.org.ics)                                                                               |
| London Bridge City                               | [`londonbridgecity.co.uk`](https://clusterflick.com/datasets/calendars/londonbridgecity.co.uk.ics)                                                                   |
| London College of Communication                  | [`arts.ac.uk-london-college-of-communication`](https://clusterflick.com/datasets/calendars/arts.ac.uk-london-college-of-communication.ics)                           |
| London Film School                               | [`lfs.org.uk`](https://clusterflick.com/datasets/calendars/lfs.org.uk.ics)                                                                                           |
| London Welsh Centre                              | [`londonwelsh.org`](https://clusterflick.com/datasets/calendars/londonwelsh.org.ics)                                                                                 |
| Lordship Hub Co-op                               | [`lordshiphub.org`](https://clusterflick.com/datasets/calendars/lordshiphub.org.ics)                                                                                 |
| Lost Souls Pizza                                 | [`lostsoulspizza.com`](https://clusterflick.com/datasets/calendars/lostsoulspizza.com.ics)                                                                           |
| Love & Dye                                       | [`loveanddye.com`](https://clusterflick.com/datasets/calendars/loveanddye.com.ics)                                                                                   |
| Love Affair Basement                             | [`loveaffairbasement.co.uk`](https://clusterflick.com/datasets/calendars/loveaffairbasement.co.uk.ics)                                                               |
| Lower Marsh                                      | [`lowermarshmarket.com`](https://clusterflick.com/datasets/calendars/lowermarshmarket.com.ics)                                                                       |
| Lumiere Cinema Romford                           | [`lumiereromford.com`](https://clusterflick.com/datasets/calendars/lumiereromford.com.ics)                                                                           |
| LUX                                              | [`lux.org.uk`](https://clusterflick.com/datasets/calendars/lux.org.uk.ics)                                                                                           |
| Lyric Square                                     | [`lbhf.gov.uk-lyric-square`](https://clusterflick.com/datasets/calendars/lbhf.gov.uk-lyric-square.ics)                                                               |
| Maida Vale Library                               | [`westminster.gov.uk-maida-vale-library`](https://clusterflick.com/datasets/calendars/westminster.gov.uk-maida-vale-library.ics)                                     |
| Marcus Garvey Library                            | [`haringey.gov.uk-marcus-garvey-library`](https://clusterflick.com/datasets/calendars/haringey.gov.uk-marcus-garvey-library.ics)                                     |
| Mason & Fifth                                    | [`mason-fifth.com-westbourne-park`](https://clusterflick.com/datasets/calendars/mason-fifth.com-westbourne-park.ics)                                                 |
| May Fair Theatre                                 | [`themayfairhotel.co.uk`](https://clusterflick.com/datasets/calendars/themayfairhotel.co.uk.ics)                                                                     |
| MayDay Rooms                                     | [`maydayrooms.org`](https://clusterflick.com/datasets/calendars/maydayrooms.org.ics)                                                                                 |
| Metro Cinema                                     | [`metrocinema.co.uk`](https://clusterflick.com/datasets/calendars/metrocinema.co.uk.ics)                                                                             |
| Metroland Studios                                | [`metrolandcultures.com`](https://clusterflick.com/datasets/calendars/metrolandcultures.com.ics)                                                                     |
| Minet Library                                    | [`lambeth.gov.uk-minet-library`](https://clusterflick.com/datasets/calendars/lambeth.gov.uk-minet-library.ics)                                                       |
| Morland Community Hall                           | [`hackney.gov.uk-morland-community-hall`](https://clusterflick.com/datasets/calendars/hackney.gov.uk-morland-community-hall.ics)                                     |
| MOTH Club                                        | [`mothclub.co.uk`](https://clusterflick.com/datasets/calendars/mothclub.co.uk.ics)                                                                                   |
| Mountview Academy of Theatre Arts                | [`mountview.org.uk`](https://clusterflick.com/datasets/calendars/mountview.org.uk.ics)                                                                               |
| Moylett's                                        | [`moyletts.co.uk`](https://clusterflick.com/datasets/calendars/moyletts.co.uk.ics)                                                                                   |
| Museum of the Home                               | [`museumofthehome.org.uk`](https://clusterflick.com/datasets/calendars/museumofthehome.org.uk.ics)                                                                   |
| Muswell Hill Library                             | [`haringey.gov.uk-muswell-hill-library`](https://clusterflick.com/datasets/calendars/haringey.gov.uk-muswell-hill-library.ics)                                       |
| My Heathway                                      | [`myheathway.com`](https://clusterflick.com/datasets/calendars/myheathway.com.ics)                                                                                   |
| Nell of Old Drury                                | [`nellofolddrury.co.uk`](https://clusterflick.com/datasets/calendars/nellofolddrury.co.uk.ics)                                                                       |
| New Cross Inn                                    | [`newcrossinn.com`](https://clusterflick.com/datasets/calendars/newcrossinn.com.ics)                                                                                 |
| New Malden Library                               | [`kingston.gov.uk-new-malden-library`](https://clusterflick.com/datasets/calendars/kingston.gov.uk-new-malden-library.ics)                                           |
| Newington Green Meeting House                    | [`newingtongreenmeetinghouse.org.uk`](https://clusterflick.com/datasets/calendars/newingtongreenmeetinghouse.org.uk.ics)                                             |
| North Kensington Library                         | [`rbkc.gov.uk-north-kensington-library`](https://clusterflick.com/datasets/calendars/rbkc.gov.uk-north-kensington-library.ics)                                       |
| not/nowhere                                      | [`not-nowhere.org`](https://clusterflick.com/datasets/calendars/not-nowhere.org.ics)                                                                                 |
| Nunhead Cemetery                                 | [`fonc.org.uk`](https://clusterflick.com/datasets/calendars/fonc.org.uk.ics)                                                                                         |
| Nunhead Library                                  | [`southwark.gov.uk-nunhead-library`](https://clusterflick.com/datasets/calendars/southwark.gov.uk-nunhead-library.ics)                                               |
| ODEON Beckenham                                  | [`odeon.co.uk-beckenham`](https://clusterflick.com/datasets/calendars/odeon.co.uk-beckenham.ics)                                                                     |
| ODEON Greenwich                                  | [`odeon.co.uk-greenwich`](https://clusterflick.com/datasets/calendars/odeon.co.uk-greenwich.ics)                                                                     |
| ODEON Kingston                                   | [`odeon.co.uk-kingston`](https://clusterflick.com/datasets/calendars/odeon.co.uk-kingston.ics)                                                                       |
| ODEON Luxe & Dine Islington                      | [`odeon.co.uk-islington`](https://clusterflick.com/datasets/calendars/odeon.co.uk-islington.ics)                                                                     |
| ODEON Luxe Acton                                 | [`odeon.co.uk-acton`](https://clusterflick.com/datasets/calendars/odeon.co.uk-acton.ics)                                                                             |
| ODEON Luxe Haymarket                             | [`odeon.co.uk-haymarket`](https://clusterflick.com/datasets/calendars/odeon.co.uk-haymarket.ics)                                                                     |
| ODEON Luxe Holloway                              | [`odeon.co.uk-holloway`](https://clusterflick.com/datasets/calendars/odeon.co.uk-holloway.ics)                                                                       |
| ODEON Luxe Lee Valley                            | [`odeon.co.uk-lee-valley`](https://clusterflick.com/datasets/calendars/odeon.co.uk-lee-valley.ics)                                                                   |
| ODEON Luxe Leicester Square                      | [`odeon.co.uk-leicester-square`](https://clusterflick.com/datasets/calendars/odeon.co.uk-leicester-square.ics)                                                       |
| ODEON Luxe Putney                                | [`odeon.co.uk-putney`](https://clusterflick.com/datasets/calendars/odeon.co.uk-putney.ics)                                                                           |
| ODEON Luxe Swiss Cottage                         | [`odeon.co.uk-swiss-cottage`](https://clusterflick.com/datasets/calendars/odeon.co.uk-swiss-cottage.ics)                                                             |
| ODEON Luxe Uxbridge                              | [`odeon.co.uk-uxbridge`](https://clusterflick.com/datasets/calendars/odeon.co.uk-uxbridge.ics)                                                                       |
| ODEON Luxe West End                              | [`odeon.co.uk-west-end`](https://clusterflick.com/datasets/calendars/odeon.co.uk-west-end.ics)                                                                       |
| ODEON Orpington                                  | [`odeon.co.uk-orpington`](https://clusterflick.com/datasets/calendars/odeon.co.uk-orpington.ics)                                                                     |
| ODEON Richmond                                   | [`odeon.co.uk-richmond`](https://clusterflick.com/datasets/calendars/odeon.co.uk-richmond.ics)                                                                       |
| ODEON South Woodford                             | [`odeon.co.uk-south-woodford`](https://clusterflick.com/datasets/calendars/odeon.co.uk-south-woodford.ics)                                                           |
| ODEON Streatham                                  | [`odeon.co.uk-streatham`](https://clusterflick.com/datasets/calendars/odeon.co.uk-streatham.ics)                                                                     |
| ODEON Tottenham Court Road                       | [`odeon.co.uk-tottenham-court-road`](https://clusterflick.com/datasets/calendars/odeon.co.uk-tottenham-court-road.ics)                                               |
| ODEON Wimbledon                                  | [`odeon.co.uk-wimbledon`](https://clusterflick.com/datasets/calendars/odeon.co.uk-wimbledon.ics)                                                                     |
| Ognisko Polskie                                  | [`ogniskopolskie.org.uk`](https://clusterflick.com/datasets/calendars/ogniskopolskie.org.uk.ics)                                                                     |
| Omniplex Sutton                                  | [`omniplex.co.uk-sutton`](https://clusterflick.com/datasets/calendars/omniplex.co.uk-sutton.ics)                                                                     |
| Orchard Dry Dock                                 | [`goodluckhope.com-orchard-dry-dock`](https://clusterflick.com/datasets/calendars/goodluckhope.com-orchard-dry-dock.ics)                                             |
| Oslo Hackney                                     | [`oslohackney.com`](https://clusterflick.com/datasets/calendars/oslohackney.com.ics)                                                                                 |
| Osterley Park and House                          | [`nationaltrust.org.uk-osterley-park-and-house`](https://clusterflick.com/datasets/calendars/nationaltrust.org.uk-osterley-park-and-house.ics)                       |
| Otter Chaos                                      | [`otterchaos.co.uk`](https://clusterflick.com/datasets/calendars/otterchaos.co.uk.ics)                                                                               |
| Oxford House                                     | [`oxfordhouse.org.uk`](https://clusterflick.com/datasets/calendars/oxfordhouse.org.uk.ics)                                                                           |
| Palestine House                                  | [`palestinehouse.org`](https://clusterflick.com/datasets/calendars/palestinehouse.org.ics)                                                                           |
| Parkside Community Centre                        | [`parksideca.org.uk`](https://clusterflick.com/datasets/calendars/parksideca.org.uk.ics)                                                                             |
| Parlour                                          | [`parlourkensal.com`](https://clusterflick.com/datasets/calendars/parlourkensal.com.ics)                                                                             |
| Peckham Levels                                   | [`peckhamlevels.org`](https://clusterflick.com/datasets/calendars/peckhamlevels.org.ics)                                                                             |
| Peckham Oasis Gallery                            | [`instagram.com-peckhamoasisgallery`](https://clusterflick.com/datasets/calendars/instagram.com-peckhamoasisgallery.ics)                                             |
| Peckham Palms                                    | [`peckhampalms.com`](https://clusterflick.com/datasets/calendars/peckhampalms.com.ics)                                                                               |
| Peckhamplex                                      | [`peckhamplex.london`](https://clusterflick.com/datasets/calendars/peckhamplex.london.ics)                                                                           |
| Pelican House                                    | [`pelicanhouse.org`](https://clusterflick.com/datasets/calendars/pelicanhouse.org.ics)                                                                               |
| Perivale Community Hive                          | [`perivalehive.co.uk`](https://clusterflick.com/datasets/calendars/perivalehive.co.uk.ics)                                                                           |
| Phoenix Cinema                                   | [`phoenixcinema.co.uk`](https://clusterflick.com/datasets/calendars/phoenixcinema.co.uk.ics)                                                                         |
| Phonica Records                                  | [`phonicarecords.com`](https://clusterflick.com/datasets/calendars/phonicarecords.com.ics)                                                                           |
| Picturehouse Central                             | [`picturehouses.com-central`](https://clusterflick.com/datasets/calendars/picturehouses.com-central.ics)                                                             |
| Piehouse Co-Op                                   | [`piehousecoop.co.uk`](https://clusterflick.com/datasets/calendars/piehousecoop.co.uk.ics)                                                                           |
| Plaza Camden                                     | [`plazacamden.com`](https://clusterflick.com/datasets/calendars/plazacamden.com.ics)                                                                                 |
| Polish Social and Cultural Association POSK      | [`posk.org`](https://clusterflick.com/datasets/calendars/posk.org.ics)                                                                                               |
| Poppy's Funerals                                 | [`poppysfunerals.co.uk-raynes-park`](https://clusterflick.com/datasets/calendars/poppysfunerals.co.uk-raynes-park.ics)                                               |
| Prince Charles Cinema                            | [`princecharlescinema.com`](https://clusterflick.com/datasets/calendars/princecharlescinema.com.ics)                                                                 |
| Prince of Peckham                                | [`princeofpeckham.co.uk`](https://clusterflick.com/datasets/calendars/princeofpeckham.co.uk.ics)                                                                     |
| Proposition Bethnal Green                        | [`propositionstudios.com`](https://clusterflick.com/datasets/calendars/propositionstudios.com.ics)                                                                   |
| RAF Museum                                       | [`rafmuseum.org.uk-london`](https://clusterflick.com/datasets/calendars/rafmuseum.org.uk-london.ics)                                                                 |
| Raynes Park Community Church                     | [`salvationarmy.org.uk-raynes-park`](https://clusterflick.com/datasets/calendars/salvationarmy.org.uk-raynes-park.ics)                                               |
| RCA Battersea                                    | [`rca.ac.uk-battersea`](https://clusterflick.com/datasets/calendars/rca.ac.uk-battersea.ics)                                                                         |
| RCA Kensington                                   | [`rca.ac.uk-kensington`](https://clusterflick.com/datasets/calendars/rca.ac.uk-kensington.ics)                                                                       |
| Reference Point                                  | [`reference-point.uk`](https://clusterflick.com/datasets/calendars/reference-point.uk.ics)                                                                           |
| Regent Street Cinema                             | [`regentstreetcinema.com`](https://clusterflick.com/datasets/calendars/regentstreetcinema.com.ics)                                                                   |
| Rich Mix                                         | [`richmix.org.uk`](https://clusterflick.com/datasets/calendars/richmix.org.uk.ics)                                                                                   |
| Rio Cinema                                       | [`riocinema.org.uk`](https://clusterflick.com/datasets/calendars/riocinema.org.uk.ics)                                                                               |
| Riverside Studios                                | [`riversidestudios.co.uk`](https://clusterflick.com/datasets/calendars/riversidestudios.co.uk.ics)                                                                   |
| Rivoli Ballroom                                  | [`rivoliballroom.com`](https://clusterflick.com/datasets/calendars/rivoliballroom.com.ics)                                                                           |
| Rons Coffee House                                | [`ronspeckham.com`](https://clusterflick.com/datasets/calendars/ronspeckham.com.ics)                                                                                 |
| Rooftop Cinema Club Peckham                      | [`rooftopcinemaclub.com-peckham`](https://clusterflick.com/datasets/calendars/rooftopcinemaclub.com-peckham.ics)                                                     |
| Rooftop Cinema Club Stratford                    | [`rooftopcinemaclub.com-stratford`](https://clusterflick.com/datasets/calendars/rooftopcinemaclub.com-stratford.ics)                                                 |
| Rosetta Arts                                     | [`rosettaarts.org`](https://clusterflick.com/datasets/calendars/rosettaarts.org.ics)                                                                                 |
| Rosslyn Hill Chapel                              | [`rosslynhillchapel.org.uk`](https://clusterflick.com/datasets/calendars/rosslynhillchapel.org.uk.ics)                                                               |
| Royal Albert Hall                                | [`royalalberthall.com`](https://clusterflick.com/datasets/calendars/royalalberthall.com.ics)                                                                         |
| Ruach City Church                                | [`ruachcitychurch.org-streatham`](https://clusterflick.com/datasets/calendars/ruachcitychurch.org-streatham.ics)                                                     |
| Sands Films Cinema                               | [`sandsfilms.co.uk`](https://clusterflick.com/datasets/calendars/sandsfilms.co.uk.ics)                                                                               |
| Science Museum                                   | [`sciencemuseum.org.uk`](https://clusterflick.com/datasets/calendars/sciencemuseum.org.uk.ics)                                                                       |
| SCRT                                             | [`scrt.onl`](https://clusterflick.com/datasets/calendars/scrt.onl.ics)                                                                                               |
| SET Social                                       | [`setspace.uk`](https://clusterflick.com/datasets/calendars/setspace.uk.ics)                                                                                         |
| Sevente                                          | [`sevente.co.uk`](https://clusterflick.com/datasets/calendars/sevente.co.uk.ics)                                                                                     |
| Shai Space                                       | [`shaispace.com`](https://clusterflick.com/datasets/calendars/shaispace.com.ics)                                                                                     |
| Shapes Lewisham                                  | [`shapeslewisham.co.uk`](https://clusterflick.com/datasets/calendars/shapeslewisham.co.uk.ics)                                                                       |
| Shoreditch Arts Club                             | [`shoreditchartsclub.com`](https://clusterflick.com/datasets/calendars/shoreditchartsclub.com.ics)                                                                   |
| Shoreditch Library                               | [`hackney.gov.uk-shoreditch-library`](https://clusterflick.com/datasets/calendars/hackney.gov.uk-shoreditch-library.ics)                                             |
| Signature Brewery                                | [`signaturebrew.co.uk-blackhorseroad`](https://clusterflick.com/datasets/calendars/signaturebrew.co.uk-blackhorseroad.ics)                                           |
| Siobhan Davies Studios                           | [`siobhandavies.com`](https://clusterflick.com/datasets/calendars/siobhandavies.com.ics)                                                                             |
| SOAS University of London                        | [`soas.ac.uk`](https://clusterflick.com/datasets/calendars/soas.ac.uk.ics)                                                                                           |
| South London Gallery                             | [`southlondongallery.org`](https://clusterflick.com/datasets/calendars/southlondongallery.org.ics)                                                                   |
| Southbank Centre                                 | [`southbankcentre.co.uk`](https://clusterflick.com/datasets/calendars/southbankcentre.co.uk.ics)                                                                     |
| Spanners                                         | [`spanners.club`](https://clusterflick.com/datasets/calendars/spanners.club.ics)                                                                                     |
| St Barnabas Church                               | [`stbarnabas-southfields.org.uk`](https://clusterflick.com/datasets/calendars/stbarnabas-southfields.org.uk.ics)                                                     |
| St Gabriel's Church Aldersbrook                  | [`stgabrielsaldersbrook.org.uk`](https://clusterflick.com/datasets/calendars/stgabrielsaldersbrook.org.uk.ics)                                                       |
| St George's Garrison Church                      | [`stgeorgeswoolwich.org`](https://clusterflick.com/datasets/calendars/stgeorgeswoolwich.org.ics)                                                                     |
| St Lawrence Jewry                                | [`stlawrencejewry.org.uk`](https://clusterflick.com/datasets/calendars/stlawrencejewry.org.uk.ics)                                                                   |
| St Leonard's Church Hall                         | [`stleonard-streatham.org.uk`](https://clusterflick.com/datasets/calendars/stleonard-streatham.org.uk.ics)                                                           |
| St Mary's Church Walthamstow                     | [`stmaryswalthamstow.org`](https://clusterflick.com/datasets/calendars/stmaryswalthamstow.org.ics)                                                                   |
| St Matthew's Church                              | [`stmatthewswimbledon.org`](https://clusterflick.com/datasets/calendars/stmatthewswimbledon.org.ics)                                                                 |
| St Matthias Church                               | [`stmchurch.co.uk`](https://clusterflick.com/datasets/calendars/stmchurch.co.uk.ics)                                                                                 |
| Staffordshire St                                 | [`staffordshirest.com`](https://clusterflick.com/datasets/calendars/staffordshirest.com.ics)                                                                         |
| Stanley Arts                                     | [`stanleyarts.org`](https://clusterflick.com/datasets/calendars/stanleyarts.org.ics)                                                                                 |
| Stockwell Park Community Centre                  | [`thetrust.org.uk-stockwell-park-community-centre`](https://clusterflick.com/datasets/calendars/thetrust.org.uk-stockwell-park-community-centre.ics)                 |
| Stoneydown Park                                  | [`walthamforest.gov.uk-stoneydown-park`](https://clusterflick.com/datasets/calendars/walthamforest.gov.uk-stoneydown-park.ics)                                       |
| Strand Building                                  | [`kcl.ac.uk-strand`](https://clusterflick.com/datasets/calendars/kcl.ac.uk-strand.ics)                                                                               |
| Streatham Library                                | [`lambeth.gov.uk-streatham-library`](https://clusterflick.com/datasets/calendars/lambeth.gov.uk-streatham-library.ics)                                               |
| Strongroom Bar                                   | [`strongroombar.com`](https://clusterflick.com/datasets/calendars/strongroombar.com.ics)                                                                             |
| Subtitle Cinema                                  | [`scarlettmalone.com-subtitlecinema`](https://clusterflick.com/datasets/calendars/scarlettmalone.com-subtitlecinema.ics)                                             |
| Swiss Cottage Library                            | [`camden.gov.uk-swiss-cottage-library`](https://clusterflick.com/datasets/calendars/camden.gov.uk-swiss-cottage-library.ics)                                         |
| Sydenham Arts                                    | [`sydenhamarts.co.uk`](https://clusterflick.com/datasets/calendars/sydenhamarts.co.uk.ics)                                                                           |
| Tate Britain                                     | [`tate.org.uk-tate-britain`](https://clusterflick.com/datasets/calendars/tate.org.uk-tate-britain.ics)                                                               |
| Tate Modern                                      | [`tate.org.uk-tate-modern`](https://clusterflick.com/datasets/calendars/tate.org.uk-tate-modern.ics)                                                                 |
| Telegraph Hill Centre                            | [`thcentre.com`](https://clusterflick.com/datasets/calendars/thcentre.com.ics)                                                                                       |
| The 1850                                         | [`stmarys.ac.uk-the-1850`](https://clusterflick.com/datasets/calendars/stmarys.ac.uk-the-1850.ics)                                                                   |
| The All Good Bookshop                            | [`allgoodbookshop.co.uk`](https://clusterflick.com/datasets/calendars/allgoodbookshop.co.uk.ics)                                                                     |
| The Antwerp Arms                                 | [`antwerparms.co.uk`](https://clusterflick.com/datasets/calendars/antwerparms.co.uk.ics)                                                                             |
| The Arzner                                       | [`thearzner.com`](https://clusterflick.com/datasets/calendars/thearzner.com.ics)                                                                                     |
| The Barbican                                     | [`barbican.org.uk`](https://clusterflick.com/datasets/calendars/barbican.org.uk.ics)                                                                                 |
| The Bath House                                   | [`thebathhouse.co`](https://clusterflick.com/datasets/calendars/thebathhouse.co.ics)                                                                                 |
| The Bedford                                      | [`thebedford.com`](https://clusterflick.com/datasets/calendars/thebedford.com.ics)                                                                                   |
| The Beehive Pub                                  | [`beehiven17.com`](https://clusterflick.com/datasets/calendars/beehiven17.com.ics)                                                                                   |
| The Bill Murray                                  | [`angelcomedy.co.uk-bill-murray`](https://clusterflick.com/datasets/calendars/angelcomedy.co.uk-bill-murray.ics)                                                     |
| The Black Cultural Centre Islington              | [`islington.gov.uk-black-cultural-centre`](https://clusterflick.com/datasets/calendars/islington.gov.uk-black-cultural-centre.ics)                                   |
| The Black Eel                                    | [`theblackeel.uk`](https://clusterflick.com/datasets/calendars/theblackeel.uk.ics)                                                                                   |
| The Boathouse Studios                            | [`boathousebarkingstudios.com`](https://clusterflick.com/datasets/calendars/boathousebarkingstudios.com.ics)                                                         |
| The British Home                                 | [`britishhome.org.uk`](https://clusterflick.com/datasets/calendars/britishhome.org.uk.ics)                                                                           |
| The Brookmill                                    | [`thebrookmill.co.uk`](https://clusterflick.com/datasets/calendars/thebrookmill.co.uk.ics)                                                                           |
| The Carpet Shop                                  | [`linktr.ee-thecarpetshoppeckham`](https://clusterflick.com/datasets/calendars/linktr.ee-thecarpetshoppeckham.ics)                                                   |
| The Castle Cinema                                | [`thecastlecinema.com`](https://clusterflick.com/datasets/calendars/thecastlecinema.com.ics)                                                                         |
| The Castle Sidcup                                | [`castlesidcup.com`](https://clusterflick.com/datasets/calendars/castlesidcup.com.ics)                                                                               |
| The Cave                                         | [`contactthecaveldn.wixsite.com`](https://clusterflick.com/datasets/calendars/contactthecaveldn.wixsite.com.ics)                                                     |
| The Cavern                                       | [`thecavernfreehouse.co.uk`](https://clusterflick.com/datasets/calendars/thecavernfreehouse.co.uk.ics)                                                               |
| The Chiswick Cinema                              | [`chiswickcinema.co.uk`](https://clusterflick.com/datasets/calendars/chiswickcinema.co.uk.ics)                                                                       |
| The Cinema at Selfridges                         | [`thecinemaatselfridges.com`](https://clusterflick.com/datasets/calendars/thecinemaatselfridges.com.ics)                                                             |
| The Cinema in the Power Station (and the Arches) | [`thecinemainthepowerstation.com`](https://clusterflick.com/datasets/calendars/thecinemainthepowerstation.com.ics)                                                   |
| The Cinema Museum                                | [`cinemamuseum.org.uk`](https://clusterflick.com/datasets/calendars/cinemamuseum.org.uk.ics)                                                                         |
| The Clapham Grand                                | [`claphamgrand.com`](https://clusterflick.com/datasets/calendars/claphamgrand.com.ics)                                                                               |
| The Common Press Dalston                         | [`commonpress.co.uk-dalston`](https://clusterflick.com/datasets/calendars/commonpress.co.uk-dalston.ics)                                                             |
| The Common Press Shoreditch                      | [`commonpress.co.uk-shoreditch`](https://clusterflick.com/datasets/calendars/commonpress.co.uk-shoreditch.ics)                                                       |
| The cornerHOUSE Community Arts Centre            | [`thecornerhouse.org`](https://clusterflick.com/datasets/calendars/thecornerhouse.org.ics)                                                                           |
| The Cyprus High Commission                       | [`cyprusinuk.com`](https://clusterflick.com/datasets/calendars/cyprusinuk.com.ics)                                                                                   |
| The David Lean Cinema                            | [`davidleancinema.org.uk`](https://clusterflick.com/datasets/calendars/davidleancinema.org.uk.ics)                                                                   |
| The Divine                                       | [`thedivine.co.uk`](https://clusterflick.com/datasets/calendars/thedivine.co.uk.ics)                                                                                 |
| The Drum Labs                                    | [`labs.thedrum.com`](https://clusterflick.com/datasets/calendars/labs.thedrum.com.ics)                                                                               |
| The Eagle Hoxton                                 | [`theeaglehoxton.co.uk`](https://clusterflick.com/datasets/calendars/theeaglehoxton.co.uk.ics)                                                                       |
| The Etcetera Theatre                             | [`etceteratheatrecamden.com`](https://clusterflick.com/datasets/calendars/etceteratheatrecamden.com.ics)                                                             |
| The Exchange at W9                               | [`thexchange.org.uk`](https://clusterflick.com/datasets/calendars/thexchange.org.uk.ics)                                                                             |
| The Exchange NW1                                 | [`exchangenw1.com`](https://clusterflick.com/datasets/calendars/exchangenw1.com.ics)                                                                                 |
| The Exchange Twickenham                          | [`exchangetwickenham.co.uk`](https://clusterflick.com/datasets/calendars/exchangetwickenham.co.uk.ics)                                                               |
| The Exhibit                                      | [`theexhibit.co.uk`](https://clusterflick.com/datasets/calendars/theexhibit.co.uk.ics)                                                                               |
| The Fellowship Cinema                            | [`fellowshipinn.co.uk`](https://clusterflick.com/datasets/calendars/fellowshipinn.co.uk.ics)                                                                         |
| The Feminist Library                             | [`feministlibrary.co.uk`](https://clusterflick.com/datasets/calendars/feministlibrary.co.uk.ics)                                                                     |
| The Forest Cinema                                | [`forestcinema.co.uk`](https://clusterflick.com/datasets/calendars/forestcinema.co.uk.ics)                                                                           |
| The Foundry                                      | [`aplaceforchange.co.uk`](https://clusterflick.com/datasets/calendars/aplaceforchange.co.uk.ics)                                                                     |
| The Francis Crick Institute                      | [`crick.ac.uk`](https://clusterflick.com/datasets/calendars/crick.ac.uk.ics)                                                                                         |
| The Garden Cinema                                | [`thegardencinema.co.uk`](https://clusterflick.com/datasets/calendars/thegardencinema.co.uk.ics)                                                                     |
| The Gate Picturehouse                            | [`picturehouses.com-the-gate`](https://clusterflick.com/datasets/calendars/picturehouses.com-the-gate.ics)                                                           |
| The Green                                        | [`thegreennunhead.org`](https://clusterflick.com/datasets/calendars/thegreennunhead.org.ics)                                                                         |
| The Green House                                  | [`ethicalproperty.co.uk-the-green-house`](https://clusterflick.com/datasets/calendars/ethicalproperty.co.uk-the-green-house.ics)                                     |
| The Griffin                                      | [`griffinwhetstone.pub`](https://clusterflick.com/datasets/calendars/griffinwhetstone.pub.ics)                                                                       |
| The Guild Church of St Katharine Cree            | [`stkatharinecree.org`](https://clusterflick.com/datasets/calendars/stkatharinecree.org.ics)                                                                         |
| The Haggerston                                   | [`facebook.com-thehaggerston`](https://clusterflick.com/datasets/calendars/facebook.com-thehaggerston.ics)                                                           |
| The Hammond Theatre                              | [`thehammondtheatre.co.uk`](https://clusterflick.com/datasets/calendars/thehammondtheatre.co.uk.ics)                                                                 |
| The Hen & Chickens Theatre Bar                   | [`thehenandchickenstheatrebar.co.uk`](https://clusterflick.com/datasets/calendars/thehenandchickenstheatrebar.co.uk.ics)                                             |
| The Horse Hospital                               | [`thehorsehospital.com`](https://clusterflick.com/datasets/calendars/thehorsehospital.com.ics)                                                                       |
| The Ivy House                                    | [`ivyhousenunhead.com`](https://clusterflick.com/datasets/calendars/ivyhousenunhead.com.ics)                                                                         |
| The Leather Bottle                               | [`greeneking.co.uk-leather-bottle`](https://clusterflick.com/datasets/calendars/greeneking.co.uk-leather-bottle.ics)                                                 |
| The Lexi Cinema                                  | [`thelexicinema.co.uk`](https://clusterflick.com/datasets/calendars/thelexicinema.co.uk.ics)                                                                         |
| The Leyton Engineer                              | [`theleytonengineer.co.uk`](https://clusterflick.com/datasets/calendars/theleytonengineer.co.uk.ics)                                                                 |
| The London Archives                              | [`thelondonarchives.org`](https://clusterflick.com/datasets/calendars/thelondonarchives.org.ics)                                                                     |
| The London Art Bar                               | [`londonartbar.com`](https://clusterflick.com/datasets/calendars/londonartbar.com.ics)                                                                               |
| The Mall Tavern                                  | [`themalltavern.com`](https://clusterflick.com/datasets/calendars/themalltavern.com.ics)                                                                             |
| The Man of Kent                                  | [`facebook.com-themanofkent`](https://clusterflick.com/datasets/calendars/facebook.com-themanofkent.ics)                                                             |
| The Manor Arms                                   | [`themanorarms.com`](https://clusterflick.com/datasets/calendars/themanorarms.com.ics)                                                                               |
| The Mildmay Club                                 | [`mildmay.club`](https://clusterflick.com/datasets/calendars/mildmay.club.ics)                                                                                       |
| The Moniker                                      | [`drakeandmorgan.co.uk-the-moniker`](https://clusterflick.com/datasets/calendars/drakeandmorgan.co.uk-the-moniker.ics)                                               |
| The Mud Room                                     | [`themudroomlondon.com`](https://clusterflick.com/datasets/calendars/themudroomlondon.com.ics)                                                                       |
| The Natural Philosopher                          | [`naturalphilosopher.co.uk`](https://clusterflick.com/datasets/calendars/naturalphilosopher.co.uk.ics)                                                               |
| The Nehru Centre                                 | [`nehrucentre.org.uk`](https://clusterflick.com/datasets/calendars/nehrucentre.org.uk.ics)                                                                           |
| The Nest                                         | [`thamesmeadnow.org.uk-the-nest`](https://clusterflick.com/datasets/calendars/thamesmeadnow.org.uk-the-nest.ics)                                                     |
| The Nickel                                       | [`thenickel.co.uk`](https://clusterflick.com/datasets/calendars/thenickel.co.uk.ics)                                                                                 |
| The O2                                           | [`theo2.co.uk`](https://clusterflick.com/datasets/calendars/theo2.co.uk.ics)                                                                                         |
| The Olympic Cinema                               | [`olympiccinema.com`](https://clusterflick.com/datasets/calendars/olympiccinema.com.ics)                                                                             |
| The Others                                       | [`theothers.uk.com`](https://clusterflick.com/datasets/calendars/theothers.uk.com.ics)                                                                               |
| The People's Letters Bookshop                    | [`peoplesletters.org`](https://clusterflick.com/datasets/calendars/peoplesletters.org.ics)                                                                           |
| The Private Cinema                               | [`bulgarihotels.com`](https://clusterflick.com/datasets/calendars/bulgarihotels.com.ics)                                                                             |
| The Refinery Citypoint                           | [`drakeandmorgan.co.uk-the-refinery-citypoint`](https://clusterflick.com/datasets/calendars/drakeandmorgan.co.uk-the-refinery-citypoint.ics)                         |
| The Ritzy Picturehouse                           | [`picturehouses.com-the-ritzy`](https://clusterflick.com/datasets/calendars/picturehouses.com-the-ritzy.ics)                                                         |
| The Rocketvan Coffee Shop and The Box Shop Bar   | [`rocketvan.co.uk`](https://clusterflick.com/datasets/calendars/rocketvan.co.uk.ics)                                                                                 |
| The Roof Gardens                                 | [`theroofgardens.com`](https://clusterflick.com/datasets/calendars/theroofgardens.com.ics)                                                                           |
| The Rookery                                      | [`sccoop.org.uk`](https://clusterflick.com/datasets/calendars/sccoop.org.uk.ics)                                                                                     |
| The RSA                                          | [`thersa.org`](https://clusterflick.com/datasets/calendars/thersa.org.ics)                                                                                           |
| The Showroom                                     | [`theshowroom.org`](https://clusterflick.com/datasets/calendars/theshowroom.org.ics)                                                                                 |
| The Soho Screening Rooms                         | [`sohoscreeningrooms.co.uk`](https://clusterflick.com/datasets/calendars/sohoscreeningrooms.co.uk.ics)                                                               |
| The Source                                       | [`uel.ac.uk-the-source`](https://clusterflick.com/datasets/calendars/uel.ac.uk-the-source.ics)                                                                       |
| The Tate Institute                               | [`reinstate.info`](https://clusterflick.com/datasets/calendars/reinstate.info.ics)                                                                                   |
| The Trafalgar                                    | [`thetrafalgarchelsea.com`](https://clusterflick.com/datasets/calendars/thetrafalgarchelsea.com.ics)                                                                 |
| The Victoria Dalston                             | [`jaguarshoes.com-the-victoria`](https://clusterflick.com/datasets/calendars/jaguarshoes.com-the-victoria.ics)                                                       |
| The Vine                                         | [`thevinenw5.co.uk`](https://clusterflick.com/datasets/calendars/thevinenw5.co.uk.ics)                                                                               |
| The Wanstead Curtain                             | [`wansteadfringe.org-the-wanstead-curtain`](https://clusterflick.com/datasets/calendars/wansteadfringe.org-the-wanstead-curtain.ics)                                 |
| The Well Walk Theatre                            | [`thewellwalktheatre.com`](https://clusterflick.com/datasets/calendars/thewellwalktheatre.com.ics)                                                                   |
| The White Lion Pub                               | [`whitelionsw16.co.uk`](https://clusterflick.com/datasets/calendars/whitelionsw16.co.uk.ics)                                                                         |
| The Wiener Holocaust Library                     | [`wienerholocaustlibrary.org`](https://clusterflick.com/datasets/calendars/wienerholocaustlibrary.org.ics)                                                           |
| The Wilds at Barking Riverside                   | [`thewildsbarkingriverside.london`](https://clusterflick.com/datasets/calendars/thewildsbarkingriverside.london.ics)                                                 |
| The Winchester                                   | [`thewinchesterhighgate.co.uk`](https://clusterflick.com/datasets/calendars/thewinchesterhighgate.co.uk.ics)                                                         |
| The Woodfield Pavilion                           | [`thewoodfield.org`](https://clusterflick.com/datasets/calendars/thewoodfield.org.ics)                                                                               |
| The Writers' Room                                | [`writersroom.org.uk`](https://clusterflick.com/datasets/calendars/writersroom.org.uk.ics)                                                                           |
| Theatreship                                      | [`theatreship.co.uk`](https://clusterflick.com/datasets/calendars/theatreship.co.uk.ics)                                                                             |
| Thomas Wall Centre                               | [`thethomaswallcentre.harleystreethypnosis.co.uk`](https://clusterflick.com/datasets/calendars/thethomaswallcentre.harleystreethypnosis.co.uk.ics)                   |
| Thornbury Playing Fields                         | [`hounslow.gov.uk-thornbury-playing-fields`](https://clusterflick.com/datasets/calendars/hounslow.gov.uk-thornbury-playing-fields.ics)                               |
| Tooting Bec Lido                                 | [`placesleisure.org-tooting-bec-lido`](https://clusterflick.com/datasets/calendars/placesleisure.org-tooting-bec-lido.ics)                                           |
| Tower Bridge Collective                          | [`towerbridgecollective.co.uk`](https://clusterflick.com/datasets/calendars/towerbridgecollective.co.uk.ics)                                                         |
| Triangle LGBTQ+ Cultural Centre                  | [`triangledeptford.org`](https://clusterflick.com/datasets/calendars/triangledeptford.org.ics)                                                                       |
| triplebond                                       | [`triple-bond.co.uk`](https://clusterflick.com/datasets/calendars/triple-bond.co.uk.ics)                                                                             |
| Tudor Drive Library                              | [`kingston.gov.uk-tudor-drive-library`](https://clusterflick.com/datasets/calendars/kingston.gov.uk-tudor-drive-library.ics)                                         |
| UCL Bentham House                                | [`ucl.ac.uk-bentham-house`](https://clusterflick.com/datasets/calendars/ucl.ac.uk-bentham-house.ics)                                                                 |
| UCL East Community Cinema                        | [`ucl.ac.uk-ucl-east-community-cinema`](https://clusterflick.com/datasets/calendars/ucl.ac.uk-ucl-east-community-cinema.ics)                                         |
| UCL Garwood Lecture Theatre                      | [`ucl.ac.uk-garwood-lecture-theatre`](https://clusterflick.com/datasets/calendars/ucl.ac.uk-garwood-lecture-theatre.ics)                                             |
| UCL School of Slavonic and East European Studies | [`ucl.ac.uk-ssees`](https://clusterflick.com/datasets/calendars/ucl.ac.uk-ssees.ics)                                                                                 |
| Una Marson Library                               | [`southwark.gov.uk-una-marson-library`](https://clusterflick.com/datasets/calendars/southwark.gov.uk-una-marson-library.ics)                                         |
| Union Chapel                                     | [`unionchapel.org.uk`](https://clusterflick.com/datasets/calendars/unionchapel.org.uk.ics)                                                                           |
| University Square Stratford                      | [`uel.ac.uk-univeristy-square-stratford`](https://clusterflick.com/datasets/calendars/uel.ac.uk-univeristy-square-stratford.ics)                                     |
| Upminster Windmill                               | [`upminsterwindmill.org`](https://clusterflick.com/datasets/calendars/upminsterwindmill.org.ics)                                                                     |
| Vagina Museum                                    | [`vaginamuseum.co.uk`](https://clusterflick.com/datasets/calendars/vaginamuseum.co.uk.ics)                                                                           |
| Vauxhall Pleasure Gardens                        | [`lambeth.gov.uk-vauxhall-pleasure-gardens`](https://clusterflick.com/datasets/calendars/lambeth.gov.uk-vauxhall-pleasure-gardens.ics)                               |
| Vue Bromley                                      | [`myvue.com-bromley`](https://clusterflick.com/datasets/calendars/myvue.com-bromley.ics)                                                                             |
| Vue Croydon Purley Way                           | [`myvue.com-croydon-purley-way`](https://clusterflick.com/datasets/calendars/myvue.com-croydon-purley-way.ics)                                                       |
| Vue Dagenham                                     | [`myvue.com-dagenham`](https://clusterflick.com/datasets/calendars/myvue.com-dagenham.ics)                                                                           |
| Vue Eltham                                       | [`myvue.com-eltham`](https://clusterflick.com/datasets/calendars/myvue.com-eltham.ics)                                                                               |
| Vue Finchley Road                                | [`myvue.com-finchley-road`](https://clusterflick.com/datasets/calendars/myvue.com-finchley-road.ics)                                                                 |
| Vue Fulham Broadway                              | [`myvue.com-fulham-broadway`](https://clusterflick.com/datasets/calendars/myvue.com-fulham-broadway.ics)                                                             |
| Vue Harrow                                       | [`myvue.com-harrow`](https://clusterflick.com/datasets/calendars/myvue.com-harrow.ics)                                                                               |
| Vue Islington                                    | [`myvue.com-islington`](https://clusterflick.com/datasets/calendars/myvue.com-islington.ics)                                                                         |
| Vue North Finchley                               | [`myvue.com-north-finchley`](https://clusterflick.com/datasets/calendars/myvue.com-north-finchley.ics)                                                               |
| Vue Piccadilly                                   | [`myvue.com-piccadilly`](https://clusterflick.com/datasets/calendars/myvue.com-piccadilly.ics)                                                                       |
| Vue Romford                                      | [`myvue.com-romford`](https://clusterflick.com/datasets/calendars/myvue.com-romford.ics)                                                                             |
| Vue West End                                     | [`myvue.com-leicester-square`](https://clusterflick.com/datasets/calendars/myvue.com-leicester-square.ics)                                                           |
| Vue Westfield London                             | [`myvue.com-westfield`](https://clusterflick.com/datasets/calendars/myvue.com-westfield.ics)                                                                         |
| Vue Westfield Stratford                          | [`myvue.com-westfield-stratford-city`](https://clusterflick.com/datasets/calendars/myvue.com-westfield-stratford-city.ics)                                           |
| Vue Wood Green                                   | [`myvue.com-wood-green`](https://clusterflick.com/datasets/calendars/myvue.com-wood-green.ics)                                                                       |
| W London                                         | [`marriott.com-w-london`](https://clusterflick.com/datasets/calendars/marriott.com-w-london.ics)                                                                     |
| Waltham Forest Town Hall                         | [`walthamforest.gov.uk`](https://clusterflick.com/datasets/calendars/walthamforest.gov.uk.ics)                                                                       |
| Walthamstow Trades Hall                          | [`walthamstowtradeshall.com`](https://clusterflick.com/datasets/calendars/walthamstowtradeshall.com.ics)                                                             |
| Waterhouse Hall Theatre                          | [`winchmorehillurc.co.uk`](https://clusterflick.com/datasets/calendars/winchmorehillurc.co.uk.ics)                                                                   |
| Watson's General Telegraph                       | [`watsonstelegraph.pub`](https://clusterflick.com/datasets/calendars/watsonstelegraph.pub.ics)                                                                       |
| West Norwood Library & Picturehouse              | [`picturehouses.com-west-norwood`](https://clusterflick.com/datasets/calendars/picturehouses.com-west-norwood.ics)                                                   |
| West Wimbledon Hall                              | [`westwimbledonsociety.org`](https://clusterflick.com/datasets/calendars/westwimbledonsociety.org.ics)                                                               |
| Wheatsheaf Community Hall                        | [`wheatsheafhall.org.uk`](https://clusterflick.com/datasets/calendars/wheatsheafhall.org.uk.ics)                                                                     |
| Whitechapel Gallery                              | [`whitechapelgallery.org`](https://clusterflick.com/datasets/calendars/whitechapelgallery.org.ics)                                                                   |
| Whitton Library                                  | [`richmond.gov.uk-whitton-library`](https://clusterflick.com/datasets/calendars/richmond.gov.uk-whitton-library.ics)                                                 |
| William The Fourth                               | [`william-the-fourth.com`](https://clusterflick.com/datasets/calendars/william-the-fourth.com.ics)                                                                   |
| Wilton's Music Hall                              | [`wiltons.org.uk`](https://clusterflick.com/datasets/calendars/wiltons.org.uk.ics)                                                                                   |
| Women's Museum                                   | [`newtownculture.org-womens-museum`](https://clusterflick.com/datasets/calendars/newtownculture.org-womens-museum.ics)                                               |
| Wood Green Library                               | [`haringey.gov.uk-wood-green-library`](https://clusterflick.com/datasets/calendars/haringey.gov.uk-wood-green-library.ics)                                           |
| Woolwich Works                                   | [`woolwich.works`](https://clusterflick.com/datasets/calendars/woolwich.works.ics)                                                                                   |
| WPP Sea Containers Campus                        | [`wpp.com-sea-containers`](https://clusterflick.com/datasets/calendars/wpp.com-sea-containers.ics)                                                                   |

## Schedule

The workflow is automatically triggered when the
[data transformation workflow](https://github.com/clusterflick/data-transformed)
completes successfully. It can also be triggered manually via workflow dispatch
if needed.

## Maintenance

### Dependencies

The workflow requires a GitHub secret:

- `PAT` - Personal Access Token for downloading releases from other repositories

## Licence

The code in this repository is licensed under the [MIT licence](LICENSE).

The **calendar feeds are not** — wherever they are fetched from, they
are licensed separately, under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), with a carve-out for
the third-party metadata they carry. If you use them, credit Clusterflick:

> Screening data from [Clusterflick](https://clusterflick.com) (CC BY 4.0)

Each feed already carries that credit in its `X-WR-CALDESC` property, so a feed
that has travelled into someone's calendar app still says where it came from.
Leave it intact when redistributing.

Event descriptions embed synopses, cast and director names from The Movie
Database, which are **excluded** from that grant. See
[LICENSE-DATA](LICENSE-DATA) for the exact terms, or
[clusterflick.com/data-licence](https://clusterflick.com/data-licence) for the
readable version.
