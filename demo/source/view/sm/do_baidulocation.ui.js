/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/
var bdloaction = sm("do_BaiduLocation");


var do_button_open = ui("do_button_open");  //获取经纬度
var do_label_jw = ui("do_label_jw");
do_button_open.on("touch",function(data, e){
	bdloaction.getLocation({model:"gps", type:"bd-0911", scanSpan:5000}, function(data, e){
		do_label_jw.text = "经度："+ data.longitude + "," + "纬度："+data.latitude
	});
});

var do_button_address = ui("do_button_address"); //获取当前地址
var do_label_address = ui("do_label_address");
do_button_address.on("touch",function(data, e){
	bdloaction.getLocation({model:"gps", type:"bd-0911", scanSpan:5000}, function(data, e){
		do_label_address.text = data.address
	});
});

var do_button_stop = ui("do_button_stop");  //关闭定位
do_button_stop.on("touch",function(data, e){
	var sign = bdloaction.stop({});
	nf.alert("定位已关闭");
});
