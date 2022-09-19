//Import d'express
const express = require('express');
//utilisation router d'express
const router = express.Router();

//import des controllers
const userCtrl = require('../controllers/user');

//Router
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//Export
module.exports = router;