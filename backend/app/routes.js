
module.exports = function (app) {
	
    // api ---------------------------------------------------------------------
    // get all todos

	
    app.get('/api/todos', function (req, res) {
		var arquivo = require('fs');
		var hotel =[];
		
		//res.send(req.body);
		
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
	
	 

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

		var arquivo = require('fs');
		var hotel =[];
		
		//res.send(req.body);
		
		arquivo.readFile(__dirname + '/data/offer.txt',function(err,file){
			if(err){
				res.send(err);
			}else{
				var obj = JSON.parse(file);
			
				var id = req.body[0];
				
				for (var i=0; i<obj.length; i++){
					if (obj[i].id == id) {
						//if (req.body[2])
						hotel = obj[i];
						if (req.body[2] != "") {
							hotel.options = hotel.options.map(function(op){ if (op.daily == req.body[2]) return op});
							hotel.options= hotel.options.filter(function( element ) { return element !== undefined;});
						}; 
						hotel.options.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} ); 
						res.header("Content-Type", "application/json; charset=utf-8");
						//res.send('id: ' + req.body[0]);
						res.send(JSON.stringify(hotel));
										
					}
				}
				
				function buscaDiaria(value) {
				  return value == parseInt(req.body[2]);
				}

			}
			//res.header("Content-Type", "application/json; charset=utf-8");
			//res.send([{"title": "Noites em Vegas e Albçauquerque"}]);
			res.end();
		});
		
		
		/* // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        }); */

    });



    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
