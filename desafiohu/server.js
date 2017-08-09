
var express = require('express');
var app = express(); 						
var port = process.env.PORT || 8080; 				

var bodyParser = require('body-parser');
var methodOverride = require('method-override');



app.use(express.static('./public')); 		

app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override')); 



require('./app/routes.js')(app);


app.listen(port);
console.log("Server rodando na porta " + port);
require("openurl").open("http://localhost:8080");