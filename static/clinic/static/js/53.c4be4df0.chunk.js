(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[53],{220:function(e,t,n){var a=n(78);e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},221:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},222:function(e,t,n){e.exports={parse:n(223),stringify:n(226)}},223:function(e,t,n){var a=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,r=n(224),o=Object.create?Object.create(null):{};function i(e,t,n,a,r){var o=t.indexOf("<",a),i=t.slice(a,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!r&&o>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=o);var n,s=[],c=-1,u=[],l={},p=!1;return e.replace(a,(function(a,o){if(p){if(a!=="</"+n.name+">")return;p=!1}var d,m="/"!==a.charAt(1),f=0===a.indexOf("\x3c!--"),h=o+a.length,v=e.charAt(h);m&&!f&&(c++,"tag"===(n=r(a)).type&&t.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!v||"<"===v||i(n.children,e,c,h,t.ignoreWhitespace),l[n.tagName]=n,0===c&&s.push(n),(d=u[c-1])&&d.children.push(n),u[c]=n),(f||!m||n.voidElement)&&(f||c--,!p&&"<"!==v&&v&&i(d=-1===c?s:u[c].children,e,c,h,t.ignoreWhitespace))})),!s.length&&e.length&&i(s,e,0,0,t.ignoreWhitespace),s}},224:function(e,t,n){var a=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,r=n(225);e.exports=function(e){var t,n=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(a,(function(a){if("="===a)return o=!0,void n++;o?0===n?((r[a]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=a):(i.attrs[t]=a.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=a),n++,o=!1})),i}},225:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},226:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(253),r=n.n(a).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return r}},236:function(e,t,n){"use strict";var a=n(247);t.a=function(){return{isBrowser:a.isBrowser?Object(a.deviceDetect)():null,isMobile:a.isMobile?Object(a.deviceDetect)():null,isSmartTv:a.isSmartTV?Object(a.deviceDetect)():null,isConsole:a.isConsole?Object(a.deviceDetect)():null,isTablet:a.isTablet?Object(a.deviceDetect)():null,isWearable:a.isWearable?Object(a.deviceDetect)():null}}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(9),r=n.n(a),o=n(262),i=n(846),s=n(17),c=n(205);function u(){var e=Object(c.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return u=function(){return e},e}var l=n(204).default.div(u()),p=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,a=Object(i.a)().i18n;return r.a.createElement(l,null,r.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),s.a("Error on ReCAPTCHA")},hl:a.language}))}},248:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return h}));var a=n(212),r=n.n(a),o=n(213),i=n(229),s=n(227),c=n(236);function u(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u,l,p,d,m,f,h,v,b,y,g,O,S,j,w,x,E,C,k,I,A,T,q,D,V,N;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,u=t.setActiveStep,l=t.history,e.prev=1,n(null),h=a.welcome,v=h.language,b=h.country,y=h.region,g=h.patientId,O=h.hospitalId,S=a["submit-steps"],j=S.vaccine,w=S.ageGroup,x=S.gender,E=S.biologicalSex,C=S.smokeLastSixMonths,k=S.currentSymptoms,I=S.symptomsStartedDate,A=S.currentRespiratoryCondition,T=S.currentMedicalCondition,(q=new FormData).append("device",JSON.stringify(Object(c.a)())),q.append("language",v),q.append("country",b),y&&q.append("region",y),O&&q.append("hospitalId",O),window.sourceCampaign&&q.append("source",window.sourceCampaign),j&&q.append("vaccine",j),w&&q.append("ageGroup",w),(D=x.other||x.selected[0])&&q.append("gender",D),E&&q.append("biologicalSex",E),C&&q.append("smokeLastSixMonths",C),(null===k||void 0===k||null===(p=k.selected)||void 0===p?void 0:p.length)>0&&q.append("currentSymptoms",k.selected.join(",")),I&&q.append("symptomsStartedDate",I),(null===A||void 0===A||null===(d=A.selected)||void 0===d?void 0:d.length)>0&&q.append("currentRespiratoryCondition",A.selected.join(",")),(null===T||void 0===T||null===(m=T.selected)||void 0===m?void 0:m.length)>0&&q.append("currentMedicalCondition",T.selected.join(",")),(null===k||void 0===k?void 0:k.other)&&q.append("otherSymptoms",null===k||void 0===k?void 0:k.other),(null===A||void 0===A?void 0:A.other)&&q.append("otherRespiratoryConditions",null===A||void 0===A?void 0:A.other),(null===T||void 0===T?void 0:T.other)&&q.append("otherMedicalConditions",null===T||void 0===T?void 0:T.other),o&&q.append("captchaValue",o),e.next=28,i.a.post("/patient/".concat(g,"/questionary"),q,{headers:{"Content-Type":"multipart/form-data; boundary=Questionary"}});case 28:V=e.sent,s&&(null===(f=V.data)||void 0===f?void 0:f.submissionId)&&(u(!1),l.push(s,{submissionId:null===(N=V.data)||void 0===N?void 0:N.submissionId,patientId:g})),e.next=36;break;case 32:e.prev=32,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 36:case"end":return e.stop()}}),e,null,[[1,32]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u,l,p,d,m,f,h,v,b,y,g,O,S,j,w,x,E,C,k;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,u=t.setActiveStep,l=t.history,e.prev=1,n(null),m=a.welcome,f=m.language,h=m.country,v=m.region,b=m.patientId,y=m.hospitalId,g=a["submit-steps"],O=g.ageGroup,S=g.gender,j=g.currentSymptoms,w=g.symptomsStartedDate,(x=new FormData).append("device",JSON.stringify(Object(c.a)())),x.append("language",f),x.append("country",h),v&&x.append("region",v),y&&x.append("hospitalId",y),window.sourceCampaign&&x.append("source",window.sourceCampaign),O&&x.append("ageGroup",O),(E=S.other||S.selected[0])&&x.append("gender",E),(null===j||void 0===j||null===(p=j.selected)||void 0===p?void 0:p.length)>0&&x.append("currentSymptoms",j.selected.join(",")),w&&x.append("symptomsStartedDate",w),o&&x.append("captchaValue",o),e.next=20,i.a.post("/patient/".concat(b,"/shortQuestionary"),x,{headers:{"Content-Type":"multipart/form-data; boundary=ShortQuestionary"}});case 20:C=e.sent,s&&(null===(d=C.data)||void 0===d?void 0:d.submissionId)&&(u(!1),l.push(s,{submissionId:null===(k=C.data)||void 0===k?void 0:k.submissionId,patientId:b})),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 28:case"end":return e.stop()}}),e,null,[[1,24]])})))).apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(r.a.mark((function e(t){var n,a,o,u,l,p,d,m,f,h,v,b,y,g,O,S,j,w,x,E,C,k,I,A,T,q;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,u=t.nextStep,l=t.otherSteps,p=t.setActiveStep,d=t.history,m=t.isShortAudioCollection,e.prev=1,n(null),h=a.welcome,v=h.language,b=h.country,y=h.region,g=h.patientId,O=h.hospitalId,S=a["submit-steps"],j=S.recordYourCough,w=S.recordYourBreath,x=S.recordYourSpeech,(E=new FormData).append("device",JSON.stringify(Object(c.a)())),E.append("language",v),E.append("country",b),y&&E.append("region",y),O&&E.append("hospitalId",O),window.sourceCampaign&&E.append("source",window.sourceCampaign),j&&(C=j.recordingFile||j.uploadedFile,E.append("cough",C,C.name||"filename.wav")),w&&(k=w.recordingFile||w.uploadedFile,E.append("breath",k,k.name||"filename_breath.wav")),s.a.includes(b)&&x&&(I=x.recordingFile||x.uploadedFile,E.append("voice",I,I.name||"filename_voice.wav")),o&&E.append("captchaValue",o),E.append("shortAudioCollection",m||"false"),e.next=19,i.a.post("/patient/".concat(g,"/audioCollection"),E,{headers:{"Content-Type":"multipart/form-data; boundary=AudioCollection"}});case 19:A=e.sent,m&&(null===l||void 0===l?void 0:l.isShortAudioStep)?(p(!1),d.push(null===l||void 0===l?void 0:l.isShortAudioStep,{submissionId:null===(T=A.data)||void 0===T?void 0:T.submissionId,patientId:g})):u&&(null===(f=A.data)||void 0===f?void 0:f.submissionId)&&(p(!1),d.push(u,{submissionId:null===(q=A.data)||void 0===q?void 0:q.submissionId,patientId:g})),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 27:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(r.a.mark((function e(t){var n,a,o,s,u,l,p,d,m,f,h,v,b,y,g,O,S,j,w;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,s=t.nextStep,u=t.setActiveStep,l=t.history,e.prev=1,n(null),d=a.welcome,m=d.language,f=d.country,h=d.region,v=d.patientId,b=d.hospitalId,y=a["submit-steps"],g=y.patientAntigenTestResult,O=y.patientPcrTestResult,(S=new FormData).append("device",JSON.stringify(Object(c.a)())),S.append("language",m),S.append("country",f),h&&S.append("region",h),b&&S.append("hospitalId",b),window.sourceCampaign&&S.append("source",window.sourceCampaign),g&&S.append("patientAntigenTestResult",g),O&&S.append("patientPcrTestResult",O),o&&S.append("captchaValue",o),e.next=17,i.a.post("/patient/".concat(v,"/testResult"),S,{headers:{"Content-Type":"multipart/form-data; boundary=testResult"}});case 17:j=e.sent,s&&(null===(p=j.data)||void 0===p?void 0:p.submissionId)&&(u(!1),l.push(s,{submissionId:null===(w=j.data)||void 0===w?void 0:w.submissionId,patientId:v})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(220),r=n.n(a),o=n(221),i=n.n(o),s=n(12),c=n.n(s),u=n(9),l=n.n(u),p=n(222),d=n.n(p),m=n(187),f=n(244);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,a,r){if(""===t)return[];var o=a.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(o.join("|")).test(t);if(!e&&!s)return[t];var c={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(b(t)?e(y(t)):"object"!==i()(t)||l.a.isValidElement(t)||Object.assign(c,t))}))}(e);var u=n.services.interpolator.interpolate(t,v(v({},c),r),n.language),p=d.a.parse("<0>".concat(u,"</0>"));function m(e,t,n){var a=y(e),r=h(a,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.a.isValidElement(e)}))}(a)&&0===r.length?a:r}function f(e,t,n,a){e.dummy&&(e.children=t),n.push(l.a.cloneElement(e,v(v({},e.props),{},{key:a}),t))}function h(t,n,r){var c=g(t);return g(n).reduce((function(t,n,u){var p=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var d=c[parseInt(n.name,10)];!d&&1===r.length&&r[0][n.name]&&(d=r[0][n.name]),d||(d={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=v({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},d):d,g=l.a.isValidElement(y),O=g&&b(n,!0)&&!n.voidElement,S=s&&"object"===i()(y)&&y.dummy&&!g,j="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(b(y)||O){f(y,m(y,n,r),t,u)}else if(S){var w=h(c,n.children,r);t.push(l.a.cloneElement(y,v(v({},y.props),{},{key:u}),w))}else if(Number.isNaN(parseFloat(n.name))){if(j)f(y,m(y,n,r),t,u);else if(a.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)}));else{var x=h(c,n.children,r);t.push(l.a.createElement(n.name,{key:"".concat(n.name,"-").concat(u)},x))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var E=h(c,n.children,r);t.push("<".concat(n.name,">").concat(E,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&p?t.push(l.a.cloneElement(y,v(v({},y.props),{},{key:u}),p)):t.push(l.a.cloneElement(y,v(v({},y.props),{},{key:u})));else{var C=n.children[0]?p:null;C&&t.push(C)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(h([{dummy:!0,children:e}],p,g(e||[]))[0])}function S(e){var t=e.children,n=e.count,a=e.parent,o=e.i18nKey,s=e.tOptions,c=e.values,p=e.defaults,d=e.components,h=e.ns,b=e.i18n,y=e.t,S=r()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(u.useContext)(m.a)||{},w=j.i18n,x=j.defaultNS,E=b||w||Object(m.d)();if(!E)return Object(f.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var C=y||E.t.bind(E)||function(e){return e},k=v(v({},Object(m.c)()),E.options&&E.options.react),I=h||C.ns||x||E.options&&E.options.defaultNS;I="string"===typeof I?[I]:I||["translation"];var A=p||function e(t,n){if(!t)return"";var a="",o=g(t),s=n.transKeepBasicHtmlNodesFor||[];return o.forEach((function(t,o){if("string"===typeof t)a+="".concat(t);else if(l.a.isValidElement(t)){var c=Object.keys(t.props).length,u=s.indexOf(t.type)>-1,p=t.props.children;if(!p&&u&&0===c)a+="<".concat(t.type,"/>");else if(p||u&&0===c)if(t.props.i18nIsDynamicList)a+="<".concat(o,"></").concat(o,">");else if(u&&1===c&&"string"===typeof p)a+="<".concat(t.type,">").concat(p,"</").concat(t.type,">");else{var d=e(p,n);a+="<".concat(o,">").concat(d,"</").concat(o,">")}else a+="<".concat(o,"></").concat(o,">")}else if("object"===i()(t)){var m=t.format,h=r()(t,["format"]),v=Object.keys(h);if(1===v.length){var b=m?"".concat(v[0],", ").concat(m):v[0];a+="{{".concat(b,"}}")}else Object(f.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(f.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),a}(t,k)||k.transEmptyNodeValue||o,T=k.hashTransKey,q=o||(T?T(A):A),D=c?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},V=v(v(v(v({},s),{},{count:n},c),D),{},{defaultValue:A,ns:I}),N=O(d||t,q?C(q,V):A,E,k,V),R=void 0!==a?a:k.defaultTransParent;return R?l.a.createElement(R,S,N):N}},296:function(e,t,n){"use strict";n.r(t);var a=n(234),r=n(212),o=n.n(r),i=n(213),s=n(206),c=n(9),u=n.n(c),l=n(243),p=n(211),d=n.n(p),m=n(846),f=n(249),h=n(219),v=n(207),b=n(228),y=n(232),g=n(230),O=n(216),S=n(208),j=n(209),w=n(248),x=n(227),E=n(240),C=n(241),k=n(215),I=n(233),A=g.object({currentSymptoms:g.object().required()}).defined();t.default=u.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,p=e.otherSteps,g=e.metadata,T=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,q=Object(S.a)(),D=q.setDoGoBack,V=q.setTitle,N=q.setType,R=Object(l.g)(),P=Object(m.a)().t,F=Object(v.d)(Object(O.b)(r)),B=F.state,M=F.action,W=Object(x.c)(),J=u.a.useState(!0),K=Object(s.a)(J,2),L=K[0],Q=K[1],z=u.a.useState(null),G=Object(s.a)(z,2),H=G[0],Y=G[1],$=u.a.useState(null),U=Object(s.a)($,2),_=U[0],Z=U[1],X=u.a.useState(!0),ee=Object(s.a)(X,2),te=ee[0],ne=ee[1],ae=Object(h.e)({mode:"onChange",defaultValues:null===B||void 0===B?void 0:B[r],resolver:Object(b.a)(A)}),re=ae.control,oe=ae.handleSubmit,ie=ae.formState,se=ae.watch,ce=ie.errors,ue=ie.isSubmitting,le=ie.isValid;Object(c.useEffect)((function(){_||Y(null)}),[_]);var pe=se("currentSymptoms"),de=null===g||void 0===g?void 0:g.isShortQuestionary,me=u.a.useMemo((function(){var e;return!(!de||0!==(null===pe||void 0===pe?void 0:pe.selected.length)&&!(null===pe||void 0===pe||null===(e=pe.selected)||void 0===e?void 0:e.some((function(e){return"none"===e}))))}),[de,null===pe||void 0===pe?void 0:pe.selected]),fe=u.a.useMemo((function(){return me&&"Colombia"!==W?H?u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{onChange:Z,setRecaptchaAvailable:ne}),u.a.createElement(I.TempBeforeSubmitError,null,H)):u.a.createElement(E.a,{onChange:Z,setRecaptchaAvailable:ne}):null}),[me,H]),he=u.a.useCallback((function(){Q(!1),t?R.push(t):R.goBack()}),[R,t]);Object(c.useEffect)((function(){Object(j.a)(),V("".concat(P("questionary:headerText")," ").concat(null===g||void 0===g?void 0:g.current," ").concat(P("questionary:stepOf")," ").concat(null===g||void 0===g?void 0:g.total)),N("primary"),D((function(){return he}))}),[he,D,V,N,g,P]);var ve=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=17;break}a=t.currentSymptoms,M(t),r=!1,i=0;case 5:if(!(i<(null===(s=a.selected)||void 0===s?void 0:s.length))){e.next=12;break}if("none"===a.selected[i]){e.next=9;break}return r=!0,e.abrupt("break",12);case 9:i++,e.next=5;break;case 12:if(!r||!p){e.next=16;break}return Q(!1),R.push(p.covidSymptomsStep),e.abrupt("return");case 16:n&&(Q(!1),R.push(n));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return M(t),e.next=4,Object(w.c)({setSubmitError:function(e){return Y(e?P(e):null)},state:Object(a.a)(Object(a.a)({},B),{},{"submit-steps":Object(a.a)(Object(a.a)({},B["submit-steps"]),t)}),captchaValue:_,action:M,nextStep:n,setActiveStep:Q,history:R});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(I.MainContainer,null,u.a.createElement(I.QuestionText,{extraSpace:!0,first:!0},u.a.createElement(f.a,{i18nKey:"questionary:symptoms.question"},u.a.createElement("strong",null,"Which of the below symptoms do you currently have?")),u.a.createElement(I.QuestionAllApply,null,P("questionary:allThatApply"))),u.a.createElement(h.a,{control:re,name:"currentSymptoms",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(C.a,{isCheckbox:!0,value:n,onChange:function(e){return t(e)},items:[{value:"none",label:P("questionary:symptoms.options.none")},{value:"bodyAches",label:P("questionary:symptoms.options.bodyAches")},{value:"dryCough",label:P("questionary:symptoms.options.dryCough")},{value:"wetCough",label:P("questionary:symptoms.options.wetCough")},{value:"runnyNose",label:P("questionary:symptoms.options.runnyNose")},{value:"feverChillsSweating",label:P("questionary:symptoms.options.feverChillsSweating")},{value:"headaches",label:P("questionary:symptoms.options.headaches")},{value:"lossTasteAndOrSmell",label:P("questionary:symptoms.options.lossTasteOrSmell")},{value:"newOrWorseCough",label:P("questionary:symptoms.options.worseCough")},{value:"breathShortness",label:P("questionary:symptoms.options.breathShortness")},{value:"soreThroat",label:P("questionary:symptoms.options.soreThroat")},{value:"chestTightness",label:P("questionary:symptoms.options.chestTightness")},{value:"vomitingAndDiarrhea",label:P("questionary:symptoms.options.vomitingAndDiarrhea")},{value:"weakness",label:P("questionary:symptoms.options.weakness")},{value:"other",label:P("questionary:symptoms.options.other")}],excludableValues:["none"]})}}),u.a.createElement("p",null,u.a.createElement(y.a,{errors:ce,name:"name"})),L&&u.a.createElement(T,null,fe,u.a.createElement(k.a,{leftLabel:P(me?ue?"questionary:submitting":"beforeSubmit:submitButton":"questionary:nextButton"),leftDisabled:me&&"Colombia"!==W?ue||te&&!_:!le,leftHandler:oe(me?be:ve),invert:!0})))}))}}]);
//# sourceMappingURL=53.c4be4df0.chunk.js.map