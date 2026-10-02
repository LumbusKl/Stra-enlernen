# Straßenlern-App – V2

Installierbare Progressive Web App (PWA) für das definierte Einsatzgebiet rund um Pinneberg.

## Einsatzgebiet
- Pinneberg
- Kummerfeld
- Prisdorf
- Borstel-Hohenraden
- Ellerbek
- Bönningstedt
- Hasloh
- Halstenbek: nur nördlich der Bahnstrecke
- Rellingen
- Egenbüttel (Ortsteil von Rellingen; Lernbereich näherungsweise über Ortsteilzentrum)
- Tangstedt (Kreis Pinneberg)

Startpunkt: Polizeirevier Pinneberg, Elmshorner Straße 40.

## V2-Funktionen
- OSM-Straßendaten über relationbasierte Overpass-Abfragen
- mehrere Overpass-Fallback-Server
- lokaler Datensatz-Cache nach erfolgreichem Laden
- Gemeindegrenzen auf der Karte
- Bahnstrecke auf der Karte
- Halstenbek-Nordfilter
- Straßenkarte mit Lernstandfarben
- Suche und Ortsfilter
- Lernfortschritt in localStorage
- Export des Lernstands
- Straßenquiz
- Kartenquiz
- Wache → Zielstraße mit OSRM
- 30-Sekunden-Challenge
- Schwachstellen-Training
- räumliches Nachbarstraßen-Quiz

## Datenqualität
Die App verwendet aktuelle OpenStreetMap-Daten. OSM ist eine offene Geodatenbank; Daten können sich ändern und einzelne Straßen können fehlen oder anders klassifiziert sein. Egenbüttel ist kein eigenständiges Gemeindegebiet, daher ist die Lernbereich-Zuordnung dort bewusst als Näherung gekennzeichnet. Die dienstlich verbindliche Zuständigkeits-/Reviergrenze muss bei Bedarf gegen die interne Karte geprüft werden.

## GitHub Pages
Die Dateien müssen im Repository-Root liegen. GitHub Pages: `Deploy from a branch` → `main` → `/(root)`.

## iPhone
Safari öffnen → Teilen → Zum Home-Bildschirm → Hinzufügen.

## OSM
Kartendaten © OpenStreetMap-Mitwirkende. OpenStreetMap-Daten stehen unter der Open Database License (ODbL). Attribution ist in der App enthalten.
