//LinearLayout组件
function do_LinearLayout(uiJson,parentNode){this.type="do_LinearLayout";this.uiType=2;this.bgImage="";this.bgImageFillType="fillxy";this.direction="vertical";this.enabled=true;this.padding="0,0,0,0";this.defaultProps={bgImage:"",bgImageFillType:"fillxy",direction:"vertical",enabled:true,padding:"0,0,0,0"};this.views=[];this.getChildren=getChildren;this.add=add;function add(id,path,target){var UI=getUIByPath(path).RootView;var node=eval("(function(){return function a(uiJSON, parentNode){return (new "+UI.type+"(uiJSON, parentNode));}})()").call(this,UI,this);var insertIndex=0;for(var i=0;i<this.childrenVirtualNodes.length;++i){insertIndex++;if(this.childrenVirtualNodes[i].id===target)break}this.childrenVirtualNodes.splice(insertIndex,0,node);node.id=id;this.ancestorVirtualNode.generationVirtualNodes[id]=node;this.getDOMElememt()}function getChildren(){var result=[];for(var i=0;i<this.childrenVirtualNodes.length;++i)result.push(this.childrenVirtualNodes[i].id);return result}this.onDOMCreated=function(){var that=this;this.DOMElement.addEventListener("click",function(event){that.fire("touch")})};this.render=function(){var div=this.DOMElement?this.DOMElement:document.createElement("div");for(var key in this.style)div.style[key]=this.style[key];if(this.childrenVirtualNodes){div.innerHTML="";for(var i=0;i<this.childrenVirtualNodes.length;++i){var virtualNode=this.childrenVirtualNodes[i];if(i>0){var preVirtualDOM=this.childrenVirtualNodes[i-1];preVirtualDOM.style.marginBottom=parseInt(preVirtualDOM.style.marginBottom)+parseInt(virtualNode.style.marginTop)+"px";virtualNode.style.marginTop="0px";virtualNode.style.verticalAlign="top";if(this.direction==="vertical"){var br=document.createElement("br");div.appendChild(br)}}div.appendChild(virtualNode.getDOMElememt())}}return div};UI.call(this,uiJson,parentNode)}(function(){var Super=function(){};Super.prototype=UI.prototype;do_LinearLayout.prototype=new Super})();