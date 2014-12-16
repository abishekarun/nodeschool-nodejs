var http = require('http');
var url = require('url');

function parse(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unix(time) {
  return { unixtime : time.getTime() }
}

function processRequest(urlPath, time) {
    var result = {};
    if (urlPath === "/api/parsetime") {
        result = parse(time);
    } else if (urlPath === "/api/unixtime") {
        result = unix(time);
    }
    return result;
}

var server = http.createServer(function (req, res) {
  var parseUrl = url.parse(req.url, true);
  var time = new Date(parseUrl.query.iso);
  var result=processRequest(parseUrl.pathname,time);

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));