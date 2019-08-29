var http = require('http');
var fs = require('fs');



fs.readFile('./index.html', 'UTF-8', function(err, data) {
    var server = http.createServer();
    server.on('request', function(request, response) {
        response.setHeader('Content-Type', 'text/html; charset=UTF-8;');
        
        if(request.method === 'GET' && request.url === '/map') {
            response.write(data);
            response.end();
        } else {
            
            fs.readFile('./errorpicture.jpg', 'UTF-8', function(err, data){
                
            response.statusCode = 404;
            response.write('<h1>Error 404</h1>' + data);
            response.end();
            })
        }
    });
    
    server.listen(9000);
});

