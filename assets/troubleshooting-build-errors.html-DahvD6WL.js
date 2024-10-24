import{_ as a,r as s,o as n,c as l,b as e,e as t,d as i,a as o}from"./app-Cu83vo63.js";const c="/assets/package-detail-build-pipelines-WQGS-O0n.png",d={},h=o('<h1 id="troubleshooting-build-errors" tabindex="-1"><a class="header-anchor" href="#troubleshooting-build-errors"><span>Troubleshooting Build Errors</span></a></h1><p>The build pipelines section on the package detail page reports the build status of each versioned Git tag, allowing you to check for any failed builds and their respective reasons. When a build fails, it leaves an error code and a message in the note field, providing valuable information for troubleshooting.</p><p><img src="'+c+'" alt="build-pipelines"></p><p>OpenUPM categorizes these errors into two types: retryable errors and non-retryable errors.</p><h2 id="retryable-errors" tabindex="-1"><a class="header-anchor" href="#retryable-errors"><span>Retryable Errors</span></a></h2>',5),p=e("strong",null,"Retryable errors",-1),u={href:"https://github.com/openupm/openupm/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},g=o('<ul><li><p><code>E0</code> unknown error: This error occurs when the build pipelines encounter an unknown error.</p></li><li><p><code>E400</code> bad request: This error occurs when the registry server cannot process a certain request due to a client error, such as an invalid request body. It usually indicates that the client is sending incorrect information to the server.</p></li><li><p><code>E401</code> unauthorized: This error arises when the registry server cannot process a particular request due to client authentication issues.</p></li><li><p><code>E403</code> forbidden: This error occurs when the registry server cannot process a specific request due to client permission errors.</p></li><li><p><code>E500</code> internal server error: This error indicates that the registry server has encountered an internal error, such as a database issue.</p></li><li><p><code>E502</code> bad gateway: This error is triggered when the reverse proxy server cannot connect to the registry server.</p></li><li><p><code>E504</code> gateway timeout: This error results from the reverse proxy server&#39;s inability to connect to the registry server due to a timeout.</p></li><li><p><code>E503</code> service unavailable: This error occurs when the reverse proxy tries to communicate with the registry server, but the registry server is not available.</p></li><li><p><code>E700</code> build timeout: This error is associated with the build process taking too long, leading to the build being considered failed. However, the build process may still be running, and the next retry might resolve the issue and mark it as successful.</p></li><li><p><code>E701</code> build cancelled: This error arises when the build process is canceled by the moderator.</p></li><li><p><code>E900</code> connection timeout: This error occurs when the build-pipelines failed to connect to resolve the registry server or the internet is not available.</p></li></ul><h2 id="non-retryable-errors" tabindex="-1"><a class="header-anchor" href="#non-retryable-errors"><span>Non-retryable Errors</span></a></h2><p><strong>Non-retryable errors</strong> are usually caused by specific issues that cannot be fixed automatically by a rebuild. In such cases, the package owner needs to address these errors manually.</p>',3),b=o("<li><p><code>E413</code> entity too large: This error occurs when the package size exceeds the maximum allowed size of 500MB.</p></li><li><p><code>E409</code> version conflict: This error arises when a package with the same version is already published. This usually means you created a new Git tag but forgot to update the version field in the <code>package.json</code> file. To resolve this issue, please update the version field in the <code>package.json</code> file and retag the existing Git tag to the new commit.</p></li><li><p><code>E800</code> package not found: This error occurs when the build-pipelines fail to locate a <code>package.json</code> with the given package name. One possible reason is that you added the <code>package.json</code> to the main branch but forgot to create a new Git tag for it. Another possible reason is that the <code>package.json</code> has a syntax error, causing the build pipelines to fail during parsing.</p></li><li><p><code>E803</code> package name invalid: This error occurs when the build-pipelines detect a package name that does not conform to the reverse domain name notation with at least three segments. For example, <code>com.org.my-package</code> is a valid package name, but <code>org.my-package</code> is not.</p></li><li><p><code>E804</code> invalid format of <code>package.json</code>: This error occurs when the build-pipelines detect a <code>package.json</code> with an invalid format. For example, the <code>package.json</code> is missing required fields such as <code>name</code> or <code>version</code>.</p></li><li><p><code>E805</code> remote branch not found: This error occurs when the build-pipelines fail to locate the remote branch of the given Git tag. One possible reason is that the remote branch has been deleted.</p></li>",6),m=e("code",null,"E806",-1),f=e("code",null,"package.json",-1),y=e("code",null,"version",-1),v={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,[e("p",null,[e("code",null,"E807"),t(" remote repository unavailable: This error occurs when the build-pipelines fail to connect to the remote repository. One possible reason is that the remote repository has been deleted or set to private.")])],-1),k=e("li",null,[e("p",null,[e("code",null,"E808"),t(" remote submodule unavailable: This error occurs when the build-pipelines fail to locate the remote submodule of the given Git tag. One possible reason is that the remote submodule is missing, deleted, or set to private.")])],-1),_=e("li",null,[e("p",null,[e("code",null,"E901"),t(" heap out of memory error: This error occurs when the build-pipelines fail to allocate sufficient memory for the build process. One possible reason is that the package is too large to process.")])],-1),T=o(`<h2 id="how-to-trigger-a-rebuild-for-a-failed-build" tabindex="-1"><a class="header-anchor" href="#how-to-trigger-a-rebuild-for-a-failed-build"><span>How to Trigger a Rebuild for a Failed Build</span></a></h2><p>So you&#39;ve encountered a failed build and successfully fixed the issue. How do you trigger a rebuild? The solution is to re-tag the existing Git tag.</p><p>When the build pipelines detect a failed Git tag that has been re-tagged, it will initiate a rebuild. It&#39;s important to note that the build pipelines will not rebuild an already successful release, even if they detect that the Git tag has been removed or re-tagged. This is because what has been released on the registry is immutable.</p><p>To re-tag an existing Git tag, you can follow these steps:</p><ol><li>Locate the Git tag on the GitHub website.</li><li>Delete the existing tag.</li><li>Create a new tag with the same name from the latest commit.</li></ol><p>Alternatively, you can use the following commands to re-tag a Git tag:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># List all remote tags</span>
<span class="token function">git</span> ls-remote <span class="token parameter variable">--tags</span>

<span class="token comment"># Delete the local tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.1

<span class="token comment"># Push the tag deletion to the remote</span>
<span class="token function">git</span> push origin :refs/tags/v1.0.1

<span class="token comment"># Tag the local branch again</span>
<span class="token function">git</span> tag v1.0.1

<span class="token comment"># Push the tag to the remote</span>
<span class="token function">git</span> push origin tag v1.0.1
</code></pre></div><p>Some repositories adhere to an immutable policy that disallows re-tagging. In such cases, you can trigger a new build by incrementing the package version. For instance, if the erroneous Git tag is <code>v1.0.1</code>, you should update the package version to <code>1.0.2</code> and then create a new Git tag, <code>v1.0.2</code>, to initiate a new build.</p>`,8);function E(x,G){const r=s("ExternalLinkIcon");return n(),l("div",null,[h,e("p",null,[p,t(" are typically caused by temporary issues, such as network problems, and the build pipelines will automatically attempt to retry them up to three times. If the build still fails after three retries, the error remains unresolved. Below is a list of common retryable errors with explanations. You may find these error codes less informative because they generally indicate issues not on your end. If you encounter persistent errors of this nature, please report them to us by creating a "),e("a",u,[t("GitHub issue"),i(r)]),t(".")]),g,e("ul",null,[b,e("li",null,[e("p",null,[m,t(" invalid version: This error occurs when the build-pipelines detect a "),f,t(" with an invalid version. For example, the "),y,t(" field is not a valid "),e("a",v,[t("semver"),i(r)]),t(" version.")])]),w,k,_]),T])}const j=a(d,[["render",E],["__file","troubleshooting-build-errors.html.vue"]]),O=JSON.parse('{"path":"/docs/troubleshooting-build-errors.html","title":"Troubleshooting Build Errors","lang":"en-US","frontmatter":{"description":"Troubleshooting Build Errors The build pipelines section on the package detail page reports the build status of each versioned Git tag, allowing you to check for any failed buil...","head":[["link",{"rel":"canonical","href":"https://openupm.com/docs/troubleshooting-build-errors.html"}],["meta",{"property":"og:url","content":"https://openupm.com/docs/troubleshooting-build-errors.html"}],["meta",{"property":"og:site_name","content":"OpenUPM"}],["meta",{"property":"og:title","content":"Troubleshooting Build Errors"}],["meta",{"property":"og:description","content":"Troubleshooting Build Errors The build pipelines section on the package detail page reports the build status of each versioned Git tag, allowing you to check for any failed buil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://openupm.com/images/openupm-twitter.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Troubleshooting Build Errors"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Troubleshooting Build Errors\\",\\"image\\":[\\"https://openupm.com/images/openupm-twitter.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Retryable Errors","slug":"retryable-errors","link":"#retryable-errors","children":[]},{"level":2,"title":"Non-retryable Errors","slug":"non-retryable-errors","link":"#non-retryable-errors","children":[]},{"level":2,"title":"How to Trigger a Rebuild for a Failed Build","slug":"how-to-trigger-a-rebuild-for-a-failed-build","link":"#how-to-trigger-a-rebuild-for-a-failed-build","children":[]}],"filePathRelative":"docs/troubleshooting-build-errors.md","autoDesc":true}');export{j as comp,O as data};
