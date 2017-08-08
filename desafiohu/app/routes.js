
module.exports = function (app) {


	
    app.get('/api/oferta', function (req, res) {
		var arquivo = require('fs');
		var hotel =[];
		
			
		arquivo.readFile(__dirname + '/data/offer.txt','utf-8',function(err,file){
			if(err){
				res.send(err);
			}else{
				var obj = JSON.parse(file);
				
				var id = Math.floor(Math.random() * 12);
				//var id = 8;
				
				for (var i=0; i<obj.length; i++){
					if (obj[i].id == id) {
						hotel = obj[i];
						hotel.options.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} ); 
						
						hotel.diarias = [];
						hotel.options.forEach(function(op){hotel.diarias.push(op.daily);});
						hotel.diarias = hotel.diarias.filter(function(elem, index, self) { return index == self.indexOf(elem);})
						hotel.diarias.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} ); 
						
						hotel.saidas = [];
						for (var i=0;i<hotel.options.length;i++){
							hotel.options[i].from.forEach(function(op){hotel.saidas.push(op);});
							hotel.options[i].from.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} ); 
						}
						hotel.saidas = hotel.saidas.filter(function(elem, index, self) { return index == self.indexOf(elem);})
						hotel.saidas.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} ); 
						
						
						res.header("Content-Type", "application/json; charset=utf-8");
						res.send(JSON.stringify(hotel));
						break;						
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
						hotel.diarias = [];
						if (req.body[1] != "") {
							var options = [];
							hotel.diarias =[];
							for (var j=0; j<hotel.options.length; j++){
								for (var x=0; x<hotel.options[j].from.length;x++){
									if (hotel.options[j].from[x] == req.body[1]){
										hotel.diarias.push(hotel.options[j].daily);
										options.push(hotel.options[j]);
										
									}
										
									
								};
							};
							hotel.options = options;
						};
												
						hotel.options.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} ); 
						ordenaSaida();
						ordenaDiaria();
						res.header("Content-Type", "application/json; charset=utf-8");
						res.send(JSON.stringify(hotel));
						break;
										
					}
				}
				
				function ordenaSaida() {
				  for (var i=0;i<hotel.options.length;i++){
						hotel.options[i].from.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} ); 
					}
				}
				
				function ordenaDiaria(){
					hotel.diarias = hotel.diarias.filter(function(elem, index, self) { return index == self.indexOf(elem);})
					hotel.diarias.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} ); 
				}

			}

			res.end();
		});


    });



    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
    });
};
