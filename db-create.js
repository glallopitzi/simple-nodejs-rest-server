var cradle = require('cradle');

var db = new(cradle.Connection)().database('jr');

db.exists(function (err, exists) {
  if (err) {
    console.log('error', err);
  } else if (exists) {
    console.log('database already exists');
  } else {
    console.log('database does not exists.');
    db.create();
    /* populate design documents */
  }
});


db.save('_design/adverts', {
  all: {
      map: function (doc) {
          if (doc.title && doc.description) emit(doc.title, doc.description);
      }
  }
});