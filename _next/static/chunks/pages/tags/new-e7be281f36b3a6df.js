(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{2645:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/new",function(){return t(5393)}])},1051:function(e,r,t){"use strict";t.d(r,{$_:function(){return m}});var n=t(5893),a=t(4184),s=t.n(a),l=t(7536);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){i(e,r,t[r])}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e,r){return function(t){var a=t.hint,i=t.name,d=t.label,u=t.inputId,m=t.className,h=t.wrapInput,f=t.registerOptions,b=t.showOptionalLabel,x=c(t,["hint","name","label","inputId","className","wrapInput","registerOptions","showOptionalLabel"]),j=(0,l.Gc)(),v=j.register,g=(0,j.getFieldState)(i).error,N=o({className:s()(r,{"input-bordered input-error":!!g})},v(i,f),x),y=e(N);return(0,n.jsxs)("div",{className:s()("form-control",m),children:[(0,n.jsxs)("label",{htmlFor:u,className:"label",children:[d?(0,n.jsx)("span",{className:"label-text",children:d}):null,b?(0,n.jsx)("span",{className:"label-text",children:"(Optional)"}):null]}),h?(0,n.jsx)("label",{htmlFor:u,className:"input-group",children:h(y)}):y,g?(0,n.jsx)("label",{htmlFor:u,className:"label",children:(0,n.jsx)("span",{className:"label-text text-red-500",children:p(g)})}):a?(0,n.jsx)("label",{htmlFor:u,className:"label",children:(0,n.jsx)("span",{className:"label-text text-base-content text-xs",children:a})}):null]})}}var u=d((function(e){return(0,n.jsx)("input",o({},e))}),"input"),m=d((function(e){return(0,n.jsx)("textarea",o({},e))}),"textarea");function p(e){return e.message?e.message:e.message||"Invalid input"}r.ZP=u},5406:function(e,r,t){"use strict";t.d(r,{E:function(){return i}});var n=t(5893),a=(t(7294),t(7649)),s=t(1850),l=function(e){var r=e.children;return(0,n.jsx)(s.Kl,{children:(0,n.jsx)(a.b,{children:r})})};function i(e){return(0,n.jsx)(l,{children:e})}},5393:function(e,r,t){"use strict";t.r(r),t.d(r,{NewTagPage:function(){return N}});var n=t(4051),a=t.n(n),s=t(5893),l=t(1051),i=t(1850),o=t(9110),c=t(5406),d=t(4184),u=t.n(d),m=t(5321),p=t(1664),h=t.n(p),f=t(1163),b=t(7536);function x(e,r,t,n,a,s,l){try{var i=e[s](l),o=i.value}catch(c){return void t(c)}i.done?r(o):Promise.resolve(o).then(n,a)}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){j(e,r,t[r])}))}return e}function g(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var N=function(){var e=(0,o.CU)(),r=(0,f.useRouter)(),t=(0,b.cI)({mode:"all"}),n=(0,i.pf)(),c=n.user,d=(n.profile,(0,o.Lu)("properties")),p=t.control,j=t.handleSubmit,N=t.formState.isSubmitting,y=(0,b.Dq)({control:p,name:"properties"}),w=y.fields,O=y.append,k=(y.remove,d.data||[]);return(0,s.jsxs)("div",{className:"w-full max-w-3xl m-auto",children:[(0,s.jsx)("div",{className:"prose dark:prose-invert",children:(0,s.jsx)("h1",{children:"New tag"})}),(0,s.jsx)(b.RV,v({},t,{children:(0,s.jsxs)("form",{onSubmit:j(function(){var t,n=(t=a().mark((function t(n){var s,l,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("DATA SUBMITTED",n),s=n.properties,l=g(n,["properties"]),t.next=4,(0,m.ET)((0,m.hJ)(e,"tags"),v({},l,{userId:c.uid,properties:s.map((function(e){var r=e.property;return{ipChainId:r.id,blockchainAddress:r.id}}))}));case 4:i=t.sent,r.push("/tags/".concat(i.id));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function l(e){x(s,n,a,l,i,"next",e)}function i(e){x(s,n,a,l,i,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}()),children:[(0,s.jsxs)("section",{className:"mt-8 p-8 border border-primary rounded-lg",children:[(0,s.jsx)(l.ZP,{name:"name",label:"Name",className:"max-w-sm",registerOptions:{required:{value:!0,message:"A name must be provided"}}}),(0,s.jsx)(l.ZP,{className:"mt-4 max-w-sm",name:"contentUrl",label:"Link to content",placeholder:"e.g. https://yahoo.com",registerOptions:{required:{value:!0,message:"A link to the content must be provided"}}}),(0,s.jsx)(l.$_,{name:"description",label:"Description",className:"mt-4",showOptionalLabel:!0}),(0,s.jsx)("div",{className:"divider"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h3",{className:"text-lg mb-4",children:"Properties used"}),(0,s.jsx)("p",{className:"text-sm text-slate-300",children:"Give back to the creators that made this work possible"}),w.map((function(e,r){return(0,s.jsx)("div",{className:"mt-4 form-control",children:(0,s.jsx)("a",{href:"/properties/".concat(e.property.id),target:"_blank",rel:"noreferrer",className:"link",children:e.property.name})},e.id)})),(0,s.jsxs)("div",{className:"flex flex-row justify-end",children:[(0,s.jsxs)("label",{htmlFor:"new-derivation-modal",className:"mt-4 btn btn-ghost modal-button",children:[(0,s.jsx)("span",{className:"material-icons",children:"add_circle_outline"}),"\xa0 Add property"]}),(0,s.jsx)("input",{type:"checkbox",id:"new-derivation-modal",className:"modal-toggle"}),(0,s.jsx)("label",{htmlFor:"new-derivation-modal",className:"modal cursor-pointer",children:(0,s.jsxs)("label",{htmlFor:"",className:"modal-box relative",children:[(0,s.jsx)("label",{htmlFor:"new-derivation-modal",className:"btn btn-sm btn-circle absolute right-2 top-2",children:"\u2715"}),(0,s.jsx)("h3",{className:"font-bold text-lg",children:"Choose from options"}),(0,s.jsx)("ul",{className:"flex-1 overflow-y-auto",children:k.map((function(e){return(0,s.jsxs)("li",{className:"mt-4 card card-side bg-stone-800",children:[(0,s.jsx)("figure",{className:"w-32 bg-stone-700 overflow-hidden",children:(0,s.jsx)("img",{src:e.marketplaceImageUrl||"https://via.placeholder.com/300x300/000000/FFFFFF?text=Image+not+available",alt:"Preview of ".concat(e.name)})}),(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h4",{className:"card-title",children:e.name}),e.description?(0,s.jsx)("p",{children:e.description}):null,(0,s.jsx)("div",{className:"card-actions justify-end",children:(0,s.jsx)("label",{htmlFor:"new-derivation-modal",className:"btn btn-primary btn-sm",onClick:function(){return O({property:e})},children:"Use"})})]})]},e.id)}))})]})})]})]}),(0,s.jsx)("div",{className:"divider"}),(0,s.jsx)("h3",{className:"font-bold text-lg",children:"Total cost"}),(0,s.jsx)("div",{className:"flex flex-row justify-end",children:(0,s.jsxs)("span",{children:["1000 ",(0,s.jsx)("span",{className:"kbd kbd-xs",children:"NEO"})]})})]}),(0,s.jsxs)("div",{className:"mt-8 flex flex-row justify-end",children:[(0,s.jsx)(h(),{href:"/dashboard",children:(0,s.jsx)("a",{className:"btn btn-ghost",children:"Back to dashboard"})}),(0,s.jsx)("button",{className:u()("ml-4 btn btn-primary",{loading:N}),children:"Create tag"})]})]})}))]})};N.applyLayout=c.E,r.default=N}},function(e){e.O(0,[536,774,888,179],(function(){return r=2645,e(e.s=r);var r}));var r=e.O();_N_E=r}]);