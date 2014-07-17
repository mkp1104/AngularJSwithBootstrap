
var App = angular.module('app', []);

App.controller('CommentController', function ($scope) {
  var defaultForm = {
    author: "",
    email: "",
    comment: ""
  };
  if (!$scope.reff.name)
  $scope.isShowInput = true;
  $scope.postComments = function (comment) {
    //make the record pristine
    $scope.commentForm.$setPristine();
    $scope.comment = angular.copy(defaultForm);
  };
});
      App.controller('ExampleCtrl', function ($scope) {
        var defaultForm = {
          name: "",
          age: "",
          title: ""
        };
        $scope.people = [];

        $scope.addPerson = function (pkp) {
          debugger;
          $scope.people.push(pkp.mkp);
          $scope.pkp = angular.copy(defaultForm);
        };

        $scope.removePerson = function (index) {
          $scope.people.splice(index, 1);
        };
      });