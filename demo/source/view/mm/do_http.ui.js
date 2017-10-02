/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf,storage,initdata;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
// storage = sm("do_Storage");
initdata = sm("do_InitData");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/
var label_info = ui("label_info");

/**********************************************************************************************************/

var http;
http = mm("do_Http");
http.method = "GET";
http.timeout = 30000;
http.contentType = "application/json";
http.url = "http://www.baidu.com";//TODO
http.on("success", function(data){
    label_info.text = data
});
http.on("fail", function(data){
    label_info.text = data
});
http.on("progress", function(data){
    label_info.text = data
});

/**********************************************************************************************************/

var http2;
http2 = mm("do_Http");
http2.method = "POST";
http2.timeout = 30000;
http2.contentType = "application/json";
http2.url = "http://www.baidu.com";
http2.on("success", function(data){
    label_info.text = data;
});
http2.on("fail", function(data){
    label_info.text = data;
});
http2.on("progress", function(data){
    label_info.text = data;
});

/**********************************************************************************************************/

var http3;
http3 = mm("do_Http");
http3.method = "POST";
http3.timeout = 30000;
http3.contentType = "application/json";
http3.url = "http://www.baidu.com";
http3.on("success", function(data){
    label_info.text = data;
});
http3.on("fail", function(data){
    label_info.text = data;
});
http3.on("progress", function(data){
    label_info.text = data;
});

/**********************************************************************************************************/

var http4;
http4 = mm("do_Http");
http4.method = "POST";
http4.timeout = 30000;
http4.contentType = "application/json";
http4.url = "https://www.baidu.com/img/bd_logo1.png";
http4.on("success", function(data){
    label_info.text = data;
});
http4.on("fail", function(data){
    label_info.text = data;
});
http4.on("progress", function(data){
	var data1 = JSON.stringify(data);
    label_info.text = data1;
});

/**********************************************************************************************************/

var e_get, e_post, e_upload, e_download;

e_get = ui("e_get");
e_post = ui("e_post");
e_upload = ui("e_upload");
e_download = ui("e_download");

e_get.on("touch", function(){
    http.request();
});

e_post.on("touch", function(){
    http2.request();
});

e_upload.on("touch", function(){
	var d = "data://data1.zip";
	if (storage.fileExist(d)) {
		http3.upload(d);
	}else{
		initdata.copyFile("initdata://data1.zip",d,function(){
			http3.upload(d);
		});
	}
});

e_download.on("touch", function(){
    http4.download("data://xiazai.png");
});



























