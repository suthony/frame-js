//sm组件父类
function SM(){this.eventFactory={};deviceone.call(this);this.address=guid();window.parent.SMFactory[this.address]=this}(function(){var Super=function(){};Super.prototype=deviceone.prototype;SM.prototype=new Super;SM.prototype.on=function(eventName,func){this.eventFactory[eventName]=this.eventFactory[eventName]?this.eventFactory[eventName]:[];this.eventFactory[eventName].push(func)}})();