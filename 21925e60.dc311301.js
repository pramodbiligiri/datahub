(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{163:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},164:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,b=d["".concat(o,".").concat(u)]||d[u]||h[u]||i;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(163),a=n(164),i=(n(0),n(165)),o={title:"High Cardinality Relationships",hide_title:!0,slug:"/advanced/high-cardinality",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/high-cardinality.md"},s={unversionedId:"docs/advanced/high-cardinality",id:"docs/advanced/high-cardinality",isDocsHomePage:!1,title:"High Cardinality Relationships",description:"High Cardinality Relationships",source:"@site/genDocs/docs/advanced/high-cardinality.md",slug:"/advanced/high-cardinality",permalink:"/docs/advanced/high-cardinality",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/advanced/high-cardinality.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Elasticsearch upgrade from 5.6.8 to 7.9.3",permalink:"/docs/advanced/es-7-upgrade"},next:{title:"Strongly Consistent Secondary Index",permalink:"/docs/how/scsi-onboarding-guide"}},c=[{value:"1:N Relationships",id:"1n-relationships",children:[]},{value:"M:N Relationships",id:"mn-relationships",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"high-cardinality-relationships"},"High Cardinality Relationships"),Object(i.b)("p",null,"As explained in ",Object(i.b)("a",{parentName:"p",href:"/docs/what/relationship"},"What is a Relationship"),", the raw metadata for forming relationships is captured directly inside of a ",Object(i.b)("a",{parentName:"p",href:"/docs/what/aspect"},"Metadata Aspect"),". The most natural way to model this is using an array, e.g. a group membership aspect contains an array of user ",Object(i.b)("a",{parentName:"p",href:"/docs/what/urn"},"URNs"),". However, this poses some challenges when the cardinality of the relationship is expected to be large (say, greater than 10,000). The aspect becomes large in size, which leads to slow update and retrieval. It may even exceed the underlying limit of the document store, which is often in the range of a few MBs. Furthermore, sending large messages (> 1MB) over Kafka requires special tuning and is generally discouraged."),Object(i.b)("p",null,"Depending on the type of relationships, there are different strategies for dealing with high cardinality. "),Object(i.b)("h3",{id:"1n-relationships"},"1:N Relationships"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"N")," is large, simply store the relationship as a reverse pointer on the ",Object(i.b)("inlineCode",{parentName:"p"},"N")," side, instead of an ",Object(i.b)("inlineCode",{parentName:"p"},"N"),"-element array on the ",Object(i.b)("inlineCode",{parentName:"p"},"1")," side. In other words, instead of doing this"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"record MemberList {\n  members: array[UserUrn]\n}\n")),Object(i.b)("p",null,"do this"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"record Membership {\n  group: GroupUrn\n}\n")),Object(i.b)("p",null,"One drawback with this approach is that batch updating the member list becomes multiple DB operations and non-atomic. If the list is provided by an external metadata provider via ",Object(i.b)("a",{parentName:"p",href:"/docs/what/mxe"},"MCEs"),", this also means that multiple MCEs will be required to update the list, instead of having one giant array in a single MCE."),Object(i.b)("h3",{id:"mn-relationships"},"M:N Relationships"),Object(i.b)("p",null,"When one side of the relation (",Object(i.b)("inlineCode",{parentName:"p"},"M")," or ",Object(i.b)("inlineCode",{parentName:"p"},"N"),") has low cardinality, you can apply the same trick in ","[1:N Relationship]"," by creating the array on the side with low-cardinality. For example, assuming a user can only be part of a small number of groups but each group can have a large number of users, the following model will be more efficient than the reverse."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"record Membership {\n  groups: array[GroupUrn]\n}\n")),Object(i.b)("p",null,"When both ",Object(i.b)("inlineCode",{parentName:"p"},"M")," and ",Object(i.b)("inlineCode",{parentName:"p"},"N"),' are of high cardinality (e.g. millions of users, each belongs to million of groups), the only way to store such relationships efficiently is by creating a new "Mapping Entity" with a single aspect like this'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"record UserGroupMap {\n  user: UserUrn\n  group: GroupUrn\n}\n")),Object(i.b)("p",null,"This means that the relationship now can only be created & updated at a single source-destination pair granularity.  "))}p.isMDXComponent=!0}}]);