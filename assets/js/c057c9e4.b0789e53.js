"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(n),d=a,m=y["".concat(p,".").concat(d)]||y[d]||s[d]||r;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={id:"galoy-pay",title:"Galoy Pay",slug:"/deployment/galoy-pay"},l="Galoy Pay",i={unversionedId:"deployment/galoy-pay",id:"deployment/galoy-pay",title:"Galoy Pay",description:"Galoy Pay is a web application that can be used to send tips or payments to users of the Galoy API.",source:"@site/docs/deployment/c-galoy-pay.md",sourceDirName:"deployment",slug:"/deployment/galoy-pay",permalink:"/deployment/galoy-pay",draft:!1,tags:[],version:"current",frontMatter:{id:"galoy-pay",title:"Galoy Pay",slug:"/deployment/galoy-pay"},sidebar:"deploymentSidebar",previous:{title:"Backend Servers",permalink:"/deployment/backend-servers"},next:{title:"Mobile Wallet",permalink:"/deployment/mobile-wallet"}},p={},c=[{value:"How to run this repo locally?",id:"how-to-run-this-repo-locally",level:3},{value:"How to build for production?",id:"how-to-build-for-production",level:4}],u={toc:c},y="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"galoy-pay"},"Galoy Pay"),(0,a.kt)("p",null,"Galoy Pay is a web application that can be used to send tips or payments to users of the Galoy API."),(0,a.kt)("p",null,"It's packaged as a docker image, and is automatically installed as part of the Galoy helm charts."),(0,a.kt)("p",null,"With a default installation, Galoy-Pay can be accessed under ",(0,a.kt)("inlineCode",{parentName:"p"},"pay.domain.com"),"."),(0,a.kt)("p",null,"Galoy-Pay uses query, mutation, and subscription operations from the Galoy's graphql API endpoints ",(0,a.kt)("inlineCode",{parentName:"p"},"api.domain.com")," as defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GaloyMoney/galoy/blob/main/src/graphql/main/schema.graphql"},"schema.graphql")),(0,a.kt)("h3",{id:"how-to-run-this-repo-locally"},"How to run this repo locally?"),(0,a.kt)("p",null,"In the project directory, create a file name ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," and fill it with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NEXT_PUBLIC_GRAPHQL_HOSTNAME='api.staging.galoy.io'\n")),(0,a.kt)("p",null,"(or use your custom API URL), then run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn install\nyarn dev\n")),(0,a.kt)("p",null,"This will run the app in the development mode."),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000")," to view it in the browser."),(0,a.kt)("p",null,"The page will automatically reload when you make edits."),(0,a.kt)("p",null,"You will also see any lint errors in the console."),(0,a.kt)("h4",{id:"how-to-build-for-production"},"How to build for production?"),(0,a.kt)("p",null,"In the project directory, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn install\nyarn build\n")),(0,a.kt)("p",null,"This will build the app for production under a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder. It will bundle React in production mode and optimize the build for the best performance. The build will be minified, and the bundled files will include unique hashes in their names."))}s.isMDXComponent=!0}}]);