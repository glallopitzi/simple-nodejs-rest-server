var express = require('express'),
    cradle = require('cradle'),
    countries = require('./routes/countries'),
    adverts = require('./routes/adverts');

var app = express();



// TODO use couchdb or not?
var db = new(cradle.Connection)().database('countries');
console.log('db exists: ', db);


app.get('/countries', countries.findAllCountryCodes);
app.get('/countries/:id', countries.findCountryById);

app.get('/adverts', adverts.findAllAdverts);

app.listen(3000);
console.log('Listening on port 3000...');