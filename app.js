var express = require('express');
var mongoose = require('mongoose');
//var config = require('./config');

var app = express();
var port = process.env.PORT || 300;

app.use('/', express.static(__dirname+'/public/src'));
app.set('view engine', 'ejs');

//mongoose.Promise = global.Promise;
//mongoose.connect(config.getDatabaseURI());


app.listen(port, function(){
	console.log("Listening on port: " + port);
});

