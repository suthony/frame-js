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

var do_button_1 = ui("do_button_1");
var sv_silder0 = ui("sv_silder0");  //用法 与ListView  GridView  完全一样;

var listdata = mm("do_ListData");  // 创建一个 数据集合;

sv_silder0.bindItems(listdata);// 建立sliderview 与 ListData 的行数据关系;

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3}
]);

sv_silder0.refreshItems();

//do_button_1.text = 0
//sv_silder0.on("indexChanged",function(data, e){
//	do_button_1.text = data
//});
