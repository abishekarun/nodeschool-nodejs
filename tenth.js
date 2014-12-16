var net=require('net');
var date=new Date();

function get(n){
if(n<10)
return '0'+n;
else 
return n;
}

var server=net.createServer(function callback(socket){
s=get(date.getFullYear())+"-"+get(date.getMonth()+1)+"-"+get(date.getDate())+" "+get(date.getHours())+":"+get(date.getMinutes())+'\n';
socket.end(s);
});
server.listen(process.argv[2]);