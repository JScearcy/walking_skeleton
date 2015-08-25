var app = angular.module('app', []);
app.controller('IndexController', ['$scope', '$http', function($scope, $http){
    $scope.cat = {};
    $scope.cats = [];
    var fetchCats = function(){
        return $http.get('/cats').then(function(resp){
            if (resp.status !==200) {
                throw new Error('Failed to fetch cats from API');
            }
            $scope.cat = {};
            $scope.cats = resp.data;
            return resp.data;
        })
    };
    $scope.add = function(cat){
        return $http.post('/add', cat).then(fetchCats())
    };
    fetchCats();
}]);