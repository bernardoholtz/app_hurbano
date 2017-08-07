
module.exports = function (app) {


	
    app.get('/api/oferta', function (req, res) {
		var arquivo = require('fs');
		var hotel =[];
		
			
		arquivo.readFile(__dirname + '/data/offer.txt',function(err,file){
			if(err){
				res.send(err);
			}else{
				var obj = JSON.parse(file);
				
				var id = 6;
				
				for (var i=0; i<obj.length; i++){
					if (obj[i].id == id) {
						hotel = obj[i];
						hotel.options.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} ); 
						res.header("Content-Type", "application/json; charset=utf-8");
						res.send(JSON.stringify(hotel));
						
						
					}
				}

			}
			
			res.end();
		});
	});
	
	 

 
    app.post('/api/oferta', function (req, res) {

		var arquivo = require('fs');
		var hotel =[];
		

		
		arquivo.readFile(__dirname + '/data/offer.txt',function(err,file){
			if(err){
				res.send(err);
			}else{
				var obj = JSON.parse(file);
			
				var id = req.body[0];
				
				for (var i=0; i<obj.length; i++){
					if (obj[i].id == id) {
					
						hotel = obj[i];
						if (req.body[2] != "") {
							hotel.options = hotel.options.map(function(op){ if (op.daily == req.body[2]) return op});
							hotel.options= hotel.options.filter(function( element ) { return element !== undefined;});
						};
						if (req.body[1] != "") {
							var options = [];
							for (var j=0; j<hotel.options.length; j++){
								for (var x=0; x<hotel.options[j].from.length;x++){
									if (hotel.options[j].from[x] == req.body[1])
										options.push(hotel.options[j]);
									
								};
							};
							hotel.options = options;
						};
												
						hotel.options.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} ); 
						res.header("Content-Type", "application/json; charset=utf-8");
						res.send(JSON.stringify(hotel));
										
					}
				}
				
				function buscaDiaria(value) {
				  return value == parseInt(req.body[2]);
				}

			}

			res.end();
		});


    });



    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
    });
};
