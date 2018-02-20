var mysql = require('mysql');
var bcrypt = require('bcrypt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'moving'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

//possible helper functions: 
  //checking if user in the database
  //check password provided for user
  //add user to db

connection.connect((err) => {
  if (err) { console.log('error connecting to db'); return; }
  console.log('connected to the db');
});

module.exports.connection = connection;
module.exports.selectAll = selectAll;
