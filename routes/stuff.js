//Import
const express = require('express');
const router = express.Router();
//Import des controllers
const stuffCtrl = require('../controllers/stuff');
//Import des middleware
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
//Routes 
router.get('/', auth, stuffCtrl.getAllSauce);
router.post('/:id/like', auth, stuffCtrl.likeSauce);
router.post('/', auth, multer, stuffCtrl.createSauce);
router.put('/:id', auth, multer, stuffCtrl.modifySauce);
router.get('/:id', auth,  stuffCtrl.getOneSauce);
router.delete('/:id', auth,  stuffCtrl.deleteSauce);

//Exports
module.exports = router;