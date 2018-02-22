var mysql = require('mysql');
var bcrypt = require('bcrypt');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'moving'
});

connection.connect((err) => {
  if (err) { console.log('error connecting to db'); return; }
  console.log('connected to the db');
});

module.exports.connection = connection;