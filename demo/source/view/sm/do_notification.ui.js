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

var do_label_alert = ui("do_label_alert");
var do_label_confirm = ui("do_label_confirm");
var do_label_toast = ui("do_label_toast");
var bn_alert = ui("bn_alert");
var bn_toast = ui("bn_toast");
var bn_confirm = ui("bn_confirm");

bn_alert.on("touch", function(){
    nf.alert("Alert");
    do_label_alert.text = "Alert";
    //alert ??TODO bug
});

bn_toast.on("touch", function(){
    nf.toast("Toast"); //toast  异步无回调;
    do_label_toast.text = "Toast";
});

bn_confirm.on("touch", function(){
    nf.confirm("Confirm", function(data){
        do_label_confirm.text = JSON.stringify(data, null, "  ");
    });
});