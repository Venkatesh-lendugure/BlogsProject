var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
var db = require('../database');

function login (req, res) {
    const newEmailId = req.body.EmailId;
    const newPassword = req.body.Password;
    //console.log(newPassword);
    //console.log(newEmailId);
    db.query('SELECT * FROM blogs.users WHERE EmailId = ?', newEmailId, (err, results) => {
        //console.log(pwrd);
        // console.log(UserId);
        //const pwrdOriginal = results[0].Password;
        //console.log(pwrdOriginal);
        if (results[0].Password == newPassword) {
            //res.send(rows)
            const token = jwt.sign({ Id: results[0].Id }, '12345')//this line generates the JWT token
            //  console.log(token);
            res.send({
                token
            })
        } else {
            res.send("credentials not matched");
        }
    })
}

module.exports = login;