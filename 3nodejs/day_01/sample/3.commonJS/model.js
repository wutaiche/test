function sayHi() {
	console.log("hi");
}

function getMoney() {
	console.log("恭喜方总拿下玛莎拉蒂");
}

// // 暴露接口
// module.exports = {
// 	sayHi: sayHi,
// 	getMoney: getMoney
// }

exports.sayHi = sayHi;
exports.getMoney = getMoney;

// 绝对不能使用 exports = {}的形式暴露接口