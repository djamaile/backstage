/*! For license information please see ef62db13.68976948.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[792945],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=s(r),h=o,y=l["".concat(i,".").concat(h)]||l[h]||f[h]||c;return r?n.createElement(y,u(u({ref:t},p),{},{components:r})):n.createElement(y,u({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,u=new Array(c);u[0]=h;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[l]="string"==typeof e?e:o,u[1]=a;for(var s=2;s<c;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},711801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"plugin-shortcuts.shortcutapi.shortcut_",title:"ShortcutApi.shortcut$()",description:"API reference for ShortcutApi.shortcut$()"},a=void 0,i={unversionedId:"reference/plugin-shortcuts.shortcutapi.shortcut_",id:"reference/plugin-shortcuts.shortcutapi.shortcut_",title:"ShortcutApi.shortcut$()",description:"API reference for ShortcutApi.shortcut$()",source:"@site/../docs/reference/plugin-shortcuts.shortcutapi.shortcut_.md",sourceDirName:"reference",slug:"/reference/plugin-shortcuts.shortcutapi.shortcut_",permalink:"/docs/reference/plugin-shortcuts.shortcutapi.shortcut_",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-shortcuts.shortcutapi.shortcut_.md",tags:[],version:"current",frontMatter:{id:"plugin-shortcuts.shortcutapi.shortcut_",title:"ShortcutApi.shortcut$()",description:"API reference for ShortcutApi.shortcut$()"}},s={},p=[],l={toc:p};function f(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-shortcuts"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-shortcuts"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-shortcuts.shortcutapi"}),(0,n.kt)("inlineCode",{parentName:"a"},"ShortcutApi"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-shortcuts.shortcutapi.shortcut_"}),(0,n.kt)("inlineCode",{parentName:"a"},"shortcut$"))),(0,n.kt)("p",null,"Returns an Observable that will subscribe to changes."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"shortcut$(): Observable<Shortcut[]>;\n")),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/types.observable"}),"Observable"),"<",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-shortcuts.shortcut"}),"Shortcut"),"[","]",">"))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var u,a,i=o(e),s=1;s<arguments.length;s++){for(var p in u=Object(arguments[s]))r.call(u,p)&&(i[p]=u[p]);if(t){a=t(u);for(var l=0;l<a.length;l++)n.call(u,a[l])&&(i[a[l]]=u[a[l]])}}return i}},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;var u=60109,a=60110,i=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),u=l("react.provider"),a=l("react.context"),i=l("react.forward_ref"),l("react.suspense"),s=l("react.memo"),p=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function d(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=d.prototype;var v=g.prototype=new m;v.constructor=g,n(v,d.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,c={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(c[n]=t[n]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var s=Array(i),p=0;p<i;p++)s[p]=arguments[p+2];c.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:o,type:e,key:u,ref:a,props:c,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,r,n,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return u=u(i=e),e=""===n?"."+P(i,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),$(u,t,r,"",(function(e){return e}))):null!=u&&(_(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(S,"$&/")+"/")+e)),t.push(u)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=n+P(a=e[s],s);i+=$(a,t,r,p,u)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(a=e.next()).done;)i+=$(a=a.value,t,r,p=n+P(a,s++),u);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function E(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function A(){var e=x.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,r)=>{r(541535)}}]);