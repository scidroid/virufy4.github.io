(this.webpackJsonppredict=this.webpackJsonppredict||[]).push([[12,21],{158:function(e,t,n){"use strict";var o=n(3),r=n.n(o),i=n(179);t.a=function(){var e=r.a.useContext(i.a),t=e.title,n=e.setTitle,o=e.subtitle,a=e.setSubtitle,c=e.type,s=e.setType,l=e.logoSize,u=e.setLogoSize,d=e.setDoGoBack;return{title:t,setTitle:n,subtitle:o,setSubtitle:a,type:c,setType:s,logoSize:l,setLogoSize:u,doGoBack:e.doGoBack,setDoGoBack:d}}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(){window.scrollTo({top:0,behavior:"smooth"})}},160:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var o=n(154),r=n(150);function i(e){return function(t,n){return Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e,Object(r.a)(Object(r.a)({},t[e]),n)))}}function a(){return function(e){return{welcome:{language:e.welcome.language}}}}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(150),r=n(36),i=n(177),a=n(3),c=n.n(a),s=n(149),l=n(148),u=n(151);function d(){var e=Object(s.a)(["\n  height: 52px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return d=function(){return e},e}var b=l.default.button(d(),(function(e){var t=e.dark,n=e.disabled?u.a.purple_50:u.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),p=c.a.memo((function(e){var t=e.children,n=Object(i.a)(e,["children"]);return Object(r.jsx)(b,Object(o.a)(Object(o.a)({type:"button"},n),{},{children:t}))}))},236:function(e,t,n){"use strict";n.r(t);var o=n(36),r=n(169),i=n.n(r),a=n(170),c=n(153),s=n(3),l=n.n(s),u=n(848),d=n(388),b=n(389),p=n.n(b),j=n(152);var f=n(150),h=n(177),O=n(308),m=n.n(O),x=n(174),g=n(149),v=n(148);function y(){var e=Object(g.a)(["\n  font-size: 14px;\n  margin-bottom: 17px;\n"]);return y=function(){return e},e}function k(){var e=Object(g.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 17px;\n"]);return k=function(){return e},e}function w(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  @media screen and (",") {\n    height: 100%;\n    max-width: 400px;\n    margin: auto;\n"]);return w=function(){return e},e}var T=v.default.div(w(),(function(e){return e.theme.breakpoints.tablet})),C=v.default.div(k()),S=v.default.div(y());m.a.setAppElement("#root");var R=l.a.memo((function(e){var t=e.isOpen,n=e.modalTitle,r=e.children,i=e.toggle,a=e.onConfirm,c=Object(h.a)(e,["isOpen","modalTitle","children","toggle","onConfirm"]),s=l.a.useCallback((function(){null===a||void 0===a||a(),i()}),[a,i]);return Object(o.jsx)(m.a,Object(f.a)(Object(f.a)({},c),{},{isOpen:t,onRequestClose:i,style:{content:{minHeight:"328px",maxWidth:"768px",margin:"auto",top:"60%",bottom:"0px",right:"0px",left:"0px",backgroundColor:"#EBF1FC",borderRadius:"70px 70px 0px 0px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.3)"}},children:Object(o.jsxs)(T,{className:"ModalBody",children:[Object(o.jsx)(C,{children:n}),Object(o.jsx)(S,{children:r}),Object(o.jsx)(x.a,{onClick:s,dark:!0,children:"OK"})]})}))})),I=n(160),D=n(158),z=n(159),F=n(151),B=n(267),E=function(){var e=Object(D.a)(),t=e.setDoGoBack,n=e.setTitle,r=e.setSubtitle,s=e.setType,b=Object(u.a)().t,f=Object(j.c)({resetStore:Object(I.a)()}),h=f.state,O=f.actions,m=l.a.useState(null),x=Object(c.a)(m,2),g=x[0],v=x[1],y=l.a.useState(!0),k=Object(c.a)(y,2),w=k[0],T=k[1],C=l.a.useState("unknown"),S=Object(c.a)(C,2),E=S[0],P=S[1],M=l.a.useState(""),V=Object(c.a)(M,2),K=V[0],G=V[1],N=l.a.useState(null),Y=Object(c.a)(N,2),A=Y[0],L=Y[1],q=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),n=t[0],o=t[1];return{isOpen:n,openModal:l.a.useCallback((function(){o(!0)}),[]),closeModal:l.a.useCallback((function(){o(!1)}),[]),toggleModal:l.a.useCallback((function(){o((function(e){return!e}))}),[])}}(),J=q.isOpen,_=q.openModal,H=q.closeModal;l.a.useEffect((function(){var e=document&&document.getElementById("footer-report-problems");e&&(e.style.display=w?"none":"flex")}),[w]);var U=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,o,r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L(null),!(h&&h.welcome&&h["submit-steps"])){e.next=15;break}return o=h["submit-steps"].recordYourCough,r=new FormData,(a=(null===o||void 0===o?void 0:o.recordingFile)||(null===o||void 0===o?void 0:o.uploadedFile))&&r.append("cough",a,a.name||"filename.wav"),r.append("passcode",null!==(t=null===(n=h.welcome)||void 0===n?void 0:n.passcode)&&void 0!==t?t:""),r.append("patientId","predict-app"),e.next=11,p.a.post("https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod/demo-predict",r,{headers:{"Content-Type":"multipart/form-data"}});case 11:(c=e.sent).data&&(T(!1),P(c.data.prediction),G(c.data.submissionId),v(c.data.errorCode),O.resetStore({})),e.next=16;break;case 15:O.resetStore({});case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),console.log("Error",e.t0),L(b("predictionResult:submitError"));case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();l.a.useEffect((function(){Object(z.a)(),n(""),t((function(){})),U()}),[]),l.a.useEffect((function(){w?(r(""),s("noShape")):(r("".concat(b("predictionResult:result"))),s("shapeUp"),_())}),[w]);var W=l.a.useMemo((function(){return"positive"===E?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B.TitleResult,{color:F.a.red,children:b("predictionResult:resultDetected")}),Object(o.jsx)(B.IntroText,{children:Object(o.jsxs)(d.a,{i18nKey:"predictionResult:resultDetectedTextt",children:["Your voice has indicators of COVID-19.",Object(o.jsx)("strong",{children:"Please contact your healthcare professional"})," and take additional precautions."]})}),Object(o.jsx)(B.ImagePredictionResult,{})]}):"negative"===E?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B.TitleResult,{color:F.a.green,children:b("predictionResult:resultNotDetected")}),Object(o.jsx)(B.IntroText,{children:Object(o.jsxs)(d.a,{i18nKey:"predictionResult:resultNotDetectedText",children:["Your voice does not seem to have indicators of COVID-19. Please",Object(o.jsx)("strong",{children:"continue to take appropriate measures"}),"based on the advice of your healthcare professional or applicable regulatory body and reassess yourself in our app daily."]})}),Object(o.jsx)(B.VLogo,{})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B.TitleResult,{color:F.a.black,children:b("predictionResult:resultNotAnalyze")}),Object(o.jsx)(B.IntroText,{children:Object(o.jsxs)(d.a,{i18nKey:"predictionResult:resultNotAnalyzeText",children:["Our algorithm is not able to determine your COVID-19 status. ",Object(o.jsx)("strong",{children:"Please submit another cough."})]})}),Object(o.jsx)(B.ImagePredictionResult,{})]})}),[E,b]);return Object(o.jsxs)(o.Fragment,{children:[(g||A)&&Object(o.jsx)(B.SubmitError,{children:g?"".concat(b("predictionResult:error")," ").concat(g):A}),w?Object(o.jsxs)(B.ProcessingContainer,{children:[Object(o.jsx)(B.Title,{children:b("predictionResult:processingTitle")}),Object(o.jsx)(B.ImageProcessing,{})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(R,{isOpen:J,modalTitle:b("predictionResult:note"),toggle:H,onConfirm:H,children:Object(o.jsx)(d.a,{i18nKey:"predictionResult:resultModal",children:"This app will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsiblity to seek medical advice from your doctor."})}),K&&Object(o.jsx)(B.SubmissionIdBox,{children:Object(o.jsx)(B.SubmissionId,{children:Object(o.jsxs)(d.a,{i18nKey:"predictionResult:result_submission",children:["Your unique submission ID:",Object(o.jsx)("br",{}),Object(o.jsx)("strong",{children:{submissionId:K}})]})})}),Object(o.jsx)(B.PredictionResultContainer,{children:W})]})]})};t.default=l.a.memo(E)},261:function(e,t,n){"use strict";n.r(t);var o=n(236);n.d(t,"default",(function(){return o.default}))}}]);
//# sourceMappingURL=12.b8a942e8.chunk.js.map