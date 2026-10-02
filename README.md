# Straßenlern-App – finale V1

Diese Version ist als installierbare Progressive Web App (PWA) aufgebaut.

## Starten
Die Dateien müssen über einen Webserver ausgeliefert werden (nicht per file://), weil die App externe Karten-/Geodaten-APIs nutzt.

Zum Beispiel:
- VS Code + Live Server
- Python: `python -m http.server 8000`
- anschließend http://localhost:8000

Auf iPhone: Seite in Safari öffnen -> Teilen -> „Zum Home-Bildschirm“.

## Funktionen
- echte OpenStreetMap-Straßen werden beim Start geladen
- Suche nach Straßen
- Ortsfilter
- Karte mit Straßen
- Wache als Startpunkt
- Lernfortschritt in localStorage
- Straßenquiz
- Kartenquiz
- Wache -> Zielstraße
- Routing über OSRM
- 30-Sekunden-Challenge

## Einsatzgebiet
Pinneberg, Kummerfeld, Prisdorf, Borstel-Hohenraden, Ellerbek, Bönningstedt,
Hasloh, Halstenbek nördlich der Bahnstrecke, Rellingen, Egenbüttel und Tangstedt (Kreis Pinneberg).

Egenbüttel ist als Ortsteil von Rellingen dokumentiert; deshalb wird die Geodatenabfrage
für Rellingen vorgenommen und Egenbüttel in der Datenstruktur als eigener Lernbereich geführt.

## Datenquellen
OpenStreetMap / Overpass API für Straßen und Geometrien.
OSRM Demo-Router für das Routenmodul.
Die Dienststellenadresse und Koordinaten sind als Startpunkt fest eingetragen.

## Wichtiger Hinweis zur Halstenbek-Regel
Die App fragt die Bahnlinien innerhalb Halstenbeks separat ab und filtert Straßen anhand
ihrer Lage relativ zum nächstgelegenen Bahnkorridor. Für eine dienstlich verbindliche
Gebietsgrenze sollte diese Regel später gegen die intern gültige Revier-/Zuständigkeitskarte
geprüft werden.

## OSM-Lizenz
OpenStreetMap-Daten stehen unter der Open Database License (ODbL). Bei Veröffentlichung
müssen die OSM-Attribution und die jeweiligen Lizenzbedingungen eingehalten werden.
