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

var bt_page1 = ui("bt_page1");
//bt_remove = ui("bt_remove"); 
//lb_page1 = ui("lb_page1");

bt_page1.on("touch",function(data,e){
//	app.openPage("source://view/sm/do_page2.ui","")
	app.openPage({source:"source://view/sm/pagedemo.ui", data:"page1传过来的data数据"}, function(data, e){});
})

//bt_remove.on("touch",function(data,e){
//	page.remove({"id":"lb_page1"});
//})

