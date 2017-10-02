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

var switchview,lb;
switchview = ui("switchview");
lb = ui("lb");
 
switchview.on("changed",function(data, e){
	if (data == true){
		lb.text = "转换开关为打开状态";
		lb.fontColor = "AB57FFFF";
		data = false;
	}else{
		lb.text = "转换开关为关闭状态";
		lb.fontColor = "000000ff";
		data = true;
	}
});
