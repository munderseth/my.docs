"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[185],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=a(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||p;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<p;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3644:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return s}});var n=r(7462),o=r(3366),p=(r(7294),r(3905)),i=["components"],u={sidebar_position:1,title:"Puppeteer"},c="Puppeteer",a={unversionedId:"tools/puppeteer",id:"tools/puppeteer",title:"Puppeteer",description:"Running notes for GitHub.",source:"@site/docs/tools/puppeteer.md",sourceDirName:"tools",slug:"/tools/puppeteer",permalink:"/my.docs/tools/puppeteer",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/tools/puppeteer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Puppeteer"},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/my.docs/category/tools"},next:{title:"chatGPT",permalink:"/my.docs/tools/chatGPT"}},l={},s=[{value:"Setup",id:"setup",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"puppeteer"},"Puppeteer"),(0,p.kt)("p",null,"Running notes for GitHub."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://pptr.dev/"},"https://pptr.dev/")),(0,p.kt)("h2",{id:"setup"},"Setup"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm i puppeteer\n")))}d.isMDXComponent=!0}}]);