"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[13],{7911:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(7294),l=a(6010),n=a(9045),i=a(9078),s=a(9130),c=a(3084);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function o({sidebar:e}){return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.Z)(m.sidebarItemList,"clean-list")},e.items.map((e=>r.createElement("li",{key:e.permalink,className:m.sidebarItem},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var b=a(5043);function u({sidebar:e}){return r.createElement("ul",{className:"menu__list"},e.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return r.createElement(b.Zo,{component:u,props:e})}function d({sidebar:e}){const t=(0,i.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(p,{sidebar:e}):r.createElement(o,{sidebar:e}):null}var g=Object.defineProperty,E=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&h(e,a,t[a]);if(E)for(var a of E(t))v.call(t,a)&&h(e,a,t[a]);return e},N=(e,t)=>{var a={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&E)for(var r of E(e))t.indexOf(r)<0&&v.call(e,r)&&(a[r]=e[r]);return a};function y(e){const t=e,{sidebar:a,toc:i,children:s}=t,c=N(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(n.Z,k({},c),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(d,{sidebar:a}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),i&&r.createElement("div",{className:"col col--2"},i))))}},9734:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(7294),l=a(6010),n=a(3084);const i=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a(3537),c=a(3631),m=a(7911),o=a(5221);const b={tag:"tag_Nnez"};var u=Object.defineProperty,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&E(e,a,t[a]);if(p)for(var a of p(t))g.call(t,a)&&E(e,a,t[a]);return e};function v({letterEntry:e}){return r.createElement("article",null,r.createElement("h2",null,e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:b.tag},r.createElement(o.Z,f({},e)))))),r.createElement("hr",null))}function h({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(v,{key:e.letter,letterEntry:e}))))}var k=a(3773);function N({tags:e,sidebar:t}){const a=i();return r.createElement(s.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},r.createElement(s.d,{title:a}),r.createElement(k.Z,{tag:"blog_tags_list"}),r.createElement(m.Z,{sidebar:t},r.createElement("h1",null,a),r.createElement(h,{tags:e})))}},5221:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),l=a(6010),n=a(9130);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s({permalink:e,label:t,count:a}){return r.createElement(n.Z,{href:e,className:(0,l.Z)(i.tag,a?i.tagWithCount:i.tagRegular)},t,a&&r.createElement("span",null,a))}}}]);