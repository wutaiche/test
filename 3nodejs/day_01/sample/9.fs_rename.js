const fs = require("fs");

fs.readdir("logs", function(err, files) {
	if(!err && files.length > 0) {
		var len = files.length;
		for(var i=0;i<len;i++) {
			fs.rename("logs/" + files[i], "logs/a" + i + ".txt", function(err){
				if(!err) {
					console.log("重命名成功了!");  //fs.rename还可以改路径。
				}
			})
		}
	}
})