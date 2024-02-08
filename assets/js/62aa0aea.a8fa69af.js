"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2800],{5529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(5893),a=n(1151);const s={title:"Problem Statement",sidebar_position:2,slug:"/"},o=void 0,r={id:"intro/introduction",title:"Problem Statement",description:"Traditional API Gateway",source:"@site/docs/intro/introduction.md",sourceDirName:"intro",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/intro/introduction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Problem Statement",sidebar_position:2,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/getting_started"}},c={},l=[{value:"Traditional API Gateway",id:"traditional-api-gateway",level:2},{value:"Tailcall API Gateway",id:"tailcall-api-gateway",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"traditional-api-gateway",children:"Traditional API Gateway"}),"\n",(0,i.jsx)(t.p,{children:'Traditional API Gateways ("TAGs") form the backbone of modern web based application architectures, offering a comprehensive suite of features essential for efficient API management. These gateways handle tasks such as routing, authentication, circuit breaking, caching, logging, monitoring, protocol translation and the list doesn\'t end!'}),"\n",(0,i.jsx)(t.p,{children:"However, API Gateways don't provide developers access to the right abstraction when it comes to configuring these capabilities. Typically a TAG would provide you with primitives that are based on the underlying protocol (i.e. the protocol on which the API is served). For example: you can perform authentication, routing, rate-limiting etc. on the basis of the request headers, URL or method. All of which are components of the HTTP protocol. This happens because they treat the contents of request and response bodies as mere byte sequences, without delving into their substance."}),"\n",(0,i.jsx)(t.p,{children:"Over the years, we have gotten used to consuming and managing APIs this way. Writing our own custom abstractions and sticking it around an existing over the shelf API Gateway. Our personal experience has been that nearly all companies after a certain scale require an abstraction that's specific to their business entities and feel restricted by what the API Gateway can provide."}),"\n",(0,i.jsx)(t.h2,{id:"tailcall-api-gateway",children:"Tailcall API Gateway"}),"\n",(0,i.jsxs)(t.p,{children:["Based on our learnings of writing APIs at massive scale, we believe that the gateway should work around an enterprise's business entities and not the other way round. That's exactly what Tailcall helps you achieve.\nTailcall provides first-class primitives designed to interact with your business entities directly without burdening the developer with the underlying protocol. This approach grants tremendous power and flexibility, transcending protocol constraints and focusing on the nature of the API's data. Let's take the ",(0,i.jsx)(t.code,{children:"User"})," entity as an example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type User {\n  id: ID\n  name: String\n  email: String\n  account: Account\n}\n\ntype Account {\n  balance: Float\n  lastUpdated: Date\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"User"})," is a business entity that can be resolved from multiple APIs. A ",(0,i.jsx)(t.code,{children:"/users"})," API could resolve the ",(0,i.jsx)(t.code,{children:"id"}),", ",(0,i.jsx)(t.code,{children:"name"})," & ",(0,i.jsx)(t.code,{children:"email"})," and a ",(0,i.jsx)(t.code,{children:"/accounts/:userId"})," could resolve the user's account ",(0,i.jsx)(t.code,{children:"balance"})," and ",(0,i.jsx)(t.code,{children:"lastUpdated"}),". With tailcall's API Gateway you will be able to specify that requests accessing the account details will require authentication, whereas other requests may not."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type User {\n  id: ID\n  name: String\n  email: String\n  account: Account @private\n}\n\ntype Account {\n  balance: Float\n  lastUpdated: Date\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"With Tailcall, specifying which parts of an entity should be public or private becomes straightforward, the platform also allows for the obfuscation of fields deemed sensitive or PII in specific contexts. This is all achievable through Tailcall's DSL, which facilitates all these complex operations efficiently and with minimal latency."}),"\n",(0,i.jsx)(t.p,{children:"Further enhancing its capabilities, Tailcall's DSL supports sophisticated API Orchestration, going beyond mere request routing. It enables you to define the expected API structure and provides guidance on resolving each component within the entity type. For instance, consider a transaction API containing a userId. Traditionally, expanding this userId to retrieve the corresponding user details would require additional micro-services. However, with Tailcall, expressing this requirement through its DSL prompts the Tailcall runtime to automatically resolve and populate these details for you. This approach eliminates the need for any manual coding, streamlining the API management process significantly."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(7294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);