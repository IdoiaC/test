var express = require('express');
const fileUpload = require('express-fileupload');
var app = express();

app.use(fileUpload());

// ports setup
var server_port = 8080;
var server_ip_address = '0.0.0.0';

app.get('/download/:id', function(req,res) {
 	var buffer = Buffer.alloc(parseInt(req.params.id,10),5);
	res.send(buffer);
});

app.post('/upload',(req,res) => {
    let EDFile = req.files.file;
//     EDFile.mv(`./${EDFile.name}`,err => {
//         if(err) return res.status(500).send({ message : err })
//         	return res.status(200).send({ message : 'File upload' })
//     });
    res.send(EDFile);
});

// server listens in on port
app.listen(server_port, server_ip_address, function() {
	console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});
