var page = sm("do_Page");

var action_confirm, action_cancel, tf_wenben;

action_confirm = ui("action_confirm");
action_cancel = ui("action_cancel");

tf_wenben = ui("tf_wenben");

action_confirm.on("touch", function(){
    page.fire("txtf-listen", {state : 2, text : tf_wenben.text});
});
action_cancel.on("touch", function(){
    page.fire("txtf-listen", {state : 1});
});

ui("$").on("touch", function(){
    page.fire("txtf-listen", {state : 0});
});