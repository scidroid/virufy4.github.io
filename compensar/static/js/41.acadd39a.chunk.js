(this["webpackJsonpcompensar-app"]=this["webpackJsonpcompensar-app"]||[]).push([[41],{255:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return u}));var o=n(240),a=n(207),c="/submit-steps";function r(t){return[{path:"",componentPath:"Welcome/Step2",props:{storeKey:t,nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:t,previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-4")}}]}function p(t){return[{path:"/step-4",componentPath:"Welcome/Step4",props:{storeKey:t,previousStep:"".concat("/welcome","/step-3"),nextStep:"".concat("/welcome","/step-5")}},{path:"/step-5",componentPath:"Welcome/Step5",props:{storeKey:t,previousStep:"".concat("/welcome","/step-4"),nextStep:"/submit-steps/step-record/cough"}}]}function u(t){return[].concat(Object(o.a)(function(t){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:t,previousStep:"/welcome/step-5",nextStep:"".concat(c,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(c,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough"}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/cough"),nextStep:"".concat(c,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:t,previousStep:"".concat(c,"/step-record/cough"),nextStep:"".concat(c,"/questionary/step1"),otherSteps:{isShortAudioStep:"".concat(c,"/thank-you")},metadata:{currentLogic:"recordYourCough"}}}]}(t)),Object(o.a)(function(t){var e={total:2,progressCurrent:2,progressTotal:2};return[{path:"/questionary/step1",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1"),props:{storeKey:t,previousStep:"".concat(c,"/step-listen/cough"),nextStep:"".concat(c,"/questionary/step2"),metadata:Object(a.a)({},e)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step1"),nextStep:"".concat(c,"/questionary/step3"),metadata:Object(a.a)({current:1},e)}},{path:"/questionary/step3",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step3"),props:{storeKey:t,previousStep:"".concat(c,"/questionary/step2"),nextStep:"".concat(c,"/thank-you"),metadata:Object(a.a)({current:2},e)}}]}(t)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:t,previousStep:"".concat(c,"/before-submit"),nextStep:"/welcome"}}])}},257:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var o=n(196),a=n(9),c=n.n(a),r=n(81),p=n(317),u=n(214),s=n(199),i=n(195),m=n(194);function l(){var t=Object(i.a)(["\n  padding-bottom: 40px; \n\n  @media screen and (","){\n    margin: auto;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return l=function(){return t},t}var h=m.default.div(l(),(function(t){return t.theme.breakpoints.tablet}));function d(){var t=Object(i.a)(["\n  margin-bottom: 24px;\n"]);return d=function(){return t},t}function f(){var t=Object(i.a)(["\n  height: 100%;\n"]);return f=function(){return t},t}function b(){var t=Object(i.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return b=function(){return t},t}var S=m.default.div(b()),g=m.default.div(f()),v=m.default.div(d()),y=Object(r.a)((function(t){var e=t.container;return n(268)("./".concat(e))}),{fallback:c.a.createElement("div",null,"Loading ...")});var j=c.a.memo((function(t){var e=t.steps,n=t.children,a=Object(u.i)(),r=Object(u.h)(),i=c.a.useState(!1),m=Object(o.a)(i,2),l=m[0],d=m[1],f=c.a.useMemo((function(){var t=a.url.replace(/\/$/,"");return e.map((function(e){return t+e.path}))}),[a.url,e]);return c.a.useEffect((function(){d(!0)}),[]),c.a.createElement(s.a,null,c.a.createElement(S,null,c.a.createElement(g,null,l&&c.a.createElement(p.a,{location:r,timing:"ease-in-out",duration:500,pathList:f},e.map((function(t){return c.a.createElement(u.b,{key:t.componentPath,exact:!0,path:Array.isArray(t.path)?t.path.map((function(t){return a.path+t})):a.path+t.path,render:function(){return c.a.createElement(h,null,c.a.createElement(y,Object.assign({container:t.componentPath},t.props)))}})})))),c.a.createElement(v,{id:"wizard-buttons"},n)))}))},285:function(t,e,n){"use strict";n.r(e);var o=n(240),a=n(197),c=n(9),r=n.n(c),p=n(214),u=n(199),s=n(257),i=n(195),m=n(194);function l(){var t=Object(i.a)(["\n  background-color: ",";\n  border-radius: 50%;\n  display: inline-block;\n\n  height: 7px;\n  width: 7px;\n\n  &:not(:first-of-type){\n    margin-left: 6px;\n  };\n\n  &.active {\n    background-color: ",";\n  };\n\n"]);return l=function(){return t},t}function h(){var t=Object(i.a)(["\n  display: flex;\n  justify-content:center;\n  padding: 0;\n  margin-bottom: 22px;\n\n @media screen and (","){\n    margin-bottom: 40px;\n  }\n"]);return h=function(){return t},t}var d=m.default.ul(h(),(function(t){return t.theme.breakpoints.tablet})),f=m.default.li(l(),(function(t){return t.theme.colors.gray}),(function(t){return t.theme.colors.darkBlack})),b=r.a.memo((function(t){var e=t.className,n=void 0===e?"":e,o=t.current,a=t.total,c=r.a.useMemo((function(){for(var t=[],e=0;e<a;e+=1)t.push(r.a.createElement(f,{className:e===o?"active":"",id:"WelcomeStepButton-".concat(e),key:"WelcomeStepButton-".concat(e)}));return t}),[o,a]);return r.a.createElement(d,{className:n},c)})),S=n(255);Object(u.c)(window.localStorage);Object(u.b)(Object(a.a)({},"welcome",{}),{name:"compensar-app-wizard"});var g=Object(S.b)("welcome"),v=Object(S.c)("welcome"),y=[].concat(Object(o.a)(g),Object(o.a)(v));e.default=r.a.memo((function(){var t=Object(p.h)(),e=Object(p.i)(),n=t.pathname.replace(e.url,""),o=v.findIndex((function(t){return t.path===n}));return r.a.createElement(s.a,{steps:y},o>=0&&r.a.createElement(b,{current:o,total:v.length}))}))}}]);
//# sourceMappingURL=41.acadd39a.chunk.js.map