"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[2515],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,g=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3384:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={id:"feel-expressions-introduction",title:"Introduction",description:"FEEL expressions are powerful and can be used for various cases."},s=void 0,l={unversionedId:"reference/language-guide/feel-expressions-introduction",id:"reference/language-guide/feel-expressions-introduction",title:"Introduction",description:"FEEL expressions are powerful and can be used for various cases.",source:"@site/docs/reference/language-guide/feel-expressions-introduction.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-expressions-introduction",permalink:"/feel-scala/docs/reference/language-guide/feel-expressions-introduction",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/language-guide/feel-expressions-introduction.md",tags:[],version:"current",frontMatter:{id:"feel-expressions-introduction",title:"Introduction",description:"FEEL expressions are powerful and can be used for various cases."},sidebar:"Reference",previous:{title:"Unary-tests",permalink:"/feel-scala/docs/reference/language-guide/feel-unary-tests"},next:{title:"Boolean expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-boolean-expressions"}},i={},c=[{value:"Comments",id:"comments",level:3},{value:"Parentheses",id:"parentheses",level:3}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FEEL expressions are powerful and can be used for various cases."),(0,a.kt)("p",null,"This section is split into expressions based on their operational data type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-boolean-expressions"},"Boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-string-expressions"},"String")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-numeric-expressions"},"Numeric")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-list-expressions"},"List")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-context-expressions"},"Context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-temporal-expressions"},"Temporal"))),(0,a.kt)("p",null,"The following sections cover more general areas that are not restricted to one data type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-variables"},"Variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-control-flow"},"Control Flow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/feel-scala/docs/reference/language-guide/feel-functions"},"Functions"))),(0,a.kt)("h3",{id:"comments"},"Comments"),(0,a.kt)("p",null,"An expression can contain comments to explain it and give it more context. This can be done using\nJava-style comments: ",(0,a.kt)("inlineCode",{parentName:"p"},"//")," to the end of line, or ",(0,a.kt)("inlineCode",{parentName:"p"},"/*.... */")," for blocks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns the last item       \n[1,2,3,4][-1]                             \n    \n/* returns the last item */\n[1,2,3,4][-1]\n\n/* \n * returns the last item \n */\n[1,2,3,4][-1]   \n")),(0,a.kt)("h3",{id:"parentheses"},"Parentheses"),(0,a.kt)("p",null,"Parentheses ",(0,a.kt)("inlineCode",{parentName:"p"},"( .. )")," can be used in expressions to separate different parts of an\nexpression or to influence the precedence of the operators."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'(5 - 3) * (4 / 2)\n\nx < 5 and (y > 10 or z > 20)\n\nif (5 < 10) then "low" else "high"\n')))}p.isMDXComponent=!0}}]);