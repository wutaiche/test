var async = require("async");

console.time("时间测试");
async.waterfall([
	function(callback) {
		setTimeout(()=>{
			callback(null, "a1", "a2");
		}, 2000);
	},
	function(arg1, arg2, callback) {
		setTimeout(()=>{
			callback(null, arg1, arg2, "b1");
		}, 3000);
	},
	function(arg1, arg2, arg3, callback) {
		setTimeout(()=>{
			callback(null, [arg1, arg2, arg3, "c1"]);
		}, 1000);
	},
],function(err, results){
	console.timeEnd("时间测试");
	console.log(results);
})