"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[1174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=l,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||i;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const i={id:"feel-data-types",title:"Data types",description:"This document outlines data types, including null, number, string, boolean, and more."},r=void 0,o={unversionedId:"reference/language-guide/feel-data-types",id:"version-1.15/reference/language-guide/feel-data-types",title:"Data types",description:"This document outlines data types, including null, number, string, boolean, and more.",source:"@site/versioned_docs/version-1.15/reference/language-guide/feel-data-types.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-data-types",permalink:"/feel-scala/docs/1.15/reference/language-guide/feel-data-types",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.15/reference/language-guide/feel-data-types.md",tags:[],version:"1.15",frontMatter:{id:"feel-data-types",title:"Data types",description:"This document outlines data types, including null, number, string, boolean, and more."},sidebar:"version-1.15/Reference",previous:{title:"Introduction",permalink:"/feel-scala/docs/1.15/reference/language-guide/language-guide-introduction"},next:{title:"Unary-tests",permalink:"/feel-scala/docs/1.15/reference/language-guide/feel-unary-tests"}},u={},d=[{value:"Null",id:"null",level:3},{value:"Number",id:"number",level:3},{value:"String",id:"string",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Date",id:"date",level:3},{value:"Time",id:"time",level:3},{value:"Date-time",id:"date-time",level:3},{value:"Days-time-duration",id:"days-time-duration",level:3},{value:"Years-months-duration",id:"years-months-duration",level:3},{value:"List",id:"list",level:3},{value:"Context",id:"context",level:3}],p={toc:d};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FEEL defines the following types:"),(0,l.kt)("h3",{id:"null"},"Null"),(0,l.kt)("p",null,"Nothing, null, or nil (i.e. the value is not present)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"null\n")),(0,l.kt)("h3",{id:"number"},"Number"),(0,l.kt)("p",null,"A whole or floating point number. The number can be negative."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"not-a-number (NaN), positive/negative infinity are represented as ",(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.math.BigDecimal"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"1\n\n2.3\n\n.4\n    \n-5\n")),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("p",null,"A sequence of characters enclosed in double quotes ",(0,l.kt)("inlineCode",{parentName:"p"},'"'),". The sequence can also contain escaped characters starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"\\'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'\\"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\\\"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\t"),", unicode like ",(0,l.kt)("inlineCode",{parentName:"p"},"\\u269D")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"\\U101EF"),")."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.lang.String"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"valid"\n')),(0,l.kt)("h3",{id:"boolean"},"Boolean"),(0,l.kt)("p",null,"A boolean value. It is either true or false."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.lang.Boolean"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"true\n\nfalse\n")),(0,l.kt)("h3",{id:"date"},"Date"),(0,l.kt)("p",null,"A date value without a time component."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"."),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalDate"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'date("2017-03-10")\n\n@"2017-03-10"\n')),(0,l.kt)("h3",{id:"time"},"Time"),(0,l.kt)("p",null,"A local or zoned time. The time can have an offset or time zone id."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss+/-HH:mm")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss@ZoneId")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalTime")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.OffsetTime"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'time("11:45:30") \ntime("13:30")\ntime("11:45:30+02:00")\ntime("10:31:10@Europe/Paris")\n\n@"11:45:30"\n@"13:30"\n@"11:45:30+02:00"\n@"10:31:10@Europe/Paris"\n')),(0,l.kt)("h3",{id:"date-time"},"Date-time"),(0,l.kt)("p",null,"A date with a local or zoned time component. The time can have an offset or time zone id."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss+/-HH:mm")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss@ZoneId")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalDateTime")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.DateTime"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'date and time("2015-09-18T10:31:10")\ndate and time("2015-09-18T10:31:10+01:00")\ndate and time("2015-09-18T10:31:10@Europe/Paris")\n\n@"2015-09-18T10:31:10"\n@"2015-09-18T10:31:10+01:00"\n@"2015-09-18T10:31:10@Europe/Paris"\n')),(0,l.kt)("h3",{id:"days-time-duration"},"Days-time-duration"),(0,l.kt)("p",null,"A duration based on seconds. It can contain days, hours, minutes, and seconds."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"PxDTxHxMxS")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.Duration"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'duration("P4D")\nduration("PT2H")\nduration("PT30M")\nduration("P1DT6H")\n\n@"P4D"\n@"PT2H"\n@"PT30M"\n@"P1DT6H"\n')),(0,l.kt)("h3",{id:"years-months-duration"},"Years-months-duration"),(0,l.kt)("p",null,"A duration based on the calendar. It can contain years and months."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"PxYxM")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.Period"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'duration("P2Y")\nduration("P6M")\nduration("P1Y6M")\n\n@"P2Y"\n@"P6M"\n@"P1Y6M"\n')),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"A list of elements. The elements can be of any type. The list can be empty."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.List"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[]\n[1,2,3]\n["a","b"]\n\n[["list"], "of", [["lists"]]]\n')),(0,l.kt)("h3",{id:"context"},"Context"),(0,l.kt)("p",null,"A list of entries. Each entry has a key and a value. The key is either a name or a string. The value\ncan be any type. The context can be empty."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.Map"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{}\n\n{a:1}\n{b: 2, c: "valid"}\n{nested: {d: 3}}\n\n{"a": 1}\n{"b": 2, "c": "valid"}\n')))}s.isMDXComponent=!0}}]);