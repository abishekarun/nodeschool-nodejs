var fs=require('fs');
var filename=process.argv[2];
file=fs.readFileSync(filename);
var contents=file.toString();
console.log(contents.split('\n').length - 1);
