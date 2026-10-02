# Straßenlern-App – V3

Installierbare Progressive Web App (PWA) für das definierte Einsatzgebiet rund um Pinneberg.

## Einsatzgebiet
- Pinneberg
- Kummerfeld
- Prisdorf
- Borstel-Hohenraden
- Ellerbek
- Bönningstedt
- Hasloh
- Rellingen
- Egenbüttel (Ortsteil-Zuordnung innerhalb Rellingen, näherungsweise)
- Tangstedt (Kreis Pinneberg)
- Halstenbek nur nördlich der Bahnstrecke

## V3 – wichtige Änderungen
- Benannte Straßen werden beim ersten Start **gemeindeweise und vollständig** aus OpenStreetMap geladen.
- Der Abruf läuft nacheinander mit sichtbarem Fortschritt statt mit mehreren großen parallelen Anfragen.
- Drei Overpass-Datenquellen werden automatisch als Fallback versucht.
- Der fertige Datensatz wird in IndexedDB auf dem Gerät gespeichert.
- Beim nächsten Start werden die gespeicherten Daten sofort verwendet; ein erneuter Abruf startet nur über „OSM-Daten aktualisieren“.
- Gemeindegrenzen und Bahnlinie blockieren den Straßenlern-Datensatz nicht mehr, falls eine einzelne Zusatzabfrage ausfällt.
- Halstenbek wird anhand der geladenen Bahnlinie auf den nördlichen Bereich begrenzt.
- Lernfortschritt, Suche, Karte, Spiele und Routing bleiben erhalten.

## Hinweis
Die Straßenabdeckung basiert auf den zum Abrufzeitpunkt in OpenStreetMap vorhandenen benannten Straßen. Sie ist damit eine OSM-Datengrundlage und kein amtliches polizeiliches Straßenverzeichnis.

Kartendaten: © OpenStreetMap-Mitwirkende, ODbL.
