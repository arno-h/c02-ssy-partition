const Loki = require("lokijs");
const cluster = require("cluster");
const db = new Loki('multi.json');

let coll = db.addCollection('multi');
// Beispiel-Einträge der Form: {"a17": "seventeen-a"}
let chr = 'abcdefghijklmnopqrstuvwxyz'[cluster.worker.id - 1];
coll.insert({key: chr+"17", value: 'seventeen-'+chr});
coll.insert({key: chr+"21", value: 'twenty-one-'+chr});

module.exports = db;
