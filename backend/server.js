var http = require ('http'),
	arquivo = require('fs'),
	obj = [],
	hotel = [];
	var utf8 = require('utf8');
	
var server = http.createServer(function (req,res){
	res.writeHead(200,{'Content-type': 'text/plain;charset:utf-8','Access-Control-Allow-Origin' : '*'});

	
	arquivo.readFile(__dirname + '/offer.txt',function(err,file){
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
	});

	


});

// app.post('/', function(req, res, next){
// 	  return res.send('Ok');
// });


server.listen(3000,function(){
	console.log('servidor rodando na porta 3000');
});