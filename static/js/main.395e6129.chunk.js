(this["webpackJsonpski-fe"]=this["webpackJsonpski-fe"]||[]).push([[0],{145:function(e,t,n){e.exports=n(257)},150:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(130),o=n.n(i),l=(n(150),n(94)),s=n(131),c=n(132),u=n(141),d=n(142),m=n(266),h=n(272),f=n(263),y=n(267),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hiddenSeries:new Set},a.series=[{name:"cats",color:"#c33",datapoints:[{x:0,y:5},{x:1,y:8},{x:2,y:5}]},{name:"dogs",color:"#3c3",datapoints:[{x:0,y:2},{x:1,y:4},{x:2,y:6}]},{name:"birds",color:"#33c",datapoints:[{x:0,y:3},{x:1,y:1},{x:2,y:3}]}],a}return Object(c.a)(n,[{key:"buildEvents",value:function(){var e=this;return this.series.map((function(t,n){return{childName:["legend"],target:["data","labels"],eventKey:String(n),eventHandlers:{onClick:function(){return[{childName:["area-"+n],target:"data",eventKey:"all",mutation:function(){return e.state.hiddenSeries.delete(n)||e.state.hiddenSeries.add(n),e.setState({hiddenSeries:new Set(e.state.hiddenSeries)}),null}}]},onMouseOver:function(){return[{childName:["area-"+n],target:"data",eventKey:"all",mutation:function(e){return{style:Object(l.a)({},e.style,{strokeWidth:4,fillOpacity:.5})}}}]},onMouseOut:function(){return[{childName:["area-"+n],target:"data",eventKey:"all",mutation:function(){return null}}]}}}}))}},{key:"render",value:function(){var e=this;return a.createElement("div",null,a.createElement(m.a,{height:200,events:this.buildEvents()},a.createElement(h.a,null),this.series.map((function(t,n){var r;if(!e.state.hiddenSeries.has(n))return a.createElement(f.a,{key:"area-"+n,name:"area-"+n,data:(r=t,r.datapoints.map((function(e){return{name:r.name,x:e.x,y:e.y}}))),style:{data:{fill:t.color,fillOpacity:.2,stroke:t.color,strokeWidth:2}}})})),a.createElement(y.a,{name:"legend",data:this.series.map((function(t,n){var a,r=(a=t).color?{name:a.name,symbol:{fill:a.color}}:{name:a.name};return e.state.hiddenSeries.has(n)?Object(l.a)({},r,{symbol:{fill:"#999"}}):r})),height:90})))}}]),n}(a.Component);var p=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.395e6129.chunk.js.map