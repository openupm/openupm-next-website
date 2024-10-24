import{_ as o,r as i,o as r,c,b as e,e as a,d as n,a as s}from"./app-Cu83vo63.js";const p="/assets/choose-droplet-size-DfY0m1ye.png",l="/assets/complete-droplet-setup-CAnp0UGE.png",u="/assets/edit-firewalls-1-DL2ydsG-.png",d="/assets/edit-firewalls-2-BECuWEjz.png",h="/assets/easypanel-welcome-DgB9IRzO.png",g="/assets/easypanel-settings-DZolrTFc.png",m="/assets/easypanel-add-service-BkLLk9pT.png",y="/assets/easypanel-add-verdaccio-Dvk44Tij.png",k="/assets/easypanel-verdaccio-storage-1-Cn-UYx4y.png",f="/assets/easypanel-verdaccio-storage-2-Bt4Yn21a.png",v="/assets/easypanel-verdaccio-storage-save-fhfqtYg7.png",b="/assets/easypanel-verdaccio-redeploy-Cxpt4Sii.png",w="/assets/easypanel-verdaccio-domains-tab-Dtt9P4GG.png",_="/assets/verdaccio-welcome-DMSmHnTI.png",q="/assets/verdaccio-package-list-CORgmCmV.png",P="/assets/unity-scoped-registry-added-B9jg61b1.png",x={},U=e("h1",{id:"host-your-private-unity-scoped-registry-in-just-15-minutes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#host-your-private-unity-scoped-registry-in-just-15-minutes"},[e("span",null,"Host Your Private Unity Scoped Registry in Just 15 Minutes")])],-1),T=e("p",null,"Whether you're a solo developer or part of a team, you've likely encountered the headache of managing reusable codes. Ensuring that your packages are easily accessible, version-controlled, and securely shared within your team is no small feat. A private Unity Package Manager (UPM) registry could be the solution you're looking for.",-1),S={href:"https://verdaccio.org/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://m.do.co/c/50e7f9860fa9",target:"_blank",rel:"noopener noreferrer"},j=s('<h2 id="why-not-use-an-existing-registry-provider" tabindex="-1"><a class="header-anchor" href="#why-not-use-an-existing-registry-provider"><span>Why Not Use an Existing Registry Provider?</span></a></h2><p>When you start with UPM packages, you might realize that not all registry providers work well with them. If you&#39;re eager to see how to set up your registry, feel free to jump to the next section. But if you&#39;re curious about the why, here&#39;s a quick rundown:</p><p><strong>Package name conventions are different.</strong> UPM packages follow the reverse domain notation and use names like <code>com.example.my-package</code>. This is different from what you see on NPMJS or GitHub Registry, where private package names look like <code>@scope/package-name</code>. To make these registries work with package names without <code>@scope/</code> can be quite hacky.</p><p><strong>Finding packages in Unity needs specific registry features.</strong> For your package to show up in the Unity package manager, the registry needs to understand specific features, like the <code>/-/all</code> endpoint or the <code>/-/v1/search</code> endpoint. Unfortunately, some big names like GitHub Registry and Azure Artifacts don&#39;t support these yet.</p><p>That&#39;s why we&#39;re going to set up our own registry with Verdaccio - a lightweight, easy-to-configure, private npm registry.</p><h2 id="choosing-your-tools-verdaccio-digitalocean" tabindex="-1"><a class="header-anchor" href="#choosing-your-tools-verdaccio-digitalocean"><span>Choosing Your Tools: Verdaccio &amp; DigitalOcean</span></a></h2>',6),V={href:"https://verdaccio.org/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://m.do.co/c/50e7f9860fa9",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"If you don't need to host your registry in the cloud, you can simply run Verdaccio on your local machine or on a server in your local network.",-1),M=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites"},[e("span",null,"Prerequisites")])],-1),I={href:"https://m.do.co/c/50e7f9860fa9",target:"_blank",rel:"noopener noreferrer"},A=e("em",null,"$200 in credits valid for 60 days",-1),R=e("p",null,"This guide requires little knowledge of managing a Linux server. You can follow the steps easily without any prior experience.",-1),B=e("h2",{id:"setup-easypanel-droplet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setup-easypanel-droplet"},[e("span",null,"Setup EasyPanel Droplet")])],-1),N={href:"https://easypanel.io/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://marketplace.digitalocean.com/apps/easypanel",target:"_blank",rel:"noopener noreferrer"},L=e("kbd",null,"Create EasyPanel Droplet",-1),z=s('<p>Choose a region close to your team, then scroll to the &quot;Choose Size&quot; section and select a plan that meets your requirements. The $6/month plan (Regular CPU, 1GB memory, 25GB SSD, 1TB transfer) is usually enough for most small teams. However, if you often publish large packages in the hundreds of megabytes, a plan with 2GB memory and a larger SSD disk is advisable.</p><p><img src="'+p+'" alt="Choose Droplet Size"></p><p>Next, consider the &quot;Backups&quot; option for added droplet durability, which involves enabling daily snapshots at an additional cost of 30% of the droplet price. If you&#39;re versed in Linux server management, you could opt for a different backup strategy, such as regularly backing up the Verdaccio folder to S3. Given that the starting price for DigitalOcean&#39;s S3 alternative, &quot;Spaces,&quot; is $5/month, enabling droplet backups is often a more affordable and simpler solution for most users. The choice is yours.</p><p>Choose between SSH Keys or Password for droplet access (opt for a password if you&#39;re not familiar with Linux server management). Ensure your key or password is stored securely. Although our demo doesn&#39;t require it, you might need it in the future.</p><p>To complete the setup, click the <kbd>Create Droplet</kbd> button at the bottom of the page. DigitalOcean may take a minute to prepare your droplet.</p><p><img src="'+l+'" alt="Complete Droplet Setup"></p><p>Now that our droplet is set up with the IP address <code>64.23.136.113</code>, we&#39;ll use this IP to access EasyPanel later.</p><p>Click on the droplet name to view its details. Then, click the &quot;Networking&quot; tab, scroll down to the &quot;Firewalls&quot; section, and click the <kbd>Edit</kbd> button to add some rules that allow access to the server.</p><p><img src="'+u+'" alt="Edit firewalls 1"></p><p>Click the <kbd>Create Firewall</kbd> button, enter a name for the firewall, and add the following rules for inbound traffic:</p><ul><li>Type: SSH</li><li>Type: HTTP</li><li>Type: HTTPS</li><li>Type: Custom, Protocol: TCP, Port: 3000</li></ul><p>The last rule is specifically for initial EasyPanel access. It can be removed after the setup is complete.</p><p>In the &quot;Apply to Droplets&quot; section, select the droplet you just created and click the <kbd>Create Firewall</kbd> button.</p><p><img src="'+d+'" alt="Edit firewalls 2"></p><h2 id="access-easypanel" tabindex="-1"><a class="header-anchor" href="#access-easypanel"><span>Access EasyPanel</span></a></h2><p>To access EasyPanel, open a new browser tab and navigate to <code>http://64.23.136.113:3000/</code>. Make sure to replace the IP address with your droplet&#39;s IP address. Upon visiting, you&#39;ll land on the EasyPanel login page. Here, you&#39;ll need to sign up by entering your email and a password. The free plan will cover our requirements, but EasyPanel offers a straightforward way to manage your server and applications, so consider upgrading to a paid plan if you find yourself needing additional features.</p><p><img src="'+h+'" alt="EasyPanel Welcome"></p><p>After signing in, click on the Settings icon located in the top right corner, then navigate to the &quot;Default Domain&quot; found under the &quot;General&gt;Panel Domain&quot; section.</p><p><img src="'+g+'" alt="EasyPanel Settings"></p><p>You&#39;ll now be able to access EasyPanel through a specific subdomain, such as <code>https://jw9v2i.easypanel.host/</code>. Remember to replace <code>jw9v2i</code> with the subdomain assigned to you. This subdomain supports HTTPS and is automatically managed by EasyPanel, providing a secure way to access your panel. Once you&#39;re set up with your subdomain, the port 3000 rule in the firewall settings is no longer necessary and can be removed for enhanced security.</p><h2 id="install-verdaccio-server" tabindex="-1"><a class="header-anchor" href="#install-verdaccio-server"><span>Install Verdaccio Server</span></a></h2><p>Open the EasyPanel dashboard and click the <kbd>Create Project</kbd> button. Name your project &quot;upm&quot; and then click on the project name to view its details.</p><p>Next, click the <kbd>+ Service</kbd> button and look for &quot;verdaccio&quot; under the &quot;Pick a template&quot; section.</p><p><img src="'+m+'" alt="EasyPanel Add Service"></p><p>Then, click on the verdaccio icon. Ensure the App Service Image is set to something like <code>verdaccio/verdaccio:5</code>, and click the <kbd>Create</kbd> button to proceed.</p><p><img src="'+y+'" alt="EasyPanel Add Verdaccio"></p><p>Back on the project details page, you&#39;ll notice the Verdaccio service is now being created and will soon be up and running. It&#39;s quite a straightforward process!</p><h2 id="configure-verdaccio-server" tabindex="-1"><a class="header-anchor" href="#configure-verdaccio-server"><span>Configure Verdaccio Server</span></a></h2><p>The default setup of Verdaccio runs in a container, and its data does not persist during restarts. To address this, we need to configure Verdaccio to use persistent storage for both packages and configuration.</p><p>Navigate to the &quot;Storage&quot; tab within your Verdaccio service settings in EasyPanel. Click the <kbd>Add Volume Mount</kbd> button to create a new volume. Name this volume &quot;verdaccio-storage&quot; and set the path to <code>/verdaccio/storage</code>.</p><p><img src="'+k+'" alt="EasyPanel verdaccio add storage 1"></p><p>Next, click the <kbd>Add File Mount</kbd> button to establish a new file mount, setting the path to <code>/verdaccio/conf/config.yaml</code>.</p><p><img src="'+f+`" alt="EasyPanel verdaccio add storage 2"></p><p>Next, use the <kbd>Edit</kbd> button to input below configuration into the <code>config.yaml</code> file.</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Do not configure host and port under \`listen\` in this file</span>
<span class="token comment"># as it will be ignored when using docker.</span>
<span class="token comment"># see https://verdaccio.org/docs/en/docker#docker-and-custom-port-configuration</span>
<span class="token comment">#</span>
<span class="token comment"># Look here for more config file examples:</span>
<span class="token comment"># https://github.com/verdaccio/verdaccio/tree/5.x/conf</span>

