// const { URL } = require('url'); // 解构赋值

// const url = new URL("https://www.1000phone.com:8888/v1/good/pg/regist?username=good1&psw=123#1723");
// console.log(url);

const url = require("url");

// var urlObj = url.parse("https://www.1000phone.com:8888/v1/good/pg/regist?username=good1&psw=123#1723", true);
var urlObj = url.parse("//www.1000phone.com:8888/v1/good/pg/regist?username=good1&psw=123#1723", true, true);
console.log(urlObj);