const fs = require("fs");

fs.writeFile("logs/test111.txt", "hello test1 \r\n", function(err) {
	if(!err) {
		fs.appendFile("logs/test111.txt", "hello test2 \n", function(err) {
			if(!err) {
				console.log("OK");
			}
		})
	}
})