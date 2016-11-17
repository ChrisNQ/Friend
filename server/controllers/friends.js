var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function(){
  return {

    create: function(req, res){
      var friend = new Friend(req.body);
      // console.log(friend);
      friend.save(function(err, friend){
        res.json(friend)
      })
    },

    showAll: function(req, res){
      Friend.find({}, function(err, data){
        res.json(data)
      })
    },

    deleteUser: function(req, res){
      Friend.findOneAndRemove({_id: req.body._id}, function(err, data){
        res.json(data)
      })
    },

    showOne: function(req, res){
      Friend.findOne({_id: req.body.id}, function(err, data){
        res.json(data)
      })
    },

    update: function(req, res){
      Friend.findOneAndUpdate({_id: req.body[0].id}, req.body[1], function(err, data){
        res.json(data)
      })
    }
  }
})()
