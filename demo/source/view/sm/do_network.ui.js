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

var network = sm("do_Network");
var do_label1 = ui("label1");
var do_label2 = ui("label2");
var do_label3 = ui("label3");

var bn_getOperators, bn_getIP, bn_getStatus;

bn_getOperators = ui("bn_getOperators");
bn_getIP = ui("bn_getIP");
bn_getStatus = ui("bn_getStatus");

bn_getStatus.on("touch", function(){
    var data = network.getStatus();
    do_label3.text = JSON.stringify(data, null, "  ");
});

bn_getIP.on("touch", function(){
    var data = network.getIP();
    do_label2.text = JSON.stringify(data, null, "  ");
});

bn_getOperators.on("touch", function(){
    var data = network.getOperators();
    do_label1.text = JSON.stringify(data, null, "  ");
});

network.on("changed", function(data){
    do_label3.text = nf.toast(data);
});