
var http = require('http') // Import HTTP module

http.createServer(onRequest).listen(8888);  // Port to listen to
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('This is a basic application.'); // 
  response.end();
}
