(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),l=(r(0),r(201)),c={title:"Pulse",description:"Memory and lifetime analysis."},i={unversionedId:"checker-pulse",id:"checker-pulse",isDocsHomePage:!1,title:"Pulse",description:"Memory and lifetime analysis.",source:"@site/docs/checker-pulse.md",slug:"/checker-pulse",permalink:"/docs/next/checker-pulse",version:"current",sidebar:"docs",previous:{title:"`printf()` Argument Types",permalink:"/docs/next/checker-printf-args"},next:{title:"Purity",permalink:"/docs/next/checker-purity"}},s=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],o={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Memory and lifetime analysis."),Object(l.b)("p",null,"Activate with ",Object(l.b)("inlineCode",{parentName:"p"},"--pulse"),"."),Object(l.b)("p",null,"Supported languages:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(l.b)("li",{parentName:"ul"},"Java: Experimental"),Object(l.b)("li",{parentName:"ul"},"C#/.Net: No")),Object(l.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(l.b)("p",null,"The following issue types are reported by this checker:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#constant_address_dereference"},"CONSTANT_ADDRESS_DEREFERENCE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#memory_leak"},"MEMORY_LEAK")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#nullptr_dereference"},"NULLPTR_DEREFERENCE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#optional_empty_access"},"OPTIONAL_EMPTY_ACCESS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_uninitialized_value"},"PULSE_UNINITIALIZED_VALUE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#stack_variable_address_escape"},"STACK_VARIABLE_ADDRESS_ESCAPE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_delete"},"USE_AFTER_DELETE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_free"},"USE_AFTER_FREE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_lifetime"},"USE_AFTER_LIFETIME")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#vector_invalidation"},"VECTOR_INVALIDATION"))))}p.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||b[f]||l;return r?a.a.createElement(m,i(i({ref:t},o),{},{components:r})):a.a.createElement(m,i({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);