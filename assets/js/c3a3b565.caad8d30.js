"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],a={sidebar_position:1},c="Styling",s={unversionedId:"references/misc",id:"references/misc",title:"Styling",description:"- Indenting 2nd lin of List Items",source:"@site/docs/references/misc.md",sourceDirName:"references",slug:"/references/misc",permalink:"/my.docs/references/misc",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/references/misc.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MarkDoc",permalink:"/my.docs/Documentation/markdoc"},next:{title:"NPM",permalink:"/my.docs/references/npm"}},u={},p=[{value:"Emojis",id:"emojis",level:2},{value:"Excel",id:"excel",level:2},{value:"CSV",id:"csv",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"styling"},"Styling"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://silvawebdesigns.com/css-indenting-second-line-li-list-items/"},"Indenting 2nd lin of List Items"))),(0,o.kt)("h2",{id:"emojis"},"Emojis"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hex/HTML Codes - ",(0,o.kt)("a",{parentName:"li",href:"https://dev.to/rodrigoodhin/list-of-emojis-hex-codes-35ma"},"https://dev.to/rodrigoodhin/list-of-emojis-hex-codes-35ma"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example usage - ","\ud83d\udc99"," Blue Heart")))),(0,o.kt)("h2",{id:"excel"},"Excel"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To create a newline within a cell use ",(0,o.kt)("inlineCode",{parentName:"li"},"<alt><cr>")),(0,o.kt)("li",{parentName:"ul"},"How to convert a ",(0,o.kt)("em",{parentName:"li"},"hyper-link")," cell to plain text using the URL text",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ALT + F11")," to open Microsoft Visual Basic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Insert > Module")),(0,o.kt)("li",{parentName:"ul"},"Use the following code",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'   Sub Extracthyperlinks()\n   \'Updateby Extendoffice\n   Dim Rng As Range\n   Dim WorkRng As Range\n   On Error Resume Next\n   xTitleId = "KutoolsforExcel"\n   Set WorkRng = Application.Selection\n   Set WorkRng = Application.InputBox("Range", xTitleId, WorkRng.Address, Type:=8)\n   For Each Rng In WorkRng\n       If Rng.Hyperlinks.Count > 0 Then\n           Rng.Value = Rng.Hyperlinks.Item(1).Address\n       End If\n   Next\n   End Sub\n'))),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("strong",{parentName:"li"},"F5")," to run the code"),(0,o.kt)("li",{parentName:"ul"},"Link to the article - ",(0,o.kt)("a",{parentName:"li",href:"https://www.extendoffice.com/documents/excel/1177-excel-extract-hyperlink-from-cell.html"},"https://www.extendoffice.com/documents/excel/1177-excel-extract-hyperlink-from-cell.html"))))),(0,o.kt)("h3",{id:"csv"},"CSV"),(0,o.kt)("p",null,"TBD"))}d.isMDXComponent=!0}}]);