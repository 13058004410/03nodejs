const express=require("express");
var router=express.Router();
//添加路由
router.get("/add",function(req,res){
	res.send("添加成功");
});
//路由2
router.get("/addInfo",function(req,res){
	res.send("添加成功");
});

//导出路由器
module.exports=router;