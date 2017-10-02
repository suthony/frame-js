var app, page;
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });


var do_textfield_data = ui("do_textfield_data");
var do_closePage = ui("do_closePage");
do_closePage.on("touch",function(data, e){
	app.closePage({data:do_textfield_data.text, animationType:""}, function(data, e){});
});

var do_label_data;
do_label_data = ui("do_label_data");

var data = page.getData(data);
do_label_data.text = "上一页面传过来的数据：" + data;