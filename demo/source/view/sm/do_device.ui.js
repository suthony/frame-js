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

var device = sm("do_Device");

var bn_getInfo = ui("bn_getInfo");
var dv_name = ui("dv_name");
var dv_id = ui("dv_id");
var dv_os = ui("dv_os");
var dv_osversion = ui("dv_osversion");
var dv_sdkversion = ui("dv_sdkversion");
var dv_h = ui("dv_h");
var dv_v = ui("dv_v");
var dv_ndpiv = ui("dv_ndpiv");
var dv_ndpih = ui("dv_ndpih");
var dv_scrh = ui("dv_scrh");
var dv_scrv = ui("dv_scrv");
var dv_comm = ui("dv_comm");
var dv_sim = ui("dv_sim");
var dv_imsi = ui("dv_imsi");
bn_getInfo.on("touch", function(){
    var info = device.getInfo();
    dv_id.text = info.deviceId;
    dv_name.text = info.deviceName;
    dv_os.text = info.OS;
    dv_osversion.text = info.OSVersion;
    dv_sdkversion.text = info.sdkVersion;
    dv_h.text = info.resolutionH;
    dv_v.text = info.resolutionV;
    dv_ndpiv.text = info.dpiV;
    dv_ndpih.text = info.dpiH;
    dv_scrh.text = info.screenH;
    dv_scrv.text = info.screenV;
    dv_comm.text = info.communicationtype;
    dv_sim.text = info.simSerialNumber;
    dv_imsi.text = info.IMSI;
});

flash = ui("flash");
beep = ui("beep");
vibrate = ui("vibrate");

flash.on("touch", function(){
    if(this.status == "off"){
        device.flash("on");
        this.status = "on";
    }else{
        device.flash("off");
        this.status = "off";
    }
});
beep.on("touch", function(){
    device.beep();
});
vibrate.on("touch", function(){
    device.vibrate(3000);
});


