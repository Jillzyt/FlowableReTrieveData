
var http = require('http') // Import HTTP module
var url = require('url') // Import URL module
var show = require('./show') // Import show module

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  var pathName = url.parse(request.url).pathname
  console.log('pathname' + pathName);
  show.showPage(response,pathName);
}
