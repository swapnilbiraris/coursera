(function () {
    'use strict'
    angular.module('assignment1', [])
    .controller('assignment1Controller', function ($scope) {
        $scope.lunch_menu = 'list comma separated dishes you usually have for lunch'
        $scope.message = ""
        $scope.check = function () {
            $scope.message = lunch_fun()            
        }
        let lunch_fun = function () {
            let list_lunch_menu = $scope.lunch_menu.split(",")
            if (list_lunch_menu.length <= 0){
                'Empty'
            } else {
                if (list_lunch_menu.length <= 3){
                    return "Enjoy!"
                } else {
                    return "Too much!"
                }
            }
        }
    })
})()
