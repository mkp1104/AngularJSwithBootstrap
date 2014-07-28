'use strict';
app.controller('MultipleFormController', function MultipleFormController($scope) {

  $scope.submitForm1 = function (data) {
    console.log('Submitting form1');
    console.log(data);

  };
  $scope.submitForm2 = function (data,data1) {
    console.log('Submitting form2');
    console.log(data);

  };
});