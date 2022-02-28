import{a as V,j as $,u as L,r as l,R as Z,b as q}from"./vendor.a6994fe5.js";const z=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))_(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const P of s.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&_(P)}).observe(document,{childList:!0,subtree:!0});function p(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function _(n){if(n.ep)return;n.ep=!0;const s=p(n);fetch(n.href,s)}};z();const W=V(!1);var t=(o=>(o[o.NOT_PRESSED=0]="NOT_PRESSED",o[o.INCORRECT=1]="INCORRECT",o[o.WRONG_POSITION=2]="WRONG_POSITION",o[o.CORRECT=3]="CORRECT",o))(t||{});const T={Q:"Q",W:"W",E:"E",R:"R",T:"T",Y:"Y",U:"U",I:"I",O:"O",P:"P",A:"A",S:"S",D:"D",F:"F",G:"G",H:"H",J:"J",K:"K",L:"L",ENTER:"ENTER",Z:"Z",X:"X",C:"C",V:"V",B:"B",N:"N",M:"M",BACKSPACE:"DEL"},tt=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["ENTER","Z","X","C","V","B","N","M","BACKSPACE"]],et="_App_1ug11_1",ot="_board_1ug11_11",nt="_input_1ug11_22",rt="_correct_1ug11_37",st="_wrong_position_1ug11_40",ct="_incorrect_1ug11_43",it="_keyboard_wrapper_1ug11_47",at="_row_1ug11_52",ut="_firstRow_1ug11_56",lt="_otherRows_1ug11_59",_t="_key_1ug11_47",dt="_notPressed_1ug11_67",pt="_wrongPosition_1ug11_76";var S={App:et,board:ot,input:nt,correct:rt,wrong_position:st,incorrect:ct,keyboard_wrapper:it,row:at,firstRow:ut,otherRows:lt,key:_t,notPressed:dt,wrongPosition:pt};const a=$.exports.jsx,y=$.exports.jsxs,Et={[t.NOT_PRESSED]:S.notPressed,[t.INCORRECT]:S.incorrect,[t.WRONG_POSITION]:S.wrongPosition,[t.CORRECT]:S.correct},St=({onClick:o,usedButtons:d})=>{const p=_=>{if(!(!d||!_))return Et[d[_]]};return a("div",{className:S.keyboard_wrapper,children:tt.map((_,n)=>a("div",{className:[S.row,n===0?S.firstRow:S.otherRows].join(" "),children:_.map(s=>a("button",{className:[S.key,p(s)].join(" "),onClick:o,children:T[s]},s))},n))})},Rt="_App_1wx00_1",Nt="_board_1wx00_11",Ot="_input_1wx00_22",Pt="_correct_1wx00_37",Tt="_wrong_position_1wx00_40",wt="_incorrect_1wx00_43",ft="_wrapper_1wx00_47",Ct="_blocksWrapper_1wx00_52",gt="_blocks_1wx00_52",mt="_wrongPosition_1wx00_74",ht="_notPressed_1wx00_77",Dt="_closeButton_1wx00_80";var N={App:Rt,board:Nt,input:Ot,correct:Pt,wrong_position:Tt,incorrect:wt,wrapper:ft,blocksWrapper:Ct,blocks:gt,wrongPosition:mt,notPressed:ht,closeButton:Dt};const xt="_modalBackground_1j2tv_1",yt="_modal_1j2tv_1";var v={modalBackground:xt,modal:yt};const bt=({className:o,children:d})=>a("div",{className:v.modalBackground,children:a("div",{className:[v.modal,o].join(" "),children:d})}),It={[t.NOT_PRESSED]:N.notPressed,[t.CORRECT]:N.correct,[t.INCORRECT]:N.incorrect,[t.WRONG_POSITION]:N.wrongPosition},kt=({inputState:o})=>{const[d,p]=L(W);if(!d)return null;const _=n=>It[n];return y(bt,{className:N.wrapper,children:[y("div",{children:[a("h1",{children:"Congratulations!"}),a("h2",{children:"You've got the answer!"})]}),a("div",{className:N.blocksWrapper,children:a("div",{className:N.blocks,children:o.map((n,s)=>a("div",{className:_(n)},s))})}),a("button",{className:N.closeButton,onClick:()=>p(!1),children:"X"})]})},At=()=>({Q:t.NOT_PRESSED,W:t.NOT_PRESSED,E:t.NOT_PRESSED,R:t.NOT_PRESSED,T:t.NOT_PRESSED,Y:t.NOT_PRESSED,U:t.NOT_PRESSED,I:t.NOT_PRESSED,O:t.NOT_PRESSED,P:t.NOT_PRESSED,A:t.NOT_PRESSED,S:t.NOT_PRESSED,D:t.NOT_PRESSED,F:t.NOT_PRESSED,G:t.NOT_PRESSED,H:t.NOT_PRESSED,J:t.NOT_PRESSED,K:t.NOT_PRESSED,L:t.NOT_PRESSED,ENTER:t.NOT_PRESSED,Z:t.NOT_PRESSED,X:t.NOT_PRESSED,C:t.NOT_PRESSED,V:t.NOT_PRESSED,B:t.NOT_PRESSED,N:t.NOT_PRESSED,M:t.NOT_PRESSED,BACKSPACE:t.NOT_PRESSED}),vt="_App_22jp1_1",Bt="_board_22jp1_11",jt="_input_22jp1_22",$t="_correct_22jp1_37",Lt="_wrong_position_22jp1_40",Wt="_incorrect_22jp1_43";var O={App:vt,board:Bt,input:jt,correct:$t,wrong_position:Lt,incorrect:Wt};const u=6,x=6,B=Object.freeze(Array(u).fill(void 0)),j="ABOARD";function Gt(){const[o,d]=l.exports.useState(),[p,_]=l.exports.useState([...B]),[n,s]=l.exports.useState(Array(u*x).fill(void 0)),[P,w]=l.exports.useState(Array(u*x).fill(t.NOT_PRESSED)),[R,f]=l.exports.useState(0),[E,G]=l.exports.useState(0),[C,b]=l.exports.useState(!0),[K,M]=l.exports.useState(At()),[Mt,U]=L(W),H=()=>{D()},Y=()=>{m()},g=l.exports.useCallback(r=>{p[R%u]||(_(e=>(e[R%u]=r,[...e])),s(e=>(e[R]=r,[...e])),R%u<u-1&&f(e=>e+1))},[R,p]),F=r=>{if(!C)return;const e=r.currentTarget.innerText.toUpperCase();if(!!Object.values(T).includes(e))switch(e){case T.ENTER:H();return;case T.BACKSPACE:Y();return;default:g(e)}},m=l.exports.useCallback(()=>{f(r=>{const e=p[r]&&r%u>0?r:r-1;return _(c=>{const i=e-E*u;return c[i]=void 0,[...c]}),s(c=>(c[e]=void 0,[...c])),e})},[E,p]),I=l.exports.useCallback(r=>{if(!o)return;const e=r+u*E;o.children[e].classList.add(O.correct),w(i=>(i[e]=t.CORRECT,[...i]))},[o,E]),k=l.exports.useCallback(r=>{if(!o)return;const e=r+u*E;o.children[e].classList.add(O.wrong_position),w(i=>(i[e]=t.WRONG_POSITION,[...i]))},[o,E]),A=l.exports.useCallback(r=>{if(!o)return;const e=r+u*E;o.children[e].classList.add(O.incorrect),w(i=>(i[e]=t.INCORRECT,[...i]))},[o,E]),X=()=>{b(!1),U(!0)},J=()=>{b(!1)},Q=()=>{_([...B]),G(r=>{const e=r+1;return f(e*u),e})},h=(r,e)=>{M(c=>(c[r]=e,c))},D=l.exports.useCallback(()=>{if(R%u<u-1||n[R]===void 0)return;let e=0;for(const[c,i]of p.entries())!i||(i===j[c]?(I(c),h(i,t.CORRECT),e=e+1):j.includes(i)?(k(c),h(i,t.WRONG_POSITION)):(A(c),h(i,t.INCORRECT)));if(e===u&&X(),E===x-1){J();return}Q()},[R,n,E,p,I,k,A]);return l.exports.useEffect(()=>{const r=e=>{if(!C)return;const c=e.key.toUpperCase();if(!!Object.keys(T).includes(c))switch(c){case"BACKSPACE":m();return;case"ENTER":D();return;default:g(c)}};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[D,g,C,m]),y("div",{className:O.App,children:[a("div",{className:O.board,ref:d,children:n.map((r,e)=>a("div",{className:O.input,children:r},e))}),a(St,{usedButtons:K,onClick:F}),a(kt,{inputState:P})]})}const Kt=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${Kt}px`);Z.render(a(q.StrictMode,{children:a(Gt,{})}),document.getElementById("root"));
