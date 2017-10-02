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

var tf_url = ui("tf_url");
var wv_webview = ui("wv_webview");

var action_refresh, action_goback, action_forward, action_go;

action_refresh = ui("action_refresh");
action_goback = ui("action_goback");
action_forward = ui("action_forward");
action_go = ui("action_go");

action_refresh.on("touch", function(){
    wv_webview.reload();
});

action_goback.on("touch", function(){
    wv_webview.back();
});

action_refresh.on("touch", function(){
    wv_webview.forward();
});

action_go.on("touch", function(){
    wv_webview.url = tf_url.text;
});

