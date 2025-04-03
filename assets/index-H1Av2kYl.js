(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const $e=!1;var De=Array.isArray,Ft=Array.prototype.indexOf,Ie=Array.from,Rt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,Pt=Object.getOwnPropertyDescriptors,qt=Object.prototype,Vt=Array.prototype,tt=Object.getPrototypeOf,He=Object.isExtensible;function Bt(e){for(var t=0;t<e.length;t++)e[t]()}const L=2,rt=4,ge=8,Fe=16,K=32,z=64,se=128,C=256,oe=512,A=1024,q=2048,J=4096,P=8192,we=16384,Ut=32768,nt=65536,$t=1<<17,Ht=1<<19,lt=1<<20,Oe=1<<21,ke=Symbol("$state"),Yt=Symbol("");function it(e){return e===this.v}function Kt(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function at(e){return!Kt(e,this.v)}function Wt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function jt(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gt(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let me=!1,Zt=!1;function zt(){me=!0}const Jt=1,Qt=2,er=16,tr=2,N=Symbol(),rr="http://www.w3.org/1999/xhtml";let E=null;function Ye(e){E=e}function nr(e,t=!1,r){var n=E={p:E,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};me&&!t&&(E.l={s:null,u:null,r1:[],r2:ne(!1)}),gt(()=>{n.d=!0})}function lr(e){const t=E;if(t!==null){const s=t.e;if(s!==null){var r=g,n=p;t.e=null;try{for(var i=0;i<s.length;i++){var l=s[i];Y(l.effect),D(l.reaction),cr(l.fn)}}finally{Y(r),D(n)}}E=t.p,t.m=!0}return{}}function le(){return!me||E!==null&&E.l===null}function X(e,t){if(typeof e!="object"||e===null||ke in e)return e;const r=tt(e);if(r!==qt&&r!==Vt)return e;var n=new Map,i=De(e),l=B(0),s=p,c=o=>{var u=p;D(s);var a;return a=o(),D(u),a};return i&&n.set("length",B(e.length)),new Proxy(e,{defineProperty(o,u,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&jt();var v=n.get(u);return v===void 0?(v=c(()=>B(a.value)),n.set(u,v)):O(v,c(()=>X(a.value))),!0},deleteProperty(o,u){var a=n.get(u);if(a===void 0)u in o&&n.set(u,c(()=>B(N)));else{if(i&&typeof u=="string"){var v=n.get("length"),f=Number(u);Number.isInteger(f)&&f<v.v&&O(v,f)}O(a,N),Ke(l)}return!0},get(o,u,a){var d;if(u===ke)return e;var v=n.get(u),f=u in o;if(v===void 0&&(!f||(d=te(o,u))!=null&&d.writable)&&(v=c(()=>B(X(f?o[u]:N))),n.set(u,v)),v!==void 0){var _=w(v);return _===N?void 0:_}return Reflect.get(o,u,a)},getOwnPropertyDescriptor(o,u){var a=Reflect.getOwnPropertyDescriptor(o,u);if(a&&"value"in a){var v=n.get(u);v&&(a.value=w(v))}else if(a===void 0){var f=n.get(u),_=f==null?void 0:f.v;if(f!==void 0&&_!==N)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return a},has(o,u){var _;if(u===ke)return!0;var a=n.get(u),v=a!==void 0&&a.v!==N||Reflect.has(o,u);if(a!==void 0||g!==null&&(!v||(_=te(o,u))!=null&&_.writable)){a===void 0&&(a=c(()=>B(v?X(o[u]):N)),n.set(u,a));var f=w(a);if(f===N)return!1}return v},set(o,u,a,v){var F;var f=n.get(u),_=u in o;if(i&&u==="length")for(var d=a;d<f.v;d+=1){var m=n.get(d+"");m!==void 0?O(m,N):d in o&&(m=c(()=>B(N)),n.set(d+"",m))}f===void 0?(!_||(F=te(o,u))!=null&&F.writable)&&(f=c(()=>B(void 0)),O(f,c(()=>X(a))),n.set(u,f)):(_=f.v!==N,O(f,c(()=>X(a))));var T=Reflect.getOwnPropertyDescriptor(o,u);if(T!=null&&T.set&&T.set.call(v,a),!_){if(i&&typeof u=="string"){var h=n.get("length"),y=Number(u);Number.isInteger(y)&&y>=h.v&&O(h,y+1)}Ke(l)}return!0},ownKeys(o){w(l);var u=Reflect.ownKeys(o).filter(f=>{var _=n.get(f);return _===void 0||_.v!==N});for(var[a,v]of n)v.v!==N&&!(a in o)&&u.push(a);return u},setPrototypeOf(){Gt()}})}function Ke(e,t=1){O(e,e.v+t)}const re=new Map;function ne(e,t){var r={f:0,v:e,reactions:null,equals:it,rv:0,wv:0};return r}function B(e,t){const r=ne(e);return wr(r),r}function Ce(e,t=!1){var n;const r=ne(e);return t||(r.equals=at),me&&E!==null&&E.l!==null&&((n=E.l).s??(n.s=[])).push(r),r}function O(e,t,r=!1){p!==null&&!M&&le()&&(p.f&(L|Fe))!==0&&!(x!=null&&x.includes(e))&&Xt();let n=r?X(t):t;return ve(e,n)}function ve(e,t){if(!e.equals(t)){var r=e.v;ye?re.set(e,t):re.set(e,r),e.v=t,e.wv=St(),ut(e,q),le()&&g!==null&&(g.f&A)!==0&&(g.f&(K|z))===0&&(S===null?mr([e]):S.push(e))}return t}function ut(e,t){var r=e.reactions;if(r!==null)for(var n=le(),i=r.length,l=0;l<i;l++){var s=r[l],c=s.f;(c&q)===0&&(!n&&s===g||(I(s,t),(c&(A|C))!==0&&((c&L)!==0?ut(s,J):be(s))))}}let ir=!1;var We,ft,st,ot;function ar(){if(We===void 0){We=window,ft=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;st=te(t,"firstChild").get,ot=te(t,"nextSibling").get,He(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),He(r)&&(r.__t=void 0)}}function vt(e=""){return document.createTextNode(e)}function ct(e){return st.call(e)}function Re(e){return ot.call(e)}function R(e,t){return ct(e)}function Z(e,t=1,r=!1){let n=e;for(;t--;)n=Re(n);return n}function ur(e){e.textContent=""}function _t(e){var t=L|q,r=p!==null&&(p.f&L)!==0?p:null;return g===null||r!==null&&(r.f&C)!==0?t|=C:g.f|=lt,{ctx:E,deps:null,effects:null,equals:it,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??g}}function dt(e){const t=_t(e);return t.equals=at,t}function ht(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)H(t[r])}}function fr(e){for(var t=e.parent;t!==null;){if((t.f&L)===0)return t;t=t.parent}return null}function sr(e){var t,r=g;Y(fr(e));try{ht(e),t=Ct(e)}finally{Y(r)}return t}function pt(e){var t=sr(e),r=($||(e.f&C)!==0)&&e.deps!==null?J:A;I(e,r),e.equals(t)||(e.v=t,e.wv=St())}function or(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Q(e,t,r,n=!0){var i=g,l={ctx:E,deps:null,nodes_start:null,nodes_end:null,f:e|q,first:null,fn:t,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(r)try{Ve(l),l.f|=Ut}catch(o){throw H(l),o}else t!==null&&be(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(lt|se))===0;if(!s&&n&&(i!==null&&or(l,i),p!==null&&(p.f&L)!==0)){var c=p;(c.effects??(c.effects=[])).push(l)}return l}function gt(e){const t=Q(ge,null,!1);return I(t,A),t.teardown=e,t}function vr(e){const t=Q(z,e,!0);return(r={})=>new Promise(n=>{r.outro?xt(t,()=>{H(t),n(void 0)}):(H(t),n(void 0))})}function cr(e){return Q(rt,e,!1)}function wt(e){return Q(ge,e,!0)}function _r(e,t=[],r=_t){const n=t.map(r);return mt(()=>e(...n.map(w)))}function mt(e,t=0){return Q(ge|Fe|t,e,!0)}function Pe(e,t=!0){return Q(ge|K,e,!0,t)}function yt(e){var t=e.teardown;if(t!==null){const r=ye,n=p;je(!0),D(null);try{t.call(null)}finally{je(r),D(n)}}}function Et(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;(r.f&z)!==0?r.parent=null:H(r,t),r=n}}function dr(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&K)===0&&H(t),t=r}}function H(e,t=!0){var r=!1;if((t||(e.f&Ht)!==0)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var l=n===i?null:Re(n);n.remove(),n=l}r=!0}Et(e,t&&!r),he(e,0),I(e,we);var s=e.transitions;if(s!==null)for(const o of s)o.stop();yt(e);var c=e.parent;c!==null&&c.first!==null&&bt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function bt(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function xt(e,t){var r=[];qe(e,r,!0),Tt(r,()=>{H(e),t&&t()})}function Tt(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n)}else t()}function qe(e,t,r){if((e.f&P)===0){if(e.f^=P,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var i=n.next,l=(n.f&nt)!==0||(n.f&K)!==0;qe(n,t,l?r:!1),n=i}}}function Nt(e){kt(e,!0)}function kt(e,t){if((e.f&P)!==0){e.f^=P,(e.f&A)===0&&(e.f^=A),ie(e)&&(I(e,q),be(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&nt)!==0||(r.f&K)!==0;kt(r,i?t:!1),r=n}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&l.in()}}let ce=[];function hr(){var e=ce;ce=[],Bt(e)}function pr(e){ce.length===0&&queueMicrotask(hr),ce.push(e)}let ue=!1,Le=!1,_e=null,j=!1,ye=!1;function je(e){ye=e}let fe=[];let p=null,M=!1;function D(e){p=e}let g=null;function Y(e){g=e}let x=null;function gr(e){x=e}function wr(e){p!==null&&p.f&Oe&&(x===null?gr([e]):x.push(e))}let b=null,k=0,S=null;function mr(e){S=e}let At=1,de=0,$=!1,W=null;function St(){return++At}function ie(e){var v;var t=e.f;if((t&q)!==0)return!0;if((t&J)!==0){var r=e.deps,n=(t&C)!==0;if(r!==null){var i,l,s=(t&oe)!==0,c=n&&g!==null&&!$,o=r.length;if(s||c){var u=e,a=u.parent;for(i=0;i<o;i++)l=r[i],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(u)))&&(l.reactions??(l.reactions=[])).push(u);s&&(u.f^=oe),c&&a!==null&&(a.f&C)===0&&(u.f^=C)}for(i=0;i<o;i++)if(l=r[i],ie(l)&&pt(l),l.wv>e.wv)return!0}(!n||g!==null&&!$)&&I(e,A)}return!1}function yr(e,t){for(var r=t;r!==null;){if((r.f&se)!==0)try{r.fn(e);return}catch{r.f^=se}r=r.parent}throw ue=!1,e}function Er(e){return(e.f&we)===0&&(e.parent===null||(e.parent.f&se)===0)}function Ee(e,t,r,n){if(ue){if(r===null&&(ue=!1),Er(t))throw e;return}r!==null&&(ue=!0);{yr(e,t);return}}function Ot(e,t,r=!0){var n=e.reactions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];x!=null&&x.includes(e)||((l.f&L)!==0?Ot(l,t,!1):t===l&&(r?I(l,q):(l.f&A)!==0&&I(l,J),be(l)))}}function Ct(e){var _;var t=b,r=k,n=S,i=p,l=$,s=x,c=E,o=M,u=e.f;b=null,k=0,S=null,$=(u&C)!==0&&(M||!j||p===null),p=(u&(K|z))===0?e:null,x=null,Ye(e.ctx),M=!1,de++,e.f|=Oe;try{var a=(0,e.fn)(),v=e.deps;if(b!==null){var f;if(he(e,k),v!==null&&k>0)for(v.length=k+b.length,f=0;f<b.length;f++)v[k+f]=b[f];else e.deps=v=b;if(!$)for(f=k;f<v.length;f++)((_=v[f]).reactions??(_.reactions=[])).push(e)}else v!==null&&k<v.length&&(he(e,k),v.length=k);if(le()&&S!==null&&!M&&v!==null&&(e.f&(L|J|q))===0)for(f=0;f<S.length;f++)Ot(S[f],e);return i!==null&&(de++,S!==null&&(n===null?n=S:n.push(...S))),a}finally{b=t,k=r,S=n,p=i,$=l,x=s,Ye(c),M=o,e.f^=Oe}}function br(e,t){let r=t.reactions;if(r!==null){var n=Ft.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}r===null&&(t.f&L)!==0&&(b===null||!b.includes(t))&&(I(t,J),(t.f&(C|oe))===0&&(t.f^=oe),ht(t),he(t,0))}function he(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)br(e,r[n])}function Ve(e){var t=e.f;if((t&we)===0){I(e,A);var r=g,n=E,i=j;g=e,j=!0;try{(t&Fe)!==0?dr(e):Et(e),yt(e);var l=Ct(e);e.teardown=typeof l=="function"?l:null,e.wv=At;var s=e.deps,c;$e&&Zt&&e.f&q}catch(o){Ee(o,e,r,n||e.ctx)}finally{j=i,g=r}}}function xr(){try{Wt()}catch(e){if(_e!==null)Ee(e,_e,null);else throw e}}function Tr(){var e=j;try{var t=0;for(j=!0;fe.length>0;){t++>1e3&&xr();var r=fe,n=r.length;fe=[];for(var i=0;i<n;i++){var l=kr(r[i]);Nr(l)}}}finally{Le=!1,j=e,_e=null,re.clear()}}function Nr(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if((n.f&(we|P))===0)try{ie(n)&&(Ve(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?bt(n):n.fn=null))}catch(i){Ee(i,n,null,n.ctx)}}}function be(e){Le||(Le=!0,queueMicrotask(Tr));for(var t=_e=e;t.parent!==null;){t=t.parent;var r=t.f;if((r&(z|K))!==0){if((r&A)===0)return;t.f^=A}}fe.push(t)}function kr(e){for(var t=[],r=e;r!==null;){var n=r.f,i=(n&(K|z))!==0,l=i&&(n&A)!==0;if(!l&&(n&P)===0){if((n&rt)!==0)t.push(r);else if(i)r.f^=A;else{var s=p;try{p=r,ie(r)&&Ve(r)}catch(u){Ee(u,r,null,r.ctx)}finally{p=s}}var c=r.first;if(c!==null){r=c;continue}}var o=r.parent;for(r=r.next;r===null&&o!==null;)r=o.next,o=o.parent}return t}function w(e){var t=e.f,r=(t&L)!==0;if(W!==null&&W.add(e),p!==null&&!M){if(!(x!=null&&x.includes(e))){var n=p.deps;e.rv<de&&(e.rv=de,b===null&&n!==null&&n[k]===e?k++:b===null?b=[e]:(!$||!b.includes(e))&&b.push(e))}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&C)===0&&(i.f^=C)}return r&&(i=e,ie(i)&&pt(i)),ye&&re.has(e)?re.get(e):e.v}function Ar(e){var t=W;W=new Set;var r=W,n;try{if(xe(e),t!==null)for(n of W)t.add(n)}finally{W=t}return r}function Sr(e){var t=Ar(()=>xe(e));for(var r of t)if((r.f&$t)!==0)for(const n of r.deps||[])(n.f&L)===0&&ve(n,n.v);else ve(r,r.v)}function xe(e){var t=M;try{return M=!0,e()}finally{M=t}}const Or=-7169;function I(e,t){e.f=e.f&Or|t}const Cr=["touchstart","touchmove"];function Lr(e){return Cr.includes(e)}let Ge=!1;function Mr(){Ge||(Ge=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Lt(e){var t=p,r=g;D(null),Y(null);try{return e()}finally{D(t),Y(r)}}function Mt(e,t,r,n=r){e.addEventListener(t,()=>Lt(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Mr()}const Dr=new Set,Xe=new Set;function Ir(e,t,r,n={}){function i(l){if(n.capture||ee.call(t,l),!l.cancelBubble)return Lt(()=>r==null?void 0:r.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?pr(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function Ze(e,t,r,n,i){var l={capture:n,passive:i},s=Ir(e,t,r,l);(t===document.body||t===window||t===document)&&gt(()=>{t.removeEventListener(e,s,l)})}function ee(e){var y;var t=this,r=t.ownerDocument,n=e.type,i=((y=e.composedPath)==null?void 0:y.call(e))||[],l=i[0]||e.target,s=0,c=e.__root;if(c){var o=i.indexOf(c);if(o!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;o<=u&&(s=o)}if(l=i[s]||e.target,l!==t){Rt(e,"currentTarget",{configurable:!0,get(){return l||r}});var a=p,v=g;D(null),Y(null);try{for(var f,_=[];l!==null;){var d=l.assignedSlot||l.parentNode||l.host||null;try{var m=l["__"+n];if(m!=null&&(!l.disabled||e.target===l))if(De(m)){var[T,...h]=m;T.apply(l,[e,...h])}else m.call(l,e)}catch(F){f?_.push(F):f=F}if(e.cancelBubble||d===t||d===null)break;l=d}if(f){for(let F of _)queueMicrotask(()=>{throw F});throw f}}finally{e.__root=t,delete e.currentTarget,D(a),Y(v)}}}function Fr(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Rr(e,t){var r=g;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Be(e,t){var r=(t&tr)!==0,n,i=!e.startsWith("<!>");return()=>{n===void 0&&(n=Fr(i?e:"<!>"+e),n=ct(n));var l=r||ft?document.importNode(n,!0):n.cloneNode(!0);return Rr(l,l),l}}function Me(e,t){e!==null&&e.before(t)}function Pr(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function qr(e,t){return Vr(e,t)}const G=new Map;function Vr(e,{target:t,anchor:r,props:n={},events:i,context:l,intro:s=!0}){ar();var c=new Set,o=v=>{for(var f=0;f<v.length;f++){var _=v[f];if(!c.has(_)){c.add(_);var d=Lr(_);t.addEventListener(_,ee,{passive:d});var m=G.get(_);m===void 0?(document.addEventListener(_,ee,{passive:d}),G.set(_,1)):G.set(_,m+1)}}};o(Ie(Dr)),Xe.add(o);var u=void 0,a=vr(()=>{var v=r??t.appendChild(vt());return Pe(()=>{if(l){nr({});var f=E;f.c=l}i&&(n.$$events=i),u=e(v,n)||{},l&&lr()}),()=>{var d;for(var f of c){t.removeEventListener(f,ee);var _=G.get(f);--_===0?(document.removeEventListener(f,ee),G.delete(f)):G.set(f,_)}Xe.delete(o),v!==r&&((d=v.parentNode)==null||d.removeChild(v))}});return Br.set(u,a),u}let Br=new WeakMap;function Ur(e,t,r,n){for(var i=[],l=t.length,s=0;s<l;s++)qe(t[s].e,i,!0);var c=l>0&&i.length===0&&r!==null;if(c){var o=r.parentNode;ur(o),o.append(r),n.clear(),U(e,t[0].prev,t[l-1].next)}Tt(i,()=>{for(var u=0;u<l;u++){var a=t[u];c||(n.delete(a.k),U(e,a.prev,a.next)),H(a.e,!c)}})}function $r(e,t,r,n,i,l=null){var s=e,c={flags:t,items:new Map,first:null};{var o=e;s=o.appendChild(vt())}var u=null,a=!1,v=dt(()=>{var f=r();return De(f)?f:f==null?[]:Ie(f)});mt(()=>{var f=w(v),_=f.length;a&&_===0||(a=_===0,Hr(f,c,s,i,t,n,r),l!==null&&(_===0?u?Nt(u):u=Pe(()=>l(s)):u!==null&&xt(u,()=>{u=null})),w(v))})}function Hr(e,t,r,n,i,l,s){var c=e.length,o=t.items,u=t.first,a=u,v,f=null,_=[],d=[],m,T,h,y;for(y=0;y<c;y+=1){if(m=e[y],T=l(m,y),h=o.get(T),h===void 0){var F=a?a.e.nodes_start:r;f=Kr(F,t,f,f===null?t.first:f.next,m,T,y,n,i,s),o.set(T,f),_=[],d=[],a=f.next;continue}if(Yr(h,m,y),(h.e.f&P)!==0&&Nt(h.e),h!==a){if(v!==void 0&&v.has(h)){if(_.length<d.length){var ae=d[0],V;f=ae.prev;var Ue=_[0],Te=_[_.length-1];for(V=0;V<_.length;V+=1)ze(_[V],ae,r);for(V=0;V<d.length;V+=1)v.delete(d[V]);U(t,Ue.prev,Te.next),U(t,f,Ue),U(t,Te,ae),a=ae,f=Te,y-=1,_=[],d=[]}else v.delete(h),ze(h,a,r),U(t,h.prev,h.next),U(t,h,f===null?t.first:f.next),U(t,f,h),f=h;continue}for(_=[],d=[];a!==null&&a.k!==T;)(a.e.f&P)===0&&(v??(v=new Set)).add(a),d.push(a),a=a.next;if(a===null)continue;h=a}_.push(h),f=h,a=h.next}if(a!==null||v!==void 0){for(var Ne=v===void 0?[]:Ie(v);a!==null;)(a.e.f&P)===0&&Ne.push(a),a=a.next;var Dt=Ne.length;if(Dt>0){var It=c===0?r:null;Ur(t,Ne,It,o)}}g.first=t.first&&t.first.e,g.last=f&&f.e}function Yr(e,t,r,n){ve(e.v,t),e.i=r}function Kr(e,t,r,n,i,l,s,c,o,u){var a=(o&Jt)!==0,v=(o&er)===0,f=a?v?Ce(i):ne(i):i,_=(o&Qt)===0?s:ne(s),d={i:_,v:f,k:l,a:null,e:null,prev:r,next:n};try{return d.e=Pe(()=>c(e,f,_,u),ir),d.e.prev=r&&r.e,d.e.next=n&&n.e,r===null?t.first=d:(r.next=d,r.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function ze(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,l=e.e.nodes_start;l!==n;){var s=Re(l);i.before(l),l=s}}function U(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}const Je=[...` 	
\r\f \v\uFEFF`];function Wr(e,t,r){var n=""+e;if(r){for(var i in r)if(r[i])n=n?n+" "+i:i;else if(n.length)for(var l=i.length,s=0;(s=n.indexOf(i,s))>=0;){var c=s+l;(s===0||Je.includes(n[s-1]))&&(c===n.length||Je.includes(n[c]))?n=(s===0?"":n.substring(0,s))+n.substring(c+1):s=c}}return n===""?null:n}function jr(e,t,r,n,i,l){var s=e.__className;if(s!==r||s===void 0){var c=Wr(r,n,l);c==null?e.removeAttribute("class"):e.className=c,e.__className=r}else if(l&&i!==l)for(var o in l){var u=!!l[o];(i==null||u!==!!i[o])&&e.classList.toggle(o,u)}return l}const Gr=Symbol("is custom element"),Xr=Symbol("is html");function pe(e,t,r,n){var i=Zr(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Yt]=r),r==null?e.removeAttribute(t):typeof r!="string"&&zr(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Zr(e){return e.__attributes??(e.__attributes={[Gr]:e.nodeName.includes("-"),[Xr]:e.namespaceURI===rr})}var Qe=new Map;function zr(e){var t=Qe.get(e.nodeName);if(t)return t;Qe.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=Pt(n);for(var l in r)r[l].set&&t.push(l);n=tt(n)}return t}function Jr(e,t,r=t){var n=le();Mt(e,"input",i=>{var l=i?e.defaultValue:e.value;if(l=Ae(e)?Se(l):l,r(l),n&&l!==(l=t())){var s=e.selectionStart,c=e.selectionEnd;e.value=l??"",c!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(c,e.value.length))}}),xe(t)==null&&e.value&&r(Ae(e)?Se(e.value):e.value),wt(()=>{var i=t();Ae(e)&&i===Se(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Qr(e,t,r=t){Mt(e,"change",n=>{var i=n?e.defaultChecked:e.checked;r(i)}),xe(t)==null&&r(e.checked),wt(()=>{var n=t();e.checked=!!n})}function Ae(e){var t=e.type;return t==="number"||t==="range"}function Se(e){return e===""?null:+e}function en(e){return function(...t){var r=t[0];return r.preventDefault(),e==null?void 0:e.apply(this,t)}}const tn="5";var et;typeof window<"u"&&((et=window.__svelte??(window.__svelte={})).v??(et.v=new Set)).add(tn);zt();const rn="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='26.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20308'%3e%3cpath%20fill='%23FF3E00'%20d='M239.682%2040.707C211.113-.182%20154.69-12.301%20113.895%2013.69L42.247%2059.356a82.198%2082.198%200%200%200-37.135%2055.056a86.566%2086.566%200%200%200%208.536%2055.576a82.425%2082.425%200%200%200-12.296%2030.719a87.596%2087.596%200%200%200%2014.964%2066.244c28.574%2040.893%2084.997%2053.007%20125.787%2027.016l71.648-45.664a82.182%2082.182%200%200%200%2037.135-55.057a86.601%2086.601%200%200%200-8.53-55.577a82.409%2082.409%200%200%200%2012.29-30.718a87.573%2087.573%200%200%200-14.963-66.244'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M106.889%20270.841c-23.102%206.007-47.497-3.036-61.103-22.648a52.685%2052.685%200%200%201-9.003-39.85a49.978%2049.978%200%200%201%201.713-6.693l1.35-4.115l3.671%202.697a92.447%2092.447%200%200%200%2028.036%2014.007l2.663.808l-.245%202.659a16.067%2016.067%200%200%200%202.89%2010.656a17.143%2017.143%200%200%200%2018.397%206.828a15.786%2015.786%200%200%200%204.403-1.935l71.67-45.672a14.922%2014.922%200%200%200%206.734-9.977a15.923%2015.923%200%200%200-2.713-12.011a17.156%2017.156%200%200%200-18.404-6.832a15.78%2015.78%200%200%200-4.396%201.933l-27.35%2017.434a52.298%2052.298%200%200%201-14.553%206.391c-23.101%206.007-47.497-3.036-61.101-22.649a52.681%2052.681%200%200%201-9.004-39.849a49.428%2049.428%200%200%201%2022.34-33.114l71.664-45.677a52.218%2052.218%200%200%201%2014.563-6.398c23.101-6.007%2047.497%203.036%2061.101%2022.648a52.685%2052.685%200%200%201%209.004%2039.85a50.559%2050.559%200%200%201-1.713%206.692l-1.35%204.116l-3.67-2.693a92.373%2092.373%200%200%200-28.037-14.013l-2.664-.809l.246-2.658a16.099%2016.099%200%200%200-2.89-10.656a17.143%2017.143%200%200%200-18.398-6.828a15.786%2015.786%200%200%200-4.402%201.935l-71.67%2045.674a14.898%2014.898%200%200%200-6.73%209.975a15.9%2015.9%200%200%200%202.709%2012.012a17.156%2017.156%200%200%200%2018.404%206.832a15.841%2015.841%200%200%200%204.402-1.935l27.345-17.427a52.147%2052.147%200%200%201%2014.552-6.397c23.101-6.006%2047.497%203.037%2061.102%2022.65a52.681%2052.681%200%200%201%209.003%2039.848a49.453%2049.453%200%200%201-22.34%2033.12l-71.664%2045.673a52.218%2052.218%200%200%201-14.563%206.398'%3e%3c/path%3e%3c/svg%3e",nn="/vite.svg";var ln=Be('<li><input type="checkbox" class="svelte-1ecvcn6"> <span class="todo-text svelte-1ecvcn6"> </span> <button class="remove-button svelte-1ecvcn6">&times;</button></li>'),an=Be('<main class="svelte-1ecvcn6"><h1 class="svelte-1ecvcn6">svelte to-do app</h1> <form class="add-form svelte-1ecvcn6"><input type="text" placeholder="Add a new task" aria-label="New todo input" class="svelte-1ecvcn6"> <button type="submit" class="svelte-1ecvcn6">Add</button></form> <ul class="todo-list svelte-1ecvcn6"></ul></main>');function un(e){let t=Ce([]),r=Ce("");function n(){const u=w(r).trim();u&&(O(t,[...w(t),{id:Date.now(),text:u,completed:!1}]),O(r,""))}function i(u){O(t,w(t).filter(a=>a.id!==u))}var l=an(),s=Z(R(l),2),c=R(s),o=Z(s,2);$r(o,5,()=>w(t),u=>u.id,(u,a,v)=>{var f=ln();let _;var d=R(f),m=Z(d,2),T=R(m),h=Z(m,2);_r(y=>{_=jr(f,1,"svelte-1ecvcn6",null,_,y),pe(d,"aria-label",`Mark ${w(a).text} as ${w(a).completed?"incomplete":"complete"}`),Pr(T,w(a).text),pe(h,"aria-label",`Remove ${w(a).text}`)},[()=>({completed:w(a).completed})],dt),Qr(d,()=>w(a).completed,y=>(w(a).completed=y,Sr(()=>w(t)))),Ze("click",h,()=>i(w(a).id)),Me(u,f)}),Jr(c,()=>w(r),u=>O(r,u)),Ze("submit",s,en(n)),Me(e,l)}var fn=Be('<main><div><a href="https://vite.dev" target="_blank" rel="noreferrer"><img class="logo svelte-11cv5lq" alt="Vite Logo"></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img class="logo svelte svelte-11cv5lq" alt="Svelte Logo"></a></div> <h1>Vite + Svelte</h1> <div class="card"><!></div> <p>Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!</p> <p class="read-the-docs svelte-11cv5lq">Click on the Vite and Svelte logos to learn more</p></main>');function sn(e){var t=fn(),r=R(t),n=R(r),i=R(n);pe(i,"src",nn);var l=Z(n,2),s=R(l);pe(s,"src",rn);var c=Z(r,4),o=R(c);un(o),Me(e,t)}qr(sn,{target:document.getElementById("app")});
