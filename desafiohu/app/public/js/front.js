

var app = angular.module('ofertasApp', ['ui.bootstrap']);




app.controller('CtrlOferta',function($scope,$http){

    
	$scope.carregar = function() {
    
		$scope.slides = [];	
		
		$http.get('/api/oferta')
            .success(function(data) {
				  var hotel_sel = [];
				  hotel_sel = data;
				  $scope.id = hotel_sel.id;
				  $scope.nome = hotel_sel.title;
				  $scope.local = hotel_sel.location;
				  $scope.descricao = hotel_sel.description;
				  hotel_sel.photos.forEach(function(foto){ $scope.slides.push({'image':foto}) });
				  $scope.opcoes = hotel_sel.options; 
			
                
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
			
                
            })
            .error(function(data) {
                alert('Error: ' + data);
          });
	
     
    
   };


  $scope.myInterval = 5000;
  
  $scope.saidas = ["Belém","Boa Vista","Brasilia","Campo Grande","Cuiabá","Ilhéus","Manaus","Rio de Janeiro","Salvador","São Paulo"];
  $scope.diarias = ["1","2","3","4","5","6","7","8","9","10","11","12"];

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

