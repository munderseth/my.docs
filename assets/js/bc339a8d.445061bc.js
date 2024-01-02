"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[844],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=l,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},399:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:4},p="MySQL",i={unversionedId:"Linux/mysql",id:"Linux/mysql",title:"MySQL",description:"Installation",source:"@site/docs/Linux/mysql.md",sourceDirName:"Linux",slug:"/Linux/mysql",permalink:"/my.docs/Linux/mysql",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/Linux/mysql.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"NPM",permalink:"/my.docs/Linux/packages"},next:{title:"Chrome",permalink:"/my.docs/Linux/chrome"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Codespaces",id:"codespaces",level:2},{value:"Commands",id:"commands",level:3},{value:"Root password blank",id:"root-password-blank",level:4},{value:"Reset Password",id:"reset-password",level:4},{value:"Text File Commands",id:"text-file-commands",level:4},{value:"Notes",id:"notes",level:3},{value:"References",id:"references",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql"},"MySQL"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt-get install mysql-server libmysqlclient-dev -y\n")),(0,o.kt)("p",null,"Skip for Now! Root ",(0,o.kt)("strong",{parentName:"p"},"password")," empty."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mysql_secure_installation\n")),(0,o.kt)("h2",{id:"codespaces"},"Codespaces"),(0,o.kt)("p",null,"Some extra steps are required."),(0,o.kt)("p",null,"Change the permissions on ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chmod -R 777 /var/run/mysqld/\n")),(0,o.kt)("p",null,"Change the way the ",(0,o.kt)("inlineCode",{parentName:"p"},"root@localhost")," is authenticated. Otherwise get ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost"},"Access Denied"),". Also refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://trendoceans.com/solve-error-1698-28000/"},"article"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mysql\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';\n")),(0,o.kt)("p",null,"Can check it using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USE mysql;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT User, Host, plugin FROM mysql.user;\n")),(0,o.kt)("p",null,"Bash script to automate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt-get install mysql-server libmysqlclient-dev -y\nsudo chmod -R 777 /var/run/mysqld/\nsudo service mysql start\nsudo mysql < rootuserpwd.sql\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("em",{parentName:"p"},"rootuserpwd.sql"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';\n")),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Mysql Version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql --version\n")),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -V\n")),(0,o.kt)("p",null,"Login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mysql\n")),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -u root -p\n")),(0,o.kt)("p",null,"Database status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service mysql status\n")),(0,o.kt)("p",null,"Stop Database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service mysql stop\n")),(0,o.kt)("p",null,"Start Database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service mysql start\n")),(0,o.kt)("h4",{id:"root-password-blank"},"Root password blank"),(0,o.kt)("p",null,"First login:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -u root -p\n")),(0,o.kt)("p",null,"Set to ",(0,o.kt)("strong",{parentName:"p"},"blank"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SET PASSWORD FOR 'root'@'localhost' = '';\n")),(0,o.kt)("h4",{id:"reset-password"},"Reset Password"),(0,o.kt)("p",null,"Reference article - ",(0,o.kt)("a",{parentName:"p",href:"https://www.techrepublic.com/article/how-to-set-change-and-recover-a-mysql-root-password/"},"https://www.techrepublic.com/article/how-to-set-change-and-recover-a-mysql-root-password/")),(0,o.kt)("p",null,"Create a initialize file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo \"ALTER USER 'root'@'localhost' IDENTIFIED BY 'mark';\" >> ~/mysql-pwd\n")),(0,o.kt)("p",null,"Stop mysql:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service mysql stop\n")),(0,o.kt)("p",null,"Initialize:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mysqld -init-file=~/mysql-pwd\n")),(0,o.kt)("p",null,"Start again"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service mysql start\n")),(0,o.kt)("p",null,"Check:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -u root -p\n")),(0,o.kt)("h4",{id:"text-file-commands"},"Text File Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql < reset_root_password.sql>\n")),(0,o.kt)("p",null,"Where the file contains:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';\n")),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MYSQL_PWD")," is an environment variable that can be set for the ",(0,o.kt)("em",{parentName:"li"},"root")," password.")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04"},"Install MySQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/how-to-fix-can-t-connect-to-local-mysql-server-through-socket-var-run-mysqld-mysqld-sock"},"Install MySQL Fix Permissions"))))}d.isMDXComponent=!0}}]);