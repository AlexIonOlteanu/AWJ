var app = angular.module('blog', [ ]);

app.controller('PersoanaController',function($scope,$http) {
  $scope.helloWorld = 'Aplicatii Web cu suport Java!';

    var url = "http:localhost:8080/persoana";
    $http.get(url).success(function(response){
        
        $scope.persoane = response;
        console.log($scope.persoane);
    });

});


app.controller('ProdusController',function($scope,$http) {
  $scope.helloWorld = 'Aplicatii Web cu suport Java!';

    var url = "http:localhost:8080/Produs";
    $http.get(url).success(function(response){
        
        $scope.produse = response;
        console.log($scope.produse);
    });

});
app.controller('MasinaController',function($scope,$http) {
  $scope.helloWorld = 'Aplicatii Web cu suport Java!';

    var url = "http:localhost:8080/Masina";
    $http.get(url).success(function(response){
        
        $scope.masini = response;
        console.log($scope.masini);
    });
});
