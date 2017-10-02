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

//var action_0, action_1, action_2, action_3;
//
//action_0 = ui("action_0");
//action_1 = ui("action_1");
//action_2 = ui("action_2");
//action_3 = ui("action_3");
//
var rootview = ui("do_alayout_1");// 访问RootView 的快捷方式;

rootview.setMapping({
    "do_label_test.text" : "$0",
    "do_label_test1.text" : "$1",
    "do_label_test2.text" : "$2"
//    "Button0.text" : "$2",
//    "Button0.bgColor" : "$3",
//    "IMG0.source" : "$4",
//    "WebView0.url" : "$5"
});
//
///**********************************************************************************************************/
//
var do_label_test = ui("do_label_test");
var do_label_test1 = ui("do_label_test1");
var do_label_test2 = ui("do_label_test2");
var bn_addData = ui("bn_addData");
var bn_addOne = ui("bn_addOne");
var bn_rmall = ui("bn_rmall");
var bn_rmone = ui("bn_rmone");
var hashdata = mm("do_HashData");

rootview.bindData(hashdata); // 与RootView绑定

bn_addData.on("touch", function(){
    hashdata.addData({      // 设置数据
        "$0"  : "Data1",
        "$1"  : "Data2"
    });
    rootview.refreshData();// 刷新数据;
});

bn_rmall.on("touch", function(){
    hashdata.removeAll();
    rootview.refreshData();// 刷新数据;
});

bn_addOne.on("touch", function(){
    hashdata.addOne("$2", "Data3");
    rootview.refreshData();// 刷新数据;
});

bn_rmone.on("touch", function(){
    hashdata.removeOne({key:"$2"});
    rootview.refreshData();// 刷新数据;
});


