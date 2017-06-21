var http  = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(process.argv[3]);
    readStream.pipe(res);
    // or fs.createReadStream(process.argv[3]).pipe(res); either one will work. This replaces above two lines.
});

server.listen(process.argv[2]);
