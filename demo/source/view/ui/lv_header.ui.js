var page = sm("do_Page");
var lb_content = ui("lb_content");

page.on("myPull", function (data) {
    // console.log(data)
    if (data.state == 0) {
        lb_content.text = "下拉刷新";
    } else if (data.state == 1) {
        lb_content.text = "释放更新";
    } else if (data.state == 2) {
        lb_content.text = "加载中";
    }
});