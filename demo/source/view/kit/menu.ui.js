var page = sm("do_Page");

var action_cap, action_abl;

action_cap = ui("action_cap");
action_abl = ui("action_abl");

action_abl.on("touch", function(){
    page.fire("menu-listen", {state : 2});
});

action_cap.on("touch", function(){
    page.fire("menu-listen", {state : 1});
});

ui("$").on("touch", function(){
    page.fire("menu-listen", {state : 0});
});