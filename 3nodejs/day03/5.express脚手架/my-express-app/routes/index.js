var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// render是调用ejs模板，生成页面
	res.render('index', { title: 'Express' });
});

router.get("/login", function(req, res) {
	res.render("loginEJS", {ttt: "这是我用express做的登录页面"})
})

router.get("/loginAction", function(req, res) {
	if(req.query.username == "good" && req.query.psw == "123") {
		res.send("登录成功");
	} else {
		res.send("登录失败");
	}
})

module.exports = router;
