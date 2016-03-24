angular.module('starter.controllers', [])

  .controller('AboutController', function () {

  })

  .controller('BmiController', function($scope) {
    var person = new Person({weight: 80, height: 186});
    person.calculate_bmi_met();
    $scope.person = person;


  });
