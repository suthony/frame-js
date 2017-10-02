/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function () {
    app.closePage()
});
ui("action_back").on("touch", function () {
    app.closePage()
});

// var storage = sm("do_Storage");
var initdata = sm("do_InitData");
/**********************************************************************************************************/

var listview = ui("do_listview");
var listdata = mm("do_ListData");

listview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

initdata.readFile("initdata://LVdata.json", function (data) {// 读取文件
    listdata.addData(data); // 给ListData添加数据
    listview.refreshItems(); // 刷新ListView 行数据;
});


listview.on("touch", function (data, e) {
    app.openPage({
        source: "source://view/ui/listviewdemo.ui",
        data: data,
        animationType: "",
        isFullScreen: false,
        keyboardMode: "default",
        scriptType: ""
    }, function (data, e) {
    });
});

