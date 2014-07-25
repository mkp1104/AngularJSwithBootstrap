'use strict';
App.controller('EditEventController', function EditEventController($scope,eventData) {

//  $scope.SaveEvent = function (event, newEventForm) {
//  $scope.SaveEvent = function (event, newEventForm) {


  $scope.event = {};
  $scope.SaveEvent = function(event,form)
  {
  if(form.$valid){
  eventData.save(event).$promise.then(
                            function(response){console.log('success',response)}, 
                            function(response){console.log('Failure',response)}
                            ); 
    
  }
  
  
  
  };



//    console.log(newEventForm);
//    if (newEventForm.$valid) {
//      window.alert('event' + event.name + 'saved!');
//    }
//    else {
//      window.alert('Form is not Valid!!!!');
//    }
//  };
  $scope.EventEditCancel = function () {

    window.location = 'EditEventDetails.htm';
  };

});