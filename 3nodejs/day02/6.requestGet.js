const https = require("https");
const fs = require("fs");

var options = {
  hostname: 'www.baidu.com',
  port: 443,
  method: 'GET',
  path: '/'
}

var html = "";
const request = https.request(options, (res)=>{

	res.on("data", (chunk)=>{
		html += chunk;
	})
	res.on("end", ()=>{
		fs.writeFile("baidu2.html", html, (err)=>{
			if(!err) {
				console.log("OK");
			}
		})
	})
})

request.end();