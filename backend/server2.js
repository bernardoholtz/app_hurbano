var http = require ('http'),
	fs = require('fs'),
	obj = [],
	hotel = [];
	var utf8 = require('utf8');
	
var server = http.createServer(function (req,res){
	res.writeHead(200,{'Content-type': 'text/plain;charset:utf-8','Access-Control-Allow-Origin' : '*'});

	
	/* arquivo.readFile(__dirname + '/offer.txt',function(err,file){
		if(err){
			res.write('Erro na leitura do arquivo.');
		}else{
			obj = JSON.parse(file);
			
			var id = 1;
			
			for (var i=0; i<obj.length; i++){
				if (obj[i].id == id) {
					hotel = obj[i];
					hotel.options.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} ); 
					res.write(JSON.stringify(hotel));
					
				}
			}

		}
		res.end();
	}); */
	
	var content = fs.readFileSync('offer.txt');
	var obj = (content);
	var x = [
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
	
	//var objectReceived = JSON.parse(decodeURIComponent(escape(obj[1].description)))
	//var encodedObject = unescape(encodeURIComponent(JSON.stringify(content)))
	//var objectReceived = JSON.parse(decodeURIComponent(escape(encodedObject)))
	obj = (content);
	
	res.write('caçeta');
	res.end()

	


});

// app.post('/', function(req, res, next){
// 	  return res.send('Ok');
// });


server.listen(3000,function(){
	console.log('servidor rodando na porta 3000');
});