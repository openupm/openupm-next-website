import{g as C,l as s,M as D,D as L,N,P as i,Q as $,S as x,T as z,r as v,o as c,c as n,b as a,G as I,U,t as r,d as h,e as m,v as u,_ as b}from"./app-Cu83vo63.js";const B={class:"package-card"},V={class:"card-inner"},F={class:"card-content"},R={class:"card-image-wrapper"},T={class:"card-image"},E={class:"card-header"},G={class:"h5"},H={class:"card-body"},M={class:"card-footer"},j={class:"row1"},q={key:0,class:"chip chip-avatar"},O={key:1,class:"chip"},Q=a("i",{class:"fas fa-clock"},null,-1),J={class:"row2"},K={key:0,class:"chip"},W=a("i",{class:"fa fa-star"},null,-1),X={key:1,class:"chip"},Y=a("i",{class:"fas fa-download"},null,-1),Z=C({__name:"PackageCard",props:{metadata:{type:Object,required:!0},preferRawAvatarUrl:{type:Boolean,default:!1}},setup(t){const e=t,_=s(()=>e.preferRawAvatarUrl?D(e.metadata.owner,48):L(e.metadata.owner,48)),k=s(()=>N(new Date(e.metadata.time))),p=s(()=>`background: linear-gradient(37deg, ${f.value}, ${y.value});`),f=s(()=>{const o=i(e.metadata.name,0,180),l=i(e.metadata.name,70,95);return`hsl(${o}, ${l}%, 37%)`}),y=s(()=>{let o=i(e.metadata.name,150,255);o=(o+25)%255;const l=i(e.metadata.name,30,70);return`hsl(${o}, ${l}%, 17%)`}),g=s(()=>$(e.metadata)),w=s(()=>x(e.metadata)),A=s(()=>({text:g.value,link:z(e.metadata.name)})),P=s(()=>`Failed to load image for ${e.metadata.name}: `);return(o,l)=>{const d=v("LazyImage"),S=v("AutoLink");return c(),n("div",B,[a("div",V,[a("div",F,[a("div",R,[a("div",T,[t.metadata.image?(c(),I(d,{key:0,src:t.metadata.image,class:"img-responsive","error-message":P.value},null,8,["src","error-message"])):(c(),n("div",{key:1,class:"default-image",style:U(p.value)},[a("span",null,r(g.value),1)],4))])]),a("div",E,[a("div",G,[h(S,{item:A.value},null,8,["item"])])]),a("div",H,r(w.value),1),a("div",M,[a("div",j,[t.metadata.owner?(c(),n("span",q,[h(d,{src:_.value,alt:t.metadata.owner,class:"avatar avatar-sm"},null,8,["src","alt"]),m(" "+r(t.metadata.owner),1)])):u("",!0),t.metadata.time?(c(),n("span",O,[Q,m(r(k.value),1)])):u("",!0)]),a("div",J,[t.metadata.stars?(c(),n("span",K,[W,m(r(t.metadata.stars),1)])):u("",!0),t.metadata.dl30d?(c(),n("span",X,[Y,m(" "+r(t.metadata.dl30d)+"/month ",1)])):u("",!0)])])])])])}}}),ea=b(Z,[["__file","PackageCard.vue"]]);export{ea as default};