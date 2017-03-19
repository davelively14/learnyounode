var http = require("http");
var fs = require("fs");

var port = Number(process.argv[2]);
var path = process.argv[3];

var server = http.createServer(function (request, resp) {
  resp.writeHead(200, { "content-type": "text/plain"} );
  fs.createReadStream(path).pipe(resp);
});

server.listen(port);
