var http = require("http");
var Url = require("url");

var port = Number(process.argv[2]);

var getJSON = function (iso, path) {
  let date = new Date(iso);
  let jsonObj = {};

  if (path == "/api/parsetime") {
    jsonObj = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  } else {
    jsonObj = {
      "unixtime": date.getTime()
    };
  }

  return JSON.stringify(jsonObj);
};

http.createServer(function (req, resp) {
  let parsedUrl = Url.parse(req.url, true);

  resp.writeHead(200, {"Content-Type": "application/json"});
  resp.write(getJSON(parsedUrl.query.iso, parsedUrl.pathname));
  resp.end();
})
.listen(port);
