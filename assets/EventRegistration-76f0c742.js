import{R as U,j as F}from"./index-a22f714f.js";import{S as hr,C as gr,a as vr}from"./SectionTitle-0155154d.js";var fe=e=>e.type==="checkbox",ie=e=>e instanceof Date,T=e=>e==null;const Ze=e=>typeof e=="object";var k=e=>!T(e)&&!Array.isArray(e)&&Ze(e)&&!ie(e),br=e=>k(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,xr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,_r=(e,s)=>e.has(xr(s)),Fr=e=>{const s=e.constructor&&e.constructor.prototype;return k(s)&&s.hasOwnProperty("isPrototypeOf")},Re=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Re&&(e instanceof Blob||e instanceof FileList))&&(t||k(e)))if(s=t?[]:{},!t&&!Fr(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=M(e[n]));else return e;return s}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],A=e=>e===void 0,d=(e,s,t)=>{if(!s||!k(e))return t;const n=ce(s.split(/[,[\].]+?/)).reduce((a,u)=>T(a)?a:a[u],e);return A(n)||n===e?A(e[s])?t:e[s]:n},z=e=>typeof e=="boolean";const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};U.createContext(null);var Vr=(e,s,t,n=!0)=>{const a={defaultValues:s._defaultValues};for(const u in e)Object.defineProperty(a,u,{get:()=>{const h=u;return s._proxyFormState[h]!==I.all&&(s._proxyFormState[h]=!n||I.all),t&&(t[h]=!0),e[h]}});return a},O=e=>k(e)&&!Object.keys(e).length,mr=(e,s,t,n)=>{t(e);const{name:a,...u}=e;return O(u)||Object.keys(u).length>=Object.keys(s).length||Object.keys(u).find(h=>s[h]===(!n||I.all))},Ee=e=>Array.isArray(e)?e:[e];function Ar(e){const s=U.useRef(e);s.current=e,U.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",Dr=(e,s,t,n,a)=>W(e)?(n&&s.watch.add(e),d(t,e,a)):Array.isArray(e)?e.map(u=>(n&&s.watch.add(u),d(t,u))):(n&&(s.watchAll=!0),t),Te=e=>/^\w*$/.test(e),er=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/)),m=(e,s,t)=>{let n=-1;const a=Te(s)?[s]:er(s),u=a.length,h=u-1;for(;++n<u;){const g=a[n];let q=t;if(n!==h){const P=e[g];q=k(P)||Array.isArray(P)?P:isNaN(+a[n+1])?{}:[]}e[g]=q,e=e[g]}return e},wr=(e,s,t,n,a)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},$e=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),Ke=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const oe=(e,s,t,n)=>{for(const a of t||Object.keys(e)){const u=d(e,a);if(u){const{_f:h,...g}=u;if(h){if(h.refs&&h.refs[0]&&s(h.refs[0],a)&&!n)break;if(h.ref&&s(h.ref,h.name)&&!n)break;oe(g,s)}else k(g)&&oe(g,s)}}};var Er=(e,s,t)=>{const n=ce(d(e,t));return m(n,"root",s[t]),m(e,t,n),e},je=e=>e.type==="file",X=e=>typeof e=="function",be=e=>{if(!Re)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>W(e),Le=e=>e.type==="radio",xe=e=>e instanceof RegExp;const ze={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!A(e[0].attributes.value)?A(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:ze}return ze};const Je={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||z(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var se=e=>k(e)&&!xe(e)?e:{value:e,message:""},Xe=async(e,s,t,n,a)=>{const{ref:u,refs:h,required:g,maxLength:q,minLength:P,min:D,max:b,pattern:de,validate:G,name:j,valueAsNumber:Ve,mount:J,disabled:Q}=e._f,x=d(s,j);if(!J||Q)return{};const H=h?h[0]:u,$=v=>{n&&H.reportValidity&&(H.setCustomValidity(z(v)?"":v||""),H.reportValidity())},w={},ee=Le(u),ye=fe(u),Y=ee||ye,re=(Ve||je(u))&&A(u.value)&&A(x)||be(u)&&u.value===""||x===""||Array.isArray(x)&&!x.length,C=wr.bind(null,j,t,w),he=(v,_,E,R=K.maxLength,B=K.minLength)=>{const N=v?_:E;w[j]={type:v?R:B,message:N,ref:u,...C(v?R:B,N)}};if(a?!Array.isArray(x)||!x.length:g&&(!Y&&(re||T(x))||z(x)&&!x||ye&&!rr(h).isValid||ee&&!tr(h).isValid)){const{value:v,message:_}=ve(g)?{value:!!g,message:g}:se(g);if(v&&(w[j]={type:K.required,message:_,ref:H,...C(K.required,_)},!t))return $(_),w}if(!re&&(!T(D)||!T(b))){let v,_;const E=se(b),R=se(D);if(!T(x)&&!isNaN(x)){const B=u.valueAsNumber||x&&+x;T(E.value)||(v=B>E.value),T(R.value)||(_=B<R.value)}else{const B=u.valueAsDate||new Date(x),N=ue=>new Date(new Date().toDateString()+" "+ue),le=u.type=="time",ne=u.type=="week";W(E.value)&&x&&(v=le?N(x)>N(E.value):ne?x>E.value:B>new Date(E.value)),W(R.value)&&x&&(_=le?N(x)<N(R.value):ne?x<R.value:B<new Date(R.value))}if((v||_)&&(he(!!v,E.message,R.message,K.max,K.min),!t))return $(w[j].message),w}if((q||P)&&!re&&(W(x)||a&&Array.isArray(x))){const v=se(q),_=se(P),E=!T(v.value)&&x.length>+v.value,R=!T(_.value)&&x.length<+_.value;if((E||R)&&(he(E,v.message,_.message),!t))return $(w[j].message),w}if(de&&!re&&W(x)){const{value:v,message:_}=se(de);if(xe(v)&&!x.match(v)&&(w[j]={type:K.pattern,message:_,ref:u,...C(K.pattern,_)},!t))return $(_),w}if(G){if(X(G)){const v=await G(x,s),_=Qe(v,H);if(_&&(w[j]={..._,...C(K.validate,_.message)},!t))return $(_.message),w}else if(k(G)){let v={};for(const _ in G){if(!O(v)&&!t)break;const E=Qe(await G[_](x,s),H,_);E&&(v={...E,...C(_,E.message)},$(E.message),t&&(w[j]=v))}if(!O(v)&&(w[j]={ref:H,...v},!t))return w}}return $(!0),w};function Sr(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=A(e)?n++:e[s[n++]];return e}function kr(e){for(const s in e)if(e.hasOwnProperty(s)&&!A(e[s]))return!1;return!0}function S(e,s){const t=Array.isArray(s)?s:Te(s)?[s]:er(s),n=t.length===1?e:Sr(e,t),a=t.length-1,u=t[a];return n&&delete n[u],a!==0&&(k(n)&&O(n)||Array.isArray(n)&&kr(n))&&S(e,t.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:a=>{for(const u of e)u.next&&u.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(u=>u!==a)}}),unsubscribe:()=>{e=[]}}},_e=e=>T(e)||!Ze(e);function Z(e,s){if(_e(e)||_e(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const a of t){const u=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const h=s[a];if(ie(u)&&ie(h)||k(u)&&k(h)||Array.isArray(u)&&Array.isArray(h)?!Z(u,h):u!==h)return!1}}return!0}var sr=e=>e.type==="select-multiple",pr=e=>Le(e)||fe(e),ke=e=>be(e)&&e.isConnected,ir=e=>{for(const s in e)if(X(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(k(e)||t)for(const n in e)Array.isArray(e[n])||k(e[n])&&!ir(e[n])?(s[n]=Array.isArray(e[n])?[]:{},Fe(e[n],s[n])):T(e[n])||(s[n]=!0);return s}function lr(e,s,t){const n=Array.isArray(e);if(k(e)||n)for(const a in e)Array.isArray(e[a])||k(e[a])&&!ir(e[a])?A(s)||_e(t[a])?t[a]=Array.isArray(e[a])?Fe(e[a],[]):{...Fe(e[a])}:lr(e[a],T(s)?{}:s[a],t[a]):t[a]=!Z(e[a],s[a]);return t}var ge=(e,s)=>lr(e,s,Fe(s)),nr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>A(e)?e:s?e===""?NaN:e&&+e:t&&W(e)?new Date(e):n?n(e):e;function pe(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return je(s)?s.files:Le(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?rr(e.refs).value:nr(A(s.value)?e.ref.value:s.value,e)}var Rr=(e,s,t,n)=>{const a={};for(const u of e){const h=d(s,u);h&&m(a,u,h._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},ae=e=>A(e)?e:xe(e)?e.source:k(e)?xe(e.value)?e.value.source:e.value:e,Tr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ye(e,s,t){const n=d(e,t);if(n||Te(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const u=a.join("."),h=d(s,u),g=d(e,u);if(h&&!Array.isArray(h)&&t!==u)return{name:t};if(g&&g.type)return{name:u,error:g};a.pop()}return{name:t}}var jr=(e,s,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(s||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,Lr=(e,s)=>!ce(d(e,s)).length&&S(e,s);const Or={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Cr(e={}){let s={...Or,...e},t={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},a=k(s.defaultValues)||k(s.values)?M(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:M(a),h={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},q,P=0;const D={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Se(),array:Se(),state:Se()},de=$e(s.mode),G=$e(s.reValidateMode),j=s.criteriaMode===I.all,Ve=r=>i=>{clearTimeout(P),P=setTimeout(r,i)},J=async r=>{if(D.isValid||r){const i=s.resolver?O((await Y()).errors):await C(n,!0);i!==t.isValid&&b.state.next({isValid:i})}},Q=(r,i)=>{(D.isValidating||D.validatingFields)&&((r||Array.from(g.mount)).forEach(l=>{l&&(i?m(t.validatingFields,l,i):S(t.validatingFields,l))}),b.state.next({validatingFields:t.validatingFields,isValidating:!O(t.validatingFields)}))},x=(r,i=[],l,c,f=!0,o=!0)=>{if(c&&l){if(h.action=!0,o&&Array.isArray(d(n,r))){const y=l(d(n,r),c.argA,c.argB);f&&m(n,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=l(d(t.errors,r),c.argA,c.argB);f&&m(t.errors,r,y),Lr(t.errors,r)}if(D.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=l(d(t.touchedFields,r),c.argA,c.argB);f&&m(t.touchedFields,r,y)}D.dirtyFields&&(t.dirtyFields=ge(a,u)),b.state.next({name:r,isDirty:v(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else m(u,r,i)},H=(r,i)=>{m(t.errors,r,i),b.state.next({errors:t.errors})},$=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},w=(r,i,l,c)=>{const f=d(n,r);if(f){const o=d(u,r,A(l)?d(a,r):l);A(o)||c&&c.defaultChecked||i?m(u,r,i?o:pe(f._f)):R(r,o),h.mount&&J()}},ee=(r,i,l,c,f)=>{let o=!1,y=!1;const V={name:r},p=!!(d(n,r)&&d(n,r)._f.disabled);if(!l||c){D.isDirty&&(y=t.isDirty,t.isDirty=V.isDirty=v(),o=y!==V.isDirty);const L=p||Z(d(a,r),i);y=!!(!p&&d(t.dirtyFields,r)),L||p?S(t.dirtyFields,r):m(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,o=o||D.dirtyFields&&y!==!L}if(l){const L=d(t.touchedFields,r);L||(m(t.touchedFields,r,l),V.touchedFields=t.touchedFields,o=o||D.touchedFields&&L!==l)}return o&&f&&b.state.next(V),o?V:{}},ye=(r,i,l,c)=>{const f=d(t.errors,r),o=D.isValid&&z(i)&&t.isValid!==i;if(e.delayError&&l?(q=Ve(()=>H(r,l)),q(e.delayError)):(clearTimeout(P),q=null,l?m(t.errors,r,l):S(t.errors,r)),(l?!Z(f,l):f)||!O(c)||o){const y={...c,...o&&z(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},b.state.next(y)}},Y=async r=>{Q(r,!0);const i=await s.resolver(u,s.context,Rr(r||g.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return Q(r),i},re=async r=>{const{errors:i}=await Y(r);if(r)for(const l of r){const c=d(i,l);c?m(t.errors,l,c):S(t.errors,l)}else t.errors=i;return i},C=async(r,i,l={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...y}=f;if(o){const V=g.array.has(o.name);Q([c],!0);const p=await Xe(f,u,j,s.shouldUseNativeValidation&&!i,V);if(Q([c]),p[o.name]&&(l.valid=!1,i))break;!i&&(d(p,o.name)?V?Er(t.errors,p,o.name):m(t.errors,o.name,p[o.name]):S(t.errors,o.name))}y&&await C(y,i,l)}}return l.valid},he=()=>{for(const r of g.unMount){const i=d(n,r);i&&(i._f.refs?i._f.refs.every(l=>!ke(l)):!ke(i._f.ref))&&me(r)}g.unMount=new Set},v=(r,i)=>(r&&i&&m(u,r,i),!Z(Oe(),a)),_=(r,i,l)=>Dr(r,g,{...h.mount?u:A(i)?a:W(r)?{[r]:i}:i},l,i),E=r=>ce(d(h.mount?u:a,r,e.shouldUnregister?d(a,r,[]):[])),R=(r,i,l={})=>{const c=d(n,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&m(u,r,nr(i,o)),f=be(o.ref)&&T(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(V=>V===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):je(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ee(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ue(r)},B=(r,i,l)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,y=d(n,o);(g.array.has(r)||!_e(f)||y&&!y._f)&&!ie(f)?B(o,f,l):R(o,f,l)}},N=(r,i,l={})=>{const c=d(n,r),f=g.array.has(r),o=M(i);m(u,r,o),f?(b.array.next({name:r,values:{...u}}),(D.isDirty||D.dirtyFields)&&l.shouldDirty&&b.state.next({name:r,dirtyFields:ge(a,u),isDirty:v(r,o)})):c&&!c._f&&!T(o)?B(r,o,l):R(r,o,l),Ke(r,g)&&b.state.next({...t}),b.values.next({name:h.mount?r:void 0,values:{...u}})},le=async r=>{h.mount=!0;const i=r.target;let l=i.name,c=!0;const f=d(n,l),o=()=>i.type?pe(f._f):br(r),y=V=>{c=Number.isNaN(V)||V===d(u,l,V)};if(f){let V,p;const L=o(),te=r.type===He.BLUR||r.type===He.FOCUS_OUT,cr=!Tr(f._f)&&!s.resolver&&!d(t.errors,l)&&!f._f.deps||jr(te,d(t.touchedFields,l),t.isSubmitted,G,de),De=Ke(l,g,te);m(u,l,L),te?(f._f.onBlur&&f._f.onBlur(r),q&&q(0)):f._f.onChange&&f._f.onChange(r);const we=ee(l,L,te,!1),dr=!O(we)||De;if(!te&&b.values.next({name:l,type:r.type,values:{...u}}),cr)return D.isValid&&J(),dr&&b.state.next({name:l,...De?{}:we});if(!te&&De&&b.state.next({...t}),s.resolver){const{errors:Pe}=await Y([l]);if(y(L),c){const yr=Ye(t.errors,n,l),We=Ye(Pe,n,yr.name||l);V=We.error,l=We.name,p=O(Pe)}}else Q([l],!0),V=(await Xe(f,u,j,s.shouldUseNativeValidation))[l],Q([l]),y(L),c&&(V?p=!1:D.isValid&&(p=await C(n,!0)));c&&(f._f.deps&&ue(f._f.deps),ye(l,p,V,we))}},ne=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ue=async(r,i={})=>{let l,c;const f=Ee(r);if(s.resolver){const o=await re(A(r)?r:f);l=O(o),c=r?!f.some(y=>d(o,y)):l}else r?(c=(await Promise.all(f.map(async o=>{const y=d(n,o);return await C(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!t.isValid)&&J()):c=l=await C(n);return b.state.next({...!W(r)||D.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors}),i.shouldFocus&&!c&&oe(n,ne,r?f:g.mount),c},Oe=r=>{const i={...h.mount?u:a};return A(r)?i:W(r)?d(i,r):r.map(l=>d(i,l))},Ce=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),isTouched:!!d((i||t).touchedFields,r),isValidating:!!d((i||t).validatingFields,r),error:d((i||t).errors,r)}),ur=r=>{r&&Ee(r).forEach(i=>S(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Ne=(r,i,l)=>{const c=(d(n,r,{_f:{}})._f||{}).ref;m(t.errors,r,{...i,ref:c}),b.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&c&&c.focus&&c.focus()},ar=(r,i)=>X(r)?b.values.subscribe({next:l=>r(_(void 0,i),l)}):_(r,i,!0),me=(r,i={})=>{for(const l of r?Ee(r):g.mount)g.mount.delete(l),g.array.delete(l),i.keepValue||(S(n,l),S(u,l)),!i.keepError&&S(t.errors,l),!i.keepDirty&&S(t.dirtyFields,l),!i.keepTouched&&S(t.touchedFields,l),!i.keepIsValidating&&S(t.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&S(a,l);b.values.next({values:{...u}}),b.state.next({...t,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&J()},Me=({disabled:r,name:i,field:l,fields:c,value:f})=>{if(z(r)){const o=r?void 0:A(f)?pe(l?l._f:d(c,i)._f):f;m(u,i,o),ee(i,o,!1,!1,!0)}},Ae=(r,i={})=>{let l=d(n,r);const c=z(i.disabled);return m(n,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...i}}),g.mount.add(r),l?Me({field:l,disabled:i.disabled,name:r,value:i.value}):w(r,!0,i.value),{...c?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ae(i.min),max:ae(i.max),minLength:ae(i.minLength),maxLength:ae(i.maxLength),pattern:ae(i.pattern)}:{},name:r,onChange:le,onBlur:le,ref:f=>{if(f){Ae(r,i),l=d(n,r);const o=A(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=pr(o),V=l._f.refs||[];if(y?V.find(p=>p===o):o===l._f.ref)return;m(n,r,{_f:{...l._f,...y?{refs:[...V.filter(ke),o,...Array.isArray(d(a,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),w(r,!1,void 0,o)}else l=d(n,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(_r(g.array,r)&&h.action)&&g.unMount.add(r)}}},Ue=()=>s.shouldFocusError&&oe(n,ne,g.mount),or=r=>{z(r)&&(b.state.next({disabled:r}),oe(n,(i,l)=>{let c=r;const f=d(n,l);f&&z(f._f.disabled)&&(c||(c=f._f.disabled)),i.disabled=c},0,!1))},qe=(r,i)=>async l=>{let c;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let f=M(u);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await Y();t.errors=o,f=y}else await C(n);if(S(t.errors,"root"),O(t.errors)){b.state.next({errors:{}});try{await r(f,l)}catch(o){c=o}}else i&&await i({...t.errors},l),Ue(),setTimeout(Ue);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(n,r)&&(A(i.defaultValue)?N(r,M(d(a,r))):(N(r,i.defaultValue),m(a,r,M(i.defaultValue))),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?v(r,M(d(a,r))):v()),i.keepError||(S(t.errors,r),D.isValid&&J()),b.state.next({...t}))},Be=(r,i={})=>{const l=r?M(r):a,c=M(l),f=O(r),o=f?a:c;if(i.keepDefaultValues||(a=l),!i.keepValues){if(i.keepDirtyValues)for(const y of g.mount)d(t.dirtyFields,y)?m(o,y,d(u,y)):N(y,d(o,y));else{if(Re&&A(r))for(const y of g.mount){const V=d(n,y);if(V&&V._f){const p=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(be(p)){const L=p.closest("form");if(L){L.reset();break}}}}n={}}u=e.shouldUnregister?i.keepDefaultValues?M(a):{}:M(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!D.isValid||!!i.keepIsValid||!!i.keepDirtyValues,h.watch=!!e.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Z(r,a)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?[]:i.keepDirtyValues?i.keepDefaultValues&&u?ge(a,u):t.dirtyFields:i.keepDefaultValues&&r?ge(a,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ie=(r,i)=>Be(X(r)?r(u):r,i);return{control:{register:Ae,unregister:me,getFieldState:Ce,handleSubmit:qe,setError:Ne,_executeSchema:Y,_getWatch:_,_getDirty:v,_updateValid:J,_removeUnmounted:he,_updateFieldArray:x,_updateDisabledField:Me,_getFieldArray:E,_reset:Be,_resetDefaultValues:()=>X(s.defaultValues)&&s.defaultValues().then(r=>{Ie(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:b,_proxyFormState:D,_setErrors:$,get _fields(){return n},get _formValues(){return u},get _state(){return h},set _state(r){h=r},get _defaultValues(){return a},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ue,register:Ae,handleSubmit:qe,watch:ar,setValue:N,getValues:Oe,reset:Ie,resetField:fr,clearErrors:ur,unregister:me,setError:Ne,setFocus:(r,i={})=>{const l=d(n,r),c=l&&l._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ce}}function Nr(e={}){const s=U.useRef(),t=U.useRef(),[n,a]=U.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Cr(e),formState:n});const u=s.current.control;return u._options=e,Ar({subject:u._subjects.state,next:h=>{mr(h,u._proxyFormState,u._updateFormState,!0)&&a({...u._formState})}}),U.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),U.useEffect(()=>{if(u._proxyFormState.isDirty){const h=u._getDirty();h!==n.isDirty&&u._subjects.state.next({isDirty:h})}},[u,n.isDirty]),U.useEffect(()=>{e.values&&!Z(e.values,t.current)?(u._reset(e.values,u._options.resetOptions),t.current=e.values,a(h=>({...h}))):u._resetDefaultValues()},[e.values,u]),U.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),U.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),U.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),s.current.formState=Vr(n,u),s.current}function Mr(){const{register:e,handleSubmit:s,formState:{errors:t}}=Nr(),n=a=>{console.log(a)};return F.jsxs("form",{onSubmit:s(n),style:{maxWidth:"400px",margin:"0 auto"},children:[F.jsxs("div",{children:[F.jsx("label",{htmlFor:"fullName",children:"Full Name"}),F.jsx("input",{id:"fullName",...e("fullName",{required:!0}),placeholder:"Enter your full name"}),t.fullName&&F.jsx("p",{children:"Full name is required."})]}),F.jsxs("div",{children:[F.jsx("label",{htmlFor:"email",children:"Email"}),F.jsx("input",{id:"email",type:"email",...e("email",{required:!0}),placeholder:"Enter your email"}),t.email&&F.jsx("p",{children:"Email is required."})]}),F.jsxs("div",{children:[F.jsx("label",{htmlFor:"birthDay",children:"Date of Birth"}),F.jsx("input",{id:"birthDay",type:"date",...e("birthDay",{required:!0})}),t.birthDay&&F.jsx("p",{children:"Date of birth is required."})]}),F.jsxs("fieldset",{children:[F.jsx("legend",{children:"Where did you hear about this event?"}),F.jsxs("div",{children:[F.jsx("input",{id:"socialMedia",type:"checkbox",...e("referral",{required:!0}),value:"Social media"}),F.jsx("label",{htmlFor:"socialMedia",children:"Social media"})]}),F.jsxs("div",{children:[F.jsx("input",{id:"friends",type:"checkbox",...e("referral",{required:!0}),value:"Friends"}),F.jsx("label",{htmlFor:"friends",children:"Friends"})]}),F.jsxs("div",{children:[F.jsx("input",{id:"foundMyself",type:"checkbox",...e("referral",{required:!0}),value:"Found myself"}),F.jsx("label",{htmlFor:"foundMyself",children:"Found myself"})]}),t.referral&&F.jsx("p",{children:"Please select at least one option."})]}),F.jsx("button",{type:"submit",children:"Register"})]})}function Wr(){return F.jsx(hr,{children:F.jsxs(gr,{children:[F.jsx(vr,{title:"Event registration"}),F.jsx(Mr,{})]})})}export{Wr as default};
//# sourceMappingURL=EventRegistration-76f0c742.js.map
