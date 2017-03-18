var fs = require("fs");

fs.readdir(process.argv[2], function(err, list) {
  if (err) return console.error(err);

  list.forEach(function(e) {
    let splitFile = e.split(".");
    if (splitFile.length > 1 && splitFile[splitFile.length - 1] == process.argv[3]) {
      console.log(e);
    }
  });
});
