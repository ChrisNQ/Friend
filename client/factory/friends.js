app.factory('friendFactory', function($http){
  var factory = {}

  factory.create = function(data){
    $http.post('/friends/create', data)
  }

  factory.showAll = function(callback){
    $http.get('/friends/all').success(function(data){
      callback(data);
    })
  }

  factory.deleteUser = function(user){
    $http.post('/friends/delete', user)
  }

  factory.showOne = function(data, callback){
    $http.post('/friends/show', data).success(function(output){
      callback(output);
    })
  }

  factory.update = function(data){
    $http.post('/friends/edit', data)

  }

  return factory;
})
