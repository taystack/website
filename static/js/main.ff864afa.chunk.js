(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],Array(24).concat([function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=parseInt(e),n=parseInt(t);return Math.floor(Math.random()*n)+a}},function(e,t,a){e.exports=a.p+"static/media/blue.5bb50c30.svg"},,,function(e,t,a){e.exports=a.p+"static/media/blueBottom.f33e8fc6.svg"},function(e,t,a){e.exports=a.p+"static/media/blueLoose.10a8492f.svg"},function(e,t,a){e.exports=a.p+"static/media/white.6a72d127.svg"},function(e,t,a){e.exports=a.p+"static/media/whiteBottom.314d92a6.svg"},function(e,t,a){e.exports=a.p+"static/media/github.806dc612.svg"},function(e,t,a){e.exports=a.p+"static/media/npm.e47ef333.svg"},function(e,t,a){e.exports=a.p+"static/media/coffee.fbfcbb6d.svg"},,,function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return o}));var n=a(2),r=a(24),c=a(0);e.TypedText||(e.TypedText=new function(){this.typeSpeed=60,this.skipSpace=!0,this.currentPrompt="| ",this.donePrompt="> ",this.cursor="\u2588",this.setTypeSpeed=function(e){this.typeSpeed=e},this.setCursor=function(e){this.cursor=e},this.removeCursor=function(){this.setCursor("")},this.getStrokeSpeed=function(){return Object(r.a)(this.typeSpeed-50,this.typeSpeed+50)}});function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(c.useState)(""),o=Object(n.a)(r,2),i=o[0],s=o[1],l=Object(c.useState)(""),u=Object(n.a)(l,2),d=u[0],m=u[1],p=Object(c.useState)(),f=Object(n.a)(p,2),b=f[0],h=f[1],g=Object(c.useState)(a),v=Object(n.a)(g,2),y=v[0];v[1];function E(){h(clearTimeout(b))}function j(e){E(),s(""),m(e)}Object(c.useEffect)((function(){if(d.length&&i.length!==d.length){var a=d.substring(0,i.length+1);e.TypedText.skipSpace&&" "===a[a.length-1]?s(a):h(setTimeout((function(){s(a),E()}),e.TypedText.getStrokeSpeed()))}else d.length&&(t(d),E())}),[d,i]),Object(c.useEffect)((function(){a!==y&&E()}),[a]),Object(c.useEffect)((function(){return function(){E()}}),[]);var k=Object(c.useMemo)((function(){return d.length&&b?[e.TypedText.currentPrompt,e.TypedText.cursor]:d.length?[e.TypedText.donePrompt,""]:["",""]}),[b,d]),O=Object(n.a)(k,2),w=O[0],x=O[1];return["".concat(w).concat(i).concat(x),m,i,j]}}).call(this,a(20))},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/orange.d7eeed52.svg"},function(e,t,a){e.exports=a.p+"static/media/orangeBottom.cae6311e.svg"},function(e,t,a){e.exports=a.p+"static/media/orangeLoose.2650fe82.svg"},function(e,t,a){e.exports=a.p+"static/media/purple.88491966.svg"},function(e,t,a){e.exports=a.p+"static/media/purpleBottom.0ec6f7f8.svg"},function(e,t,a){e.exports=a.p+"static/media/purpleLoose.d844fe66.svg"},function(e,t,a){e.exports=a.p+"static/media/red.e1d6c32c.svg"},function(e,t,a){e.exports=a.p+"static/media/redBottom.87653f8f.svg"},function(e,t,a){e.exports=a.p+"static/media/redLoose.4994d292.svg"},function(e,t,a){e.exports=a.p+"static/media/green.1812c204.svg"},function(e,t,a){e.exports=a.p+"static/media/greenBottom.492e7586.svg"},function(e,t,a){e.exports=a.p+"static/media/greenLoose.d2dcb53f.svg"},function(e,t,a){e.exports=a.p+"static/media/whiteLoose.d21be36a.svg"},function(e,t,a){e.exports=a.p+"static/media/stackoverflow.b2956979.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.2ee5e6e8.svg"},function(e,t,a){e.exports=a.p+"static/media/email.ad69acb4.svg"},function(e,t,a){e.exports=a.p+"static/media/california.d883da36.svg"},function(e,t,a){e.exports=a.p+"static/media/skills.56ec49cc.svg"},function(e,t,a){e.exports=a.p+"static/media/science.4a5f6f18.svg"},function(e,t,a){e.exports=a.p+"static/media/toolkit.5e001dc5.svg"},function(e,t,a){e.exports=a.p+"static/media/ownership.c39046a9.svg"},function(e,t,a){e.exports=a.p+"static/media/responsive_plain.9359e9bc.svg"},function(e,t,a){e.exports=a.p+"static/media/testing.2956887f.svg"},function(e,t,a){e.exports=a.p+"static/media/concerns.710d96c1.svg"},,,,function(e,t,a){e.exports=a(92)},,,,,function(e,t,a){"use strict";(function(e){var t=a(1),n=a(17),r=a(41),c=a(18),o=a(35),i=a(40);a(0),e.GA||(e.GA=new s);function s(){var e=this;this.trackers={},this.events={},this.globalOptions={},this.hasTrackers=function(){return Object.keys(e.trackers).length>0}}Object(i.a)(Error);var l=function(e){function t(e){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this,"GoogleAnalytics.addEvent expects a STRING category as the first argument. ".concat(e?" You provided ".concat(e):"")))}return Object(o.a)(t,e),t}(Object(i.a)(Error));Object.defineProperty(s.prototype,"initialize",{writable:!1,value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("useGoogleAnalytics initializing with tracking codes ".concat(Object.keys(a))),this.globalOptions=Object(t.a)({},n);try{Object.keys(a).forEach((function(t){e.addTrackingCode(t,a[t])}))}catch(r){console.log("useGoogleAnalytics had an oopsie",r)}return this}}),s.prototype.addTrackingCode=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{this.trackers[e]=Object(t.a)({},a),console.log("useGoogleAnalytics added tracking code ".concat(e))}catch(n){console.log("useGoogleAnalytics had an oopsie",n)}return this},s.prototype.addEvent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{if(0===e.length)throw new l}catch(n){throw new l(e)}return this.events[e]||(this.events[e]=Object(t.a)({},a)),this.events[e]}}).call(this,a(20))},,,,,,function(e,t,a){e.exports=a.p+"static/media/black.425341d9.svg"},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=a(7),s=(a(78),a(15)),l=a(4),u=a(44);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d,m=a(1),p=a(13),f=(d={backgroundDark:"#2d2d2d",backgroundLight:"#4982e8",fontDark:"#2d2d2d",fontLight:"#dedede",about:"#6acb5d",skills:"#9642f5",contact:"#6acb5d",error:"#ff4136",aboutDark:"#af5514",skillsDark:"#2357b7",contactDark:"#7a10f3",red:"#ff4136",black:"#2d2d2d",black2:"#171717",white:"#dedede",white2:"#aaa",grey:"#9a9a9a",green:"#6acb5d",blue:"#4982e8",orange:"#db7923",purple:"#9642f5",purpleDark:"#7a10f3"},Object(p.a)(d,"".concat("#dedede","Dark"),"#9a9a9a"),Object(p.a)(d,"".concat("#db7923","Dark"),"#af5514"),Object(p.a)(d,"".concat("#4982e8","Dark"),"#2357b7"),Object(p.a)(d,"".concat("#9642f5","Dark"),"#7a10f3"),Object(p.a)(d,"".concat("#6acb5d","Dark"),"#63AB62"),d),b=f,h=a(25),g=a.n(h),v=a(28),y=a.n(v),E=a(29),j=a.n(E),k=a(16),O=a.n(k),w=a(26),x=a(17),T=a(45),S=a(46),I=a.n(S),C=a(47),N=a.n(C),_=a(48),L=a.n(_),P=a(49),A=a.n(P),D=a(50),B=a.n(D),M=a(51),R=a.n(M),G=a(52),q=a.n(G),W=a(53),z=a.n(W),H=a(54),U=a.n(H),Y=a(55),F=a.n(Y),J=a(56),X=a.n(J),V=a(57),Q=a.n(V),K=a(30),$=a.n(K),Z=a(31),ee=a.n(Z),te=a(58),ae=a.n(te),ne=function(){function e(){Object(x.a)(this,e)}return Object(T.a)(e,null,[{key:"from",value:function(t){return e.all[t]||e.all.white}},{key:"fromTab",value:function(t){return e.tabs[t]||e.tabs[t]}},{key:"all",get:function(){return{blue:{font:"#fff",color:b.blue,img:g.a,img2:y.a,img3:j.a},green:{font:"#fff",color:b.green,img:F.a,img2:X.a,img3:Q.a},orange:{font:"#fff",color:b.orange,img:I.a,img2:N.a,img3:L.a},purple:{font:"#fff",color:b.purple,img:A.a,img2:B.a,img3:R.a},red:{font:"#fff",color:b.red,img:q.a,img2:z.a,img3:U.a},white:{font:b.black,color:b.white,img:$.a,img2:ee.a,img3:ae.a}}}},{key:"tabs",get:function(){e.all;return{about:"green",error:"red",skills:"purple"}}}]),e}();var re=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={about:Object(m.a)({title:"about",desc:"This is what we show",path:"about"},ne.from("green")),skills:Object(m.a)({title:"skills",desc:"Some bowstaff skills",path:"skills"},ne.from("purple")),contact:Object(m.a)({title:"contact",desc:"Contact details",path:"contact"},ne.from("blue")),error:Object(m.a)({title:"error",desc:"The error page"},ne.from("red"))};return t?Object(m.a)({},a):a[e]?a[e]:a.error},ce=(re(!1,!0),function(e){var t=re(e);return Object(m.a)({type:"SET_CURRENT_TAB"},t)}),oe=function(e,t){return{type:"SET_QUEUED_IMAGES",queuedImages:e,isDone:t}},ie=function(e){return function(t,a){var n,r,c=Object(m.a)({},a().queuedImages);(n=c,r=e,Object.keys(n).indexOf(r)>=0)||(c[e]=!1,t(oe(c)))}},se={bubbleSrc:g.a,currentTab:"about",theme:b.about,scrollY:0,issues:[],queuedImages:{},allImagesLoaded:!1};var le=a(8),ue=a(71),de=a(2),me=a(10),pe=a(72);function fe(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach((function(t){"string"===typeof t?e.push(t):t instanceof Array?e.push(fe.apply(void 0,Object(pe.a)(t))):t instanceof Function?e.push(fe(t())):t instanceof Object?Object.keys(t).forEach((function(a){t[a]&&e.push(a)})):t&&t.toString&&e.push(t.toString())})),e.join(" ")}var be=Object(l.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;var t=e.className,a=e.children,c=e.currentTab,o=e.id,i=e.transition,s=Object(me.a)(e,["dispatch","className","children","currentTab","id","transition"]),l=function(e,t){var a=Object(n.useState)(!1),r=Object(de.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(),s=Object(de.a)(i,2),l=s[0],u=s[1];return Object(n.useEffect)((function(){o(!1)}),[t]),[c,function(){o(!1),u(setTimeout((function(){o(!0)}),e))},function(){clearTimeout(l)}]}(100,c),u=Object(de.a)(l,3),d=u[0],p=u[1],f=u[2],b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:250,c=Object(n.useMemo)((function(){var t={position:"relative",opacity:0,transition:"opacity ".concat(r+100,"ms")};return"fade"!==e&&(t=Object(m.a)({},t,{top:20,transition:"opacity ".concat(r+100,"ms, top ease-out ").concat(r,"ms")})),Object(m.a)({},a,{},t)}),[e,r]),o=Object(n.useState)(c),i=Object(de.a)(o,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){l(Object(m.a)({},c,{opacity:t?1:0,top:0}))}),[e,t]),s}(i,d,s.style);Object(n.useEffect)((function(){return p(),function(){return f()}}),[]);var h=fe(["Transition",t,i],{done:d});return r.a.createElement("div",Object.assign({id:o,className:h},s,{style:b}),a)})),he=a(23);function ge(e,t){var a=Object(n.useState)(!1),r=Object(de.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){t&&t.length&&e(c?function(e){return function(t,a){var n=Object(m.a)({},a().queuedImages);n[e]=!0;var r=Object.values(n),c=(r.length,r.reduce((function(e,t){return e&&t})));t(oe(n,c)),c&&t({type:"SET_ALL_IMAGES_LOADED",done:!0})}}(t):ie(t))}),[c,t,e]),[c,o]}var ve=function(e){var t=e.alt,a=e.className,n=e.dispatch,c=e.id,o=e.loaded,i=e.onLoad,s=(e.scrollY,e.src),l=e.style,u=(e.test,Object(me.a)(e,["alt","className","dispatch","id","loaded","onLoad","scrollY","src","style","test"])),d=ge(n,s),p=Object(de.a)(d,2),f=p[0],b=p[1],h=fe(a,{hasLoaded:f}),g=(l.transform,Object(m.a)({},l,{opacity:o?1:0,transition:"opacity 300ms, top 400ms"}));return r.a.createElement("img",Object.assign({className:h,onLoad:function(e){b(!0),i(e)}},u,{src:s,id:c,alt:t,style:g}))};ve.defaultProps={alt:"image loading not supported",id:"",style:{},onLoad:function(){}};var ye=Object(l.b)((function(e){return{scrollY:e.scrollY,loaded:e.allImagesLoaded}}))(ve),Ee=(a(84),function(e){var t=e.children,a=e.leftPad,n=e.rightPad,c=fe("Card",{single:t&&!t[0],leftPad:a,rightPad:n});return r.a.createElement("div",{className:c,style:{width:"100vw",maxWidth:1e3,margin:"0 auto",paddingBottom:"10vh",paddingTop:"10vh",display:"flex",justifyContent:"space-around"}},t&&t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(je,{side:"left",padded:a},t&&t[0]),r.a.createElement(je,{side:"right",padded:n},t[1]&&t[1])),t&&!t[0]&&r.a.createElement(je,{padded:a||n},t))});function je(e){var t=e.children,a=e.padded,n=fe("CardSide",e.side,{padded:a});return r.a.createElement("div",{className:n,style:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}},t)}Ee.defaultProps={isTop:!1,light:!1};var ke=Ee;var Oe=function(e){var t=e.children,a=(e.dark,e.custom,e.isTop),c=e.isBottom,o=e.style,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",t=Object(n.useState)(""),a=Object(de.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(de.a)(o,2),s=i[0],l=i[1],u=Object(n.useState)(""),d=Object(de.a)(u,2),m=d[0],p=d[1];return Object(n.useEffect)((function(){var t=ne.from(e),a=t.img,n=t.img2,r=t.img3;c(a),l(n),p(r)}),[e]),[r,s,m]}(e.breakColor),s=Object(de.a)(i,3),l=s[0],u=s[1],d=s[2],p=function(e){var t=Object(n.useState)({}),a=Object(de.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){c({minHeight:"".concat(e?75:100,"vh")})}),[e]),r}(c).minHeight,f=Object(he.a)(100),h={width:"100vw",minWidth:1e3,position:"absolute",transition:"opacity 200ms ease-in",opacity:Object(de.a)(f,1)[0]?1:0},g={};return a?g.top="10vh":g.bottom="100%",r.a.createElement("div",{className:"Layer",style:Object(m.a)({background:"linear-gradient(".concat([b.black2,b.black].join(),")"),position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",paddingBottom:"30vh",paddingTop:"15vh"},o,{minHeight:p,color:b.white})},!a&&r.a.createElement(ye,{src:l,style:Object(m.a)({},h,{bottom:"100%"})}),!a&&r.a.createElement(ye,{src:u,style:Object(m.a)({},h,{top:0})}),r.a.createElement(ye,{className:"floating",src:d,style:Object(m.a)({},h,{},g,{opacity:.7})}),r.a.createElement(ye,{className:"floating-one80",src:d,style:Object(m.a)({},h,{},g,{opacity:.7})}),t)};Oe.defaultProps={isBottom:!1,isTop:!1,dark:!1,breakColor:"white"};var we=Oe,xe=function(e){var t=e.project,a=t.title,n=t.src,c=t.link,o=t.body;return r.a.createElement("div",{className:"ProjectCard",style:{display:"flex",padding:10,boxShadow:"0 0 1px 1px rgba(0,0,0,0.2)",flexGrow:0,marginBottom:15}},r.a.createElement("div",{className:"noMobile noTablett",style:{opacity:.7,height:100}},r.a.createElement(ye,{src:n,style:{maxWidth:200,background:b.white}})),r.a.createElement("div",{style:{paddingLeft:10,width:"100%"}},r.a.createElement("a",{href:c,target:"_blank"},r.a.createElement("strong",null,a)),r.a.createElement("code",{style:{marginTop:10}},o)))},Te=function(e){var t=e.projects,a=Object(n.useMemo)((function(){return t.map((function(e){return r.a.createElement(xe,{key:e.title,project:e})}))}),[t]);return r.a.createElement("div",{className:"ProjectCards",style:{minHeight:"50vh",maxWidth:1e3,margin:"0 auto",display:"flex",flexDirection:"column",width:"100%",padding:"0 5vw",boxSizing:"border-box"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Some other projects..."),a)};Te.defaultProps={projects:[{title:"@taystack/js-helpers",src:"https://raw.githubusercontent.com/taystack/js-helpers/master/docs/JsHelpers.png",link:"https://github.com/taystack/js-helpers",body:"Small JavaScript library with some helper functions that I find useful. This is a work in progress and contributions are encouraged."},{title:"@taystack/use-timeout",src:"https://raw.githubusercontent.com/taystack/use-timeout/master/logo.png",link:"https://github.com/taystack/use-timeout",body:"React 16.8 Hook: Get a boolean value after an arbitrary timeout. Useful for rendering mounting components."},{title:"@taystack/use-leet",src:"https://raw.githubusercontent.com/taystack/use-leet/master/logo.png",link:"https://github.com/taystack/use-leet",body:"React 16.8 Hook: Leet-ify your text with leet speak. React hook turns your given text value into 1337 SP34K."}]};var Se=Te,Ie=function(e){var t=e.background,a=e.color,n=e.children,c=e.style,o=e.id,i=Object(me.a)(e,["background","color","children","style","id"]);return r.a.createElement("div",Object.assign({tabIndex:0},i,{id:o,className:fe("Button hoverAppear moreOpacity",i.className),style:Object(m.a)({borderRadius:2,boxShadow:"0 1px 1px rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 100ms",outline:"none",background:t,color:a},c)}),n)};Ie.defaultProps={background:b.white,color:b.black,style:{}};var Ce=a(32),Ne=a.n(Ce),_e=a(33),Le=a.n(_e),Pe=a(59),Ae=a.n(Pe),De=a(60),Be=a.n(De),Me=a(61),Re=a.n(Me),Ge="https://www.github.com/taystack",qe="".concat(Ge,"/website"),We="https://www.npmjs.com/~taystack",ze="https://www.linkedin.com/in/taylor-stackpole-71bb8762/",He="mailto:tay.stack@gmail.com+contact",Ue=function(e){var t=e.children,a=e.className,n=e.style;return r.a.createElement("div",{tabIndex:0,className:a,style:Object(m.a)({zIndex:1,padding:10,outline:"none"},n)},t)};Ue.defaultProps={style:{}};var Ye=function(e){var t=e.props,a=e.style;return r.a.createElement(ye,Object.assign({},t,{src:Ne.a,onClick:function(){return window.open(Ge,"_blank")},id:"github-link",className:"SocialIcon",style:a}))},Fe=function(e){var t=e.props,a=e.style;return r.a.createElement(ye,Object.assign({},t,{src:Ae.a,onClick:function(){return window.open("https://stackoverflow.com/users/1819265/taystack","_blank")},id:"stackoverflow-link",className:"SocialIcon",style:a}))},Je=function(e){var t=e.props,a=e.style;return r.a.createElement(ye,Object.assign({},t,{src:Be.a,onClick:function(){return window.open(ze,"_blank")},id:"linkedin-link",className:"SocialIcon",style:a}))},Xe=function(e){var t=e.props,a=e.style;return r.a.createElement(ye,Object.assign({},t,{src:Le.a,onClick:function(){return window.open(We,"_blank")},id:"npm-link",className:"SocialIcon",style:a}))},Ve=function(e){var t=e.props,a=e.style;return r.a.createElement(ye,Object.assign({},t,{src:Re.a,onClick:function(){return window.open(He,"_blank")},id:"npm-link",className:"SocialIcon",style:a}))},Qe=function(e){var t=e.noMobile,a=e.noTablett,n=e.background,c=fe("hoverAppear",{noMobile:t,noTablett:a});return r.a.createElement("div",{className:"SocialIcons",style:{display:"flex",alignItems:"center",justifyContent:"center",background:n}},r.a.createElement(Ue,{className:c},r.a.createElement(Xe,null)),r.a.createElement(Ue,{className:c},r.a.createElement(Ye,null)),r.a.createElement(Ue,{className:c},r.a.createElement(Fe,null)),r.a.createElement(Ue,{className:c},r.a.createElement(Je,null)))};Qe.defaultProps={background:"transparent"};var Ke=Qe,$e=function(e){e.background,e.color;return r.a.createElement("div",{className:"CommunityIcons",style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"card",style:{display:"flex",cursor:"pointer"}},[[Xe,b.red],[Ye,b.blue],[Fe,b.orange],[Ve,b.purple]].map((function(e,t){var a=Object(de.a)(e,2),n=a[0],c=a[1];return r.a.createElement(Ue,{className:"MergeIcon hoverAppear moreOpacity",key:n,style:{background:c}},r.a.createElement(n,null))}))),r.a.createElement("div",{className:"card",style:{display:"flex",cursor:"pointer"}}))},Ze=(a(24),a(34)),et=a.n(Ze),tt=a(37),at=function(e){var t=e.loading,a=e.queuedImages,c=Object(n.useState)(!0),o=Object(de.a)(c,2),i=o[0],s=o[1],l=Object(tt.a)((function(){g("7H3 50F7W4R3 3NGIN33R")}),i),u=Object(de.a)(l,2),d=u[0],m=u[1],p=Object(tt.a)((function(){t?v("Thinks you should turn off JavaScript"):setTimeout((function(){s(!1)}),500)}),i),f=Object(de.a)(p,4),h=f[0],g=f[1],v=(f[2],f[3]),y=Object(n.useMemo)((function(){return Object.keys(a).filter((function(e){return!a[e]}))[0]}),[a]);Object(n.useEffect)((function(){document.body.style.overflowY=i?"hidden":"scroll"}),[i]),Object(n.useEffect)((function(){m("Taylor Stackpole")}),[]);var E={position:"fixed",top:0,left:0,width:"100vw",height:"100vh",fontFamily:"monospace",zIndex:i?1e3:-1e3,opacity:i?1:0,transition:"opacity 1000ms, z-index 200ms 1050ms",background:b.black};return r.a.createElement("div",{className:"LoadingOverlay",onClick:function(){return s(!1)},style:E},r.a.createElement("div",{style:{}},r.a.createElement("span",{style:{fontSize:"0.5em"}},y),r.a.createElement("h2",{style:{color:b.white}},d),r.a.createElement("h2",{style:{color:b.white2}},h)))};at.defaultProps={loading:!0,queuedImages:{}};Object(l.b)((function(e){return{loading:!e.allImagesLoaded,queuedImages:e.queuedImages}}))(at);var nt=function(e){e.currentTab;var t=e.breakColor,a=(e.loading,Object(n.useMemo)((function(){return ne.from(t)}),[t])),c=a.img,o=a.img3,i=a.color,s=a.font,l={position:"absolute",width:"100vw",minWidth:1e3,bottom:"3vh"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,{breakColor:"orange",isBottom:!0},r.a.createElement(ke,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",{id:"contact"},"Like what you see?"),r.a.createElement("p",null,"Follow this project and others on GitHub, or NPM."),r.a.createElement($e,{background:i,color:s,left:!0})),r.a.createElement("div",null,r.a.createElement(ye,{src:et.a}))),r.a.createElement(Se,null)),r.a.createElement("div",{style:{position:"relative",height:"3vh",background:b.white}},r.a.createElement(ye,{src:c,style:l}),r.a.createElement(ye,{className:"floating",src:o,style:Object(m.a)({opacity:.5},l)}),r.a.createElement(ye,{className:"floating-one80",src:o,style:Object(m.a)({opacity:.5},l)}),r.a.createElement("div",{style:{display:"flex",background:i,justifyContent:"space-between",alignItems:"center"}},r.a.createElement(Ke,null))))};nt.defaultProps={breakColor:"white"};var rt=Object(l.b)((function(e){var t=e.currentTab,a=e.allImagesLoaded;return{currentTab:t,breakColor:ne.fromTab(t),loading:!a}}))(nt),ct=a(62),ot=a.n(ct),it=a(63),st=a.n(it),lt=a(64),ut=a.n(lt),dt=a(65),mt=a.n(dt),pt=a(66),ft=a.n(pt),bt=a(67),ht=a.n(bt),gt=a(68),vt=a.n(gt),yt=a(69),Et=a.n(yt),jt=Object(l.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;return Object(n.useEffect)((function(){document.title="About | Taylor Stackpole the software engineer"}),[]),r.a.createElement(be,{transition:"fade-slide"},r.a.createElement(we,{isTop:!0,breakColor:"green"},r.a.createElement(ke,{leftPad:!0},r.a.createElement(ye,{style:{minWidth:"50vw",maxHeight:"50vh"},src:ot.a}),r.a.createElement("div",null,r.a.createElement("h1",null,"Hey, I'm Taylor"),r.a.createElement("p",null,"I'm a software engineer from California."),r.a.createElement("h2",null,"I build web apps")))),r.a.createElement(we,{breakColor:"blue"},r.a.createElement(ke,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",null,"I drink rocket fuel"),r.a.createElement("p",null,"I'm a straight-up JavaScript powerhouse. I've also spent years in agile development across many teams. I know how to estimate my throughput to deliver above and beyond what is expected. Point me at feature gaps if you want to fill them. Point me at a problem areas to make them go away.")),r.a.createElement(ye,{src:st.a})),r.a.createElement(ke,{leftPad:!0},r.a.createElement(ye,{test:!0,src:ft.a}),r.a.createElement("div",null,r.a.createElement("h2",null,"I take ownership"),r.a.createElement("p",null,"When a project is handed to me it becomes my baby. I'm proud of my work and do my best to encourage the same from my colleagues."))),r.a.createElement(ke,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",null,"I look into the future"),r.a.createElement("p",null,"The JavaScript community moves fast. Real fast. That's why it's important for me to be a part of it. I'm always adding new skills to my tool belt."),r.a.createElement($e,null)),r.a.createElement(ye,{src:mt.a}))),r.a.createElement(we,{breakColor:"purple"},r.a.createElement(ke,{leftPad:!0},r.a.createElement(ye,{src:Et.a}),r.a.createElement("div",null,r.a.createElement("h2",null,"I modularize and optimize"),r.a.createElement("p",null,"The first step to optimizing a process is to define the moving parts. I've had to deal with enormous projects in my profession. The best projects to work on have clearly defined architectures, where each piece plays a clearly defined role. When things don't make sense, I communicate with colleagues until we build a roadmap to fix it."))),r.a.createElement(ke,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",{id:"test-the-things"},"I test all the things"),r.a.createElement("p",null,"Meaningful test coverage is crucial to ensure code does what you think it does. I create small, dedicated modules that are perfect for testing in isolation, or mocking for other modules.\xa0",r.a.createElement("a",{href:"https://stackoverflow.com/questions/44769404/jest-spyon-function-called/46735186#46735186"},"I understand how to test."))),r.a.createElement(ye,{src:vt.a}))),r.a.createElement(we,{breakColor:"orange"},r.a.createElement(ke,{leftPad:!0},r.a.createElement(ye,{src:ut.a}),r.a.createElement("div",null,r.a.createElement("h2",{id:"designer"},"I designed this website"),r.a.createElement("p",null,"My greatest weakness as a web developer is design, but I love art. I build corporate apps, but I like building stuff like this. All of the images were designed as SVGs. That means each one is perfectly crisp down to the half-pixel on your retina device.",r.a.createElement("a",{target:"_blank",href:He},"Email me")," or ",r.a.createElement("a",{target:"_blank",href:qe},"visit this project")," if you have any suggestions."))),r.a.createElement(ke,{rightPad:!0},r.a.createElement("div",null,r.a.createElement("h2",{id:"responsive"},"I understand responsive design"),r.a.createElement("p",null,"This website is responsive. I'm guessing it works on your device right now. Even if you turn off JavaScript this website will still work. I'm all about making content available to users so I research the best, light-weight methods of presentation. I've been employing ",r.a.createElement("code",null,"flexbox")," with ",r.a.createElement("code",null,"@media")," query layouts for years.")),r.a.createElement(ye,{src:ht.a}))))}));a(6),Object(l.b)((function(e){return{currentTab:e.currentTab}}))((function(e){e.dispatch;var t=e.onClick,a=e.tab,n=e.currentTab,c=(e.show,Object(me.a)(e,["dispatch","onClick","tab","currentTab","show"])),o=a.title,i=fe("TabItem hoverAppear",{active:o===n});return r.a.createElement("div",Object.assign({},c,{className:i,onClick:function(e){e.stopPropagation(),t(a)},style:{display:"flex",alignItems:"center",overflow:"hidden",justifyContent:"space-between",paddingRight:20,paddingLeft:20,height:60,position:"relative",fontFamily:"monospace",fontWeight:"bold",outline:"none",color:b.black}}),r.a.createElement("div",null,o))}));var kt=function(e){e.username;var t=e.onClick,a=Object(me.a)(e,["username","onClick"]),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"stac_attak",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://placekitten.com/g/50/50",a=Object(n.useState)(""),r=Object(de.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(!0),s=Object(de.a)(i,2),l=s[0],u=s[1],d=Object(n.useState)(!1),m=Object(de.a)(d,2),p=m[0],f=m[1];return Object(n.useEffect)((function(){function t(){return(t=Object(w.a)(O.a.mark((function e(t){var a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://www.instagram.com/".concat(t,"/?__a=1"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,o(r.graphql.user.profile_pic_url),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),f(!0);case 14:u(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}u(!0),e.length>0&&function(e){t.apply(this,arguments)}(e)}),[e]),Object(n.useEffect)((function(){p&&o(t)}),[p]),[l,c]}(),o=Object(de.a)(c,2),i=o[0],s=o[1];return r.a.createElement("div",{className:"hoverAppear moreOpacity",style:{zIndex:1,position:"relative",marginLeft:10},onClick:t},r.a.createElement(ye,Object.assign({src:s},a,{style:{filter:"grayscale(1)",borderRadius:40,padding:10,opacity:i?0:1}})))};kt.defaultProps={username:"stac_attak",onClick:function(){}};var Ot=kt,wt=Object(l.b)((function(e){var t=e.currentTab,a=e.bubbleSrc;return{currentTab:t,background:e.theme,imgSrc:a,allLoaded:e.allImagesLoaded}}))((function(e){e.dispatch,e.currentTab;var t=e.background,a=e.imgSrc,c=e.allLoaded,o=Object(le.e)(),i=Object(le.f)(),s=Object(n.useState)(!1),l=Object(de.a)(s,2),u=l[0],d=l[1],m=function(e){var t=e.path;i.pathname.includes(t)||o.push(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"Header",style:{display:"flex",transition:"opacity 300ms",position:"relative",top:0,width:"100vw",justifyContent:"stretch"}},r.a.createElement("div",{id:"Tabs",style:{display:"flex",alignItems:"center",width:"100vw",justifyContent:"space-between",position:"absolute",zIndex:1,transition:"opacity 300ms",background:c?t:"transparent"}},r.a.createElement(ye,{onLoad:function(){return d(!0)},id:"header-image",className:fe({loaded:u}),src:a,style:{position:"absolute",transform:"rotate(180deg)",width:"100vw",top:u?30:0,minWidth:1e3}}),r.a.createElement(Ot,{className:"SocialIcon",onClick:function(){return m({path:"about"})}}),r.a.createElement(Ke,null))))})),xt=Object(l.b)((function(e){return{currentTab:e.currentTab}}))((function(e){var t=e.dispatch,a=(e.currentTab,Object(le.g)());return Object(n.useEffect)((function(){a.currentTab?t(ce(a.currentTab)):t(ce("about"))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{exact:!0,path:"/",component:jt}),r.a.createElement(le.a,{exact:!0,path:"/about",component:jt}),r.a.createElement(rt,null))})),Tt=function(){return Object(n.useEffect)((function(){document.body.style.background=b.black2}),[]),r.a.createElement(ue.a,{basename:"/"},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(wt,null),r.a.createElement(le.a,{path:"/:currentTab",component:xt}),r.a.createElement(le.a,{exact:!0,path:"/",component:xt})))},St=(a(86),a(87),a(88),a(89),a(90),a(91),Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALL_IMAGES_LOADED":return Object(m.a)({},e,{allImagesLoaded:t.done});case"SET_CURRENT_TAB":return Object(m.a)({},e,{currentTab:t.title,bubbleSrc:t.img,theme:t.color});case"SET_SCROLL_Y":return Object(m.a)({},e,{scrollY:t.scrollY});case"SET_PROJECT_ISSUES":return Object(m.a)({},e,{issues:t.issues});case"SET_QUEUED_IMAGES":return Object(m.a)({},e,{queuedImages:t.queuedImages});default:return Object(m.a)({},e)}}),Object(s.c)(Object(s.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}))),It=Object(i.a)();o.a.render(r.a.createElement(l.a,{store:St},r.a.createElement(Tt,{history:It})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[73,1,2]]]);
//# sourceMappingURL=main.ff864afa.chunk.js.map