<span class="token comment"># path to a directory with all packages</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span> /verdaccio/storage/data

<span class="token comment"># path to a directory with plugins to include</span>
<span class="token key atrule">plugins</span><span class="token punctuation">:</span> /verdaccio/plugins

<span class="token comment"># https://verdaccio.org/docs/configuration#authentication</span>
<span class="token key atrule">auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> /verdaccio/storage/htpasswd
    <span class="token comment"># Maximum amount of users allowed to register, defaults to &quot;+infinity&quot;.</span>
    <span class="token comment"># You can set this to -1 to disable registration.</span>
    <span class="token key atrule">max_users</span><span class="token punctuation">:</span> <span class="token number">1000</span>
    <span class="token comment"># Hash algorithm, possible options are: &quot;bcrypt&quot;, &quot;md5&quot;, &quot;sha1&quot;, &quot;crypt&quot;.</span>
    <span class="token key atrule">algorithm</span><span class="token punctuation">:</span> bcrypt

<span class="token comment"># Learn how to protect your packages</span>
<span class="token comment"># https://verdaccio.org/docs/protect-your-dependencies/</span>
<span class="token comment"># https://verdaccio.org/docs/configuration#packages</span>
<span class="token key atrule">packages</span><span class="token punctuation">:</span>
  <span class="token key atrule">&#39;**&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># you can specify usernames/groupnames (depending on your auth plugin)</span>
    <span class="token comment"># and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span>

    <span class="token comment"># allow only authenticated users to access all packages</span>
    <span class="token key atrule">access</span><span class="token punctuation">:</span> $authenticated

    <span class="token comment"># allow only authenticated users to publish/unpublish packages</span>
    <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated
    <span class="token key atrule">unpublish</span><span class="token punctuation">:</span> $authenticated

