const Loki = require("lokijs");
const db = new Loki('mono.json');
const mono = db.addCollection('mono');

// Erzeugt 26 Einträge der Form {"ainhorn": "einhorn-a"} analog zu den Partitionen von multi/peer
let chr = 'abcdefghijklmnopqrstuvwxyz';
for (let i=0; i < 26; i++) {
    mono.insert({key: chr[i] + "inhorn", value: 'einhorn-' + chr[i]});
    mono.insert({key: chr[i] + "lefant", value: 'elefant-' + chr[i]});
}

module.exports = db;
