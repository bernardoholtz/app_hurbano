
var app = angular.module('ofertasApp', ['ui.bootstrap']);


// Controller  for Carousel
app.controller('CtrlOferta',function($scope){

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

 
  $scope.nome = "Hotel The Mirage (Hotel & Casino)" ;
  $scope.local = "Las Vegas, USA";
  $scope.descricao = "Aéreo de várias cidades + Hotel em Vegas";
  $scope.destaque = "images/photo4.jpg";
  $scope.slides = [
	{image:"images/photo1.jpg"},
	{image:"images/photo2.jpg"},
	{image:"images/photo3.jpg"},
	{image:"images/photo4.jpg"},
	{image:"images/photo5.jpg"},
	{image:"images/photo6.jpg"}
  ];

  $scope.opcoes =   [
      {
        id: 2,
        title: "Noites em Vegas e Albuquerque",
        description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
        from: [
          "Brasilia",
          "Campo Grande"
        ],
        daily: 5,
        price: 2380
      },
      {
        id: 0,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Manaus",
          "Belém"
        ],
         daily: 5,
         price: 2549
      },
      {
        id: 1,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Rio de Janeiro"
        ],
         daily: 5,
         price: 2620
      },
      {
        id: 3,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Manaus"
        ],
         daily: 8,
         price: 3549
      },
      {
        id: 7,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Rio de Janeiro"
        ],
         daily: 12,
         price: 5120
      },
      {
        id: 8,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Brasilia",
          "Salvador",
          "Campo Grande"
        ],
         daily: 12,
         price: 5380
      },
      {
        id: 4,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Rio de Janeiro",
          "São Paulo"
        ],
         daily: 8,
         price: 3720
      },
      {
        id: 5,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Brasilia"
        ],
         daily: 8,
         price: 3380
      },
      {
        id: 6,
         title: "Noites em Vegas e Albuquerque",
         description: "Atenção, quarto duplo é necessário adquirir 2 pacotes",
         from: [
          "Manaus",
          "Salvador",
          "Ilhéus",
          "Boa Vista",
          "Cuiabá"
        ],
         daily: 12,
         price: 5549
      }
    ];
 

 
}); // Controller Ends here

