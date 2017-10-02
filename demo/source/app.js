/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var deviceone = require("deviceone");
var app = deviceone.sm("do_App");

app.on("loaded", function(){
    // this.openPage("source://view/index.ui");
    app.openPage({
        "source" : "source://view/index.ui",
        "statusBarState" : "transparent",
        "statusBarFgColor" : "white"
    });
});