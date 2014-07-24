'use strict';
App.controller('EditEventController', function EditEventController($scope) {

  $scope.SaveEvent = function (event, newEventForm) {

    console.log(newEventForm);
    if (newEventForm.$valid) {
      window.alert('event' + event.name + 'saved!');
    }
    else {
      window.alert('Form is not Valid!!!!');
    }
  };
  $scope.EventEditCancel = function () {

    window.location = 'EditEventDetails.htm';
  };

});