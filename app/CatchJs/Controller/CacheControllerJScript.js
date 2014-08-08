'use strict';
appCache.controller('CatchSampleController', function CatchSampleController($scope,myCache) {
    $scope.addToCache = function (key, value) {
        myCache.put(key, value);

    };
    $scope.readFromCache = function (key1212) {
        return myCache.get(key1212);

    };
    $scope.getCacheStatus = function () {
        return myCache.info();

    };

});

