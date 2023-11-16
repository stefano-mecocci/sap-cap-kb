import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.36bc40e2.js";const h=JSON.parse('{"title":"Funzioni (CDS)","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/call-functions.md","filePath":"tutorials/call-functions.md"}'),o={name:"tutorials/call-functions.md"},l=e(`<h1 id="funzioni-cds" tabindex="-1">Funzioni (CDS) <a class="header-anchor" href="#funzioni-cds" aria-label="Permalink to &quot;Funzioni (CDS)&quot;">​</a></h1><p>Una funzione si dichiara in una service CDS in questo modo. La definizione si scrive in un file <code>.cds</code>, mentre l&#39;implementazione avviene in un file <code>.js</code> con lo stesso identico nome.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HKJLl" id="tab-R9r_SXt" checked="checked"><label for="tab-R9r_SXt">pippo-srv.cds</label><input type="radio" name="group-HKJLl" id="tab-bhaz1eT"><label for="tab-bhaz1eT">pippo-srv.js</label></div><div class="blocks"><div class="language-cds vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">cds</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PippoService</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> (x</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Integer, y</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Integer) </span><span style="color:#F97583;">returns</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Integer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">service</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PippoService</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> (x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> Integer, y</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> Integer) </span><span style="color:#D73A49;">returns</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Integer</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">srv</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  srv.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">srv</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  srv.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">req</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="chiamare-le-funzioni-tramite-richiesta-http" tabindex="-1">Chiamare le funzioni tramite richiesta HTTP <a class="header-anchor" href="#chiamare-le-funzioni-tramite-richiesta-http" aria-label="Permalink to &quot;Chiamare le funzioni tramite richiesta HTTP&quot;">​</a></h2><p>In un file <code>.http</code> scrivere:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET .../odata/v4/pippo/sum(x=2,y=4)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET .../odata/v4/pippo/sum(x=2,y=4)</span></span></code></pre></div><p>Spiegazione:</p><ul><li><code>pippo</code> = prima parte del nome del service in kebab-case (es. DioCaneService -&gt; dio-cane)</li><li><code>sum</code>, nome funzione</li><li><code>(x=2,y=4)</code>, eventuale lista di argomenti con nome e valore</li></ul><h2 id="come-chiamare-funzioni-da-una-view" tabindex="-1">Come chiamare funzioni da una view <a class="header-anchor" href="#come-chiamare-funzioni-da-una-view" aria-label="Permalink to &quot;Come chiamare funzioni da una view&quot;">​</a></h2><p>Se il mainService è quello indicato nella CDS basta chiamarle come un normale binding ad una entity.</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">Text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{path: &#39;/foo()&#39;, type: &#39;sap.ui.model.odata.type.Int32&#39;}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">Text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{path: &#39;/foo()&#39;, type: &#39;sap.ui.model.odata.type.Int32&#39;}&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Se la funzione chiamata ritorna un valore con tipo primitivo, questo va specificato con la proprietà <code>type</code> (in questo caso era un intero quindi <code>Int32</code> va bene). Per una reference dei tipi che si possono usare leggere <a href="https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752/468a97775123488ab3345a0c48cadd8f/333a9dac5a614b1590c61916c9cecbf5.html" target="_blank" rel="noreferrer">SAP OData types</a>.</p></div><p>inserire i puntini ... fra parentesi == deferred</p>`,13),p=[l];function t(c,r,i,d,E,y){return a(),n("div",null,p)}const v=s(o,[["render",t]]);export{h as __pageData,v as default};