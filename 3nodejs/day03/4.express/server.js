var express = require("express");
var app = express();

app.get("/", (req, res)=>{
	res.send("404");
})

app.get("/loginAction", (req, res)=>{
	// express把get参数全部封装到req.query对象中了。
	if(req.query.username == "good" && req.query.psw == "123") {
		res.send("登录成功");
	} else {
		res.send("登录失败");
	}
})

// 路由
app.get("/login", (req, res)=>{
	// express向外输出的时候是 res.send 相当于与原生的res.write + end
	// res.send("登录页面");
	res.sendFile("C:/develop_quanzs/三阶段/课程共享/H5_1723/day_03/sample/4.express/login.html");
})

// 监听端口启动服务。
app.listen(3000, function(err){
	if(!err) {
		console.log("服务启动成功了!");
	}
})