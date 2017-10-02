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

var bn_01, bn_02, timer01, timer02;

bn_01 = ui("bn_01");
bn_02 = ui("bn_02");

/**********************************************************************************************************/
timer01 = mm("do_Timer");
timer01.delay = 0;
timer01.interval = 100;

var DURATION01 = 0;

timer01.on("tick", function(){
    if(DURATION01 >= 101){
        DURATION01 = 0;
        return this.stop();//timer01.stop();
    }
    bn_01.text = DURATION01++;
});

/**********************************************************************************************************/
timer02 = mm("do_Timer");
timer02.delay = 0;
timer02.interval = 100;

var DURATION02 = 100;

timer02.on("tick", function(){
    if(DURATION02 <= 0){
        DURATION02 = 100;
        return this.stop();//timer02.stop();
    }
    bn_02.text = DURATION02--;
});
/**********************************************************************************************************/
bn_01.on("touch", function(){
    timer01.start();
    nf.toast("计时开始");
});
bn_02.on("touch", function(){
    timer02.start();
    nf.toast("计时开始");
});
var do_button_1 = ui("do_button_1");
do_button_1.on("touch",function(data, e){
	timer01.stop({});
	nf.toast("计时停止");
});

var do_button_2 = ui("do_button_2");
do_button_2.on("touch",function(data, e){
	timer02.stop({});
	nf.toast("计时停止");
});
