var rootview, page;
rootview = ui("root");
page = sm("do_Page");

rootview.setMapping({
    "UserName.text" : "NickName",
    "InforDescribe.text" : "InforDescribe",
    "InforTime.text" : "InforTime",
    "InforReply.text" : "InforReply",

    "InforImage0.source" : "InforImage0",
    "InforImage1.source" : "InforImage1",
    "InforImage2.source" : "InforImage2",

    "InforImage0.visible" : "InforImage0V",
    "InforImage1.visible" : "InforImage1V",
    "InforImage2.visible" : "InforImage2V",

    "InforType.source" : "InforType0",
    "tag" : "IMGShowerSources"
});