<span class="token comment"># https://verdaccio.org/docs/configuration#server</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">keepAliveTimeout</span><span class="token punctuation">:</span> <span class="token number">60</span>

<span class="token comment"># https://verdaccio.org/docs/configuration#max-body-size</span>
<span class="token key atrule">max_body_size</span><span class="token punctuation">:</span> 100mb

<span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
  <span class="token key atrule">audit</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># https://verdaccio.org/docs/logger</span>
<span class="token comment"># log settings</span>
<span class="token key atrule">log</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> stdout<span class="token punctuation">,</span> <span class="token key atrule">format</span><span class="token punctuation">:</span> pretty<span class="token punctuation">,</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> http <span class="token punctuation">}</span>
</code></pre></div><p>Verify everything is correct and ensure the &quot;Mount Path&quot; fields are free of any leading or ending spaces. Click the <kbd>Save</kbd> button to finalize your configuration.</p><p><img src="`+v+'" alt="EasyPanel verdaccio storage save"></p><p>Then, click the <kbd>Deploy</kbd> button to apply the changes. Navigate to the &quot;Deployment&quot; tab, where you&#39;ll see a new deployment message listed in the history.</p><p><img src="'+b+'" alt="EasyPanel verdaccio redeploy"></p><p>Proceed to the &quot;Domain&quot; tab and note the domain name <code>https://upm-verdaccio.jw9v2i.easypanel.host/</code> to access the Verdaccio web interface. This domain is a subdomain of your EasyPanel domain, incorporating both the project name &quot;upm&quot; and the service name &quot;verdaccio.&quot; EasyPanel&#39;s ability to automatically generate accessible subdomains for services is a key feature that eliminates the need for manual subdomain configuration and reverse proxy setup for service access.</p><p><img src="'+w+'" alt="EasyPanel verdaccio domains tab"></p><p>Upon opening the Verdaccio web interface, you&#39;ll encounter the login page.</p><p><img src="'+_+'" alt="Verdaccio welcome"></p><h2 id="create-a-user-account" tabindex="-1"><a class="header-anchor" href="#create-a-user-account"><span>Create a User Account</span></a></h2>',44),H={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},Y=s(`<p>Open your terminal and run the following commands to create a new user account on your Verdaccio registry:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> adduser <span class="token parameter variable">--registry</span> https://upm-verdaccio.jw9v2i.easypanel.host/
</code></pre></div><p>When prompted, enter a username, password, and public email address:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> notice Log <span class="token keyword">in</span> on https://upm-verdaccio.jw9v2i.easypanel.host/
Username: upmuser
Password:
Email: <span class="token punctuation">(</span>this IS public<span class="token punctuation">)</span> upmuser@example.com
Logged <span class="token keyword">in</span> on https://upm-verdaccio.jw9v2i.easypanel.host/.
</code></pre></div><h2 id="publishing-an-example-package" tabindex="-1"><a class="header-anchor" href="#publishing-an-example-package"><span>Publishing an Example Package</span></a></h2><p>To demonstrate how to publish a package, start by creating a folder named <code>com.example.demo</code> and navigate into it. Within this folder, create a <code>package.json</code> file with the following content:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.example.demo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;unity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020.3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;An example demo package&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>In practical scenarios, this package folder should be located under your Unity project&#39;s <code>Packages</code> folder, allowing the Unity editor to generate meta files for the package. Skipping this step will result in a warning from Unity about missing meta files, but for this demo, we&#39;ll proceed without it.</p><p>Next, publish the package to your Verdaccio registry with the following commands:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Navigate to your package directory</span>
<span class="token builtin class-name">cd</span> com.example.demo

