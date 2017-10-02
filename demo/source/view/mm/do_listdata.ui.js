/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

//var storage = sm("do_Storage");
/**********************************************************************************************************/
var add_one,add_more,del_one,del_all,listview,listdata;

listview = ui("do_listview_1");
add_one = ui("add_one");
add_more = ui("add_more");
del_one = ui("del_one");
del_all = ui("del_all");
listdata = mm("do_ListData");

listview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

var data2 = [
	{"text":"2.DeviceOne不是基于html为核心的开发平台，它是纯原生的开发平台。"},
	{"text":"3.所有的DeviceOne都是跨平台的API，目前支持Android、IOS、windowsPhone等平台。"}
];

var data1 = [
	{"text":"1.DeviceOne是一个专业的移动应用开发平台，它可以帮助我们重用原生代码、提高开发效率、降低开发成本。"}
];

add_one.on("touch", function(data, e){
	listdata.addData(data1); // 给ListData添加数据
    listview.refreshItems(); // 刷新ListView 行数据;
});

add_more.on("touch", function(data, e){
	listdata.addData(data2); 
    listview.refreshItems(); 
});

del_one.on("touch", function(data, e){
	listdata.removeRange({fromIndex:1, toIndex:1});
    listview.refreshItems(); 
});

del_all.on("touch", function(data, e){
	listdata.removeAll({}); 
    listview.refreshItems(); 
});