var http = require ('http'),
	arquivo = require('fs'),
	obj =[],
	hotel = [],
	app = express();
var server = http.createServer(function (req,res){
	res.writeHead(200,{'Content-type': 'text/plain;charset:utf-8'});

	
	arquivo.readFile(__dirname + '/offer.txt',function(err,file){
		if(err){
			res.write('Erro na leitura do arquivo.');
		}else{
			obj = JSON.parse(file);
			
			var id = 3;
			
			for (var i=0; i<obj.length; i++){
				if (obj[i].id == id) {
					hotel = obj[i];
					hotel.options.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} ); 
					res.write(hotel.title);
				}
			}

		}
		res.end();
	});


});


server.listen(3000,function(){
	console.log('servidor rodando na porta 3000');
});