(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{748:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/properties/new",function(){return t(6264)}])},1051:function(e,n,t){"use strict";t.d(n,{$_:function(){return m}});var r=t(5893),a=t(4184),l=t.n(a),s=t(7536);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e,n){return function(t){var a=t.name,i=t.label,u=t.inputId,d=t.className,m=t.wrapInput,p=t.registerOptions,h=t.showOptionalLabel,b=o(t,["name","label","inputId","className","wrapInput","registerOptions","showOptionalLabel"]),x=(0,s.Gc)(),j=x.register,v=(0,x.getFieldState)(a).error,g=c({className:l()(n,{"input-bordered input-error":!!v})},j(a,p),b),N=e(g);return(0,r.jsxs)("div",{className:l()("form-control",d),children:[(0,r.jsxs)("label",{htmlFor:u,className:"label",children:[i?(0,r.jsx)("span",{className:"label-text",children:i}):null,h?(0,r.jsx)("span",{className:"label-text",children:"(Optional)"}):null]}),m?(0,r.jsx)("label",{htmlFor:u,className:"input-group",children:m(N)}):N,v?(0,r.jsx)("label",{htmlFor:u,className:"label",children:(0,r.jsx)("span",{className:"label-text text-red-500",children:f(v)})}):null]})}}var d=u((function(e){return(0,r.jsx)("input",c({},e))}),"input"),m=u((function(e){return(0,r.jsx)("textarea",c({},e))}),"textarea");function f(e){return e.message?e.message:e.message||"Invalid input"}n.ZP=d},6222:function(e,n,t){"use strict";t.d(n,{p:function(){return c}});var r=t(5893),a=t(4184),l=t.n(a),s=t(865),i=t.n(s),c=function(e){return(0,r.jsxs)("div",{className:"fixed inset-0 bg-stone-900/80 flex flex-col items-center justify-center",children:[(0,r.jsxs)("div",{className:l()(i()["mosaic-loader"],e.className),children:[(0,r.jsx)("div",{className:l()(i().cell,i()["d-0"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-1"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-2"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-3"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-1"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-2"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-3"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-4"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-2"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-3"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-4"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-5"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-3"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-4"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-5"])}),(0,r.jsx)("div",{className:l()(i().cell,i()["d-6"])})]}),(0,r.jsx)("span",{className:"mt-4",children:"Loading..."})]})}},3445:function(e,n,t){"use strict";t.d(n,{CU:function(){return d},Lu:function(){return f},_e:function(){return m}});var r=t(5503),a=t(6257),l=t(7294),s=t(7702);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}var o=(0,r.ZF)({apiKey:"AIzaSyAtAiyg971QlDyip5WB8bpSnMihXhbft1k",authDomain:"ip-chain.firebaseapp.com",projectId:"ip-chain",storageBucket:"ip-chain.appspot.com",messagingSenderId:"654335862878",appId:"1:654335862878:web:24a1f64f2193421b552ccf"}),u=(0,a.ad)(o);(0,s.v0)();function d(){return u}function m(e,n){var t=d(),r=(0,l.useState)(0),s=r[0],i=r[1],o=(0,l.useCallback)((function(){return i(s+1)}),[s]),u=(0,l.useState)({refetch:o,loading:!0}),m=u[0],f=u[1];return(0,l.useEffect)((function(){n&&(f({refetch:o,loading:!0}),(0,a.QT)((0,a.JU)(t,e,n)).then((function(e){e.exists()?f({refetch:o,data:c({},e.data(),{id:e.id}),loading:!1}):f({refetch:o,loading:!1,error:"not found"})})))}),[t,e,n,o]),m}function f(e){var n=d(),t=(0,l.useState)(0),r=t[0],s=t[1],i=(0,l.useCallback)((function(){return s(r+1)}),[r]),o=(0,l.useState)({refetch:i,loading:!0}),u=o[0],m=o[1];return(0,l.useEffect)((function(){m({refetch:i,loading:!0}),(0,a.PL)((0,a.IO)((0,a.hJ)(n,e))).then((function(e){var n=[];e.forEach((function(e){return n.push(c({},e.data(),{id:e.id}))})),m({data:n,refetch:i,loading:!1})}),(function(e){return m({refetch:i,loading:!1,error:e.toString()})}))}),[n,e,i]),u}},5406:function(e,n,t){"use strict";t.d(n,{E:function(){return c}});var r=t(5893),a=t(7294),l=t(7649),s=t(6222),i=function(e){var n=e.children,t=(0,a.useState)(!1),i=t[0],c=t[1];return(0,a.useEffect)((function(){c(!0)}),[]),i?(0,r.jsx)(l.b,{children:n}):(0,r.jsx)(s.p,{})};function c(e){return(0,r.jsx)(i,{children:e})}},6264:function(e,n,t){"use strict";t.r(n),t.d(n,{NewPropertyPage:function(){return v}});var r=t(4051),a=t.n(r),l=t(5893),s=t(1664),i=t.n(s),c=t(7536),o=t(5406),u=t(3445),d=t(6257),m=t(4184),f=t.n(m),p=t(1051),h=t(1163);function b(e,n,t,r,a,l,s){try{var i=e[l](s),c=i.value}catch(o){return void t(o)}i.done?n(c):Promise.resolve(c).then(r,a)}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}var v=function(){var e=(0,u.CU)(),n=(0,h.useRouter)(),t=(0,c.cI)({mode:"all",defaultValues:{name:"",contentUrl:"",oneTimeFee:"",description:"",legalTemplate:""}}),r=t.register,s=t.handleSubmit,o=t.formState.isSubmitting;return(0,l.jsxs)("div",{className:"w-full max-w-3xl m-auto",children:[(0,l.jsx)("div",{className:"prose dark:prose-invert",children:(0,l.jsx)("h1",{children:"New property"})}),(0,l.jsx)(c.RV,j({},t,{children:(0,l.jsxs)("form",{onSubmit:s(function(){var t,r=(t=a().mark((function t(r){var l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("DATA SUBMITTED",r),t.next=3,(0,d.ET)((0,d.hJ)(e,"properties"),r);case 3:l=t.sent,n.push("/properties/".concat(l.id));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var l=t.apply(e,n);function s(e){b(l,r,a,s,i,"next",e)}function i(e){b(l,r,a,s,i,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}()),children:[(0,l.jsxs)("section",{className:"mt-8 p-8 border border-primary rounded-lg",children:[(0,l.jsx)("h3",{className:"text-lg",children:"Content"}),(0,l.jsx)(p.ZP,{className:"max-w-sm",name:"name",label:"Name",registerOptions:{required:{value:!0,message:"A name must be provided"}}}),(0,l.jsx)(p.ZP,{className:"mt-4 max-w-sm",name:"contentUrl",label:"Link to content",registerOptions:{required:{value:!0,message:"A link to the original content is required"}}}),(0,l.jsx)(p.ZP,{name:"storefrontImageUrl",label:"Storefront image URL",className:"mt-4 max-w-sm",showOptionalLabel:!0}),(0,l.jsx)(p.$_,{name:"description",label:"Description",className:"mt-4",showOptionalLabel:!0}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)("h3",{className:"text-lg mb-4",children:"Monetization"}),(0,l.jsx)(p.ZP,{name:"oneTimeFee",label:"One-time fee",type:"number",min:0,step:"1",placeholder:"e.g. 100",registerOptions:{required:!0},wrapInput:function(e){return(0,l.jsxs)(l.Fragment,{children:[e,(0,l.jsx)("span",{children:(0,l.jsx)("span",{className:"kbd kbd-xs",children:"NEO"})})]})}}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)("h3",{className:"text-lg mb-4",children:"Usage"}),(0,l.jsxs)("div",{className:"mt-4 form-control",children:[(0,l.jsx)("label",{htmlFor:"",className:"label",children:(0,l.jsx)("span",{className:"label-text",children:"Pick a template"})}),(0,l.jsxs)("select",j({className:"select w-full max-w-sm"},r("legalTemplate",{required:!0}),{children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Pick one"}),(0,l.jsx)("option",{value:"1",children:"Legal template 1"}),(0,l.jsx)("option",{value:"2",children:"Legal template 2"})]}))]})]}),(0,l.jsxs)("div",{className:"mt-8 flex flex-row justify-end",children:[(0,l.jsx)(i(),{href:"/dashboard",children:(0,l.jsx)("a",{className:"btn btn-ghost",children:"Back to dashboard"})}),(0,l.jsx)("button",{className:f()("ml-4 btn btn-primary",{loading:o}),children:"Create property"})]})]})}))]})};v.applyLayout=o.E,n.default=v},865:function(e){e.exports={"mosaic-loader":"Preloader_mosaic-loader__jq8NF",cell:"Preloader_cell__lBHYZ",ripple:"Preloader_ripple__R9Jzf","d-1":"Preloader_d-1__p6lZ4","d-2":"Preloader_d-2__lx_Xc","d-3":"Preloader_d-3__o1U_O","d-4":"Preloader_d-4__ZLgWD","d-5":"Preloader_d-5__CQzvL","d-6":"Preloader_d-6__myXah"}}},function(e){e.O(0,[16,612,131,998,774,888,179],(function(){return n=748,e(e.s=n);var n}));var n=e.O();_N_E=n}]);