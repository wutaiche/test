const EventEmitter = require('events')

class Player extends EventEmitter {}

var player = new Player()

player.once('play', (track) => {
  console.log(`正在播放:《${track}》`)
})

player.emit('play', '精绝古城')
player.emit('play', '黄皮子坟')


//events.on  监听对像，   events.emit发布事件。
//events.on('name',out);
//fs.readFile("a.txt",function(err,data){
//     person.name = data;
//     events.emit('name');
//})
//function out (){
//   console.log(person.name);
//}
//
//function  say(name,word){
//  console.log(name,word);
//
//}
//
//如果第一个参数是一致的可以用一个来代替。
//var newSay = say.bind(this,"张三");
//newSay(我爱你) 就相当于  say(张三，我爱你);
//
