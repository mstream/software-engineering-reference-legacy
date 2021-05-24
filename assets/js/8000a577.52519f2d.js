(self.webpackChunkdigital_security_reference=self.webpackChunkdigital_security_reference||[]).push([[162],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97819:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"Conventional Commits",sidebar_position:2},c={unversionedId:"git/conventional-commits",id:"git/conventional-commits",isDocsHomePage:!1,title:"Conventional Commits",description:"Format",source:"@site/docs/git/conventional-commits.mdx",sourceDirName:"git",slug:"/git/conventional-commits",permalink:"/software-engineering-reference/git/conventional-commits",version:"current",sidebarPosition:2,frontMatter:{title:"Conventional Commits",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Trees",permalink:"/software-engineering-reference/git/architecture/trees"},next:{title:"Git Configuration",permalink:"/software-engineering-reference/git/cli/configuration"}},l=[{value:"Format",id:"format",children:[]},{value:"Commit Message Template",id:"commit-message-template",children:[]},{value:"Specification",id:"specification",children:[]}],s={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"{{type}}{{optional_scope}}: {{description}}\n\n{{optional_body}}\n\n{{optional_footer}}\n")),(0,i.kt)("h2",{id:"commit-message-template"},"Commit Message Template"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"commit.template")," Git option allow us to be presented with a custom\nmessage template whenever we execute a ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," command.\nThe value of that option is either an absolute or a relative path to\nthe file containing the template. If a relative path is used, the\nrepository in which the command got executed will be used as the base\ndirectory. Therefore, the template can be versioned along the content\nof the repository itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"# :============================ COMMIT ================================:\n# |--- SUBJECT --------------------------------------------------------|\n# |                                                                    |\n# | <type>[(scope)]: <description>                                     |\n# |                                                                    |\n# | Type can be:                                                       |\n# |     doc      (changes to documentation)                            |\n# |     feat     (new feature)                                         |\n# |     fix      (bug fix)                                             |\n# |     license  (edits regarding licensing)                           |\n# |     refactor (refactoring code)                                    |\n# |     revert   (reverting changes)                                   |\n# |     style    (formatting, missing semi colons, etc.)               |\n# |     test     (adding or refactoring tests)                         |\n# |                                                                    |\n# | Examples:                                                          |\n# |     feat(auth): Enable basic authentication                        |\n# |     fix(conf): Correct typo in the configuration                   |\n# |                                                                    |\n# |<--- SUBJECT START ------- under 50 chars ---\x3e|<-------------------\x3e|\n#################################################XXXXXXXXXXXXXXXXXXXXXXX\n\n#################################################XXXXXXXXXXXXXXXXXXXXXXX\n# |<--- SUBJECT END --------- under 50 chars ---\x3e|<-------------------\x3e|\n# .---- keep the empty line bellow ------------------------------------.\n\n# .--- BODY -----------------------------------------------------------.\n# |                                                                    |\n# | [- body line 1]                                                    |\n# | [- body line 2]                                                    |\n# | [.............]                                                    |\n# | [- body line n]                                                    |\n# |                                                                    |\n# | Example:                                                           |\n# |     - add README file to show how to use the library               |\n# |     - add CONTRIBUTING file to establish coding style conventions  |\n# |                                                                    |\n# |<--- BODY START -------------------------------- under 72 chars ---\x3e|\n#######################################################################X\n\n#######################################################################X\n# |<--- BODY END -----------------------------------under 72 chars ---\x3e|\n# .---- keep the empty line bellow ------------------------------------.\n\n# .--- FOOTER ---------------------------------------------------------.\n# |                                                                    |\n# | [footer line 1]                                                    |\n# | [footer line 2]                                                    |\n# | [.............]                                                    |\n# | [footer line n]                                                    |\n# |                                                                    |\n# | Example:                                                           |\n# |     Co-authored-by: Bob <bob@mail.com>                             |\n# |     Signed-off-by: Alice <alice@mail.com>                          |\n# |     Closes #34                                                     |\n# |     BREAKING CHANGE: deprecated API is removed                     |\n# |<--- FOOTER START ------------------------------ under 72 chars ---\x3e|\n#######################################################################X\n\n#######################################################################X\n# |<--- FOOTER END ---------------------------------under 72 chars ---\x3e|\n# :====================================================================:\n")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The full specification can be found at\n",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"this")," website."))}p.isMDXComponent=!0}}]);