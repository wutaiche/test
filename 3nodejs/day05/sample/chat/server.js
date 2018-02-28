var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cnt = 0;

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// connection：监视新人连进来的事件
io.on('connection', function (socket) {
	cnt++;
	console.log("当前在线人数：" + cnt);
	// socket.emit：向连接进来的这个人发送信息
	socket.emit('welcome', { message: '欢迎您使用1723聊天系统' });

	socket.on("chat", function(msg) {
		// 广播信息给所有在线的人。
		io.emit("toAll", msg);
	})

	// 监视断开连接
	socket.on('disconnect', function () {
		cnt--;
	});
});