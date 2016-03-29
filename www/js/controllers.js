angular.module('bmi_calculator.controllers', [])

  .controller('AboutController', function ($scope, Users) {
    $scope.aboutMessage = "Coded by Thomas and Mazen";
    $scope.users = Users;
  })

  .controller('BmiController', function ($scope) {

    $scope.data = {};
    $scope.calculateBMI = function () {
      var person = new Person({weight: $scope.data.weight, height: $scope.data.height});
      person.calculate_bmi_met();
      $scope.person = person

    };

  })

  //
  // .controller('BmiController', function ($scope) {
  //
  //   $scope.data = {};
  //   $scope.data.measurement = '';
  //
  //   $scope.calculateBMI = ('data.measurement', function () {
  //     var person = new Person({weight: $scope.data.weight, height: $scope.data.height});
  //
  //     if($scope.data.measurement== "metric")
  //       person.calculate_bmi_met();
  //     $scope.person = person;
  //     else
  //     person.calculate_bmi_imp();
  //     $scope.person = person;
  //   });
  //
  // })

  .controller('CoverController', function ($scope) {

    $scope.measurment_option = [
      {text: "Metric", value: "metric"},
      {text: "Imperial", value: "imperial"},
    ];
    $scope.data = {
      measurement: 'ng'
    };

  });
