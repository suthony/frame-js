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

var global = sm("do_Global");
var do_label_time = ui("do_label_time");
var do_label_wakeid = ui("do_label_wakeid");
var do_label_version = ui("do_label_version");
var do_textfield_value = ui("do_textfield_value");
var do_textfield_id = ui("do_textfield_id");
var do_label_getM = ui("do_label_getM");

var bn_getTime = ui("bn_getTime");
bn_getTime.on("touch",function(data, e){
	var text = global.getTime();
	do_label_time.text = JSON.stringify(text, null, "  ");
});

var bn_getWakeupID = ui("bn_getWakeupID");
bn_getWakeupID.on("touch",function(data, e){
    var text = global.getWakeupID();
	do_label_wakeid.text = JSON.stringify(text, null, "  ");
});

var bn_getVersion = ui("bn_getVersion");
bn_getVersion.on("touch",function(data, e){
	var text = global.getVersion();
	var text_1 = text.ver;
	var text_2 = JSON.stringify(text_1, null, "  ");
	do_label_version.text = "版本号：" + text_2;
});



var bn_getMemory = ui("bn_getMemory");
bn_getMemory.on("touch",function(data, e){
	var id = do_textfield_id.text;
    var text = global.getMemory(id);
	do_label_getM.text = text;
    console.log("text", do_label_getM.text)
	// console.log(id)
    // do_label_getM.redraw();
});

var bn_setMemory = ui("bn_setMemory");
bn_setMemory.on("touch",function(data, e){
	var id = do_textfield_id.text;
	var value = do_textfield_value.text;
	// console.log(value)
//	global.setMemory("id","1234");
	global.setMemory({key:id, value:value});
	nf.alert("value "+" = "+value,"key "+" = "+id);
});
