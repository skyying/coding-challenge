(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(t,i,n){"use strict";n.r(i);var e=n(0),r=n.n(e),o=function(){function t(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,n,e){return n&&t(i.prototype,n),e&&t(i,e),i}}();var l=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.value=i,this.left=null,this.right=null}return o(t,[{key:"visit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments[1];null!==this.left&&this.left.visit(t,this),t(this,i),null!==this.right&&this.right.visit(t,this)}},{key:"search",value:function(t){var i=null;return this.value===t?this:(t<this.value&&null!==this.left?i=this.left.search(t):t>this.value&&null!==this.right&&(i=this.right.search(t)),i)}},{key:"addNode",value:function(t){this!==t&&(this.value>t.value?null===this.left?(this.left=t,this.left.x=this.x-50,this.left.y=this.y+30):this.left.addNode(t):null===this.right?(this.right=t,this.right.x=this.x+50,this.right.y=this.y+30):this.right.addNode(t))}}]),t}(),a=function(){function t(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,n,e){return n&&t(i.prototype,n),e&&t(i,e),i}}();var s=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=i}return a(t,[{key:"traverse",value:function(t){this.root.visit(t,this.root)}},{key:"search",value:function(t){return this.root.search(t)}},{key:"addValue",value:function(t){var i=new l(t);null===this.root?(this.root=i,this.root.x=window.innerWidth/2,this.root.y=100):this.root.addNode(i)}}]),t}();new r.a(function(t){var i=void 0;t.setup=function(){t.createCanvas(window.innerWidth,window.innerHeight),t.background("#7f5bf8"),i=new s,[5,1,9,2,3,1,0,4,0,3].forEach(function(t){i.addValue(t)}),i.traverse(t.drawNode)},t.draw=function(){},t.drawNode=function(i,n){t.fill("#b4f9b6"),t.stroke("#b4f9b6"),t.line(n.x+1,n.y+1,i.x,i.y),t.noStroke(),t.fill("#b4f9b6"),t.ellipse(i.x,i.y,30,30),t.fill(0),t.textAlign(t.CENTER),t.textSize(14),t.text(i.value,i.x,i.y+5)}})}},[[2,1,2]]]);
//# sourceMappingURL=main.99c5.js.map