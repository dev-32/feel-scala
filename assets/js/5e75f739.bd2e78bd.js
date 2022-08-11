"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"context-samples",title:"Context Samples"},l=void 0,i={unversionedId:"samples/context-samples",id:"version-1.14/samples/context-samples",title:"Context Samples",description:"Validate Data",source:"@site/versioned_docs/version-1.14/samples/context-samples.md",sourceDirName:"samples",slug:"/samples/context-samples",permalink:"/feel-scala/docs/1.14/samples/context-samples",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.14/samples/context-samples.md",tags:[],version:"1.14",frontMatter:{id:"context-samples",title:"Context Samples"},sidebar:"version-1.14/Samples",previous:{title:"List Samples",permalink:"/feel-scala/docs/1.14/samples/list-samples"}},s={},c=[{value:"Validate Data",id:"validate-data",level:2},{value:"Structure a Calculation",id:"structure-a-calculation",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validate-data"},"Validate Data"),(0,a.kt)("p",null,"Validate journal entries and return all violations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  check1: {\n    error: "Document Type invalid for current year posting",\n    violations: collection[documentType = "S2" and glDate > startFiscalYear] \n  },\n  check2: {\n    error: "Document Type invalid for current year posting",\n    violations: collection[ledgerType = "GP" and foreignAmount != null] \n  },\n  result: ([check1, check2])[count(violations) > 0] \n}\n')),(0,a.kt)("h2",{id:"structure-a-calculation"},"Structure a Calculation"),(0,a.kt)("p",null,"Calculate the minimum age of a given list of birthdays."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  age: function(birthday) (today() - birthday).years,\n  ages: for birthday in birthdays return age(birthday),\n  minAge: min(ages)\n}.minAge\n")))}u.isMDXComponent=!0}}]);