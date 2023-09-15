"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(r),d=o,m=y["".concat(p,".").concat(d)]||y[d]||s[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="Deployment",i={unversionedId:"deployment/README",id:"deployment/README",title:"Deployment",description:"Setting up the Galoy stack locally",source:"@site/docs/deployment/README.md",sourceDirName:"deployment",slug:"/deployment/",permalink:"/deployment/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deploymentSidebar",next:{title:"Staging Environment",permalink:"/deployment/staging-environment"}},p={},c=[{value:"Setting up the Galoy stack locally",id:"setting-up-the-galoy-stack-locally",level:2},{value:"Videos",id:"videos",level:2},{value:"How to build a Bitcoin Bank",id:"how-to-build-a-bitcoin-bank",level:3},{value:"Overview of the Galoy Infrastructure",id:"overview-of-the-galoy-infrastructure",level:3}],u={toc:c},y="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"setting-up-the-galoy-stack-locally"},"Setting up the Galoy stack locally"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deployment/backend-servers"},"Backend Servers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deployment/mobile-wallet"},"Mobile Wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deployment/web-wallet"},"Web Wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deployment/galoy-pay"},"Galoy Pay")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deployment/admin-panel"},"Admin Panel"))),(0,o.kt)("h2",{id:"videos"},"Videos"),(0,o.kt)("h3",{id:"how-to-build-a-bitcoin-bank"},"How to build a Bitcoin Bank"),(0,o.kt)("p",null,"On a hands-on workshop on 2023-Feb-04 Nick is going over the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn more about Galoy and how they develop the open-source standard for bitcoin banking."),(0,o.kt)("li",{parentName:"ul"},"Learn how to set up your own Bitcoin bank with Galoy."),(0,o.kt)("li",{parentName:"ul"},"and more!")),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/j1Anp6vWQP0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h3",{id:"overview-of-the-galoy-infrastructure"},"Overview of the Galoy Infrastructure"),(0,o.kt)("p",null,"A step-by-step walkthrough of deploying a local test instance of the Galoy stack using K3D (Kubernetes in Docker) by Openoms (2023-Feb-04)"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4BjADqwD9H8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}s.isMDXComponent=!0}}]);