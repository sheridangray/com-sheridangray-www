/*! For license information please see 1808.webpack_bundle-4201d912f87f78f24ca0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1808],{3832:(e,t,n)=>{n.d(t,{kZ:()=>Z});var r=n(473),o=n(502),i=n(501),a=n(504);var s=n(490),f=n(503),c=n(486),u=n(505);function p(e,t,n){void 0===n&&(n=!1);var p,l,d=(0,c.Z)(t),m=(0,r.Z)(e),v=(0,a.Re)(t),h={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(v||!v&&!n)&&(("body"!==(0,s.Z)(t)||(0,u.Z)(d))&&(h=(p=t)!==(0,i.Z)(p)&&(0,a.Re)(p)?{scrollLeft:(l=p).scrollLeft,scrollTop:l.scrollTop}:(0,o.Z)(p)),(0,a.Re)(t)?((b=(0,r.Z)(t)).x+=t.clientLeft,b.y+=t.clientTop):d&&(b.x=(0,f.Z)(d))),{x:m.left+h.scrollLeft-b.x,y:m.top+h.scrollTop-b.y,width:m.width,height:m.height}}var l=n(489),d=n(7636),m=n(9264),v=n(508);function h(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var b={placement:"bottom",modifiers:[],strategy:"absolute"};function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?b:o;return function(e,t,n){void 0===n&&(n=i);var o,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},b,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,Z={state:f,setOptions:function(n){g(),f.options=Object.assign({},i,f.options,n),f.scrollParents={reference:(0,a.kK)(e)?(0,d.Z)(e):e.contextElement?(0,d.Z)(e.contextElement):[],popper:(0,d.Z)(t)};var o=function(e){var t=h(e);return v.xs.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,f.options.modifiers)));return f.orderedModifiers=o.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:Z,options:r}),a=function(){};c.push(i||a)}})),Z.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(y(t,n)){f.rects={reference:p(t,(0,m.Z)(n),"fixed"===f.options.strategy),popper:(0,l.Z)(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:Z})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){Z.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){g(),u=!0}};if(!y(e,t))return Z;function g(){c.forEach((function(e){return e()})),c=[]}return Z.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),Z}}},472:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(504);function o(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},473:(e,t,n)=>{function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}n.d(t,{Z:()=>r})},485:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(501);function o(e){return(0,r.Z)(e).getComputedStyle(e)}},486:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(504);function o(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},489:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(473);function o(e){var t=(0,r.Z)(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}},490:(e,t,n)=>{function r(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{Z:()=>r})},9264:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(501),o=n(490),i=n(485),a=n(504);function s(e){return["table","td","th"].indexOf((0,o.Z)(e))>=0}var f=n(497);function c(e){return(0,a.Re)(e)&&"fixed"!==(0,i.Z)(e).position?e.offsetParent:null}function u(e){for(var t=(0,r.Z)(e),n=c(e);n&&s(n)&&"static"===(0,i.Z)(n).position;)n=c(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&(0,a.Re)(e)&&"fixed"===(0,i.Z)(e).position)return null;for(var n=(0,f.Z)(e);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}},497:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(490),o=n(486),i=n(504);function a(e){return"html"===(0,r.Z)(e)?e:e.assignedSlot||e.parentNode||((0,i.Zq)(e)?e.host:null)||(0,o.Z)(e)}},501:(e,t,n)=>{function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{Z:()=>r})},502:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(501);function o(e){var t=(0,r.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},503:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(473),o=n(486),i=n(502);function a(e){return(0,r.Z)((0,o.Z)(e)).left+(0,i.Z)(e).scrollLeft}},504:(e,t,n)=>{n.d(t,{kK:()=>o,Re:()=>i,Zq:()=>a});var r=n(501);function o(e){return e instanceof(0,r.Z)(e).Element||e instanceof Element}function i(e){return e instanceof(0,r.Z)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof(0,r.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},505:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(485);function o(e){var t=(0,r.Z)(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},7636:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(497),o=n(505),i=n(490),a=n(504);function s(e){return["html","body","#document"].indexOf((0,i.Z)(e))>=0?e.ownerDocument.body:(0,a.Re)(e)&&(0,o.Z)(e)?e:s((0,r.Z)(e))}var f=n(501);function c(e,t){var n;void 0===t&&(t=[]);var i=s(e),a=i===(null==(n=e.ownerDocument)?void 0:n.body),u=(0,f.Z)(i),p=a?[u].concat(u.visualViewport||[],(0,o.Z)(i)?i:[]):i,l=t.concat(p);return a?l:l.concat(c((0,r.Z)(p)))}},508:(e,t,n)=>{n.d(t,{we:()=>r,I:()=>o,F2:()=>i,t$:()=>a,d7:()=>s,mv:()=>f,BL:()=>c,ut:()=>u,zV:()=>p,Pj:()=>l,k5:()=>d,YP:()=>m,bw:()=>v,Ct:()=>h,xs:()=>b});var r="top",o="bottom",i="right",a="left",s="auto",f=[r,o,i,a],c="start",u="end",p="clippingParents",l="viewport",d="popper",m="reference",v=f.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),h=[].concat(f,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),b=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},510:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(525),o=n(489),i=n(472),a=n(9264),s=n(527),f=n(535),c=n(532),u=n(523),p=n(508);const l={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,l=e.options,d=n.elements.arrow,m=n.modifiersData.popperOffsets,v=(0,r.Z)(n.placement),h=(0,s.Z)(v),b=[p.t$,p.F2].indexOf(v)>=0?"height":"width";if(d&&m){var y=function(e,t){return e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,c.Z)("number"!=typeof e?e:(0,u.Z)(e,p.mv))}(l.padding,n),Z=(0,o.Z)(d),g="y"===h?p.we:p.t$,w="y"===h?p.I:p.F2,O=n.rects.reference[b]+n.rects.reference[h]-m[h]-n.rects.popper[b],x=m[h]-n.rects.reference[h],j=(0,a.Z)(d),k=j?"y"===h?j.clientHeight||0:j.clientWidth||0:0,E=O/2-x/2,P=y[g],R=k-Z[b]-y[w],D=k/2-Z[b]/2+E,F=(0,f.Z)(P,D,R),S=h;n.modifiersData[i]=((t={})[S]=F,t.centerOffset=F-D,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&(0,i.Z)(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},511:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(508),o=n(9264),i=n(501),a=n(486),s=n(485),f=n(525),c=n(50959),u={top:"auto",right:"auto",bottom:"auto",left:"auto"};function p(e){var t,n=e.popper,f=e.popperRect,p=e.placement,l=e.offsets,d=e.position,m=e.gpuAcceleration,v=e.adaptive,h=e.roundOffsets,b=!0===h?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:(0,c.NM)((0,c.NM)(t*r)/r)||0,y:(0,c.NM)((0,c.NM)(n*r)/r)||0}}(l):"function"==typeof h?h(l):l,y=b.x,Z=void 0===y?0:y,g=b.y,w=void 0===g?0:g,O=l.hasOwnProperty("x"),x=l.hasOwnProperty("y"),j=r.t$,k=r.we,E=window;if(v){var P=(0,o.Z)(n),R="clientHeight",D="clientWidth";P===(0,i.Z)(n)&&(P=(0,a.Z)(n),"static"!==(0,s.Z)(P).position&&(R="scrollHeight",D="scrollWidth")),P=P,p===r.we&&(k=r.I,w-=P[R]-f.height,w*=m?1:-1),p===r.t$&&(j=r.F2,Z-=P[D]-f.width,Z*=m?1:-1)}var F,S=Object.assign({position:d},v&&u);return m?Object.assign({},S,((F={})[k]=x?"0":"",F[j]=O?"0":"",F.transform=(E.devicePixelRatio||1)<2?"translate("+Z+"px, "+w+"px)":"translate3d("+Z+"px, "+w+"px, 0)",F)):Object.assign({},S,((t={})[k]=x?w+"px":"",t[j]=O?Z+"px":"",t.transform="",t))}const l={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:(0,f.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,p(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,p(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},512:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(501),o={passive:!0};const i={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,a=i.scroll,s=void 0===a||a,f=i.resize,c=void 0===f||f,u=(0,r.Z)(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&p.forEach((function(e){e.addEventListener("scroll",n.update,o)})),c&&u.addEventListener("resize",n.update,o),function(){s&&p.forEach((function(e){e.removeEventListener("scroll",n.update,o)})),c&&u.removeEventListener("resize",n.update,o)}},data:{}}},8570:(e,t,n)=>{n.d(t,{Z:()=>p});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(e){return e.replace(/left|right|bottom|top/g,(function(e){return r[e]}))}var i=n(525),a={start:"end",end:"start"};function s(e){return e.replace(/start|end/g,(function(e){return a[e]}))}var f=n(6973),c=n(530),u=n(508);const p={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,p=void 0===a||a,l=n.altAxis,d=void 0===l||l,m=n.fallbackPlacements,v=n.padding,h=n.boundary,b=n.rootBoundary,y=n.altBoundary,Z=n.flipVariations,g=void 0===Z||Z,w=n.allowedAutoPlacements,O=t.options.placement,x=(0,i.Z)(O),j=m||(x===O||!g?[o(O)]:function(e){if((0,i.Z)(e)===u.d7)return[];var t=o(e);return[s(e),t,s(t)]}(O)),k=[O].concat(j).reduce((function(e,n){return e.concat((0,i.Z)(n)===u.d7?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,p=n.flipVariations,l=n.allowedAutoPlacements,d=void 0===l?u.Ct:l,m=(0,c.Z)(r),v=m?p?u.bw:u.bw.filter((function(e){return(0,c.Z)(e)===m})):u.mv,h=v.filter((function(e){return d.indexOf(e)>=0}));0===h.length&&(h=v);var b=h.reduce((function(t,n){return t[n]=(0,f.Z)(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[(0,i.Z)(n)],t}),{});return Object.keys(b).sort((function(e,t){return b[e]-b[t]}))}(t,{placement:n,boundary:h,rootBoundary:b,padding:v,flipVariations:g,allowedAutoPlacements:w}):n)}),[]),E=t.rects.reference,P=t.rects.popper,R=new Map,D=!0,F=k[0],S=0;S<k.length;S++){var L=k[S],M=(0,i.Z)(L),_=(0,c.Z)(L)===u.BL,B=[u.we,u.I].indexOf(M)>=0,C=B?"width":"height",V=(0,f.Z)(t,{placement:L,boundary:h,rootBoundary:b,altBoundary:y,padding:v}),A=B?_?u.F2:u.t$:_?u.I:u.we;E[C]>P[C]&&(A=o(A));var N=o(A),W=[];if(p&&W.push(V[M]<=0),d&&W.push(V[A]<=0,V[N]<=0),W.every((function(e){return e}))){F=L,D=!1;break}R.set(L,W)}if(D)for(var $=function(e){var t=k.find((function(t){var n=R.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return F=t,"break"},I=g?3:1;I>0;I--){if("break"===$(I))break}t.placement!==F&&(t.modifiersData[r]._skip=!0,t.placement=F,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},514:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(508),o=n(6973);function i(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function a(e){return[r.we,r.F2,r.I,r.t$].some((function(t){return e[t]>=0}))}const s={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,s=t.rects.popper,f=t.modifiersData.preventOverflow,c=(0,o.Z)(t,{elementContext:"reference"}),u=(0,o.Z)(t,{altBoundary:!0}),p=i(c,r),l=i(u,s,f),d=a(p),m=a(l);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":m})}}},515:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(525),o=n(508);const i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,s=void 0===a?[0,0]:a,f=o.Ct.reduce((function(e,n){return e[n]=function(e,t,n){var i=(0,r.Z)(e),a=[o.t$,o.we].indexOf(i)>=0?-1:1,s="function"==typeof n?n(Object.assign({},t,{placement:e})):n,f=s[0],c=s[1];return f=f||0,c=(c||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:c,y:f}:{x:f,y:c}}(n,t.rects,s),e}),{}),c=f[t.placement],u=c.x,p=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=p),t.modifiersData[i]=f}}},516:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(520);const o={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=(0,r.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},9405:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(508),o=n(525),i=n(527);var a=n(535),s=n(489),f=n(9264),c=n(6973),u=n(530),p=n(526),l=n(50959);const d={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,d=e.name,m=n.mainAxis,v=void 0===m||m,h=n.altAxis,b=void 0!==h&&h,y=n.boundary,Z=n.rootBoundary,g=n.altBoundary,w=n.padding,O=n.tether,x=void 0===O||O,j=n.tetherOffset,k=void 0===j?0:j,E=(0,c.Z)(t,{boundary:y,rootBoundary:Z,padding:w,altBoundary:g}),P=(0,o.Z)(t.placement),R=(0,u.Z)(t.placement),D=!R,F=(0,i.Z)(P),S="x"===F?"y":"x",L=t.modifiersData.popperOffsets,M=t.rects.reference,_=t.rects.popper,B="function"==typeof k?k(Object.assign({},t.rects,{placement:t.placement})):k,C={x:0,y:0};if(L){if(v||b){var V="y"===F?r.we:r.t$,A="y"===F?r.I:r.F2,N="y"===F?"height":"width",W=L[F],$=L[F]+E[V],I=L[F]-E[A],q=x?-_[N]/2:0,T=R===r.BL?M[N]:_[N],H=R===r.BL?-_[N]:-M[N],U=t.elements.arrow,z=x&&U?(0,s.Z)(U):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,p.Z)(),Y=K[V],X=K[A],G=(0,a.Z)(0,M[N],z[N]),J=D?M[N]/2-q-G-Y-B:T-G-Y-B,Q=D?-M[N]/2+q+G+X+B:H+G+X+B,ee=t.elements.arrow&&(0,f.Z)(t.elements.arrow),te=ee?"y"===F?ee.clientTop||0:ee.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][F]:0,re=L[F]+J-ne-te,oe=L[F]+Q-ne;if(v){var ie=(0,a.Z)(x?(0,l.VV)($,re):$,W,x?(0,l.Fp)(I,oe):I);L[F]=ie,C[F]=ie-W}if(b){var ae="x"===F?r.we:r.t$,se="x"===F?r.I:r.F2,fe=L[S],ce=fe+E[ae],ue=fe-E[se],pe=(0,a.Z)(x?(0,l.VV)(ce,re):ce,fe,x?(0,l.Fp)(ue,oe):ue);L[S]=pe,C[S]=pe-fe}}t.modifiersData[d]=C}},requiresIfExists:["offset"]}},520:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(525),o=n(530),i=n(527),a=n(508);function s(e){var t,n=e.reference,s=e.element,f=e.placement,c=f?(0,r.Z)(f):null,u=f?(0,o.Z)(f):null,p=n.x+n.width/2-s.width/2,l=n.y+n.height/2-s.height/2;switch(c){case a.we:t={x:p,y:n.y-s.height};break;case a.I:t={x:p,y:n.y+n.height};break;case a.F2:t={x:n.x+n.width,y:l};break;case a.t$:t={x:n.x-s.width,y:l};break;default:t={x:n.x,y:n.y}}var d=c?(0,i.Z)(c):null;if(null!=d){var m="y"===d?"height":"width";switch(u){case a.BL:t[d]=t[d]-(n[m]/2-s[m]/2);break;case a.ut:t[d]=t[d]+(n[m]/2-s[m]/2)}}return t}},6973:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(473),o=n(508),i=n(501),a=n(486),s=n(503);var f=n(485),c=n(502),u=n(50959);var p=n(7636),l=n(9264),d=n(504),m=n(497),v=n(472),h=n(490);function b(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function y(e,t){return t===o.Pj?b(function(e){var t=(0,i.Z)(e),n=(0,a.Z)(e),r=t.visualViewport,o=n.clientWidth,f=n.clientHeight,c=0,u=0;return r&&(o=r.width,f=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=r.offsetLeft,u=r.offsetTop)),{width:o,height:f,x:c+(0,s.Z)(e),y:u}}(e)):(0,d.Re)(t)?function(e){var t=(0,r.Z)(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):b(function(e){var t,n=(0,a.Z)(e),r=(0,c.Z)(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=(0,u.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),p=(0,u.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+(0,s.Z)(e),d=-r.scrollTop;return"rtl"===(0,f.Z)(o||n).direction&&(l+=(0,u.Fp)(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:p,x:l,y:d}}((0,a.Z)(e)))}function Z(e,t,n){var r="clippingParents"===t?function(e){var t=(0,p.Z)((0,m.Z)(e)),n=["absolute","fixed"].indexOf((0,f.Z)(e).position)>=0&&(0,d.Re)(e)?(0,l.Z)(e):e;return(0,d.kK)(n)?t.filter((function(e){return(0,d.kK)(e)&&(0,v.Z)(e,n)&&"body"!==(0,h.Z)(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=y(e,n);return t.top=(0,u.Fp)(r.top,t.top),t.right=(0,u.VV)(r.right,t.right),t.bottom=(0,u.VV)(r.bottom,t.bottom),t.left=(0,u.Fp)(r.left,t.left),t}),y(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}var g=n(520),w=n(532),O=n(523);function x(e,t){void 0===t&&(t={});var n=t,i=n.placement,s=void 0===i?e.placement:i,f=n.boundary,c=void 0===f?o.zV:f,u=n.rootBoundary,p=void 0===u?o.Pj:u,l=n.elementContext,m=void 0===l?o.k5:l,v=n.altBoundary,h=void 0!==v&&v,y=n.padding,x=void 0===y?0:y,j=(0,w.Z)("number"!=typeof x?x:(0,O.Z)(x,o.mv)),k=m===o.k5?o.YP:o.k5,E=e.elements.reference,P=e.rects.popper,R=e.elements[h?k:m],D=Z((0,d.kK)(R)?R:R.contextElement||(0,a.Z)(e.elements.popper),c,p),F=(0,r.Z)(E),S=(0,g.Z)({reference:F,element:P,strategy:"absolute",placement:s}),L=b(Object.assign({},P,S)),M=m===o.k5?L:F,_={top:D.top-M.top+j.top,bottom:M.bottom-D.bottom+j.bottom,left:D.left-M.left+j.left,right:M.right-D.right+j.right},B=e.modifiersData.offset;if(m===o.k5&&B){var C=B[s];Object.keys(_).forEach((function(e){var t=[o.F2,o.I].indexOf(e)>=0?1:-1,n=[o.we,o.I].indexOf(e)>=0?"y":"x";_[e]+=C[n]*t}))}return _}},523:(e,t,n)=>{function r(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}n.d(t,{Z:()=>r})},525:(e,t,n)=>{function r(e){return e.split("-")[0]}n.d(t,{Z:()=>r})},526:(e,t,n)=>{function r(){return{top:0,right:0,bottom:0,left:0}}n.d(t,{Z:()=>r})},527:(e,t,n)=>{function r(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}n.d(t,{Z:()=>r})},530:(e,t,n)=>{function r(e){return e.split("-")[1]}n.d(t,{Z:()=>r})},50959:(e,t,n)=>{n.d(t,{Fp:()=>r,VV:()=>o,NM:()=>i});var r=Math.max,o=Math.min,i=Math.round},532:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(526);function o(e){return Object.assign({},(0,r.Z)(),e)}},535:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(50959);function o(e,t,n){return(0,r.Fp)(e,(0,r.VV)(t,n))}},2350:(e,t,n)=>{n.d(t,{f6:()=>u,Fg:()=>p});var r=n(7169),o=n(0),i=n(3),a=n(2342);n(202);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=function(e,t){return"function"==typeof t?t(e):function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},c=(0,a.Z)((function(e){return(0,a.Z)((function(t){return f(e,t)}))})),u=function(e){return(0,o.createElement)(i.Ni.Consumer,null,(function(t){return e.theme!==t&&(t=c(t)(e.theme)),(0,o.createElement)(i.Ni.Provider,{value:t},e.children)}))};function p(){return o.useContext(i.Ni)}},403:(e,t)=>{var n=60103,r=60106,o=60107,i=60108,a=60114,s=60109,f=60110,c=60112,u=60113,p=60120,l=60115,d=60116,m=60121,v=60122,h=60117,b=60129,y=60131;if("function"==typeof Symbol&&Symbol.for){var Z=Symbol.for;n=Z("react.element"),r=Z("react.portal"),o=Z("react.fragment"),i=Z("react.strict_mode"),a=Z("react.profiler"),s=Z("react.provider"),f=Z("react.context"),c=Z("react.forward_ref"),u=Z("react.suspense"),p=Z("react.suspense_list"),l=Z("react.memo"),d=Z("react.lazy"),m=Z("react.block"),v=Z("react.server.block"),h=Z("react.fundamental"),b=Z("react.debug_trace_mode"),y=Z("react.legacy_hidden")}function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case a:case i:case u:case p:return e;default:switch(e=e&&e.$$typeof){case f:case c:case d:case l:case s:return e;default:return t}}case r:return t}}}t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===c},t.isFragment=function(e){return g(e)===o}},404:(e,t,n)=>{e.exports=n(403)},2629:(e,t,n)=>{n.d(t,{v:()=>E});var r=n(12),o=n(62),i=n(0),a=(n(88295),n(59)),s=n(105),f=n(113),c=n(3832),u=n(512),p=n(516),l=n(511),d=n(490),m=n(504);const v={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];(0,m.Re)(o)&&(0,d.Z)(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,m.Re)(r)&&(0,d.Z)(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};var h=n(515),b=n(8570),y=n(9405),Z=n(510),g=n(514),w=[u.Z,p.Z,l.Z,v,h.Z,b.Z,y.Z,Z.Z,g.Z],O=(0,c.kZ)({defaultModifiers:w}),x=n(12622),j=(0,s.N)("Mac")&&!(0,s.N)("Chrome")&&(0,s.N)("Safari");function k(e){return function(t){return e&&!(0,o.w)(t,e)?e:t}}function E(e){void 0===e&&(e={});var t=(0,f.T)(e),n=t.gutter,o=void 0===n?12:n,s=t.placement,c=void 0===s?"bottom":s,u=t.unstable_flip,p=void 0===u||u,l=t.unstable_offset,d=t.unstable_preventOverflow,m=void 0===d||d,v=t.unstable_fixed,h=void 0!==v&&v,b=t.modal,y=void 0!==b&&b,Z=(0,r._)(t,["gutter","placement","unstable_flip","unstable_offset","unstable_preventOverflow","unstable_fixed","modal"]),g=(0,i.useRef)(null),w=(0,i.useRef)(null),E=(0,i.useRef)(null),P=(0,i.useRef)(null),R=(0,i.useState)(c),D=R[0],F=R[1],S=(0,i.useState)(c),L=S[0],M=S[1],_=(0,i.useState)(l||[0,o])[0],B=(0,i.useState)({position:"fixed",left:"0",top:"0"}),C=B[0],V=B[1],A=(0,i.useState)({}),N=A[0],W=A[1],$=(0,x.b)((0,r.a)({modal:y},Z)),I=(0,i.useCallback)((function(){return!!g.current&&(g.current.forceUpdate(),!0)}),[]),q=(0,i.useCallback)((function(e){e.placement&&M(e.placement),e.styles&&(V(k(e.styles.popper)),P.current&&W(k(e.styles.arrow)))}),[]);return(0,a.Y)((function(){return w.current&&E.current&&(g.current=O(w.current,E.current,{placement:D,strategy:h?"fixed":"absolute",onFirstUpdate:j?q:void 0,modifiers:[{name:"eventListeners",enabled:$.visible},{name:"applyStyles",enabled:!1},{name:"flip",enabled:p,options:{padding:8}},{name:"offset",options:{offset:_}},{name:"preventOverflow",enabled:m,options:{tetherOffset:function(){var e;return(null===(e=P.current)||void 0===e?void 0:e.clientWidth)||0}}},{name:"arrow",enabled:!!P.current,options:{element:P.current}},{name:"updateState",phase:"write",requires:["computeStyles"],enabled:$.visible&&!0,fn:function(e){var t=e.state;return q(t)}}]})),function(){g.current&&(g.current.destroy(),g.current=null)}}),[D,h,$.visible,p,_,m]),(0,i.useEffect)((function(){if($.visible){var e=window.requestAnimationFrame((function(){var e;null===(e=g.current)||void 0===e||e.forceUpdate()}));return function(){window.cancelAnimationFrame(e)}}}),[$.visible]),(0,r.a)((0,r.a)({},$),{},{unstable_referenceRef:w,unstable_popoverRef:E,unstable_arrowRef:P,unstable_popoverStyles:C,unstable_arrowStyles:N,unstable_update:I,unstable_originalPlacement:D,placement:L,place:F})}}}]);