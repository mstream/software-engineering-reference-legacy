(self.webpackChunkdigital_security_reference=self.webpackChunkdigital_security_reference||[]).push([[558],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),y=p(t),m=i,f=y["".concat(u,".").concat(m)]||y[m]||s[m]||o;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=y;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},78328:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var n=t(22122),i=t(19756),o=(t(67294),t(3905)),c={title:"Asymmetric Encryption",sidebar_position:2},a={unversionedId:"digital-security/encryption/asymmetric",id:"digital-security/encryption/asymmetric",isDocsHomePage:!1,title:"Asymmetric Encryption",description:"Overview {#overview}",source:"@site/docs/digital-security/encryption/asymmetric.mdx",sourceDirName:"digital-security/encryption",slug:"/digital-security/encryption/asymmetric",permalink:"/software-engineering-reference/digital-security/encryption/asymmetric",version:"current",sidebarPosition:2,frontMatter:{title:"Asymmetric Encryption",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Symmetric Encryption",permalink:"/software-engineering-reference/digital-security/encryption/symmetric"},next:{title:"Authentication Overview",permalink:"/software-engineering-reference/digital-security/authentication/overview"}},u=[{value:"Overview",id:"overview",children:[]}],p={toc:u};function l(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"person1: priv1, pub1\nperson2: priv2, pub2"),(0,o.kt)("p",null,"person1\nalg(m, priv1) -> iem\nalg(m, pub2) -> cem"),(0,o.kt)("p",null,"person2\nalg(iem, pub1) -> m\nalg(cem, priv2) -> m"))}l.isMDXComponent=!0}}]);