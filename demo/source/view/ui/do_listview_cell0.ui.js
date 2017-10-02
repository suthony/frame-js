var rootview, page;
rootview = ui("root");
page = sm("do_Page");

rootview.setMapping({   // 此处的Mapping只能设置在 RootView 上 ;
    "UserName.text" : "NickName",
    "InforDescribe.text" : "InforDescribe",
    "InforTime.text" : "InforTime",
    "InforReply.text" : "InforReply",
    "InforType.source" : "InforType0"
});
 