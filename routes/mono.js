const express = require('express');
const database = require('../src/mono-database');
const router = express.Router();

// Drei Routen für typische CRUD-Operationen
router.get('/:id', getItem);
router.put('/:id', putItem);
router.delete('/:id', delItem);

const monoCollection = database.getCollection('mono');

// soll Value retournieren
function getItem(req, res) {
    // suche alle Objekte, deren Inhalt ein key-Feld mit key==req.params.id hat
    let items = monoCollection.find({key: req.params.id});
    // items ist ein Array. Falls kein Objekt gefunden, dann eben leeres Array
    if (items.length == 0) {
        res.status(404).end();
    } else {
        // Eintrag gefunden: retourniere value des ersten Treffers
        res.json(items[0].value);
    }
}

function putItem(req, res) {
    let items = monoCollection.find({key: req.params.id});
    if (items.length == 0) {
        item = monoCollection.insert({key: req.params.id, value: req.body.value});
    } else {
        item = items[0];
        item.value = req.body.value;
        monoCollection.update(item);
    }

    // auch PUT liefert nur den Wert zurück
    res.json(item.value);
}

function delItem(req, res) {
    let items = monoCollection.find({key: req.params.id});
    if (items.length == 0) {
        res.status(404).end();
    } else {
        item = items[0];
        monoCollection.remove(item);
        // auch DELETE liefert Wert zurück
        res.json(item.value);
    }
}

module.exports = router;
