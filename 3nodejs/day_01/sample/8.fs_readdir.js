const fs = require("fs");

fs.readdir("logs", function(err, files){
	if(err) {
		console.log(err);
	} else {
		console.log(files);
	}
})