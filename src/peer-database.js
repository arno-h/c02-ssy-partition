const Loki = require("lokijs");
const cluster = require("cluster");
const db = new Loki('peer.json');

let coll = db.addCollection('peer');
// Beispiel-Einträge der Form: {"ainhorn": "einhorn-a"}
let chr = 'abcdefghijklmnopqrstuvwxyz'[cluster.worker.id - 1];
coll.insert({key: chr+"inhorn", value: 'einhorn-'+chr});
coll.insert({key: chr+"lefant", value: 'elefant-'+chr});

module.exports = db;
