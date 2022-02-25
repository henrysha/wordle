import{j as b,r as u,R as $,a as M}from"./vendor.ff9c1efb.js";const H=function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function E(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=E(o);fetch(o.href,s)}};H();var t=(n=>(n[n.NOT_PRESSED=0]="NOT_PRESSED",n[n.INCORRECT=1]="INCORRECT",n[n.WRONG_POSITION=2]="WRONG_POSITION",n[n.CORRECT=3]="CORRECT",n))(t||{});const O={Q:"Q",W:"W",E:"E",R:"R",T:"T",Y:"Y",U:"U",I:"I",O:"O",P:"P",A:"A",S:"S",D:"D",F:"F",G:"G",H:"H",J:"J",K:"K",L:"L",ENTER:"ENTER",Z:"Z",X:"X",C:"C",V:"V",B:"B",N:"N",M:"M",BACKSPACE:"DEL"},Y=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["ENTER","Z","X","C","V","B","N","M","BACKSPACE"]],F="_App_15m2d_1",J="_board_15m2d_8",Q="_input_15m2d_19",V="_correct_15m2d_35",X="_wrong_position_15m2d_38",Z="_incorrect_15m2d_41",q="_keyboard_wrapper_15m2d_45",z="_row_15m2d_50",tt="_firstRow_15m2d_54",et="_otherRows_15m2d_57",rt="_key_15m2d_45",nt="_notPressed_15m2d_65",ot="_wrongPosition_15m2d_74";var l={App:F,board:J,input:Q,correct:V,wrong_position:X,incorrect:Z,keyboard_wrapper:q,row:z,firstRow:tt,otherRows:et,key:rt,notPressed:nt,wrongPosition:ot};const R=b.exports.jsx,st=b.exports.jsxs,ct={[t.NOT_PRESSED]:l.notPressed,[t.INCORRECT]:l.incorrect,[t.WRONG_POSITION]:l.wrongPosition,[t.CORRECT]:l.correct},it=({onClick:n,usedButtons:p})=>{const E=a=>{if(!(!p||!a))return ct[p[a]]};return R("div",{className:l.keyboard_wrapper,children:Y.map((a,o)=>R("div",{className:[l.row,o===0?l.firstRow:l.otherRows].join(" "),children:a.map(s=>R("button",{className:[l.key,E(s)].join(" "),onClick:n,children:O[s]},s))},o))})},ut=()=>({Q:t.NOT_PRESSED,W:t.NOT_PRESSED,E:t.NOT_PRESSED,R:t.NOT_PRESSED,T:t.NOT_PRESSED,Y:t.NOT_PRESSED,U:t.NOT_PRESSED,I:t.NOT_PRESSED,O:t.NOT_PRESSED,P:t.NOT_PRESSED,A:t.NOT_PRESSED,S:t.NOT_PRESSED,D:t.NOT_PRESSED,F:t.NOT_PRESSED,G:t.NOT_PRESSED,H:t.NOT_PRESSED,J:t.NOT_PRESSED,K:t.NOT_PRESSED,L:t.NOT_PRESSED,ENTER:t.NOT_PRESSED,Z:t.NOT_PRESSED,X:t.NOT_PRESSED,C:t.NOT_PRESSED,V:t.NOT_PRESSED,B:t.NOT_PRESSED,N:t.NOT_PRESSED,M:t.NOT_PRESSED,BACKSPACE:t.NOT_PRESSED}),dt="_App_1dpgc_1",at="_board_1dpgc_8",Et="_input_1dpgc_19",_t="_correct_1dpgc_35",lt="_wrong_position_1dpgc_38",pt="_incorrect_1dpgc_41";var N={App:dt,board:at,input:Et,correct:_t,wrong_position:lt,incorrect:pt};const i=6,I=6,h=Object.freeze(Array(i).fill(void 0)),x="ABOARD";function St(){const[n,p]=u.exports.useState(),[E,a]=u.exports.useState([...h]),[o,s]=u.exports.useState(Array(i*I).fill(void 0)),[d,P]=u.exports.useState(0),[_,k]=u.exports.useState(0),[T,w]=u.exports.useState(!0),[L,v]=u.exports.useState(ut()),B=()=>{D()},j=()=>{C()},f=u.exports.useCallback(r=>{E[d%i]||(a(e=>(e[d%i]=r,[...e])),s(e=>(e[d]=r,[...e])),d%i<i-1&&P(e=>e+1))},[d,E]),K=r=>{if(!T)return;const e=r.currentTarget.innerText.toUpperCase();if(!!Object.values(O).includes(e))switch(e){case O.ENTER:B();return;case O.BACKSPACE:j();return;default:f(e)}},C=u.exports.useCallback(()=>{P(r=>{const e=E[r]&&r%i>0?r:r-1;return a(c=>{const S=e-_*i;return c[S]=void 0,[...c]}),s(c=>(c[e]=void 0,[...c])),e})},[_,E]),g=u.exports.useCallback(r=>{if(!n)return;n.children[r+i*_].classList.add(N.correct)},[n,_]),A=u.exports.useCallback(r=>{if(!n)return;n.children[r+i*_].classList.add(N.wrong_position)},[n,_]),y=u.exports.useCallback(r=>{if(!n)return;n.children[r+i*_].classList.add(N.incorrect)},[n,_]),W=()=>{w(!1)},U=()=>{w(!1)},G=()=>{a([...h]),k(r=>{const e=r+1;return P(e*i),e})},m=(r,e)=>{v(c=>(c[r]=e,c))},D=u.exports.useCallback(()=>{if(d%i<i-1||o[d]===void 0)return;let e=0;for(const[c,S]of E.entries())!S||(S===x[c]?(g(c),m(S,t.CORRECT),e=e+1):x.includes(S)?(A(c),m(S,t.WRONG_POSITION)):(y(c),m(S,t.INCORRECT)));if(e===i&&W(),_===I-1){U();return}G()},[d,_,E,g,A,y]);return u.exports.useEffect(()=>{const r=e=>{if(!T)return;const c=e.key.toUpperCase();if(!!Object.keys(O).includes(c))switch(c){case"BACKSPACE":C();return;case"ENTER":D();return;default:f(c)}};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[D,f,T,C]),st("div",{className:N.App,children:[R("div",{className:N.board,ref:p,children:o.map((r,e)=>R("div",{className:N.input,children:r},e))}),R(it,{usedButtons:L,onClick:K})]})}$.render(R(M.StrictMode,{children:R(St,{})}),document.getElementById("root"));
