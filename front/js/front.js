

var app = angular.module('ofertasApp', ['ui.bootstrap']);
var hotel_sel = [];


// Controller  for Carousel
app.controller('CtrlOferta',function($scope,$http){

    $scope.slides = [];
    $scope.carregar = function() {
    
         
        var rs = $http.get("http://localhost:3000/");
        rs.success(function (response) {
          hotel_sel = response;
          $scope.nome = hotel_sel.title;
          $scope.local = hotel_sel.location;
          $scope.descricao = hotel_sel.description;
          hotel_sel.photos.forEach(function(foto){ $scope.slides.push({'image':foto}) });
          $scope.opcoes = hotel_sel.options;          
        });

        
     
    
   };

// initializing the time Interval
  $scope.myInterval = 5000;
  
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

