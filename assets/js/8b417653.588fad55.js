"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4337:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:2},s="Rails",p={unversionedId:"languages/rails",id:"languages/rails",title:"Rails",description:"https://rubyonrails.org/",source:"@site/docs/languages/rails.md",sourceDirName:"languages",slug:"/languages/rails",permalink:"/my.docs/languages/rails",draft:!1,editUrl:"https://github.com/munderseth/my.docs/edit/main/docs/languages/rails.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/my.docs/languages/ruby"},next:{title:"JavaScript",permalink:"/my.docs/languages/javascript"}},c={},u=[{value:"Development",id:"development",level:2},{value:"Terms",id:"terms",level:3},{value:"MVC",id:"mvc",level:3},{value:"CRUD",id:"crud",level:3},{value:"Database",id:"database",level:3},{value:"Commands",id:"commands",level:3},{value:"Debugging",id:"debugging",level:4},{value:"Testing",id:"testing",level:2},{value:"Setup",id:"setup",level:3},{value:"References",id:"references",level:4},{value:"Codespaces",id:"codespaces",level:2},{value:"References",id:"references-1",level:2}],m={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rails"},"Rails"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rubyonrails.org/"},"https://rubyonrails.org/")),(0,l.kt)("p",null,"Reference repo - ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/munderseth/my.rails"},"https://github.com/munderseth/my.rails")),(0,l.kt)("p",null,"To create an example app:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rails new .\n")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-T")," - no tests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d mysql")," - use MySQL")),(0,l.kt)("p",null,"To force a reinstall of all gems:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bundle install --force\n")),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("h3",{id:"terms"},"Terms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CRUD - Create, Read, Update, Destore"),(0,l.kt)("li",{parentName:"ul"},"MVC - Model (db), View (pages), Controller (logic)"),(0,l.kt)("li",{parentName:"ul"},"erb - Embedded Ruby (template code within html)"),(0,l.kt)("li",{parentName:"ul"},"Capybara (ca.pa.bar.a) -")),(0,l.kt)("h3",{id:"mvc"},"MVC"),(0,l.kt)("p",null,"The model-view-controller (MVC) pattern"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Model-View-Controller",src:a(6907).Z,title:"Model View Controller",width:"523",height:"540"})),(0,l.kt)("h3",{id:"crud"},"CRUD"),(0,l.kt)("p",null,"Web applications involve CRUD -  ",(0,l.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Read"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Update"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")," - operations. Rails uses the term ",(0,l.kt)("strong",{parentName:"p"},"resource")," to represent a collection of routes, along with controller actions and views that perform CRUD on a database model (i.e. data)."),(0,l.kt)("p",null,"A method called ",(0,l.kt)("inlineCode",{parentName:"p"},"resource")," that creates conventional routes and helper methods."),(0,l.kt)("p",null,"Example for an ",(0,l.kt)("inlineCode",{parentName:"p"},"Article")," model:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Prefix Verb   URI Pattern                  Controller#Action\n        root GET    /                            articles#index\n    articles GET    /articles(.:format)          articles#index\n new_article GET    /articles/new(.:format)      articles#new\n     article GET    /articles/:id(.:format)      articles#show\n             POST   /articles(.:format)          articles#create\nedit_article GET    /articles/:id/edit(.:format) articles#edit\n             PATCH  /articles/:id(.:format)      articles#update\n             DELETE /articles/:id(.:format)      articles#destroy\n")),(0,l.kt)("p",null,"In addition, ",(0,l.kt)("inlineCode",{parentName:"p"},"article_path")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"article_url")," are created."),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Validations")," are rules that are checked before a ",(0,l.kt)("inlineCode",{parentName:"li"},"model")," object is saved.")),(0,l.kt)("h3",{id:"database"},"Database"),(0,l.kt)("p",null,"Drop:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bundle exec rake db:drop\n")),(0,l.kt)("p",null,"Create:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bundle exec rake db:create db:migrate\n")),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rails console")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rails routes --expanded")," - list all of the routes (refer ",(0,l.kt)("a",{parentName:"li",href:"https://www.bigbinary.com/blog/rails-5-options-for-rake-routes"},"here"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rails generate rspec:install")," - setup rspec within project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"irb")," - ruby interpreter"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gem which <name>")," - shows gem location"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"whereis <bin>")," - linux command to show location"),(0,l.kt)("li",{parentName:"ul"},"Add to log file - ",(0,l.kt)("inlineCode",{parentName:"li"},'logger.debug "This is a debug message"'))),(0,l.kt)("h4",{id:"debugging"},"Debugging"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'logger.debug "DEBUG: #{__method__}, #{__FILE__}:#{__LINE__}"\n')),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("h3",{id:"setup"},"Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Update ",(0,l.kt)("inlineCode",{parentName:"li"},"Gemfile"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'gem "rspec-rails"\ngem "capybara"\ngem "selenium-webdriver"\ngem "factory_bot_rails"\ngem "database_cleaner"\n'))),(0,l.kt)("li",{parentName:"ol"},"Bundle install"),(0,l.kt)("li",{parentName:"ol"},"Create ",(0,l.kt)("inlineCode",{parentName:"li"},"spec/support/factory_bot.rb"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"RSpec.configure do |config|\n    config.include FactoryBot::Syntax::Methods\nend\n"))),(0,l.kt)("li",{parentName:"ol"},'Uncomment "Dir',"[Rails.root.join]",'.." in ',(0,l.kt)("inlineCode",{parentName:"li"},"spec/rails_helper.rb"))),(0,l.kt)("h4",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/thoughtbot/factory_bot/blob/master/GETTING_STARTED.md"},"https://github.com/thoughtbot/factory_bot/blob/master/GETTING_STARTED.md")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://semaphoreci.com/community/tutorials/working-effectively-with-data-factories-using-factorygirl"},"https://semaphoreci.com/community/tutorials/working-effectively-with-data-factories-using-factorygirl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://thoughtbot.com/blog/automatically-wait-for-ajax-with-capybara"},"https://thoughtbot.com/blog/automatically-wait-for-ajax-with-capybara")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/teamcapybara/capybara#asynchronous-javascript-ajax-and-friends"},"https://github.com/teamcapybara/capybara#asynchronous-javascript-ajax-and-friends"))),(0,l.kt)("h2",{id:"codespaces"},"Codespaces"),(0,l.kt)("p",null,"There are some specific to work in Codespaces."),(0,l.kt)("p",null,"Requires to install rails:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gem install rails\n")),(0,l.kt)("p",null,"In the controllers required to add the following before a ",(0,l.kt)("strong",{parentName:"p"},"POST")," (Create):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"skip_before_action :verify_authenticity_token\n")),(0,l.kt)("p",null,"Otherwise will not write to the database. Refer to ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/65688157/why-is-my-http-origin-header-not-matching-request-base-url-and-how-to-fix"},"stackoverflow question")," for more details."),(0,l.kt)("h2",{id:"references-1"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.learnenough.com/ruby-on-rails-7th-edition-tutorial"},"https://www.learnenough.com/ruby-on-rails-7th-edition-tutorial")," by Michael Hartl"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.classcentral.com/classroom/freecodecamp-learn-ruby-on-rails-full-course-57811"},"Intro Videos for Codemy.com")," from Jonh Elder"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails"},"https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails"))))}d.isMDXComponent=!0},6907:function(e,t,a){t.Z=a.p+"assets/images/rails-mvc-d680d5670b172ee77ac2644da910cb8e.png"}}]);