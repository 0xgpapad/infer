(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(201)),c={title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety."},o={unversionedId:"checker-biabduction",id:"checker-biabduction",isDocsHomePage:!1,title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety.",source:"@site/docs/checker-biabduction.md",slug:"/checker-biabduction",permalink:"/docs/next/checker-biabduction",version:"current",sidebar:"docs",previous:{title:"Annotation Reachability",permalink:"/docs/next/checker-annotation-reachability"},next:{title:"Buffer Overrun Analysis (InferBO)",permalink:"/docs/next/checker-bufferoverrun"}},l=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This analysis deals with a range of issues, many linked to memory safety."),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--biabduction"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(i.b)("li",{parentName:"ul"},"Java: Yes"),Object(i.b)("li",{parentName:"ul"},"C#/.Net: Yes")),Object(i.b)("p",null,"Read more about its foundations in the ",Object(i.b)("a",{parentName:"p",href:"separation-logic-and-bi-abduction"},"Separation Logic and Biabduction page"),"."),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#biabduction_memory_leak"},"BIABDUCTION_MEMORY_LEAK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#dangling_pointer_dereference"},"DANGLING_POINTER_DEREFERENCE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#divide_by_zero"},"DIVIDE_BY_ZERO")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#empty_vector_access"},"EMPTY_VECTOR_ACCESS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#ivar_not_null_checked"},"IVAR_NOT_NULL_CHECKED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#null_dereference"},"NULL_DEREFERENCE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#parameter_not_null_checked"},"PARAMETER_NOT_NULL_CHECKED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#premature_nil_termination_argument"},"PREMATURE_NIL_TERMINATION_ARGUMENT")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#resource_leak"},"RESOURCE_LEAK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#retain_cycle"},"RETAIN_CYCLE"))))}u.isMDXComponent=!0}}]);