var http = require('http');
var fs = require('fs');



fs.readFile('./index.html', 'UTF-8', function(err, data) {
    var server = http.createServer();
    server.on('request', function(request, response) {
        response.setHeader('Content-Type', 'text/html; charset=UTF-8');
        
        if(request.method === 'GET' && request.url === '/map') {
            response.write(data);
            response.end();
        } else {
            
            fs.readFile('./errorpicture.jpg', 'binary', function(err, data){
                response.writeHead(200, {'Content-Type': 'image/jpg'});

                response.write(data, 'binary')    
                response.statusCode = 404;
                response.end();
            });
        }
    });
    
    server.listen(9000);
});

