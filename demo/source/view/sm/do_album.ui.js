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

var album = sm("do_Album");

var action_0 = ui("action_0");
var action_1 = ui("action_1");

var gv_img, listdata;
gv_img = ui("gv_img");
listdata = mm("do_ListData");
gv_img.bindItems(listdata);
             
action_0.on("touch", function(){
    album.select(1, 120, -1, 100, function(data){   // hreight : -1 代表以width 为基准 (保持原图横纵比)缩放;
        var _data = [];
        _data.push({"img":data[0]})
        listdata.addData(_data);
		gv_img.refreshItems();
    });
});

action_1.on("touch", function(){
    album.select(9, 120, -1, 100, function(data){
    	var _datas = [];
    	data.map(function(v){ 
        	_datas.push({"img":v});
        	return _datas;
        })
        listdata.addData(_datas);
		gv_img.refreshItems();
    });
});