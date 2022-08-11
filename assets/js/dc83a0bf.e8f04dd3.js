"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=l,k=s["".concat(u,".").concat(c)]||s[c]||d[c]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={id:"feel-data-types",title:"Data Types"},i=void 0,o={unversionedId:"reference/language-guide/feel-data-types",id:"version-1.10/reference/language-guide/feel-data-types",title:"Data Types",description:"A value can have one of the following types.",source:"@site/versioned_docs/version-1.10/reference/language-guide/feel-data-types.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-data-types",permalink:"/feel-scala/docs/1.10/reference/language-guide/feel-data-types",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.10/reference/language-guide/feel-data-types.md",tags:[],version:"1.10",frontMatter:{id:"feel-data-types",title:"Data Types"},sidebar:"version-1.10/Reference",previous:{title:"What is FEEL?",permalink:"/feel-scala/docs/1.10/reference/"},next:{title:"Unary-Tests",permalink:"/feel-scala/docs/1.10/reference/language-guide/feel-unary-tests"}},u={},p=[{value:"Null",id:"null",level:3},{value:"Number",id:"number",level:3},{value:"String",id:"string",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Date",id:"date",level:3},{value:"Time",id:"time",level:3},{value:"Date-Time",id:"date-time",level:3},{value:"Day-Time-Duration",id:"day-time-duration",level:3},{value:"Year-Month-Duration",id:"year-month-duration",level:3},{value:"List",id:"list",level:3},{value:"Context",id:"context",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A value can have one of the following types."),(0,l.kt)("h3",{id:"null"},"Null"),(0,l.kt)("p",null,"Nothing, null or nil (i.e. the value is not present)."),(0,l.kt)("p",null,"Some operations/functions return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if an argument in not valid or types doesn't match."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"null\n")),(0,l.kt)("h3",{id:"number"},"Number"),(0,l.kt)("p",null,"A whole or floating point number."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"not-a-number (NaN), positive/negative infinity are represented as ",(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.math.BigDecimal"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"1\n2.3\n.4\n")),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.lang.String"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"valid"\n')),(0,l.kt)("h3",{id:"boolean"},"Boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.lang.Boolean"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"true\nfalse\n")),(0,l.kt)("h3",{id:"date"},"Date"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"."),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalDate"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'date("2017-03-10")\n')),(0,l.kt)("h3",{id:"time"},"Time"),(0,l.kt)("p",null,"A local or zoned time. The time can have an offset or time zone id."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss+/-HH:mm")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss@ZoneId")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalTime")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.OffsetTime"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'time("11:45:30") \ntime("13:30")\n\ntime("11:45:30+02:00")\n\ntime("10:31:10@Europe/Paris")\n')),(0,l.kt)("h3",{id:"date-time"},"Date-Time"),(0,l.kt)("p",null,"A date with a local or zoned time component. The time can have an offset or time zone id."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss+/-HH:mm")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss@ZoneId")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalDateTime")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.DateTime"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'date and time("2015-09-18T10:31:10")\n\ndate and time("2015-09-18T10:31:10+01:00")\n\ndate and time("2015-09-18T10:31:10@Europe/Paris")\n')),(0,l.kt)("h3",{id:"day-time-duration"},"Day-Time-Duration"),(0,l.kt)("p",null,"A duration based on seconds. It can contain days, hours, minutes and seconds."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"PxDTxHxMxS")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.Duration"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'duration("P4D")\nduration("PT2H")\nduration("PT30M")\nduration("P1DT6H")\n')),(0,l.kt)("h3",{id:"year-month-duration"},"Year-Month-Duration"),(0,l.kt)("p",null,"A duration based on the calendar. It can contain years and months."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"PxYxM")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.Period"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'duration("P2Y")\nduration("P6M")\nduration("P1Y6M")\n')),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"A list of elements. Can be empty."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.List"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[]\n[1,2,3]\n["a","b"]\n\n[["list"], "of", [["lists"]]]\n')),(0,l.kt)("h3",{id:"context"},"Context"),(0,l.kt)("p",null,"A list of key-value-pairs. Can be empty."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.Map"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{}\n{"a": 1}\n{"b": 2, "c": "valid"}\n\n{"nested": {"d": 3}}\n')))}d.isMDXComponent=!0}}]);