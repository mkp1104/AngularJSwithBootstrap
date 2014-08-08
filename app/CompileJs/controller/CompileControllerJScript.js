'use strict';
compileApp.controller('CompileSampleController', function ($scope, $compile, $parse) {

    var fn = $parse('1+2');
    console.log(fn());

    var getter = $parse('event.name');
    var context1 = { event: { name: 'Bootstrap Camp!!!'} };
    var context2 = { event: { name: 'Angular Js Should be Followed!!!'} };
    console.log(getter(context1));
    console.log(getter(context2));
    console.log(getter(context2, context1));
    var setter = getter.assign; // two way binding!!!!
    setter(context2, 'Code Review');
    console.log(getter(context2));
    console.log(context2.event.name);


    $scope.appendDivToElement = function (markup) {
        return $compile(markup)($scope).appendTo(anguler.element("#appendHere"));

    };


});

compileApp.controller('LocaleController', function LocaleController($scope, $locale) {
    console.log($locale);
    $scope.myDate = Date.now();
    //   $scope.myFormat = $locale.DATETIME_FORMATS.shortDate;
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

//    throw {message  : 'error Message by Manish Prasad'};


});

compileApp.controller('TimeOutController', function TimeOutController($scope, $timeout) {


    var promise = $timeout(function () {

        $scope.name = 'Manish Prasad';
    }, 3000);
    $scope.cancel = function() {
            $timeout.cancel(promise);
    
    };
});

compileApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception handler:"+exception.message);

    };


});

compileApp.controller('FilterSampleController', function FilterSampleController($scope, durationFilter) {
  //  var durations = $filter('durations');
    $scope.data.duration2 = durationFilter(2);
    $scope.data.duration5 = durationFilter(5);
    $scope.data.duration9 = durationFilter(9);
//    $scope.data.duration4 = durations(4);

});
compileApp.controller('CookiesController', function CookiesController($scope, $cookieStore) {
    $scope.event = { id: 1, name: "My Event" };

    $scope.SaveCookies = function (event) {
        $cookieStore.put('eventName', event);

    };
    $scope.GetCookies = function () {
        console.log($cookieStore.get('eventName'));
    };
    $scope.RemoveCookies = function () {
        $cookieStore.remove('eventName');

    };

});