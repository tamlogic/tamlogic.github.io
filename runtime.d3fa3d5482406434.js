(()=>{"use strict";var e,v={},g={};function t(e){var f=g[e];if(void 0!==f)return f.exports;var a=g[e]={id:e,loaded:!1,exports:{}};return v[e].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=v,e=[],t.O=(f,a,c,d)=>{if(!a){var r=1/0;for(n=0;n<e.length;n++){for(var[a,c,d]=e[n],s=!0,i=0;i<a.length;i++)(!1&d||r>=d)&&Object.keys(t.O).every(p=>t.O[p](a[i]))?a.splice(i--,1):(s=!1,d<r&&(r=d));if(s){e.splice(n--,1);var b=c();void 0!==b&&(f=b)}}return f}d=d||0;for(var n=e.length;n>0&&e[n-1][2]>d;n--)e[n]=e[n-1];e[n]=[a,c,d]},t.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return t.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__;t.t=function(a,c){if(1&c&&(a=this(a)),8&c||"object"==typeof a&&a&&(4&c&&a.__esModule||16&c&&"function"==typeof a.then))return a;var d=Object.create(null);t.r(d);var n={};f=f||[null,e({}),e([]),e(e)];for(var r=2&c&&a;"object"==typeof r&&!~f.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(s=>n[s]=()=>a[s]);return n.default=()=>a,t.d(d,n),d}})(),t.d=(e,f)=>{for(var a in f)t.o(f,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((f,a)=>(t.f[a](e,f),f),[])),t.u=e=>(592===e?"common":e)+"."+{13:"e59f43eb8ac111d1",33:"e8341017cf9e8bc2",41:"3cc47b47ab379f75",56:"e815b64b3d040abd",58:"b89e072ec0f77f6c",91:"fe5a788c4718362d",159:"f31e726a27b69d47",173:"eecdd184f65b3ca2",205:"8ed0f9f7264707a9",225:"84a8a864e714db7f",294:"2293edc021c3d199",295:"db37613059895c7e",296:"4749cbe5107fe323",321:"4d66d53f9de8199a",349:"5a3b89cce26e658d",356:"c7b2ca0cff411c3e",370:"a58a523cad378102",414:"88104eb479b945fc",430:"924010e3ba0cfef0",458:"e96f121837d16916",475:"33ecb1772e6e67b0",489:"23629a4458b37e7c",519:"c8b1f07b34a35d99",537:"ee3d1a9fcdf4dd8d",541:"715bae3ee7a366a0",574:"9f9528943937cb07",575:"8022b3e2831a14b3",583:"48fa01b52273709c",592:"224837cad6b7e9fa",598:"e4f065edf85f165c",629:"e2448337eddabb2e",650:"d3d813497e4792aa",685:"d6b73dcc09461434",705:"ee7840da52c989be",707:"f6dead5a8b2c185b",725:"3ad4a05b55913b21",735:"c356033a99d4b80a",746:"41df8236110e564f",761:"a4fba835526d3197",785:"cb90d5b56be5d933",786:"63fb66ec6822f900",878:"15e109ffa4b3e3ad",913:"304f9011381561e9",956:"f0ec9fc5144f04f7",972:"829f8f2cbe20e80c",983:"e2b7e090684dc505"}[e]+".js",t.miniCssF=e=>{},t.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="sakai:";t.l=(a,c,d,n)=>{if(e[a])e[a].push(c);else{var r,s;if(void 0!==d)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==a||o.getAttribute("data-webpack")==f+d){r=o;break}}r||(s=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+d),r.src=t.tu(a)),e[a]=[c];var l=(_,p)=>{r.onerror=r.onload=null,clearTimeout(u);var h=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),h&&h.forEach(y=>y(p)),_)return _(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),s&&document.head.appendChild(r)}}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;t.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),t.tu=e=>t.tt().createScriptURL(e),t.p="",(()=>{var e={666:0};t.f.j=(c,d)=>{var n=t.o(e,c)?e[c]:void 0;if(0!==n)if(n)d.push(n[2]);else if(666!=c){var r=new Promise((o,l)=>n=e[c]=[o,l]);d.push(n[2]=r);var s=t.p+t.u(c),i=new Error;t.l(s,o=>{if(t.o(e,c)&&(0!==(n=e[c])&&(e[c]=void 0),n)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+c+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,n[1](i)}},"chunk-"+c,c)}else e[c]=0},t.O.j=c=>0===e[c];var f=(c,d)=>{var i,b,[n,r,s]=d,o=0;if(n.some(u=>0!==e[u])){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(s)var l=s(t)}for(c&&c(d);o<n.length;o++)t.o(e,b=n[o])&&e[b]&&e[b][0](),e[b]=0;return t.O(l)},a=self.webpackChunksakai=self.webpackChunksakai||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();