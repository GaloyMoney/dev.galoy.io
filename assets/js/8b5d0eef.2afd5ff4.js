"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"api",title:"API",slug:"/products/api"},i=void 0,l={unversionedId:"products/api",id:"products/api",title:"API",description:"Hosted API",source:"@site/docs/products/b-api.md",sourceDirName:"products",slug:"/products/api",permalink:"/products/api",draft:!1,tags:[],version:"current",frontMatter:{id:"api",title:"API",slug:"/products/api"},sidebar:"productsSidebar",previous:{title:"Galoy Core",permalink:"/products/galoy-core"},next:{title:"Stablesats",permalink:"/products/stablesats"}},p={},c=[{value:"Hosted API",id:"hosted-api",level:2},{value:"Local <code>dev</code> API access",id:"local-dev-api-access",level:2},{value:"Admin API",id:"admin-api",level:2},{value:"Galoy admin API reference",id:"galoy-admin-api-reference",level:3},{value:"Preformed GraphQL queries",id:"preformed-graphql-queries",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hosted-api"},"Hosted API"),(0,a.kt)("p",null,"To try the hosted instance of our API visit the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.blink.sv/api"},"Blink Developer Documentation"),(0,a.kt)("br",null),"\nThere you can find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an interactive tutorials to get started with the API"),(0,a.kt)("li",{parentName:"ul"},"the endpoints to use for mainnet and signet bitcoin"),(0,a.kt)("li",{parentName:"ul"},"a Postman collection and environment variables"),(0,a.kt)("li",{parentName:"ul"},"generated GraphQL queries in multiple programming languages"),(0,a.kt)("li",{parentName:"ul"},"API reference documentation")),(0,a.kt)("h2",{id:"local-dev-api-access"},"Local ",(0,a.kt)("inlineCode",{parentName:"h2"},"dev")," API access"),(0,a.kt)("p",null,"For the local ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clone the galoy repo: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GaloyMoney/galoy"},"https://github.com/GaloyMoney/galoy")),(0,a.kt)("li",{parentName:"ul"},"follow the steps in the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GaloyMoney/galoy/tree/main?tab=readme-ov-file#local-development-setup"},"readme")," start hosting the API locally")),(0,a.kt)("p",null,"Find more details about hosting the Galoy satck yourself in the ",(0,a.kt)("a",{parentName:"p",href:"/deployment/"},"deployment section"),"."),(0,a.kt)("h2",{id:"admin-api"},"Admin API"),(0,a.kt)("h3",{id:"galoy-admin-api-reference"},(0,a.kt)("a",{parentName:"h3",href:"https://dev.galoy.io/admin-api-reference.html"},"Galoy admin API reference")),(0,a.kt)("h3",{id:"preformed-graphql-queries"},"Preformed GraphQL queries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GaloyMoney/galoy/tree/main/core/api/test/bats/admin-gql"},"galoy/tree/main/core/api/test/bats/admin-gql"))))}d.isMDXComponent=!0}}]);