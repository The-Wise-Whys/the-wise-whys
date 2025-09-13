import{d as i,c as p,a as m,b as s,e as l,t as d,u as f,F as g,r as b,o as S,f as _,g as y,h as c,i as $}from"./base-2tROEyUa.js";import{d as h,c as C}from"./pinia-Cb7AL1Kb.js";import{u as a}from"./index-CGv0M_QV.js";const F=h("app",()=>{const e=a("count",0),t=a("name","John Doe");return{count:e,name:t,increment:()=>{e.value++},decrement:()=>{e.value--}}}),H=i({__name:"app",setup(e){const t=F(),r=p(()=>t.count);return(n,o)=>{const u=b("RouterView");return S(),m(g,null,[o[0]||(o[0]=s("header",{"aria-label":"Site Header",class:"bg-gray-50"}," Options Header ",-1)),l(u),s("p",null,"Count: "+d(f(r)),1),o[1]||(o[1]=s("footer",{"aria-label":"Site Footer",class:"bg-gray-50"}," Options Footer ",-1))],64)}}});c.push({path:"/",redirect:"/options"});const V=_({history:y("/"),routes:c});$(H).use(V).use(C()).mount("#app");self.onerror=function(e,t,r,n,o){console.info(`Error: ${e}
Source: ${t}
Line: ${r}
Column: ${n}
Error object: ${o}`)};
