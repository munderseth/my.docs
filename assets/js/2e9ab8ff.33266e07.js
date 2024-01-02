"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},c="Containers",l={unversionedId:"github/containers",id:"github/containers",title:"Containers",description:"Devcontainder.json",source:"@site/docs/github/containers.md",sourceDirName:"github",slug:"/github/containers",permalink:"/my.docs/github/containers",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/github/containers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"VS Code",permalink:"/my.docs/github/vs-code"},next:{title:"Notes",permalink:"/my.docs/github/stuff"}},u={},m=[{value:"Devcontainder.json",id:"devcontainderjson",level:2},{value:"Codespaces",id:"codespaces",level:2},{value:"Default Container",id:"default-container",level:3},{value:"Cost",id:"cost",level:3},{value:"Images",id:"images",level:3},{value:"Testspace",id:"testspace",level:3},{value:"Azure",id:"azure",level:4},{value:"CircleCI",id:"circleci",level:4},{value:"Features",id:"features",level:3},{value:"References",id:"references",level:2},{value:"Doc",id:"doc",level:3},{value:"Articles",id:"articles",level:4}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"containers"},"Containers"),(0,i.kt)("h2",{id:"devcontainderjson"},"Devcontainder.json"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://containers.dev/implementors/json_reference/#general-properties"},"devcontainer.json properties")),(0,i.kt)("li",{parentName:"ul"},"Environment variables. Note requires rebuilding.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'"containerEnv": {\n    "RAILS_ENV": "test",\n    "MYSQL_PWD": "root"\n}\n')))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,'".devcontainer/devcontainer.json":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "name": "Sandbox Container",\n#   "image": "mcr.microsoft.com/devcontainers/ruby",\n    "image": "mcr.microsoft.com/devcontainers/base:ubuntu",\n    "features": {\n        "ghcr.io/devcontainers-contrib/features/mysql-homebrew:1": {}\n    }\n}\n')),(0,i.kt)("h2",{id:"codespaces"},"Codespaces"),(0,i.kt)("h3",{id:"default-container"},"Default Container"),(0,i.kt)("p",null,"Default container do ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-cloud@latest/codespaces/troubleshooting/troubleshooting-included-usage#storage-usage-for-your-base-dev-container"},"not paid for storage"),"."),(0,i.kt)("p",null,"Definition ID: ",(0,i.kt)("inlineCode",{parentName:"p"},"univeral")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"devcontainer-info\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/devcontainers/images/tree/main/src/universal"},"univeral image"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/devcontainers/images/blob/main/src/universal/history/dev.md#contents"},"Content"))),(0,i.kt)("h3",{id:"cost"},"Cost"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2-core for 1 day is ",(0,i.kt)("inlineCode",{parentName:"li"},"$2.80"),"  ($0.18 x 2 x 8); 1 month is ",(0,i.kt)("inlineCode",{parentName:"li"},"$56.00")," using 20 days")),(0,i.kt)("h3",{id:"images"},"Images"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/devcontainers/images/tree/main/src"},"https://github.com/devcontainers/images/tree/main/src"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/devcontainers/images/tree/main/src/base-ubuntu"},"https://github.com/devcontainers/images/tree/main/src/base-ubuntu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/devcontainers/images/tree/main/src/ruby"},"https://github.com/devcontainers/images/tree/main/src/ruby")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/devcontainers/images/tree/main/src/ruby"},"https://github.com/devcontainers/images/tree/main/src/ruby")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-dev-containers"},"https://github.com/microsoft/vscode-dev-containers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-dev-containers/tree/main/containers/ruby"},"https://github.com/microsoft/vscode-dev-containers/tree/main/containers/ruby"))))),(0,i.kt)("h3",{id:"testspace"},"Testspace"),(0,i.kt)("h4",{id:"azure"},"Azure"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml#software"},"ubuntu-20.04"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defined ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md"},"here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MySQL"),(0,i.kt)("li",{parentName:"ul"},"Chrome"),(0,i.kt)("li",{parentName:"ul"},"Chrome Driver"),(0,i.kt)("li",{parentName:"ul"},"Etc")))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The GitHub Actions Runner uses this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/actions/runner-images/tree/main"},"image")))),(0,i.kt)("h4",{id:"circleci"},"CircleCI"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://registry.hub.docker.com/r/cimg/ruby"},"https://registry.hub.docker.com/r/cimg/ruby")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://registry.hub.docker.com/r/cimg/mariadb"},"https://registry.hub.docker.com/r/cimg/mariadb"))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://containers.dev/features"},"https://containers.dev/features"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/devcontainers-contrib/features/tree/main/src/mysql-homebrew"},"https://github.com/devcontainers-contrib/features/tree/main/src/mysql-homebrew"))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("h3",{id:"doc"},"Doc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/enterprise-cloud@latest/codespaces"},"https://docs.github.com/en/enterprise-cloud@latest/codespaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://containers.dev/"},"https://containers.dev/"))),(0,i.kt)("h4",{id:"articles"},"Articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ianmitchell.dev/blog/creating-devcontainers-for-vs-code-and-github-codespaces"},"https://ianmitchell.dev/blog/creating-devcontainers-for-vs-code-and-github-codespaces"))))}d.isMDXComponent=!0}}]);