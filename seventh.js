var http=require('http');
http.get(process.argv[2],function callback(response){
response.on("data",function setEncoding(data){
console.log(data.toString());
});
});