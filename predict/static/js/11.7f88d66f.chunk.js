(this.webpackJsonppredict=this.webpackJsonppredict||[]).push([[11,20,24],{158:function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return f}));var r=e(149),i=e(148),a=e(150);function o(){var n=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1;\n  color: ",";\n"]);return o=function(){return n},n}function c(){var n=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return u=function(){return n},n}var l=Object(i.css)(u()),s=i.default.div(c(),l,(function(n){return n.dark?a.a.darkBlack:a.a.black}),(function(n){return n.fontSize?"font-size: ".concat(n.fontSize,";"):""})),f=i.default.div(o(),a.a.darkBlack)},161:function(n,t,e){"use strict";var r=e(3),i=e.n(r),a=e(183);t.a=function(){var n=i.a.useContext(a.a),t=n.title,e=n.setTitle,r=n.subtitle,o=n.setSubtitle,c=n.type,u=n.setType,l=n.logoSize,s=n.setLogoSize,f=n.setDoGoBack;return{title:t,setTitle:e,subtitle:r,setSubtitle:o,type:c,setType:u,logoSize:l,setLogoSize:s,doGoBack:n.doGoBack,setDoGoBack:f}}},162:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},163:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return o}));var r=e(154),i=e(151);function a(n){return function(t,e){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},n,Object(i.a)(Object(i.a)({},t[n]),e)))}}function o(){return function(n){return{welcome:{language:n.welcome.language}}}}},165:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e(151),i=e(36),a=e(178),o=e(3),c=e.n(o),u=e(149),l=e(148),s=e(150);function f(){var n=Object(u.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return f=function(){return n},n}var d=l.default.button(f(),(function(n){var t=n.dark,e=n.disabled?s.a.purple_50:s.a.purple;return t?"\n    background-color: ".concat(e,";\n    color: ").concat(s.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(s.a.white,";\n    color: ").concat(e,";\n    border: 1px solid ").concat(e,";\n  ")})),b=c.a.memo((function(n){var t=n.children,e=Object(a.a)(n,["children"]);return Object(i.jsx)(d,Object(r.a)(Object(r.a)({type:"button"},e),{},{children:t}))}))},177:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e(36),i=e(3),a=e.n(i),o=e(165),c=e(149);function u(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return u=function(){return n},n}var l=e(148).default.div(u(),(function(n){return"calc(100% - ".concat(2*n.theme.layout.generalPaddingAmount,"px)")}),(function(n){return n.theme.breakpoints.tablet})),s=a.a.memo((function(n){var t=n.invert,e=void 0!==t&&t,i=n.leftLabel,a=n.leftDisabled,c=n.leftHandler,u=n.rightLabel,s=n.rightDisabled,f=n.rightHandler;return Object(r.jsxs)(l,{children:[Object(r.jsx)(o.a,{dark:e,disabled:a,onClick:c,children:i}),u&&f&&Object(r.jsx)(o.a,{dark:!e,disabled:s,onClick:f,children:u})]})})),f=a.a.memo(s)},203:function(n,t,e){"use strict";e.r(t),e.d(t,"MainContainer",(function(){return w})),e.d(t,"Subtitle",(function(){return B})),e.d(t,"PlayerContainer",(function(){return T})),e.d(t,"PlayerContainerTop",(function(){return S})),e.d(t,"PlayerPlayContainer",(function(){return z})),e.d(t,"PlayerPlayButton",(function(){return C})),e.d(t,"PlayerPlay",(function(){return L})),e.d(t,"PlayerCrossContainer",(function(){return M})),e.d(t,"PlayerCross",(function(){return E})),e.d(t,"PlayerTopMiddle",(function(){return F})),e.d(t,"PlayerFileName",(function(){return G})),e.d(t,"PlayerFileSize",(function(){return D})),e.d(t,"PlayerContainerBottom",(function(){return H})),e.d(t,"PlayerBottomTop",(function(){return A})),e.d(t,"PlayerBottomTrack",(function(){return I})),e.d(t,"PlayerBottomThumb",(function(){return N})),e.d(t,"PlayerBottomBottom",(function(){return U})),e.d(t,"PlayerTimeIndicator",(function(){return R}));var r=e(149),i=e(148),a=e(150),o=e(158);function c(){var n=Object(r.a)(["\n  opacity: 0.5;\n  margin-top: 8px;\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  position: absolute;\n  top: -6px;\n  left: ",";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: ",";\n  transform: translateX(-50%);\n  ","\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: ",";\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: 0;\n    height: 4px;\n    background-color: ",";\n    width: ",";\n    ","\n\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(r.a)(["\n  position: relative;\n  margin-bottom: 4px;\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)([""]);return d=function(){return n},n}function b(){var n=Object(r.a)(["\n  text-align: left;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 0.875rem;\n    line-height: 24px;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(r.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  text-align: left;\n  font-size: 14px;\n\n  @media screen and (",") {\n    font-size: 1.5rem;\n    line-height: 24px;\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(r.a)(["\n  flex: 1;\n"]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n  width: 14px;\n  height: 14px;\n"]);return g=function(){return n},n}function h(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 22px;\n  padding-bottom: 22px;\n  margin-right: -20px;\n  padding-right: 20px;\n  box-sizing: content-box;\n"]);return h=function(){return n},n}function j(){var n=Object(r.a)(["\n  width: 33px;\n  height: 40px;\n"]);return j=function(){return n},n}function v(){var n=Object(r.a)(["\n  width: 108px;\n  height: 108px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 76px;\n"]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n"]);return y=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 60px 20px 0px 20px;\n\n  @media screen and (",") {\n    max-width: 592px;\n    margin: 0 auto;\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(r.a)(["\n  color: ",';\n  font-size: 18px;\n  font-family: "Source Sans Pro";\n  margin-left: 20px;\n  margin-top: 35px;\n  text-align: left;\n  white-space: pre-wrap;\n  width: 100%;\n  \n  @media screen and (',") {\n    align-text: center; \n    max-width: 592px;\n    margin: 30px auto;\n  }\n"]);return k=function(){return n},n}function P(){var n=Object(r.a)(["\n  margin-bottom: 77px;\n"]);return P=function(){return n},n}var w=i.default.div(P()),B=i.default.h2(k(),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.tablet})),T=i.default.div(O(),(function(n){return n.theme.breakpoints.tablet})),S=i.default.div(y()),z=i.default.div(x()),C=i.default.div(v(),a.a.purple_10),L=i.default.img(j()),M=i.default.div(h()),E=i.default.img(g()),F=i.default.div(m()),G=Object(i.default)(o.b).attrs({dark:!0,fontSize:"1rem"})(p(),(function(n){return n.theme.breakpoints.tablet})),D=Object(i.default)(o.b).attrs({dark:!0,fontSize:"0.625rem"})(b(),(function(n){return n.theme.colors.darkGray}),(function(n){return n.theme.breakpoints.tablet})),H=i.default.div(d()),A=i.default.div(f()),I=i.default.div(s(),a.a.purple_10,a.a.purple,(function(n){return n.progress?"".concat(n.progress,"%"):"0%"}),(function(n){return n.playing?"transition: width 0.2s linear;":""})),N=i.default.div(l(),(function(n){return n.progress?"".concat(n.progress,"%"):"0px"}),a.a.purple,(function(n){return n.playing?"transition: left 0.2s linear;":""})),U=i.default.div(u()),R=Object(i.default)(o.b).attrs({dark:!0,fontSize:"14px"})(c())},222:function(n,t,e){"use strict";t.a={sizeAsHuman:function(n,t){var e=t?1e3:1024;if(Math.abs(n)<e)return"".concat(n," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=-1;do{n/=e,++i}while(Math.abs(n)>=e&&i<r.length-1);return"".concat(n.toFixed(1)," ").concat(r[i])},blobToFile:function(n,t){var e=n;return e.lastModifiedDate=new Date,e.name=t,n}}},234:function(n,t,e){"use strict";e.r(t);var r=e(36),i=e(154),a=e(173),o=e.n(a),c=e(174),u=e(155),l=e(3),s=e.n(l),f=e(159),d=e(202),b=e.n(d),p=e(848),m=e(153),g=e(161),h=e(177),j=e(163),v=e(162),x=e.p+"static/media/play.e148f529.svg",y=e.p+"static/media/cross.2dabeb54.svg",O=e(222),k=e(203),P=function(n){var t,e=n.storeKey,a=n.previousStep,d=n.nextStep,P=n.metadata,w=b()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,B=Object(g.a)(),T=B.setDoGoBack,S=B.setSubtitle,z=Object(f.g)(),C=Object(f.h)(),L=Object(m.c)({updateAction:Object(j.b)(e)}),M=L.state,E=L.actions,F=Object(p.a)().t,G=null===M||void 0===M||null===(t=M[e])||void 0===t?void 0:t[null===P||void 0===P?void 0:P.currentLogic],D=G?G.recordingFile||G.uploadedFile:null,H=s.a.useRef(null),A=s.a.useRef(),I=s.a.useState(!0),N=Object(u.a)(I,2),U=N[0],R=N[1],_=s.a.useState(!1),J=Object(u.a)(_,2),K=J[0],Y=J[1],Z=s.a.useState(0),X=Object(u.a)(Z,2),q=X[0],Q=X[1],V=s.a.useState(0),W=Object(u.a)(V,2),$=W[0],nn=W[1];s.a.useEffect((function(){var n=function n(t){nn(t/1e3),A.current=setTimeout((function(){n(t+200)}),200)},t=function(){n(0),setTimeout((function(){Y(!0)}),0)},e=function(n){Q(n.target.currentTime),nn(n.target.currentTime),Y(!1),clearTimeout(A.current)},r=function(){var n=Object(c.a)(o.a.mark((function n(t){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n){t.target.duration!==1/0&&n(t.target.duration);t.target.addEventListener("durationchange",(function e(){t.target.pause(),t.target.volume=1,t.target.currentTime=0,n(t.target.duration),t.target.removeEventListener("durationchange",e)})),t.target.volume=0,t.target.currentTime=86400}));case 2:e=n.sent,t.target.volume=1,Q(e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return H.current&&(H.current.addEventListener("playing",t),H.current.addEventListener("pause",e),H.current.addEventListener("loadedmetadata",r)),function(){H.current&&(H.current.removeEventListener("playing",t),H.current.removeEventListener("pause",e),H.current.removeEventListener("loadedmetadata",r))}}),[]);var tn=s.a.useMemo((function(){var n={fileUrl:"",fileName:"",fileSize:""};if(D&&void 0!==D.size)try{var t=URL.createObjectURL(D);n.fileUrl=t,n.fileName=D.name,n.fileSize=O.a.sizeAsHuman(D.size,!0)}catch(e){console.log("Error",e)}return n}),[D]),en=tn.fileUrl,rn=tn.fileName,an=s.a.useCallback((function(){d&&(R(!1),z.push(d))}),[z,d]),on=s.a.useCallback((function(){if(R(!1),C.state&&C.state.from){z.push("/submit-steps/step-record/cough")}else a?z.push(a):z.goBack()}),[C.state,a,z]),cn=s.a.useCallback((function(){K&&H.current&&H.current.pause(),(null===M||void 0===M?void 0:M[e][null===P||void 0===P?void 0:P.currentLogic])&&(E.updateAction(Object(i.a)({},null===P||void 0===P?void 0:P.currentLogic,{recordingFile:null,uploadFile:null})),on())}),[K,M,e,P,E,on]),un=s.a.useCallback((function(){K||(nn(0),H.current&&H.current.play())}),[K]);Object(l.useEffect)((function(){Object(v.a)(),S(F("recordingsListen:title")),T((function(){return on}))}),[on,T,S,F]);var ln=s.a.useMemo((function(){var n={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(q){var t=Math.floor(Math.floor($)/60),e=Math.floor($)-60*t;n.currentTime="".concat(t,":").concat(e<10?"0".concat(e):e);var r=q>$?Math.ceil(q-$):0,i=Math.floor(r/60),a=r-60*i;n.remainingTime="-".concat(i,":").concat(a<10?"0".concat(a):a),n.trackProgress=Math.ceil($/q*100)}return n}),[q,$]),sn=ln.currentTime,fn=ln.remainingTime,dn=ln.trackProgress;return Object(r.jsxs)(r.Fragment,{children:[en&&Object(r.jsx)("audio",{ref:H,children:Object(r.jsx)("source",{src:en})}),Object(r.jsxs)(k.MainContainer,{children:[Object(r.jsx)(k.Subtitle,{children:F("recordingsListen:subtitle")}),Object(r.jsxs)(k.PlayerContainer,{children:[Object(r.jsxs)(k.PlayerContainerTop,{children:[Object(r.jsx)(k.PlayerTopMiddle,{children:Object(r.jsx)(k.PlayerFileName,{children:rn})}),Object(r.jsx)(k.PlayerCrossContainer,{onClick:cn,children:Object(r.jsx)(k.PlayerCross,{src:y})})]}),Object(r.jsxs)(k.PlayerContainerBottom,{children:[Object(r.jsxs)(k.PlayerBottomTop,{children:[Object(r.jsx)(k.PlayerBottomTrack,{playing:K,progress:dn}),Object(r.jsx)(k.PlayerBottomThumb,{playing:K,progress:dn})]}),Object(r.jsxs)(k.PlayerBottomBottom,{children:[Object(r.jsx)(k.PlayerTimeIndicator,{children:sn}),Object(r.jsx)(k.PlayerTimeIndicator,{children:fn})]})]})]}),Object(r.jsx)(k.PlayerPlayContainer,{onClick:un,children:Object(r.jsx)(k.PlayerPlayButton,{children:Object(r.jsx)(k.PlayerPlay,{src:x})})})]}),U&&Object(r.jsx)(w,{children:Object(r.jsx)(h.a,{invert:!0,leftLabel:F("recordingsListen:next"),leftHandler:an,rightLabel:F("recordingsListen:retake"),rightHandler:cn})})]})};t.default=s.a.memo(P)},255:function(n,t,e){"use strict";e.r(t);var r=e(234);e.d(t,"default",(function(){return r.default}))}}]);
//# sourceMappingURL=11.7f88d66f.chunk.js.map