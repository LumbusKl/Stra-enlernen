# Straßenlernen-App – V4

PWA für das definierte Einsatzgebiet rund um Pinneberg.

## Daten

V4 verwendet OpenPLZ für das Straßenverzeichnis. OpenPLZ veröffentlicht Straßen- und Ortsdaten auf Basis von OpenStreetMap und unterstützt Paging; die App lädt die Seiten der zehn definierten Orte nacheinander und speichert den Datensatz anschließend lokal per IndexedDB.

Referenzgrößen der aktuell abgerufenen Straßenverzeichnisse: insgesamt ca. 939 Straßen-Gruppen über Pinneberg, Rellingen, Halstenbek, Ellerbek, Bönningstedt, Hasloh, Kummerfeld, Prisdorf, Borstel-Hohenraden und Tangstedt (Kreis Pinneberg). Die App zeigt Abweichungen von diesen Referenzzahlen an, statt stillschweigend eine unvollständige Liste als vollständig zu kennzeichnen.

Hinweis: Halstenbek wird in V4 als Gemeinde-Straßenliste geladen; die geometrische Nordseite der Bahnlinie wird nicht aus dem OpenPLZ-Namensdatensatz abgeleitet. Für eine rechtssichere räumliche Begrenzung muss die Bahn-Geometrie mit den Straßen-Geometrien abgeglichen werden.

## Funktionen

- vollständiges paginiertes Straßenverzeichnis
- Suche nach Straße und Ort
- lokaler Lernfortschritt
- gewichtete Schwachstellen-Wiederholung
- Straßen-Quiz
- Karten-/Geocoding-Suche einzelner Straßen
- Route Polizeirevier Pinneberg → Zielstraße über OSRM
- 30-Sekunden-Challenge
- Export des Lernstands
- IndexedDB-Cache für schnelle Folgeaufrufe

## Dienststelle

Polizeirevier Pinneberg, Elmshorner Straße 40, 25421 Pinneberg.

## Quellen

OpenPLZ API / OpenStreetMap-Daten, ODbL. Kartendarstellung: Leaflet + OpenStreetMap. Routing: OSRM.
