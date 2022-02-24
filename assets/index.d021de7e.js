import{j as m,r as l,R as G,a as F}from"./vendor.ff9c1efb.js";const M=function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function _(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(r){if(r.ep)return;r.ep=!0;const s=_(r);fetch(r.href,s)}};M();var o=(n=>(n[n.NOT_PRESSED=0]="NOT_PRESSED",n[n.INCORRECT=1]="INCORRECT",n[n.WRONG_POSITION=2]="WRONG_POSITION",n[n.CORRECT=3]="CORRECT",n))(o||{});const H=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["ENTER","Z","X","C","V","B","N","M","DEL"]],K="_App_11hgz_1",Y="_board_11hgz_9",J="_input_11hgz_16",Q="_correct_11hgz_37",V="_wrong_position_11hgz_44",X="_incorrect_11hgz_51",Z="_keyboard_wrapper_11hgz_58",q="_row_11hgz_65",ee="_firstRow_11hgz_69",te="_otherRows_11hgz_72",ne="_key_11hgz_58",oe="_notPressed_11hgz_80",re="_wrongPosition_11hgz_89";var d={App:K,board:Y,input:J,correct:Q,wrong_position:V,incorrect:X,keyboard_wrapper:Z,row:q,firstRow:ee,otherRows:te,key:ne,notPressed:oe,wrongPosition:re};const p=m.exports.jsx,se=m.exports.jsxs,ce={[o.NOT_PRESSED]:d.notPressed,[o.INCORRECT]:d.incorrect,[o.WRONG_POSITION]:d.wrongPosition,[o.CORRECT]:d.correct},ie=({onClick:n,usedButtons:S})=>{const _=u=>{if(!(!S||!u))return ce[S[u]]};return p("div",{className:d.keyboard_wrapper,children:H.map((u,r)=>p("div",{className:[d.row,r===0?d.firstRow:d.otherRows].join(" "),children:u.map(s=>p("button",{className:[d.key,_(s)].join(" "),onClick:n,children:s},s))},r))})},ae=()=>({"":o.NOT_PRESSED,Q:o.NOT_PRESSED,W:o.NOT_PRESSED,E:o.NOT_PRESSED,R:o.NOT_PRESSED,T:o.NOT_PRESSED,Y:o.NOT_PRESSED,U:o.NOT_PRESSED,I:o.NOT_PRESSED,O:o.NOT_PRESSED,P:o.NOT_PRESSED,A:o.NOT_PRESSED,S:o.NOT_PRESSED,D:o.NOT_PRESSED,F:o.NOT_PRESSED,G:o.NOT_PRESSED,H:o.NOT_PRESSED,J:o.NOT_PRESSED,K:o.NOT_PRESSED,L:o.NOT_PRESSED,ENTER:o.NOT_PRESSED,Z:o.NOT_PRESSED,X:o.NOT_PRESSED,C:o.NOT_PRESSED,V:o.NOT_PRESSED,B:o.NOT_PRESSED,N:o.NOT_PRESSED,M:o.NOT_PRESSED,DEL:o.NOT_PRESSED}),le="_App_h2zf9_1",ue="_board_h2zf9_9",_e="_input_h2zf9_16",Ee="_correct_h2zf9_37",de="_wrong_position_h2zf9_44",pe="_incorrect_h2zf9_51";var R={App:le,board:ue,input:_e,correct:Ee,wrong_position:de,incorrect:pe};const i=6,D=6,w=Object.freeze(Array(i).fill("")),C="ABOARD";function Se(){const[n,S]=l.exports.useState(),[_,u]=l.exports.useState([...w]),[r,s]=l.exports.useState(0),[c,y]=l.exports.useState(0),[I,h]=l.exports.useState(!0),[x,b]=l.exports.useState(ae()),k=e=>e>=i*c&&e<i*(c+1)&&I,z=e=>{s(e)},A=e=>t=>{t.target.value=t.target.value.toUpperCase(),u(a=>(a[e%i]=t.target.value,a)),t.target.value&&e%i<i-1&&s(e+1)},L=()=>{O()},v=()=>{f()},j=e=>{u(t=>(t[r%i]!==""||(t[r%i]=e,n&&n.children[r]&&(n.children[r].children[0].focus(),n.children[r].children[0].value=e)),t)),r%i<i-1&&s(r+1)},B=e=>{const t=e.currentTarget.innerText.toUpperCase();switch(t){case"ENTER":L();return;case"DEL":v();return;default:j(t)}},f=l.exports.useCallback(()=>{s(e=>{const t=_[e]===""&&e%i>0?e-1:e;return u(a=>{const E=c*i+t;return a[E]="",n&&n.children[E]&&(n.children[E].children[0].value=""),a}),t})},[n,c,_]),T=l.exports.useCallback(e=>{if(!n)return;n.children[e+i*c].classList.add(R.correct)},[n,c]),P=l.exports.useCallback(e=>{if(!n)return;n.children[e+i*c].classList.add(R.wrong_position)},[n,c]),g=l.exports.useCallback(e=>{if(!n)return;n.children[e+i*c].classList.add(R.incorrect)},[n,c]),W=()=>{h(!1)},U=()=>{h(!1)},$=()=>{u([...w]),y(e=>e+1)},N=(e,t)=>{b(a=>(a[e]=t,a))},O=l.exports.useCallback(()=>{if(_.filter(a=>a==="").length>0)return;let t=0;for(const[a,E]of _.entries())E===C[a]?(T(a),N(E,o.CORRECT),t=t+1):C.includes(E)?(P(a),N(E,o.WRONG_POSITION)):(g(a),N(E,o.INCORRECT));if(t===i&&W(),c===D-1){U();return}$()},[c,_,T,P,g]);return l.exports.useEffect(()=>{const e=t=>{t.key==="Backspace"&&f(),t.key==="Enter"&&O()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[O,f]),l.exports.useEffect(()=>{var e,t;n&&((t=(e=n.children[r])==null?void 0:e.children[0])==null||t.focus())},[n,r]),l.exports.useEffect(()=>{var e,t;n&&((t=(e=n.children[c*i])==null?void 0:e.children[0])==null||t.focus())},[n,c]),se("div",{className:R.App,children:[p("div",{className:R.board,ref:S,children:Array(i*D).fill(1).map((e,t)=>p("div",{className:R.input,children:p("input",{type:"text",onChange:A(t),maxLength:1,disabled:!k(t),onFocus:()=>z(t)})},t))}),p(ie,{usedButtons:x,onClick:B})]})}G.render(p(F.StrictMode,{children:p(Se,{})}),document.getElementById("root"));