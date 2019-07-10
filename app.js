(function () {
    'use strict'
    angular.module('assignment1', [])
    .controller('assignment1Controller', function ($scope) {
        $scope.lunch_menu = 'list comma separated dishes you usually have for lunch'
        function check (){
            list_lunch_menu = $scope.lunch_menu.split(",")
            if (list_lunch_menu.length <= 3){
                $scope.message = "Enjoy!"
            } else {
                "Too much!"
            }
        }
    })
})()
