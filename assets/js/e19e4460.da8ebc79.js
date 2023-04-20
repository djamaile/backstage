/*! For license information please see e19e4460.da8ebc79.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[256780],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||g[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},109698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"debugging",title:"Debugging Backstage",description:"How logging works and how to configure it"},l=void 0,u={unversionedId:"local-dev/debugging",id:"local-dev/debugging",title:"Debugging Backstage",description:"How logging works and how to configure it",source:"@site/../docs/local-dev/debugging.md",sourceDirName:"local-dev",slug:"/local-dev/debugging",permalink:"/docs/local-dev/debugging",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/local-dev/debugging.md",tags:[],version:"current",frontMatter:{id:"debugging",title:"Debugging Backstage",description:"How logging works and how to configure it"},sidebar:"docs",previous:{title:"Linking in Local Packages",permalink:"/docs/local-dev/linking-local-packages"},next:{title:"Overview",permalink:"/docs/features/software-catalog/"}},s={},p=[],g={toc:p};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When configuring Backstage for the first time locally, or contributing new code changes,\nit can be helpful to change the logging levels to better understand how the system is functioning."),(0,r.kt)("p",null,"Backstage uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"Winston logging library")," and supports\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston#logging-levels"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"npm")," logging levels")," such as\n",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," (the default), or ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),"."),(0,r.kt)("p",null,"The logging instance is also passed to plugins for them to expose information about\ntheir processing as well."),(0,r.kt)("p",null,"Changing the level can be done by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable."),(0,r.kt)("p",null,"For example, to turn on debug logs when running the app locally, you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"LOG_LEVEL=debug yarn dev\n")),(0,r.kt)("p",null,"The resulting log should now have more information available for debugging:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'[1] 2023-04-12T00:51:42.468Z catalog debug Skipped stitching of domain:default/artists, no changes type=plugin\n[1] 2023-04-12T00:51:42.469Z catalog debug Skipped stitching of domain:default/playback, no changes type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing system:default/podcast type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/infrastructure type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/boxoffice type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/backstage type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/team-a type=plugin\n[1] 2023-04-12T00:51:42.519Z catalog debug Skipped stitching of group:default/acme-corp, no changes type=plugin\n[1] 2023-04-12T00:51:42.520Z catalog debug Skipped stitching of group:default/backstage, no changes type=plugin\n[1] 2023-04-12T00:51:42.521Z catalog debug Skipped stitching of group:default/boxoffice, no changes type=plugin\n[1] 2023-04-12T00:51:42.523Z catalog debug Processing user:default/breanna.davison type=plugin\n[1] 2023-04-12T00:51:42.524Z catalog debug Processing user:default/janelle.dawe type=plugin\n[1] 2023-04-12T00:51:42.524Z catalog debug Processing user:default/nigel.manning type=plugin\n[1] 2023-04-12T00:51:42.524Z catalog debug Processing user:default/guest type=plugin\n[1] 2023-04-12T00:51:42.525Z catalog debug Processing group:default/team-b type=plugin\n[1] 2023-04-12T00:51:44.057Z search info Starting collation of explore tools type=plugin\n[1] 2023-04-12T00:51:44.095Z backstage info ::1 - - [12/Apr/2023:00:51:44 +0000] "GET /api/explore/tools HTTP/1.1" 200 - "-" "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)" type=incomingRequest\n[1] 2023-04-12T00:51:44.100Z backstage info ::1 - - [12/Apr/2023:00:51:44 +0000] "GET /api/catalog/entities?filter=metadata.annotations.backstage.io%2Ftechdocs-ref&fields=kind,namespace,metadata.annotations,metadata.name,metadata.title,metadata.namespace,spec.type,spec.lifecycle,relations&offset=0&limit=500 HTTP/1.1" 200 - "-" "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)" type=incomingRequest\n[1] 2023-04-12T00:51:44.104Z search info Finished collation of explore tools type=plugin\n[1] 2023-04-12T00:51:44.118Z search info Collating documents for tools succeeded type=plugin documentType=tools\n[1] 2023-04-12T00:51:44.119Z backstage debug task: search_index_tools will next occur around 2023-04-11T21:01:44.118-04:00 type=taskManager task=search_index_tools\n')))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))n.call(i,s)&&(l[s]=i[s]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(l[c[p]]=i[c[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,c=60110,l=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var g="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||d}function h(){}function m(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var v=m.prototype=new h;v.constructor=m,r(v,y.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+S(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(T,"$&/")+"/"),_(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+S(c=e[u],u);l+=_(c,t,n,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)l+=_(c=c.value,t,n,s=r+S(c,u++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function x(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var Z={current:null};function C(){var e=Z.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);