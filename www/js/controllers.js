angular.module('bmi_calculator.controllers', [])

  .controller('AboutController', function ($scope, Users) {
    $scope.aboutMessage = "Coded by Thomas and Mazen";
    $scope.users = Users;
  })

  .controller('BmiController', function($scope) {

    $scope.data = {};
    $scope.calculateBMI = function(){
      var person = new Person({weight: $scope.data.weight, height: $scope.data.height});
      person.calculate_bmi_met();
      $scope.person = person;
    };

  });
