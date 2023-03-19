"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[849],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),l=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||r;return a?i.createElement(d,o(o({ref:t},c),{},{components:a})):i.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>w,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var i=a(3905),n=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&c(e,a,t[a]);return e},m=(e,t)=>r(e,o(t)),h=(e,t)=>{var a={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&l.call(e,i)&&(a[i]=e[i]);return a};const d={title:"FAQ",description:"Frequently asked questions, and answers"},f=void 0,g={unversionedId:"chatgpt/faq",id:"chatgpt/faq",title:"FAQ",description:"Frequently asked questions, and answers",source:"@site/docs/chatgpt/faq.md",sourceDirName:"chatgpt",slug:"/chatgpt/faq",permalink:"/chatgpt/faq",draft:!1,editUrl:"https://github.com/lencx/app/tree/main/docs/chatgpt/faq.md",tags:[],version:"current",lastUpdatedBy:"lencx",lastUpdatedAt:1679221478,formattedLastUpdatedAt:"Mar 19, 2023",frontMatter:{title:"FAQ",description:"Frequently asked questions, and answers"},sidebar:"chatgpt",previous:{title:"Prompts",permalink:"/chatgpt/prompts"},next:{title:"Config",permalink:"/chatgpt/config"}},y={},b=[{value:"Is it safe to use?",id:"is-it-safe-to-use",level:2},{value:"Able to set proxy?",id:"able-to-set-proxy",level:2},{value:"Which errors are <strong>not</strong> caused by this program, but OpenAI?",id:"which-errors-are-not-caused-by-this-program-but-openai",level:2},{value:"I can&#39;t close the program with the close button,why?",id:"i-cant-close-the-program-with-the-close-buttonwhy",level:2},{value:"Why this program doesn&#39;t meet some palatform-specific requirements(e.g. config file location)?",id:"why-this-program-doesnt-meet-some-palatform-specific-requirementseg-config-file-location",level:2},{value:"Why does this program not support xxx architecture(e.g. Mac arm arch)/xxx packaging(e.g. flatpack)?",id:"why-does-this-program-not-support-xxx-architectureeg-mac-arm-archxxx-packagingeg-flatpack",level:2},{value:"Out of sync login status between multiple windows",id:"out-of-sync-login-status-between-multiple-windows",level:2},{value:"Platform-specific issues",id:"platform-specific-issues",level:2},{value:"Mac",id:"mac",level:3},{value:"Developer cannot be verified?",id:"developer-cannot-be-verified",level:4},{value:"Minimum supported system version",id:"minimum-supported-system-version",level:4},{value:"MacOS macos_aarch64 seems broken",id:"macos-macos_aarch64-seems-broken",level:4},{value:"Windows",id:"windows",level:3},{value:"error code: STATUS_INVALID_IMAGE_HASH",id:"error-code-status_invalid_image_hash",level:4},{value:"Linux",id:"linux",level:3},{value:"missing libthai.so.0 in AppImage build",id:"missing-libthaiso0-in-appimage-build",level:4}],k={toc:b},v="wrapper";function w(e){var t=e,{components:a}=t,n=h(t,["components"]);return(0,i.kt)(v,m(u(u({},k),n),{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",u({},{id:"is-it-safe-to-use"}),"Is it safe to use?"),(0,i.kt)("p",null,"It's safe, just a wrapper for ",(0,i.kt)("a",u({parentName:"p"},{href:"https://chat.openai.com/"}),"OpenAI ChatGPT website"),", no other data transfer exists (you can check the source code)."),(0,i.kt)("h2",u({},{id:"able-to-set-proxy"}),"Able to set proxy?"),(0,i.kt)("p",null,"We have't found a way to set proxy in this program yet (",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/tauri-apps/tauri"}),"tauri")," just not support this feature), but the system proxy will be used automatically."),(0,i.kt)("admonition",u({},{type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/lencx/ChatGPT"}),"ChatGPT")," is based on ",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/tauri-apps/tauri"}),"tauri"),", which is still in active development stage with some shortcomings.")),(0,i.kt)("h2",u({},{id:"which-errors-are-not-caused-by-this-program-but-openai"}),"Which errors are ",(0,i.kt)("strong",{parentName:"h2"},"not")," caused by this program, but OpenAI?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"verify you are human"),(0,i.kt)("li",{parentName:"ul"},"OpenAI's services are not available in your country."),(0,i.kt)("li",{parentName:"ul"},"You do not have access to chat.openai.com. Error code: 1020"),(0,i.kt)("li",{parentName:"ul"},"ChatGPT is at capacity right now"),(0,i.kt)("li",{parentName:"ul"},"Checking if the site connection is secure"),(0,i.kt)("li",{parentName:"ul"},"Can't login")),(0,i.kt)("admonition",u({},{type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},"At this stage, ",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/lencx/ChatGPT"}),"ChatGPT")," is just a wrapper of ",(0,i.kt)("a",u({parentName:"p"},{href:"https://chat.openai.com/"}),"OpenAI ChatGPT website")," with some useful extensions.\nSo if you can't use ChatGPT in ",(0,i.kt)("strong",{parentName:"p"},"your browser"),", it means you also ",(0,i.kt)("strong",{parentName:"p"},"can't")," use it in ",(0,i.kt)("strong",{parentName:"p"},"this program"),".We have answered above in detail which problems are caused by OpenAI and have nothing to do with this program.\n",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/lencx/ChatGPT/issues"}),"issues")," ralated to this problem will be closed, but you can still ask questions in ",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/lencx/ChatGPT/discussions"}),"discussions"))),(0,i.kt)("h2",u({},{id:"i-cant-close-the-program-with-the-close-buttonwhy"}),"I can't close the program with the close button,why?"),(0,i.kt)("p",null,"This application is positioned as a tool for high frequency use, and the reason it cannot be closed by the window button is to prevent users from accidentally touching it.\nPlease use the shortcut ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Q")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Quit")," in the menu to close the application.\nyou can join the discussion ",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/lencx/ChatGPT/discussions/205"}),"here")," to discuss this issue."),(0,i.kt)("h2",u({},{id:"why-this-program-doesnt-meet-some-palatform-specific-requirementseg-config-file-location"}),"Why this program doesn't meet some palatform-specific requirements(e.g. config file location)?"),(0,i.kt)("p",null,"There is a trade-off: focus on developing some platform-specific functions and improvements(with a lot of compatibility issues and platform-specific code) or give priority to developing cross-platform functions and improvements.At the current stage (early stage of the project), we may always prefer the latter."),(0,i.kt)("admonition",u({},{type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},"Of course, we welcome anyone to open PRs to implement any exciting functions or improvements for this application at any time, whether platform-specificed or not.")),(0,i.kt)("h2",u({},{id:"why-does-this-program-not-support-xxx-architectureeg-mac-arm-archxxx-packagingeg-flatpack"}),"Why does this program not support xxx architecture(e.g. Mac arm arch)/xxx packaging(e.g. flatpack)?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use Github Actions to build this program, and the script is hard to be modified to us now."),(0,i.kt)("li",{parentName:"ul"},"We don't know much about the packaging of Linux, and we don't have the corresponding environment to test them.")),(0,i.kt)("admonition",u({},{type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"If you are familiar with the packaging we haven't supported of Linux, you can open an issue to discuss it or open a PR to implement it.")),(0,i.kt)("h2",u({},{id:"out-of-sync-login-status-between-multiple-windows"}),"Out of sync login status between multiple windows"),(0,i.kt)("p",null,"If you have already logged in in the main window, but the system tray window shows that you are not logged in, you can fix it by restarting the application (Menu -> Preferences -> Restart ChatGPT)."),(0,i.kt)("h2",u({},{id:"platform-specific-issues"}),"Platform-specific issues"),(0,i.kt)("h3",u({},{id:"mac"}),"Mac"),(0,i.kt)("h4",u({},{id:"developer-cannot-be-verified"}),"Developer cannot be verified?"),(0,i.kt)("p",null,(0,i.kt)("a",u({parentName:"p"},{href:"https://support.apple.com/en-sg/guide/mac-help/mh40616/mac"}),"Open a Mac app from an unidentified developer")),(0,i.kt)("h4",u({},{id:"minimum-supported-system-version"}),"Minimum supported system version"),(0,i.kt)("p",null,"Our users have reported that the minimum supported system version is 10.14.6+, but we have not tested it."),(0,i.kt)("h4",u({},{id:"macos-macos_aarch64-seems-broken"}),"MacOS macos_aarch64 seems broken"),(0,i.kt)("p",null,"Open a terminal and try the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"xattr -r -d com.apple.quarantine /YOUR_PATH/ChatGPT.app\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/lencx/ChatGPT/issues/461"}),"https://github.com/lencx/ChatGPT/issues/461")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/lencx/ChatGPT/issues/595"}),"https://github.com/lencx/ChatGPT/issues/595"))),(0,i.kt)("h3",u({},{id:"windows"}),"Windows"),(0,i.kt)("h4",u({},{id:"error-code-status_invalid_image_hash"}),"error code: STATUS_INVALID_IMAGE_HASH"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/tauri-apps/tauri/issues/4659#issuecomment-1452897588"}),"https://github.com/tauri-apps/tauri/issues/4659#issuecomment-1452897588"))),(0,i.kt)("h3",u({},{id:"linux"}),"Linux"),(0,i.kt)("h4",u({},{id:"missing-libthaiso0-in-appimage-build"}),"missing libthai.so.0 in AppImage build"),(0,i.kt)("p",null,"If you encounter this problem, please install the ",(0,i.kt)("inlineCode",{parentName:"p"},"libthai")," package.It's a issue caused by ",(0,i.kt)("inlineCode",{parentName:"p"},"AppImage")," packaging."))}w.isMDXComponent=!0}}]);