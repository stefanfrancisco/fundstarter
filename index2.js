var http = require('http'); 
var fs = require("fs"); 
var buf = fs.readFileSync('public/index.html', "utf8"); 

http.createServer(function(request, response) { 
	contentType = 'text/html'; 
	response.writeHead(200, {'Content-Type' : contentType}); 
	response.write(buf); 
}).listen(8080);
