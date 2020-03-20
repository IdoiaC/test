var express = require('express');
var app = express();

// setup ports
var server_port = 5322;
var server_ip_address = '127.0.0.1';

app.get('/', function(req, res) {

	res.end('Hello YouTube!');

});

// server listens in on port
app.listen(server_port, server_ip_address, function () {
	 console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});
