"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[4889],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),k=s(t),d=l,f=k["".concat(o,".").concat(d)]||k[d]||m[d]||r;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=k;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const r={id:"feel-built-in-functions-range",title:"Range functions",description:"This document outlines range functions and examples."},i=void 0,u={unversionedId:"reference/builtin-functions/feel-built-in-functions-range",id:"version-1.15/reference/builtin-functions/feel-built-in-functions-range",title:"Range functions",description:"This document outlines range functions and examples.",source:"@site/versioned_docs/version-1.15/reference/builtin-functions/feel-built-in-functions-range.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-range",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-range",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.15/reference/builtin-functions/feel-built-in-functions-range.md",tags:[],version:"1.15",frontMatter:{id:"feel-built-in-functions-range",title:"Range functions",description:"This document outlines range functions and examples."},sidebar:"version-1.15/Reference",previous:{title:"Temporal functions",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-temporal"},next:{title:"Introduction",permalink:"/feel-scala/docs/1.15/reference/developer-guide/developer-guide-introduction"}},o={},s=[{value:"before()",id:"before",level:2},{value:"after()",id:"after",level:2},{value:"meets()",id:"meets",level:2},{value:"met by()",id:"met-by",level:2},{value:"overlaps()",id:"overlaps",level:2},{value:"overlaps before()",id:"overlaps-before",level:2},{value:"overlaps after()",id:"overlaps-after",level:2},{value:"finishes()",id:"finishes",level:2},{value:"finished by()",id:"finished-by",level:2},{value:"includes()",id:"includes",level:2},{value:"during()",id:"during",level:2},{value:"starts()",id:"starts",level:2},{value:"started by()",id:"started-by",level:2},{value:"coincides()",id:"coincides",level:2}],p={toc:s};function m(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A set of functions establish relationships between single scalar values and ranges of such values.\nAll functions take two arguments and return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the relationship between the argument holds,\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("p",null,"A scalar value must be of the following type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"number"),(0,l.kt)("li",{parentName:"ul"},"date"),(0,l.kt)("li",{parentName:"ul"},"time"),(0,l.kt)("li",{parentName:"ul"},"date-time"),(0,l.kt)("li",{parentName:"ul"},"days-time-duration"),(0,l.kt)("li",{parentName:"ul"},"years-months-duration")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"range functions overview",src:t(7070).Z,width:"834",height:"523"})),(0,l.kt)("h2",{id:"before"},"before()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"point1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"point2"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range, ",(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any, ",(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"before(1, 10)\n// true\n\nbefore(10, 1)\n// false\n\nbefore(1, [2..5])\n// true\n\nbefore([1..5], 10)\n// true\n\nbefore([1..5], [6..10])\n// true\n\nbefore([1..5),[5..10])\n// true\n")),(0,l.kt)("h2",{id:"after"},"after()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"point1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"point2"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range, ",(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any, ",(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"after(10, 1)\n// true\n\nafter(1, 10)\n// false\n\nafter(12, [2..5])\n// true\n\n([1..5], 10)\n// false\n\nbefore([6..10], [1..5])\n// true\n\nbefore([5..10], [1..5))\n// true\n")),(0,l.kt)("h2",{id:"meets"},"meets()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range1"),": range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"meets([1..5], [5..10])\n// true\n\nmeets([1..3], [4..6])\n// false\n\nmeets([1..3], [3..5])\n// true\n\nmeets([1..5], (5..8])\n// false\n\n")),(0,l.kt)("h2",{id:"met-by"},"met by()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range1"),": range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"met by([5..10], [1..5])\n// true\n\nmet by([3..4], [1..2])\n// false\n\nmet by([3..5], [1..3])\n// true\n\nmet by((5..8], [1..5))\n// false\n\nmet by([5..10], [1..5))\n// false\n")),(0,l.kt)("h2",{id:"overlaps"},"overlaps()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range1"),": range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"overlaps([5..10], [1..6])\n// true\n\noverlaps((3..7], [1..4])\n// true\n\noverlaps([1..3], (3..6])\n// false\n\noverlaps((5..8], [1..5))\n// false\n\noverlaps([4..10], [1..5))\n// treu\n")),(0,l.kt)("h2",{id:"overlaps-before"},"overlaps before()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range1"),": range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"overlaps before([1..5], [4..10])\n// true\n\noverlaps before([3..4], [1..2])\n// false\n\noverlaps before([1..3], (3..5])\n// false\n\noverlaps before([1..5), (3..8])\n// true\n\noverlaps before([1..5), [5..10])\n// false\n")),(0,l.kt)("h2",{id:"overlaps-after"},"overlaps after()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range1"),": range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"overlaps after([4..10], [1..5])\n// true\n\noverlaps after([3..4], [1..2])\n// false\n\noverlaps after([3..5], [1..3))\n// false\n\noverlaps after((5..8], [1..5))\n// false\n\noverlaps after([4..10], [1..5))\n// true\n")),(0,l.kt)("h2",{id:"finishes"},"finishes()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any, ",(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"finishes(5, [1..5])\n// true\n\nfinishes(10, [1..7])\n// false\n\nfinishes([3..5], [1..5])\n// true\n\nfinishes((1..5], [1..5))\n// false\n\nfinishes([5..10], [1..10))\n// false\n")),(0,l.kt)("h2",{id:"finished-by"},"finished by()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range, ",(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"finishes by([5..10], 10)\n// true\n\nfinishes by([3..4], 2)\n// false\n\nfinishes by([3..5], [1..5])\n// true\n\nfinishes by((5..8], [1..5))\n// false\n\nfinishes by([5..10], (1..10))\n// true\n")),(0,l.kt)("h2",{id:"includes"},"includes()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range, ",(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"includes([5..10], 6)\n// true\n\nincludes([3..4], 5)\n// false\n\nincludes([1..10], [4..6])\n// true\n\nincludes((5..8], [1..5))\n// false\n\nincludes([1..10], [1..5))\n// true\n")),(0,l.kt)("h2",{id:"during"},"during()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any, ",(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"during(5, [1..10])\n// true\n\nduring(12, [1..10])\n// false\n\nduring(1, (1..10])\n// false\n\nduring([4..6], [1..10))\n// true\n\nduring((1..5], (1..10])\n// true\n")),(0,l.kt)("h2",{id:"starts"},"starts()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any, ",(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"starts(1, [1..5])\n// true\n\nstarts(1, (1..8])\n// false\n\nstarts((1..5], [1..5])\n// false\n\nstarts([1..10], [1..10])\n// true\n\nstarts((1..10), (1..10))\n// true\n")),(0,l.kt)("h2",{id:"started-by"},"started by()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range"),": range, ",(0,l.kt)("inlineCode",{parentName:"li"},"point"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"started by([1..10], 1)\n// true\n\nstarted by((1..10], 1)\n// false\n\nstarted by([1..10], [1..5])\n// true\n\nstarted by((1..10], [1..5))\n// false\n\nstarted by([1..10], [1..10))\n// true\n")),(0,l.kt)("h2",{id:"coincides"},"coincides()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"point1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"point2"),": any"),(0,l.kt)("li",{parentName:"ul"},"or ",(0,l.kt)("inlineCode",{parentName:"li"},"range1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"range2"),": range"))),(0,l.kt)("li",{parentName:"ul"},"result: boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"coincides(5, 5)\n// true\n\ncoincides(3, 4)\n// false\n\ncoincides([1..5], [1..5])\n// true\n\ncoincides((1..5], [1..5))\n// false\n\ncoincides([1..5], [2..6])\n// false\n")))}m.isMDXComponent=!0},7070:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/feel-built-in-functions-range-overview-67e1cfede7fd9ff925452548f6a72052.png"}}]);