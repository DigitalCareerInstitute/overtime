(this.webpackJsonpovertime=this.webpackJsonpovertime||[]).push([[0],{116:function(e,t,n){e.exports=n(132)},122:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),s=n.n(o),i=(n(121),n(122),n(20)),c=n(23),l=n(17),u=n(26),m=n(27),d=n(28),h=n(32),f=n(135),g=n(173),v=n(136),p=n(105),w=n(51),E=n(106),b=n(70),y=n(71),k=n(18),S=n.n(k),C=window.localStorage,P=function(e,t){if("Total"===t)return!0;var n=S()(e[0]),a=t.toLowerCase(),r=S()().startOf(a).valueOf(),o=S()().endOf(a).valueOf();return n.isBetween(r,o)},O=function(e){return new Date(e).toLocaleDateString("de-DE")},H=function(e){return S()(e).to(S()(0),!0)},W=function(e){return S()(e).format("HH:MM")},A=function(e,t){return"".concat(e.replace(/[^a-zA-Z]+/g,"_"),"_").concat(t.toLowerCase(),".csv")},M=function(e){window.confirm("ARE YOU REALLY SURE?")&&C.removeItem("overtime")},T=n(16),N=n(134),j=n(133),I=n(181),U=n(77),x=n.n(U),R=n(95),D=n.n(R);function B(e){var t=e.preset,n=e.addPreset,a=e.delPresetId,o=r.a.useState(""),s=Object(T.a)(o,2),i=s[0],c=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{label:"Add Preset",name:"addComment",value:i,onChange:function(e){return c(e.target.value)},variant:"outlined",fullWidth:!0,InputProps:{endAdornment:r.a.createElement(N.a,{position:"end"},r.a.createElement(p.a,{"aria-label":"add preset",onClick:function(e){return n(i)},edge:"end"},r.a.createElement(x.a,null)))},labelWidth:70}),t.map((function(e,t){return r.a.createElement(f.a,{key:t,variant:"danger",className:"preset",onClick:a(t)},e)})))}var L=Object(h.a)((function(e){return{input:{flexGrow:1,padding:e.spacing(1)},paper:{display:"flex",margin:e.spacing(1),padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}}));function Y(e){var t=e.active,n=e.comment,a=e.setComment,o=e.swapComment,s=e.preset,i=(e.setPreset,e.addPreset),c=(e.delPreset,e.doDeletePreset,L());return t?r.a.createElement(j.a,{className:c.paper},r.a.createElement(I.a,{freeSolo:!0,className:c.input,id:"comment",options:s,value:n,onChange:function(e,t){return a(t)},renderInput:function(e){return r.a.createElement(E.a,Object.assign({onChange:function(e){return a(e.target.value)}},e))}}),r.a.createElement(p.a,{variant:"contained","aria-label":"add preset",onClick:function(e){return i(n)}},r.a.createElement(x.a,null)),r.a.createElement(p.a,{variant:"contained","aria-label":"add preset",onClick:o},r.a.createElement(D.a,null))):null}var G=n(96),F=n.n(G),J=Object(h.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},paper:{"& > *":{margin:e.spacing(1)},flexGrow:1,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function _(e){var t=e.show,n=(e.setShow,e.preset),a=e.addPreset,o=e.delPresetId,s=(e.delPreset,e.user),i=e.changeUser,c=e.weeklyHours,l=e.changeWeeklyHours,u=e.mailToAddress,m=e.setMailToAddress,d=e.setState,h=J();return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(p.a,{edge:"start",className:h.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){return d({showSettings:!1})}},r.a.createElement(F.a,null)),r.a.createElement(w.a,{variant:"h6",className:h.title},"Settings"),r.a.createElement(f.a,{color:"secondary",variant:"contained",className:"pull-right",onClick:M},r.a.createElement(b.a,{icon:y.b}),"\xa0Delete Everything\xa0",r.a.createElement(b.a,{icon:y.b})))),r.a.createElement("form",{className:h.paper,noValidate:!0,autoComplete:"off"},r.a.createElement(E.a,{fullWidth:!0,variant:"outlined",label:"User",name:"user",value:s,onChange:i}),r.a.createElement(E.a,{fullWidth:!0,variant:"outlined",label:"eMail Target",name:"mailToAddress",value:u,onChange:m}),r.a.createElement(E.a,{fullWidth:!0,variant:"outlined",label:"Weekly Hours",name:"weeklyHours",value:c,onChange:l}),r.a.createElement(B,{preset:n,addPreset:a,delPresetId:o}))):null}var z=n(174),V=n(175),Z=n(176),$=n(69),q=n.n($),K=n(184),Q=n(178),X=Object(h.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})),ee=function(e){var t=e.list,n=e.preset,a=e.mode,o=e.deleteRecord,s=(e.changeComment,e.editRecord),i=X();return r.a.createElement(z.a,{className:i.root},r.a.createElement("tbody",null," ",t.filter((function(e){return P(e,a)})).map((function(e,t){var a=Object(T.a)(e,3),c=a[0],l=a[1],u=a[2],m=S()(l).utcOffset(0);return r.a.createElement(V.a,{key:t},r.a.createElement(Z.a,null,r.a.createElement(K.a,{className:"list-date",format:"DD.MM.YYYY HH:mm",value:c,ampm:!1,onChange:function(e){return s(t,[e.valueOf(),l,u])}}),r.a.createElement(Q.a,{format:"HH:mm",className:"list-time",value:m,ampm:!1,onChange:function(e){return s(t,[c,e.valueOf(),u])}})),r.a.createElement(Z.a,{style:{flexGrow:"1"}},r.a.createElement(I.a,{freeSolo:!0,className:i.input,id:"comment",options:n,value:u,onChange:function(e,n){return s(t,[c,l,n])},renderInput:function(e){return r.a.createElement(E.a,Object.assign({onChange:function(e){return s(t,[c,l,e])}},e))}})),r.a.createElement(Z.a,null,r.a.createElement(p.a,{onClick:o(t)},r.a.createElement(q.a,null))))}))))},te=n(182),ne=n(177);function ae(e){var t=e.changeMode,n=e.mode;return r.a.createElement(te.a,{variant:"fullWidth",value:n,"aria-label":"select date range"},["Total","Day","Month","Year"].map((function(e){return r.a.createElement(ne.a,{key:e,onClick:t(e),label:e,value:e})})))}var re=n(97),oe=n.n(re),se=n(100),ie=n.n(se),ce=n(99),le=n.n(ce),ue=n(98),me=n.n(ue),de=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function he(e){var t=e.setState,n=(e.changeUser,e.changeWeeklyHours,e.changeMode,e.showSettings,e.user),a=e.mode,o=(e.weeklyHours,e.total),s=e.list,i=e.active,c=e.mailToAddress,l=e.toggle,u=e.start,m=de(),d=r.a.useMemo((function(){return"data:text/csv;base64,".concat(btoa(s.filter((function(e){return P(e,a)})).reduce((function(e,t){return e+"".concat(O(t[0]),",").concat(W(t[1]),",").concat(t[2],"\n")}),"")))}),[a,s]),h=r.a.useMemo((function(){return"mailto:?to=".concat(c)+"&subject=".concat(encodeURIComponent("Overtime ".concat(n)))+"&body=".concat(encodeURIComponent("Hi,\nthis is my overtime report as tab separated values,\nyou can copy paste them directly into excel or google docs,\n\nBest regards,\n"+"".concat(n,"\n\n")+"------------------------------------------------\n"+s.filter((function(e){return P(e,a)})).reduce((function(e,t){return e+"".concat(O(t[0]),"\t").concat(W(t[1]),"\t").concat(t[2],"\n")}),"")+"------------------------------------------------\n"))}),[a,s,n,c]);return r.a.createElement(g.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(p.a,{edge:"start",className:m.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){return t({showSettings:!0})}},r.a.createElement(oe.a,null)),r.a.createElement(w.a,{variant:"h6",className:m.title},i?"".concat(function(e){return S()(e).toNow(!0)}(u)," / ").concat(H(o)," "):H(o)),r.a.createElement(p.a,{className:m.menuButton,color:"inherit","aria-label":"mail",onClick:l},i?r.a.createElement(q.a,null):r.a.createElement(me.a,null)),r.a.createElement(p.a,{className:m.menuButton,href:h,color:"inherit","aria-label":"mail"},r.a.createElement(le.a,null)),r.a.createElement(p.a,{className:m.menuButton,download:A(n,a),href:d,color:"inherit","aria-label":"csv"},r.a.createElement(ie.a,null))))}var fe={list:[],preset:["Work","Prep","Meet"],weeklyHours:32,user:"teacher",delPreset:!1,mode:"Total",showSettings:!1,active:!1,start:null,comment:"",mailToAddress:"boss@digitalcareerinstitute.org"},ge=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).push=function(e){return n.setState({list:[e].concat(n.state.list)})},n.delete=function(e){return function(t){n.setState({list:Object(i.a)(n.state.list.filter((function(t,n){return n!==e})))})}},n.changeWeeklyHours=function(e){return n.setState({weeklyHours:parseFloat(e.target.value)})},n.changeMode=function(e){return function(t){return n.setState({mode:e})}},n.changeUser=function(e){return n.setState({user:e.target.value})},n.setComment=function(e){return n.setState({comment:e})},n.changeComment=function(e){return function(t){var a=n.state.list;a[e][2]=t.target.value,n.setState({list:a})}},n.editRecord=function(e,t){var a=n.state.list;a[e]=t,n.setState({list:a})},n.swapComment=function(e){n.state.active&&(n.deactivate(),n.setState(n.activate()))},n.toggle=function(e){return n.setState(n.state.active?n.deactivate():n.activate())},n.setTimer=function(e){return n.timer=setInterval((function(e){n.forceUpdate()}),1e3)},n.activate=function(e){return n.setTimer(),{active:!0,start:Date.now()}},n.deactivate=function(e){clearInterval(n.timer);var t=Date.now()-n.state.start;return n.push([Date.now(),t,n.state.comment]),{active:!1,start:Date.now(),comment:""}},n.change=function(e){return n.setState({comment:e.target.value})},n.addPreset=function(e){return n.setState({preset:[e].concat(n.state.preset)})},n.delPreset=function(e){return n.setState({delPreset:!n.state.delPreset})},n.delPresetId=function(e){return function(t){console.log(e),n.setState({delPreset:!1,preset:n.state.preset.filter((function(t,n){return n!==e}))})}},n.setMailToAddress=function(e){return n.setState({mailToAddress:e.target.value})},n.setPreset=function(e){return function(t){return n.state.delPreset?n.delPresetId(n.state.preset.indexOf(e))(t):n.setState({comment:e})}},n.state=function(e){return JSON.parse(C.getItem("overtime")||"null")||e}(fe),n.state.active&&n.setTimer(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e;e=this.state,C.setItem("overtime",JSON.stringify(e))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,n=t.showSettings,a=t.mode,o=t.list,s=t.start,i=t.active,c=t.preset,l=t.user,u=t.weeklyHours,m=t.comment,d=t.mailToAddress,h=o.reduce((function(e,t){return P(t,a)?e+=t[1]:e}),0);return n?r.a.createElement(_,{setState:this.setState.bind(this),show:n,setShow:function(t){return e.setState({showSettings:t})},user:l,changeUser:this.changeUser,weeklyHours:u,changeWeeklyHours:this.changeWeeklyHours,preset:c,addPreset:this.addPreset,delPreset:this.delPreset,delPresetId:this.delPresetId,mailToAddress:d,setMailToAddress:this.setMailToAddress}):r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{list:o,total:h,toggle:this.toggle,start:s,active:i,user:l,changeUser:this.changeUser,mode:a,changeMode:this.changeMode,weeklyHours:u,changeWeeklyHours:this.changeWeeklyHours,setState:this.setState.bind(this),showSettings:this.showSettings,mailToAddress:d}),r.a.createElement(Y,{active:i,swapComment:this.swapComment,comment:m,setComment:this.setComment,preset:c,addPreset:this.addPreset,setPreset:this.setPreset,delPreset:this.delPreset,doDeletePreset:this.state.delPreset}),r.a.createElement(ae,{list:o,total:h,user:l,changeUser:this.changeUser,mode:a,changeMode:this.changeMode,weeklyHours:u,changeWeeklyHours:this.changeWeeklyHours,setState:this.setState.bind(this),showSettings:this.showSettings}),r.a.createElement(ee,Object.assign({list:o,mode:a,preset:c},{changeComment:this.changeComment,deleteRecord:this.delete,editRecord:this.editRecord})))}}]),t}(r.a.Component),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var we=n(102),Ee=n(179),be=n(14),ye=n(101),ke=n(180);n(131);S.a.locale("de",{relativeTime:{future:"%s",past:"%s",s:">1m",m:"1m",mm:"%dm",h:"1h",hh:"%dh",d:"1d",dd:"%dd jours",M:"1m",MM:"%dm",y:"1y",yy:"%dy"}});var Se=Object(we.a)({palette:{type:"dark"}});s.a.render(r.a.createElement(be.a,{libInstance:S.a,utils:ye.a,locale:"de"},r.a.createElement(Ee.a,{theme:Se},r.a.createElement(ke.a,null),r.a.createElement(ge,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/overtime",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/overtime","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pe(t,e)}))}}()}},[[116,1,2]]]);
//# sourceMappingURL=main.9ca01044.chunk.js.map