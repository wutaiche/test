var http = require("http");
var https = require("https");
var fs = require("fs");
var cheerio = require('cheerio'); // 第三方组件，用来分析网页结构，解析成类似于jq对象形式。

var html = "";
https.get("https://www.baidu.com/", (res)=>{
	res.on("data", (chunk)=>{
		html += chunk;
	})

	res.on("end", ()=>{
		// console.log(html);
		fs.writeFile("baidu.html", html, function(err){
			if(!err) {
				console.log("文件写成功了");
			}
		})

		var $ = cheerio.load(html);
		console.log($("a"));
	})

	res.on("error", (err)=>{
		console.log(err);
	})
})