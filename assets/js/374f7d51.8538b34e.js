"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[7821],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={id:"feel-expression",title:"Expressions"},i=void 0,s={unversionedId:"reference/language-guide/feel-expression",id:"version-1.12/reference/language-guide/feel-expression",title:"Expressions",description:"An expression can contain literals, operators and function calls.",source:"@site/versioned_docs/version-1.12/reference/language-guide/feel-expression.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-expression",permalink:"/feel-scala/docs/1.12/reference/language-guide/feel-expression",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.12/reference/language-guide/feel-expression.md",tags:[],version:"1.12",frontMatter:{id:"feel-expression",title:"Expressions"},sidebar:"version-1.12/Reference",previous:{title:"Unary-Tests",permalink:"/feel-scala/docs/1.12/reference/language-guide/feel-unary-tests"},next:{title:"Conversion Functions",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-conversion"}},o={},u=[{value:"Literal",id:"literal",level:3},{value:"Path Expression",id:"path-expression",level:3},{value:"Addition",id:"addition",level:3},{value:"Subtraction",id:"subtraction",level:3},{value:"Multiplication",id:"multiplication",level:3},{value:"Division",id:"division",level:3},{value:"Exponentiation",id:"exponentiation",level:3},{value:"Comparison",id:"comparison",level:3},{value:"Disjunction and Conjunction",id:"disjunction-and-conjunction",level:3},{value:"If Expression",id:"if-expression",level:3},{value:"For Expressions",id:"for-expressions",level:3},{value:"Some/Every Expression",id:"someevery-expression",level:3},{value:"Filter Expression",id:"filter-expression",level:3},{value:"Evaluate a Unary Tests",id:"evaluate-a-unary-tests",level:3},{value:"Instance-Of Expression",id:"instance-of-expression",level:3},{value:"Functions",id:"functions",level:3},{value:"Special Properties",id:"special-properties",level:3}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An expression can contain literals, operators and function calls."),(0,r.kt)("h3",{id:"literal"},"Literal"),(0,r.kt)("p",null,"A single value of one of the ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.12/reference/language-guide/feel-data-types"},"types"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'null\n21\n"valid"\n')),(0,r.kt)("h3",{id:"path-expression"},"Path Expression"),(0,r.kt)("p",null,"Access a value by its name/path. For example, a given variable from the input/context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"x + y\n")),(0,r.kt)("p",null,"If the value is a context (or data object/POJO) then the inner values can be accessed by ",(0,r.kt)("inlineCode",{parentName:"p"},"context.key"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"x.y\n// return 1 if x is {y: 1}\n")),(0,r.kt)("p",null,"Also, directly on a context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{x: 2}.x\n// 2\n\n{x: {y: "valid"}}.x\n// {y: "valid"}\n\n{x: {y: "valid"}}.x.y\n// "valid"\n')),(0,r.kt)("p",null,"Inside a context, the previous values can be accessed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  a: 1,\n  b: 2,\n  c: a + b\n}\n")),(0,r.kt)("p",null,"If the name or path contains any special character (e.g. whitespace, dash, etc.) then the name needs to be wrapped into single backquotes/backtick ",(0,r.kt)("inlineCode",{parentName:"p"},"`foo bar`"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"`name with whitespace`.`name+operator`\n")),(0,r.kt)("h3",{id:"addition"},"Addition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"supported types: number, string, day-time-duration, year-month-duration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'2 + 3\n// 5\n\n"foo" + "bar"\n// "foobar"\n\nduration("P1D") + duration("PT6H")\n// duration("P1DT6H")\n')),(0,r.kt)("h3",{id:"subtraction"},"Subtraction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"supported types: number, time, date-time, day-time-duration, year-month-duration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'5 - 3\n// 2\n\ntime("10:30:00") - time("09:00:00")\n// duration("PT1H30M")\n\ntime("10:30:00") - duration("PT1H") \n// time("09:30:00")\n')),(0,r.kt)("h3",{id:"multiplication"},"Multiplication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"supported types: number, day-time-duration, year-month-duration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'5 * 3        \n// 15\n\n3 * duration("P2Y")      \n// duration("P6Y") \n')),(0,r.kt)("h3",{id:"division"},"Division"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"supported types: number, day-time-duration, year-month-duration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'6 / 2  \n// 3\n\nduration("P1Y") / 2 \n// duration("P6M")\n\nduration("P1Y") / duration("P1M")\n// 12\n')),(0,r.kt)("h3",{id:"exponentiation"},"Exponentiation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"supported types: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"2 ** 3   \n// 8\n")),(0,r.kt)("h3",{id:"comparison"},"Comparison"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"operator"),(0,r.kt)("th",{parentName:"tr",align:null},"symbol"),(0,r.kt)("th",{parentName:"tr",align:null},"example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"equal to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'x = "valid"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"not equal to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'x != "valid"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"less than"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"< 10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"less than or equal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<= 10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greater than"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"> 10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greater than or equal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">= 10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"between"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"between _ and _")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x between 3 and 9"))))),(0,r.kt)("p",null,"The operators less than, greater than, and between are only supported for: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"number"),(0,r.kt)("li",{parentName:"ul"},"date"),(0,r.kt)("li",{parentName:"ul"},"time"),(0,r.kt)("li",{parentName:"ul"},"date-time"),(0,r.kt)("li",{parentName:"ul"},"year-month-duration"),(0,r.kt)("li",{parentName:"ul"},"day-time-duration ")),(0,r.kt)("p",null,"Any value can be compared with ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to check if it is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", or if it exists. Comparing ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to a value different from ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," results in ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". It returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the value, or the context entry (e.g. the property of a variable) is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or doesn't exist. The built-in function ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-boolean#is-defined"},"is defined()")," can be used to differentiate between a value that is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and a value that doesn't exist. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'null = null\n// true\n\n"foo" = null\n// false\n\nx = null\n// true - if "x" is null or doesn\'t exist\n\nx.y = null\n// true - if "x" is null, "x" doesn\'t exist, \n//           "y" is null, or "x" has no property "y" \n')),(0,r.kt)("h3",{id:"disjunction-and-conjunction"},"Disjunction and Conjunction"),(0,r.kt)("p",null,"Combine two boolean values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"true and true   \n// true\n\ntrue and false        \n// false\n\ntrue and null        \n// null\n\nfalse and null\n// false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"true or false   \n// true\n\nfalse or false  \n// false\n\ntrue or null   \n// true\n\nfalse or null  \n// null\n")),(0,r.kt)("h3",{id:"if-expression"},"If Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (x < 5) then "low" else "high"\n')),(0,r.kt)("h3",{id:"for-expressions"},"For Expressions"),(0,r.kt)("p",null,"Iterate over a list and apply an expression (i.e. aka ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"). The result is again a list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for x in [1,2] return x * 2 \n// [2,4]\n")),(0,r.kt)("p",null,"Iterate over multiple lists."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for x in [1,2], y in [3,4] return x * y  \n// [3,4,6,8]\n")),(0,r.kt)("p",null,"Iterate over a range - forward or backward."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for x in 1..3 return x * 2                  \n// [2,4,6]\n\nfor x in 3..1 return x * 2       \n// [6,4,2]\n")),(0,r.kt)("p",null,"The previous results of the iterator can be accessed by the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"partial"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for x in 1..5 return x + sum(partial)       \n// [1,3,7,15,31]\n")),(0,r.kt)("h3",{id:"someevery-expression"},"Some/Every Expression"),(0,r.kt)("p",null,"Test if at least one element of the list satisfies the expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"some x in [1,2,3] satisfies x > 2         \n// true\n\nsome x in [1,2,3] satisfies x > 3   \n// false\n\nsome x in [1,2], y in [2,3] satisfies x < y  \n// true\n")),(0,r.kt)("p",null,"Test if all elements of the list satisfies the expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"every x in [1,2,3] satisfies x >= 1   \n// true\n\nevery x in [1,2,3] satisfies x >= 2     \n// false\n\nevery x in [1,2], y in [2,3] satisfies x < y \n// false\n")),(0,r.kt)("h3",{id:"filter-expression"},"Filter Expression"),(0,r.kt)("p",null,"Filter a list of elements by an expression. The expression can access the current element by ",(0,r.kt)("inlineCode",{parentName:"p"},"item"),". The result is a list again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[1,2,3,4][item > 2]   \n// [3,4]\n")),(0,r.kt)("p",null,"An element of a list can be accessed by its index. The index starts at ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". A negative index starts at the end by ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[1,2,3,4][1]           \n// 1\n\n[1,2,3,4][4]                                   \n// 4\n\n[1,2,3,4][-1]                                  \n// 4\n\n[1,2,3,4][-2]                                  \n// 3\n\n[1,2,3,4][5]                                   \n// null\n")),(0,r.kt)("p",null,"If the elements are contextes then the nested value of the current element can be accessed directly by its name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[ {a: "foo", b: 5},  {a: "bar", b: 10} ][b > 7] \n// {a : "bar", b: 10}\n')),(0,r.kt)("p",null,"The nested values of a specific key can be extracted by ",(0,r.kt)("inlineCode",{parentName:"p"},".key"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[ {a : "foo", b: 5 }, {a: "bar", b: 10} ].a     \n// ["foo", "bar"]\n')),(0,r.kt)("h3",{id:"evaluate-a-unary-tests"},"Evaluate a Unary Tests"),(0,r.kt)("p",null,"Evaluates a ",(0,r.kt)("a",{parentName:"p",href:"feel-unary-tests"},"unary-tests expression")," with the given value. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"x in (2..4)\n\nx in < 3\n")),(0,r.kt)("h3",{id:"instance-of-expression"},"Instance-Of Expression"),(0,r.kt)("p",null,"Checks the type of the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"foo" instance of number                      \n// false\n\n"bar" instance of string                            \n// true\n')),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Invoke a user-defined or built-in function by its name. The arguments can be passed positional or named."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"add(1,2)\n// or\nadd(x:1, y:2)\n")),(0,r.kt)("p",null,"A function (body) can be defined using ",(0,r.kt)("inlineCode",{parentName:"p"},"function(arguments) expression"),". For example, inside a context. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n    add : function(x,y) x + y\n}\n")),(0,r.kt)("p",null,"It is also possible to define an external function which calls a Java method. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function(x,y) external { \n    java: { \n        class: "java.lang.Math", \n        method signature: "max(int, int)" \n    } \n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"External functions are disabled by default (security risk). Use the ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.12/reference/developer-guide/function-provider-spi"},"FunctionProvider API")," instead or enable external functions in the configuration (not recommended).")),(0,r.kt)("h3",{id:"special-properties"},"Special Properties"),(0,r.kt)("p",null,"Values of type date, time, date-time and duration have special properties to access their individual parts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'date("2017-03-10").year                   \ndate("2017-03-10").month                \ndate("2017-03-10").day\n\ntime("11:45:30+02:00").hour            \ntime("11:45:30+02:00").minute         \ntime("11:45:30+02:00").second        \ntime("11:45:30+02:00").time offset   \n\ndate and time("2017-03-10T11:45:30+02:00").year\ndate and time("2017-03-10T11:45:30+02:00").month\ndate and time("2017-03-10T11:45:30+02:00").day\ndate and time("2017-03-10T11:45:30+02:00").hour\ndate and time("2017-03-10T11:45:30+02:00").minute\ndate and time("2017-03-10T11:45:30+02:00").second\ndate and time("2017-03-10T11:45:30+02:00").time offset\n\nduration("P2Y3M").years                  \nduration("P2Y3M").months               \n\nduration("P1DT2H10M30S").days      \nduration("P1DT2H10M30S").hours     \nduration("P1DT2H10M30S").minutes \nduration("P1DT2H10M30S").seconds \n')))}d.isMDXComponent=!0}}]);