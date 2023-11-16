import{_ as s,o as a,c as l,Q as e}from"./chunks/framework.36bc40e2.js";const b=JSON.parse('{"title":"Tabelle","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/inserire-tabella.md","filePath":"tutorials/inserire-tabella.md"}'),n={name:"tutorials/inserire-tabella.md"},t=e(`<h1 id="tabelle" tabindex="-1">Tabelle <a class="header-anchor" href="#tabelle" aria-label="Permalink to &quot;Tabelle&quot;">​</a></h1><p>In questa sezione per le tabelle viene usato il package <code>sap.m</code></p><h2 id="tabella-semplice" tabindex="-1">Tabella semplice <a class="header-anchor" href="#tabella-semplice" aria-label="Permalink to &quot;Tabella semplice&quot;">​</a></h2><p>Qui vediamo una semplice tabella con il minimo essenziale per essere valida:</p><p><strong>Esempio</strong></p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">Table</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">columns</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">columns</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">Table</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">Table</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">columns</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">columns</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">content</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">content</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">Table</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Per collegare una serie di elementi a una tabella si usa l&#39;attributo <code>items</code> (come in altri casi)</p></div>`,7),o=[t];function p(c,r,i,E,d,y){return a(),l("div",null,o)}const u=s(n,[["render",p]]);export{b as __pageData,u as default};