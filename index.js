// var static = require('node-static');

// var file = new static.Server('./public');

// require('http').createServer(function (request, response) {
    
//     request.addListener('end', function () {
//         file.serve(request, response);
//     }).resume();
// }).listen(process.env.PORT || 8080);



var http = require('http');
http.createServer(function (req, res) {
  var path = req.url || ''
  res.writeHead(301,
    {Location: 'http://computer.org'}
  );
  res.end();
}).listen(process.env.PORT || 8080);