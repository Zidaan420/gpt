"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[256],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=s(r),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(h,p(p({ref:e},l),{},{components:r})):n.createElement(h,p({ref:e},l))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[m]="string"==typeof t?t:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8152:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>y,contentTitle:()=>f,default:()=>w,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))c.call(e,r)&&l(t,r,e[r]);if(i)for(var r of i(e))s.call(e,r)&&l(t,r,e[r]);return t},d=(t,e)=>o(t,p(e)),u=(t,e)=>{var r={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&s.call(t,n)&&(r[n]=t[n]);return r};const h={title:"Prompts",description:"ChatGPT Prompts!"},f=void 0,g={unversionedId:"chatgpt/prompts",id:"chatgpt/prompts",title:"Prompts",description:"ChatGPT Prompts!",source:"@site/docs/chatgpt/prompts.md",sourceDirName:"chatgpt",slug:"/chatgpt/prompts",permalink:"/chatgpt/prompts",draft:!1,editUrl:"https://github.com/lencx/app/tree/main/docs/chatgpt/prompts.md",tags:[],version:"current",lastUpdatedBy:"lencx",lastUpdatedAt:1679221478,formattedLastUpdatedAt:"Mar 19, 2023",frontMatter:{title:"Prompts",description:"ChatGPT Prompts!"},sidebar:"chatgpt",previous:{title:"Installation",permalink:"/chatgpt/install"},next:{title:"FAQ",permalink:"/chatgpt/faq"}},y={},b=[],O={toc:b},k="wrapper";function w(t){var e=t,{components:a}=e,o=u(e,["components"]);return(0,n.kt)(k,d(m(m({},O),o),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can look at ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",m({parentName:"strong"},{href:"https://github.com/f/awesome-chatgpt-prompts"}),"awesome-chatgpt-prompts"))," to find interesting features to import into the app. You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"Sync Prompts")," to sync all in one click, and if you don't want certain prompts to appear in your slash commands, you can disable them."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"chatgpt cmd",src:r(7105).Z,width:"2880",height:"1800"}),"\n",(0,n.kt)("img",{alt:"chatgpt sync prompts",src:r(4389).Z,width:"2880",height:"1800"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the chatgpt text input area, type a character starting with ",(0,n.kt)("inlineCode",{parentName:"li"},"/")," to bring up the command prompt, press the spacebar, and it will fill the input area with the text associated with the command by default (note: if it contains multiple command prompts, it will only select the first one as the fill, you can keep typing until the first prompted command is the one you want, then press the spacebar."),(0,n.kt)("li",{parentName:"ul"},"Or use the mouse to click on one of the multiple commands). When the fill is complete, you simply press the Enter key."),(0,n.kt)("li",{parentName:"ul"},"Under the slash command, use the tab key to modify the contents of the ",(0,n.kt)("inlineCode",{parentName:"li"},"{q}")," tag (only single changes are supported ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lencx/ChatGPT/issues/54"}),"#54"),"). Use the keyboard ",(0,n.kt)("inlineCode",{parentName:"li"},"\u21e7")," (arrow up) and ",(0,n.kt)("inlineCode",{parentName:"li"},"\u21e9")," (arrow down) keys to select the slash command.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"chatgpt",src:r(2212).Z,width:"960",height:"600"}),"\n",(0,n.kt)("img",{alt:"chatgpt-cmd",src:r(5065).Z,width:"960",height:"600"})))}w.isMDXComponent=!0},5065:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/chatgpt-cmd-b86f9039482775f4fb7029d8c6423e8d.gif"},7105:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/chatgpt-cmd-1edd8f444963f441c2616fa637dcd286.png"},4389:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/chatgpt-sync-prompts-fd84e3db17a712c8c2334af11f467947.png"},2212:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/chatgpt-5add8f17b12dd101ea9bba17b9cc5a01.gif"}}]);