
var hotel =[];
var app = angular.module('ofertasApp', ['ui.bootstrap']);




app.controller('CtrlOferta',function($scope,$http){

    
	$scope.carregar = function() {
		// faz um get ao server para obter o hotel em destaque
		   $http({
			  method: 'GET',
			  url: '/api/oferta'
		   }).then(function (data){
			      $scope.slides = [];			
				  hotel = data.data;
				  $scope.hotel = hotel;
				  $scope.id = hotel.id;
				  $scope.nome = hotel.title;
				  $scope.local = hotel.location;
				  $scope.descricao = hotel.description;
				  if (hotel.photos != undefined){
					  hotel.photos.forEach(function(foto){ $scope.slides.push({'image':foto}) });
					  jQuery(document).ready(function () {
						  if (hotel.photos.length == 5){
							  $('.sl').addClass('tam5');
						  }else if (hotel.photos.length == 8){
							  $('.sl').addClass('tam8');
						  };
					  });  
				  }
				  
				  $scope.opcoes = hotel.options; 
				  $scope.diarias = hotel.diarias;
                  $scope.saidas = hotel.saidas;	
		   },function (error){
			//alert('Error: ' + data);
		   });
    
				       
     
    
   };
	
    $scope.consultar = function() {
		// faz um post passando parâmetros de consulta e recebe as ofertas do hotel em destaque
		var saida = $scope.saida == null ? "" : $scope.saida;
		var diaria = $scope.diaria == null ? "" : $scope.diaria;
		var filtro = [$scope.id,saida,diaria];
			
		$http({
			  method: 'POST',
			  url: '/api/oferta',
			  data: filtro
		   }).then(function (data){
			      var hotel_sel = [];
				  hotel_sel = data.data;
				  $scope.hotel = hotel_sel;
				  $scope.opcoes = hotel_sel.options; 
		   },function (error){
			//alert('Error: ' + data);
		   });
    
    
   };
   
    $scope.recarregaDiaria = function() {
		// recarrega o select de diárias de acordo com a cidade de saída selecionada
		if ($scope.saida !=""){
			$scope.diarias = [];
			for (var j=0; j<hotel.options.length; j++){
				for (var x=0; x<hotel.options[j].from.length;x++){
					
					if(hotel.options[j].from[x] == $scope.saida){
						$scope.diarias.push(hotel.options[j].daily);
						
					}
												
				};
			};
			$scope.diarias = $scope.diarias.filter(function(elem, index, self) { return index == self.indexOf(elem);})
			$scope.diarias.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} ); 
		}else{
			$scope.diarias = hotel.diarias;
		}
		$scope.diaria = $scope.diarias[-1];
		// chama a function consultar para realizar o post
        $scope.consultar();
   };
   

  //intervalo da transição de slides
  $scope.myInterval = 5000;
  
  //realiza a troca da foto em destaque após um clique na foto thumb
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

