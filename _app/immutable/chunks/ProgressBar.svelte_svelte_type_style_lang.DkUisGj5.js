import{w as S,r as L}from"./index.CerBvGJL.js";import{B as P,C as p,D as E}from"./scheduler.BeDnjf_d.js";const w="modalStore";function I(){const e=P(w);if(!e)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return e}function R(){const e=C();return p(w,e)}function C(){const{subscribe:e,set:s,update:t}=S([]);return{subscribe:e,set:s,update:t,trigger:r=>t(n=>(n.push(r),n)),close:()=>t(r=>(r.length>0&&r.shift(),r)),clear:()=>s([])}}const l={};function h(e){return e==="local"?localStorage:sessionStorage}function u(e,s,t){const r=(t==null?void 0:t.serializer)??JSON,n=(t==null?void 0:t.storage)??"local";function m(c,i){h(n).setItem(c,r.stringify(i))}if(!l[e]){const c=S(s,o=>{const a=h(n).getItem(e);a&&o(r.parse(a));{const g=d=>{d.key===e&&o(d.newValue?r.parse(d.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:i,set:f}=c;l[e]={set(o){m(e,o),f(o)},update(o){const a=o(E(c));m(e,a),f(a)},subscribe:i}}return l[e]}const v=u("modeOsPrefers",!1),b=u("modeUserPrefers",void 0),U=u("modeCurrent",!1);function _(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return v.set(e),e}function D(e){b.set(e)}function H(e){const s=document.documentElement.classList,t="dark";e===!0?s.remove(t):s.add(t),U.set(e)}function Q(){const e=document.documentElement.classList,s=localStorage.getItem("modeUserPrefers")==="false",t=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;s||t&&r?e.add("dark"):e.remove("dark")}const M="(prefers-reduced-motion: reduce)";function O(){return window.matchMedia(M).matches}const T=L(O(),e=>{{const s=r=>{e(r.matches)},t=window.matchMedia(M);return t.addEventListener("change",s),()=>{t.removeEventListener("change",s)}}});export{H as a,_ as b,D as c,I as g,R as i,U as m,T as p,Q as s};
