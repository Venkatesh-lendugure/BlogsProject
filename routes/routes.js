const express = require('express');
var router = express.Router();
var registrationRouter = require('../controllers/registration');
var loginRouter = require('../controllers/login');
var isEmail = require('../middleware/EmailValidate');
var isPass = require('../middleware/passwordValid');
var validate = require('../middleware/validate');
var infoFun = require('../controllers/infoFun');
var postValidate = require('../middleware/postValidate');
var add_Post = require('../controllers/addPost');
var view_Profile = require('../controllers/profile');


router.post('/register', isEmail, isPass, registrationRouter);
router.post('/login', isEmail, isPass, loginRouter);
router.post('/userInfo', validate, infoFun);
router.get('/view_Profile', validate, view_Profile);

router.post('/add_Post',validate, postValidate.isCaption, postValidate.val_url, postValidate.vali_Date, add_Post);

  module.exports = router;