<span class="token comment"># Publish the package</span>
<span class="token function">npm</span> publish <span class="token parameter variable">--registry</span> https://upm-verdaccio.jw9v2i.easypanel.host/
</code></pre></div><p>Upon successful publication, you&#39;ll see an output similar to this:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> notice
<span class="token function">npm</span> notice �  com.example.demo@1.0.0
<span class="token function">npm</span> notice <span class="token operator">==</span><span class="token operator">=</span> Tarball Contents <span class="token operator">==</span><span class="token operator">=</span>
<span class="token function">npm</span> notice 235B package.json
<span class="token function">npm</span> notice <span class="token operator">==</span><span class="token operator">=</span> Tarball Details <span class="token operator">==</span><span class="token operator">=</span>
<span class="token function">npm</span> notice name:          com.example.demo
<span class="token function">npm</span> notice version:       <span class="token number">1.0</span>.0
<span class="token function">npm</span> notice filename:      com.example.demo-1.0.0.tgz
<span class="token function">npm</span> notice package size:  <span class="token number">252</span> B
<span class="token function">npm</span> notice unpacked size: <span class="token number">235</span> B
<span class="token function">npm</span> notice shasum:        8e9fca6bd5f442886c56c3a26dea7ecbb2a1125b
<span class="token function">npm</span> notice integrity:     sha512-hPHfJUUkHgluv<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>V00fFAtrg3qFA<span class="token operator">==</span>
<span class="token function">npm</span> notice total files:   <span class="token number">1</span>
<span class="token function">npm</span> notice
<span class="token function">npm</span> notice Publishing to https://upm-verdaccio.jw9v2i.easypanel.host/ with tag latest and default access
+ com.example.demo@1.0.0
</code></pre></div><p>To view the published package, return to your browser, log in to Verdaccio with the user account you created, and navigate to the package list. If your package does not appear immediately, try refreshing the page.</p><p><img src="`+q+'" alt="Verdaccio package list"></p><h2 id="access-the-registry-in-unity" tabindex="-1"><a class="header-anchor" href="#access-the-registry-in-unity"><span>Access the Registry in Unity</span></a></h2>',15),G={href:"https://docs.unity3d.com/Manual/upm-config-scoped.html",target:"_blank",rel:"noopener noreferrer"},W=s(`<ul><li><strong>.npmrc File:</strong> Locate the <code>.npmrc</code> file, which stores the authentication details for accessing the registry.</li><li><strong>.upmconfig.toml Configuration:</strong> Create and configure a <code>.upmconfig.toml</code> file on your disk using the credentials from the <code>.npmrc</code> file. This step is essential for Unity to authenticate with your private registry.</li><li><strong>Scoped Registry Setup:</strong> In your Unity project, add a scoped registry through the project settings and specify <code>com.example</code> in the <code>scopes</code> field. This configuration allows Unity to recognize and use packages from your Verdaccio registry.</li></ul><p>For those leveraging the OpenUPM CLI, the setup process is streamlined:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openupm login <span class="token parameter variable">-u</span> upmuser <span class="token parameter variable">-p</span> ******** <span class="token parameter variable">-e</span> upmuser@example.com --always-auth <span class="token parameter variable">-r</span> https://upm-verdaccio.jw9v2i.easypanel.host/
notice auth you are authenticated as <span class="token string">&#39;upmuser&#39;</span>
notice config saved to <span class="token function">npm</span> config: C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>****<span class="token punctuation">\\</span>.npmrc
notice config saved unity config at C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>****<span class="token punctuation">\\</span>.upmconfig.toml
</code></pre></div><p>This command logs you into the registry and automatically configures both the npm and Unity settings on your machine.</p>`,4),F={href:"https://github.com/openupm/openupm-cli#openupm-cli",target:"_blank",rel:"noopener noreferrer"},$=s(`<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> your-unity-project
$ openupm <span class="token function">add</span> com.example.demo <span class="token parameter variable">-r</span> https://upm-verdaccio.jw9v2i.easypanel.host/
notice manifest added com.example.demo@1.0.0
notice please <span class="token function">open</span> Unity project to apply changes
</code></pre></div><p>Upon completion, open your Unity project to see the changes take effect, and your package should now be integrated successfully.</p><p><img src="`+P+`" alt="Unity scoped registry"></p><h2 id="protect-your-registry" tabindex="-1"><a class="header-anchor" href="#protect-your-registry"><span>Protect Your Registry</span></a></h2><p>Now that you have a functioning private registry, it&#39;s important to ensure that not just anyone with the URL can register an account and publish packages. To safeguard your registry, you can disable the registration feature and opt to manually manage user accounts.</p><p>To achieve this, you need to modify the <code>config.yaml</code> file of Verdaccio to restrict user registration. Set <code>max_users</code> to <code>-1</code> to disable new registrations:</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> /verdaccio/storage/htpasswd
    <span class="token comment"># Maximum amount of users allowed to register, defaults to &quot;+infinity&quot;.</span>
    <span class="token comment"># You can set this to -1 to disable registration.</span>
    <span class="token key atrule">max_users</span><span class="token punctuation">:</span> <span class="token number">-1</span>
