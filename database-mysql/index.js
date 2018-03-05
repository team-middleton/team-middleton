var mysql = require('mysql');
var bcrypt = require('bcrypt');

// information for database hosted on AWS, deployed on Heroku
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

// export connection for import to the server file
// database and tables created in schema.sql
module.exports.connection = connection;