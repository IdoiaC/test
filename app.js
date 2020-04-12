var express = require('express');
var app = express();

// ports setup
var server_port = 8080;
var server_ip_address = '0.0.0.0';

app.get('/:id', function(req,res) {
	var buffer = Buffer.alloc(parseInt(req.params.id,10),5);
	res.send(buffer);
});

// server listens in on port
app.listen(server_port, server_ip_address, function() {
	console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});
