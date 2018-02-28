const querystring = require("querystring");
function loginAction (url, res) {
	let urlObj = querystring.parse(url.substr(url.indexOf("?") + 1));
	console.log(urlObj);
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	if(urlObj.username == "good" && urlObj.psw == "123") {
		res.write("登录成功");
	} else {
		res.write("登录失败，请检查您的用户名或密码。");
	}
	res.end();
}

module.exports = {
	loginAction: loginAction
}