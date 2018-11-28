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

    // Alternative: where() mit extra Funktion:
    // let items = monoCollection.where(findKey)
    // function findKey(item) {
    //   return item.key == req.params.id;
    // }

    // Alternative: where mit anonymer Funktion (Lambda-Syntax):
    // let items = monoCollection.where((item) => item.key == req.params.id);

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
    let item;

    if (items.length == 0) {
        // der gesamte Body des Requests wird als "value" abgespeichert
        item = monoCollection.insert({key: req.params.id, value: req.body});
    } else {
        item = items[0];
        // beim Aktualisieren ebenfalls: der gesamte Body ist der neue "value"
        item.value = req.body;
        monoCollection.update(item);
    }
    res.json(item.value);
}

function delItem(req, res) {
    let items = monoCollection.find({key: req.params.id});
    if (items.length == 0) {
        res.status(404).end();
    } else {
        item = items[0];
        monoCollection.remove(item);
        res.json(item.value);
    }
}

module.exports = router;
