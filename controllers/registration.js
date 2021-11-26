var express = require('express');
var router = express.Router();
const nodeMailer = require('nodemailer');
var db = require('../database');
function register(req, res) {
  const data = { EmailId: req.body.EmailId, Password: req.body.Password, FirstName: req.body.FirstName, LastName: req.body.LastName, PhoneNo: req.body.PhoneNo, Role: req.body.Role, D_O_B: req.body.D_O_B };
  newEmailId = req.body.EmailId;
  newPassword = req.body.Password;
  db.query('SELECT Id FROM blogs.users WHERE EmailId = ?', newEmailId, (err, user) => {
    if (user) {
      //console.log("enter user " + user[0]);
      if (user[0]) {
        res.send('user already exists: ' + newEmailId);
      } else {
        db.query('INSERT INTO blogs.users SET ?', data, (err, row, fields) => {
          //console.log("seeting in DB: ", err);
          if (!err) {
            //res.send(fields);
            res.send('Resistration successful and  send gmail to user with EmailId :' + newEmailId);
            //sending mail to user
            const transporter = nodeMailer.createTransport({
              service: 'gmail',
              auth: {
                user: "venkateshlendugure12081999@gmail.com",
                pass: "Venk@tesh123"
              }
            })

            const options = {
              from: "venkateshlendugure12081999@gmail.com",
              to: req.body.EmailId,
              subject: "Thank you for registration",
              text: `Hi ${req.body.FirstName}
            Thank you for registrating on Blogs
            you have done your registration successful
            Thank you......`
            }
            transporter.sendMail(options, (err, info) => {
              if (err) res.json(err);
              else {
                res.send('send gmail to user');
                res.json(info);
              }
            });
          } else res.send("Resistration failed ", err);
        });
      }
    }
  });
}


module.exports = register;
