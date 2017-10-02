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
var do_textfield_textf;
do_textfield_textf = ui("do_textfield_textf");

var do_textfield_textf = ui("do_textfield_textf");
do_textfield_textf.on("textChanged",function(data, e){
	nf.toast("文本框内容发生变化");
});

var do_button_1 = ui("do_button_1");
do_button_1.on("touch",function(data, e){
	nf.alert("表单已提交");
});
