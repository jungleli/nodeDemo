var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/demo');



/* GET home page. */
router.get('/', function(req, res, next) {

    var collection = db.get("slogan");
    collection.find({},{},function(err,result){
        if(err){
            res.send(err);
        }else{
        	// console.log(result);
            res.render('index', 
            			{title: "Say Hello to 思沃大讲堂", items: result});
        }
    });
});

router.post('/add', function(req, res){
	var newItem = req.body;    
	var collection = db.get("slogan");
	collection.insert(newItem, function(err){
		if(err){
			res.send(err);
		}else{
			res.redirect('/');
		}
	});	
});


module.exports = router;
