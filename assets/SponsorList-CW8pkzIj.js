import{g as d,l as n,r as o,o as s,c as t,F as v,x as y,q as g,G as c,U as h,v as f,_ as k}from"./app-Cu83vo63.js";const L={class:"sponsor-container"},x=["href"],S=d({__name:"SponsorList",props:{level:{type:String,required:!0},items:{type:Array,default:()=>[]}},setup(i){const r=i,l=n(()=>["sponsor-item","sponsor-"+r.level]),m=n(()=>r.items.filter(a=>a.expires?Date.parse(a.expires)>=new Date().getTime():!0));return(a,b)=>{const u=o("GitHubAvatar"),p=o("LazyImage");return s(),t("div",L,[(s(!0),t(v,null,y(m.value,(e,_)=>(s(),t("div",{key:_,class:g(l.value)},[e.githubUser?(s(),c(u,{key:0,profile:e},null,8,["profile"])):(s(),t("a",{key:1,href:e.url},[e.image?(s(),c(p,{key:0,src:e.image,alt:e.text,class:"img-responsive",style:h({minWidth:e.minWidth||"0"})},null,8,["src","alt","style"])):f("",!0)],8,x))],2))),128))])}}}),C=k(S,[["__scopeId","data-v-17e4abaf"],["__file","SponsorList.vue"]]);export{C as default};
