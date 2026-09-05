import{$t as e,Ct as t,Ft as n,Pt as r,St as i,Z as a,_t as o,ft as s,ht as c,mt as l,nn as u,qt as d,vt as f}from"./app-BkR7hyOa.js";import{t as p}from"./PackageReadmeView-DlxACVEq.js";var m=[{kind:`Synthetic`,title:`Core Markdown, Emoji, And Inline Code`,packageName:`com.openupm.markdown-demo`,repoUrl:`https://github.com/openupm/openupm-next`,sourceUrl:``,markdown:`# Heading

Paragraph with **bold**, _emphasis_, ~~strikethrough~~, [relative link](guide.md), [anchor](#heading), GitHub emoji :rocket: :white_check_mark:, normal emoji 🚀 ✅, and \`inline code with <tag> & symbols\`.

![Relative image](../../.vuepress/public/images/openupm-icon-256.png)

- Item one
- Item two
  - Nested item

1. First
2. Second`,legacyHtml:`<div><h1>Heading</h1>
<p>Paragraph with <strong>bold</strong>, <em>emphasis</em>, <del>strikethrough</del>, <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-next/blob/main/apps/docs/docs/docs/dev/guide.md">relative link</a>, <a href="#heading">anchor</a>, GitHub emoji 🚀 ✅, normal emoji 🚀 ✅, and <code>inline code with &lt;tag&gt; &amp; symbols</code>.</p>
<p><img src="https://github.com/openupm/openupm-next/raw/main/apps/docs/docs/docs/dev/../../.vuepress/public/images/openupm-icon-256.png" alt="Relative image"></p>
<ul>
<li>Item one</li>
<li>Item two<ul>
<li>Nested item</li>
</ul>
</li>
</ul>
<ol>
<li>First</li>
<li>Second</li>
</ol>
</div>`,currentHtml:`<div><h1 id="heading">Heading</h1>
<p>Paragraph with <strong>bold</strong>, <em>emphasis</em>, <del>strikethrough</del>, <a href="https://github.com/openupm/openupm-next/blob/main/apps/docs/docs/docs/dev/guide.md" rel="noopener noreferrer">relative link</a>, <a href="#heading" rel="noopener noreferrer">anchor</a>, GitHub emoji 🚀 ✅, normal emoji 🚀 ✅, and <code>inline code with &#x3C;tag> &#x26; symbols</code>.</p>
<p><img src="https://github.com/openupm/openupm-next/raw/main/apps/docs/docs/docs/dev/../../.vuepress/public/images/openupm-icon-256.png" alt="Relative image"></p>
<ul>
<li>Item one</li>
<li>Item two
<ul>
<li>Nested item</li>
</ul>
</li>
</ul>
<ol>
<li>First</li>
<li>Second</li>
</ol></div>`},{kind:`Synthetic`,title:`GFM Table And Task List`,packageName:`com.openupm.markdown-demo`,repoUrl:`https://github.com/openupm/openupm-next`,sourceUrl:``,markdown:`| Feature | Status |
| --- | --- |
| Tables | Supported |
| Task lists | Supported |

- [x] Render current package README
- [ ] Review visual diff`,legacyHtml:`<div><table>
<thead>
<tr>
<th>Feature</th>
<th>Status</th>
</tr>
</thead>
<tbody><tr>
<td>Tables</td>
<td>Supported</td>
</tr>
<tr>
<td>Task lists</td>
<td>Supported</td>
</tr>
</tbody></table>
<ul>
<li><input checked="" disabled="" type="checkbox"> Render current package README</li>
<li><input disabled="" type="checkbox"> Review visual diff</li>
</ul>
</div>`,currentHtml:`<div>
















<table><thead><tr><th>Feature</th><th>Status</th></tr></thead><tbody><tr><td>Tables</td><td>Supported</td></tr><tr><td>Task lists</td><td>Supported</td></tr></tbody></table>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" checked disabled> Render current package README</li>
<li class="task-list-item"><input type="checkbox" disabled> Review visual diff</li>
</ul></div>`},{kind:`Synthetic`,title:`GFM Edge Cases`,packageName:`com.openupm.markdown-demo`,repoUrl:`https://github.com/openupm/openupm-next`,sourceUrl:``,markdown:`## Autolink Literals

https://openupm.com/packages/

www.openupm.com

hello@example.com

## Footnotes

OpenUPM package READMEs can include footnotes.[^install-note]

[^install-note]: Footnote text with \`inline code\` and a [relative link](footnote-guide.md).

## Table Alignment And Escapes

| Left | Center | Right | Escaped pipe | Inline code |
| :--- | :---: | ---: | --- | --- |
| alpha | beta | gamma | a \\| b | \`const x = 1;\` |
| one | two | three | c \\| d | \`openupm add com.example\` |

## Nested Task List

- [x] Parent task
  - [x] Nested done task
  - [ ] Nested pending task
- [ ] Parent pending task

## Repository-Aware References

These are intentionally included to show whether local rendering turns them into links:

- Mention: @openupm
- Issue: #6635
- Cross-repo issue: openupm/openupm#6635`,legacyHtml:`<div><h2>Autolink Literals</h2>
<p><a rel="noopener noreferrer" href="https://openupm.com/packages/">https://openupm.com/packages/</a></p>
<p><a rel="noopener noreferrer" href="http://www.openupm.com">www.openupm.com</a></p>
<p><a rel="noopener noreferrer" href="mailto:hello@example.com">hello@example.com</a></p>
<h2>Footnotes</h2>
<p>OpenUPM package READMEs can include footnotes.[^install-note]</p>
<p>[^install-note]: Footnote text with <code>inline code</code> and a <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-next/blob/main/apps/docs/docs/docs/dev/footnote-guide.md">relative link</a>.</p>
<h2>Table Alignment And Escapes</h2>
<table>
<thead>
<tr>
<th align="left">Left</th>
<th align="center">Center</th>
<th align="right">Right</th>
<th>Escaped pipe</th>
<th>Inline code</th>
</tr>
</thead>
<tbody><tr>
<td align="left">alpha</td>
<td align="center">beta</td>
<td align="right">gamma</td>
<td>a | b</td>
<td><code>const x = 1;</code></td>
</tr>
<tr>
<td align="left">one</td>
<td align="center">two</td>
<td align="right">three</td>
<td>c | d</td>
<td><code>openupm add com.example</code></td>
</tr>
</tbody></table>
<h2>Nested Task List</h2>
<ul>
<li><input checked="" disabled="" type="checkbox"> Parent task<ul>
<li><input checked="" disabled="" type="checkbox"> Nested done task</li>
<li><input disabled="" type="checkbox"> Nested pending task</li>
</ul>
</li>
<li><input disabled="" type="checkbox"> Parent pending task</li>
</ul>
<h2>Repository-Aware References</h2>
<p>These are intentionally included to show whether local rendering turns them into links:</p>
<ul>
<li>Mention: @openupm</li>
<li>Issue: #6635</li>
<li>Cross-repo issue: openupm/openupm#6635</li>
</ul>
</div>`,currentHtml:`<div><h2 id="autolink-literals">Autolink Literals</h2>
<p><a href="https://openupm.com/packages/" rel="noopener noreferrer">https://openupm.com/packages/</a></p>
<p><a href="http://www.openupm.com" rel="noopener noreferrer">www.openupm.com</a></p>
<p><a href="mailto:hello@example.com" rel="noopener noreferrer">hello@example.com</a></p>
<h2 id="footnotes">Footnotes</h2>
<p>OpenUPM package READMEs can include footnotes.<sup><a href="#user-content-fn-install-note" id="user-content-fnref-install-note" data-footnote-ref="" aria-describedby="user-content-footnote-label" rel="noopener noreferrer">1</a></sup></p>
<h2 id="table-alignment-and-escapes">Table Alignment And Escapes</h2>


























<table><thead><tr><th align="left">Left</th><th align="center">Center</th><th align="right">Right</th><th>Escaped pipe</th><th>Inline code</th></tr></thead><tbody><tr><td align="left">alpha</td><td align="center">beta</td><td align="right">gamma</td><td>a | b</td><td><code>const x = 1;</code></td></tr><tr><td align="left">one</td><td align="center">two</td><td align="right">three</td><td>c | d</td><td><code>openupm add com.example</code></td></tr></tbody></table>
<h2 id="nested-task-list">Nested Task List</h2>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" checked disabled> Parent task
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" checked disabled> Nested done task</li>
<li class="task-list-item"><input type="checkbox" disabled> Nested pending task</li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" disabled> Parent pending task</li>
</ul>
<h2 id="repository-aware-references">Repository-Aware References</h2>
<p>These are intentionally included to show whether local rendering turns them into links:</p>
<ul>
<li>Mention: <a href="https://github.com/openupm" rel="noopener noreferrer">@openupm</a></li>
<li>Issue: <a href="https://github.com/openupm/openupm-next/issues/6635" rel="noopener noreferrer">#6635</a></li>
<li>Cross-repo issue: <a href="https://github.com/openupm/openupm/issues/6635" rel="noopener noreferrer">openupm/openupm#6635</a></li>
</ul>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="user-content-footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-install-note">
<p>Footnote text with <code>inline code</code> and a <a href="https://github.com/openupm/openupm-next/blob/main/apps/docs/docs/docs/dev/footnote-guide.md" rel="noopener noreferrer">relative link</a>. <a href="#user-content-fnref-install-note" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref" rel="noopener noreferrer">↩</a></p>
</li>
</ol>
</section></div>`},{kind:`Synthetic`,title:`Code Blocks Across Common README Languages`,packageName:`com.openupm.markdown-demo`,repoUrl:`https://github.com/openupm/openupm-next`,sourceUrl:``,markdown:'```html\n<div class="package-card">OpenUPM</div>\n```\n\n```csharp\npublic sealed class Example : MonoBehaviour { }\n```\n\n```bash\nnpm run build -- --filter=@openupm/jobs\n```\n\n```sh\nopenupm add com.example.package\n```\n\n```markdown\n> [!NOTE]\n> Alert shown inside a markdown fence.\n```\n\n```js\nconst answer = 42;\nconsole.log(answer);\n```\n\n```python\nprint("openupm")\n```\n\n```java\npublic class Example { public static void main(String[] args) {} }\n```\n\n```\nplain <unsafe> text\n```',legacyHtml:`<div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;package-card&quot;</span>&gt;</span>OpenUPM<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre><pre><code class="hljs csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">sealed</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Example</span> : <span class="hljs-title">MonoBehaviour</span> { }</code></pre><pre><code class="hljs bash">npm run build -- --filter=@openupm/jobs</code></pre><pre><code class="hljs sh">openupm add com.example.package</code></pre><pre><code class="hljs markdown"><span class="hljs-quote">&gt; [!NOTE]</span>
<span class="hljs-quote">&gt; Alert shown inside a markdown fence.</span></code></pre><pre><code class="hljs js"><span class="hljs-keyword">const</span> answer = <span class="hljs-number">42</span>;
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(answer);</code></pre><pre><code class="hljs python"><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;openupm&quot;</span>)</code></pre><pre><code class="hljs java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Example</span> { <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {} }</code></pre><pre><code class="hljs ">plain &lt;unsafe&gt; text</code></pre></div>`,currentHtml:`<div><pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"package-card"</span>></span>OpenUPM<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
</code></pre>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">sealed</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Example</span> : <span class="hljs-title">MonoBehaviour</span> { }
</code></pre>
<pre><code class="hljs language-bash">npm run build -- --filter=@openupm/jobs
</code></pre>
<pre><code class="hljs language-sh">openupm add com.example.package
</code></pre>
<pre><code class="hljs language-markdown"><span class="hljs-quote">> [!NOTE]</span>
<span class="hljs-quote">> Alert shown inside a markdown fence.</span>
</code></pre>
<pre><code class="hljs language-js"><span class="hljs-keyword">const</span> answer = <span class="hljs-number">42</span>;
<span class="hljs-variable">console</span>.<span class="hljs-title">log</span>(answer);
</code></pre>
<pre><code class="hljs language-python"><span class="hljs-built_in">print</span>(<span class="hljs-string">"openupm"</span>)
</code></pre>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Example</span> { <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span><span class="hljs-params">(String[] args)</span> {} }
</code></pre>
<pre><code>plain &#x3C;unsafe> text
</code></pre></div>`},{kind:`Synthetic`,title:`Quotes And GitHub Alerts`,packageName:`com.openupm.markdown-demo`,repoUrl:`https://github.com/openupm/openupm-next`,sourceUrl:``,markdown:`> Ordinary quote
> with a second line.

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.`,legacyHtml:`<div><blockquote>
<p>Ordinary quote
with a second line.</p>
</blockquote>
<blockquote>
<p>[!NOTE]
Useful information that users should know, even when skimming content.</p>
</blockquote>
<blockquote>
<p>[!TIP]
Helpful advice for doing things better or more easily.</p>
</blockquote>
<blockquote>
<p>[!IMPORTANT]
Key information users need to know to achieve their goal.</p>
</blockquote>
<blockquote>
<p>[!WARNING]
Urgent info that needs immediate user attention to avoid problems.</p>
</blockquote>
<blockquote>
<p>[!CAUTION]
Advises about risks or negative outcomes of certain actions.</p>
</blockquote>
</div>`,currentHtml:`<div><blockquote>
<p>Ordinary quote
with a second line.</p>
</blockquote>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p>Useful information that users should know, even when skimming content.</p>
</div>
<div class="markdown-alert markdown-alert-tip" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>TIP</p>
<p>Helpful advice for doing things better or more easily.</p>
</div>
<div class="markdown-alert markdown-alert-important" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>IMPORTANT</p>
<p>Key information users need to know to achieve their goal.</p>
</div>
<div class="markdown-alert markdown-alert-warning" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>WARNING</p>
<p>Urgent info that needs immediate user attention to avoid problems.</p>
</div>
<div class="markdown-alert markdown-alert-caution" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>CAUTION</p>
<p>Advises about risks or negative outcomes of certain actions.</p>
</div></div>`},{kind:`Synthetic`,title:`Raw HTML, URL Rewriting, And Safety`,packageName:`com.openupm.markdown-demo`,repoUrl:`https://github.com/openupm/openupm-next`,sourceUrl:``,markdown:`<p align="center">
  <a href="docs/setup.md"><img src="images/badge.png" alt="Badge"></a>
</p>

<details>
<summary>Install details</summary>

See <a href="/absolute-guide.md">absolute guide</a>.
</details>

[Unsafe link](javascript:alert(1))

[Unity Hub](unityhub://2021.1.19f1/5f5eb8bbdc25)

[Asset Store](com.unity3d.kharma:content/163802)

<script>alert('xss')<\/script>

<img>`,legacyHtml:`<div><p align="center">
  <a href="docs/setup.md"><img src="https://github.com/openupm/openupm-next/raw/main/apps/docs/docs/docs/dev/images/badge.png" alt="Badge"></a>
</p><details>
<summary>Install details</summary><p>See <a href="/absolute-guide.md">absolute guide</a>.</p>
</details><p><a rel="noopener noreferrer" href="javascript:alert(1)">Unsafe link</a></p>
<p><a rel="noopener noreferrer" href="unityhub://2021.1.19f1/5f5eb8bbdc25">Unity Hub</a></p>
<p><a rel="noopener noreferrer" href="com.unity3d.kharma:content/163802">Asset Store</a></p>
<script>alert('xss')<\/script><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="></div>`,currentHtml:`<div><p align="center">
  <a href="https://github.com/openupm/openupm-next/blob/main/apps/docs/docs/docs/dev/docs/setup.md" rel="noopener noreferrer"><img src="https://github.com/openupm/openupm-next/raw/main/apps/docs/docs/docs/dev/images/badge.png" alt="Badge"></a>
</p>
<details>
<summary>Install details</summary>
<p>See <a href="https://github.com/openupm/openupm-next/blob/main/absolute-guide.md" rel="noopener noreferrer">absolute guide</a>.</p>
</details>
<p><a>Unsafe link</a></p>
<p><a href="unityhub://2021.1.19f1/5f5eb8bbdc25" rel="noopener noreferrer">Unity Hub</a></p>
<p><a href="com.unity3d.kharma:content/163802" rel="noopener noreferrer">Asset Store</a></p>

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="></div>`},{kind:`Live README`,title:`OpenUPM CLI README`,packageName:`com.openupm.cli-docs`,repoUrl:`https://github.com/openupm/openupm-cli`,sourceUrl:`https://raw.githubusercontent.com/openupm/openupm-cli/master/README.md`,fetched:!0,markdown:`# openupm-cli

![npm](https://img.shields.io/npm/v/openupm-cli) ![NPM](https://img.shields.io/npm/l/openupm-cli) ![npm](https://img.shields.io/npm/dm/openupm-cli)

The command-line tool to maintain the Unity manifest file for 3rd-party upm registries, offering a similar but lighter experience like *npm* or *yarn* for Node.js.

The tool is designed to work with [the OpenUPM registry](https://openupm.com), but can also work with any upm registries, including the official Unity registry.

- [openupm-cli](#openupm-cli)
  - [How it works](#how-it-works)
  - [Installation](#installation)
    - [Windows platform troubleshooting](#windows-platform-troubleshooting)
    - [Cannot find module 'node:net'](#cannot-find-module-nodenet)
  - [Commands](#commands)
    - [Add packages](#add-packages)
    - [Remove packages](#remove-packages)
    - [Search packages](#search-packages)
    - [View package information](#view-package-information)
    - [View package dependencies](#view-package-dependencies)
    - [Global command options](#global-command-options)
  - [General help pages](#general-help-pages)
  - [Contributors](#contributors)

## How it works

The command-line tool installs the 3rd-party registry as a scoped registry and maintains the \`Packages/manifest.json\` file when adding/removing packages. If the manifest file is modified, the *Unity Package Manager* will detect the changes and try to resolve the package dependencies.

> Notice: the command-line tool does not directly install/uninstall package tarballs, at least for now.

## Installation

- Requires [nodejs 18 or above](https://nodejs.org/en/download/).
- Install via npm:

  \`\`\`sh
  npm install -g openupm-cli
  \`\`\`

- Or install via [yarn](https://yarnpkg.com/):

  \`\`\`sh
  yarn global add openupm-cli
  \`\`\`

### Windows platform troubleshooting

If npm is not available in your CMD/PowerShell/Git-Bash, please configure your [environment variables](https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10).

\`\`\`
# for npm
c:\\Program Files\\nodejs

# for npm global bin
C:\\Users\\{yourName}\\AppData\\Roaming\\npm
\`\`\`

### Cannot find module 'node:net'

\`\`\`sh
internal/modules/cjs/loader.js:818
  throw err;
  ^

Error: Cannot find module 'node:net'
\`\`\`

Please install [Node.js 18 or above](https://nodejs.org/en/download/).

## Commands

### Add packages

Use \`openupm add\` to add one or more dependencies to your project.

\`\`\`sh
openupm add com.my.package@1.2.3
\`\`\`

Checkout [the commands doc page](./docs/cmd-add.md) for more information.

### Remove packages

Use \`openupm remove\` to remove one or more dependencies from your project.

\`\`\`sh
openupm remove com.my.package
\`\`\`

Checkout [the commands doc page](./docs/cmd-remove.md) for more information.

### Search packages

Use \`openupm search\` to search for remote packages by name.

\`\`\`sh
openupm search something
\`\`\`

Checkout [the commands doc page](./docs/cmd-search.md) for more information.

### View package information

Use \`openupm view\` to view detailed information about a remote package.

\`\`\`sh
openupm view com.my.package
\`\`\`

Checkout [the commands doc page](./docs/cmd-view.md) for more information.

### View package dependencies

Use \`openupm deps\` to print package dependencies.

\`\`\`sh
openupm deps com.my.package
\`\`\`

Checkout [the commands doc page](./docs/cmd-deps.md) for more information.

### List installed packages

Use \`openupm ls\` to print the names and versions of installed packages.

\`\`\`sh
openupm ls
\`\`\`

Checkout [the commands doc page](./docs/cmd-ls.md) for more information.

### Global command options

There are also some global options that work for every command. You can read about them [here](./docs/global-opts.md).

## General help pages

We also have a few guide pages on specific topics if you need help:

- [Working with 3rd party registries](./docs/help-registry.md)
- [Using Windows system-user authentication](./docs/help-system-user.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://littlebigfun.com"><img src="https://avatars.githubusercontent.com/u/125390?v=4?s=100" width="100px;" alt="Favo Yang"/><br /><sub><b>Favo Yang</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=favoyang" title="Code">💻</a> <a href="#maintenance-favoyang" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://comradevanti.itch.io"><img src="https://avatars.githubusercontent.com/u/31240807?v=4?s=100" width="100px;" alt="Ramon Brullo"/><br /><sub><b>Ramon Brullo</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=ComradeVanti" title="Code">💻</a> <a href="#maintenance-ComradeVanti" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nowsprinting.github.io/"><img src="https://avatars.githubusercontent.com/u/117617?v=4?s=100" width="100px;" alt="Koji Hasegawa"/><br /><sub><b>Koji Hasegawa</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=nowsprinting" title="Code">💻</a> <a href="https://github.com/openupm/openupm-cli/issues?q=author%3Anowsprinting" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.xxwhite.com"><img src="https://avatars.githubusercontent.com/u/26868745?v=4?s=100" width="100px;" alt="MonoLogueChi"/><br /><sub><b>MonoLogueChi</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3AMonoLogueChi" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/from2001vr"><img src="https://avatars.githubusercontent.com/u/387880?v=4?s=100" width="100px;" alt="Masahiro Yamaguchi"/><br /><sub><b>Masahiro Yamaguchi</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Afrom2001" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/maxhimmel"><img src="https://avatars.githubusercontent.com/u/20761855?v=4?s=100" width="100px;" alt="Max Himmel"/><br /><sub><b>Max Himmel</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Amaxhimmel" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zulu-Inuoe"><img src="https://avatars.githubusercontent.com/u/1526310?v=4?s=100" width="100px;" alt="Wilfredo Velázquez-Rodríguez"/><br /><sub><b>Wilfredo Velázquez-Rodríguez</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3AZulu-Inuoe" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TGChrisRArendt"><img src="https://avatars.githubusercontent.com/u/47191729?v=4?s=100" width="100px;" alt="Christopher Arendt"/><br /><sub><b>Christopher Arendt</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ATGChrisRArendt" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Blackclaws"><img src="https://avatars.githubusercontent.com/u/5792929?v=4?s=100" width="100px;" alt="Felix Winterhalter"/><br /><sub><b>Felix Winterhalter</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ABlackclaws" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alelievr"><img src="https://avatars.githubusercontent.com/u/6877923?v=4?s=100" width="100px;" alt="Antoine Lelievre"/><br /><sub><b>Antoine Lelievre</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Aalelievr" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tomorrow.comes.today"><img src="https://avatars.githubusercontent.com/u/6391063?v=4?s=100" width="100px;" alt="Tyler Temp"/><br /><sub><b>Tyler Temp</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ATylerTemp" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://marcbernardtools.com/"><img src="https://avatars.githubusercontent.com/u/59966492?v=4?s=100" width="100px;" alt="Marc Bernard"/><br /><sub><b>Marc Bernard</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=mbtools" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/StigOlavsen"><img src="https://avatars.githubusercontent.com/u/7004085?v=4?s=100" width="100px;" alt="Stig Olavsen"/><br /><sub><b>Stig Olavsen</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=StigOlavsen" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
`,legacyHtml:`<div><h1>openupm-cli</h1>
<p><img src="https://img.shields.io/npm/v/openupm-cli" alt="npm"> <img src="https://img.shields.io/npm/l/openupm-cli" alt="NPM"> <img src="https://img.shields.io/npm/dm/openupm-cli" alt="npm"></p>
<p>The command-line tool to maintain the Unity manifest file for 3rd-party upm registries, offering a similar but lighter experience like <em>npm</em> or <em>yarn</em> for Node.js.</p>
<p>The tool is designed to work with <a rel="noopener noreferrer" href="https://openupm.com">the OpenUPM registry</a>, but can also work with any upm registries, including the official Unity registry.</p>
<ul>
<li><a href="#openupm-cli">openupm-cli</a><ul>
<li><a href="#how-it-works">How it works</a></li>
<li><a href="#installation">Installation</a><ul>
<li><a href="#windows-platform-troubleshooting">Windows platform troubleshooting</a></li>
<li><a href="#cannot-find-module-nodenet">Cannot find module &#39;node:net&#39;</a></li>
</ul>
</li>
<li><a href="#commands">Commands</a><ul>
<li><a href="#add-packages">Add packages</a></li>
<li><a href="#remove-packages">Remove packages</a></li>
<li><a href="#search-packages">Search packages</a></li>
<li><a href="#view-package-information">View package information</a></li>
<li><a href="#view-package-dependencies">View package dependencies</a></li>
<li><a href="#global-command-options">Global command options</a></li>
</ul>
</li>
<li><a href="#general-help-pages">General help pages</a></li>
<li><a href="#contributors">Contributors</a></li>
</ul>
</li>
</ul>
<h2>How it works</h2>
<p>The command-line tool installs the 3rd-party registry as a scoped registry and maintains the <code>Packages/manifest.json</code> file when adding/removing packages. If the manifest file is modified, the <em>Unity Package Manager</em> will detect the changes and try to resolve the package dependencies.</p>
<blockquote>
<p>Notice: the command-line tool does not directly install/uninstall package tarballs, at least for now.</p>
</blockquote>
<h2>Installation</h2>
<ul>
<li><p>Requires <a rel="noopener noreferrer" href="https://nodejs.org/en/download/">nodejs 18 or above</a>.</p>
</li>
<li><p>Install via npm:</p>
<pre><code class="hljs sh">npm install -g openupm-cli</code></pre></li>
<li><p>Or install via <a rel="noopener noreferrer" href="https://yarnpkg.com/">yarn</a>:</p>
<pre><code class="hljs sh">yarn global add openupm-cli</code></pre></li>
</ul>
<h3>Windows platform troubleshooting</h3>
<p>If npm is not available in your CMD/PowerShell/Git-Bash, please configure your <a rel="noopener noreferrer" href="https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10">environment variables</a>.</p>
<pre><code class="hljs "># for npm
c:\\Program Files\\nodejs

# for npm global bin
C:\\Users\\{yourName}\\AppData\\Roaming\\npm</code></pre><h3>Cannot find module &#39;node:net&#39;</h3>
<pre><code class="hljs sh">internal/modules/cjs/loader.js:818
  throw err;
  ^

Error: Cannot find module <span class="hljs-string">&#x27;node:net&#x27;</span></code></pre><p>Please install <a rel="noopener noreferrer" href="https://nodejs.org/en/download/">Node.js 18 or above</a>.</p>
<h2>Commands</h2>
<h3>Add packages</h3>
<p>Use <code>openupm add</code> to add one or more dependencies to your project.</p>
<pre><code class="hljs sh">openupm add com.my.package@1.2.3</code></pre><p>Checkout <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-add.md">the commands doc page</a> for more information.</p>
<h3>Remove packages</h3>
<p>Use <code>openupm remove</code> to remove one or more dependencies from your project.</p>
<pre><code class="hljs sh">openupm remove com.my.package</code></pre><p>Checkout <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-remove.md">the commands doc page</a> for more information.</p>
<h3>Search packages</h3>
<p>Use <code>openupm search</code> to search for remote packages by name.</p>
<pre><code class="hljs sh">openupm search something</code></pre><p>Checkout <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-search.md">the commands doc page</a> for more information.</p>
<h3>View package information</h3>
<p>Use <code>openupm view</code> to view detailed information about a remote package.</p>
<pre><code class="hljs sh">openupm view com.my.package</code></pre><p>Checkout <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-view.md">the commands doc page</a> for more information.</p>
<h3>View package dependencies</h3>
<p>Use <code>openupm deps</code> to print package dependencies.</p>
<pre><code class="hljs sh">openupm deps com.my.package</code></pre><p>Checkout <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-deps.md">the commands doc page</a> for more information.</p>
<h3>List installed packages</h3>
<p>Use <code>openupm ls</code> to print the names and versions of installed packages.</p>
<pre><code class="hljs sh">openupm <span class="hljs-built_in">ls</span></code></pre><p>Checkout <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-ls.md">the commands doc page</a> for more information.</p>
<h3>Global command options</h3>
<p>There are also some global options that work for every command. You can read about them <a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/global-opts.md">here</a>.</p>
<h2>General help pages</h2>
<p>We also have a few guide pages on specific topics if you need help:</p>
<ul>
<li><a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/help-registry.md">Working with 3rd party registries</a></li>
<li><a rel="noopener noreferrer" href="https://github.com/openupm/openupm-cli/blob/master/./docs/help-system-user.md">Using Windows system-user authentication</a></li>
</ul>
<h2>Contributors</h2>
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://littlebigfun.com"><img src="https://avatars.githubusercontent.com/u/125390?v=4?s=100" width="100px;" alt="Favo Yang"/><br /><sub><b>Favo Yang</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=favoyang" title="Code">💻</a> <a href="#maintenance-favoyang" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://comradevanti.itch.io"><img src="https://avatars.githubusercontent.com/u/31240807?v=4?s=100" width="100px;" alt="Ramon Brullo"/><br /><sub><b>Ramon Brullo</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=ComradeVanti" title="Code">💻</a> <a href="#maintenance-ComradeVanti" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nowsprinting.github.io/"><img src="https://avatars.githubusercontent.com/u/117617?v=4?s=100" width="100px;" alt="Koji Hasegawa"/><br /><sub><b>Koji Hasegawa</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=nowsprinting" title="Code">💻</a> <a href="https://github.com/openupm/openupm-cli/issues?q=author%3Anowsprinting" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.xxwhite.com"><img src="https://avatars.githubusercontent.com/u/26868745?v=4?s=100" width="100px;" alt="MonoLogueChi"/><br /><sub><b>MonoLogueChi</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3AMonoLogueChi" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/from2001vr"><img src="https://avatars.githubusercontent.com/u/387880?v=4?s=100" width="100px;" alt="Masahiro Yamaguchi"/><br /><sub><b>Masahiro Yamaguchi</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Afrom2001" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/maxhimmel"><img src="https://avatars.githubusercontent.com/u/20761855?v=4?s=100" width="100px;" alt="Max Himmel"/><br /><sub><b>Max Himmel</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Amaxhimmel" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zulu-Inuoe"><img src="https://avatars.githubusercontent.com/u/1526310?v=4?s=100" width="100px;" alt="Wilfredo Velázquez-Rodríguez"/><br /><sub><b>Wilfredo Velázquez-Rodríguez</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3AZulu-Inuoe" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TGChrisRArendt"><img src="https://avatars.githubusercontent.com/u/47191729?v=4?s=100" width="100px;" alt="Christopher Arendt"/><br /><sub><b>Christopher Arendt</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ATGChrisRArendt" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Blackclaws"><img src="https://avatars.githubusercontent.com/u/5792929?v=4?s=100" width="100px;" alt="Felix Winterhalter"/><br /><sub><b>Felix Winterhalter</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ABlackclaws" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alelievr"><img src="https://avatars.githubusercontent.com/u/6877923?v=4?s=100" width="100px;" alt="Antoine Lelievre"/><br /><sub><b>Antoine Lelievre</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Aalelievr" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tomorrow.comes.today"><img src="https://avatars.githubusercontent.com/u/6391063?v=4?s=100" width="100px;" alt="Tyler Temp"/><br /><sub><b>Tyler Temp</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ATylerTemp" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://marcbernardtools.com/"><img src="https://avatars.githubusercontent.com/u/59966492?v=4?s=100" width="100px;" alt="Marc Bernard"/><br /><sub><b>Marc Bernard</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=mbtools" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/StigOlavsen"><img src="https://avatars.githubusercontent.com/u/7004085?v=4?s=100" width="100px;" alt="Stig Olavsen"/><br /><sub><b>Stig Olavsen</b></sub></a><br /><a href="https://github.com/openupm/openupm-cli/commits?author=StigOlavsen" title="Code">💻</a></td>
    </tr>
  </tbody>
</table><!-- markdownlint-restore -->
<!-- prettier-ignore-end --><!-- ALL-CONTRIBUTORS-LIST:END -->
</div>`,currentHtml:`<div><h1 id="openupm-cli">openupm-cli</h1>
<p><img src="https://img.shields.io/npm/v/openupm-cli" alt="npm"> <img src="https://img.shields.io/npm/l/openupm-cli" alt="NPM"> <img src="https://img.shields.io/npm/dm/openupm-cli" alt="npm"></p>
<p>The command-line tool to maintain the Unity manifest file for 3rd-party upm registries, offering a similar but lighter experience like <em>npm</em> or <em>yarn</em> for Node.js.</p>
<p>The tool is designed to work with <a href="https://openupm.com" rel="noopener noreferrer">the OpenUPM registry</a>, but can also work with any upm registries, including the official Unity registry.</p>
<ul>
<li><a href="#openupm-cli" rel="noopener noreferrer">openupm-cli</a>
<ul>
<li><a href="#how-it-works" rel="noopener noreferrer">How it works</a></li>
<li><a href="#installation" rel="noopener noreferrer">Installation</a>
<ul>
<li><a href="#windows-platform-troubleshooting" rel="noopener noreferrer">Windows platform troubleshooting</a></li>
<li><a href="#cannot-find-module-nodenet" rel="noopener noreferrer">Cannot find module 'node:net'</a></li>
</ul>
</li>
<li><a href="#commands" rel="noopener noreferrer">Commands</a>
<ul>
<li><a href="#add-packages" rel="noopener noreferrer">Add packages</a></li>
<li><a href="#remove-packages" rel="noopener noreferrer">Remove packages</a></li>
<li><a href="#search-packages" rel="noopener noreferrer">Search packages</a></li>
<li><a href="#view-package-information" rel="noopener noreferrer">View package information</a></li>
<li><a href="#view-package-dependencies" rel="noopener noreferrer">View package dependencies</a></li>
<li><a href="#global-command-options" rel="noopener noreferrer">Global command options</a></li>
</ul>
</li>
<li><a href="#general-help-pages" rel="noopener noreferrer">General help pages</a></li>
<li><a href="#contributors" rel="noopener noreferrer">Contributors</a></li>
</ul>
</li>
</ul>
<h2 id="how-it-works">How it works</h2>
<p>The command-line tool installs the 3rd-party registry as a scoped registry and maintains the <code>Packages/manifest.json</code> file when adding/removing packages. If the manifest file is modified, the <em>Unity Package Manager</em> will detect the changes and try to resolve the package dependencies.</p>
<blockquote>
<p>Notice: the command-line tool does not directly install/uninstall package tarballs, at least for now.</p>
</blockquote>
<h2 id="installation">Installation</h2>
<ul>
<li>
<p>Requires <a href="https://nodejs.org/en/download/" rel="noopener noreferrer">nodejs 18 or above</a>.</p>
</li>
<li>
<p>Install via npm:</p>
<pre><code class="hljs language-sh">npm install -g openupm-cli
</code></pre>
</li>
<li>
<p>Or install via <a href="https://yarnpkg.com/" rel="noopener noreferrer">yarn</a>:</p>
<pre><code class="hljs language-sh">yarn global add openupm-cli
</code></pre>
</li>
</ul>
<h3 id="windows-platform-troubleshooting">Windows platform troubleshooting</h3>
<p>If npm is not available in your CMD/PowerShell/Git-Bash, please configure your <a href="https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10" rel="noopener noreferrer">environment variables</a>.</p>
<pre><code># for npm
c:\\Program Files\\nodejs

# for npm global bin
C:\\Users\\{yourName}\\AppData\\Roaming\\npm
</code></pre>
<h3 id="cannot-find-module-nodenet">Cannot find module 'node:net'</h3>
<pre><code class="hljs language-sh">internal/modules/cjs/loader.js:818
  throw err;
  ^

Error: Cannot find module <span class="hljs-string">'node:net'</span>
</code></pre>
<p>Please install <a href="https://nodejs.org/en/download/" rel="noopener noreferrer">Node.js 18 or above</a>.</p>
<h2 id="commands">Commands</h2>
<h3 id="add-packages">Add packages</h3>
<p>Use <code>openupm add</code> to add one or more dependencies to your project.</p>
<pre><code class="hljs language-sh">openupm add com.my.package@1.2.3
</code></pre>
<p>Checkout <a href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-add.md" rel="noopener noreferrer">the commands doc page</a> for more information.</p>
<h3 id="remove-packages">Remove packages</h3>
<p>Use <code>openupm remove</code> to remove one or more dependencies from your project.</p>
<pre><code class="hljs language-sh">openupm remove com.my.package
</code></pre>
<p>Checkout <a href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-remove.md" rel="noopener noreferrer">the commands doc page</a> for more information.</p>
<h3 id="search-packages">Search packages</h3>
<p>Use <code>openupm search</code> to search for remote packages by name.</p>
<pre><code class="hljs language-sh">openupm search something
</code></pre>
<p>Checkout <a href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-search.md" rel="noopener noreferrer">the commands doc page</a> for more information.</p>
<h3 id="view-package-information">View package information</h3>
<p>Use <code>openupm view</code> to view detailed information about a remote package.</p>
<pre><code class="hljs language-sh">openupm view com.my.package
</code></pre>
<p>Checkout <a href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-view.md" rel="noopener noreferrer">the commands doc page</a> for more information.</p>
<h3 id="view-package-dependencies">View package dependencies</h3>
<p>Use <code>openupm deps</code> to print package dependencies.</p>
<pre><code class="hljs language-sh">openupm deps com.my.package
</code></pre>
<p>Checkout <a href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-deps.md" rel="noopener noreferrer">the commands doc page</a> for more information.</p>
<h3 id="list-installed-packages">List installed packages</h3>
<p>Use <code>openupm ls</code> to print the names and versions of installed packages.</p>
<pre><code class="hljs language-sh">openupm <span class="hljs-built_in">ls</span>
</code></pre>
<p>Checkout <a href="https://github.com/openupm/openupm-cli/blob/master/./docs/cmd-ls.md" rel="noopener noreferrer">the commands doc page</a> for more information.</p>
<h3 id="global-command-options">Global command options</h3>
<p>There are also some global options that work for every command. You can read about them <a href="https://github.com/openupm/openupm-cli/blob/master/./docs/global-opts.md" rel="noopener noreferrer">here</a>.</p>
<h2 id="general-help-pages">General help pages</h2>
<p>We also have a few guide pages on specific topics if you need help:</p>
<ul>
<li><a href="https://github.com/openupm/openupm-cli/blob/master/./docs/help-registry.md" rel="noopener noreferrer">Working with 3rd party registries</a></li>
<li><a href="https://github.com/openupm/openupm-cli/blob/master/./docs/help-system-user.md" rel="noopener noreferrer">Using Windows system-user authentication</a></li>
</ul>
<h2 id="contributors">Contributors</h2>



<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://littlebigfun.com" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/125390?v=4?s=100" width="100px;" alt="Favo Yang"><br><sub><b>Favo Yang</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/commits?author=favoyang" title="Code" rel="noopener noreferrer">💻</a> <a href="#maintenance-favoyang" title="Maintenance" rel="noopener noreferrer">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://comradevanti.itch.io" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/31240807?v=4?s=100" width="100px;" alt="Ramon Brullo"><br><sub><b>Ramon Brullo</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/commits?author=ComradeVanti" title="Code" rel="noopener noreferrer">💻</a> <a href="#maintenance-ComradeVanti" title="Maintenance" rel="noopener noreferrer">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nowsprinting.github.io/" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/117617?v=4?s=100" width="100px;" alt="Koji Hasegawa"><br><sub><b>Koji Hasegawa</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/commits?author=nowsprinting" title="Code" rel="noopener noreferrer">💻</a> <a href="https://github.com/openupm/openupm-cli/issues?q=author%3Anowsprinting" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.xxwhite.com" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/26868745?v=4?s=100" width="100px;" alt="MonoLogueChi"><br><sub><b>MonoLogueChi</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3AMonoLogueChi" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/from2001vr" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/387880?v=4?s=100" width="100px;" alt="Masahiro Yamaguchi"><br><sub><b>Masahiro Yamaguchi</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Afrom2001" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/maxhimmel" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/20761855?v=4?s=100" width="100px;" alt="Max Himmel"><br><sub><b>Max Himmel</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Amaxhimmel" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zulu-Inuoe" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/1526310?v=4?s=100" width="100px;" alt="Wilfredo Velázquez-Rodríguez"><br><sub><b>Wilfredo Velázquez-Rodríguez</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3AZulu-Inuoe" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TGChrisRArendt" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/47191729?v=4?s=100" width="100px;" alt="Christopher Arendt"><br><sub><b>Christopher Arendt</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ATGChrisRArendt" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Blackclaws" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/5792929?v=4?s=100" width="100px;" alt="Felix Winterhalter"><br><sub><b>Felix Winterhalter</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ABlackclaws" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alelievr" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/6877923?v=4?s=100" width="100px;" alt="Antoine Lelievre"><br><sub><b>Antoine Lelievre</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3Aalelievr" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tomorrow.comes.today" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/6391063?v=4?s=100" width="100px;" alt="Tyler Temp"><br><sub><b>Tyler Temp</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/issues?q=author%3ATylerTemp" title="Bug reports" rel="noopener noreferrer">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://marcbernardtools.com/" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/59966492?v=4?s=100" width="100px;" alt="Marc Bernard"><br><sub><b>Marc Bernard</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/commits?author=mbtools" title="Documentation" rel="noopener noreferrer">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/StigOlavsen" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/7004085?v=4?s=100" width="100px;" alt="Stig Olavsen"><br><sub><b>Stig Olavsen</b></sub></a><br><a href="https://github.com/openupm/openupm-cli/commits?author=StigOlavsen" title="Code" rel="noopener noreferrer">💻</a></td>
    </tr>
  </tbody>
</table>


</div>`},{kind:`Live README`,title:`UniTask README`,packageName:`com.cysharp.unitask`,repoUrl:`https://github.com/Cysharp/UniTask`,sourceUrl:`https://raw.githubusercontent.com/Cysharp/UniTask/master/README.md`,fetched:!0,markdown:`UniTask
===
[![GitHub Actions](https://github.com/Cysharp/UniTask/workflows/Build-Debug/badge.svg)](https://github.com/Cysharp/UniTask/actions) [![Releases](https://img.shields.io/github/release/Cysharp/UniTask.svg)](https://github.com/Cysharp/UniTask/releases) [![Readme_CN](https://img.shields.io/badge/UniTask-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3-red)](https://github.com/Cysharp/UniTask/blob/master/README_CN.md)

Provides an efficient allocation free async/await integration for Unity.

* Struct based \`UniTask<T>\` and custom AsyncMethodBuilder to achieve zero allocation
* Makes all Unity AsyncOperations and Coroutines awaitable
* PlayerLoop based task(\`UniTask.Yield\`, \`UniTask.Delay\`, \`UniTask.DelayFrame\`, etc..) that enable replacing all coroutine operations
* MonoBehaviour Message Events and uGUI Events as awaitable/async-enumerable
* Runs completely on Unity's PlayerLoop so doesn't use threads and runs on WebGL, wasm, etc.
* Asynchronous LINQ, with Channel and AsyncReactiveProperty
* TaskTracker window to prevent memory leaks
* Highly compatible behaviour with Task/ValueTask/IValueTaskSource

For technical details, see blog post: [UniTask v2 — Zero Allocation async/await for Unity, with Asynchronous LINQ
](https://medium.com/@neuecc/unitask-v2-zero-allocation-async-await-for-unity-with-asynchronous-linq-1aa9c96aa7dd)  
For advanced tips, see blog post: [Extends UnityWebRequest via async decorator pattern — Advanced Techniques of UniTask](https://medium.com/@neuecc/extends-unitywebrequest-via-async-decorator-pattern-advanced-techniques-of-unitask-ceff9c5ee846)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Getting started](#getting-started)
- [Basics of UniTask and AsyncOperation](#basics-of-unitask-and-asyncoperation)
- [Cancellation and Exception handling](#cancellation-and-exception-handling)
- [Timeout handling](#timeout-handling)
- [Progress](#progress)
- [PlayerLoop](#playerloop)
- [async void vs async UniTaskVoid](#async-void-vs-async-unitaskvoid)
- [UniTaskTracker](#unitasktracker)
- [External Assets](#external-assets)
- [AsyncEnumerable and Async LINQ](#asyncenumerable-and-async-linq)
- [Awaitable Events](#awaitable-events)
- [Channel](#channel)
- [vs Awaitable](#vs-awaitable)
- [For Unit Testing](#for-unit-testing)
- [ThreadPool limitation](#threadpool-limitation)
- [IEnumerator.ToUniTask limitation](#ienumeratortounitask-limitation)
- [For UnityEditor](#for-unityeditor)
- [Compare with Standard Task API](#compare-with-standard-task-api)
- [Pooling Configuration](#pooling-configuration)
- [Allocation on Profiler](#allocation-on-profiler)
- [UniTaskSynchronizationContext](#unitasksynchronizationcontext)
- [API References](#api-references)
- [UPM Package](#upm-package)
  - [Install via git URL](#install-via-git-url)
- [.NET Core](#net-core)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Getting started
---
Install via [UPM package](#upm-package) with git reference or asset package(\`UniTask.*.*.*.unitypackage\`) available in [UniTask/releases](https://github.com/Cysharp/UniTask/releases).

\`\`\`csharp
// extension awaiter/methods can be used by this namespace
using Cysharp.Threading.Tasks;

// You can return type as struct UniTask<T>(or UniTask), it is unity specialized lightweight alternative of Task<T>
// zero allocation and fast excution for zero overhead async/await integrate with Unity
async UniTask<string> DemoAsync()
{
    // You can await Unity's AsyncObject
    var asset = await Resources.LoadAsync<TextAsset>("foo");
    var txt = (await UnityWebRequest.Get("https://...").SendWebRequest()).downloadHandler.text;
    await SceneManager.LoadSceneAsync("scene2");

    // .WithCancellation enables Cancel, GetCancellationTokenOnDestroy synchornizes with lifetime of GameObject
    // after Unity 2022.2, you can use \`destroyCancellationToken\` in MonoBehaviour
    var asset2 = await Resources.LoadAsync<TextAsset>("bar").WithCancellation(this.GetCancellationTokenOnDestroy());

    // .ToUniTask accepts progress callback(and all options), Progress.Create is a lightweight alternative of IProgress<T>
    var asset3 = await Resources.LoadAsync<TextAsset>("baz").ToUniTask(Progress.Create<float>(x => Debug.Log(x)));

    // await frame-based operation like a coroutine
    await UniTask.DelayFrame(100); 

    // replacement of yield return new WaitForSeconds/WaitForSecondsRealtime
    await UniTask.Delay(TimeSpan.FromSeconds(10), ignoreTimeScale: false);
    
    // yield any playerloop timing(PreUpdate, Update, LateUpdate, etc...)
    await UniTask.Yield(PlayerLoopTiming.PreLateUpdate);

    // replacement of yield return null
    await UniTask.Yield();
    await UniTask.NextFrame();

    // replacement of WaitForEndOfFrame
#if UNITY_2023_1_OR_NEWER
    await UniTask.WaitForEndOfFrame();
#else
    // requires MonoBehaviour(CoroutineRunner))
    await UniTask.WaitForEndOfFrame(this); // this is MonoBehaviour
#endif

    // replacement of yield return new WaitForFixedUpdate(same as UniTask.Yield(PlayerLoopTiming.FixedUpdate))
    await UniTask.WaitForFixedUpdate();
    
    // replacement of yield return WaitUntil
    await UniTask.WaitUntil(() => isActive == false);

    // special helper of WaitUntil
    await UniTask.WaitUntilValueChanged(this, x => x.isActive);

    // You can await IEnumerator coroutines
    await FooCoroutineEnumerator();

    // You can await a standard task
    await Task.Run(() => 100);

    // Multithreading, run on ThreadPool under this code
    await UniTask.SwitchToThreadPool();

    /* work on ThreadPool */

    // return to MainThread(same as \`ObserveOnMainThread\` in UniRx)
    await UniTask.SwitchToMainThread();

    // get async webrequest
    async UniTask<string> GetTextAsync(UnityWebRequest req)
    {
        var op = await req.SendWebRequest();
        return op.downloadHandler.text;
    }

    var task1 = GetTextAsync(UnityWebRequest.Get("http://google.com"));
    var task2 = GetTextAsync(UnityWebRequest.Get("http://bing.com"));
    var task3 = GetTextAsync(UnityWebRequest.Get("http://yahoo.com"));

    // concurrent async-wait and get results easily by tuple syntax
    var (google, bing, yahoo) = await UniTask.WhenAll(task1, task2, task3);

    // shorthand of WhenAll, tuple can await directly
    var (google2, bing2, yahoo2) = await (task1, task2, task3);

    // return async-value.(or you can use \`UniTask\`(no result), \`UniTaskVoid\`(fire and forget)).
    return (asset as TextAsset)?.text ?? throw new InvalidOperationException("Asset not found");
}
\`\`\`

Basics of UniTask and AsyncOperation
---
UniTask features rely on C# 7.0([task-like custom async method builder feature](https://github.com/dotnet/roslyn/blob/master/docs/features/task-types.md)) so the required Unity version is after \`Unity 2018.3\`, the official lowest version supported is \`Unity 2018.4.13f1\`.

Why is UniTask(custom task-like object) required? Because Task is too heavy and not matched to Unity threading (single-thread). UniTask does not use threads and SynchronizationContext/ExecutionContext because Unity's asynchronous object is automaticaly dispatched by Unity's engine layer. It achieves faster and lower allocation, and is completely integrated with Unity.

You can await \`AsyncOperation\`, \`ResourceRequest\`, \`AssetBundleRequest\`, \`AssetBundleCreateRequest\`, \`UnityWebRequestAsyncOperation\`, \`AsyncGPUReadbackRequest\`, \`IEnumerator\` and others when \`using Cysharp.Threading.Tasks;\`.

UniTask provides three pattern of extension methods.

\`\`\`csharp
* await asyncOperation;
* .WithCancellation(CancellationToken);
* .ToUniTask(IProgress, PlayerLoopTiming, CancellationToken);
\`\`\`

\`WithCancellation\` is a simple version of \`ToUniTask\`, both return \`UniTask\`. For details of cancellation, see: [Cancellation and Exception handling](#cancellation-and-exception-handling) section.

> Note: await directly is returned from native timing of PlayerLoop but WithCancellation and ToUniTask are returned from specified PlayerLoopTiming. For details of timing, see: [PlayerLoop](#playerloop) section.

> Note: AssetBundleRequest has \`asset\` and \`allAssets\`, default await returns \`asset\`. If you want to get \`allAssets\`, you can use \`AwaitForAllAssets()\` method.

The type of \`UniTask\` can use utilities like \`UniTask.WhenAll\`, \`UniTask.WhenAny\`, \`UniTask.WhenEach\`. They are like \`Task.WhenAll\`/\`Task.WhenAny\` but the return type is more useful. They return value tuples so you can deconstruct each result and pass multiple types.

\`\`\`csharp
public async UniTaskVoid LoadManyAsync()
{
    // parallel load.
    var (a, b, c) = await UniTask.WhenAll(
        LoadAsSprite("foo"),
        LoadAsSprite("bar"),
        LoadAsSprite("baz"));
}

async UniTask<Sprite> LoadAsSprite(string path)
{
    var resource = await Resources.LoadAsync<Sprite>(path);
    return (resource as Sprite);
}
\`\`\`

If you want to convert a callback to UniTask, you can use \`UniTaskCompletionSource<T>\` which is a lightweight edition of \`TaskCompletionSource<T>\`. 

\`\`\`csharp
public UniTask<int> WrapByUniTaskCompletionSource()
{
    var utcs = new UniTaskCompletionSource<int>();

    // when complete, call utcs.TrySetResult();
    // when failed, call utcs.TrySetException();
    // when cancel, call utcs.TrySetCanceled();

    return utcs.Task; //return UniTask<int>
}
\`\`\`

You can convert Task -> UniTask: \`AsUniTask\`, \`UniTask\` -> \`UniTask<AsyncUnit>\`: \`AsAsyncUnitUniTask\`, \`UniTask<T>\` -> \`UniTask\`: \`AsUniTask\`. \`UniTask<T>\` -> \`UniTask\`'s conversion cost is free.

If you want to convert async to coroutine, you can use \`.ToCoroutine()\`, this is useful if you want to only allow using the coroutine system.

UniTask can not await twice. This is a similar constraint to the [ValueTask/IValueTaskSource](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.valuetask-1?view=netcore-3.1) introduced in .NET Standard 2.1.

> The following operations should never be performed on a ValueTask<TResult> instance:
>
> * Awaiting the instance multiple times.
> * Calling AsTask multiple times.
> * Using .Result or .GetAwaiter().GetResult() when the operation hasn't yet completed, or using them multiple times.
> * Using more than one of these techniques to consume the instance.
>
> If you do any of the above, the results are undefined.

\`\`\`csharp
var task = UniTask.DelayFrame(10);
await task;
await task; // NG, throws Exception
\`\`\`

Store to the class field, you can use \`UniTask.Lazy\` that supports calling multiple times. \`.Preserve()\` allows for multiple calls (internally cached results). This is useful when there are multiple calls in a function scope.

Also \`UniTaskCompletionSource\` can await multiple times and await from many callers.

Cancellation and Exception handling
---
Some UniTask factory methods have a \`CancellationToken cancellationToken = default\` parameter. Also some async operations for Unity have \`WithCancellation(CancellationToken)\` and \`ToUniTask(..., CancellationToken cancellation = default)\` extension methods. 

You can pass \`CancellationToken\` to parameter by standard [\`CancellationTokenSource\`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.cancellationtokensource).

\`\`\`csharp
var cts = new CancellationTokenSource();

cancelButton.onClick.AddListener(() =>
{
    cts.Cancel();
});

await UnityWebRequest.Get("http://google.co.jp").SendWebRequest().WithCancellation(cts.Token);

await UniTask.DelayFrame(1000, cancellationToken: cts.Token);
\`\`\`

CancellationToken can be created by \`CancellationTokenSource\` or MonoBehaviour's extension method \`GetCancellationTokenOnDestroy\`.

\`\`\`csharp
// this CancellationToken lifecycle is same as GameObject.
await UniTask.DelayFrame(1000, cancellationToken: this.GetCancellationTokenOnDestroy());
\`\`\`

For propagate Cancellation, all async method recommend to accept \`CancellationToken cancellationToken\` at last argument, and pass \`CancellationToken\` from root to end.

\`\`\`csharp
await FooAsync(this.GetCancellationTokenOnDestroy());

// ---

async UniTask FooAsync(CancellationToken cancellationToken)
{
    await BarAsync(cancellationToken);
}

async UniTask BarAsync(CancellationToken cancellationToken)
{
    await UniTask.Delay(TimeSpan.FromSeconds(3), cancellationToken);
}
\`\`\`

\`CancellationToken\` means lifecycle of async. You can hold your own lifecycle insteadof default CancellationTokenOnDestroy.

\`\`\`csharp
public class MyBehaviour : MonoBehaviour
{
    CancellationTokenSource disableCancellation = new CancellationTokenSource();
    CancellationTokenSource destroyCancellation = new CancellationTokenSource();

    private void OnEnable()
    {
        if (disableCancellation != null)
        {
            disableCancellation.Dispose();
        }
        disableCancellation = new CancellationTokenSource();
    }

    private void OnDisable()
    {
        disableCancellation.Cancel();
    }

    private void OnDestroy()
    {
        destroyCancellation.Cancel();
        destroyCancellation.Dispose();
    }
}
\`\`\`

After Unity 2022.2, Unity adds CancellationToken in [MonoBehaviour.destroyCancellationToken](https://docs.unity3d.com/ScriptReference/MonoBehaviour-destroyCancellationToken.html) and [Application.exitCancellationToken](https://docs.unity3d.com/ScriptReference/Application-exitCancellationToken.html).

When cancellation is detected, all methods throw \`OperationCanceledException\` and propagate upstream. When exception(not limited to \`OperationCanceledException\`) is not handled in async method, it is propagated finally to \`UniTaskScheduler.UnobservedTaskException\`. The default behaviour of received unhandled exception is to write log as exception. Log level can be changed using \`UniTaskScheduler.UnobservedExceptionWriteLogType\`. If you want to use custom behaviour, set an action to \`UniTaskScheduler.UnobservedTaskException.\`

And also \`OperationCanceledException\` is a special exception, this is silently ignored at \`UnobservedTaskException\`.

If you want to cancel behaviour in an async UniTask method, throw \`OperationCanceledException\` manually.

\`\`\`csharp
public async UniTask<int> FooAsync()
{
    await UniTask.Yield();
    throw new OperationCanceledException();
}
\`\`\`

If you handle an exception but want to ignore(propagate to global cancellation handling), use an exception filter.

\`\`\`csharp
public async UniTask<int> BarAsync()
{
    try
    {
        var x = await FooAsync();
        return x * 2;
    }
    catch (Exception ex) when (!(ex is OperationCanceledException)) // when (ex is not OperationCanceledException) at C# 9.0
    {
        return -1;
    }
}
\`\`\`

throws/catch \`OperationCanceledException\` is slightly heavy, so if performance is a concern, use \`UniTask.SuppressCancellationThrow\` to avoid OperationCanceledException throw. It returns \`(bool IsCanceled, T Result)\` instead of throwing.

\`\`\`csharp
var (isCanceled, _) = await UniTask.DelayFrame(10, cancellationToken: cts.Token).SuppressCancellationThrow();
if (isCanceled)
{
    // ...
}
\`\`\`

Note: Only suppress throws if you call directly into the most source method. Otherwise, the return value will be converted, but the entire pipeline will not suppress throws.

Some features that use Unity's player loop, such as \`UniTask.Yield\` and \`UniTask.Delay\` etc, determines CancellationToken state on the player loop. 
This means it does not cancel immediately upon \`CancellationToken\` fired. 

If you want to change this behaviour, the cancellation to be immediate, set the \`cancelImmediately\` flag as an argument.

\`\`\`csharp
await UniTask.Yield(cancellationToken, cancelImmediately: true);
\`\`\`

Note: Setting \`cancelImmediately\` to true and detecting an immediate cancellation is more costly than the default behavior.
This is because it uses \`CancellationToken.Register\`; it is heavier than checking CancellationToken on the player loop.

Timeout handling
---
Timeout is a variation of cancellation. You can set timeout by \`CancellationTokenSouce.CancelAfterSlim(TimeSpan)\` and pass CancellationToken to async methods.

\`\`\`csharp
var cts = new CancellationTokenSource();
cts.CancelAfterSlim(TimeSpan.FromSeconds(5)); // 5sec timeout.

try
{
    await UnityWebRequest.Get("http://foo").SendWebRequest().WithCancellation(cts.Token);
}
catch (OperationCanceledException ex)
{
    if (ex.CancellationToken == cts.Token)
    {
        UnityEngine.Debug.Log("Timeout");
    }
}
\`\`\`

> \`CancellationTokenSouce.CancelAfter\` is a standard api. However in Unity you should not use it because it depends threading timer. \`CancelAfterSlim\` is UniTask's extension methods, it uses PlayerLoop instead.

If you want to use timeout with other source of cancellation, use \`CancellationTokenSource.CreateLinkedTokenSource\`.

\`\`\`csharp
var cancelToken = new CancellationTokenSource();
cancelButton.onClick.AddListener(() =>
{
    cancelToken.Cancel(); // cancel from button click.
});

var timeoutToken = new CancellationTokenSource();
timeoutToken.CancelAfterSlim(TimeSpan.FromSeconds(5)); // 5sec timeout.

try
{
    // combine token
    var linkedTokenSource = CancellationTokenSource.CreateLinkedTokenSource(cancelToken.Token, timeoutToken.Token);

    await UnityWebRequest.Get("http://foo").SendWebRequest().WithCancellation(linkedTokenSource.Token);
}
catch (OperationCanceledException ex)
{
    if (timeoutToken.IsCancellationRequested)
    {
        UnityEngine.Debug.Log("Timeout.");
    }
    else if (cancelToken.IsCancellationRequested)
    {
        UnityEngine.Debug.Log("Cancel clicked.");
    }
}
\`\`\`

Optimize for reduce allocation of CancellationTokenSource for timeout per call async method, you can use UniTask's \`TimeoutController\`.

\`\`\`csharp
TimeoutController timeoutController = new TimeoutController(); // setup to field for reuse.

async UniTask FooAsync()
{
    try
    {
        // you can pass timeoutController.Timeout(TimeSpan) to cancellationToken.
        await UnityWebRequest.Get("http://foo").SendWebRequest()
            .WithCancellation(timeoutController.Timeout(TimeSpan.FromSeconds(5)));
        timeoutController.Reset(); // call Reset(Stop timeout timer and ready for reuse) when succeed.
    }
    catch (OperationCanceledException ex)
    {
        if (timeoutController.IsTimeout())
        {
            UnityEngine.Debug.Log("timeout");
        }
    }
}
\`\`\`

If you want to use timeout with other source of cancellation, use \`new TimeoutController(CancellationToken)\`.

\`\`\`csharp
TimeoutController timeoutController;
CancellationTokenSource clickCancelSource;

void Start()
{
    this.clickCancelSource = new CancellationTokenSource();
    this.timeoutController = new TimeoutController(clickCancelSource);
}
\`\`\`

Note: UniTask has \`.Timeout\`, \`.TimeoutWithoutException\` methods however, if possible, do not use these, please pass \`CancellationToken\`. Because \`.Timeout\` work from external of task, can not stop timeoutted task. \`.Timeout\` means ignore result when timeout. If you pass a \`CancellationToken\` to the method, it will act from inside of the task, so it is possible to stop a running task.

Progress
---
Some async operations for unity have \`ToUniTask(IProgress<float> progress = null, ...)\` extension methods. 

\`\`\`csharp
var progress = Progress.Create<float>(x => Debug.Log(x));

var request = await UnityWebRequest.Get("http://google.co.jp")
    .SendWebRequest()
    .ToUniTask(progress: progress);
\`\`\`

You should not use standard \`new System.Progress<T>\`, because it causes allocation every time. Use \`Cysharp.Threading.Tasks.Progress\` instead. This progress factory has two methods, \`Create\` and \`CreateOnlyValueChanged\`. \`CreateOnlyValueChanged\` calls only when the progress value has changed.

Implementing IProgress interface to caller is better as there is no lambda allocation.

\`\`\`csharp
public class Foo : MonoBehaviour, IProgress<float>
{
    public void Report(float value)
    {
        UnityEngine.Debug.Log(value);
    }

    public async UniTaskVoid WebRequest()
    {
        var request = await UnityWebRequest.Get("http://google.co.jp")
            .SendWebRequest()
            .ToUniTask(progress: this); // pass this
    }
}
\`\`\`

PlayerLoop
---
UniTask is run on a custom [PlayerLoop](https://docs.unity3d.com/ScriptReference/LowLevel.PlayerLoop.html). UniTask's playerloop based methods (such as \`Delay\`, \`DelayFrame\`, \`asyncOperation.ToUniTask\`, etc...) accept this \`PlayerLoopTiming\`.

\`\`\`csharp
public enum PlayerLoopTiming
{
    Initialization = 0,
    LastInitialization = 1,

    EarlyUpdate = 2,
    LastEarlyUpdate = 3,

    FixedUpdate = 4,
    LastFixedUpdate = 5,

    PreUpdate = 6,
    LastPreUpdate = 7,

    Update = 8,
    LastUpdate = 9,

    PreLateUpdate = 10,
    LastPreLateUpdate = 11,

    PostLateUpdate = 12,
    LastPostLateUpdate = 13
    
#if UNITY_2020_2_OR_NEWER
    TimeUpdate = 14,
    LastTimeUpdate = 15,
#endif
}
\`\`\`

It indicates when to run, you can check [PlayerLoopList.md](https://gist.github.com/neuecc/bc3a1cfd4d74501ad057e49efcd7bdae) to Unity's default playerloop and injected UniTask's custom loop.

\`PlayerLoopTiming.Update\` is similar to \`yield return null\` in a coroutine, but it is called before Update(Update and uGUI events(button.onClick, etc...) are called on \`ScriptRunBehaviourUpdate\`, yield return null is called on \`ScriptRunDelayedDynamicFrameRate\`). \`PlayerLoopTiming.FixedUpdate\` is similar to \`WaitForFixedUpdate\`.

> \`PlayerLoopTiming.LastPostLateUpdate\` is not equivalent to coroutine's \`yield return new WaitForEndOfFrame()\`. Coroutine's WaitForEndOfFrame seems to run after the PlayerLoop is done. Some methods that require coroutine's end of frame(\`Texture2D.ReadPixels\`, \`ScreenCapture.CaptureScreenshotAsTexture\`, \`CommandBuffer\`, etc) do not work correctly when replaced with async/await. In these cases, pass MonoBehaviour(coroutine runnner) to \`UniTask.WaitForEndOfFrame\`. For example, \`await UniTask.WaitForEndOfFrame(this);\` is lightweight allocation free alternative of \`yield return new WaitForEndOfFrame()\`.
> 
> Note: In Unity 2023.1 or newer, \`await UniTask.WaitForEndOfFrame();\` no longer requires MonoBehaviour. It uses \`UnityEngine.Awaitable.EndOfFrameAsync\`.

\`yield return null\` and \`UniTask.Yield\` are similar but different. \`yield return null\` always returns next frame but \`UniTask.Yield\` returns next called. That is, call \`UniTask.Yield(PlayerLoopTiming.Update)\` on \`PreUpdate\`, it returns same frame. \`UniTask.NextFrame()\` guarantees return next frame, you can expect this to behave exactly the same as \`yield return null\`.

> UniTask.Yield(without CancellationToken) is a special type, returns \`YieldAwaitable\` and runs on YieldRunner. It is the most lightweight and fastest.

\`AsyncOperation\` is returned from native timing. For example, await \`SceneManager.LoadSceneAsync\` is returned from \`EarlyUpdate.UpdatePreloading\` and after being called, the loaded scene's \`Start\` is called from \`EarlyUpdate.ScriptRunDelayedStartupFrame\`. Also \`await UnityWebRequest\` is returned from \`EarlyUpdate.ExecuteMainThreadJobs\`.

In UniTask, await directly uses native timing, while \`WithCancellation\` and \`ToUniTask\` use specified timing. This is usually not a particular problem, but with \`LoadSceneAsync\`, it causes a different order of Start and continuation after await. So it is recommended not to use \`LoadSceneAsync.ToUniTask\`.

> Note: When using Unity 2023.1 or newer, ensure you have \`using UnityEngine;\` in the using statements of your file when working with new \`UnityEngine.Awaitable\` methods like \`SceneManager.LoadSceneAsync\`. 
> This prevents compilation errors by avoiding the use of the \`UnityEngine.AsyncOperation\` version.

In the stacktrace, you can check where it is running in playerloop.

![image](https://user-images.githubusercontent.com/46207/83735571-83caea80-a68b-11ea-8d22-5e22864f0d24.png)

By default, UniTask's PlayerLoop is initialized at \`[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]\`.

The order in which methods are called in BeforeSceneLoad is nondeterministic, so if you want to use UniTask in other BeforeSceneLoad methods, you should try to initialize it before this.

\`\`\`csharp
// AfterAssembliesLoaded is called before BeforeSceneLoad
[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterAssembliesLoaded)]
public static void InitUniTaskLoop()
{
    var loop = PlayerLoop.GetCurrentPlayerLoop();
    Cysharp.Threading.Tasks.PlayerLoopHelper.Initialize(ref loop);
}
\`\`\`

If you import Unity's \`Entities\` package, that resets the custom player loop to default at \`BeforeSceneLoad\` and injects ECS's loop. When Unity calls ECS's inject method after UniTask's initialize method, UniTask will no longer work.

To solve this issue, you can re-initialize the UniTask PlayerLoop after ECS is initialized.

\`\`\`csharp
// Get ECS Loop.
var playerLoop = ScriptBehaviourUpdateOrder.CurrentPlayerLoop;

// Setup UniTask's PlayerLoop.
PlayerLoopHelper.Initialize(ref playerLoop);
\`\`\`

You can diagnose whether UniTask's player loop is ready by calling \`PlayerLoopHelper.IsInjectedUniTaskPlayerLoop()\`. And also \`PlayerLoopHelper.DumpCurrentPlayerLoop\` logs all current playerloops to console.

\`\`\`csharp
void Start()
{
    UnityEngine.Debug.Log("UniTaskPlayerLoop ready? " + PlayerLoopHelper.IsInjectedUniTaskPlayerLoop());
    PlayerLoopHelper.DumpCurrentPlayerLoop();
}
\`\`\`

You can optimize loop cost slightly by remove unuse PlayerLoopTiming injection. You can call \`PlayerLoopHelper.Initialize(InjectPlayerLoopTimings)\` on initialize.

\`\`\`csharp
var loop = PlayerLoop.GetCurrentPlayerLoop();
PlayerLoopHelper.Initialize(ref loop, InjectPlayerLoopTimings.Minimum); // minimum is Update | FixedUpdate | LastPostLateUpdate
\`\`\`

\`InjectPlayerLoopTimings\` has three preset, \`All\` and \`Standard\`(All without last except LastPostLateUpdate), \`Minimum\`(\`Update | FixedUpdate | LastPostLateUpdate\`). Default is All and you can combine custom inject timings like \`InjectPlayerLoopTimings.Update | InjectPlayerLoopTimings.FixedUpdate | InjectPlayerLoopTimings.PreLateUpdate\`.

You can make error to use uninjected \`PlayerLoopTiming\` by [Microsoft.CodeAnalysis.BannedApiAnalyzers](https://github.com/dotnet/roslyn-analyzers/blob/master/src/Microsoft.CodeAnalysis.BannedApiAnalyzers/BannedApiAnalyzers.Help.md). For example, you can setup \`BannedSymbols.txt\` like this for \`InjectPlayerLoopTimings.Minimum\`.

\`\`\`txt
F:Cysharp.Threading.Tasks.PlayerLoopTiming.Initialization; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastInitialization; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.EarlyUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastEarlyUpdate; Isn't injected this PlayerLoop in this project.d
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastFixedUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PreUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastPreUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PreLateUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastPreLateUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PostLateUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.TimeUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastTimeUpdate; Isn't injected this PlayerLoop in this project.
\`\`\`

You can configure \`RS0030\` severity to error.

![image](https://user-images.githubusercontent.com/46207/109150837-bb933880-77ac-11eb-85ba-4fd15819dbd0.png)

async void vs async UniTaskVoid
---
\`async void\` is a standard C# task system so it does not run on UniTask systems. It is better not to use it. \`async UniTaskVoid\` is a lightweight version of \`async UniTask\` because it does not have awaitable completion and reports errors immediately to \`UniTaskScheduler.UnobservedTaskException\`. If you don't require awaiting (fire and forget), using \`UniTaskVoid\` is better. Unfortunately to dismiss warning, you're required to call \`Forget()\`.

\`\`\`csharp
public async UniTaskVoid FireAndForgetMethod()
{
    // do anything...
    await UniTask.Yield();
}

public void Caller()
{
    FireAndForgetMethod().Forget();
}
\`\`\`

Also UniTask has the \`Forget\` method, it is similar to \`UniTaskVoid\` and has the same effects. However \`UniTaskVoid\` is more efficient if you completely don't use \`await\`。

\`\`\`csharp
public async UniTask DoAsync()
{
    // do anything...
    await UniTask.Yield();
}

public void Caller()
{
    DoAsync().Forget();
}
\`\`\`

To use an async lambda registered to an event, don't use \`async void\`. Instead you can use \`UniTask.Action\` or \`UniTask.UnityAction\`, both of which create a delegate via \`async UniTaskVoid\` lambda.

\`\`\`csharp
Action actEvent;
UnityAction unityEvent; // especially used in uGUI

// Bad: async void
actEvent += async () => { };
unityEvent += async () => { };

// Ok: create Action delegate by lambda
actEvent += UniTask.Action(async () => { await UniTask.Yield(); });
unityEvent += UniTask.UnityAction(async () => { await UniTask.Yield(); });
\`\`\`

\`UniTaskVoid\` can also be used in MonoBehaviour's \`Start\` method.

\`\`\`csharp
class Sample : MonoBehaviour
{
    async UniTaskVoid Start()
    {
        // async init code.
    }
}
\`\`\`

UniTaskTracker
---
useful for checking (leaked) UniTasks. You can open tracker window in \`Window -> UniTask Tracker\`.

![image](https://user-images.githubusercontent.com/46207/83527073-4434bf00-a522-11ea-86e9-3b3975b26266.png)

* Enable AutoReload(Toggle) - Reload automatically.
* Reload - Reload view.
* GC.Collect - Invoke GC.Collect.
* Enable Tracking(Toggle) - Start to track async/await UniTask. Performance impact: low.
* Enable StackTrace(Toggle) - Capture StackTrace when task is started. Performance impact: high.

UniTaskTracker is intended for debugging use only as enabling tracking and capturing stacktraces is useful but has a heavy performance impact. Recommended usage is to enable both tracking and stacktraces to find task leaks and to disable them both when done.

External Assets
---
By default, UniTask supports TextMeshPro(\`BindTo(TMP_Text)\` and \`TMP_InputField\` event extensions like standard uGUI \`InputField\`), DOTween(\`Tween\` as awaitable) and Addressables(\`AsyncOperationHandle\` and \`AsyncOperationHandle<T>\` as awaitable).

There are defined in separated asmdefs like \`UniTask.TextMeshPro\`, \`UniTask.DOTween\`, \`UniTask.Addressables\`.

TextMeshPro and Addressables support are automatically enabled when importing their packages from package manager. 
However for DOTween support, after importing from the [DOTWeen assets](https://assetstore.unity.com/packages/tools/animation/dotween-hotween-v2-27676r) and define the scripting define symbol \`UNITASK_DOTWEEN_SUPPORT\` to enable it.

\`\`\`csharp
// sequential
await transform.DOMoveX(2, 10);
await transform.DOMoveZ(5, 20);

// parallel with cancellation
var ct = this.GetCancellationTokenOnDestroy();

await UniTask.WhenAll(
    transform.DOMoveX(10, 3).WithCancellation(ct),
    transform.DOScale(10, 3).WithCancellation(ct));
\`\`\`

DOTween support's default behaviour(\`await\`, \`WithCancellation\`, \`ToUniTask\`) awaits tween is killed. It works on both Complete(true/false) and Kill(true/false). But if you want to reuse tweens (\`SetAutoKill(false)\`), it does not work as expected. If you want to await for another timing, the following extension methods exist in Tween, \`AwaitForComplete\`, \`AwaitForPause\`, \`AwaitForPlay\`, \`AwaitForRewind\`, \`AwaitForStepComplete\`.

AsyncEnumerable and Async LINQ
---
Unity 2020.2 supports C# 8.0 so you can use \`await foreach\`. This is the new Update notation in the async era.

\`\`\`csharp
// Unity 2020.2, C# 8.0
await foreach (var _ in UniTaskAsyncEnumerable.EveryUpdate().WithCancellation(token))
{
    Debug.Log("Update() " + Time.frameCount);
}
\`\`\`

In a C# 7.3 environment, you can use the \`ForEachAsync\` method to work in almost the same way.

\`\`\`csharp
// C# 7.3(Unity 2018.3~)
await UniTaskAsyncEnumerable.EveryUpdate().ForEachAsync(_ =>
{
    Debug.Log("Update() " + Time.frameCount);
}, token);
\`\`\`

\`UniTask.WhenEach\` that is similar to .NET 9's \`Task.WhenEach\` can consume new way for await multiple tasks.

\`\`\`csharp
await foreach (var result in UniTask.WhenEach(task1, task2, task3))
{
    // The result is of type WhenEachResult<T>.
    // It contains either \`T Result\` or \`Exception Exception\`.
    // You can check \`IsCompletedSuccessfully\` or \`IsFaulted\` to determine whether to access \`.Result\` or \`.Exception\`.
    // If you want to throw an exception when \`IsFaulted\` and retrieve the result when successful, use \`GetResult()\`.
    Debug.Log(result.GetResult());
}
\`\`\`

UniTaskAsyncEnumerable implements asynchronous LINQ, similar to LINQ in \`IEnumerable<T>\` or Rx in \`IObservable<T>\`. All standard LINQ query operators can be applied to asynchronous streams. For example, the following code shows how to apply a Where filter to a button-click asynchronous stream that runs once every two clicks.

\`\`\`csharp
await okButton.OnClickAsAsyncEnumerable().Where((x, i) => i % 2 == 0).ForEachAsync(_ =>
{
});
\`\`\`

Fire and Forget style(for example, event handling), you can also use \`Subscribe\`.

\`\`\`csharp
okButton.OnClickAsAsyncEnumerable().Where((x, i) => i % 2 == 0).Subscribe(_ =>
{
});
\`\`\`

Async LINQ is enabled when \`using Cysharp.Threading.Tasks.Linq;\`, and \`UniTaskAsyncEnumerable\` is defined in \`UniTask.Linq\` asmdef.

It's closer to UniRx (Reactive Extensions), but UniTaskAsyncEnumerable is a pull-based asynchronous stream, whereas Rx was a push-based asynchronous stream. Note that although similar, the characteristics are different and the details behave differently along with them.

\`UniTaskAsyncEnumerable\` is the entry point like \`Enumerable\`. In addition to the standard query operators, there are other generators for Unity such as \`EveryUpdate\`, \`Timer\`, \`TimerFrame\`, \`Interval\`, \`IntervalFrame\`, and \`EveryValueChanged\`. And also added additional UniTask original query operators like \`Append\`, \`Prepend\`, \`DistinctUntilChanged\`, \`ToHashSet\`, \`Buffer\`, \`CombineLatest\`,\`Merge\` \`Do\`, \`Never\`, \`ForEachAsync\`, \`Pairwise\`, \`Publish\`, \`Queue\`, \`Return\`, \`SkipUntil\`, \`TakeUntil\`, \`SkipUntilCanceled\`, \`TakeUntilCanceled\`, \`TakeLast\`, \`Subscribe\`.

The method with Func as an argument has three additional overloads, \`***Await\`, \`***AwaitWithCancellation\`.

\`\`\`csharp
Select(Func<T, TR> selector)
SelectAwait(Func<T, UniTask<TR>> selector)
SelectAwaitWithCancellation(Func<T, CancellationToken, UniTask<TR>> selector)
\`\`\`

If you want to use the \`async\` method inside the func, use the \`***Await\` or \`***AwaitWithCancellation\`.

How to create an async iterator: C# 8.0 supports async iterator(\`async yield return\`) but it only allows \`IAsyncEnumerable<T>\` and of course requires C# 8.0. UniTask supports \`UniTaskAsyncEnumerable.Create\` method to create custom async iterator.

\`\`\`csharp
// IAsyncEnumerable, C# 8.0 version of async iterator. ( do not use this style, IAsyncEnumerable is not controled in UniTask).
public async IAsyncEnumerable<int> MyEveryUpdate([EnumeratorCancellation]CancellationToken cancelationToken = default)
{
    var frameCount = 0;
    await UniTask.Yield();
    while (!token.IsCancellationRequested)
    {
        yield return frameCount++;
        await UniTask.Yield();
    }
}

// UniTaskAsyncEnumerable.Create and use \`await writer.YieldAsync\` instead of \`yield return\`.
public IUniTaskAsyncEnumerable<int> MyEveryUpdate()
{
    // writer(IAsyncWriter<T>) has \`YieldAsync(value)\` method.
    return UniTaskAsyncEnumerable.Create<int>(async (writer, token) =>
    {
        var frameCount = 0;
        await UniTask.Yield();
        while (!token.IsCancellationRequested)
        {
            await writer.YieldAsync(frameCount++); // instead of \`yield return\`
            await UniTask.Yield();
        }
    });
}
\`\`\`

Awaitable Events
---
All uGUI component implements \`***AsAsyncEnumerable\` to convert asynchronous streams of events.

\`\`\`csharp
async UniTask TripleClick()
{
    // In default, used button.GetCancellationTokenOnDestroy to manage lieftime of async
    await button.OnClickAsync();
    await button.OnClickAsync();
    await button.OnClickAsync();
    Debug.Log("Three times clicked");
}

// more efficient way
async UniTask TripleClick()
{
    using (var handler = button.GetAsyncClickEventHandler())
    {
        await handler.OnClickAsync();
        await handler.OnClickAsync();
        await handler.OnClickAsync();
        Debug.Log("Three times clicked");
    }
}

// use async LINQ
async UniTask TripleClick(CancellationToken token)
{
    await button.OnClickAsAsyncEnumerable().Take(3).Last();
    Debug.Log("Three times clicked");
}

// use async LINQ2
async UniTask TripleClick(CancellationToken token)
{
    await button.OnClickAsAsyncEnumerable().Take(3).ForEachAsync(_ =>
    {
        Debug.Log("Every clicked");
    });
    Debug.Log("Three times clicked, complete.");
}
\`\`\`

All MonoBehaviour message events can convert async-streams by \`AsyncTriggers\` that can be enabled by \`using Cysharp.Threading.Tasks.Triggers;\`. AsyncTrigger can be created using \`GetAsync***Trigger\` and triggers itself as UniTaskAsyncEnumerable.

\`\`\`csharp
var trigger = this.GetOnCollisionEnterAsyncHandler();
await trigger.OnCollisionEnterAsync();
await trigger.OnCollisionEnterAsync();
await trigger.OnCollisionEnterAsync();

// every moves.
await this.GetAsyncMoveTrigger().ForEachAsync(axisEventData =>
{
});
\`\`\`

\`AsyncReactiveProperty\`, \`AsyncReadOnlyReactiveProperty\` is UniTask's version of ReactiveProperty. \`BindTo\` extension method of \`IUniTaskAsyncEnumerable<T>\` for binding asynchronous stream values to Unity components(Text/Selectable/TMP/Text).

\`\`\`csharp
var rp = new AsyncReactiveProperty<int>(99);

// AsyncReactiveProperty itself is IUniTaskAsyncEnumerable, you can query by LINQ
rp.ForEachAsync(x =>
{
    Debug.Log(x);
}, this.GetCancellationTokenOnDestroy()).Forget();

rp.Value = 10; // push 10 to all subscriber
rp.Value = 11; // push 11 to all subscriber

// WithoutCurrent ignore initial value
// BindTo bind stream value to unity components.
rp.WithoutCurrent().BindTo(this.textComponent);

await rp.WaitAsync(); // wait until next value set

// also exists ToReadOnlyAsyncReactiveProperty
var rp2 = new AsyncReactiveProperty<int>(99);
var rorp = rp.CombineLatest(rp2, (x, y) => (x, y)).ToReadOnlyAsyncReactiveProperty(CancellationToken.None);
\`\`\`

A pull-type asynchronous stream does not get the next values until the asynchronous processing in the sequence is complete. This could spill data from push-type events such as buttons.

\`\`\`csharp
// can not get click event during 3 seconds complete.
await button.OnClickAsAsyncEnumerable().ForEachAwaitAsync(async x =>
{
    await UniTask.Delay(TimeSpan.FromSeconds(3));
});
\`\`\`

It is useful (prevent double-click) but not useful sometimes.

Using the \`Queue()\` method will also queue events during asynchronous processing.

\`\`\`csharp
// queued message in asynchronous processing
await button.OnClickAsAsyncEnumerable().Queue().ForEachAwaitAsync(async x =>
{
    await UniTask.Delay(TimeSpan.FromSeconds(3));
});
\`\`\`

Or use \`Subscribe\`, fire and forget style.

\`\`\`csharp
button.OnClickAsAsyncEnumerable().Subscribe(async x =>
{
    await UniTask.Delay(TimeSpan.FromSeconds(3));
});
\`\`\`

Channel
---
\`Channel\` is the same as [System.Threading.Tasks.Channels](https://docs.microsoft.com/en-us/dotnet/api/system.threading.channels?view=netcore-3.1) which is similar to a GoLang Channel.

Currently it only supports multiple-producer, single-consumer unbounded channels. It can create by \`Channel.CreateSingleConsumerUnbounded<T>()\`.

For producer(\`.Writer\`), use \`TryWrite\` to push value and \`TryComplete\` to complete channel. For consumer(\`.Reader\`), use \`TryRead\`, \`WaitToReadAsync\`, \`ReadAsync\`, \`Completion\` and \`ReadAllAsync\` to read queued messages.

\`ReadAllAsync\` returns \`IUniTaskAsyncEnumerable<T>\` so query LINQ operators. Reader only allows single-consumer but uses \`.Publish()\` query operator to enable multicast message. For example, make pub/sub utility.

\`\`\`csharp
public class AsyncMessageBroker<T> : IDisposable
{
    Channel<T> channel;

    IConnectableUniTaskAsyncEnumerable<T> multicastSource;
    IDisposable connection;

    public AsyncMessageBroker()
    {
        channel = Channel.CreateSingleConsumerUnbounded<T>();
        multicastSource = channel.Reader.ReadAllAsync().Publish();
        connection = multicastSource.Connect(); // Publish returns IConnectableUniTaskAsyncEnumerable.
    }

    public void Publish(T value)
    {
        channel.Writer.TryWrite(value);
    }

    public IUniTaskAsyncEnumerable<T> Subscribe()
    {
        return multicastSource;
    }

    public void Dispose()
    {
        channel.Writer.TryComplete();
        connection.Dispose();
    }
}
\`\`\`

vs Awaitable
---
Unity 6 introduces the awaitable type, [Awaitable](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Awaitable.html). To put it simply, Awaitable can be considered a subset of UniTask, and in fact, Awaitable's design was influenced by UniTask. It should be able to handle PlayerLoop-based awaits, pooled Tasks, and support for cancellation with \`CancellationToken\` in a similar way. With its inclusion in the standard library, you may wonder whether to continue using UniTask or migrate to Awaitable. Here's a brief guide.

First, the functionality provided by Awaitable is equivalent to what coroutines offer. Instead of \`yield return\`, you use await; \`await NextFrameAsync()\` replaces \`yield return null\`; and there are equivalents for \`WaitForSeconds\` and \`EndOfFrame\`. However, that's the extent of it. Being coroutine-based in terms of functionality, it lacks Task-based features. In practical application development using async/await, operations like \`WhenAll\` are essential. Additionally, UniTask enables many frame-based operations (such as \`DelayFrame\`) and more flexible PlayerLoopTiming control, which are not available in Awaitable. Of course, there's no Tracker Window either.

Therefore, I recommend using UniTask for application development. UniTask is a superset of Awaitable and includes many essential features. For library development, where you want to avoid external dependencies, using Awaitable as a return type for methods would be appropriate. Awaitable can be converted to UniTask using \`AsUniTask\`, so there's no issue in handling Awaitable-based functionality within the UniTask library. Of course, if you don't need to worry about dependencies, using UniTask would be the best choice even for library development.

For Unit Testing
---
Unity's \`[UnityTest]\` attribute can test coroutine(IEnumerator) but can not test async. \`UniTask.ToCoroutine\` bridges async/await to coroutine so you can test async methods.

\`\`\`csharp
[UnityTest]
public IEnumerator DelayIgnore() => UniTask.ToCoroutine(async () =>
{
    var time = Time.realtimeSinceStartup;

    Time.timeScale = 0.5f;
    try
    {
        await UniTask.Delay(TimeSpan.FromSeconds(3), ignoreTimeScale: true);

        var elapsed = Time.realtimeSinceStartup - time;
        Assert.AreEqual(3, (int)Math.Round(TimeSpan.FromSeconds(elapsed).TotalSeconds, MidpointRounding.ToEven));
    }
    finally
    {
        Time.timeScale = 1.0f;
    }
});
\`\`\`

UniTask's own unit tests are written using Unity Test Runner and [Cysharp/RuntimeUnitTestToolkit](https://github.com/Cysharp/RuntimeUnitTestToolkit) to integrate with CI and check if IL2CPP is working.

ThreadPool limitation
---
Most UniTask methods run on a single thread (PlayerLoop), with only \`UniTask.Run\`(\`Task.Run\` equivalent) and \`UniTask.SwitchToThreadPool\` running on a thread pool. If you use a thread pool, it won't work with WebGL and so on.

\`UniTask.Run\` is now deprecated. You can use \`UniTask.RunOnThreadPool\` instead. And also consider whether you can use \`UniTask.Create\` or \`UniTask.Void\`.

IEnumerator.ToUniTask limitation
---
You can convert coroutine(IEnumerator) to UniTask(or await directly) but it has some limitations.

* \`WaitForEndOfFrame\`/\`WaitForFixedUpdate\`/\`Coroutine\` is not supported.
* Consuming loop timing is not the same as \`StartCoroutine\`, it uses the specified \`PlayerLoopTiming\` and the default \`PlayerLoopTiming.Update\` is run before MonoBehaviour's \`Update\` and \`StartCoroutine\`'s loop.

If you want fully compatible conversion from coroutine to async, use the \`IEnumerator.ToUniTask(MonoBehaviour coroutineRunner)\` overload. It executes StartCoroutine on an instance of the argument MonoBehaviour and waits for it to complete in UniTask.

For UnityEditor
---
UniTask can run on Unity Editor like an Editor Coroutine. However, there are some limitations.

* UniTask.Delay's DelayType.DeltaTime, UnscaledDeltaTime do not work correctly because they can not get deltaTime in editor. Therefore run on EditMode, automatically change DelayType to \`DelayType.Realtime\` that wait for the right time.
* All PlayerLoopTiming run on the timing \`EditorApplication.update\`.
* \`-batchmode\` with \`-quit\` does not work because Unity does not run \`EditorApplication.update\` and quit after a single frame. Instead, don't use \`-quit\` and quit manually with \`EditorApplication.Exit(0)\`.

Compare with Standard Task API
---
UniTask has many standard Task-like APIs. This table shows what the alternative apis are.

Use standard type.

| .NET Type | UniTask Type | 
| --- | --- |
| \`IProgress<T>\` | --- |
| \`CancellationToken\` | --- | 
| \`CancellationTokenSource\` | --- |

Use UniTask type.

| .NET Type | UniTask Type | 
| --- | --- |
| \`Task\`/\`ValueTask\` | \`UniTask\` |
| \`Task<T>\`/\`ValueTask<T>\` | \`UniTask<T>\` |
| \`async void\` | \`async UniTaskVoid\` | 
| \`+= async () => { }\` | \`UniTask.Void\`, \`UniTask.Action\`, \`UniTask.UnityAction\` |
| --- | \`UniTaskCompletionSource\` |
| \`TaskCompletionSource<T>\` | \`UniTaskCompletionSource<T>\`/\`AutoResetUniTaskCompletionSource<T>\` |
| \`ManualResetValueTaskSourceCore<T>\` | \`UniTaskCompletionSourceCore<T>\` |
| \`IValueTaskSource\` | \`IUniTaskSource\` |
| \`IValueTaskSource<T>\` | \`IUniTaskSource<T>\` |
| \`ValueTask.IsCompleted\` | \`UniTask.Status.IsCompleted()\` |
| \`ValueTask<T>.IsCompleted\` | \`UniTask<T>.Status.IsCompleted()\` |
| \`new Progress<T>\` | \`Progress.Create<T>\` |
| \`CancellationToken.Register(UnsafeRegister)\` | \`CancellationToken.RegisterWithoutCaptureExecutionContext\` |
| \`CancellationTokenSource.CancelAfter\` | \`CancellationTokenSource.CancelAfterSlim\` |
| \`Channel.CreateUnbounded<T>(false){ SingleReader = true }\` | \`Channel.CreateSingleConsumerUnbounded<T>\` |
| \`IAsyncEnumerable<T>\` | \`IUniTaskAsyncEnumerable<T>\` |
| \`IAsyncEnumerator<T>\` | \`IUniTaskAsyncEnumerator<T>\` |
| \`IAsyncDisposable\` | \`IUniTaskAsyncDisposable\` |
| \`Task.Delay\` | \`UniTask.Delay\` |
| \`Task.Yield\` | \`UniTask.Yield\` |
| \`Task.Run\` | \`UniTask.RunOnThreadPool\` |
| \`Task.WhenAll\` | \`UniTask.WhenAll\` |
| \`Task.WhenAny\` | \`UniTask.WhenAny\` |
| \`Task.WhenEach\` | \`UniTask.WhenEach\` |
| \`Task.CompletedTask\` | \`UniTask.CompletedTask\` |
| \`Task.FromException\` | \`UniTask.FromException\` |
| \`Task.FromResult\` | \`UniTask.FromResult\` |
| \`Task.FromCanceled\` | \`UniTask.FromCanceled\` |
| \`Task.ContinueWith\` | \`UniTask.ContinueWith\` |
| \`TaskScheduler.UnobservedTaskException\` | \`UniTaskScheduler.UnobservedTaskException\` |

Pooling Configuration
---
UniTask aggressively caches async promise objects to achieve zero allocation (for technical details, see blog post [UniTask v2 — Zero Allocation async/await for Unity, with Asynchronous LINQ](https://medium.com/@neuecc/unitask-v2-zero-allocation-async-await-for-unity-with-asynchronous-linq-1aa9c96aa7dd)). By default, it caches all promises but you can configure \`TaskPool.SetMaxPoolSize\` to your value, the value indicates cache size per type. \`TaskPool.GetCacheSizeInfo\` returns currently cached objects in pool.

\`\`\`csharp
foreach (var (type, size) in TaskPool.GetCacheSizeInfo())
{
    Debug.Log(type + ":" + size);
}
\`\`\`

Allocation on Profiler
---
In UnityEditor the profiler shows allocation of compiler generated AsyncStateMachine but it only occurs in debug(development) build. C# Compiler generates AsyncStateMachine as class on Debug build and as struct on Release build.

Unity supports Code Optimization option starting in 2020.1 (right, footer).

![](https://user-images.githubusercontent.com/46207/89967342-2f944600-dc8c-11ea-99fc-0b74527a16f6.png)

You can change C# compiler optimization to release to remove AsyncStateMachine allocation in development builds. This optimization option can also be set via \`Compilation.CompilationPipeline-codeOptimization\`, and \`Compilation.CodeOptimization\`.

UniTaskSynchronizationContext
---
Unity's default SynchronizationContext(\`UnitySynchronizationContext\`) is a poor implementation for performance. UniTask bypasses \`SynchronizationContext\`(and \`ExecutionContext\`) so it does not use it but if exists in \`async Task\`, still used it. \`UniTaskSynchronizationContext\` is a replacement of \`UnitySynchronizationContext\` which is better for performance.

\`\`\`csharp
public class SyncContextInjecter
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    public static void Inject()
    {
        SynchronizationContext.SetSynchronizationContext(new UniTaskSynchronizationContext());
    }
}
\`\`\`

This is an optional choice and is not always recommended; \`UniTaskSynchronizationContext\` is less performant than \`async UniTask\` and is not a complete UniTask replacement. It also does not guarantee full behavioral compatibility with the \`UnitySynchronizationContext\`.

API References
---
UniTask's API References are hosted at [cysharp.github.io/UniTask](https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.html) by [DocFX](https://dotnet.github.io/docfx/) and [Cysharp/DocfXTemplate](https://github.com/Cysharp/DocfxTemplate).

For example, UniTask's factory methods can be seen at [UniTask#methods](https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.UniTask.html#methods-1). UniTaskAsyncEnumerable's factory/extension methods can be seen at [UniTaskAsyncEnumerable#methods](https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.html#methods-1).

UPM Package
---
### Install via git URL

Requires a version of unity that supports path query parameter for git packages (Unity >= 2019.3.4f1, Unity >= 2020.1a21). You can add \`https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask\` to Package Manager

![image](https://user-images.githubusercontent.com/46207/79450714-3aadd100-8020-11ea-8aae-b8d87fc4d7be.png)

![image](https://user-images.githubusercontent.com/46207/83702872-e0f17c80-a648-11ea-8183-7469dcd4f810.png)

or add \`"com.cysharp.unitask": "https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask"\` to \`Packages/manifest.json\`.

If you want to set a target version, UniTask uses the \`*.*.*\` release tag so you can specify a version like \`#2.1.0\`. For example \`https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask#2.1.0\`.


.NET Core
---
For .NET Core, use NuGet.

> PM> Install-Package [UniTask](https://www.nuget.org/packages/UniTask)

UniTask of .NET Core version is a subset of Unity UniTask with PlayerLoop dependent methods removed.

It runs at higher performance than the standard Task/ValueTask, but you should be careful to ignore the ExecutionContext/SynchronizationContext when using it. \`AsyncLocal\` also does not work because it ignores ExecutionContext.

If you use UniTask internally, but provide ValueTask as an external API, you can write it like the following(Inspired by [PooledAwait](https://github.com/mgravell/PooledAwait)).

\`\`\`csharp
public class ZeroAllocAsyncAwaitInDotNetCore
{
    public ValueTask<int> DoAsync(int x, int y)
    {
        return Core(this, x, y);

        static async UniTask<int> Core(ZeroAllocAsyncAwaitInDotNetCore self, int x, int y)
        {
            // do anything...
            await Task.Delay(TimeSpan.FromSeconds(x + y));
            await UniTask.Yield();

            return 10;
        }
    }
}

// UniTask does not return to original SynchronizationContext but you can use helper \`ReturnToCurrentSynchronizationContext\`.
public ValueTask TestAsync()
{
    await using (UniTask.ReturnToCurrentSynchronizationContext())
    {
        await UniTask.SwitchToThreadPool();
        // do anything..
    }
}
\`\`\`

.NET Core version is intended to allow users to use UniTask as an interface when sharing code with Unity (such as [Cysharp/MagicOnion](https://github.com/Cysharp/MagicOnion/)). .NET Core version of UniTask enables smooth code sharing.

Utility methods such as WhenAll which are equivalent to UniTask are provided as [Cysharp/ValueTaskSupplement](https://github.com/Cysharp/ValueTaskSupplement).

License
---
This library is under the MIT License.
`,legacyHtml:`<div><h1>UniTask</h1>
<p><a rel="noopener noreferrer" href="https://github.com/Cysharp/UniTask/actions"><img src="https://github.com/Cysharp/UniTask/workflows/Build-Debug/badge.svg" alt="GitHub Actions"></a> <a rel="noopener noreferrer" href="https://github.com/Cysharp/UniTask/releases"><img src="https://img.shields.io/github/release/Cysharp/UniTask.svg" alt="Releases"></a> <a rel="noopener noreferrer" href="https://github.com/Cysharp/UniTask/blob/master/README_CN.md"><img src="https://img.shields.io/badge/UniTask-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3-red" alt="Readme_CN"></a></p>
<p>Provides an efficient allocation free async/await integration for Unity.</p>
<ul>
<li>Struct based <code>UniTask&lt;T&gt;</code> and custom AsyncMethodBuilder to achieve zero allocation</li>
<li>Makes all Unity AsyncOperations and Coroutines awaitable</li>
<li>PlayerLoop based task(<code>UniTask.Yield</code>, <code>UniTask.Delay</code>, <code>UniTask.DelayFrame</code>, etc..) that enable replacing all coroutine operations</li>
<li>MonoBehaviour Message Events and uGUI Events as awaitable/async-enumerable</li>
<li>Runs completely on Unity&#39;s PlayerLoop so doesn&#39;t use threads and runs on WebGL, wasm, etc.</li>
<li>Asynchronous LINQ, with Channel and AsyncReactiveProperty</li>
<li>TaskTracker window to prevent memory leaks</li>
<li>Highly compatible behaviour with Task/ValueTask/IValueTaskSource</li>
</ul>
<p>For technical details, see blog post: <a rel="noopener noreferrer" href="https://medium.com/@neuecc/unitask-v2-zero-allocation-async-await-for-unity-with-asynchronous-linq-1aa9c96aa7dd">UniTask v2 — Zero Allocation async/await for Unity, with Asynchronous LINQ
</a><br>For advanced tips, see blog post: <a rel="noopener noreferrer" href="https://medium.com/@neuecc/extends-unitywebrequest-via-async-decorator-pattern-advanced-techniques-of-unitask-ceff9c5ee846">Extends UnityWebRequest via async decorator pattern — Advanced Techniques of UniTask</a></p>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<h2>Table of Contents</h2>
<ul>
<li><a href="#getting-started">Getting started</a></li>
<li><a href="#basics-of-unitask-and-asyncoperation">Basics of UniTask and AsyncOperation</a></li>
<li><a href="#cancellation-and-exception-handling">Cancellation and Exception handling</a></li>
<li><a href="#timeout-handling">Timeout handling</a></li>
<li><a href="#progress">Progress</a></li>
<li><a href="#playerloop">PlayerLoop</a></li>
<li><a href="#async-void-vs-async-unitaskvoid">async void vs async UniTaskVoid</a></li>
<li><a href="#unitasktracker">UniTaskTracker</a></li>
<li><a href="#external-assets">External Assets</a></li>
<li><a href="#asyncenumerable-and-async-linq">AsyncEnumerable and Async LINQ</a></li>
<li><a href="#awaitable-events">Awaitable Events</a></li>
<li><a href="#channel">Channel</a></li>
<li><a href="#vs-awaitable">vs Awaitable</a></li>
<li><a href="#for-unit-testing">For Unit Testing</a></li>
<li><a href="#threadpool-limitation">ThreadPool limitation</a></li>
<li><a href="#ienumeratortounitask-limitation">IEnumerator.ToUniTask limitation</a></li>
<li><a href="#for-unityeditor">For UnityEditor</a></li>
<li><a href="#compare-with-standard-task-api">Compare with Standard Task API</a></li>
<li><a href="#pooling-configuration">Pooling Configuration</a></li>
<li><a href="#allocation-on-profiler">Allocation on Profiler</a></li>
<li><a href="#unitasksynchronizationcontext">UniTaskSynchronizationContext</a></li>
<li><a href="#api-references">API References</a></li>
<li><a href="#upm-package">UPM Package</a><ul>
<li><a href="#install-via-git-url">Install via git URL</a></li>
</ul>
</li>
<li><a href="#net-core">.NET Core</a></li>
<li><a href="#license">License</a></li>
</ul>
<!-- END doctoc generated TOC please keep comment here to allow auto update --><h2>Getting started</h2>
<p>Install via <a href="#upm-package">UPM package</a> with git reference or asset package(<code>UniTask.*.*.*.unitypackage</code>) available in <a rel="noopener noreferrer" href="https://github.com/Cysharp/UniTask/releases">UniTask/releases</a>.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// extension awaiter/methods can be used by this namespace</span>
<span class="hljs-keyword">using</span> Cysharp.Threading.Tasks;

<span class="hljs-comment">// You can return type as struct UniTask&lt;T&gt;(or UniTask), it is unity specialized lightweight alternative of Task&lt;T&gt;</span>
<span class="hljs-comment">// zero allocation and fast excution for zero overhead async/await integrate with Unity</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask&lt;<span class="hljs-built_in">string</span>&gt; <span class="hljs-title">DemoAsync</span>()</span>
{
    <span class="hljs-comment">// You can await Unity&#x27;s AsyncObject</span>
    <span class="hljs-keyword">var</span> asset = <span class="hljs-keyword">await</span> Resources.LoadAsync&lt;TextAsset&gt;(<span class="hljs-string">&quot;foo&quot;</span>);
    <span class="hljs-keyword">var</span> txt = (<span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">&quot;https://...&quot;</span>).SendWebRequest()).downloadHandler.text;
    <span class="hljs-keyword">await</span> SceneManager.LoadSceneAsync(<span class="hljs-string">&quot;scene2&quot;</span>);

    <span class="hljs-comment">// .WithCancellation enables Cancel, GetCancellationTokenOnDestroy synchornizes with lifetime of GameObject</span>
    <span class="hljs-comment">// after Unity 2022.2, you can use \`destroyCancellationToken\` in MonoBehaviour</span>
    <span class="hljs-keyword">var</span> asset2 = <span class="hljs-keyword">await</span> Resources.LoadAsync&lt;TextAsset&gt;(<span class="hljs-string">&quot;bar&quot;</span>).WithCancellation(<span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy());

    <span class="hljs-comment">// .ToUniTask accepts progress callback(and all options), Progress.Create is a lightweight alternative of IProgress&lt;T&gt;</span>
    <span class="hljs-keyword">var</span> asset3 = <span class="hljs-keyword">await</span> Resources.LoadAsync&lt;TextAsset&gt;(<span class="hljs-string">&quot;baz&quot;</span>).ToUniTask(Progress.Create&lt;<span class="hljs-built_in">float</span>&gt;(x =&gt; Debug.Log(x)));

    <span class="hljs-comment">// await frame-based operation like a coroutine</span>
    <span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">100</span>); 

    <span class="hljs-comment">// replacement of yield return new WaitForSeconds/WaitForSecondsRealtime</span>
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">10</span>), ignoreTimeScale: <span class="hljs-literal">false</span>);
    
    <span class="hljs-comment">// yield any playerloop timing(PreUpdate, Update, LateUpdate, etc...)</span>
    <span class="hljs-keyword">await</span> UniTask.Yield(PlayerLoopTiming.PreLateUpdate);

    <span class="hljs-comment">// replacement of yield return null</span>
    <span class="hljs-keyword">await</span> UniTask.Yield();
    <span class="hljs-keyword">await</span> UniTask.NextFrame();

    <span class="hljs-comment">// replacement of WaitForEndOfFrame</span>
<span class="hljs-meta">#<span class="hljs-keyword">if</span> UNITY_2023_1_OR_NEWER</span>
    <span class="hljs-keyword">await</span> UniTask.WaitForEndOfFrame();
<span class="hljs-meta">#<span class="hljs-keyword">else</span></span>
    <span class="hljs-comment">// requires MonoBehaviour(CoroutineRunner))</span>
    <span class="hljs-keyword">await</span> UniTask.WaitForEndOfFrame(<span class="hljs-keyword">this</span>); <span class="hljs-comment">// this is MonoBehaviour</span>
<span class="hljs-meta">#<span class="hljs-keyword">endif</span></span>

    <span class="hljs-comment">// replacement of yield return new WaitForFixedUpdate(same as UniTask.Yield(PlayerLoopTiming.FixedUpdate))</span>
    <span class="hljs-keyword">await</span> UniTask.WaitForFixedUpdate();
    
    <span class="hljs-comment">// replacement of yield return WaitUntil</span>
    <span class="hljs-keyword">await</span> UniTask.WaitUntil(() =&gt; isActive == <span class="hljs-literal">false</span>);

    <span class="hljs-comment">// special helper of WaitUntil</span>
    <span class="hljs-keyword">await</span> UniTask.WaitUntilValueChanged(<span class="hljs-keyword">this</span>, x =&gt; x.isActive);

    <span class="hljs-comment">// You can await IEnumerator coroutines</span>
    <span class="hljs-keyword">await</span> FooCoroutineEnumerator();

    <span class="hljs-comment">// You can await a standard task</span>
    <span class="hljs-keyword">await</span> Task.Run(() =&gt; <span class="hljs-number">100</span>);

    <span class="hljs-comment">// Multithreading, run on ThreadPool under this code</span>
    <span class="hljs-keyword">await</span> UniTask.SwitchToThreadPool();

    <span class="hljs-comment">/* work on ThreadPool */</span>

    <span class="hljs-comment">// return to MainThread(same as \`ObserveOnMainThread\` in UniRx)</span>
    <span class="hljs-keyword">await</span> UniTask.SwitchToMainThread();

    <span class="hljs-comment">// get async webrequest</span>
    <span class="hljs-function"><span class="hljs-keyword">async</span> UniTask&lt;<span class="hljs-built_in">string</span>&gt; <span class="hljs-title">GetTextAsync</span>(<span class="hljs-params">UnityWebRequest req</span>)</span>
    {
        <span class="hljs-keyword">var</span> op = <span class="hljs-keyword">await</span> req.SendWebRequest();
        <span class="hljs-keyword">return</span> op.downloadHandler.text;
    }

    <span class="hljs-keyword">var</span> task1 = GetTextAsync(UnityWebRequest.Get(<span class="hljs-string">&quot;http://google.com&quot;</span>));
    <span class="hljs-keyword">var</span> task2 = GetTextAsync(UnityWebRequest.Get(<span class="hljs-string">&quot;http://bing.com&quot;</span>));
    <span class="hljs-keyword">var</span> task3 = GetTextAsync(UnityWebRequest.Get(<span class="hljs-string">&quot;http://yahoo.com&quot;</span>));

    <span class="hljs-comment">// concurrent async-wait and get results easily by tuple syntax</span>
    <span class="hljs-keyword">var</span> (google, bing, yahoo) = <span class="hljs-keyword">await</span> UniTask.WhenAll(task1, task2, task3);

    <span class="hljs-comment">// shorthand of WhenAll, tuple can await directly</span>
    <span class="hljs-keyword">var</span> (google2, bing2, yahoo2) = <span class="hljs-keyword">await</span> (task1, task2, task3);

    <span class="hljs-comment">// return async-value.(or you can use \`UniTask\`(no result), \`UniTaskVoid\`(fire and forget)).</span>
    <span class="hljs-keyword">return</span> (asset <span class="hljs-keyword">as</span> TextAsset)?.text ?? <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> InvalidOperationException(<span class="hljs-string">&quot;Asset not found&quot;</span>);
}</code></pre><h2>Basics of UniTask and AsyncOperation</h2>
<p>UniTask features rely on C# 7.0(<a rel="noopener noreferrer" href="https://github.com/dotnet/roslyn/blob/master/docs/features/task-types.md">task-like custom async method builder feature</a>) so the required Unity version is after <code>Unity 2018.3</code>, the official lowest version supported is <code>Unity 2018.4.13f1</code>.</p>
<p>Why is UniTask(custom task-like object) required? Because Task is too heavy and not matched to Unity threading (single-thread). UniTask does not use threads and SynchronizationContext/ExecutionContext because Unity&#39;s asynchronous object is automaticaly dispatched by Unity&#39;s engine layer. It achieves faster and lower allocation, and is completely integrated with Unity.</p>
<p>You can await <code>AsyncOperation</code>, <code>ResourceRequest</code>, <code>AssetBundleRequest</code>, <code>AssetBundleCreateRequest</code>, <code>UnityWebRequestAsyncOperation</code>, <code>AsyncGPUReadbackRequest</code>, <code>IEnumerator</code> and others when <code>using Cysharp.Threading.Tasks;</code>.</p>
<p>UniTask provides three pattern of extension methods.</p>
<pre><code class="hljs csharp">* <span class="hljs-keyword">await</span> asyncOperation;
* .WithCancellation(CancellationToken);
* .ToUniTask(IProgress, PlayerLoopTiming, CancellationToken);</code></pre><p><code>WithCancellation</code> is a simple version of <code>ToUniTask</code>, both return <code>UniTask</code>. For details of cancellation, see: <a href="#cancellation-and-exception-handling">Cancellation and Exception handling</a> section.</p>
<blockquote>
<p>Note: await directly is returned from native timing of PlayerLoop but WithCancellation and ToUniTask are returned from specified PlayerLoopTiming. For details of timing, see: <a href="#playerloop">PlayerLoop</a> section.</p>
</blockquote>
<blockquote>
<p>Note: AssetBundleRequest has <code>asset</code> and <code>allAssets</code>, default await returns <code>asset</code>. If you want to get <code>allAssets</code>, you can use <code>AwaitForAllAssets()</code> method.</p>
</blockquote>
<p>The type of <code>UniTask</code> can use utilities like <code>UniTask.WhenAll</code>, <code>UniTask.WhenAny</code>, <code>UniTask.WhenEach</code>. They are like <code>Task.WhenAll</code>/<code>Task.WhenAny</code> but the return type is more useful. They return value tuples so you can deconstruct each result and pass multiple types.</p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">LoadManyAsync</span>()</span>
{
    <span class="hljs-comment">// parallel load.</span>
    <span class="hljs-keyword">var</span> (a, b, c) = <span class="hljs-keyword">await</span> UniTask.WhenAll(
        LoadAsSprite(<span class="hljs-string">&quot;foo&quot;</span>),
        LoadAsSprite(<span class="hljs-string">&quot;bar&quot;</span>),
        LoadAsSprite(<span class="hljs-string">&quot;baz&quot;</span>));
}

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask&lt;Sprite&gt; <span class="hljs-title">LoadAsSprite</span>(<span class="hljs-params"><span class="hljs-built_in">string</span> path</span>)</span>
{
    <span class="hljs-keyword">var</span> resource = <span class="hljs-keyword">await</span> Resources.LoadAsync&lt;Sprite&gt;(path);
    <span class="hljs-keyword">return</span> (resource <span class="hljs-keyword">as</span> Sprite);
}</code></pre><p>If you want to convert a callback to UniTask, you can use <code>UniTaskCompletionSource&lt;T&gt;</code> which is a lightweight edition of <code>TaskCompletionSource&lt;T&gt;</code>. </p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> UniTask&lt;<span class="hljs-built_in">int</span>&gt; <span class="hljs-title">WrapByUniTaskCompletionSource</span>()</span>
{
    <span class="hljs-keyword">var</span> utcs = <span class="hljs-keyword">new</span> UniTaskCompletionSource&lt;<span class="hljs-built_in">int</span>&gt;();

    <span class="hljs-comment">// when complete, call utcs.TrySetResult();</span>
    <span class="hljs-comment">// when failed, call utcs.TrySetException();</span>
    <span class="hljs-comment">// when cancel, call utcs.TrySetCanceled();</span>

    <span class="hljs-keyword">return</span> utcs.Task; <span class="hljs-comment">//return UniTask&lt;int&gt;</span>
}</code></pre><p>You can convert Task -&gt; UniTask: <code>AsUniTask</code>, <code>UniTask</code> -&gt; <code>UniTask&lt;AsyncUnit&gt;</code>: <code>AsAsyncUnitUniTask</code>, <code>UniTask&lt;T&gt;</code> -&gt; <code>UniTask</code>: <code>AsUniTask</code>. <code>UniTask&lt;T&gt;</code> -&gt; <code>UniTask</code>&#39;s conversion cost is free.</p>
<p>If you want to convert async to coroutine, you can use <code>.ToCoroutine()</code>, this is useful if you want to only allow using the coroutine system.</p>
<p>UniTask can not await twice. This is a similar constraint to the <a rel="noopener noreferrer" href="https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.valuetask-1?view=netcore-3.1">ValueTask/IValueTaskSource</a> introduced in .NET Standard 2.1.</p>
<blockquote>
<p>The following operations should never be performed on a ValueTask<TResult> instance:</p>
<ul>
<li>Awaiting the instance multiple times.</li>
<li>Calling AsTask multiple times.</li>
<li>Using .Result or .GetAwaiter().GetResult() when the operation hasn&#39;t yet completed, or using them multiple times.</li>
<li>Using more than one of these techniques to consume the instance.</li>
</ul>
<p>If you do any of the above, the results are undefined.</p>
</blockquote>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> task = UniTask.DelayFrame(<span class="hljs-number">10</span>);
<span class="hljs-keyword">await</span> task;
<span class="hljs-keyword">await</span> task; <span class="hljs-comment">// NG, throws Exception</span></code></pre><p>Store to the class field, you can use <code>UniTask.Lazy</code> that supports calling multiple times. <code>.Preserve()</code> allows for multiple calls (internally cached results). This is useful when there are multiple calls in a function scope.</p>
<p>Also <code>UniTaskCompletionSource</code> can await multiple times and await from many callers.</p>
<h2>Cancellation and Exception handling</h2>
<p>Some UniTask factory methods have a <code>CancellationToken cancellationToken = default</code> parameter. Also some async operations for Unity have <code>WithCancellation(CancellationToken)</code> and <code>ToUniTask(..., CancellationToken cancellation = default)</code> extension methods. </p>
<p>You can pass <code>CancellationToken</code> to parameter by standard <a rel="noopener noreferrer" href="https://docs.microsoft.com/en-us/dotnet/api/system.threading.cancellationtokensource"><code>CancellationTokenSource</code></a>.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> cts = <span class="hljs-keyword">new</span> CancellationTokenSource();

cancelButton.onClick.AddListener(() =&gt;
{
    cts.Cancel();
});

<span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">&quot;http://google.co.jp&quot;</span>).SendWebRequest().WithCancellation(cts.Token);

<span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">1000</span>, cancellationToken: cts.Token);</code></pre><p>CancellationToken can be created by <code>CancellationTokenSource</code> or MonoBehaviour&#39;s extension method <code>GetCancellationTokenOnDestroy</code>.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// this CancellationToken lifecycle is same as GameObject.</span>
<span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">1000</span>, cancellationToken: <span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy());</code></pre><p>For propagate Cancellation, all async method recommend to accept <code>CancellationToken cancellationToken</code> at last argument, and pass <code>CancellationToken</code> from root to end.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">await</span> FooAsync(<span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy());

<span class="hljs-comment">// ---</span>

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">FooAsync</span>(<span class="hljs-params">CancellationToken cancellationToken</span>)</span>
{
    <span class="hljs-keyword">await</span> BarAsync(cancellationToken);
}

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">BarAsync</span>(<span class="hljs-params">CancellationToken cancellationToken</span>)</span>
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>), cancellationToken);
}</code></pre><p><code>CancellationToken</code> means lifecycle of async. You can hold your own lifecycle insteadof default CancellationTokenOnDestroy.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">MyBehaviour</span> : <span class="hljs-title">MonoBehaviour</span>
{
    CancellationTokenSource disableCancellation = <span class="hljs-keyword">new</span> CancellationTokenSource();
    CancellationTokenSource destroyCancellation = <span class="hljs-keyword">new</span> CancellationTokenSource();

    <span class="hljs-function"><span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title">OnEnable</span>()</span>
    {
        <span class="hljs-keyword">if</span> (disableCancellation != <span class="hljs-literal">null</span>)
        {
            disableCancellation.Dispose();
        }
        disableCancellation = <span class="hljs-keyword">new</span> CancellationTokenSource();
    }

    <span class="hljs-function"><span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title">OnDisable</span>()</span>
    {
        disableCancellation.Cancel();
    }

    <span class="hljs-function"><span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title">OnDestroy</span>()</span>
    {
        destroyCancellation.Cancel();
        destroyCancellation.Dispose();
    }
}</code></pre><p>After Unity 2022.2, Unity adds CancellationToken in <a rel="noopener noreferrer" href="https://docs.unity3d.com/ScriptReference/MonoBehaviour-destroyCancellationToken.html">MonoBehaviour.destroyCancellationToken</a> and <a rel="noopener noreferrer" href="https://docs.unity3d.com/ScriptReference/Application-exitCancellationToken.html">Application.exitCancellationToken</a>.</p>
<p>When cancellation is detected, all methods throw <code>OperationCanceledException</code> and propagate upstream. When exception(not limited to <code>OperationCanceledException</code>) is not handled in async method, it is propagated finally to <code>UniTaskScheduler.UnobservedTaskException</code>. The default behaviour of received unhandled exception is to write log as exception. Log level can be changed using <code>UniTaskScheduler.UnobservedExceptionWriteLogType</code>. If you want to use custom behaviour, set an action to <code>UniTaskScheduler.UnobservedTaskException.</code></p>
<p>And also <code>OperationCanceledException</code> is a special exception, this is silently ignored at <code>UnobservedTaskException</code>.</p>
<p>If you want to cancel behaviour in an async UniTask method, throw <code>OperationCanceledException</code> manually.</p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTask&lt;<span class="hljs-built_in">int</span>&gt; <span class="hljs-title">FooAsync</span>()</span>
{
    <span class="hljs-keyword">await</span> UniTask.Yield();
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> OperationCanceledException();
}</code></pre><p>If you handle an exception but want to ignore(propagate to global cancellation handling), use an exception filter.</p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTask&lt;<span class="hljs-built_in">int</span>&gt; <span class="hljs-title">BarAsync</span>()</span>
{
    <span class="hljs-keyword">try</span>
    {
        <span class="hljs-keyword">var</span> x = <span class="hljs-keyword">await</span> FooAsync();
        <span class="hljs-keyword">return</span> x * <span class="hljs-number">2</span>;
    }
    <span class="hljs-keyword">catch</span> (Exception ex) <span class="hljs-keyword">when</span> (!(ex <span class="hljs-keyword">is</span> OperationCanceledException)) <span class="hljs-comment">// when (ex is not OperationCanceledException) at C# 9.0</span>
    {
        <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>;
    }
}</code></pre><p>throws/catch <code>OperationCanceledException</code> is slightly heavy, so if performance is a concern, use <code>UniTask.SuppressCancellationThrow</code> to avoid OperationCanceledException throw. It returns <code>(bool IsCanceled, T Result)</code> instead of throwing.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> (isCanceled, _) = <span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">10</span>, cancellationToken: cts.Token).SuppressCancellationThrow();
<span class="hljs-keyword">if</span> (isCanceled)
{
    <span class="hljs-comment">// ...</span>
}</code></pre><p>Note: Only suppress throws if you call directly into the most source method. Otherwise, the return value will be converted, but the entire pipeline will not suppress throws.</p>
<p>Some features that use Unity&#39;s player loop, such as <code>UniTask.Yield</code> and <code>UniTask.Delay</code> etc, determines CancellationToken state on the player loop. 
This means it does not cancel immediately upon <code>CancellationToken</code> fired. </p>
<p>If you want to change this behaviour, the cancellation to be immediate, set the <code>cancelImmediately</code> flag as an argument.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">await</span> UniTask.Yield(cancellationToken, cancelImmediately: <span class="hljs-literal">true</span>);</code></pre><p>Note: Setting <code>cancelImmediately</code> to true and detecting an immediate cancellation is more costly than the default behavior.
This is because it uses <code>CancellationToken.Register</code>; it is heavier than checking CancellationToken on the player loop.</p>
<h2>Timeout handling</h2>
<p>Timeout is a variation of cancellation. You can set timeout by <code>CancellationTokenSouce.CancelAfterSlim(TimeSpan)</code> and pass CancellationToken to async methods.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> cts = <span class="hljs-keyword">new</span> CancellationTokenSource();
cts.CancelAfterSlim(TimeSpan.FromSeconds(<span class="hljs-number">5</span>)); <span class="hljs-comment">// 5sec timeout.</span>

<span class="hljs-keyword">try</span>
{
    <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">&quot;http://foo&quot;</span>).SendWebRequest().WithCancellation(cts.Token);
}
<span class="hljs-keyword">catch</span> (OperationCanceledException ex)
{
    <span class="hljs-keyword">if</span> (ex.CancellationToken == cts.Token)
    {
        UnityEngine.Debug.Log(<span class="hljs-string">&quot;Timeout&quot;</span>);
    }
}</code></pre><blockquote>
<p><code>CancellationTokenSouce.CancelAfter</code> is a standard api. However in Unity you should not use it because it depends threading timer. <code>CancelAfterSlim</code> is UniTask&#39;s extension methods, it uses PlayerLoop instead.</p>
</blockquote>
<p>If you want to use timeout with other source of cancellation, use <code>CancellationTokenSource.CreateLinkedTokenSource</code>.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> cancelToken = <span class="hljs-keyword">new</span> CancellationTokenSource();
cancelButton.onClick.AddListener(() =&gt;
{
    cancelToken.Cancel(); <span class="hljs-comment">// cancel from button click.</span>
});

<span class="hljs-keyword">var</span> timeoutToken = <span class="hljs-keyword">new</span> CancellationTokenSource();
timeoutToken.CancelAfterSlim(TimeSpan.FromSeconds(<span class="hljs-number">5</span>)); <span class="hljs-comment">// 5sec timeout.</span>

<span class="hljs-keyword">try</span>
{
    <span class="hljs-comment">// combine token</span>
    <span class="hljs-keyword">var</span> linkedTokenSource = CancellationTokenSource.CreateLinkedTokenSource(cancelToken.Token, timeoutToken.Token);

    <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">&quot;http://foo&quot;</span>).SendWebRequest().WithCancellation(linkedTokenSource.Token);
}
<span class="hljs-keyword">catch</span> (OperationCanceledException ex)
{
    <span class="hljs-keyword">if</span> (timeoutToken.IsCancellationRequested)
    {
        UnityEngine.Debug.Log(<span class="hljs-string">&quot;Timeout.&quot;</span>);
    }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (cancelToken.IsCancellationRequested)
    {
        UnityEngine.Debug.Log(<span class="hljs-string">&quot;Cancel clicked.&quot;</span>);
    }
}</code></pre><p>Optimize for reduce allocation of CancellationTokenSource for timeout per call async method, you can use UniTask&#39;s <code>TimeoutController</code>.</p>
<pre><code class="hljs csharp">TimeoutController timeoutController = <span class="hljs-keyword">new</span> TimeoutController(); <span class="hljs-comment">// setup to field for reuse.</span>

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">FooAsync</span>()</span>
{
    <span class="hljs-keyword">try</span>
    {
        <span class="hljs-comment">// you can pass timeoutController.Timeout(TimeSpan) to cancellationToken.</span>
        <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">&quot;http://foo&quot;</span>).SendWebRequest()
            .WithCancellation(timeoutController.Timeout(TimeSpan.FromSeconds(<span class="hljs-number">5</span>)));
        timeoutController.Reset(); <span class="hljs-comment">// call Reset(Stop timeout timer and ready for reuse) when succeed.</span>
    }
    <span class="hljs-keyword">catch</span> (OperationCanceledException ex)
    {
        <span class="hljs-keyword">if</span> (timeoutController.IsTimeout())
        {
            UnityEngine.Debug.Log(<span class="hljs-string">&quot;timeout&quot;</span>);
        }
    }
}</code></pre><p>If you want to use timeout with other source of cancellation, use <code>new TimeoutController(CancellationToken)</code>.</p>
<pre><code class="hljs csharp">TimeoutController timeoutController;
CancellationTokenSource clickCancelSource;

<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">Start</span>()</span>
{
    <span class="hljs-keyword">this</span>.clickCancelSource = <span class="hljs-keyword">new</span> CancellationTokenSource();
    <span class="hljs-keyword">this</span>.timeoutController = <span class="hljs-keyword">new</span> TimeoutController(clickCancelSource);
}</code></pre><p>Note: UniTask has <code>.Timeout</code>, <code>.TimeoutWithoutException</code> methods however, if possible, do not use these, please pass <code>CancellationToken</code>. Because <code>.Timeout</code> work from external of task, can not stop timeoutted task. <code>.Timeout</code> means ignore result when timeout. If you pass a <code>CancellationToken</code> to the method, it will act from inside of the task, so it is possible to stop a running task.</p>
<h2>Progress</h2>
<p>Some async operations for unity have <code>ToUniTask(IProgress&lt;float&gt; progress = null, ...)</code> extension methods. </p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> progress = Progress.Create&lt;<span class="hljs-built_in">float</span>&gt;(x =&gt; Debug.Log(x));

<span class="hljs-keyword">var</span> request = <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">&quot;http://google.co.jp&quot;</span>)
    .SendWebRequest()
    .ToUniTask(progress: progress);</code></pre><p>You should not use standard <code>new System.Progress&lt;T&gt;</code>, because it causes allocation every time. Use <code>Cysharp.Threading.Tasks.Progress</code> instead. This progress factory has two methods, <code>Create</code> and <code>CreateOnlyValueChanged</code>. <code>CreateOnlyValueChanged</code> calls only when the progress value has changed.</p>
<p>Implementing IProgress interface to caller is better as there is no lambda allocation.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Foo</span> : <span class="hljs-title">MonoBehaviour</span>, <span class="hljs-title">IProgress</span>&lt;<span class="hljs-title">float</span>&gt;
{
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Report</span>(<span class="hljs-params"><span class="hljs-built_in">float</span> <span class="hljs-keyword">value</span></span>)</span>
    {
        UnityEngine.Debug.Log(<span class="hljs-keyword">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">WebRequest</span>()</span>
    {
        <span class="hljs-keyword">var</span> request = <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">&quot;http://google.co.jp&quot;</span>)
            .SendWebRequest()
            .ToUniTask(progress: <span class="hljs-keyword">this</span>); <span class="hljs-comment">// pass this</span>
    }
}</code></pre><h2>PlayerLoop</h2>
<p>UniTask is run on a custom <a rel="noopener noreferrer" href="https://docs.unity3d.com/ScriptReference/LowLevel.PlayerLoop.html">PlayerLoop</a>. UniTask&#39;s playerloop based methods (such as <code>Delay</code>, <code>DelayFrame</code>, <code>asyncOperation.ToUniTask</code>, etc...) accept this <code>PlayerLoopTiming</code>.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">public</span> <span class="hljs-built_in">enum</span> PlayerLoopTiming
{
    Initialization = <span class="hljs-number">0</span>,
    LastInitialization = <span class="hljs-number">1</span>,

    EarlyUpdate = <span class="hljs-number">2</span>,
    LastEarlyUpdate = <span class="hljs-number">3</span>,

    FixedUpdate = <span class="hljs-number">4</span>,
    LastFixedUpdate = <span class="hljs-number">5</span>,

    PreUpdate = <span class="hljs-number">6</span>,
    LastPreUpdate = <span class="hljs-number">7</span>,

    Update = <span class="hljs-number">8</span>,
    LastUpdate = <span class="hljs-number">9</span>,

    PreLateUpdate = <span class="hljs-number">10</span>,
    LastPreLateUpdate = <span class="hljs-number">11</span>,

    PostLateUpdate = <span class="hljs-number">12</span>,
    LastPostLateUpdate = <span class="hljs-number">13</span>
    
<span class="hljs-meta">#<span class="hljs-keyword">if</span> UNITY_2020_2_OR_NEWER</span>
    TimeUpdate = <span class="hljs-number">14</span>,
    LastTimeUpdate = <span class="hljs-number">15</span>,
<span class="hljs-meta">#<span class="hljs-keyword">endif</span></span>
}</code></pre><p>It indicates when to run, you can check <a rel="noopener noreferrer" href="https://gist.github.com/neuecc/bc3a1cfd4d74501ad057e49efcd7bdae">PlayerLoopList.md</a> to Unity&#39;s default playerloop and injected UniTask&#39;s custom loop.</p>
<p><code>PlayerLoopTiming.Update</code> is similar to <code>yield return null</code> in a coroutine, but it is called before Update(Update and uGUI events(button.onClick, etc...) are called on <code>ScriptRunBehaviourUpdate</code>, yield return null is called on <code>ScriptRunDelayedDynamicFrameRate</code>). <code>PlayerLoopTiming.FixedUpdate</code> is similar to <code>WaitForFixedUpdate</code>.</p>
<blockquote>
<p><code>PlayerLoopTiming.LastPostLateUpdate</code> is not equivalent to coroutine&#39;s <code>yield return new WaitForEndOfFrame()</code>. Coroutine&#39;s WaitForEndOfFrame seems to run after the PlayerLoop is done. Some methods that require coroutine&#39;s end of frame(<code>Texture2D.ReadPixels</code>, <code>ScreenCapture.CaptureScreenshotAsTexture</code>, <code>CommandBuffer</code>, etc) do not work correctly when replaced with async/await. In these cases, pass MonoBehaviour(coroutine runnner) to <code>UniTask.WaitForEndOfFrame</code>. For example, <code>await UniTask.WaitForEndOfFrame(this);</code> is lightweight allocation free alternative of <code>yield return new WaitForEndOfFrame()</code>.</p>
<p>Note: In Unity 2023.1 or newer, <code>await UniTask.WaitForEndOfFrame();</code> no longer requires MonoBehaviour. It uses <code>UnityEngine.Awaitable.EndOfFrameAsync</code>.</p>
</blockquote>
<p><code>yield return null</code> and <code>UniTask.Yield</code> are similar but different. <code>yield return null</code> always returns next frame but <code>UniTask.Yield</code> returns next called. That is, call <code>UniTask.Yield(PlayerLoopTiming.Update)</code> on <code>PreUpdate</code>, it returns same frame. <code>UniTask.NextFrame()</code> guarantees return next frame, you can expect this to behave exactly the same as <code>yield return null</code>.</p>
<blockquote>
<p>UniTask.Yield(without CancellationToken) is a special type, returns <code>YieldAwaitable</code> and runs on YieldRunner. It is the most lightweight and fastest.</p>
</blockquote>
<p><code>AsyncOperation</code> is returned from native timing. For example, await <code>SceneManager.LoadSceneAsync</code> is returned from <code>EarlyUpdate.UpdatePreloading</code> and after being called, the loaded scene&#39;s <code>Start</code> is called from <code>EarlyUpdate.ScriptRunDelayedStartupFrame</code>. Also <code>await UnityWebRequest</code> is returned from <code>EarlyUpdate.ExecuteMainThreadJobs</code>.</p>
<p>In UniTask, await directly uses native timing, while <code>WithCancellation</code> and <code>ToUniTask</code> use specified timing. This is usually not a particular problem, but with <code>LoadSceneAsync</code>, it causes a different order of Start and continuation after await. So it is recommended not to use <code>LoadSceneAsync.ToUniTask</code>.</p>
<blockquote>
<p>Note: When using Unity 2023.1 or newer, ensure you have <code>using UnityEngine;</code> in the using statements of your file when working with new <code>UnityEngine.Awaitable</code> methods like <code>SceneManager.LoadSceneAsync</code>. 
This prevents compilation errors by avoiding the use of the <code>UnityEngine.AsyncOperation</code> version.</p>
</blockquote>
<p>In the stacktrace, you can check where it is running in playerloop.</p>
<p><img src="https://user-images.githubusercontent.com/46207/83735571-83caea80-a68b-11ea-8d22-5e22864f0d24.png" alt="image"></p>
<p>By default, UniTask&#39;s PlayerLoop is initialized at <code>[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]</code>.</p>
<p>The order in which methods are called in BeforeSceneLoad is nondeterministic, so if you want to use UniTask in other BeforeSceneLoad methods, you should try to initialize it before this.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// AfterAssembliesLoaded is called before BeforeSceneLoad</span>
[<span class="hljs-meta">RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterAssembliesLoaded)</span>]
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">InitUniTaskLoop</span>()</span>
{
    <span class="hljs-keyword">var</span> loop = PlayerLoop.GetCurrentPlayerLoop();
    Cysharp.Threading.Tasks.PlayerLoopHelper.Initialize(<span class="hljs-keyword">ref</span> loop);
}</code></pre><p>If you import Unity&#39;s <code>Entities</code> package, that resets the custom player loop to default at <code>BeforeSceneLoad</code> and injects ECS&#39;s loop. When Unity calls ECS&#39;s inject method after UniTask&#39;s initialize method, UniTask will no longer work.</p>
<p>To solve this issue, you can re-initialize the UniTask PlayerLoop after ECS is initialized.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// Get ECS Loop.</span>
<span class="hljs-keyword">var</span> playerLoop = ScriptBehaviourUpdateOrder.CurrentPlayerLoop;

<span class="hljs-comment">// Setup UniTask&#x27;s PlayerLoop.</span>
PlayerLoopHelper.Initialize(<span class="hljs-keyword">ref</span> playerLoop);</code></pre><p>You can diagnose whether UniTask&#39;s player loop is ready by calling <code>PlayerLoopHelper.IsInjectedUniTaskPlayerLoop()</code>. And also <code>PlayerLoopHelper.DumpCurrentPlayerLoop</code> logs all current playerloops to console.</p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">Start</span>()</span>
{
    UnityEngine.Debug.Log(<span class="hljs-string">&quot;UniTaskPlayerLoop ready? &quot;</span> + PlayerLoopHelper.IsInjectedUniTaskPlayerLoop());
    PlayerLoopHelper.DumpCurrentPlayerLoop();
}</code></pre><p>You can optimize loop cost slightly by remove unuse PlayerLoopTiming injection. You can call <code>PlayerLoopHelper.Initialize(InjectPlayerLoopTimings)</code> on initialize.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> loop = PlayerLoop.GetCurrentPlayerLoop();
PlayerLoopHelper.Initialize(<span class="hljs-keyword">ref</span> loop, InjectPlayerLoopTimings.Minimum); <span class="hljs-comment">// minimum is Update | FixedUpdate | LastPostLateUpdate</span></code></pre><p><code>InjectPlayerLoopTimings</code> has three preset, <code>All</code> and <code>Standard</code>(All without last except LastPostLateUpdate), <code>Minimum</code>(<code>Update | FixedUpdate | LastPostLateUpdate</code>). Default is All and you can combine custom inject timings like <code>InjectPlayerLoopTimings.Update | InjectPlayerLoopTimings.FixedUpdate | InjectPlayerLoopTimings.PreLateUpdate</code>.</p>
<p>You can make error to use uninjected <code>PlayerLoopTiming</code> by <a rel="noopener noreferrer" href="https://github.com/dotnet/roslyn-analyzers/blob/master/src/Microsoft.CodeAnalysis.BannedApiAnalyzers/BannedApiAnalyzers.Help.md">Microsoft.CodeAnalysis.BannedApiAnalyzers</a>. For example, you can setup <code>BannedSymbols.txt</code> like this for <code>InjectPlayerLoopTimings.Minimum</code>.</p>
<pre><code class="hljs txt">F:Cysharp.Threading.Tasks.PlayerLoopTiming.Initialization; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastInitialization; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.EarlyUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastEarlyUpdate; Isn&#x27;t injected this PlayerLoop in this project.d
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastFixedUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PreUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastPreUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PreLateUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastPreLateUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PostLateUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.TimeUpdate; Isn&#x27;t injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastTimeUpdate; Isn&#x27;t injected this PlayerLoop in this project.</code></pre><p>You can configure <code>RS0030</code> severity to error.</p>
<p><img src="https://user-images.githubusercontent.com/46207/109150837-bb933880-77ac-11eb-85ba-4fd15819dbd0.png" alt="image"></p>
<h2>async void vs async UniTaskVoid</h2>
<p><code>async void</code> is a standard C# task system so it does not run on UniTask systems. It is better not to use it. <code>async UniTaskVoid</code> is a lightweight version of <code>async UniTask</code> because it does not have awaitable completion and reports errors immediately to <code>UniTaskScheduler.UnobservedTaskException</code>. If you don&#39;t require awaiting (fire and forget), using <code>UniTaskVoid</code> is better. Unfortunately to dismiss warning, you&#39;re required to call <code>Forget()</code>.</p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">FireAndForgetMethod</span>()</span>
{
    <span class="hljs-comment">// do anything...</span>
    <span class="hljs-keyword">await</span> UniTask.Yield();
}

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Caller</span>()</span>
{
    FireAndForgetMethod().Forget();
}</code></pre><p>Also UniTask has the <code>Forget</code> method, it is similar to <code>UniTaskVoid</code> and has the same effects. However <code>UniTaskVoid</code> is more efficient if you completely don&#39;t use <code>await</code>。</p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTask <span class="hljs-title">DoAsync</span>()</span>
{
    <span class="hljs-comment">// do anything...</span>
    <span class="hljs-keyword">await</span> UniTask.Yield();
}

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Caller</span>()</span>
{
    DoAsync().Forget();
}</code></pre><p>To use an async lambda registered to an event, don&#39;t use <code>async void</code>. Instead you can use <code>UniTask.Action</code> or <code>UniTask.UnityAction</code>, both of which create a delegate via <code>async UniTaskVoid</code> lambda.</p>
<pre><code class="hljs csharp">Action actEvent;
UnityAction unityEvent; <span class="hljs-comment">// especially used in uGUI</span>

<span class="hljs-comment">// Bad: async void</span>
actEvent += <span class="hljs-keyword">async</span> () =&gt; { };
unityEvent += <span class="hljs-keyword">async</span> () =&gt; { };

<span class="hljs-comment">// Ok: create Action delegate by lambda</span>
actEvent += UniTask.Action(<span class="hljs-keyword">async</span> () =&gt; { <span class="hljs-keyword">await</span> UniTask.Yield(); });
unityEvent += UniTask.UnityAction(<span class="hljs-keyword">async</span> () =&gt; { <span class="hljs-keyword">await</span> UniTask.Yield(); });</code></pre><p><code>UniTaskVoid</code> can also be used in MonoBehaviour&#39;s <code>Start</code> method.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">class</span> <span class="hljs-title">Sample</span> : <span class="hljs-title">MonoBehaviour</span>
{
    <span class="hljs-function"><span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">Start</span>()</span>
    {
        <span class="hljs-comment">// async init code.</span>
    }
}</code></pre><h2>UniTaskTracker</h2>
<p>useful for checking (leaked) UniTasks. You can open tracker window in <code>Window -&gt; UniTask Tracker</code>.</p>
<p><img src="https://user-images.githubusercontent.com/46207/83527073-4434bf00-a522-11ea-86e9-3b3975b26266.png" alt="image"></p>
<ul>
<li>Enable AutoReload(Toggle) - Reload automatically.</li>
<li>Reload - Reload view.</li>
<li>GC.Collect - Invoke GC.Collect.</li>
<li>Enable Tracking(Toggle) - Start to track async/await UniTask. Performance impact: low.</li>
<li>Enable StackTrace(Toggle) - Capture StackTrace when task is started. Performance impact: high.</li>
</ul>
<p>UniTaskTracker is intended for debugging use only as enabling tracking and capturing stacktraces is useful but has a heavy performance impact. Recommended usage is to enable both tracking and stacktraces to find task leaks and to disable them both when done.</p>
<h2>External Assets</h2>
<p>By default, UniTask supports TextMeshPro(<code>BindTo(TMP_Text)</code> and <code>TMP_InputField</code> event extensions like standard uGUI <code>InputField</code>), DOTween(<code>Tween</code> as awaitable) and Addressables(<code>AsyncOperationHandle</code> and <code>AsyncOperationHandle&lt;T&gt;</code> as awaitable).</p>
<p>There are defined in separated asmdefs like <code>UniTask.TextMeshPro</code>, <code>UniTask.DOTween</code>, <code>UniTask.Addressables</code>.</p>
<p>TextMeshPro and Addressables support are automatically enabled when importing their packages from package manager. 
However for DOTween support, after importing from the <a rel="noopener noreferrer" href="https://assetstore.unity.com/packages/tools/animation/dotween-hotween-v2-27676r">DOTWeen assets</a> and define the scripting define symbol <code>UNITASK_DOTWEEN_SUPPORT</code> to enable it.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// sequential</span>
<span class="hljs-keyword">await</span> transform.DOMoveX(<span class="hljs-number">2</span>, <span class="hljs-number">10</span>);
<span class="hljs-keyword">await</span> transform.DOMoveZ(<span class="hljs-number">5</span>, <span class="hljs-number">20</span>);

<span class="hljs-comment">// parallel with cancellation</span>
<span class="hljs-keyword">var</span> ct = <span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy();

<span class="hljs-keyword">await</span> UniTask.WhenAll(
    transform.DOMoveX(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>).WithCancellation(ct),
    transform.DOScale(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>).WithCancellation(ct));</code></pre><p>DOTween support&#39;s default behaviour(<code>await</code>, <code>WithCancellation</code>, <code>ToUniTask</code>) awaits tween is killed. It works on both Complete(true/false) and Kill(true/false). But if you want to reuse tweens (<code>SetAutoKill(false)</code>), it does not work as expected. If you want to await for another timing, the following extension methods exist in Tween, <code>AwaitForComplete</code>, <code>AwaitForPause</code>, <code>AwaitForPlay</code>, <code>AwaitForRewind</code>, <code>AwaitForStepComplete</code>.</p>
<h2>AsyncEnumerable and Async LINQ</h2>
<p>Unity 2020.2 supports C# 8.0 so you can use <code>await foreach</code>. This is the new Update notation in the async era.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// Unity 2020.2, C# 8.0</span>
<span class="hljs-keyword">await</span> <span class="hljs-keyword">foreach</span> (<span class="hljs-keyword">var</span> _ <span class="hljs-keyword">in</span> UniTaskAsyncEnumerable.EveryUpdate().WithCancellation(token))
{
    Debug.Log(<span class="hljs-string">&quot;Update() &quot;</span> + Time.frameCount);
}</code></pre><p>In a C# 7.3 environment, you can use the <code>ForEachAsync</code> method to work in almost the same way.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// C# 7.3(Unity 2018.3~)</span>
<span class="hljs-keyword">await</span> UniTaskAsyncEnumerable.EveryUpdate().ForEachAsync(_ =&gt;
{
    Debug.Log(<span class="hljs-string">&quot;Update() &quot;</span> + Time.frameCount);
}, token);</code></pre><p><code>UniTask.WhenEach</code> that is similar to .NET 9&#39;s <code>Task.WhenEach</code> can consume new way for await multiple tasks.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">await</span> <span class="hljs-keyword">foreach</span> (<span class="hljs-keyword">var</span> result <span class="hljs-keyword">in</span> UniTask.WhenEach(task1, task2, task3))
{
    <span class="hljs-comment">// The result is of type WhenEachResult&lt;T&gt;.</span>
    <span class="hljs-comment">// It contains either \`T Result\` or \`Exception Exception\`.</span>
    <span class="hljs-comment">// You can check \`IsCompletedSuccessfully\` or \`IsFaulted\` to determine whether to access \`.Result\` or \`.Exception\`.</span>
    <span class="hljs-comment">// If you want to throw an exception when \`IsFaulted\` and retrieve the result when successful, use \`GetResult()\`.</span>
    Debug.Log(result.GetResult());
}</code></pre><p>UniTaskAsyncEnumerable implements asynchronous LINQ, similar to LINQ in <code>IEnumerable&lt;T&gt;</code> or Rx in <code>IObservable&lt;T&gt;</code>. All standard LINQ query operators can be applied to asynchronous streams. For example, the following code shows how to apply a Where filter to a button-click asynchronous stream that runs once every two clicks.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">await</span> okButton.OnClickAsAsyncEnumerable().Where((x, i) =&gt; i % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>).ForEachAsync(_ =&gt;
{
});</code></pre><p>Fire and Forget style(for example, event handling), you can also use <code>Subscribe</code>.</p>
<pre><code class="hljs csharp">okButton.OnClickAsAsyncEnumerable().Where((x, i) =&gt; i % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>).Subscribe(_ =&gt;
{
});</code></pre><p>Async LINQ is enabled when <code>using Cysharp.Threading.Tasks.Linq;</code>, and <code>UniTaskAsyncEnumerable</code> is defined in <code>UniTask.Linq</code> asmdef.</p>
<p>It&#39;s closer to UniRx (Reactive Extensions), but UniTaskAsyncEnumerable is a pull-based asynchronous stream, whereas Rx was a push-based asynchronous stream. Note that although similar, the characteristics are different and the details behave differently along with them.</p>
<p><code>UniTaskAsyncEnumerable</code> is the entry point like <code>Enumerable</code>. In addition to the standard query operators, there are other generators for Unity such as <code>EveryUpdate</code>, <code>Timer</code>, <code>TimerFrame</code>, <code>Interval</code>, <code>IntervalFrame</code>, and <code>EveryValueChanged</code>. And also added additional UniTask original query operators like <code>Append</code>, <code>Prepend</code>, <code>DistinctUntilChanged</code>, <code>ToHashSet</code>, <code>Buffer</code>, <code>CombineLatest</code>,<code>Merge</code> <code>Do</code>, <code>Never</code>, <code>ForEachAsync</code>, <code>Pairwise</code>, <code>Publish</code>, <code>Queue</code>, <code>Return</code>, <code>SkipUntil</code>, <code>TakeUntil</code>, <code>SkipUntilCanceled</code>, <code>TakeUntilCanceled</code>, <code>TakeLast</code>, <code>Subscribe</code>.</p>
<p>The method with Func as an argument has three additional overloads, <code>***Await</code>, <code>***AwaitWithCancellation</code>.</p>
<pre><code class="hljs csharp">Select(Func&lt;T, TR&gt; selector)
SelectAwait(Func&lt;T, UniTask&lt;TR&gt;&gt; selector)
SelectAwaitWithCancellation(Func&lt;T, CancellationToken, UniTask&lt;TR&gt;&gt; selector)</code></pre><p>If you want to use the <code>async</code> method inside the func, use the <code>***Await</code> or <code>***AwaitWithCancellation</code>.</p>
<p>How to create an async iterator: C# 8.0 supports async iterator(<code>async yield return</code>) but it only allows <code>IAsyncEnumerable&lt;T&gt;</code> and of course requires C# 8.0. UniTask supports <code>UniTaskAsyncEnumerable.Create</code> method to create custom async iterator.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// IAsyncEnumerable, C# 8.0 version of async iterator. ( do not use this style, IAsyncEnumerable is not controled in UniTask).</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> IAsyncEnumerable&lt;<span class="hljs-built_in">int</span>&gt; <span class="hljs-title">MyEveryUpdate</span>(<span class="hljs-params">[EnumeratorCancellation]CancellationToken cancelationToken = <span class="hljs-literal">default</span></span>)</span>
{
    <span class="hljs-keyword">var</span> frameCount = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">await</span> UniTask.Yield();
    <span class="hljs-keyword">while</span> (!token.IsCancellationRequested)
    {
        <span class="hljs-keyword">yield</span> <span class="hljs-keyword">return</span> frameCount++;
        <span class="hljs-keyword">await</span> UniTask.Yield();
    }
}

<span class="hljs-comment">// UniTaskAsyncEnumerable.Create and use \`await writer.YieldAsync\` instead of \`yield return\`.</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">IUniTaskAsyncEnumerable</span>&lt;<span class="hljs-title">int</span>&gt; <span class="hljs-title">MyEveryUpdate</span>()</span>
{
    <span class="hljs-comment">// writer(IAsyncWriter&lt;T&gt;) has \`YieldAsync(value)\` method.</span>
    <span class="hljs-keyword">return</span> UniTaskAsyncEnumerable.Create&lt;<span class="hljs-built_in">int</span>&gt;(<span class="hljs-keyword">async</span> (writer, token) =&gt;
    {
        <span class="hljs-keyword">var</span> frameCount = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">await</span> UniTask.Yield();
        <span class="hljs-keyword">while</span> (!token.IsCancellationRequested)
        {
            <span class="hljs-keyword">await</span> writer.YieldAsync(frameCount++); <span class="hljs-comment">// instead of \`yield return\`</span>
            <span class="hljs-keyword">await</span> UniTask.Yield();
        }
    });
}</code></pre><h2>Awaitable Events</h2>
<p>All uGUI component implements <code>***AsAsyncEnumerable</code> to convert asynchronous streams of events.</p>
<pre><code class="hljs csharp"><span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>()</span>
{
    <span class="hljs-comment">// In default, used button.GetCancellationTokenOnDestroy to manage lieftime of async</span>
    <span class="hljs-keyword">await</span> button.OnClickAsync();
    <span class="hljs-keyword">await</span> button.OnClickAsync();
    <span class="hljs-keyword">await</span> button.OnClickAsync();
    Debug.Log(<span class="hljs-string">&quot;Three times clicked&quot;</span>);
}

<span class="hljs-comment">// more efficient way</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>()</span>
{
    <span class="hljs-keyword">using</span> (<span class="hljs-keyword">var</span> handler = button.GetAsyncClickEventHandler())
    {
        <span class="hljs-keyword">await</span> handler.OnClickAsync();
        <span class="hljs-keyword">await</span> handler.OnClickAsync();
        <span class="hljs-keyword">await</span> handler.OnClickAsync();
        Debug.Log(<span class="hljs-string">&quot;Three times clicked&quot;</span>);
    }
}

<span class="hljs-comment">// use async LINQ</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>(<span class="hljs-params">CancellationToken token</span>)</span>
{
    <span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().Take(<span class="hljs-number">3</span>).Last();
    Debug.Log(<span class="hljs-string">&quot;Three times clicked&quot;</span>);
}

<span class="hljs-comment">// use async LINQ2</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>(<span class="hljs-params">CancellationToken token</span>)</span>
{
    <span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().Take(<span class="hljs-number">3</span>).ForEachAsync(_ =&gt;
    {
        Debug.Log(<span class="hljs-string">&quot;Every clicked&quot;</span>);
    });
    Debug.Log(<span class="hljs-string">&quot;Three times clicked, complete.&quot;</span>);
}</code></pre><p>All MonoBehaviour message events can convert async-streams by <code>AsyncTriggers</code> that can be enabled by <code>using Cysharp.Threading.Tasks.Triggers;</code>. AsyncTrigger can be created using <code>GetAsync***Trigger</code> and triggers itself as UniTaskAsyncEnumerable.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> trigger = <span class="hljs-keyword">this</span>.GetOnCollisionEnterAsyncHandler();
<span class="hljs-keyword">await</span> trigger.OnCollisionEnterAsync();
<span class="hljs-keyword">await</span> trigger.OnCollisionEnterAsync();
<span class="hljs-keyword">await</span> trigger.OnCollisionEnterAsync();

<span class="hljs-comment">// every moves.</span>
<span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.GetAsyncMoveTrigger().ForEachAsync(axisEventData =&gt;
{
});</code></pre><p><code>AsyncReactiveProperty</code>, <code>AsyncReadOnlyReactiveProperty</code> is UniTask&#39;s version of ReactiveProperty. <code>BindTo</code> extension method of <code>IUniTaskAsyncEnumerable&lt;T&gt;</code> for binding asynchronous stream values to Unity components(Text/Selectable/TMP/Text).</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">var</span> rp = <span class="hljs-keyword">new</span> AsyncReactiveProperty&lt;<span class="hljs-built_in">int</span>&gt;(<span class="hljs-number">99</span>);

<span class="hljs-comment">// AsyncReactiveProperty itself is IUniTaskAsyncEnumerable, you can query by LINQ</span>
rp.ForEachAsync(x =&gt;
{
    Debug.Log(x);
}, <span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy()).Forget();

rp.Value = <span class="hljs-number">10</span>; <span class="hljs-comment">// push 10 to all subscriber</span>
rp.Value = <span class="hljs-number">11</span>; <span class="hljs-comment">// push 11 to all subscriber</span>

<span class="hljs-comment">// WithoutCurrent ignore initial value</span>
<span class="hljs-comment">// BindTo bind stream value to unity components.</span>
rp.WithoutCurrent().BindTo(<span class="hljs-keyword">this</span>.textComponent);

<span class="hljs-keyword">await</span> rp.WaitAsync(); <span class="hljs-comment">// wait until next value set</span>

<span class="hljs-comment">// also exists ToReadOnlyAsyncReactiveProperty</span>
<span class="hljs-keyword">var</span> rp2 = <span class="hljs-keyword">new</span> AsyncReactiveProperty&lt;<span class="hljs-built_in">int</span>&gt;(<span class="hljs-number">99</span>);
<span class="hljs-keyword">var</span> rorp = rp.CombineLatest(rp2, (x, y) =&gt; (x, y)).ToReadOnlyAsyncReactiveProperty(CancellationToken.None);</code></pre><p>A pull-type asynchronous stream does not get the next values until the asynchronous processing in the sequence is complete. This could spill data from push-type events such as buttons.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// can not get click event during 3 seconds complete.</span>
<span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().ForEachAwaitAsync(<span class="hljs-keyword">async</span> x =&gt;
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>));
});</code></pre><p>It is useful (prevent double-click) but not useful sometimes.</p>
<p>Using the <code>Queue()</code> method will also queue events during asynchronous processing.</p>
<pre><code class="hljs csharp"><span class="hljs-comment">// queued message in asynchronous processing</span>
<span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().Queue().ForEachAwaitAsync(<span class="hljs-keyword">async</span> x =&gt;
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>));
});</code></pre><p>Or use <code>Subscribe</code>, fire and forget style.</p>
<pre><code class="hljs csharp">button.OnClickAsAsyncEnumerable().Subscribe(<span class="hljs-keyword">async</span> x =&gt;
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>));
});</code></pre><h2>Channel</h2>
<p><code>Channel</code> is the same as <a rel="noopener noreferrer" href="https://docs.microsoft.com/en-us/dotnet/api/system.threading.channels?view=netcore-3.1">System.Threading.Tasks.Channels</a> which is similar to a GoLang Channel.</p>
<p>Currently it only supports multiple-producer, single-consumer unbounded channels. It can create by <code>Channel.CreateSingleConsumerUnbounded&lt;T&gt;()</code>.</p>
<p>For producer(<code>.Writer</code>), use <code>TryWrite</code> to push value and <code>TryComplete</code> to complete channel. For consumer(<code>.Reader</code>), use <code>TryRead</code>, <code>WaitToReadAsync</code>, <code>ReadAsync</code>, <code>Completion</code> and <code>ReadAllAsync</code> to read queued messages.</p>
<p><code>ReadAllAsync</code> returns <code>IUniTaskAsyncEnumerable&lt;T&gt;</code> so query LINQ operators. Reader only allows single-consumer but uses <code>.Publish()</code> query operator to enable multicast message. For example, make pub/sub utility.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">AsyncMessageBroker</span>&lt;<span class="hljs-title">T</span>&gt; : <span class="hljs-title">IDisposable</span>
{
    Channel&lt;T&gt; channel;

    IConnectableUniTaskAsyncEnumerable&lt;T&gt; multicastSource;
    IDisposable connection;

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">AsyncMessageBroker</span>()</span>
    {
        channel = Channel.CreateSingleConsumerUnbounded&lt;T&gt;();
        multicastSource = channel.Reader.ReadAllAsync().Publish();
        connection = multicastSource.Connect(); <span class="hljs-comment">// Publish returns IConnectableUniTaskAsyncEnumerable.</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Publish</span>(<span class="hljs-params">T <span class="hljs-keyword">value</span></span>)</span>
    {
        channel.Writer.TryWrite(<span class="hljs-keyword">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> IUniTaskAsyncEnumerable&lt;T&gt; <span class="hljs-title">Subscribe</span>()</span>
    {
        <span class="hljs-keyword">return</span> multicastSource;
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Dispose</span>()</span>
    {
        channel.Writer.TryComplete();
        connection.Dispose();
    }
}</code></pre><h2>vs Awaitable</h2>
<p>Unity 6 introduces the awaitable type, <a rel="noopener noreferrer" href="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Awaitable.html">Awaitable</a>. To put it simply, Awaitable can be considered a subset of UniTask, and in fact, Awaitable&#39;s design was influenced by UniTask. It should be able to handle PlayerLoop-based awaits, pooled Tasks, and support for cancellation with <code>CancellationToken</code> in a similar way. With its inclusion in the standard library, you may wonder whether to continue using UniTask or migrate to Awaitable. Here&#39;s a brief guide.</p>
<p>First, the functionality provided by Awaitable is equivalent to what coroutines offer. Instead of <code>yield return</code>, you use await; <code>await NextFrameAsync()</code> replaces <code>yield return null</code>; and there are equivalents for <code>WaitForSeconds</code> and <code>EndOfFrame</code>. However, that&#39;s the extent of it. Being coroutine-based in terms of functionality, it lacks Task-based features. In practical application development using async/await, operations like <code>WhenAll</code> are essential. Additionally, UniTask enables many frame-based operations (such as <code>DelayFrame</code>) and more flexible PlayerLoopTiming control, which are not available in Awaitable. Of course, there&#39;s no Tracker Window either.</p>
<p>Therefore, I recommend using UniTask for application development. UniTask is a superset of Awaitable and includes many essential features. For library development, where you want to avoid external dependencies, using Awaitable as a return type for methods would be appropriate. Awaitable can be converted to UniTask using <code>AsUniTask</code>, so there&#39;s no issue in handling Awaitable-based functionality within the UniTask library. Of course, if you don&#39;t need to worry about dependencies, using UniTask would be the best choice even for library development.</p>
<h2>For Unit Testing</h2>
<p>Unity&#39;s <code>[UnityTest]</code> attribute can test coroutine(IEnumerator) but can not test async. <code>UniTask.ToCoroutine</code> bridges async/await to coroutine so you can test async methods.</p>
<pre><code class="hljs csharp">[<span class="hljs-meta">UnityTest</span>]
<span class="hljs-function"><span class="hljs-keyword">public</span> IEnumerator <span class="hljs-title">DelayIgnore</span>()</span> =&gt; UniTask.ToCoroutine(<span class="hljs-keyword">async</span> () =&gt;
{
    <span class="hljs-keyword">var</span> time = Time.realtimeSinceStartup;

    Time.timeScale = <span class="hljs-number">0.5f</span>;
    <span class="hljs-keyword">try</span>
    {
        <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>), ignoreTimeScale: <span class="hljs-literal">true</span>);

        <span class="hljs-keyword">var</span> elapsed = Time.realtimeSinceStartup - time;
        Assert.AreEqual(<span class="hljs-number">3</span>, (<span class="hljs-built_in">int</span>)Math.Round(TimeSpan.FromSeconds(elapsed).TotalSeconds, MidpointRounding.ToEven));
    }
    <span class="hljs-keyword">finally</span>
    {
        Time.timeScale = <span class="hljs-number">1.0f</span>;
    }
});</code></pre><p>UniTask&#39;s own unit tests are written using Unity Test Runner and <a rel="noopener noreferrer" href="https://github.com/Cysharp/RuntimeUnitTestToolkit">Cysharp/RuntimeUnitTestToolkit</a> to integrate with CI and check if IL2CPP is working.</p>
<h2>ThreadPool limitation</h2>
<p>Most UniTask methods run on a single thread (PlayerLoop), with only <code>UniTask.Run</code>(<code>Task.Run</code> equivalent) and <code>UniTask.SwitchToThreadPool</code> running on a thread pool. If you use a thread pool, it won&#39;t work with WebGL and so on.</p>
<p><code>UniTask.Run</code> is now deprecated. You can use <code>UniTask.RunOnThreadPool</code> instead. And also consider whether you can use <code>UniTask.Create</code> or <code>UniTask.Void</code>.</p>
<h2>IEnumerator.ToUniTask limitation</h2>
<p>You can convert coroutine(IEnumerator) to UniTask(or await directly) but it has some limitations.</p>
<ul>
<li><code>WaitForEndOfFrame</code>/<code>WaitForFixedUpdate</code>/<code>Coroutine</code> is not supported.</li>
<li>Consuming loop timing is not the same as <code>StartCoroutine</code>, it uses the specified <code>PlayerLoopTiming</code> and the default <code>PlayerLoopTiming.Update</code> is run before MonoBehaviour&#39;s <code>Update</code> and <code>StartCoroutine</code>&#39;s loop.</li>
</ul>
<p>If you want fully compatible conversion from coroutine to async, use the <code>IEnumerator.ToUniTask(MonoBehaviour coroutineRunner)</code> overload. It executes StartCoroutine on an instance of the argument MonoBehaviour and waits for it to complete in UniTask.</p>
<h2>For UnityEditor</h2>
<p>UniTask can run on Unity Editor like an Editor Coroutine. However, there are some limitations.</p>
<ul>
<li>UniTask.Delay&#39;s DelayType.DeltaTime, UnscaledDeltaTime do not work correctly because they can not get deltaTime in editor. Therefore run on EditMode, automatically change DelayType to <code>DelayType.Realtime</code> that wait for the right time.</li>
<li>All PlayerLoopTiming run on the timing <code>EditorApplication.update</code>.</li>
<li><code>-batchmode</code> with <code>-quit</code> does not work because Unity does not run <code>EditorApplication.update</code> and quit after a single frame. Instead, don&#39;t use <code>-quit</code> and quit manually with <code>EditorApplication.Exit(0)</code>.</li>
</ul>
<h2>Compare with Standard Task API</h2>
<p>UniTask has many standard Task-like APIs. This table shows what the alternative apis are.</p>
<p>Use standard type.</p>
<table>
<thead>
<tr>
<th>.NET Type</th>
<th>UniTask Type</th>
</tr>
</thead>
<tbody><tr>
<td><code>IProgress&lt;T&gt;</code></td>
<td>---</td>
</tr>
<tr>
<td><code>CancellationToken</code></td>
<td>---</td>
</tr>
<tr>
<td><code>CancellationTokenSource</code></td>
<td>---</td>
</tr>
</tbody></table>
<p>Use UniTask type.</p>
<table>
<thead>
<tr>
<th>.NET Type</th>
<th>UniTask Type</th>
</tr>
</thead>
<tbody><tr>
<td><code>Task</code>/<code>ValueTask</code></td>
<td><code>UniTask</code></td>
</tr>
<tr>
<td><code>Task&lt;T&gt;</code>/<code>ValueTask&lt;T&gt;</code></td>
<td><code>UniTask&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>async void</code></td>
<td><code>async UniTaskVoid</code></td>
</tr>
<tr>
<td><code>+= async () =&gt; { }</code></td>
<td><code>UniTask.Void</code>, <code>UniTask.Action</code>, <code>UniTask.UnityAction</code></td>
</tr>
<tr>
<td>---</td>
<td><code>UniTaskCompletionSource</code></td>
</tr>
<tr>
<td><code>TaskCompletionSource&lt;T&gt;</code></td>
<td><code>UniTaskCompletionSource&lt;T&gt;</code>/<code>AutoResetUniTaskCompletionSource&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>ManualResetValueTaskSourceCore&lt;T&gt;</code></td>
<td><code>UniTaskCompletionSourceCore&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>IValueTaskSource</code></td>
<td><code>IUniTaskSource</code></td>
</tr>
<tr>
<td><code>IValueTaskSource&lt;T&gt;</code></td>
<td><code>IUniTaskSource&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>ValueTask.IsCompleted</code></td>
<td><code>UniTask.Status.IsCompleted()</code></td>
</tr>
<tr>
<td><code>ValueTask&lt;T&gt;.IsCompleted</code></td>
<td><code>UniTask&lt;T&gt;.Status.IsCompleted()</code></td>
</tr>
<tr>
<td><code>new Progress&lt;T&gt;</code></td>
<td><code>Progress.Create&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>CancellationToken.Register(UnsafeRegister)</code></td>
<td><code>CancellationToken.RegisterWithoutCaptureExecutionContext</code></td>
</tr>
<tr>
<td><code>CancellationTokenSource.CancelAfter</code></td>
<td><code>CancellationTokenSource.CancelAfterSlim</code></td>
</tr>
<tr>
<td><code>Channel.CreateUnbounded&lt;T&gt;(false){ SingleReader = true }</code></td>
<td><code>Channel.CreateSingleConsumerUnbounded&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>IAsyncEnumerable&lt;T&gt;</code></td>
<td><code>IUniTaskAsyncEnumerable&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>IAsyncEnumerator&lt;T&gt;</code></td>
<td><code>IUniTaskAsyncEnumerator&lt;T&gt;</code></td>
</tr>
<tr>
<td><code>IAsyncDisposable</code></td>
<td><code>IUniTaskAsyncDisposable</code></td>
</tr>
<tr>
<td><code>Task.Delay</code></td>
<td><code>UniTask.Delay</code></td>
</tr>
<tr>
<td><code>Task.Yield</code></td>
<td><code>UniTask.Yield</code></td>
</tr>
<tr>
<td><code>Task.Run</code></td>
<td><code>UniTask.RunOnThreadPool</code></td>
</tr>
<tr>
<td><code>Task.WhenAll</code></td>
<td><code>UniTask.WhenAll</code></td>
</tr>
<tr>
<td><code>Task.WhenAny</code></td>
<td><code>UniTask.WhenAny</code></td>
</tr>
<tr>
<td><code>Task.WhenEach</code></td>
<td><code>UniTask.WhenEach</code></td>
</tr>
<tr>
<td><code>Task.CompletedTask</code></td>
<td><code>UniTask.CompletedTask</code></td>
</tr>
<tr>
<td><code>Task.FromException</code></td>
<td><code>UniTask.FromException</code></td>
</tr>
<tr>
<td><code>Task.FromResult</code></td>
<td><code>UniTask.FromResult</code></td>
</tr>
<tr>
<td><code>Task.FromCanceled</code></td>
<td><code>UniTask.FromCanceled</code></td>
</tr>
<tr>
<td><code>Task.ContinueWith</code></td>
<td><code>UniTask.ContinueWith</code></td>
</tr>
<tr>
<td><code>TaskScheduler.UnobservedTaskException</code></td>
<td><code>UniTaskScheduler.UnobservedTaskException</code></td>
</tr>
</tbody></table>
<h2>Pooling Configuration</h2>
<p>UniTask aggressively caches async promise objects to achieve zero allocation (for technical details, see blog post <a rel="noopener noreferrer" href="https://medium.com/@neuecc/unitask-v2-zero-allocation-async-await-for-unity-with-asynchronous-linq-1aa9c96aa7dd">UniTask v2 — Zero Allocation async/await for Unity, with Asynchronous LINQ</a>). By default, it caches all promises but you can configure <code>TaskPool.SetMaxPoolSize</code> to your value, the value indicates cache size per type. <code>TaskPool.GetCacheSizeInfo</code> returns currently cached objects in pool.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">foreach</span> (<span class="hljs-keyword">var</span> (type, size) <span class="hljs-keyword">in</span> TaskPool.GetCacheSizeInfo())
{
    Debug.Log(type + <span class="hljs-string">&quot;:&quot;</span> + size);
}</code></pre><h2>Allocation on Profiler</h2>
<p>In UnityEditor the profiler shows allocation of compiler generated AsyncStateMachine but it only occurs in debug(development) build. C# Compiler generates AsyncStateMachine as class on Debug build and as struct on Release build.</p>
<p>Unity supports Code Optimization option starting in 2020.1 (right, footer).</p>
<p><img src="https://user-images.githubusercontent.com/46207/89967342-2f944600-dc8c-11ea-99fc-0b74527a16f6.png" alt=""></p>
<p>You can change C# compiler optimization to release to remove AsyncStateMachine allocation in development builds. This optimization option can also be set via <code>Compilation.CompilationPipeline-codeOptimization</code>, and <code>Compilation.CodeOptimization</code>.</p>
<h2>UniTaskSynchronizationContext</h2>
<p>Unity&#39;s default SynchronizationContext(<code>UnitySynchronizationContext</code>) is a poor implementation for performance. UniTask bypasses <code>SynchronizationContext</code>(and <code>ExecutionContext</code>) so it does not use it but if exists in <code>async Task</code>, still used it. <code>UniTaskSynchronizationContext</code> is a replacement of <code>UnitySynchronizationContext</code> which is better for performance.</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">SyncContextInjecter</span>
{
    [<span class="hljs-meta">RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)</span>]
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Inject</span>()</span>
    {
        SynchronizationContext.SetSynchronizationContext(<span class="hljs-keyword">new</span> UniTaskSynchronizationContext());
    }
}</code></pre><p>This is an optional choice and is not always recommended; <code>UniTaskSynchronizationContext</code> is less performant than <code>async UniTask</code> and is not a complete UniTask replacement. It also does not guarantee full behavioral compatibility with the <code>UnitySynchronizationContext</code>.</p>
<h2>API References</h2>
<p>UniTask&#39;s API References are hosted at <a rel="noopener noreferrer" href="https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.html">cysharp.github.io/UniTask</a> by <a rel="noopener noreferrer" href="https://dotnet.github.io/docfx/">DocFX</a> and <a rel="noopener noreferrer" href="https://github.com/Cysharp/DocfxTemplate">Cysharp/DocfXTemplate</a>.</p>
<p>For example, UniTask&#39;s factory methods can be seen at <a rel="noopener noreferrer" href="https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.UniTask.html#methods-1">UniTask#methods</a>. UniTaskAsyncEnumerable&#39;s factory/extension methods can be seen at <a rel="noopener noreferrer" href="https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.html#methods-1">UniTaskAsyncEnumerable#methods</a>.</p>
<h2>UPM Package</h2>
<h3>Install via git URL</h3>
<p>Requires a version of unity that supports path query parameter for git packages (Unity &gt;= 2019.3.4f1, Unity &gt;= 2020.1a21). You can add <code>https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask</code> to Package Manager</p>
<p><img src="https://user-images.githubusercontent.com/46207/79450714-3aadd100-8020-11ea-8aae-b8d87fc4d7be.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/46207/83702872-e0f17c80-a648-11ea-8183-7469dcd4f810.png" alt="image"></p>
<p>or add <code>&quot;com.cysharp.unitask&quot;: &quot;https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask&quot;</code> to <code>Packages/manifest.json</code>.</p>
<p>If you want to set a target version, UniTask uses the <code>*.*.*</code> release tag so you can specify a version like <code>#2.1.0</code>. For example <code>https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask#2.1.0</code>.</p>
<h2>.NET Core</h2>
<p>For .NET Core, use NuGet.</p>
<blockquote>
<p>PM&gt; Install-Package <a rel="noopener noreferrer" href="https://www.nuget.org/packages/UniTask">UniTask</a></p>
</blockquote>
<p>UniTask of .NET Core version is a subset of Unity UniTask with PlayerLoop dependent methods removed.</p>
<p>It runs at higher performance than the standard Task/ValueTask, but you should be careful to ignore the ExecutionContext/SynchronizationContext when using it. <code>AsyncLocal</code> also does not work because it ignores ExecutionContext.</p>
<p>If you use UniTask internally, but provide ValueTask as an external API, you can write it like the following(Inspired by <a rel="noopener noreferrer" href="https://github.com/mgravell/PooledAwait">PooledAwait</a>).</p>
<pre><code class="hljs csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">ZeroAllocAsyncAwaitInDotNetCore</span>
{
    <span class="hljs-function"><span class="hljs-keyword">public</span> ValueTask&lt;<span class="hljs-built_in">int</span>&gt; <span class="hljs-title">DoAsync</span>(<span class="hljs-params"><span class="hljs-built_in">int</span> x, <span class="hljs-built_in">int</span> y</span>)</span>
    {
        <span class="hljs-keyword">return</span> Core(<span class="hljs-keyword">this</span>, x, y);

        <span class="hljs-function"><span class="hljs-keyword">static</span> <span class="hljs-keyword">async</span> UniTask&lt;<span class="hljs-built_in">int</span>&gt; <span class="hljs-title">Core</span>(<span class="hljs-params">ZeroAllocAsyncAwaitInDotNetCore self, <span class="hljs-built_in">int</span> x, <span class="hljs-built_in">int</span> y</span>)</span>
        {
            <span class="hljs-comment">// do anything...</span>
            <span class="hljs-keyword">await</span> Task.Delay(TimeSpan.FromSeconds(x + y));
            <span class="hljs-keyword">await</span> UniTask.Yield();

            <span class="hljs-keyword">return</span> <span class="hljs-number">10</span>;
        }
    }
}

<span class="hljs-comment">// UniTask does not return to original SynchronizationContext but you can use helper \`ReturnToCurrentSynchronizationContext\`.</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> ValueTask <span class="hljs-title">TestAsync</span>()</span>
{
    <span class="hljs-keyword">await</span> <span class="hljs-keyword">using</span> (UniTask.ReturnToCurrentSynchronizationContext())
    {
        <span class="hljs-keyword">await</span> UniTask.SwitchToThreadPool();
        <span class="hljs-comment">// do anything..</span>
    }
}</code></pre><p>.NET Core version is intended to allow users to use UniTask as an interface when sharing code with Unity (such as <a rel="noopener noreferrer" href="https://github.com/Cysharp/MagicOnion/">Cysharp/MagicOnion</a>). .NET Core version of UniTask enables smooth code sharing.</p>
<p>Utility methods such as WhenAll which are equivalent to UniTask are provided as <a rel="noopener noreferrer" href="https://github.com/Cysharp/ValueTaskSupplement">Cysharp/ValueTaskSupplement</a>.</p>
<h2>License</h2>
<p>This library is under the MIT License.</p>
</div>`,currentHtml:`<div><h1 id="unitask">UniTask</h1>
<p><a href="https://github.com/Cysharp/UniTask/actions" rel="noopener noreferrer"><img src="https://github.com/Cysharp/UniTask/workflows/Build-Debug/badge.svg" alt="GitHub Actions"></a> <a href="https://github.com/Cysharp/UniTask/releases" rel="noopener noreferrer"><img src="https://img.shields.io/github/release/Cysharp/UniTask.svg" alt="Releases"></a> <a href="https://github.com/Cysharp/UniTask/blob/master/README_CN.md" rel="noopener noreferrer"><img src="https://img.shields.io/badge/UniTask-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3-red" alt="Readme_CN"></a></p>
<p>Provides an efficient allocation free async/await integration for Unity.</p>
<ul>
<li>Struct based <code>UniTask&#x3C;T></code> and custom AsyncMethodBuilder to achieve zero allocation</li>
<li>Makes all Unity AsyncOperations and Coroutines awaitable</li>
<li>PlayerLoop based task(<code>UniTask.Yield</code>, <code>UniTask.Delay</code>, <code>UniTask.DelayFrame</code>, etc..) that enable replacing all coroutine operations</li>
<li>MonoBehaviour Message Events and uGUI Events as awaitable/async-enumerable</li>
<li>Runs completely on Unity's PlayerLoop so doesn't use threads and runs on WebGL, wasm, etc.</li>
<li>Asynchronous LINQ, with Channel and AsyncReactiveProperty</li>
<li>TaskTracker window to prevent memory leaks</li>
<li>Highly compatible behaviour with Task/ValueTask/IValueTaskSource</li>
</ul>
<p>For technical details, see blog post: <a href="https://medium.com/@neuecc/unitask-v2-zero-allocation-async-await-for-unity-with-asynchronous-linq-1aa9c96aa7dd" rel="noopener noreferrer">UniTask v2 — Zero Allocation async/await for Unity, with Asynchronous LINQ
</a><br>
For advanced tips, see blog post: <a href="https://medium.com/@neuecc/extends-unitywebrequest-via-async-decorator-pattern-advanced-techniques-of-unitask-ceff9c5ee846" rel="noopener noreferrer">Extends UnityWebRequest via async decorator pattern — Advanced Techniques of UniTask</a></p>


<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#getting-started" rel="noopener noreferrer">Getting started</a></li>
<li><a href="#basics-of-unitask-and-asyncoperation" rel="noopener noreferrer">Basics of UniTask and AsyncOperation</a></li>
<li><a href="#cancellation-and-exception-handling" rel="noopener noreferrer">Cancellation and Exception handling</a></li>
<li><a href="#timeout-handling" rel="noopener noreferrer">Timeout handling</a></li>
<li><a href="#progress" rel="noopener noreferrer">Progress</a></li>
<li><a href="#playerloop" rel="noopener noreferrer">PlayerLoop</a></li>
<li><a href="#async-void-vs-async-unitaskvoid" rel="noopener noreferrer">async void vs async UniTaskVoid</a></li>
<li><a href="#unitasktracker" rel="noopener noreferrer">UniTaskTracker</a></li>
<li><a href="#external-assets" rel="noopener noreferrer">External Assets</a></li>
<li><a href="#asyncenumerable-and-async-linq" rel="noopener noreferrer">AsyncEnumerable and Async LINQ</a></li>
<li><a href="#awaitable-events" rel="noopener noreferrer">Awaitable Events</a></li>
<li><a href="#channel" rel="noopener noreferrer">Channel</a></li>
<li><a href="#vs-awaitable" rel="noopener noreferrer">vs Awaitable</a></li>
<li><a href="#for-unit-testing" rel="noopener noreferrer">For Unit Testing</a></li>
<li><a href="#threadpool-limitation" rel="noopener noreferrer">ThreadPool limitation</a></li>
<li><a href="#ienumeratortounitask-limitation" rel="noopener noreferrer">IEnumerator.ToUniTask limitation</a></li>
<li><a href="#for-unityeditor" rel="noopener noreferrer">For UnityEditor</a></li>
<li><a href="#compare-with-standard-task-api" rel="noopener noreferrer">Compare with Standard Task API</a></li>
<li><a href="#pooling-configuration" rel="noopener noreferrer">Pooling Configuration</a></li>
<li><a href="#allocation-on-profiler" rel="noopener noreferrer">Allocation on Profiler</a></li>
<li><a href="#unitasksynchronizationcontext" rel="noopener noreferrer">UniTaskSynchronizationContext</a></li>
<li><a href="#api-references" rel="noopener noreferrer">API References</a></li>
<li><a href="#upm-package" rel="noopener noreferrer">UPM Package</a>
<ul>
<li><a href="#install-via-git-url" rel="noopener noreferrer">Install via git URL</a></li>
</ul>
</li>
<li><a href="#net-core" rel="noopener noreferrer">.NET Core</a></li>
<li><a href="#license" rel="noopener noreferrer">License</a></li>
</ul>

<h2 id="getting-started">Getting started</h2>
<p>Install via <a href="#upm-package" rel="noopener noreferrer">UPM package</a> with git reference or asset package(<code>UniTask.*.*.*.unitypackage</code>) available in <a href="https://github.com/Cysharp/UniTask/releases" rel="noopener noreferrer">UniTask/releases</a>.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// extension awaiter/methods can be used by this namespace</span>
<span class="hljs-keyword">using</span> Cysharp.Threading.Tasks;

<span class="hljs-comment">// You can return type as struct UniTask&#x3C;T>(or UniTask), it is unity specialized lightweight alternative of Task&#x3C;T></span>
<span class="hljs-comment">// zero allocation and fast excution for zero overhead async/await integrate with Unity</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask&#x3C;<span class="hljs-built_in">string</span>> <span class="hljs-title">DemoAsync</span>()</span>
{
    <span class="hljs-comment">// You can await Unity's AsyncObject</span>
    <span class="hljs-keyword">var</span> asset = <span class="hljs-keyword">await</span> Resources.LoadAsync&#x3C;TextAsset>(<span class="hljs-string">"foo"</span>);
    <span class="hljs-keyword">var</span> txt = (<span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">"https://..."</span>).SendWebRequest()).downloadHandler.text;
    <span class="hljs-keyword">await</span> SceneManager.LoadSceneAsync(<span class="hljs-string">"scene2"</span>);

    <span class="hljs-comment">// .WithCancellation enables Cancel, GetCancellationTokenOnDestroy synchornizes with lifetime of GameObject</span>
    <span class="hljs-comment">// after Unity 2022.2, you can use \`destroyCancellationToken\` in MonoBehaviour</span>
    <span class="hljs-keyword">var</span> asset2 = <span class="hljs-keyword">await</span> Resources.LoadAsync&#x3C;TextAsset>(<span class="hljs-string">"bar"</span>).WithCancellation(<span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy());

    <span class="hljs-comment">// .ToUniTask accepts progress callback(and all options), Progress.Create is a lightweight alternative of IProgress&#x3C;T></span>
    <span class="hljs-keyword">var</span> asset3 = <span class="hljs-keyword">await</span> Resources.LoadAsync&#x3C;TextAsset>(<span class="hljs-string">"baz"</span>).ToUniTask(Progress.Create&#x3C;<span class="hljs-built_in">float</span>>(x => Debug.Log(x)));

    <span class="hljs-comment">// await frame-based operation like a coroutine</span>
    <span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">100</span>); 

    <span class="hljs-comment">// replacement of yield return new WaitForSeconds/WaitForSecondsRealtime</span>
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">10</span>), ignoreTimeScale: <span class="hljs-literal">false</span>);
    
    <span class="hljs-comment">// yield any playerloop timing(PreUpdate, Update, LateUpdate, etc...)</span>
    <span class="hljs-keyword">await</span> UniTask.Yield(PlayerLoopTiming.PreLateUpdate);

    <span class="hljs-comment">// replacement of yield return null</span>
    <span class="hljs-keyword">await</span> UniTask.Yield();
    <span class="hljs-keyword">await</span> UniTask.NextFrame();

    <span class="hljs-comment">// replacement of WaitForEndOfFrame</span>
<span class="hljs-meta">#<span class="hljs-keyword">if</span> UNITY_2023_1_OR_NEWER</span>
    <span class="hljs-keyword">await</span> UniTask.WaitForEndOfFrame();
<span class="hljs-meta">#<span class="hljs-keyword">else</span></span>
    <span class="hljs-comment">// requires MonoBehaviour(CoroutineRunner))</span>
    <span class="hljs-keyword">await</span> UniTask.WaitForEndOfFrame(<span class="hljs-keyword">this</span>); <span class="hljs-comment">// this is MonoBehaviour</span>
<span class="hljs-meta">#<span class="hljs-keyword">endif</span></span>

    <span class="hljs-comment">// replacement of yield return new WaitForFixedUpdate(same as UniTask.Yield(PlayerLoopTiming.FixedUpdate))</span>
    <span class="hljs-keyword">await</span> UniTask.WaitForFixedUpdate();
    
    <span class="hljs-comment">// replacement of yield return WaitUntil</span>
    <span class="hljs-keyword">await</span> UniTask.WaitUntil(() => isActive == <span class="hljs-literal">false</span>);

    <span class="hljs-comment">// special helper of WaitUntil</span>
    <span class="hljs-keyword">await</span> UniTask.WaitUntilValueChanged(<span class="hljs-keyword">this</span>, x => x.isActive);

    <span class="hljs-comment">// You can await IEnumerator coroutines</span>
    <span class="hljs-keyword">await</span> FooCoroutineEnumerator();

    <span class="hljs-comment">// You can await a standard task</span>
    <span class="hljs-keyword">await</span> Task.Run(() => <span class="hljs-number">100</span>);

    <span class="hljs-comment">// Multithreading, run on ThreadPool under this code</span>
    <span class="hljs-keyword">await</span> UniTask.SwitchToThreadPool();

    <span class="hljs-comment">/* work on ThreadPool */</span>

    <span class="hljs-comment">// return to MainThread(same as \`ObserveOnMainThread\` in UniRx)</span>
    <span class="hljs-keyword">await</span> UniTask.SwitchToMainThread();

    <span class="hljs-comment">// get async webrequest</span>
    <span class="hljs-function"><span class="hljs-keyword">async</span> UniTask&#x3C;<span class="hljs-built_in">string</span>> <span class="hljs-title">GetTextAsync</span>(<span class="hljs-params">UnityWebRequest req</span>)</span>
    {
        <span class="hljs-keyword">var</span> op = <span class="hljs-keyword">await</span> req.SendWebRequest();
        <span class="hljs-keyword">return</span> op.downloadHandler.text;
    }

    <span class="hljs-keyword">var</span> task1 = GetTextAsync(UnityWebRequest.Get(<span class="hljs-string">"http://google.com"</span>));
    <span class="hljs-keyword">var</span> task2 = GetTextAsync(UnityWebRequest.Get(<span class="hljs-string">"http://bing.com"</span>));
    <span class="hljs-keyword">var</span> task3 = GetTextAsync(UnityWebRequest.Get(<span class="hljs-string">"http://yahoo.com"</span>));

    <span class="hljs-comment">// concurrent async-wait and get results easily by tuple syntax</span>
    <span class="hljs-keyword">var</span> (google, bing, yahoo) = <span class="hljs-keyword">await</span> UniTask.WhenAll(task1, task2, task3);

    <span class="hljs-comment">// shorthand of WhenAll, tuple can await directly</span>
    <span class="hljs-keyword">var</span> (google2, bing2, yahoo2) = <span class="hljs-keyword">await</span> (task1, task2, task3);

    <span class="hljs-comment">// return async-value.(or you can use \`UniTask\`(no result), \`UniTaskVoid\`(fire and forget)).</span>
    <span class="hljs-keyword">return</span> (asset <span class="hljs-keyword">as</span> TextAsset)?.text ?? <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> InvalidOperationException(<span class="hljs-string">"Asset not found"</span>);
}
</code></pre>
<h2 id="basics-of-unitask-and-asyncoperation">Basics of UniTask and AsyncOperation</h2>
<p>UniTask features rely on C# 7.0(<a href="https://github.com/dotnet/roslyn/blob/master/docs/features/task-types.md" rel="noopener noreferrer">task-like custom async method builder feature</a>) so the required Unity version is after <code>Unity 2018.3</code>, the official lowest version supported is <code>Unity 2018.4.13f1</code>.</p>
<p>Why is UniTask(custom task-like object) required? Because Task is too heavy and not matched to Unity threading (single-thread). UniTask does not use threads and SynchronizationContext/ExecutionContext because Unity's asynchronous object is automaticaly dispatched by Unity's engine layer. It achieves faster and lower allocation, and is completely integrated with Unity.</p>
<p>You can await <code>AsyncOperation</code>, <code>ResourceRequest</code>, <code>AssetBundleRequest</code>, <code>AssetBundleCreateRequest</code>, <code>UnityWebRequestAsyncOperation</code>, <code>AsyncGPUReadbackRequest</code>, <code>IEnumerator</code> and others when <code>using Cysharp.Threading.Tasks;</code>.</p>
<p>UniTask provides three pattern of extension methods.</p>
<pre><code class="hljs language-csharp">* <span class="hljs-keyword">await</span> asyncOperation;
* .WithCancellation(CancellationToken);
* .ToUniTask(IProgress, PlayerLoopTiming, CancellationToken);
</code></pre>
<p><code>WithCancellation</code> is a simple version of <code>ToUniTask</code>, both return <code>UniTask</code>. For details of cancellation, see: <a href="#cancellation-and-exception-handling" rel="noopener noreferrer">Cancellation and Exception handling</a> section.</p>
<blockquote>
<p>Note: await directly is returned from native timing of PlayerLoop but WithCancellation and ToUniTask are returned from specified PlayerLoopTiming. For details of timing, see: <a href="#playerloop" rel="noopener noreferrer">PlayerLoop</a> section.</p>
</blockquote>
<blockquote>
<p>Note: AssetBundleRequest has <code>asset</code> and <code>allAssets</code>, default await returns <code>asset</code>. If you want to get <code>allAssets</code>, you can use <code>AwaitForAllAssets()</code> method.</p>
</blockquote>
<p>The type of <code>UniTask</code> can use utilities like <code>UniTask.WhenAll</code>, <code>UniTask.WhenAny</code>, <code>UniTask.WhenEach</code>. They are like <code>Task.WhenAll</code>/<code>Task.WhenAny</code> but the return type is more useful. They return value tuples so you can deconstruct each result and pass multiple types.</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">LoadManyAsync</span>()</span>
{
    <span class="hljs-comment">// parallel load.</span>
    <span class="hljs-keyword">var</span> (a, b, c) = <span class="hljs-keyword">await</span> UniTask.WhenAll(
        LoadAsSprite(<span class="hljs-string">"foo"</span>),
        LoadAsSprite(<span class="hljs-string">"bar"</span>),
        LoadAsSprite(<span class="hljs-string">"baz"</span>));
}

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask&#x3C;Sprite> <span class="hljs-title">LoadAsSprite</span>(<span class="hljs-params"><span class="hljs-built_in">string</span> path</span>)</span>
{
    <span class="hljs-keyword">var</span> resource = <span class="hljs-keyword">await</span> Resources.LoadAsync&#x3C;Sprite>(path);
    <span class="hljs-keyword">return</span> (resource <span class="hljs-keyword">as</span> Sprite);
}
</code></pre>
<p>If you want to convert a callback to UniTask, you can use <code>UniTaskCompletionSource&#x3C;T></code> which is a lightweight edition of <code>TaskCompletionSource&#x3C;T></code>.</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> UniTask&#x3C;<span class="hljs-built_in">int</span>> <span class="hljs-title">WrapByUniTaskCompletionSource</span>()</span>
{
    <span class="hljs-keyword">var</span> utcs = <span class="hljs-keyword">new</span> UniTaskCompletionSource&#x3C;<span class="hljs-built_in">int</span>>();

    <span class="hljs-comment">// when complete, call utcs.TrySetResult();</span>
    <span class="hljs-comment">// when failed, call utcs.TrySetException();</span>
    <span class="hljs-comment">// when cancel, call utcs.TrySetCanceled();</span>

    <span class="hljs-keyword">return</span> utcs.Task; <span class="hljs-comment">//return UniTask&#x3C;int></span>
}
</code></pre>
<p>You can convert Task -> UniTask: <code>AsUniTask</code>, <code>UniTask</code> -> <code>UniTask&#x3C;AsyncUnit></code>: <code>AsAsyncUnitUniTask</code>, <code>UniTask&#x3C;T></code> -> <code>UniTask</code>: <code>AsUniTask</code>. <code>UniTask&#x3C;T></code> -> <code>UniTask</code>'s conversion cost is free.</p>
<p>If you want to convert async to coroutine, you can use <code>.ToCoroutine()</code>, this is useful if you want to only allow using the coroutine system.</p>
<p>UniTask can not await twice. This is a similar constraint to the <a href="https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.valuetask-1?view=netcore-3.1" rel="noopener noreferrer">ValueTask/IValueTaskSource</a> introduced in .NET Standard 2.1.</p>
<blockquote>
<p>The following operations should never be performed on a ValueTask instance:</p>
<ul>
<li>Awaiting the instance multiple times.</li>
<li>Calling AsTask multiple times.</li>
<li>Using .Result or .GetAwaiter().GetResult() when the operation hasn't yet completed, or using them multiple times.</li>
<li>Using more than one of these techniques to consume the instance.</li>
</ul>
<p>If you do any of the above, the results are undefined.</p>
</blockquote>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> task = UniTask.DelayFrame(<span class="hljs-number">10</span>);
<span class="hljs-keyword">await</span> task;
<span class="hljs-keyword">await</span> task; <span class="hljs-comment">// NG, throws Exception</span>
</code></pre>
<p>Store to the class field, you can use <code>UniTask.Lazy</code> that supports calling multiple times. <code>.Preserve()</code> allows for multiple calls (internally cached results). This is useful when there are multiple calls in a function scope.</p>
<p>Also <code>UniTaskCompletionSource</code> can await multiple times and await from many callers.</p>
<h2 id="cancellation-and-exception-handling">Cancellation and Exception handling</h2>
<p>Some UniTask factory methods have a <code>CancellationToken cancellationToken = default</code> parameter. Also some async operations for Unity have <code>WithCancellation(CancellationToken)</code> and <code>ToUniTask(..., CancellationToken cancellation = default)</code> extension methods.</p>
<p>You can pass <code>CancellationToken</code> to parameter by standard <a href="https://docs.microsoft.com/en-us/dotnet/api/system.threading.cancellationtokensource" rel="noopener noreferrer"><code>CancellationTokenSource</code></a>.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> cts = <span class="hljs-keyword">new</span> CancellationTokenSource();

cancelButton.onClick.AddListener(() =>
{
    cts.Cancel();
});

<span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">"http://google.co.jp"</span>).SendWebRequest().WithCancellation(cts.Token);

<span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">1000</span>, cancellationToken: cts.Token);
</code></pre>
<p>CancellationToken can be created by <code>CancellationTokenSource</code> or MonoBehaviour's extension method <code>GetCancellationTokenOnDestroy</code>.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// this CancellationToken lifecycle is same as GameObject.</span>
<span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">1000</span>, cancellationToken: <span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy());
</code></pre>
<p>For propagate Cancellation, all async method recommend to accept <code>CancellationToken cancellationToken</code> at last argument, and pass <code>CancellationToken</code> from root to end.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">await</span> FooAsync(<span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy());

<span class="hljs-comment">// ---</span>

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">FooAsync</span>(<span class="hljs-params">CancellationToken cancellationToken</span>)</span>
{
    <span class="hljs-keyword">await</span> BarAsync(cancellationToken);
}

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">BarAsync</span>(<span class="hljs-params">CancellationToken cancellationToken</span>)</span>
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>), cancellationToken);
}
</code></pre>
<p><code>CancellationToken</code> means lifecycle of async. You can hold your own lifecycle insteadof default CancellationTokenOnDestroy.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">MyBehaviour</span> : <span class="hljs-title">MonoBehaviour</span>
{
    CancellationTokenSource disableCancellation = <span class="hljs-keyword">new</span> CancellationTokenSource();
    CancellationTokenSource destroyCancellation = <span class="hljs-keyword">new</span> CancellationTokenSource();

    <span class="hljs-function"><span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title">OnEnable</span>()</span>
    {
        <span class="hljs-keyword">if</span> (disableCancellation != <span class="hljs-literal">null</span>)
        {
            disableCancellation.Dispose();
        }
        disableCancellation = <span class="hljs-keyword">new</span> CancellationTokenSource();
    }

    <span class="hljs-function"><span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title">OnDisable</span>()</span>
    {
        disableCancellation.Cancel();
    }

    <span class="hljs-function"><span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title">OnDestroy</span>()</span>
    {
        destroyCancellation.Cancel();
        destroyCancellation.Dispose();
    }
}
</code></pre>
<p>After Unity 2022.2, Unity adds CancellationToken in <a href="https://docs.unity3d.com/ScriptReference/MonoBehaviour-destroyCancellationToken.html" rel="noopener noreferrer">MonoBehaviour.destroyCancellationToken</a> and <a href="https://docs.unity3d.com/ScriptReference/Application-exitCancellationToken.html" rel="noopener noreferrer">Application.exitCancellationToken</a>.</p>
<p>When cancellation is detected, all methods throw <code>OperationCanceledException</code> and propagate upstream. When exception(not limited to <code>OperationCanceledException</code>) is not handled in async method, it is propagated finally to <code>UniTaskScheduler.UnobservedTaskException</code>. The default behaviour of received unhandled exception is to write log as exception. Log level can be changed using <code>UniTaskScheduler.UnobservedExceptionWriteLogType</code>. If you want to use custom behaviour, set an action to <code>UniTaskScheduler.UnobservedTaskException.</code></p>
<p>And also <code>OperationCanceledException</code> is a special exception, this is silently ignored at <code>UnobservedTaskException</code>.</p>
<p>If you want to cancel behaviour in an async UniTask method, throw <code>OperationCanceledException</code> manually.</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTask&#x3C;<span class="hljs-built_in">int</span>> <span class="hljs-title">FooAsync</span>()</span>
{
    <span class="hljs-keyword">await</span> UniTask.Yield();
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> OperationCanceledException();
}
</code></pre>
<p>If you handle an exception but want to ignore(propagate to global cancellation handling), use an exception filter.</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTask&#x3C;<span class="hljs-built_in">int</span>> <span class="hljs-title">BarAsync</span>()</span>
{
    <span class="hljs-keyword">try</span>
    {
        <span class="hljs-keyword">var</span> x = <span class="hljs-keyword">await</span> FooAsync();
        <span class="hljs-keyword">return</span> x * <span class="hljs-number">2</span>;
    }
    <span class="hljs-keyword">catch</span> (Exception ex) <span class="hljs-keyword">when</span> (!(ex <span class="hljs-keyword">is</span> OperationCanceledException)) <span class="hljs-comment">// when (ex is not OperationCanceledException) at C# 9.0</span>
    {
        <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>;
    }
}
</code></pre>
<p>throws/catch <code>OperationCanceledException</code> is slightly heavy, so if performance is a concern, use <code>UniTask.SuppressCancellationThrow</code> to avoid OperationCanceledException throw. It returns <code>(bool IsCanceled, T Result)</code> instead of throwing.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> (isCanceled, _) = <span class="hljs-keyword">await</span> UniTask.DelayFrame(<span class="hljs-number">10</span>, cancellationToken: cts.Token).SuppressCancellationThrow();
<span class="hljs-keyword">if</span> (isCanceled)
{
    <span class="hljs-comment">// ...</span>
}
</code></pre>
<p>Note: Only suppress throws if you call directly into the most source method. Otherwise, the return value will be converted, but the entire pipeline will not suppress throws.</p>
<p>Some features that use Unity's player loop, such as <code>UniTask.Yield</code> and <code>UniTask.Delay</code> etc, determines CancellationToken state on the player loop.
This means it does not cancel immediately upon <code>CancellationToken</code> fired.</p>
<p>If you want to change this behaviour, the cancellation to be immediate, set the <code>cancelImmediately</code> flag as an argument.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">await</span> UniTask.Yield(cancellationToken, cancelImmediately: <span class="hljs-literal">true</span>);
</code></pre>
<p>Note: Setting <code>cancelImmediately</code> to true and detecting an immediate cancellation is more costly than the default behavior.
This is because it uses <code>CancellationToken.Register</code>; it is heavier than checking CancellationToken on the player loop.</p>
<h2 id="timeout-handling">Timeout handling</h2>
<p>Timeout is a variation of cancellation. You can set timeout by <code>CancellationTokenSouce.CancelAfterSlim(TimeSpan)</code> and pass CancellationToken to async methods.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> cts = <span class="hljs-keyword">new</span> CancellationTokenSource();
cts.CancelAfterSlim(TimeSpan.FromSeconds(<span class="hljs-number">5</span>)); <span class="hljs-comment">// 5sec timeout.</span>

<span class="hljs-keyword">try</span>
{
    <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">"http://foo"</span>).SendWebRequest().WithCancellation(cts.Token);
}
<span class="hljs-keyword">catch</span> (OperationCanceledException ex)
{
    <span class="hljs-keyword">if</span> (ex.CancellationToken == cts.Token)
    {
        UnityEngine.Debug.Log(<span class="hljs-string">"Timeout"</span>);
    }
}
</code></pre>
<blockquote>
<p><code>CancellationTokenSouce.CancelAfter</code> is a standard api. However in Unity you should not use it because it depends threading timer. <code>CancelAfterSlim</code> is UniTask's extension methods, it uses PlayerLoop instead.</p>
</blockquote>
<p>If you want to use timeout with other source of cancellation, use <code>CancellationTokenSource.CreateLinkedTokenSource</code>.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> cancelToken = <span class="hljs-keyword">new</span> CancellationTokenSource();
cancelButton.onClick.AddListener(() =>
{
    cancelToken.Cancel(); <span class="hljs-comment">// cancel from button click.</span>
});

<span class="hljs-keyword">var</span> timeoutToken = <span class="hljs-keyword">new</span> CancellationTokenSource();
timeoutToken.CancelAfterSlim(TimeSpan.FromSeconds(<span class="hljs-number">5</span>)); <span class="hljs-comment">// 5sec timeout.</span>

<span class="hljs-keyword">try</span>
{
    <span class="hljs-comment">// combine token</span>
    <span class="hljs-keyword">var</span> linkedTokenSource = CancellationTokenSource.CreateLinkedTokenSource(cancelToken.Token, timeoutToken.Token);

    <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">"http://foo"</span>).SendWebRequest().WithCancellation(linkedTokenSource.Token);
}
<span class="hljs-keyword">catch</span> (OperationCanceledException ex)
{
    <span class="hljs-keyword">if</span> (timeoutToken.IsCancellationRequested)
    {
        UnityEngine.Debug.Log(<span class="hljs-string">"Timeout."</span>);
    }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (cancelToken.IsCancellationRequested)
    {
        UnityEngine.Debug.Log(<span class="hljs-string">"Cancel clicked."</span>);
    }
}
</code></pre>
<p>Optimize for reduce allocation of CancellationTokenSource for timeout per call async method, you can use UniTask's <code>TimeoutController</code>.</p>
<pre><code class="hljs language-csharp">TimeoutController timeoutController = <span class="hljs-keyword">new</span> TimeoutController(); <span class="hljs-comment">// setup to field for reuse.</span>

<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">FooAsync</span>()</span>
{
    <span class="hljs-keyword">try</span>
    {
        <span class="hljs-comment">// you can pass timeoutController.Timeout(TimeSpan) to cancellationToken.</span>
        <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">"http://foo"</span>).SendWebRequest()
            .WithCancellation(timeoutController.Timeout(TimeSpan.FromSeconds(<span class="hljs-number">5</span>)));
        timeoutController.Reset(); <span class="hljs-comment">// call Reset(Stop timeout timer and ready for reuse) when succeed.</span>
    }
    <span class="hljs-keyword">catch</span> (OperationCanceledException ex)
    {
        <span class="hljs-keyword">if</span> (timeoutController.IsTimeout())
        {
            UnityEngine.Debug.Log(<span class="hljs-string">"timeout"</span>);
        }
    }
}
</code></pre>
<p>If you want to use timeout with other source of cancellation, use <code>new TimeoutController(CancellationToken)</code>.</p>
<pre><code class="hljs language-csharp">TimeoutController timeoutController;
CancellationTokenSource clickCancelSource;

<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">Start</span>()</span>
{
    <span class="hljs-keyword">this</span>.clickCancelSource = <span class="hljs-keyword">new</span> CancellationTokenSource();
    <span class="hljs-keyword">this</span>.timeoutController = <span class="hljs-keyword">new</span> TimeoutController(clickCancelSource);
}
</code></pre>
<p>Note: UniTask has <code>.Timeout</code>, <code>.TimeoutWithoutException</code> methods however, if possible, do not use these, please pass <code>CancellationToken</code>. Because <code>.Timeout</code> work from external of task, can not stop timeoutted task. <code>.Timeout</code> means ignore result when timeout. If you pass a <code>CancellationToken</code> to the method, it will act from inside of the task, so it is possible to stop a running task.</p>
<h2 id="progress">Progress</h2>
<p>Some async operations for unity have <code>ToUniTask(IProgress&#x3C;float> progress = null, ...)</code> extension methods.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> progress = Progress.Create&#x3C;<span class="hljs-built_in">float</span>>(x => Debug.Log(x));

<span class="hljs-keyword">var</span> request = <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">"http://google.co.jp"</span>)
    .SendWebRequest()
    .ToUniTask(progress: progress);
</code></pre>
<p>You should not use standard <code>new System.Progress&#x3C;T></code>, because it causes allocation every time. Use <code>Cysharp.Threading.Tasks.Progress</code> instead. This progress factory has two methods, <code>Create</code> and <code>CreateOnlyValueChanged</code>. <code>CreateOnlyValueChanged</code> calls only when the progress value has changed.</p>
<p>Implementing IProgress interface to caller is better as there is no lambda allocation.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Foo</span> : <span class="hljs-title">MonoBehaviour</span>, <span class="hljs-title">IProgress</span>&#x3C;<span class="hljs-title">float</span>>
{
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Report</span>(<span class="hljs-params"><span class="hljs-built_in">float</span> <span class="hljs-keyword">value</span></span>)</span>
    {
        UnityEngine.Debug.Log(<span class="hljs-keyword">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">WebRequest</span>()</span>
    {
        <span class="hljs-keyword">var</span> request = <span class="hljs-keyword">await</span> UnityWebRequest.Get(<span class="hljs-string">"http://google.co.jp"</span>)
            .SendWebRequest()
            .ToUniTask(progress: <span class="hljs-keyword">this</span>); <span class="hljs-comment">// pass this</span>
    }
}
</code></pre>
<h2 id="playerloop">PlayerLoop</h2>
<p>UniTask is run on a custom <a href="https://docs.unity3d.com/ScriptReference/LowLevel.PlayerLoop.html" rel="noopener noreferrer">PlayerLoop</a>. UniTask's playerloop based methods (such as <code>Delay</code>, <code>DelayFrame</code>, <code>asyncOperation.ToUniTask</code>, etc...) accept this <code>PlayerLoopTiming</code>.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-built_in">enum</span> PlayerLoopTiming
{
    Initialization = <span class="hljs-number">0</span>,
    LastInitialization = <span class="hljs-number">1</span>,

    EarlyUpdate = <span class="hljs-number">2</span>,
    LastEarlyUpdate = <span class="hljs-number">3</span>,

    FixedUpdate = <span class="hljs-number">4</span>,
    LastFixedUpdate = <span class="hljs-number">5</span>,

    PreUpdate = <span class="hljs-number">6</span>,
    LastPreUpdate = <span class="hljs-number">7</span>,

    Update = <span class="hljs-number">8</span>,
    LastUpdate = <span class="hljs-number">9</span>,

    PreLateUpdate = <span class="hljs-number">10</span>,
    LastPreLateUpdate = <span class="hljs-number">11</span>,

    PostLateUpdate = <span class="hljs-number">12</span>,
    LastPostLateUpdate = <span class="hljs-number">13</span>
    
<span class="hljs-meta">#<span class="hljs-keyword">if</span> UNITY_2020_2_OR_NEWER</span>
    TimeUpdate = <span class="hljs-number">14</span>,
    LastTimeUpdate = <span class="hljs-number">15</span>,
<span class="hljs-meta">#<span class="hljs-keyword">endif</span></span>
}
</code></pre>
<p>It indicates when to run, you can check <a href="https://gist.github.com/neuecc/bc3a1cfd4d74501ad057e49efcd7bdae" rel="noopener noreferrer">PlayerLoopList.md</a> to Unity's default playerloop and injected UniTask's custom loop.</p>
<p><code>PlayerLoopTiming.Update</code> is similar to <code>yield return null</code> in a coroutine, but it is called before Update(Update and uGUI events(button.onClick, etc...) are called on <code>ScriptRunBehaviourUpdate</code>, yield return null is called on <code>ScriptRunDelayedDynamicFrameRate</code>). <code>PlayerLoopTiming.FixedUpdate</code> is similar to <code>WaitForFixedUpdate</code>.</p>
<blockquote>
<p><code>PlayerLoopTiming.LastPostLateUpdate</code> is not equivalent to coroutine's <code>yield return new WaitForEndOfFrame()</code>. Coroutine's WaitForEndOfFrame seems to run after the PlayerLoop is done. Some methods that require coroutine's end of frame(<code>Texture2D.ReadPixels</code>, <code>ScreenCapture.CaptureScreenshotAsTexture</code>, <code>CommandBuffer</code>, etc) do not work correctly when replaced with async/await. In these cases, pass MonoBehaviour(coroutine runnner) to <code>UniTask.WaitForEndOfFrame</code>. For example, <code>await UniTask.WaitForEndOfFrame(this);</code> is lightweight allocation free alternative of <code>yield return new WaitForEndOfFrame()</code>.</p>
<p>Note: In Unity 2023.1 or newer, <code>await UniTask.WaitForEndOfFrame();</code> no longer requires MonoBehaviour. It uses <code>UnityEngine.Awaitable.EndOfFrameAsync</code>.</p>
</blockquote>
<p><code>yield return null</code> and <code>UniTask.Yield</code> are similar but different. <code>yield return null</code> always returns next frame but <code>UniTask.Yield</code> returns next called. That is, call <code>UniTask.Yield(PlayerLoopTiming.Update)</code> on <code>PreUpdate</code>, it returns same frame. <code>UniTask.NextFrame()</code> guarantees return next frame, you can expect this to behave exactly the same as <code>yield return null</code>.</p>
<blockquote>
<p>UniTask.Yield(without CancellationToken) is a special type, returns <code>YieldAwaitable</code> and runs on YieldRunner. It is the most lightweight and fastest.</p>
</blockquote>
<p><code>AsyncOperation</code> is returned from native timing. For example, await <code>SceneManager.LoadSceneAsync</code> is returned from <code>EarlyUpdate.UpdatePreloading</code> and after being called, the loaded scene's <code>Start</code> is called from <code>EarlyUpdate.ScriptRunDelayedStartupFrame</code>. Also <code>await UnityWebRequest</code> is returned from <code>EarlyUpdate.ExecuteMainThreadJobs</code>.</p>
<p>In UniTask, await directly uses native timing, while <code>WithCancellation</code> and <code>ToUniTask</code> use specified timing. This is usually not a particular problem, but with <code>LoadSceneAsync</code>, it causes a different order of Start and continuation after await. So it is recommended not to use <code>LoadSceneAsync.ToUniTask</code>.</p>
<blockquote>
<p>Note: When using Unity 2023.1 or newer, ensure you have <code>using UnityEngine;</code> in the using statements of your file when working with new <code>UnityEngine.Awaitable</code> methods like <code>SceneManager.LoadSceneAsync</code>.
This prevents compilation errors by avoiding the use of the <code>UnityEngine.AsyncOperation</code> version.</p>
</blockquote>
<p>In the stacktrace, you can check where it is running in playerloop.</p>
<p><img src="https://user-images.githubusercontent.com/46207/83735571-83caea80-a68b-11ea-8d22-5e22864f0d24.png" alt="image"></p>
<p>By default, UniTask's PlayerLoop is initialized at <code>[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]</code>.</p>
<p>The order in which methods are called in BeforeSceneLoad is nondeterministic, so if you want to use UniTask in other BeforeSceneLoad methods, you should try to initialize it before this.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// AfterAssembliesLoaded is called before BeforeSceneLoad</span>
[<span class="hljs-meta">RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterAssembliesLoaded)</span>]
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">InitUniTaskLoop</span>()</span>
{
    <span class="hljs-keyword">var</span> loop = PlayerLoop.GetCurrentPlayerLoop();
    Cysharp.Threading.Tasks.PlayerLoopHelper.Initialize(<span class="hljs-keyword">ref</span> loop);
}
</code></pre>
<p>If you import Unity's <code>Entities</code> package, that resets the custom player loop to default at <code>BeforeSceneLoad</code> and injects ECS's loop. When Unity calls ECS's inject method after UniTask's initialize method, UniTask will no longer work.</p>
<p>To solve this issue, you can re-initialize the UniTask PlayerLoop after ECS is initialized.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// Get ECS Loop.</span>
<span class="hljs-keyword">var</span> playerLoop = ScriptBehaviourUpdateOrder.CurrentPlayerLoop;

<span class="hljs-comment">// Setup UniTask's PlayerLoop.</span>
PlayerLoopHelper.Initialize(<span class="hljs-keyword">ref</span> playerLoop);
</code></pre>
<p>You can diagnose whether UniTask's player loop is ready by calling <code>PlayerLoopHelper.IsInjectedUniTaskPlayerLoop()</code>. And also <code>PlayerLoopHelper.DumpCurrentPlayerLoop</code> logs all current playerloops to console.</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">Start</span>()</span>
{
    UnityEngine.Debug.Log(<span class="hljs-string">"UniTaskPlayerLoop ready? "</span> + PlayerLoopHelper.IsInjectedUniTaskPlayerLoop());
    PlayerLoopHelper.DumpCurrentPlayerLoop();
}
</code></pre>
<p>You can optimize loop cost slightly by remove unuse PlayerLoopTiming injection. You can call <code>PlayerLoopHelper.Initialize(InjectPlayerLoopTimings)</code> on initialize.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> loop = PlayerLoop.GetCurrentPlayerLoop();
PlayerLoopHelper.Initialize(<span class="hljs-keyword">ref</span> loop, InjectPlayerLoopTimings.Minimum); <span class="hljs-comment">// minimum is Update | FixedUpdate | LastPostLateUpdate</span>
</code></pre>
<p><code>InjectPlayerLoopTimings</code> has three preset, <code>All</code> and <code>Standard</code>(All without last except LastPostLateUpdate), <code>Minimum</code>(<code>Update | FixedUpdate | LastPostLateUpdate</code>). Default is All and you can combine custom inject timings like <code>InjectPlayerLoopTimings.Update | InjectPlayerLoopTimings.FixedUpdate | InjectPlayerLoopTimings.PreLateUpdate</code>.</p>
<p>You can make error to use uninjected <code>PlayerLoopTiming</code> by <a href="https://github.com/dotnet/roslyn-analyzers/blob/master/src/Microsoft.CodeAnalysis.BannedApiAnalyzers/BannedApiAnalyzers.Help.md" rel="noopener noreferrer">Microsoft.CodeAnalysis.BannedApiAnalyzers</a>. For example, you can setup <code>BannedSymbols.txt</code> like this for <code>InjectPlayerLoopTimings.Minimum</code>.</p>
<pre><code class="hljs language-txt">F:Cysharp.Threading.Tasks.PlayerLoopTiming.Initialization; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastInitialization; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.EarlyUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastEarlyUpdate; Isn't injected this PlayerLoop in this project.d
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastFixedUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PreUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastPreUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PreLateUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastPreLateUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.PostLateUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.TimeUpdate; Isn't injected this PlayerLoop in this project.
F:Cysharp.Threading.Tasks.PlayerLoopTiming.LastTimeUpdate; Isn't injected this PlayerLoop in this project.
</code></pre>
<p>You can configure <code>RS0030</code> severity to error.</p>
<p><img src="https://user-images.githubusercontent.com/46207/109150837-bb933880-77ac-11eb-85ba-4fd15819dbd0.png" alt="image"></p>
<h2 id="async-void-vs-async-unitaskvoid">async void vs async UniTaskVoid</h2>
<p><code>async void</code> is a standard C# task system so it does not run on UniTask systems. It is better not to use it. <code>async UniTaskVoid</code> is a lightweight version of <code>async UniTask</code> because it does not have awaitable completion and reports errors immediately to <code>UniTaskScheduler.UnobservedTaskException</code>. If you don't require awaiting (fire and forget), using <code>UniTaskVoid</code> is better. Unfortunately to dismiss warning, you're required to call <code>Forget()</code>.</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">FireAndForgetMethod</span>()</span>
{
    <span class="hljs-comment">// do anything...</span>
    <span class="hljs-keyword">await</span> UniTask.Yield();
}

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Caller</span>()</span>
{
    FireAndForgetMethod().Forget();
}
</code></pre>
<p>Also UniTask has the <code>Forget</code> method, it is similar to <code>UniTaskVoid</code> and has the same effects. However <code>UniTaskVoid</code> is more efficient if you completely don't use <code>await</code>。</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> UniTask <span class="hljs-title">DoAsync</span>()</span>
{
    <span class="hljs-comment">// do anything...</span>
    <span class="hljs-keyword">await</span> UniTask.Yield();
}

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Caller</span>()</span>
{
    DoAsync().Forget();
}
</code></pre>
<p>To use an async lambda registered to an event, don't use <code>async void</code>. Instead you can use <code>UniTask.Action</code> or <code>UniTask.UnityAction</code>, both of which create a delegate via <code>async UniTaskVoid</code> lambda.</p>
<pre><code class="hljs language-csharp">Action actEvent;
UnityAction unityEvent; <span class="hljs-comment">// especially used in uGUI</span>

<span class="hljs-comment">// Bad: async void</span>
actEvent += <span class="hljs-keyword">async</span> () => { };
unityEvent += <span class="hljs-keyword">async</span> () => { };

<span class="hljs-comment">// Ok: create Action delegate by lambda</span>
actEvent += UniTask.Action(<span class="hljs-keyword">async</span> () => { <span class="hljs-keyword">await</span> UniTask.Yield(); });
unityEvent += UniTask.UnityAction(<span class="hljs-keyword">async</span> () => { <span class="hljs-keyword">await</span> UniTask.Yield(); });
</code></pre>
<p><code>UniTaskVoid</code> can also be used in MonoBehaviour's <code>Start</code> method.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">class</span> <span class="hljs-title">Sample</span> : <span class="hljs-title">MonoBehaviour</span>
{
    <span class="hljs-function"><span class="hljs-keyword">async</span> UniTaskVoid <span class="hljs-title">Start</span>()</span>
    {
        <span class="hljs-comment">// async init code.</span>
    }
}
</code></pre>
<h2 id="unitasktracker">UniTaskTracker</h2>
<p>useful for checking (leaked) UniTasks. You can open tracker window in <code>Window -> UniTask Tracker</code>.</p>
<p><img src="https://user-images.githubusercontent.com/46207/83527073-4434bf00-a522-11ea-86e9-3b3975b26266.png" alt="image"></p>
<ul>
<li>Enable AutoReload(Toggle) - Reload automatically.</li>
<li>Reload - Reload view.</li>
<li>GC.Collect - Invoke GC.Collect.</li>
<li>Enable Tracking(Toggle) - Start to track async/await UniTask. Performance impact: low.</li>
<li>Enable StackTrace(Toggle) - Capture StackTrace when task is started. Performance impact: high.</li>
</ul>
<p>UniTaskTracker is intended for debugging use only as enabling tracking and capturing stacktraces is useful but has a heavy performance impact. Recommended usage is to enable both tracking and stacktraces to find task leaks and to disable them both when done.</p>
<h2 id="external-assets">External Assets</h2>
<p>By default, UniTask supports TextMeshPro(<code>BindTo(TMP_Text)</code> and <code>TMP_InputField</code> event extensions like standard uGUI <code>InputField</code>), DOTween(<code>Tween</code> as awaitable) and Addressables(<code>AsyncOperationHandle</code> and <code>AsyncOperationHandle&#x3C;T></code> as awaitable).</p>
<p>There are defined in separated asmdefs like <code>UniTask.TextMeshPro</code>, <code>UniTask.DOTween</code>, <code>UniTask.Addressables</code>.</p>
<p>TextMeshPro and Addressables support are automatically enabled when importing their packages from package manager.
However for DOTween support, after importing from the <a href="https://assetstore.unity.com/packages/tools/animation/dotween-hotween-v2-27676r" rel="noopener noreferrer">DOTWeen assets</a> and define the scripting define symbol <code>UNITASK_DOTWEEN_SUPPORT</code> to enable it.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// sequential</span>
<span class="hljs-keyword">await</span> transform.DOMoveX(<span class="hljs-number">2</span>, <span class="hljs-number">10</span>);
<span class="hljs-keyword">await</span> transform.DOMoveZ(<span class="hljs-number">5</span>, <span class="hljs-number">20</span>);

<span class="hljs-comment">// parallel with cancellation</span>
<span class="hljs-keyword">var</span> ct = <span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy();

<span class="hljs-keyword">await</span> UniTask.WhenAll(
    transform.DOMoveX(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>).WithCancellation(ct),
    transform.DOScale(<span class="hljs-number">10</span>, <span class="hljs-number">3</span>).WithCancellation(ct));
</code></pre>
<p>DOTween support's default behaviour(<code>await</code>, <code>WithCancellation</code>, <code>ToUniTask</code>) awaits tween is killed. It works on both Complete(true/false) and Kill(true/false). But if you want to reuse tweens (<code>SetAutoKill(false)</code>), it does not work as expected. If you want to await for another timing, the following extension methods exist in Tween, <code>AwaitForComplete</code>, <code>AwaitForPause</code>, <code>AwaitForPlay</code>, <code>AwaitForRewind</code>, <code>AwaitForStepComplete</code>.</p>
<h2 id="asyncenumerable-and-async-linq">AsyncEnumerable and Async LINQ</h2>
<p>Unity 2020.2 supports C# 8.0 so you can use <code>await foreach</code>. This is the new Update notation in the async era.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// Unity 2020.2, C# 8.0</span>
<span class="hljs-keyword">await</span> <span class="hljs-keyword">foreach</span> (<span class="hljs-keyword">var</span> _ <span class="hljs-keyword">in</span> UniTaskAsyncEnumerable.EveryUpdate().WithCancellation(token))
{
    Debug.Log(<span class="hljs-string">"Update() "</span> + Time.frameCount);
}
</code></pre>
<p>In a C# 7.3 environment, you can use the <code>ForEachAsync</code> method to work in almost the same way.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// C# 7.3(Unity 2018.3~)</span>
<span class="hljs-keyword">await</span> UniTaskAsyncEnumerable.EveryUpdate().ForEachAsync(_ =>
{
    Debug.Log(<span class="hljs-string">"Update() "</span> + Time.frameCount);
}, token);
</code></pre>
<p><code>UniTask.WhenEach</code> that is similar to .NET 9's <code>Task.WhenEach</code> can consume new way for await multiple tasks.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">await</span> <span class="hljs-keyword">foreach</span> (<span class="hljs-keyword">var</span> result <span class="hljs-keyword">in</span> UniTask.WhenEach(task1, task2, task3))
{
    <span class="hljs-comment">// The result is of type WhenEachResult&#x3C;T>.</span>
    <span class="hljs-comment">// It contains either \`T Result\` or \`Exception Exception\`.</span>
    <span class="hljs-comment">// You can check \`IsCompletedSuccessfully\` or \`IsFaulted\` to determine whether to access \`.Result\` or \`.Exception\`.</span>
    <span class="hljs-comment">// If you want to throw an exception when \`IsFaulted\` and retrieve the result when successful, use \`GetResult()\`.</span>
    Debug.Log(result.GetResult());
}
</code></pre>
<p>UniTaskAsyncEnumerable implements asynchronous LINQ, similar to LINQ in <code>IEnumerable&#x3C;T></code> or Rx in <code>IObservable&#x3C;T></code>. All standard LINQ query operators can be applied to asynchronous streams. For example, the following code shows how to apply a Where filter to a button-click asynchronous stream that runs once every two clicks.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">await</span> okButton.OnClickAsAsyncEnumerable().Where((x, i) => i % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>).ForEachAsync(_ =>
{
});
</code></pre>
<p>Fire and Forget style(for example, event handling), you can also use <code>Subscribe</code>.</p>
<pre><code class="hljs language-csharp">okButton.OnClickAsAsyncEnumerable().Where((x, i) => i % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>).Subscribe(_ =>
{
});
</code></pre>
<p>Async LINQ is enabled when <code>using Cysharp.Threading.Tasks.Linq;</code>, and <code>UniTaskAsyncEnumerable</code> is defined in <code>UniTask.Linq</code> asmdef.</p>
<p>It's closer to UniRx (Reactive Extensions), but UniTaskAsyncEnumerable is a pull-based asynchronous stream, whereas Rx was a push-based asynchronous stream. Note that although similar, the characteristics are different and the details behave differently along with them.</p>
<p><code>UniTaskAsyncEnumerable</code> is the entry point like <code>Enumerable</code>. In addition to the standard query operators, there are other generators for Unity such as <code>EveryUpdate</code>, <code>Timer</code>, <code>TimerFrame</code>, <code>Interval</code>, <code>IntervalFrame</code>, and <code>EveryValueChanged</code>. And also added additional UniTask original query operators like <code>Append</code>, <code>Prepend</code>, <code>DistinctUntilChanged</code>, <code>ToHashSet</code>, <code>Buffer</code>, <code>CombineLatest</code>,<code>Merge</code> <code>Do</code>, <code>Never</code>, <code>ForEachAsync</code>, <code>Pairwise</code>, <code>Publish</code>, <code>Queue</code>, <code>Return</code>, <code>SkipUntil</code>, <code>TakeUntil</code>, <code>SkipUntilCanceled</code>, <code>TakeUntilCanceled</code>, <code>TakeLast</code>, <code>Subscribe</code>.</p>
<p>The method with Func as an argument has three additional overloads, <code>***Await</code>, <code>***AwaitWithCancellation</code>.</p>
<pre><code class="hljs language-csharp">Select(Func&#x3C;T, TR> selector)
SelectAwait(Func&#x3C;T, UniTask&#x3C;TR>> selector)
SelectAwaitWithCancellation(Func&#x3C;T, CancellationToken, UniTask&#x3C;TR>> selector)
</code></pre>
<p>If you want to use the <code>async</code> method inside the func, use the <code>***Await</code> or <code>***AwaitWithCancellation</code>.</p>
<p>How to create an async iterator: C# 8.0 supports async iterator(<code>async yield return</code>) but it only allows <code>IAsyncEnumerable&#x3C;T></code> and of course requires C# 8.0. UniTask supports <code>UniTaskAsyncEnumerable.Create</code> method to create custom async iterator.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// IAsyncEnumerable, C# 8.0 version of async iterator. ( do not use this style, IAsyncEnumerable is not controled in UniTask).</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">async</span> IAsyncEnumerable&#x3C;<span class="hljs-built_in">int</span>> <span class="hljs-title">MyEveryUpdate</span>(<span class="hljs-params">[EnumeratorCancellation]CancellationToken cancelationToken = <span class="hljs-literal">default</span></span>)</span>
{
    <span class="hljs-keyword">var</span> frameCount = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">await</span> UniTask.Yield();
    <span class="hljs-keyword">while</span> (!token.IsCancellationRequested)
    {
        <span class="hljs-keyword">yield</span> <span class="hljs-keyword">return</span> frameCount++;
        <span class="hljs-keyword">await</span> UniTask.Yield();
    }
}

<span class="hljs-comment">// UniTaskAsyncEnumerable.Create and use \`await writer.YieldAsync\` instead of \`yield return\`.</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">IUniTaskAsyncEnumerable</span>&#x3C;<span class="hljs-title">int</span>> <span class="hljs-title">MyEveryUpdate</span>()</span>
{
    <span class="hljs-comment">// writer(IAsyncWriter&#x3C;T>) has \`YieldAsync(value)\` method.</span>
    <span class="hljs-keyword">return</span> UniTaskAsyncEnumerable.Create&#x3C;<span class="hljs-built_in">int</span>>(<span class="hljs-keyword">async</span> (writer, token) =>
    {
        <span class="hljs-keyword">var</span> frameCount = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">await</span> UniTask.Yield();
        <span class="hljs-keyword">while</span> (!token.IsCancellationRequested)
        {
            <span class="hljs-keyword">await</span> writer.YieldAsync(frameCount++); <span class="hljs-comment">// instead of \`yield return\`</span>
            <span class="hljs-keyword">await</span> UniTask.Yield();
        }
    });
}
</code></pre>
<h2 id="awaitable-events">Awaitable Events</h2>
<p>All uGUI component implements <code>***AsAsyncEnumerable</code> to convert asynchronous streams of events.</p>
<pre><code class="hljs language-csharp"><span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>()</span>
{
    <span class="hljs-comment">// In default, used button.GetCancellationTokenOnDestroy to manage lieftime of async</span>
    <span class="hljs-keyword">await</span> button.OnClickAsync();
    <span class="hljs-keyword">await</span> button.OnClickAsync();
    <span class="hljs-keyword">await</span> button.OnClickAsync();
    Debug.Log(<span class="hljs-string">"Three times clicked"</span>);
}

<span class="hljs-comment">// more efficient way</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>()</span>
{
    <span class="hljs-keyword">using</span> (<span class="hljs-keyword">var</span> handler = button.GetAsyncClickEventHandler())
    {
        <span class="hljs-keyword">await</span> handler.OnClickAsync();
        <span class="hljs-keyword">await</span> handler.OnClickAsync();
        <span class="hljs-keyword">await</span> handler.OnClickAsync();
        Debug.Log(<span class="hljs-string">"Three times clicked"</span>);
    }
}

<span class="hljs-comment">// use async LINQ</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>(<span class="hljs-params">CancellationToken token</span>)</span>
{
    <span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().Take(<span class="hljs-number">3</span>).Last();
    Debug.Log(<span class="hljs-string">"Three times clicked"</span>);
}

<span class="hljs-comment">// use async LINQ2</span>
<span class="hljs-function"><span class="hljs-keyword">async</span> UniTask <span class="hljs-title">TripleClick</span>(<span class="hljs-params">CancellationToken token</span>)</span>
{
    <span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().Take(<span class="hljs-number">3</span>).ForEachAsync(_ =>
    {
        Debug.Log(<span class="hljs-string">"Every clicked"</span>);
    });
    Debug.Log(<span class="hljs-string">"Three times clicked, complete."</span>);
}
</code></pre>
<p>All MonoBehaviour message events can convert async-streams by <code>AsyncTriggers</code> that can be enabled by <code>using Cysharp.Threading.Tasks.Triggers;</code>. AsyncTrigger can be created using <code>GetAsync***Trigger</code> and triggers itself as UniTaskAsyncEnumerable.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> trigger = <span class="hljs-keyword">this</span>.GetOnCollisionEnterAsyncHandler();
<span class="hljs-keyword">await</span> trigger.OnCollisionEnterAsync();
<span class="hljs-keyword">await</span> trigger.OnCollisionEnterAsync();
<span class="hljs-keyword">await</span> trigger.OnCollisionEnterAsync();

<span class="hljs-comment">// every moves.</span>
<span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.GetAsyncMoveTrigger().ForEachAsync(axisEventData =>
{
});
</code></pre>
<p><code>AsyncReactiveProperty</code>, <code>AsyncReadOnlyReactiveProperty</code> is UniTask's version of ReactiveProperty. <code>BindTo</code> extension method of <code>IUniTaskAsyncEnumerable&#x3C;T></code> for binding asynchronous stream values to Unity components(Text/Selectable/TMP/Text).</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">var</span> rp = <span class="hljs-keyword">new</span> AsyncReactiveProperty&#x3C;<span class="hljs-built_in">int</span>>(<span class="hljs-number">99</span>);

<span class="hljs-comment">// AsyncReactiveProperty itself is IUniTaskAsyncEnumerable, you can query by LINQ</span>
rp.ForEachAsync(x =>
{
    Debug.Log(x);
}, <span class="hljs-keyword">this</span>.GetCancellationTokenOnDestroy()).Forget();

rp.Value = <span class="hljs-number">10</span>; <span class="hljs-comment">// push 10 to all subscriber</span>
rp.Value = <span class="hljs-number">11</span>; <span class="hljs-comment">// push 11 to all subscriber</span>

<span class="hljs-comment">// WithoutCurrent ignore initial value</span>
<span class="hljs-comment">// BindTo bind stream value to unity components.</span>
rp.WithoutCurrent().BindTo(<span class="hljs-keyword">this</span>.textComponent);

<span class="hljs-keyword">await</span> rp.WaitAsync(); <span class="hljs-comment">// wait until next value set</span>

<span class="hljs-comment">// also exists ToReadOnlyAsyncReactiveProperty</span>
<span class="hljs-keyword">var</span> rp2 = <span class="hljs-keyword">new</span> AsyncReactiveProperty&#x3C;<span class="hljs-built_in">int</span>>(<span class="hljs-number">99</span>);
<span class="hljs-keyword">var</span> rorp = rp.CombineLatest(rp2, (x, y) => (x, y)).ToReadOnlyAsyncReactiveProperty(CancellationToken.None);
</code></pre>
<p>A pull-type asynchronous stream does not get the next values until the asynchronous processing in the sequence is complete. This could spill data from push-type events such as buttons.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// can not get click event during 3 seconds complete.</span>
<span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().ForEachAwaitAsync(<span class="hljs-keyword">async</span> x =>
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>));
});
</code></pre>
<p>It is useful (prevent double-click) but not useful sometimes.</p>
<p>Using the <code>Queue()</code> method will also queue events during asynchronous processing.</p>
<pre><code class="hljs language-csharp"><span class="hljs-comment">// queued message in asynchronous processing</span>
<span class="hljs-keyword">await</span> button.OnClickAsAsyncEnumerable().Queue().ForEachAwaitAsync(<span class="hljs-keyword">async</span> x =>
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>));
});
</code></pre>
<p>Or use <code>Subscribe</code>, fire and forget style.</p>
<pre><code class="hljs language-csharp">button.OnClickAsAsyncEnumerable().Subscribe(<span class="hljs-keyword">async</span> x =>
{
    <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>));
});
</code></pre>
<h2 id="channel">Channel</h2>
<p><code>Channel</code> is the same as <a href="https://docs.microsoft.com/en-us/dotnet/api/system.threading.channels?view=netcore-3.1" rel="noopener noreferrer">System.Threading.Tasks.Channels</a> which is similar to a GoLang Channel.</p>
<p>Currently it only supports multiple-producer, single-consumer unbounded channels. It can create by <code>Channel.CreateSingleConsumerUnbounded&#x3C;T>()</code>.</p>
<p>For producer(<code>.Writer</code>), use <code>TryWrite</code> to push value and <code>TryComplete</code> to complete channel. For consumer(<code>.Reader</code>), use <code>TryRead</code>, <code>WaitToReadAsync</code>, <code>ReadAsync</code>, <code>Completion</code> and <code>ReadAllAsync</code> to read queued messages.</p>
<p><code>ReadAllAsync</code> returns <code>IUniTaskAsyncEnumerable&#x3C;T></code> so query LINQ operators. Reader only allows single-consumer but uses <code>.Publish()</code> query operator to enable multicast message. For example, make pub/sub utility.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">AsyncMessageBroker</span>&#x3C;<span class="hljs-title">T</span>> : <span class="hljs-title">IDisposable</span>
{
    Channel&#x3C;T> channel;

    IConnectableUniTaskAsyncEnumerable&#x3C;T> multicastSource;
    IDisposable connection;

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">AsyncMessageBroker</span>()</span>
    {
        channel = Channel.CreateSingleConsumerUnbounded&#x3C;T>();
        multicastSource = channel.Reader.ReadAllAsync().Publish();
        connection = multicastSource.Connect(); <span class="hljs-comment">// Publish returns IConnectableUniTaskAsyncEnumerable.</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Publish</span>(<span class="hljs-params">T <span class="hljs-keyword">value</span></span>)</span>
    {
        channel.Writer.TryWrite(<span class="hljs-keyword">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> IUniTaskAsyncEnumerable&#x3C;T> <span class="hljs-title">Subscribe</span>()</span>
    {
        <span class="hljs-keyword">return</span> multicastSource;
    }

    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Dispose</span>()</span>
    {
        channel.Writer.TryComplete();
        connection.Dispose();
    }
}
</code></pre>
<h2 id="vs-awaitable">vs Awaitable</h2>
<p>Unity 6 introduces the awaitable type, <a href="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Awaitable.html" rel="noopener noreferrer">Awaitable</a>. To put it simply, Awaitable can be considered a subset of UniTask, and in fact, Awaitable's design was influenced by UniTask. It should be able to handle PlayerLoop-based awaits, pooled Tasks, and support for cancellation with <code>CancellationToken</code> in a similar way. With its inclusion in the standard library, you may wonder whether to continue using UniTask or migrate to Awaitable. Here's a brief guide.</p>
<p>First, the functionality provided by Awaitable is equivalent to what coroutines offer. Instead of <code>yield return</code>, you use await; <code>await NextFrameAsync()</code> replaces <code>yield return null</code>; and there are equivalents for <code>WaitForSeconds</code> and <code>EndOfFrame</code>. However, that's the extent of it. Being coroutine-based in terms of functionality, it lacks Task-based features. In practical application development using async/await, operations like <code>WhenAll</code> are essential. Additionally, UniTask enables many frame-based operations (such as <code>DelayFrame</code>) and more flexible PlayerLoopTiming control, which are not available in Awaitable. Of course, there's no Tracker Window either.</p>
<p>Therefore, I recommend using UniTask for application development. UniTask is a superset of Awaitable and includes many essential features. For library development, where you want to avoid external dependencies, using Awaitable as a return type for methods would be appropriate. Awaitable can be converted to UniTask using <code>AsUniTask</code>, so there's no issue in handling Awaitable-based functionality within the UniTask library. Of course, if you don't need to worry about dependencies, using UniTask would be the best choice even for library development.</p>
<h2 id="for-unit-testing">For Unit Testing</h2>
<p>Unity's <code>[UnityTest]</code> attribute can test coroutine(IEnumerator) but can not test async. <code>UniTask.ToCoroutine</code> bridges async/await to coroutine so you can test async methods.</p>
<pre><code class="hljs language-csharp">[<span class="hljs-meta">UnityTest</span>]
<span class="hljs-function"><span class="hljs-keyword">public</span> IEnumerator <span class="hljs-title">DelayIgnore</span>()</span> => UniTask.ToCoroutine(<span class="hljs-keyword">async</span> () =>
{
    <span class="hljs-keyword">var</span> time = Time.realtimeSinceStartup;

    Time.timeScale = <span class="hljs-number">0.5f</span>;
    <span class="hljs-keyword">try</span>
    {
        <span class="hljs-keyword">await</span> UniTask.Delay(TimeSpan.FromSeconds(<span class="hljs-number">3</span>), ignoreTimeScale: <span class="hljs-literal">true</span>);

        <span class="hljs-keyword">var</span> elapsed = Time.realtimeSinceStartup - time;
        Assert.AreEqual(<span class="hljs-number">3</span>, (<span class="hljs-built_in">int</span>)Math.Round(TimeSpan.FromSeconds(elapsed).TotalSeconds, MidpointRounding.ToEven));
    }
    <span class="hljs-keyword">finally</span>
    {
        Time.timeScale = <span class="hljs-number">1.0f</span>;
    }
});
</code></pre>
<p>UniTask's own unit tests are written using Unity Test Runner and <a href="https://github.com/Cysharp/RuntimeUnitTestToolkit" rel="noopener noreferrer">Cysharp/RuntimeUnitTestToolkit</a> to integrate with CI and check if IL2CPP is working.</p>
<h2 id="threadpool-limitation">ThreadPool limitation</h2>
<p>Most UniTask methods run on a single thread (PlayerLoop), with only <code>UniTask.Run</code>(<code>Task.Run</code> equivalent) and <code>UniTask.SwitchToThreadPool</code> running on a thread pool. If you use a thread pool, it won't work with WebGL and so on.</p>
<p><code>UniTask.Run</code> is now deprecated. You can use <code>UniTask.RunOnThreadPool</code> instead. And also consider whether you can use <code>UniTask.Create</code> or <code>UniTask.Void</code>.</p>
<h2 id="ienumeratortounitask-limitation">IEnumerator.ToUniTask limitation</h2>
<p>You can convert coroutine(IEnumerator) to UniTask(or await directly) but it has some limitations.</p>
<ul>
<li><code>WaitForEndOfFrame</code>/<code>WaitForFixedUpdate</code>/<code>Coroutine</code> is not supported.</li>
<li>Consuming loop timing is not the same as <code>StartCoroutine</code>, it uses the specified <code>PlayerLoopTiming</code> and the default <code>PlayerLoopTiming.Update</code> is run before MonoBehaviour's <code>Update</code> and <code>StartCoroutine</code>'s loop.</li>
</ul>
<p>If you want fully compatible conversion from coroutine to async, use the <code>IEnumerator.ToUniTask(MonoBehaviour coroutineRunner)</code> overload. It executes StartCoroutine on an instance of the argument MonoBehaviour and waits for it to complete in UniTask.</p>
<h2 id="for-unityeditor">For UnityEditor</h2>
<p>UniTask can run on Unity Editor like an Editor Coroutine. However, there are some limitations.</p>
<ul>
<li>UniTask.Delay's DelayType.DeltaTime, UnscaledDeltaTime do not work correctly because they can not get deltaTime in editor. Therefore run on EditMode, automatically change DelayType to <code>DelayType.Realtime</code> that wait for the right time.</li>
<li>All PlayerLoopTiming run on the timing <code>EditorApplication.update</code>.</li>
<li><code>-batchmode</code> with <code>-quit</code> does not work because Unity does not run <code>EditorApplication.update</code> and quit after a single frame. Instead, don't use <code>-quit</code> and quit manually with <code>EditorApplication.Exit(0)</code>.</li>
</ul>
<h2 id="compare-with-standard-task-api">Compare with Standard Task API</h2>
<p>UniTask has many standard Task-like APIs. This table shows what the alternative apis are.</p>
<p>Use standard type.</p>





















<table><thead><tr><th>.NET Type</th><th>UniTask Type</th></tr></thead><tbody><tr><td><code>IProgress&#x3C;T></code></td><td>---</td></tr><tr><td><code>CancellationToken</code></td><td>---</td></tr><tr><td><code>CancellationTokenSource</code></td><td>---</td></tr></tbody></table>
<p>Use UniTask type.</p>

































































































































<table><thead><tr><th>.NET Type</th><th>UniTask Type</th></tr></thead><tbody><tr><td><code>Task</code>/<code>ValueTask</code></td><td><code>UniTask</code></td></tr><tr><td><code>Task&#x3C;T></code>/<code>ValueTask&#x3C;T></code></td><td><code>UniTask&#x3C;T></code></td></tr><tr><td><code>async void</code></td><td><code>async UniTaskVoid</code></td></tr><tr><td><code>+= async () => { }</code></td><td><code>UniTask.Void</code>, <code>UniTask.Action</code>, <code>UniTask.UnityAction</code></td></tr><tr><td>---</td><td><code>UniTaskCompletionSource</code></td></tr><tr><td><code>TaskCompletionSource&#x3C;T></code></td><td><code>UniTaskCompletionSource&#x3C;T></code>/<code>AutoResetUniTaskCompletionSource&#x3C;T></code></td></tr><tr><td><code>ManualResetValueTaskSourceCore&#x3C;T></code></td><td><code>UniTaskCompletionSourceCore&#x3C;T></code></td></tr><tr><td><code>IValueTaskSource</code></td><td><code>IUniTaskSource</code></td></tr><tr><td><code>IValueTaskSource&#x3C;T></code></td><td><code>IUniTaskSource&#x3C;T></code></td></tr><tr><td><code>ValueTask.IsCompleted</code></td><td><code>UniTask.Status.IsCompleted()</code></td></tr><tr><td><code>ValueTask&#x3C;T>.IsCompleted</code></td><td><code>UniTask&#x3C;T>.Status.IsCompleted()</code></td></tr><tr><td><code>new Progress&#x3C;T></code></td><td><code>Progress.Create&#x3C;T></code></td></tr><tr><td><code>CancellationToken.Register(UnsafeRegister)</code></td><td><code>CancellationToken.RegisterWithoutCaptureExecutionContext</code></td></tr><tr><td><code>CancellationTokenSource.CancelAfter</code></td><td><code>CancellationTokenSource.CancelAfterSlim</code></td></tr><tr><td><code>Channel.CreateUnbounded&#x3C;T>(false){ SingleReader = true }</code></td><td><code>Channel.CreateSingleConsumerUnbounded&#x3C;T></code></td></tr><tr><td><code>IAsyncEnumerable&#x3C;T></code></td><td><code>IUniTaskAsyncEnumerable&#x3C;T></code></td></tr><tr><td><code>IAsyncEnumerator&#x3C;T></code></td><td><code>IUniTaskAsyncEnumerator&#x3C;T></code></td></tr><tr><td><code>IAsyncDisposable</code></td><td><code>IUniTaskAsyncDisposable</code></td></tr><tr><td><code>Task.Delay</code></td><td><code>UniTask.Delay</code></td></tr><tr><td><code>Task.Yield</code></td><td><code>UniTask.Yield</code></td></tr><tr><td><code>Task.Run</code></td><td><code>UniTask.RunOnThreadPool</code></td></tr><tr><td><code>Task.WhenAll</code></td><td><code>UniTask.WhenAll</code></td></tr><tr><td><code>Task.WhenAny</code></td><td><code>UniTask.WhenAny</code></td></tr><tr><td><code>Task.WhenEach</code></td><td><code>UniTask.WhenEach</code></td></tr><tr><td><code>Task.CompletedTask</code></td><td><code>UniTask.CompletedTask</code></td></tr><tr><td><code>Task.FromException</code></td><td><code>UniTask.FromException</code></td></tr><tr><td><code>Task.FromResult</code></td><td><code>UniTask.FromResult</code></td></tr><tr><td><code>Task.FromCanceled</code></td><td><code>UniTask.FromCanceled</code></td></tr><tr><td><code>Task.ContinueWith</code></td><td><code>UniTask.ContinueWith</code></td></tr><tr><td><code>TaskScheduler.UnobservedTaskException</code></td><td><code>UniTaskScheduler.UnobservedTaskException</code></td></tr></tbody></table>
<h2 id="pooling-configuration">Pooling Configuration</h2>
<p>UniTask aggressively caches async promise objects to achieve zero allocation (for technical details, see blog post <a href="https://medium.com/@neuecc/unitask-v2-zero-allocation-async-await-for-unity-with-asynchronous-linq-1aa9c96aa7dd" rel="noopener noreferrer">UniTask v2 — Zero Allocation async/await for Unity, with Asynchronous LINQ</a>). By default, it caches all promises but you can configure <code>TaskPool.SetMaxPoolSize</code> to your value, the value indicates cache size per type. <code>TaskPool.GetCacheSizeInfo</code> returns currently cached objects in pool.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">foreach</span> (<span class="hljs-keyword">var</span> (type, size) <span class="hljs-keyword">in</span> TaskPool.GetCacheSizeInfo())
{
    Debug.Log(type + <span class="hljs-string">":"</span> + size);
}
</code></pre>
<h2 id="allocation-on-profiler">Allocation on Profiler</h2>
<p>In UnityEditor the profiler shows allocation of compiler generated AsyncStateMachine but it only occurs in debug(development) build. C# Compiler generates AsyncStateMachine as class on Debug build and as struct on Release build.</p>
<p>Unity supports Code Optimization option starting in 2020.1 (right, footer).</p>
<p><img src="https://user-images.githubusercontent.com/46207/89967342-2f944600-dc8c-11ea-99fc-0b74527a16f6.png" alt=""></p>
<p>You can change C# compiler optimization to release to remove AsyncStateMachine allocation in development builds. This optimization option can also be set via <code>Compilation.CompilationPipeline-codeOptimization</code>, and <code>Compilation.CodeOptimization</code>.</p>
<h2 id="unitasksynchronizationcontext">UniTaskSynchronizationContext</h2>
<p>Unity's default SynchronizationContext(<code>UnitySynchronizationContext</code>) is a poor implementation for performance. UniTask bypasses <code>SynchronizationContext</code>(and <code>ExecutionContext</code>) so it does not use it but if exists in <code>async Task</code>, still used it. <code>UniTaskSynchronizationContext</code> is a replacement of <code>UnitySynchronizationContext</code> which is better for performance.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">SyncContextInjecter</span>
{
    [<span class="hljs-meta">RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)</span>]
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Inject</span>()</span>
    {
        SynchronizationContext.SetSynchronizationContext(<span class="hljs-keyword">new</span> UniTaskSynchronizationContext());
    }
}
</code></pre>
<p>This is an optional choice and is not always recommended; <code>UniTaskSynchronizationContext</code> is less performant than <code>async UniTask</code> and is not a complete UniTask replacement. It also does not guarantee full behavioral compatibility with the <code>UnitySynchronizationContext</code>.</p>
<h2 id="api-references">API References</h2>
<p>UniTask's API References are hosted at <a href="https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.html" rel="noopener noreferrer">cysharp.github.io/UniTask</a> by <a href="https://dotnet.github.io/docfx/" rel="noopener noreferrer">DocFX</a> and <a href="https://github.com/Cysharp/DocfxTemplate" rel="noopener noreferrer">Cysharp/DocfXTemplate</a>.</p>
<p>For example, UniTask's factory methods can be seen at <a href="https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.UniTask.html#methods-1" rel="noopener noreferrer">UniTask#methods</a>. UniTaskAsyncEnumerable's factory/extension methods can be seen at <a href="https://cysharp.github.io/UniTask/api/Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.html#methods-1" rel="noopener noreferrer">UniTaskAsyncEnumerable#methods</a>.</p>
<h2 id="upm-package">UPM Package</h2>
<h3 id="install-via-git-url">Install via git URL</h3>
<p>Requires a version of unity that supports path query parameter for git packages (Unity >= 2019.3.4f1, Unity >= 2020.1a21). You can add <code>https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask</code> to Package Manager</p>
<p><img src="https://user-images.githubusercontent.com/46207/79450714-3aadd100-8020-11ea-8aae-b8d87fc4d7be.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/46207/83702872-e0f17c80-a648-11ea-8183-7469dcd4f810.png" alt="image"></p>
<p>or add <code>"com.cysharp.unitask": "https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask"</code> to <code>Packages/manifest.json</code>.</p>
<p>If you want to set a target version, UniTask uses the <code>*.*.*</code> release tag so you can specify a version like <code>#2.1.0</code>. For example <code>https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask#2.1.0</code>.</p>
<h2 id="net-core">.NET Core</h2>
<p>For .NET Core, use NuGet.</p>
<blockquote>
<p>PM> Install-Package <a href="https://www.nuget.org/packages/UniTask" rel="noopener noreferrer">UniTask</a></p>
</blockquote>
<p>UniTask of .NET Core version is a subset of Unity UniTask with PlayerLoop dependent methods removed.</p>
<p>It runs at higher performance than the standard Task/ValueTask, but you should be careful to ignore the ExecutionContext/SynchronizationContext when using it. <code>AsyncLocal</code> also does not work because it ignores ExecutionContext.</p>
<p>If you use UniTask internally, but provide ValueTask as an external API, you can write it like the following(Inspired by <a href="https://github.com/mgravell/PooledAwait" rel="noopener noreferrer">PooledAwait</a>).</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">ZeroAllocAsyncAwaitInDotNetCore</span>
{
    <span class="hljs-function"><span class="hljs-keyword">public</span> ValueTask&#x3C;<span class="hljs-built_in">int</span>> <span class="hljs-title">DoAsync</span>(<span class="hljs-params"><span class="hljs-built_in">int</span> x, <span class="hljs-built_in">int</span> y</span>)</span>
    {
        <span class="hljs-keyword">return</span> Core(<span class="hljs-keyword">this</span>, x, y);

        <span class="hljs-function"><span class="hljs-keyword">static</span> <span class="hljs-keyword">async</span> UniTask&#x3C;<span class="hljs-built_in">int</span>> <span class="hljs-title">Core</span>(<span class="hljs-params">ZeroAllocAsyncAwaitInDotNetCore self, <span class="hljs-built_in">int</span> x, <span class="hljs-built_in">int</span> y</span>)</span>
        {
            <span class="hljs-comment">// do anything...</span>
            <span class="hljs-keyword">await</span> Task.Delay(TimeSpan.FromSeconds(x + y));
            <span class="hljs-keyword">await</span> UniTask.Yield();

            <span class="hljs-keyword">return</span> <span class="hljs-number">10</span>;
        }
    }
}

<span class="hljs-comment">// UniTask does not return to original SynchronizationContext but you can use helper \`ReturnToCurrentSynchronizationContext\`.</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> ValueTask <span class="hljs-title">TestAsync</span>()</span>
{
    <span class="hljs-keyword">await</span> <span class="hljs-keyword">using</span> (UniTask.ReturnToCurrentSynchronizationContext())
    {
        <span class="hljs-keyword">await</span> UniTask.SwitchToThreadPool();
        <span class="hljs-comment">// do anything..</span>
    }
}
</code></pre>
<p>.NET Core version is intended to allow users to use UniTask as an interface when sharing code with Unity (such as <a href="https://github.com/Cysharp/MagicOnion/" rel="noopener noreferrer">Cysharp/MagicOnion</a>). .NET Core version of UniTask enables smooth code sharing.</p>
<p>Utility methods such as WhenAll which are equivalent to UniTask are provided as <a href="https://github.com/Cysharp/ValueTaskSupplement" rel="noopener noreferrer">Cysharp/ValueTaskSupplement</a>.</p>
<h2 id="license">License</h2>
<p>This library is under the MIT License.</p></div>`},{kind:`Live README`,title:`Unity ML-Agents README`,packageName:`com.unity.ml-agents`,repoUrl:`https://github.com/Unity-Technologies/ml-agents`,sourceUrl:`https://raw.githubusercontent.com/Unity-Technologies/ml-agents/develop/Readme.md`,fetched:!0,markdown:`# Unity ML-Agents Toolkit

[![docs badge](https://img.shields.io/badge/docs-reference-blue.svg)](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest)

[![license badge](https://img.shields.io/badge/license-Apache--2.0-green.svg)](https://github.com/Unity-Technologies/ml-agents/blob/release/4.0.0/LICENSE.md)

([latest release](https://github.com/Unity-Technologies/ml-agents/releases/tag/latest_release)) ([all releases](https://github.com/Unity-Technologies/ml-agents/releases))

**The Unity Machine Learning Agents Toolkit** (ML-Agents) is an open-source project that enables games and simulations to serve as environments for training intelligent agents. We provide implementations (based on PyTorch) of state-of-the-art algorithms to enable game developers and hobbyists to easily train intelligent agents for 2D, 3D and VR/AR games. Researchers can also use the provided simple-to-use Python API to train Agents using reinforcement learning, imitation learning, neuroevolution, or any other methods. These trained agents can be used for multiple purposes, including controlling NPC behavior (in a variety of settings such as multi-agent and adversarial), automated testing of game builds and evaluating different game design decisions pre-release. The ML-Agents Toolkit is mutually beneficial for both game developers and AI researchers as it provides a central platform where advances in AI can be evaluated on Unity’s rich environments and then made accessible to the wider research and game developer communities.

## Features
- 17+ [example Unity environments](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Learning-Environment-Examples.html)
- Support for multiple environment configurations and training scenarios
- Flexible Unity SDK that can be integrated into your game or custom Unity scene
- Support for training single-agent, multi-agent cooperative, and multi-agent competitive scenarios via several Deep Reinforcement Learning algorithms (PPO, SAC, MA-POCA, self-play).
- Support for learning from demonstrations through two Imitation Learning algorithms (BC and GAIL).
- Quickly and easily add your own [custom training algorithm](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-Custom-Trainer-Plugin.html) and/or components.
- Easily definable Curriculum Learning scenarios for complex tasks
- Train robust agents using environment randomization
- Flexible agent control with On Demand Decision Making
- Train using multiple concurrent Unity environment instances
- Utilizes the [Inference Engine](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Inference-Engine.html) to provide native cross-platform support
- Unity environment [control from Python](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-LLAPI.html)
- Wrap Unity learning environments as a [gym](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-Gym-API.html) environment
- Wrap Unity learning environments as a [PettingZoo](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-PettingZoo-API.html) environment

## Releases & Documentation

> **⚠️ Documentation Migration Notice**
> We have moved to [Unity Package documentation](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest) as the **primary developer documentation** and have **deprecated** the maintenance of [web docs](https://unity-technologies.github.io/ml-agents/). Please use the Unity Package documentation for the most up-to-date information.

The table below shows our latest release, including our \`develop\` branch which is under active development and may be unstable. A few helpful guidelines:

- The [Versioning page](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Versioning.html) overviews how we manage our GitHub releases and the versioning process for each of the ML-Agents components.
- The [Releases page](https://github.com/Unity-Technologies/ml-agents/releases) contains details of the changes between releases.
- The [Migration page](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Migrating.html) contains details on how to upgrade from earlier releases of the ML-Agents Toolkit.
- The \`com.unity.ml-agents\` package is [verified](https://docs.unity3d.com/2020.1/Documentation/Manual/pack-safe.html) for Unity 2020.1 and later. Verified packages releases are numbered 1.0.x.

|      **Version**       |  **Release Date**   |                                  **Source**                                   |                                                 **Documentation**                                                  |                                      **Download**                                      |                  **Python Package**                   |                                   **Unity Package**                                   |
|:----------------------:|:-------------------:|:-----------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|:-----------------------------------------------------:|:-------------------------------------------------------------------------------------:|
|     **Release 23**     | **August 28, 2025** | **[source](https://github.com/Unity-Technologies/ml-agents/tree/release_23)** |              **[docs](https://docs.unity3d.com/Packages/com.unity.ml-agents@4.0/manual/index.html)**               | **[download](https://github.com/Unity-Technologies/ml-agents/archive/release_23.zip)** | **[1.1.0](https://pypi.org/project/mlagents/1.1.0/)** |                                       **4.0.0**                                       |
| **develop (unstable)** |         --          |    [source](https://github.com/Unity-Technologies/ml-agents/tree/develop)     | [docs](https://github.com/Unity-Technologies/ml-agents/tree/develop/com.unity.ml-agents/Documentation~/index.md)   |    [download](https://github.com/Unity-Technologies/ml-agents/archive/develop.zip)     |                         --                            |                                          --                                           |



If you are a researcher interested in a discussion of Unity as an AI platform, see a pre-print of our [reference paper on Unity and the ML-Agents Toolkit](https://arxiv.org/abs/1809.02627).

If you use Unity or the ML-Agents Toolkit to conduct research, we ask that you cite the following paper as a reference:

\`\`\`
@article{juliani2020,
  title={Unity: A general platform for intelligent agents},
  author={Juliani, Arthur and Berges, Vincent-Pierre and Teng, Ervin and Cohen, Andrew and Harper, Jonathan and Elion, Chris and Goy, Chris and Gao, Yuan and Henry, Hunter and Mattar, Marwan and Lange, Danny},
  journal={arXiv preprint arXiv:1809.02627},
  url={https://arxiv.org/pdf/1809.02627.pdf},
  year={2020}
}
\`\`\`

Additionally, if you use the MA-POCA trainer in your research, we ask that you cite the following paper as a reference:

\`\`\`
@article{cohen2022,
  title={On the Use and Misuse of Absorbing States in Multi-agent Reinforcement Learning},
  author={Cohen, Andrew and Teng, Ervin and Berges, Vincent-Pierre and Dong, Ruo-Ping and Henry, Hunter and Mattar, Marwan and Zook, Alexander and Ganguly, Sujoy},
  journal={RL in Games Workshop AAAI 2022},
  url={http://aaai-rlg.mlanctot.info/papers/AAAI22-RLG_paper_32.pdf},
  year={2022}
}
\`\`\`


## Additional Resources

* [Unity Discussions](https://discussions.unity.com/tag/ml-agents)
* [ML-Agents tutorials by CodeMonkeyUnity](https://www.youtube.com/playlist?list=PLzDRvYVwl53vehwiN_odYJkPBzcqFw110)
* [Introduction to ML-Agents by Huggingface](https://huggingface.co/learn/deep-rl-course/en/unit5/introduction)
* [Community created ML-Agents projects](https://discussions.unity.com/t/post-your-ml-agents-project/816756)
* [ML-Agents models on Huggingface](https://huggingface.co/models?library=ml-agents)
* [Blog posts](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Blog-posts.html)
* [Discord](https://discord.com/channels/489222168727519232/1202574086115557446)

## Community and Feedback

The ML-Agents Toolkit is an open-source project and we encourage and welcome contributions. If you wish to contribute, be sure to review our [contribution guidelines](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/CONTRIBUTING.html) and [code of conduct](https://github.com/Unity-Technologies/ml-agents/blob/release/4.0.0/CODE_OF_CONDUCT.md).

For problems with the installation and setup of the ML-Agents Toolkit, or discussions about how to best setup or train your agents, please create a new thread on the [Unity ML-Agents discussion forum](https://discussions.unity.com/tag/ml-agents). Be sure to include as many details as possible to help others assist you effectively. If you run into any other problems using the ML-Agents Toolkit or have a specific feature request, please [submit a GitHub issue](https://github.com/Unity-Technologies/ml-agents/issues).

Please tell us which samples you would like to see shipped with the ML-Agents Unity package by replying to [this discussion thread](https://discussions.unity.com/t/help-shape-the-future-of-ml-agents/1661019).

## Privacy

In order to improve the developer experience for Unity ML-Agents Toolkit, we have added in-editor analytics. Please refer to "Information that is passively collected by Unity" in the [Unity Privacy Policy](https://unity3d.com/legal/privacy-policy).
`,legacyHtml:`<div><h1>Unity ML-Agents Toolkit</h1>
<p><a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest"><img src="https://img.shields.io/badge/docs-reference-blue.svg" alt="docs badge"></a></p>
<p><a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/blob/release/4.0.0/LICENSE.md"><img src="https://img.shields.io/badge/license-Apache--2.0-green.svg" alt="license badge"></a></p>
<p>(<a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/releases/tag/latest_release">latest release</a>) (<a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/releases">all releases</a>)</p>
<p><strong>The Unity Machine Learning Agents Toolkit</strong> (ML-Agents) is an open-source project that enables games and simulations to serve as environments for training intelligent agents. We provide implementations (based on PyTorch) of state-of-the-art algorithms to enable game developers and hobbyists to easily train intelligent agents for 2D, 3D and VR/AR games. Researchers can also use the provided simple-to-use Python API to train Agents using reinforcement learning, imitation learning, neuroevolution, or any other methods. These trained agents can be used for multiple purposes, including controlling NPC behavior (in a variety of settings such as multi-agent and adversarial), automated testing of game builds and evaluating different game design decisions pre-release. The ML-Agents Toolkit is mutually beneficial for both game developers and AI researchers as it provides a central platform where advances in AI can be evaluated on Unity’s rich environments and then made accessible to the wider research and game developer communities.</p>
<h2>Features</h2>
<ul>
<li>17+ <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Learning-Environment-Examples.html">example Unity environments</a></li>
<li>Support for multiple environment configurations and training scenarios</li>
<li>Flexible Unity SDK that can be integrated into your game or custom Unity scene</li>
<li>Support for training single-agent, multi-agent cooperative, and multi-agent competitive scenarios via several Deep Reinforcement Learning algorithms (PPO, SAC, MA-POCA, self-play).</li>
<li>Support for learning from demonstrations through two Imitation Learning algorithms (BC and GAIL).</li>
<li>Quickly and easily add your own <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-Custom-Trainer-Plugin.html">custom training algorithm</a> and/or components.</li>
<li>Easily definable Curriculum Learning scenarios for complex tasks</li>
<li>Train robust agents using environment randomization</li>
<li>Flexible agent control with On Demand Decision Making</li>
<li>Train using multiple concurrent Unity environment instances</li>
<li>Utilizes the <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Inference-Engine.html">Inference Engine</a> to provide native cross-platform support</li>
<li>Unity environment <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-LLAPI.html">control from Python</a></li>
<li>Wrap Unity learning environments as a <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-Gym-API.html">gym</a> environment</li>
<li>Wrap Unity learning environments as a <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-PettingZoo-API.html">PettingZoo</a> environment</li>
</ul>
<h2>Releases &amp; Documentation</h2>
<blockquote>
<p><strong>⚠️ Documentation Migration Notice</strong>
We have moved to <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest">Unity Package documentation</a> as the <strong>primary developer documentation</strong> and have <strong>deprecated</strong> the maintenance of <a rel="noopener noreferrer" href="https://unity-technologies.github.io/ml-agents/">web docs</a>. Please use the Unity Package documentation for the most up-to-date information.</p>
</blockquote>
<p>The table below shows our latest release, including our <code>develop</code> branch which is under active development and may be unstable. A few helpful guidelines:</p>
<ul>
<li>The <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Versioning.html">Versioning page</a> overviews how we manage our GitHub releases and the versioning process for each of the ML-Agents components.</li>
<li>The <a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/releases">Releases page</a> contains details of the changes between releases.</li>
<li>The <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Migrating.html">Migration page</a> contains details on how to upgrade from earlier releases of the ML-Agents Toolkit.</li>
<li>The <code>com.unity.ml-agents</code> package is <a rel="noopener noreferrer" href="https://docs.unity3d.com/2020.1/Documentation/Manual/pack-safe.html">verified</a> for Unity 2020.1 and later. Verified packages releases are numbered 1.0.x.</li>
</ul>
<table>
<thead>
<tr>
<th align="center"><strong>Version</strong></th>
<th align="center"><strong>Release Date</strong></th>
<th align="center"><strong>Source</strong></th>
<th align="center"><strong>Documentation</strong></th>
<th align="center"><strong>Download</strong></th>
<th align="center"><strong>Python Package</strong></th>
<th align="center"><strong>Unity Package</strong></th>
</tr>
</thead>
<tbody><tr>
<td align="center"><strong>Release 23</strong></td>
<td align="center"><strong>August 28, 2025</strong></td>
<td align="center"><strong><a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/tree/release_23">source</a></strong></td>
<td align="center"><strong><a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@4.0/manual/index.html">docs</a></strong></td>
<td align="center"><strong><a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/archive/release_23.zip">download</a></strong></td>
<td align="center"><strong><a rel="noopener noreferrer" href="https://pypi.org/project/mlagents/1.1.0/">1.1.0</a></strong></td>
<td align="center"><strong>4.0.0</strong></td>
</tr>
<tr>
<td align="center"><strong>develop (unstable)</strong></td>
<td align="center">--</td>
<td align="center"><a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/tree/develop">source</a></td>
<td align="center"><a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/tree/develop/com.unity.ml-agents/Documentation~/index.md">docs</a></td>
<td align="center"><a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/archive/develop.zip">download</a></td>
<td align="center">--</td>
<td align="center">--</td>
</tr>
</tbody></table>
<p>If you are a researcher interested in a discussion of Unity as an AI platform, see a pre-print of our <a rel="noopener noreferrer" href="https://arxiv.org/abs/1809.02627">reference paper on Unity and the ML-Agents Toolkit</a>.</p>
<p>If you use Unity or the ML-Agents Toolkit to conduct research, we ask that you cite the following paper as a reference:</p>
<pre><code class="hljs ">@article{juliani2020,
  title={Unity: A general platform for intelligent agents},
  author={Juliani, Arthur and Berges, Vincent-Pierre and Teng, Ervin and Cohen, Andrew and Harper, Jonathan and Elion, Chris and Goy, Chris and Gao, Yuan and Henry, Hunter and Mattar, Marwan and Lange, Danny},
  journal={arXiv preprint arXiv:1809.02627},
  url={https://arxiv.org/pdf/1809.02627.pdf},
  year={2020}
}</code></pre><p>Additionally, if you use the MA-POCA trainer in your research, we ask that you cite the following paper as a reference:</p>
<pre><code class="hljs ">@article{cohen2022,
  title={On the Use and Misuse of Absorbing States in Multi-agent Reinforcement Learning},
  author={Cohen, Andrew and Teng, Ervin and Berges, Vincent-Pierre and Dong, Ruo-Ping and Henry, Hunter and Mattar, Marwan and Zook, Alexander and Ganguly, Sujoy},
  journal={RL in Games Workshop AAAI 2022},
  url={http://aaai-rlg.mlanctot.info/papers/AAAI22-RLG_paper_32.pdf},
  year={2022}
}</code></pre><h2>Additional Resources</h2>
<ul>
<li><a rel="noopener noreferrer" href="https://discussions.unity.com/tag/ml-agents">Unity Discussions</a></li>
<li><a rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLzDRvYVwl53vehwiN_odYJkPBzcqFw110">ML-Agents tutorials by CodeMonkeyUnity</a></li>
<li><a rel="noopener noreferrer" href="https://huggingface.co/learn/deep-rl-course/en/unit5/introduction">Introduction to ML-Agents by Huggingface</a></li>
<li><a rel="noopener noreferrer" href="https://discussions.unity.com/t/post-your-ml-agents-project/816756">Community created ML-Agents projects</a></li>
<li><a rel="noopener noreferrer" href="https://huggingface.co/models?library=ml-agents">ML-Agents models on Huggingface</a></li>
<li><a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Blog-posts.html">Blog posts</a></li>
<li><a rel="noopener noreferrer" href="https://discord.com/channels/489222168727519232/1202574086115557446">Discord</a></li>
</ul>
<h2>Community and Feedback</h2>
<p>The ML-Agents Toolkit is an open-source project and we encourage and welcome contributions. If you wish to contribute, be sure to review our <a rel="noopener noreferrer" href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/CONTRIBUTING.html">contribution guidelines</a> and <a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/blob/release/4.0.0/CODE_OF_CONDUCT.md">code of conduct</a>.</p>
<p>For problems with the installation and setup of the ML-Agents Toolkit, or discussions about how to best setup or train your agents, please create a new thread on the <a rel="noopener noreferrer" href="https://discussions.unity.com/tag/ml-agents">Unity ML-Agents discussion forum</a>. Be sure to include as many details as possible to help others assist you effectively. If you run into any other problems using the ML-Agents Toolkit or have a specific feature request, please <a rel="noopener noreferrer" href="https://github.com/Unity-Technologies/ml-agents/issues">submit a GitHub issue</a>.</p>
<p>Please tell us which samples you would like to see shipped with the ML-Agents Unity package by replying to <a rel="noopener noreferrer" href="https://discussions.unity.com/t/help-shape-the-future-of-ml-agents/1661019">this discussion thread</a>.</p>
<h2>Privacy</h2>
<p>In order to improve the developer experience for Unity ML-Agents Toolkit, we have added in-editor analytics. Please refer to &quot;Information that is passively collected by Unity&quot; in the <a rel="noopener noreferrer" href="https://unity3d.com/legal/privacy-policy">Unity Privacy Policy</a>.</p>
</div>`,currentHtml:`<div><h1 id="unity-ml-agents-toolkit">Unity ML-Agents Toolkit</h1>
<p><a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest" rel="noopener noreferrer"><img src="https://img.shields.io/badge/docs-reference-blue.svg" alt="docs badge"></a></p>
<p><a href="https://github.com/Unity-Technologies/ml-agents/blob/release/4.0.0/LICENSE.md" rel="noopener noreferrer"><img src="https://img.shields.io/badge/license-Apache--2.0-green.svg" alt="license badge"></a></p>
<p>(<a href="https://github.com/Unity-Technologies/ml-agents/releases/tag/latest_release" rel="noopener noreferrer">latest release</a>) (<a href="https://github.com/Unity-Technologies/ml-agents/releases" rel="noopener noreferrer">all releases</a>)</p>
<p><strong>The Unity Machine Learning Agents Toolkit</strong> (ML-Agents) is an open-source project that enables games and simulations to serve as environments for training intelligent agents. We provide implementations (based on PyTorch) of state-of-the-art algorithms to enable game developers and hobbyists to easily train intelligent agents for 2D, 3D and VR/AR games. Researchers can also use the provided simple-to-use Python API to train Agents using reinforcement learning, imitation learning, neuroevolution, or any other methods. These trained agents can be used for multiple purposes, including controlling NPC behavior (in a variety of settings such as multi-agent and adversarial), automated testing of game builds and evaluating different game design decisions pre-release. The ML-Agents Toolkit is mutually beneficial for both game developers and AI researchers as it provides a central platform where advances in AI can be evaluated on Unity’s rich environments and then made accessible to the wider research and game developer communities.</p>
<h2 id="features">Features</h2>
<ul>
<li>17+ <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Learning-Environment-Examples.html" rel="noopener noreferrer">example Unity environments</a></li>
<li>Support for multiple environment configurations and training scenarios</li>
<li>Flexible Unity SDK that can be integrated into your game or custom Unity scene</li>
<li>Support for training single-agent, multi-agent cooperative, and multi-agent competitive scenarios via several Deep Reinforcement Learning algorithms (PPO, SAC, MA-POCA, self-play).</li>
<li>Support for learning from demonstrations through two Imitation Learning algorithms (BC and GAIL).</li>
<li>Quickly and easily add your own <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-Custom-Trainer-Plugin.html" rel="noopener noreferrer">custom training algorithm</a> and/or components.</li>
<li>Easily definable Curriculum Learning scenarios for complex tasks</li>
<li>Train robust agents using environment randomization</li>
<li>Flexible agent control with On Demand Decision Making</li>
<li>Train using multiple concurrent Unity environment instances</li>
<li>Utilizes the <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Inference-Engine.html" rel="noopener noreferrer">Inference Engine</a> to provide native cross-platform support</li>
<li>Unity environment <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-LLAPI.html" rel="noopener noreferrer">control from Python</a></li>
<li>Wrap Unity learning environments as a <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-Gym-API.html" rel="noopener noreferrer">gym</a> environment</li>
<li>Wrap Unity learning environments as a <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Python-PettingZoo-API.html" rel="noopener noreferrer">PettingZoo</a> environment</li>
</ul>
<h2 id="releases-documentation">Releases &#x26; Documentation</h2>
<blockquote>
<p><strong>⚠️ Documentation Migration Notice</strong>
We have moved to <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest" rel="noopener noreferrer">Unity Package documentation</a> as the <strong>primary developer documentation</strong> and have <strong>deprecated</strong> the maintenance of <a href="https://unity-technologies.github.io/ml-agents/" rel="noopener noreferrer">web docs</a>. Please use the Unity Package documentation for the most up-to-date information.</p>
</blockquote>
<p>The table below shows our latest release, including our <code>develop</code> branch which is under active development and may be unstable. A few helpful guidelines:</p>
<ul>
<li>The <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Versioning.html" rel="noopener noreferrer">Versioning page</a> overviews how we manage our GitHub releases and the versioning process for each of the ML-Agents components.</li>
<li>The <a href="https://github.com/Unity-Technologies/ml-agents/releases" rel="noopener noreferrer">Releases page</a> contains details of the changes between releases.</li>
<li>The <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Migrating.html" rel="noopener noreferrer">Migration page</a> contains details on how to upgrade from earlier releases of the ML-Agents Toolkit.</li>
<li>The <code>com.unity.ml-agents</code> package is <a href="https://docs.unity3d.com/2020.1/Documentation/Manual/pack-safe.html" rel="noopener noreferrer">verified</a> for Unity 2020.1 and later. Verified packages releases are numbered 1.0.x.</li>
</ul>
































<table><thead><tr><th align="center"><strong>Version</strong></th><th align="center"><strong>Release Date</strong></th><th align="center"><strong>Source</strong></th><th align="center"><strong>Documentation</strong></th><th align="center"><strong>Download</strong></th><th align="center"><strong>Python Package</strong></th><th align="center"><strong>Unity Package</strong></th></tr></thead><tbody><tr><td align="center"><strong>Release 23</strong></td><td align="center"><strong>August 28, 2025</strong></td><td align="center"><strong><a href="https://github.com/Unity-Technologies/ml-agents/tree/release_23" rel="noopener noreferrer">source</a></strong></td><td align="center"><strong><a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@4.0/manual/index.html" rel="noopener noreferrer">docs</a></strong></td><td align="center"><strong><a href="https://github.com/Unity-Technologies/ml-agents/archive/release_23.zip" rel="noopener noreferrer">download</a></strong></td><td align="center"><strong><a href="https://pypi.org/project/mlagents/1.1.0/" rel="noopener noreferrer">1.1.0</a></strong></td><td align="center"><strong>4.0.0</strong></td></tr><tr><td align="center"><strong>develop (unstable)</strong></td><td align="center">--</td><td align="center"><a href="https://github.com/Unity-Technologies/ml-agents/tree/develop" rel="noopener noreferrer">source</a></td><td align="center"><a href="https://github.com/Unity-Technologies/ml-agents/tree/develop/com.unity.ml-agents/Documentation~/index.md" rel="noopener noreferrer">docs</a></td><td align="center"><a href="https://github.com/Unity-Technologies/ml-agents/archive/develop.zip" rel="noopener noreferrer">download</a></td><td align="center">--</td><td align="center">--</td></tr></tbody></table>
<p>If you are a researcher interested in a discussion of Unity as an AI platform, see a pre-print of our <a href="https://arxiv.org/abs/1809.02627" rel="noopener noreferrer">reference paper on Unity and the ML-Agents Toolkit</a>.</p>
<p>If you use Unity or the ML-Agents Toolkit to conduct research, we ask that you cite the following paper as a reference:</p>
<pre><code>@article{juliani2020,
  title={Unity: A general platform for intelligent agents},
  author={Juliani, Arthur and Berges, Vincent-Pierre and Teng, Ervin and Cohen, Andrew and Harper, Jonathan and Elion, Chris and Goy, Chris and Gao, Yuan and Henry, Hunter and Mattar, Marwan and Lange, Danny},
  journal={arXiv preprint arXiv:1809.02627},
  url={https://arxiv.org/pdf/1809.02627.pdf},
  year={2020}
}
</code></pre>
<p>Additionally, if you use the MA-POCA trainer in your research, we ask that you cite the following paper as a reference:</p>
<pre><code>@article{cohen2022,
  title={On the Use and Misuse of Absorbing States in Multi-agent Reinforcement Learning},
  author={Cohen, Andrew and Teng, Ervin and Berges, Vincent-Pierre and Dong, Ruo-Ping and Henry, Hunter and Mattar, Marwan and Zook, Alexander and Ganguly, Sujoy},
  journal={RL in Games Workshop AAAI 2022},
  url={http://aaai-rlg.mlanctot.info/papers/AAAI22-RLG_paper_32.pdf},
  year={2022}
}
</code></pre>
<h2 id="additional-resources">Additional Resources</h2>
<ul>
<li><a href="https://discussions.unity.com/tag/ml-agents" rel="noopener noreferrer">Unity Discussions</a></li>
<li><a href="https://www.youtube.com/playlist?list=PLzDRvYVwl53vehwiN_odYJkPBzcqFw110" rel="noopener noreferrer">ML-Agents tutorials by CodeMonkeyUnity</a></li>
<li><a href="https://huggingface.co/learn/deep-rl-course/en/unit5/introduction" rel="noopener noreferrer">Introduction to ML-Agents by Huggingface</a></li>
<li><a href="https://discussions.unity.com/t/post-your-ml-agents-project/816756" rel="noopener noreferrer">Community created ML-Agents projects</a></li>
<li><a href="https://huggingface.co/models?library=ml-agents" rel="noopener noreferrer">ML-Agents models on Huggingface</a></li>
<li><a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/Blog-posts.html" rel="noopener noreferrer">Blog posts</a></li>
<li><a href="https://discord.com/channels/489222168727519232/1202574086115557446" rel="noopener noreferrer">Discord</a></li>
</ul>
<h2 id="community-and-feedback">Community and Feedback</h2>
<p>The ML-Agents Toolkit is an open-source project and we encourage and welcome contributions. If you wish to contribute, be sure to review our <a href="https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html?subfolder=/manual/CONTRIBUTING.html" rel="noopener noreferrer">contribution guidelines</a> and <a href="https://github.com/Unity-Technologies/ml-agents/blob/release/4.0.0/CODE_OF_CONDUCT.md" rel="noopener noreferrer">code of conduct</a>.</p>
<p>For problems with the installation and setup of the ML-Agents Toolkit, or discussions about how to best setup or train your agents, please create a new thread on the <a href="https://discussions.unity.com/tag/ml-agents" rel="noopener noreferrer">Unity ML-Agents discussion forum</a>. Be sure to include as many details as possible to help others assist you effectively. If you run into any other problems using the ML-Agents Toolkit or have a specific feature request, please <a href="https://github.com/Unity-Technologies/ml-agents/issues" rel="noopener noreferrer">submit a GitHub issue</a>.</p>
<p>Please tell us which samples you would like to see shipped with the ML-Agents Unity package by replying to <a href="https://discussions.unity.com/t/help-shape-the-future-of-ml-agents/1661019" rel="noopener noreferrer">this discussion thread</a>.</p>
<h2 id="privacy">Privacy</h2>
<p>In order to improve the developer experience for Unity ML-Agents Toolkit, we have added in-editor analytics. Please refer to "Information that is passively collected by Unity" in the <a href="https://unity3d.com/legal/privacy-policy" rel="noopener noreferrer">Unity Privacy Policy</a>.</p></div>`}],h={class:`readme-markdown-demo`},g={class:`demo-shell`},_={class:`demo-nav`,"aria-label":`README markdown fixtures`},v=[`onClick`],y=[`onClick`],b={key:0,class:`demo-content`},x={class:`demo-header`},S={class:`demo-kind`},C={key:0,class:`demo-source`},w=[`href`],T=[`href`],E={key:1,class:`demo-source`},D={class:`demo-source-markdown`},O={class:`demo-comparison`},k={class:`demo-pane`,"data-test":`before-pane`},A=[`data-fixture`],j=a(t({__name:`ReadmeMarkdownRendererDemo`,setup(t){let a=d(m[0]?.title||``),j=l(()=>m.find(e=>e.title===a.value)||m[0]),M=l(()=>m.filter(e=>e.kind===`Synthetic`)),N=l(()=>m.filter(e=>e.kind===`Live README`)),P=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``);return(t,l)=>(r(),f(`div`,h,[c(`div`,g,[c(`aside`,_,[l[0]||=c(`h2`,null,`Synthetic`,-1),(r(!0),f(s,null,n(M.value,t=>(r(),f(`button`,{key:t.title,class:e([`btn btn-link demo-nav-item`,{active:t.title===j.value.title}]),type:`button`,onClick:e=>a.value=t.title},u(t.title),11,v))),128)),l[1]||=c(`h2`,null,`Live README`,-1),(r(!0),f(s,null,n(N.value,t=>(r(),f(`button`,{key:t.title,class:e([`btn btn-link demo-nav-item`,{active:t.title===j.value.title}]),type:`button`,onClick:e=>a.value=t.title},u(t.title),11,y))),128))]),j.value?(r(),f(`section`,b,[c(`header`,x,[c(`div`,null,[c(`p`,S,u(j.value.kind),1),c(`h2`,null,u(j.value.title),1),j.value.kind===`Live README`?(r(),f(`p`,C,[c(`a`,{href:j.value.repoUrl,rel:`noopener noreferrer`,target:`_blank`},u(j.value.packageName),9,w),l[2]||=c(`span`,{"aria-hidden":`true`},` · `,-1),c(`a`,{href:j.value.sourceUrl,rel:`noopener noreferrer`,target:`_blank`},` source markdown `,8,T)])):(r(),f(`p`,E,` Generated local fixture using a synthetic package context for URL rewriting checks. `))]),j.value.kind===`Live README`?(r(),f(`p`,{key:0,class:e([`demo-fetch-state`,{warning:!j.value.fetched}])},u(j.value.fetched?`Fetched from raw GitHub content`:`Fallback sample: ${j.value.fetchError}`),3)):o(``,!0)]),c(`details`,D,[l[3]||=c(`summary`,null,`Markdown source`,-1),c(`pre`,null,[c(`code`,null,u(j.value.markdown),1)])]),c(`div`,O,[c(`article`,k,[l[4]||=c(`h3`,null,`Before: legacy marked renderer`,-1),i(p,{name:j.value.packageName,"readme-html":j.value.legacyHtml,"is-loading":!1},null,8,[`name`,`readme-html`])]),c(`article`,{class:`demo-pane`,"data-test":`after-pane`,"data-fixture":P(j.value.title)},[l[5]||=c(`h3`,null,`After: local GFM renderer`,-1),i(p,{name:j.value.packageName,"readme-html":j.value.currentHtml,"is-loading":!1},null,8,[`name`,`readme-html`])],8,A)])])):o(``,!0)])]))}}),[[`__scopeId`,`data-v-25446da6`]]);export{j as default};