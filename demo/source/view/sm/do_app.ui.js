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

var do_label_id = ui("do_label_id");

var bn_getAppID = ui("bn_getAppID")
bn_getAppID.on("touch",function(data, e){
	var text = app.getAppID();
    do_label_id.text = JSON.stringify(text, null, "  ");
});

var bn_openPage = ui("bn_openPage");
var do_textfield_id = ui("do_textfield_id");
var do_label_iddata = ui("do_label_iddata");
bn_openPage.on("touch",function(data, e){
	app.openPage({source:"source://view/sm/do_appdemo.ui", data:do_textfield_id.text, animationType:"fade", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
});
var a;
page.on("result",function(data, e){
	 a = data;
	do_label_iddata.text ="新页面传过来的数据：" + a;
});