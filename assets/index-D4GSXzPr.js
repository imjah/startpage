var Jr=Object.defineProperty;var $t=e=>{throw TypeError(e)};var Kr=(e,t,r)=>t in e?Jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var _e=(e,t,r)=>Kr(e,typeof t!="symbol"?t+"":t,r),Wr=(e,t,r)=>t.has(e)||$t("Cannot "+r);var Vt=(e,t,r)=>t.has(e)?$t("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var le=(e,t,r)=>(Wr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();const Zr=!1;var wt=Array.isArray,Et=Array.from,Xr=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ar=Object.getOwnPropertyDescriptors,Qr=Object.prototype,en=Array.prototype,Ke=Object.getPrototypeOf;const W=()=>{};function tn(e){return e()}function ft(e){for(var t=0;t<e.length;t++)e[t]()}const ie=2,lr=4,He=8,kt=16,Z=32,$e=64,me=128,We=256,V=512,ue=1024,Ve=2048,ee=4096,Ye=8192,rn=16384,et=32768,nn=65536,an=1<<18,ir=1<<19,Ne=Symbol("$state"),ln=Symbol("");function sr(e){return e===this.v}function or(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function St(e){return!or(e,this.v)}function sn(e){throw new Error("effect_in_teardown")}function on(){throw new Error("effect_in_unowned_derived")}function un(e){throw new Error("effect_orphan")}function fn(){throw new Error("effect_update_depth_exceeded")}function cn(e){throw new Error("props_invalid_value")}function vn(){throw new Error("state_descriptors_fixed")}function dn(){throw new Error("state_prototype_fixed")}function _n(){throw new Error("state_unsafe_local_read")}function pn(){throw new Error("state_unsafe_mutation")}let Oe=!1;function hn(){Oe=!0}function G(e){return{f:0,v:e,reactions:null,equals:sr,version:0}}function B(e){return gn(G(e))}function Nt(e,t=!1){var n;const r=G(e);return t||(r.equals=St),Oe&&P!==null&&P.l!==null&&((n=P.l).s??(n.s=[])).push(r),r}function gn(e){return A!==null&&A.f&ie&&(te===null?Mn([e]):te.push(e)),e}function b(e,t){return A!==null&&nt()&&A.f&(ie|kt)&&(te===null||!te.includes(e))&&pn(),ct(e,t)}function ct(e,t){return e.equals(t)||(e.v=t,e.version=Cr(),ur(e,ue),nt()&&S!==null&&S.f&V&&!(S.f&Z)&&(U!==null&&U.includes(e)?(ae(S,ue),lt(S)):oe===null?Rn([e]):oe.push(e))),t}function ur(e,t){var r=e.reactions;if(r!==null)for(var n=nt(),a=r.length,l=0;l<a;l++){var s=r[l],f=s.f;f&ue||!n&&s===S||(ae(s,t),f&(V|me)&&(f&ie?ur(s,Ve):lt(s)))}}const xt=1,Ct=2,fr=4,mn=8,yn=16,bn=1,wn=2,En=4,kn=8,Sn=16,Nn=1,xn=2,Y=Symbol();let Cn=!1;function T(e,t=null,r){if(typeof e!="object"||e===null||Ne in e)return e;const n=Ke(e);if(n!==Qr&&n!==en)return e;var a=new Map,l=wt(e),s=G(0);l&&a.set("length",G(e.length));var f;return new Proxy(e,{defineProperty(u,i,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&vn();var v=a.get(i);return v===void 0?(v=G(o.value),a.set(i,v)):b(v,T(o.value,f)),!0},deleteProperty(u,i){var o=a.get(i);if(o===void 0)i in u&&a.set(i,G(Y));else{if(l&&typeof i=="string"){var v=a.get("length"),c=Number(i);Number.isInteger(c)&&c<v.v&&b(v,c)}b(o,Y),Yt(s)}return!0},get(u,i,o){var d;if(i===Ne)return e;var v=a.get(i),c=i in u;if(v===void 0&&(!c||(d=Se(u,i))!=null&&d.writable)&&(v=G(T(c?u[i]:Y,f)),a.set(i,v)),v!==void 0){var p=_(v);return p===Y?void 0:p}return Reflect.get(u,i,o)},getOwnPropertyDescriptor(u,i){var o=Reflect.getOwnPropertyDescriptor(u,i);if(o&&"value"in o){var v=a.get(i);v&&(o.value=_(v))}else if(o===void 0){var c=a.get(i),p=c==null?void 0:c.v;if(c!==void 0&&p!==Y)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return o},has(u,i){var p;if(i===Ne)return!0;var o=a.get(i),v=o!==void 0&&o.v!==Y||Reflect.has(u,i);if(o!==void 0||S!==null&&(!v||(p=Se(u,i))!=null&&p.writable)){o===void 0&&(o=G(v?T(u[i],f):Y),a.set(i,o));var c=_(o);if(c===Y)return!1}return v},set(u,i,o,v){var C;var c=a.get(i),p=i in u;if(l&&i==="length")for(var d=o;d<c.v;d+=1){var h=a.get(d+"");h!==void 0?b(h,Y):d in u&&(h=G(Y),a.set(d+"",h))}c===void 0?(!p||(C=Se(u,i))!=null&&C.writable)&&(c=G(void 0),b(c,T(o,f)),a.set(i,c)):(p=c.v!==Y,b(c,T(o,f)));var g=Reflect.getOwnPropertyDescriptor(u,i);if(g!=null&&g.set&&g.set.call(v,o),!p){if(l&&typeof i=="string"){var N=a.get("length"),x=Number(i);Number.isInteger(x)&&x>=N.v&&b(N,x+1)}Yt(s)}return!0},ownKeys(u){_(s);var i=Reflect.ownKeys(u).filter(c=>{var p=a.get(c);return p===void 0||p.v!==Y});for(var[o,v]of a)v.v!==Y&&!(o in u)&&i.push(o);return i},setPrototypeOf(){dn()}})}function Yt(e,t=1){b(e,e.v+t)}var Te,cr,vr;function Tn(){if(Te===void 0){Te=window;var e=Element.prototype,t=Node.prototype;cr=Se(t,"firstChild").get,vr=Se(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Tt(e=""){return document.createTextNode(e)}function Ze(e){return cr.call(e)}function tt(e){return vr.call(e)}function y(e,t){return Ze(e)}function Ae(e,t){{var r=Ze(e);return r instanceof Comment&&r.data===""?tt(r):r}}function L(e,t=1,r=!1){let n=e;for(;t--;)n=tt(n);return n}function An(e){e.textContent=""}function he(e){var t=ie|ue;S===null?t|=me:S.f|=ir;const r={children:null,ctx:P,deps:null,equals:sr,f:t,fn:e,reactions:null,v:null,version:0,parent:S};if(A!==null&&A.f&ie){var n=A;(n.children??(n.children=[])).push(r)}return r}function dr(e){const t=he(e);return t.equals=St,t}function _r(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&ie?At(n):de(n)}}}function pr(e){var t,r=S;re(e.parent);try{_r(e),t=Tr(e)}finally{re(r)}return t}function hr(e){var t=pr(e),r=(Ee||e.f&me)&&e.deps!==null?Ve:V;ae(e,r),e.equals(t)||(e.v=t,e.version=Cr())}function At(e){_r(e),je(e,0),ae(e,Ye),e.v=e.children=e.deps=e.ctx=e.reactions=null}function gr(e){S===null&&A===null&&un(),A!==null&&A.f&me&&on(),Dt&&sn()}function In(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Pe(e,t,r,n=!0){var a=(e&$e)!==0,l=S,s={ctx:P,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|ue,first:null,fn:t,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=xe;try{zt(!0),at(s),s.f|=rn}catch(o){throw de(s),o}finally{zt(f)}}else t!==null&&lt(s);var u=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&ir)===0;if(!u&&!a&&n&&(l!==null&&In(s,l),A!==null&&A.f&ie)){var i=A;(i.children??(i.children=[])).push(s)}return s}function mr(e){const t=Pe(He,null,!1);return ae(t,V),t.teardown=e,t}function vt(e){gr();var t=S!==null&&(S.f&Z)!==0&&P!==null&&!P.m;if(t){var r=P;(r.e??(r.e=[])).push({fn:e,effect:S,reaction:A})}else{var n=It(e);return n}}function Ln(e){return gr(),Lt(e)}function On(e){const t=Pe($e,e,!0);return()=>{de(t)}}function It(e){return Pe(lr,e,!1)}function Lt(e){return Pe(He,e,!0)}function M(e){return rt(e)}function rt(e,t=0){return Pe(He|kt|t,e,!0)}function Ie(e,t=!0){return Pe(He|Z,e,!0,t)}function yr(e){var t=e.teardown;if(t!==null){const r=Dt,n=A;Gt(!0),fe(null);try{t.call(null)}finally{Gt(r),fe(n)}}}function br(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)At(t[r])}}function wr(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;de(r,t),r=n}}function Pn(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Z||de(t),t=r}}function de(e,t=!0){var r=!1;if((t||e.f&an)&&e.nodes_start!==null){for(var n=e.nodes_start,a=e.nodes_end;n!==null;){var l=n===a?null:tt(n);n.remove(),n=l}r=!0}wr(e,t&&!r),br(e),je(e,0),ae(e,Ye);var s=e.transitions;if(s!==null)for(const u of s)u.stop();yr(e);var f=e.parent;f!==null&&f.first!==null&&Er(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function Er(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function dt(e,t){var r=[];Ot(e,r,!0),kr(r,()=>{de(e),t&&t()})}function kr(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Ot(e,t,r){if(!(e.f&ee)){if(e.f^=ee,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var a=n.next,l=(n.f&et)!==0||(n.f&Z)!==0;Ot(n,t,l?r:!1),n=a}}}function Xe(e){Sr(e,!0)}function Sr(e,t){if(e.f&ee){ze(e)&&at(e),e.f^=ee;for(var r=e.first;r!==null;){var n=r.next,a=(r.f&et)!==0||(r.f&Z)!==0;Sr(r,a?t:!1),r=n}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&l.in()}}let _t=!1,pt=[];function Dn(){_t=!1;const e=pt.slice();pt=[],ft(e)}function Pt(e){_t||(_t=!0,queueMicrotask(Dn)),pt.push(e)}function Nr(e){throw new Error("lifecycle_outside_component")}let Qe=!1,xe=!1,Dt=!1;function zt(e){xe=e}function Gt(e){Dt=e}let ht=[],Ue=0;let A=null;function fe(e){A=e}let S=null;function re(e){S=e}let te=null;function Mn(e){te=e}let U=null,z=0,oe=null;function Rn(e){oe=e}let xr=0,Ee=!1,P=null;function Cr(){return++xr}function nt(){return!Oe||P!==null&&P.l===null}function ze(e){var s,f;var t=e.f;if(t&ue)return!0;if(t&Ve){var r=e.deps,n=(t&me)!==0;if(r!==null){var a;if(t&We){for(a=0;a<r.length;a++)((s=r[a]).reactions??(s.reactions=[])).push(e);e.f^=We}for(a=0;a<r.length;a++){var l=r[a];if(ze(l)&&hr(l),n&&S!==null&&!Ee&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(e))&&(l.reactions??(l.reactions=[])).push(e),l.version>e.version)return!0}}n||ae(e,V)}return!1}function Fn(e,t,r){throw e}function Tr(e){var c;var t=U,r=z,n=oe,a=A,l=Ee,s=te,f=P,u=e.f;U=null,z=0,oe=null,A=u&(Z|$e)?null:e,Ee=!xe&&(u&me)!==0,te=null,P=e.ctx;try{var i=(0,e.fn)(),o=e.deps;if(U!==null){var v;if(je(e,z),o!==null&&z>0)for(o.length=z+U.length,v=0;v<U.length;v++)o[z+v]=U[v];else e.deps=o=U;if(!Ee)for(v=z;v<o.length;v++)((c=o[v]).reactions??(c.reactions=[])).push(e)}else o!==null&&z<o.length&&(je(e,z),o.length=z);return i}finally{U=t,z=r,oe=n,A=a,Ee=l,te=s,P=f}}function qn(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&t.f&ie&&(U===null||!U.includes(t))&&(ae(t,Ve),t.f&(me|We)||(t.f^=We),je(t,0))}function je(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)qn(e,r[n])}function at(e){var t=e.f;if(!(t&Ye)){ae(e,V);var r=S;S=e;try{t&kt?Pn(e):wr(e),br(e),yr(e);var n=Tr(e);e.teardown=typeof n=="function"?n:null,e.version=xr}catch(a){Fn(a)}finally{S=r}}}function Un(){Ue>1e3&&(Ue=0,fn()),Ue++}function Bn(e){var t=e.length;if(t!==0){Un();var r=xe;xe=!0;try{for(var n=0;n<t;n++){var a=e[n];a.f&V||(a.f^=V);var l=[];Ar(a,l),jn(l)}}finally{xe=r}}}function jn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];!(n.f&(Ye|ee))&&ze(n)&&(at(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Er(n):n.fn=null))}}function Hn(){if(Qe=!1,Ue>1001)return;const e=ht;ht=[],Bn(e),Qe||(Ue=0)}function lt(e){Qe||(Qe=!0,queueMicrotask(Hn));for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&($e|Z)){if(!(r&V))return;t.f^=V}}ht.push(t)}function Ar(e,t){var r=e.first,n=[];e:for(;r!==null;){var a=r.f,l=(a&Z)!==0,s=l&&(a&V)!==0;if(!s&&!(a&ee))if(a&He){l?r.f^=V:ze(r)&&at(r);var f=r.first;if(f!==null){r=f;continue}}else a&lr&&n.push(r);var u=r.next;if(u===null){let v=r.parent;for(;v!==null;){if(e===v)break e;var i=v.next;if(i!==null){r=i;continue e}v=v.parent}}r=u}for(var o=0;o<n.length;o++)f=n[o],t.push(f),Ar(f,t)}function _(e){var f;var t=e.f,r=(t&ie)!==0;if(r&&t&Ye){var n=pr(e);return At(e),n}if(A!==null){te!==null&&te.includes(e)&&_n();var a=A.deps;U===null&&a!==null&&a[z]===e?z++:U===null?U=[e]:U.push(e),oe!==null&&S!==null&&S.f&V&&!(S.f&Z)&&oe.includes(e)&&(ae(S,ue),lt(S))}else if(r&&e.deps===null){var l=e,s=l.parent;s!==null&&!((f=s.deriveds)!=null&&f.includes(l))&&(s.deriveds??(s.deriveds=[])).push(l)}return r&&(l=e,ze(l)&&hr(l)),e.v}function J(e){const t=A;try{return A=null,e()}finally{A=t}}const $n=~(ue|Ve|V);function ae(e,t){e.f=e.f&$n|t}function F(e,t=!1,r){P={p:P,c:null,e:null,m:!1,s:e,x:null,l:null},Oe&&!t&&(P.l={s:null,u:null,r1:[],r2:G(!1)})}function q(e){const t=P;if(t!==null){const s=t.e;if(s!==null){var r=S,n=A;t.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];re(l.effect),fe(l.reaction),It(l.fn)}}finally{re(r),fe(n)}}P=t.p,t.m=!0}return{}}function Vn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ne in e)gt(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ne in r&&gt(r)}}}function gt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{gt(e[n],t)}catch{}const r=Ke(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=ar(r);for(let a in n){const l=n[a].get;if(l)try{l.call(e)}catch{}}}}}let Jt=!1;function Yn(){Jt||(Jt=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Ir(e){var t=A,r=S;fe(null),re(null);try{return e()}finally{fe(t),re(r)}}function zn(e,t,r,n=r){e.addEventListener(t,()=>Ir(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n()}:e.__on_r=n,Yn()}const Lr=new Set,mt=new Set;function Gn(e,t,r,n){function a(l){if(n.capture||qe.call(t,l),!l.cancelBubble)return Ir(()=>r.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Pt(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Le(e,t,r,n,a){var l={capture:n,passive:a},s=Gn(e,t,r,l);(t===document.body||t===window||t===document)&&mr(()=>{t.removeEventListener(e,s,l)})}function ye(e){for(var t=0;t<e.length;t++)Lr.add(e[t]);for(var r of mt)r(e)}function qe(e){var x;var t=this,r=t.ownerDocument,n=e.type,a=((x=e.composedPath)==null?void 0:x.call(e))||[],l=a[0]||e.target,s=0,f=e.__root;if(f){var u=a.indexOf(f);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var i=a.indexOf(t);if(i===-1)return;u<=i&&(s=u)}if(l=a[s]||e.target,l!==t){Xr(e,"currentTarget",{configurable:!0,get(){return l||r}});var o=A,v=S;fe(null),re(null);try{for(var c,p=[];l!==null;){var d=l.assignedSlot||l.parentNode||l.host||null;try{var h=l["__"+n];if(h!==void 0&&!l.disabled)if(wt(h)){var[g,...N]=h;g.apply(l,[e,...N])}else h.call(l,e)}catch(C){c?p.push(C):c=C}if(e.cancelBubble||d===t||d===null)break;l=d}if(c){for(let C of p)queueMicrotask(()=>{throw C});throw c}}finally{e.__root=t,delete e.currentTarget,fe(o),re(v)}}}function Jn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function yt(e,t){var r=S;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function E(e,t){var r=(t&Nn)!==0,n=(t&xn)!==0,a,l=!e.startsWith("<!>");return()=>{a===void 0&&(a=Jn(l?e:"<!>"+e),r||(a=Ze(a)));var s=n?document.importNode(a,!0):a.cloneNode(!0);if(r){var f=Ze(s),u=s.lastChild;yt(f,u)}else yt(s,s);return s}}function Mt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Tt();return e.append(t,r),yt(t,r),e}function w(e,t){e!==null&&e.before(t)}const Kn=["touchstart","touchmove"];function Wn(e){return Kn.includes(e)}function j(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Zn(e,t){return Xn(e,t)}const be=new Map;function Xn(e,{target:t,anchor:r,props:n={},events:a,context:l,intro:s=!0}){Tn();var f=new Set,u=v=>{for(var c=0;c<v.length;c++){var p=v[c];if(!f.has(p)){f.add(p);var d=Wn(p);t.addEventListener(p,qe,{passive:d});var h=be.get(p);h===void 0?(document.addEventListener(p,qe,{passive:d}),be.set(p,1)):be.set(p,h+1)}}};u(Et(Lr)),mt.add(u);var i=void 0,o=On(()=>{var v=r??t.appendChild(Tt());return Ie(()=>{if(l){F({});var c=P;c.c=l}a&&(n.$$events=a),i=e(v,n)||{},l&&q()}),()=>{var d;for(var c of f){t.removeEventListener(c,qe);var p=be.get(c);--p===0?(document.removeEventListener(c,qe),be.delete(c)):be.set(c,p)}mt.delete(u),Kt.delete(i),v!==r&&((d=v.parentNode)==null||d.removeChild(v))}});return Kt.set(i,o),i}let Kt=new WeakMap;function H(e,t,r,n=null,a=!1){var l=e,s=null,f=null,u=null,i=a?et:0;rt(()=>{u!==(u=!!t())&&(u?(s?Xe(s):s=Ie(()=>r(l)),f&&dt(f,()=>{f=null})):(f?Xe(f):n&&(f=Ie(()=>n(l))),s&&dt(s,()=>{s=null})))},i)}function ce(e,t){return t}function Qn(e,t,r,n){for(var a=[],l=t.length,s=0;s<l;s++)Ot(t[s].e,a,!0);var f=l>0&&a.length===0&&r!==null;if(f){var u=r.parentNode;An(u),u.append(r),n.clear(),se(e,t[0].prev,t[l-1].next)}kr(a,()=>{for(var i=0;i<l;i++){var o=t[i];f||(n.delete(o.k),se(e,o.prev,o.next)),de(o.e,!f)}})}function ve(e,t,r,n,a,l=null){var s=e,f={flags:t,items:new Map,first:null},u=(t&fr)!==0;if(u){var i=e;s=i.appendChild(Tt())}var o=null,v=!1;rt(()=>{var c=r(),p=wt(c)?c:c==null?[]:Et(c),d=p.length;if(!(v&&d===0)){v=d===0;{var h=A;ea(p,f,s,a,t,(h.f&ee)!==0,n)}l!==null&&(d===0?o?Xe(o):o=Ie(()=>l(s)):o!==null&&dt(o,()=>{o=null})),r()}})}function ea(e,t,r,n,a,l,s){var qt,Ut,Bt,jt;var f=(a&mn)!==0,u=(a&(xt|Ct))!==0,i=e.length,o=t.items,v=t.first,c=v,p,d=null,h,g=[],N=[],x,C,m,k;if(f)for(k=0;k<i;k+=1)x=e[k],C=s(x,k),m=o.get(C),m!==void 0&&((qt=m.a)==null||qt.measure(),(h??(h=new Set)).add(m));for(k=0;k<i;k+=1){if(x=e[k],C=s(x,k),m=o.get(C),m===void 0){var X=c?c.e.nodes_start:r;d=ra(X,t,d,d===null?t.first:d.next,x,C,k,n,a),o.set(C,d),g=[],N=[],c=d.next;continue}if(u&&ta(m,x,k,a),m.e.f&ee&&(Xe(m.e),f&&((Ut=m.a)==null||Ut.unfix(),(h??(h=new Set)).delete(m))),m!==c){if(p!==void 0&&p.has(m)){if(g.length<N.length){var I=N[0],D;d=I.prev;var Q=g[0],st=g[g.length-1];for(D=0;D<g.length;D+=1)Wt(g[D],I,r);for(D=0;D<N.length;D+=1)p.delete(N[D]);se(t,Q.prev,st.next),se(t,d,Q),se(t,st,I),c=I,d=st,k-=1,g=[],N=[]}else p.delete(m),Wt(m,c,r),se(t,m.prev,m.next),se(t,m,d===null?t.first:d.next),se(t,d,m),d=m;continue}for(g=[],N=[];c!==null&&c.k!==C;)(l||!(c.e.f&ee))&&(p??(p=new Set)).add(c),N.push(c),c=c.next;if(c===null)continue;m=c}g.push(m),d=m,c=m.next}if(c!==null||p!==void 0){for(var Fe=p===void 0?[]:Et(p);c!==null;)(l||!(c.e.f&ee))&&Fe.push(c),c=c.next;var ot=Fe.length;if(ot>0){var Gr=a&fr&&i===0?r:null;if(f){for(k=0;k<ot;k+=1)(Bt=Fe[k].a)==null||Bt.measure();for(k=0;k<ot;k+=1)(jt=Fe[k].a)==null||jt.fix()}Qn(t,Fe,Gr,o)}}f&&Pt(()=>{var Ht;if(h!==void 0)for(m of h)(Ht=m.a)==null||Ht.apply()}),S.first=t.first&&t.first.e,S.last=d&&d.e}function ta(e,t,r,n){n&xt&&ct(e.v,t),n&Ct?ct(e.i,r):e.i=r}function ra(e,t,r,n,a,l,s,f,u){var i=(u&xt)!==0,o=(u&yn)===0,v=i?o?Nt(a):G(a):a,c=u&Ct?G(s):s,p={i:c,v,k:l,a:null,e:null,prev:r,next:n};try{return p.e=Ie(()=>f(e,v,c),Cn),p.e.prev=r&&r.e,p.e.next=n&&n.e,r===null?t.first=p:(r.next=p,r.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function Wt(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,l=e.e.nodes_start;l!==n;){var s=tt(l);a.before(l),l=s}}function se(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Or(e,t,...r){var n=e,a=W,l;rt(()=>{a!==(a=t())&&(l&&(de(l),l=null),l=Ie(()=>a(n,...r)))},et)}function it(e,t){var r=e.__attributes??(e.__attributes={});r.value===(r.value=t)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t)}function K(e,t,r,n){var a=e.__attributes??(e.__attributes={});a[t]!==(a[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[ln]=r),r==null?e.removeAttribute(t):typeof r!="string"&&na(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Zt=new Map;function na(e){var t=Zt.get(e.nodeName);if(t)return t;Zt.set(e.nodeName,t=[]);for(var r,n=Ke(e),a=Element.prototype;a!==n;){r=ar(n);for(var l in r)r[l].set&&t.push(l);n=Ke(n)}return t}function De(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function Pr(e,t,r,n){var a=e.__styles??(e.__styles={});a[t]!==r&&(a[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}function Dr(e,t,r=t){var n=nt();zn(e,"input",()=>{var a=Xt(e)?Qt(e.value):e.value;r(a),n&&a!==(a=t())&&(e.value=a??"")}),Lt(()=>{var a=t();Xt(e)&&a===Qt(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Xt(e){var t=e.type;return t==="number"||t==="range"}function Qt(e){return e===""?null:+e}function er(e,t){return e===t||(e==null?void 0:e[Ne])===t}function Rt(e={},t,r,n){return It(()=>{var a,l;return Lt(()=>{a=l,l=[],J(()=>{e!==r(...l)&&(t(e,...l),a&&er(r(...a),e)&&t(null,...a))})}),()=>{Pt(()=>{l&&er(r(...l),e)&&t(null,...l)})}}),e}function Mr(e=!1){const t=P,r=t.l.u;if(!r)return;let n=()=>Vn(t.s);if(e){let a=0,l={};const s=he(()=>{let f=!1;const u=t.s;for(const i in u)u[i]!==l[i]&&(l[i]=u[i],f=!0);return f&&a++,a});n=()=>_(s)}r.b.length&&Ln(()=>{tr(t,n),ft(r.b)}),vt(()=>{const a=J(()=>r.m.map(tn));return()=>{for(const l of a)typeof l=="function"&&l()}}),r.a.length&&vt(()=>{tr(t,n),ft(r.a)})}function tr(e,t){if(e.l.s)for(const r of e.l.s)_(r);t()}function Rr(e,t,r){if(e==null)return t(void 0),W;const n=J(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}let Ge=!1;function Me(e,t,r){const n=r[t]??(r[t]={store:null,source:Nt(void 0),unsubscribe:W});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=W;else{var a=!0;n.unsubscribe=Rr(e,l=>{a?n.source.v=l:b(n.source,l)}),a=!1}return _(n.source)}function Re(){const e={};return mr(()=>{for(var t in e)e[t].unsubscribe()}),e}function ut(e,t,r){return e.set(r),t}function aa(e){var t=Ge;try{return Ge=!1,[e(),Ge]}finally{Ge=t}}function rr(e){for(var t=S,r=S;t!==null&&!(t.f&(Z|$e));)t=t.parent;try{return re(t),e()}finally{re(r)}}function $(e,t,r,n){var X;var a=(r&bn)!==0,l=!Oe||(r&wn)!==0,s=(r&kn)!==0,f=(r&Sn)!==0,u=!1,i;s?[i,u]=aa(()=>e[t]):i=e[t];var o=(X=Se(e,t))==null?void 0:X.set,v=n,c=!0,p=!1,d=()=>(p=!0,c&&(c=!1,f?v=J(n):v=n),v);i===void 0&&n!==void 0&&(o&&l&&cn(),i=d(),o&&o(i));var h;if(l)h=()=>{var I=e[t];return I===void 0?d():(c=!0,p=!1,I)};else{var g=rr(()=>(a?he:dr)(()=>e[t]));g.f|=nn,h=()=>{var I=_(g);return I!==void 0&&(v=void 0),I===void 0?v:I}}if(!(r&En))return h;if(o){var N=e.$$legacy;return function(I,D){return arguments.length>0?((!l||!D||N||u)&&o(D?h():I),I):h()}}var x=!1,C=!1,m=Nt(i),k=rr(()=>he(()=>{var I=h(),D=_(m);return x?(x=!1,C=!0,D):(C=!1,m.v=I)}));return a||(k.equals=St),function(I,D){if(arguments.length>0){const Q=D?_(k):l&&s?T(I):I;return k.equals(Q)||(x=!0,b(m,Q),p&&v!==void 0&&(v=Q),J(()=>_(k))),I}return _(k)}}function Fr(e){P===null&&Nr(),Oe&&P.l!==null?ia(P).m.push(e):vt(()=>{const t=J(e);if(typeof t=="function")return t})}function la(e){P===null&&Nr(),Fr(()=>()=>J(e))}function ia(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const sa="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(sa);const we=[];function Ft(e,t=W){let r=null;const n=new Set;function a(f){if(or(e,f)&&(e=f,r)){const u=!we.length;for(const i of n)i[1](),we.push(i,e);if(u){for(let i=0;i<we.length;i+=2)we[i][0](we[i+1]);we.length=0}}}function l(f){a(f(e))}function s(f,u=W){const i=[f,u];return n.add(i),n.size===1&&(r=t(a,l)||W),f(e),()=>{n.delete(i),n.size===0&&r&&(r(),r=null)}}return{set:a,update:l,subscribe:s}}function oa(e){let t;return Rr(e,r=>t=r)(),t}const Be=class Be{static set(t){this.store.update(r=>r.set(t.url,t))}static update(t,r){this.store.update(n=>n.set(t,{...n.get(t),...r}))}static delete(t){this.store.update(r=>(r.delete(t),r))}static subscribeToLocalStorage(){this.store.subscribe(t=>localStorage[this.LS_CACHE]=JSON.stringify(t,(r,n)=>n instanceof Map?[...n]:n))}};_e(Be,"LS_CACHE","bookmarks"),_e(Be,"store",Ft(new Map(JSON.parse(localStorage[Be.LS_CACHE]||"[]"))));let ge=Be;const O={url:"URL",tag:"Tag",name:"Name",add:"Add",all:"All",addBookmark:"Add bookmark",addChannel:"Add channel",settings:"Settings",youtubeChannelOrPlaylist:"Youtube channel or playlist",empty:"Empty",noBookmarksFound:"No bookmarks found",noChannelsFound:"No channels found",noVideosFound:"No videos found",noConfigFound:"No config found",general:"General",channels:"Channels",bookmarks:"Bookmarks",remove:"Remove",restore:"Restore",instance:"Instance",instanceId:"settings-instance",cache:"Cache (in minutes)",cacheId:"settings-cache"};var ua=E('<li class="tag-bookmark svelte-1km2vtn"><a> </a></li>'),fa=E('<ul class="tag svelte-1km2vtn"><h3 class="tag-name svelte-1km2vtn"> </h3> <!></ul>'),ca=E('<p class="no-bookmarks svelte-1km2vtn"> </p>'),va=E('<div class="container svelte-1km2vtn"><!></div>');function da(e,t){F(t,!0);const r=Re(),n=()=>Me(l,"$store",r);let a=$(t,"width",3,"100%"),{store:l}=ge;var s=va(),f=y(s);H(f,()=>n().size,u=>{var i=Mt(),o=Ae(i);ve(o,1,()=>Map.groupBy(n().values(),({tag:v})=>v),ce,(v,c)=>{let p=()=>_(c)[0],d=()=>_(c)[1];var h=fa(),g=y(h),N=y(g),x=L(g,2);ve(x,17,d,ce,(C,m)=>{let k=()=>_(m).url,X=()=>_(m).name;var I=ua(),D=y(I),Q=y(D);M(()=>{K(D,"href",k()),j(Q,X())}),w(C,I)}),M(()=>j(N,p())),w(v,h)}),w(u,i)},u=>{var i=ca(),o=y(i);M(()=>j(o,O.noBookmarksFound)),w(u,i)}),M(()=>Pr(s,"flex-basis",a())),w(e,s),q()}class Ce{static get get(){return oa(ke)}static get save(){try{return JSON.parse(localStorage[this.name]||"{}")}catch{return{}}}static saveOnChange(){ke.subscribe(t=>localStorage[this.name]=JSON.stringify(t))}}_e(Ce,"name","config");const ke=Ft({instance:{label:"kavin.rocks",value:"https://pipedapi.kavin.rocks"},instances:[{label:"kavin.rocks",value:"https://pipedapi.kavin.rocks"},{label:"piped.yt",value:"https://api.piped.yt"}],cacheLifetimeInMinutes:10,...Ce.save});var R,qr,Ur,Br,jr,Hr,$r,bt;const pe=class pe{static async set(t,r=!1){let n=le(this,R,$r).call(this,t);return n===void 0?new Promise((a,l)=>l(`No ID found in ${t}`)):(le(this,R,bt).call(this,t)?le(this,R,Ur).call(this,n):le(this,R,qr).call(this,n)).then(a=>r?this.update(t,{videos:a.videos}):this.store.update(l=>l.set(t,a)))}static update(t,r){this.store.update(n=>n.set(t,{...n.get(t),...r}))}static delete(t){this.store.update(r=>(r.delete(t),r))}static subscribeToLocalStorage(){this.store.subscribe(t=>localStorage[this.LS_CACHE]=JSON.stringify(t,(r,n)=>n instanceof Map?[...n]:n))}static async refetch(t=!0){t&&le(this,R,Hr).call(this)||(console.log("Fetching ..."),this.store.update(r=>(r.forEach((n,a)=>this.set(a,!0)),r)),le(this,R,jr).call(this))}};R=new WeakSet,qr=async function(t){return fetch(`${Ce.get.instance.value}/channels/tabs?data={"id":"${t}","contentFilters":["videos"]}`).then(r=>r.json()).then(r=>{var n;return{name:(n=r==null?void 0:r.content[0])==null?void 0:n.uploaderName,displayName:void 0,videos:r.content.map(a=>({url:a.url,title:a.title,uploaderUrl:a.uploaderUrl,uploaderName:a.uploaderName,uploaded:a.uploaded,uploadedDate:a.uploadedDate}))}})},Ur=async function(t){return fetch(`${Ce.get.instance.value}/playlists/${t}`).then(r=>r.json()).then(r=>({name:r.name,displayName:void 0,videos:r.relatedStreams.map(n=>({url:n.url,title:n.title,uploaderUrl:n.uploaderUrl,uploaderName:n.uploaderName,uploaded:n.uploaded,uploadedDate:n.uploadedDate}))}))},Br=function(){return parseInt(localStorage[this.LS_CACHE_UPDATE_TIME])},jr=function(){localStorage[this.LS_CACHE_UPDATE_TIME]=Date.now()},Hr=function(){const t=le(this,R,Br).call(this);return typeof t=="number"?Date.now()<t+Ce.get.cacheLifetimeInMinutes*6e4:!1},$r=function(t){let r=le(this,R,bt).call(this,t)?"=":"/";return t.split(r).pop()},bt=function(t){return t.includes("playlist")},Vt(pe,R),_e(pe,"LS_CACHE","channels"),_e(pe,"LS_CACHE_UPDATE_TIME","channelsUpdateTime"),_e(pe,"store",Ft(new Map(JSON.parse(localStorage[pe.LS_CACHE]||"[]"))));let ne=pe;var _a=E('<li class="video svelte-aulm37"><h4 class="video-title svelte-aulm37"><a class="video-url svelte-aulm37"> </a></h4> <p class="video-description svelte-aulm37"><a class="video-uploader svelte-aulm37"> </a> </p></li>'),pa=E("<ul></ul>"),ha=E('<p class="no-videos svelte-aulm37"> </p>'),ga=E('<div class="container svelte-aulm37"><!></div>');function ma(e,t){F(t,!0);const r=Re(),n=()=>Me(l,"$store",r);let a=$(t,"width",3,"100%"),{store:l}=ne,s=he(()=>{let i=n().get(t.id);return i?i.videos.map(o=>({...o,uploaderName:i.displayName||i.name})):Array.from(n().values()).flatMap(o=>o.videos.map(v=>({...v,uploaderName:o.displayName||o.name}))).sort((o,v)=>v.uploaded-o.uploaded)});var f=ga(),u=y(f);H(u,()=>_(s).length,i=>{var o=pa();ve(o,21,()=>_(s),ce,(v,c)=>{var p=_a(),d=y(p),h=y(d),g=y(h),N=L(d,2),x=y(N),C=y(x),m=L(x);M(()=>{K(h,"href",`https://youtube.com${_(c).url}`),j(g,_(c).title),K(x,"href",`https://youtube.com${_(c).uploaderUrl}`),j(C,_(c).uploaderName),j(m,` ${_(c).uploadedDate??""}`)}),w(v,p)}),w(i,o)},i=>{var o=ha(),v=y(o);M(()=>j(v,O.noVideosFound)),w(i,o)}),M(()=>Pr(f,"flex-basis",a())),w(e,f),q()}var ya=E('<div class="gg-spinner-container svelte-5bjovn"><i class="gg-spinner svelte-5bjovn"></i></div>'),ba=E('<div class="container svelte-5bjovn"><input type="submit" class="svelte-5bjovn"> <!></div>');function Vr(e,t){var r=ba(),n=y(r);n.__click=function(...l){var s;(s=t.onclick)==null||s.apply(this,l)};var a=L(n,2);H(a,()=>t.disabled,l=>{var s=ya();w(l,s)}),M(()=>{it(n,t.disabled?"":t.value),n.disabled=t.disabled}),w(e,r)}ye(["click"]);var wa=E('<input type="text" class="svelte-1gbmwft">');function Je(e,t){F(t,!0);let r=$(t,"value",15);var n=wa();M(()=>{K(n,"placeholder",t.placeholder),K(n,"title",t.error?O.empty:""),De(n,"error",t.error)}),Dr(n,r),w(e,n),q()}var Ea=E("<form><!> <!> <!> <!></form>");function ka(e,t){F(t,!0);let r=B(""),n=B(""),a=B(""),l=B(!1),s=B(!1),f=B(!1),u=d=>{d.preventDefault(),b(l,T(b(s,T(b(f,!1))))),_(r).length||b(l,!0),_(n).length||b(s,!0),_(a).length||b(f,!0),!(_(l)||_(s)||_(f))&&(ge.set({url:_(r),tag:_(n),name:_(a)}),b(r,T(b(n,T(b(a,""))))))};var i=Ea(),o=y(i);Je(o,{get error(){return _(l)},set error(d){b(l,T(d))},get value(){return _(r)},set value(d){b(r,T(d))},get placeholder(){return O.url}});var v=L(o,2);Je(v,{get error(){return _(s)},set error(d){b(s,T(d))},get value(){return _(n)},set value(d){b(n,T(d))},get placeholder(){return O.tag}});var c=L(v,2);Je(c,{get error(){return _(f)},set error(d){b(f,T(d))},get value(){return _(a)},set value(d){b(a,T(d))},get placeholder(){return O.name}});var p=L(c,2);Vr(p,{get value(){return O.add}}),Le("submit",i,u),w(e,i),q()}var Sa=E("<form><!> <!></form>");function Na(e,t){F(t,!0);let r=B(""),n=B(!1),a=B(!1),l=i=>{if(i.preventDefault(),!_(r).length){b(n,!0);return}b(a,!0),ne.set(_(r)).then(()=>{b(r,""),b(n,!1),b(a,!1)}).catch(o=>{b(n,!0),b(a,!1)})};var s=Sa(),f=y(s);Je(f,{get error(){return _(n)},set error(i){b(n,T(i))},get value(){return _(r)},set value(i){b(r,T(i))},get placeholder(){return O.youtubeChannelOrPlaylist}});var u=L(f,2);Vr(u,{get value(){return O.add},get disabled(){return _(a)}}),Le("submit",s,l),w(e,s),q()}var xa=E('<input class="nav-button svelte-10gk6aa" type="button">'),Ca=E('<li class="svelte-10gk6aa"><!></li>'),Ta=E('<li class="svelte-10gk6aa"><!></li>'),Aa=E('<ul class="content svelte-10gk6aa"><!> <!></ul>'),Ia=E('<div class="container svelte-10gk6aa"><!> <!></div>');function La(e,t){F(t,!0);const r=Re(),n=()=>Me(f,"$store",r),a=(h,g=W,N=W)=>{var x=xa();x.__click=function(...C){var m;(m=N())==null||m.apply(this,C)},M(()=>it(x,g())),w(h,x)};let l=$(t,"id",15),s=$(t,"open",3,!1),{store:f}=ne,u=B(T(s())),i,o=he(()=>n().entries().map(([h,g])=>({id:h,name:g.displayName||g.name,nameLowerCase:(g.displayName||g.name).toLowerCase()})).toArray().sort((h,g)=>h.nameLowerCase<g.nameLowerCase?-1:h.nameLowerCase>g.nameLowerCase?1:0));var v=Ia();Le("click",Te,h=>i.contains(h.target)||b(u,!1));var c=y(v),p=dr(()=>{var h;return((h=n().get(l()))==null?void 0:h.displayName)||O.all});a(c,()=>_(p),()=>()=>b(u,!_(u)));var d=L(c,2);H(d,()=>_(u),h=>{var g=Aa(),N=y(g);H(N,l,C=>{var m=Ca(),k=y(m);a(k,()=>O.all,()=>()=>l("")),w(C,m)});var x=L(N,2);ve(x,17,()=>_(o),ce,(C,m)=>{var k=Mt(),X=Ae(k);H(X,()=>l()!=_(m).id,I=>{var D=Ta(),Q=y(D);a(Q,()=>_(m).name,()=>()=>l(_(m).id)),w(I,D)}),w(C,k)}),w(h,g)}),Rt(v,h=>i=h,()=>i),w(e,v),q()}ye(["click"]);var Oa=(e,t)=>t(!t()),Pa=E('<button class="svelte-khigyg"> </button>');function Yr(e,t){let r=$(t,"open",15);var n=Pa();n.__click=[Oa,r];var a=y(n);M(()=>{De(n,"focus",r()),j(a,t.value)}),w(e,n)}ye(["click"]);var Da=E('<div class="content svelte-grwu2l"><!></div>'),Ma=E('<div class="container svelte-grwu2l"><!> <!></div>');function nr(e,t){F(t,!0);let r=$(t,"right",3,!1),n=$(t,"open",3,!1),a=B(T(n())),l;var s=Ma();Le("click",Te,i=>l.contains(i.target)||b(a,!1));var f=y(s);Yr(f,{get value(){return t.value},get open(){return _(a)},set open(i){b(a,T(i))}});var u=L(f,2);H(u,()=>_(a),i=>{var o=Da(),v=y(o);Or(v,()=>t.children),M(()=>De(o,"right",r())),w(i,o)}),Rt(s,i=>l=i,()=>l),w(e,s),q()}var Ra=E('<div class="content svelte-2zc687"><!></div>'),Fa=E("<div><!> <!></div>");function qa(e,t){F(t,!0);let r=$(t,"open",3,!1),n=B(T(r())),a;var l=Fa();Le("keyup",Te,u=>u.key=="Escape"&&b(n,!1)),Le("click",Te,u=>a.contains(u.target)||b(n,!1));var s=y(l);Yr(s,{get value(){return t.value},get open(){return _(n)},set open(u){b(n,T(u))}});var f=L(s,2);H(f,()=>_(n),u=>{var i=Ra(),o=y(i);Or(o,()=>t.children),w(u,i)}),Rt(l,u=>a=u,()=>a),w(e,l),q()}hn();var Ua=(e,t)=>b(t,!_(t)),Ba=E('<input type="button" class="svelte-1oxvapt">');function zr(e,t){F(t,!0);let r=B(!1);la(()=>_(r)&&t.remove());var n=Ba();n.__click=[Ua,r],M(()=>{it(n,_(r)?O.restore:O.remove),De(n,"removed",_(r))}),w(e,n),q()}ye(["click"]);var ja=E('<li class="setting svelte-1oytd4l"><p class="setting-text svelte-1oytd4l"> </p> <!></li>'),Ha=E('<ul class="settings svelte-1oytd4l"></ul>'),$a=E('<p class="no-channels svelte-1oytd4l"> </p>'),Va=E('<div class="container svelte-1oytd4l"><!></div>');function Ya(e,t){F(t,!1);const r=Re(),n=()=>Me(a,"$store",r);let{store:a}=ge;Mr();var l=Va(),s=y(l);H(s,()=>n().size,f=>{var u=Ha();ve(u,5,n,ce,(i,o)=>{let v=()=>_(o)[0],c=()=>_(o)[1].tag,p=()=>_(o)[1].name;var d=ja(),h=y(d),g=y(h),N=L(h,2);zr(N,{remove:()=>ge.delete(v())}),M(()=>j(g,`${c()??""}: ${p()??""}`)),w(i,d)}),w(f,u)},f=>{var u=$a(),i=y(u);M(()=>j(i,O.noChannelsFound)),w(f,u)}),w(e,l),q()}var za=(e,t,r)=>t(r()),Ga=(e,t,r)=>e.key=="Enter"&&t(r())&&ne.update(r(),{displayName:e.target.value}),Ja=E('<li class="setting svelte-1tesyap"><div class="fit svelte-1tesyap"><input type="text" class="setting-name svelte-1tesyap"></div> <!></li>'),Ka=E('<p class="hint svelte-1tesyap">Press enter to save channel name</p>'),Wa=E('<ul class="settings svelte-1tesyap"></ul> <!>',1),Za=E('<p class="no-channels svelte-1tesyap"> </p>'),Xa=E('<div class="container svelte-1tesyap"><!></div>');function Qa(e,t){F(t,!0);const r=Re(),n=()=>Me(a,"$store",r);let{store:a}=ne,l=B(T([])),s=o=>_(l).find(v=>v==o)||_(l).push(o),f=o=>b(l,T(_(l).filter(v=>v!=o)));var u=Xa(),i=y(u);H(i,()=>n().size,o=>{var v=Wa(),c=Ae(v);ve(c,5,n,ce,(d,h)=>{let g=()=>_(h)[0],N=()=>_(h)[1].name,x=()=>_(h)[1].displayName;var C=Ja(),m=y(C),k=y(m);k.__input=[za,s,g],k.__keyup=[Ga,f,g];const X=he(()=>_(l).includes(g()));var I=L(m,2);zr(I,{remove:()=>ne.delete(g())}),M(()=>{it(k,x()||N()),K(k,"placeholder",N()),De(k,"modified",_(X))}),w(d,C)});var p=L(c,2);H(p,()=>_(l).length,d=>{var h=Ka();w(d,h)}),w(o,v)},o=>{var v=Za(),c=y(v);M(()=>j(c,O.noChannelsFound)),w(o,v)}),w(e,u),q()}ye(["input","keyup"]);var el=E('<label class="svelte-1aeqj4x"> </label> <input type="number" class="svelte-1aeqj4x">',1);function tl(e,t){let r=$(t,"min",3,void 0),n=$(t,"max",3,void 0),a=$(t,"value",15);var l=el(),s=Ae(l),f=y(s),u=L(s,2);M(()=>{K(s,"for",t.id),j(f,t.label),K(u,"id",t.id),K(u,"min",r()),K(u,"max",n())}),Dr(u,a),w(e,l)}const rl=(e,t)=>{t(t().value=e.target.options[e.target.selectedIndex].value,!0),t(t().label=e.target.options[e.target.selectedIndex].label,!0)};var nl=E("<option> </option>"),al=E('<label class="svelte-3gogwe"> </label> <select class="svelte-3gogwe"><!><!></select>',1);function ll(e,t){F(t,!0);const r=(v,c=W,p=W)=>{var d=nl(),h={},g=y(d);M(()=>{h!==(h=c())&&(d.value=(d.__value=c())==null?"":c()),j(g,p())}),w(v,d)};let n=$(t,"use",15);var a=al(),l=Ae(a),s=y(l),f=L(l,2);f.__change=[rl,n];var u=y(f);r(u,()=>n().value,()=>n().label);var i=L(u);ve(i,17,()=>t.options,ce,(v,c)=>{let p=()=>_(c).value,d=()=>_(c).label;var h=Mt(),g=Ae(h);H(g,()=>n().value!=p(),N=>{r(N,p,d)}),w(v,h)}),M(()=>{K(l,"for",t.id),j(s,t.label),K(f,"id",t.id)}),w(e,a),q()}ye(["change"]);var il=E('<div class="container svelte-cy58sy"><ul class="settings svelte-cy58sy"><li class="setting svelte-cy58sy"><!></li> <li class="setting svelte-cy58sy"><!></li></ul></div>');function sl(e,t){F(t,!1);const r=Re(),n=()=>Me(ke,"$config",r);Mr();var a=il(),l=y(a),s=y(l),f=y(s);ll(f,{get id(){return O.instanceId},get label(){return O.instance},get use(){return n().instance},set use(o){ut(ke,J(n).instance=o,J(n))},get options(){return n().instances},set options(o){ut(ke,J(n).instances=o,J(n))},$$legacy:!0});var u=L(s,2),i=y(u);tl(i,{get id(){return O.cacheId},get label(){return O.cache},min:0,get value(){return n().cacheLifetimeInMinutes},set value(o){ut(ke,J(n).cacheLifetimeInMinutes=o,J(n))},$$legacy:!0}),w(e,a),q()}var ol=E('<li class="tab svelte-1fnj69h"><button class="tab-button svelte-1fnj69h"> </button></li>'),ul=E('<div class="container svelte-1fnj69h"><ul class="tabs svelte-1fnj69h"></ul> <!> <!> <!></div>');function fl(e,t){F(t,!0);let r=$(t,"open",3,0),n=[O.general,O.channels,O.bookmarks],a=B(T(r()));var l=ul(),s=y(l);ve(s,21,()=>n,ce,(o,v,c)=>{var p=ol(),d=y(p);d.__click=()=>b(a,T(c));var h=y(d);M(()=>{De(d,"focus",_(a)==c),j(h,_(v))}),w(o,p)});var f=L(s,2);H(f,()=>_(a)==0,o=>{sl(o,{})});var u=L(f,2);H(u,()=>_(a)==1,o=>{Qa(o,{})});var i=L(u,2);H(i,()=>_(a)==2,o=>{Ya(o,{})}),w(e,l),q()}ye(["click"]);var cl=E('<nav class="svelte-1lm0xij"><!> <section class="svelte-1lm0xij"><!> <!> <!></section></nav>');function vl(e,t){F(t,!0);let r=$(t,"id",15);var n=cl(),a=y(n);La(a,{get id(){return r()},set id(i){r(i)}});var l=L(a,2),s=y(l);nr(s,{get value(){return O.addChannel},children:(i,o)=>{Na(i,{})},$$slots:{default:!0}});var f=L(s,2);nr(f,{get value(){return O.addBookmark},children:(i,o)=>{ka(i,{})},$$slots:{default:!0}});var u=L(f,2);qa(u,{get value(){return O.settings},children:(i,o)=>{fl(i,{})},$$slots:{default:!0}}),w(e,n),q()}var dl=E('<main class="svelte-1oixlbt"><!> <section class="svelte-1oixlbt"><!> <!></section></main>');function _l(e,t){F(t,!0);let r=B("");Fr(()=>{Ce.saveOnChange(),ge.subscribeToLocalStorage(),ne.subscribeToLocalStorage(),ne.refetch()});var n=dl(),a=y(n);vl(a,{get id(){return _(r)},set id(u){b(r,T(u))}});var l=L(a,2),s=y(l);ma(s,{width:"33%",get id(){return _(r)},set id(u){b(r,T(u))}});var f=L(s,2);da(f,{width:"67%"}),w(e,n),q()}Zn(_l,{target:document.getElementById("app")});
