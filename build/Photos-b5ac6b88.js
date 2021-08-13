import{C as t,S as n,i as e,s as a,e as s,a as l,b as i,v as o,w as d,x as c,f as r,t as u,d as h,n as f,h as m,q as y,l as p,D as g,y as $,E as b,F as v,o as w,G as x,H as C,z as j}from"./main-c5fef4b1.js";function k(t){return t*t*t}function S(t){const n=t-1;return n*n*n+1}function P(n,{delay:e=0,duration:a=400,easing:s=t}={}){const l=+getComputedStyle(n).opacity;return{delay:e,duration:a,easing:s,css:t=>"opacity: "+t*l}}function U(t,{delay:n=0,duration:e=400,easing:a=S,x:s=0,y:l=0,opacity:i=0}={}){const o=getComputedStyle(t),d=+o.opacity,c="none"===o.transform?"":o.transform,r=d*(1-i);return{delay:n,duration:e,easing:a,css:(t,n)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*s}px, ${(1-t)*l}px);\n\t\t\topacity: ${d-r*n}`}}const q=(t=0)=>new Promise((n=>setTimeout(n,t)));function z(t,n,e){const a=t.slice();return a[11]=n[e],a[13]=e,a}function D(t){let n,e,a=[],f=new Map,m=t[0];const y=t=>t[11].id;for(let n=0;n<m.length;n+=1){let e=z(t,m,n),s=y(e);f.set(s,a[n]=F(s,e))}let p=null;return m.length||(p=E()),{c(){n=s("div");for(let t=0;t<a.length;t+=1)a[t].c();p&&p.c(),l(n,"class","photo-grid svelte-1ahmdhd")},m(t,s){i(t,n,s);for(let t=0;t<a.length;t+=1)a[t].m(n,null);p&&p.m(n,null),e=!0},p(t,e){13&e&&(m=t[0],o(),a=d(a,e,y,1,t,m,f,n,j,F,null,z),c(),m.length?p&&(p.d(1),p=null):p||(p=E(),p.c(),p.m(n,null)))},i(t){if(!e){for(let t=0;t<m.length;t+=1)u(a[t]);e=!0}},o(t){for(let t=0;t<a.length;t+=1)h(a[t]);e=!1},d(t){t&&r(n);for(let t=0;t<a.length;t+=1)a[t].d();p&&p.d()}}}function E(t){let n;return{c(){n=s("h2"),n.textContent="Loading...",l(n,"class","svelte-1ahmdhd")},m(t,e){i(t,n,e)},d(t){t&&r(n)}}}function F(t,n){let e,a,o,d,c,u,h,p,$,b,v,j=n[11].title.slice(0,20)+"...";return{key:t,first:null,c(){e=s("div"),a=s("img"),c=m(),u=s("p"),h=f(j),p=m(),a.src!==(o=n[11].thumbnailUrl)&&l(a,"src",o),l(a,"alt",d=n[11].title),l(u,"class","svelte-1ahmdhd"),l(e,"class","photo svelte-1ahmdhd"),this.first=e},m(t,n){i(t,e,n),y(e,a),y(e,c),y(e,u),y(u,h),y(e,p),v=!0},p(t,e){n=t,(!v||1&e&&a.src!==(o=n[11].thumbnailUrl))&&l(a,"src",o),(!v||1&e&&d!==(d=n[11].title))&&l(a,"alt",d),(!v||1&e)&&j!==(j=n[11].title.slice(0,20)+"...")&&w(h,j)},i(t){v||(x((()=>{b&&b.end(1),$||($=C(e,U,{duration:n[2],y:20,delay:n[13]*n[3],easing:S})),$.start()})),v=!0)},o(t){$&&$.invalidate(),b=g(e,U,{duration:n[2],y:-20,delay:n[13]*n[3],easing:k}),v=!1},d(t){t&&r(e),t&&b&&b.end()}}}function G(t){let n,e,a,d,b,v,w,x,C,j,k,S,U=t[1]&&D(t);return{c(){n=s("div"),e=s("div"),a=s("button"),d=f("Prev batch"),b=m(),v=s("button"),w=f("Next batch"),x=m(),U&&U.c(),a.disabled=t[4],v.disabled=t[5],l(e,"class","buttons svelte-1ahmdhd")},m(s,l){i(s,n,l),y(n,e),y(e,a),y(a,d),y(e,b),y(e,v),y(v,w),y(n,x),U&&U.m(n,null),j=!0,k||(S=[p(a,"click",t[7]),p(v,"click",t[6])],k=!0)},p(t,[e]){(!j||16&e)&&(a.disabled=t[4]),(!j||32&e)&&(v.disabled=t[5]),t[1]?U?(U.p(t,e),2&e&&u(U,1)):(U=D(t),U.c(),u(U,1),U.m(n,null)):U&&(o(),h(U,1,1,(()=>{U=null})),c())},i(t){j||(u(U),C&&C.end(1),j=!0)},o(t){h(U),C=g(n,P,{duration:0}),j=!1},d(t){t&&r(n),U&&U.d(),t&&C&&C.end(),k=!1,$(S)}}}function H(t,n,e){let a,s,l,i,o=[],d=0,c=!0,r=200,u=40;b((async()=>{await q(500);const t=await fetch("https://jsonplaceholder.typicode.com/photos?_limit=20");e(8,o=await t.json())})),v((()=>{e(2,r=0),e(3,u=0),console.log("leaving")}));return t.$$.update=()=>{768&t.$$.dirty&&e(10,a=()=>o.slice(8*d,8*d+8)),1536&t.$$.dirty&&e(0,s=a(d)),257&t.$$.dirty&&e(4,l=s.find((({id:t})=>t===o[0]?.id))),257&t.$$.dirty&&e(5,i=s.find((({id:t})=>t===o[o.length-1]?.id)))},[s,c,r,u,l,i,async()=>{e(1,c=!1),await q(500),e(1,c=!0),e(9,d+=1)},async()=>{e(1,c=!1),await q(500),e(1,c=!0),e(9,d-=1)},o,d,a]}export default class extends n{constructor(t){super(),e(this,t,H,G,a,{})}}
//# sourceMappingURL=Photos-b5ac6b88.js.map