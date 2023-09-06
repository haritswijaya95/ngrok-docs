"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[11692],{6470:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(59496),i=n(13352),o=n(7426);function s(e){let{name:t}=e;const n=(0,o.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),s=[];let a=[];for(let o=0;o<n.docs.length;o++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[o];a.push(r.createElement(i.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==a.length||n.docs.length<2||o==n.docs.length-1)&&(s.push(r.createElement("div",{className:"ngrok--cards ngrok--cards-row"},a)),a=[])}return r.createElement(r.Fragment,null,s)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),i=n(45924),o=n(62515);function s(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return r.createElement("h4",{className:"fw-600"},n);case"xl":return r.createElement("h2",{className:"fw-600"},n);default:return r.createElement("h3",{className:"fw-600"},n)}}function a(e){let{size:t,title:n,icon:i}=e;return i?r.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&r.createElement(s,{size:t,title:n}),i):n?r.createElement("div",{className:"ngrok--card-heading"},r.createElement(s,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:s="",title:c,img:l="",icon:u=!1,description:d=!1,descriptionLink:g=!1}=e;s=s.toLowerCase();let p=(0,i.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==s,"ngrok--card-lg":"lg"==s,"ngrok--card-xl":"xl"==s});return r.createElement(o.Z,{to:t},r.createElement("div",{className:p},l&&r.createElement("img",{src:l}),r.createElement(a,{size:s,title:c,icon:u}),d&&r.createElement("p",null,d),g&&r.createElement("a",null,g)))}},66729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(51163),i=(n(59496),n(49613)),o=n(6470);const s={name:"pusher",title:"Pusher Integration Hub",sidebar_label:"Pusher",description:"Get notified about events taking place in your Pusher Channels without\nupdating your code or poking your firewall.\n",excerpt:"Securely get your notifications from Pusher using ngrok.\n"},a=void 0,c={unversionedId:"integrations/pusher/index",id:"integrations/pusher/index",title:"Pusher Integration Hub",description:"Get notified about events taking place in your Pusher Channels without\nupdating your code or poking your firewall.\n",source:"@site/docs/integrations/pusher/index.mdx",sourceDirName:"integrations/pusher",slug:"/integrations/pusher/",permalink:"/docs/integrations/pusher/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/pusher/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"pusher",title:"Pusher Integration Hub",sidebar_label:"Pusher",description:"Get notified about events taking place in your Pusher Channels without\nupdating your code or poking your firewall.\n",excerpt:"Securely get your notifications from Pusher using ngrok.\n"},sidebar:"docs",previous:{title:"Plivo Webhooks",permalink:"/docs/integrations/plivo/webhooks"},next:{title:"Pusher Webhooks",permalink:"/docs/integrations/pusher/webhooks"}},l={},u=[],d={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,s.description),(0,i.kt)(o.Z,{name:s.name,mdxType:"IntegrationPageList"}))}p.isMDXComponent=!0}}]);