import{j as b,r as u,R as $,a as M}from"./vendor.ff9c1efb.js";const H=function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const E of s.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&a(E)}).observe(document,{childList:!0,subtree:!0});function d(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=d(o);fetch(o.href,s)}};H();var e=(n=>(n[n.NOT_PRESSED=0]="NOT_PRESSED",n[n.INCORRECT=1]="INCORRECT",n[n.WRONG_POSITION=2]="WRONG_POSITION",n[n.CORRECT=3]="CORRECT",n))(e||{});const O={Q:"Q",W:"W",E:"E",R:"R",T:"T",Y:"Y",U:"U",I:"I",O:"O",P:"P",A:"A",S:"S",D:"D",F:"F",G:"G",H:"H",J:"J",K:"K",L:"L",ENTER:"ENTER",Z:"Z",X:"X",C:"C",V:"V",B:"B",N:"N",M:"M",BACKSPACE:"DEL"},Y=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["ENTER","Z","X","C","V","B","N","M","BACKSPACE"]],F="_App_17dix_1",J="_board_17dix_8",Q="_input_17dix_19",V="_correct_17dix_35",X="_wrong_position_17dix_41",Z="_incorrect_17dix_47",q="_keyboard_wrapper_17dix_54",z="_row_17dix_59",ee="_firstRow_17dix_63",te="_otherRows_17dix_66",re="_key_17dix_54",ne="_notPressed_17dix_74",oe="_wrongPosition_17dix_83";var l={App:F,board:J,input:Q,correct:V,wrong_position:X,incorrect:Z,keyboard_wrapper:q,row:z,firstRow:ee,otherRows:te,key:re,notPressed:ne,wrongPosition:oe};const R=b.exports.jsx,se=b.exports.jsxs,ce={[e.NOT_PRESSED]:l.notPressed,[e.INCORRECT]:l.incorrect,[e.WRONG_POSITION]:l.wrongPosition,[e.CORRECT]:l.correct},ie=({onClick:n,usedButtons:p})=>{const d=a=>{if(!(!p||!a))return ce[p[a]]};return R("div",{className:l.keyboard_wrapper,children:Y.map((a,o)=>R("div",{className:[l.row,o===0?l.firstRow:l.otherRows].join(" "),children:a.map(s=>R("button",{className:[l.key,d(s)].join(" "),onClick:n,children:O[s]},s))},o))})},ue=()=>({Q:e.NOT_PRESSED,W:e.NOT_PRESSED,E:e.NOT_PRESSED,R:e.NOT_PRESSED,T:e.NOT_PRESSED,Y:e.NOT_PRESSED,U:e.NOT_PRESSED,I:e.NOT_PRESSED,O:e.NOT_PRESSED,P:e.NOT_PRESSED,A:e.NOT_PRESSED,S:e.NOT_PRESSED,D:e.NOT_PRESSED,F:e.NOT_PRESSED,G:e.NOT_PRESSED,H:e.NOT_PRESSED,J:e.NOT_PRESSED,K:e.NOT_PRESSED,L:e.NOT_PRESSED,ENTER:e.NOT_PRESSED,Z:e.NOT_PRESSED,X:e.NOT_PRESSED,C:e.NOT_PRESSED,V:e.NOT_PRESSED,B:e.NOT_PRESSED,N:e.NOT_PRESSED,M:e.NOT_PRESSED,BACKSPACE:e.NOT_PRESSED}),ae="_App_16eyg_1",Ee="_board_16eyg_8",de="_input_16eyg_19",_e="_correct_16eyg_35",le="_wrong_position_16eyg_41",pe="_incorrect_16eyg_47";var N={App:ae,board:Ee,input:de,correct:_e,wrong_position:le,incorrect:pe};const i=6,A=6,I=Object.freeze(Array(i).fill(void 0)),h="ABOARD";function Se(){const[n,p]=u.exports.useState(),[d,a]=u.exports.useState([...I]),[o,s]=u.exports.useState(Array(i*A).fill(void 0)),[E,P]=u.exports.useState(0),[_,k]=u.exports.useState(0),[T,x]=u.exports.useState(!0),[L,v]=u.exports.useState(ue()),B=()=>{w()},j=()=>{C()},f=u.exports.useCallback(r=>{d[E%i]||(a(t=>(t[E%i]=r,[...t])),s(t=>(t[E]=r,[...t])),E%i<i-1&&P(t=>t+1))},[E,d]),K=r=>{if(!T)return;const t=r.currentTarget.innerText.toUpperCase();if(!!Object.values(O).includes(t))switch(t){case O.ENTER:B();return;case O.BACKSPACE:j();return;default:f(t)}},C=u.exports.useCallback(()=>{P(r=>{const t=d[r]&&r%i>0?r:r-1;return a(c=>{const S=t-_*i;return c[S]=void 0,[...c]}),s(c=>(c[t]=void 0,[...c])),t})},[_,d]),y=u.exports.useCallback(r=>{if(!n)return;n.children[r+i*_].classList.add(N.correct)},[n,_]),g=u.exports.useCallback(r=>{if(!n)return;n.children[r+i*_].classList.add(N.wrong_position)},[n,_]),m=u.exports.useCallback(r=>{if(!n)return;n.children[r+i*_].classList.add(N.incorrect)},[n,_]),W=()=>{x(!1)},U=()=>{x(!1)},G=()=>{a([...I]),k(r=>{const t=r+1;return P(t*i),t})},D=(r,t)=>{v(c=>(c[r]=t,c))},w=u.exports.useCallback(()=>{if(E%i<i-1)return;let t=0;for(const[c,S]of d.entries())!S||(S===h[c]?(y(c),D(S,e.CORRECT),t=t+1):h.includes(S)?(g(c),D(S,e.WRONG_POSITION)):(m(c),D(S,e.INCORRECT)));if(t===i&&W(),_===A-1){U();return}G()},[E,_,d,y,g,m]);return u.exports.useEffect(()=>{const r=t=>{if(!T)return;const c=t.key.toUpperCase();if(!!Object.keys(O).includes(c))switch(c){case"BACKSPACE":C();return;case"ENTER":w();return;default:f(c)}};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[w,f,T,C]),se("div",{className:N.App,children:[R("div",{className:N.board,ref:p,children:o.map((r,t)=>R("div",{className:N.input,children:r},t))}),R(ie,{usedButtons:L,onClick:K})]})}$.render(R(M.StrictMode,{children:R(Se,{})}),document.getElementById("root"));
