(this["webpackJsonpcompensar-app"]=this["webpackJsonpcompensar-app"]||[]).push([[20,36,48],{200:function(n,t,e){"use strict";var r=e(9),a=e.n(r),o=e(216);t.a=function(){var n=a.a.useContext(o.a),t=n.title,e=n.setTitle,r=n.subtitle,i=n.setSubtitle,u=n.type,c=n.setType,l=n.logoSize,s=n.setLogoSize,f=n.setDoGoBack;return{title:t,setTitle:e,subtitle:r,setSubtitle:i,type:u,setType:c,logoSize:l,setLogoSize:s,doGoBack:n.doGoBack,setDoGoBack:f}}},201:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},203:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return i}));var r=e(197),a=e(207);function o(n){return function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},n,Object(a.a)(Object(a.a)({},t[n]),e)))}}function i(){return function(n){return{welcome:{language:n.welcome.language}}}}},204:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(9),a=e.n(r),o=e(205),i=e(195);function u(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return n},n}var c=e(194).default.div(u(),(function(n){return"calc(100% - ".concat(2*n.theme.layout.generalPaddingAmount,"px)")}),(function(n){return n.theme.breakpoints.tablet})),l=a.a.memo((function(n){var t=n.invert,e=void 0!==t&&t,r=n.leftLabel,i=n.leftDisabled,u=n.leftHandler,l=n.rightLabel,s=n.rightDisabled,f=n.rightHandler;return a.a.createElement(c,null,a.a.createElement(o.a,{dark:e,disabled:i,onClick:u},r),l&&f&&a.a.createElement(o.a,{dark:!e,disabled:s,onClick:f},l))})),s=a.a.memo(l)},205:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e(210),a=e(9),o=e.n(a),i=e(195),u=e(194),c=e(202);function l(){var n=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return n},n}var s=u.default.button(l(),(function(n){var t=n.dark,e=n.disabled?c.a.purple_50:c.a.purple;return t?"\n    background-color: ".concat(e,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(e,";\n    border: 1px solid ").concat(e,";\n  ")})),f=o.a.memo((function(n){var t=n.children,e=Object(r.a)(n,["children"]);return o.a.createElement(s,Object.assign({type:"button"},e),t)}))},263:function(n,t,e){"use strict";e.r(t),e.d(t,"MainContainer",(function(){return E})),e.d(t,"PlayerContainer",(function(){return T})),e.d(t,"PlayerContainerTop",(function(){return k})),e.d(t,"PlayerPlayContainer",(function(){return w})),e.d(t,"PlayerCrossContainer",(function(){return S})),e.d(t,"PlayerContainerBottom",(function(){return C})),e.d(t,"PlayerTopMiddle",(function(){return L})),e.d(t,"PlayerBottomTop",(function(){return M})),e.d(t,"PlayerBottomTrack",(function(){return z})),e.d(t,"PlayerBottomThumb",(function(){return G})),e.d(t,"PlayerBottomBottom",(function(){return A})),e.d(t,"Subtitle",(function(){return D})),e.d(t,"TitleAudioName",(function(){return F})),e.d(t,"PlayerTimeIndicator",(function(){return H})),e.d(t,"PlayerPlayButton",(function(){return I})),e.d(t,"PlayerPlay",(function(){return N})),e.d(t,"PlayerCross",(function(){return R})),e.d(t,"BeforeSubmitText",(function(){return U})),e.d(t,"TempBeforeSubmitError",(function(){return Y}));var r=e(195),a=e(194),o=e(202);function i(){var n=Object(r.a)(["\ncolor: ",";\n  text-align: center;\n  margin-bottom: 16px;\n"]);return i=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n  line-height: 20px;\n  color: ",";\n  margin: 0;\n"]);return u=function(){return n},n}function c(){var n=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return s=function(){return n},n}function f(){var n=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  color: ",";\n  font-weight: 400;\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 14px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n']);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  margin-left: 20px;\n  margin-bottom: 60px;\n  \n  @media screen and (',") {\n    max-width: 592px;\n    margin-right: auto; \n    margin-left: auto; \n  }\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return p=function(){return n},n}function g(){var n=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return g=function(){return n},n}function b(){var n=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return v=function(){return n},n}function h(){var n=Object(r.a)(["\n  flex: 1;\n"]);return h=function(){return n},n}function x(){var n=Object(r.a)([""]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n  cursor: pointer;\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return j=function(){return n},n}function P(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return P=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return O=function(){return n},n}function B(){var n=Object(r.a)(["\n  margin-bottom: 77px;\n\n  @media screen and (",") {\n    max-width: 470px;\n    margin: auto;\n  }\n"]);return B=function(){return n},n}var E=a.default.div(B(),(function(n){return n.theme.breakpoints.tablet})),T=a.default.div(O(),(function(n){return n.theme.breakpoints.tablet})),k=a.default.div(P()),w=a.default.div(j()),S=a.default.div(y()),C=a.default.div(x()),L=a.default.div(h()),M=a.default.div(v()),z=a.default.div(b(),o.a.purple_10,o.a.purple,(function(n){return n.progress?"".concat(n.progress,"%"):"0%"}),(function(n){return n.playing?"transition: width 0.2s linear;":""})),G=a.default.div(g(),(function(n){return n.progress?"".concat(n.progress,"%"):"0px"}),o.a.purple,(function(n){return n.playing?"transition: left 0.2s linear;":""})),A=a.default.div(p()),D=a.default.h2(m(),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.tablet})),F=a.default.p(d(),(function(n){return n.theme.colors.mineShaft})),H=a.default.p(f(),o.a.mineShaft),I=a.default.div(s(),o.a.purple_10),N=a.default.img(l()),R=a.default.img(c()),U=a.default.p(u(),(function(n){return n.theme.colors.darkGray_70})),Y=Object(a.default)(U)(i(),(function(n){return n.theme.colors.red}))},276:function(n,t,e){"use strict";t.a={sizeAsHuman:function(n,t){var e=t?1e3:1024;if(Math.abs(n)<e)return"".concat(n," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{n/=e,++a}while(Math.abs(n)>=e&&a<r.length-1);return"".concat(n.toFixed(1)," ").concat(r[a])},blobToFile:function(n,t){var e=n;return e.lastModifiedDate=new Date,e.name=t,n}}},277:function(n,t,e){"use strict";e.r(t);var r=e(197),a=e(208),o=e.n(a),i=e(209),u=e(196),c=e(9),l=e.n(c),s=e(214),f=e(206),d=e.n(f),m=e(807),p=e(199),g=e(200),b=e(204),v=e(203),h=e(201),x=e(357),y=e.n(x),j=e(358),P=e.n(j),O=e(359),B=e.n(O),E=e(276),T=e(263);t.default=l.a.memo((function(n){var t,e,a=n.storeKey,f=n.previousStep,x=n.nextStep,j=n.metadata,O=l.a.useMemo((function(){return!!j&&"recordYourCough"===j.currentLogic}),[j]),k=l.a.useMemo((function(){return!!j&&"recordYourBreath"===j.currentLogic}),[j]),w=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,S=Object(g.a)(),C=S.setDoGoBack,L=S.setTitle,M=S.setSubtitle,z=Object(s.g)(),G=Object(s.h)(),A=Object(p.d)(Object(v.b)(a)),D=A.state,F=A.action,H=Object(m.a)().t,I=(null===G||void 0===G||null===(t=G.state)||void 0===t?void 0:t.isShortAudioCollection)||!1,N=null===D||void 0===D||null===(e=D[a])||void 0===e?void 0:e[null===j||void 0===j?void 0:j.currentLogic],R=N?N.recordingFile||N.uploadedFile:null,U=l.a.useRef(null),Y=l.a.useRef(),_=l.a.useRef(0),J=l.a.useState(!0),K=Object(u.a)(J,2),Z=K[0],X=K[1],q=l.a.useState(!1),Q=Object(u.a)(q,2),V=Q[0],W=Q[1],$=l.a.useState(0),nn=Object(u.a)($,2),tn=nn[0],en=nn[1],rn=l.a.useState(0),an=Object(u.a)(rn,2),on=an[0],un=an[1];l.a.useEffect((function(){var n=function(){!function n(t){un(t/1e3),_.current=t,Y.current=setTimeout((function(){n(t+200)}),200)}(_.current),setTimeout((function(){W(!0)}),0)},t=function(n){n.target.currentTime>=n.target.duration&&(un(0),_.current=0),W(!1),clearTimeout(Y.current)},e=function(){var n=Object(i.a)(o.a.mark((function n(t){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n){if(t.target.duration!==1/0)n(t.target.duration);else{t.target.addEventListener("durationchange",(function e(){t.target.pause(),t.target.volume=1,t.target.currentTime=0,n(t.target.duration),t.target.removeEventListener("durationchange",e)})),t.target.volume=0,t.target.currentTime=86400}}));case 2:e=n.sent,t.target.volume=1,en(e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return U.current&&(U.current.addEventListener("playing",n),U.current.addEventListener("pause",t),U.current.addEventListener("loadedmetadata",e)),function(){U.current&&(U.current.removeEventListener("playing",n),U.current.removeEventListener("pause",t),U.current.removeEventListener("loadedmetadata",e))}}),[]);var cn=l.a.useMemo((function(){var n={fileUrl:"",fileName:"",fileSize:""};if(R&&void 0!==R.size)try{var t=URL.createObjectURL(R);n.fileUrl=t,n.fileName=R.name,n.fileSize=E.a.sizeAsHuman(R.size,!0)}catch(e){console.log("Error",e)}return n}),[R]),ln=cn.fileUrl,sn=cn.fileName,fn=l.a.useCallback((function(){x&&(X(!1),z.push(x))}),[z,x]),dn=l.a.useCallback((function(){X(!1),G.state&&G.state.from?O?z.push("/submit-steps/step-record/cough",{isShortAudioCollection:I}):k?z.push("/submit-steps/step-record/breath"):z.push("/submit-steps/step-record/speech"):f?z.push(f):z.goBack()}),[G.state,f,z,O,k,I]),mn=l.a.useCallback((function(){V&&U.current&&U.current.pause(),(null===D||void 0===D?void 0:D[a][null===j||void 0===j?void 0:j.currentLogic])&&(F(Object(r.a)({},null===j||void 0===j?void 0:j.currentLogic,{recordingFile:null,uploadFile:null})),dn())}),[V,D,a,j,F,dn]),pn=l.a.useCallback((function(){V||U.current&&U.current.play()}),[V]),gn=l.a.useCallback((function(){V&&U.current&&U.current.pause()}),[V]);Object(c.useEffect)((function(){Object(h.a)(),M(H("recordingsListen:title")),L(H(O?"recordingsListen:recordCough.header":k?"recordingsListen:recordBreath.header":"recordingsListen:recordSpeech.header")),C((function(){return dn}))}),[dn,O,k,C,L,M,H]);var bn=l.a.useMemo((function(){var n={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(tn){var t=Math.floor(Math.floor(on)/60),e=Math.floor(on)-60*t;n.currentTime="".concat(t,":").concat(e<10?"0".concat(e):e);var r=tn>on?Math.ceil(tn-on):0,a=Math.floor(r/60),o=r-60*a;n.remainingTime="-".concat(a,":").concat(o<10?"0".concat(o):o),n.trackProgress=Math.ceil(on/tn*100)}return n}),[tn,on]),vn=bn.currentTime,hn=bn.remainingTime,xn=bn.trackProgress;return l.a.createElement(l.a.Fragment,null,ln&&l.a.createElement("audio",{ref:U},l.a.createElement("source",{src:ln})),l.a.createElement(T.MainContainer,null,l.a.createElement(T.Subtitle,null,H("recordingsListen:subtitle")),l.a.createElement(T.PlayerContainer,null,l.a.createElement(T.PlayerContainerTop,null,l.a.createElement(T.PlayerTopMiddle,null,l.a.createElement(T.TitleAudioName,null,sn)),l.a.createElement(T.PlayerCrossContainer,{onClick:mn},l.a.createElement(T.PlayerCross,{src:B.a}))),l.a.createElement(T.PlayerContainerBottom,null,l.a.createElement(T.PlayerBottomTop,null,l.a.createElement(T.PlayerBottomTrack,{playing:V,progress:xn}),l.a.createElement(T.PlayerBottomThumb,{playing:V,progress:xn})),l.a.createElement(T.PlayerBottomBottom,null,l.a.createElement(T.PlayerTimeIndicator,null,vn),l.a.createElement(T.PlayerTimeIndicator,null,hn)))),l.a.createElement(T.PlayerPlayContainer,{onClick:V?gn:pn},l.a.createElement(T.PlayerPlayButton,null,l.a.createElement(T.PlayerPlay,{src:V?P.a:y.a})))),Z&&l.a.createElement(w,null,l.a.createElement(b.a,{invert:!0,leftLabel:H("recordingsListen:next"),leftHandler:fn})))}))},305:function(n,t,e){"use strict";e.r(t);var r=e(277);e.d(t,"default",(function(){return r.default}))},357:function(n,t,e){n.exports=e.p+"static/media/play.6f092911.svg"},358:function(n,t,e){n.exports=e.p+"static/media/pause.d55011c8.svg"},359:function(n,t,e){n.exports=e.p+"static/media/cross.13e841fb.svg"}}]);
//# sourceMappingURL=20.142402fa.chunk.js.map