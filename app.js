
var http = require('http') // Import HTTP module
var url = require('url') // Import URL module

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  var pathName = url.parse(request.url).pathname
  console.log('pathname' + pathName);
  response.writeHead(200);
  response.write('This is the first application');
  response.end();
}
