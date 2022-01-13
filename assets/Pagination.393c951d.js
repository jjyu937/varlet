import{M as x}from"./index.e54c92ee.js";import{R as ee}from"./index.fef475e0.js";import{I as ae}from"./index.7ee6b4ff.js";import{C as ie}from"./index.b43e1c0c.js";import{I as le}from"./index.f39956d2.js";import{d as ne,r as g,b as I,y as K,e as N,f as te,o as m,c as b,w as j,a as z,G as L,p as k,i as y,U as O,t as p,F as Q,k as R,m as T,j as E,l as se,h as F}from"./vendor.9810b84e.js";import{t as u,i as H}from"./shared.61f3a471.js";import{p as oe}from"./en-US.87180fe8.js";import{_ as ue}from"./elevation.9adcc0d7.js";const re={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function},"onUpdate:current":{type:Function},"onUpdate:size":{type:Function}};const ve=ne({name:"VarPagination",components:{VarMenu:x,VarIcon:ae,VarCell:ie,VarInput:le},directives:{Ripple:ee},props:re,setup(e){const l=g(!1),w=g(""),V=g("1"),h=g(!1),P=g(!1),n=g(u(e.current)||1),v=g(u(e.size)||10),C=g([]),M=I(()=>Math.ceil(e.maxPagerCount/2)),s=I(()=>Math.ceil(u(e.total)/u(v.value))),i=I(()=>{const a=v.value*(n.value-1)+1,o=Math.min(v.value*n.value,u(e.total));return[a,o]}),f=I(()=>e.showTotal?e.showTotal(u(e.total),i.value):""),B=(a,o)=>H(a)?!1:o===1?h.value:P.value,A=(a,o)=>H(a)?"basic":o===1?"head":"tail",G=(a,o)=>{a===n.value||e.disabled||(H(a)?n.value=a:a==="prev"?n.value>1&&(n.value-=1):a==="next"?n.value<s.value&&(n.value+=1):a==="..."&&(o===1?n.value=Math.max(n.value-e.maxPagerCount,1):n.value=Math.min(n.value+e.maxPagerCount,s.value)))},W=()=>{e.disabled||(l.value=!0)},X=a=>{v.value=a,l.value=!1},q=a=>/^[1-9][0-9]*$/.test(a),Y=(a,o,$)=>{if($.target.blur(),q(o)){let c=u(o);c>s.value&&(c=s.value,V.value=`${c}`),c!==n.value&&(n.value=c)}a==="quick"&&(w.value=""),a==="simple"&&!q(o)&&(V.value=`${n.value}`)};return K([()=>e.current,()=>e.size],([a,o])=>{n.value=u(a)||1,v.value=u(o||10)}),K([n,v],([a,o],[$,c])=>{var D,J;if(a>s.value){n.value=s.value;return}let r=[];const{maxPagerCount:d,total:Z,onChange:S}=e,_=Math.ceil(u(Z)/u(c)),U=s.value-(d-M.value)-1;if(V.value=`${a}`,s.value-2>d){if($===void 0||s.value!==_)for(let t=2;t<d+2;t++)r.push(t);if(a<=d&&a<U){r=[];for(let t=1;t<d+1;t++)r.push(t+1);h.value=!0,P.value=!1}if(a>d&&a<U){r=[];for(let t=1;t<d+1;t++)r.push(a+t-M.value);h.value=a===2&&d===1,P.value=!1}if(a>=U){r=[];for(let t=1;t<d+1;t++)r.push(s.value-(d-t)-1);h.value=!1,P.value=!0}r=[1,"...",...r,"...",s.value]}else for(let t=1;t<=s.value;t++)r.push(t);C.value=r,$!==void 0&&(S==null||S(a,o)),(D=e["onUpdate:current"])==null||D.call(e,a),(J=e["onUpdate:size"])==null||J.call(e,o)},{immediate:!0}),{pack:oe,current:n,menuVisible:l,size:v,pageCount:s,pageList:C,inputValue:w,simpleValue:V,totalText:f,getMode:A,isHideEllipsis:B,clickItem:G,showMenu:W,clickSize:X,setPage:Y,toNumber:u}}}),de={class:"var-pagination"},pe=["item-mode","onClick"],me={key:4,class:"var-pagination__total"};function fe(e,l,w,V,h,P){const n=N("var-icon"),v=N("var-input"),C=N("var-cell"),M=N("var-menu"),s=te("ripple");return m(),b("ul",de,[j(z("li",{class:k(["var-pagination__item var-pagination__prev",{"var-pagination__item-disabled":e.current<=1||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[0]||(l[0]=i=>e.clickItem("prev"))},[L(e.$slots,"prev",{},()=>[y(n,{name:"chevron-left"})])],2),[[s,{disabled:e.current<=1||e.disabled}]]),e.simple?(m(),b("li",{key:0,class:k(["var-pagination__simple",{"var-pagination__item-disabled":e.disabled}])},[y(v,{modelValue:e.simpleValue,"onUpdate:modelValue":l[1]||(l[1]=i=>e.simpleValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[2]||(l[2]=i=>e.setPage("simple",e.simpleValue,i)),onKeydown:l[3]||(l[3]=O(i=>e.setPage("simple",e.simpleValue,i),["enter"]))},null,8,["modelValue","disabled"]),z("span",null,"/ "+p(e.pageCount),1)],2)):(m(!0),b(Q,{key:1},R(e.pageList,(i,f)=>j((m(),b("li",{key:e.toNumber(i)+f,"item-mode":e.getMode(i,f),class:k(["var-pagination__item var-elevation--2",{"var-pagination__item-active":i===e.current&&!e.disabled,"var-pagination__item-hide":e.isHideEllipsis(i,f),"var-pagination__item-disabled":e.disabled,"var-pagination__item-disabled-active":i===e.current&&e.disabled}]),onClick:B=>e.clickItem(i,f)},[T(p(i),1)],10,pe)),[[s,{disabled:e.disabled}]])),128)),j(z("li",{class:k(["var-pagination__item var-pagination__next",{"var-pagination__item-disabled":e.current>=e.pageCount||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[4]||(l[4]=i=>e.clickItem("next"))},[L(e.$slots,"next",{},()=>[y(n,{name:"chevron-right"})])],2),[[s,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(m(),b("li",{key:2,class:k(["var-pagination__size",{"var-pagination__item-disabled":e.disabled}])},[y(M,{show:e.menuVisible,"onUpdate:show":l[6]||(l[6]=i=>e.menuVisible=i),"offset-x":-4},{menu:E(()=>[(m(!0),b(Q,null,R(e.sizeOption,(i,f)=>j((m(),se(C,{class:k(["var-pagination__list",{"var-pagination__list-active":e.size===i}]),key:f,onClick:B=>e.clickSize(i)},{default:E(()=>[T(p(i)+p(e.pack.paginationItem)+" / "+p(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[s]])),128))]),default:E(()=>[z("div",{class:"var-pagination__size-open",style:{display:"flex"},onClick:l[5]||(l[5]=(...i)=>e.showMenu&&e.showMenu(...i))},[z("span",null,p(e.size)+p(e.pack.paginationItem)+" / "+p(e.pack.paginationPage),1),y(n,{class:"var-pagination__size-open-icon","var-pagination-cover":"",name:"menu-down"})])]),_:1},8,["show"])],2)):F("v-if",!0),e.showQuickJumper&&!e.simple?(m(),b("li",{key:3,class:k(["var-pagination__quickly",{"var-pagination__item-disabled":e.disabled}])},[T(p(e.pack.paginationJump)+" ",1),y(v,{modelValue:e.inputValue,"onUpdate:modelValue":l[7]||(l[7]=i=>e.inputValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[8]||(l[8]=i=>e.setPage("quick",e.inputValue,i)),onKeydown:l[9]||(l[9]=O(i=>e.setPage("quick",e.inputValue,i),["enter"]))},null,8,["modelValue","disabled"])],2)):F("v-if",!0),e.totalText?(m(),b("li",me,p(e.totalText),1)):F("v-if",!0)])}var Ce=ue(ve,[["render",fe]]);export{Ce as P};
