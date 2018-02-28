var fs = require("fs");

fs.stat("1.helloworld.js", function(err, stat){
	if(err) {
		console.log("出错了", err);
	} else {
		// console.log("OK", stat);
		console.log("isDirectory:" + stat.isDirectory());
	}
})

console.log("over");