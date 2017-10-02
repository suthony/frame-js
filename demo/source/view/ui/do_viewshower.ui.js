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

var vs_shower0 = ui("vs_shower0");

vs_shower0.addViews([
    {id : "a000", path : "source://view/ui/do_viewshower_sub0.ui"},
    {id : "a001", path : "source://view/ui/do_viewshower_sub1.ui"},
    {id : "a002", path : "source://view/ui/do_viewshower_sub2.ui"},
    {id : "a003", path : "source://view/ui/do_viewshower_sub3.ui"}
]);

var action_e0, action_e1, action_e2, action_e3;

action_e0 = ui("action_e0");
action_e1 = ui("action_e1");
action_e2 = ui("action_e2");
action_e3 = ui("action_e3");

action_e0.on("touch", function(){
    vs_shower0.showView("a000", "push_l2r");
});

action_e1.on("touch", function(){
    vs_shower0.showView("a001", "push_b2t");
});

action_e2.on("touch", function(){
    vs_shower0.showView("a002", "slide_l2r");
});

action_e3.on("touch", function(){
    vs_shower0.showView("a003", "fade");
});

page.on("loaded", function(){
    vs_shower0.showView("a000");
});
