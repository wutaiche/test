const EventEmitter = require("events");

class player extends EventEmitter{};

const play = new player();

play.on("good",(data)=>{
     console.log(data);

});

play.emit("good","你好，世界");