var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require("fs");

var server = http.createServer(function(request, response) {
  fs.readFile('public/index.html', function(error, data) {
    if(error) {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('<h1>File <index.html> not found.</h1>');
    } else {
        contentType = 'text/html';
      	response.writeHead(200, {'Content-Type' : contentType});
      	response.end(data);
    }
  });
});

server.listen(8080, function() {
  console.log('Server started.');
})
