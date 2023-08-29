"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},806:(e,t,n)=>{n.d(t,{H:()=>l,a:()=>o});var a=n(7294);const r=(0,a.createContext)(),o=()=>(0,a.useContext)(r),l=e=>{let{children:t}=e;const[n,o]=(0,a.useState)(null),l={authToken:n,setAuthToken:o};return a.createElement(r.Provider,{value:l},t)}},9977:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r=async function(e,t,n,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!n)throw new Error("No GraphQL query provided");try{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:n,variables:a})});if(!r.ok){const e=await r.text();throw new Error(`Error response from server: ${e}`)}const o=r.headers.get("content-type");if(o&&o.includes("application/json")){return await r.json()}throw new Error(`Unexpected content type: ${o}`)}catch(r){throw console.error("There was an error making the authenticated request:",r),r}};var o=n(806);const l=function(){const{authToken:e,setAuthToken:t}=(0,o.a)(),[n,l]=(0,a.useState)("https://api.staging.galoy.io/graphql"),[i,c]=(0,a.useState)(null),[u,s]=(0,a.useState)(null),[p,m]=(0,a.useState)(""),[d,h]=(0,a.useState)(0),[g,y]=(0,a.useState)(""),[v,E]=(0,a.useState)(""),[f,w]=(0,a.useState)(""),[b,k]=(0,a.useState)(""),[T,x]=(0,a.useState)(null),[S,C]=(0,a.useState)(null),O="\n    query Me { me { defaultAccount { ... on ConsumerAccount { defaultWalletId }}}}",j=(t,a)=>{const r={query:t.trim(),variables:{}};"invoice"===a&&(r.variables.input={amount:d.toString(),memo:g,walletId:v});const o=JSON.stringify(r).replace(/\n/g,""),l=`curl --request POST --header 'content-type: application/json' \\\n  ${e?`--header 'Authorization: Bearer ${e}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'"} \\\n  --url '${n}' \\\n  --data '${o}'`;"wallet"===a?w(l):"invoice"===a&&k(l)};function L(e){let{value:t,onChange:n,onSet:r}=e;return a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Enter authToken",value:t,onChange:n}),a.createElement("button",{onClick:r},"Set Token"))}(0,a.useEffect)((()=>{j(O,"wallet")}),[e,n]),(0,a.useEffect)((()=>{j("\nmutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {  lnInvoiceCreate(input: $input) {  errors {  message  path  }  invoice {  paymentRequest  paymentHash  paymentSecret  satoshis  }}}","invoice")}),[e,n,d,g,v]);const q=a.createElement(L,{value:p,onChange:e=>{m(e.target.value)},onSet:()=>{t(p)}});return a.createElement("div",null,q,a.createElement("input",{type:"text",value:n,onChange:e=>{l(e.target.value)},style:{width:"100%",marginBottom:"10px"}}),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("h2",null,"Get the default wallet ID"),a.createElement("button",{onClick:async()=>{try{const t=await r(e,n,O);x(t),t&&t.me&&t.me.defaultAccount&&t.me.defaultAccount.defaultWalletId&&E(t.me.defaultAccount.defaultWalletId),j(O,"wallet")}catch(t){c(t.message)}}},"Get Wallet ID"),i&&a.createElement("div",{style:{color:"red"}},"Error: ",i),T&&a.createElement("div",null,a.createElement("strong",null,"Wallet Data:")," ",a.createElement("pre",null,JSON.stringify(T,null,2))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h3",null,"cURL command to get the walletId:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},f)),a.createElement("h2",null,"Generate an invoice"),a.createElement("div",null,a.createElement("label",null,"Amount (sats):",a.createElement("input",{type:"number",value:d,onChange:e=>{h(e.target.value)},style:{marginLeft:"10px",marginRight:"20px"}})),a.createElement("label",null,"Memo:",a.createElement("input",{type:"text",value:g,onChange:e=>{y(e.target.value)},style:{marginLeft:"10px",marginRight:"20px"}})),a.createElement("label",null,"Wallet ID:",a.createElement("input",{type:"text",value:v,onChange:e=>{E(e.target.value)},style:{marginLeft:"10px"}}))),a.createElement("button",{onClick:async()=>{const t="\nmutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {  lnInvoiceCreate(input: $input) {  errors {  message  path  }  invoice {  paymentRequest  paymentHash  paymentSecret  satoshis  }}}",a={input:{amount:d.toString(),memo:g,walletId:v}};try{const o=await r(e,n,t,a);C(o),j(t,"invoice")}catch(o){s(o.message)}}},"Create Invoice"),u&&a.createElement("div",{style:{color:"red"}},"Error: ",u),S&&a.createElement("div",null,a.createElement("strong",null,"Invoice Data:")," ",a.createElement("pre",null,JSON.stringify(S,null,2))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h3",null,"cURL command to generate an invoice:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},b)))}},7644:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(1164),o=n(806),l=n(407);const i=function(){const{authToken:e,setAuthToken:t}=(0,o.a)(),[n,i]=(0,a.useState)("https://api.staging.galoy.io"),[c,u]=(0,a.useState)(""),[s,p]=(0,a.useState)(""),[m,d]=(0,a.useState)(null),[h,g]=(0,a.useState)(null),[y,v]=(0,a.useState)(""),[E,f]=(0,a.useState)(!1),[w,b]=(0,a.useState)(null),[k,T]=(0,a.useState)(null),[x,S]=(0,a.useState)(""),[C,O]=(0,a.useState)(""),[j,L]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=(0,l.OP)(n,c);S(e)}),[n,c]),(0,a.useEffect)((()=>{const e=(0,l.qF)(n,y,s);O(e)}),[n,y,s]),a.createElement("div",null,a.createElement("div",null,a.createElement("h2",null,"Log in with Email"),a.createElement("input",{type:"text",value:n,onChange:e=>i(e.target.value),style:{width:"100%",marginBottom:"10px"}}),a.createElement("input",{type:"email",placeholder:"Email",value:c,onChange:e=>u(e.target.value)}),a.createElement("button",{onClick:async()=>{try{const e=await(0,r.My)(n,c);v(e),d(`The emailLoginId: ${e} was obtained successfully!`)}catch(e){g(e.message)}}},"Request Email Code")),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h3",null,"cURL command for email code:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},x)),h&&a.createElement("div",{style:{color:"red"}},"Error: ",h),m&&a.createElement("div",{style:{color:"green"}},m),a.createElement("div",{style:{margin:"20px 0"}}),a.createElement("div",null,a.createElement("h3",null,"Enter Email Code"),a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Email Login ID",value:y,onChange:e=>v(e.target.value)})),a.createElement("input",{type:"text",placeholder:"Email Code",value:s,onChange:e=>p(e.target.value)}),a.createElement("button",{onClick:async()=>{if(!y||s.length<6)T("Invalid input");else{L(!0);try{const e=await(0,r.ZA)(n,y,s);t(e),b("Logged in successfully!")}catch(e){T(e.message)}finally{L(!1)}}},disabled:j},j?"Logging in...":"Log in")),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h3",null,"cURL command for email login:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},C)),k&&a.createElement("div",{style:{color:"red"}},"Error: ",k),w&&a.createElement("div",{style:{color:"green"}},w),e&&a.createElement("div",null,a.createElement("button",{onClick:()=>{f((e=>!e))}},"Toggle Token Visibility"),E&&a.createElement("div",null,a.createElement("strong",null,"Token:")," ",e)))}},2062:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(1164),o=n(806),l=n(407);const i=function(){const{authToken:e,setAuthToken:t}=(0,o.a)(),[n,i]=(0,a.useState)("https://api.staging.galoy.io/graphql"),[c,u]=(0,a.useState)(""),[s,p]=(0,a.useState)(""),[m,d]=(0,a.useState)(!1),[h,g]=(0,a.useState)(null),[y,v]=(0,a.useState)(null),[E,f]=(0,a.useState)("");return(0,a.useEffect)((()=>{f((0,l.nM)(n,c,s))}),[c,s,n]),a.createElement("div",null,a.createElement("div",null,a.createElement("h2",null,"Log in with phone and code"),a.createElement("input",{type:"text",value:n,onChange:e=>{i(e.target.value)},style:{width:"100%",marginBottom:"10px"}}),a.createElement("input",{type:"text",placeholder:"Phone",value:c,onChange:e=>{u(e.target.value)}}),a.createElement("input",{type:"text",placeholder:"Code",value:s,onChange:e=>{p(e.target.value)}}),a.createElement("button",{onClick:async()=>{if(c.length<10||s.length<6)v("Invalid input");else try{const e=await(0,r.Vj)(n,c,s);t(e),g("Got the auth token!"),f((0,l.nM)(n,c,s))}catch(e){v(e.message)}}},"Log in")),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h3",null,"cURL command for phone login:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}},E)),h&&a.createElement("div",{style:{color:"green"}},h),y&&a.createElement("div",{style:{color:"red"}},"Error: ",y),e&&a.createElement("div",null,a.createElement("button",{onClick:()=>{d((e=>!e))}},"Toggle Token Visibility"),m&&a.createElement("div",null,a.createElement("strong",null,"Token:")," ",e)))}},1164:(e,t,n)=>{n.d(t,{My:()=>r,Vj:()=>a,ZA:()=>o});const a=async(e,t,n)=>{try{const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n            mutation login($input: UserLoginInput!) {\n              userLogin(input: $input) {\n                authToken\n              }\n            }\n          ",variables:{input:{phone:t,code:n}}})}),r=await a.text();console.log("Raw Response:",r);const o=JSON.parse(r);if(!a.ok)throw new Error(`HTTP Error: ${a.status}`);if(o.errors&&o.errors.length>0)throw new Error(o.errors[0].message);if(!o.data?.userLogin?.authToken)throw new Error("Expected authToken not found in the response.");return o.data.userLogin.authToken}catch(a){throw console.error("There was an error making the request:",a),a}},r=async(e,t)=>{try{const n=await fetch(`${e}/auth/email/code`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:t})}),a=await n.json();if(!n.ok)throw new Error(`HTTP Error: ${n.status}`);return a.result}catch(n){throw console.error("There was an error making the request:",n),n}},o=async(e,t,n)=>{try{const a=await fetch(`${e}/auth/email/login`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({code:n,emailLoginId:t})}),r=await a.json();if(r.error){if("too many requests"===r.error)throw new Error("You've made too many requests. Please wait and try again later.");throw new Error(r.error)}if(!r.result?.authToken)throw new Error("Expected authToken not found in the response.");return r.result.authToken}catch(a){throw console.error("There was an error making the request:",a),a}}},407:(e,t,n)=>{n.d(t,{OP:()=>a,nM:()=>r,qF:()=>o});const a=(e,t)=>{const n={email:t};return`curl -X POST '${e}/auth/email/code' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -d '${JSON.stringify(n)}'`},r=(e,t,n)=>{const a={query:"mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }",variables:{input:{phone:t,code:n}}};return`curl '${e}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  --data-binary '${JSON.stringify(a)}'`},o=(e,t,n)=>`curl -X POST '${`${e}/auth/email/login`}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -d '${JSON.stringify({code:n,emailLoginId:t})}'`},7793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(806),l=n(2062),i=n(7644),c=n(9977);const u={title:"Demo requests"},s=void 0,p={unversionedId:"graphql-demo",id:"graphql-demo",title:"Demo requests",description:"Be cautious using an environment with real funds as the authentication token will be exposed in the browser.",source:"@site/docs/graphql-demo.mdx",sourceDirName:".",slug:"/graphql-demo",permalink:"/graphql-demo",draft:!1,tags:[],version:"current",frontMatter:{title:"Demo requests"}},m={},d=[{value:"Email Login",id:"email-login",level:2},{value:"Phone Login",id:"phone-login",level:2},{value:"Make authenticated requests",id:"make-authenticated-requests",level:2}],h={toc:d},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be cautious using an environment with real funds as the authentication token will be exposed in the browser.")),(0,r.kt)("h2",{id:"email-login"},"Email Login"),(0,r.kt)(o.H,{mdxType:"AuthProvider"},(0,r.kt)(i.Z,{mdxType:"EmailLoginButton"}),(0,r.kt)("div",{style:{margin:"40px 0"}}),(0,r.kt)("h2",{id:"phone-login"},"Phone Login"),(0,r.kt)(l.Z,{mdxType:"PhoneLoginButton"}),(0,r.kt)("div",{style:{margin:"40px 0"}}),(0,r.kt)("h2",{id:"make-authenticated-requests"},"Make authenticated requests"),(0,r.kt)(c.Z,{mdxType:"AuthRequestButton"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"For more info and other requests, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"GraphQL playground"),"."))}y.isMDXComponent=!0}}]);