var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});


io.on('connection', function(socket){
	console.log('Tenemos una nueva victima!!');

	socket.on('chat', function(_msg){
		io.emit('nuevo_mensaje', _msg);
	});

});


http.listen(8080, function () {
	console.log('Muy bien!, eres un crack, sabes trabajar con node JS');
});