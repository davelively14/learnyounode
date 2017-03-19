var http = require("http");

http.get(process.argv[2], function (resp) {
  var body = [];
  resp.setEncoding("utf8");
  resp.on("data", function (chunk) {
    body += chunk;
  }).on("end", function() {
    console.log(body.length);
    console.log(body);
  });
});
