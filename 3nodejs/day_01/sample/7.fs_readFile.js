const fs = require("fs");

fs.readFile("logs/test111.txt", "utf8", function(err, data){
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
})