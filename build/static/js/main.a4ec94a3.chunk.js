(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a.p+"static/media/science.4a5f6f18.svg"},,,,,function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=parseInt(e),n=parseInt(t);return Math.floor(Math.random()*n)+a}},function(e,t,a){e.exports=a.p+"static/media/blue.5bb50c30.svg"},,,function(e,t,a){"use strict";(function(e){var n=a(2),r=a(17),o=a(44),c=a(18),i=a(38),l=a(43);a(0);function s(){var e=this;this.trackers={},this.events={},this.globalOptions={},this.hasTrackers=function(){return Object.keys(e.trackers).length>0}}t.a=e.GA||(e.GA=new s);Object(l.a)(Error);var u=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,"GoogleAnalytics.addEvent expects a STRING category as the first argument. ".concat(e?" You provided ".concat(e):"")))}return Object(i.a)(t,e),t}(Object(l.a)(Error));Object.defineProperty(s.prototype,"initialize",{writable:!1,value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("useGoogleAnalytics initializing with tracking codes ".concat(Object.keys(t))),this.globalOptions=Object(n.a)({},a);try{Object.keys(t).forEach((function(a){e.addTrackingCode(a,t[a])}))}catch(r){console.log("useGoogleAnalytics had an oopsie",r)}return this}}),s.prototype.addTrackingCode=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{this.trackers[e]=Object(n.a)({},t),console.log("useGoogleAnalytics added tracking code ".concat(e))}catch(a){console.log("useGoogleAnalytics had an oopsie",a)}return this},s.prototype.addEvent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{if(0===e.length)throw new u}catch(a){throw new u(e)}return this.events[e]||(this.events[e]=Object(n.a)({},t)),this.events[e]}}).call(this,a(21))},function(e,t,a){e.exports=a.p+"static/media/blueBottom.f33e8fc6.svg"},function(e,t,a){e.exports=a.p+"static/media/blueLoose.10a8492f.svg"},function(e,t,a){e.exports=a.p+"static/media/purple.88491966.svg"},function(e,t,a){e.exports=a.p+"static/media/white.6a72d127.svg"},function(e,t,a){e.exports=a.p+"static/media/whiteBottom.314d92a6.svg"},function(e,t,a){e.exports=a.p+"static/media/github.806dc612.svg"},function(e,t,a){e.exports=a.p+"static/media/npm.e47ef333.svg"},function(e,t,a){e.exports=a.p+"static/media/coffee.fbfcbb6d.svg"},,,function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var n=a(1),r=a(25),o=a(0);e.TypedText||(e.TypedText=new function(){this.typeSpeed=60,this.skipSpace=!0,this.currentPrompt="| ",this.donePrompt="> ",this.cursor="\u2588",this.setTypeSpeed=function(e){this.typeSpeed=e},this.setCursor=function(e){this.cursor=e},this.removeCursor=function(){this.setCursor("")},this.getStrokeSpeed=function(){return Object(r.a)(this.typeSpeed-50,this.typeSpeed+50)}});function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(o.useState)(""),c=Object(n.a)(r,2),i=c[0],l=c[1],s=Object(o.useState)(""),u=Object(n.a)(s,2),d=u[0],m=u[1],f=Object(o.useState)(),p=Object(n.a)(f,2),b=p[0],h=p[1],g=Object(o.useState)(a),v=Object(n.a)(g,2),y=v[0];v[1];function E(){h(clearTimeout(b))}function j(e){E(),l(""),m(e)}Object(o.useEffect)((function(){if(d.length&&i.length!==d.length){var a=d.substring(0,i.length+1);e.TypedText.skipSpace&&" "===a[a.length-1]?l(a):h(setTimeout((function(){l(a),E()}),e.TypedText.getStrokeSpeed()))}else d.length&&(t(d),E())}),[d,i]),Object(o.useEffect)((function(){a!==y&&E()}),[a]),Object(o.useEffect)((function(){return function(){E()}}),[]);var k=Object(o.useMemo)((function(){return d.length&&b?[e.TypedText.currentPrompt,e.TypedText.cursor]:d.length?[e.TypedText.donePrompt,""]:["",""]}),[b,d]),O=Object(n.a)(k,2),w=O[0],x=O[1];return["".concat(w).concat(i).concat(x),m,i,j]}}).call(this,a(21))},,,,,,function(e,t,a){e.exports=a.p+"static/media/black.425341d9.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/orange.d7eeed52.svg"},function(e,t,a){e.exports=a.p+"static/media/orangeBottom.cae6311e.svg"},function(e,t,a){e.exports=a.p+"static/media/orangeLoose.2650fe82.svg"},function(e,t,a){e.exports=a.p+"static/media/purpleBottom.0ec6f7f8.svg"},function(e,t,a){e.exports=a.p+"static/media/purpleLoose.d844fe66.svg"},function(e,t,a){e.exports=a.p+"static/media/red.e1d6c32c.svg"},function(e,t,a){e.exports=a.p+"static/media/redBottom.87653f8f.svg"},function(e,t,a){e.exports=a.p+"static/media/redLoose.4994d292.svg"},function(e,t,a){e.exports=a.p+"static/media/green.1812c204.svg"},function(e,t,a){e.exports=a.p+"static/media/greenBottom.492e7586.svg"},function(e,t,a){e.exports=a.p+"static/media/greenLoose.d2dcb53f.svg"},function(e,t,a){e.exports=a.p+"static/media/whiteLoose.d21be36a.svg"},function(e,t,a){e.exports=a.p+"static/media/stackoverflow.b2956979.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.2ee5e6e8.svg"},function(e,t,a){e.exports=a.p+"static/media/email.ad69acb4.svg"},function(e,t,a){e.exports=a.p+"static/media/california.d883da36.svg"},function(e,t,a){e.exports=a.p+"static/media/skills.56ec49cc.svg"},function(e,t,a){e.exports=a.p+"static/media/toolkit.5e001dc5.svg"},function(e,t,a){e.exports=a.p+"static/media/ownership.c39046a9.svg"},function(e,t,a){e.exports=a.p+"static/media/responsive_plain.9359e9bc.svg"},function(e,t,a){e.exports=a.p+"static/media/testing.2956887f.svg"},function(e,t,a){e.exports=a.p+"static/media/concerns.710d96c1.svg"},function(e,t,a){e.exports=a.p+"static/media/error.3478d0e5.svg"},,,,function(e,t,a){e.exports=a(93)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=a(7),l=a(29),s=a(15),u=a(4),d=a(48),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p,b=a(2),h=a(13),g=(p={backgroundDark:"#2d2d2d",backgroundLight:"#4982e8",fontDark:"#2d2d2d",fontLight:"#dedede",about:"#6acb5d",skills:"#9642f5",contact:"#6acb5d",error:"#ff4136",aboutDark:"#af5514",skillsDark:"#2357b7",contactDark:"#7a10f3",red:"#ff4136",black:"#2d2d2d",black2:"#171717",white:"#dedede",white2:"#aaa",grey:"#9a9a9a",green:"#6acb5d",blue:"#4982e8",orange:"#db7923",purple:"#9642f5",purpleDark:"#7a10f3"},Object(h.a)(p,"".concat("#dedede","Dark"),"#9a9a9a"),Object(h.a)(p,"".concat("#db7923","Dark"),"#af5514"),Object(h.a)(p,"".concat("#4982e8","Dark"),"#2357b7"),Object(h.a)(p,"".concat("#9642f5","Dark"),"#7a10f3"),Object(h.a)(p,"".concat("#6acb5d","Dark"),"#63AB62"),p),v=g,y=a(26),E=a.n(y),j=a(30),k=a.n(j),O=a(31),w=a.n(O),x=a(16),T=a.n(x),S=a(27),I=a(17),C=a(49),N=a(50),L=a.n(N),P=a(51),A=a.n(P),_=a(52),B=a.n(_),q=a(32),R=a.n(q),D=a(53),M=a.n(D),W=a(54),z=a.n(W),G=a(55),F=a.n(G),U=a(56),Y=a.n(U),H=a(57),J=a.n(H),V=a(58),K=a.n(V),Q=a(59),$=a.n(Q),X=a(60),Z=a.n(X),ee=a(33),te=a.n(ee),ae=a(34),ne=a.n(ae),re=a(61),oe=a.n(re),ce=function(){function e(){Object(I.a)(this,e)}return Object(C.a)(e,null,[{key:"from",value:function(t){return e.all[t]||e.all.white}},{key:"fromTab",value:function(t){return e.tabs[t]||e.tabs[t]}},{key:"all",get:function(){return{blue:{font:"#fff",color:v.blue,img:E.a,img2:k.a,img3:w.a},green:{font:"#fff",color:v.green,img:K.a,img2:$.a,img3:Z.a},orange:{font:"#fff",color:v.orange,img:L.a,img2:A.a,img3:B.a},purple:{font:"#fff",color:v.purple,img:R.a,img2:M.a,img3:z.a},red:{font:"#fff",color:v.red,img:F.a,img2:Y.a,img3:J.a},white:{font:v.black,color:v.white,img:te.a,img2:ne.a,img3:oe.a}}}},{key:"tabs",get:function(){e.all;return{about:"green",error:"red",skills:"purple"}}}]),e}();var ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={about:Object(b.a)({title:"about",desc:"This is what we show",path:"about"},ce.from("green")),skills:Object(b.a)({title:"skills",desc:"Some bowstaff skills",path:"skills"},ce.from("purple")),contact:Object(b.a)({title:"contact",desc:"Contact details",path:"contact"},ce.from("blue")),error:Object(b.a)({title:"error",desc:"The error page"},ce.from("red"))};return t?Object(b.a)({},a):a[e]?a[e]:a.error},le=(ie(!1,!0),function(e){var t=ie(e);return Object(b.a)({type:"SET_CURRENT_TAB"},t)}),se=function(e,t){return{type:"SET_QUEUED_IMAGES",queuedImages:e,isDone:t}},ue=function(e){return function(t,a){var n,r,o=Object(b.a)({},a().queuedImages);(n=o,r=e,Object.keys(n).indexOf(r)>=0)||(o[e]=!1,t(se(o)))}},de={bubbleSrc:E.a,currentTab:"about",theme:v.about,scrollY:0,issues:[],queuedImages:{},allImagesLoaded:!1};var me=a(9),fe=a(74),pe=a(1),be=a(8),he=a(75);function ge(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach((function(t){"string"===typeof t?e.push(t):t instanceof Array?e.push(ge.apply(void 0,Object(he.a)(t))):t instanceof Function?e.push(ge(t())):t instanceof Object?Object.keys(t).forEach((function(a){t[a]&&e.push(a)})):t&&t.toString&&e.push(t.toString())})),e.join(" ")}var ve=Object(u.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;var t=e.className,a=e.children,o=e.currentTab,c=e.id,i=e.transition,l=Object(be.a)(e,["dispatch","className","children","currentTab","id","transition"]),s=function(e,t){var a=Object(n.useState)(!1),r=Object(pe.a)(a,2),o=r[0],c=r[1],i=Object(n.useState)(),l=Object(pe.a)(i,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){c(!1)}),[t]),[o,function(){c(!1),u(setTimeout((function(){c(!0)}),e))},function(){clearTimeout(s)}]}(100,o),u=Object(pe.a)(s,3),d=u[0],m=u[1],f=u[2],p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:250,o=Object(n.useMemo)((function(){var t={position:"relative",opacity:0,transition:"opacity ".concat(r+100,"ms")};return"fade"!==e&&(t=Object(b.a)({},t,{top:20,transition:"opacity ".concat(r+100,"ms, top ease-out ").concat(r,"ms")})),Object(b.a)({},a,{},t)}),[e,r]),c=Object(n.useState)(o),i=Object(pe.a)(c,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){s(Object(b.a)({},o,{opacity:t?1:0,top:0}))}),[e,t]),l}(i,d,l.style);Object(n.useEffect)((function(){return m(),function(){return f()}}),[]);var h=ge(["Transition",t,i],{done:d});return r.a.createElement("div",Object.assign({id:c,className:h},l,{style:p}),a)})),ye=a(24);function Ee(e,t){var a=Object(n.useState)(!1),r=Object(pe.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){t&&t.length&&e(o?function(e){return function(t,a){var n=Object(b.a)({},a().queuedImages);n[e]=!0;var r=Object.values(n),o=(r.length,r.reduce((function(e,t){return e&&t})));t(se(n,o)),o&&t({type:"SET_ALL_IMAGES_LOADED",done:!0})}}(t):ue(t))}),[o,t]),[o,c]}var je=function(e){var t=e.alt,a=e.className,n=e.dispatch,o=e.id,c=e.loaded,i=e.onLoad,l=(e.scrollY,e.src),s=e.style,u=(e.test,Object(be.a)(e,["alt","className","dispatch","id","loaded","onLoad","scrollY","src","style","test"])),d=Ee(n,l),m=Object(pe.a)(d,2),f=m[0],p=m[1],h=ge(a,{hasLoaded:f}),g=(s.transform,Object(b.a)({},s,{opacity:c?1:0,transition:"opacity 300ms, top 400ms"}));return r.a.createElement("img",Object.assign({className:h,onLoad:function(e){p(!0),i(e)}},u,{src:l,id:o,alt:t,style:g}))};je.defaultProps={alt:"image loading not supported",id:"",style:{},onLoad:function(){}};var ke=Object(u.b)((function(e){return{scrollY:e.scrollY,loaded:e.allImagesLoaded}}))(je),Oe=(a(46),function(e){var t=e.children,a=e.leftPad,n=e.rightPad,o=ge("Card",{single:t&&!t[0],leftPad:a,rightPad:n});return r.a.createElement("div",{className:o,style:{width:"100vw",maxWidth:1e3,margin:"0 auto",paddingBottom:"10vh",paddingTop:"10vh",display:"flex",justifyContent:"space-around"}},t&&t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(we,{side:"left",padded:a},t&&t[0]),r.a.createElement(we,{side:"right",padded:n},t[1]&&t[1])),t&&!t[0]&&r.a.createElement(we,{padded:a||n},t))});function we(e){var t=e.children,a=e.padded,n=ge("CardSide",e.side,{padded:a});return r.a.createElement("div",{className:n,style:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}},t)}Oe.defaultProps={isTop:!1,light:!1};var xe=Oe;var Te=function(e){var t=e.children,a=(e.dark,e.custom,e.isTop),o=e.isBottom,c=e.style,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",t=Object(n.useState)(""),a=Object(pe.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),i=Object(pe.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(""),d=Object(pe.a)(u,2),m=d[0],f=d[1];return Object(n.useEffect)((function(){var t=ce.from(e),a=t.img,n=t.img2,r=t.img3;o(a),s(n),f(r)}),[e]),[r,l,m]}(e.breakColor),l=Object(pe.a)(i,3),s=l[0],u=l[1],d=l[2],m=function(e){var t=Object(n.useState)({}),a=Object(pe.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){o({minHeight:"".concat(e?75:100,"vh")})}),[e]),r}(o).minHeight,f=Object(ye.a)(100),p={width:"100vw",minWidth:1e3,position:"absolute",transition:"opacity 200ms ease-in",opacity:Object(pe.a)(f,1)[0]?1:0},h={};return a?h.top="10vh":h.bottom="100%",r.a.createElement("div",{className:"Layer",style:Object(b.a)({background:"linear-gradient(".concat([v.black2,v.black].join(),")"),position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",paddingBottom:"30vh",paddingTop:"15vh"},c,{minHeight:m,color:v.white})},!a&&r.a.createElement(ke,{src:s,style:Object(b.a)({},p,{bottom:"100%"})}),!a&&r.a.createElement(ke,{src:u,style:Object(b.a)({},p,{top:0})}),r.a.createElement(ke,{className:"floating",src:d,style:Object(b.a)({},p,{},h,{opacity:.7})}),r.a.createElement(ke,{className:"floating-one80",src:d,style:Object(b.a)({},p,{},h,{opacity:.7})}),t)};Te.defaultProps={isBottom:!1,isTop:!1,dark:!1,breakColor:"white"};var Se=Te,Ie=function(e){var t=e.project,a=t.title,n=t.src,o=t.link,c=t.body;return r.a.createElement("div",{className:"ProjectCard",style:{display:"flex",padding:10,boxShadow:"0 0 1px 1px rgba(0,0,0,0.2)",flexGrow:0,marginBottom:15}},r.a.createElement("div",{className:"noMobile noTablett",style:{opacity:.7,height:100}},r.a.createElement(ke,{src:n,style:{maxWidth:200,background:v.white}})),r.a.createElement("div",{style:{paddingLeft:10,width:"100%"}},r.a.createElement("a",{href:o,target:"_blank"},r.a.createElement("strong",null,a)),r.a.createElement("code",{style:{marginTop:10}},c)))},Ce=function(e){var t=e.projects,a=Object(n.useMemo)((function(){return t.map((function(e){return r.a.createElement(Ie,{project:e})}))}),[t]);return r.a.createElement("div",{className:"ProjectCards",style:{minHeight:"50vh",maxWidth:1e3,margin:"0 auto",display:"flex",flexDirection:"column",width:"100%",padding:"0 5vw",boxSizing:"border-box"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Some other projects..."),a)};Ce.defaultProps={projects:[{title:"@taystack/js-helpers",src:"https://raw.githubusercontent.com/taystack/js-helpers/master/docs/JsHelpers.png",link:"https://github.com/taystack/js-helpers",body:"Small JavaScript library with some helper functions that I find useful. This is a work in progress and contributions are encouraged."},{title:"@taystack/use-timeout",src:"https://raw.githubusercontent.com/taystack/use-timeout/master/logo.png",link:"https://github.com/taystack/use-timeout",body:"React 16.8 Hook: Get a boolean value after an arbitrary timeout. Useful for rendering mounting components."},{title:"@taystack/use-leet",src:"https://raw.githubusercontent.com/taystack/use-leet/master/logo.png",link:"https://github.com/taystack/use-leet",body:"React 16.8 Hook: Leet-ify your text with leet speak. React hook turns your given text value into 1337 SP34K."}]};var Ne=Ce,Le=function(e){var t=e.background,a=e.color,n=e.children,o=e.style,c=e.id,i=Object(be.a)(e,["background","color","children","style","id"]);return r.a.createElement("div",Object.assign({tabIndex:0},i,{id:c,className:ge("Button hoverAppear moreOpacity",i.className),style:Object(b.a)({borderRadius:2,boxShadow:"0 1px 1px rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 100ms",outline:"none",background:t,color:a},o)}),n)};Le.defaultProps={background:v.white,color:v.black,style:{}};var Pe=Le,Ae=a(35),_e=a.n(Ae),Be=a(36),qe=a.n(Be),Re=a(62),De=a.n(Re),Me=a(63),We=a.n(Me),ze=a(64),Ge=a.n(ze),Fe="https://docs.google.com/document/d/e/2PACX-1vSErsiirq0OnJqyfw8CzT76clL-aES1hKqxhBREcihaBILxk891x1qxjiMgBdlhTv65AvNdNUqljWMD/pub",Ue="https://www.github.com/taystack",Ye="".concat(Ue,"/website"),He="https://www.npmjs.com/~taystack",Je="https://www.linkedin.com/in/taylor-stackpole-71bb8762/",Ve="mailto:tay.stack@gmail.com+contact",Ke=function(e){var t=e.children,a=e.className,n=e.style;return r.a.createElement("div",{tabIndex:0,className:a,style:Object(b.a)({zIndex:1,padding:10,outline:"none"},n)},t)};Ke.defaultProps={style:{}};var Qe=function(e){var t=e.props,a=e.style;return r.a.createElement(ke,Object.assign({},t,{src:_e.a,onClick:function(){return window.open(Ue,"_blank")},id:"github-link",className:"SocialIcon",style:a}))},$e=function(e){var t=e.props,a=e.style;return r.a.createElement(ke,Object.assign({},t,{src:De.a,onClick:function(){return window.open("https://stackoverflow.com/users/1819265/taystack","_blank")},id:"stackoverflow-link",className:"SocialIcon",style:a}))},Xe=function(e){var t=e.props,a=e.style;return r.a.createElement(ke,Object.assign({},t,{src:We.a,onClick:function(){return window.open(Je,"_blank")},id:"linkedin-link",className:"SocialIcon",style:a}))},Ze=function(e){var t=e.props,a=e.style;return r.a.createElement(ke,Object.assign({},t,{src:qe.a,onClick:function(){return window.open(He,"_blank")},id:"npm-link",className:"SocialIcon",style:a}))},et=function(e){var t=e.props,a=e.style;return r.a.createElement(ke,Object.assign({},t,{src:Ge.a,onClick:function(){return window.open(Ve,"_blank")},id:"npm-link",className:"SocialIcon",style:a}))},tt=function(e){var t=e.noMobile,a=e.noTablett,n=e.background,o=ge("hoverAppear",{noMobile:t,noTablett:a});return r.a.createElement("div",{className:"SocialIcons",style:{display:"flex",alignItems:"center",justifyContent:"center",background:n}},r.a.createElement(Ke,{className:o},r.a.createElement(Ze,null)),r.a.createElement(Ke,{className:o},r.a.createElement(Qe,null)),r.a.createElement(Ke,{className:o},r.a.createElement($e,null)),r.a.createElement(Ke,{className:o},r.a.createElement(Xe,null)))};tt.defaultProps={background:"transparent"};var at=tt,nt=function(e){e.background,e.color;return r.a.createElement("div",{className:"CommunityIcons",style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"card",style:{display:"flex",cursor:"pointer"}},[[Ze,v.red],[Qe,v.blue],[$e,v.orange],[et,v.purple]].map((function(e,t){var a=Object(pe.a)(e,2),n=a[0],o=a[1];return r.a.createElement(Ke,{className:"MergeIcon hoverAppear moreOpacity",key:n,style:{background:o}},r.a.createElement(n,null))}))),r.a.createElement("div",{className:"card",style:{display:"flex",cursor:"pointer"}}))},rt=(a(25),a(37)),ot=a.n(rt),ct=a(40),it=function(e){var t=e.loading,a=e.queuedImages,o=Object(n.useState)(!0),c=Object(pe.a)(o,2),i=c[0],l=c[1],s=Object(ct.a)((function(){h("7H3 50F7W4R3 3NGIN33R")}),i),u=Object(pe.a)(s,2),d=u[0],m=u[1],f=Object(ct.a)((function(){t?g("Thinks you should turn off JavaScript"):setTimeout((function(){l(!1)}),500)}),i),p=Object(pe.a)(f,4),b=p[0],h=p[1],g=(p[2],p[3]),y=Object(n.useMemo)((function(){return Object.keys(a).filter((function(e){return!a[e]}))[0]}),[a]);Object(n.useEffect)((function(){document.body.style.overflowY=i?"hidden":"scroll"}),[i]),Object(n.useEffect)((function(){m("Taylor Stackpole")}),[]);var E={position:"fixed",top:0,left:0,width:"100vw",height:"100vh",fontFamily:"monospace",zIndex:i?1e3:-1e3,opacity:i?1:0,transition:"opacity 1000ms, z-index 200ms 1050ms",background:v.black};return r.a.createElement("div",{className:"LoadingOverlay",onClick:function(){return l(!1)},style:E},r.a.createElement("div",{style:{}},r.a.createElement("span",{style:{fontSize:"0.5em"}},y),r.a.createElement("h2",{style:{color:v.white}},d),r.a.createElement("h2",{style:{color:v.white2}},b)))};it.defaultProps={loading:!0,queuedImages:{}};Object(u.b)((function(e){return{loading:!e.allImagesLoaded,queuedImages:e.queuedImages}}))(it);var lt=function(e){e.currentTab;var t=e.breakColor,a=(e.loading,Object(n.useMemo)((function(){return ce.from(t)}),[t])),o=a.img,c=a.img3,i=a.color,l=a.font,s={position:"absolute",width:"100vw",minWidth:1e3,bottom:"3vh"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{breakColor:"orange",isBottom:!0},r.a.createElement(xe,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",{id:"contact"},"Like what you see?"),r.a.createElement("p",null,"Follow this project and others on GitHub, or NPM."),r.a.createElement(nt,{background:i,color:l,left:!0})),r.a.createElement("div",null,r.a.createElement(ke,{src:ot.a}))),r.a.createElement(Ne,null)),r.a.createElement("div",{style:{position:"relative",height:"3vh",background:v.white}},r.a.createElement(ke,{src:o,style:s}),r.a.createElement(ke,{className:"floating",src:c,style:Object(b.a)({opacity:.5},s)}),r.a.createElement(ke,{className:"floating-one80",src:c,style:Object(b.a)({opacity:.5},s)}),r.a.createElement("div",{style:{display:"flex",background:i,justifyContent:"space-between",alignItems:"center"}},r.a.createElement(at,null))))};lt.defaultProps={breakColor:"white"};var st=Object(u.b)((function(e){var t=e.currentTab,a=e.allImagesLoaded;return{currentTab:t,breakColor:ce.fromTab(t),loading:!a}}))(lt),ut=a(65),dt=a.n(ut),mt=a(66),ft=a.n(mt),pt=a(20),bt=a.n(pt),ht=a(67),gt=a.n(ht),vt=a(68),yt=a.n(vt),Et=a(69),jt=a.n(Et),kt=a(70),Ot=a.n(kt),wt=a(71),xt=a.n(wt),Tt=Object(u.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;return Object(n.useEffect)((function(){document.title="About | Taylor Stackpole the software engineer"}),[]),r.a.createElement(ve,{transition:"fade-slide"},r.a.createElement(Se,{isTop:!0,breakColor:"green"},r.a.createElement(xe,{leftPad:!0},r.a.createElement(ke,{style:{minWidth:"50vw",maxHeight:"50vh"},src:dt.a}),r.a.createElement("div",null,r.a.createElement("h1",null,"Hey, I'm Taylor"),r.a.createElement("p",null,"I'm a software engineer from California."),r.a.createElement("h2",null,"I build web apps")))),r.a.createElement(Se,{breakColor:"blue"},r.a.createElement(xe,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",null,"I drink rocket fuel"),r.a.createElement("p",null,"I'm a straight-up JavaScript powerhouse. I've also spent years in agile development across many teams. I know how to estimate my throughput to deliver above and beyond what is expected. Point me at feature gaps if you want to fill them. Point me at a problem areas to make them go away.")),r.a.createElement(ke,{src:ft.a})),r.a.createElement(xe,{leftPad:!0},r.a.createElement(ke,{test:!0,src:yt.a}),r.a.createElement("div",null,r.a.createElement("h2",null,"I take ownership"),r.a.createElement("p",null,"When a project is handed to me it becomes my baby. I'm proud of my work and do my best to encourage the same from my colleagues."))),r.a.createElement(xe,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",null,"I look into the future"),r.a.createElement("p",null,"The JavaScript community moves fast. Real fast. That's why it's important for me to be a part of it. I'm always adding new skills to my tool belt."),r.a.createElement(nt,null)),r.a.createElement(ke,{src:gt.a}))),r.a.createElement(Se,{breakColor:"purple"},r.a.createElement(xe,{leftPad:!0},r.a.createElement(ke,{src:xt.a}),r.a.createElement("div",null,r.a.createElement("h2",null,"I modularize and optimize"),r.a.createElement("p",null,"The first step to optimizing a process is to define the moving parts. I've had to deal with enormous projects in my profession. The best projects to work on have clearly defined architectures, where each piece plays a clearly defined role. When things don't make sense, I communicate with colleagues until we build a roadmap to fix it."))),r.a.createElement(xe,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",{id:"test-the-things"},"I test all the things"),r.a.createElement("p",null,"Meaningful test coverage is crucial to ensure code does what you think it does. I create small, dedicated modules that are perfect for testing in isolation, or mocking for other modules.\xa0",r.a.createElement("a",{href:"https://stackoverflow.com/questions/44769404/jest-spyon-function-called/46735186#46735186"},"I understand how to test."))),r.a.createElement(ke,{src:Ot.a}))),r.a.createElement(Se,{breakColor:"orange"},r.a.createElement(xe,{leftPad:!0},r.a.createElement(ke,{src:bt.a}),r.a.createElement("div",null,r.a.createElement("h2",{id:"designer"},"I designed this website"),r.a.createElement("p",null,"My greatest weakness as a web developer is design, but I love art. I build corporate apps, but I like building stuff like this. All of the images were designed as SVGs. That means each one is perfectly crisp down to the half-pixel on your retina device.",r.a.createElement("a",{target:"_blank",href:Ve},"Email me")," or ",r.a.createElement("a",{target:"_blank",href:Ye},"visit this project")," if you have any suggestions."))),r.a.createElement(xe,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",{id:"responsive"},"I understand responsive design"),r.a.createElement("p",null,"This website is responsive. I'm guessing it works on your device right now. Even if you turn off JavaScript this website will still work. I'm all about making content available to users so I research the best, light-weight methods of presentation. I've been employing ",r.a.createElement("code",null,"flexbox")," with ",r.a.createElement("code",null,"@media")," query layouts for years.")),r.a.createElement(ke,{src:jt.a}))))})),St={title:"(Cracks knuckles\u2026)",text:"I've done my best to evaluate my own personal skills. Below is an interactive assessment. The evaluation was done using various public tests. Links to these skill tests will be down below."},It=function(){return Object(n.useEffect)((function(){document.title="Skills | Taylor Stackpole the software engineer"}),[]),r.a.createElement(ve,{id:"skills-view",transition:"fade-slide"},r.a.createElement(Se,{isTop:!0,dark:!0},r.a.createElement(xe,{leftPad:!0},r.a.createElement(ke,{src:bt.a}),r.a.createElement("div",null,r.a.createElement("h1",null,St.title),r.a.createElement("p",null,St.text)))),r.a.createElement(Se,null,r.a.createElement(xe,{leftPad:!0},r.a.createElement(ke,{src:bt.a}),r.a.createElement("div",null,r.a.createElement("h2",null,"Assesment sources"),r.a.createElement("p",null,"This is a list of the publicly available assessment providers that contributed to the data above.")))))},Ct={borderRadius:0,border:"none",borderBottom:"2px solid ".concat(v.grey)},Nt={fontSize:20,color:v.black,border:"1px solid ".concat(v.grey),outline:"none"};var Lt=function(e){var t=e.id,a=e.label,o=e.style,c=(e.required,e.error),i=e.value,l=Object(be.a)(e,["id","label","style","required","error","value"]),s=c.length>0,u=Object(n.useState)(i.length>0),d=Object(pe.a)(u,2),m=d[0],f=d[1],p=Object(n.useState)(""),h=Object(pe.a)(p,2),g=h[0],y=h[1],E=function(e,t){var a=Object(n.useState)({}),r=Object(pe.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){var a=Object(b.a)({},Ct);e&&(a=Object(b.a)({},a,{borderBottom:"2px solid ".concat(t?v.red:v.contact)})),c(a)}),[e,t]),o}(m,s);Object(n.useEffect)((function(){c.length>0&&(f(!0),y(c))}),[c]);return r.a.createElement("div",{style:{position:"relative",marginTop:"7vh"}},r.a.createElement("label",{style:{position:"absolute",top:m?-20:20,color:s?v.red:v.grey,left:7,zIndex:1,cursor:"text",transition:"top 150ms ease-out, color 100ms ease-out"},htmlFor:t},a,i.length>0&&s&&r.a.createElement("span",null," - ",g)),r.a.createElement("input",Object.assign({},l,{value:i,id:t,name:t,onFocus:function(){return f(!0)},onBlur:function(e){l.onBlur(e),c.length>0||0===i.length&&f(!1)},tabIndex:0,placeholder:c||l.placeholder,style:Object(b.a)({},Nt,{},o,{background:"transparent",color:v.white,width:"100%",boxSizing:"border-box",paddingTop:15,paddingBottom:10},E)})))};Lt.defaultProps={required:!1,error:"",value:"",onChange:function(e){return e},onBlur:function(e){return e},onFocus:function(e){return e},style:{borderRadius:2,padding:"5px 7px",background:v.white}};var Pt=Lt;function At(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(n.useState)(e),a=Object(pe.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),i=Object(pe.a)(c,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){r.length>0&&s("")}),[r]),[r,o,l,s]}var _t={};var Bt=function(e){e.dispatch;var t=At(),a=Object(pe.a)(t,4),o=a[0],c=a[1],i=a[2],l=a[3],s=At(),u=Object(pe.a)(s,4),d=u[0],m=u[1],f=u[2],p=u[3],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(n.useState)(e),a=Object(pe.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),i=Object(pe.a)(c,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){var e=r.replace(/[^0-9]/gi,""),t=[];if(e)try{e.toString().split("").forEach((function(e,a){if(3!==a&&6!==a||t.push("-"),10===a)throw _t;t.push(e)}))}catch(a){if(a!==_t)throw a}s(t.join(""))}),[r]),[l,o]}(),h=Object(pe.a)(b,2),g=h[0],y=h[1];return r.a.createElement(ve,{transition:"fade-slide"},r.a.createElement(Se,{isTop:!0,dark:!0},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"ContactForm"},r.a.createElement(Pt,{required:!0,label:"Name, nickname, or fancy title *",id:"contact-name",value:o,error:i,onChange:function(e){return c(e.target.value)}}),r.a.createElement(Pt,{required:!0,label:"Best Email to react you at *",id:"contact-email",type:"email",value:d,error:f,onChange:function(e){return m(e.target.value)}}),r.a.createElement(Pt,{label:"I can call people xxx-xxx-xxxx",id:"contact-phone",type:"tel",value:g,onChange:function(e){return y(e.target.value)}}),r.a.createElement("div",{style:{marginTop:"7vh",display:"flex",alignItems:"center",justifyContent:"space-between"}},r.a.createElement(Pe,{id:"contact-submit",onClick:function(){var e=!1;0===o.length&&(e=!0,l("Field is required")),0===d.length&&(e=!0,p("Field is required"));var t=function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}(d);d.length>0&&!t&&(e=!0,p("Unknown email format")),e||console.log("Contact",o,d,g)},background:v.contact,color:v.white},"Contact"),r.a.createElement(Pe,{id:"view-cv",onClick:function(){window.open(Fe,"_blank")}},"View CV"))))),r.a.createElement(st,null))};Bt.defaultProps={};var qt=Object(u.b)()(Bt),Rt=a(72),Dt=a.n(Rt),Mt=Object(u.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;return"error"!==e.currentTab?null:r.a.createElement(ve,null,r.a.createElement(Se,{breakColor:"red",isTop:!0},r.a.createElement(xe,{leftPad:!0},r.a.createElement(ke,{src:Dt.a,style:{height:"30vw"}}),r.a.createElement("div",null,r.a.createElement("h1",null,"Error 404"),r.a.createElement("p",null,"I'm not sure how you got here, but there really isn't anything here.")))))})),Wt=a(5),zt=a.n(Wt);Object(u.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;var t=e.onClick,a=e.tab,n=e.currentTab,o=(e.show,Object(be.a)(e,["dispatch","onClick","tab","currentTab","show"])),c=a.title,i=ge("TabItem hoverAppear",{active:c===n});return r.a.createElement("div",Object.assign({},o,{className:i,onClick:function(e){e.stopPropagation(),t(a)},style:{display:"flex",alignItems:"center",overflow:"hidden",justifyContent:"space-between",paddingRight:20,paddingLeft:20,height:60,position:"relative",fontFamily:"monospace",fontWeight:"bold",outline:"none",color:v.black}}),r.a.createElement("div",null,c))}));var Gt=function(e){e.username;var t=e.onClick,a=Object(be.a)(e,["username","onClick"]),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"stac_attak",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://placekitten.com/g/50/50",a=Object(n.useState)(""),r=Object(pe.a)(a,2),o=r[0],c=r[1],i=Object(n.useState)(!0),l=Object(pe.a)(i,2),s=l[0],u=l[1],d=Object(n.useState)(!1),m=Object(pe.a)(d,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){function t(){return(t=Object(S.a)(T.a.mark((function e(t){var a,n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://www.instagram.com/".concat(t,"/?__a=1"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,c(r.graphql.user.profile_pic_url),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p(!0);case 14:u(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}u(!0),e.length>0&&function(e){t.apply(this,arguments)}(e)}),[e]),Object(n.useEffect)((function(){f&&c(t)}),[f]),[s,o]}(),c=Object(pe.a)(o,2),i=(c[0],c[1]);return r.a.createElement("div",{className:"hoverAppear moreOpacity",style:{zIndex:1,position:"relative",marginLeft:10},onClick:t},r.a.createElement(ke,Object.assign({src:i},a,{style:{filter:"grayscale(1)",borderRadius:40,padding:10}})))};Gt.defaultProps={username:"stac_attak",onClick:function(){}};var Ft=Gt,Ut=function(e){var t=e.dispatch,a=Object(n.useState)(0),r=Object(pe.a)(a,2),o=r[0];r[1];return Object(n.useEffect)((function(){function e(e){t({type:"SET_SCROLL_Y",scrollY:window.scrollY})}return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[o]),null};Ut.propTypes={dispatch:zt.a.func.isRequired};var Yt=Object(u.b)()(Ut),Ht=Object(u.b)((function(e){var t=e.currentTab,a=e.bubbleSrc;return{currentTab:t,background:e.theme,imgSrc:a,allLoaded:e.allImagesLoaded}}))((function(e){e.dispatch,e.currentTab;var t=e.background,a=e.imgSrc,o=e.allLoaded,c=Object(me.e)(),i=Object(me.f)(),l=Object(n.useState)(!1),s=Object(pe.a)(l,2),u=s[0],d=s[1],m=function(e){var t=e.path;i.pathname.includes(t)||c.push(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"Header",style:{display:"flex",transition:"opacity 300ms",position:"relative",top:0,width:"100vw",justifyContent:"stretch"}},r.a.createElement(Yt,null),r.a.createElement("div",null),r.a.createElement("div",{id:"Tabs",style:{display:"flex",alignItems:"center",width:"100vw",justifyContent:"space-between",position:"absolute",zIndex:1,transition:"opacity 300ms",background:o?t:"transparent"}},r.a.createElement(ke,{onLoad:function(){return d(!0)},id:"header-image",className:ge({loaded:u}),src:a,style:{position:"absolute",transform:"rotate(180deg)",width:"100vw",top:u?30:0,minWidth:1e3}}),r.a.createElement(Ft,{className:"SocialIcon",onClick:function(){return m({path:"about"})}}),r.a.createElement(at,null))))})),Jt=Object(u.b)((function(e){return{currentTab:e.currentTab}}))((function(e){var t=e.dispatch,a=(e.currentTab,Object(me.g)());return Object(n.useEffect)((function(){a.currentTab?t(le(a.currentTab)):t(le("about"))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{exact:!0,path:"/",component:Tt}),r.a.createElement(me.a,{exact:!0,path:"/about",component:Tt}),r.a.createElement(me.a,{exact:!0,path:"/skills",component:It}),r.a.createElement(me.a,{exact:!0,path:"/contact",component:qt}),r.a.createElement(me.a,{component:Mt}),r.a.createElement(st,null))})),Vt=function(){return Object(n.useEffect)((function(){document.body.style.background=v.black2}),[]),r.a.createElement(fe.a,null,r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(Ht,null),r.a.createElement(me.a,{path:"/:currentTab",component:Jt}),r.a.createElement(me.a,{exact:!0,path:"/",component:Jt})))};a(87),a(88),a(89),a(90),a(91),a(92);l.a.initialize({"UA-1234567890":{}});var Kt=Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALL_IMAGES_LOADED":return Object(b.a)({},e,{allImagesLoaded:t.done});case"SET_CURRENT_TAB":return Object(b.a)({},e,{currentTab:t.title,bubbleSrc:t.img,theme:t.color});case"SET_SCROLL_Y":return Object(b.a)({},e,{scrollY:t.scrollY});case"SET_PROJECT_ISSUES":return Object(b.a)({},e,{issues:t.issues});case"SET_QUEUED_IMAGES":return Object(b.a)({},e,{queuedImages:t.queuedImages});default:return Object(b.a)({},e)}}),Object(s.c)(Object(s.a)(d.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})),Qt=Object(i.a)();c.a.render(r.a.createElement(u.a,{store:Kt},r.a.createElement(Vt,{history:Qt})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");m?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}]),[[76,1,2]]]);
//# sourceMappingURL=main.a4ec94a3.chunk.js.map