'use strict';
var App = angular.module('eventsApp', ['ngSanitize']);
App.controller('EventController', function EventController($scope) {
  $scope.snippet = '<span style="color:red">Hi Dear</span>';
  $scope.boolvalue = true;
  $scope.myStyle = { color: 'red' };
  $scope.myClass = "Blue";
  $scope.buttonDisable = true;
  $scope.sortorder = 'name';

  $scope.event = {
    name: 'Angular Js',
    date: '1/2/2010',
    time: '10:30 am',
    location: {
      address: 'Google HeadQuarters',
      city: 'Mountain View(C.A)',
      province: '(U.S.A)'
    },
    imageUrl: 'img/anguralBlue.png',
    /// <reference path="../../img/anguralBlue.png" />/// <reference path="../../img/anguralBlue.png" />


    sessions: [
  {
    name: 'Manish Prasad',
    age: '23',
    address: 'India(Earth)',
    upVoteCount: 3
  },
  {
    name: 'Raghav Sinha',
    age: '23',
    address: 'India(Earth)',
    upVoteCount: 8
  },
  {
    name: 'Salman Khan',
    age: '23',
    address: 'India(Earth)',
    upVoteCount: 10
  }
  ]

  }

  $scope.upVoteSession = function (session) {
    session.upVoteCount++;
  };
  $scope.downVoteSession = function (session) {
    session.upVoteCount--;
  };


}
);