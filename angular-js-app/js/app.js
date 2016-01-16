/*
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
}); */
  var app = angular.module('blog', [ ]);

app.controller('PersoanaController', ['$scope', '$http', function($scope, $http) {
    $scope.helloWorld = 'Aplicatii Web cu suport Java!';

    
    
  var url = "http://localhost:8080/persoana";
   $scope.persoane = [];
   $scope.keys = [];
	$scope.obj={};
   $scope.person = {};
   $scope.editPerson = {};
 
 
 
   $http.get('http://localhost:8080/persoana').then(
     function successCallback(response) {
		$scope.obj=response;
     $scope.persoane = $scope.obj.data;
     $scope.keys = Object.keys(response.data[0]);
   });
 

    
    
    
    
    

$scope.addPersoana = function(persoana) {
        persoana.id = parseInt(persoana.id);
        console.log(persoana.id);
        $http({
            method: 'POST',
            url: url,
            data: persoana
        }).then(function successCallback(response) {
            console.log(response);
            $scope.persoane.push(persoana);
            $scope.persoana={};
            // done.
        }, function errorCallback(response) {
            console.log(response);
           
        });
    };


    $scope.deletePersoana = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.persoane = $scope.persoane.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };



    $scope.setUpdatePerson = function(person) {
        $scope.editPerson = person;
    };


    $scope.updatePerson = function() {
        $http({
            method: 'PUT',
            url: url,
            data: $scope.editPerson
        }).then(function successCallback(response) {
            $scope.editPerson = {};
            console.log(response);
            // $scope.persoane.push($scope.editPerson);
            // done.
        }, function errorCallback(response) {
            $scope.editPerson = {};
            console.log(response);
        });
    };
  }]);


app.controller('ProdusController',function($scope,$http) {
  $scope.helloWorld = 'Aplicatii Web cu suport Java!';
        $scope.editPro = {};
    var url = "http:localhost:8080/Produs";
    $http.get(url).success(function(response){
        
        $scope.produse = response;
        console.log($scope.produse);
    });

    
    $scope.deleteProdus = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.produse = $scope.produse.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };
    
    
    $scope.setUpdateProdus = function(pro) {
        
        $scope.editPro = pro;
        console.log($scope.editPro);
    };
    
    
    
    
    $scope.updateProdus = function() {
        $http({
            method: 'PUT',
            url: url,
            data: $scope.editPro
        }).then(function successCallback(response) {
            $scope.editPro = {};
            console.log(response);
            // $scope.persoane.push($scope.editPerson);
            // done.
        }, function errorCallback(response) {
            $scope.editPro = {};
            console.log(response);
        });
    };
    
});

app.controller('MasinaController',function($scope,$http) {
  $scope.helloWorld = 'Aplicatii Web cu suport Java!';
        $scope.editMa = {};
    var url = "http:localhost:8080/Masina";
    $http.get(url).success(function(response){
        
        $scope.masini = response;
        console.log($scope.masini);
    });
    
    $scope.deleteMasina = function(id) {
        $http({
            method: 'DELETE',
            url: url+'/' + id,
            data: {}
        }).then(function successCallback(response) {
            // aici nu intra niciodata ca e functia de succes
        }, function errorCallback(response) {
            // aici intra pentru ca da eroare
            $scope.masini = $scope.masini.filter(function(obj) {
                return obj.id !== id;
            });
        });
    };
    
    
    $scope.setUpdateMasina = function(ma) {
        
        $scope.editMa = ma;
        console.log($scope.editMa);
    };
    
    
    
    
    $scope.updateMasina = function() {
        $http({
            method: 'PUT',
            url: url,
            data: $scope.editMa
        }).then(function successCallback(response) {
            $scope.editMa = {};
            console.log(response);
            // $scope.persoane.push($scope.editPerson);
            // done.
        }, function errorCallback(response) {
            $scope.editMa = {};
        });
    };
    
});




