(function(e){function t(t){for(var a,r,i=t[0],o=t[1],l=t[2],b=0,p=[];b<i.length;b++)r=i[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},c={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/order_list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3603:function(e,t,n){},"3bab":function(e,t,n){"use strict";n("c722")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"wrap"};function s(e,t){const n=Object(a["v"])("router-view");return Object(a["o"])(),Object(a["d"])("div",c,[Object(a["f"])(n)])}n("3bab");var r=n("6b0d"),i=n.n(r);const o={},l=i()(o,[["render",s]]);var u=l,b=n("6605"),p=n("a1e9"),d=n("5c40"),O=n("5502");const j=e=>(Object(a["r"])("data-v-6da0e82c"),e=e(),Object(a["p"])(),e),f={class:"main"},v=j(()=>Object(a["e"])("h1",null,[Object(a["e"])("a",{href:"https://www.jubo-health.com/"},"照護科技 | Jubo")],-1)),m=j(()=>Object(a["e"])("h2",null,"病患醫囑清單",-1)),g={class:"patient"},h=["onClick"],y={class:"patient_list_id"},M={class:"patient_list_name"},_={class:"order"},I={class:"order_name"};var w={__name:"Home",setup(e){const t=Object(O["b"])(),n=Object(p["m"])(!1),c=Object(p["m"])(!1),s=Object(d["e"])(()=>t.getters["patientsArr"]);let r={id:0,patientName:"",patientMessage:""};const i=()=>{c.value=!c.value},o=(e,t,a)=>{n.value=!n.value,r.id=e,r.patientName=t,r.patientMessage=a};Object(d["M"])(()=>r.patientMessage,(e,t)=>{});const l=()=>{t.dispatch("handAllPatientsInit")};return Object(d["u"])(()=>{l()}),(e,t)=>(Object(a["o"])(),Object(a["d"])("div",f,[v,m,Object(a["e"])("ul",g,[(Object(a["o"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(Object(a["y"])(s),e=>(Object(a["o"])(),Object(a["d"])("li",{class:"patient_list",key:e.Id,onClick:Object(a["D"])(t=>o(e.Id,e.Name,e.Message),["prevent"])},[Object(a["e"])("div",y,Object(a["x"])(e.Id),1),Object(a["e"])("div",M,Object(a["x"])(e.Name),1)],8,h))),128))]),Object(a["C"])(Object(a["e"])("div",_,[Object(a["e"])("div",I,Object(a["x"])(Object(a["y"])(r).patientName),1),Object(a["C"])(Object(a["e"])("div",{class:"order_massage"},Object(a["x"])(Object(a["y"])(r).patientMessage),513),[[a["A"],!c.value]]),Object(a["C"])(Object(a["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>Object(a["y"])(r).patientMessage=e)},null,512),[[a["A"],c.value],[a["z"],Object(a["y"])(r).patientMessage]]),Object(a["e"])("div",{class:"edit-order",title:"編輯醫囑",onClick:t[1]||(t[1]=e=>i(Object(a["y"])(r).id))}),Object(a["e"])("div",{class:"close-order",title:"關閉視窗",onClick:o})],512),[[a["A"],n.value]])]))}};n("7f8b");const A=i()(w,[["__scopeId","data-v-6da0e82c"]]);var P=A;const x=[{path:"/",name:"Home",component:P},{path:"/:pathMatch(.*)*",redirect:"/"}],N=Object(b["a"])({history:Object(b["b"])("/order_list/"),routes:x});var k=N;const C=[{Id:1,Name:"大雄",Message:"懶癌，需要支持性精神治療或小叮噹協助。"},{Id:2,Name:"靜香",Message:"潔癖，常洗澡，但還算正常範圍，可再觀察。"},{Id:3,Name:"小夫",Message:"炫耀症，沒有受到它人目光就渾身不對勁，青春期中，可能是中二病發作。"},{Id:4,Name:"胖虎",Message:"具暴力傾向，必要時須介入治療，否則會影響他人。"},{Id:5,Name:"哆啦A夢",Message:"富有同情心，熱愛幫助人，但非人類，有問題時，需送至未來世界做治療。"}],S=C;var J=Object(O["a"])({state:{patientsArr:[]},actions:{handAllPatientsInit({commit:e}){e("allPatientsInit",S)},handPatientMessageInit({commit:e},{patientMessage:t,id:n}){e("patientMessageInit",t,n)}},mutations:{allPatientsInit(e,t){e.patientsArr=t},patientMessageInit(e,{patientMessage:t,id:n}){e.patientsArr[n].patientMessage=t}},getters:{patientsArr:e=>e.patientsArr}});Object(a["c"])(u).use(J).use(k).mount("#app")},"7f8b":function(e,t,n){"use strict";n("3603")},c722:function(e,t,n){}});
//# sourceMappingURL=app.4d58da8c.js.map