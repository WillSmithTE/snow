(this["webpackJsonpski-fe"]=this["webpackJsonpski-fe"]||[]).push([[0],{187:function(e,t,a){e.exports=a(303)},192:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(48),c=a.n(l),i=(a(192),a(180)),o=a(71),s=a(97),f=a(159),u=a(160),d=a(179),m=a(181),b=a(332),h=a(334),y=a(342),p=a(340),v=a(328),g=a(333),k={Jan:{firstDay:1,label:"Jan"},Feb:{firstDay:32,label:"Feb"},Mar:{firstDay:60,label:"Mar"},Apr:{firstDay:91,label:"Apr"},May:{firstDay:121,label:"May"},June:{firstDay:152,label:"June"},July:{firstDay:182,label:"July"},Aug:{firstDay:213,label:"Aug"},Sept:{firstDay:244,label:"Sept"},Oct:{firstDay:274,label:"Oct"},Nov:{firstDay:305,label:"Nov"},Dec:{firstDay:335,label:"Dec"},end:{firstDay:366,label:""}},E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={hiddenSeries:new Set},n}return Object(u.a)(a,[{key:"buildEvents",value:function(){var e=this;return this.props.series.map((function(t,a){return{childName:["legend"],target:["data","labels"],eventKey:String(a),eventHandlers:{onClick:function(){return[{childName:["area-"+a],target:"data",eventKey:"all",mutation:function(){return e.state.hiddenSeries.delete(a)||e.state.hiddenSeries.add(a),e.setState({hiddenSeries:new Set(e.state.hiddenSeries)}),null}}]},onMouseOver:function(){return[{childName:["area-"+a],target:"data",eventKey:"all",mutation:function(e){return{style:Object(o.a)({},e.style,{strokeWidth:4,fillOpacity:.5})}}}]},onMouseOut:function(){return[{childName:["area-"+a],target:"data",eventKey:"all",mutation:function(){return null}}]}}}}))}},{key:"render",value:function(){var e=this;return console.error(Object.keys(k)),n.createElement("div",null,n.createElement(b.a,{height:200,events:this.buildEvents(),containerComponent:n.createElement(h.a,{labels:function(e){var t=e.datum.y;return"".concat(t,"cm")},radius:5,labelComponent:n.createElement(y.a,{centerOffset:{x:5},style:{fontSize:"6px"}})})},n.createElement(p.a,{style:{grid:{stroke:"#818e99",strokeWidth:.5},tickLabels:{fontSize:8}},tickValues:Object.values(k).map((function(e){return e.firstDay})),tickFormat:function(e){return Object.values(k).find((function(t){return t.firstDay===e})).label}}),n.createElement(p.a,{style:{grid:{stroke:"#818e99",strokeWidth:.5},tickLabels:{fontSize:8}},dependentAxis:!0,tickFormat:function(e){return"".concat(e,"cm")}}),this.props.series.map((function(t,a){var r;if(!e.state.hiddenSeries.has(a))return n.createElement(v.a,{key:"area-"+a,name:"area-"+a,data:(r=t,r.datapoints.map((function(e){return{name:r.name,x:e.x,y:e.y}}))),style:{data:{fill:t.color,fillOpacity:.2,stroke:t.color,strokeWidth:2}}})})),n.createElement(g.a,{orientation:"horizontal",itemsPerRow:6,name:"legend",data:this.props.series.map((function(t,a){var n,r=(n=t).color?{name:n.name,symbol:{fill:n.color}}:{name:n.name};return e.state.hiddenSeries.has(a)?Object(o.a)({},r,{symbol:{fill:"#999"}}):r})),height:10,style:{labels:{fontSize:8}}})))}}]),a}(n.Component),w=a(121),x=a.n(w),O=a(122),S=a.n(O),D=a(170),j={getSpencersCreek:function(){var e=Object(D.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ski-be-hgfltltt5a-de.a.run.app/","/api/spencersCreek/a"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},C=a(171);function Y(){var e=Object(C.a)(["\n    display: flex;\n    flex-direction: row;\n    padding: 10px;\n    flex-wrap: wrap;\n    justify-content: space-between;\n"]);return Y=function(){return e},e}var M=a(172).a.div(Y()),J=a(337),W=a(327),A=a(338),N=a(329),z=a(326),F=function(){return r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},r.a.createElement("h3",null,"Loading..."),r.a.createElement(z.a,{style:{margin:"0 auto"}}))},K=function(){return r.a.createElement("div",{style:{color:"red"}},r.a.createElement("h3",null,"Oops, something went wrong! Please try refreshing the page."))},L=["#556b2f","#2f4f4f","#dcdcdc","#d2691e","#4682b4","#3cb371","#808000","#708090","#006400","#191970","#7f0000","#ffb6c1","#ff69b4","#7fffd4","#ff1493","#87ceeb","#90ee90","#dda0dd","#fa8072","#f0e68c","#db7093","#1e90ff","#ff00ff","#da70d6","#ff6347","#adff2f","#a020f0","#0000ff","#9370db","#f4a460","#00bfff","#00ffff","#dc143c","#00ff7f","#00ff00","#deb887","#0000cd","#ffff00","#ffd700","#ff8c00","#ff4500","#9932cc","#8b008b","#8fbc8f","#daa520","#32cd32","#00008b","#20b2aa","#9acd32"];var B=[{x:1,y:0},{x:365,y:0}],H=function(){var e=r.a.useState(void 0),t=Object(s.a)(e,2),a=t[0],l=t[1],c=r.a.useState(!1),f=Object(s.a)(c,2),u=f[0],d=f[1],m=r.a.useState({2015:!0,2016:!0,2017:!0,2018:!0,2019:!0,2020:!0}),b=Object(s.a)(m,2),h=b[0],y=b[1],p=function(e){var t=e.target,a=t.name,n=t.checked,r=Object(o.a)({},h);r[a]=n,y(r)};return Object(n.useEffect)((function(){j.getSpencersCreek().then((function(e){var t=e.map((function(e,t){var a=e.year,n=e.data;return{name:a,color:L[t],datapoints:B.concat(n.map((function(e){var t=e.date,a=e.snow;return{x:G(t),y:a}})))}}));l(t)}),(function(){return d(!0)}))}),[]),r.a.createElement(M,null,r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement("h1",null,"Spencers Creek Snowfall"),u&&r.a.createElement(K,null),a?r.a.createElement(E,{series:a.filter((function(e){var t,a=e.name;return t=a,console.error({year:t,show:h[t]}),h[t]}))}):r.a.createElement(F,null)),a&&r.a.createElement("div",{style:{minWidth:"300px"}},r.a.createElement(J.a,null,"Years"),r.a.createElement(W.a,{label:"Years",style:{display:"flex",flexFlow:"column wrap",maxHeight:"680px",overflow:"auto",alignContent:"flex-start",width:"300px"}},Object(i.a)(a).reverse().map((function(e){var t=e.name;return r.a.createElement(P,{year:t,selectedYears:h,handleCheckboxChange:p})})))))},P=function(e){var t=e.selectedYears,a=e.handleCheckboxChange,n=e.year;return r.a.createElement(A.a,{control:r.a.createElement(N.a,{checked:t[n],onChange:a,name:n,style:{color:"black"}}),label:n})};function G(e){var t=x()(e,"YYYY-MM-DD"),a=t.year(),n=x()(a+"-01-01","YYYY-MM-DD");return t.diff(n,"days")}var I=function(){return r.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.298685c9.chunk.js.map