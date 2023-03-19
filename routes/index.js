var express = require('express');
var router = express.Router();
const indexController = require('../controllers/IndexController')
const digitzedController = require('../controllers/DigitizedController')

/* GET home page. */
router.get('/', indexController.index);

//add to masterlist and save uploaded documents
router.post('/add-files', digitzedController.store)

//get masterlist excel file
router.get('/masterlist', indexController.excel)

module.exports = router;
