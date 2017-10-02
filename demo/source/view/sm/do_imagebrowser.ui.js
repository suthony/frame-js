/*******************************************************************************
 * @Author : nanyuantingfeng
 ******************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/** ******************************************************************************************************* */

var imageBrowser = sm("do_ImageBrowser");
var bn_show = ui("bn_show");

bn_show.on("touch", function(){
	imageBrowser.show( [
	            		{
	            			source : "http://pic3.nipic.com/20090525/2416945_231841034_2.jpg",
	            			init : ""
	            		},
	            		{
	            			source : "http://pic9.nipic.com/20100904/4845745_195609329636_2.jpg",
	            			init : ""
	            		},
	            		{
	            			source : "http://pic1.nipic.com/2008-12-09/200812910493588_2.jpg",
	            			init : ""
	            		},
	            		{
	            			source : "http://img.61gequ.com/allimg/2011-4/201142614314278502.jpg",
	            			init : ""
	            		},
	            		{
	            			source : "http://hiphotos.baidu.com/praisejesus/pic/item/e8df7df89fac869eb68f316d.jpg",
	            			init : ""
	            		},
	            		{
	            			source : "http://pic37.nipic.com/20140209/8821914_163234218136_2.jpg",
	            			init : ""
	            		} ], 0);

});
