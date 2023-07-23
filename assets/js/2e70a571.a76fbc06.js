"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[7143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},s="Docusaurus",i={unversionedId:"installation/docusaurus",id:"installation/docusaurus",title:"Docusaurus",description:"This guide walks you through the process of adding PushFeedback to your Docusaurus website.",source:"@site/docs/installation/docusaurus.md",sourceDirName:"installation",slug:"/installation/docusaurus",permalink:"/installation/docusaurus",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Wordpress",permalink:"/installation/wordpress"},next:{title:"Sphinx",permalink:"/installation/sphinx"}},u={},l=[{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:2},{value:"<strong>1. Install PushFeedback via npm</strong>",id:"1-install-pushfeedback-via-npm",level:2},{value:"<strong>2. Add PushFeedback Styles and Script</strong>",id:"2-add-pushfeedback-styles-and-script",level:2},{value:"<strong>a. Add to the <code>head</code> Array</strong>",id:"a-add-to-the-head-array",level:3},{value:"<strong>b. Add to the <code>scripts</code> Array</strong>",id:"b-add-to-the-scripts-array",level:3},{value:"<strong>3. Add the Feedback Button Component</strong>",id:"3-add-the-feedback-button-component",level:2},{value:"<strong>4. Build and Verify</strong>",id:"4-build-and-verify",level:2},{value:"<strong>Final Thoughts</strong>",id:"final-thoughts",level:2}],d={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docusaurus"},"Docusaurus"),(0,r.kt)("p",null,"This guide walks you through the process of adding PushFeedback to your Docusaurus website."),(0,r.kt)("h2",{id:"prerequisites"},(0,r.kt)("strong",{parentName:"h2"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Docusaurus site set up and running."),(0,r.kt)("li",{parentName:"ul"},"Familiarity with Docusaurus configuration and structure."),(0,r.kt)("li",{parentName:"ul"},"Your PushFeedback project ID.")),(0,r.kt)("h2",{id:"1-install-pushfeedback-via-npm"},(0,r.kt)("strong",{parentName:"h2"},"1. Install PushFeedback via npm")),(0,r.kt)("p",null,"Navigate to the root directory of your Docusaurus project using your terminal or command prompt. Install ",(0,r.kt)("inlineCode",{parentName:"p"},"pushfeedback")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm",metastring:"install pushfeedback --save",install:!0,pushfeedback:!0,"--save":!0},"")),(0,r.kt)("h2",{id:"2-add-pushfeedback-styles-and-script"},(0,r.kt)("strong",{parentName:"h2"},"2. Add PushFeedback Styles and Script")),(0,r.kt)("p",null,"In Docusaurus, the best place to add global styles and scripts is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file. Add the following:"),(0,r.kt)("h3",{id:"a-add-to-the-head-array"},(0,r.kt)("strong",{parentName:"h3"},"a. Add to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"head")," Array")),(0,r.kt)("p",null,"Find or add the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," array in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," and append the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{"},"  tagName: 'link',\n  rel: 'stylesheet',\n  href: 'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css',\n},\n")),(0,r.kt)("h3",{id:"b-add-to-the-scripts-array"},(0,r.kt)("strong",{parentName:"h3"},"b. Add to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"scripts")," Array")),(0,r.kt)("p",null,"Find or add the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," array in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," and append the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{"},"  tagName: 'script',\n  type: 'module',\n  src: 'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js',\n},\n")),(0,r.kt)("h2",{id:"3-add-the-feedback-button-component"},(0,r.kt)("strong",{parentName:"h2"},"3. Add the Feedback Button Component")),(0,r.kt)("p",null,"To display the feedback button across your entire Docusaurus site, consider adding it within the theme's layout components."),(0,r.kt)("p",null,"Navigate to your theme's layout component, which might be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/theme/Layout")," or similar. In the appropriate place, add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-<feedback-button",metastring:'project="<YOUR_PROJECT_ID>">Send feedback</feedback-button>',project:'"<YOUR_PROJECT_ID>">Send',"feedback</feedback-button>":!0},"")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your specific PushFeedback project ID."),(0,r.kt)("h2",{id:"4-build-and-verify"},(0,r.kt)("strong",{parentName:"h2"},"4. Build and Verify")),(0,r.kt)("p",null,"Rebuild your Docusaurus site and start the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm",metastring:"run build",run:!0,build:!0},"npm run serve\n")),(0,r.kt)("p",null,"Ensure the PushFeedback button displays and functions correctly on your Docusaurus site."),(0,r.kt)("h2",{id:"final-thoughts"},(0,r.kt)("strong",{parentName:"h2"},"Final Thoughts")),(0,r.kt)("p",null,"Collecting feedback on documentation and content is invaluable. With PushFeedback embedded into your Docusaurus site, you can effortlessly gather user insights and improve your content quality over time."))}p.isMDXComponent=!0}}]);