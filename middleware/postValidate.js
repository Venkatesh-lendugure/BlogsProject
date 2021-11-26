var validUrl = require('valid-url');
var validateDate = require('validate-date');
//Validation of Caption 
function isCaption(req, res, next) {
    var Caption = req.body.Caption;
    if ((Caption.length >= 10) && (Caption.length <= 100)) {
        //console.log('Caption is valid');
        next();
    } else {
        res.send('Given Caption is not in the given range 10 to 100');
    }
}
//Validation of Given URL
function val_url(req, res, next) {
    var url = req.body.Image;
    //console.log(url);
    if (validUrl.isUri(url)) {
        console.log('Looks like an URI');
        next();
    } else {
        res.send('Not a URI');
    }
}
//Validation of Given date
function vali_Date(req, res, next) {
    var date = req.body.Created_At;
    //console.log(date);
    if (validateDate(date)) {
        console.log('date validated'); next();
    } else {
        res.send('Given date is not in the formate of YYYY/MM/DD',err);
    }
}
module.exports.val_url = val_url;
module.exports.vali_Date = vali_Date;
module.exports.isCaption = isCaption;
