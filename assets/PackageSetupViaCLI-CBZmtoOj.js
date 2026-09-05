import{Ct as e,E as t,Ht as n,Lt as r,Pt as i,St as a,T as o,gt as s,ht as c,m as l,mt as u,n as d,nn as f,xt as p}from"./app-BkR7hyOa.js";import{t as m}from"./package-install-targets-0SLyvmt3.js";import{t as h}from"./es-CmwWMixR.js";var g={class:`theme-default-content custom`},_=[`innerHTML`],v=e({__name:`PackageSetupViaCLI`,props:{name:{type:String,default:``},version:{type:String,default:``}},setup(e){let{t:v}=l(),y=e,b=u(()=>`# ${d(v(`install-openupm-cli`))}
npm install -g openupm-cli

# ${d(v(`go-to-unity-project`))}
cd YOUR_UNITY_PROJECT_DIR

# ${d(v(`install-package`))}: ${y.name}
${m(y.name,y.version)}`),x=u(()=>`<pre><code class="hljs sh">${h.highlight(b.value,{language:`sh`}).value}</code></pre>`),S=u(()=>`modal-commandlinetool`),C=u(()=>({link:o(),text:v(`nodejs-link-text`)})),w=u(()=>({link:t(),text:`openupm-cli`}));return(e,t)=>{let o=r(`AutoLink`),l=r(`Modal`);return i(),s(l,{id:S.value},{title:n(()=>[p(f(e.$capitalize(e.$t(`install-via-command-line-interface`))),1)]),body:n(()=>[c(`p`,null,[p(f(e.$capitalize(e.$t(`prerequisites`)))+` : `,1),a(o,{item:C.value},null,8,[`item`]),p(` `+f(e.$t(`and`))+` `,1),a(o,{item:w.value},null,8,[`item`]),t[0]||=p(`. `,-1)]),c(`div`,g,[c(`div`,{class:`language-sh`,innerHTML:x.value},null,8,_)])]),_:1},8,[`id`])}}});export{v as default};