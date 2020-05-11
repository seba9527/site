(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{442:function(s,e,t){"use strict";t.r(e);var a=t(11),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("hr"),s._v(" "),t("blockquote",[t("p",[s._v("栈溢出学习-_-\n学习基本的栈溢出，加了栈保护DEP，堆栈不可执行NX，内存地址随机化ASLR等各种保护之后怎么绕过。")])]),s._v(" "),t("h2",{attrs:{id:"名词解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),t("h3",{attrs:{id:"canary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canary"}},[s._v("#")]),s._v(" CANARY")]),s._v(" "),t("p",[s._v("金丝雀值，指的是矿工曾利用金丝雀来确认是否有气体泄漏，如果金丝雀因为气体泄漏而中毒死亡，可以给矿工预警，类似于windows GS技术，当栈溢出发生时，canary值将在已保存的指令指针被重写前先改变。系统检测这个值是否改变，栈溢出发生了，保存的指令指针可能也被修改了，因此不能安全返回，函数会调用__stack_chk_fail函数。这个函数会丢出一个错误然后退出进程。缺点：仅保护了sip，未保护应用变量，覆写GOT绕过。")]),s._v(" "),t("h3",{attrs:{id:"fortify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fortify"}},[s._v("#")]),s._v(" FORTIFY")]),s._v(" "),t("p",[s._v("Compile Time Buffer Checks，确定函数执行栈的大小，以避免缓冲区溢出攻击。")]),s._v(" "),t("h3",{attrs:{id:"nx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nx"}},[s._v("#")]),s._v(" NX")]),s._v(" "),t("p",[s._v("No Execute.现代处理器支持一种称为NX的特性使得系统控制各部分的执行的内存。即程序栈不可执行。")]),s._v(" "),t("h3",{attrs:{id:"pie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pie"}},[s._v("#")]),s._v(" PIE")]),s._v(" "),t("p",[s._v("随机化加载程序的内存地址。")]),s._v(" "),t("h3",{attrs:{id:"relro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relro"}},[s._v("#")]),s._v(" RELRO")]),s._v(" "),t("p",[s._v("RELocation Read-Only (RELRO) 重定位只读，它能够保护库函数的调用不受攻击者重定向的影响。")]),s._v(" "),t("h2",{attrs:{id:"基础栈溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础栈溢出"}},[s._v("#")]),s._v(" 基础栈溢出")]),s._v(" "),t("p",[s._v("gcc 编译\n-fno-stack-protector和-z execstack这两个参数会分别关掉DEP和Stack Protector")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("gcc -fno-stack-protector -z execstack -m32 -o level1 level1.c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("同时关掉整个linux系统的ASLR保护。")]),s._v(" "),t("p",[s._v("这个shellcode地址的位置其实是一个坑。因为正常的思维是使用gdb调试目标程序，然后查看内存来确定shellcode的位置。但当你真的执行exp的时候你会发现shellcode压根就不在这个地址上！这是为什么呢？原因是gdb的调试环境会影响buf在内存中的位置，虽然我们关闭了ASLR，但这只能保证buf的地址在gdb的调试环境中不变，但当我们直接执行./level1的时候，buf的位置会固定在别的地址上。怎么解决这个问题呢？\n最简单的方法就是开启core dump这个功能。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -c unlimited\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo \"/tmp/core.%t\" > /proc/sys/kernel/core_pattern'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("挂载程序 之前要安装socat")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("socat TCP4-LISTEN:10001,fork EXEC:./level1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("但是试了很久，硬编码的ret地址不对。。")]),s._v(" "),t("h3",{attrs:{id:"关于shellcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于shellcode"}},[s._v("#")]),s._v(" 关于shellcode")]),s._v(" "),t("p",[s._v("为了通用性，我们通常会在shellcode一开始就大范围抬高栈顶，从而达到保护自身安全的目的\nmov eax,esp 和 jmp eax 也可以完成进入栈区的功能\n扩大shellcode面积，提高命中率（函数返回时，只要能击中nop区shellcode就能执行）\n大面积“扫射”返回地址（用一大片返回地址来覆盖真正的返回地址，增加命中的成功率）\n解决字节错位：不同的主机会有不同的安装目录，可能导致覆盖的地址错位失效，使用按字节相同的双字节跳转地址，甚至可以使堆中的地址，然后想办法将shellcode用堆扩展的办法放置在响应的区域，这种heap spray的办法经常在IE漏洞中使用")]),s._v(" "),t("h2",{attrs:{id:"ret2libc：开启nx（dep）的栈溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ret2libc：开启nx（dep）的栈溢出"}},[s._v("#")]),s._v(" Ret2libc：开启NX（DEP）的栈溢出")]),s._v(" "),t("p",[s._v('这时候查看进程布局，发现堆栈是不可执行的。\n那么如何执行shellcode呢？我们知道stack2调用了libc.so，并且libc.so里保存了大量可利用的函数，我们如果可以让程序执行 system(“/bin/sh”) 的话，也可以获取到shell。既然思路有了，那么接下来的问题就是如何得到system()这个函数的地址以及”/bin/sh”这个字符串的地址。\n如果关掉了ASLR的话，system()函数在内存中的地址是不会变化的，并且libc.so中也包含”/bin/sh”这个字符串，并且这个字符串的地址也是固定的。那么接下来我们就来找一下这个函数的地址。这时候我们可以使用gdb进行调试。然后通过print和find命令来查找system和”/bin/sh”字符串的地址。\n我们首先在main函数上下一个断点，然后执行程序，这样的话程序会加载libc.so到内存中，然后我们就可以通过”print system”这个命令来获取system函数在内存中的位置，随后我们可以通过” print __libc_start_main”这个命令来获取libc.so在内存中的起始位置，接下来我们可以通过find命令来查找”/bin/sh”这个字符串。这样我们就得到了system的地址0xb7e5f460以及"/bin/sh"的地址0xb7f81ff8。下面我们开始写exp\n要注意的是system()后面跟的是执行完system函数后要返回地址，接下来才是”/bin/sh”字符串的地址。因为我们执行完后也不打算干别的什么事，所以我们就随便写了一个0xdeadbeef作为返回地址。\n测试了没什么大问题，就是system执行完成后的返回地址位置，导致在sh中执行exit会出错这点未知。')]),s._v(" "),t("h2",{attrs:{id:"开启nx（dep）和aslr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启nx（dep）和aslr"}},[s._v("#")]),s._v(" 开启NX（DEP）和aslr")]),s._v(" "),t("p",[s._v("那么如何解决地址随机化的问题呢？思路是：我们需要先泄漏出libc.so某些函数在内存中的地址，然后再利用泄漏出的函数地址根据偏移量计算出system()函数和 /bin/sh 字符串在内存中的地址，然后再执行我们的ret2libc的shellcode。既然栈，libc，heap的地址都是随机的。我们怎么才能泄露出libc.so的地址呢？方法还是有的，因为程序本身在内存中的地址并不是随机的")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("objdump -d -j .plt stack3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("我们发现除了程序本身的实现的函数之外，我们还可以使用 read@plt() 和 write@plt() 函数。但因为程序本身并没有调用 system() 函数，所以我们并不能直接调用 system() 来获取shell。但其实我们有 write@plt() 函数就够了，因为我们可以通过 write@plt () 函数把 write() 函数在内存中的地址也就是write.got给打印出来。既然write()函数实现是在libc.so当中，那我们调用的 write@plt() 函数为什么也能实现 write() 功能呢? 这是因为linux采用了延时绑定技术，当我们调用 write@plit() 的时候，系统会将真正的 write() 函数地址link到got表的 write.got 中，然后 write@plit() 会根据 write.got 跳转到真正的 write() 函数上去。")])])}),[],!1,null,null,null);e.default=r.exports}}]);