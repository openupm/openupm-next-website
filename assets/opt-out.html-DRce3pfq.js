import{_ as i,r as o,o as p,c as r,b as e,e as t,d as n,w as l}from"./app-Cu83vo63.js";const c={},h=e("h1",{id:"opt-out-from-openupm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opt-out-from-openupm"},[e("span",null,"Opt-out From OpenUPM")])],-1),u=e("p",null,"OpenUPM respects the package owner's decision to opt-out from it, even though an open-source license always grants the right to publish/distribute code.",-1),d=e("h2",{id:"using-blocked-scopes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-blocked-scopes"},[e("span",null,"Using Blocked Scopes")])],-1),g=e("code",null,"com.mycompany",-1),m={href:"https://github.com/openupm/openupm/tree/master/data/blocked-scopes.yml",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"using-the-private-field-of-the-package-json",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-the-private-field-of-the-package-json"},[e("span",null,"Using the Private Field of the package.json")])],-1),b=e("p",null,[t("To opt-out from OpenUPM, the package owner can also add "),e("code",null,'"private": true"'),t(" to the package.json.")],-1),f=e("h2",{id:"unpublishing-a-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unpublishing-a-package"},[e("span",null,"Unpublishing a Package")])],-1),_=e("h2",{id:"repository-unavailable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#repository-unavailable"},[e("span",null,"Repository Unavailable")])],-1),v=e("p",null,"If the repository is removed or turned private, OpenUPM won't be able to track further changes. However, the published content will remain available on the registry.",-1);function y(U,O){const a=o("ExternalLinkIcon"),s=o("RouteLink");return p(),r("div",null,[h,u,d,e("p",null,[t("To block an entire scope (e.g., "),g,t(") from OpenUPM, add the package scope or the package name to the "),e("a",m,[t("data/blocked-scopes.yml"),n(a)]),t(" file, and submit a pull request (PR) with the reason. This blocking behavior takes effect during the CI stage, which means it will break any existing packages under the newly added blocked scope. Therefore, please make sure to remove the blocked package metadata YAML file along with the PR.")]),k,b,f,e("p",null,[t("Please refer to "),n(s,{to:"/docs/modifying-upm-package.html#unpublishing-a-package"},{default:l(()=>[t("Unpublishing a Package")]),_:1}),t(" for instructions on unpublishing a package.")]),_,v])}const w=i(c,[["render",y],["__file","opt-out.html.vue"]]),M=JSON.parse(`{"path":"/docs/opt-out.html","title":"Opt-out From OpenUPM","lang":"en-US","frontmatter":{"description":"Opt-out From OpenUPM OpenUPM respects the package owner's decision to opt-out from it, even though an open-source license always grants the right to publish/distribute code. Usi...","head":[["link",{"rel":"canonical","href":"https://openupm.com/docs/opt-out.html"}],["meta",{"property":"og:url","content":"https://openupm.com/docs/opt-out.html"}],["meta",{"property":"og:site_name","content":"OpenUPM"}],["meta",{"property":"og:title","content":"Opt-out From OpenUPM"}],["meta",{"property":"og:description","content":"Opt-out From OpenUPM OpenUPM respects the package owner's decision to opt-out from it, even though an open-source license always grants the right to publish/distribute code. Usi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://openupm.com/images/openupm-twitter.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Opt-out From OpenUPM"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Opt-out From OpenUPM\\",\\"image\\":[\\"https://openupm.com/images/openupm-twitter.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Using Blocked Scopes","slug":"using-blocked-scopes","link":"#using-blocked-scopes","children":[]},{"level":2,"title":"Using the Private Field of the package.json","slug":"using-the-private-field-of-the-package-json","link":"#using-the-private-field-of-the-package-json","children":[]},{"level":2,"title":"Unpublishing a Package","slug":"unpublishing-a-package","link":"#unpublishing-a-package","children":[]},{"level":2,"title":"Repository Unavailable","slug":"repository-unavailable","link":"#repository-unavailable","children":[]}],"filePathRelative":"docs/opt-out.md","autoDesc":true}`);export{w as comp,M as data};