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
var pagedata = page.getData();
/**********************************************************************************************************/

var listview, listdata;
listview = ui("do_listview");
listdata = mm("do_ListData");
listview.bindItems(listdata);
// listdata.addData([
//     {
//         "MSG":"应用类",
//         "NAME":"do_App",
//         "IMG":"source://image/sm/App.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"应用全局类",
//         "NAME":"do_Global",
//         "IMG":"source://image/sm/Global.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"Page",
//         "NAME":"do_Page",
//         "IMG":"source://image/sm/Page.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"文件管理类",
//         "NAME":"do_Storage",
//         "IMG":"source://image/sm/Storage.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"相册",
//         "NAME":"do_Album",
//         "IMG":"source://image/sm/Album.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"定位服务",
//         "NAME":"do_BaiduLocation",
//         "IMG":"source://image/sm/BaiduLocation.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"照相类",
//         "NAME":"do_Camera",
//         "IMG":"source://image/sm/Camera.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"设备的信息环境类",
//         "NAME":"do_Device",
//         "IMG":"source://image/sm/Device.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"启动外部应用",
//         "NAME":"do_External",
//         "IMG":"source://image/sm/External.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"图片预览",
//         "NAME":"do_ImageBrowser",
//         "IMG":"source://image/sm/ImageBrowser.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"网络状态类",
//         "NAME":"do_Network",
//         "IMG":"source://image/sm/Network.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     },{
//         "MSG":"通知类",
//         "NAME":"do_Notification",
//         "IMG":"source://image/sm/Notification.png",
//         "TYPE":"SM",
//         "VERSION":"1.0.0"
//     }
// ]);
// listview.refreshItems();
initdata.readFile("initdata://idata.json", function (data) {
    listdata.addData(data[pagedata.NAME]);
    listview.refreshItems();
});

listview.on("touch", function (index) {
    var data = listdata.getOne(index);
    var type = data.TYPE.toLocaleLowerCase();
    var name = data.NAME.toLocaleLowerCase();

    if (data.VERSION !== "-") app.openPage("source://view/" + type + "/" + name + ".ui");
    else nf.toast("暂无");
});

listview.on("pull", function (data) {
    page.fire("myPull", data);
    //模拟网络延迟
    if (data.state === 2) {
        setTimeout(function () {
            listview.fire("rebound");
        }, 1000);
    }
});