var http = require("http");

http.createServer(function(req, res){
	var result = {code: 1, message: "注册成功"};
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	res.write(JSON.stringify(result));
	res.end();
}).listen(8080);