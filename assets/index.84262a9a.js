import{j as h,r as u,R as F,a as M}from"./vendor.ff9c1efb.js";const H=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function _(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=_(r);fetch(r.href,s)}};H();var o=(e=>(e[e.NOT_PRESSED=0]="NOT_PRESSED",e[e.INCORRECT=1]="INCORRECT",e[e.WRONG_POSITION=2]="WRONG_POSITION",e[e.CORRECT=3]="CORRECT",e))(o||{});const K=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["ENTER","Z","X","C","V","B","N","M","DEL"]],Y="_App_gxysx_1",J="_board_gxysx_8",Q="_input_gxysx_16",V="_correct_gxysx_36",X="_wrong_position_gxysx_42",Z="_incorrect_gxysx_48",q="_keyboard_wrapper_gxysx_55",z="_row_gxysx_60",tt="_firstRow_gxysx_64",et="_otherRows_gxysx_67",ot="_key_gxysx_55",nt="_notPressed_gxysx_75",rt="_wrongPosition_gxysx_84";var p={App:Y,board:J,input:Q,correct:V,wrong_position:X,incorrect:Z,keyboard_wrapper:q,row:z,firstRow:tt,otherRows:et,key:ot,notPressed:nt,wrongPosition:rt};const S=h.exports.jsx,st=h.exports.jsxs,ct={[o.NOT_PRESSED]:p.notPressed,[o.INCORRECT]:p.incorrect,[o.WRONG_POSITION]:p.wrongPosition,[o.CORRECT]:p.correct},it=({onClick:e,usedButtons:d})=>{const _=l=>{if(!(!d||!l))return ct[d[l]]};return S("div",{className:p.keyboard_wrapper,children:K.map((l,r)=>S("div",{className:[p.row,r===0?p.firstRow:p.otherRows].join(" "),children:l.map(s=>S("button",{className:[p.key,_(s)].join(" "),onClick:e,children:s},s))},r))})},at=()=>({"":o.NOT_PRESSED,Q:o.NOT_PRESSED,W:o.NOT_PRESSED,E:o.NOT_PRESSED,R:o.NOT_PRESSED,T:o.NOT_PRESSED,Y:o.NOT_PRESSED,U:o.NOT_PRESSED,I:o.NOT_PRESSED,O:o.NOT_PRESSED,P:o.NOT_PRESSED,A:o.NOT_PRESSED,S:o.NOT_PRESSED,D:o.NOT_PRESSED,F:o.NOT_PRESSED,G:o.NOT_PRESSED,H:o.NOT_PRESSED,J:o.NOT_PRESSED,K:o.NOT_PRESSED,L:o.NOT_PRESSED,ENTER:o.NOT_PRESSED,Z:o.NOT_PRESSED,X:o.NOT_PRESSED,C:o.NOT_PRESSED,V:o.NOT_PRESSED,B:o.NOT_PRESSED,N:o.NOT_PRESSED,M:o.NOT_PRESSED,DEL:o.NOT_PRESSED}),ut="_App_1tpp1_1",lt="_board_1tpp1_8",_t="_input_1tpp1_16",Et="_correct_1tpp1_36",pt="_wrong_position_1tpp1_42",dt="_incorrect_1tpp1_48";var R={App:ut,board:lt,input:_t,correct:Et,wrong_position:pt,incorrect:dt};const i=6,y=6,D=Object.freeze(Array(i).fill("")),w="ABOARD";function St(){const[e,d]=u.exports.useState(),[_,l]=u.exports.useState([...D]),[r,s]=u.exports.useState(0),[c,C]=u.exports.useState(0),[m,T]=u.exports.useState(!0),[I,b]=u.exports.useState(at()),k=t=>t>=i*c&&t<i*(c+1)&&m,A=t=>{s(t)},L=t=>n=>{n.target.value=n.target.value.toUpperCase(),l(a=>(a[t%i]=n.target.value,a)),n.target.value&&t%i<i-1&&s(t+1)},v=()=>{O()},j=()=>{f()},B=t=>{l(n=>(n[r%i]!==""||(n[r%i]=t,e&&e.children[r]&&(e.children[r].focus(),e.children[r].value=t)),n)),r%i<i-1&&s(r+1)},W=t=>{const n=t.currentTarget.innerText.toUpperCase();switch(n){case"ENTER":v();return;case"DEL":j();return;default:B(n)}},f=u.exports.useCallback(()=>{s(t=>{const n=_[t]===""&&t%i>0?t-1:t;return l(a=>{const E=c*i+n;return a[E]="",e&&e.children[E]&&(e.children[E].value=""),a}),n})},[e,c,_]),P=u.exports.useCallback(t=>{if(!e)return;e.children[t+i*c].classList.add(R.correct)},[e,c]),g=u.exports.useCallback(t=>{if(!e)return;e.children[t+i*c].classList.add(R.wrong_position)},[e,c]),x=u.exports.useCallback(t=>{if(!e)return;e.children[t+i*c].classList.add(R.incorrect)},[e,c]),U=()=>{T(!1)},$=()=>{T(!1)},G=()=>{l([...D]),C(t=>t+1)},N=(t,n)=>{b(a=>(a[t]=n,a))},O=u.exports.useCallback(()=>{if(_.filter(a=>a==="").length>0)return;let n=0;for(const[a,E]of _.entries())E===w[a]?(P(a),N(E,o.CORRECT),n=n+1):w.includes(E)?(g(a),N(E,o.WRONG_POSITION)):(x(a),N(E,o.INCORRECT));if(n===i&&U(),c===y-1){$();return}G()},[c,_,P,g,x]);return u.exports.useEffect(()=>{const t=n=>{n.key==="Backspace"&&f(),n.key==="Enter"&&O()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[O,f]),u.exports.useEffect(()=>{var t;e&&((t=e.children[r])==null||t.focus())},[e,r]),u.exports.useEffect(()=>{var t;e&&((t=e.children[c*i])==null||t.focus())},[e,c]),st("div",{className:R.App,children:[S("div",{className:R.board,ref:d,children:Array(i*y).fill(1).map((t,n)=>S("input",{type:"text",className:R.input,onChange:L(n),maxLength:1,disabled:!k(n),onFocus:()=>A(n)},n))}),S(it,{usedButtons:I,onClick:W})]})}F.render(S(M.StrictMode,{children:S(St,{})}),document.getElementById("root"));
