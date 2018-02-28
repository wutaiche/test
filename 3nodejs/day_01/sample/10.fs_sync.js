const fs = require("fs");

var files = fs.readdirSync('logs');
var len = files.length;
for(var i=0;i<len;i++) {
	fs.renameSync("logs/" + files[i], "logs/b" + i + ".txt");
}