"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[256],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||c;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9103:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=r(3117),o=r(102),c=(r(7294),r(3905)),a=["components"],i={},p="NPM",s={unversionedId:"references/npm",id:"references/npm",title:"NPM",description:"Use Repo",source:"@site/docs/references/npm.md",sourceDirName:"references",slug:"/references/npm",permalink:"/my.docs/references/npm",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/references/npm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Styling",permalink:"/my.docs/references/misc"},next:{title:"Repos",permalink:"/my.docs/category/repos"}},u={},l=[{value:"Use Repo",id:"use-repo",level:2},{value:"Updates",id:"updates",level:2}],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"npm"},"NPM"),(0,c.kt)("h2",{id:"use-repo"},"Use Repo"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"npm install --save git+https://<gitHost>/<userName>/<repoName>.git#master\n")),(0,c.kt)("h2",{id:"updates"},"Updates"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Reference info on ",(0,c.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version/16074029#16074029"},"stackoverflow"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"npm i -g npm-check-updates\nncd -u\nnpm install\n")))}m.isMDXComponent=!0}}]);