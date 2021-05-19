(self.webpackChunkdigital_security_reference=self.webpackChunkdigital_security_reference||[]).push([[558],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),y=p(r),m=i,f=y["".concat(u,".").concat(m)]||y[m]||s[m]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},64489:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),c={title:"Asymmetric Encryption",sidebar_position:2},a={unversionedId:"digital-security/encryption/asymmetric",id:"digital-security/encryption/asymmetric",isDocsHomePage:!1,title:"Asymmetric Encryption",description:"Overview {#overview}",source:"@site/docs/digital-security/encryption/asymmetric.mdx",sourceDirName:"digital-security/encryption",slug:"/digital-security/encryption/asymmetric",permalink:"/digital-security/encryption/asymmetric",version:"current",sidebarPosition:2,frontMatter:{title:"Asymmetric Encryption",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Symmetric Encryption",permalink:"/digital-security/encryption/symmetric"},next:{title:"Authentication Overview",permalink:"/digital-security/authentication/overview"}},u=[{value:"Overview",id:"overview",children:[]}],p={toc:u};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"person1: priv1, pub1\nperson2: priv2, pub2"),(0,o.kt)("p",null,"person1\nalg(m, priv1) -> iem\nalg(m, pub2) -> cem"),(0,o.kt)("p",null,"person2\nalg(iem, pub1) -> m\nalg(cem, priv2) -> m"))}l.isMDXComponent=!0}}]);