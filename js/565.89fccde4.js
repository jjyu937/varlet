(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[565],{565:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var l=t(7875),n={class:"varlet-site-doc"},e=(0,l.uE)('<h1>粘性布局</h1><div class="card"><h3>介绍</h3><p>粘性布局默认使用<code>position: sticky</code>实现，浏览器不支持该属性时自动降级成传统监听<code>scroll</code>事件的方式。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Sticky } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Sticky)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>基本使用<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-sticky</span>&gt;</span>\n</code></pre></div><div class="card"><h3>局部吸顶</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;scroller&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>局部吸顶<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.scroller</span> {\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">overflow</span>: auto;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#2979ff</span>;\n\n  <span class="hljs-selector-class">.block</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;\n    <span class="hljs-attribute">background</span>: <span class="hljs-number">#2979ff</span>;\n    <span class="hljs-attribute">opacity</span>: .<span class="hljs-number">5</span>;\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>吸顶距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>吸顶时的层级</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>css-mode</code></td><td>开启原生<code>css sticky</code>模式</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>当滚动容器滚动时触发</td><td>距离顶部px值<code>offsetTop: number</code> 是否吸顶<code>isFixed: boolean</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>粘性布局的内容</td><td><code>-</code></td></tr></tbody></table></div>',9);const c={components:{},render:function(s,a,t,c,p,h){return(0,l.wg)(),(0,l.j4)("div",n,[e])}}}}]);