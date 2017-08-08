
var hotel_sel
var app = angular.module('ofertasApp', ['ui.bootstrap']);




app.controller('CtrlOferta',function($scope,$http){

    
	$scope.carregar = function() {
    
		$scope.slides = [];	
		
		$http.get('/api/oferta')
            .success(function(data) {
				   hotel_sel = [];
				  hotel_sel = data;
				  $scope.id = hotel_sel.id;
				  $scope.nome = hotel_sel.title;
				  $scope.local = hotel_sel.location;
				  $scope.descricao = hotel_sel.description;
				  hotel_sel.photos.forEach(function(foto){ $scope.slides.push({'image':foto}) });
				  jQuery(document).ready(function () {
					  if (hotel_sel.photos.length == 5){
						  $('.sl').addClass('tam5');
					  }else if (hotel_sel.photos.length == 8){
						  $('.sl').addClass('tam8');
					  };
				  });
				  $scope.opcoes = hotel_sel.options; 
				  $scope.diarias = hotel_sel.diarias;	
                  $scope.saidas = hotel_sel.saidas;
            })
            .error(function(data) {
                alert('Error: ' + data);
          });
		       
     
    
   };
	
    $scope.consultar = function() {
    
		var saida = $scope.saida == null ? "" : $scope.saida;
		var diaria = $scope.diaria == null ? "" : $scope.diaria;
		var filtro = [$scope.id,saida,diaria];
		$http.post('/api/oferta', filtro)
            .success(function(data) {
				  var hotel_sel = [];
				  hotel_sel = data;
				  $scope.opcoes = hotel_sel.options; 
				  $scope.diarias = hotel_sel.diarias;	
                
            })
            .error(function(data) {
                alert('Error: ' + data);
          });
	
     
    
   };


  $scope.myInterval = 5000;
    

  $scope.destacarFoto = function(id){
  	jQuery(document).ready(function () {
  		$( "#" + id ).trigger("click");
  		
  		for (var i=0 ; i<$scope.slides.length; i++){
  			$( "#img" + i ).removeClass("thumb-active");
  		}
  		$( "#img" + id ).addClass("thumb-active");

  	});
  };


 
 
}); 

