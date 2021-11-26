var mysql = require('mysql');
const express = require('express');
var router = express.Router();
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Venk@tesh143",
  database: 'blogs',
  multipleStatements: true
});

conn.connect(function (err) {
  if (err) console.log(err);
  else
    console.log("Successfully Connected to db....... ");
});

module.exports = conn;