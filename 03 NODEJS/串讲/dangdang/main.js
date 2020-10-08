//引入express模块
const express=require("express");
//引入路由器
const router=require("./router/router.js");
var app=express();
//监听8080端口
app.listen(8080);
//使用路由器   ↓ 服务器接口
app.use("/bookInfo",router);
//添加路由器，响应浏览器请求add.html文件
app.get("/add.html",function(req,res){
	res.sendFile(__dirname+"/add.html");
});