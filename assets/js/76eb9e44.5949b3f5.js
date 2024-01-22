"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>y,default:()=>S,frontMatter:()=>g,metadata:()=>v,toc:()=>f});var a=n(7462),l=n(7294),r=n(3905);const o=(0,l.createContext)(),i=()=>(0,l.useContext)(o),c=e=>{let{children:t}=e;const[n,a]=(0,l.useState)(null),r={authToken:n,setAuthToken:a};return l.createElement(o.Provider,{value:r},t)},s=(e,t,n)=>{const a={query:"mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }",variables:{input:{phone:t,code:n}}};return`curl '${e}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data-binary '${JSON.stringify(a)}'`};const u=function(){const{authToken:e,setAuthToken:t}=i(),[n,a]=(0,l.useState)("https://api.staging.galoy.io/graphql"),[r,o]=(0,l.useState)(""),[c,u]=(0,l.useState)(""),[m,p]=(0,l.useState)(!1),[d,h]=(0,l.useState)(null),[g,y]=(0,l.useState)(null),[v,E]=(0,l.useState)("");return(0,l.useEffect)((()=>{E(s(n,r,c))}),[r,c,n]),l.createElement("div",null,l.createElement("div",null,l.createElement("h2",null,"Log in with phone and code"),l.createElement("input",{type:"text",value:n,onChange:e=>{a(e.target.value)},style:{width:"100%",marginBottom:"10px"}}),l.createElement("input",{type:"text",placeholder:"Phone",value:r,onChange:e=>{o(e.target.value)}}),l.createElement("input",{type:"text",placeholder:"Code",value:c,onChange:e=>{u(e.target.value)}}),l.createElement("button",{onClick:async()=>{if(r.length<10||c.length<6)y("Invalid input");else try{const e=await(async(e,t,n)=>{try{const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n            mutation login($input: UserLoginInput!) {\n              userLogin(input: $input) {\n                authToken\n              }\n            }\n          ",variables:{input:{phone:t,code:n}}})}),l=await a.text();console.log("Raw Response:",l);const r=JSON.parse(l);if(!a.ok)throw new Error(`HTTP Error: ${a.status}`);if(r.errors&&r.errors.length>0)throw new Error(r.errors[0].message);if(!r.data?.userLogin?.authToken)throw new Error("Expected authToken not found in the response.");return r.data.userLogin.authToken}catch(a){throw console.error("There was an error making the request:",a),a}})(n,r,c);t(e),h("Got the auth token!"),E(s(n,r,c))}catch(e){y(e.message)}}},"Log in")),l.createElement("div",{style:{marginTop:"20px"}},l.createElement("h3",null,"cURL command for phone login:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},v)),d&&l.createElement("div",{style:{color:"green"}},d),g&&l.createElement("div",{style:{color:"red"}},"Error: ",g),e&&l.createElement("div",null,l.createElement("button",{onClick:()=>{p((e=>!e))}},"Toggle Token Visibility"),m&&l.createElement("div",null,l.createElement("strong",null,"Token:")," ",e)))};const m=function(){const{authToken:e,setAuthToken:t}=i(),[n,a]=(0,l.useState)("https://api.staging.galoy.io/auth"),[r,o]=(0,l.useState)(""),[c,s]=(0,l.useState)(""),[u,m]=(0,l.useState)(null),[p,d]=(0,l.useState)(null),[h,g]=(0,l.useState)(""),[y,v]=(0,l.useState)(!1),[E,f]=(0,l.useState)(null),[w,b]=(0,l.useState)(null),[S,x]=(0,l.useState)(""),[T,C]=(0,l.useState)(""),[k,L]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=((e,t)=>{const n={email:t};return`curl -X POST '${e}/auth/email/code' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify(n)}'`})(n,r);x(e)}),[n,r]),(0,l.useEffect)((()=>{const e=((e,t,n)=>`curl -X POST '${e}/auth/email/login' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify({code:n,emailLoginId:t})}'`)(n,h,c);C(e)}),[n,h,c]),l.createElement("div",null,l.createElement("h3",null,"1) Request a 2FA code to your email"),l.createElement("div",{style:{marginTop:"10px"}}),l.createElement("div",null,l.createElement("div",null,"The REST authentication endpoint to connect to:"),l.createElement("input",{type:"text",value:n,onChange:e=>a(e.target.value),style:{width:"50%",marginBottom:"10px"}}),l.createElement("div",null),l.createElement("input",{type:"email",placeholder:"Fill in the email address used with Blink",value:r,onChange:e=>o(e.target.value),style:{width:"50%",marginBottom:"10px"}})),l.createElement("button",{onClick:async()=>{try{const e=await(async(e,t)=>{try{const n=await fetch(`${e}/email/code`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:t})}),a=await n.json();if(!n.ok)throw new Error(`HTTP Error: ${n.status}`);return a.result}catch(n){throw console.error("There was an error making the request:",n),n}})(n,r);g(e),m(`The emailLoginId: ${e} was obtained successfully!`)}catch(e){d(e.message)}}},"Request code"),l.createElement("div",{style:{marginTop:"20px"}},l.createElement("h4",null,"cURL command to request an email code:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},S)),p&&l.createElement("div",{style:{color:"red"}},"Error: ",p),u&&l.createElement("div",{style:{color:"green"}},u),l.createElement("div",{style:{margin:"20px 0"}}),l.createElement("div",{style:{marginTop:"40px"}},l.createElement("h3",null,"2) Enter the 2FA code received by email"),"The email login ID from the previous request:",l.createElement("div",null,l.createElement("input",{type:"text",placeholder:"Email login ID",value:h,onChange:e=>g(e.target.value),style:{width:"50%",marginBottom:"10px"}}),l.createElement("div",null),l.createElement("input",{type:"text",placeholder:"Fill in the 2FA code from the email",value:c,onChange:e=>s(e.target.value),style:{width:"50%",marginBottom:"10px"}})),l.createElement("button",{onClick:async()=>{if(!h||c.length<6)b("Invalid input");else{L(!0);try{const e=await(async(e,t,n)=>{try{const a=await fetch(`${e}/email/login`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({code:n,emailLoginId:t})}),l=await a.json();if(l.error){if("too many requests"===l.error)throw new Error("You've made too many requests. Please wait and try again later.");throw new Error(l.error)}if(!l.result?.authToken)throw new Error("Expected authToken not found in the response.");return l.result.authToken}catch(a){throw console.error("There was an error making the request:",a),a}})(n,h,c);t(e),f("Logged in successfully! Copy and save the token to make authenticated requests on the next page.")}catch(e){b(e.message)}finally{L(!1)}}},disabled:k},k?"Logging in...":"Log in")),l.createElement("div",{style:{marginTop:"20px"}},l.createElement("h4",null,"cURL command for email login:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},T)),w&&l.createElement("div",{style:{color:"red"}},"Error: ",w),E&&l.createElement("div",{style:{color:"green"}},E),e&&l.createElement("div",null,l.createElement("button",{onClick:()=>{v((e=>!e))}},"Toggle Token Visibility"),y&&l.createElement("div",null,l.createElement("strong",null,"Token:")," ",e)))},p=async function(e,t,n,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!n)throw new Error("No GraphQL query provided");try{const l=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:n,variables:a})});if(!l.ok){const e=await l.text();throw new Error(`Error response from server: ${e}`)}const r=l.headers.get("content-type");if(r&&r.includes("application/json")){return await l.json()}throw new Error(`Unexpected content type: ${r}`)}catch(l){throw console.error("There was an error making the authenticated request:",l),l}};const d=function(){const{authToken:e,setAuthToken:t}=i(),[n,a]=(0,l.useState)("https://api.staging.galoy.io/graphql"),[r,o]=(0,l.useState)(""),[c,s]=(0,l.useState)(1e3),[u,m]=(0,l.useState)(""),[d,h]=(0,l.useState)(""),[g,y]=(0,l.useState)(""),[v,E]=(0,l.useState)(""),[f,w]=(0,l.useState)(""),[b,S]=(0,l.useState)(""),[x,T]=(0,l.useState)(null),[C,k]=(0,l.useState)(null),[L,P]=(0,l.useState)(null),[I,q]=(0,l.useState)(null),[O,B]=(0,l.useState)(null),[D,$]=(0,l.useState)(null),[j,R]=(0,l.useState)(null),[A,U]=(0,l.useState)(null),N="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }",W="mutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}",J=(e,t)=>W,G="mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\n  lnInvoiceFeeProbe(input: $input) {\n    errors {\n      message\n    }\n    amount\n  }\n}",X=(e,t)=>G,F="mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n  lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }\n  }\n}",Q=(e,t)=>F,_=function(t,a,l,r){void 0===l&&(l=""),void 0===r&&(r="");let o={query:t.trim(),variables:{}};const i=e?`--header 'Authorization: Bearer ${e}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===a?o.variables.input={amount:c.toString(),walletId:u}:"feeProbe"===a?o.variables.input={paymentRequest:l,walletId:u}:"lnInvoicePaymentSend"===a&&(o.variables.input={paymentRequest:l,walletId:r});let s=JSON.stringify(o).replace(/\n/g,"");const m=`curl --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '${s}'`;"wallet"===a?y(`curl -sS --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n | jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "BTC") .id'`):"invoice"===a?E(m):"feeProbe"===a?w(m):"lnInvoicePaymentSend"===a&&S(m)};(0,l.useEffect)((()=>{_(N,"wallet")}),[e,n]),(0,l.useEffect)((()=>{const e=J();_(e,"invoice")}),[e,n,c,u]),(0,l.useEffect)((()=>{const e=X();_(e,"feeProbe",d,u)}),[e,n,d,u]),(0,l.useEffect)((()=>{const e=Q();_(e,"lnInvoicePaymentSend",d,u)}),[e,n,d,u]);const M=e=>{m(e.target.value)};function H(e){let{value:t,onChange:n,onSet:a}=e;return l.createElement("div",null,l.createElement("input",{type:"text",placeholder:"Paste and set the authentication token",value:t,onChange:n,style:{width:"50%",marginBottom:"10px"}}),l.createElement("div",null,l.createElement("button",{onClick:a},"Set token")))}const z=l.createElement(H,{value:r,onChange:e=>{o(e.target.value)},onSet:()=>{t(r)}});return l.createElement("div",null,"The GraphQL endpoint to connect to:",l.createElement("input",{type:"text",value:n,onChange:e=>{a(e.target.value)},style:{width:"100%",marginBottom:"10px"}}),l.createElement("div",null,"The following methods require a valid auth token set in the header as a bearer token:"),z,l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("h3",null,"Get the wallet IDs and check the balances"),l.createElement("div",null,"Can run this query at any stage to confirm the change in the balances."),l.createElement("div",null,'The "BTC" wallet balance is denominated in satoshis.'),l.createElement("div",null,'The "USD" wallet balance is in cents.'),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},N),l.createElement("button",{onClick:async()=>{try{const t=await p(e,n,N);T(t);const a=t?.me?.defaultAccount?.wallets?.find((e=>"BTC"===e.walletCurrency));a?.id&&m(a.id),_(N,"wallet")}catch(t){B(t.message)}}},"Send the request"),O&&l.createElement("div",{style:{color:"red"}},"Error: ",O),x&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(x,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to get the BTC wallet ID:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},g)),l.createElement("h3",null,"Generate an invoice"),l.createElement("div",null,"Receive satoshis to the BTC balance."),l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Amount (sats):"),l.createElement("input",{type:"number",value:c,onChange:e=>{s(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),l.createElement("label",null,l.createElement("div",null,"BTC wallet ID:"),l.createElement("input",{type:"text",value:u,onChange:M,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},W),l.createElement("button",{onClick:async()=>{const t=J(),a={input:{amount:c.toString(),walletId:u}};try{const l=await p(e,n,t,a);k(l),_(t,"invoice")}catch(l){$(l.message)}}},"Create invoice"),D&&l.createElement("div",{style:{color:"red"}},"Error: ",D),C&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(C,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to generate an invoice:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},v)),l.createElement("h3",null,"Probe invoice fee"),l.createElement("div",null,"Estimate the cost of paying a lightning invoice."),l.createElement("div",null,"Payments to an other Blink user and to nodes with a direct channel are free."),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Invoice"),l.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"}))),l.createElement("label",null,l.createElement("div",null,"BTC wallet ID:"),l.createElement("input",{type:"text",value:u,onChange:M,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},G),l.createElement("button",{onClick:async()=>{const t=X(),a={input:{paymentRequest:d,walletId:u}};try{const l=await p(e,n,t,a);P(l),_(t,"feeProbe",d,u)}catch(l){R(l.message)}}},"Probe fee"),j&&l.createElement("div",{style:{color:"red"}},"Error: ",j),L&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(L,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("h4",null,"cURL command to probe invoice fee:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},f)),l.createElement("h3",null,"Pay an invoice"),l.createElement("div",null,"Pay a BOLT11 invoice from your BTC balance"),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Invoice"),l.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",marginRight:"20px"},placeholder:"Paste a lightning invoice"}))),l.createElement("label",null,l.createElement("div",null,"BTC wallet ID:"),l.createElement("input",{type:"text",value:u,onChange:M,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},F),l.createElement("button",{onClick:async()=>{const t=Q(),a={input:{paymentRequest:d,walletId:u}};try{const l=await p(e,n,t,a);q(l),_(t,"lnInvoicePaymentSend",d,u)}catch(l){U(l.message)}}},"Send payment"),A&&l.createElement("div",{style:{color:"red"}},"Error: ",A),I&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(I,null,2))),l.createElement("div",{style:{marginTop:"20px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to pay an invoice:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},b)))};const h=function(){const{authToken:e,setAuthToken:t}=i(),[n,a]=(0,l.useState)("https://api.staging.galoy.io/graphql"),[r,o]=(0,l.useState)(""),[c,s]=(0,l.useState)(100),[u,m]=(0,l.useState)(""),[d,h]=(0,l.useState)(""),[g,y]=(0,l.useState)(""),[v,E]=(0,l.useState)(""),[f,w]=(0,l.useState)(""),[b,S]=(0,l.useState)(""),[x,T]=(0,l.useState)(null),[C,k]=(0,l.useState)(null),[L,P]=(0,l.useState)(null),[I,q]=(0,l.useState)(null),[O,B]=(0,l.useState)(null),[D,$]=(0,l.useState)(null),[j,R]=(0,l.useState)(null),[A,U]=(0,l.useState)(null),N="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }",W="mutation lnUsdInvoiceCreate($input: LnUsdInvoiceCreateInput!) {\n  lnUsdInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}",J=(e,t)=>W,G="mutation lnUsdInvoiceFeeProbe($input: LnUsdInvoiceFeeProbeInput!) {\n  lnUsdInvoiceFeeProbe(input: $input) {\n    errors {\n      message\n    }\n    amount\n  }\n}",X=(e,t)=>G,F="mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n  lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }\n  }\n}",Q=(e,t)=>F,_=function(t,a,l,r){void 0===l&&(l=""),void 0===r&&(r="");let o={query:t.trim(),variables:{}};const i=e?`--header 'Authorization: Bearer ${e}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===a?o.variables.input={amount:c.toString(),walletId:u}:"feeProbe"===a?o.variables.input={paymentRequest:l,walletId:u}:"lnInvoicePaymentSend"===a&&(o.variables.input={paymentRequest:l,walletId:r});let s=JSON.stringify(o).replace(/\n/g,"");const m=`curl --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '${s}'`;"wallet"===a?y(`curl -sS --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n | jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "USD") .id'`):"invoice"===a?E(m):"feeProbe"===a?w(m):"lnInvoicePaymentSend"===a&&S(m)};(0,l.useEffect)((()=>{_(N,"wallet")}),[e,n]),(0,l.useEffect)((()=>{const e=J();_(e,"invoice")}),[e,n,c,u]),(0,l.useEffect)((()=>{const e=X();_(e,"feeProbe",d,u)}),[e,n,d,u]),(0,l.useEffect)((()=>{const e=Q();_(e,"lnInvoicePaymentSend",d,u)}),[e,n,d,u]);const M=e=>{m(e.target.value)};function H(e){let{value:t,onChange:n,onSet:a}=e;return l.createElement("div",null,l.createElement("input",{type:"text",placeholder:"Paste and set the authentication token",value:t,onChange:n,style:{width:"50%",marginBottom:"10px"}}),l.createElement("div",null,l.createElement("button",{onClick:a},"Set token")))}const z=l.createElement(H,{value:r,onChange:e=>{o(e.target.value)},onSet:()=>{t(r)}});return l.createElement("div",null,l.createElement("div",null,"The GraphQL endpoint to connect to:"),l.createElement("input",{type:"text",value:n,onChange:e=>{a(e.target.value)},style:{width:"50%",marginBottom:"10px"}}),l.createElement("div",null,"The following methods require a valid auth token set in the header as a bearer token:"),z,l.createElement("div",{style:{marginTop:"40px"}}),l.createElement("h3",null,"Get the wallet IDs and check the balances"),l.createElement("div",null,"Can run this query at any stage to confirm the change in the balances."),l.createElement("div",null,'The "BTC" wallet balance is denominated in satoshis.'),l.createElement("div",null,'The "USD" wallet balance is in cents.'),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},N),l.createElement("button",{onClick:async()=>{try{const t=await p(e,n,N);T(t);const a=t?.me?.defaultAccount?.wallets?.find((e=>"BTC"===e.walletCurrency));a?.id&&m(a.id),_(N,"wallet")}catch(t){B(t.message)}}},"Send the request"),O&&l.createElement("div",{style:{color:"red"}},"Error: ",O),x&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(x,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to get the USD wallet ID:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},g)),l.createElement("h3",null,"Generate a Stablesats invoice"),l.createElement("div",null,"Using Stablesats a merchant can generate invoices denominated in USD cents."),l.createElement("div",null,"The satoshi amount of the invoice will reflect the current USD/BTC exchange rate and the balance will be kept at the dollar value."),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",null,l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("label",null,l.createElement("div",null,"Amount (USD cents):"),l.createElement("input",{type:"number",value:c,onChange:e=>{s(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),l.createElement("label",null,l.createElement("div",null,"USD wallet ID:"),l.createElement("input",{type:"text",value:u,onChange:M,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},W),l.createElement("button",{onClick:async()=>{const t=J(),a={input:{amount:c.toString(),walletId:u}};try{const l=await p(e,n,t,a);k(l),_(t,"invoice")}catch(l){$(l.message)}}},"Create a Stablesats invoice"),D&&l.createElement("div",{style:{color:"red"}},"Error: ",D),C&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(C,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to generate a Stablesats invoice:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},v)),l.createElement("h3",null,"Probe invoice fee"),l.createElement("div",null,"Estimate the cost of paying a lightning invoice."),l.createElement("div",null,"Payments to an other Blink user and to nodes with a direct channel are free."),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Invoice"),l.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"}))),l.createElement("label",null,l.createElement("div",null,"USD wallet ID:"),l.createElement("input",{type:"text",value:u,onChange:M,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},G),l.createElement("button",{onClick:async()=>{const t=X(),a={input:{paymentRequest:d,walletId:u}};try{const l=await p(e,n,t,a);P(l),_(t,"feeProbe",d,u)}catch(l){R(l.message)}}},"Probe fee"),j&&l.createElement("div",{style:{color:"red"}},"Error: ",j),L&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(L,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("h4",null,"cURL command to probe invoice fee:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},f)),l.createElement("h3",null,"Pay an invoice"),l.createElement("div",null,"Pay a BOLT11 invoice from your Stablesats balance"),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Invoice"),l.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"}))),l.createElement("label",null,l.createElement("div",null,"USD wallet ID:"),l.createElement("input",{type:"text",value:u,onChange:M,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"20px"}}),l.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),l.createElement("pre",{style:{marginLeft:"10px"}},F),l.createElement("button",{onClick:async()=>{const t=Q(),a={input:{paymentRequest:d,walletId:u}};try{const l=await p(e,n,t,a);q(l),_(t,"lnInvoicePaymentSend",d,u)}catch(l){U(l.message)}}},"Send payment"),A&&l.createElement("div",{style:{color:"red"}},"Error: ",A),I&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(I,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to pay an invoice:"),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},b)))},g={title:"Demo requests"},y=void 0,v={unversionedId:"graphql-demo",id:"graphql-demo",title:"Demo requests",description:"Be cautious using an environment with real funds as the authentication token will be exposed in the browser.",source:"@site/docs/graphql-demo.mdx",sourceDirName:".",slug:"/graphql-demo",permalink:"/graphql-demo",draft:!1,tags:[],version:"current",frontMatter:{title:"Demo requests"}},E={},f=[{value:"Email Login",id:"email-login",level:2},{value:"Phone Login",id:"phone-login",level:2},{value:"Make authenticated requests",id:"make-authenticated-requests",level:2}],w={toc:f},b="wrapper";function S(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be cautious using an environment with real funds as the authentication token will be exposed in the browser.")),(0,r.kt)("h2",{id:"email-login"},"Email Login"),(0,r.kt)(c,{mdxType:"AuthProvider"},(0,r.kt)(m,{mdxType:"EmailLoginButton"}),(0,r.kt)("div",{style:{margin:"40px 0"}}),(0,r.kt)("h2",{id:"phone-login"},"Phone Login"),(0,r.kt)(u,{mdxType:"PhoneLoginButton"}),(0,r.kt)("div",{style:{margin:"40px 0"}}),(0,r.kt)("h2",{id:"make-authenticated-requests"},"Make authenticated requests"),(0,r.kt)(h,{mdxType:"AuthRequestUsdButton"}),(0,r.kt)(d,{mdxType:"AuthRequestBtcButton"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"For more info and other requests, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"GraphQL playground"),"."))}S.isMDXComponent=!0}}]);