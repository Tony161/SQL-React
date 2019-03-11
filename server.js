var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json())
app.use(cors())

var connect = () => {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12#$qwER',
    database: 'Zadanie'
  });
  connection.connect();
  return connection;
}

app.get('/Persons', (req, res) => {
  var connection = connect();
  connection.query('select * from People', (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
    connection.end();
  })
})

app.post('/Persons', function (req, res, next) {
  var connection = connect();
  var query = `INSERT into People (name,surname,company) values ('${req.body.name}', '${req.body.surname}', '${req.body.company}')`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send({});
  });
});

app.put('/Persons/:id', (req, res) => {
  var connection = connect();
  var query = `UPDATE People SET name='${req.body.name}', surname='${req.body.surname}', company='${req.body.company}' WHERE id='${req.params.id}'`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send({});
  });
});

app.delete('/persons/:id', function (req, res, next) {
  var connection = connect();
  var query = `DELETE from People where id = '${req.params.id}'`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send({});
  });
});

app.listen(3003, () => {
  console.log('Server is running');
})
