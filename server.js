var express = require('express'),
    countries = require('./routes/countries');
 
var app = express();
 
app.get('/countries', countries.findAllCountryCodes);

app.get('/countries/:id', countries.findCountryById);
 
app.listen(3000);
console.log('Listening on port 3000...');