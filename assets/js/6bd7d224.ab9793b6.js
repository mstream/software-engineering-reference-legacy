(self.webpackChunkdigital_security_reference=self.webpackChunkdigital_security_reference||[]).push([[180],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=i,d=s["".concat(l,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},66724:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a={title:"Git Configuration",sidebar_position:1},c={unversionedId:"git/cli/configuration",id:"git/cli/configuration",isDocsHomePage:!1,title:"Git Configuration",description:"Format",source:"@site/docs/git/cli/configuration.mdx",sourceDirName:"git/cli",slug:"/git/cli/configuration",permalink:"/git/cli/configuration",version:"current",sidebarPosition:1,frontMatter:{title:"Git Configuration",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Conventional Commits",permalink:"/git/conventional-commits"},next:{title:"Porcelain Commands",permalink:"/git/cli/porcelain"}},l=[{value:"Format",id:"format",children:[]},{value:"Full Reference",id:"full-reference",children:[]}],u={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-handlebars"},"[core]\n  editor = {{editor_executable_path}}\n[user]\n  name = {{user_name}}\n  email = {{user_email}}\n")),(0,o.kt)("h2",{id:"full-reference"},"Full Reference"),(0,o.kt)("p",null,"All possible configuration options can be fount at\n",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-config"},"this")," website."))}f.isMDXComponent=!0}}]);