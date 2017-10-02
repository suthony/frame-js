/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf,storage;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
storage = sm("do_Storage");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/
var btn_dirExist,btn_getDirs,btn_getFiles,btn_deleteDir,lb_direx,lb_list1;
btn_dirExist = ui("btn_dirExist");
btn_getDirs = ui("btn_getDirs");
btn_getFiles = ui("btn_getFiles");
btn_deleteDir = ui("btn_deleteDir");
lb_direx = ui("lb_direx");
lb_list = ui("lb_list1");

btn_dirExist.on("touch",function(data, e){
	var a = storage.dirExist({path:"data://"});
	if(a === true){
		a = "存在";
	}else{
		a = "不存在";
	}
	lb_direx.text = a;
});

btn_getDirs.on("touch",function(data, e){
	storage.getDirs({path:"data://"}, function(data, e){
		lb_list.text = data;
	});
});

btn_getFiles.on("touch",function(data, e){
	storage.getFiles({path:"data://"}, function(data, e){
		lb_list.text = data;
	});
});

btn_deleteDir.on("touch",function(data, e){
	storage.deleteDir({path:"data://data2"}, function(data, e){
		var b;
		if(data === true){
			b = "成功";
		}else{
			b = "不成功";
		}
		nf.alert(b,"删除data://data2目录");
	});
});

/**********************************************************************************************************/
var btn_fileExist,btn_readFile,btn_writeFile,btn_deleteFile,lb_fileex,lb_text,tx_text;
btn_fileExist = ui("btn_fileExist");
btn_readFile = ui("btn_readFile");
btn_writeFile = ui("btn_writeFile");
btn_deleteFile = ui("btn_deleteFile");
lb_fileex = ui("lb_fileex");
lb_text = ui("lb_text");
tx_text = ui("tx_text");


btn_fileExist.on("touch",function(data, e){
	var c = storage.fileExist({path:"data://data1/data1.txt"});
	if(c === true){
		c = "存在";
	}else{
		c = "不存在";
	}
	lb_fileex.text = c;
});

btn_readFile.on("touch",function(data, e){
	storage.readFile({path:"data://data1/data1.txt"}, function(data, e){
//		var d = JSON.stringify(data);
		if (data){
			lb_text.text = data;
		}else{
			nf.alert("该文件不存在!");
		}
	});
});

btn_writeFile.on("touch",function(data, e){
	var data1 = tx_text.text;
	if (data1){
		data1 = tx_text.text;
		storage.writeFile({path:"data://data1/data1.txt", data:data1}, function(data, e){
			var d1;
			if(data === true){
				d1 = "成功";
			}else{
				d1 = "不成功";
			}
			nf.alert(d1,"向文件data1.txt里写文件");
		});
	}else{
		nf.alert("请输入写文件的内容!");
	}
	
});

btn_deleteFile.on("touch",function(data, e){
	storage.deleteFile({path:"data://data1/data1.txt"}, function(data, e){
		var d2;
		if(data === true){
			d2 = "成功";
		}else{
			d2 = "不成功";
		}
		nf.alert(d2,"删除文件data1.txt");
	});
});

/**********************************************************************************************************/
var btn_copyFile = ui("btn_copyFile");
var lb_copy = ui("lb_copy");
var lb_ext = ui("lb_ext");
var btn_copyext = ui("btn_copyext");
var initdata = sm("do_InitData");
initdata.copyFile("initdata://data1/data1.txt","data://data1/data1.txt",function(){
})
initdata.copyFile("initdata://data1/data2.txt","data://data1/data2.txt",function(){
})
var adata = [
	"data://imgs/deviceone.png"
];
btn_copyFile.on("touch",function(data, e){
	if(storage.fileExist(adata[0])){
		copy2data4();
	}else{
		initdata.copyFile("initdata://imgs/deviceone.png",adata[0],function(){
			copy2data4();
		})
	}
});
function copy2data4(){
	storage.copy({source:adata, target:"data://data4"}, function(data, e){
		var d5;
		if(data === true){
			d5 = "拷贝成功";
		}else{
			d5 = "拷贝不成功";
		}
		lb_copy.text = d5;
	});
}
btn_copyext.on("touch",function(data, e){
	storage.getFiles({path:"data://data4"}, function(data, e){
		lb_ext.text = data;
	});
});

