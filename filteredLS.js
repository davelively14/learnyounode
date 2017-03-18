var fs = require("fs");
// var filteredDirs = [];

fs.readdir(process.argv[2], function(err, list) {
  list.forEach(function(e) {
    let splitFile = e.split(".");
    if (splitFile.length > 1 && splitFile[splitFile.length - 1] == process.argv[3]) {
      console.log(e);
    }
  });
});
