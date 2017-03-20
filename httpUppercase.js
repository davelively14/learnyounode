var http = require("http");

var port = process.argv[2];

http.createServer(function (request, resp) {
  let body = "";
  request
    .setEncoding("utf8")
    .on("error", console.error)
    .on("data", function (chunk) {
      body += chunk;
    })
    .on("end", function () {
      body = body.toUpperCase();
      resp.write(body);
      resp.end();
    });
})
.listen(port);
