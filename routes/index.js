var express = require('express');
var router = express.Router();
// var monk = require('monk');
// var db = monk('localhost:27017/demo');
var db = require('monk')('localhost:27017/demo');


/* GET home page. */
router.get('/', function(req, res, next) {

    var collection = db.get("bookmarks");
    collection.find({},{},function(err,result){
        if(err){
            res.send(err);
        }else{
        	// console.log(result);
            res.render('index', 
            			{title: "bookmarkList", items: result});
        }
    });
});

var newItem=[

  {
    title: 'Express 4.x - API 中文手册',
    url:  'http://www.expressjs.com.cn/4x/api.html',
    created: '2015-12-10'
  },
  {
    title: 'npm',
    url:  'https://www.npmjs.com/',
    created: '2015-12-11'
  },
  {
    title: 'nodejs',
    url: 'https://nodejs.org/en/',
    created: '2015-12-23'
  }
];

router.post('/add', function(req, res){
	// var newItem = req.body;
	var collection = db.get("bookmarks");
	collection.insert(newItem, function(err){
		if(err){
			res.send(err);
		}else{
			res.redirect('/');
		}
	});	
});


module.exports = router;
