const EventEmitter = require("events");

class Player extends EventEmitter {};

var p = new Player();

p.on("good", (data)=>{
	console.log("接收到数据：" + data);
})

p.emit("good", "hello 123456!!!!!");