const querystring = require("querystring");

// const result = querystring.parse("username=%E6%82%A8%E5%A5%BD&psw=123");
// console.log(result);

const result = querystring.escape("您好");
console.log(result);
console.log(querystring.unescape(result));