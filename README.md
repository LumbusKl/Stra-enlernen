# Straßenlernen V5.1

PWA für das definierte Einsatzgebiet rund um Pinneberg.

Neu in V5:
- Karte leeren: temporäre Straßenmarker und Routen entfernen, Wachenmarker bleibt.
- Ortsgrenzen als Umrisse auf der Karte; außerhalb des geladenen Einsatzgebiets graue Fläche.
- Spiel „Straße auf leerer Karte“: Straßenname anzeigen, Punkt auf einer Karte ohne Straßennamen setzen, danach echte Lage und Entfernung anzeigen.
- Straßenbestand wird weiterhin lokal gespeichert.

Einsatzgebiet: Pinneberg, Kummerfeld, Prisdorf, Borstel-Hohenraden, Ellerbek, Bönningstedt, Hasloh, Halstenbek nur nördlich der Bahnlinie, Rellingen, Egenbüttel und Tangstedt (Kreis Pinneberg).


V5.1: Der Übungsmodus „Straße auf leerer Karte“ verwendet eine echte Basiskarte ohne Straßen-/Ortsnamen. Der Tile-Dienst besitzt einen Fallback, falls der primäre Dienst nicht erreichbar ist.
