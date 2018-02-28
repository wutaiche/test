var async = require("async");

// 计时开始
// console.time("测试1");
// async.parallel([
// 	function(callback) {
// 		setTimeout(()=>{
// 			callback(null, "第一个任务完成了");
// 		}, 2000);
// 	},
// 	function(callback) {
// 		setTimeout(()=>{
// 			callback(null, "第二个任务完成了");
// 		}, 3000);
// 	},
// ], function(err, results){
// 	// 计时结束
// 	console.timeEnd("测试1")
// 	console.log(results);
// });


console.time("测试1");
async.parallel({
	key1: function(callback) {
		setTimeout(()=>{
			callback(null, "第一个任务完成了");
		}, 2000);
	},
	key2: function(callback) {
		setTimeout(()=>{
			callback(null, "第二个任务完成了");
		}, 3000);
	},
}, function(err, results){
	// 计时结束
	console.timeEnd("测试1");
	console.log(results);
});