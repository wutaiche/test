var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");
var md5 = require("md5");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/regist', function(req, res, next) {
  res.render('regist', { title: '注册页面' });
});
router.get('/login',function(req,res){
  res.render('login',{title:'登陆页面'})

});
var result;

router.post("/api/login4ajax",function(req,res){
   var username = req.body.username;
	var psw = req.body.psw;
    UserModel.find({username: username,psw:md5(psw)}, function (err, docs) {
		if(docs.length > 0) {
			result.code = 1;
			result.message = "登陆成功";
			res.json(result);
			
		}else {
            result.code = -1;
            result.message = "登陆失败";
            res.json(result);

		}

})

router.post('/api/regist4ajax', function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var age = req.body.age;
	    result = {
		code: 1,
		message: "注册成功"
	};
	// 检查用户名是否被使用
	UserModel.find({username: username}, function (err, docs) {
		if(docs.length > 0) {
			result.code = -109;
			result.message = "您的用户名已经被占用，请使用别的用户名注册。";
			res.json(result);
			return;
		}

		// 注册用户
		var um = new UserModel();
		um.username = username;
		um.psw = md5(psw);
		um.age = age;
		um.save(function(err){
			if(err) {
				result.code = -110;
				result.message = "注册失败";
				res.send("注册失败");
			}
				
			
			res.json(result);
		});

	});
});

module.exports = router;
