var Vr=Object.defineProperty;var Ut=e=>{throw TypeError(e)};var Yr=(e,t,r)=>t in e?Vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var fe=(e,t,r)=>Yr(e,typeof t!="symbol"?t+"":t,r),Jr=(e,t,r)=>t.has(e)||Ut("Cannot "+r);var Bt=(e,t,r)=>t.has(e)?Ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var re=(e,t,r)=>(Jr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Gr=!1;var mt=Array.isArray,bt=Array.from,Kr=Object.defineProperty,we=Object.getOwnPropertyDescriptor,rr=Object.getOwnPropertyDescriptors,Wr=Object.prototype,Zr=Array.prototype,Je=Object.getPrototypeOf;const ne=()=>{};function Xr(e){return e()}function st(e){for(var t=0;t<e.length;t++)e[t]()}const ae=2,nr=4,qe=8,yt=16,G=32,$e=64,ge=128,Ge=256,B=512,se=1024,Ue=2048,Z=4096,Be=8192,Qr=16384,Xe=32768,en=65536,tn=1<<18,ar=1<<19,Ee=Symbol("$state"),rn=Symbol("");function ir(e){return e===this.v}function lr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function wt(e){return!lr(e,this.v)}function nn(e){throw new Error("effect_in_teardown")}function an(){throw new Error("effect_in_unowned_derived")}function ln(e){throw new Error("effect_orphan")}function sn(){throw new Error("effect_update_depth_exceeded")}function on(e){throw new Error("props_invalid_value")}function un(){throw new Error("state_descriptors_fixed")}function fn(){throw new Error("state_prototype_fixed")}function cn(){throw new Error("state_unsafe_local_read")}function vn(){throw new Error("state_unsafe_mutation")}let Ae=!1;function dn(){Ae=!0}function z(e){return{f:0,v:e,reactions:null,equals:ir,version:0}}function q(e){return _n(z(e))}function Et(e,t=!1){var n;const r=z(e);return t||(r.equals=wt),Ae&&O!==null&&O.l!==null&&((n=O.l).s??(n.s=[])).push(r),r}function _n(e){return A!==null&&A.f&ae&&(X===null?Pn([e]):X.push(e)),e}function m(e,t){return A!==null&&tt()&&A.f&(ae|yt)&&(X===null||!X.includes(e))&&vn(),ot(e,t)}function ot(e,t){return e.equals(t)||(e.v=t,e.version=xr(),sr(e,se),tt()&&S!==null&&S.f&B&&!(S.f&G)&&(F!==null&&F.includes(e)?(te(S,se),nt(S)):le===null?Dn([e]):le.push(e))),t}function sr(e,t){var r=e.reactions;if(r!==null)for(var n=tt(),a=r.length,i=0;i<a;i++){var s=r[i],f=s.f;f&se||!n&&s===S||(te(s,t),f&(B|ge)&&(f&ae?sr(s,Ue):nt(s)))}}const kt=1,St=2,or=4,hn=8,pn=16,gn=1,mn=2,bn=4,yn=8,wn=16,En=1,kn=2,H=Symbol();let Sn=!1;function N(e,t=null,r){if(typeof e!="object"||e===null||Ee in e)return e;const n=Je(e);if(n!==Wr&&n!==Zr)return e;var a=new Map,i=mt(e),s=z(0);i&&a.set("length",z(e.length));var f;return new Proxy(e,{defineProperty(u,l,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&un();var v=a.get(l);return v===void 0?(v=z(o.value),a.set(l,v)):m(v,N(o.value,f)),!0},deleteProperty(u,l){var o=a.get(l);if(o===void 0)l in u&&a.set(l,z(H));else{if(i&&typeof l=="string"){var v=a.get("length"),c=Number(l);Number.isInteger(c)&&c<v.v&&m(v,c)}m(o,H),Ht(s)}return!0},get(u,l,o){var h;if(l===Ee)return e;var v=a.get(l),c=l in u;if(v===void 0&&(!c||(h=we(u,l))!=null&&h.writable)&&(v=z(N(c?u[l]:H,f)),a.set(l,v)),v!==void 0){var _=d(v);return _===H?void 0:_}return Reflect.get(u,l,o)},getOwnPropertyDescriptor(u,l){var o=Reflect.getOwnPropertyDescriptor(u,l);if(o&&"value"in o){var v=a.get(l);v&&(o.value=d(v))}else if(o===void 0){var c=a.get(l),_=c==null?void 0:c.v;if(c!==void 0&&_!==H)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return o},has(u,l){var _;if(l===Ee)return!0;var o=a.get(l),v=o!==void 0&&o.v!==H||Reflect.has(u,l);if(o!==void 0||S!==null&&(!v||(_=we(u,l))!=null&&_.writable)){o===void 0&&(o=z(v?N(u[l],f):H),a.set(l,o));var c=d(o);if(c===H)return!1}return v},set(u,l,o,v){var C;var c=a.get(l),_=l in u;if(i&&l==="length")for(var h=o;h<c.v;h+=1){var p=a.get(h+"");p!==void 0?m(p,H):h in u&&(p=z(H),a.set(h+"",p))}c===void 0?(!_||(C=we(u,l))!=null&&C.writable)&&(c=z(void 0),m(c,N(o,f)),a.set(l,c)):(_=c.v!==H,m(c,N(o,f)));var b=Reflect.getOwnPropertyDescriptor(u,l);if(b!=null&&b.set&&b.set.call(v,o),!_){if(i&&typeof l=="string"){var T=a.get("length"),x=Number(l);Number.isInteger(x)&&x>=T.v&&m(T,x+1)}Ht(s)}return!0},ownKeys(u){d(s);var l=Reflect.ownKeys(u).filter(c=>{var _=a.get(c);return _===void 0||_.v!==H});for(var[o,v]of a)v.v!==H&&!(o in u)&&l.push(o);return l},setPrototypeOf(){fn()}})}function Ht(e,t=1){m(e,e.v+t)}var xe,ur,fr;function xn(){if(xe===void 0){xe=window;var e=Element.prototype,t=Node.prototype;ur=we(t,"firstChild").get,fr=we(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function xt(e=""){return document.createTextNode(e)}function Ke(e){return ur.call(e)}function Qe(e){return fr.call(e)}function y(e,t){return Ke(e)}function Ct(e,t){{var r=Ke(e);return r instanceof Comment&&r.data===""?Qe(r):r}}function P(e,t=1,r=!1){let n=e;for(;t--;)n=Qe(n);return n}function Cn(e){e.textContent=""}function ve(e){var t=ae|se;S===null?t|=ge:S.f|=ar;const r={children:null,ctx:O,deps:null,equals:ir,f:t,fn:e,reactions:null,v:null,version:0,parent:S};if(A!==null&&A.f&ae){var n=A;(n.children??(n.children=[])).push(r)}return r}function cr(e){const t=ve(e);return t.equals=wt,t}function vr(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&ae?Tt(n):ue(n)}}}function dr(e){var t,r=S;Q(e.parent);try{vr(e),t=Cr(e)}finally{Q(r)}return t}function _r(e){var t=dr(e),r=(ye||e.f&ge)&&e.deps!==null?Ue:B;te(e,r),e.equals(t)||(e.v=t,e.version=xr())}function Tt(e){vr(e),Fe(e,0),te(e,Be),e.v=e.children=e.deps=e.ctx=e.reactions=null}function hr(e){S===null&&A===null&&ln(),A!==null&&A.f&ge&&an(),Pt&&nn()}function Tn(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Le(e,t,r,n=!0){var a=(e&$e)!==0,i=S,s={ctx:O,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|se,first:null,fn:t,last:null,next:null,parent:a?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var f=ke;try{jt(!0),rt(s),s.f|=Qr}catch(o){throw ue(s),o}finally{jt(f)}}else t!==null&&nt(s);var u=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&ar)===0;if(!u&&!a&&n&&(i!==null&&Tn(s,i),A!==null&&A.f&ae)){var l=A;(l.children??(l.children=[])).push(s)}return s}function pr(e){const t=Le(qe,null,!1);return te(t,B),t.teardown=e,t}function ut(e){hr();var t=S!==null&&(S.f&G)!==0&&O!==null&&!O.m;if(t){var r=O;(r.e??(r.e=[])).push({fn:e,effect:S,reaction:A})}else{var n=Nt(e);return n}}function Nn(e){return hr(),At(e)}function An(e){const t=Le($e,e,!0);return()=>{ue(t)}}function Nt(e){return Le(nr,e,!1)}function At(e){return Le(qe,e,!0)}function R(e){return et(e)}function et(e,t=0){return Le(qe|yt|t,e,!0)}function Ce(e,t=!0){return Le(qe|G,e,!0,t)}function gr(e){var t=e.teardown;if(t!==null){const r=Pt,n=A;zt(!0),oe(null);try{t.call(null)}finally{zt(r),oe(n)}}}function mr(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Tt(t[r])}}function br(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;ue(r,t),r=n}}function Ln(e){for(var t=e.first;t!==null;){var r=t.next;t.f&G||ue(t),t=r}}function ue(e,t=!0){var r=!1;if((t||e.f&tn)&&e.nodes_start!==null){for(var n=e.nodes_start,a=e.nodes_end;n!==null;){var i=n===a?null:Qe(n);n.remove(),n=i}r=!0}br(e,t&&!r),mr(e),Fe(e,0),te(e,Be);var s=e.transitions;if(s!==null)for(const u of s)u.stop();gr(e);var f=e.parent;f!==null&&f.first!==null&&yr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function yr(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function ft(e,t){var r=[];Lt(e,r,!0),wr(r,()=>{ue(e),t&&t()})}function wr(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Lt(e,t,r){if(!(e.f&Z)){if(e.f^=Z,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&Xe)!==0||(n.f&G)!==0;Lt(n,t,i?r:!1),n=a}}}function We(e){Er(e,!0)}function Er(e,t){if(e.f&Z){He(e)&&rt(e),e.f^=Z;for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Xe)!==0||(r.f&G)!==0;Er(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let ct=!1,vt=[];function On(){ct=!1;const e=vt.slice();vt=[],st(e)}function Ot(e){ct||(ct=!0,queueMicrotask(On)),vt.push(e)}function kr(e){throw new Error("lifecycle_outside_component")}let Ze=!1,ke=!1,Pt=!1;function jt(e){ke=e}function zt(e){Pt=e}let dt=[],Re=0;let A=null;function oe(e){A=e}let S=null;function Q(e){S=e}let X=null;function Pn(e){X=e}let F=null,j=0,le=null;function Dn(e){le=e}let Sr=0,ye=!1,O=null;function xr(){return++Sr}function tt(){return!Ae||O!==null&&O.l===null}function He(e){var s,f;var t=e.f;if(t&se)return!0;if(t&Ue){var r=e.deps,n=(t&ge)!==0;if(r!==null){var a;if(t&Ge){for(a=0;a<r.length;a++)((s=r[a]).reactions??(s.reactions=[])).push(e);e.f^=Ge}for(a=0;a<r.length;a++){var i=r[a];if(He(i)&&_r(i),n&&S!==null&&!ye&&!((f=i==null?void 0:i.reactions)!=null&&f.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}n||te(e,B)}return!1}function In(e,t,r){throw e}function Cr(e){var c;var t=F,r=j,n=le,a=A,i=ye,s=X,f=O,u=e.f;F=null,j=0,le=null,A=u&(G|$e)?null:e,ye=!ke&&(u&ge)!==0,X=null,O=e.ctx;try{var l=(0,e.fn)(),o=e.deps;if(F!==null){var v;if(Fe(e,j),o!==null&&j>0)for(o.length=j+F.length,v=0;v<F.length;v++)o[j+v]=F[v];else e.deps=o=F;if(!ye)for(v=j;v<o.length;v++)((c=o[v]).reactions??(c.reactions=[])).push(e)}else o!==null&&j<o.length&&(Fe(e,j),o.length=j);return l}finally{F=t,j=r,le=n,A=a,ye=i,X=s,O=f}}function Rn(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&t.f&ae&&(F===null||!F.includes(t))&&(te(t,Ue),t.f&(ge|Ge)||(t.f^=Ge),Fe(t,0))}function Fe(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Rn(e,r[n])}function rt(e){var t=e.f;if(!(t&Be)){te(e,B);var r=S;S=e;try{t&yt?Ln(e):br(e),mr(e),gr(e);var n=Cr(e);e.teardown=typeof n=="function"?n:null,e.version=Sr}catch(a){In(a)}finally{S=r}}}function Mn(){Re>1e3&&(Re=0,sn()),Re++}function Fn(e){var t=e.length;if(t!==0){Mn();var r=ke;ke=!0;try{for(var n=0;n<t;n++){var a=e[n];a.f&B||(a.f^=B);var i=[];Tr(a,i),qn(i)}}finally{ke=r}}}function qn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];!(n.f&(Be|Z))&&He(n)&&(rt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?yr(n):n.fn=null))}}function $n(){if(Ze=!1,Re>1001)return;const e=dt;dt=[],Fn(e),Ze||(Re=0)}function nt(e){Ze||(Ze=!0,queueMicrotask($n));for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&($e|G)){if(!(r&B))return;t.f^=B}}dt.push(t)}function Tr(e,t){var r=e.first,n=[];e:for(;r!==null;){var a=r.f,i=(a&G)!==0,s=i&&(a&B)!==0;if(!s&&!(a&Z))if(a&qe){i?r.f^=B:He(r)&&rt(r);var f=r.first;if(f!==null){r=f;continue}}else a&nr&&n.push(r);var u=r.next;if(u===null){let v=r.parent;for(;v!==null;){if(e===v)break e;var l=v.next;if(l!==null){r=l;continue e}v=v.parent}}r=u}for(var o=0;o<n.length;o++)f=n[o],t.push(f),Tr(f,t)}function d(e){var f;var t=e.f,r=(t&ae)!==0;if(r&&t&Be){var n=dr(e);return Tt(e),n}if(A!==null){X!==null&&X.includes(e)&&cn();var a=A.deps;F===null&&a!==null&&a[j]===e?j++:F===null?F=[e]:F.push(e),le!==null&&S!==null&&S.f&B&&!(S.f&G)&&le.includes(e)&&(te(S,se),nt(S))}else if(r&&e.deps===null){var i=e,s=i.parent;s!==null&&!((f=s.deriveds)!=null&&f.includes(i))&&(s.deriveds??(s.deriveds=[])).push(i)}return r&&(i=e,He(i)&&_r(i)),e.v}function de(e){const t=A;try{return A=null,e()}finally{A=t}}const Un=~(se|Ue|B);function te(e,t){e.f=e.f&Un|t}function $(e,t=!1,r){O={p:O,c:null,e:null,m:!1,s:e,x:null,l:null},Ae&&!t&&(O.l={s:null,u:null,r1:[],r2:z(!1)})}function U(e){const t=O;if(t!==null){const s=t.e;if(s!==null){var r=S,n=A;t.e=null;try{for(var a=0;a<s.length;a++){var i=s[a];Q(i.effect),oe(i.reaction),Nt(i.fn)}}finally{Q(r),oe(n)}}O=t.p,t.m=!0}return{}}function Bn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ee in e)_t(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ee in r&&_t(r)}}}function _t(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{_t(e[n],t)}catch{}const r=Je(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=rr(r);for(let a in n){const i=n[a].get;if(i)try{i.call(e)}catch{}}}}}let Vt=!1;function Hn(){Vt||(Vt=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Nr(e){var t=A,r=S;oe(null),Q(null);try{return e()}finally{oe(t),Q(r)}}function jn(e,t,r,n=r){e.addEventListener(t,()=>Nr(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n()}:e.__on_r=n,Hn()}const Ar=new Set,ht=new Set;function zn(e,t,r,n){function a(i){if(n.capture||Ie.call(t,i),!i.cancelBubble)return Nr(()=>r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ot(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Te(e,t,r,n,a){var i={capture:n,passive:a},s=zn(e,t,r,i);(t===document.body||t===window||t===document)&&pr(()=>{t.removeEventListener(e,s,i)})}function Oe(e){for(var t=0;t<e.length;t++)Ar.add(e[t]);for(var r of ht)r(e)}function Ie(e){var x;var t=this,r=t.ownerDocument,n=e.type,a=((x=e.composedPath)==null?void 0:x.call(e))||[],i=a[0]||e.target,s=0,f=e.__root;if(f){var u=a.indexOf(f);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var l=a.indexOf(t);if(l===-1)return;u<=l&&(s=u)}if(i=a[s]||e.target,i!==t){Kr(e,"currentTarget",{configurable:!0,get(){return i||r}});var o=A,v=S;oe(null),Q(null);try{for(var c,_=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var p=i["__"+n];if(p!==void 0&&!i.disabled)if(mt(p)){var[b,...T]=p;b.apply(i,[e,...T])}else p.call(i,e)}catch(C){c?_.push(C):c=C}if(e.cancelBubble||h===t||h===null)break;i=h}if(c){for(let C of _)queueMicrotask(()=>{throw C});throw c}}finally{e.__root=t,delete e.currentTarget,oe(o),Q(v)}}}function Vn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function pt(e,t){var r=S;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function E(e,t){var r=(t&En)!==0,n=(t&kn)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=Vn(i?e:"<!>"+e),r||(a=Ke(a)));var s=n?document.importNode(a,!0):a.cloneNode(!0);if(r){var f=Ke(s),u=s.lastChild;pt(f,u)}else pt(s,s);return s}}function Lr(){var e=document.createDocumentFragment(),t=document.createComment(""),r=xt();return e.append(t,r),pt(t,r),e}function w(e,t){e!==null&&e.before(t)}const Yn=["touchstart","touchmove"];function Jn(e){return Yn.includes(e)}function Y(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Gn(e,t){return Kn(e,t)}const me=new Map;function Kn(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:s=!0}){xn();var f=new Set,u=v=>{for(var c=0;c<v.length;c++){var _=v[c];if(!f.has(_)){f.add(_);var h=Jn(_);t.addEventListener(_,Ie,{passive:h});var p=me.get(_);p===void 0?(document.addEventListener(_,Ie,{passive:h}),me.set(_,1)):me.set(_,p+1)}}};u(bt(Ar)),ht.add(u);var l=void 0,o=An(()=>{var v=r??t.appendChild(xt());return Ce(()=>{if(i){$({});var c=O;c.c=i}a&&(n.$$events=a),l=e(v,n)||{},i&&U()}),()=>{var h;for(var c of f){t.removeEventListener(c,Ie);var _=me.get(c);--_===0?(document.removeEventListener(c,Ie),me.delete(c)):me.set(c,_)}ht.delete(u),Yt.delete(l),v!==r&&((h=v.parentNode)==null||h.removeChild(v))}});return Yt.set(l,o),l}let Yt=new WeakMap;function V(e,t,r,n=null,a=!1){var i=e,s=null,f=null,u=null,l=a?Xe:0;et(()=>{u!==(u=!!t())&&(u?(s?We(s):s=Ce(()=>r(i)),f&&ft(f,()=>{f=null})):(f?We(f):n&&(f=Ce(()=>n(i))),s&&ft(s,()=>{s=null})))},l)}function _e(e,t){return t}function Wn(e,t,r,n){for(var a=[],i=t.length,s=0;s<i;s++)Lt(t[s].e,a,!0);var f=i>0&&a.length===0&&r!==null;if(f){var u=r.parentNode;Cn(u),u.append(r),n.clear(),ie(e,t[0].prev,t[i-1].next)}wr(a,()=>{for(var l=0;l<i;l++){var o=t[l];f||(n.delete(o.k),ie(e,o.prev,o.next)),ue(o.e,!f)}})}function he(e,t,r,n,a,i=null){var s=e,f={flags:t,items:new Map,first:null},u=(t&or)!==0;if(u){var l=e;s=l.appendChild(xt())}var o=null,v=!1;et(()=>{var c=r(),_=mt(c)?c:c==null?[]:bt(c),h=_.length;if(!(v&&h===0)){v=h===0;{var p=A;Zn(_,f,s,a,t,(p.f&Z)!==0,n)}i!==null&&(h===0?o?We(o):o=Ce(()=>i(s)):o!==null&&ft(o,()=>{o=null})),r()}})}function Zn(e,t,r,n,a,i,s){var Rt,Mt,Ft,qt;var f=(a&hn)!==0,u=(a&(kt|St))!==0,l=e.length,o=t.items,v=t.first,c=v,_,h=null,p,b=[],T=[],x,C,g,k;if(f)for(k=0;k<l;k+=1)x=e[k],C=s(x,k),g=o.get(C),g!==void 0&&((Rt=g.a)==null||Rt.measure(),(p??(p=new Set)).add(g));for(k=0;k<l;k+=1){if(x=e[k],C=s(x,k),g=o.get(C),g===void 0){var K=c?c.e.nodes_start:r;h=Qn(K,t,h,h===null?t.first:h.next,x,C,k,n,a),o.set(C,h),b=[],T=[],c=h.next;continue}if(u&&Xn(g,x,k,a),g.e.f&Z&&(We(g.e),f&&((Mt=g.a)==null||Mt.unfix(),(p??(p=new Set)).delete(g))),g!==c){if(_!==void 0&&_.has(g)){if(b.length<T.length){var L=T[0],D;h=L.prev;var W=b[0],it=b[b.length-1];for(D=0;D<b.length;D+=1)Jt(b[D],L,r);for(D=0;D<T.length;D+=1)_.delete(T[D]);ie(t,W.prev,it.next),ie(t,h,W),ie(t,it,L),c=L,h=it,k-=1,b=[],T=[]}else _.delete(g),Jt(g,c,r),ie(t,g.prev,g.next),ie(t,g,h===null?t.first:h.next),ie(t,h,g),h=g;continue}for(b=[],T=[];c!==null&&c.k!==C;)(i||!(c.e.f&Z))&&(_??(_=new Set)).add(c),T.push(c),c=c.next;if(c===null)continue;g=c}b.push(g),h=g,c=g.next}if(c!==null||_!==void 0){for(var De=_===void 0?[]:bt(_);c!==null;)(i||!(c.e.f&Z))&&De.push(c),c=c.next;var lt=De.length;if(lt>0){var zr=a&or&&l===0?r:null;if(f){for(k=0;k<lt;k+=1)(Ft=De[k].a)==null||Ft.measure();for(k=0;k<lt;k+=1)(qt=De[k].a)==null||qt.fix()}Wn(t,De,zr,o)}}f&&Ot(()=>{var $t;if(p!==void 0)for(g of p)($t=g.a)==null||$t.apply()}),S.first=t.first&&t.first.e,S.last=h&&h.e}function Xn(e,t,r,n){n&kt&&ot(e.v,t),n&St?ot(e.i,r):e.i=r}function Qn(e,t,r,n,a,i,s,f,u){var l=(u&kt)!==0,o=(u&pn)===0,v=l?o?Et(a):z(a):a,c=u&St?z(s):s,_={i:c,v,k:i,a:null,e:null,prev:r,next:n};try{return _.e=Ce(()=>f(e,v,c),Sn),_.e.prev=r&&r.e,_.e.next=n&&n.e,r===null?t.first=_:(r.next=_,r.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function Jt(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==n;){var s=Qe(i);a.before(i),i=s}}function ie(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Or(e,t,...r){var n=e,a=ne,i;et(()=>{a!==(a=t())&&(i&&(ue(i),i=null),i=Ce(()=>a(n,...r)))},Xe)}function at(e,t){var r=e.__attributes??(e.__attributes={});r.value===(r.value=t)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t)}function Ne(e,t,r,n){var a=e.__attributes??(e.__attributes={});a[t]!==(a[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[rn]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ea(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Gt=new Map;function ea(e){var t=Gt.get(e.nodeName);if(t)return t;Gt.set(e.nodeName,t=[]);for(var r,n=Je(e),a=Element.prototype;a!==n;){r=rr(n);for(var i in r)r[i].set&&t.push(i);n=Je(n)}return t}function Pe(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function Pr(e,t,r,n){var a=e.__styles??(e.__styles={});a[t]!==r&&(a[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}function ta(e,t,r=t){var n=tt();jn(e,"input",()=>{var a=Kt(e)?Wt(e.value):e.value;r(a),n&&a!==(a=t())&&(e.value=a??"")}),At(()=>{var a=t();Kt(e)&&a===Wt(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Kt(e){var t=e.type;return t==="number"||t==="range"}function Wt(e){return e===""?null:+e}function Zt(e,t){return e===t||(e==null?void 0:e[Ee])===t}function Dt(e={},t,r,n){return Nt(()=>{var a,i;return At(()=>{a=i,i=[],de(()=>{e!==r(...i)&&(t(e,...i),a&&Zt(r(...a),e)&&t(null,...a))})}),()=>{Ot(()=>{i&&Zt(r(...i),e)&&t(null,...i)})}}),e}function ra(e=!1){const t=O,r=t.l.u;if(!r)return;let n=()=>Bn(t.s);if(e){let a=0,i={};const s=ve(()=>{let f=!1;const u=t.s;for(const l in u)u[l]!==i[l]&&(i[l]=u[l],f=!0);return f&&a++,a});n=()=>d(s)}r.b.length&&Nn(()=>{Xt(t,n),st(r.b)}),ut(()=>{const a=de(()=>r.m.map(Xr));return()=>{for(const i of a)typeof i=="function"&&i()}}),r.a.length&&ut(()=>{Xt(t,n),st(r.a)})}function Xt(e,t){if(e.l.s)for(const r of e.l.s)d(r);t()}function Dr(e,t,r){if(e==null)return t(void 0),ne;const n=de(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}let Ve=!1;function je(e,t,r){const n=r[t]??(r[t]={store:null,source:Et(void 0),unsubscribe:ne});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=ne;else{var a=!0;n.unsubscribe=Dr(e,i=>{a?n.source.v=i:m(n.source,i)}),a=!1}return d(n.source)}function ze(){const e={};return pr(()=>{for(var t in e)e[t].unsubscribe()}),e}function na(e){var t=Ve;try{return Ve=!1,[e(),Ve]}finally{Ve=t}}function Qt(e){for(var t=S,r=S;t!==null&&!(t.f&(G|$e));)t=t.parent;try{return Q(t),e()}finally{Q(r)}}function J(e,t,r,n){var K;var a=(r&gn)!==0,i=!Ae||(r&mn)!==0,s=(r&yn)!==0,f=(r&wn)!==0,u=!1,l;s?[l,u]=na(()=>e[t]):l=e[t];var o=(K=we(e,t))==null?void 0:K.set,v=n,c=!0,_=!1,h=()=>(_=!0,c&&(c=!1,f?v=de(n):v=n),v);l===void 0&&n!==void 0&&(o&&i&&on(),l=h(),o&&o(l));var p;if(i)p=()=>{var L=e[t];return L===void 0?h():(c=!0,_=!1,L)};else{var b=Qt(()=>(a?ve:cr)(()=>e[t]));b.f|=en,p=()=>{var L=d(b);return L!==void 0&&(v=void 0),L===void 0?v:L}}if(!(r&bn))return p;if(o){var T=e.$$legacy;return function(L,D){return arguments.length>0?((!i||!D||T||u)&&o(D?p():L),L):p()}}var x=!1,C=!1,g=Et(l),k=Qt(()=>ve(()=>{var L=p(),D=d(g);return x?(x=!1,C=!0,D):(C=!1,g.v=L)}));return a||(k.equals=wt),function(L,D){if(arguments.length>0){const W=D?d(k):i&&s?N(L):L;return k.equals(W)||(x=!0,m(g,W),_&&v!==void 0&&(v=W),de(()=>d(k))),L}return d(k)}}function Ir(e){O===null&&kr(),Ae&&O.l!==null?ia(O).m.push(e):ut(()=>{const t=de(e);if(typeof t=="function")return t})}function aa(e){O===null&&kr(),Ir(()=>()=>de(e))}function ia(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const la="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(la);const be=[];function It(e,t=ne){let r=null;const n=new Set;function a(f){if(lr(e,f)&&(e=f,r)){const u=!be.length;for(const l of n)l[1](),be.push(l,e);if(u){for(let l=0;l<be.length;l+=2)be[l][0](be[l+1]);be.length=0}}}function i(f){a(f(e))}function s(f,u=ne){const l=[f,u];return n.add(l),n.size===1&&(r=t(a,i)||ne),f(e),()=>{n.delete(l),n.size===0&&r&&(r(),r=null)}}return{set:a,update:i,subscribe:s}}function sa(e){let t;return Dr(e,r=>t=r)(),t}const Me=class Me{static set(t){this.store.update(r=>r.set(t.url,t))}static update(t,r){this.store.update(n=>n.set(t,{...n.get(t),...r}))}static delete(t){this.store.update(r=>(r.delete(t),r))}static subscribeToLocalStorage(){this.store.subscribe(t=>localStorage[this.LS_CACHE]=JSON.stringify(t,(r,n)=>n instanceof Map?[...n]:n))}};fe(Me,"LS_CACHE","bookmarks"),fe(Me,"store",It(new Map(JSON.parse(localStorage[Me.LS_CACHE]||"[]"))));let pe=Me;const I={url:"URL",tag:"Tag",name:"Name",add:"Add",all:"All",addBookmark:"Add bookmark",addChannel:"Add channel",settings:"Settings",youtubeChannelOrPlaylist:"Youtube channel or playlist",empty:"Empty",noBookmarksFound:"No bookmarks found",noChannelsFound:"No channels found",noVideosFound:"No videos found",general:"General",channels:"Channels",bookmarks:"Bookmarks",remove:"Remove",restore:"Restore"};var oa=E('<li class="tag-bookmark svelte-1km2vtn"><a> </a></li>'),ua=E('<ul class="tag svelte-1km2vtn"><h3 class="tag-name svelte-1km2vtn"> </h3> <!></ul>'),fa=E('<p class="no-bookmarks svelte-1km2vtn"> </p>'),ca=E('<div class="container svelte-1km2vtn"><!></div>');function va(e,t){$(t,!0);const r=ze(),n=()=>je(i,"$store",r);let a=J(t,"width",3,"100%"),{store:i}=pe;var s=ca(),f=y(s);V(f,()=>n().size,u=>{var l=Lr(),o=Ct(l);he(o,1,()=>Map.groupBy(n().values(),({tag:v})=>v),_e,(v,c)=>{let _=()=>d(c)[0],h=()=>d(c)[1];var p=ua(),b=y(p),T=y(b),x=P(b,2);he(x,17,h,_e,(C,g)=>{let k=()=>d(g).url,K=()=>d(g).name;var L=oa(),D=y(L),W=y(D);R(()=>{Ne(D,"href",k()),Y(W,K())}),w(C,L)}),R(()=>Y(T,_())),w(v,p)}),w(u,l)},u=>{var l=fa(),o=y(l);R(()=>Y(o,I.noBookmarksFound)),w(u,l)}),R(()=>Pr(s,"flex-basis",a())),w(e,s),U()}class Se{static get get(){return sa(er)}static get save(){try{return JSON.parse(localStorage[this.name]||"{}")}catch{return{}}}static saveOnChange(){er.subscribe(t=>localStorage[this.name]=JSON.stringify(t))}}fe(Se,"name","config");const er=It({instance:"https://api.piped.yt",cacheLifetime:36e5,...Se.save});var M,Rr,Mr,Fr,qr,$r,Ur,gt;const ce=class ce{static async set(t){let r=re(this,M,Ur).call(this,t);return r===void 0?new Promise((n,a)=>a(`No ID found in ${t}`)):(re(this,M,gt).call(this,t)?re(this,M,Mr).call(this,r):re(this,M,Rr).call(this,r)).then(n=>this.store.update(a=>a.set(t,n)))}static update(t,r){this.store.update(n=>n.set(t,{...n.get(t),...r}))}static delete(t){this.store.update(r=>(r.delete(t),r))}static subscribeToLocalStorage(){this.store.subscribe(t=>localStorage[this.LS_CACHE]=JSON.stringify(t,(r,n)=>n instanceof Map?[...n]:n))}static async refetch(t=!0){t&&re(this,M,$r).call(this)||(this.store.update(r=>(r.forEach((n,a)=>this.set(a)),r)),re(this,M,qr).call(this))}};M=new WeakSet,Rr=async function(t){return fetch(`${Se.get.instance}/channels/tabs?data={"id":"${t}","contentFilters":["videos"]}`).then(r=>r.json()).then(r=>{var n;return{name:(n=r==null?void 0:r.content[0])==null?void 0:n.uploaderName,videos:r.content.map(a=>({url:a.url,title:a.title,uploaderUrl:a.uploaderUrl,uploaderName:a.uploaderName,uploaded:a.uploaded,uploadedDate:a.uploadedDate}))}})},Mr=async function(t){return fetch(`${Se.get.instance}/playlists/${t}`).then(r=>r.json()).then(r=>({name:r.name,videos:r.relatedStreams.map(n=>({url:n.url,title:n.title,uploaderUrl:n.uploaderUrl,uploaderName:n.uploaderName,uploaded:n.uploaded,uploadedDate:n.uploadedDate}))}))},Fr=function(){return parseInt(localStorage[this.LS_CACHE_UPDATE_TIME])},qr=function(){localStorage[this.LS_CACHE_UPDATE_TIME]=Date.now()},$r=function(){const t=re(this,M,Fr).call(this);return typeof t=="number"?Date.now()<t+Se.get.cacheLifetime:!1},Ur=function(t){let r=re(this,M,gt).call(this,t)?"=":"/";return t.split(r).pop()},gt=function(t){return t.includes("playlist")},Bt(ce,M),fe(ce,"LS_CACHE","channels"),fe(ce,"LS_CACHE_UPDATE_TIME","channelsUpdateTime"),fe(ce,"store",It(new Map(JSON.parse(localStorage[ce.LS_CACHE]||"[]"))));let ee=ce;var da=E('<li class="video svelte-aulm37"><h4 class="video-title svelte-aulm37"><a class="video-url svelte-aulm37"> </a></h4> <p class="video-description svelte-aulm37"><a class="video-uploader svelte-aulm37"> </a> </p></li>'),_a=E("<ul></ul>"),ha=E('<p class="no-videos svelte-aulm37"> </p>'),pa=E('<div class="container svelte-aulm37"><!></div>');function ga(e,t){$(t,!0);const r=ze(),n=()=>je(i,"$store",r);let a=J(t,"width",3,"100%"),{store:i}=ee,s=ve(()=>{var l;return((l=n().get(t.id))==null?void 0:l.videos)||Array.from(n().values()).flatMap(o=>o.videos.map(v=>({...v,uploaderName:o.name}))).sort((o,v)=>v.uploaded-o.uploaded)});var f=pa(),u=y(f);V(u,()=>d(s).length,l=>{var o=_a();he(o,21,()=>d(s),_e,(v,c)=>{var _=da(),h=y(_),p=y(h),b=y(p),T=P(h,2),x=y(T),C=y(x),g=P(x);R(()=>{Ne(p,"href",`https://youtube.com${d(c).url}`),Y(b,d(c).title),Ne(x,"href",`https://youtube.com${d(c).uploaderUrl}`),Y(C,d(c).uploaderName),Y(g,` ${d(c).uploadedDate??""}`)}),w(v,_)}),w(l,o)},l=>{var o=ha(),v=y(o);R(()=>Y(v,I.noVideosFound)),w(l,o)}),R(()=>Pr(f,"flex-basis",a())),w(e,f),U()}var ma=E('<div class="gg-spinner-container svelte-5bjovn"><i class="gg-spinner svelte-5bjovn"></i></div>'),ba=E('<div class="container svelte-5bjovn"><input type="submit" class="svelte-5bjovn"> <!></div>');function Br(e,t){var r=ba(),n=y(r);n.__click=function(...i){var s;(s=t.onclick)==null||s.apply(this,i)};var a=P(n,2);V(a,()=>t.disabled,i=>{var s=ma();w(i,s)}),R(()=>{at(n,t.disabled?"":t.value),n.disabled=t.disabled}),w(e,r)}Oe(["click"]);var ya=E('<input type="text" class="svelte-1gbmwft">');function Ye(e,t){$(t,!0);let r=J(t,"value",15);var n=ya();R(()=>{Ne(n,"placeholder",t.placeholder),Ne(n,"title",t.error?I.empty:""),Pe(n,"error",t.error)}),ta(n,r),w(e,n),U()}var wa=E("<form><!> <!> <!> <!></form>");function Ea(e,t){$(t,!0);let r=q(""),n=q(""),a=q(""),i=q(!1),s=q(!1),f=q(!1),u=h=>{h.preventDefault(),m(i,N(m(s,N(m(f,!1))))),d(r).length||m(i,!0),d(n).length||m(s,!0),d(a).length||m(f,!0),!(d(i)||d(s)||d(f))&&(pe.set({url:d(r),tag:d(n),name:d(a)}),m(r,N(m(n,N(m(a,""))))))};var l=wa(),o=y(l);Ye(o,{get error(){return d(i)},set error(h){m(i,N(h))},get value(){return d(r)},set value(h){m(r,N(h))},get placeholder(){return I.url}});var v=P(o,2);Ye(v,{get error(){return d(s)},set error(h){m(s,N(h))},get value(){return d(n)},set value(h){m(n,N(h))},get placeholder(){return I.tag}});var c=P(v,2);Ye(c,{get error(){return d(f)},set error(h){m(f,N(h))},get value(){return d(a)},set value(h){m(a,N(h))},get placeholder(){return I.name}});var _=P(c,2);Br(_,{get value(){return I.add}}),Te("submit",l,u),w(e,l),U()}var ka=E("<form><!> <!></form>");function Sa(e,t){$(t,!0);let r=q(""),n=q(!1),a=q(!1),i=l=>{if(l.preventDefault(),!d(r).length){m(n,!0);return}m(a,!0),ee.set(d(r)).then(()=>{m(r,""),m(n,!1),m(a,!1)}).catch(o=>{m(n,!0),m(a,!1)})};var s=ka(),f=y(s);Ye(f,{get error(){return d(n)},set error(l){m(n,N(l))},get value(){return d(r)},set value(l){m(r,N(l))},get placeholder(){return I.youtubeChannelOrPlaylist}});var u=P(f,2);Br(u,{get value(){return I.add},get disabled(){return d(a)}}),Te("submit",s,i),w(e,s),U()}var xa=E('<input class="nav-button svelte-10gk6aa" type="button">'),Ca=E('<li class="svelte-10gk6aa"><!></li>'),Ta=E('<li class="svelte-10gk6aa"><!></li>'),Na=E('<ul class="content svelte-10gk6aa"><!> <!></ul>'),Aa=E('<div class="container svelte-10gk6aa"><!> <!></div>');function La(e,t){$(t,!0);const r=ze(),n=()=>je(f,"$store",r),a=(p,b=ne,T=ne)=>{var x=xa();x.__click=function(...C){var g;(g=T())==null||g.apply(this,C)},R(()=>at(x,b())),w(p,x)};let i=J(t,"id",15),s=J(t,"open",3,!1),{store:f}=ee,u=q(N(s())),l,o=ve(()=>n().entries().map(([p,b])=>({id:p,name:b.name,nameLowerCase:b.name.toLowerCase()})).toArray().sort((p,b)=>p.nameLowerCase<b.nameLowerCase?-1:p.nameLowerCase>b.nameLowerCase?1:0));var v=Aa();Te("click",xe,p=>l.contains(p.target)||m(u,!1));var c=y(v),_=cr(()=>{var p;return((p=n().get(i()))==null?void 0:p.name)||I.all});a(c,()=>d(_),()=>()=>m(u,!d(u)));var h=P(c,2);V(h,()=>d(u),p=>{var b=Na(),T=y(b);V(T,i,C=>{var g=Ca(),k=y(g);a(k,()=>I.all,()=>()=>i("")),w(C,g)});var x=P(T,2);he(x,17,()=>d(o),_e,(C,g)=>{var k=Lr(),K=Ct(k);V(K,()=>i()!=d(g).id,L=>{var D=Ta(),W=y(D);a(W,()=>d(g).name,()=>()=>i(d(g).id)),w(L,D)}),w(C,k)}),w(p,b)}),Dt(v,p=>l=p,()=>l),w(e,v),U()}Oe(["click"]);var Oa=(e,t)=>t(!t()),Pa=E('<button class="svelte-khigyg"> </button>');function Hr(e,t){let r=J(t,"open",15);var n=Pa();n.__click=[Oa,r];var a=y(n);R(()=>{Pe(n,"focus",r()),Y(a,t.value)}),w(e,n)}Oe(["click"]);var Da=E('<div class="content svelte-grwu2l"><!></div>'),Ia=E('<div class="container svelte-grwu2l"><!> <!></div>');function tr(e,t){$(t,!0);let r=J(t,"right",3,!1),n=J(t,"open",3,!1),a=q(N(n())),i;var s=Ia();Te("click",xe,l=>i.contains(l.target)||m(a,!1));var f=y(s);Hr(f,{get value(){return t.value},get open(){return d(a)},set open(l){m(a,N(l))}});var u=P(f,2);V(u,()=>d(a),l=>{var o=Da(),v=y(o);Or(v,()=>t.children),R(()=>Pe(o,"right",r())),w(l,o)}),Dt(s,l=>i=l,()=>i),w(e,s),U()}var Ra=E('<div class="content svelte-1jjokp8"><!></div>'),Ma=E("<div><!> <!></div>");function Fa(e,t){$(t,!0);let r=J(t,"open",3,!1),n=q(N(r())),a;var i=Ma();Te("keyup",xe,u=>u.key=="Escape"&&m(n,!1)),Te("click",xe,u=>a.contains(u.target)||m(n,!1));var s=y(i);Hr(s,{get value(){return t.value},get open(){return d(n)},set open(u){m(n,N(u))}});var f=P(s,2);V(f,()=>d(n),u=>{var l=Ra(),o=y(l);Or(o,()=>t.children),w(u,l)}),Dt(i,u=>a=u,()=>a),w(e,i),U()}dn();var qa=(e,t)=>m(t,!d(t)),$a=E('<input type="button" class="svelte-gxwwjd">');function jr(e,t){$(t,!0);let r=q(!1);aa(()=>d(r)&&t.remove());var n=$a();n.__click=[qa,r],R(()=>{at(n,d(r)?I.restore:I.remove),Pe(n,"removed",d(r))}),w(e,n),U()}Oe(["click"]);var Ua=E('<li class="setting svelte-1ix4qo8"><p> </p> <!></li>'),Ba=E('<ul class="settings svelte-1ix4qo8"></ul>'),Ha=E('<p class="no-channels svelte-1ix4qo8"> </p>'),ja=E('<div class="container svelte-1ix4qo8"><!></div>');function za(e,t){$(t,!1);const r=ze(),n=()=>je(a,"$store",r);let{store:a}=pe;ra();var i=ja(),s=y(i);V(s,()=>n().size,f=>{var u=Ba();he(u,5,n,_e,(l,o)=>{let v=()=>d(o)[0],c=()=>d(o)[1].tag,_=()=>d(o)[1].name;var h=Ua(),p=y(h),b=y(p),T=P(p,2);jr(T,{remove:()=>pe.delete(v())}),R(()=>Y(b,`${c()??""}: ${_()??""}`)),w(l,h)}),w(f,u)},f=>{var u=Ha(),l=y(u);R(()=>Y(l,I.noChannelsFound)),w(f,u)}),w(e,i),U()}var Va=(e,t,r)=>t(r()),Ya=(e,t,r)=>e.key=="Enter"&&t(r())&&ee.update(r(),{name:e.target.value}),Ja=E('<li class="setting svelte-hbzvmi"><div class="fit svelte-hbzvmi"><input type="text" class="setting-name svelte-hbzvmi"></div> <!></li>'),Ga=E('<p class="hint svelte-hbzvmi">Press enter to save channel name</p>'),Ka=E('<ul class="settings svelte-hbzvmi"></ul> <!>',1),Wa=E('<p class="no-channels svelte-hbzvmi"> </p>'),Za=E('<div class="container svelte-hbzvmi"><!></div>');function Xa(e,t){$(t,!0);const r=ze(),n=()=>je(a,"$store",r);let{store:a}=ee,i=q(N([])),s=o=>d(i).find(v=>v==o)||d(i).push(o),f=o=>m(i,N(d(i).filter(v=>v!=o)));var u=Za(),l=y(u);V(l,()=>n().size,o=>{var v=Ka(),c=Ct(v);he(c,5,n,_e,(h,p)=>{let b=()=>d(p)[0],T=()=>d(p)[1].name;var x=Ja(),C=y(x),g=y(C);g.__input=[Va,s,b],g.__keyup=[Ya,f,b];const k=ve(()=>d(i).includes(b()));var K=P(C,2);jr(K,{remove:()=>ee.delete(b())}),R(()=>{at(g,T()),Ne(g,"placeholder",T()),Pe(g,"modified",d(k))}),w(h,x)});var _=P(c,2);V(_,()=>d(i).length,h=>{var p=Ga();w(h,p)}),w(o,v)},o=>{var v=Wa(),c=y(v);R(()=>Y(c,I.noChannelsFound)),w(o,v)}),w(e,u),U()}Oe(["input","keyup"]);var Qa=E('<li class="tab svelte-1ish4x3"><button class="tab-button svelte-1ish4x3"> </button></li>'),ei=E('<div class="container svelte-1ish4x3"><ul class="tabs svelte-1ish4x3"></ul> <!> <!></div>');function ti(e,t){$(t,!0);let r=J(t,"open",3,0),n=[I.general,I.channels,I.bookmarks],a=q(N(r()));var i=ei(),s=y(i);he(s,21,()=>n,_e,(l,o,v)=>{var c=Qa(),_=y(c);_.__click=()=>m(a,N(v));var h=y(_);R(()=>{Pe(_,"focus",d(a)==v),Y(h,d(o))}),w(l,c)});var f=P(s,2);V(f,()=>d(a)==1,l=>{Xa(l,{})});var u=P(f,2);V(u,()=>d(a)==2,l=>{za(l,{})}),w(e,i),U()}Oe(["click"]);var ri=E('<nav class="svelte-tbb58f"><!> <section class="svelte-tbb58f"><!> <!> <!></section></nav>');function ni(e,t){$(t,!0);let r=J(t,"id",15);var n=ri(),a=y(n);La(a,{get id(){return r()},set id(l){r(l)}});var i=P(a,2),s=y(i);tr(s,{get value(){return I.addChannel},children:(l,o)=>{Sa(l,{})},$$slots:{default:!0}});var f=P(s,2);tr(f,{get value(){return I.addBookmark},children:(l,o)=>{Ea(l,{})},$$slots:{default:!0}});var u=P(f,2);Fa(u,{get value(){return I.settings},open:!0,children:(l,o)=>{ti(l,{open:1})},$$slots:{default:!0}}),w(e,n),U()}var ai=E('<main class="svelte-1oixlbt"><!> <section class="svelte-1oixlbt"><!> <!></section></main>');function ii(e,t){$(t,!0);let r=q("");Ir(()=>{Se.saveOnChange(),pe.subscribeToLocalStorage(),ee.subscribeToLocalStorage(),ee.refetch()});var n=ai(),a=y(n);ni(a,{get id(){return d(r)},set id(u){m(r,N(u))}});var i=P(a,2),s=y(i);ga(s,{width:"33%",get id(){return d(r)},set id(u){m(r,N(u))}});var f=P(s,2);va(f,{width:"67%"}),w(e,n),U()}Gn(ii,{target:document.getElementById("app")});
