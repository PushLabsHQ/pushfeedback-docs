"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[9191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3,title:"Wordpress"},o="Wordpress",s={unversionedId:"installation/wordpress",id:"installation/wordpress",title:"Wordpress",description:"PushFeedback provides a streamlined method to gather user feedback directly from your WordPress site. This guide outlines the steps required to seamlessly integrate the PushFeedback widget into your WordPress website.",source:"@site/docs/installation/wordpress.md",sourceDirName:"installation",slug:"/installation/wordpress",permalink:"/installation/wordpress",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Wordpress"},sidebar:"tutorialSidebar",previous:{title:"NPM",permalink:"/installation/npm"},next:{title:"React",permalink:"/installation/react"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wordpress"},"Wordpress"),(0,n.kt)("p",null,"PushFeedback provides a streamlined method to gather user feedback directly from your WordPress site. This guide outlines the steps required to seamlessly integrate the PushFeedback widget into your WordPress website."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,n.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/signup"},"sign up for free"),"."),(0,n.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,n.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,n.kt)("li",{parentName:"ul"},"A Wordpress website.")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Always back up your theme files before making modifications. In case of issues, the backup allows you to restore the original files.")),(0,n.kt)("p",null,"To embed the PushFeedback widget into your WordPress site:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access the admin dashboard of your WordPress website by navigating to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://yourwebsite.com/wp-admin/"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the PushFeedback styles and scripts:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Appearance > Theme Editor"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the right sidebar, select the ",(0,n.kt)("inlineCode",{parentName:"p"},"header.php")," file to edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," section.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Insert the following code within the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," section:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Initialize the PushFeedback widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"><\/script>\n'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To insert the feedback button just before the ",(0,n.kt)("inlineCode",{parentName:"p"},"</body>")," tag:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"While still in the ",(0,n.kt)("strong",{parentName:"p"},"Theme Editor"),", locate and click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"footer.php")," file from the right sidebar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Just before the ",(0,n.kt)("inlineCode",{parentName:"p"},"</body>")," tag, paste the following snippet:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<feedback-button project="<YOUR_PROJECT_ID>">Send feedback</feedback-button>\n')),(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,n.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you've saved your changes, visit your WordPress website in a web browser. Confirm that the feedback button is visible and operational."))),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"Dive deeper into customization and explore additional features in our ",(0,n.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section of the documentation."))}u.isMDXComponent=!0}}]);