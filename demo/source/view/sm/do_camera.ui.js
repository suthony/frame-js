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

var camera = sm("do_Camera");

var img0 = ui("img0");
var label0 = ui("label0");
var action_0 = ui("action_0");
var action_1 = ui("action_1");

action_0.on("touch", function(){
    camera.capture(-1, 120, 100, true, function(data){//width : -1 代表以hreight为基准 (保持原图横纵比)缩放;
        img0.source = data;
        label0.text = JSON.stringify(data, null, "  ");
    })
});

action_1.on("touch", function(){
    camera.capture(120, -1, 100, false, function(data){//hreight : -1 代表以width为基准 (保持原图横纵比)缩放;
        img0.source = data;
        label0.text = JSON.stringify(data, null, "  ");
    });
});