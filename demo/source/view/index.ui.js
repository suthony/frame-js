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

/**********************************************************************************************************/

var listview, listdata;
listview = ui("do_listview");

// console.log(ui("action_back").DOMElement)
listdata = mm("do_ListData");

listdata.addData([
    {NAME: "UI", MSG: "View控件", TYPE: "UI", IMG: "source://image/UI.png", VERSION: "1.0"},
    {NAME: "SM", MSG: "单实例组件", TYPE: "UI", IMG: "source://image/SM.png", VERSION: "1.0"},
    {NAME: "MM", MSG: "多实例组件", TYPE: "UI", IMG: "source://image/MM.png", VERSION: "1.0"}
]);

listview.bindItems(listdata);
// listview.refreshItems();

listview.on("touch", function (index) {
    var data = listdata.getOne(index);
    app.openPage("source://view/indexC.ui", data);
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