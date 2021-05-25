(self.webpackChunkdigital_security_reference=self.webpackChunkdigital_security_reference||[]).push([[733],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,k=h["".concat(o,".").concat(u)]||h[u]||l[u]||i;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,s[1]=m;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},45375:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return m},toc:function(){return o},default:function(){return c}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),s={title:"Hashing Overview",sidebar_position:1},m={unversionedId:"digital-security/hashing/overview",id:"digital-security/hashing/overview",isDocsHomePage:!1,title:"Hashing Overview",description:"Hash function is a mathematical function mapping an arbitrarly long",source:"@site/docs/digital-security/hashing/overview.mdx",sourceDirName:"digital-security/hashing",slug:"/digital-security/hashing/overview",permalink:"/software-engineering-reference/digital-security/hashing/overview",version:"current",sidebarPosition:1,frontMatter:{title:"Hashing Overview",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Bubble Sort",permalink:"/software-engineering-reference/algorithms/sorting/bubble"},next:{title:"Cryptographical Hashing",permalink:"/software-engineering-reference/digital-security/hashing/cryptography"}},o=[{value:"Properties",id:"properties",children:[{value:"Fixed values range",id:"fixed-values-range",children:[]},{value:"Deterministic",id:"deterministic",children:[]},{value:"Uniform",id:"uniform",children:[]}]},{value:"Examples:",id:"examples",children:[]}],p={toc:o};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hash function is a mathematical function mapping an arbitrarly long\ninput ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"m")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))))," into a fixed-size output ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"h")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h"))))),". The result of such operation\nis called a ",(0,i.kt)("em",{parentName:"p"},"hash digest"),"."),(0,i.kt)("p",null,(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"hash"),(0,i.kt)("mo",{parentName:"mrow"},"\u2061"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"m"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mi",{parentName:"mrow"},"h")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\operatorname{hash}(m) = h")))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"fixed-values-range"},"Fixed values range"),(0,i.kt)("p",null,"Every hash digest ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"h")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))))," should have a defined, fixed length."),(0,i.kt)("h3",{id:"deterministic"},"Deterministic"),(0,i.kt)("p",null,"For a given input ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"m")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))))," the same hashing function should always give the\nsame value ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"h")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h"))))),"."),(0,i.kt)("h3",{id:"uniform"},"Uniform"),(0,i.kt)("p",null,"Values of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"h")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))))," should be evenly distributed over the hash function's\ncodomain."),(0,i.kt)("h2",{id:"examples"},"Examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java's ",(0,i.kt)("inlineCode",{parentName:"li"},"Object::hashCode")),(0,i.kt)("li",{parentName:"ul"},"Cassandra's partition key"),(0,i.kt)("li",{parentName:"ul"},"YouTube's URL shortener")))}c.isMDXComponent=!0}}]);