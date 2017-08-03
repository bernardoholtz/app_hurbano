//angular.module('myApp', ['ui.bootstrap']);
var app = angular.module('plunker', ['ui.bootstrap']);


// Controller  for Carousel
function CarouselCtrl($scope) {

// initializing the time Interval
  $scope.myInterval = 1000;
  
 // Initializing  slide rray  
$scope.slides = [
{image:"images/photo1.jpg"},

{image:"images/photo2.jpg"},
{image:"images/photo3.jpg"},
{image:"images/photo4.jpg"}
  ];

  var slides = $scope.slides;
  console.log(slides);

} // Controller Ends here