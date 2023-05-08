/*! For license information please see d015f866.0a56195f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[938855],{384837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(824246),r=n(511151);const i={id:"contributing-to-storybook",title:"Contributing to Storybook",description:"Documentation on How to Contribute to Storybook"},s=void 0,a={unversionedId:"dls/contributing-to-storybook",id:"dls/contributing-to-storybook",title:"Contributing to Storybook",description:"Documentation on How to Contribute to Storybook",source:"@site/../docs/dls/contributing-to-storybook.md",sourceDirName:"dls",slug:"/dls/contributing-to-storybook",permalink:"/docs/dls/contributing-to-storybook",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/dls/contributing-to-storybook.md",tags:[],version:"current",frontMatter:{id:"contributing-to-storybook",title:"Contributing to Storybook",description:"Documentation on How to Contribute to Storybook"},sidebar:"docs",previous:{title:"Component Design Guidelines",permalink:"/docs/dls/component-design-guidelines"},next:{title:"Figma",permalink:"/docs/dls/figma"}},c={},u=[{value:"Creating a new Story",id:"creating-a-new-story",level:2},{value:"Running locally",id:"running-locally",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",img:"img",code:"code",em:"em",h2:"h2",blockquote:"blockquote",pre:"pre",strong:"strong"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'The Backstage Storybook provides you a way to explore reusable Backstage User\nInterface elements and how to use them in developing the Backstage core and its\nplugins. These UI elements are commonly called "components", and include things\nsuch as buttons, tables, specialized widgets with specific formatting, and so\non.'}),"\n",(0,o.jsxs)(t.p,{children:["You'll find our storybook at\n",(0,o.jsx)(t.a,{href:"http://backstage.io/storybook",children:"http://backstage.io/storybook"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["As noted in the ",(0,o.jsx)(t.a,{href:"/docs/dls/design",children:"design introduction"}),", Backstage's design is based\noff of ",(0,o.jsx)(t.a,{href:"https://material-ui.com/",children:"Material-UI"}),". Much of the UI elements use\ndirect Material-UI, while we've also extended and written custom ones to provide\nspecific functionality."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Storybook Page",src:n(360246).Z+"",width:"1920",height:"877"})}),"\n",(0,o.jsx)(t.p,{children:'Storybook "Stories" are used to provide examples for how to use a specific\ncomponent, which are then displayed both visually and with sample code to be\ncopied.'}),"\n",(0,o.jsxs)(t.p,{children:["When custom Backstage components are created, they are placed in the\n",(0,o.jsx)(t.code,{children:"@backstage/core-components"})," package and added to the Storybook."]}),"\n",(0,o.jsxs)(t.p,{children:["There may be times where an existing Material-UI component (in\n",(0,o.jsx)(t.code,{children:"@material-ui/core"}),") is sufficient and doesn't need to be wrapped or duplicated.\nHowever, we may want to identify an ",(0,o.jsx)(t.em,{children:"opinionated"})," way to use that component\ninside of Backstage. In these cases, stories showing how to use those existing\ncomponents will also be put into our storybook."]}),"\n",(0,o.jsx)(t.p,{children:"When a story example using Material-UI becomes more complex, requiring a\nspecific set of colors, variants, parameters, etc., it may become a candidate to\nbe refactored to become a full Backstage core component."}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-new-story",children:"Creating a new Story"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"A Story basically represents a single visual state of a component."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To create a new story, create a new file located alongside the component you\nwant to document on Storybook."}),"\n",(0,o.jsx)(t.p,{children:"See below an example of the structure:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"core\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 components\n        \u2514\u2500\u2500 Progress\n            \u251c\u2500\u2500 Progress.tsx\n            \u2514\u2500\u2500 Progress.stories.tsx\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Note: make sure your component story file has the following format\ncomponentName.stories.tsx"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"running-locally",children:"Running locally"}),"\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.code,{children:"storybook"}),", run ",(0,o.jsx)(t.code,{children:"yarn install"})," and install the dependencies, then run the\nfollowing on your command line: ",(0,o.jsx)(t.code,{children:"yarn start"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Storybook command startup",src:n(62375).Z+"",width:"700",height:"600"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"You should see a log like the image above."})}),"\n",(0,o.jsxs)(t.p,{children:["If everything worked out, your server will be running on ",(0,o.jsx)(t.strong,{children:"port 6006"}),", go to\nyour browser and navigate to ",(0,o.jsx)(t.code,{children:"http://localhost:6006/"}),". You should be able to\nnavigate and see the Storybook page."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},62375:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/running-storybook-97abcf0d87701e8bd83f6f8a5307f3b1.png"},360246:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/storybook-page-658f654f25a07d8c58798ad039d81ca3.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(a[u]=i[u]);if(t){s=t(i);for(var l=0;l<s.length;l++)o.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a}},371426:(e,t,n)=>{n(862525);var o=n(827378),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),t.Fragment=i("react.fragment")}var s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var o,i={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:l,props:i,_owner:s.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var o=n(862525),r=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;r=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),s=f("react.provider"),a=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=g.prototype=new b;v.constructor=g,o(v,m.prototype),v.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,o)&&!w.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case i:c=!0}}if(c)return s=s(c=e),e=""===o?"."+C(c,0):o,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),O(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=o+C(a=e[u],u);c+=O(a,t,n,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=O(a=a.value,t,n,l=o+C(a,u++),s);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,n){if(null==e)return e;var o=[],r=0;return O(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=o({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=k.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!w.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:r,type:e.type,key:s,ref:a,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var o=n(667294);const r=o.createContext({});function i(e){const t=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),o.createElement(r.Provider,{value:a},t)}}}]);