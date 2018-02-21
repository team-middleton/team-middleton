var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var db = require('../database-mysql');
var APIKey = require('./yelpAPI.js');
var utilsMethods = require('./utils.js');
var axios = require('axios');


var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
app.use(session({
  resave: false, 
  saveUninitialized: false, 
  secret: 'superSuperSecretString', 
  cookie: {maxAge : 600000}
}));

var checkSession = {}

app.post('/signup', (req, res) => {
  if (req.body.username && req.body.password) {
    var user = req.body.username
    var pass = req.body.password
    var zipcodefrom = req.body.zipcodefrom
    db.connection.query(
      `SELECT * FROM users WHERE username = '${user}'`,
      function(err, results) {
        if (err) console.error(err);
        if (results.length === 0) { 
          bcrypt.hash(pass, null, null, (err, hash) => {
            if (err) console.error(err)
            db.connection.query(
              `INSERT INTO users (id, username, password, zipcodefrom, totalbudget) VALUES (?, ?, ?, ?, ?)`,
              [null, user, hash, zipcodefrom, null], 
              function(err) {
                if (err) console.error(err)
                db.connection.query(
                  `SELECT id FROM users WHERE username = '${user}'`,
                  function(err, results) {
                    if (err) { console.error(err) }
                    var id = results[0].id            
                    db.connection.query(
                      `INSERT INTO todos (id, user, task, price, complete, searchterm) VALUES 
                      (null, ${id}, 'End your lease', null, 0, null),
                      (null, ${id}, 'Buy packing supplies', 50, 0, null),   
                      (null, ${id}, 'Pack your things', null, 0, null),
                      (null, ${id}, 'Hire movers or rent a truck', 200, 0, null),
                      (null, ${id}, 'Pack the truck', null, 0, null),
                      (null, ${id}, 'Clean your old place', null, 0, null),
                      (null, ${id}, 'Drive the truck', null, 0, null),
                      (null, ${id}, 'Unpack and enjoy your new home!', null, 0, null)`, 
                      function(err) {
                        if (err) console.error(err)
                        res.status(201).send(/*affirmative*/)
                      } 
                    )
                  }
                )
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
      `SELECT * FROM users WHERE username = '${user}'`,
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

app.get('/tasks', (req, res) => {
  db.connection.query(
    `SELECT * FROM todos WHERE id = '${req.session.userId}'`,
    function(err, data) {
      if(err) console.error(err)
      res.status(200).send(data)
    }
  )
})

app.post('/tasks', (req, res) => {
  db.connection.query(
    `INSERT INTO todos (id, user, task, price, complete, searchterm) VALUES (?, ?, ?, ?, ?, ?)`,
    [null, req.session.userId, req.body.task, req.body.cost, req.body.complete, null],
    function(err) {
      if (err) console.error(err)
      res.status(201).send()
    }
  )
})

app.delete('/tasks', (req, res) => {
  `DELETE FROM tasks WHERE id = '${req.params.taskId}'`,
  function(err) {
    if (err) console.error(err)
    res.status(202).send()
  }
})

app.post('/budget', (req, res) => {
  db.connection.query(
    `UPDATE users SET totalbudget = '${req.body.budget}' WHERE id = '${req.session.userId}'`,
    function(err) {
      if (err) console.error(err)
      res.status(201).send()
    }
  )
})

app.post('/checklist', (req, res) => {
  db.connection.query(
    `UPDATE todos SET complete = 'true' WHERE id = '${req.body.taskId}'`,
    function(err) {
      if (err) console.error(err)
      res.status(201).send()
    }
  )
})

app.post('/expenses', (req, res) => {
  db.connection.query(
    `UPDATE todos SET price = '${req.body.cost}' WHERE id = '${req.body.taskId}'`,
    function(err) {
      if (err) console.error(err)
      res.status(201).send()
    }
  )
})

app.get('/services', (req, res) => {
	axios.get('https://api.yelp.com/v3/businesses/search', {
  	headers: {
  		Authorization : `Bearer ${APIKey.yelpAPI}`
  	}, 
  	params: {
  		term: req.query.term,
  		location: req.query.location,
  		sort_by: 'distance',
  		limit: 10
  	}
  })
  .then((response) => {
    // console.log('this is res ', response);
    var cleanedData = utilsMethods.dataCleaner(response.data.businesses)
    res.status(200)
  	res.send(cleanedData)
  })
  .catch((err) => {
    console.error('err', err)
  })
})

app.get('/map', (req, res) => {
  map.plotLocation(req.body.latitude, req.body.longitude)
  .then((result) => {
    res.status(200).send(result)
  })
  .catch((err) => {
    console.error(err)
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});