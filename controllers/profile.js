var express = require('express');
var router = express.Router();
var db = require('../database');
var jwt = require('jsonwebtoken');
function view_Profile(req, res) {

    var sql = "SELECT EmailId, FirstName, Caption,Image,Created_At FROM users JOIN posts ON  users.Id=posts.UserId";
    db.query(sql, [req.user.Id], (err, results) => {
        if (err) res.send(err);
        else res.send(results);
    })
};
module.exports = view_Profile;
