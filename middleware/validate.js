var jwt = require('jsonwebtoken');
var express = require('express');
var db = require('../database');
var router = express.Router();
const validate = (req, res, next) => {
    const token = req.headers.authorization;
    //console.log(token);
    if (!token) {
        res.send("you are not authorized");
    } else {
        jwt.verify(token, '12345', (err, result) => {
            if (err) {
                res.send("token is not valid " + err);
            } else {
                console.log('token is valid');
                req.user = result;
                next();

            }
        })
        //      res.send(req.headers)
    }

}

module.exports = validate;