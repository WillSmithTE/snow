(this["webpackJsonpski-fe"]=this["webpackJsonpski-fe"]||[]).push([[0],{151:function(e,t,n){e.exports=n(264)},156:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(133),o=n.n(i),s=(n(156),n(147)),c=n(98),u=n(135),l=n(136),d=n(146),f=n(148),m=n(273),h=n(277),p=n(270),v=n(274),y=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={hiddenSeries:new Set},a.series=e.series,a}return Object(l.a)(n,[{key:"buildEvents",value:function(){var e=this;return this.series.map((function(t,n){return{childName:["legend"],target:["data","labels"],eventKey:String(n),eventHandlers:{onClick:function(){return[{childName:["area-"+n],target:"data",eventKey:"all",mutation:function(){return e.state.hiddenSeries.delete(n)||e.state.hiddenSeries.add(n),e.setState({hiddenSeries:new Set(e.state.hiddenSeries)}),null}}]},onMouseOver:function(){return[{childName:["area-"+n],target:"data",eventKey:"all",mutation:function(e){return{style:Object(c.a)({},e.style,{strokeWidth:4,fillOpacity:.5})}}}]},onMouseOut:function(){return[{childName:["area-"+n],target:"data",eventKey:"all",mutation:function(){return null}}]}}}}))}},{key:"render",value:function(){var e=this;return a.createElement("div",null,a.createElement(m.a,{height:200,events:this.buildEvents()},a.createElement(h.a,null),a.createElement(h.a,{dependentAxis:!0}),this.series.map((function(t,n){var r;if(!e.state.hiddenSeries.has(n))return a.createElement(p.a,{key:"area-"+n,name:"area-"+n,data:(r=t,r.datapoints.map((function(e){return{name:r.name,x:e.x,y:e.y}}))),style:{data:{fill:t.color,fillOpacity:.2,stroke:t.color,strokeWidth:2}}})})),a.createElement(v.a,{itemsPerRow:5,name:"legend",data:this.series.map((function(t,n){var a,r=(a=t).color?{name:a.name,symbol:{fill:a.color}}:{name:a.name};return e.state.hiddenSeries.has(n)?Object(c.a)({},r,{symbol:{fill:"#999"}}):r})),height:10})))}}]),n}(a.Component),g=n(96),b=n.n(g),k=n(97),S=n.n(k),w=n(145),E={getSpencersCreek:function(){var e=Object(w.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ski-be-hgfltltt5a-de.a.run.app/","/api/spencersCreek/a"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},O=[{x:0,y:0},{x:365,y:0}];function j(e){var t=b()(e,"YYYY-MM-DD"),n=t.year(),a=b()(n+"-01-01","YYYY-MM-DD");return t.diff(a,"days")}var x=function(){var e=r.a.useState(void 0),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){E.getSpencersCreek().then((function(e){var t=e.map((function(e){var t=e.year,n=e.data;return{name:t,color:"#000000".replace(/0/g,(function(){return(~~(16*Math.random())).toString(16)})),datapoints:O.concat(n.map((function(e){var t=e.date,n=e.snow;return{x:j(t),y:n}})))}}));console.error(t.map((function(e){return e.datapoints}))),i(t)}))}),[]),n?r.a.createElement(y,{series:n}):r.a.createElement("h1",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.f7f247c3.chunk.js.map