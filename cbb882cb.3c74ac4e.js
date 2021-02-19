(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{173:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),l=(t(0),t(201)),c={title:"Buffer Overrun Analysis (InferBO)",description:"InferBO is a detector for out-of-bounds array accesses."},o={unversionedId:"checker-bufferoverrun",id:"version-1.0.0/checker-bufferoverrun",isDocsHomePage:!1,title:"Buffer Overrun Analysis (InferBO)",description:"InferBO is a detector for out-of-bounds array accesses.",source:"@site/versioned_docs/version-1.0.0/checker-bufferoverrun.md",slug:"/checker-bufferoverrun",permalink:"/docs/checker-bufferoverrun",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Biabduction",permalink:"/docs/checker-biabduction"},next:{title:"Config Checks between Markers",permalink:"/docs/checker-config-checks-between-markers"}},i=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={toc:i};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,"InferBO is a detector for out-of-bounds array accesses."),Object(l.b)("p",null,"Activate with ",Object(l.b)("inlineCode",{parentName:"p"},"--bufferoverrun"),"."),Object(l.b)("p",null,"Supported languages:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(l.b)("li",{parentName:"ul"},"Java: Yes")),Object(l.b)("p",null,"You can read about its origins in this ",Object(l.b)("a",{parentName:"p",href:"https://research.fb.com/inferbo-infer-based-buffer-overrun-analyzer/"},"blog post"),"."),Object(l.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(l.b)("p",null,"The following issue types are reported by this checker:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#buffer_overrun_l1"},"BUFFER_OVERRUN_L1")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#buffer_overrun_l2"},"BUFFER_OVERRUN_L2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#buffer_overrun_l3"},"BUFFER_OVERRUN_L3")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#buffer_overrun_l4"},"BUFFER_OVERRUN_L4")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#buffer_overrun_l5"},"BUFFER_OVERRUN_L5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#buffer_overrun_s2"},"BUFFER_OVERRUN_S2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#buffer_overrun_u5"},"BUFFER_OVERRUN_U5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#condition_always_false"},"CONDITION_ALWAYS_FALSE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#condition_always_true"},"CONDITION_ALWAYS_TRUE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#inferbo_alloc_is_big"},"INFERBO_ALLOC_IS_BIG")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#inferbo_alloc_is_negative"},"INFERBO_ALLOC_IS_NEGATIVE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#inferbo_alloc_is_zero"},"INFERBO_ALLOC_IS_ZERO")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#inferbo_alloc_may_be_big"},"INFERBO_ALLOC_MAY_BE_BIG")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#inferbo_alloc_may_be_negative"},"INFERBO_ALLOC_MAY_BE_NEGATIVE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#integer_overflow_l1"},"INTEGER_OVERFLOW_L1")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#integer_overflow_l2"},"INTEGER_OVERFLOW_L2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#integer_overflow_l5"},"INTEGER_OVERFLOW_L5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#integer_overflow_u5"},"INTEGER_OVERFLOW_U5")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/all-issue-types#unreachable_code"},"UNREACHABLE_CODE"))))}b.isMDXComponent=!0},201:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return O}));var n=t(0),a=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=b(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(t),f=n,O=u["".concat(c,".").concat(f)]||u[f]||p[f]||l;return t?a.a.createElement(O,o(o({ref:r},s),{},{components:t})):a.a.createElement(O,o({ref:r},s))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=f;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);