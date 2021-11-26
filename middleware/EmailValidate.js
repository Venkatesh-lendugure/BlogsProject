var validator = require('validator');
function isEmail(req, res, next) {
    const EmailId = req.body.EmailId;
    if ((EmailId.length >= 12) && (EmailId.length <= 40)) {
        if (validator.isEmail(EmailId)) {
            next();
        } else {
            res.send('Not a valid EmailId');
        }
    } else {
        res.send('Given EmailId Is not in the given Range between 10 to 40');
    }

};

module.exports = isEmail;