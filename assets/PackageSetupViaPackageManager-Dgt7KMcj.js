import{H as S}from"./index-CgQYsrDq.js";import{g as j,l as p,r as g,o as m,G as b,w as o,e as t,b as e,c as k,F as A,x as L,t as i,d as r,Y as y,_ as N}from"./app-Cu83vo63.js";const R=e("p",null,"Please follow the instrustions:",-1),V=e("li",null,[t("open "),e("strong",null,"Edit/Project Settings/Package Manager")],-1),w={class:"setup-scoped-registry"},B=e("li",null,[t("click "),e("kbd",null,"Save"),t(" or "),e("kbd",null,"Apply")],-1),C=e("li",null,[t("open "),e("strong",null,"Window/Package Manager")],-1),U=e("li",null,[t("click "),e("kbd",null,"+")],-1),H=e("li",null,[t(" select "),e("kbd",null,"Add package by name..."),t(" or "),e("kbd",null,"Add package from git URL...")],-1),T=e("li",null,[t("click "),e("kbd",null,"Add")],-1),I=e("div",{class:"divider text-center","data-content":"OR"},null,-1),O={class:"theme-default-content custom"},W=["innerHTML"],D="modal-manualinstallation",E=j({__name:"PackageSetupViaPackageManager",props:{name:{type:String,default:""},version:{type:String,default:""},scopes:{type:Array,default:()=>[]}},setup(l){const c=l,_=y().replace("https://",""),h=y(),v=p(()=>{const a=[{name:"Name",value:_},{name:"URL",value:h}],s=c.scopes||[];for(let n=0;n<s.length;n++){const d=s[n];a.push({name:n==0?"Scope(s)":"",value:d})}return a}),f=p(()=>{const a={scopedRegistries:[{name:_,url:h,scopes:c.scopes}],dependencies:{}};a.dependencies[c.name]=c.version;const s=JSON.stringify(a,null,4);return`<pre><code class="hljs json">${S.highlight(s,{language:"json"}).value}</code></pre>`}),x=p(()=>({link:"https://docs.unity3d.com/Manual/upm-manifestPrj.html",text:"Packages/manifest.json"}));return(a,s)=>{const n=g("CopyWrapper"),d=g("AutoLink"),P=g("Modal");return m(),b(P,{id:D},{title:o(()=>[t("Install via Package Manager")]),body:o(()=>[R,e("ul",null,[V,e("li",null,[t(" add a new Scoped Registry (or edit the existing OpenUPM entry) "),e("dl",w,[(m(!0),k(A,null,L(v.value,(u,M)=>(m(),k("div",{key:M},[e("dt",null,i(u.name),1),e("dd",null,[r(n,{"copy-text":u.value},{default:o(()=>[e("code",null,i(u.value),1)]),_:2},1032,["copy-text"])])]))),128))])]),B,C,U,H,e("li",null,[t(" paste "),r(n,{"copy-text":l.name},{default:o(()=>[e("code",null,i(l.name),1)]),_:1},8,["copy-text"]),t(" into name ")]),e("li",null,[t(" paste "),r(n,{"copy-text":l.version},{default:o(()=>[e("code",null,i(l.version),1)]),_:1},8,["copy-text"]),t(" into version ")]),T]),I,e("p",null,[t(" Alternatively, merge the snippet to "),r(d,{item:x.value},null,8,["item"])]),e("div",O,[e("div",{class:"language-json",innerHTML:f.value},null,8,W)])]),_:1})}}}),G=N(E,[["__file","PackageSetupViaPackageManager.vue"]]);export{G as default};
