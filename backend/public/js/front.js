

var app = angular.module('ofertasApp', ['ui.bootstrap','ab-base64']);
var hotel_sel = [];


// Controller  for Carousel
app.controller('CtrlOferta',function($scope,$http){

    
	$scope.carregar = function() {
    
		$scope.slides = [];	
		
		$http.get('/api/todos')
            .success(function(data) {
				
				  hotel_sel = data;
				  $scope.id = hotel_sel.id;
				  $scope.nome = hotel_sel.title;
				  $scope.local = hotel_sel.location;
				  $scope.descricao = hotel_sel.description;
				  hotel_sel.photos.forEach(function(foto){ $scope.slides.push({'image':foto}) });
				  $scope.opcoes = hotel_sel.options; 
				  //myString = myString.replace(/\uFFFD/g, '')
                
            })
            .error(function(data) {
                alert('Error: ' + data);
          });
		       
     
    
   };
	
    $scope.consultar = function() {
    
		var saida = $scope.saida == null ? "" : $scope.saida;
		var diaria = $scope.diaria == null ? "" : $scope.diaria;
		var filtro = [$scope.id,saida,diaria];
		$http.post('/api/todos', filtro)
            .success(function(data) {
				
				  hotel_sel = data;
				  //$scope.nome = hotel_sel.title;
				  //$scope.local = hotel_sel.location;
				  //$scope.descricao = hotel_sel.description;
				  //hotel_sel.photos.forEach(function(foto){ $scope.slides.push({'image':foto}) });
				  $scope.opcoes = hotel_sel.options; 
				  //myString = myString.replace(/\uFFFD/g, '')
                
            })
            .error(function(data) {
                alert('Error: ' + data);
          });
		/* $http.get('/api/todos')
            .success(function(data) {
				 alert(data);
                
             })
            .error(function(data) {
                alert('Error: ' + data);
          }); */ 
        
     
    
   };

// initializing the time Interval
  $scope.myInterval = 5000;
  $scope.padrao = "Escolha"
 // Initializing  slide rray  
  $scope.saidas = ["Belém","Boa Vista","Brasilia","Campo Grande","Cuiabá","Ilhéus","Manaus","Rio de Janeiro","Salvador","São Paulo"];
  $scope.diarias = ["1","2","3","4","5","6","7","8","9","10"];

  $scope.destacarFoto = function(id){
  	jQuery(document).ready(function () {
  		$( "#" + id ).trigger("click");
  		
  		for (var i=0 ; i<$scope.slides.length; i++){
  			$( "#img" + i ).removeClass("thumb-active");
  		}
  		$( "#img" + id ).addClass("thumb-active");

  	});
  };

 

  //$scope.destaque = "images/photo4.jpg";
 
 
}); // Controller Ends here

