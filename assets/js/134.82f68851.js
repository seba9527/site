(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{567:function(v,a,_){"use strict";_.r(a);var p=_(14),n=Object(p.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("pacman 手册")])]),v._v(" "),_("hr"),v._v(" "),_("p",[_("a",{attrs:{href:"https://www.xdty.org/1347",target:"_blank",rel:"noopener noreferrer"}},[v._v("archlinux pacman 命令"),_("OutboundLink")],1),v._v(" "),_("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Pacman",target:"_blank",rel:"noopener noreferrer"}},[v._v("arch wiki"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("pacman -Sy 仅同步源")]),v._v(" "),_("p",[v._v("pacman -Syu 同步源，并更新系统")]),v._v(" "),_("p",[v._v("pacman -Su –ignore foo 升级时不升级包foo")]),v._v(" "),_("p",[v._v("pacman -S abc 从本地数据库中得到abc的信息，下载安装abc包")]),v._v(" "),_("p",[v._v("pacman -Sy abc 和源同步后安装名为abc的包")]),v._v(" "),_("p",[v._v("pacman -Sd abc 忽略依赖性问题，安装包abc")]),v._v(" "),_("p",[v._v("pacman -Sf abc 强制安装包abc")]),v._v(" "),_("p",[v._v("pacman -Si abc 从数据库中搜索包abc的信息")]),v._v(" "),_("p",[v._v("pacman -Ss abc 搜索有关abc信息的包")]),v._v(" "),_("p",[v._v("pacman -Sg abc 查询abc这个包组包含的软件包")]),v._v(" "),_("p",[v._v("pacman -Sw abc 下载包而不安装它")]),v._v(" "),_("p",[v._v("pacman -R abc 删除abc包")]),v._v(" "),_("p",[v._v("pacman -Rc abc 删除abc包和依赖abc的包")]),v._v(" "),_("p",[v._v("pacman -Rsn abc 删除包所有不需要的依赖包并删除其配置文件")]),v._v(" "),_("p",[v._v("pacman -Rscn abc 删除abc包所有不需要的依赖包和依赖abd的包并删除其配置文件")]),v._v(" "),_("p",[v._v("pacman -Sc 清理/var/cache/pacman/pkg目录下的旧包")]),v._v(" "),_("p",[v._v("pacman -Scc 清除所有下载的包和数据库")]),v._v(" "),_("p",[v._v("pacman -Q 列出系统中所有的包")]),v._v(" "),_("p",[v._v("pacman -Q package 在本地包数据库搜索(查询)指定软件包")]),v._v(" "),_("p",[v._v("pacman -Qi package 在本地包数据库搜索(查询)指定软件包并列出相关信息")]),v._v(" "),_("p",[v._v("pacman -Q | wc -l 统计当前系统中的包数量")]),v._v(" "),_("p",[v._v("pacman -Qdt 找出孤立包")]),v._v(" "),_("p",[v._v("pacman -Rns $(pacman -Qtdq) 删除孤立软件包（递归的,小心用)")]),v._v(" "),_("p",[v._v("pacman -U abc.pkg.tar.gz 安装下载的abs包，或新编译的本地abc包")]),v._v(" "),_("p",[v._v("pacman-optimize && sync 提高数据库访问速度")]),v._v(" "),_("p",[v._v("==== 提高pacman数据访问 ====")]),v._v(" "),_("h2",{attrs:{id:"pacman-optimize-sync"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pacman-optimize-sync"}},[v._v("#")]),v._v(" pacman-optimize && sync")]),v._v(" "),_("p",[v._v("==== 使用wget ====")]),v._v(" "),_("p",[v._v("修改/etc/pacman.conf并在其中的[options]")]),v._v(" "),_("p",[v._v("XferCommand = /usr/bin/wget -c –passive-ftp -c %u")]),v._v(" "),_("p",[v._v("来自：http://www.douban.com/group/topic/17909752/")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("Pacman手册")]),v._v(" "),_("p",[v._v("名称")]),v._v(" "),_("p",[v._v("pacman – 软件包管理器")]),v._v(" "),_("p",[v._v("句法")]),v._v(" "),_("p",[v._v("pacman <命令> [选项] [软件包名称]")]),v._v(" "),_("p",[v._v("描述")]),v._v(" "),_("p",[v._v("pacman是linux系统上的用于记录安装的软件包信息的管理器。它的主要特点有：支持依赖、软件包组、安装卸载关联以及与远程服务器同步信息然后更新系统。pacman的软件包格式是.tar.gz的压缩格式。")]),v._v(" "),_("p",[v._v("3.0.0版以来，pacman一直是linkman:libalpm（即”Arch Linux软件包管理“函数库）的前端。这个函数库支持不同写法的前端（例如，它支持图形化前端）。")]),v._v(" "),_("p",[v._v("命令")]),v._v(" "),_("p",[v._v("-Q，–query 查询")]),v._v(" "),_("p",[v._v("查询软件包数据库。运用这条命令你不仅可以查看已安装软件包以及所含文件的信息，还可以查看独立软件包的元信息（meta-information）（包括软件包的依赖，冲突，安装日期，创建日期，大小）。这条命令可已对本机的软件包数据库执行，也可以对独立的.tar.gz包执行。具体参看下面的查询选项。")]),v._v(" "),_("p",[v._v("-R, –remove 移除")]),v._v(" "),_("p",[v._v("从系统中移除某个软件包。该命令也可以对软件包组执行，执行后，软件包组内所有的软件包都会被移除。属于指定软件包的文件会被删除，而后软件包数据库会执行更新。除非加上–nosave(不保存)选项，移除软件包的配置文件都会以.pacsave的后缀保存。具体参看下面的移除选项。")]),v._v(" "),_("p",[v._v("-S, –sync 同步")]),v._v(" "),_("p",[v._v('同步软件包。软件包是从frp服务器上直接下载安装的，与之一同安装的还有运行软件所需的所有依赖。例如，pacman -S qt 会下载并安装qt以及qt的所有依赖。如果同一名称的软件包存在与不同的源中，可以指定源：pacman -S testing/qt。同样也可以给定版本要求：pacman -S "bash>=3.2"（引号是必需的，否则设shell会将“>”理解为重定向）。')]),v._v(" "),_("p",[v._v("可以指定软件包，也可以指定软件包组。例如，如果gnome是一个已定义的软件包组，那么执行pacman -S gnome就会将gnome组中所有的软件包安装，当然也会安装这些软件包的依赖。")]),v._v(" "),_("p",[v._v("pacman也可以处理一些具有相同或相近作用的软件包。例如，执行pacman -S foo，pacman首先会搜索名为foo的软件包。如果没有找到的话，pacman就会搜索一些具有相同或相近作用的软件包。如果找到了具有相同或相近作用的软件包，这些软件包就会被安装。")]),v._v(" "),_("p",[v._v("你也可以用pacman -Su来升级本机上所有陈旧的软件包升级是这样进行的：pacman先将本机上的软件包同远程服务器上的软件包进行版本对比。版本对比是按照如下规则进行的：")]),v._v(" "),_("p",[v._v("字母顺序：")]),v._v(" "),_("p",[v._v("1.0a<1.0alpha<1.0b<1.0beta<1.0p<1.0pre<1.0rc<1.0")]),v._v(" "),_("p",[v._v("数字顺序：")]),v._v(" "),_("p",[v._v("1<1.0<1.1<1.1.1<1.2<2.0<3.0.0")]),v._v(" "),_("p",[v._v("-U, –update")]),v._v(" "),_("p",[v._v("升级软件包，或安装软件包。可以给定一个URL网址，也可以给定一个文件路径。升级的过程是一个“移除，然后安装”的过程。想知道pacman如何处理配置文件，请查看处理配置文件")]),v._v(" "),_("p",[v._v("-V, –version 版本")]),v._v(" "),_("p",[v._v("显示版本，然后退出。")]),v._v(" "),_("p",[v._v("-h， –help 帮助")]),v._v(" "),_("p",[v._v("显示给定命令的句法。如果没有给定命令，显示的将是全部命令的句法。")]),v._v(" "),_("p",[v._v("通用选项")]),v._v(" "),_("p",[v._v("–asdeps [as dependency(作为依赖)]")]),v._v(" "),_("p",[v._v("模糊安装软件包;换句话说，就是假定该软件包安装的原因是由于依赖。在使用makepkg以及其他从源代码编译的工具时，需要在编译一个软件包之前安装该软件包的依赖，这时候，这个命令选项就十分有用了。")]),v._v(" "),_("p",[v._v("–asexplicit")]),v._v(" "),_("p",[v._v("精确安装软件;换句话说，就是假定该软件包安装的原因是精确安装。如果想把一个依赖标记成精确安装，使它不会在执行带–recursive（递归）的移除命令时删除，这时候，这个命令选项就十分有用了。")]),v._v(" "),_("p",[v._v("-b, –dbpath <路径>   指定另外的数据库位置;默认为/var/lib/pacman，路径为绝对路径。")]),v._v(" "),_("p",[v._v("-d, –nodeps            略过所有依赖关系检查-")]),v._v(" "),_("p",[v._v("-f, –force               强制安装，覆盖存在冲突的文件（谨慎使用）;")]),v._v(" "),_("p",[v._v("-r， –root <路径>    指定其他的根路径;用于向暂时挂载的其他系统根路径安装软件。")]),v._v(" "),_("p",[v._v("-v, –verbose          输出路径，例如根路径，配置文件，数据库，缓存的路径等。")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v(" –cachedir <dir> 指定其他缓存路径;默认为/var/cache/pacman/pkg，路径为绝对路径。\n\n –config <路径>  指定另外的配置文件\n\n –logfile <路径> 指定另外的日志文件\n\n –noconfirm      不询问确认\n\n –noprogressbar  下载文件时不显示进度条\n\n –noscriptlet    不执行安装脚本集（谨慎使用）;\n")])])]),_("p",[v._v("查询选项")]),v._v(" "),_("p",[v._v("-c, –changelog      查看某软件包的更新日志")]),v._v(" "),_("p",[v._v("-d, –deps           列出所有作为依赖关系安装的软件包")]),v._v(" "),_("p",[v._v("-e, –explicit       列出所有单独指定安装的软件包")]),v._v(" "),_("p",[v._v("-g, –groups         查看某软件包组所属的所有软件包")]),v._v(" "),_("p",[v._v("-i, –info           查看软件包信息（-ii 查看备份文件）")]),v._v(" "),_("p",[v._v("-l, –list           列出被查询软件包的内容")]),v._v(" "),_("p",[v._v("-m, –foreign        列出没有在同步数据库时找到的已安装软件包")]),v._v(" "),_("p",[v._v("-o, –owns <文件>     查询哪个软件包拥有  <文件>")]),v._v(" "),_("p",[v._v("-p, –file <软件包>   从某个软件包而不是数据库查询")]),v._v(" "),_("p",[v._v("-q, –quiet          在查询或搜索时显示较少的信息")]),v._v(" "),_("p",[v._v("-s, –search "),_("regex",[v._v(" 搜寻符合指定字符串的已安装本地的软件包")])],1),v._v(" "),_("p",[v._v("-t, –unrequired     列出所有不被其他软件包要求的软件包")]),v._v(" "),_("p",[v._v("-u, –upgrades       列出所有可升级的软件包")]),v._v(" "),_("p",[v._v("-p，–file           在命令行标记软件包为文件，而不是数据库信息条目，在与–info和–list搭配时有用。")]),v._v(" "),_("p",[v._v("移除选项")]),v._v(" "),_("p",[v._v("-c, –cascade        删除软件包及所有的依赖于此的软件包")]),v._v(" "),_("p",[v._v("-k, –dbonly         只删除数据库记录，不删除文件")]),v._v(" "),_("p",[v._v("-n, –nosave         同时删除配置文件")]),v._v(" "),_("p",[v._v("-s, –recursive      同时删除（不会破坏其他软件包的）依赖关系")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("                   (-ss·也包括单独指定安装的依赖关系)\n")])])]),_("p",[v._v("-u, –unneeded       同时删除不需要的（且不会破坏其他软件包的）依赖关系")]),v._v(" "),_("p",[v._v("同步选项")]),v._v(" "),_("p",[v._v("-c, –clean          从缓存目录中删除旧软件包（-cc 清除所有）")]),v._v(" "),_("p",[v._v("-g, –groups         查看某软件包组所属的所有软件包")]),v._v(" "),_("p",[v._v("-i, –info           查看软件包信息")]),v._v(" "),_("p",[v._v("-l, –list <软件仓库>    查看在该软件仓库中的软件包清单")]),v._v(" "),_("p",[v._v("-q, –quiet          在查询或搜索时显示较少的信息")]),v._v(" "),_("p",[v._v("-p, –print-uris     打印指定软件包及依赖关系中的URI")]),v._v(" "),_("p",[v._v("-s, –search <regex表达式> 按照指定字符串查询远端软件仓库")]),v._v(" "),_("p",[v._v("-u, –sysupgrade     升级所有过期软件包")]),v._v(" "),_("p",[v._v("-w, –downloadonly   下载但不安装/升级软件包")]),v._v(" "),_("p",[v._v("-y, –refresh        从服务器下载新的软件包数据库")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("  –needed         不重新安装已经为最新的软件包\n\n  –ignore <软件包>   升级时忽略某个软件包（可多次使用）\n\n  –ignoregroup <软件包组>\n\n                     升级时忽略某个软件包组（可多次使用）")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);