describe("Teste de http", function() {
  beforeEach(angular.mock.module("ofertasApp"));

  
  
  
  describe("Testa a comunicação com o back", function() {
    var ctrl, scope, httpBackend, oferta;

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
      oferta = [
		  {
			"id": 0,
			"title": "Hotel The Mirage (Hotel & Casino)",
			"location": "Las Vegas, USA",
			"description": "Aéreo de várias cidades + Hotel em Vegas",
			"photos": [
			  "images/photo6.jpg",
			  "images/photo8.jpg",
			  "images/photo7.jpg",
			  "images/photo9.jpg",
			  "images/photo11.jpg",
			  "images/photo3.jpg",
			  "images/photo2.jpg",
			  "images/photo1.jpg"
			],
			"options": [
			  {
				"id": 2,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Brasilia",
				  "Campo Grande"
				],
				"daily": 5,
				"price": 2380
			  },
			  {
				"id": 0,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Manaus",
				  "Belém"
				],
				"daily": 5,
				"price": 2549
			  },
			  {
				"id": 1,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Rio de Janeiro"
				],
				"daily": 5,
				"price": 2620
			  },
			  {
				"id": 3,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Manaus"
				],
				"daily": 8,
				"price": 3549
			  },
			  {
				"id": 7,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Rio de Janeiro"
				],
				"daily": 12,
				"price": 5120
			  },
			  {
				"id": 8,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Brasilia",
				  "Salvador",
				  "Campo Grande"
				],
				"daily": 12,
				"price": 5380
			  },
			  {
				"id": 4,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Rio de Janeiro",
				  "São Paulo"
				],
				"daily": 8,
				"price": 3720
			  },
			  {
				"id": 5,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Brasilia"
				],
				"daily": 8,
				"price": 3380
			  },
			  {
				"id": 6,
				"title": "Noites em Vegas e Albuquerque",
				"description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
				"from": [
				  "Manaus",
				  "Salvador",
				  "Ilhéus",
				  "Boa Vista",
				  "Cuiabá"
				],
				"daily": 12,
				"price": 5549
			  }
			]
		  }];
      scope = $rootScope.$new();
      ctrl = $controller('CtrlOferta', {$scope: scope});

      httpBackend = $httpBackend;
      httpBackend.when("GET", '/api/oferta').respond(oferta)

    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    describe("carregar()", function() {

      it('Deve testar a request GET da página de ofertas', function() {
        scope.carregar();

        httpBackend.expectGET('/api/oferta');
        httpBackend.flush()

        expect(scope.hotel).toBeDefined();
      });
    });
	

	



  });
  
 
});