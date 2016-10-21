angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Tyler the Creator', 'Earl Sweatshirt', 'Frank Ocean'];

  $scope.addFriend = function(friend) {
    $scope.friends.push(friend);
    console.log(friend);
  };

});
