var express = require('express');
var app = express();
var port = 3001;

app.get("/", funcion(req, res) {
    res.send('main.js');
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("HCJS-web listening at http://%s:%s", host, port);
});

