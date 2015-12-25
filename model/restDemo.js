var db = require('monk')('localhost:27017/demo');
// var monk = require('monk');
// var db = monk('localhost:27017/demo');

module.exports = {
	query : function(req,res){

        var collection = db.get("bookmarks");
        collection.find({},{},function(err,result){
                if(err){
                res.send(err);
            }else{
                res.send(result);

            }
        });
	},

    add : function(req, res){
        var newItem = req.body;
        console.log(newItem);
        var collection = db.get("bookmarks");
        collection.insert(newItem, function(err){
            if(err){
                res.send(err);
            }else{
                res.send({status:'success', message:'Added!'});
            }
        }); 
    },

    delete : function(req, res){
        var delItem = req.params.id;
        console.log(delItem);
        var collection = db.get("bookmarks");
        collection.remove({'_id': delItem}, function(err){
            if(err){
                res.send(err);
            }else{
                res.send({status: 'success', message:"Deleted!"})
            }
        });
    }
}
