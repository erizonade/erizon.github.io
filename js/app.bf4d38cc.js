(function(t){function a(a){for(var n,o,i=a[0],l=a[1],c=a[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(a);while(m.length)m.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(n=!1)}n&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},s=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("router-view")],1)},s=[],o=e("2877"),i=e("6544"),l=e.n(i),c=e("7496"),d={},u=Object(o["a"])(d,r,s,!1,null,null,null),m=u.exports;l()(u,{VApp:c["a"]});var p=e("8c4f"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dark_setting"},[e("Navbar"),e("div",{staticClass:"container"},[e("Hero"),e("Project"),e("Skill"),e("Footer")],1)],1)},g=[],v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark shadow mb-5"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("div",{staticClass:"row"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link ma-2",attrs:{to:"/"}},[e("span",{staticClass:"hidden-sm-and-down"},[e("b-icon-house-door"),t._v(" Home")],1),e("span",{staticClass:"btn btn-md btn-dark hidden-md-and-up"},[e("b-icon-house-door")],1)])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link ma-2",attrs:{to:"assets/WEB_DEVELOPER_ERIZON_ADE_PRATAMA.pdf"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.href;return[e("a",{attrs:{href:n},on:{click:t.navigate}},[e("span",{staticClass:"hidden-sm-and-down"},[e("b-icon-file-ruled"),t._v(" Resume")],1),e("span",{staticClass:"btn btn-md btn-dark hidden-md-and-up"},[e("b-icon-file-ruled")],1)])]}}])})],1)])])])])},b=[],h={name:"Navbar"},y=h,k=Object(o["a"])(y,v,b,!1,null,null,null),_=k.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row  flex-column-reverse flex-md-row mt-5"},[e("div",{staticClass:"col"},[e("div",{staticClass:"d-flex h-100"},[e("div",{staticClass:"justify-content-center align-self-center"},[t._m(0),e("v-btn",{staticClass:"links",staticStyle:{"text-decoration":"none"},attrs:{color:"primary",elevation:"5",large:"",rounded:"","x-large":"",href:"https://mail.google.com/mail/?view=cm&fs=1&to=erizonsmart88@gmail.com"}},[e("span",[t._v("Contact Me")])])],1)])]),t._m(1)])},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",{staticClass:"display-1"},[t._v(" Hello, I'm "),e("br"),e("strong",[t._v("Erizon Ade Pratama")]),e("br"),t._v("Web Developer ")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"col ml-8"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center animation"},[n("img",{staticClass:"img-mrg ",attrs:{src:e("b0f0"),width:"80%",shadow:""}})])])])}],C={name:"Hero",mounted:function(){this.gsap.to(".img-mrg",{duration:2,yoyo:!0,repeat:-1,ease:"slow.out",y:-20})}},x=C,P=e("8336"),O=Object(o["a"])(x,w,j,!1,null,null,null),E=O.exports;l()(O,{VBtn:P["a"]});var S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{staticClass:"mt-5"},[e("v-col",{staticClass:"my-5"},[e("h2",[t._v("Web Base Project")])]),e("v-row",{attrs:{justify:"center"}},t._l(t.items,(function(a,n){return e("v-card",{key:n,staticClass:"animation-card mr-1 my-2",attrs:{elevation:"9",outlined:"","max-width":"374"}},[e("v-img",{attrs:{src:a.src,"rounded-xl":""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-1"}})],1)]},proxy:!0}],null,!0)}),e("v-card-title",[t._v(t._s(a.name))]),e("v-card-text",{attrs:{align:"justify"}},[e("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[t._v(" "+t._s(a.description)+" ")])],1),e("v-card-text",t._l(a.teknologi,(function(a,n){return e("v-chip",{key:n,staticClass:"mr-3",attrs:{color:"#0053B4","text-color":"white",small:""}},[t._v(t._s(a))])})),1)],1)})),1)],1)},V=[],M={name:"Project",data:function(){return{items:[{name:"Web Prodi Sistem Informasi",src:"assets/imgs/project/company uin.png",description:"Website ini merupakan portal dari program studi sistem informasi dari fakultas sains dan teknologi UIN Raden Fatah Palembang untuk memberi informasi ke mahasiswa dan umum. Peran saya disini adalah sebagai fullstack web developer.",teknologi:["PHP","MySQL","jQuery"]},{name:"Pasar",src:"assets/imgs/project/pasardhd.png",description:"Aplikasi pasardhd sebagai aplikasi belanja Online barang pasar dan Retail di kota Palembang. Peran saya disini sebagain fullstack dibeberapa admin",teknologi:["Codeigniter","MySQL","jQuery"]},{name:"dibajolbae",src:"assets/imgs/project/dibajol.png",description:"Aplikasi Dibajolbae sebagai aplikasi belanja Online barang pasar dan Retail di kota Palembang. Peran saya disini sebagain fullstack admin",teknologi:["Laravel","MySQL","jQuery"]},{name:"Digital Printing",src:"assets/imgs/project/digital.png",description:"Website penyedia jasa percetakan banner, poster, XBanner dll yang digunakan untuk konsumen. peran saya disini menconfig save to Gdrive dari uploadan konsumen, dana login , serta pengarah pembuatan aplikasi ini.",teknologi:["Laravel","MySQL","jQuery"]},{name:"LKPK Masterpreneur",src:"assets/imgs/project/SEMINAR.png",description:"Merupakan website penyedia jasa seminar online maupun offline yang di peruntuhkan untuk masyarakat umum. Peran saya disini sebagai fullstack admin dan backend web portal",teknologi:["Laravel","MySQL","jQuery"]}]}},mounted:function(){this.gsap.to(".animation-card",{ScrollTrigger:{trigger:".animation-card",toggleActions:"restart pause none none",start:"top center"},duration:2,ease:"slow (0.7,0.7, false)",y:-20})}},L=M,A=e("b0af"),R=e("99d9"),Q=e("cc20"),$=e("62ad"),z=e("adda"),H=e("490a"),I=e("0fd9"),T=Object(o["a"])(L,S,V,!1,null,null,null),B=T.exports;l()(T,{VCard:A["a"],VCardText:R["a"],VCardTitle:R["b"],VChip:Q["a"],VCol:$["a"],VImg:z["a"],VProgressCircular:H["a"],VRow:I["a"]});var N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{staticClass:"justify-center my-5 py-5"},[e("v-col",{staticClass:"d-flex my-5 justify-center",attrs:{cols:"12"}},[e("h2",[t._v("Skill & Tools")])]),t._l(t.logos,(function(t){return e("v-col",{key:t,staticClass:"d-flex align-center justify-center text-center",attrs:{lg:"1",md:"2",sm:"4"}},[e("v-img",{attrs:{width:"100",src:t}})],1)}))],2)},W=[],D={data:function(){return{logos:["https://cdn.worldvectorlogo.com/logos/laravel-2.svg","https://cdn.worldvectorlogo.com/logos/codeigniter.svg","https://cdn.worldvectorlogo.com/logos/php-1.svg","https://cdn.worldvectorlogo.com/logos/logo-javascript.svg","https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg","https://cdn.worldvectorlogo.com/logos/mysql-3.svg","https://cdn.worldvectorlogo.com/logos/jquery-4.svg","https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg"]}}},F=D,q=Object(o["a"])(F,N,W,!1,null,null,null),J=q.exports;l()(q,{VCol:$["a"],VImg:z["a"],VRow:I["a"]});var K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{staticClass:"d-flex mx-auto"},[e("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[e("h2",[e("strong",[t._v("Your can contact me")])]),e("p",[t._v("Your can hiring, business, project services with me please contact me at email erizonsmart88@gmail.com and Likendin")]),t._l(t.icons,(function(a){return e("v-btn",{key:a,attrs:{text:"",depressed:"",fab:"",large:"",href:a.href}},[e("v-icon",{attrs:{color:a.color}},[t._v(" "+t._s(a.icon))])],1)})),e("p",[t._v("©2021 Erizon Ade Pratama")])],2)],1)},Y=[],G={data:function(){return{icons:[{href:"https://mail.google.com/mail/?view=cm&fs=1&to=erizonsmart88@gmail.com",icon:"mdi-email",color:"red"},{href:"https://www.linkedin.com/in/erizon-ade-pratama/",icon:"mdi-linkedin",color:"blue"},{icon:"mdi-whatsapp",color:"green"},{href:"https://github.com/erizonade",icon:"mdi-github",color:"white"},{icon:"mdi-instagram",color:"red"}]}}},U=G,X=e("132d"),Z=Object(o["a"])(U,K,Y,!1,null,null,null),tt=Z.exports;l()(Z,{VBtn:P["a"],VCol:$["a"],VIcon:X["a"],VRow:I["a"]});var at={name:"Home",components:{Navbar:_,Hero:E,Project:B,Skill:J,Footer:tt}},et=at,nt=Object(o["a"])(et,f,g,!1,null,null,null),rt=nt.exports;n["default"].use(p["a"]);var st=[{path:"/",name:"Home",component:rt}],ot=new p["a"]({mode:"history",base:"/",routes:st}),it=ot,lt=e("5f5b"),ct=e("b1e0"),dt=(e("f9e3"),e("2dd8"),e("5aea"),e("f309"));n["default"].use(dt["a"]);var ut=new dt["a"]({theme:{themes:{light:{dark_setting:"#303030"}}}}),mt=e("cffa"),pt=e("1dac");mt["a"].registerPlugin(pt["a"]),n["default"].use(lt["a"]),n["default"].use(ct["a"]),n["default"].config.productionTip=!1,n["default"].mixin({created:function(){this.gsap=mt["a"]}}),new n["default"]({router:it,vuetify:ut,render:function(t){return t(m)}}).$mount("#app")},"5aea":function(t,a,e){},b0f0:function(t,a,e){t.exports=e.p+"img/ErizonLogo.59963a8f.png"}});
//# sourceMappingURL=app.bf4d38cc.js.map