const express = require('express');
var app = express();

app.use(express.urlencoded({ exteded: true }));//to encode the incomming request urls
app.use(express.json());

app.use('/', require('./routes/routes'));
const port = 3800;
app.listen(port, function () {
    console.log("Running......");
});