const http = require("http");
const https = require("https");
const cheerio = require("cheerio");
const fs = require("fs");
const url = require("url");

const targetUrl = "http://www.sina.com.cn";
http.get(targetUrl, (res)=>{
	let html = "";
	res.on("data", (chunk)=>{
		html += chunk;
	});

	res.on("end", ()=>{
		var $ = cheerio.load(html);
		var imgs = $("img");
		let len = imgs.length;
		for(var i=0;i<len;i++) {
			console.log(imgs[i].attribs.src);
			// 下载图片
			downloadPic(imgs[i].attribs.src);
		}
	})
})

function downloadPic(imgUrl) {
	console.log(imgUrl);
	imgUrl = url.resolve(targetUrl, imgUrl);
	console.log(imgUrl);
	if(imgUrl.startsWith("//")) {
		imgUrl = "http:" + imgUrl;
	}
	http.get(imgUrl, (res)=>{
		let content = "";
		res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
		res.on("data", (chunk)=>{
			content += chunk;
		});
		res.on("end", ()=>{
			// 写图片文件
			let imgNm = imgUrl.substr(imgUrl.lastIndexOf("/") + 1);
			fs.writeFile("imgs/" + imgNm, content, "binary", (err)=>{
				if(!err) {
					console.log("文件下载成功：" + imgNm);
				}
			})
		})
	})
}