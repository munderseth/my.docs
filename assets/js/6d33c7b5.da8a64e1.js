"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[256],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={},c="NPM",l={unversionedId:"references/npm",id:"references/npm",title:"NPM",description:"Setup initial package .json file",source:"@site/docs/references/npm.md",sourceDirName:"references",slug:"/references/npm",permalink:"/my.docs/references/npm",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/references/npm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Styling",permalink:"/my.docs/references/misc"},next:{title:"My Repos",permalink:"/my.docs/repos"}},u={},s=[{value:"Use Repo",id:"use-repo",level:2},{value:"Updates",id:"updates",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"npm"},"NPM"),(0,a.kt)("p",null,"Setup initial package .json file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm init -y\n")),(0,a.kt)("p",null,"Save packages under teh ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," object in package .json file. Not install when production used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev <package name>\n")),(0,a.kt)("p",null,"Only production installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --production\n")),(0,a.kt)("h2",{id:"use-repo"},"Use Repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save git+https://<gitHost>/<userName>/<repoName>.git#master\n")),(0,a.kt)("h2",{id:"updates"},"Updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reference info on ",(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version/16074029#16074029"},"stackoverflow"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i -g npm-check-updates\nncd -u\nnpm install\n")))}m.isMDXComponent=!0}}]);