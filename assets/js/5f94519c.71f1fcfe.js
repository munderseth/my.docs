"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[102],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,k=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:3},l="Packages",s={unversionedId:"github/packages",id:"github/packages",title:"Packages",description:"Running notes for GitHub.",source:"@site/docs/github/packages.md",sourceDirName:"github",slug:"/github/packages",permalink:"/my.docs/github/packages",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/github/packages.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"VS Code",permalink:"/my.docs/github/vs-code"},next:{title:"Stuff",permalink:"/my.docs/github/stuff"}},c={},u=[{value:"Publish",id:"publish",level:2},{value:"Install",id:"install",level:3},{value:"From Repo",id:"from-repo",level:3}],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"packages"},"Packages"),(0,i.kt)("p",null,"Running notes for GitHub."),(0,i.kt)("p",null,"Reference - ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry"},"npm registry")),(0,i.kt)("h2",{id:"publish"},"Publish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish")," a package"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("em",{parentName:"li"},"publishConfig")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"https://npm.pkg.github.com")," in the ",(0,i.kt)("strong",{parentName:"li"},"package.json")," file.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'"publishConfig": {\n  "registry": "https://npm.pkg.github.com/"\n},\n'))),(0,i.kt)("li",{parentName:"ul"},"Does ",(0,i.kt)("strong",{parentName:"li"},"not")," require ",(0,i.kt)("inlineCode",{parentName:"li"},".npmrc")," when using ",(0,i.kt)("em",{parentName:"li"},"publishConfig")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN")," for authenticating"),(0,i.kt)("li",{parentName:"ul"},"Example (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/s2technologies/testspace.test.functions"},"test functions"),")",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- uses: actions/setup-node@v3\n    with:\n      node-version: '14'\n      registry-url: https://npm.pkg.github.com/\n  - name: Deploy to GH NPM\n    run: |\n      npm publish --only=production\n    env:\n      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that you can have a private repo and a public package. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility"},"access control"),". A user would still require to authenticate via a personal access token though, but would not need access to the org/repo containing the package."))),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,"Requires an ",(0,i.kt)("strong",{parentName:"p"},"access token")," even if public; have to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token"},"authenticate")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To ",(0,i.kt)("inlineCode",{parentName:"p"},"Install")," a package"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},".npmrc")," file (",(0,i.kt)("strong",{parentName:"li"},"Only pactical approach for local install"),")",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"@s2technologies:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${GH_PAT_FOR_TF}\n"))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/developers"},"Personal Access Token (PAT)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read:packages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete_repo")," - if using ",(0,i.kt)("em",{parentName:"li"},"tf")," to create projects"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Can install ",(0,i.kt)("em",{parentName:"p"},"without")," ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," via a Workflow and no ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," using ",(0,i.kt)("strong",{parentName:"p"},"setup-node")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- uses: actions/setup-node@v3\n  with:\n    node-version: '14'\n    registry-url: https://npm.pkg.github.com/\n- name: Package Install\n  env:\n    NODE_AUTH_TOKEN: ${{ secrets.GH_PAT_FOR_TF}}\n  run: npm install\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note, when switching to a sub-folder can't get install to work without a ",(0,i.kt)("inlineCode",{parentName:"li"},".npmrc")," file"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Can log in via cli to authenticate a personal access token"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ npm login --registry=https://npm.pkg.github.com\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")))),(0,i.kt)("h3",{id:"from-repo"},"From Repo"),(0,i.kt)("p",null,"Reference - ",(0,i.kt)("a",{parentName:"p",href:"https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub"},"https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install https://github.com/s2technologies/testspace.test.functions#main\n")))}g.isMDXComponent=!0}}]);