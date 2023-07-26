"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[1540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="Sphinx",p={unversionedId:"installation/sphinx",id:"installation/sphinx",title:"Sphinx",description:"If you're using Sphinx to generate your documentation, you can still easily integrate the PushFeedback widget to gather feedback from users. Here's a step-by-step guide on how to incorporate the PushFeedback widget into your Sphinx-based documentation.",source:"@site/docs/installation/sphinx.md",sourceDirName:"installation",slug:"/installation/sphinx",permalink:"/installation/sphinx",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Docusaurus",permalink:"/installation/docusaurus"},next:{title:"Configuration",permalink:"/category/configuration"}},l={},s=[{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sphinx"},"Sphinx"),(0,r.kt)("p",null,"If you're using Sphinx to generate your documentation, you can still easily integrate the PushFeedback widget to gather feedback from users. Here's a step-by-step guide on how to incorporate the PushFeedback widget into your Sphinx-based documentation."),(0,r.kt)("h2",{id:"prerequisites"},(0,r.kt)("strong",{parentName:"h2"},"Prerequisites")),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/signup"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A Sphinx project.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"To integrate the PushFeedback widget into your Sphinx site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Sphinx configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf.py"),") in your project's root directory. Add the following code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"html_context")," section:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"html_context = {\n    'css_files': [\n        # Existing CSS files (if any)\n        'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css',\n    ],\n    'script_files': [\n        # Existing JS scripts (if any)\n        'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js',\n    ],\n}\n")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you already have a ",(0,r.kt)("inlineCode",{parentName:"p"},"css_files")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"script_files")," list inside ",(0,r.kt)("inlineCode",{parentName:"p"},"html_context"),", just append the PushFeedback entries without duplicating the entire structure."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You'll want the feedback button to appear on each page of your documentation. One way to ensure this is to insert it into the Sphinx theme's footer. To do this:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"_templates")," directory in your Sphinx project if it doesn't already exist."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"_templates"),", create a file named ",(0,r.kt)("inlineCode",{parentName:"li"},"layout.html"),"."),(0,r.kt)("li",{parentName:"ol"},"Now, inside layout.html, extend the base layout and add your feedback button:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{% extends "!layout.html" %}\n\n{% block footer %}\n{{ super() }}\n<feedback-button project="<YOUR_PROJECT_ID>">Send feedback</feedback-button>\n{% endblock %}\n')),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,r.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),"."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open conf.py in your Sphinx project root and ensure you've added ",(0,r.kt)("inlineCode",{parentName:"p"},"_templates")," to the templates path:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"templates_path = ['_templates']\n")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now build your Sphinx documentation:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"make html\n")),(0,r.kt)("p",{parentName:"li"},"Once built, open your documentation in a web browser. Verify that the feedback button appears and functions correctly on your site."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Dive deeper into customization and explore additional features in our ",(0,r.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section of the documentation."))}d.isMDXComponent=!0}}]);