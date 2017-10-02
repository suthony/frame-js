/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
global = sm("do_Global");
page.on("back", function () {
    app.closePage()
});
ui("action_back").on("touch", function () {
    app.closePage()
});

/**********************************************************************************************************/
var camera = sm("do_Camera");
var album = sm("do_Album");
// var imageBrowser = sm("do_ImageBrowser");
/********************************************************************************/

var grid_view, listdata;
grid_view1 = ui("grid_view");
listdata = mm("do_ListData");
grid_view1.bindItems(listdata);

var _datas = [
    {"img": "source://image/p/1.jpg"},
    {"img": "source://image/p/2.jpg"},
    {"img": "source://image/p/3.jpg"},
    {"img": "source://image/p/4.jpg"},
    {"img": "source://image/p/1.jpg"},
    {"img": "source://image/p/2.jpg"},
    {"img": "source://image/p/3.jpg"},
    {"img": "source://image/p/4.jpg"},
    {"img": "source://image/p/5.jpg"},
    {"img": "source://image/p/1.jpg"},
    {"img": "source://image/p/2.jpg"},
    {"img": "source://image/p/3.jpg"},
    {"img": "source://image/p/4.jpg"},
    {"img": "source://image/p/1.jpg"},
    {"img": "source://image/p/2.jpg"},
    {"img": "source://image/p/3.jpg"},
    {"img": "source://image/p/4.jpg"},
    {"img": "source://image/p/5.jpg"}
]

listdata.addData(_datas);
grid_view1.refreshItems();


var gridview, listdata;
gridview = ui("gv_gridview_0");
listdata = mm("do_ListData");
gridview.bindItems(listdata);
listdata.addOne({"$+": "+", "$0": "source://image/img@add.png"}, 0);
// console.log(listdata.getAllData());
gridview.refreshItems();

var rootview, menuor;
rootview = ui("do_alayout_1");
// menuor = ui(rootview.add("menuor", "source://view/kit/menu.ui", 0, 0));
// var i ;
// page.on("menu-listen", function(data){
//     menuor.visible = false;
//     var len = this.LEN || 8;
//     if(data.state == 1)  camera.capture(720, -1, 72, true, function(data){
// //    nf.alert(data)
//         listdata.addOne({"$+" : "", "$0" : data}, 0);
//         gridview.refreshItems();
//     });else if(data.state == 2)  album.select(3, 720, -1, 72, function(data){
//      	var len1 = data.length
//         if(len1 == 0) return;
//         listdata.addData(
//             data.map(function(v){
//             return {"$+" : "", "$0" : v}
//         }), 0);
//         gridview.refreshItems();
//     });
// });

page.on("image-add-touched", function (tag) {
    var len = listdata.getCount();
    this.LEN = 9 - len;
    if (tag === "+" && len < 9) menuor.visible = true;

});


grid_view1.on("touch", function (data, e) {                       //griview点击事件
    var img1 = _datas[data].img;
    // imageBrowser.show([
    // 	{ source :img1 , init :img1 }
    // ], 0);
});


page.on("image-touched", function (source) {
    // if (source != "source://image/img@add.png"){
    // 	imageBrowser.show([
    // 	{ "source" : source}
    // ]);
    // }
});



