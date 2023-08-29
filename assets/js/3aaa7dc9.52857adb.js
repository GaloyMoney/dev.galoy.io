"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=i,h=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={description:"For people new to Galoy, this page will point you in the right direction."},r="Quickstart",l={unversionedId:"products/README",id:"products/README",title:"Quickstart",description:"For people new to Galoy, this page will point you in the right direction.",source:"@site/docs/products/README.md",sourceDirName:"products",slug:"/products/",permalink:"/products/",draft:!1,tags:[],version:"current",frontMatter:{description:"For people new to Galoy, this page will point you in the right direction."},sidebar:"productsSidebar",next:{title:"Public API",permalink:"/products/public-api"}},p={},u=[{value:"Download the Blink app",id:"download-the-blink-app",level:2},{value:"Connect to the Staging Environment",id:"connect-to-the-staging-environment",level:2},{value:"On a fresh start",id:"on-a-fresh-start",level:3},{value:"Already using Blink (will log out)",id:"already-using-blink-will-log-out",level:3},{value:"Get an authentication token for the API",id:"get-an-authentication-token-for-the-api",level:2},{value:"Set up the email login",id:"set-up-the-email-login",level:2},{value:"Upgrade the account with a phone number",id:"upgrade-the-account-with-a-phone-number",level:3},{value:"Add an email address for login",id:"add-an-email-address-for-login",level:3}],c={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://chat.galoy.io"},"Join the Galoy Workspace")," and say hello in the Town Square \u2013 there is a community of devs happy to help you get up and running.")),(0,i.kt)("h2",{id:"download-the-blink-app"},"Download the Blink app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"visit ",(0,i.kt)("a",{parentName:"li",href:"https://get.blink.sv"},"https://get.blink.sv")," for the App Store / Google Play / App Gallery links"),(0,i.kt)("li",{parentName:"ul"},"or download the Android apk from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GaloyMoney/galoy-mobile/releases"},"https://github.com/GaloyMoney/galoy-mobile/releases"))),(0,i.kt)("h2",{id:"connect-to-the-staging-environment"},"Connect to the Staging Environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"this is optional for testing using the ",(0,i.kt)("a",{parentName:"li",href:"https://en.bitcoin.it/wiki/Signet"},"default signet")),(0,i.kt)("li",{parentName:"ul"},"more info on the ",(0,i.kt)("a",{parentName:"li",href:"/deployment/staging-environment"},"staging environment")),(0,i.kt)("li",{parentName:"ul"},"more info on ",(0,i.kt)("a",{parentName:"li",href:"/signet"},"testing on signet"))),(0,i.kt)("h3",{id:"on-a-fresh-start"},"On a fresh start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"open Blink"),(0,i.kt)("li",{parentName:"ul"},"tap the Blink logo 3 times before creating an account"),(0,i.kt)("li",{parentName:"ul"},"select ",(0,i.kt)("inlineCode",{parentName:"li"},"Staging")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"Update Environment"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Save changes")," and go back to the start screen"),(0,i.kt)("li",{parentName:"ul"},"the wallet is now connected to the staging environment"),(0,i.kt)("li",{parentName:"ul"},"carry on with: ",(0,i.kt)("inlineCode",{parentName:"li"},"Create new account"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Start with trial account")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Log back in with Phone or Email"))),(0,i.kt)("h3",{id:"already-using-blink-will-log-out"},"Already using Blink (will log out)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"select the menu on the top right and scroll down"),(0,i.kt)("li",{parentName:"ul"},"tap the build number on the bottom 3 times"),(0,i.kt)("li",{parentName:"ul"},"select ",(0,i.kt)("inlineCode",{parentName:"li"},"Staging")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"Update Environment"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Save changes")," and go back to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")),(0,i.kt)("li",{parentName:"ul"},"the wallet is now connected to the staging environment"),(0,i.kt)("li",{parentName:"ul"},"carry on with: ",(0,i.kt)("inlineCode",{parentName:"li"},"Create new account"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Start with trial account")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Log back in with Phone or Email"))),(0,i.kt)("h2",{id:"get-an-authentication-token-for-the-api"},"Get an authentication token for the API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Create new account"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Start with trial account")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Log back in with Phone or Email")),(0,i.kt)("li",{parentName:"ul"},"tap the menu on the top right and scroll down"),(0,i.kt)("li",{parentName:"ul"},"select the build number on the bottom 3 times"),(0,i.kt)("li",{parentName:"ul"},"select ",(0,i.kt)("inlineCode",{parentName:"li"},"Copy access token")," to save the token to your clipboard")),(0,i.kt)("h2",{id:"set-up-the-email-login"},"Set up the email login"),(0,i.kt)("h3",{id:"upgrade-the-account-with-a-phone-number"},"Upgrade the account with a phone number"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"select the menu on the top right and tap ",(0,i.kt)("inlineCode",{parentName:"li"},"Account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Backup/upgrade account")),(0,i.kt)("li",{parentName:"ul"},"complete the Account set up with a phone number")),(0,i.kt)("h3",{id:"add-an-email-address-for-login"},"Add an email address for login"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"only available if a phone number was added previously"),(0,i.kt)("li",{parentName:"ul"},"select the menu on the top right and tap ",(0,i.kt)("inlineCode",{parentName:"li"},"Account")),(0,i.kt)("li",{parentName:"ul"},"select ",(0,i.kt)("inlineCode",{parentName:"li"},"Email (for login)")),(0,i.kt)("li",{parentName:"ul"},"enter an email address and complete the verification to enable login with email"),(0,i.kt)("li",{parentName:"ul"},"now can delete the phone number if desired")))}m.isMDXComponent=!0}}]);