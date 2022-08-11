"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[6973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={id:"tutorial-1-1",title:"1.1 First stop: Numeric functions"},a=void 0,l={unversionedId:"tutorial/tutorial-1-1",id:"tutorial/tutorial-1-1",title:"1.1 First stop: Numeric functions",description:"Let's start our quest. FEEL allows you to use basic calculations like addition, subtraction and multiplication to name a few. Our friend arrived in Spain by boat, specifically Cadiz. The goal is to reach Pamplona (which is 1,030.8 kms away).",source:"@site/docs/tutorial/tutorial-1-1.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-1-1",permalink:"/feel-scala/docs/tutorial/tutorial-1-1",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/tutorial/tutorial-1-1.md",tags:[],version:"current",frontMatter:{id:"tutorial-1-1",title:"1.1 First stop: Numeric functions"},sidebar:"Tutorial",previous:{title:"Introduction: The Quest Begins",permalink:"/feel-scala/docs/tutorial/introduction"},next:{title:"1.2 Second stop: More numeric functions",permalink:"/feel-scala/docs/tutorial/tutorial-1-2"}},u={},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's start our quest. FEEL allows you to use basic calculations like addition, subtraction and multiplication to name a few. Our friend arrived in Spain by boat, specifically Cadiz. The goal is to reach Pamplona (which is 1,030.8 kms away). "),(0,o.kt)("p",null,"As part of the quest, Camundonaut received magical items and decided to use The Boots of Hermes, which give its wearer a speed of 48.2 kms/hour."),(0,o.kt)("p",null,"Using numeric functions, how long would it take him to get there? Consider resting for 30 minutes every 5 hours (Let's also round up the number for total resting time)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Formula considering resting time plus total time\n\nround up(.5*(1030.8/48.2)/5,0) + 1030.8/48.2\n\n")))}p.isMDXComponent=!0}}]);