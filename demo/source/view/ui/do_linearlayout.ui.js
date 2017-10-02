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

var button = ui("button");
var ln_out = ui("ln_out");
button.on("touch",function(data, e){
	ln_out.add("id1","source://view/ui/do_lineardemox.ui","")
});

var do_button_1 = ui("do_button_1");
do_button_1.on("touch",function(data, e){
    ln_out.set({"data":{"height":"100"}});
	ln_out.redraw({});
});

var button1 = ui("button1");
var do_linearlayout_1 = ui("do_linearlayout_1")
button1.on("touch",function(data, e){
	do_linearlayout_1.add("id2","source://view/ui/do_lineardemoy.ui","")
});

var do_button_2 = ui("do_button_2");
do_button_2.on("touch",function(data, e){
	do_linearlayout_1.set({"data":{"height":"450"}});
	do_linearlayout_1.redraw({});
});
