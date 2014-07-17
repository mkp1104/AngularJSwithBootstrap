'use strict';

eventsApp.controller('EventController', function EventController($scope) {

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
    upVoteCount: 0
  },
  {
    name: 'Manish Prasad1',
    age: '23',
    address: 'India(Earth)',
    upVoteCount: 0
  },
  {
    name: 'Manish Prasad2',
    age: '23',
    address: 'India(Earth)',
    upVoteCount: 0
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