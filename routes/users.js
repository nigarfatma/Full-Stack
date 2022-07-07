var express = require('express');
var router = express.Router();
const authController=require("../controller/authController");
const userController=require("../controller/userController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// IMAGE UPLOAD

//  API OF signup OF USER
router.post('/user/signup',authController.signup);
// API OF LOGIN OF USER
router.post('/user/login',authController.login);

// API OF the USER
router.get('/user',userController.userList);
router.post('/user',upload.single('profile'),userController.userAdd);
router.put('/user',userController.userEdit);


module.exports = router;
