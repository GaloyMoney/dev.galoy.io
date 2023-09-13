"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,l(l({ref:t},s),{},{components:r})):a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"learn-more",title:"Learn more",slug:"/api/learn-more"},l=void 0,i={unversionedId:"api/learn-more",id:"api/learn-more",title:"Learn more",description:"Postman collection",source:"@site/docs/api/d-learn-more.md",sourceDirName:"api",slug:"/api/learn-more",permalink:"/api/learn-more",draft:!1,tags:[],version:"current",frontMatter:{id:"learn-more",title:"Learn more",slug:"/api/learn-more"},sidebar:"apiSidebar",previous:{title:"Send satoshis over lightning",permalink:"/api/sats"}},p={},c=[{value:"Postman collection",id:"postman-collection",level:2},{value:"GraphQL playground",id:"graphql-playground",level:2},{value:"Galoy public API reference",id:"galoy-public-api-reference",level:2},{value:"Galoy admin API reference",id:"galoy-admin-api-reference",level:2},{value:"Videos",id:"videos",level:2},{value:"Using the Galoy GraphQL API",id:"using-the-galoy-graphql-api",level:3},{value:"Getting started with the Galoy API",id:"getting-started-with-the-galoy-api",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"postman-collection"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/GaloyMoney/galoy/tree/main/docs/postman-collection"},"Postman collection")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download Postman: ",(0,n.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"www.postman.com")," or use the web version: ",(0,n.kt)("a",{parentName:"li",href:"https://web.postman.co/"},"web.postman.co")),(0,n.kt)("li",{parentName:"ul"},"Download or import the collection: ",(0,n.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy_graphql_main_api.postman_collection.json"},"galoy_graphql_main_api.postman_collection.json")),(0,n.kt)("li",{parentName:"ul"},"Get the Staging Environment variables: ",(0,n.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy-staging.postman_environment.json"},"galoy-staging.postman_environment.json"))),(0,n.kt)("h2",{id:"graphql-playground"},"GraphQL playground"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Find the staging API endpoint and GraphQL playground at:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"https://api.staging.galoy.io/graphql"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the mainnet API endpoint and GraphQL playground connect to:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://api.blink.sv/graphql"},"https://api.blink.sv/graphql")))),(0,n.kt)("h2",{id:"galoy-public-api-reference"},(0,n.kt)("a",{parentName:"h2",href:"https://dev.galoy.io/public-api-reference.html"},"Galoy public API reference")),(0,n.kt)("h2",{id:"galoy-admin-api-reference"},(0,n.kt)("a",{parentName:"h2",href:"https://dev.galoy.io/admin-api-reference.html"},"Galoy admin API reference")),(0,n.kt)("h2",{id:"videos"},"Videos"),(0,n.kt)("h3",{id:"using-the-galoy-graphql-api"},"Using the Galoy GraphQL API"),(0,n.kt)("p",null,"Arvin demoes the Galoy GraphQL API on 2022-Oct-26."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/RRdpKnFe8qQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h3",{id:"getting-started-with-the-galoy-api"},"Getting started with the Galoy API"),(0,n.kt)("p",null,"Arvin walks through how to use the Galoy API to send USD over Lightning on 2022-Mar-29."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bp5Dc6Wvnbw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);