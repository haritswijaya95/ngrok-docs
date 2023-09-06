"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[36061],{12800:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(51163),i=(a(59496),a(49613));const o={description:"Authenticate users with Twitch OAuth"},r="Twitch",p={unversionedId:"integrations/twitch/oauth",id:"integrations/twitch/oauth",title:"Twitch",description:"Authenticate users with Twitch OAuth",source:"@site/docs/integrations/twitch/oauth.mdx",sourceDirName:"integrations/twitch",slug:"/integrations/twitch/oauth",permalink:"/docs/integrations/twitch/oauth",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/twitch/oauth.mdx",tags:[],version:"current",lastUpdatedBy:"Alan Shreve",lastUpdatedAt:1693163609,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{description:"Authenticate users with Twitch OAuth"},sidebar:"docs",previous:{title:"Twitch",permalink:"/docs/integrations/twitch/"},next:{title:"Twitter",permalink:"/docs/integrations/twitter/"}},c={},s=[{value:"Creating a custom Twitch OAuth application",id:"creating-a-custom-twitch-oauth-application",level:2},{value:"Create credentials for ngrok",id:"create-credentials-for-ngrok",level:3},{value:"Update your endpoint configuration",id:"update-your-endpoint-configuration",level:3},{value:"Additional application setup information",id:"additional-application-setup-information",level:3}],l={toc:s},h="wrapper";function d(t){let{components:e,...o}=t;return(0,i.kt)(h,(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twitch"},"Twitch"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"creating-a-custom-twitch-oauth-application"},"Creating a custom Twitch OAuth application"),(0,i.kt)("p",null,"The step-by-step instructions below follow Twitch's documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://dev.twitch.tv/docs/authentication/"},"Using OAuth 2.0")," for authentication."),(0,i.kt)("h3",{id:"create-credentials-for-ngrok"},"Create credentials for ngrok"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://dev.twitch.tv/console"},"Twitch developer console"),", sign in, click ",(0,i.kt)("strong",{parentName:"p"},"Applications")," on the left menu, and then click ",(0,i.kt)("strong",{parentName:"p"},"Register Your Application"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Register Your Application")," page, provide a ",(0,i.kt)("strong",{parentName:"p"},"Name")," for your application, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"https://idp.ngrok.com/oauth2/callback")," in the ",(0,i.kt)("strong",{parentName:"p"},"OAuth Redirect URLs")," field, select ",(0,i.kt)("strong",{parentName:"p"},"Website Integration")," in the ",(0,i.kt)("strong",{parentName:"p"},"Category")," selector, and then click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Make sure you have two-factor authentication enabled for your Twitch account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Developer Applications")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Manage")," for your application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the application page, click ",(0,i.kt)("strong",{parentName:"p"},"New Secret"),", and make a note of the ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," values.\n",(0,i.kt)("a",{target:"_blank",href:a(93938).Z},(0,i.kt)("img",{src:a(34772).Z,width:"852",height:"588"}))))),(0,i.kt)("h3",{id:"update-your-endpoint-configuration"},"Update your endpoint configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Access the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/"},"ngrok Dashboard"),", sign in, create or edit an edge, and click ",(0,i.kt)("strong",{parentName:"p"},"OAuth")," to enable the OAuth configuration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Twitch")," in the ",(0,i.kt)("strong",{parentName:"p"},"Identity Provider")," selector, and select ",(0,i.kt)("strong",{parentName:"p"},"Use my own OAuth application")," in the ",(0,i.kt)("strong",{parentName:"p"},"OAuth Application")," field."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Alternatively, you can select ",(0,i.kt)("strong",{parentName:"p"},"Use an ngrok-managed OAuth application"),". If so, there is no need to create an application in the Twitch developer console.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," values you copied previously in the corresponding fields and then click ",(0,i.kt)("strong",{parentName:"p"},"Save")," to save the edge configuration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Access your application using the link provided by the ",(0,i.kt)("strong",{parentName:"p"},"Endpoints")," URL of your edge."))),(0,i.kt)("h3",{id:"additional-application-setup-information"},"Additional application setup information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.twitch.tv/docs/authentication/"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.twitch.tv/docs/authentication/register-app/"},"Registering Your App"))))}d.isMDXComponent=!0},93938:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/1-twitch-register-e61c97679b0a1539d29982393ec66948.png"},34772:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1-twitch-register-e61c97679b0a1539d29982393ec66948.png"}}]);