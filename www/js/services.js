angular.module('bmi_calculator.services', [])

.factory('Users', function() {
  var users = [
    {user_name: 'Thomas'},
    {user_name: 'Mazen'}
  ];
  return users;
});
