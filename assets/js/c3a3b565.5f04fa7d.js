"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),c=["components"],a={sidebar_position:1},l="Misc",s={unversionedId:"references/misc",id:"references/misc",title:"Misc",description:"Excel",source:"@site/docs/references/misc.md",sourceDirName:"references",slug:"/references/misc",permalink:"/my.docs/references/misc",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/references/misc.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MarkDoc",permalink:"/my.docs/Documentation/markdoc"},next:{title:"NPM",permalink:"/my.docs/references/npm"}},u={},p=[{value:"Excel",id:"excel",level:2},{value:"CSV",id:"csv",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"misc"},"Misc"),(0,i.kt)("h2",{id:"excel"},"Excel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a newline within a cell use ",(0,i.kt)("inlineCode",{parentName:"li"},"<alt><cr>")),(0,i.kt)("li",{parentName:"ul"},"How to convert a ",(0,i.kt)("em",{parentName:"li"},"hyper-link")," cell to plain text using the URL text",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ALT + F11")," to open Microsoft Visual Basic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Insert > Module")),(0,i.kt)("li",{parentName:"ul"},"Use the following code",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'   Sub Extracthyperlinks()\n   \'Updateby Extendoffice\n   Dim Rng As Range\n   Dim WorkRng As Range\n   On Error Resume Next\n   xTitleId = "KutoolsforExcel"\n   Set WorkRng = Application.Selection\n   Set WorkRng = Application.InputBox("Range", xTitleId, WorkRng.Address, Type:=8)\n   For Each Rng In WorkRng\n       If Rng.Hyperlinks.Count > 0 Then\n           Rng.Value = Rng.Hyperlinks.Item(1).Address\n       End If\n   Next\n   End Sub\n'))),(0,i.kt)("li",{parentName:"ul"},"Press ",(0,i.kt)("strong",{parentName:"li"},"F5")," to run the code"),(0,i.kt)("li",{parentName:"ul"},"Link to the article - ",(0,i.kt)("a",{parentName:"li",href:"https://www.extendoffice.com/documents/excel/1177-excel-extract-hyperlink-from-cell.html"},"https://www.extendoffice.com/documents/excel/1177-excel-extract-hyperlink-from-cell.html"))))),(0,i.kt)("h3",{id:"csv"},"CSV"),(0,i.kt)("p",null,"TBD"))}f.isMDXComponent=!0}}]);