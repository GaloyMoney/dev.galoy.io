"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(v,o(o({ref:t},s),{},{components:n})):a.createElement(v,o({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4746:(e,t,n)=>{n.d(t,{H:()=>o,a:()=>l});var a=n(7294);const r=(0,a.createContext)(),l=()=>(0,a.useContext)(r),o=e=>{let{children:t}=e;const[n,l]=(0,a.useState)(null),o={authToken:n,setAuthToken:l};return a.createElement(r.Provider,{value:o},t)}},9090:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(7900),l=n(4746);const o=function(){const{authToken:e,setAuthToken:t}=(0,l.a)(),[n,o]=(0,a.useState)("https://api.staging.galoy.io/graphql"),[i,c]=(0,a.useState)(""),[u,s]=(0,a.useState)(0),[p,m]=(0,a.useState)(""),[d,v]=(0,a.useState)(""),[y,g]=(0,a.useState)(""),[h,f]=(0,a.useState)(""),[E,b]=(0,a.useState)(""),[w,S]=(0,a.useState)(""),[x,C]=(0,a.useState)(null),[P,I]=(0,a.useState)(null),[O,k]=(0,a.useState)(null),[T,L]=(0,a.useState)(null),[j,R]=(0,a.useState)(null),[q,$]=(0,a.useState)(null),[D,B]=(0,a.useState)(null),[A,N]=(0,a.useState)(null),F="\n  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }}}}",U=function(t,a,r,l){void 0===r&&(r=""),void 0===l&&(l="");let o={query:t.trim(),variables:{}};const i=e?`--header 'Authorization: Bearer ${e}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===a?o.variables.input={amount:u.toString(),walletId:p}:"feeProbe"===a?o.variables.input={paymentRequest:r,walletId:p}:"lnInvoicePaymentSend"===a&&(o.variables.input={paymentRequest:r,walletId:l});let c=JSON.stringify(o).replace(/\n/g,"");const s=`curl --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '${c}'`;"wallet"===a?g(`curl -sS --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n | jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "BTC") .id'`):"invoice"===a?f(s):"feeProbe"===a?b(s):"lnInvoicePaymentSend"===a&&S(s)};(0,a.useEffect)((()=>{U(F,"wallet")}),[e,n]),(0,a.useEffect)((()=>{U("\nmutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }}}","invoice")}),[e,n,u,p]),(0,a.useEffect)((()=>{U("\n  mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\n    lnInvoiceFeeProbe(input: $input) {\n      errors {\n        message\n      }\n      amount\n    }}","feeProbe",d,p)}),[e,n,d,p]),(0,a.useEffect)((()=>{U("\n  mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n    lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }}}","lnInvoicePaymentSend",d,p)}),[e,n,d,p]);const X=e=>{m(e.target.value)};function _(e){let{value:t,onChange:n,onSet:r}=e;return a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Paste and set the authentication token",value:t,onChange:n,style:{width:"50%",marginBottom:"10px"}}),a.createElement("div",null,a.createElement("button",{onClick:r},"Set token")))}const H=a.createElement(_,{value:i,onChange:e=>{c(e.target.value)},onSet:()=>{t(i)}});return a.createElement("div",null,"The GraphQL endpoint to connect to:",a.createElement("input",{type:"text",value:n,onChange:e=>{o(e.target.value)},style:{width:"100%",marginBottom:"10px"}}),a.createElement("div",null,"The following methods require a valid auth token set in the header as a bearer token:"),H,a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("h3",null,"Get the wallet IDs and balances"),a.createElement("button",{onClick:async()=>{try{const t=await(0,r.K)(e,n,F);C(t);const a=t?.me?.defaultAccount?.wallets?.find((e=>"BTC"===e.walletCurrency));a?.id&&m(a.id),U(F,"wallet")}catch(t){R(t.message)}}},"Get the wallet IDs"),j&&a.createElement("div",{style:{color:"red"}},"Error: ",j),x&&a.createElement("div",null,a.createElement("strong",null,"Wallet Data:")," ",a.createElement("pre",null,JSON.stringify(x,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("h4",null,"cURL command to get the BTC wallet ID:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},y)),a.createElement("h3",null,"Generate an invoice"),a.createElement("div",null,a.createElement("div",null," Set the variables:"),a.createElement("div",null,a.createElement("label",null,"Amount (sats):",a.createElement("input",{type:"number",value:u,onChange:e=>{s(e.target.value)},style:{marginLeft:"10px",marginRight:"20px"}}))),a.createElement("label",null,"BTC wallet ID:",a.createElement("input",{type:"text",value:p,onChange:X,style:{marginLeft:"10px"}}))),a.createElement("button",{onClick:async()=>{const t="\nmutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }}}",a={input:{amount:u.toString(),walletId:p}};try{const l=await(0,r.K)(e,n,t,a);I(l),U(t,"invoice")}catch(l){$(l.message)}}},"Create invoice"),q&&a.createElement("div",{style:{color:"red"}},"Error: ",q),P&&a.createElement("div",null,a.createElement("strong",null,"Invoice Data:")," ",a.createElement("pre",null,JSON.stringify(P,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("h4",null,"cURL command to generate an invoice:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},h)),a.createElement("h3",null,"Probe invoice fee"),a.createElement("div",null,a.createElement("div",null," Set the variables:"),a.createElement("div",null,a.createElement("label",null,"Payment Request:",a.createElement("input",{type:"text",value:d,onChange:e=>v(e.target.value),style:{marginLeft:"10px",marginRight:"20px"}}))),a.createElement("label",null,"BTC wallet ID:",a.createElement("input",{type:"text",value:p,onChange:X,style:{marginLeft:"10px"}}))),a.createElement("button",{onClick:async()=>{const t="\n  mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\n    lnInvoiceFeeProbe(input: $input) {\n      errors {\n        message\n      }\n      amount\n    }}",a={input:{paymentRequest:d,walletId:p}};try{const l=await(0,r.K)(e,n,t,a);k(l),U(t,"feeProbe",d,p)}catch(l){B(l.message)}}},"Probe fee"),D&&a.createElement("div",{style:{color:"red"}},"Error: ",D),O&&a.createElement("div",null,a.createElement("strong",null,"Fee Probe Data:")," ",a.createElement("pre",null,JSON.stringify(O,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("h4",null,"cURL command to probe invoice fee:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},E)),a.createElement("h3",null,"Pay an invoice"),a.createElement("div",null,a.createElement("div",null," Set the variables:"),a.createElement("div",null,a.createElement("label",null,"Payment Request:",a.createElement("input",{type:"text",value:d,onChange:e=>v(e.target.value),style:{marginLeft:"10px",marginRight:"20px"}}))),a.createElement("label",null,"BTC wallet ID:",a.createElement("input",{type:"text",value:p,onChange:X,style:{marginLeft:"10px"}}))),a.createElement("button",{onClick:async()=>{const t="\n  mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n    lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }}}",a={input:{paymentRequest:d,walletId:p}};try{const l=await(0,r.K)(e,n,t,a);L(l),U(t,"lnInvoicePaymentSend",d,p)}catch(l){N(l.message)}}},"Send payment"),A&&a.createElement("div",{style:{color:"red"}},"Error: ",A),T&&a.createElement("div",null,a.createElement("strong",null,"Payment Data:")," ",a.createElement("pre",null,JSON.stringify(T,null,2))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h4",null,"cURL command to pay an invoice:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},w)))}},7900:(e,t,n)=>{n.d(t,{K:()=>a});const a=async function(e,t,n,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!n)throw new Error("No GraphQL query provided");try{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:n,variables:a})});if(!r.ok){const e=await r.text();throw new Error(`Error response from server: ${e}`)}const l=r.headers.get("content-type");if(l&&l.includes("application/json")){return await r.json()}throw new Error(`Unexpected content type: ${l}`)}catch(r){throw console.error("There was an error making the authenticated request:",r),r}}},6717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4746),o=n(9090);const i={id:"api-sats",title:"Send satoshis over lightning",slug:"/api/sats"},c=void 0,u={unversionedId:"api/api-sats",id:"api/api-sats",title:"Send satoshis over lightning",description:"By default the calls are directed to the staging environment by default where the funds are worthless, using the default bitcoin signet.",source:"@site/docs/api/c-sats.md",sourceDirName:"api",slug:"/api/sats",permalink:"/api/sats",draft:!1,tags:[],version:"current",frontMatter:{id:"api-sats",title:"Send satoshis over lightning",slug:"/api/sats"},sidebar:"apiSidebar",previous:{title:"Send stablesats over lightning",permalink:"/api/stablesats"},next:{title:"Learn more",permalink:"/api/learn-more"}},s={},p=[],m={toc:p},d="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default the calls are directed to the staging environment by default where the funds are worthless, using the default bitcoin ",(0,r.kt)("a",{parentName:"p",href:"/deployment/signet"},"signet"),".")),(0,r.kt)(l.H,{mdxType:"AuthProvider"},(0,r.kt)(o.Z,{mdxType:"AuthRequestBtcButton"})))}v.isMDXComponent=!0}}]);