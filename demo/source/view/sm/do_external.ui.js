/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
var target = sm("do_External");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/

var openapp = ui("openapp");
openapp.on("touch",function(data, e){
	 target.openApp({wakeupid:"com.tencent.mm", data:{}});
});

var openurl = ui("openurl");
openurl.on("touch",function(data, e){
	target.openURL({url:"http://www.baidu.com"});
});

var opendial = ui("opendial");
opendial.on("touch",function(data, e){
	target.openDial({number:"10086"});
});

var opencontact = ui("opencontact");
opencontact.on("touch",function(data, e){
	 target.openContact({});
});

var openmail = ui("openmail");
openmail.on("touch",function(data, e){
	target.openMail({to:"258468146@qq.com", subject:"111111", body:"111111111"});
});

var opensms = ui("opensms");
opensms.on("touch",function(data, e){
	target.openSMS({number:"10086", body:"123456"});
});
