Partitionieren von Daten
========================

Verzeichnisse & Dateien
-----------------------

* bin/www ... Starten des Webservers, Error-Handling
* routes/ ... Hier stehen die einzelnen Controller
    * index.js ... Erzeugt eine einfache Start-Seite
    * mono.js ... Einfache Key-Value-Datenbank
    * multi.js ... Einfache Key-Value-Datenbank, 26 Partitionen
    * multi-loadbalancer.js ... Loadbalancer für Datenbank
    * peer.js ... Einfache Key-Value-Datenbank, 26 Partitionen, Peer-Routing
* src/ ... Datenmodell und Geschäftslogik
    * mono-database.js ... Datenbank und Fixtures mit Beispiel-Daten
    * multi-database.js ... Datenbank und Fixtures mit Beispiel-Daten
    * peer-database.js ... Datenbank und Fixtures mit Beispiel-Daten
* app-worker.js ... Definition & Setup der Express-Applikation
* package.json ... Welche Bibliotheken sonst eingebunden werden sollen
