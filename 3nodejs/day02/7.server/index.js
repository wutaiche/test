const http = require("http");
const fs = require("fs");
const {URL} = require("url");
const {loginAction} = require("./loginAction");

http.createServer((req, res)=>{
	let url = req.url;
	console.log(url);
	if(url.indexOf("/loginAction") != -1) {
		loginAction(url, res);
	}
	else if(url.indexOf("/login") != -1) {
		fs.readFile("login.html", (err, data)=>{
			if(!err) {
				res.write(data);
				res.end();
			}
		})
	} else {
		res.write("404");
		res.end();
	}

}).listen(8080);