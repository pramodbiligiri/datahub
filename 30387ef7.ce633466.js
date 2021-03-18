(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{162:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},163:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,s=l["".concat(c,".").concat(f)]||l[f]||p[f]||o;return n?a.a.createElement(s,u(u({ref:t},b),{},{components:n})):a.a.createElement(s,u({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(162),a=n(163),o=(n(0),n(164)),c={title:"Frontend Docker Image",hide_title:!0,slug:"/docker/datahub-frontend",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend/README.md"},u={unversionedId:"docker/datahub-frontend/README",id:"docker/datahub-frontend/README",isDocsHomePage:!1,title:"Frontend Docker Image",description:"DataHub Frontend Docker Image",source:"@site/genDocs/docker/datahub-frontend/README.md",slug:"/docker/datahub-frontend",permalink:"/docs/docker/datahub-frontend",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend/README.md",version:"current"},i=[{value:"Checking out DataHub UI",id:"checking-out-datahub-ui",children:[]}],b={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"datahub-frontend-docker-image"},"DataHub Frontend Docker Image"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/actions?query=workflow%3A%22datahub-frontend+docker%22"},Object(o.b)("img",{parentName:"a",src:"https://github.com/linkedin/datahub/workflows/datahub-frontend%20docker/badge.svg",alt:"datahub-frontend docker"}))),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend"},"DataHub Frontend Service")," to have a quick understanding of the architecture and\nresponsibility of this service for the DataHub."),Object(o.b)("h2",{id:"checking-out-datahub-ui"},"Checking out DataHub UI"),Object(o.b)("p",null,"After starting your Docker container, you can connect to it by typing below into your favorite web browser:"),Object(o.b)("p",null,"If using React app:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"http://localhost:9002\n")),Object(o.b)("p",null,"If using legacy Ember app:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"http://localhost:9001\n")),Object(o.b)("p",null,"You can sign in with ",Object(o.b)("inlineCode",{parentName:"p"},"datahub")," as username and password."))}d.isMDXComponent=!0}}]);