(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[28,56],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(9),r=n.n(a),o=n(214),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var s=function(e){var t=e.as,n=e.errors,a=e.name,s=e.message,c=e.render,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["as","errors","name","message","render"]),u=Object(o.f)(),p=Object(o.c)(n||u.errors,a);if(!p)return null;var d=p.message,m=p.types,v=i(i({},l),{children:d||s});return t?r.a.isValidElement(t)?r.a.cloneElement(t,v):r.a.createElement(t,v):c?c({message:d||s,messages:m}):r.a.createElement(r.a.Fragment,i({},v))}},221:function(e,t,n){var a=n(78);e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},222:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},223:function(e,t,n){e.exports={parse:n(224),stringify:n(227)}},224:function(e,t,n){var a=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=n(225),o=Object.create?Object.create(null):{};function i(e,t,n,a,r){var o=t.indexOf("<",a),i=t.slice(a,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!r&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,s=[],c=-1,l=[],u={},p=!1;return e.replace(a,(function(a,o){if(p){if(a!=="</"+n.name+">")return;p=!1}var d,m="/"!==a.charAt(1),v=0===a.indexOf("\x3c!--"),f=o+a.length,b=e.charAt(f);m&&!v&&(c++,"tag"===(n=r(a)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!b||"<"===b||i(n.children,e,c,f,t.ignoreWhitespace),u[n.tagName]=n,0===c&&s.push(n),(d=l[c-1])&&d.children.push(n),l[c]=n),(v||!m||n.voidElement)&&(v||c--,!p&&"<"!==b&&b&&i(d=-1===c?s:l[c].children,e,c,f,t.ignoreWhitespace))})),!s.length&&e.length&&i(s,e,0,0,t.ignoreWhitespace),s}},225:function(e,t,n){var a=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=n(226);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(a,(function(a){if("="===a)return o=!0,void n++;o?0===n?((r[a]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=a):(i.attrs[t]=a.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=a),n++,o=!1})),i}},226:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},227:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(251),r=n.n(a).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return r}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(9),r=n.n(a),o=n(849),i=n(213),s=n(205),c=n(204);function l(){var e=Object(s.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return l=function(){return e},e}function u(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return u=function(){return e},e}function p(){var e=Object(s.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return p=function(){return e},e}function d(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return d=function(){return e},e}var m=c.default.div(d(),(function(e){return e.theme.breakpoints.tablet})),v=(c.default.div(p()),c.default.div(u(),(function(e){return e.theme.colors.purple}))),f=c.default.div(l(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),b=r.a.memo((function(e){var t=e.className,n=void 0===t?"":t,a=e.radius,s=void 0===a?30:a,c=e.stroke,l=void 0===c?6:c,u=e.currentStep,p=void 0===u?2:u,d=e.totalSteps,b=void 0===d?4:d,h=e.color,y=void 0===h?i.a.green:h,g=e.colorTrack,O=void 0===g?i.a.gray3:g,S=e.progressBar,j=void 0!==S&&S,x=Object(o.a)().t,w=p/b*100,E=s-l/2,C=2*E*Math.PI,k=C-w/100*C;return r.a.createElement(r.a.Fragment,null,j?r.a.createElement(v,null,x("questionary:progressBar",{currentStep:p,totalSteps:b}),r.a.createElement(f,{currentStep:p,totalSteps:b})):r.a.createElement(m,{className:n},r.a.createElement("svg",{width:2*s,height:2*s,viewBox:"0 0 ".concat(2*s," ").concat(2*s)},r.a.createElement("circle",{className:"track",stroke:O,fill:"transparent",strokeWidth:l,r:E,cx:s,cy:s}),r.a.createElement("circle",{stroke:y,fill:"transparent",strokeWidth:l,strokeDasharray:"".concat(C," ").concat(C),style:{strokeDashoffset:k},r:E,cx:s,cy:s}),r.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(p,"/").concat(b)))))}))},235:function(e,t,n){"use strict";var a=n(239);t.a=function(){return{isBrowser:a.isBrowser?Object(a.deviceDetect)():null,isMobile:a.isMobile?Object(a.deviceDetect)():null,isSmartTv:a.isSmartTV?Object(a.deviceDetect)():null,isConsole:a.isConsole?Object(a.deviceDetect)():null,isTablet:a.isTablet?Object(a.deviceDetect)():null,isWearable:a.isWearable?Object(a.deviceDetect)():null}}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(9),r=n.n(a),o=n(260),i=n(849),s=n(17),c=n(205);function l(){var e=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return l=function(){return e},e}var u=n(204).default.div(l()),p=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,a=Object(i.a)().i18n;return r.a.createElement(u,null,r.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),s.a("Error on ReCAPTCHA")},hl:a.language}))}},246:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return f}));var a=n(211),r=n.n(a),o=n(212),i=n(229),s=n(220),c=n(235);function l(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,p,d,m,v,f,b,h,y,g,O,S,j,x,w,E,C,k,I,T,q,A,D,F,R,P;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,l=t.setActiveStep,u=t.history,e.prev=1,n(null),f=a.welcome,b=f.language,h=f.country,y=f.region,g=f.patientId,O=f.hospitalId,S=a["submit-steps"],j=S.vaccine,x=S.ageGroup,w=S.gender,E=S.ethnicity,C=S.biologicalSex,k=S.smokeLastSixMonths,I=S.currentSymptoms,T=S.symptomsStartedDate,q=S.currentRespiratoryCondition,A=S.currentMedicalCondition,(D=new FormData).append("device",JSON.stringify(Object(c.a)())),D.append("language",b),D.append("country",h),y&&D.append("region",y),O&&D.append("hospitalId",O),window.sourceCampaign&&D.append("source",window.sourceCampaign),j&&D.append("vaccine",j),x&&D.append("ageGroup",x),(F=w.other||w.selected[0])&&D.append("gender",F),E&&D.append("ethnicity",E),C&&D.append("biologicalSex",C),k&&D.append("smokeLastSixMonths",k),(null===I||void 0===I||null===(p=I.selected)||void 0===p?void 0:p.length)>0&&D.append("currentSymptoms",I.selected.join(",")),T&&D.append("symptomsStartedDate",T),(null===q||void 0===q||null===(d=q.selected)||void 0===d?void 0:d.length)>0&&D.append("currentRespiratoryCondition",q.selected.join(",")),(null===A||void 0===A||null===(m=A.selected)||void 0===m?void 0:m.length)>0&&D.append("currentMedicalCondition",A.selected.join(",")),(null===I||void 0===I?void 0:I.other)&&D.append("otherSymptoms",null===I||void 0===I?void 0:I.other),(null===q||void 0===q?void 0:q.other)&&D.append("otherRespiratoryConditions",null===q||void 0===q?void 0:q.other),(null===A||void 0===A?void 0:A.other)&&D.append("otherMedicalConditions",null===A||void 0===A?void 0:A.other),o&&D.append("captchaValue",o),e.next=29,i.a.post("/patient/".concat(g,"/questionary"),D,{headers:{"Content-Type":"multipart/form-data; boundary=Questionary"}});case 29:R=e.sent,s&&(null===(v=R.data)||void 0===v?void 0:v.submissionId)&&(l(!1),u.push(s,{submissionId:null===(P=R.data)||void 0===P?void 0:P.submissionId,patientId:g})),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 37:case"end":return e.stop()}}),e,null,[[1,33]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,p,d,m,v,f,b,h,y,g,O,S,j,x,w,E,C,k;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,l=t.setActiveStep,u=t.history,e.prev=1,n(null),m=a.welcome,v=m.language,f=m.country,b=m.region,h=m.patientId,y=m.hospitalId,g=a["submit-steps"],O=g.ageGroup,S=g.gender,j=g.currentSymptoms,x=g.symptomsStartedDate,(w=new FormData).append("device",JSON.stringify(Object(c.a)())),w.append("language",v),w.append("country",f),b&&w.append("region",b),y&&w.append("hospitalId",y),window.sourceCampaign&&w.append("source",window.sourceCampaign),O&&w.append("ageGroup",O),(E=S.other||S.selected[0])&&w.append("gender",E),(null===j||void 0===j||null===(p=j.selected)||void 0===p?void 0:p.length)>0&&w.append("currentSymptoms",j.selected.join(",")),x&&w.append("symptomsStartedDate",x),o&&w.append("captchaValue",o),e.next=20,i.a.post("/patient/".concat(h,"/shortQuestionary"),w,{headers:{"Content-Type":"multipart/form-data; boundary=ShortQuestionary"}});case 20:C=e.sent,s&&(null===(d=C.data)||void 0===d?void 0:d.submissionId)&&(l(!1),u.push(s,{submissionId:null===(k=C.data)||void 0===k?void 0:k.submissionId,patientId:h})),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 28:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(r.a.mark((function e(t){var n,a,o,l,u,p,d,m,v,f,b,h,y,g,O,S,j,x,w,E,C,k,I,T,q,A;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,l=t.nextStep,u=t.otherSteps,p=t.setActiveStep,d=t.history,m=t.isShortAudioCollection,e.prev=1,n(null),f=a.welcome,b=f.language,h=f.country,y=f.region,g=f.patientId,O=f.hospitalId,S=a["submit-steps"],j=S.recordYourCough,x=S.recordYourBreath,w=S.recordYourSpeech,(E=new FormData).append("device",JSON.stringify(Object(c.a)())),E.append("language",b),E.append("country",h),y&&E.append("region",y),O&&E.append("hospitalId",O),window.sourceCampaign&&E.append("source",window.sourceCampaign),j&&(C=j.recordingFile||j.uploadedFile,E.append("cough",C,C.name||"filename.wav")),x&&(k=x.recordingFile||x.uploadedFile,E.append("breath",k,k.name||"filename_breath.wav")),s.b.includes(h)&&w&&(I=w.recordingFile||w.uploadedFile,E.append("voice",I,I.name||"filename_voice.wav")),o&&E.append("captchaValue",o),E.append("shortAudioCollection",m||"false"),e.next=19,i.a.post("/patient/".concat(g,"/audioCollection"),E,{headers:{"Content-Type":"multipart/form-data; boundary=AudioCollection"}});case 19:T=e.sent,m&&(null===u||void 0===u?void 0:u.isShortAudioStep)?(p(!1),d.push(null===u||void 0===u?void 0:u.isShortAudioStep,{submissionId:null===(q=T.data)||void 0===q?void 0:q.submissionId,patientId:g})):l&&(null===(v=T.data)||void 0===v?void 0:v.submissionId)&&(p(!1),d.push(l,{submissionId:null===(A=T.data)||void 0===A?void 0:A.submissionId,patientId:g})),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 27:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,l,u,p,d,m,v,f,b,h,y,g,O,S,j,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,l=t.setActiveStep,u=t.history,e.prev=1,n(null),d=a.welcome,m=d.language,v=d.country,f=d.region,b=d.patientId,h=d.hospitalId,y=a["submit-steps"],g=y.patientAntigenTestResult,O=y.patientPcrTestResult,(S=new FormData).append("device",JSON.stringify(Object(c.a)())),S.append("language",m),S.append("country",v),f&&S.append("region",f),h&&S.append("hospitalId",h),window.sourceCampaign&&S.append("source",window.sourceCampaign),g&&S.append("patientAntigenTestResult",g),O&&S.append("patientPcrTestResult",O),o&&S.append("captchaValue",o),e.next=17,i.a.post("/patient/".concat(b,"/testResult"),S,{headers:{"Content-Type":"multipart/form-data; boundary=testResult"}});case 17:j=e.sent,s&&(null===(p=j.data)||void 0===p?void 0:p.submissionId)&&(l(!1),u.push(s,{submissionId:null===(x=j.data)||void 0===x?void 0:x.submissionId,patientId:b})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(221),r=n.n(a),o=n(222),i=n.n(o),s=n(12),c=n.n(s),l=n(9),u=n.n(l),p=n(223),d=n.n(p),m=n(187),v=n(243);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,a,r){if(""===t)return[];var o=a.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(o.join("|")).test(t);if(!e&&!s)return[t];var c={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(h(t)?e(y(t)):"object"!==i()(t)||u.a.isValidElement(t)||Object.assign(c,t))}))}(e);var l=n.services.interpolator.interpolate(t,b(b({},c),r),n.language),p=d.a.parse("<0>".concat(l,"</0>"));function m(e,t,n){var a=y(e),r=f(a,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.a.isValidElement(e)}))}(a)&&0===r.length?a:r}function v(e,t,n,a){e.dummy&&(e.children=t),n.push(u.a.cloneElement(e,b(b({},e.props),{},{key:a}),t))}function f(t,n,r){var c=g(t);return g(n).reduce((function(t,n,l){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=c[parseInt(n.name,10)];!d&&1===r.length&&r[0][n.name]&&(d=r[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=b({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=u.a.isValidElement(y),O=g&&h(n,!0)&&!n.voidElement,S=s&&"object"===i()(y)&&y.dummy&&!g,j="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(h(y)||O){v(y,m(y,n,r),t,l)}else if(S){var x=f(c,n.children,r);t.push(u.a.cloneElement(y,b(b({},y.props),{},{key:l}),x))}else if(Number.isNaN(parseFloat(n.name))){if(j)v(y,m(y,n,r),t,l);else if(a.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var w=f(c,n.children,r);t.push(u.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},w))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var E=f(c,n.children,r);t.push("<".concat(n.name,">").concat(E,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&p?t.push(u.a.cloneElement(y,b(b({},y.props),{},{key:l}),p)):t.push(u.a.cloneElement(y,b(b({},y.props),{},{key:l})));else{var C=n.children[0]?p:null;C&&t.push(C)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(f([{dummy:!0,children:e}],p,g(e||[]))[0])}function S(e){var t=e.children,n=e.count,a=e.parent,o=e.i18nKey,s=e.tOptions,c=e.values,p=e.defaults,d=e.components,f=e.ns,h=e.i18n,y=e.t,S=r()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(l.useContext)(m.a)||{},x=j.i18n,w=j.defaultNS,E=h||x||Object(m.d)();if(!E)return Object(v.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var C=y||E.t.bind(E)||function(e){return e},k=b(b({},Object(m.c)()),E.options&&E.options.react),I=f||C.ns||w||E.options&&E.options.defaultNS;I="string"===typeof I?[I]:I||["translation"];var T=p||function e(t,n){if(!t)return"";var a="",o=g(t),s=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)a+="".concat(t);else if(u.a.isValidElement(t)){var c=Object.keys(t.props).length,l=s.indexOf(t.type)>-1,p=t.props.children;if(!p&&l&&0===c)a+="<".concat(t.type,"/>");else if(p||l&&0===c)if(t.props.i18nIsDynamicList)a+="<".concat(o,"></").concat(o,">");else if(l&&1===c&&"string"===typeof p)a+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);a+="<".concat(o,">").concat(d,"</").concat(o,">")}else a+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var m=t.format,f=r()(t,["format"]),b=Object.keys(f);if(1===b.length){var h=m?"".concat(b[0],", ").concat(m):b[0];a+="{{".concat(h,"}}")}else Object(v.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(v.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),a}(t,k)||k.transEmptyNodeValue||o,q=k.hashTransKey,A=o||(q?q(T):T),D=c?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},F=b(b(b(b({},s),{},{count:n},c),D),{},{defaultValue:T,ns:I}),R=O(d||t,A?C(A,F):T,E,k,F),P=void 0!==a?a:k.defaultTransParent;return P?u.a.createElement(P,S,R):R}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(211),r=n.n(a),o=n(212),i=n(229),s=n(220),c=n(235);function l(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t){var n,a,o,l,u,p,d,m,v,f,b,h,y,g,O,S,j,x,w,E,C,k,I,T,q,A,D,F,R,P,V,B,M,N,H,J,W,z,G,L,Y,K,Q,$,_,U,Z,X,ee;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,l=t.action,u=t.nextStep,p=t.setActiveStep,d=t.history,e.prev=1,n(null),h=a.welcome,y=h.language,g=h.country,O=h.region,S=h.patientId,j=h.agreedConsentTerms,x=h.agreedPolicyTerms,w=h.agreedCovidDetection,E=h.agreedCovidCollection,C=h.agreedTrainingArtificial,k=h.agreedBiometric,I=a["submit-steps"],T=I.recordYourCough,q=I.recordYourBreath,A=I.recordYourSpeech,D=I.testTaken,F=I.pcrTestDate,R=I.pcrTestResult,P=I.antigenTestDate,V=I.whatAntigenTestResult,B=I.antigenTestResult,M=I.vaccine,N=I.ageGroup,H=I.gender,J=I.ethnicity,W=I.biologicalSex,z=I.smokeLastSixMonths,G=I.currentSymptoms,L=I.symptomsStartedDate,Y=I.currentRespiratoryCondition,K=I.currentMedicalCondition,(Q=new FormData).append("device",JSON.stringify(Object(c.a)())),Q.append("language",y),Q.append("country",g),O&&Q.append("region",O),S&&Q.append("patientId",S),window.sourceCampaign&&Q.append("source",window.sourceCampaign),Q.append("agreedConsentTerms",j),Q.append("agreedPolicyTerms",x),Q.append("agreedCovidCollection",E),Q.append("agreedCovidDetection",w),Q.append("agreedTrainingArtificial",C),Q.append("agreedBiometric",k),$=T.recordingFile||T.uploadedFile,Q.append("cough",$,$.name||"filename.wav"),_=q.recordingFile||q.uploadedFile,Q.append("breath",_,_.name||"filename_breath.wav"),s.b.includes(g)&&(U=A.recordingFile||A.uploadedFile,Q.append("voice",U,U.name||"filename_voice.wav")),Q.append("testTaken",D.join(",")),D.includes("pcr")&&(Q.append("pcrTestDate",F.toISOString()),Q.append("pcrTestResult",R)),D.includes("antigen")&&(Q.append("antigenTestDate",P.toISOString()),Q.append("antigenTestResult",B),Q.append("whatAntigenTestResult",V)),M&&Q.append("vaccine",M),N&&Q.append("ageGroup",N),Z=H.other||H.selected[0],J&&Q.append("ethnicity",J),Z&&Q.append("gender",Z),W&&Q.append("biologicalSex",W),z&&Q.append("smokeLastSixMonths",z),(null===G||void 0===G||null===(m=G.selected)||void 0===m?void 0:m.length)>0&&Q.append("currentSymptoms",G.selected.join(",")),L&&Q.append("symptomsStartedDate",L),(null===Y||void 0===Y||null===(v=Y.selected)||void 0===v?void 0:v.length)>0&&Q.append("currentRespiratoryCondition",Y.selected.join(",")),(null===K||void 0===K||null===(f=K.selected)||void 0===f?void 0:f.length)>0&&Q.append("currentMedicalCondition",K.selected.join(",")),(null===G||void 0===G?void 0:G.other)&&Q.append("otherSymptoms",null===G||void 0===G?void 0:G.other),(null===Y||void 0===Y?void 0:Y.other)&&Q.append("otherRespiratoryConditions",null===Y||void 0===Y?void 0:Y.other),(null===K||void 0===K?void 0:K.other)&&Q.append("otherMedicalConditions",null===K||void 0===K?void 0:K.other),o&&Q.append("captchaValue",o),e.next=43,i.a.post("saveSurvey",Q,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 43:X=e.sent,l({}),u&&(null===(b=X.data)||void 0===b?void 0:b.submissionId)&&(p(!1),d.push(u,{submissionId:null===(ee=X.data)||void 0===ee?void 0:ee.submissionId})),e.next=52;break;case 48:e.prev=48,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 52:case"end":return e.stop()}}),e,null,[[1,48]])})))).apply(this,arguments)}},297:function(e,t,n){"use strict";n.r(t);var a=n(211),r=n.n(a),o=n(234),i=n(212),s=n(206),c=n(9),l=n.n(c),u=n(244),p=n(215),d=n.n(p),m=n(849),v=n(250),f=n(214),b=n(210),h=n(231),y=n(219),g=n(232),O=n(218),S=n(237),j=n(230),x=n(207),w=n(220),E=n(208),C=n(275),k=n(246),I=n(247),T=n(217),q=n(236),A=g.object({currentMedicalCondition:g.object()}).defined();t.default=l.a.memo((function(e){var t=e.previousStep,n=e.nextStep,a=e.storeKey,p=e.metadata,g=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,D=Object(x.a)(),F=D.setDoGoBack,R=D.setTitle,P=D.setType,V=Object(u.g)(),B=Object(m.a)().t,M=Object(b.d)(Object(O.b)(a)),N=M.state,H=M.action,J=Object(w.e)(),W=Object(w.d)(),z=l.a.useState(!0),G=Object(s.a)(z,2),L=G[0],Y=G[1],K=Object(f.e)({defaultValues:null===N||void 0===N?void 0:N[a],resolver:Object(h.a)(A)}),Q=K.control,$=K.handleSubmit,_=K.formState,U=_.errors,Z=l.a.useState(null),X=Object(s.a)(Z,2),ee=X[0],te=X[1],ne=l.a.useState(null),ae=Object(s.a)(ne,2),re=ae[0],oe=ae[1],ie=l.a.useState(!0),se=Object(s.a)(ie,2),ce=se[0],le=se[1],ue=_.isSubmitting;Object(c.useEffect)((function(){re||te(null)}),[re]);var pe=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(C.a)({setSubmitError:function(e){return te(e?B(e):null)},state:Object(o.a)(Object(o.a)({},N),{},{"submit-steps":Object(o.a)(Object(o.a)({},N["submit-steps"]),t)}),captchaValue:re,action:H,nextStep:n,setActiveStep:Y,history:V});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(k.b)({setSubmitError:function(e){return te(e?B(e):null)},state:Object(o.a)(Object(o.a)({},N),{},{"submit-steps":Object(o.a)(Object(o.a)({},N["submit-steps"]),t)}),captchaValue:re,action:H,nextStep:n,setActiveStep:Y,history:V});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=l.a.useCallback((function(){Y(!1),t?V.push(t):V.goBack()}),[V,t]);Object(c.useEffect)((function(){Object(E.a)(),R("".concat(B("questionary:respiration.title"))),P("primary"),F((function(){return me}))}),[me,F,R,P,p,B]);var ve=l.a.useMemo((function(){return"Japan"===W?[{value:"none",label:B("questionary:medical.options.none")},{value:"allergies",label:B("questionary:medical.options.allergies")},{value:"asthma",label:B("questionary:medical.options.asthma")},{value:"bronchitis",label:B("questionary:medical.options.bronchitis")},{value:"congestiveHeartFailure",label:B("questionary:medical.options.congestiveHeart")},{value:"copdEmphysema",label:B("questionary:medical.options.emphysema")},{value:"extremeObesity",label:B("questionary:medical.options.obesity")},{value:"heartDisease",label:B("questionary:medical.options.heartDisease")},{value:"hivAidsOrImpairedImmuneSystem",label:B("questionary:medical.options.hiv")},{value:"lungCancer",label:B("questionary:medical.options.lungCancer")},{value:"otherChronic",label:B("questionary:medical.options.otherChronic")},{value:"pneumonia",label:B("questionary:medical.options.pneumonia")},{value:"pulmonaryFibrosis",label:B("questionary:medical.options.pulmonary")},{value:"sinusitis",label:B("questionary:medical.options.sinusitis")},{value:"tuberculosis",label:B("questionary:medical.options.tuberculosis")},{value:"other",label:B("questionary:medical.options.other")}]:[{value:"none",label:B("questionary:medical.options.none")},{value:"allergies",label:B("questionary:medical.options.allergies")},{value:"asthma",label:B("questionary:medical.options.asthma")},{value:"bronchitis",label:B("questionary:medical.options.bronchitis")},{value:"congestiveHeartFailure",label:B("questionary:medical.options.congestiveHeart")},{value:"copdEmphysema",label:B("questionary:medical.options.emphysema")},{value:"extremeObesity",label:B("questionary:medical.options.obesity")},{value:"heartDisease",label:B("questionary:medical.options.heartDisease")},{value:"hivAidsOrImpairedImmuneSystem",label:B("questionary:medical.options.hiv")},{value:"lungCancer",label:B("questionary:medical.options.lungCancer")},{value:"otherChronic",label:B("questionary:medical.options.otherChronic")},{value:"pneumonia",label:B("questionary:medical.options.pneumonia")},{value:"pulmonaryFibrosis",label:B("questionary:medical.options.pulmonary")},{value:"reflux",label:B("questionary:medical.options.reflux")},{value:"sinusitis",label:B("questionary:medical.options.sinusitis")},{value:"tuberculosis",label:B("questionary:medical.options.tuberculosis")},{value:"other",label:B("questionary:medical.options.other")}]}),[W,B]);return l.a.createElement(q.MainContainer,null,l.a.createElement(j.a,{currentStep:null===p||void 0===p?void 0:p.current,totalSteps:null===p||void 0===p?void 0:p.total,progressBar:!0}),l.a.createElement(q.QuestionText,{extraSpace:!0,first:!0},l.a.createElement(v.a,{i18nKey:"questionary:medical.question"},l.a.createElement("strong",null,"Which of the below medical conditions do you currently have?")),l.a.createElement(q.QuestionAllApply,null,B("questionary:allThatApply"))),l.a.createElement(f.a,{control:Q,name:"currentMedicalCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(I.a,{isCheckbox:!0,value:n,onChange:function(e){return t(e)},items:ve,excludableValues:["none"]})}}),l.a.createElement("p",null,l.a.createElement(y.a,{errors:U,name:"name"})),L&&l.a.createElement(g,null,(!J||J&&"Colombia"!==W)&&l.a.createElement(S.a,{onChange:oe,setRecaptchaAvailable:le}),ee&&l.a.createElement(q.TempBeforeSubmitError,null,ee),l.a.createElement(T.a,{invert:!0,leftLabel:B(ue?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:"Colombia"!==W?ue||ce&&!re:ue,leftHandler:$(J?de:pe)})))}))},334:function(e,t,n){"use strict";n.r(t);var a=n(297);n.d(t,"default",(function(){return a.default}))}}]);
//# sourceMappingURL=28.41d5c4b8.chunk.js.map