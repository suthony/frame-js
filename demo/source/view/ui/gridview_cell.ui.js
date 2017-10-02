var rootview, page;
rootview = ui("root");

rootview.setMapping({
    "img.source" : "img"
});

rootview.on("dataRefreshed", function () {
    console.log("dataRefreshed事件");
});