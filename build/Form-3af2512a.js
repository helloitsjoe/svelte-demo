import{S as e,i as t,s,e as a,n,h as o,a as c,b as u,q as i,A as l,l as r,B as m,o as f,p as h,f as p,y as b}from"./main-c5fef4b1.js";function d(e){let t,s,d,x,k,g,y,v,S,j,q,A,B,C,E,N;return{c(){t=a("form"),s=a("label"),d=n("Name:\n    "),x=a("input"),k=o(),g=a("label"),y=n("Extra!\n    "),v=a("input"),S=o(),j=a("button"),j.textContent="Submit",q=o(),A=a("h2"),B=n("Your name is "),C=n(e[0]),c(v,"type","checkbox"),c(j,"type","submit")},m(a,n){u(a,t,n),i(t,s),i(s,d),i(s,x),l(x,e[0]),i(t,k),i(t,g),i(g,y),i(g,v),v.checked=e[1],i(t,S),i(t,j),i(t,q),i(t,A),i(A,B),i(A,C),E||(N=[r(x,"input",e[3]),r(v,"change",e[4]),r(t,"submit",m(e[2]))],E=!0)},p(e,[t]){1&t&&x.value!==e[0]&&l(x,e[0]),2&t&&(v.checked=e[1]),1&t&&f(C,e[0])},i:h,o:h,d(e){e&&p(t),E=!1,b(N)}}}function x(e,t,s){let a="",n=!1;return[a,n,e=>{console.log("name",a),console.log("extra",n)},function(){a=this.value,s(0,a)},function(){n=this.checked,s(1,n)}]}export default class extends e{constructor(e){super(),t(this,e,x,d,s,{})}}
//# sourceMappingURL=Form-3af2512a.js.map
