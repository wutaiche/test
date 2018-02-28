var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");
var GoodsModel = require("../model/Goods");
var md5 = require("md5");
var multiparty = require("multiparty");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});

router.get('/regist', function(req, res, next) {
  res.render('regist', { title: '注册页面' });
});

router.get('/add_goods', function(req, res, next) {
  res.render('add_goods', {});
});

router.post('/api/goods_upload', function(req, res, next) {
	var form = new multiparty.Form({
		uploadDir: "public/images"
	});
	var result = {
		code: 1,
		message: "商品信息保存成功"
	};
	form.parse(req, function(err, body, files){
		if(err) {
			console.log(err);
		}
		console.log(body);
		var goods_name = body.goods_name[0];
		var price = body.price[0];
		var imgPath = files["img"][0].path.replace("public\\", "");
		var gm = new GoodsModel();
		gm.goods_name = goods_name;
		gm.price = price;
		gm.imgPath = imgPath;
		gm.save(function(err){
			if(err) {
				result.code = -99;
				result.message = "商品保存失败";
			}
			res.json(result);
		})
	})
});

router.get('/dashboard', function(req, res, next) {
	//判断用户是否登录，如果没登录跳转到login页面。
	console.log(req.session);
	if(req.session == null || req.session.username == null) {
		// res.render('login', { title: '登录页面' });
		res.redirect("/login"); // 重定向
		return;
	}
	res.render('dashboard', {});
});

router.post('/api/login4ajax', function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var result = {
		code: 1,
		message: "登录成功"
	};
	UserModel.find({username: username, psw: md5(psw)}, (err, docs)=>{
		if(docs.length == 0) {
			result.code = -101;
			result.message = "您的账号或密码错误。请重新登录。"
		} else {
			// 登录成功的时候，生成session
			req.session.username = username;
			console.log(req.session);
		}
		res.json(result);
	})
})

router.post('/api/regist4ajax', function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var age = req.body.age;
	var result = {
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
