var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var db = require('../database-mysql');

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

var checkSession = {}

app.post('/signup', (req, res) => {
  if (req.body.username && req.body.password) {
    var user = req.body.username
    var pass = req.body.password
    db.connection.query(
      `SELECT * FROM users WHERE username = ${user}`,
      function(err, results) {
        if (err) console.error(err);
        if (results.length === 0) {
          bcrypt.hash(pass, null, null, (err, hash) => {
            if (err) console.error(err)
            db.connection.query(
              `INSERT INTO users (id, username, password, to, from, budget) VALUES (?, ?, ?, ?, ?, ?)`,
              [null, user, hash, null, null, null], 
              function(err) {
                if (err) console.error(err)
                res.status(200).send(/*affirmative*/)
              }
            )
          })
        } else {
          res.status(403).send(/*negative*/)
        }
      }
    )
  } else {
    res.status(403).send(/*negative*/)
  }
})

app.post('/login', (req, res) => {
  if (req.body.username && req.body.password) {
    var user = req.body.username
    var pass = req.body.password
    db.connection.query(
      `SELECT * FROM users WHERE username = ${user}`,
      function(err, results) {
        if (err) console.error(err);
        if (results.length > 0) {
          bcrypt.compare(pass, results[0].password, function(err, exists) {
            if (exists) {
              req.session.userId = results[0].id
              res.status(201).send(/*affirmative*/)
            } else {
              res.status(403).send(/*negative*/)
            }
          })
        } else {
          res.status(403).send(/*negative*/)
        }
      }
    )
  } else {
    res.status(403).send(/*negative*/)
  }
})

app.post('/userdata', (req, res) => {
  db.connection.query(
    `UPDATE users SET from = ${req.from}, to = ${req.to} WHERE id = ${req.userId}`, 
    function(err) {
      if (err) console.error(err)
      res.status(201).send()
    }
  )
})

app.post('/tasks', (req, res) => {

})

app.post('/budget', (req, res) => {

})

app.get('/services', (req, res) => {

})

app.post('/services', (req, res) => {

})

app.get('/map', (req, res) => {

})

app.post('/map', (req, res) => {

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

