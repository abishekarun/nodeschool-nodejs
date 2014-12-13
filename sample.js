var fs = require('fs');

fs.readdir("C:/", function (err, files) {
  if (err) throw err;
  console.log("/usr files: " + files);
});