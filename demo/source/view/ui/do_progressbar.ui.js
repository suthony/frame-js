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

var do_progressbar_0 = ui("do_progressbar_0");
var do_button_2 = ui("do_button_2");
var lb_progress = ui("lb_progress");
var timer = mm("do_Timer");
timer.delay = 0;
timer.interval = 100;
timer.DURATION = 0;
timer.on("tick", function(){
    if(this.DURATION >= 100){
        this.DURATION = 0;
        return this.stop();//timer.stop();
    }
    do_progressbar_0.progress = this.DURATION++;
    lb_progress.text = this.DURATION + "%";
	if (lb_progress.text === "100%"){
		do_button_2.text = "下载完成";
	}
});

do_button_2.on("touch", function(){
    timer.start();
    do_button_2.text = "下载";
});

/**********************************************************************************************************/
var do_progressbar_1 = ui("do_progressbar_1");
var timer1 = mm("do_Timer");
var img = ui("img");
var do_button_1 = ui("do_button_1");

timer1.delay = 0;
timer1.interval = 100;
timer1.DURATION = 0;
timer1.on("tick", function(){
    if(this.DURATION >= 100){
        this.DURATION = 0;
        return this.stop();//timer.stop();
    }
    do_progressbar_1.progress = this.DURATION++;
    do_button_1.text = this.DURATION + "%";
	if (do_button_1.text === "100%"){
		do_progressbar_1.visible = false;
		img.visible = true;
		do_button_1.text = "加载图片";
	}
});

do_button_1.on("touch", function(){
    timer1.start();
    img.visible = false;
    do_progressbar_1.visible = true;
});