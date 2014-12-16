var http=require('http');
var fs=require('fs');
var server=http.createServer(function callback(request,response){
a=fs.createReadStream(process.argv[3]);
a.pipe(response);
});
server.listen(process.argv[2]);
