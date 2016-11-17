app.controller('friendController', function($scope, friendFactory, $routeParams, $location, $route){

  $scope.list = [];
  friendFactory.showAll(function(data){
    $scope.list = data;
  })

  $scope.create = function(){
    friendFactory.create($scope.newFriend)
    $scope.newFriend = "";
    $location.url('/index')
  }

  $scope.deleteUser = function(user){
    friendFactory.deleteUser(user)
    $route.reload()
  }

  if ($routeParams.id) {
    friendFactory.showOne($routeParams, function(data){
    $scope.showOne = data;
  })}

  $scope.update = function(){
    var thing = [$routeParams, $scope.editFriend]
    friendFactory.update(thing)
    $location.url('/index')
  }

})
