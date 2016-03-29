angular.module('bmi_calculator.controllers', [])

.controller('AboutController', function($scope, Users) {
  $scope.aboutMessage = "Coded by Thomas and Mazen";
  $scope.users = Users;
})

.controller('BmiController', function($scope, $state, $stateParams) {

  $scope.method = $stateParams.method
  console.log($scope.method)
  $scope.data = {};
  $scope.calculateBMI = function() {
    var person = new Person({
      weight: $scope.data.weight,
      height: $scope.data.height
    });
    console.log($scope.method);
    if ($scope.method == 'metric'){
      person.calculate_bmi_met();
    } else {
      person.calculate_bmi_imp();
    }

    $scope.person = person

  };

})

.controller('CoverController', function($scope, $state) {
  $scope.data = {};
  $scope.measurment_option = [{
    text: "Metric",
    value: "metric"
  }, {
    text: "Imperial",
    value: "imperial"
  }, ];

  $scope.changeMethod = function() {
    $state.go('tabs.bmi', {
      method: $scope.data.measurement
    });
  };

});
