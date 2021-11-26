var express = require('express');
var db = require('../database');
const infoFun = (req, res) => {
    //console.log(`${req.user.Id}`);
    db.query('SELECT * FROM blogs.users WHERE Id = ?', `${req.user.Id}`, (err, result) => {
        if (!err) {
            console.log('user info is generated');
            res.send(result);
        }
        else res.send(err);
    })
}

module.exports = infoFun;