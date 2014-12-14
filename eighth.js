var bl=require('bl');
var http=require('http');

var s=[];
var count=0;

for(var i=0;i<3;i++)
{
get(i);
}



function get(index){
http.get(process.argv[2],function callback(response){
response.pipe(bl(function (err,data){
if(err)
 return console.error(err)
s[index]=data.toString();
count++;
if(count==3)
print():
}))
})
}

function print(){
for(var i=0;i<3;i++)
console.log(s[i]);
}