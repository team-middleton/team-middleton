var mysql = require('mysql');
var bcrypt = require('bcrypt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'FILL_ME_IN',
  database : 'test'
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

var hashPass = function(value, callback){
  //hashing function with bcrypt will go here
}

module.exports.selectAll = selectAll;
