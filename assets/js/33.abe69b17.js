(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{468:function(s,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("hr"),s._v(" "),a("blockquote",[a("p",[s._v("Linux中elf文件链接过程比较重要的两个表，GOT表和PLT表。\n在ELF文件的动态连接机制中，每一个外部定义的符号在全局偏移表 (Global Offset Table，GOT)中有相应的条目，如果符号是函数则在过程连接表(Procedure Linkage Table，PLT)中也有相应的条目，且一个PLT条目对应一个GOT条目。以简单的例子观察GOT与PLT的变化机制。")])]),s._v(" "),a("h2",{attrs:{id:"got表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#got表"}},[s._v("#")]),s._v(" GOT表")]),s._v(" "),a("p",[s._v("概念:每一个外部定义的符号在全局偏移表（Global offset Table）中有相应的条目，GOT位于ELF的数据段中，叫做GOT段。\n作用：把位置无关的地址计算重定位到一个绝对地址。程序首次调用某个库函数时，运行时连接编辑器（rtld）找到相应的符号，并将它重定位到GOT之后每次调用这个函数都会将控制权直接转向那个位置，而不再调用rtld。")]),s._v(" "),a("h2",{attrs:{id:"plt表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plt表"}},[s._v("#")]),s._v(" PLT表")]),s._v(" "),a("p",[s._v("过程连接表(Procedure Linkage Table)，一个PLT条目对应一个GOT条目\n当main()函数开始，会请求plt中这个函数的对应GOT地址，如果第一次调用那么GOT会重定位到plt，并向栈中压入一个偏移，程序的执行回到_init()函数，rtld得以调用就可以定位printf的符号地址，第二次运行程序再次调用这个函数时程序跳入plt，对应的GOT入口点就是真实的函数入口地址。\n动态连接器并不会把动态库函数在编译的时候就包含到ELF文件中,仅仅是在这个ELF被加载的时候,才会把那些动态函库数代码加载进来,之前系统只会在ELF文件中的GOT中保留一个调用地址.")]),s._v(" "),a("h2",{attrs:{id:"got覆写技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#got覆写技术"}},[s._v("#")]),s._v(" GOT覆写技术")]),s._v(" "),a("p",[s._v("原理：由于GOT表是可写的，把其中的函数地址覆盖为我们shellcode地址，在程序进行调用这个函数时就会执行shellcode。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<string.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("win")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you win\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you lose\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("用gdb调试，disass main可以看到main的反汇编代码，我们可以观察到gets@plt和puts@plt这两个函数，为什么后面加了个@plt，因为这个为PLT表中的数据的地址。那为什么反编译中的代码地址为PLT表中的地址呢。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Dump of assembler code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" main:\n   0x00000000004005fd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(":\tpush   rbp\n   0x00000000004005fe "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(":\tmov    rbp,rsp\n   0x0000000000400601 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(":\tsub    rsp,0x70\n   0x0000000000400605 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("8")]),s._v(">")]),s._v(":\tmov    rax,QWORD PTR fs:0x28\n   0x000000000040060e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("7")]),s._v(">")]),s._v(":\tmov    QWORD PTR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rbp-0x8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",rax\n   0x0000000000400612 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(":\txor    eax,eax\n   0x0000000000400614 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v(":\tlea    rax,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rbp-0x70"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   0x0000000000400618 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("7")]),s._v(">")]),s._v(":\tmov    rdi,rax\n   0x000000000040061b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+3"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(":\tcall   0x4004f0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("gets@plt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   0x0000000000400620 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+3"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(":\tmov    edi,0x4006dc\n   0x0000000000400625 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+4"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(":\tcall   0x4004b0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("puts@plt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   0x000000000040062a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+4"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(":\tmov    eax,0x0\n   0x000000000040062f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+5"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(":\tmov    rdx,QWORD PTR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rbp-0x8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   0x0000000000400633 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+5"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(":\txor    rdx,QWORD PTR fs:0x28\n   0x000000000040063c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+6"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v(":\tje     0x400643 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("main+7"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n   0x000000000040063e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+6"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(":\tcall   0x4004c0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("__stack_chk_fail@plt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   0x0000000000400643 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+7"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(":\tleave  \n   0x0000000000400644 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+7"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(":\tret    \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("原因：\n为了更好的用户体验和内存CPU的利用率，程序编译时会采用两种表进行辅助，一个为PLT表，一个为GOT表，PLT表可以称为内部函数表，GOT表为全局函数表（也可以说是动态函数表这是个人自称），这两个表是相对应的，什么叫做相对应呢，PLT表中的数据就是GOT表中的一个地址，可以理解为一定是一一对应的。\nPLT表中的每一项的数据内容都是对应的GOT表中一项的地址这个是固定不变的，到这里大家也知道了PLT表中的数据根本不是函数的真实地址，而是GOT表项的地址，好坑啊。\n其实在大家进入带有@plt标志的函数时，这个函数其实就是个过渡作用，因为GOT表项中的数据才是函数最终的地址，而PLT表中的数据又是GOT表项的地址，我们就可以通过PLT表跳转到GOT表来得到函数真正的地址。可以通过disass gets看看里面的代码：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("disass gets\nDump of assembler code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" gets@plt:\n   0x00000000004004f0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(":\tjmp    QWORD PTR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rip+0x200b42"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0x601038 <gets@got.plt>")]),s._v("\n   0x00000000004004f6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("6")]),s._v(">")]),s._v(":\tpush   0x4\n   0x00000000004004fb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("+1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(":\tjmp    0x4004a0\nEnd of assembler dump.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("可以发现，这个函数只有三行代码，第一行跳转，第二行压栈，第三行又是跳转。\n解释：\n第一行跳转，它的作用是通过PLT表跳转到GOT表，而在第一次运行某一个函数之前，这个函数PLT表对应的GOT表中的数据为@plt函数中第二行指令的地址，针对图中来说步骤如下：")]),s._v(" "),a("p",[s._v("jmp指令跳转到GOT表\nGOT表中的数据为0x400486\n跳转到指令地址为0x400486\n执行push 0x4#这个为在GOT中的下标序号\n在执行jmp 0x400440\n而0x400440为PLT[0]的地址\nPLT[0]的指令会进入动态链接器的入口\n执行一个函数将真正的函数地址覆盖到GOT表中")])])}),[],!1,null,null,null);t.default=n.exports}}]);