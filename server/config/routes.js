var friend = require('./../controllers/friends.js')
module.exports = function(app){

  app.post('/friends/create', function(req, res){
    friend.create(req, res)
  })

  app.get('/friends/all', function(req, res){
    friend.showAll(req, res)
  })

  app.post('/friends/delete', function(req, res){
    friend.deleteUser(req, res)
  })

  app.post('/friends/show', function(req, res){
    friend.showOne(req, res)
  })

  app.post('/friends/edit', function(req, res){
    friend.update(req, res)
  })
}
