function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function u(t){let e;return i(t,(t=>e=t))(),e}function l(t,e,n){t.$$.on_destroy.push(i(e,n))}function f(t,e,n,o){if(t){const r=$(t,e,n,o);return t[0](r)}}function $(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function p(t,e,n,o,r,s,c){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(a){const r=$(e,n,o,c);t.p(r,a)}}function d(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function m(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}const h="undefined"!=typeof window;let g=h?()=>window.performance.now():()=>Date.now(),y=h?t=>requestAnimationFrame(t):t;const b=new Set;function v(t){b.forEach((e=>{e.c(t)||(b.delete(e),e.f())})),0!==b.size&&y(v)}function x(t){let e;return 0===b.size&&y(v),{promise:new Promise((n=>{b.add(e={c:t,f:n})})),abort(){b.delete(e)}}}function w(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function R(){return P(" ")}function j(){return P("")}function A(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function O(t){return function(e){return e.preventDefault(),t.call(this,e)}}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:S(t,o,e[o])}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function D(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function I(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}class M{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=k(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(E)}}const F=new Set;let T,U=0;function H(t,e,n,o,r,s,c,a=0){const i=16.666/o;let u="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*s(t);u+=100*t+`%{${c(o,1-o)}}\n`}const l=u+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${a}`,$=t.ownerDocument;F.add($);const p=$.__svelte_stylesheet||($.__svelte_stylesheet=$.head.appendChild(k("style")).sheet),d=$.__svelte_rules||($.__svelte_rules={});d[f]||(d[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,U+=1,f}function q(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),U-=r,U||y((()=>{U||(F.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),F.clear())})))}function z(t){T=t}function K(){if(!T)throw new Error("Function called outside component initialization");return T}function B(t){K().$$.on_mount.push(t)}function Y(t){K().$$.on_destroy.push(t)}function G(t,e){K().$$.context.set(t,e)}function J(t){return K().$$.context.get(t)}function Q(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const V=[],W=[],X=[],Z=[],tt=Promise.resolve();let et=!1;function nt(){et||(et=!0,tt.then(ct))}function ot(t){X.push(t)}let rt=!1;const st=new Set;function ct(){if(!rt){rt=!0;do{for(let t=0;t<V.length;t+=1){const e=V[t];z(e),at(e.$$)}for(z(null),V.length=0;W.length;)W.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];st.has(e)||(st.add(e),e())}X.length=0}while(V.length);for(;Z.length;)Z.pop()();et=!1,rt=!1,st.clear()}}function at(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}let it;function ut(){return it||(it=Promise.resolve(),it.then((()=>{it=null}))),it}function lt(t,e,n){t.dispatchEvent(I(`${e?"intro":"outro"}${n}`))}const ft=new Set;let $t;function pt(){$t={r:0,c:[],p:$t}}function dt(){$t.r||s($t.c),$t=$t.p}function mt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function ht(t,e,n,o){if(t&&t.o){if(ft.has(t))return;ft.add(t),$t.c.push((()=>{ft.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const gt={duration:0};function yt(n,o,r){let s,a,i=o(n,r),u=!1,l=0;function f(){s&&q(n,s)}function $(){const{delay:o=0,duration:r=300,easing:c=e,tick:$=t,css:p}=i||gt;p&&(s=H(n,0,1,r,o,c,p,l++)),$(0,1);const d=g()+o,m=d+r;a&&a.abort(),u=!0,ot((()=>lt(n,!0,"start"))),a=x((t=>{if(u){if(t>=m)return $(1,0),lt(n,!0,"end"),f(),u=!1;if(t>=d){const e=c((t-d)/r);$(e,1-e)}}return u}))}let p=!1;return{start(){p||(q(n),c(i)?(i=i(),ut().then($)):$())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}function bt(n,o,r){let a,i=o(n,r),u=!0;const l=$t;function f(){const{delay:o=0,duration:r=300,easing:c=e,tick:f=t,css:$}=i||gt;$&&(a=H(n,1,0,r,o,c,$));const p=g()+o,d=p+r;ot((()=>lt(n,!1,"start"))),x((t=>{if(u){if(t>=d)return f(0,1),lt(n,!1,"end"),--l.r||s(l.c),!1;if(t>=p){const e=c((t-p)/r);f(1-e,e)}}return u}))}return l.r+=1,c(i)?ut().then((()=>{i=i(),f()})):f(),{end(t){t&&i.tick&&i.tick(1,0),u&&(a&&q(n,a),u=!1)}}}function vt(t,e){ht(t,1,1,(()=>{e.delete(t.key)}))}function xt(t,e,n,o,r,s,c,a,i,u,l,f){let $=t.length,p=s.length,d=$;const m={};for(;d--;)m[t[d].key]=d;const h=[],g=new Map,y=new Map;for(d=p;d--;){const t=f(r,s,d),a=n(t);let i=c.get(a);i?o&&i.p(t,e):(i=u(a,t),i.c()),g.set(a,h[d]=i),a in m&&y.set(a,Math.abs(d-m[a]))}const b=new Set,v=new Set;function x(t){mt(t,1),t.m(a,l),c.set(t.key,t),l=t.first,p--}for(;$&&p;){const e=h[p-1],n=t[$-1],o=e.key,r=n.key;e===n?(l=e.first,$--,p--):g.has(r)?!c.has(o)||b.has(o)?x(e):v.has(r)?$--:y.get(o)>y.get(r)?(v.add(o),x(e)):(b.add(r),$--):(i(n,c),$--)}for(;$--;){const e=t[$];g.has(e.key)||i(e,c)}for(;p;)x(h[p-1]);return h}function wt(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function _t(t){return"object"==typeof t&&null!==t?t:{}}function Et(t){t&&t.c()}function kt(t,e,n,r){const{fragment:a,on_mount:i,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,n),r||ot((()=>{const e=i.map(o).filter(c);u?u.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(ot)}function Pt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(e,n,o,c,a,i,u=[-1]){const l=T;z(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let $=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),$&&function(t,e){-1===t.$$.dirty[0]&&(V.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),$=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(E)}else f.fragment&&f.fragment.c();n.intro&&mt(e.$$.fragment),kt(e,n.target,n.anchor,n.customElement),ct()}z(l)}class jt{$destroy(){Pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const At=t=>void 0===t,Ot=t=>"function"==typeof t,St=t=>"number"==typeof t;function Ct(){let t=0;return()=>t++}const Lt="undefined"==typeof window;function Nt(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const Dt=[];function It(e,n=t){let o;const r=[];function s(t){if(a(e,t)&&(e=t,o)){const t=!Dt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),Dt.push(n,e)}if(t){for(let t=0;t<Dt.length;t+=2)Dt[t][0](Dt[t+1]);Dt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return r.push(i),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Mt(e,n,o){const r=!Array.isArray(e),a=r?[e]:e,u=n.length<2;return{subscribe:It(o,(e=>{let o=!1;const l=[];let f=0,$=t;const p=()=>{if(f)return;$();const o=n(r?l[0]:l,e);u?e(o):$=c(o)?o:t},d=a.map(((t,e)=>i(t,(t=>{l[e]=t,f&=~(1<<e),o&&p()}),(()=>{f|=1<<e}))));return o=!0,p(),function(){s(d),$()}})).subscribe}}const Ft=t=>`@@svnav-ctx__${t}`,Tt=Ft("LOCATION"),Ut=Ft("ROUTER"),Ht=Ft("ROUTE"),qt=Ft("ROUTE_PARAMS"),zt=Ft("FOCUS_ELEM"),Kt=/^:(.+)/,Bt=(t,e)=>t.substr(0,e.length)===e,Yt=t=>"*"===t[0],Gt=t=>t.replace(/(^\/+|\/+$)/g,"");function Jt(t,e=!1){const n=Gt(t).split("/");return e?n.filter(Boolean):n}const Qt=(t,e)=>t+(e?`?${e}`:""),Vt=t=>`/${Gt(t)}`;function Wt(...t){const e=t.map((t=>Jt(t,!0).join("/"))).join("/");return Vt(e)}const Xt={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Zt=t=>Xt[t];function te(t,e,n,o){const r=n&&function(t,e){let n;return 2===t?n=e.path?`path="${e.path}"`:"default":1===t?n=`to="${e.to}"`:3===t&&(n=`basepath="${e.basepath||""}"`),`<${Zt(t)} ${n||""} />`}(o||t,n),s=r?`\n\nOccurred in: ${r}`:"",c=Zt(t);return`<${c}> ${Ot(e)?e(c):e}${s}`}const ee=t=>(...e)=>t(te(...e)),ne=ee((t=>{throw new Error(t)})),oe=ee(console.warn);function re(t,e){return{route:t,score:t.default?0:Jt(t.fullPath).reduce(((t,e)=>{let n=t;return n+=4,(t=>""===t)(e)?n+=1:(t=>Kt.test(t))(e)?n+=2:Yt(e)?n-=5:n+=3,n}),0),index:e}}function se(t,e){let n,o;const[r]=e.split("?"),s=Jt(r),c=""===s[0],a=function(t){return t.map(re).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=a.length;t<r;t++){const{route:r}=a[t];let i=!1;const u={},l=t=>({...r,params:u,uri:t});if(r.default){o=l(e);continue}const f=Jt(r.fullPath),$=Math.max(s.length,f.length);let p=0;for(;p<$;p++){const t=f[p],e=s[p];if(!At(t)&&Yt(t)){const e="*"===t?"*":t.slice(1);u[e]=s.slice(p).map(decodeURIComponent).join("/");break}if(At(e)){i=!0;break}const n=Kt.exec(t);if(n&&!c){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n=l(Wt(...s.slice(0,p)));break}}return n||o||null}function ce(t,e){return se([t],e)}function ae(t,e){const{pathname:n,hash:o="",search:r="",state:s}=t,c=Jt(e,!0),a=Jt(n,!0);for(;c.length;)c[0]!==a[0]&&ne(3,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),c.shift(),a.shift();return{pathname:Wt(...a),hash:o,search:r,state:s}}const ie=t=>1===t.length?"":t;function ue(t){const e=t.indexOf("?"),n=t.indexOf("#"),o=-1!==e,r=-1!==n,s=r?ie(t.substr(n)):"",c=r?t.substr(0,n):t,a=o?ie(c.substr(e)):"";return{pathname:o?c.substr(0,e):c,search:a,hash:s}}function le(t,e,n){return Wt(n,function(t,e){if(Bt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=Jt(n),c=Jt(r);if(""===s[0])return Qt(r,o);if(!Bt(s[0],".")){const t=c.concat(s).join("/");return Qt(("/"===r?"":"/")+t,o)}const a=c.concat(s),i=[];return a.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),Qt(`/${i.join("/")}`,o)}(t,e))}function fe(t,e){const n=Vt(t.replace(/\*.*$/,""));const o=Jt(n,!0),r=ce({fullPath:n},Wt(...Jt(e,!0).slice(0,o.length)));return r&&r.uri}function $e(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function pe(t,e){return{...ue(e),state:t}}const de=!(Lt||!window.document||!window.document.createElement),me=!Lt&&"null"===window.location.origin,he=function(t){let e=[],n=$e(t),o="POP";const r=(t=e)=>t.forEach((t=>t({location:n,action:o})));return{get location(){return n},listen(s){e.push(s);r([s]);const c=Nt(t,"popstate",(()=>{n=$e(t),o="POP",r([s])}));return()=>{c(),e=e.filter((t=>t!==s))}},navigate(e,s){const{state:c={},replace:a=!1}=s||{};if(o=a?"REPLACE":"PUSH",St(e))s&&oe(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o="POP",t.history.go(e);else{const n={...c,_key:Math.random().toString(36).substring(2)};try{t.history[a?"replaceState":"pushState"](n,"",e)}catch(n){t.location[a?"replace":"assign"](e)}}n=$e(t),r()}}}(de&&!me?window:function(t="/"){let e=0,n=[pe(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(t,o,r){e++,n=n.slice(0,e),n.push(pe(t,r))},replaceState(t,o,r){n[e]=pe(t,r)},go(t){const o=e+t;o<0||o>n.length-1||(e=o)}}}}());let ge=null,ye=!0;function be(t){(!ge||t.level>ge.level||t.level===ge.level&&function(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<n.length;o++){const r=n[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}(t.routerId,ge.routerId))&&(ge=t)}function ve(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){let n;t.setAttribute(e,"-1");const o=()=>{t.removeAttribute(e),n()};n=Nt(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function xe(t,e){return Number(t.dataset.svnavRouteEnd)===e}function we(t,e=document){return e.querySelector(t)}function _e(t){Promise.resolve(u(t.focusElement)).then((e=>{const n=e||function(t){let e=we(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!xe(e,t);){if(/^H[1-6]$/i.test(e.tagName))return e;const t=we("h1,h2,h3,h4,h5,h6",e);if(t)return t;e=e.nextElementSibling}return null}(t.id);n||oe(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);ve(n)||ve(document.documentElement)}))}const Ee=(t,e,n)=>(o,r)=>(nt(),tt).then((()=>{if(ge&&!ye){if(o&&_e(ge.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:a}=ge.route,i=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:a},u(n));Promise.resolve(i).then((t=>{e.set(t)}))}ge=null}else ye=!1}));function ke(t){let e,n,o,r,s;const c=t[20].default,a=f(c,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let e,n;return{c(){e=k("div"),n=P(t[0]),S(e,"role","status"),S(e,"aria-atomic","true"),S(e,"aria-live","polite"),S(e,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){_(t,e,o),w(e,n)},p(t,e){1&e[0]&&L(n,t[0])},d(t){t&&E(e)}}}(t);return{c(){e=k("div"),n=R(),a&&a.c(),o=R(),i&&i.c(),r=j(),D(e,"display","none"),S(e,"aria-hidden","true"),S(e,"data-svnav-router",t[3])},m(t,c){_(t,e,c),_(t,n,c),a&&a.m(t,c),_(t,o,c),i&&i.m(t,c),_(t,r,c),s=!0},p(t,e){a&&a.p&&524288&e[0]&&p(a,c,t,t[19],e,null,null),t[2]&&t[4]&&t[1].announcements&&i.p(t,e)},i(t){s||(mt(a,t),s=!0)},o(t){ht(a,t),s=!1},d(t){t&&E(e),t&&E(n),a&&a.d(t),t&&E(o),i&&i.d(t),t&&E(r)}}}const Pe=Ct(),Re="/";function je(t,e,n){let o,r,s,c,a,{$$slots:i={},$$scope:u}=e,{basepath:f=Re}=e,{url:$=null}=e,{history:p=he}=e,{primary:d=!0}=e,{a11y:m={}}=e;const h={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...m},g=f,y=Vt(f),b=J(Tt),v=J(Ut),x=!b,w=Pe(),_=d&&!(v&&!v.manageFocus),E=It("");l(t,E,(t=>n(0,a=t)));const k=It([]);l(t,k,(t=>n(16,r=t)));const P=It(null);l(t,P,(t=>n(18,c=t)));let R=!1;const j=x?0:v.level+1,A=x?It(ae(Lt?ue($):p.location,y)):b;l(t,A,(t=>n(15,o=t)));const O=It(o);l(t,O,(t=>n(17,s=t)));const S=Ee(h,E,A),C=t=>e=>e.filter((e=>e.id!==t));return x||f===Re||oe(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),x&&(B((()=>p.listen((t=>{const e=ae(t.location,y);O.set(o),A.set(e)})))),G(Tt,A)),G(Ut,{activeRoute:P,registerRoute:function(t){if(Lt){if(R)return;const e=ce(t,o.pathname);if(e)return R=!0,e}else k.update((e=>{const n=C(t.id)(e);return n.push(t),n}))},unregisterRoute:function(t){k.update(C(t))},manageFocus:_,level:j,id:w,history:x?p:v.history,basepath:x?y:v.basepath}),t.$$set=t=>{"basepath"in t&&n(10,f=t.basepath),"url"in t&&n(11,$=t.url),"history"in t&&n(12,p=t.history),"primary"in t&&n(13,d=t.primary),"a11y"in t&&n(14,m=t.a11y),"$$scope"in t&&n(19,u=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&oe(3,'You cannot change the "basepath" prop. It is ignored.'),98304&t.$$.dirty[0]){const t=se(r,o.pathname);P.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!o.hash,e=!t&&_,n=!t||o.pathname!==s.pathname;S(e,n)}262144&t.$$.dirty[0]&&_&&c&&c.primary&&be({level:j,routerId:w,route:c})},[a,h,x,w,_,E,k,P,A,O,f,$,p,d,m,o,r,s,c,u,i]}class Ae extends jt{constructor(t){super(),Rt(this,t,je,ke,a,{basepath:10,url:11,history:12,primary:13,a11y:14},[-1,-1])}}function Oe(t,e,n=Ut,o=3){J(n)||ne(t,(t=>`You cannot use ${t} outside of a ${Zt(o)}.`),e)}function Se(){return Oe(5),(t=>{const{subscribe:e}=J(t);return{subscribe:e}})(Tt)}function Ce(){const{history:t}=J(Ut);return t}function Le(){const t=J(Ht);return t?Mt(t,(t=>t.base)):It("/")}function Ne(){Oe(10);const t=Le(),{basepath:e}=J(Ut);return n=>le(n,u(t),e)}const De=t=>({params:16&t,location:4&t}),Ie=t=>({params:Lt?u(t[9]):t[4],location:t[2],navigate:t[10]});function Me(t){let e,n;return e=new Ae({props:{primary:t[1],$$slots:{default:[Ue]},$$scope:{ctx:t}}}),{c(){Et(e.$$.fragment)},m(t,o){kt(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.primary=t[1]),264213&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){Pt(e,t)}}}function Fe(t){let e;const n=t[17].default,o=f(n,t,t[18],Ie);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&262164&e&&p(o,n,t,t[18],e,De,Ie)},i(t){e||(mt(o,t),e=!0)},o(t){ht(o,t),e=!1},d(t){o&&o.d(t)}}}function Te(t){let e,o,r;const s=[{location:t[2]},{navigate:t[10]},Lt?u(t[9]):t[4],t[11]];var c=t[0];function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(a())),{c(){e&&Et(e.$$.fragment),o=j()},m(t,n){e&&kt(e,t,n),_(t,o,n),r=!0},p(t,n){const r=3604&n?wt(s,[4&n&&{location:t[2]},1024&n&&{navigate:t[10]},528&n&&_t(Lt?u(t[9]):t[4]),2048&n&&_t(t[11])]):{};if(c!==(c=t[0])){if(e){pt();const t=e;ht(t.$$.fragment,1,0,(()=>{Pt(t,1)})),dt()}c?(e=new c(a()),Et(e.$$.fragment),mt(e.$$.fragment,1),kt(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&mt(e.$$.fragment,t),r=!0)},o(t){e&&ht(e.$$.fragment,t),r=!1},d(t){t&&E(o),e&&Pt(e,t)}}}function Ue(t){let e,n,o,r;const s=[Te,Fe],c=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),o=j()},m(t,n){c[e].m(t,n),_(t,o,n),r=!0},p(t,r){let i=e;e=a(t),e===i?c[e].p(t,r):(pt(),ht(c[i],1,1,(()=>{c[i]=null})),dt(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),mt(n,1),n.m(o.parentNode,o))},i(t){r||(mt(n),r=!0)},o(t){ht(n),r=!1},d(t){c[e].d(t),t&&E(o)}}}function He(t){let e,n,o,r,s,c=t[3]&&Me(t);return{c(){e=k("div"),n=R(),c&&c.c(),o=R(),r=k("div"),D(e,"display","none"),S(e,"aria-hidden","true"),S(e,"data-svnav-route-start",t[5]),D(r,"display","none"),S(r,"aria-hidden","true"),S(r,"data-svnav-route-end",t[5])},m(t,a){_(t,e,a),_(t,n,a),c&&c.m(t,a),_(t,o,a),_(t,r,a),s=!0},p(t,[e]){t[3]?c?(c.p(t,e),8&e&&mt(c,1)):(c=Me(t),c.c(),mt(c,1),c.m(o.parentNode,o)):c&&(pt(),ht(c,1,1,(()=>{c=null})),dt())},i(t){s||(mt(c),s=!0)},o(t){ht(c),s=!1},d(t){t&&E(e),t&&E(n),c&&c.d(t),t&&E(o),t&&E(r)}}}const qe=Ct();function ze(t,e,o){let r;const s=["path","component","meta","primary"];let c,a,i,u,f=m(e,s),{$$slots:$={},$$scope:p}=e,{path:h=""}=e,{component:g=null}=e,{meta:y={}}=e,{primary:b=!0}=e;Oe(2,e);const v=qe(),{registerRoute:x,unregisterRoute:w,activeRoute:_}=J(Ut);l(t,_,(t=>o(16,i=t)));const E=Le();l(t,E,(t=>o(15,c=t)));const k=Se();l(t,k,(t=>o(2,a=t)));const P=It(null);let R;const j=It(),A=It({});l(t,A,(t=>o(4,u=t))),G(Ht,j),G(qt,A),G(zt,P);const O=function(){Oe(7);const t=Ne(),{navigate:e}=Ce();return(n,o)=>{const r=St(n)?n:t(n);return e(r,o)}}();return Lt||Y((()=>w(v))),t.$$set=t=>{o(23,e=n(n({},e),d(t))),o(11,f=m(e,s)),"path"in t&&o(12,h=t.path),"component"in t&&o(0,g=t.component),"meta"in t&&o(13,y=t.meta),"primary"in t&&o(1,b=t.primary),"$$scope"in t&&o(18,p=t.$$scope)},t.$$.update=()=>{if(45062&t.$$.dirty){const t=""===h,e=Wt(c,h),n={id:v,path:h,meta:y,default:t,fullPath:t?"":e,base:t?c:fe(e,a.pathname),primary:b,focusElement:P};j.set(n),o(14,R=x(n))}if(81920&t.$$.dirty&&o(3,r=!!(R||i&&i.id===v)),81928&t.$$.dirty&&r){const{params:t}=R||i;A.set(t)}},e=d(e),[g,b,a,r,u,v,_,E,k,A,O,f,h,y,R,c,i,$,p]}class Ke extends jt{constructor(t){super(),Rt(this,t,ze,He,a,{path:12,component:0,meta:13,primary:1})}}function Be(t){let e,o,r,s;const c=t[13].default,a=f(c,t,t[12],null);let i=[{href:t[0]},t[1],t[2]],u={};for(let t=0;t<i.length;t+=1)u=n(u,i[t]);return{c(){e=k("a"),a&&a.c(),C(e,u)},m(n,c){_(n,e,c),a&&a.m(e,null),o=!0,r||(s=A(e,"click",t[4]),r=!0)},p(t,[n]){a&&a.p&&4096&n&&p(a,c,t,t[12],n,null,null),C(e,u=wt(i,[(!o||1&n)&&{href:t[0]},2&n&&t[1],4&n&&t[2]]))},i(t){o||(mt(a,t),o=!0)},o(t){ht(a,t),o=!1},d(t){t&&E(e),a&&a.d(t),r=!1,s()}}}function Ye(t,e,o){let r,s,c,a,i;const u=["to","replace","state","getProps"];let f,$=m(e,u),{$$slots:p={},$$scope:h}=e,{to:g}=e,{replace:y=!1}=e,{state:b={}}=e,{getProps:v=null}=e;Oe(1,e);const x=Se();l(t,x,(t=>o(9,f=t)));const w=function(){const t=K();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=I(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}(),_=Ne(),{navigate:E}=Ce();return t.$$set=t=>{o(17,e=n(n({},e),d(t))),o(18,$=m(e,u)),"to"in t&&o(5,g=t.to),"replace"in t&&o(6,y=t.replace),"state"in t&&o(7,b=t.state),"getProps"in t&&o(8,v=t.getProps),"$$scope"in t&&o(12,h=t.$$scope)},t.$$.update=()=>{544&t.$$.dirty&&o(0,r=_(g,f)),513&t.$$.dirty&&o(10,s=Bt(f.pathname,r)),513&t.$$.dirty&&o(11,c=r===f.pathname),2048&t.$$.dirty&&o(1,a=c?{"aria-current":"page"}:{}),o(2,i=(()=>{if(Ot(v)){const t=v({location:f,href:r,isPartiallyCurrent:s,isCurrent:c});return{...$,...t}}return $})())},e=d(e),[r,a,i,x,function(t){if(w("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();E(r,{state:b,replace:c||y})}},g,y,b,v,f,s,c,h,p]}class Ge extends jt{constructor(t){super(),Rt(this,t,Ye,Be,a,{to:5,replace:6,state:7,getProps:8})}}function Je(t){let e,n,o,r,s,c;const a=t[2].default,i=f(a,t,t[1],null);return{c(){e=k("h1"),n=P("Hello "),o=P(t[0]),r=P("!"),s=R(),i&&i.c(),S(e,"class","svelte-1ajbjkk")},m(t,a){_(t,e,a),w(e,n),w(e,o),w(e,r),_(t,s,a),i&&i.m(t,a),c=!0},p(t,[e]){(!c||1&e)&&L(o,t[0]),i&&i.p&&2&e&&p(i,a,t,t[1],e,null,null)},i(t){c||(mt(i,t),c=!0)},o(t){ht(i,t),c=!1},d(t){t&&E(e),t&&E(s),i&&i.d(t)}}}function Qe(t,e,n){let{$$slots:o={},$$scope:r}=e,{name:s}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class Ve extends jt{constructor(t){super(),Rt(this,t,Qe,Je,a,{name:0})}}function We(t){let e,n,o,r;const s=t[2].default,c=f(s,t,t[1],null);return{c(){e=k("h2"),o=j(),c&&c.c(),n=new M(o)},m(s,a){_(s,e,a),n.m(t[0],e),w(e,o),c&&c.m(e,null),r=!0},p(t,[e]){(!r||1&e)&&n.p(t[0]),c&&c.p&&2&e&&p(c,s,t,t[1],e,null,null)},i(t){r||(mt(c,t),r=!0)},o(t){ht(c,t),r=!1},d(t){t&&E(e),c&&c.d(t)}}}function Xe(t,e,n){let{$$slots:o={},$$scope:r}=e,{user:s=""}=e;return t.$$set=t=>{"user"in t&&n(0,s=t.user),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class Ze extends jt{constructor(t){super(),Rt(this,t,Xe,We,a,{user:0})}}function tn(e){let n;let o=function(t,e){return t[2]?on:nn}(e)(e);return{c(){o.c(),n=j()},m(t,e){o.m(t,e),_(t,n,e)},p(t,e){o.p(t,e)},i:t,o:t,d(t){o.d(t),t&&E(n)}}}function en(t){let e,o;const r=[t[3]];let s={};for(let t=0;t<r.length;t+=1)s=n(s,r[t]);return e=new t[0]({props:s}),{c(){Et(e.$$.fragment)},m(t,n){kt(e,t,n),o=!0},p(t,n){const o=8&n?wt(r,[_t(t[3])]):{};e.$set(o)},i(t){o||(mt(e.$$.fragment,t),o=!0)},o(t){ht(e.$$.fragment,t),o=!1},d(t){Pt(e,t)}}}function nn(e){let n;return{c(){n=k("h2"),n.textContent="Loading...",S(n,"class","svelte-ixgi5a")},m(t,e){_(t,n,e)},p:t,d(t){t&&E(n)}}}function on(e){let n,o;return{c(){o=j(),n=new M(o)},m(t,r){n.m(e[2],t,r),_(t,o,r)},p:t,d(t){t&&E(o),t&&n.d()}}}function rn(t){let e,n,o,r;const s=[en,tn],c=[];function a(t,e){return t[0]?0:t[1]?1:-1}return~(e=a(t))&&(n=c[e]=s[e](t)),{c(){n&&n.c(),o=j()},m(t,n){~e&&c[e].m(t,n),_(t,o,n),r=!0},p(t,[r]){let i=e;e=a(t),e===i?~e&&c[e].p(t,r):(n&&(pt(),ht(c[i],1,1,(()=>{c[i]=null})),dt()),~e?(n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),mt(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(mt(n),r=!0)},o(t){ht(n),r=!1},d(t){~e&&c[e].d(t),t&&E(o)}}}function sn(t,e,o){const{component:r,fallback:s,...c}=e;let a,i=!1;return B((()=>{((t=200)=>{setTimeout((()=>{a||o(1,i=!0)}),t)})(),r().then((t=>{o(0,a=t.default)}))})),t.$$set=t=>{o(6,e=n(n({},e),d(t)))},e=d(e),[a,i,s,c]}class cn extends jt{constructor(t){super(),Rt(this,t,sn,rn,a,{})}}function an(t){let e;return{c(){e=P("Home")},m(t,n){_(t,e,n)},d(t){t&&E(e)}}}function un(t){let e;return{c(){e=P("Dates")},m(t,n){_(t,e,n)},d(t){t&&E(e)}}}function ln(t){let e;return{c(){e=P("Form")},m(t,n){_(t,e,n)},d(t){t&&E(e)}}}function fn(t){let e;return{c(){e=P("List")},m(t,n){_(t,e,n)},d(t){t&&E(e)}}}function $n(t){let e;return{c(){e=P("Count")},m(t,n){_(t,e,n)},d(t){t&&E(e)}}}function pn(t){let e;return{c(){e=P("Photos")},m(t,n){_(t,e,n)},d(t){t&&E(e)}}}function dn(t){let e,n,o,r,s,c,a,i,u,l,f,$,p;return n=new Ge({props:{to:"/",$$slots:{default:[an]},$$scope:{ctx:t}}}),r=new Ge({props:{to:"date",$$slots:{default:[un]},$$scope:{ctx:t}}}),c=new Ge({props:{to:"form",$$slots:{default:[ln]},$$scope:{ctx:t}}}),i=new Ge({props:{to:"list",$$slots:{default:[fn]},$$scope:{ctx:t}}}),l=new Ge({props:{to:"count",$$slots:{default:[$n]},$$scope:{ctx:t}}}),$=new Ge({props:{to:"photos",$$slots:{default:[pn]},$$scope:{ctx:t}}}),{c(){e=k("nav"),Et(n.$$.fragment),o=R(),Et(r.$$.fragment),s=R(),Et(c.$$.fragment),a=R(),Et(i.$$.fragment),u=R(),Et(l.$$.fragment),f=R(),Et($.$$.fragment),S(e,"class","svelte-1b4bjbp")},m(t,d){_(t,e,d),kt(n,e,null),w(e,o),kt(r,e,null),w(e,s),kt(c,e,null),w(e,a),kt(i,e,null),w(e,u),kt(l,e,null),w(e,f),kt($,e,null),p=!0},p(t,e){const o={};256&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};256&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s);const a={};256&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a);const u={};256&e&&(u.$$scope={dirty:e,ctx:t}),i.$set(u);const f={};256&e&&(f.$$scope={dirty:e,ctx:t}),l.$set(f);const p={};256&e&&(p.$$scope={dirty:e,ctx:t}),$.$set(p)},i(t){p||(mt(n.$$.fragment,t),mt(r.$$.fragment,t),mt(c.$$.fragment,t),mt(i.$$.fragment,t),mt(l.$$.fragment,t),mt($.$$.fragment,t),p=!0)},o(t){ht(n.$$.fragment,t),ht(r.$$.fragment,t),ht(c.$$.fragment,t),ht(i.$$.fragment,t),ht(l.$$.fragment,t),ht($.$$.fragment,t),p=!1},d(t){t&&E(e),Pt(n),Pt(r),Pt(c),Pt(i),Pt(l),Pt($)}}}function mn(t){let e,n;return e=new cn({props:{component:t[1],fallback:"<h2>Loading dates...</h2>",today:t[0]}}),{c(){Et(e.$$.fragment)},m(t,o){kt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.today=t[0]),e.$set(o)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){Pt(e,t)}}}function hn(e){let n,o;return n=new cn({props:{component:e[4]}}),{c(){Et(n.$$.fragment)},m(t,e){kt(n,t,e),o=!0},p:t,i(t){o||(mt(n.$$.fragment,t),o=!0)},o(t){ht(n.$$.fragment,t),o=!1},d(t){Pt(n,t)}}}function gn(e){let n,o;return n=new cn({props:{component:e[2]}}),{c(){Et(n.$$.fragment)},m(t,e){kt(n,t,e),o=!0},p:t,i(t){o||(mt(n.$$.fragment,t),o=!0)},o(t){ht(n.$$.fragment,t),o=!1},d(t){Pt(n,t)}}}function yn(e){let n,o;return n=new cn({props:{component:e[3]}}),{c(){Et(n.$$.fragment)},m(t,e){kt(n,t,e),o=!0},p:t,i(t){o||(mt(n.$$.fragment,t),o=!0)},o(t){ht(n.$$.fragment,t),o=!1},d(t){Pt(n,t)}}}function bn(e){let n,o;return n=new cn({props:{component:e[5]}}),{c(){Et(n.$$.fragment)},m(t,e){kt(n,t,e),o=!0},p:t,i(t){o||(mt(n.$$.fragment,t),o=!0)},o(t){ht(n.$$.fragment,t),o=!1},d(t){Pt(n,t)}}}function vn(t){let e,n,o,r,s,c,a,i,u,l;return e=new Ke({props:{path:"date",$$slots:{default:[mn]},$$scope:{ctx:t}}}),o=new Ke({props:{path:"form",$$slots:{default:[hn]},$$scope:{ctx:t}}}),s=new Ke({props:{path:"count",$$slots:{default:[gn]},$$scope:{ctx:t}}}),a=new Ke({props:{path:"list",$$slots:{default:[yn]},$$scope:{ctx:t}}}),u=new Ke({props:{path:"photos",$$slots:{default:[bn]},$$scope:{ctx:t}}}),{c(){Et(e.$$.fragment),n=R(),Et(o.$$.fragment),r=R(),Et(s.$$.fragment),c=R(),Et(a.$$.fragment),i=R(),Et(u.$$.fragment)},m(t,f){kt(e,t,f),_(t,n,f),kt(o,t,f),_(t,r,f),kt(s,t,f),_(t,c,f),kt(a,t,f),_(t,i,f),kt(u,t,f),l=!0},p(t,n){const r={};257&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const c={};256&n&&(c.$$scope={dirty:n,ctx:t}),o.$set(c);const i={};256&n&&(i.$$scope={dirty:n,ctx:t}),s.$set(i);const l={};256&n&&(l.$$scope={dirty:n,ctx:t}),a.$set(l);const f={};256&n&&(f.$$scope={dirty:n,ctx:t}),u.$set(f)},i(t){l||(mt(e.$$.fragment,t),mt(o.$$.fragment,t),mt(s.$$.fragment,t),mt(a.$$.fragment,t),mt(u.$$.fragment,t),l=!0)},o(t){ht(e.$$.fragment,t),ht(o.$$.fragment,t),ht(s.$$.fragment,t),ht(a.$$.fragment,t),ht(u.$$.fragment,t),l=!1},d(t){Pt(e,t),t&&E(n),Pt(o,t),t&&E(r),Pt(s,t),t&&E(c),Pt(a,t),t&&E(i),Pt(u,t)}}}function xn(t){let e,n,o,r;return e=new Ve({props:{name:"Svelte",$$slots:{default:[dn]},$$scope:{ctx:t}}}),o=new Ze({props:{$$slots:{default:[vn]},$$scope:{ctx:t}}}),{c(){Et(e.$$.fragment),n=R(),Et(o.$$.fragment)},m(t,s){kt(e,t,s),_(t,n,s),kt(o,t,s),r=!0},p(t,n){const r={};256&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const s={};257&n&&(s.$$scope={dirty:n,ctx:t}),o.$set(s)},i(t){r||(mt(e.$$.fragment,t),mt(o.$$.fragment,t),r=!0)},o(t){ht(e.$$.fragment,t),ht(o.$$.fragment,t),r=!1},d(t){Pt(e,t),t&&E(n),Pt(o,t)}}}function wn(t){let e,n,o;return n=new Ae({props:{basepath:t[6],$$slots:{default:[xn]},$$scope:{ctx:t}}}),{c(){e=k("main"),Et(n.$$.fragment),S(e,"class","svelte-1b4bjbp")},m(t,r){_(t,e,r),kt(n,e,null),o=!0},p(t,[e]){const o={};257&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(mt(n.$$.fragment,t),o=!0)},o(t){ht(n.$$.fragment,t),o=!1},d(t){t&&E(e),Pt(n)}}}function _n(t,e,n){let{today:o}=e,{isDev:r}=e;const s=r?"/":"/svelte-demo";return t.$$set=t=>{"today"in t&&n(0,o=t.today),"isDev"in t&&n(7,r=t.isDev)},[o,()=>import("./Dates-52b98bf0.js"),()=>import("./Count-9c4b9fba.js"),()=>import("./List-2860bb8c.js"),()=>import("./Form-3af2512a.js"),()=>import("./Photos-b5ac6b88.js"),s,r]}const En=new class extends jt{constructor(t){super(),Rt(this,t,_n,wn,a,{today:0,isDev:7})}}({target:document.body,props:{isDev:!1,today:new Date}});export{N as A,O as B,e as C,bt as D,B as E,Y as F,ot as G,yt as H,En as I,jt as S,S as a,_ as b,f as c,ht as d,k as e,E as f,Q as g,R as h,Rt as i,Et as j,Pt as k,A as l,kt as m,P as n,L as o,t as p,w as q,j as r,a as s,mt as t,p as u,pt as v,xt as w,dt as x,s as y,vt as z};
//# sourceMappingURL=main-c5fef4b1.js.map