(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{599:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发主题"}},[t._v("#")]),t._v(" 开发主题")]),t._v(" "),a("p",[t._v("想要书写一个主题，首先在你文档根目录创建一个 "),a("code",[t._v(".vuepress/theme")]),t._v(" 目录，接着创建一个 "),a("code",[t._v("Layout.vue")]),t._v(" 文件：")]),t._v(" "),a("p",[t._v("::: vue\n.\n└─ .vuepress\n └─ "),a("code",[t._v("theme")]),t._v("\n     └─ Layout.vue\n:::")]),t._v(" "),a("p",[t._v("到这里，就像开发一个普通的 Vue 应用一样。如何组织你的主题，这完全取决于你。")]),t._v(" "),a("h2",{attrs:{id:"获取渲染内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取渲染内容"}},[t._v("#")]),t._v(" 获取渲染内容")]),t._v(" "),a("p",[t._v("当前的 "),a("code",[t._v(".md")]),t._v(" 文件渲染的内容，可以作为一个独特的全局组件 "),a("code",[t._v("<Content/>")]),t._v(" 来使用，你可能想要它显示在页面中的某个地方。一个最简单的主题，可以是一个唯一的 "),a("code",[t._v("Layout.vue")]),t._v(" 组件，并包含以下内容：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("更多请阅读:")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/vue/guide/markdown-slot.html"}},[t._v("Markdown 插槽")])],1)]),t._v(" "),a("h2",{attrs:{id:"内容摘抄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容摘抄"}},[t._v("#")]),t._v(" 内容摘抄")]),t._v(" "),a("p",[t._v("如果一个 markdown 文件中有一个 "),a("code",[t._v("\x3c!-- more --\x3e")]),t._v(" 注释，则该注释之前的内容会被抓取并暴露在 "),a("code",[t._v("$page.excerpt")]),t._v(" 属性中。如果你在开发一个博客主题，你可以用这个属性来渲染一个带摘抄的文章列表。")]),t._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("p",[t._v("随着需求的变化，只有一个布局组件 "),a("code",[t._v("Layout.vue")]),t._v(" 可能还不够，你可能想要定义更多的布局组件用于不同的页面，你可能还想要自定义一个"),a("RouterLink",{attrs:{to:"/vue/config/#palette-styl"}},[t._v("调色板")]),t._v("，甚至应用一些插件。")],1),t._v(" "),a("p",[t._v("那么是时候重新组织你的主题了！一个约定的主题的目录结构如下：")]),t._v(" "),a("p",[t._v("::: vue\ntheme\n├── "),a("code",[t._v("global-components")]),t._v("\n│   └── xxx.vue\n├── "),a("code",[t._v("components")]),t._v("\n│   └── xxx.vue\n├── "),a("code",[t._v("layouts")]),t._v("\n│   ├── Layout.vue "),a("em",[t._v("("),a("strong",[t._v("必要的")]),t._v(")")]),t._v("\n│   └── 404.vue\n├── "),a("code",[t._v("styles")]),t._v("\n│   ├── index.styl\n│   └── palette.styl\n├── "),a("code",[t._v("templates")]),t._v("\n│   ├── dev.html\n│   └── ssr.html\n├── "),a("code",[t._v("index.js")]),t._v("\n├── "),a("code",[t._v("enhanceApp.js")]),t._v("\n└── package.json\n:::")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("theme/global-components")]),t._v(": 该目录下的组件都会被自动注册为全局组件。想了解更多，请参考 "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("theme/components")]),t._v(": Vue 组件。")]),t._v(" "),a("li",[a("code",[t._v("theme/layouts")]),t._v(": 布局组件，其中  "),a("code",[t._v("Layout.vue")]),t._v(" 是必需的。")]),t._v(" "),a("li",[a("code",[t._v("theme/styles")]),t._v(": 全局的样式和调色板。")]),t._v(" "),a("li",[a("code",[t._v("theme/templates")]),t._v(": 修改默认的模板文件。")]),t._v(" "),a("li",[a("code",[t._v("theme/index.js")]),t._v(": 主题文件的入口文件。")]),t._v(" "),a("li",[a("code",[t._v("theme/enhanceApp.js")]),t._v(": 主题水平的客户端增强文件。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("当你将你的主题以一个 npm 包的形式发布时，如果你没有任何主题配置，即没有 "),a("code",[t._v("theme/index.js")]),t._v("，那么你需要将 "),a("code",[t._v("package.json")]),t._v(" 中的 "),a("code",[t._v('"main"')]),t._v(" 字段设置为 "),a("code",[t._v("layouts/Layout.vue")]),t._v("，只有这样 VuePress 才能正确地解析主题。")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layouts/Layout.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"布局组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局组件"}},[t._v("#")]),t._v(" 布局组件")]),t._v(" "),a("p",[t._v("假设你的主题 "),a("code",[t._v("layouts")]),t._v(" 目录如下：")]),t._v(" "),a("p",[t._v("::: vue\ntheme\n└── "),a("code",[t._v("layouts")]),t._v("\n   ├── Layout.vue\n   ├── AnotherLayout.vue\n   └── 404.vue\n:::")]),t._v(" "),a("p",[t._v("然后，所有的页面将会默认使用 "),a("code",[t._v("Layout.vue")]),t._v(" 作为布局组件，对于那些匹配不到的路由将会使用 "),a("code",[t._v("404.vue")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你想要在某一个页面中使用 "),a("code",[t._v("AnotherLayout.vue")]),t._v(" 作为布局组件，那么你只需要更新这个页面的 "),a("code",[t._v("frontmatter")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("layout: AnotherLayout\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("每个 layout 组件都可能会渲染出截然不同的页面，如果你想设置一些全局的 UI（如全局的 "),a("code",[t._v("<header>")]),t._v("），可以考虑使用 "),a("RouterLink",{attrs:{to:"/vue/theme/option-api.html#globallayout"}},[t._v("globalLayout")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"使用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[t._v("#")]),t._v(" 使用插件")]),t._v(" "),a("p",[t._v("你可以通过主题的配置文件 "),a("code",[t._v("themePath/index.js")]),t._v(" 来给主题应用一些插件：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      serviceWorker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      updatePopup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"网站和页面的元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站和页面的元数据"}},[t._v("#")]),t._v(" 网站和页面的元数据")]),t._v(" "),a("p",[a("code",[t._v("Layout")]),t._v(" 组件将会对每一个文档目录下的 "),a("code",[t._v(".md")]),t._v(" 执行一次，同时，整个网站以及特定页面的元数据将分别暴露为 "),a("code",[t._v("this.$site")]),t._v(" 和 "),a("code",[t._v("this.$page")]),t._v(" 属性，它们将会被注入到每一个当前应用的组件中。")]),t._v(" "),a("p",[t._v("这是你现在看到的这个网站的 "),a("code",[t._v("$site")]),t._v(" 的值：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue 驱动的静态网站生成器"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524027677000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[a("code",[t._v("title")]),t._v(", "),a("code",[t._v("description")]),t._v(" 和 "),a("code",[t._v("base")]),t._v(" 会从 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中对应的的字段复制过来，而 "),a("code",[t._v("pages")]),t._v(" 是一个包含了每个页面元数据对象的数据，包括它的路径、页面标题（明确地通过 "),a("RouterLink",{attrs:{to:"/vue/guide/markdown.html#front-matter"}},[t._v("YAML front matter")]),t._v(" 指定，或者通过该页面的第一个标题取到），以及所有源文件中的 "),a("code",[t._v("YAML front matter")]),t._v(" 的数据。")],1),t._v(" "),a("p",[t._v("下面的这个对象是你正在看的这个页面的 "),a("code",[t._v("$page")]),t._v(" 的值：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524847549000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/custom-themes.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"自定义主题"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("如果用户在 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 配置了 "),a("code",[t._v("themeConfig")]),t._v("，你将可以通过 "),a("code",[t._v("$site.themeConfig")]),t._v(" 访问到它。如此一来，你可以通过它来对用户开放一些自定义主题的配置 —— 比如指定目录或者页面的顺序，你也可以结合 "),a("code",[t._v("$site.pages")]),t._v(" 来动态地构建导航链接。")]),t._v(" "),a("p",[t._v("最后，别忘了，作为 Vue Router API 的一部分，"),a("code",[t._v("this.$route")]),t._v(" 和 "),a("code",[t._v("this.$router")]),t._v(" 同样可以使用。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("lastUpdated")]),t._v(" 是这个文件最后一次 git 提交的 UNIX 时间戳，更多细节请参考："),a("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#最后更新时间"}},[t._v("最后更新时间")]),t._v("。")],1)]),t._v(" "),a("p",[a("strong",[t._v("参考:")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/vue/guide/global-computed.html"}},[t._v("全局计算属性")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"应用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用配置"}},[t._v("#")]),t._v(" 应用配置")]),t._v(" "),a("p",[t._v("自定义主题也可以通过主题根目录下的 "),a("code",[t._v("enhanceApp.js")]),t._v(" 文件来对 VuePress 应用进行拓展配置。这个文件应当 "),a("code",[t._v("export default")]),t._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// VuePress 正在使用的 Vue 构造函数")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 附加到根实例的一些选项")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前应用的路由实例")]),t._v("\n  siteData "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 站点元数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...做一些其他的应用级别的优化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);