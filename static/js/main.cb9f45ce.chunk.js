(this.webpackJsonpovertime=this.webpackJsonpovertime||[]).push([[0],{122:function(e,t,n){e.exports=n(135)},131:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var a=n(12),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var c=n(0),l=n.n(c),i=n(15),u=n.n(i),s=n(19),m=(n(131),n(22)),d=n(16),f=n(28),g=n(29),p=n(30),v=n(35),b=n(176),h=n(139),k=n(110),E=n(54),O=n(138),w=n(111),y=n(177),C=n(188),j=n(17),B=n.n(j),S=window.localStorage,W=function(e,t){if("Total"===t)return!0;var n=B()(e[0]),a=t.toLowerCase(),r=B()().startOf(a).valueOf(),o=B()().endOf(a).valueOf();return n.isBetween(r,o)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!!t||("break"!==e[2].toLowerCase()||!!(n&&e[1]<9e5))},T=function(e){return new Date(e).toLocaleDateString("de-DE")},N=function(e){return B()(e).to(B()(0),!0)},R=function(e){return B()(e).utcOffset(0).format("HH:mm")},x=function(e,t){return"".concat(e.replace(/[^a-zA-Z]+/g,"_"),"_").concat(t.toLowerCase(),".csv")},A=function(e){window.confirm("ARE YOU REALLY SURE?")&&S.removeItem("overtime")},P=n(137),H=n(77),I=n.n(H),U=n(26),D=n(20),L=n(71),Y={list:[],preset:["Work","Prep","Meet"],workHours:32,user:"teacher",mode:"Total",showSettings:!1,active:!1,start:null,comment:"",mailToAddress:"boss@digitalcareerinstitute.org",countBreaks:!1,countBreaksUnder15Minutes:!1},G=window.localStorage,F=function(e){return G.setItem("overtime",JSON.stringify(e))},J=JSON.parse(G.getItem("overtime")||"false")||Y,_=null,z=function(e){return{setTimerComponent:function(t){e({type:"setTimerComponent",value:t})},addRecord:function(t){e({type:"addRecord",value:t})},delRecord:function(t){e({type:"delRecord",index:t})},editRecord:function(t,n){e({type:"editRecord",value:n,index:t})},setWorkHours:function(t){e({type:"setWorkHours",value:t})},setMode:function(t){e({type:"setMode",value:t})},setPreset:function(t){e({type:"setPreset",value:t})},setUser:function(t){e({type:"setUser",value:t})},setMailToAddress:function(t){e({type:"setMailToAddress",value:t})},setComment:function(t){e({type:"setComment",value:t})},addPreset:function(t){e({type:"addPreset",value:t})},delPresetId:function(t){e({type:"delPresetId",index:t})},swapComment:function(){e({type:"swapComment"})},toggle:function(){e({type:"toggle"})},clearTimer:function(){e({type:"clearTimer"})},toggleSettings:function(){e({type:"toggleSettings"})},toggleCountBreaks:function(){e({type:"toggleCountBreaks"})},toggleShortBreaks:function(){e({type:"toggleShortBreaks"})},insertWorkday:function(){e({type:"insertWorkday"})}}},V=function(e){return e},Z=Object(L.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.index,r=t.value,o=e,c=o.list,l=o.active,i=function(){return{active:!0,start:Date.now(),timer:s(_)}},u=function(){var t=e,n=t.start,a=t.comment,r=t.timer,o=Date.now()-n;return clearInterval(r),{active:!1,start:Date.now(),comment:"",list:[[n,o,a]].concat(c)}},s=function(e){return setInterval((function(t){e.forceUpdate()}),1e3)};switch(n){case"setTimerComponent":_=r;break;case"insertWorkday":e=Object(D.a)({},e,{list:[[B()().startOf("day").valueOf(),1e3*-e.workHours*60*60,"Workday"]].concat(c)});break;case"addRecord":e=Object(D.a)({},e,{list:[r].concat(c)});break;case"delRecord":e=Object(D.a)({},e,{list:Object(U.a)(c.filter((function(e,t){return t!==a})))});break;case"editRecord":c[a]=r,e=Object(D.a)({},e,{list:c.slice()});break;case"setWorkHours":e=Object(D.a)({},e,{workHours:parseFloat(r)});break;case"setMode":e=Object(D.a)({},e,{mode:r});break;case"setPreset":e=Object(D.a)({},e,{comment:r});break;case"setUser":e=Object(D.a)({},e,{user:r});break;case"setMailToAddress":e=Object(D.a)({},e,{mailToAddress:r});break;case"setComment":e=Object(D.a)({},e,{comment:r});break;case"swapComment":if(!l)return e;e=Object(D.a)({},e,{},u(),{},i());break;case"toggle":e=Object(D.a)({},e,{},l?u():i());break;case"addPreset":e=Object(D.a)({},e,{preset:[r].concat(e.preset)});break;case"delPresetId":e=Object(D.a)({},e,{delPreset:!1,preset:e.preset.filter((function(e,t){return t!==a}))});break;case"toggleSettings":e=Object(D.a)({},e,{showSettings:!e.showSettings});break;case"toggleCountBreaks":e=Object(D.a)({},e,{countBreaks:!e.countBreaks});break;case"toggleShortBreaks":e=Object(D.a)({},e,{countShortBreaks:!e.countShortBreaks});break;case"clearTimer":clearInterval(e.timer)}return e.list=e.list.sort((function(e,t){return t[0]-e[0]})),F(e),e})),$=Object(s.b)(V,z)((function(e){var t=e.preset,n=e.addPreset,r=e.delPresetId,o=l.a.useState(""),c=Object(a.a)(o,2),i=c[0],u=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{label:"Add Preset",name:"addComment",value:i,onChange:function(e){return u(e.target.value)},variant:"outlined",fullWidth:!0,InputProps:{endAdornment:l.a.createElement(P.a,{position:"end"},l.a.createElement(k.a,{"aria-label":"add preset",onClick:function(e){n(i),u("")}},l.a.createElement(I.a,null)))}}),t.map((function(e,t){return l.a.createElement(O.a,{key:t,variant:"contained",className:"preset",color:"secondary",onClick:function(e){return r(t)}},e)})))})),q=n(98),K=n.n(q),Q=n(86),X=n.n(Q),ee=Object(v.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},paper:{"& > *":{marginBottom:e.spacing(2)},"& > button":{margin:e.spacing(1)},flexGrow:1,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),te=Object(s.b)(V,z)((function(e){var t=e.toggleSettings,n=e.user,a=e.setUser,r=e.workHours,o=e.setWorkHours,c=e.mailToAddress,i=e.setMailToAddress,u=e.countBreaks,s=e.toggleCountBreaks,m=e.countShortBreaks,d=e.toggleShortBreaks,f=ee();return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{position:"static"},l.a.createElement(h.a,null,l.a.createElement(k.a,{edge:"start",className:f.menuButton,color:"inherit","aria-label":"menu",onClick:t},l.a.createElement(K.a,null)),l.a.createElement(E.a,{variant:"h6",className:f.title},"Settings"),l.a.createElement(O.a,{color:"secondary",variant:"contained",onClick:A},l.a.createElement(X.a,null)," Delete Everything ",l.a.createElement(X.a,null)))),l.a.createElement("form",{className:f.paper,noValidate:!0,autoComplete:"off"},l.a.createElement(w.a,{fullWidth:!0,variant:"outlined",label:"User",name:"user",value:n,onChange:function(e){return a(e.target.value)}}),l.a.createElement(w.a,{fullWidth:!0,variant:"outlined",label:"eMail Target",name:"mailToAddress",value:c,onChange:function(e){return i(e.target.value)}}),l.a.createElement(w.a,{fullWidth:!0,variant:"outlined",label:"Work Hours",name:"workHours",value:r,onChange:function(e){return o(e.target.value)}}),l.a.createElement(y.a,{control:l.a.createElement(C.a,{checked:u,onChange:s,value:"countBreaks"}),label:"Count Breaks"}),l.a.createElement(y.a,{control:l.a.createElement(C.a,{checked:m,onChange:d,value:"countShortBreaks"}),label:"Count Breaks Under 15 Minutes"}),l.a.createElement($,null)))})),ne=n(136),ae=n(186),re=n(100),oe=n.n(re),ce=Object(v.a)((function(e){return{input:{flexGrow:1,padding:e.spacing(1)},paper:{display:"flex",margin:e.spacing(1),padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}})),le=Object(s.b)(V,z)((function(e){var t=e.active,n=e.comment,a=e.setComment,r=e.swapComment,o=e.preset,c=(e.setPreset,e.addPreset),i=(e.delPreset,e.doDeletePreset,ce());return t?l.a.createElement(ne.a,{className:i.paper},l.a.createElement(ae.a,{freeSolo:!0,className:i.input,id:"comment",options:o,value:n,onChange:function(e,t){return a(t)},renderInput:function(e){return l.a.createElement(w.a,Object.assign({onChange:function(e){return a(e.target.value)}},e))}}),l.a.createElement(k.a,{variant:"contained","aria-label":"add preset",onClick:function(e){return c(n)}},l.a.createElement(I.a,null)),l.a.createElement(k.a,{variant:"contained","aria-label":"add preset",onClick:function(e){return r()}},l.a.createElement(oe.a,null))):null})),ie=n(178),ue=n(179),se=n(180),me=n(65),de=n.n(me),fe=n(181),ge=n(190),pe=n(183),ve=Object(v.a)((function(e){return{root:{"& b":{margin:e.spacing(1),display:"inline-block"},"& td:last-of-type":{paddingLeft:0},"& td:nth-of-type(2)":{paddingLeft:0},width:"100%",backgroundColor:e.palette.background.paper}}})),be=Object(s.b)(V,z)((function(e){var t=e.list,n=e.preset,r=e.mode,o=e.delRecord,c=e.editRecord,i=e.workHours,u=ve();return l.a.createElement(ie.a,{className:u.root},l.a.createElement("tbody",null,t.filter((function(e){return W(e,r)})).map((function(e,t){var r=Object(a.a)(e,3),s=r[0],m=r[1],d=r[2],f=B()(m).utcOffset(0);return"Workday"===d?l.a.createElement(ue.a,{className:"workday",key:t},l.a.createElement(se.a,{colSpan:2},l.a.createElement(fe.a,{className:"list-date day",format:"DD.MM.",value:s,ampm:!1,onChange:function(e){return c(t,[e.valueOf(),m,d])}}),l.a.createElement("b",null,B()(s).format("dddd")," / ",i,"h")),l.a.createElement(se.a,null,l.a.createElement(k.a,{onClick:function(e){return o(t)}},l.a.createElement(de.a,null)))):l.a.createElement(ue.a,{key:t},l.a.createElement(se.a,null,l.a.createElement(ge.a,{className:"list-date",format:"DD.MM.YYYY HH:mm",value:s,ampm:!1,onChange:function(e){return c(t,[e.valueOf(),m,d])}}),l.a.createElement(pe.a,{format:"HH:mm",className:"list-time",value:f,ampm:!1,onChange:function(e){return c(t,[s,e.valueOf(),d])}})),l.a.createElement(se.a,{style:{flexGrow:"1"}},l.a.createElement(ae.a,{freeSolo:!0,className:u.input,id:"comment",options:n,value:d,onChange:function(e,n){return c(t,[s,m,n])},renderInput:function(e){return l.a.createElement(w.a,Object.assign({onChange:function(e){return c(t,[s,m,e.target.value])}},e))}})),l.a.createElement(se.a,null,l.a.createElement(k.a,{onClick:function(e){return o(t)}},l.a.createElement(de.a,null))))}))))})),he=n(187),ke=n(182),Ee=Object(s.b)(V,z)((function(e){var t=e.setMode,n=e.mode;return l.a.createElement(he.a,{variant:"fullWidth",value:n,"aria-label":"select date range"},["Total","Day","Month","Year"].map((function(e){return l.a.createElement(ke.a,{key:e,onClick:function(n){return t(e)},label:e,value:e})})))})),Oe=n(38),we=n(5),ye=n(103),Ce=n.n(ye),je=n(104),Be=n.n(je),Se=n(105),We=n.n(Se),Me=n(102),Te=n.n(Me),Ne=n(101),Re=n.n(Ne);var xe=Object(v.a)((function(e){return{menuButton:{marginRight:e.spacing(2)}}})),Ae=Object(s.b)(V,z)((function(e){var t=e.mode,n=e.list,r=e.user,o=e.mailToAddress,c=e.countBreaks,i=e.countShortBreaks,u=xe(),s=l.a.useMemo((function(){return function(e){var t=Object(a.a)(e,4),n=t[0],r=t[1],o=t[2],c=t[3],l=Math.max(0,r.filter((function(e){return M(e,o,c)})).filter((function(e){return W(e,n)})).reduce((function(e,t){return e+t[1]}),0));return"data:text/csv;base64,".concat(btoa(r.sort((function(e,t){return t[0]-e[0]})).filter((function(e){return M(e,o,c)})).filter((function(e){return W(e,n)})).reduce((function(e,t){var n=[T(t[0]),R(t[1]),t[2]],a=n[1],r=n[2];return e+"".concat(n[0],",").concat(a,",").concat(r,"\n")}),"")+"total,".concat(R(l))))}([t,n,c,i])}),[t,n,c,i]),m=l.a.useMemo((function(){return function(e){var t=Object(a.a)(e,6),n=t[0],r=t[1],o=t[2],c=t[3],l=t[4],i=t[5],u=Math.max(0,r.filter((function(e){return M(e,l,i)})).filter((function(e){return W(e,n)})).reduce((function(e,t){return e+t[1]}),0));return"mailto:?to=".concat(c)+"&subject=".concat(encodeURIComponent("Overtime ".concat(o)))+"&body=".concat(encodeURIComponent("Hi,\nthis is my overtime report,\n\nBest regards,\n"+"".concat(o,"\n\n")+"------------------------------------------------\n"+r.sort((function(e,t){return t[0]-e[0]})).filter((function(e){return M(e,l,i)})).filter((function(e){return W(e,n)})).reduce((function(e,t){return e+"".concat(T(t[0]),"\t").concat(R(t[1]),"\t").concat(t[2],"\n")}),"")+"------------------------------------------------\n"+"Total: ".concat(R(u)," hours\n")+"------------------------------------------------\n"))}([t,n,r,o,c,i])}),[t,n,r,o,c,i]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{className:u.menuButton,href:m,color:"inherit","aria-label":"mail"},l.a.createElement(Re.a,null)),l.a.createElement(k.a,{className:u.menuButton,download:x(r,t),href:s,color:"inherit","aria-label":"csv"},l.a.createElement(Te.a,null)))})),Pe=Object(we.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}))(Object(s.b)(V,z)(function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(f.a)(this,Object(g.a)(t).call(this,e)),e.setTimerComponent(Object(Oe.a)(n)),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,n=e.active,a=e.toggle,r=e.start,o=e.classes,c=e.toggleSettings,i=e.insertWorkday;return l.a.createElement(b.a,{position:"static"},l.a.createElement(h.a,null,l.a.createElement(k.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"menu",onClick:c},l.a.createElement(Ce.a,null)),l.a.createElement(E.a,{variant:"h6",className:o.title},n?"".concat(function(e){return B()(e).toNow(!0)}(r)," / ").concat(N(t)," "):N(t)),l.a.createElement(k.a,{className:o.menuButton,color:"inherit","aria-label":"mail",onClick:function(e){return a()}},n?l.a.createElement(de.a,null):l.a.createElement(Be.a,null)),l.a.createElement(k.a,{className:o.menuButton,color:"inherit","aria-label":"workday",onClick:function(e){return i()}},l.a.createElement(We.a,null)),l.a.createElement(Ae,null)))}}]),t}(l.a.Component))),He=Object(s.b)(V,z)(function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(f.a)(this,Object(g.a)(t).call(this,e)),console.log("init"),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){this.props.clearTimer()}},{key:"render",value:function(){var e=this.props,t=e.showSettings,n=e.mode,a=e.list,r=e.countBreaks,o=e.countShortBreaks,c=Math.max(0,a.filter((function(e){return M(e,r,o)})).filter((function(e){return W(e,n)})).reduce((function(e,t){return W(t,n)?e+t[1]:e}),0));return t?l.a.createElement(te,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(Pe,{total:c}),l.a.createElement(le,null),l.a.createElement(Ee,null),l.a.createElement(be,null))}}]),t}(l.a.Component)),Ie=n(107),Ue=n(184),De=n(185),Le=n(13),Ye=n(106);n(134);B.a.updateLocale("de",{relativeTime:{future:"%s",past:"%s",s:">1m",m:"1m",mm:"%dm",h:"1h",hh:"%dh",d:"1d",dd:"%dd",M:"1m",MM:"%dm",y:"1y",yy:"%dy"}});var Ge=Object(Ie.a)({palette:{type:"dark"}}),Fe=Object(Ie.a)({palette:{type:"light"}});u.a.render(l.a.createElement(s.a,{store:Z},l.a.createElement(Le.a,{libInstance:B.a,utils:Ye.a,locale:"de"},l.a.createElement((function(e){var t=e.children,n=l.a.useState(!1),r=Object(a.a)(n,2),o=r[0],c=r[1];return window.setLight=c,l.a.createElement(Ue.a,{theme:o?Fe:Ge},t)}),null,l.a.createElement(De.a,null),l.a.createElement(He,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/overtime",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/overtime","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}()}},[[122,1,2]]]);
//# sourceMappingURL=main.cb9f45ce.chunk.js.map