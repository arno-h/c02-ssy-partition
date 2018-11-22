const Loki = require("lokijs");

const db = new Loki('peer.json');

// Erzeugt 26 Collections, mit den Namen "peer-a" bis "peer-z"
for (let i of 'abcdefghijklmnopqrstuvwxyz') {
    let collectionName = 'peer-' + i;
    let coll = db.addCollection(collectionName);

    // Beispiel-Einträge der Form: {"a17": "seventeen-a"}
    coll.insert({key: i+"17", value: 'seventeen-'+i});
    coll.insert({key: i+"21", value: 'twenty-one-'+i});
}

module.exports = db;