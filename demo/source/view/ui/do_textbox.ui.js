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


var do_textbox_4tf = ui("do_textbox_4tf");
do_textbox_4tf.on("textChanged",function(data, e){
	nf.toast("文本框内容发生变化");
});

var do_button_2_2 = ui("do_button_2_2");
do_button_2_2.on("touch",function(data, e){
	nf.alert("邮件已发送");
});

var do_textbox_3 = ui("do_textbox_3");
do_textbox_3.on("textChanged",function(data, e){
	var num = do_textbox_3.text;
	if (num.length === 10){
		nf.toast("主题字数不得超过10");
	}
});
