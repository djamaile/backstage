/*! For license information please see a299948e.c7c4ebd3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[881602],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,y=f["".concat(i,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[f]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},714217:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage"},p=void 0,i={unversionedId:"reference/plugin-apollo-explorer.apolloexplorerpage",id:"reference/plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage",source:"@site/../docs/reference/plugin-apollo-explorer.apolloexplorerpage.md",sourceDirName:"reference",slug:"/reference/plugin-apollo-explorer.apolloexplorerpage",permalink:"/docs/reference/plugin-apollo-explorer.apolloexplorerpage",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-apollo-explorer.apolloexplorerpage.md",tags:[],version:"current",frontMatter:{id:"plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage"}},c={},u=[],f={toc:u};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-apollo-explorer"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-apollo-explorer"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-apollo-explorer.apolloexplorerpage"}),(0,n.kt)("inlineCode",{parentName:"a"},"ApolloExplorerPage"))),(0,n.kt)("p",null,"Main component that wraps the embedded graph(s)"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),'ApolloExplorerPage: (props: {\n    title?: string | undefined;\n    subtitle?: string | undefined;\n    endpoints: {\n        title: string;\n        graphRef: string;\n        persistExplorerState?: boolean | undefined;\n        initialState?: {\n            document?: string | undefined;\n            variables?: import("@apollo/explorer/src/helpers/types").JSONObject | undefined;\n            headers?: Record<string, string> | undefined;\n            displayOptions: {\n                docsPanelState?: "closed" | "open" | undefined;\n                showHeadersAndEnvVars?: boolean | undefined;\n                theme?: "dark" | "light" | undefined;\n            };\n        } | undefined;\n    }[];\n}) => JSX.Element\n')))}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,p,i=o(e),c=1;c<arguments.length;c++){for(var u in l=Object(arguments[c]))t.call(l,u)&&(i[u]=l[u]);if(r){p=r(l);for(var f=0;f<p.length;f++)n.call(l,p[f])&&(i[p[f]]=l[p[f]])}}return i}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var l=60109,p=60110,i=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),l=f("react.provider"),p=f("react.context"),i=f("react.forward_ref"),f("react.suspense"),c=f("react.memo"),u=f("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function m(){}function h(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=h.prototype=new m;v.constructor=h,n(v,b.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},l=null,p=null;if(null!=r)for(n in void 0!==r.ref&&(p=r.ref),void 0!==r.key&&(l=""+r.key),r)j.call(r,n)&&!x.hasOwnProperty(n)&&(a[n]=r[n]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:l,ref:p,props:a,_owner:O.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,l){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var i=!1;if(null===e)i=!0;else switch(p){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return l=l(i=e),e=""===n?"."+E(i,0):n,Array.isArray(l)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),S(l,r,t,"",(function(e){return e}))):null!=l&&(k(l)&&(l=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+e)),r.push(l)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+E(p=e[c],c);i+=S(p,r,t,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(p=e.next()).done;)i+=S(p=p.value,r,t,u=n+E(p,c++),l);else if("object"===p)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function _(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function A(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function N(){var e=C.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);