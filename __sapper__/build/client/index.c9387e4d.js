import{S as t,i as e,s,e as l,t as n,b as o,f as r,g as a,d as h,h as c,j as f,k as i,l as u,a as g,q as p,c as d,n as m,m as v}from"./client.1fee83e8.js";function E(t,e,s){const l=t.slice();return l[1]=e[s],l}function b(t){let e,s,g,p,d=t[1].title+"";return{c(){e=l("li"),s=l("a"),g=n(d),this.h()},l(t){e=o(t,"LI",{});var l=r(e);s=o(l,"A",{rel:!0,href:!0});var n=r(s);g=a(n,d),n.forEach(h),l.forEach(h),this.h()},h(){c(s,"rel","prefetch"),c(s,"href",p="blog/"+t[1].slug)},m(t,l){f(t,e,l),i(e,s),i(s,g)},p(t,e){1&e&&d!==(d=t[1].title+"")&&u(g,d),1&e&&p!==(p="blog/"+t[1].slug)&&c(s,"href",p)},d(t){t&&h(e)}}}function j(t){let e,s,u,j,x,L=t[0],R=[];for(let e=0;e<L.length;e+=1)R[e]=b(E(t,L,e));return{c(){e=g(),s=l("h1"),u=n("Recent posts"),j=g(),x=l("ul");for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){p('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),e=d(t),s=o(t,"H1",{});var l=r(s);u=a(l,"Recent posts"),l.forEach(h),j=d(t),x=o(t,"UL",{class:!0});var n=r(x);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,e,l),f(t,s,l),i(s,u),f(t,j,l),f(t,x,l);for(let t=0;t<R.length;t+=1)R[t].m(x,null)},p(t,[e]){if(1&e){let s;for(L=t[0],s=0;s<L.length;s+=1){const l=E(t,L,s);R[s]?R[s].p(l,e):(R[s]=b(l),R[s].c(),R[s].m(x,null))}for(;s<R.length;s+=1)R[s].d(1);R.length=L.length}},i:m,o:m,d(t){t&&h(e),t&&h(s),t&&h(j),t&&h(x),v(R,t)}}}function x(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function L(t,e,s){let{posts:l}=e;return t.$$set=t=>{"posts"in t&&s(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),e(this,t,L,j,s,{posts:0})}}export{x as preload};