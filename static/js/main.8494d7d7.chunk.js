(this.webpackJsonpovertime=this.webpackJsonpovertime||[]).push([[0],{117:function(e,t,n){e.exports=n(133)},123:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(0),o=n.n(r),s=n(14),i=n.n(s),c=(n(122),n(123),n(20)),l=n(23),u=n(17),m=n(27),d=n(28),f=n(29),h=n(33),g=n(136),v=n(174),p=n(137),w=n(106),E=n(51),b=n(107),y=(n(91),n(96),n(18)),S=n.n(y),k=window.localStorage,C=function(e,t){if("Total"===t)return!0;var n=S()(e[0]),a=t.toLowerCase(),r=S()().startOf(a).valueOf(),o=S()().endOf(a).valueOf();return n.isBetween(r,o)},P=function(e){return new Date(e).toLocaleDateString("de-DE")},O=function(e){return S()(e).to(S()(0),!0)},H=function(e){return S()(e).utcOffset(0).format("HH:mm")},W=function(e,t){return"".concat(e.replace(/[^a-zA-Z]+/g,"_"),"_").concat(t.toLowerCase(),".csv")},j=function(e){window.confirm("ARE YOU REALLY SURE?")&&k.removeItem("overtime")},A=n(135),T=n(134),M=n(182),I=n(75),N=n.n(I),U=n(95),x=n.n(U);function R(e){var t=e.preset,n=e.addPreset,r=e.delPresetId,s=o.a.useState(""),i=Object(a.a)(s,2),c=i[0],l=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{label:"Add Preset",name:"addComment",value:c,onChange:function(e){return l(e.target.value)},variant:"outlined",fullWidth:!0,InputProps:{endAdornment:o.a.createElement(A.a,{position:"end"},o.a.createElement(w.a,{"aria-label":"add preset",onClick:function(e){return n(c)},edge:"end"},o.a.createElement(N.a,null)))},labelWidth:70}),t.map((function(e,t){return o.a.createElement(g.a,{key:t,variant:"contained",className:"preset",color:"secondary",onClick:r(t)},e)})))}var D=Object(h.a)((function(e){return{input:{flexGrow:1,padding:e.spacing(1)},paper:{display:"flex",margin:e.spacing(1),padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}}));function B(e){var t=e.active,n=e.comment,a=e.setComment,r=e.swapComment,s=e.preset,i=(e.setPreset,e.addPreset),c=(e.delPreset,e.doDeletePreset,D());return t?o.a.createElement(T.a,{className:c.paper},o.a.createElement(M.a,{freeSolo:!0,className:c.input,id:"comment",options:s,value:n,onChange:function(e,t){return a(t)},renderInput:function(e){return o.a.createElement(b.a,Object.assign({onChange:function(e){return a(e.target.value)}},e))}}),o.a.createElement(w.a,{variant:"contained","aria-label":"add preset",onClick:function(e){return i(n)}},o.a.createElement(N.a,null)),o.a.createElement(w.a,{variant:"contained","aria-label":"add preset",onClick:r},o.a.createElement(x.a,null))):null}var L=n(97),Y=n.n(L),G=n(76),F=n.n(G),J=Object(h.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},paper:{"& > *":{margin:e.spacing(1)},flexGrow:1,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function _(e){var t=e.show,n=(e.setShow,e.preset),a=e.addPreset,r=e.delPresetId,s=(e.delPreset,e.user),i=e.changeUser,c=e.weeklyHours,l=e.changeWeeklyHours,u=e.mailToAddress,m=e.setMailToAddress,d=e.setState,f=J();return t?o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{position:"static"},o.a.createElement(p.a,null,o.a.createElement(w.a,{edge:"start",className:f.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){return d({showSettings:!1})}},o.a.createElement(Y.a,null)),o.a.createElement(E.a,{variant:"h6",className:f.title},"Settings"),o.a.createElement(g.a,{color:"secondary",variant:"contained",onClick:j},o.a.createElement(F.a,null)," Delete Everything ",o.a.createElement(F.a,null)))),o.a.createElement("form",{className:f.paper,noValidate:!0,autoComplete:"off"},o.a.createElement(b.a,{fullWidth:!0,variant:"outlined",label:"User",name:"user",value:s,onChange:i}),o.a.createElement(b.a,{fullWidth:!0,variant:"outlined",label:"eMail Target",name:"mailToAddress",value:u,onChange:m}),o.a.createElement(b.a,{fullWidth:!0,variant:"outlined",label:"Weekly Hours",name:"weeklyHours",value:c,onChange:l}),o.a.createElement(R,{preset:n,addPreset:a,delPresetId:r}))):null}var z=n(175),V=n(176),Z=n(177),$=n(69),q=n.n($),K=n(185),Q=n(179),X=Object(h.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})),ee=function(e){var t=e.list,n=e.preset,r=e.mode,s=e.deleteRecord,i=(e.changeComment,e.editRecord),c=X();return o.a.createElement(z.a,{className:c.root},o.a.createElement("tbody",null," ",t.filter((function(e){return C(e,r)})).map((function(e,t){var r=Object(a.a)(e,3),l=r[0],u=r[1],m=r[2],d=S()(u).utcOffset(0);return o.a.createElement(V.a,{key:t},o.a.createElement(Z.a,null,o.a.createElement(K.a,{className:"list-date",format:"DD.MM.YYYY HH:mm",value:l,ampm:!1,onChange:function(e){return i(t,[e.valueOf(),u,m])}}),o.a.createElement(Q.a,{format:"HH:mm",className:"list-time",value:d,ampm:!1,onChange:function(e){return i(t,[l,e.valueOf(),m])}})),o.a.createElement(Z.a,{style:{flexGrow:"1"}},o.a.createElement(M.a,{freeSolo:!0,className:c.input,id:"comment",options:n,value:m,onChange:function(e,n){return i(t,[l,u,n])},renderInput:function(e){return o.a.createElement(b.a,Object.assign({onChange:function(e){return i(t,[l,u,e])}},e))}})),o.a.createElement(Z.a,null,o.a.createElement(w.a,{onClick:s(t)},o.a.createElement(q.a,null))))}))))},te=n(183),ne=n(178);function ae(e){var t=e.changeMode,n=e.mode;return o.a.createElement(te.a,{variant:"fullWidth",value:n,"aria-label":"select date range"},["Total","Day","Month","Year"].map((function(e){return o.a.createElement(ne.a,{key:e,onClick:t(e),label:e,value:e})})))}var re=n(98),oe=n.n(re),se=n(101),ie=n.n(se),ce=n(100),le=n.n(ce),ue=n(99),me=n.n(ue);var de=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function fe(e){var t=e.setState,n=(e.changeUser,e.changeWeeklyHours,e.changeMode,e.showSettings,e.user),r=e.mode,s=(e.weeklyHours,e.total),i=e.list,c=e.active,l=e.mailToAddress,u=e.toggle,m=e.start,d=de(),f=[r,i,n,l],h=o.a.useMemo((function(){return function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return"data:text/csv;base64,".concat(btoa(r.filter((function(e){return C(e,n)})).reduce((function(e,t){var n=[P(t[0]),H(t[1]),t[2]],a=n[1],r=n[2];return e+"".concat(n[0],",").concat(a,",").concat(r,"\n")}),"")))}(f)}),f),g=o.a.useMemo((function(){return function(e){var t=Object(a.a)(e,4),n=t[0],r=t[1],o=t[2],s=t[3];return"mailto:?to=".concat(s)+"&subject=".concat(encodeURIComponent("Overtime ".concat(o)))+"&body=".concat(encodeURIComponent("Hi,\nthis is my overtime report as tab separated values,\nyou can copy paste them directly into excel or google docs,\n\nBest regards,\n"+"".concat(o,"\n\n")+"------------------------------------------------\n"+r.filter((function(e){return C(e,n)})).reduce((function(e,t){return e+"".concat(P(t[0]),"\t").concat(H(t[1]),"\t").concat(t[2],"\n")}),"")+"------------------------------------------------\n"))}(f)}),f);return o.a.createElement(v.a,{position:"static"},o.a.createElement(p.a,null,o.a.createElement(w.a,{edge:"start",className:d.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){return t({showSettings:!0})}},o.a.createElement(oe.a,null)),o.a.createElement(E.a,{variant:"h6",className:d.title},c?"".concat(function(e){return S()(e).toNow(!0)}(m)," / ").concat(O(s)," "):O(s)),o.a.createElement(w.a,{className:d.menuButton,color:"inherit","aria-label":"mail",onClick:u},c?o.a.createElement(q.a,null):o.a.createElement(me.a,null)),o.a.createElement(w.a,{className:d.menuButton,href:g,color:"inherit","aria-label":"mail"},o.a.createElement(le.a,null)),o.a.createElement(w.a,{className:d.menuButton,download:W(n,r),href:h,color:"inherit","aria-label":"csv"},o.a.createElement(ie.a,null))))}var he={list:[],preset:["Work","Prep","Meet"],weeklyHours:32,user:"teacher",mode:"Total",showSettings:!1,active:!1,start:null,comment:"",mailToAddress:"boss@digitalcareerinstitute.org"},ge=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).push=function(e){return n.setState({list:[e].concat(n.state.list)})},n.delete=function(e){return function(t){n.setState({list:Object(c.a)(n.state.list.filter((function(t,n){return n!==e})))})}},n.changeWeeklyHours=function(e){return n.setState({weeklyHours:parseFloat(e.target.value)})},n.changeMode=function(e){return function(t){return n.setState({mode:e})}},n.changeUser=function(e){return n.setState({user:e.target.value})},n.setComment=function(e){return n.setState({comment:e})},n.changeComment=function(e){return function(t){var a=n.state.list;a[e][2]=t.target.value,n.setState({list:a})}},n.editRecord=function(e,t){var a=n.state.list;a[e]=t,n.setState({list:a})},n.swapComment=function(e){n.state.active&&(n.deactivate(),n.setState(n.activate()))},n.setTimer=function(e){return n.timer=setInterval((function(e){n.forceUpdate()}),1e3)},n.toggle=function(e){return n.setState(n.state.active?n.deactivate():n.activate())},n.activate=function(e){return n.setTimer(),{active:!0,start:Date.now()}},n.deactivate=function(e){clearInterval(n.timer);var t=n.state,a=t.start,r=t.comment,o=Date.now()-a;return n.push([a,o,r]),{active:!1,start:Date.now(),comment:""}},n.change=function(e){return n.setState({comment:e.target.value})},n.addPreset=function(e){return n.setState({preset:[e].concat(n.state.preset)})},n.delPreset=function(e){return n.setState({delPreset:!n.state.delPreset})},n.delPresetId=function(e){return function(t){console.log(e),n.setState({delPreset:!1,preset:n.state.preset.filter((function(t,n){return n!==e}))})}},n.setMailToAddress=function(e){return n.setState({mailToAddress:e.target.value})},n.setPreset=function(e){return function(t){return n.state.delPreset?n.delPresetId(n.state.preset.indexOf(e))(t):n.setState({comment:e})}},n.state=function(e){return JSON.parse(k.getItem("overtime")||"null")||e}(he),n.state.active&&n.setTimer(),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var e;e=this.state,k.setItem("overtime",JSON.stringify(e))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,n=t.showSettings,a=t.mode,r=t.list,s=t.start,i=t.active,c=t.preset,l=t.user,u=t.weeklyHours,m=t.comment,d=t.mailToAddress,f=r.reduce((function(e,t){return C(t,a)?e+=t[1]:e}),0);return n?o.a.createElement(_,{setState:this.setState.bind(this),show:n,setShow:function(t){return e.setState({showSettings:t})},user:l,changeUser:this.changeUser,weeklyHours:u,changeWeeklyHours:this.changeWeeklyHours,preset:c,addPreset:this.addPreset,delPreset:this.delPreset,delPresetId:this.delPresetId,mailToAddress:d,setMailToAddress:this.setMailToAddress,fixStore:this.fixStore}):o.a.createElement(o.a.Fragment,null,o.a.createElement(fe,Object.assign({list:r,total:f,user:l,mode:a,weeklyHours:u,mailToAddress:d,start:s,active:i},{toggle:this.toggle,changeUser:this.changeUser,changeMode:this.changeMode,changeWeeklyHours:this.changeWeeklyHours,setState:this.setState.bind(this),showSettings:this.showSettings})),o.a.createElement(B,Object.assign({active:i,comment:m,preset:c},{setComment:this.setComment,addPreset:this.addPreset,swapComment:this.swapComment,setPreset:this.setPreset,delPreset:this.delPreset,doDeletePreset:this.state.delPreset})),o.a.createElement(ae,{list:r,total:f,user:l,changeUser:this.changeUser,mode:a,changeMode:this.changeMode,weeklyHours:u,changeWeeklyHours:this.changeWeeklyHours,setState:this.setState.bind(this),showSettings:this.showSettings}),o.a.createElement(ee,Object.assign({list:r,mode:a,preset:c},{changeComment:this.changeComment,deleteRecord:this.delete,editRecord:this.editRecord})))}}]),t}(o.a.Component),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var we=n(103),Ee=n(180),be=n(181),ye=n(15),Se=n(102);n(132);S.a.updateLocale("de",{relativeTime:{future:"%s",past:"%s",s:">1m",m:"1m",mm:"%dm",h:"1h",hh:"%dh",d:"1d",dd:"%dd",M:"1m",MM:"%dm",y:"1y",yy:"%dy"}});var ke=Object(we.a)({palette:{type:"dark"}}),Ce=Object(we.a)({palette:{type:"light"}});i.a.render(o.a.createElement(ye.a,{libInstance:S.a,utils:Se.a,locale:"de"},o.a.createElement((function(e){var t=e.children,n=o.a.useState(!1),r=Object(a.a)(n,2),s=r[0],i=r[1];return window.setLight=i,o.a.createElement(Ee.a,{theme:s?Ce:ke},t)}),null,o.a.createElement(be.a,null),o.a.createElement(ge,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/overtime",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/overtime","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pe(t,e)}))}}()}},[[117,1,2]]]);
//# sourceMappingURL=main.8494d7d7.chunk.js.map