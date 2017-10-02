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

var bn_1 = ui("bn_1");
bn_1.on("touchDown",function(data, e){
	bn_1.bgColor = "#80FF00FF";
});

var bn_2 = ui("bn_2");
bn_2.on("touch",function(data, e){
	bn_2.bgColor = "#80FF00FF";
});
