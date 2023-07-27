"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[102],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],l={sidebar_position:3},o="NPM",s={unversionedId:"github/packages",id:"github/packages",title:"NPM",description:"Notes are focused on the GitHub npm registry usage.",source:"@site/docs/github/packages.md",sourceDirName:"github",slug:"/github/packages",permalink:"/my.docs/github/packages",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/github/packages.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"VS Code",permalink:"/my.docs/github/vs-code"},next:{title:"Stuff",permalink:"/my.docs/github/stuff"}},u={},c=[{value:"Basics",id:"basics",level:2},{value:"Updates",id:"updates",level:3},{value:"Sematic Versioning",id:"sematic-versioning",level:2},{value:"Publish",id:"publish",level:2},{value:"Install",id:"install",level:2},{value:"From Repo",id:"from-repo",level:2},{value:"Notes",id:"notes",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"npm"},"NPM"),(0,i.kt)("p",null,"Notes are focused on the GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry"},"npm registry")," usage."),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"Some basic info."),(0,i.kt)("p",null,"Setup initial package .json file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm init -y\n")),(0,i.kt)("p",null,"Save packages under teh ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," object in package .json file. Not install when production used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save-dev <package name>\n")),(0,i.kt)("p",null,"Update an existing package to the latest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm update <package name>\n")),(0,i.kt)("p",null,"Uninstall an existing package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm uninstall <package name>\n")),(0,i.kt)("p",null,"Only production installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --production\n")),(0,i.kt)("h3",{id:"updates"},"Updates"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.belter.io/npm-outdated-update/"},'Quick Tip: "npm outdated" and "npm update"')),(0,i.kt)("p",null,"To check package updating status:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm outdated\n")),(0,i.kt)("p",null,"Update an existing package to the latest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm update <package name>\n")),(0,i.kt)("p",null,"Reference info on ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version/16074029#16074029"},"stackoverflow")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -g npm-check-updates\nncd -u\nnpm install\n")),(0,i.kt)("h2",{id:"sematic-versioning"},"Sematic Versioning"),(0,i.kt)("p",null,"Recommended to start with ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/about-semantic-versioning"},"https://docs.npmjs.com/about-semantic-versioning"))),(0,i.kt)("h2",{id:"publish"},"Publish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish")," a package"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("em",{parentName:"li"},"publishConfig")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"https://npm.pkg.github.com")," in the ",(0,i.kt)("strong",{parentName:"li"},"package.json")," file.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'"publishConfig": {\n  "registry": "https://npm.pkg.github.com/"\n},\n'))),(0,i.kt)("li",{parentName:"ul"},"Does ",(0,i.kt)("strong",{parentName:"li"},"not")," require ",(0,i.kt)("inlineCode",{parentName:"li"},".npmrc")," when using ",(0,i.kt)("em",{parentName:"li"},"publishConfig")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN")," for authenticating"),(0,i.kt)("li",{parentName:"ul"},"Example (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/s2technologies/testspace.test.functions"},"test functions"),")",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- uses: actions/setup-node@v3\n    with:\n      node-version: '14'\n      registry-url: https://npm.pkg.github.com/\n  - name: Deploy to GH NPM\n    run: |\n      npm publish --only=production\n    env:\n      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that you can have a private repo and a public package. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility"},"access control"),". A user would still require to authenticate via a personal access token though, but would not need access to the org/repo containing the package."))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Requires an ",(0,i.kt)("strong",{parentName:"p"},"access token")," even if public; have to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token"},"authenticate")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To ",(0,i.kt)("inlineCode",{parentName:"p"},"Install")," a package"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},".npmrc")," file (",(0,i.kt)("strong",{parentName:"li"},"Only pactical approach for local install"),")",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"@s2technologies:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${GH_PAT_FOR_TF}\n"))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/developers"},"Personal Access Token (PAT)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read:packages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete_repo")," - if using ",(0,i.kt)("em",{parentName:"li"},"tf")," to create projects"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Can install ",(0,i.kt)("em",{parentName:"p"},"without")," ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," via a Workflow and no ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," using ",(0,i.kt)("strong",{parentName:"p"},"setup-node")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- uses: actions/setup-node@v3\n  with:\n    node-version: '14'\n    registry-url: https://npm.pkg.github.com/\n- name: Package Install\n  env:\n    NODE_AUTH_TOKEN: ${{ secrets.GH_PAT_FOR_TF}}\n  run: npm install\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note, when switching to a sub-folder can't get install to work without a ",(0,i.kt)("inlineCode",{parentName:"li"},".npmrc")," file"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Can log in via cli to authenticate a personal access token"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ npm login --registry=https://npm.pkg.github.com\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")))),(0,i.kt)("h2",{id:"from-repo"},"From Repo"),(0,i.kt)("p",null,"Reference - ",(0,i.kt)("a",{parentName:"p",href:"https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub"},"https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install https://github.com/user_name/node_project_name\n")),(0,i.kt)("p",null,"For specific branch add ",(0,i.kt)("inlineCode",{parentName:"p"},"#branch-name")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install https://github.com/s2technologies/testspace.test.functions#main\n")),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can install package via repo. The ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," will be updated. The repo can thus install using ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),". But it will ",(0,i.kt)("strong",{parentName:"li"},"not")," work when using GitHub Workflow. The installation just hangs. Reference ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/68887428/npm-in-github-actions-env-not-installing-packages"},"here"),". The ",(0,i.kt)("strong",{parentName:"li"},"workaround"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ul"},"install in 2 steps in the workflow:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- run: npm install https://github.com/user_name/node_project_name\n- run: npm install\n"))))),(0,i.kt)("li",{parentName:"ul"},"Using a ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," repo is more difficult (requires ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"key"),")")))}k.isMDXComponent=!0}}]);