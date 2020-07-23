(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{900:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("学习一些高级的docker用法")])]),s._v(" "),t("h2",{attrs:{id:"docker中管理数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker中管理数据"}},[s._v("#")]),s._v(" Docker中管理数据")]),s._v(" "),t("p",[s._v("Docker提供三种方式从Docker主机挂载数据下容器中：Volumes ，Bind mount和tempfs mount。")]),s._v(" "),t("ul",[t("li",[s._v("Volumes存储在主机文件系统中由Docker管理（/var/lib/docker/volumes/）。Docker以外和程序没有权限修改这部分文件系统的。Volumes是Docker中最好的持久层方法。")]),s._v(" "),t("li",[s._v("Bind mounts 可以放在主机的任何位置。他们甚至可以是重要的系统文件和目录。任何程序都可以对它修改。")]),s._v(" "),t("li",[s._v("tmpfs mounts 是存储在主机内存中，不会被写入文件系统中。")])]),s._v(" "),t("h3",{attrs:{id:"docker-volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-volume"}},[s._v("#")]),s._v(" Docker Volume")]),s._v(" "),t("p",[s._v("volumes是Docker数据持久化机制。依赖主机目录结构，volumes完全由Docker管理。Volumes有以下优点：")]),s._v(" "),t("ul",[t("li",[s._v("Volumes更容易备份和移植")]),s._v(" "),t("li",[s._v("可以通过Docker CLI或API进行管理")]),s._v(" "),t("li",[s._v("Volumes可以无区别的工作中Windows和Linux下")]),s._v(" "),t("li",[s._v("多个容器共享Volumes更安全")]),s._v(" "),t("li",[s._v("Volume驱动可以允许你把数据存储到远程主机或者云端，并且加密数据内容，以及添加额外功能。")]),s._v(" "),t("li",[s._v("一个新的数据内容可以由容器预填充。")]),s._v(" "),t("li",[s._v("volumes不会增加容器的大小，生命周期独立与容器。")])]),s._v(" "),t("p",[s._v("起初，-v或者--volume用于独立容器，--mount用于swarm services。然而，从Docker 17.06开始，也可是使用--mount用于独立容器。--mount命令更精准详细。-v将选项进行了合并。使用—mount。")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("docker volume ls")]),s._v("可以查看所有的volume。使用inspect可以查看具体的细节。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker volume inspect d534d89ae90833c7a250813ce0c645c89317b183e7fbf8ce643c12d5f7486c87\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreatedAt"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-04-30T00:57:27+08:00"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Labels"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mountpoint"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/volumes/d534d89ae90833c7a250813ce0c645c89317b183e7fbf8ce643c12d5f7486c87/_data"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d534d89ae90833c7a250813ce0c645c89317b183e7fbf8ce643c12d5f7486c87"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Options"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Scope"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"docker-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-stack"}},[s._v("#")]),s._v(" Docker Stack")]),s._v(" "),t("p",[s._v("stack 是构成特定环境中的 service 集合, 它是自动部署多个相互关联的服务的简便方法，而无需单独定义每个服务。")]),s._v(" "),t("p",[s._v("stack file 是一种 yaml 格式的文件，类似于 docker-compose.yml 文件，它定义了一个或多个服务，并定义了服务的环境变量、部署标签、容器数量以及相关的环境特定配置等。")]),s._v(" "),t("p",[s._v("比如说创建一个WordPress的stack，包含WordPress和MySql这2个服务。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MYSQL_DATABASE_PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_DATABASE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("wordpress")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_HOST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db_data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("要注意的话，在docker-CLI无法直接管理stack，我这里是用的前面说的portainer管理的。")]),s._v(" "),t("h2",{attrs:{id:"docker与集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker与集群"}},[s._v("#")]),s._v(" Docker与集群")]),s._v(" "),t("h3",{attrs:{id:"docker-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm"}},[s._v("#")]),s._v(" Docker Swarm")]),s._v(" "),t("p",[s._v("然后简单提一下Swarm，Docker Swarm 是 Docker 的集群管理工具。它将 Docker 主机池转变为单个虚拟 Docker 主机。")]),s._v(" "),t("p",[s._v("Docker Swarm 提供了标准的 Docker API，所有任何已经与 Docker 守护程序通信的工具都可以使用 Swarm 轻松地扩展到多个主机。")]),s._v(" "),t("p",[s._v("简单来说，swarm允许我们以节点（node）的方式组织集群（cluster）；每个节点上面可以部署一个或者多个服务（service）；每个服务又可以包括一个或者多个（container）")]),s._v(" "),t("h3",{attrs:{id:"docker-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-service"}},[s._v("#")]),s._v(" Docker Service")]),s._v(" "),t("p",[s._v("多用于分布式程序中，程序的不同部分被称为service。由于我现在用不到集群，先不看这部分。")]),s._v(" "),t("h2",{attrs:{id:"matomo-搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#matomo-搭建"}},[s._v("#")]),s._v(" matomo 搭建")]),s._v(" "),t("p",[s._v("test")]),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_42028353/article/details/80018028",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker的volumes的使用"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/weixin_42028353/article/details/80018080",target:"_blank",rel:"noopener noreferrer"}},[s._v("在Docker中管理数据"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://docs.docker.com/storage/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Manage data in Docker"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://docs.docker.com/storage/volumes/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Use volumes"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Compose file version 3 reference"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);