var http = require("http");

var collections = [];
var pendingResponses = 0;

for (var i = 2; i < process.argv.length; i++) {
  collections.push(
    {
      "url": process.argv[i],
      "body": null
    }
  );
  pendingResponses += 1;
}

var printResults = function () {
  collections.forEach(function (collection) {
    console.log(collection.body);
  });
};

var addResponse = function (url, body) {
  for (var i = 0; i < collections.length; i++) {
    if (collections[i].url == url) {
      collections[i].body = body;
      pendingResponses -= 1;
      break;
    }
  }

  if (pendingResponses == 0) {
    printResults();
  }
};

collections.forEach(function(collection) {
  http.get(collection.url, function (resp) {
    let body = [];
    resp.setEncoding("utf8");
    resp.on("data", function (chunk) {
      body += chunk;
    }).on("end", function () {
      addResponse(collection.url, body);
    });
  });
});
