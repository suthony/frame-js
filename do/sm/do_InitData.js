function do_InitData(){this.type="do_InitData";SM.call(this);this.readFile=readFile;this.readFileSync=readFileSync;function readFile(path,func){var fileUrl=getRealUrl(path);$.async=true;$.get(fileUrl,function(data){var _r1=data.trim();if(_r1.length>0){var c=_r1.charCodeAt(0);if(c==123||c==91)try{data=JSON.parse(_r1)}catch(e){data=data.data}}func(data)})}function readFileSync(text){$.async=false;var fileUrl=getRealUrl(path);$.get(fileUrl,function(data){func(data)})}}(function(){var Super=function(){};Super.prototype=SM.prototype;do_InitData.prototype=new Super})();