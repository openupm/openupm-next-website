import{$t as e,Ct as t,Ft as n,Pt as r,St as i,Z as a,ft as o,ht as s,mt as c,nn as l,qt as u,vt as d}from"./app-BkR7hyOa.js";import{t as f}from"./PackageReadmeView-DlxACVEq.js";var p={class:`readme-ad-placement-demo`},m={class:`demo-tabs`,"aria-label":`README ad placement fixtures`},h=[`onClick`],g={class:`demo-layout`},_={class:`demo-notes`},v={class:`demo-readme`},y=a(t({__name:`ReadmeAdPlacementDemo`,setup(t){let a=e=>`<p>Package README paragraph ${e} describes installation context, examples, compatibility notes, and practical usage details with enough body text to approximate real package documentation density.</p>`,y=(e,t,n)=>`<h2>${e}</h2>${Array.from({length:n},(e,n)=>a(t+n)).join(``)}`,b=[{title:`Balanced Sections`,summary:`Frequent headings with moderate body copy between sections.`,html:`<div>
      <h1>Balanced README</h1>
      ${y(`Install`,1,5)}
      ${y(`Quick Start`,6,7)}
      ${y(`Configuration`,13,8)}
      ${y(`Advanced Usage`,21,9)}
      ${y(`Troubleshooting`,30,5)}
    </div>`},{title:`Long Opening`,summary:`A long introduction before the first useful section heading.`,html:`<div>
      <h1>Long Opening README</h1>
      ${Array.from({length:15},(e,t)=>a(t+1)).join(``)}
      ${y(`Installation`,16,5)}
      ${y(`Examples`,21,7)}
      ${y(`Reference`,28,8)}
    </div>`},{title:`Sparse Headings`,summary:`Long content with only one late section boundary.`,html:`<div>
      <h1>Sparse README</h1>
      ${Array.from({length:22},(e,t)=>a(t+1)).join(``)}
      ${y(`Appendix`,23,4)}
    </div>`},{title:`No Sections`,summary:`Long content without section headings, showing the fallback placement.`,html:`<div>
      <h1>No Section README</h1>
      ${Array.from({length:26},(e,t)=>a(t+1)).join(``)}
    </div>`}],x=u(b[0].title),S=c(()=>b.find(e=>e.title===x.value)||b[0]);return(t,a)=>(r(),d(`div`,p,[s(`nav`,m,[(r(),d(o,null,n(b,t=>s(`button`,{key:t.title,class:e([`btn btn-link demo-tab`,{active:t.title===S.value.title}]),type:`button`,onClick:e=>x.value=t.title},l(t.title),11,h)),64))]),s(`section`,g,[s(`aside`,_,[a[0]||=s(`p`,{class:`demo-label`},`Fixture`,-1),s(`h2`,null,l(S.value.title),1),s(`p`,null,l(S.value.summary),1),a[1]||=s(`dl`,null,[s(`div`,null,[s(`dt`,null,`Package`),s(`dd`,null,`com.openupm.readme-ad-demo`)]),s(`div`,null,[s(`dt`,null,`Renderer`),s(`dd`,null,`PackageReadmeView`)])],-1)]),s(`article`,v,[i(f,{name:`com.openupm.readme-ad-demo`,"readme-html":S.value.html,"is-loading":!1},null,8,[`readme-html`])])])]))}}),[[`__scopeId`,`data-v-7cd82617`]]);export{y as default};