import{S as t,i as s,s as e,c as n,e as o,a,b as c,l as r,u as l,t as u,d as i,f as $,g as d,h as p,j as f,m,k as g,n as y,o as h,p as x,q as S}from"./main-c5fef4b1.js";function w(t){let s,e,d,p;const f=t[1].default,m=n(f,t,t[0],null);return{c(){s=o("button"),m&&m.c(),a(s,"class","svelte-2mhwfg")},m(n,o){c(n,s,o),m&&m.m(s,null),e=!0,d||(p=r(s,"click",t[2]),d=!0)},p(t,[s]){m&&m.p&&1&s&&l(m,f,t,t[0],s,null,null)},i(t){e||(u(m,t),e=!0)},o(t){i(m,t),e=!1},d(t){t&&$(s),m&&m.d(t),d=!1,p()}}}function b(t,s,e){let{$$slots:n={},$$scope:o}=s;return t.$$set=t=>{"$$scope"in t&&e(0,o=t.$$scope)},[o,n,function(s){d(t,s)}]}class k extends t{constructor(t){super(),s(this,t,b,w,e,{})}}function j(t){let s;return{c(){s=o("p"),s.textContent="Today is **/**/****"},m(t,e){c(t,s,e)},p:x,d(t){t&&$(s)}}}function D(t){let s,e,n,a=t[0].toLocaleDateString()+"";return{c(){s=o("p"),e=y("Today is "),n=y(a)},m(t,o){c(t,s,o),S(s,e),S(s,n)},p(t,s){1&s&&a!==(a=t[0].toLocaleDateString()+"")&&h(n,a)},d(t){t&&$(s)}}}function H(t){let s,e,n=t[1]?"Hide":"Show";return{c(){s=y(n),e=y(" date")},m(t,n){c(t,s,n),c(t,e,n)},p(t,e){2&e&&n!==(n=t[1]?"Hide":"Show")&&h(s,n)},d(t){t&&$(s),t&&$(e)}}}function L(t){let s,e,n;function o(t,s){return t[1]?D:j}let a=o(t),r=a(t);return e=new k({props:{$$slots:{default:[H]},$$scope:{ctx:t}}}),e.$on("click",t[2]),{c(){r.c(),s=p(),f(e.$$.fragment)},m(t,o){r.m(t,o),c(t,s,o),m(e,t,o),n=!0},p(t,[n]){a===(a=o(t))&&r?r.p(t,n):(r.d(1),r=a(t),r&&(r.c(),r.m(s.parentNode,s)));const c={};10&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){r.d(t),t&&$(s),g(e,t)}}}function T(t,s,e){let{today:n}=s,o=!0;return t.$$set=t=>{"today"in t&&e(0,n=t.today)},[n,o,()=>{e(1,o=!o)}]}export default class extends t{constructor(t){super(),s(this,t,T,L,e,{today:0})}}
//# sourceMappingURL=Dates-52b98bf0.js.map
