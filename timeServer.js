var net = require("net");

var zeroFormat = function (value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
};

var server = net.createServer(function (socket) {
  let date = new Date();
  let data = date.getFullYear() + "-" + zeroFormat(date.getMonth() + 1) + "-" + zeroFormat(date.getDate())
                                + " " + zeroFormat(date.getHours()) + ":" + zeroFormat(date.getMinutes());

  socket.end(data + "\n");
});

server.listen(Number(process.argv[2]));
