"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[3071],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?i.createElement(b,l(l({ref:n},c),{},{components:t})):i.createElement(b,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const o={id:"feel-built-in-functions-boolean",title:"Boolean Functions"},l=void 0,a={unversionedId:"reference/builtin-functions/feel-built-in-functions-boolean",id:"version-1.12/reference/builtin-functions/feel-built-in-functions-boolean",title:"Boolean Functions",description:"not()",source:"@site/versioned_docs/version-1.12/reference/builtin-functions/feel-built-in-functions-boolean.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-boolean",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-boolean",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.12/reference/builtin-functions/feel-built-in-functions-boolean.md",tags:[],version:"1.12",frontMatter:{id:"feel-built-in-functions-boolean",title:"Boolean Functions"},sidebar:"version-1.12/Reference",previous:{title:"Conversion Functions",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-conversion"},next:{title:"String Functions",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-string"}},s={},u=[{value:"not()",id:"not",level:2},{value:"is defined()",id:"is-defined",level:2}],c={toc:u};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"not"},"not()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"negand"),": boolean"))),(0,r.kt)("li",{parentName:"ul"},"result: boolean")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"not(true)\n// false\n")),(0,r.kt)("h2",{id:"is-defined"},"is defined()"),(0,r.kt)("p",null,"Checks if a given value is defined or not. A value is defined if it exists, and it is an instance of one of the FEEL data types including ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"The function can be used to check if a variable, or a context entry (e.g. a property of a variable) exists. It allows differentiating between a variable that is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and a value that doesn't exist.   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": any"))),(0,r.kt)("li",{parentName:"ul"},"result: boolean")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'is defined(1)\n// true\n\nis defined(null)\n// true\n\nis defined(x)\n// false - if no variable "x" exists\n\nis defined(x.y)\n// false - if no variable "x" exists or it doesn\'t have a property "y"\n')))}f.isMDXComponent=!0}}]);