</code></pre></div><p>Follow these steps to update your Verdaccio configuration in EasyPanel:</p><ul><li>Go to EasyPanel and open the &quot;Storage&quot; tab for your Verdaccio service.</li><li>Find and click the <kbd>Edit</kbd> button for the <code>/verdaccio/conf/config.yaml</code> file.</li><li>Insert the updated configuration to disable new user registrations.</li><li>Save your changes by clicking the <kbd>Save</kbd> button.</li><li>Deploy the updated configuration by clicking the <kbd>Deploy</kbd> button.</li></ul><p>With these adjustments, the registration feature on your Verdaccio registry is deactivated, safeguarding your registry against unauthorized access and use.</p><p>To manage user accounts manually, you must directly handle the <code>htpasswd</code> file and ensure it&#39;s correctly mounted to the path <code>/verdaccio/storage/htpasswd</code> within the Storage tab of EasyPanel. Utilizing the <code>htpasswd</code> command allows for efficient management of this file. Detailed instructions for using <code>htpasswd</code> exceed the scope of this guide, but ample documentation is available for those interested in exploring this method further.</p><h2 id="backup-your-registry" tabindex="-1"><a class="header-anchor" href="#backup-your-registry"><span>Backup Your Registry</span></a></h2><p>Though enabling droplet backup is a straightforward solution, expert users can add an extra layer of data protection by regularly backing up the <code>/var/lib/docker/volumes</code> directory from their host machine to a remote storage service like S3.</p><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2><p>In conclusion, setting up your private Unity Package Manager (UPM) registry with Verdaccio on DigitalOcean, guided by EasyPanel, gives you a secure and efficient way to manage your development packages. We&#39;ve walked you through how to start, create and manage a Verdaccio server, connect it to the Unity editor. This setup not only improves your team&#39;s development workflow but also keeps your packages private and protected.</p><p>Thank you for following along. With these steps, you&#39;re well-equipped to manage your packages more effectively. Happy developing!</p>`,16);function J(Q,K){const t=i("ExternalLinkIcon");return r(),c("div",null,[U,T,e("p",null,[a("In this guide, I'll show you how to get your first private UPM registry hosted quickly, using "),e("a",S,[a("Verdaccio"),n(t)]),a(" as the registry server and "),e("a",E,[a("DigitalOcean"),n(t)]),a(" as the cloud provider. Say goodbye to the frustrations of package management and hello to more productive development hours!")]),j,e("p",null,[e("a",V,[a("Verdaccio"),n(t)]),a(" stands out as the go-to open-source solution for hosting a private npm registry. It's lightweight, a breeze to configure, and supports a wide array of plugins. OpenUPM has been successfully using a customized version of Verdaccio to host packages, proving its reliability and efficiency. For this guide, we're sticking with version 5, the most stable and mature version to date. We'll consider switching to version 6 once it has proven itself in the field, expected around late-2024.")]),e("p",null,[a("When it comes to hosting our registry, "),e("a",C,[a("DigitalOcean"),n(t)]),a(" is our platform of choice for OpenUPM. They offer competitive pricing, especially for bandwidth-intensive applications. While the cloud computing market is fiercely competitive, and you're free to choose whichever provider suits you best.")]),D,M,e("p",null,[a("Before we dive into the setup, you'll need a DigitalOcean account. Good news! By using this affiliate link: "),e("a",I,[a("DigitalOcean"),n(t)]),a(", you'll snag "),A,a(" (new user only). We'll only be using a small portion of these credits for this demo. After the initial 60 days, maintaining your registry should cost as little as $6 per month in most scenarios.")]),R,B,e("p",null,[e("a",N,[a("EasyPanel"),n(t)]),a(" is a modern server panel that simplifies running Docker applications on a Linux server. It offers a web interface for application management, server monitoring, and provides a pre-configured subdomain for application access. We'll use EasyPanel to manage our Verdaccio instance.")]),e("p",null,[a("Visit the "),e("a",O,[a("DigitalOcean Marketplace for EasyPanel"),n(t)]),a(" and click on the "),L,a(" button. This action will redirect you to the DigitalOcean control panel, where you can set up your droplet (Linux-based virtual machines).")]),z,e("p",null,[a("To begin using Verdaccio for package management, the first step is to create a user account. Ensure you have "),e("a",H,[a("Node.js"),n(t)]),a(" (LTS suggested) installed on your local machine to execute the necessary commands. This guide will utilize Git-Bash on Windows for demonstration purposes.")]),Y,e("p",null,[a("While Unity provides a "),e("a",G,[a("comprehensive guide"),n(t)]),a(" on utilizing packages from an authenticated registry, this section highlights several crucial points to ensure smooth integration:")]),W,e("p",null,[a("To install the package within your Unity project using "),e("a",F,[a("OpenUPM CLI"),n(t)]),a(", follow these steps:")]),$])}const X=o(x,[["render",J],["__file","host-private-upm-registry-15-minutes.html.vue"]]),ee=JSON.parse('{"path":"/docs/host-private-upm-registry-15-minutes.html","title":"Quick Guide: Host Your Private Unity Scoped Registry in Just 15 Minutes","lang":"en-US","frontmatter":{"title":"Quick Guide: Host Your Private Unity Scoped Registry in Just 15 Minutes","description":"Learn how to easily set up a private scoped registry (UPM registry) for your Unity projects with our step-by-step guide in just 15 minutes.","head":[["link",{"rel":"canonical","href":"https://openupm.com/docs/host-private-upm-registry-15-minutes.html"}],["meta",{"property":"og:url","content":"https://openupm.com/docs/host-private-upm-registry-15-minutes.html"}],["meta",{"property":"og:site_name","content":"OpenUPM"}],["meta",{"property":"og:title","content":"Quick Guide: Host Your Private Unity Scoped Registry in Just 15 Minutes"}],["meta",{"property":"og:description","content":"Learn how to easily set up a private scoped registry (UPM registry) for your Unity projects with our step-by-step guide in just 15 minutes."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://openupm.com/images/openupm-twitter.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Quick Guide: Host Your Private Unity Scoped Registry in Just 15 Minutes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quick Guide: Host Your Private Unity Scoped Registry in Just 15 Minutes\\",\\"image\\":[\\"https://openupm.com/images/openupm-twitter.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Why Not Use an Existing Registry Provider?","slug":"why-not-use-an-existing-registry-provider","link":"#why-not-use-an-existing-registry-provider","children":[]},{"level":2,"title":"Choosing Your Tools: Verdaccio & DigitalOcean","slug":"choosing-your-tools-verdaccio-digitalocean","link":"#choosing-your-tools-verdaccio-digitalocean","children":[]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Setup EasyPanel Droplet","slug":"setup-easypanel-droplet","link":"#setup-easypanel-droplet","children":[]},{"level":2,"title":"Access EasyPanel","slug":"access-easypanel","link":"#access-easypanel","children":[]},{"level":2,"title":"Install Verdaccio Server","slug":"install-verdaccio-server","link":"#install-verdaccio-server","children":[]},{"level":2,"title":"Configure Verdaccio Server","slug":"configure-verdaccio-server","link":"#configure-verdaccio-server","children":[]},{"level":2,"title":"Create a User Account","slug":"create-a-user-account","link":"#create-a-user-account","children":[]},{"level":2,"title":"Publishing an Example Package","slug":"publishing-an-example-package","link":"#publishing-an-example-package","children":[]},{"level":2,"title":"Access the Registry in Unity","slug":"access-the-registry-in-unity","link":"#access-the-registry-in-unity","children":[]},{"level":2,"title":"Protect Your Registry","slug":"protect-your-registry","link":"#protect-your-registry","children":[]},{"level":2,"title":"Backup Your Registry","slug":"backup-your-registry","link":"#backup-your-registry","children":[]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"filePathRelative":"docs/host-private-upm-registry-15-minutes.md"}');export{X as comp,ee as data};
