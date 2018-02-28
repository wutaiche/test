const fs = require("fs");

fs.stat("logs", function(err, stat){
	if(err) {
		fs.mkdir("logs", function(err){
			if(err) {
				console.log("创建失败", err);
			} else {
				console.log("创建成功了");
			}
		})
	} else {
		// console.log("OK", stat);
		console.log("isDirectory:" + stat.isDirectory());
	}
})
