var http = require('http');
var fs = require("fs");
var buf = new Buffer(2488)
var port = Number(process.env.PORT || 8080);
fs.open('public/index.html', 'r+', function(err, fd){
        if(err) {
                return console.error(err);
        }
        console.log("File opened successfully!");
        console.log("Reading file");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if(err){
                        console.log(err);
                }
                console.log(bytes + " bytes read");
        });
});
        var server = http.createServer(function(request, response) {
        contentType = 'text/html';
        response.writeHead(200, {'Content-Type' : contentType});
        response.write(buf.toString());
        }).listen(port);
