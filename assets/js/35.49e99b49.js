(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{448:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("ELF文件格式介绍，来自CTF-wiki")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("ELF （Executable and Linkable Format）文件，也就是在 Linux 中的目标文件，主要有以下三种类型：")]),s._v(" "),a("ul",[a("li",[s._v("可重定位文件（Relocatable File），包含由编译器生成的代码以及数据。链接器会将它与其它目标文件链接起来从而创建可执行文件或者共享目标文件。在 Linux 系统中，这种文件的后缀一般为 "),a("code",[s._v(".o")]),s._v(" 。")]),s._v(" "),a("li",[s._v("可执行文件（Executable File），就是我们通常在 Linux 中执行的程序。")]),s._v(" "),a("li",[s._v("共享目标文件（Shared Object File），包含代码和数据，这种文件是我们所称的库文件，一般以 "),a("code",[s._v(".so")]),s._v(" 结尾。一般情况下，它有以下两种使用情景：\n"),a("ul",[a("li",[s._v("链接器（Link eDitor, ld）可能会处理它和其它可重定位文件以及共享目标文件，生成另外一个目标文件。")]),s._v(" "),a("li",[s._v("动态链接器（Dynamic Linker）将它与可执行文件以及其它共享目标组合在一起生成进程镜像。")])])])]),s._v(" "),a("p",[s._v("目标文件既会参与程序链接又会参与程序执行。出于方便性和效率考虑，根据过程的不同，目标文件格式提供了其内容的两种并行视图，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/object_file_format.png",alt:"object_file_format"}})]),s._v(" "),a("p",[a("strong",[s._v("链接视图")]),s._v("\n文件开始处是 ELF 头部（ "),a("strong",[s._v("ELF Header")]),s._v("），它给出了整个文件的组织情况。")]),s._v(" "),a("p",[s._v("如果程序头部表（Program Header Table）存在的话，它会告诉系统如何创建进程。用于生成进程的目标文件必须具有程序头部表，但是重定位文件不需要这个表。")]),s._v(" "),a("p",[s._v("节区部分包含在链接视图中要使用的大部分信息：指令、数据、符号表、重定位信息等等。")]),s._v(" "),a("p",[s._v("节区头部表（Section Header Table）包含了描述文件节区的信息，每个节区在表中都有一个表项，会给出节区名称、节区大小等信息。用于链接的目标文件必须有节区头部表，其它目标文件则无所谓，可以有，也可以没有。")]),s._v(" "),a("p",[a("strong",[s._v("执行视图")]),s._v("\n对于执行视图来说，其主要的不同点在于没有了 section，而有了多个 segment。其实这里的 segment 大都是来源于链接视图中的 section。")]),s._v(" "),a("h2",{attrs:{id:"elf-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elf-header"}},[s._v("#")]),s._v(" ELF Header")]),s._v(" "),a("p",[s._v("ELF Header 描述了 ELF 文件的概要信息，利用这个数据结构可以索引到 ELF 文件的全部信息，数据结构如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" EI_NIDENT   16")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("   e_ident"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("EI_NIDENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ELF32_Half      e_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  标识目标文件类型\n    ELF32_Half      e_machine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  运行的机器架构\n    ELF32_Word      e_version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  目标文件的版本\n    ELF32_Addr      e_entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ELF32_Off       e_phoff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  程序头部表在文件中的字节偏移\n    ELF32_Off       e_shoff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  节区头部表在文件中的字节偏移\n    ELF32_Word      e_flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ELF32_Half      e_ehsize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   ELF文件头的长度\n    ELF32_Half      e_phentsize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  程序头部表中每个表项的长度\n    ELF32_Half      e_phnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  程序头部表的项数\n    ELF32_Half      e_shentsize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  节区头部表的长度\n    ELF32_Half      e_shnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  节区头部表的项数\n    ELF32_Half      e_shstrndx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" Elf32_Ehdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("其中每个成员都是 e 开头的，它们应该都是 ELF 的缩写。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-04_21-14-07.png",alt:"Snipaste_2019-03-04_21-14-07"}})]),s._v(" "),a("h2",{attrs:{id:"program-header-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#program-header-table"}},[s._v("#")]),s._v(" Program Header Table")]),s._v(" "),a("p",[s._v("Program Header Table 是一个结构体数组，每一个元素的类型是 "),a("code",[s._v("Elf32_Phdr")]),s._v("，描述了一个段或者其它系统在准备程序执行时所需要的信息。其中，ELF 头中的 "),a("code",[s._v("e_phentsize")]),s._v(" 和 "),a("code",[s._v("e_phnum")]),s._v(" 指定了该数组每个元素的大小以及元素个数。一个目标文件的段包含一个或者多个节。**程序的头部只有对于可执行文件和共享目标文件有意义。**所以，Program Header Table 就是专门为 ELF 文件运行时中的段所准备的。\n"),a("code",[s._v("Elf32_Phdr")]),s._v(" 的数据结构如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ELF32_Word  p_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  段的类型\n    ELF32_Off   p_offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  从文件开始到该段开头的第一个字节的偏移\n    ELF32_Addr  p_vaddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  第一个字节在内存中的虚拟地址\n    ELF32_Addr  p_paddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ELF32_Word  p_filesz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  文件镜像中该段的大小\n    ELF32_Word  p_memsz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  内存镜像中该段的大小\n    ELF32_Word  p_flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  段相关的标记\n    ELF32_Word  p_align"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" Elf32_Phdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-04_21-15-53.png",alt:"Snipaste_2019-03-04_21-15-53"}})]),s._v(" "),a("p",[s._v("段和节的包含关系：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-04_21-16-00.png",alt:"Snipaste_2019-03-04_21-16-00"}})]),s._v(" "),a("h3",{attrs:{id:"段内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#段内容"}},[s._v("#")]),s._v(" 段内容")]),s._v(" "),a("p",[s._v("一个段可能包括一到多个节区，但是这并不会影响程序的加载。尽管如此，我们也必须需要各种各样的数据来使得程序可以执行以及动态链接等等。下面会给出一般情况下的段的内容。对于不同的段来说，它的节的顺序以及所包含的节的个数有所不同。此外，与处理相关的约束可能会改变对应的段的结构。\n代码段只包含只读的指令以及数据。当然这个例子并没有给出所有的可能的段。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/text_segment.png",alt:"text_segment"}})]),s._v(" "),a("p",[s._v("数据段包含可写的数据以及以及指令，通常来说，包含以下内容：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/data_segment.png",alt:"data_segment"}})]),s._v(" "),a("p",[s._v("程序头部的 PT_DYNAMIC 类型的元素指向指向 .dynamic 节。其中，got 表和 plt 表包含与地址无关的代码相关信息。尽管在这里给出的例子中，plt 节出现在代码段，但是对于不同的处理器来说，可能会有所变动。\n.bss 节的类型为 SHT_NOBITS，这表明它在 ELF 文件中不占用空间，但是它却占用可执行文件的内存镜像的空间。通常情况下，没有被初始化的数据在段的尾部，因此，"),a("code",[s._v("p_memsz")]),s._v(" 才会比 "),a("code",[s._v("p_filesz")]),s._v(" 大。")]),s._v(" "),a("ul",[a("li",[s._v("不同的段来说可能会有所重合，即不同的段包含相同的节。")])]),s._v(" "),a("h2",{attrs:{id:"section-header-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#section-header-table"}},[s._v("#")]),s._v(" Section Header Table")]),s._v(" "),a("p",[s._v("该结构用于定位 ELF 文件中的每个节区的具体位置。\n首先，ELF 头中的 "),a("code",[s._v("e_shoff")]),s._v(" 项给出了从文件开头到节头表位置的字节偏移。"),a("code",[s._v("e_shnum")]),s._v(" 告诉了我们节头表包含的项数；"),a("code",[s._v("e_shentsize")]),s._v(" 给出了每一项的字节大小。")]),s._v(" "),a("p",[s._v("其次，节头表是一个数组，每个数组的元素的类型是 "),a("code",[s._v("ELF32_Shdr")]),s._v(" ，每一个元素都描述了一个节区的概要内容。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n Elf32_Word sh_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节头部字符串表节区的索引")]),s._v("\n Elf32_Word sh_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节类型")]),s._v("\n Elf32_Word sh_flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节标志，用于描述属性")]),s._v("\n Elf32_Addr sh_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节的内存映像")]),s._v("\n Elf32_Off  sh_offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节的文件偏移")]),s._v("\n Elf32_Word sh_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节的长度")]),s._v("\n Elf32_Word sh_link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节头部表索引链接")]),s._v("\n Elf32_Word sh_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 附加信息")]),s._v("\n Elf32_Word sh_addralign"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节对齐约束")]),s._v("\n Elf32_Word sh_entsize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 固定大小的节表项的长度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" Elf32_Shdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-05_09-00-40.png",alt:"Snipaste_2019-03-05_09-00-40"}})]),s._v(" "),a("h2",{attrs:{id:"sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sections"}},[s._v("#")]),s._v(" Sections")]),s._v(" "),a("p",[s._v("节区包含目标文件中除了 ELF 头部、程序头部表、节区头部表的所有信息。节区满足以下条件")]),s._v(" "),a("ul",[a("li",[s._v("每个节区都有对应的节头来描述它。但是反过来，节区头部并不一定会对应着一个节区。")]),s._v(" "),a("li",[s._v("每个节区在目标文件中是连续的，但是大小可能为 0。")]),s._v(" "),a("li",[s._v("任意两个节区不能重叠，即一个字节不能同时存在于两个节区中。")]),s._v(" "),a("li",[s._v("目标文件中可能会有闲置空间（inactive space），各种头和节不一定会覆盖到目标文件中的所有字节，"),a("strong",[s._v("闲置区域的内容未指定")]),s._v("。")])]),s._v(" "),a("p",[s._v("许多在 ELF 文件中的节都是预定义的，它们包含程序和控制信息。这些节被操作系统使用，但是对于不同的操作系统，同一节区可能会有不同的类型以及属性。")]),s._v(" "),a("p",[s._v("可执行文件是由链接器将一些单独的目标文件以及库文件链接起来而得到的。其中，链接器会解析引用（不同文件中的子例程的引用以及数据的引用，调整对象文件中的绝对引用）并且重定位指令。加载与链接过程需要目标文件中的信息，并且会将处理后的信息存储在一些特定的节区中，比如 "),a("code",[s._v(".dynamic")]),s._v(" 。")]),s._v(" "),a("h3",{attrs:{id:"strtab-string-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strtab-string-table"}},[s._v("#")]),s._v(" .strtab: String Table")]),s._v(" "),a("p",[s._v("该节区描述默认的字符串表，包含了一系列的以 NULL 结尾的字符串。ELF 文件使用这些字符串来存储程序中的符号名，包括")]),s._v(" "),a("ul",[a("li",[s._v("变量名")]),s._v(" "),a("li",[s._v("函数名")])]),s._v(" "),a("p",[s._v("该节在运行的过程中不需要加载，只需要加载对应的子集 .dynstr 节。")]),s._v(" "),a("p",[s._v("一般通过对字符串的首个字母在字符串表中的下标来索引字符串。")]),s._v(" "),a("p",[s._v("字符串表的首尾字节都是 NULL。此外，索引为 0 的字符串要么没有名字，要么就是名字为空，其解释依赖于上下文。字符串表也可以为空，相应的，其节区头部的 sh_size 成员将为 0。在空字符串表中索引大于 0 的下标显然是非法的。")]),s._v(" "),a("p",[s._v("一个节区头部的 sh_name 成员的值为其相应的节区头部字符串表节区的索引，此节区由 ELF 头的 e_shstrndx 成员给出。")]),s._v(" "),a("h3",{attrs:{id:"shstrtab-section-header-string-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shstrtab-section-header-string-table"}},[s._v("#")]),s._v(" .shstrtab: Section Header String Table")]),s._v(" "),a("p",[s._v("该节区与 "),a("code",[s._v(".strtab")]),s._v(" 的存储结构类似，不过该节区存储的是节区名的字符串。")]),s._v(" "),a("h3",{attrs:{id:"symtab-symbol-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symtab-symbol-table"}},[s._v("#")]),s._v(" .symtab: Symbol Table")]),s._v(" "),a("p",[s._v("每个目标文件都会有一个符号表，熟悉编译原理的就会知道，在编译程序时，必须有相应的结构来管理程序中的符号以便于对函数和变量进行重定位。")]),s._v(" "),a("p",[s._v("此外，链接本质就是把多个不同的目标文件相互 “粘” 在一起，实际上，目标文件相互粘合是目标文件之间对地址的引用，即函数和变量的地址的相互引用。而在粘合的过程中，符号就是其中的粘合剂。")]),s._v(" "),a("p",[s._v("目标文件中的符号表包含了"),a("strong",[s._v("一些通用的符号")]),s._v("，这部分信息在进行了 "),a("code",[s._v("strip")]),s._v(" 操作后就会消失。包括")]),s._v(" "),a("ul",[a("li",[s._v("变量名")]),s._v(" "),a("li",[s._v("函数名")])]),s._v(" "),a("p",[s._v("符号表其实是一个数组，数组中的每一个元素都是一个结构体，具体如下")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Elf32_Word      st_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  符号在字符串表中对应的索引\n    Elf32_Addr      st_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    Elf32_Word      st_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  符号所占用的大小\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("   st_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("   st_other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    Elf32_Half      st_shndx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" Elf32_Sym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-05_09-29-12.png",alt:"Snipaste_2019-03-05_09-29-12"}})]),s._v(" "),a("h4",{attrs:{id:"如何定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何定位"}},[s._v("#")]),s._v(" 如何定位")]),s._v(" "),a("p",[s._v("那么对于一个符号来说如何定位其对应字符串的地址呢？具体步骤如下")]),s._v(" "),a("ol",[a("li",[s._v("根据 Section Header Table 中符号节头中的 "),a("code",[s._v("sh_link")]),s._v(" 获取该符号节中对应符号字符串节在 "),a("code",[s._v("Section Header Table")]),s._v(" 中的下标。进而我们就可以获取对应符号节的地址。")]),s._v(" "),a("li",[s._v("根据该符号的定义中的 st_name 获取该符号的偏移，即在对应符号节中的偏移。")]),s._v(" "),a("li",[s._v("根据上述两者就可以定位一个符号对应的字符串的地址了。")])]),s._v(" "),a("h3",{attrs:{id:"data-related-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-related-sections"}},[s._v("#")]),s._v(" Data Related Sections")]),s._v(" "),a("h4",{attrs:{id:"bss-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bss-section"}},[s._v("#")]),s._v(" BSS Section")]),s._v(" "),a("p",[s._v("未初始化的全局变量对应的节。此节区不占用 ELF 文件空间，但占用程序的内存映像中的空间。当程序开始执行时，系统将把这些数据初始化为 0。bss 其实是 block started by symbol 的简写，说明该节区中单纯地说明了有哪些变量。")]),s._v(" "),a("h4",{attrs:{id:"data-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-section"}},[s._v("#")]),s._v(" .data Section")]),s._v(" "),a("p",[s._v("这些节区包含初始化了的数据，会在程序的内存映像中出现。")]),s._v(" "),a("h4",{attrs:{id:"rodata-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rodata-section"}},[s._v("#")]),s._v(" .rodata Section")]),s._v(" "),a("p",[s._v("这些节区包含只读数据，这些数据通常参与进程映像的不可写段。")]),s._v(" "),a("h3",{attrs:{id:"common-code-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-code-section"}},[s._v("#")]),s._v(" Common Code Section")]),s._v(" "),a("h4",{attrs:{id:"init-init-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-init-array"}},[s._v("#")]),s._v(" .init & .init_array")]),s._v(" "),a("p",[s._v("此节区包含可执行指令，是进程初始化代码的一部分。程序开始执行时，系统会在开始调用主程序入口（通常指 C 语言的 main 函数）前执行这些代码。")]),s._v(" "),a("h4",{attrs:{id:"text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[s._v("#")]),s._v(" .text")]),s._v(" "),a("p",[s._v("此节区包含程序的可执行指令。")]),s._v(" "),a("h4",{attrs:{id:"fini-fini-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fini-fini-array"}},[s._v("#")]),s._v(" .fini & .fini_array")]),s._v(" "),a("p",[s._v("此节区包含可执行的指令，是进程终止代码的一部分。程序正常退出时，系统将执行这里的代码。")]),s._v(" "),a("h3",{attrs:{id:"dynamic-related-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-related-sections"}},[s._v("#")]),s._v(" Dynamic Related Sections")]),s._v(" "),a("h4",{attrs:{id:"dynamic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic"}},[s._v("#")]),s._v(" .dynamic")]),s._v(" "),a("p",[s._v("如果一个目标文件参与到动态链接的过程中，那么它的程序头部表将会包含一个类型为 PT_DYNAMIC 的元素。这个段包含了 .dynamic 节，其实这个段就是一个单纯的键值对。\n动态节一般保存了 ELF 文件的如下信息")]),s._v(" "),a("ul",[a("li",[s._v("依赖于哪些动态库")]),s._v(" "),a("li",[s._v("动态符号节信息")]),s._v(" "),a("li",[s._v("动态字符串节信息")])]),s._v(" "),a("p",[s._v("我们一般使用_DYNAMIC符号来标记这个节，它的结构如下")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Elf32_Sword     d_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Elf32_Word  d_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        Elf32_Addr  d_ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" d_un"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" Elf32_Dyn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extern")]),s._v(" Elf32_Dyn_DYNAMIC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("其中，d_tag 的取值决定了该如何解释 d_un。")]),s._v(" "),a("ul",[a("li",[s._v("d_val\n"),a("ul",[a("li",[s._v("这个字段表示一个整数值，可以有多种意思。")])])]),s._v(" "),a("li",[s._v("d_ptr\n"),a("ul",[a("li",[s._v('这个字段表示程序的虚拟地址。正如之前所说的，一个文件的虚拟地址在执行的过程中可能和内存的虚拟地址不匹配。当解析动态结构中的地址时，动态链接器会根据原始文件的值以及内存的基地址来计算真正的地址。为了保持一致性，文件中并不会包含重定位入口来 "纠正" 动态结构中的地址。')])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-05_10-22-49.png",alt:"Snipaste_2019-03-05_10-22-49"}})]),s._v(" "),a("h4",{attrs:{id:"dynsym"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynsym"}},[s._v("#")]),s._v(" .dynsym")]),s._v(" "),a("p",[s._v("动态链接的 ELF 文件具有专门的动态符号表，其使用的结构就是 Elf32_Sym，但是其存储的节为 .dynsym。这里再次给出 Elf32_Sym 的结构")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Elf32_Word    st_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Symbol name (string tbl index) */")]),s._v("\n  Elf32_Addr    st_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Symbol value */")]),s._v("\n  Elf32_Word    st_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Symbol size */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" st_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Symbol type and binding */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" st_other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Symbol visibility under glibc>=2.2 */")]),s._v("\n  Elf32_Section st_shndx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Section index */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" Elf32_Sym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("需要注意的是 "),a("code",[s._v(".dynsym")]),s._v(" 是运行时所需的，ELF 文件中 export/import 的符号信息全在这里。但是，"),a("code",[s._v(".symtab")]),s._v(" 节中存储的信息是编译时的符号信息，它们在 "),a("code",[s._v("strip")]),s._v(" 之后会被删除掉。")]),s._v(" "),a("p",[s._v("我们主要关注动态符号中的两个成员")]),s._v(" "),a("ul",[a("li",[s._v("st_name， 该成员保存着动态符号在 .dynstr 表（动态字符串表）中的偏移。")]),s._v(" "),a("li",[s._v("st_value，如果这个符号被导出，这个符号保存着对应的虚拟地址。")])]),s._v(" "),a("p",[s._v("动态符号与指向它的 Elf_Verdef 保存在 .gnu.version 段中，其中，由 Elf_Verneed 结构体构成的数组的每个元素对应动态符号表的一项。其实，这个结构体就只有一个域：那就是一个 16 位的整数，表示 gnu.verion_r 段中的下标。")]),s._v(" "),a("p",[s._v("在这样的情况下，动态链接器使用 Elf_Rel 结构体成员 r_info 中的下标同时作为 .dynsym 段和 gnu.version 段的下标。这样就可以一一对应到每一个符号到底是那个版本的了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-05_09-54-44.png",alt:"Snipaste_2019-03-05_09-54-44"}})]),s._v(" "),a("h3",{attrs:{id:"relocation-related-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relocation-related-sections"}},[s._v("#")]),s._v(" Relocation Related Sections")]),s._v(" "),a("p",[s._v("链接器在处理目标文件时，需要对目标文件中的某些位置进行重定位，即将符号指向恰当的位置，确保程序正常执行。例如，当程序调用了一个函数时，相关的调用指令必须把控制流交给适当的目标执行地址。")]),s._v(" "),a("p",[s._v("在 ELF 文件中，对于每一个需要重定位的 ELF 节都有对应的重定位表，比如说 .text 节如果需要重定位，那么其对应的重定位表为 .rel.text。")]),s._v(" "),a("p",[s._v("举个例子，当一个程序导入某个函数时，.dynstr 就会包含对应函数名称的字符串，.dynsym 中就会包含一个具有相应名称的动态字符串表的符号（Elf_Sym），在 rel.dyn 中就会包含一个指向这个符号的的重定位表项。")]),s._v(" "),a("h4",{attrs:{id:"rel-a-dyn-rel-a-plt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rel-a-dyn-rel-a-plt"}},[s._v("#")]),s._v(" .rel(a).dyn & .rel(a).plt")]),s._v(" "),a("p",[s._v(".rel.dyn 包含了动态链接的二进制文件中需要重定位的变量的信息，这些信息在加载的时候必须完全确定。而 .rel.plt 包含了需要重定位的函数的信息。这两类重定位节都使用如下的结构\n"),a("code",[s._v(".rel.plt")]),s._v("节是用于函数重定位，"),a("code",[s._v(".rel.dyn")]),s._v("节是用于变量重定位")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nElf32_Addr r_offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对于可执行文件，此值为虚拟地址")]),s._v("\nElf32_Word r_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 符号表索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" Elf32_Rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" ELF32_R_SYM(info) ((info)>>8)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" ELF32_R_TYPE(info) ((unsigned char)(info))")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" ELF32_R_INFO(sym, type) (((sym)<<8)+(unsigned char)(type))")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Elf32_Rela 类型的表项包含明确的补齐信息。 Elf32_Rel 类型的表项在将被修改的位置保存隐式的补齐信息。由于处理器体系结构的原因，这两种形式都存在，甚至是必需的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-05_10-07-04.png",alt:"Snipaste_2019-03-05_10-07-04"}})]),s._v(" "),a("h3",{attrs:{id:"global-offset-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-offset-table"}},[s._v("#")]),s._v(" Global Offset Table")]),s._v(" "),a("p",[s._v("GOT 表在 ELF 文件中分为两个部分")]),s._v(" "),a("ul",[a("li",[s._v(".got，保存全局变量偏移表")]),s._v(" "),a("li",[s._v(".got.plt，保存全局函数偏移表，对应着"),a("code",[s._v("Elf32_Rel")]),s._v("结构中"),a("code",[s._v("r_offset")]),s._v("的值。")])]),s._v(" "),a("p",[s._v("其相应的值由能够解析. rel.plt 段中的重定位的动态链接器来填写。")]),s._v(" "),a("p",[s._v("通常来说，地址独立代码不能包含绝对虚拟地址。GOT 表中包含了隐藏的绝对地址，这使得在不违背位置无关性以及程序代码段兼容的情况下，得到相关符号的绝对地址。一个程序可以使用位置独立代码来引用它的 GOT 表，然后提取出来绝对的数值，以便于将位置独立的引用重定向到绝对的地址。 这个表对于 System V 环境中的动态链接来说是必要的，但其具体的内容以及形式依赖于处理器。")]),s._v(" "),a("p",[s._v("初始时，got 表中包含重定向入口所需要的信息。当一个系统为可加载的目标文件创建内存段时，动态链接器会处理重定位项，其中的一些项的类型可能是 R_386_GLOB_DAT，这会指向 got 表。动态链接器会决定相关的符号的值，计算它们的绝对地址，然后将合适的内存表项设置为相应的值。尽管在链接器建立目标文件时，绝对地址还处于未知状态，动态链接器知道所有内存段的地址，因为可以计算所包含的符号的绝对地址。")]),s._v(" "),a("p",[s._v("如果一个程序需要直接访问一个符号的绝对地址，那么这个符号将会有一个 got 表项。由于可执行文件以及共享目标文件都有单独的表项，所以一个符号的地址可能会出现在多个表中。动态链接器在把权限给到进程镜像中的代码段前，会处理所有的 got 表中的重定位项，以便于确定所有的绝对地址在执行过程中是可以访问的。")]),s._v(" "),a("p",[s._v("GOT 表中的第 0 项包含动态结构的地址，用符号 _DYNAMIC 来进行引用。这使得一个程序，例如动态链接器，在没有执行其重定向前可以找到对应的动态结构。这对于动态链接器来说是非常重要的，因为它必须在不依赖其它程序的情况下可以重定位自己的内存镜像。")]),s._v(" "),a("p",[s._v("在不同的程序中，系统可能会为同一共享目标文件选择不同的内存段地址；甚至对于同一个程序，在不同的执行过程中，也会有不同的库地址。然而，一旦进程镜像被建立，内存段的地址就不会再改变，只要一个进程还存在，它的内存段地址将处于固定的位置。")]),s._v(" "),a("p",[s._v("GOT 表的形式以及解释依赖于具体的处理器，对于 Intel 架构来说，"),a("code",[s._v("_GLOBAL_OFFSET_TABLE_")]),s._v(" 符号可能被用来访问这个表。")]),s._v(" "),a("p",[a("code",[s._v("extern Elf32_Addr _GLOBAL_OFFSET_TABLE[];")])]),s._v(" "),a("p",[a("em",[s._v("GLOBAL_OFFSET_TABLE")]),s._v(" 可能会在 .got 节的中间，以便于可以使用正负索引来访问这个表。")]),s._v(" "),a("p",[s._v("在 Linux 的实现中，.got.plt 的前三项的具体的含义如下")]),s._v(" "),a("ul",[a("li",[s._v("GOT[0]，.dynamic 的地址。")]),s._v(" "),a("li",[s._v("GOT[1]，指向内部类型为 link_map 的指针，只会在动态装载器中使用，包含了进行符号解析需要的当前 ELF 对象的信息。每个 link_map 都是一条双向链表的一个节点，而这个链表保存了所有加载的 ELF 对象的信息。")]),s._v(" "),a("li",[s._v("GOT[2]，指向动态装载器中 _dl_runtime_resolve 函数的指针。")])]),s._v(" "),a("p",[s._v(".got.plt 后面的项则是程序中不同 .so 中函数的引用地址。下面给出一个相应的关系。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/got.png",alt:"got"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/Snipaste_2019-03-05_11-41-18.png",alt:"Snipaste_2019-03-05_11-41-18"}})]),s._v(" "),a("h3",{attrs:{id:"procedure-linkage-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-linkage-table"}},[s._v("#")]),s._v(" Procedure Linkage Table")]),s._v(" "),a("p",[s._v("GOT 表用来将位置独立的地址重定向为绝对地址，与此类似，PLT 表将位置独立的函数重定向到绝对地址。主要包括两部分")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v(".plt")]),s._v("，与常见导入的函数有关，如 read 等函数。")]),s._v(" "),a("li",[a("strong",[s._v(".plt.got")]),s._v("，与动态链接有关系。")])]),s._v(" "),a("p",[s._v("在动态链接下，程序模块之间包含了大量的函数引用，程序开始执行前，动态链接会耗费不少时间用于解决模块之间的函数引用的符号查找以及重定位。但是，在一个程序运行过程中，可能很多函数在程序执行完时都不会用到，因此一开始就把所有函数都链接好是一种浪费，所以 ELF 采用了一种延迟绑定的做法，其基本思想是函数第一次被用到时才进行绑定（符号查找，重定位等），如果没有用则不进行绑定。所以程序开始执行前，模块间的函数调用都没有进行绑定，而是需要用到时才由动态链接器负责绑定。")]),s._v(" "),a("p",[s._v("链接编辑器不能够解析执行流转换（比如程序调用），即从一个可执行文件或者共享目标文件到另一个文件。链接器安排程序将控制权交给过程链接表中的表项。在 Intel 架构中，过程链接表存在于共享代码段中，但是他们会使用在 GOT 表中的数据。动态链接器会决定目标的绝对地址，并且会修改相应的 GOT 表中的内存镜像。因此，动态链接器可以在不违背位置独立以及程序代码段兼容的情况下，重定向 PLT 项。可执行文件和共享目标文件都有独立的 PLT 表。")]),s._v(" "),a("p",[s._v("动态链接器和程序按照如下方式解析过程链接表和全局偏移表的符号引用。")]),s._v(" "),a("ol",[a("li",[s._v("当第一次建立程序的内存镜像时，动态链接器将全局偏移表的第二个和第三个项设置为特殊的值，下面的步骤会仔细解释这些数值。")]),s._v(" "),a("li",[s._v("如果过程链接表是位置独立的话，那么 GOT 表的地址必须在 ebx 寄存器中。每一个进程镜像中的共享目标文件都有独立的 PLT 表，并且程序只在同一个目标文件将控制流交给 PLT 表项。因此，调用函数负责在调用 PLT 表项之前，将全局偏移表的基地址设置为寄存器中。")]),s._v(" "),a("li",[s._v("这里举个例子，假设程序调用了 name1，它将控制权交给了 lable .PLT1。")]),s._v(" "),a("li",[s._v("那么，第一条指令将会跳转到全局偏移表中 name1 的地址。初始时，全局偏移表中包含 PLT 中下一条 pushl 指令的地址，并不是 name1 的实际地址。")]),s._v(" "),a("li",[s._v("因此，程序将一个重定向偏移（reloc_index）压到栈上。重定位偏移是 32 位的，并且是非负的数值。此外，重定位表项的类型为 R_386_JMP_SLOT，并且它将会说明在之前 jmp 指令中使用的全局偏移表项在 GOT 表中的偏移。重定位表项也包含了一个符号表索引，因此告诉动态链接器什么符号目前正在被引用。在这个例子中，就是 name1 了。")]),s._v(" "),a("li",[s._v("在压入重定位偏移后，程序会跳转到 .PLT0，这是过程链接表的第一个表项。pushl 指令将 GOT 表的第二个表项 (got_plus_4 或者 4(%ebx)，"),a("strong",[s._v("当前 ELF 对象的信息")]),s._v(") 压到栈上，然后给动态链接器一个识别信息。此后，程序会跳转到第三个全局偏移表项 (got_plus_8 或者 8(%ebx)，"),a("strong",[s._v("指向动态装载器中_dl_runtime_resolve 函数的指针")]),s._v(") 处，这将会将程序流交给动态链接器。")]),s._v(" "),a("li",[s._v("当动态链接器接收到控制权后，他将会进行出栈操作，查看重定位表项，找到对应的符号的值，将 name1 的地址存储在全局偏移表项中，然后将控制权交给目的地址。")]),s._v(" "),a("li",[s._v("过程链接表执行之后，程序的控制权将会直接交给 name1 函数，而且此后再也不会调用动态链接器来解析这个函数。也就是说，在 .PLT1 处的 jmp 指令将会直接跳转到 name1 处，而不是再次执行 pushl 指令。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/2019-03/lazy-plt.png",alt:"lazy-plt"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);