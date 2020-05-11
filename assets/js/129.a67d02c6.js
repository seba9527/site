(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{542:function(s,a,t){"use strict";t.r(a);var e=t(11),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("Git版本控制高级用法，包括分支管理等")])]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"分支管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[s._v("#")]),s._v(" 分支管理")]),s._v(" "),t("p",[s._v("在git中，默认时间线是主分支，即"),t("code",[s._v("master")]),s._v("分支。"),t("code",[s._v("HEAD")]),s._v("严格来说不是指向提交，而是指向"),t("code",[s._v("master")]),s._v("，"),t("code",[s._v("master")]),s._v("才是指向提交的，所以，"),t("code",[s._v("HEAD")]),s._v("指向的就是当前分支。\n一开始的时候，"),t("code",[s._v("master")]),s._v("分支是一条线，Git用"),t("code",[s._v("master")]),s._v("指向最新的提交，再用"),t("code",[s._v("HEAD")]),s._v("指向"),t("code",[s._v("master")]),s._v("，就能确定当前分支，以及当前分支的提交点：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/2018-12/0.png",alt:"git-br-initial"}})]),s._v(" "),t("p",[s._v("当创建新的分支时，如"),t("code",[s._v("dev")]),s._v("，先将"),t("code",[s._v("dev")]),s._v("指向"),t("code",[s._v("master")]),s._v("，再将"),t("code",[s._v("HEAD")]),s._v("指向"),t("code",[s._v("dev")]),s._v("，所以一般对"),t("code",[s._v("dev")]),s._v("分支进行管理，然后再将"),t("code",[s._v("master")]),s._v("分支合并到dev分支，完成相应的功能。")]),s._v(" "),t("h3",{attrs:{id:"创建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[s._v("#")]),s._v(" 创建分支")]),s._v(" "),t("p",[s._v("命令如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev\nSwitched to a new branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("git checkout")]),s._v("命令加上"),t("code",[s._v("-b")]),s._v("参数表示创建分支并切换，相当于以下两条命令：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("可以用"),t("code",[s._v("git branch")]),s._v("命令查看当前分支：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n* dev\n  master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("git merge")]),s._v("命令来合并分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\nUpdating d46f35e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("b17d20e\nFast-forward\n readme.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("注意到上面的"),t("code",[s._v("Fast-forward")]),s._v("信息，这次合并是“快进模式”，也就是直接把"),t("code",[s._v("master")]),s._v("指向"),t("code",[s._v("dev")]),s._v("的当前提交，所以合并速度非常快。")]),s._v(" "),t("h3",{attrs:{id:"删除分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[s._v("#")]),s._v(" 删除分支")]),s._v(" "),t("p",[s._v("合并完成后，就可以删除"),t("code",[s._v("dev")]),s._v("分支了：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d dev\nDeleted branch dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was b17d20e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("删除后，查看"),t("code",[s._v("branch")]),s._v("，就只剩"),t("code",[s._v("master")]),s._v("分支了：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n* master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" "),t("strong",[s._v("总结")])]),s._v(" "),t("ul",[t("li",[s._v("查看分支："),t("code",[s._v("git branch")])]),s._v(" "),t("li",[s._v("创建分支："),t("code",[s._v("git branch <name>")])]),s._v(" "),t("li",[s._v("切换分支："),t("code",[s._v("git checkout <name>")])]),s._v(" "),t("li",[s._v("创建+切换分支："),t("code",[s._v("git checkout -b <name>")])]),s._v(" "),t("li",[s._v("合并某分支到当前分支："),t("code",[s._v("git merge <name>")])]),s._v(" "),t("li",[s._v("删除分支："),t("code",[s._v("git branch -d <name>")])])]),s._v(" "),t("h2",{attrs:{id:"分支冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支冲突"}},[s._v("#")]),s._v(" 分支冲突")]),s._v(" "),t("p",[s._v("如果在"),t("code",[s._v("dev")]),s._v("分支上进行了修改，同时我们也在"),t("code",[s._v("master")]),s._v("上进行了修改，那么现在的时间线就会变成这样子：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/2018-12/1.png",alt:"git-br-feature1"}})]),s._v(" "),t("p",[s._v("对于这种情况，git无法进行快速合并，因为产生了冲突（某个文件）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge feature1\nAuto-merging readme.txt\nCONFLICT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Merge conflict "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" readme.txt\nAutomatic merge failed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fix conflicts and "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" commit the result.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("code",[s._v("git status")]),s._v("也可以告诉我们冲突的文件，也可以直接查看readme.txt的内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Git is a distributed version control system.\nGit is "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes of files.\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" HEAD\nCreating a new branch is quick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" simple.\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nCreating a new branch is quick AND simple.\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" feature1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("其中，git用"),t("code",[s._v("<<<<<<<")]),s._v("，"),t("code",[s._v("=======")]),s._v("，"),t("code",[s._v(">>>>>>>")]),s._v("标记出不同分支的内容，我们修改如下后保存：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"conflict fixed"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master cf810e4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" conflict fixed\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在，"),t("code",[s._v("master")]),s._v("分支和"),t("code",[s._v("feature1")]),s._v("分支变成了下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/2018-12/2.png",alt:"git-br-conflict-merged"}})]),s._v(" "),t("p",[s._v("用带参数的"),t("code",[s._v("git log")]),s._v("也能看到分支合并情况：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n*   cf810e4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" conflict fixed\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * 14096d0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("feature1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AND simple\n* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 5dc6824 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" simple\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n* b17d20e branch "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n* d46f35e "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" remove test.txt\n* b84166e "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n* 519219b "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tracks changes\n* e43a48b understand how stage works\n* 1094adb append GPL\n* e475afc "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" distributed\n* eaadf4e wrote a readme "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("分支合并后，可以使用"),t("code",[s._v("git branch -d <name>")]),s._v("来删除分支。\n"),t("em",[t("strong",[s._v("解决冲突就是手动编辑Git合并失败的文件，再提交。用"),t("code",[s._v("git log --graph")]),s._v("命令可以看到分支合并图。")])])]),s._v(" "),t("h3",{attrs:{id:"分支管理策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支管理策略"}},[s._v("#")]),s._v(" 分支管理策略")]),s._v(" "),t("p",[s._v("这里要说明几点问题，首先，git默认会使用"),t("code",[s._v("fast forward")]),s._v("模式，但这种模式下，合并分支会丢失信息，如果不使用这个模式，将在合并的时候重新建立一个"),t("code",[s._v("commit")]),s._v("，这样能看到分支的信息。\n关闭"),t("code",[s._v("fast forward")]),s._v("模式，进行合并，使用"),t("code",[s._v("--no-ff")]),s._v("参数来"),t("code",[s._v("git merge")]),s._v("，这里准备合并"),t("code",[s._v("dev")]),s._v("分支，请注意"),t("code",[s._v("--no-ff")]),s._v("参数，表示禁用"),t("code",[s._v("Fast forward")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge with no-ff"')]),s._v(" dev\nMerge made by the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recursive'")]),s._v(" strategy.\n readme.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" +\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("因为本次合并要创建一个新的commit，所以加上"),t("code",[s._v("-m")]),s._v("参数，把commit描述写进去。合并后，用"),t("code",[s._v("git log")]),s._v("看看分支历史：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n*   e1e9c68 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" merge with no-ff\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * f52c633 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n*   cf810e4 conflict fixed\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("可以看到，不使用"),t("code",[s._v("Fast forward")]),s._v("模式，merge后就像这样：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/2018-12/3.png",alt:"git-no-ff-mode"}})]),s._v(" "),t("h3",{attrs:{id:"git-stash-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-命令"}},[s._v("#")]),s._v(" git stash 命令")]),s._v(" "),t("p",[s._v("这个命令保存工作区，等以后恢复现场后继续工作：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\nSaved working directory and index state WIP on dev: f52c633 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("恢复的时候，先用"),t("code",[s._v("git stash list")]),s._v("命令查看状态：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\nstash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": WIP on dev: f52c633 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下。一是用"),t("code",[s._v("git stash apply stash@{id}")]),s._v("恢复，但是恢复后，stash内容并不删除，你需要用"),t("code",[s._v("git stash drop")]),s._v("来删除。另一种方式是用"),t("code",[s._v("git stash pop")]),s._v("，恢复的同时把stash内容也删了：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\nOn branch dev\nChanges to be committed:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git reset HEAD <file>..."')]),s._v(" to unstage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    new file:   hello.py\n\nChanges not staged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout -- <file>..."')]),s._v(" to discard changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    modified:   readme.txt\n\nDropped refs/stash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("5d677e2ee266f39ea296182fb2354265b91b3b2a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"git-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[s._v("#")]),s._v(" git rebase")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase\nFirst, rewinding "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" to replay your work on "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" of it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nApplying: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" comment\nUsing index info to reconstruct a base tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nM    hello.py\nFalling back to patching base and "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("-way merge"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nAuto-merging hello.py\nApplying: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" author\nUsing index info to reconstruct a base tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nM    hello.py\nFalling back to patching base and "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("-way merge"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nAuto-merging hello.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("rebase操作可以把本地未push的分叉提交历史整理成直线；")]),s._v(" "),t("li",[s._v("rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);