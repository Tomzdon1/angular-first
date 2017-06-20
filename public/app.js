var myApp = angular.module('app',[]);
    myApp.controller('firstCtrl',['$scope',function($scope){
        $scope.message = "Hello Arek";
    }]);

var myApp2 = angular.module('app2',[])
    myApp2.controller('secondCtrl',['$scope',function($scope){
        $scope.otherMessage = "Hello Darek";
    }]);