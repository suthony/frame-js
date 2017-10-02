var page = sm("do_Page");

var rootView = ui("root");
var do_imageview_1 = ui("do_imageview_1");

rootView.setMapping({
    "do_imageview_1.tag" : "$+",
    "do_imageview_1.source" : "$0"
});

do_imageview_1.on("touch", function(){
    page.fire("image-add-touched", this.tag);
    page.fire("image-touched", this.source);
});



