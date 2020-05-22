(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{597:function(t,e,r){"use strict";r.r(e);var o=r(14),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("VuePress 由两部分组成：第一部分是一个"),r("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[t._v("极简静态网站生成器"),r("OutboundLink")],1),t._v("，它包含由 Vue 驱动的"),r("RouterLink",{attrs:{to:"/vue/theme/"}},[t._v("主题系统")]),t._v("和"),r("RouterLink",{attrs:{to:"/vue/plugin/"}},[t._v("插件 API")]),t._v("，另一个部分是为书写技术文档而优化的"),r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html"}},[t._v("默认主题")]),t._v("，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。")],1),t._v(" "),r("p",[t._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")]),t._v(" "),r("h2",{attrs:{id:"它是如何工作的？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的？"}},[t._v("#")]),t._v(" 它是如何工作的？")]),t._v(" "),r("p",[t._v("事实上，一个 VuePress 网站是一个由 "),r("a",{attrs:{href:"http://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),r("OutboundLink")],1),t._v(" 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。")]),t._v(" "),r("p",[t._v("在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt"),r("OutboundLink")],1),t._v(" 的 "),r("code",[t._v("nuxt generate")]),t._v(" 命令，以及其他的一些项目，比如 "),r("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gatsby"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),r("p",[r("strong",[t._v("内置的 Markdown 拓展")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/vue/guide/markdown.html#目录"}},[t._v("目录")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/guide/markdown.html#自定义容器"}},[t._v("自定义容器")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/guide/markdown.html#代码块中的行高亮"}},[t._v("代码块中的行高亮")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/guide/markdown.html#行号"}},[t._v("行号")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/guide/markdown.html#导入代码段"}},[t._v("导入代码段")])],1)]),t._v(" "),r("p",[r("strong",[t._v("在 Markdown 中 使用 Vue")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/vue/guide/using-vue.html#模板语法"}},[t._v("模板语法")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/guide/using-vue.html#使用组件"}},[t._v("使用组件")])],1)]),t._v(" "),r("p",[r("strong",[t._v("Vue驱动的自定义主题系统")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/vue/theme/writing-a-theme.html#网站和页面的元数据"}},[t._v("网站和页面的元数据")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/theme/writing-a-theme.html#内容摘抄"}},[t._v("内容摘抄")])],1)]),t._v(" "),r("p",[r("strong",[t._v("默认主题")])]),t._v(" "),r("ul",[r("li",[t._v("Responsive layout")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#首页"}},[t._v("首页")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#内置搜索"}},[t._v("内置的搜索")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#algolia-搜索"}},[t._v("Algolia 搜索")])],1),t._v(" "),r("li",[t._v("可定制的 "),r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#navbar"}},[t._v("navbar")]),t._v(" and "),r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#sidebar"}},[t._v("sidebar")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#Git-仓库和编辑链接"}},[t._v("自动生成的 GitHub 链接和页面编辑链接")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#popup-ui-to-refresh-contents"}},[t._v("PWA: 刷新内容的 Popup")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/theme/default-theme-config.html#最后更新时间"}},[t._v("最后更新时间")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/guide/i18n.html"}},[t._v("多语言支持")])],1)]),t._v(" "),r("p",[r("strong",[t._v("博客主题")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线案例"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Plugin")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/vue/plugin/"}},[t._v("强大的 Plugin API")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://vuepress-plugin-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客插件"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/plugin/official/plugin-pwa.html"}},[t._v("PWA 插件")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/vue/plugin/official/plugin-google-analytics.html"}},[t._v("Google Analytics 插件")])],1),t._v(" "),r("li",[t._v("...")])]),t._v(" "),r("h2",{attrs:{id:"为什么不是"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是"}},[t._v("#")]),t._v(" 为什么不是...?")]),t._v(" "),r("h3",{attrs:{id:"nuxt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}},[t._v("#")]),t._v(" Nuxt")]),t._v(" "),r("p",[t._v("VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。")]),t._v(" "),r("h3",{attrs:{id:"docsify-docute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docsify-docute"}},[t._v("#")]),t._v(" Docsify / Docute")]),t._v(" "),r("p",[t._v("这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！")]),t._v(" "),r("h3",{attrs:{id:"hexo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hexo"}},[t._v("#")]),t._v(" Hexo")]),t._v(" "),r("p",[t._v("Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。")]),t._v(" "),r("h3",{attrs:{id:"gitbook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitbook"}},[t._v("#")]),t._v(" GitBook")]),t._v(" "),r("p",[t._v("我们的子项目文档一直都在使用 GitBook。GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。")])])}),[],!1,null,null,null);e.default=a.exports}}]);