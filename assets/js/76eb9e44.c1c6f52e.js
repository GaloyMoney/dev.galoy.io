"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4746:(e,t,n)=>{n.d(t,{H:()=>o,a:()=>r});var a=n(7294);const l=(0,a.createContext)(),r=()=>(0,a.useContext)(l),o=e=>{let{children:t}=e;const[n,r]=(0,a.useState)(null),o={authToken:n,setAuthToken:r};return a.createElement(l.Provider,{value:o},t)}},9090:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(7900),r=n(4746);const o=function(){const{authToken:e,setAuthToken:t}=(0,r.a)(),[n,o]=(0,a.useState)("https://api.staging.galoy.io/graphql"),[i,c]=(0,a.useState)(""),[s,u]=(0,a.useState)(1e3),[m,p]=(0,a.useState)(""),[d,h]=(0,a.useState)(""),[g,v]=(0,a.useState)(""),[y,E]=(0,a.useState)(""),[f,w]=(0,a.useState)(""),[b,S]=(0,a.useState)(""),[x,T]=(0,a.useState)(null),[C,k]=(0,a.useState)(null),[L,P]=(0,a.useState)(null),[I,q]=(0,a.useState)(null),[O,B]=(0,a.useState)(null),[$,j]=(0,a.useState)(null),[D,A]=(0,a.useState)(null),[R,U]=(0,a.useState)(null),N="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }",W="mutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}",J=(e,t)=>W,G="mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\n  lnInvoiceFeeProbe(input: $input) {\n    errors {\n      message\n    }\n    amount\n  }\n}",X=(e,t)=>G,F="mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n  lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }\n  }\n}",M=(e,t)=>F,Q=function(t,a,l,r){void 0===l&&(l=""),void 0===r&&(r="");let o={query:t.trim(),variables:{}};const i=e?`--header 'Authorization: Bearer ${e}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===a?o.variables.input={amount:s.toString(),walletId:m}:"feeProbe"===a?o.variables.input={paymentRequest:l,walletId:m}:"lnInvoicePaymentSend"===a&&(o.variables.input={paymentRequest:l,walletId:r});let c=JSON.stringify(o).replace(/\n/g,"");const u=`curl --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '${c}'`;"wallet"===a?v(`curl -sS --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n | jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "BTC") .id'`):"invoice"===a?E(u):"feeProbe"===a?w(u):"lnInvoicePaymentSend"===a&&S(u)};(0,a.useEffect)((()=>{Q(N,"wallet")}),[e,n]),(0,a.useEffect)((()=>{const e=J();Q(e,"invoice")}),[e,n,s,m]),(0,a.useEffect)((()=>{const e=X();Q(e,"feeProbe",d,m)}),[e,n,d,m]),(0,a.useEffect)((()=>{const e=M();Q(e,"lnInvoicePaymentSend",d,m)}),[e,n,d,m]);const Z=e=>{p(e.target.value)};function K(e){let{value:t,onChange:n,onSet:l}=e;return a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Paste and set the authentication token",value:t,onChange:n,style:{width:"50%",marginBottom:"10px"}}),a.createElement("div",null,a.createElement("button",{onClick:l},"Set token")))}const H=a.createElement(K,{value:i,onChange:e=>{c(e.target.value)},onSet:()=>{t(i)}});return a.createElement("div",null,"The GraphQL endpoint to connect to:",a.createElement("input",{type:"text",value:n,onChange:e=>{o(e.target.value)},style:{width:"100%",marginBottom:"10px"}}),a.createElement("div",null,"The following methods require a valid auth token set in the header as a bearer token:"),H,a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("h3",null,"Get the wallet IDs and check the balances"),a.createElement("div",null,"Can run this query at any stage to confirm the change in the balances."),a.createElement("div",null,'The "BTC" wallet balance is denominated in satoshis.'),a.createElement("div",null,'The "USD" wallet balance is in cents.'),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},N),a.createElement("button",{onClick:async()=>{try{const t=await(0,l.K)(e,n,N);T(t);const a=t?.me?.defaultAccount?.wallets?.find((e=>"BTC"===e.walletCurrency));a?.id&&p(a.id),Q(N,"wallet")}catch(t){B(t.message)}}},"Send the request"),O&&a.createElement("div",{style:{color:"red"}},"Error: ",O),x&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(x,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to get the BTC wallet ID:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},g)),a.createElement("h3",null,"Generate an invoice"),a.createElement("div",null,"Receive satoshis to the BTC balance."),a.createElement("div",null,a.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",null,a.createElement("label",null,a.createElement("div",null,"Amount (sats):"),a.createElement("input",{type:"number",value:s,onChange:e=>{u(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),a.createElement("label",null,a.createElement("div",null,"BTC wallet ID:"),a.createElement("input",{type:"text",value:m,onChange:Z,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},W),a.createElement("button",{onClick:async()=>{const t=J(),a={input:{amount:s.toString(),walletId:m}};try{const r=await(0,l.K)(e,n,t,a);k(r),Q(t,"invoice")}catch(r){j(r.message)}}},"Create invoice"),$&&a.createElement("div",{style:{color:"red"}},"Error: ",$),C&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(C,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to generate an invoice:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},y)),a.createElement("h3",null,"Probe invoice fee"),a.createElement("div",null,"Estimate the cost of paying a lightning invoice."),a.createElement("div",null,"Payments to an other Blink user and to nodes with a direct channel are free."),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",null,a.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),a.createElement("div",null,a.createElement("label",null,a.createElement("div",null,"Invoice"),a.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"}))),a.createElement("label",null,a.createElement("div",null,"BTC wallet ID:"),a.createElement("input",{type:"text",value:m,onChange:Z,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},G),a.createElement("button",{onClick:async()=>{const t=X(),a={input:{paymentRequest:d,walletId:m}};try{const r=await(0,l.K)(e,n,t,a);P(r),Q(t,"feeProbe",d,m)}catch(r){A(r.message)}}},"Probe fee"),D&&a.createElement("div",{style:{color:"red"}},"Error: ",D),L&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(L,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("h4",null,"cURL command to probe invoice fee:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},f)),a.createElement("h3",null,"Pay an invoice"),a.createElement("div",null,"Pay a BOLT11 invoice from your BTC balance"),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",null,a.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),a.createElement("div",null,a.createElement("label",null,a.createElement("div",null,"Invoice"),a.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",marginRight:"20px"},placeholder:"Paste a lightning invoice"}))),a.createElement("label",null,a.createElement("div",null,"BTC wallet ID:"),a.createElement("input",{type:"text",value:m,onChange:Z,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},F),a.createElement("button",{onClick:async()=>{const t=M(),a={input:{paymentRequest:d,walletId:m}};try{const r=await(0,l.K)(e,n,t,a);q(r),Q(t,"lnInvoicePaymentSend",d,m)}catch(r){U(r.message)}}},"Send payment"),R&&a.createElement("div",{style:{color:"red"}},"Error: ",R),I&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(I,null,2))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to pay an invoice:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},b)))}},5690:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(7900),r=n(4746);const o=function(){const{authToken:e,setAuthToken:t}=(0,r.a)(),[n,o]=(0,a.useState)("https://api.staging.galoy.io/graphql"),[i,c]=(0,a.useState)(""),[s,u]=(0,a.useState)(100),[m,p]=(0,a.useState)(""),[d,h]=(0,a.useState)(""),[g,v]=(0,a.useState)(""),[y,E]=(0,a.useState)(""),[f,w]=(0,a.useState)(""),[b,S]=(0,a.useState)(""),[x,T]=(0,a.useState)(null),[C,k]=(0,a.useState)(null),[L,P]=(0,a.useState)(null),[I,q]=(0,a.useState)(null),[O,B]=(0,a.useState)(null),[$,j]=(0,a.useState)(null),[D,A]=(0,a.useState)(null),[R,U]=(0,a.useState)(null),N="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }",W="mutation lnUsdInvoiceCreate($input: LnUsdInvoiceCreateInput!) {\n  lnUsdInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}",J=(e,t)=>W,G="mutation lnUsdInvoiceFeeProbe($input: LnUsdInvoiceFeeProbeInput!) {\n  lnUsdInvoiceFeeProbe(input: $input) {\n    errors {\n      message\n    }\n    amount\n  }\n}",X=(e,t)=>G,F="mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n  lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }\n  }\n}",M=(e,t)=>F,Q=function(t,a,l,r){void 0===l&&(l=""),void 0===r&&(r="");let o={query:t.trim(),variables:{}};const i=e?`--header 'Authorization: Bearer ${e}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===a?o.variables.input={amount:s.toString(),walletId:m}:"feeProbe"===a?o.variables.input={paymentRequest:l,walletId:m}:"lnInvoicePaymentSend"===a&&(o.variables.input={paymentRequest:l,walletId:r});let c=JSON.stringify(o).replace(/\n/g,"");const u=`curl --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '${c}'`;"wallet"===a?v(`curl -sS --request POST --header 'content-type: application/json' \\\n    ${i} \\\n    --url '${n}' \\\n    --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n | jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "USD") .id'`):"invoice"===a?E(u):"feeProbe"===a?w(u):"lnInvoicePaymentSend"===a&&S(u)};(0,a.useEffect)((()=>{Q(N,"wallet")}),[e,n]),(0,a.useEffect)((()=>{const e=J();Q(e,"invoice")}),[e,n,s,m]),(0,a.useEffect)((()=>{const e=X();Q(e,"feeProbe",d,m)}),[e,n,d,m]),(0,a.useEffect)((()=>{const e=M();Q(e,"lnInvoicePaymentSend",d,m)}),[e,n,d,m]);const Z=e=>{p(e.target.value)};function K(e){let{value:t,onChange:n,onSet:l}=e;return a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Paste and set the authentication token",value:t,onChange:n,style:{width:"50%",marginBottom:"10px"}}),a.createElement("div",null,a.createElement("button",{onClick:l},"Set token")))}const H=a.createElement(K,{value:i,onChange:e=>{c(e.target.value)},onSet:()=>{t(i)}});return a.createElement("div",null,a.createElement("div",null,"The GraphQL endpoint to connect to:"),a.createElement("input",{type:"text",value:n,onChange:e=>{o(e.target.value)},style:{width:"50%",marginBottom:"10px"}}),a.createElement("div",null,"The following methods require a valid auth token set in the header as a bearer token:"),H,a.createElement("div",{style:{marginTop:"40px"}}),a.createElement("h3",null,"Get the wallet IDs and check the balances"),a.createElement("div",null,"Can run this query at any stage to confirm the change in the balances."),a.createElement("div",null,'The "BTC" wallet balance is denominated in satoshis.'),a.createElement("div",null,'The "USD" wallet balance is in cents.'),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},N),a.createElement("button",{onClick:async()=>{try{const t=await(0,l.K)(e,n,N);T(t);const a=t?.me?.defaultAccount?.wallets?.find((e=>"BTC"===e.walletCurrency));a?.id&&p(a.id),Q(N,"wallet")}catch(t){B(t.message)}}},"Send the request"),O&&a.createElement("div",{style:{color:"red"}},"Error: ",O),x&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(x,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to get the USD wallet ID:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},g)),a.createElement("h3",null,"Generate a Stablesats invoice"),a.createElement("div",null,"Using Stablesats a merchant can generate invoices denominated in USD cents."),a.createElement("div",null,"The satoshi amount of the invoice will reflect the current USD/BTC exchange rate and the balance will be kept at the dollar value."),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",null,a.createElement("div",null,a.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),a.createElement("label",null,a.createElement("div",null,"Amount (USD cents):"),a.createElement("input",{type:"number",value:s,onChange:e=>{u(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),a.createElement("label",null,a.createElement("div",null,"USD wallet ID:"),a.createElement("input",{type:"text",value:m,onChange:Z,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"}))),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},W),a.createElement("button",{onClick:async()=>{const t=J(),a={input:{amount:s.toString(),walletId:m}};try{const r=await(0,l.K)(e,n,t,a);k(r),Q(t,"invoice")}catch(r){j(r.message)}}},"Create a Stablesats invoice"),$&&a.createElement("div",{style:{color:"red"}},"Error: ",$),C&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(C,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to generate a Stablesats invoice:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},y)),a.createElement("h3",null,"Probe invoice fee"),a.createElement("div",null,"Estimate the cost of paying a lightning invoice."),a.createElement("div",null,"Payments to an other Blink user and to nodes with a direct channel are free."),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",null,a.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),a.createElement("div",null,a.createElement("label",null,a.createElement("div",null,"Invoice"),a.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"}))),a.createElement("label",null,a.createElement("div",null,"USD wallet ID:"),a.createElement("input",{type:"text",value:m,onChange:Z,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"}))),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},G),a.createElement("button",{onClick:async()=>{const t=X(),a={input:{paymentRequest:d,walletId:m}};try{const r=await(0,l.K)(e,n,t,a);P(r),Q(t,"feeProbe",d,m)}catch(r){A(r.message)}}},"Probe fee"),D&&a.createElement("div",{style:{color:"red"}},"Error: ",D),L&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(L,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("h4",null,"cURL command to probe invoice fee:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},f)),a.createElement("h3",null,"Pay an invoice"),a.createElement("div",null,"Pay a BOLT11 invoice from your Stablesats balance"),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",null,a.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),a.createElement("div",null,a.createElement("label",null,a.createElement("div",null,"Invoice"),a.createElement("input",{type:"text",value:d,onChange:e=>h(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"}))),a.createElement("label",null,a.createElement("div",null,"USD wallet ID:"),a.createElement("input",{type:"text",value:m,onChange:Z,style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"}))),a.createElement("div",{style:{marginTop:"20px"}}),a.createElement("div",{style:{fontWeight:"bold"}},"The body of the GraphQL request:"),a.createElement("pre",{style:{marginLeft:"10px"}},F),a.createElement("button",{onClick:async()=>{const t=M(),a={input:{paymentRequest:d,walletId:m}};try{const r=await(0,l.K)(e,n,t,a);q(r),Q(t,"lnInvoicePaymentSend",d,m)}catch(r){U(r.message)}}},"Send payment"),R&&a.createElement("div",{style:{color:"red"}},"Error: ",R),I&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(I,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to pay an invoice:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},b)))}},2741:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(8524),r=n(4746),o=n(2620);const i=function(){const{authToken:e,setAuthToken:t}=(0,r.a)(),[n,i]=(0,a.useState)("https://api.staging.galoy.io/auth"),[c,s]=(0,a.useState)(""),[u,m]=(0,a.useState)(""),[p,d]=(0,a.useState)(null),[h,g]=(0,a.useState)(null),[v,y]=(0,a.useState)(""),[E,f]=(0,a.useState)(!1),[w,b]=(0,a.useState)(null),[S,x]=(0,a.useState)(null),[T,C]=(0,a.useState)(""),[k,L]=(0,a.useState)(""),[P,I]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=(0,o.OP)(n,c);C(e)}),[n,c]),(0,a.useEffect)((()=>{const e=(0,o.qF)(n,v,u);L(e)}),[n,v,u]),a.createElement("div",null,a.createElement("h3",null,"1) Request a 2FA code to your email"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("div",null,a.createElement("div",null,"The REST authentication endpoint to connect to:"),a.createElement("input",{type:"text",value:n,onChange:e=>i(e.target.value),style:{width:"50%",marginBottom:"10px"}}),a.createElement("div",null),a.createElement("input",{type:"email",placeholder:"Fill in the email address used with Blink",value:c,onChange:e=>s(e.target.value),style:{width:"50%",marginBottom:"10px"}})),a.createElement("button",{onClick:async()=>{try{const e=await(0,l.My)(n,c);y(e),d(`The emailLoginId: ${e} was obtained successfully!`)}catch(e){g(e.message)}}},"Request code"),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h4",null,"cURL command to request an email code:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},T)),h&&a.createElement("div",{style:{color:"red"}},"Error: ",h),p&&a.createElement("div",{style:{color:"green"}},p),a.createElement("div",{style:{margin:"20px 0"}}),a.createElement("div",{style:{marginTop:"40px"}},a.createElement("h3",null,"2) Enter the 2FA code received by email"),"The email login ID from the previous request:",a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Email login ID",value:v,onChange:e=>y(e.target.value),style:{width:"50%",marginBottom:"10px"}}),a.createElement("div",null),a.createElement("input",{type:"text",placeholder:"Fill in the 2FA code from the email",value:u,onChange:e=>m(e.target.value),style:{width:"50%",marginBottom:"10px"}})),a.createElement("button",{onClick:async()=>{if(!v||u.length<6)x("Invalid input");else{I(!0);try{const e=await(0,l.ZA)(n,v,u);t(e),b("Logged in successfully! Copy and save the token to make authenticated requests on the next page.")}catch(e){x(e.message)}finally{I(!1)}}},disabled:P},P?"Logging in...":"Log in")),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h4",null,"cURL command for email login:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},k)),S&&a.createElement("div",{style:{color:"red"}},"Error: ",S),w&&a.createElement("div",{style:{color:"green"}},w),e&&a.createElement("div",null,a.createElement("button",{onClick:()=>{f((e=>!e))}},"Toggle Token Visibility"),E&&a.createElement("div",null,a.createElement("strong",null,"Token:")," ",e)))}},2071:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(8524),r=n(4746),o=n(2620);const i=function(){const{authToken:e,setAuthToken:t}=(0,r.a)(),[n,i]=(0,a.useState)("https://api.staging.galoy.io/graphql"),[c,s]=(0,a.useState)(""),[u,m]=(0,a.useState)(""),[p,d]=(0,a.useState)(!1),[h,g]=(0,a.useState)(null),[v,y]=(0,a.useState)(null),[E,f]=(0,a.useState)("");return(0,a.useEffect)((()=>{f((0,o.nM)(n,c,u))}),[c,u,n]),a.createElement("div",null,a.createElement("div",null,a.createElement("h2",null,"Log in with phone and code"),a.createElement("input",{type:"text",value:n,onChange:e=>{i(e.target.value)},style:{width:"100%",marginBottom:"10px"}}),a.createElement("input",{type:"text",placeholder:"Phone",value:c,onChange:e=>{s(e.target.value)}}),a.createElement("input",{type:"text",placeholder:"Code",value:u,onChange:e=>{m(e.target.value)}}),a.createElement("button",{onClick:async()=>{if(c.length<10||u.length<6)y("Invalid input");else try{const e=await(0,l.Vj)(n,c,u);t(e),g("Got the auth token!"),f((0,o.nM)(n,c,u))}catch(e){y(e.message)}}},"Log in")),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("h3",null,"cURL command for phone login:"),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},E)),h&&a.createElement("div",{style:{color:"green"}},h),v&&a.createElement("div",{style:{color:"red"}},"Error: ",v),e&&a.createElement("div",null,a.createElement("button",{onClick:()=>{d((e=>!e))}},"Toggle Token Visibility"),p&&a.createElement("div",null,a.createElement("strong",null,"Token:")," ",e)))}},7900:(e,t,n)=>{n.d(t,{K:()=>a});const a=async function(e,t,n,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!n)throw new Error("No GraphQL query provided");try{const l=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:n,variables:a})});if(!l.ok){const e=await l.text();throw new Error(`Error response from server: ${e}`)}const r=l.headers.get("content-type");if(r&&r.includes("application/json")){return await l.json()}throw new Error(`Unexpected content type: ${r}`)}catch(l){throw console.error("There was an error making the authenticated request:",l),l}}},8524:(e,t,n)=>{n.d(t,{My:()=>l,Vj:()=>a,ZA:()=>r});const a=async(e,t,n)=>{try{const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n            mutation login($input: UserLoginInput!) {\n              userLogin(input: $input) {\n                authToken\n              }\n            }\n          ",variables:{input:{phone:t,code:n}}})}),l=await a.text();console.log("Raw Response:",l);const r=JSON.parse(l);if(!a.ok)throw new Error(`HTTP Error: ${a.status}`);if(r.errors&&r.errors.length>0)throw new Error(r.errors[0].message);if(!r.data?.userLogin?.authToken)throw new Error("Expected authToken not found in the response.");return r.data.userLogin.authToken}catch(a){throw console.error("There was an error making the request:",a),a}},l=async(e,t)=>{try{const n=await fetch(`${e}/email/code`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:t})}),a=await n.json();if(!n.ok)throw new Error(`HTTP Error: ${n.status}`);return a.result}catch(n){throw console.error("There was an error making the request:",n),n}},r=async(e,t,n)=>{try{const a=await fetch(`${e}/email/login`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({code:n,emailLoginId:t})}),l=await a.json();if(l.error){if("too many requests"===l.error)throw new Error("You've made too many requests. Please wait and try again later.");throw new Error(l.error)}if(!l.result?.authToken)throw new Error("Expected authToken not found in the response.");return l.result.authToken}catch(a){throw console.error("There was an error making the request:",a),a}}},2620:(e,t,n)=>{n.d(t,{OP:()=>a,nM:()=>l,qF:()=>r});const a=(e,t)=>{const n={email:t};return`curl -X POST '${e}/auth/email/code' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify(n)}'`},l=(e,t,n)=>{const a={query:"mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }",variables:{input:{phone:t,code:n}}};return`curl '${e}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data-binary '${JSON.stringify(a)}'`},r=(e,t,n)=>`curl -X POST '${`${e}/auth/email/login`}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify({code:n,emailLoginId:t})}'`},7793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var a=n(7462),l=(n(7294),n(3905)),r=n(4746),o=n(2071),i=n(2741),c=n(9090),s=n(5690);const u={title:"Demo requests"},m=void 0,p={unversionedId:"graphql-demo",id:"graphql-demo",title:"Demo requests",description:"Be cautious using an environment with real funds as the authentication token will be exposed in the browser.",source:"@site/docs/graphql-demo.mdx",sourceDirName:".",slug:"/graphql-demo",permalink:"/graphql-demo",draft:!1,tags:[],version:"current",frontMatter:{title:"Demo requests"}},d={},h=[{value:"Email Login",id:"email-login",level:2},{value:"Phone Login",id:"phone-login",level:2},{value:"Make authenticated requests",id:"make-authenticated-requests",level:2}],g={toc:h},v="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(v,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Be cautious using an environment with real funds as the authentication token will be exposed in the browser.")),(0,l.kt)("h2",{id:"email-login"},"Email Login"),(0,l.kt)(r.H,{mdxType:"AuthProvider"},(0,l.kt)(i.Z,{mdxType:"EmailLoginButton"}),(0,l.kt)("div",{style:{margin:"40px 0"}}),(0,l.kt)("h2",{id:"phone-login"},"Phone Login"),(0,l.kt)(o.Z,{mdxType:"PhoneLoginButton"}),(0,l.kt)("div",{style:{margin:"40px 0"}}),(0,l.kt)("h2",{id:"make-authenticated-requests"},"Make authenticated requests"),(0,l.kt)(s.Z,{mdxType:"AuthRequestUsdButton"}),(0,l.kt)(c.Z,{mdxType:"AuthRequestBtcButton"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,"For more info and other requests, visit the ",(0,l.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"GraphQL playground"),"."))}y.isMDXComponent=!0}}]);