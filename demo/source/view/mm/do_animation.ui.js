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

var anim0 = mm("do_Animation");//Page 级别的
var anim1 = mm("do_Animation");//Page 级别的
var anim2 = mm("do_Animation", "A-ID-0", "app");//APP 级别的  第二个参数 表示 ID <唯一值>;
var anim3 = mm("do_Animation", "A-ID-1", "app");//APP 级别的  第二个参数 表示 ID;

anim0.alpha({
    id : "animation-index-0",//动画id ; <自定义>
    delay : 0,//动画延迟时间
    duration : 2000,//动画过渡时间
    curve : "Linear",//动画曲线类型
    repeatCount : 1,//动画重复次数，默认不重复，为-1时无限重复
    autoReverse : true,//是否自动动画反转
    fillAfter : true,//是否保持动画的最后一帧在View上面
    alphaFrom : 1,//起始透明值
    alphaTo : 0//结束透明值
});

anim1.transfer({
    id : "animation-index-1",
    delay : 0,
    duration : 2000,
    curve : "Linear",
    repeatCount : -1,
    autoReverse : true,
    fillAfter : true,
    fromX : 0,//起始x坐标
    fromY : 0,//起始y坐标
    toX : 100,//结束x坐标
    toY : 100//结束y坐标
});

anim2.scale({
    id : "animation-index-2",
    delay : 0,
    duration : 2000,
    curve : "Linear",
    repeatCount : "",
    autoReverse : true,
    fillAfter : false,
    scaleFromX : .5,//起始x的伸缩比例
    scaleFromY : .5,//起始y的伸缩比例
    scaleToX : 1,//结束x的伸缩比例
    scaleToY : 1,//结束y的伸缩比例
    pivotX : 1,//缩放起点x坐标
    pivotY : 1//缩放起点y坐标
});

anim3.rotate({
    id : "animation-index-3",
    delay : 0,
    duration : 1000,
    curve : "Linear",
    repeatCount : -1,
    autoReverse : false,
    fillAfter : false,
    fromDegree : 0,//起始旋转角度
    toDegree : 360,//结束旋转角度
    pivotX : 0,//缩放起点x坐标
    pivotY : 0//缩放起点y坐标
});

/**********************************************************************************************************/
var img_logo = ui("img_logo");
var action_0, action_1, action_2, action_3;

action_0 = ui("action_0");
action_1 = ui("action_1");
action_2 = ui("action_2");
action_3 = ui("action_3");

action_0.on("touch", function(){
    img_logo.animate(anim0);
});

action_1.on("touch", function(){
    img_logo.animate(anim1);
});

action_2.on("touch", function(){
    img_logo.animate(anim2);
});

action_3.on("touch", function(){
    img_logo.animate(anim3);
});

















