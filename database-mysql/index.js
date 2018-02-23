var mysql = require('mysql');
var bcrypt = require('bcrypt');


var connection = mysql.createConnection({
  host     : process.env.DB_URL || 'moving.cgipzmxzylvi.us-east-1.rds.amazonaws.com',
  user     : 'middleton',
  password : 'h4ckr34t0r',
  database : 'moving'
});

connection.connect((err) => {
  console.log(process.env.DB_URL)
  if (err) { console.log('error connecting to db'); return; }
  console.log('connected to the db');
});

module.exports.connection = connection;