(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],Array(24).concat([function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=parseInt(e),n=parseInt(t);return Math.floor(Math.random()*n)+a}},function(e,t,a){e.exports=a.p+"static/media/blue.5bb50c30.svg"},,,function(e,t,a){e.exports=a.p+"static/media/blueBottom.f33e8fc6.svg"},function(e,t,a){e.exports=a.p+"static/media/blueLoose.10a8492f.svg"},function(e,t,a){e.exports=a.p+"static/media/white.6a72d127.svg"},function(e,t,a){e.exports=a.p+"static/media/whiteBottom.314d92a6.svg"},function(e,t,a){e.exports=a.p+"static/media/github.806dc612.svg"},function(e,t,a){e.exports=a.p+"static/media/npm.e47ef333.svg"},function(e,t,a){e.exports=a.p+"static/media/coffee.fbfcbb6d.svg"},,,function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var n=a(2),o=a(24),r=a(0);e.TypedText||(e.TypedText=new function(){this.typeSpeed=60,this.skipSpace=!0,this.currentPrompt="| ",this.donePrompt="> ",this.cursor="\u2588",this.setTypeSpeed=function(e){this.typeSpeed=e},this.setCursor=function(e){this.cursor=e},this.removeCursor=function(){this.setCursor("")},this.getStrokeSpeed=function(){return Object(o.a)(this.typeSpeed-50,this.typeSpeed+50)}});function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=Object(r.useState)(""),c=Object(n.a)(o,2),i=c[0],s=c[1],l=Object(r.useState)(""),u=Object(n.a)(l,2),d=u[0],m=u[1],f=Object(r.useState)(),p=Object(n.a)(f,2),b=p[0],h=p[1],g=Object(r.useState)(a),v=Object(n.a)(g,2),y=v[0];v[1];function E(){h(clearTimeout(b))}function k(e){E(),s(""),m(e)}Object(r.useEffect)((function(){if(d.length&&i.length!==d.length){var a=d.substring(0,i.length+1);e.TypedText.skipSpace&&" "===a[a.length-1]?s(a):h(setTimeout((function(){s(a),E()}),e.TypedText.getStrokeSpeed()))}else d.length&&(t(d),E())}),[d,i]),Object(r.useEffect)((function(){a!==y&&E()}),[a]),Object(r.useEffect)((function(){return function(){E()}}),[]);var j=Object(r.useMemo)((function(){return d.length&&b?[e.TypedText.currentPrompt,e.TypedText.cursor]:d.length?[e.TypedText.donePrompt,""]:["",""]}),[b,d]),w=Object(n.a)(j,2),O=w[0],x=w[1];return["".concat(O).concat(i).concat(x),m,i,k]}}).call(this,a(20))},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/orange.d7eeed52.svg"},function(e,t,a){e.exports=a.p+"static/media/orangeBottom.cae6311e.svg"},function(e,t,a){e.exports=a.p+"static/media/orangeLoose.2650fe82.svg"},function(e,t,a){e.exports=a.p+"static/media/purple.88491966.svg"},function(e,t,a){e.exports=a.p+"static/media/purpleBottom.0ec6f7f8.svg"},function(e,t,a){e.exports=a.p+"static/media/purpleLoose.d844fe66.svg"},function(e,t,a){e.exports=a.p+"static/media/red.e1d6c32c.svg"},function(e,t,a){e.exports=a.p+"static/media/redBottom.87653f8f.svg"},function(e,t,a){e.exports=a.p+"static/media/redLoose.4994d292.svg"},function(e,t,a){e.exports=a.p+"static/media/green.1812c204.svg"},function(e,t,a){e.exports=a.p+"static/media/greenBottom.492e7586.svg"},function(e,t,a){e.exports=a.p+"static/media/greenLoose.d2dcb53f.svg"},function(e,t,a){e.exports=a.p+"static/media/whiteLoose.d21be36a.svg"},function(e,t,a){e.exports=a.p+"static/media/stackoverflow.b2956979.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.2ee5e6e8.svg"},function(e,t,a){e.exports=a.p+"static/media/email.ad69acb4.svg"},function(e,t,a){e.exports=a.p+"static/media/california.d883da36.svg"},function(e,t,a){e.exports=a.p+"static/media/skills.56ec49cc.svg"},function(e,t,a){e.exports=a.p+"static/media/science.4a5f6f18.svg"},function(e,t,a){e.exports=a.p+"static/media/toolkit.5e001dc5.svg"},function(e,t,a){e.exports=a.p+"static/media/ownership.c39046a9.svg"},function(e,t,a){e.exports=a.p+"static/media/responsive_plain.9359e9bc.svg"},function(e,t,a){e.exports=a.p+"static/media/testing.2956887f.svg"},function(e,t,a){e.exports=a.p+"static/media/concerns.710d96c1.svg"},,,,function(e,t,a){e.exports=a(92)},,,,,function(e,t,a){"use strict";(function(e){var t=a(1),n=a(17),o=a(40),r=a(18),c=a(35),i=a(41);a(0),e.GA||(e.GA=new s);function s(){var e=this;this.trackers={},this.events={},this.globalOptions={},this.hasTrackers=function(){return Object.keys(e.trackers).length>0}}Object(i.a)(Error);var l=function(e){function t(e){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).call(this,"GoogleAnalytics.addEvent expects a STRING category as the first argument. ".concat(e?" You provided ".concat(e):"")))}return Object(c.a)(t,e),t}(Object(i.a)(Error));Object.defineProperty(s.prototype,"initialize",{writable:!1,value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("useGoogleAnalytics initializing with tracking codes ".concat(Object.keys(a))),this.globalOptions=Object(t.a)({},n);try{Object.keys(a).forEach((function(t){e.addTrackingCode(t,a[t])}))}catch(o){console.log("useGoogleAnalytics had an oopsie",o)}return this}}),s.prototype.addTrackingCode=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{this.trackers[e]=Object(t.a)({},a),console.log("useGoogleAnalytics added tracking code ".concat(e))}catch(n){console.log("useGoogleAnalytics had an oopsie",n)}return this},s.prototype.addEvent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{if(0===e.length)throw new l}catch(n){throw new l(e)}return this.events[e]||(this.events[e]=Object(t.a)({},a)),this.events[e]}}).call(this,a(20))},,,,,,function(e,t,a){e.exports=a.p+"static/media/black.425341d9.svg"},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),i=(a(78),a(15)),s=a(4),l=a(44),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m,f=a(1),p=a(13),b=(m={backgroundDark:"#2d2d2d",backgroundLight:"#4982e8",fontDark:"#2d2d2d",fontLight:"#dedede",about:"#6acb5d",skills:"#9642f5",contact:"#6acb5d",error:"#ff4136",aboutDark:"#af5514",skillsDark:"#2357b7",contactDark:"#7a10f3",red:"#ff4136",black:"#2d2d2d",black2:"#171717",white:"#dedede",white2:"#aaa",grey:"#9a9a9a",green:"#6acb5d",blue:"#4982e8",orange:"#db7923",purple:"#9642f5",purpleDark:"#7a10f3"},Object(p.a)(m,"".concat("#dedede","Dark"),"#9a9a9a"),Object(p.a)(m,"".concat("#db7923","Dark"),"#af5514"),Object(p.a)(m,"".concat("#4982e8","Dark"),"#2357b7"),Object(p.a)(m,"".concat("#9642f5","Dark"),"#7a10f3"),Object(p.a)(m,"".concat("#6acb5d","Dark"),"#63AB62"),m),h=b,g=a(25),v=a.n(g),y=a(28),E=a.n(y),k=a(29),j=a.n(k),w=a(16),O=a.n(w),x=a(26),T=a(17),S=a(45),I=a(46),C=a.n(I),N=a(47),L=a.n(N),P=a(48),A=a.n(P),_=a(49),D=a.n(_),R=a(50),B=a.n(R),M=a(51),W=a.n(M),G=a(52),q=a.n(G),z=a(53),H=a.n(z),U=a(54),Y=a.n(U),F=a(55),J=a.n(F),Q=a(56),K=a.n(Q),V=a(57),$=a.n(V),X=a(30),Z=a.n(X),ee=a(31),te=a.n(ee),ae=a(58),ne=a.n(ae),oe=function(){function e(){Object(T.a)(this,e)}return Object(S.a)(e,null,[{key:"from",value:function(t){return e.all[t]||e.all.white}},{key:"fromTab",value:function(t){return e.tabs[t]||e.tabs[t]}},{key:"all",get:function(){return{blue:{font:"#fff",color:h.blue,img:v.a,img2:E.a,img3:j.a},green:{font:"#fff",color:h.green,img:J.a,img2:K.a,img3:$.a},orange:{font:"#fff",color:h.orange,img:C.a,img2:L.a,img3:A.a},purple:{font:"#fff",color:h.purple,img:D.a,img2:B.a,img3:W.a},red:{font:"#fff",color:h.red,img:q.a,img2:H.a,img3:Y.a},white:{font:h.black,color:h.white,img:Z.a,img2:te.a,img3:ne.a}}}},{key:"tabs",get:function(){e.all;return{about:"green",error:"red",skills:"purple"}}}]),e}();var re=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={about:Object(f.a)({title:"about",desc:"This is what we show",path:"about"},oe.from("green")),skills:Object(f.a)({title:"skills",desc:"Some bowstaff skills",path:"skills"},oe.from("purple")),contact:Object(f.a)({title:"contact",desc:"Contact details",path:"contact"},oe.from("blue")),error:Object(f.a)({title:"error",desc:"The error page"},oe.from("red"))};return t?Object(f.a)({},a):a[e]?a[e]:a.error},ce=(re(!1,!0),function(e){var t=re(e);return Object(f.a)({type:"SET_CURRENT_TAB"},t)}),ie=function(e,t){return{type:"SET_QUEUED_IMAGES",queuedImages:e,isDone:t}},se=function(e){return function(t,a){var n,o,r=Object(f.a)({},a().queuedImages);(n=r,o=e,Object.keys(n).indexOf(o)>=0)||(r[e]=!1,t(ie(r)))}},le={bubbleSrc:v.a,currentTab:"about",theme:h.about,scrollY:0,issues:[],queuedImages:{},allImagesLoaded:!1};var ue=a(7),de=a(71),me=a(2),fe=a(10),pe=a(72);function be(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach((function(t){"string"===typeof t?e.push(t):t instanceof Array?e.push(be.apply(void 0,Object(pe.a)(t))):t instanceof Function?e.push(be(t())):t instanceof Object?Object.keys(t).forEach((function(a){t[a]&&e.push(a)})):t&&t.toString&&e.push(t.toString())})),e.join(" ")}var he=Object(s.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;var t=e.className,a=e.children,r=e.currentTab,c=e.id,i=e.transition,s=Object(fe.a)(e,["dispatch","className","children","currentTab","id","transition"]),l=function(e,t){var a=Object(n.useState)(!1),o=Object(me.a)(a,2),r=o[0],c=o[1],i=Object(n.useState)(),s=Object(me.a)(i,2),l=s[0],u=s[1];return Object(n.useEffect)((function(){c(!1)}),[t]),[r,function(){c(!1),u(setTimeout((function(){c(!0)}),e))},function(){clearTimeout(l)}]}(100,r),u=Object(me.a)(l,3),d=u[0],m=u[1],p=u[2],b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:250,r=Object(n.useMemo)((function(){var t={position:"relative",opacity:0,transition:"opacity ".concat(o+100,"ms")};return"fade"!==e&&(t=Object(f.a)({},t,{top:20,transition:"opacity ".concat(o+100,"ms, top ease-out ").concat(o,"ms")})),Object(f.a)({},a,{},t)}),[e,o]),c=Object(n.useState)(r),i=Object(me.a)(c,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){l(Object(f.a)({},r,{opacity:t?1:0,top:0}))}),[e,t]),s}(i,d,s.style);Object(n.useEffect)((function(){return m(),function(){return p()}}),[]);var h=be(["Transition",t,i],{done:d});return o.a.createElement("div",Object.assign({id:c,className:h},s,{style:b}),a)})),ge=a(23);function ve(e,t){var a=Object(n.useState)(!1),o=Object(me.a)(a,2),r=o[0],c=o[1];return Object(n.useEffect)((function(){t&&t.length&&e(r?function(e){return function(t,a){var n=Object(f.a)({},a().queuedImages);n[e]=!0;var o=Object.values(n),r=(o.length,o.reduce((function(e,t){return e&&t})));t(ie(n,r)),r&&t({type:"SET_ALL_IMAGES_LOADED",done:!0})}}(t):se(t))}),[r,t,e]),[r,c]}var ye=function(e){var t=e.alt,a=e.className,n=e.dispatch,r=e.id,c=e.loaded,i=e.onLoad,s=(e.scrollY,e.src),l=e.style,u=(e.test,Object(fe.a)(e,["alt","className","dispatch","id","loaded","onLoad","scrollY","src","style","test"])),d=ve(n,s),m=Object(me.a)(d,2),p=m[0],b=m[1],h=be(a,{hasLoaded:p}),g=(l.transform,Object(f.a)({},l,{opacity:c?1:0,transition:"opacity 300ms, top 400ms"}));return o.a.createElement("img",Object.assign({className:h,onLoad:function(e){b(!0),i(e)}},u,{src:s,id:r,alt:t,style:g}))};ye.defaultProps={alt:"image loading not supported",id:"",style:{},onLoad:function(){}};var Ee=Object(s.b)((function(e){return{scrollY:e.scrollY,loaded:e.allImagesLoaded}}))(ye),ke=(a(84),function(e){var t=e.children,a=e.leftPad,n=e.rightPad,r=be("Card",{single:t&&!t[0],leftPad:a,rightPad:n});return o.a.createElement("div",{className:r,style:{width:"100vw",maxWidth:1e3,margin:"0 auto",paddingBottom:"10vh",paddingTop:"10vh",display:"flex",justifyContent:"space-around"}},t&&t.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(je,{side:"left",padded:a},t&&t[0]),o.a.createElement(je,{side:"right",padded:n},t[1]&&t[1])),t&&!t[0]&&o.a.createElement(je,{padded:a||n},t))});function je(e){var t=e.children,a=e.padded,n=be("CardSide",e.side,{padded:a});return o.a.createElement("div",{className:n,style:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}},t)}ke.defaultProps={isTop:!1,light:!1};var we=ke;var Oe=function(e){var t=e.children,a=(e.dark,e.custom,e.isTop),r=e.isBottom,c=e.style,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",t=Object(n.useState)(""),a=Object(me.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(""),i=Object(me.a)(c,2),s=i[0],l=i[1],u=Object(n.useState)(""),d=Object(me.a)(u,2),m=d[0],f=d[1];return Object(n.useEffect)((function(){var t=oe.from(e),a=t.img,n=t.img2,o=t.img3;r(a),l(n),f(o)}),[e]),[o,s,m]}(e.breakColor),s=Object(me.a)(i,3),l=s[0],u=s[1],d=s[2],m=function(e){var t=Object(n.useState)({}),a=Object(me.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){r({minHeight:"".concat(e?75:100,"vh")})}),[e]),o}(r).minHeight,p=Object(ge.a)(100),b={width:"100vw",minWidth:1e3,position:"absolute",transition:"opacity 200ms ease-in",opacity:Object(me.a)(p,1)[0]?1:0},g={};return a?g.top="10vh":g.bottom="100%",o.a.createElement("div",{className:"Layer",style:Object(f.a)({background:"linear-gradient(".concat([h.black2,h.black].join(),")"),position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",paddingBottom:"30vh",paddingTop:"15vh"},c,{minHeight:m,color:h.white})},!a&&o.a.createElement(Ee,{src:l,style:Object(f.a)({},b,{bottom:"100%"})}),!a&&o.a.createElement(Ee,{src:u,style:Object(f.a)({},b,{top:0})}),o.a.createElement(Ee,{className:"floating",src:d,style:Object(f.a)({},b,{},g,{opacity:.7})}),o.a.createElement(Ee,{className:"floating-one80",src:d,style:Object(f.a)({},b,{},g,{opacity:.7})}),t)};Oe.defaultProps={isBottom:!1,isTop:!1,dark:!1,breakColor:"white"};var xe=Oe,Te=function(e){var t=e.project,a=t.title,n=t.src,r=t.link,c=t.body;return o.a.createElement("div",{className:"ProjectCard",style:{display:"flex",padding:10,boxShadow:"0 0 1px 1px rgba(0,0,0,0.2)",flexGrow:0,marginBottom:15}},o.a.createElement("div",{className:"noMobile noTablett",style:{opacity:.7,height:100}},o.a.createElement(Ee,{src:n,style:{maxWidth:200,background:h.white}})),o.a.createElement("div",{style:{paddingLeft:10,width:"100%"}},o.a.createElement("a",{href:r,target:"_blank"},o.a.createElement("strong",null,a)),o.a.createElement("code",{style:{marginTop:10}},c)))},Se=function(e){var t=e.projects,a=Object(n.useMemo)((function(){return t.map((function(e){return o.a.createElement(Te,{key:e.title,project:e})}))}),[t]);return o.a.createElement("div",{className:"ProjectCards",style:{minHeight:"50vh",maxWidth:1e3,margin:"0 auto",display:"flex",flexDirection:"column",width:"100%",padding:"0 5vw",boxSizing:"border-box"}},o.a.createElement("h2",{style:{textAlign:"center"}},"Some other projects..."),a)};Se.defaultProps={projects:[{title:"@taystack/js-helpers",src:"https://raw.githubusercontent.com/taystack/js-helpers/master/docs/JsHelpers.png",link:"https://github.com/taystack/js-helpers",body:"Small JavaScript library with some helper functions that I find useful. This is a work in progress and contributions are encouraged."},{title:"@taystack/use-timeout",src:"https://raw.githubusercontent.com/taystack/use-timeout/master/logo.png",link:"https://github.com/taystack/use-timeout",body:"React 16.8 Hook: Get a boolean value after an arbitrary timeout. Useful for rendering mounting components."},{title:"@taystack/use-leet",src:"https://raw.githubusercontent.com/taystack/use-leet/master/logo.png",link:"https://github.com/taystack/use-leet",body:"React 16.8 Hook: Leet-ify your text with leet speak. React hook turns your given text value into 1337 SP34K."}]};var Ie=Se,Ce=function(e){var t=e.background,a=e.color,n=e.children,r=e.style,c=e.id,i=Object(fe.a)(e,["background","color","children","style","id"]);return o.a.createElement("div",Object.assign({tabIndex:0},i,{id:c,className:be("Button hoverAppear moreOpacity",i.className),style:Object(f.a)({borderRadius:2,boxShadow:"0 1px 1px rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 100ms",outline:"none",background:t,color:a},r)}),n)};Ce.defaultProps={background:h.white,color:h.black,style:{}};var Ne=a(32),Le=a.n(Ne),Pe=a(33),Ae=a.n(Pe),_e=a(59),De=a.n(_e),Re=a(60),Be=a.n(Re),Me=a(61),We=a.n(Me),Ge="https://www.github.com/taystack",qe="".concat(Ge,"/website"),ze="https://www.npmjs.com/~taystack",He="https://www.linkedin.com/in/taylor-stackpole-71bb8762/",Ue="mailto:tay.stack@gmail.com+contact",Ye=function(e){var t=e.children,a=e.className,n=e.style;return o.a.createElement("div",{tabIndex:0,className:a,style:Object(f.a)({zIndex:1,padding:10,outline:"none"},n)},t)};Ye.defaultProps={style:{}};var Fe=function(e){var t=e.props,a=e.style;return o.a.createElement(Ee,Object.assign({},t,{src:Le.a,onClick:function(){return window.open(Ge,"_blank")},id:"github-link",className:"SocialIcon",style:a}))},Je=function(e){var t=e.props,a=e.style;return o.a.createElement(Ee,Object.assign({},t,{src:De.a,onClick:function(){return window.open("https://stackoverflow.com/users/1819265/taystack","_blank")},id:"stackoverflow-link",className:"SocialIcon",style:a}))},Qe=function(e){var t=e.props,a=e.style;return o.a.createElement(Ee,Object.assign({},t,{src:Be.a,onClick:function(){return window.open(He,"_blank")},id:"linkedin-link",className:"SocialIcon",style:a}))},Ke=function(e){var t=e.props,a=e.style;return o.a.createElement(Ee,Object.assign({},t,{src:Ae.a,onClick:function(){return window.open(ze,"_blank")},id:"npm-link",className:"SocialIcon",style:a}))},Ve=function(e){var t=e.props,a=e.style;return o.a.createElement(Ee,Object.assign({},t,{src:We.a,onClick:function(){return window.open(Ue,"_blank")},id:"npm-link",className:"SocialIcon",style:a}))},$e=function(e){var t=e.noMobile,a=e.noTablett,n=e.background,r=be("hoverAppear",{noMobile:t,noTablett:a});return o.a.createElement("div",{className:"SocialIcons",style:{display:"flex",alignItems:"center",justifyContent:"center",background:n}},o.a.createElement(Ye,{className:r},o.a.createElement(Ke,null)),o.a.createElement(Ye,{className:r},o.a.createElement(Fe,null)),o.a.createElement(Ye,{className:r},o.a.createElement(Je,null)),o.a.createElement(Ye,{className:r},o.a.createElement(Qe,null)))};$e.defaultProps={background:"transparent"};var Xe=$e,Ze=function(e){e.background,e.color;return o.a.createElement("div",{className:"CommunityIcons",style:{display:"flex",flexDirection:"column"}},o.a.createElement("div",{className:"card",style:{display:"flex",cursor:"pointer"}},[[Ke,h.red],[Fe,h.blue],[Je,h.orange],[Ve,h.purple]].map((function(e,t){var a=Object(me.a)(e,2),n=a[0],r=a[1];return o.a.createElement(Ye,{className:"MergeIcon hoverAppear moreOpacity",key:n,style:{background:r}},o.a.createElement(n,null))}))),o.a.createElement("div",{className:"card",style:{display:"flex",cursor:"pointer"}}))},et=(a(24),a(34)),tt=a.n(et),at=a(37),nt=function(e){var t=e.loading,a=e.queuedImages,r=Object(n.useState)(!0),c=Object(me.a)(r,2),i=c[0],s=c[1],l=Object(at.a)((function(){g("7H3 50F7W4R3 3NGIN33R")}),i),u=Object(me.a)(l,2),d=u[0],m=u[1],f=Object(at.a)((function(){t?v("Thinks you should turn off JavaScript"):setTimeout((function(){s(!1)}),500)}),i),p=Object(me.a)(f,4),b=p[0],g=p[1],v=(p[2],p[3]),y=Object(n.useMemo)((function(){return Object.keys(a).filter((function(e){return!a[e]}))[0]}),[a]);Object(n.useEffect)((function(){document.body.style.overflowY=i?"hidden":"scroll"}),[i]),Object(n.useEffect)((function(){m("Taylor Stackpole")}),[]);var E={position:"fixed",top:0,left:0,width:"100vw",height:"100vh",fontFamily:"monospace",zIndex:i?1e3:-1e3,opacity:i?1:0,transition:"opacity 1000ms, z-index 200ms 1050ms",background:h.black};return o.a.createElement("div",{className:"LoadingOverlay",onClick:function(){return s(!1)},style:E},o.a.createElement("div",{style:{}},o.a.createElement("span",{style:{fontSize:"0.5em"}},y),o.a.createElement("h2",{style:{color:h.white}},d),o.a.createElement("h2",{style:{color:h.white2}},b)))};nt.defaultProps={loading:!0,queuedImages:{}};Object(s.b)((function(e){return{loading:!e.allImagesLoaded,queuedImages:e.queuedImages}}))(nt);var ot=function(e){e.currentTab;var t=e.breakColor,a=(e.loading,Object(n.useMemo)((function(){return oe.from(t)}),[t])),r=a.img,c=a.img3,i=a.color,s=a.font,l={position:"absolute",width:"100vw",minWidth:1e3,bottom:"3vh"};return o.a.createElement(o.a.Fragment,null,o.a.createElement(xe,{breakColor:"orange",isBottom:!0},o.a.createElement(we,{rightPad:!0},o.a.createElement("div",null,o.a.createElement("h2",{id:"contact"},"Like what you see?"),o.a.createElement("p",null,"Follow this project and others on GitHub, or NPM."),o.a.createElement(Ze,{background:i,color:s,left:!0})),o.a.createElement("div",null,o.a.createElement(Ee,{src:tt.a}))),o.a.createElement(Ie,null)),o.a.createElement("div",{style:{position:"relative",height:"3vh",background:h.white}},o.a.createElement(Ee,{src:r,style:l}),o.a.createElement(Ee,{className:"floating",src:c,style:Object(f.a)({opacity:.5},l)}),o.a.createElement(Ee,{className:"floating-one80",src:c,style:Object(f.a)({opacity:.5},l)}),o.a.createElement("div",{style:{display:"flex",background:i,justifyContent:"space-between",alignItems:"center"}},o.a.createElement(Xe,null))))};ot.defaultProps={breakColor:"white"};var rt=Object(s.b)((function(e){var t=e.currentTab,a=e.allImagesLoaded;return{currentTab:t,breakColor:oe.fromTab(t),loading:!a}}))(ot),ct=a(62),it=a.n(ct),st=a(63),lt=a.n(st),ut=a(64),dt=a.n(ut),mt=a(65),ft=a.n(mt),pt=a(66),bt=a.n(pt),ht=a(67),gt=a.n(ht),vt=a(68),yt=a.n(vt),Et=a(69),kt=a.n(Et),jt=Object(s.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;return Object(n.useEffect)((function(){document.title="About | Taylor Stackpole the software engineer"}),[]),o.a.createElement(he,{transition:"fade-slide"},o.a.createElement(xe,{isTop:!0,breakColor:"green"},o.a.createElement(we,{leftPad:!0},o.a.createElement(Ee,{style:{minWidth:"50vw",maxHeight:"50vh"},src:it.a}),o.a.createElement("div",null,o.a.createElement("h1",null,"Hey, I'm Taylor"),o.a.createElement("p",null,"I'm a software engineer from California."),o.a.createElement("h2",null,"I build web apps")))),o.a.createElement(xe,{breakColor:"blue"},o.a.createElement(we,{rightPad:!0},o.a.createElement("div",null,o.a.createElement("h2",null,"I drink rocket fuel"),o.a.createElement("p",null,"I'm a straight-up JavaScript powerhouse. I've also spent years in agile development across many teams. I know how to estimate my throughput to deliver above and beyond what is expected. Point me at feature gaps if you want to fill them. Point me at a problem areas to make them go away.")),o.a.createElement(Ee,{src:lt.a})),o.a.createElement(we,{leftPad:!0},o.a.createElement(Ee,{test:!0,src:bt.a}),o.a.createElement("div",null,o.a.createElement("h2",null,"I take ownership"),o.a.createElement("p",null,"When a project is handed to me it becomes my baby. I'm proud of my work and do my best to encourage the same from my colleagues."))),o.a.createElement(we,{rightPad:!0},o.a.createElement("div",null,o.a.createElement("h2",null,"I look into the future"),o.a.createElement("p",null,"The JavaScript community moves fast. Real fast. That's why it's important for me to be a part of it. I'm always adding new skills to my tool belt."),o.a.createElement(Ze,null)),o.a.createElement(Ee,{src:ft.a}))),o.a.createElement(xe,{breakColor:"purple"},o.a.createElement(we,{leftPad:!0},o.a.createElement(Ee,{src:kt.a}),o.a.createElement("div",null,o.a.createElement("h2",null,"I modularize and optimize"),o.a.createElement("p",null,"The first step to optimizing a process is to define the moving parts. I've had to deal with enormous projects in my profession. The best projects to work on have clearly defined architectures, where each piece plays a clearly defined role. When things don't make sense, I communicate with colleagues until we build a roadmap to fix it."))),o.a.createElement(we,{rightPad:!0},o.a.createElement("div",null,o.a.createElement("h2",{id:"test-the-things"},"I test all the things"),o.a.createElement("p",null,"Meaningful test coverage is crucial to ensure code does what you think it does. I create small, dedicated modules that are perfect for testing in isolation, or mocking for other modules.\xa0",o.a.createElement("a",{href:"https://stackoverflow.com/questions/44769404/jest-spyon-function-called/46735186#46735186"},"I understand how to test."))),o.a.createElement(Ee,{src:yt.a}))),o.a.createElement(xe,{breakColor:"orange"},o.a.createElement(we,{leftPad:!0},o.a.createElement(Ee,{src:dt.a}),o.a.createElement("div",null,o.a.createElement("h2",{id:"designer"},"I designed this website"),o.a.createElement("p",null,"My greatest weakness as a web developer is design, but I love art. I build corporate apps, but I like building stuff like this. All of the images were designed as SVGs. That means each one is perfectly crisp down to the half-pixel on your retina device.",o.a.createElement("a",{target:"_blank",href:Ue},"Email me")," or ",o.a.createElement("a",{target:"_blank",href:qe},"visit this project")," if you have any suggestions."))),o.a.createElement(we,{rightPad:!0},o.a.createElement("div",null,o.a.createElement("h2",{id:"responsive"},"I understand responsive design"),o.a.createElement("p",null,"This website is responsive. I'm guessing it works on your device right now. Even if you turn off JavaScript this website will still work. I'm all about making content available to users so I research the best, light-weight methods of presentation. I've been employing ",o.a.createElement("code",null,"flexbox")," with ",o.a.createElement("code",null,"@media")," query layouts for years.")),o.a.createElement(Ee,{src:gt.a}))))}));a(6),Object(s.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;var t=e.onClick,a=e.tab,n=e.currentTab,r=(e.show,Object(fe.a)(e,["dispatch","onClick","tab","currentTab","show"])),c=a.title,i=be("TabItem hoverAppear",{active:c===n});return o.a.createElement("div",Object.assign({},r,{className:i,onClick:function(e){e.stopPropagation(),t(a)},style:{display:"flex",alignItems:"center",overflow:"hidden",justifyContent:"space-between",paddingRight:20,paddingLeft:20,height:60,position:"relative",fontFamily:"monospace",fontWeight:"bold",outline:"none",color:h.black}}),o.a.createElement("div",null,c))}));var wt=function(e){e.username;var t=e.onClick,a=Object(fe.a)(e,["username","onClick"]),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"stac_attak",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://placekitten.com/g/50/50",a=Object(n.useState)(""),o=Object(me.a)(a,2),r=o[0],c=o[1],i=Object(n.useState)(!0),s=Object(me.a)(i,2),l=s[0],u=s[1],d=Object(n.useState)(!1),m=Object(me.a)(d,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){function t(){return(t=Object(x.a)(O.a.mark((function e(t){var a,n,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://www.instagram.com/".concat(t,"/?__a=1"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,c(o.graphql.user.profile_pic_url),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p(!0);case 14:u(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}u(!0),e.length>0&&function(e){t.apply(this,arguments)}(e)}),[e]),Object(n.useEffect)((function(){f&&c(t)}),[f]),[l,r]}(),c=Object(me.a)(r,2),i=c[0],s=c[1];return o.a.createElement("div",{className:"hoverAppear moreOpacity",style:{zIndex:1,position:"relative",marginLeft:10},onClick:t},o.a.createElement(Ee,Object.assign({src:s},a,{style:{filter:"grayscale(1)",borderRadius:40,padding:10,opacity:i?0:1}})))};wt.defaultProps={username:"stac_attak",onClick:function(){}};var Ot=wt,xt=Object(s.b)((function(e){var t=e.currentTab,a=e.bubbleSrc;return{currentTab:t,background:e.theme,imgSrc:a,allLoaded:e.allImagesLoaded}}))((function(e){e.dispatch,e.currentTab;var t=e.background,a=e.imgSrc,r=e.allLoaded,c=Object(ue.e)(),i=Object(ue.f)(),s=Object(n.useState)(!1),l=Object(me.a)(s,2),u=l[0],d=l[1],m=function(e){var t=e.path;i.pathname.includes(t)||c.push(t)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"Header",style:{display:"flex",transition:"opacity 300ms",position:"relative",top:0,width:"100vw",justifyContent:"stretch"}},o.a.createElement("div",{id:"Tabs",style:{display:"flex",alignItems:"center",width:"100vw",justifyContent:"space-between",position:"absolute",zIndex:1,transition:"opacity 300ms",background:r?t:"transparent"}},o.a.createElement(Ee,{onLoad:function(){return d(!0)},id:"header-image",className:be({loaded:u}),src:a,style:{position:"absolute",transform:"rotate(180deg)",width:"100vw",top:u?30:0,minWidth:1e3}}),o.a.createElement(Ot,{className:"SocialIcon",onClick:function(){return m({path:"about"})}}),o.a.createElement(Xe,null))))})),Tt=Object(s.b)((function(e){return{currentTab:e.currentTab}}))((function(e){var t=e.dispatch,a=(e.currentTab,Object(ue.g)());return Object(n.useEffect)((function(){a.currentTab?t(ce(a.currentTab)):t(ce("about"))}),[a]),o.a.createElement(o.a.Fragment,null,o.a.createElement(ue.a,{exact:!0,path:"/",component:jt}),o.a.createElement(ue.a,{exact:!0,path:"/about",component:jt}),o.a.createElement(rt,null))})),St=function(){return Object(n.useEffect)((function(){document.body.style.background=h.black2}),[]),o.a.createElement(de.a,{basename:"/"},o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(xt,null),o.a.createElement(ue.a,{path:"/:currentTab",component:Tt}),o.a.createElement(ue.a,{exact:!0,path:"/",component:Tt})))},It=(a(86),a(87),a(88),a(89),a(90),a(91),Object(i.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALL_IMAGES_LOADED":return Object(f.a)({},e,{allImagesLoaded:t.done});case"SET_CURRENT_TAB":return Object(f.a)({},e,{currentTab:t.title,bubbleSrc:t.img,theme:t.color});case"SET_SCROLL_Y":return Object(f.a)({},e,{scrollY:t.scrollY});case"SET_PROJECT_ISSUES":return Object(f.a)({},e,{issues:t.issues});case"SET_QUEUED_IMAGES":return Object(f.a)({},e,{queuedImages:t.queuedImages});default:return Object(f.a)({},e)}}),Object(i.c)(Object(i.a)(l.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})));c.a.render(o.a.createElement(s.a,{store:It},o.a.createElement(St,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/website",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/website","/service-worker.js");u?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()}]),[[73,1,2]]]);
//# sourceMappingURL=main.f1f6af15.chunk.js.map