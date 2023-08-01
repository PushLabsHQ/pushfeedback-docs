"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[1445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4,title:"React"},i="Feedback widget for React",p={unversionedId:"installation/react",id:"installation/react",title:"React",description:"Integrate the PushFeedback tool into your React application using the Node Package Manager (npm). Here's a step-by-step guide to help you set it up.",source:"@site/docs/installation/react.md",sourceDirName:"installation",slug:"/installation/react",permalink:"/installation/react",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"React"},sidebar:"tutorialSidebar",previous:{title:"Wordpress",permalink:"/installation/wordpress"},next:{title:"Docusaurus",permalink:"/installation/nextjs"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Next steps",id:"next-steps",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-widget-for-react"},"Feedback widget for React"),(0,r.kt)("p",null,"Integrate the PushFeedback tool into your React application using the Node Package Manager (npm). Here's a step-by-step guide to help you set it up."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/signup"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A React application and Node.js and npm installed. If not, download and install them from ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js official website"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback\n")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're using yarn as your package manager, run yarn add pushfeedback instead of the npm command above.")),(0,r.kt)("p",{parentName:"li"},"This will download and install the PushFeedback package into your project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the main component where you wish to place the feedback button (often ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.js"),"), embed the PushFeedback button:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\n\nimport { applyPolyfills, defineCustomElements } from 'pushfeedback/loader';\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.css';\n\nfunction App() {\n    useEffect(() => {\n        applyPolyfills().then(() => {\n        defineCustomElements(window);\n    });\n\n    return (\n        <div className=\"App\">\n        {/* Other components and content */}\n        <feedback-button project=\"<YOUR_PROJECT_ID>\">Send feedback</feedback-button>\n        </div>\n    );\n}\n\nexport default App;\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,r.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),"."),(0,r.kt)("admonition",{parentName:"li",title:"TypeScript projects",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're using TypeScript in your React project, you might encounter type errors related to the feedback-button. To fix this, you can extend the global type definitions to include the custom elements from PushFeedback."),(0,r.kt)("p",{parentName:"admonition"},"In a ",(0,r.kt)("inlineCode",{parentName:"p"},"d.ts")," file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"src/global.d.ts"),"), add:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"declare namespace JSX {\n    interface IntrinsicElements {\n        'feedback-button': any;\n    }\n}\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start your Next.js app by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Dive deeper into customization and explore additional features in our ",(0,r.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section of the documentation."))}d.isMDXComponent=!0}}]);