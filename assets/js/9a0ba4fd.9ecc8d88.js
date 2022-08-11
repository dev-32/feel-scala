"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[1743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),m=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),k=m(n),c=a,d=k["".concat(s,".").concat(c)]||k[c]||o[c]||i;return n?l.createElement(d,r(r({ref:t},p),{},{components:n})):l.createElement(d,r({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var m=2;m<i;m++)r[m]=n[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var l=n(7462),a=(n(7294),n(3905));const i={id:"feel-built-in-functions-list",title:"List functions",description:"This document outlines built-in list functions and examples."},r=void 0,u={unversionedId:"reference/builtin-functions/feel-built-in-functions-list",id:"reference/builtin-functions/feel-built-in-functions-list",title:"List functions",description:"This document outlines built-in list functions and examples.",source:"@site/docs/reference/builtin-functions/feel-built-in-functions-list.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-list",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-list",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/builtin-functions/feel-built-in-functions-list.md",tags:[],version:"current",frontMatter:{id:"feel-built-in-functions-list",title:"List functions",description:"This document outlines built-in list functions and examples."},sidebar:"Reference",previous:{title:"Numeric functions",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-numeric"},next:{title:"Context functions",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-context"}},s={},m=[{value:"list contains()",id:"list-contains",level:2},{value:"count()",id:"count",level:2},{value:"min()",id:"min",level:2},{value:"max()",id:"max",level:2},{value:"sum()",id:"sum",level:2},{value:"product()",id:"product",level:2},{value:"mean()",id:"mean",level:2},{value:"median()",id:"median",level:2},{value:"stddev()",id:"stddev",level:2},{value:"mode()",id:"mode",level:2},{value:"and() / all()",id:"and--all",level:2},{value:"or() / any()",id:"or--any",level:2},{value:"sublist()",id:"sublist",level:2},{value:"append()",id:"append",level:2},{value:"concatenate()",id:"concatenate",level:2},{value:"insert before()",id:"insert-before",level:2},{value:"remove()",id:"remove",level:2},{value:"reverse()",id:"reverse",level:2},{value:"index of()",id:"index-of",level:2},{value:"union()",id:"union",level:2},{value:"distinct values()",id:"distinct-values",level:2},{value:"flatten()",id:"flatten",level:2},{value:"sort()",id:"sort",level:2},{value:"string join()",id:"string-join",level:2}],p={toc:m};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"list-contains"},"list contains()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"element"),": any"))),(0,a.kt)("li",{parentName:"ul"},"result: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"list contains([1,2,3], 2) \n// true\n")),(0,a.kt)("h2",{id:"count"},"count()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"count([1,2,3]) \n// 3\n")),(0,a.kt)("h2",{id:"min"},"min()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"min([1,2,3]) \n// 1\n\nmin(1,2,3) \n// 1\n")),(0,a.kt)("h2",{id:"max"},"max()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"min([1,2,3]) \n// 3\n\nmin(1,2,3) \n// 3\n")),(0,a.kt)("h2",{id:"sum"},"sum()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"min([1,2,3]) \n// 6\n\nmin(1,2,3) \n// 6\n")),(0,a.kt)("h2",{id:"product"},"product()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"product([2, 3, 4])\n// 24\n\nproduct(2, 3, 4)\n// 24\n")),(0,a.kt)("h2",{id:"mean"},"mean()"),(0,a.kt)("p",null,"Returns the arithmetic mean (i.e. average)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mean([1,2,3])\n// 2\n\nmean(1,2,3)\n// 2\n")),(0,a.kt)("h2",{id:"median"},"median()"),(0,a.kt)("p",null,"Returns the median element of the list of numbers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"median(8, 2, 5, 3, 4)\n// 4\n\nmedian([6, 1, 2, 3]) \n// 2.5\n")),(0,a.kt)("h2",{id:"stddev"},"stddev()"),(0,a.kt)("p",null,"Returns the standard deviation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stddev(2, 4, 7, 5)\n// 2.0816659994661326\n\nstddev([2, 4, 7, 5])\n// 2.0816659994661326\n")),(0,a.kt)("h2",{id:"mode"},"mode()"),(0,a.kt)("p",null,"Returns the mode of the list of numbers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of numbers"),(0,a.kt)("li",{parentName:"ul"},"or numbers as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: list of numbers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mode(6, 3, 9, 6, 6) \n// [6]\n\nmode([6, 1, 9, 6, 1]) \n// [1, 6]\n")),(0,a.kt)("h2",{id:"and--all"},"and() / all()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of booleans"),(0,a.kt)("li",{parentName:"ul"},"or booleans as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"and([true,false])\n// false\n\nand(false,null,true)\n// false\n")),(0,a.kt)("h2",{id:"or--any"},"or() / any()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list of booleans"),(0,a.kt)("li",{parentName:"ul"},"or booleans as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"or([false,true])\n// true\n\nor(false,null,true)\n// true\n")),(0,a.kt)("h2",{id:"sublist"},"sublist()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start position"),": number"),(0,a.kt)("li",{parentName:"ul"},"(optional) ",(0,a.kt)("inlineCode",{parentName:"li"},"length"),": number"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sublist([1,2,3], 2)\n// [2,3]\n\nsublist([1,2,3], 1, 2)\n// [1,2]\n")),(0,a.kt)("h2",{id:"append"},"append()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"items"),": elements as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"append([1], 2, 3)\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"concatenate"},"concatenate()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lists"),": lists as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"concatenate([1,2],[3]) \n// [1,2,3]\n\nconcatenate([1],[2],[3])\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"insert-before"},"insert before()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"position"),": number"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"newItem"),": any"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"insert before([1,3],1,2) \n// [1,2,3]\n")),(0,a.kt)("h2",{id:"remove"},"remove()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"position"),": number"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"remove([1,2,3], 2) \n// [1,3]\n")),(0,a.kt)("h2",{id:"reverse"},"reverse()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"reverse([1,2,3]) \n// [3,2,1]\n")),(0,a.kt)("h2",{id:"index-of"},"index of()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match"),": any"))),(0,a.kt)("li",{parentName:"ul"},"result: list of numbers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"index of([1,2,3,2],2) \n// [2,4]\n")),(0,a.kt)("h2",{id:"union"},"union()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lists"),": lists as varargs"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"union([1,2],[2,3])\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"distinct-values"},"distinct values()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"distinct values([1,2,3,2,1])\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"flatten"},"flatten()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"flatten([[1,2],[[3]], 4])\n// [1,2,3,4]\n")),(0,a.kt)("h2",{id:"sort"},"sort()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"precedes"),": function with two arguments and boolean result"))),(0,a.kt)("li",{parentName:"ul"},"result: list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sort(list: [3,1,4,5,2], precedes: function(x,y) x < y) \n// [1,2,3,4,5]\n")),(0,a.kt)("h2",{id:"string-join"},"string join()"),(0,a.kt)("p",null,"This joins a list of strings into a single string. This is similar to\nJava's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Collectors.html#joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)"},"joining"),"\nfunction."),(0,a.kt)("p",null,"If an item of the list is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the item is ignored for the result string. If an item is\nneither a string nor ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," instead of a string."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"),": The list of strings to join"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delimiter"),": (Optional) The string used between each element (default: empty string)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefix"),": (Optional) The string used at the beginning of the joined result (default:\nempty string)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suffix"),": (Optional) The string used at the end of the joined result (default: empty\nstring)"))),(0,a.kt)("li",{parentName:"ul"},"Result: The joined list as a string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'string join(["a","b","c"])\n// "abc"\nstring join(["a"], "X")\n// "a"\nstring join(["a","b","c"], ", ")\n// "a, b, c"\nstring join(["a","b","c"], ", ", "[", "]")\n// "[a, b, c]"\nstring join(["a",null,"c"])\n// "ac"\nstring join([])\n// ""\n')))}o.isMDXComponent=!0}}]);