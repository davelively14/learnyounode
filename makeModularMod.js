var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, callback) {
  var filteredList = [];

  fs.readdir(dir, function(err, files) {
    if (err) return callback(err);

    files.forEach(function (file) {
      if (path.extname(file) == "." + ext) {
        filteredList.push(file);
      }
    });

    callback(null, filteredList);
  });
};
