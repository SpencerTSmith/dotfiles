"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3569,2630],{62348:(e,r,t)=>{t.d(r,{e:()=>f});t(7651),t(30456),t(26701),t(37417),t(11737),t(51691),t(702),t(5672),t(43379),t(34192),t(88856),t(51565),t(18316);var n=t(52542),i=t(13734),a=t(58261);const s="k270skPbT7JOaSidSA2a";var u=t(86070),c=["iconSize"];function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=function(e){var r=e.iconSize,t=void 0===r?64:r,n=(0,i.A)(e,c);return(0,u.jsx)("div",{className:s,children:(0,u.jsx)(a.E,l(l({iconSize:t},n),{},{semanticColor:"textBrightAccent","aria-hidden":!0}))})}},62633:(e,r,t)=>{t.r(r),t.d(r,{OfflineEmptyState:()=>o});var n=t(24567),i=t(26522),a=t(13534),s=t(92107),u=t(85048),c=t(86070),o=function(e){var r=e.showDownloadInformation;return(0,c.jsxs)("div",{className:u.A.emptyStateContainer,children:[r?(0,c.jsx)(n.i,{size:"xxlarge",className:u.A.icon}):(0,c.jsx)(i.P,{size:"xxlarge",className:u.A.icon}),(0,c.jsx)(a.E,{as:"h1",variant:"titleLarge",semanticColor:"textBase",dir:"auto",children:s.Ru.get("web-player.offline.empty-state.title")}),(0,c.jsx)(a.E,{as:"h2",variant:"bodyMedium",semanticColor:"textSubdued",dir:"auto",className:u.A.info,children:r?s.Ru.get("web-player.offline.empty-state.subtitle"):s.Ru.get("offline.callout-disconnected")})]})}},23027:(e,r,t)=>{t.r(r),t.d(r,{default:()=>U});t(25550),t(15342);var n=t(97500),i=t.n(n),a=t(92107),s=(t(47994),t(78808)),u=t(15992),c=t(83827),o=t(26314),l=t(24260),f=t(16920),d=t(36318),p=t(86070);function m(e,r){switch(e.type){case f.c.ALBUM:return(0,p.jsx)(s.a,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:r},e.uri);case f.c.ARTIST:return(0,p.jsx)(u.a,{uri:e.uri,name:e.name,images:e.images,index:r},e.uri);case f.c.SHOW:return(0,p.jsx)(l.o,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:d.Q.UNKNOWN,index:r},e.uri);case f.c.AUDIOBOOK:return(0,p.jsx)(c.M,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:r},e.uri);case f.c.PLAYLIST:return(0,p.jsx)(o.B,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:r},e.uri);default:return null}}var g=t(1349),b=t(62822),v=t(52542),h=t(93091),x=t.n(h),j=(t(7651),t(30456),t(26701),t(37417),t(11737),t(51691),t(702),t(5672),t(43379),t(34192),t(88856),t(51565),t(18316),t(30758)),y=t(15057),O=t(69863),w=t(56052),P=t(87320),A=t(62348),S=t(73606),k=t(98156),E=t(70029),I=t(31529),D=t(75624),N=t(79896),C=t(79431),R=t(11404);function L(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?L(Object(t),!0).forEach((function(r){(0,v.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _=function(e){var r,t=e.uri,n=e.name,i=e.images,s=e.index,u=(0,N.o)(),c=(0,j.useRef)(null),o=(0,j.useRef)(!0),l=(0,D.A)(),f=(0,R.l_)(E.bV).isPlaying,d=(0,C.P)({uri:E.bV,pages:[{items:(null===(r=c.current)||void 0===r?void 0:r.map((function(e){return T(T({},e),{},{provider:null})})))||[]}]},{featureIdentifier:"local_files"}).togglePlay;(0,j.useEffect)((function(){return o.current=!0,function(){o.current=!1}}),[]);var m=(0,I.P)(),g=(0,y.YQ)(function(){var e=(0,b.A)(x().mark((function e(r,t){var n,i;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.current){e.next=5;break}return e.next=3,l.getTracks();case 3:n=e.sent,c.current=n;case 5:o&&d({loggingParams:t},{uri:E.bV,pages:[{items:(null===(i=c.current)||void 0===i?void 0:i.map((function(e){return T(T({},e),{},{provider:null})})))||[]}]});case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),k.d,{leading:!0,trailing:!1});return u.canFetchAllTracks&&m?(0,p.jsx)(O.Z,{index:s,delegatePlayback:!0,delegateLogging:!0,isPlaying:f,onPlay:g,headerText:n,featureIdentifier:"local_files",uri:t,renderCardImage:function(){return(0,p.jsx)(w.M,{images:i,FallbackComponent:A.e})},renderSubHeaderContent:function(){return(0,p.jsx)(P.c,{children:a.Ru.get("local-files.description")})}}):null},z=function(e){var r=e.index,t=(0,S.Iu)();return(0,p.jsx)(j.Suspense,{fallback:null,children:(0,p.jsx)(_,{index:r,name:t.name,uri:t.uri,images:t.images})})},B=t(62633),K=t(53607),W=t(12341),M=t(69819);var Z=t(85048);const U=function(){var e=function(){var e=(0,M.B)(),r=(0,j.useState)(!0),t=(0,W.A)(r,2),n=t[0],i=t[1],a=(0,j.useState)(!1),s=(0,W.A)(a,2),u=s[0],c=s[1],o=(0,j.useState)([]),l=(0,W.A)(o,2),f=l[0],d=l[1];return(0,j.useEffect)((function(){var r=function(){var r=(0,b.A)(x().mark((function r(){var t;return x().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.getDownloads();case 3:t=r.sent,d(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),c(!0);case 10:return r.prev=10,i(!1),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),{isLoading:n,hasError:u,items:f}}(),r=e.hasError,t=e.items,n=(0,I.P)();return r?null:(0,p.jsx)("div",{className:i()(Z.A.offline,"contentSpacing"),children:t.length>0||n?(0,p.jsxs)(K.pZ,{value:"headered-grid",children:[(0,p.jsx)(g.$,{title:a.Ru.get("music_downloads"),total:t.length,seeAllUri:"/collection/music-downloads",alwaysShowSeeAll:!0,children:t.map((function(e,r){return(0,p.jsx)(K.pZ,{value:"card",index:r,children:m(e,r)},e.uri)}))}),n&&(0,p.jsx)(g.$,{title:a.Ru.get("local-files"),total:1,showAll:!0,children:(0,p.jsx)(z,{index:0})})]}):(0,p.jsx)(B.OfflineEmptyState,{showDownloadInformation:!0})})}},31529:(e,r,t)=>{t.d(r,{P:()=>i});var n=t(55588);function i(){return(0,n.y)()[0]}},55588:(e,r,t)=>{t.d(r,{y:()=>s});var n=t(12341),i=t(30758),a=t(75624);function s(){var e=(0,a.A)(),r=(0,i.useState)(e.getIsEnabled()),t=(0,n.A)(r,2),s=t[0],u=t[1];return(0,i.useEffect)((function(){var r=e.subscribeIsEnabled(u);return function(){return r()}}),[e]),[s,(0,i.useCallback)((function(r){return e.setIsEnabled(r)}),[e])]}},85048:(e,r,t)=>{t.d(r,{A:()=>n});const n={offline:"tpweADmlLll_vhLLKgu2",emptyStateContainer:"e9Wimf8ZtOrZpvPbfWtg",icon:"zCM7ss2KtS5tWRItxyls",info:"lG5QlwmK6exKdfikWw2A"}}}]);
//# sourceMappingURL=xpui-routes-offline-browse.js.map