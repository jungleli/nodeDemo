var express = require('express');
var router = express.Router();
var itemList = require("../model/restDemo");

/* GET users listing. */
router.get('/list', function(req, res) {
  itemList.query(req, res);
});

router.delete('/delete/:id', function(req, res){
	itemList.delete(req, res);
})

router.put('/add', function(req, res){
	itemList.add(req, res);
})

module.exports = router;
