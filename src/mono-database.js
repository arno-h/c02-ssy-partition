const Loki = require("lokijs");

const db = new Loki('mono.json');

const mono = db.addCollection('mono');
mono.insert({key: 'key1', value: 'value one'});
mono.insert({key: 'key2', value: 'value two'});
mono.insert({key: 'key3', value: 'value three'});

module.exports = db;