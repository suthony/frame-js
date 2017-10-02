/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf,storage,initdata;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
storage = sm("do_Storage");
initdata = sm("do_InitData");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/

var sqlite3 = mm("do_SQLite");

var btn_open = ui("btn_open");
btn_open.on("touch",function(data, e){
	var d = "data://demo.db";
	if (storage.fileExist(d)) {
		sqlite3.open({path:d});
		nf.alert("数据库打开成功！");
	}else{
		initdata.copyFile("initdata://demo.zip",d,function(){
			sqlite3.open({path:d});
			nf.alert("数据库打开成功！");
		});
	}
});



var sql0 = "CREATE TABLE IF NOT EXISTS demo (id INTEGER PRIMARY KEY AUTOINCREMENT, a, b, c, d TIMESTAMP NOT NULL DEFAULT (datetime('now','localtime')) );";
var sql1 = "INSERT INTO demo(a, b, c) VALUES ('yun', '毛毛', 'wwwwwww') ";
var sql2 = "UPDATE  demo SET c='ccccccc',d=(datetime('now','localtime')) WHERE a='yun'; ";
var sql3 = "SELECT * FROM demo";
var sql4 = "DROP TABLE demo;";


var btn_create = ui("btn_create");  
//var do_textfield_create = ui("do_textfield_create");
btn_create.on("touch",function(data, e){
//	var sql0 = do_textfield_create.text;
	sqlite3.execute( sql0 , function(data){//  创建表
//        deviceone.print(data , "Create");
        nf.toast(data);
    });
});

var btn_insert = ui("btn_insert");
//var do_textfield_insert = ui("do_textfield_insert");
btn_insert.on("touch",function(data, e){
//	var sql1 = do_textfield_insert.text;
	 sqlite3.execute( sql1 , function(data){   //插入数据
//      deviceone.print(data , "Insert");
        nf.toast(data);
    });
});

var btn_updata = ui("btn_updata");
//var do_textfield_updata = ui("do_textfield_updata");
btn_updata.on("touch",function(data, e){
//	var sql2 = do_textfield_updata.text;
	 sqlite3.execute( sql2 , function(data){   //修改数据
//        deviceone.print(data , "Update");
        nf.toast(data);
    });
});

var btn_select = ui("btn_select");
//var do_textfield_select = ui("do_textfield_select");
btn_select.on("touch",function(data, e){
//	var sql3 = do_textfield_select.text;
	sqlite3.query( sql3 , function(data){       //查询数据
//        deviceone.print(JSON.stringify(data) , "Query");
        nf.alert(data);
    });
});



var btn_drop = ui("btn_drop");
//var do_textfield_drop = ui("do_textfield_drop");
btn_drop.on("touch",function(data, e){
//	var sql4 = do_textfield_drop;
	sqlite3.execute( sql4 , function(data){  //删除表
//        deviceone.print(data , "Drop");
        nf.toast(data);
    });
});

var btn_close = ui("btn_close");
btn_close.on("touch",function(data, e){
	sqlite3.close({});
	nf.alert({text:"数据库关闭成功！", title:""}, function(data, e){});
});
