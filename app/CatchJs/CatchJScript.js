'use strict';
var appCache = angular.module('cacheApp', ['ngResource'])
.factory('myCache', function ($cacheFactory) { 
            return $cacheFactory('myCache',{'capacity':3})
            


});