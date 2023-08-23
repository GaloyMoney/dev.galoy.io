"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=l,h=c["".concat(o,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={},r="Testing on signet",s={unversionedId:"signet",id:"signet",title:"Testing on signet",description:"Documentation of testing options with the wider network since the dev setup makes is possible to start a signet instance.",source:"@site/docs/signet.md",sourceDirName:".",slug:"/signet",permalink:"/signet",draft:!1,tags:[],version:"current",frontMatter:{}},o={},p=[{value:"General notes about signet",id:"general-notes-about-signet",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Public Electrum servers",id:"public-electrum-servers",level:2},{value:"Block explorer",id:"block-explorer",level:2},{value:"Faucets",id:"faucets",level:2},{value:"LN explorers",id:"ln-explorers",level:2},{value:"Test payment destinations",id:"test-payment-destinations",level:2},{value:"Other wallets with signet support",id:"other-wallets-with-signet-support",level:2},{value:"OBW",id:"obw",level:3},{value:"Sparrow Wallet",id:"sparrow-wallet",level:3},{value:"Electrum Wallet",id:"electrum-wallet",level:3},{value:"Galoy staging node to open channels to",id:"galoy-staging-node-to-open-channels-to",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"testing-on-signet"},"Testing on signet"),(0,l.kt)("p",null,"Documentation of testing options with the wider network since the dev setup makes is possible to start a signet instance."),(0,l.kt)("h2",{id:"general-notes-about-signet"},"General notes about signet"),(0,l.kt)("h3",{id:"advantages"},"Advantages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it is a network where intreaction is possible with other instances and projects"),(0,l.kt)("li",{parentName:"ul"},"funds are worthless just like on testnet"),(0,l.kt)("li",{parentName:"ul"},"the derivation paths are same as on testnet"),(0,l.kt)("li",{parentName:"ul"},"reliable blocktimes"),(0,l.kt)("li",{parentName:"ul"},"no block-storms"),(0,l.kt)("li",{parentName:"ul"},"small blockchain (IBD ~ 10 mins on a laptop)"),(0,l.kt)("li",{parentName:"ul"},"Faucets are available (see below)")),(0,l.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"no lndmon support yet ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lightninglabs/lndmon/issues/80"},"https://github.com/lightninglabs/lndmon/issues/80")),(0,l.kt)("li",{parentName:"ul"},"no Loop support yet ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lightninglabs/loop/issues/522"},"https://github.com/lightninglabs/loop/issues/522")),(0,l.kt)("li",{parentName:"ul"},"fewer nodes on the network"),(0,l.kt)("li",{parentName:"ul"},"staging would need an accounting reset when converting (might be an advantage)"),(0,l.kt)("li",{parentName:"ul"},"no known 3rd party services / test shops available"),(0,l.kt)("li",{parentName:"ul"},"pending in:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alexbosworth/ln-sync/issues/5"},"https://github.com/alexbosworth/ln-sync/issues/5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bitcoinjs/bitcoinjs-lib/issues/1820"},"https://github.com/bitcoinjs/bitcoinjs-lib/issues/1820"))))),(0,l.kt)("h2",{id:"public-electrum-servers"},"Public Electrum servers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"signet-electrumx.wakiyamap.dev:50002:s"),(0,l.kt)("li",{parentName:"ul"},"electrum.emzy.de:53002:s"),(0,l.kt)("li",{parentName:"ul"},"node202.fra.mempool.space:60602:s")),(0,l.kt)("h2",{id:"block-explorer"},"Block explorer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mempool.space/signet"},"https://mempool.space/signet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://explorer.bc-2.jp/"},"https://explorer.bc-2.jp/"))),(0,l.kt)("h2",{id:"faucets"},"Faucets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://signet.bc-2.jp/"},"https://signet.bc-2.jp/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://signetfaucet.bublina.eu.org/"},"https://signetfaucet.bublina.eu.org/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://faucet.sirion.io/"},"https://faucet.sirion.io/")," (LN only)")),(0,l.kt)("h2",{id:"ln-explorers"},"LN explorers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mempool.space/signet/lightning"},"https://mempool.space/signet/lightning")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://signet-lightning.wakiyamap.dev/"},"https://signet-lightning.wakiyamap.dev/"))),(0,l.kt)("h2",{id:"test-payment-destinations"},"Test payment destinations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LN address on staging: ",(0,l.kt)("inlineCode",{parentName:"li"},"test@pay.staging.galoy.io")),(0,l.kt)("li",{parentName:"ul"},"Staging cash register: ",(0,l.kt)("a",{parentName:"li",href:"https://pay.staging.galoy.io/test?amount=0&sats=0&unit=CENT&memo=&display=USD&currency=USD"},"https://pay.staging.galoy.io/test?amount=0&sats=0&unit=CENT&memo=&display=USD","\xa4","cy=USD")),(0,l.kt)("li",{parentName:"ul"},"BTCPay PoS (LN - BOLT11) ",(0,l.kt)("a",{parentName:"li",href:"https://sigpay.sirion.io/apps/33Au5UDsPWnUL5GVT8q1Yjovw83K/crowdfund"},"https://sigpay.sirion.io/apps/33Au5UDsPWnUL5GVT8q1Yjovw83K/crowdfund")),(0,l.kt)("li",{parentName:"ul"},"BTCPay PoS (onchain) ",(0,l.kt)("a",{parentName:"li",href:"https://signet.demo.btcpayserver.org/apps/2SCdQhwFm464BcHxXn44kRVg3iCr/pos"},"https://signet.demo.btcpayserver.org/apps/2SCdQhwFm464BcHxXn44kRVg3iCr/pos"))),(0,l.kt)("h2",{id:"other-wallets-with-signet-support"},"Other wallets with signet support"),(0,l.kt)("h3",{id:"obw"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/nbd-wtf/obw/releases/"},"OBW")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"for Android only with LN support"),(0,l.kt)("li",{parentName:"ul"},"To use a hosted channel scan the QRcode with OBW-signet (should also provide some local balance ):")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/43343391/206720745-838fb788-d09d-4af9-8400-32c2137dd30b.png"},(0,l.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/43343391/206720745-838fb788-d09d-4af9-8400-32c2137dd30b.png",alt:"Alternate Text"}))),(0,l.kt)("h3",{id:"sparrow-wallet"},(0,l.kt)("a",{parentName:"h3",href:"https://sparrowwallet.com/download/"},"Sparrow Wallet")),(0,l.kt)("p",null,"Supports onchain only, but works well with Taproot accounts. To use it with signet open:\nmenu - Tools - Restart  in Testnet and set a Private Electrum server serving signet like: ",(0,l.kt)("inlineCode",{parentName:"p"},"node202.fra.mempool.space")," port: ",(0,l.kt)("inlineCode",{parentName:"p"},"60602")," with SSL.`"),(0,l.kt)("h3",{id:"electrum-wallet"},(0,l.kt)("a",{parentName:"h3",href:"https://electrum.org/#download"},"Electrum Wallet")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support onchain (no Taproot yet) and LN, but couldn't send or receive lightning payments on signet with electrum yet."),(0,l.kt)("li",{parentName:"ul"},"start with the signet flag eg:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"electrum-4.4.0-x86_64.AppImage --signet\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"menu")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Wallet")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Information")," and restart to activate lightning")),(0,l.kt)("h2",{id:"galoy-staging-node-to-open-channels-to"},"Galoy staging node to open channels to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mempool.space/signet/lightning/node/024e679c1a77143029b806f396f935fa6cd0744970f412667adfc75edbbab54d7a"},"Galoy staging LND1")),(0,l.kt)("li",{parentName:"ul"},"Scan the URI to open a channel:")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mempool.space/signet/lightning/node/024e679c1a77143029b806f396f935fa6cd0744970f412667adfc75edbbab54d7a"},(0,l.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/43343391/200599602-093133de-4d40-4ab3-9ed6-4f4af1d4527c.png",alt:"Alternate Text"}))),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"General documentation on signet: ",(0,l.kt)("a",{parentName:"li",href:"https://en.bitcoin.it/wiki/Signet"},"https://en.bitcoin.it/wiki/Signet")),(0,l.kt)("li",{parentName:"ul"},"Plebnet playground using a separate signet: ",(0,l.kt)("a",{parentName:"li",href:"https://www.plebnet.fun/"},"https://www.plebnet.fun/")),(0,l.kt)("li",{parentName:"ul"},"Custom signet by Mutiny: ",(0,l.kt)("a",{parentName:"li",href:"https://blog.mutinywallet.com/mutinynet/?ref=nobsbitcoin.com"},"https://blog.mutinywallet.com/mutinynet/?ref=nobsbitcoin.com"))))}m.isMDXComponent=!0}}]);