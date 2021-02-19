(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(201)),i={title:"Eradicate",description:"The eradicate `@Nullable` checker for Java annotations."},c={unversionedId:"checker-eradicate",id:"checker-eradicate",isDocsHomePage:!1,title:"Eradicate",description:"The eradicate `@Nullable` checker for Java annotations.",source:"@site/docs/checker-eradicate.md",slug:"/checker-eradicate",permalink:"/docs/next/checker-eradicate",version:"current",sidebar:"docs",previous:{title:"Cost: Runtime Complexity Analysis",permalink:"/docs/next/checker-cost"},next:{title:"Fragment Retains View",permalink:"/docs/next/checker-fragment-retains-view"}},o=[{value:"What is Infer:Eradicate?",id:"what-is-infereradicate",children:[]},{value:"What is the @Nullable convention?",id:"what-is-the-nullable-convention",children:[]},{value:"What is annotated?",id:"what-is-annotated",children:[]},{value:"How is Infer:Eradicate invoked?",id:"how-is-infereradicate-invoked",children:[]},{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The eradicate ",Object(l.b)("inlineCode",{parentName:"p"},"@Nullable")," checker for Java annotations."),Object(l.b)("p",null,"Activate with ",Object(l.b)("inlineCode",{parentName:"p"},"--eradicate"),"."),Object(l.b)("p",null,"Supported languages:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"C/C++/ObjC: No"),Object(l.b)("li",{parentName:"ul"},"Java: Yes"),Object(l.b)("li",{parentName:"ul"},"C#/.Net: Yes")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},'"I call it my billion-dollar mistake. It was the invention of the null\nreference in 1965."'),Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Tony_Hoare"},"Tony Hoare"))),Object(l.b)("h3",{id:"what-is-infereradicate"},"What is Infer:Eradicate?"),Object(l.b)("p",null,"Infer:Eradicate is a type checker for ",Object(l.b)("inlineCode",{parentName:"p"},"@Nullable")," annotations for Java. It is part\nof the Infer static analysis suite of tools. The goal is to eradicate null\npointer exceptions."),Object(l.b)("a",{href:"https://developer.android.com/reference/android/support/annotation/Nullable.html"},"@Nullable"),"annotations denote that a parameter, field or the return value of a method can be null. When decorating a parameter, this denotes that the parameter can legitimately be null and the method will need to deal with it. When decorating a method, this denotes the method might legitimately return null.",Object(l.b)("p",null,"Starting from @Nullable-annotated programs, the checker performs a flow\nsensitive analysis to propagate the nullability through assignments and calls,\nand flags errors for unprotected accesses to nullable values or\ninconsistent/missing annotations. It can also be used to add annotations to a\npreviously un-annotated program."),Object(l.b)("h3",{id:"what-is-the-nullable-convention"},"What is the @Nullable convention?"),Object(l.b)("p",null,"If you say nothing, you're saying that the value cannot be null. This is the\nrecommended option when possible:"),Object(l.b)("p",null,"Program safely, annotate nothing!"),Object(l.b)("p",null,"When this cannot be done, add a @Nullable annotation before the type to indicate\nthat the value can be null."),Object(l.b)("h3",{id:"what-is-annotated"},"What is annotated?"),Object(l.b)("p",null,"Annotations are placed at the interface of method calls and field accesses:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameters and return type of a method declaration."),Object(l.b)("li",{parentName:"ul"},"Field declarations.")),Object(l.b)("p",null,"Local variable declarations are not annotated: their nullability is inferred."),Object(l.b)("h3",{id:"how-is-infereradicate-invoked"},"How is Infer:Eradicate invoked?"),Object(l.b)("p",null,"Eradicate can be invoked by adding the option ",Object(l.b)("inlineCode",{parentName:"p"},"--eradicate")," to the checkers mode\nas in this example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"infer run -a checkers --eradicate -- javac Test.java\n")),Object(l.b)("p",null,"The checker will report an error on the following program that accesses a\nnullable value without null check:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"class C {\n  int getLength(@Nullable String s) {\n    return s.length();\n  }\n}\n")),Object(l.b)("p",null,"But it will not report an error on this guarded dereference:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"class C {\n  int getLength(@Nullable String s) {\n    if (s != null) {\n      return s.length();\n    } else {\n      return -1;\n    }\n  }\n}\n")),Object(l.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(l.b)("p",null,"The following issue types are reported by this checker:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_annotation_graph"},"ERADICATE_ANNOTATION_GRAPH")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_bad_nested_class_annotation"},"ERADICATE_BAD_NESTED_CLASS_ANNOTATION")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_condition_redundant"},"ERADICATE_CONDITION_REDUNDANT")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_field_not_initialized"},"ERADICATE_FIELD_NOT_INITIALIZED")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_field_not_nullable"},"ERADICATE_FIELD_NOT_NULLABLE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_field_over_annotated"},"ERADICATE_FIELD_OVER_ANNOTATED")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_inconsistent_subclass_parameter_annotation"},"ERADICATE_INCONSISTENT_SUBCLASS_PARAMETER_ANNOTATION")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_inconsistent_subclass_return_annotation"},"ERADICATE_INCONSISTENT_SUBCLASS_RETURN_ANNOTATION")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_meta_class_can_be_nullsafe"},"ERADICATE_META_CLASS_CAN_BE_NULLSAFE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_meta_class_is_nullsafe"},"ERADICATE_META_CLASS_IS_NULLSAFE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_meta_class_needs_improvement"},"ERADICATE_META_CLASS_NEEDS_IMPROVEMENT")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_nullable_dereference"},"ERADICATE_NULLABLE_DEREFERENCE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_parameter_not_nullable"},"ERADICATE_PARAMETER_NOT_NULLABLE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_redundant_nested_class_annotation"},"ERADICATE_REDUNDANT_NESTED_CLASS_ANNOTATION")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_return_not_nullable"},"ERADICATE_RETURN_NOT_NULLABLE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_return_over_annotated"},"ERADICATE_RETURN_OVER_ANNOTATED")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_unchecked_usage_in_nullsafe"},"ERADICATE_UNCHECKED_USAGE_IN_NULLSAFE")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_unvetted_third_party_in_nullsafe"},"ERADICATE_UNVETTED_THIRD_PARTY_IN_NULLSAFE"))))}b.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(h,c(c({ref:t},s),{},{components:a})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);