var myMod = require("./makeModularMod.js");

myMod(process.argv[2], process.argv[3], function(err, list) {
  if (err) return console.error(err);
  list.forEach(function(e) {
    console.log(e);
  });
});
