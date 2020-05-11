(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{453:function(t,a,e){"use strict";e.r(a);var n=e(11),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("hr"),t._v(" "),e("blockquote",[e("p",[t._v("本篇是关于《IDApro权威代码破解揭秘》的笔记,学习内容分为两部分，一是OS层面的系统知识，二是IDA脚本编写。")])]),t._v(" "),e("h2",{attrs:{id:"内存管理方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存管理方式"}},[t._v("#")]),t._v(" 内存管理方式")]),t._v(" "),e("p",[t._v("以下的地址均是在Intel 32 位下。在64bit模式下分段直接被禁用了，内存完全平坦。")]),t._v(" "),e("h3",{attrs:{id:"虚拟地址（逻辑地址）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟地址（逻辑地址）"}},[t._v("#")]),t._v(" 虚拟地址（逻辑地址）")]),t._v(" "),e("p",[t._v("即是16位里面的段+偏移量的地址表示方式，应用于寄存器寻址中。是80386 的默认内存寻址方式（保护模式）。\n虚拟地址到线性地址转换：虚拟段地址结合GDT、LDT，得到段描述符基址，加上偏移量得到线性地址。这个过程被称为 "),e("strong",[t._v("段式内存管理")]),t._v(" "),e("a",{attrs:{href:"http://cjynet.top/2017/08/06/windows/Win32ASM-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于GDT和LDT"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"线性地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线性地址"}},[t._v("#")]),t._v(" 线性地址")]),t._v(" "),e("p",[t._v("应用于直接寄存器操作中的直接内存寻址方式，32bit长度的无符号整数地址即为线性地址。\n"),e("strong",[t._v("如果启用了分页机制，那么线性地址可以再经过变换以产生一个物理地址")]),t._v("\n线性地址到物理地址转换：cr3中取出进程的页目录地址，根据线性地址前十位定位页表；根据线性地址的中间十位，在页表中找到页的起始地址，即页表项；根据线性地址中最后12位偏移量加上页的起始地址得到物理地址。这个过程被称为 "),e("strong",[t._v("页式内存管理")])]),t._v(" "),e("h3",{attrs:{id:"物理地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物理地址"}},[t._v("#")]),t._v(" 物理地址")]),t._v(" "),e("p",[t._v("地址线所代表的实际的内存地址，实模式下采用物理地址寻址。\n"),e("code",[t._v("注意：在linux下虚拟地址和线性地址数值相同，原因是所有的段基址都是0，段限长都是最大。而虚拟地址是在段内的偏移量，现在段就是整个线性空间，所以虚拟地址就是整个线性空间的偏移量，这和线性地址的概念一样")])]),t._v(" "),e("h2",{attrs:{id:"堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[t._v("#")]),t._v(" 堆")]),t._v(" "),e("p",[t._v("关于堆的内存管理与分配，参考"),e("code",[t._v("malloc()和free()")]),t._v("的实现方式。")]),t._v(" "),e("h3",{attrs:{id:"ptmalloc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ptmalloc"}},[t._v("#")]),t._v(" ptmalloc")]),t._v(" "),e("p",[t._v("GNU Libc 的内存分配器(allocator) — ptmalloc提供动态内存管理的支持。allocator一般都会预先分配一块大于用户请求的内存， 并通过某种算法管理这块内存。来满足用户的内存分配要求，用户 free 掉的内存也并不是立即就返回给操作系统，相反，allocator 会管理这些被 free 掉的空闲空间，以应对用户以后的内存分配要求。")]),t._v(" "),e("h3",{attrs:{id:"主分配区和非主分配区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主分配区和非主分配区"}},[t._v("#")]),t._v(" 主分配区和非主分配区")]),t._v(" "),e("p",[t._v("ptmalloc的内存分配器中，为了解决多线程锁争夺问题，分为主分配区main_area和非主分配区no_main_area。主分配区可以使用brk和mmap来分配，而非主分配区只能使用mmap来映射内存块。")]),t._v(" "),e("h3",{attrs:{id:"chuck"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chuck"}},[t._v("#")]),t._v(" chuck")]),t._v(" "),e("p",[t._v("ptmalloc 在给用户分配的空间的前后加上了一些控制信息，用这样的方法来记录分配的信息，以便完成分配和释放工作。\n"),e("a",{attrs:{href:"http://blog.csdn.net/phenics/article/details/777053",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细关于chunk结构的说明1"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"http://blog.csdn.net/initphp/article/details/50833036",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细关于chunk结构的说明2"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"使用的chuck"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用的chuck"}},[t._v("#")]),t._v(" 使用的chuck")]),t._v(" "),e("p",[t._v("chunk 指针指向一个 chunk 的开始。一个chunk 中包含了用户请求的内存区域和相关的控制信息。mem 指针才是真正返回给用户的内存指针。chunk 的第二个域的最低一位为p，它表示前一个块是否在使用中，p为0则表示前一个 chunk 为空闲，这时 chunk 的第一个域 prev_size 才有效，prev_size 表示前一个 chunk 的 size，程序可以使用这个值来找到前一个 chunk 的开始。当p为1时，表示前一个 chunk 正在使用中，prev_size 无效，程序也就不可以得到前一个 chunk 的大小。而不能对前一个 chunk 进行任何操作。 ptmalloc 分配的第一个块总是将p设为1，以防止程序引用到不存在的区域。")]),t._v(" "),e("h4",{attrs:{id:"空闲的thunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空闲的thunk"}},[t._v("#")]),t._v(" 空闲的thunk")]),t._v(" "),e("p",[t._v("当 chunk 空闲时，原本是用户数据区的地方存储了两个指针，指针 fd 指向后一个空闲的 chunk，而 bk 指向前一个空闲的 chunk， ptmalloc 通过这两个指针将大小相近的 chunk 连成一个双向链表。而不同的 chunk 链表又是通过 bins 或者 fastbins 来组织的。")]),t._v(" "),e("h3",{attrs:{id:"空闲链表bins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空闲链表bins"}},[t._v("#")]),t._v(" 空闲链表bins")]),t._v(" "),e("p",[t._v("当用户使用free函数释放掉的内存，ptmalloc并不会马上交还给操作系统，而是被ptmalloc本身的空闲链表bins管理起来了，这样当下次进程需要malloc一块内存的时候，ptmalloc就会从空闲的bins上寻找一块合适大小的内存块分配给用户使用。\nptmalloc一共维护了128bin。每个bins都维护了大小相近的双向链表的chunk。")]),t._v(" "),e("h4",{attrs:{id:"fast-bins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-bins"}},[t._v("#")]),t._v(" fast bins")]),t._v(" "),e("p",[t._v("fast bins是bins的高速缓冲区，大约有10个定长队列。当用户释放一块不大于max_fast（默认值64）的chunk（一般小内存）的时候，会默认会被放到fast bins上。当用户下次需要申请内存的时候首先会到fast bins上寻找是否有合适的chunk，然后才会到bins上空闲的chunk。")]),t._v(" "),e("h4",{attrs:{id:"unsorted-bin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unsorted-bin"}},[t._v("#")]),t._v(" unsorted bin")]),t._v(" "),e("p",[t._v("是bins的一个缓冲区。当用户释放的内存大于max_fast或者fast bins合并后的chunk都会进入unsorted bin上。当用户malloc的时候，先会到unsorted bin上查找是否有合适的bin，如果没有合适的bin，ptmalloc会将unsorted bin上的chunk放入bins上，然后到bins上查找合适的空闲chunk。")]),t._v(" "),e("h4",{attrs:{id:"exact-bins（small-bins）和ordered-bins（large-bins）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exact-bins（small-bins）和ordered-bins（large-bins）"}},[t._v("#")]),t._v(" exact bins（small bins）和ordered bins（large bins）")]),t._v(" "),e("p",[t._v("small bins和large bins是真正用来放置chunk双向链表的。每个bin之间相差8个字节，并且通过上面的这个列表，可以快速定位到合适大小的空闲chunk。前64个为small bins，定长；后64个为large bins，非定长。")]),t._v(" "),e("h4",{attrs:{id:"top-chunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#top-chunk"}},[t._v("#")]),t._v(" top chunk")]),t._v(" "),e("p",[t._v("ptmalloc 会预先分配一块较大的空闲内存(也就是所为的 heap)，而通过管理这块内存来响应用户的需求，因为内存是按地址从低向高进行分配的，在空闲内存的最高处，必然存在着一块空闲 chunk。top chunk相当于分配区的顶部空闲内存，当bins上都不能满足内存分配要求的时候，就会来top chunk上分配。")]),t._v(" "),e("h4",{attrs:{id:"mmaped-chunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mmaped-chunk"}},[t._v("#")]),t._v(" mmaped chunk")]),t._v(" "),e("p",[t._v("当需要分配的 chunk 足够大，而且 fastbins 和 bins 都不能满足要求，甚至 top chunk 本身也不能满足分配需求时，ptmalloc 会使用 mmap 来直接使用内存映射来将页映射到进程空间。当释放mmaped chunk上的内存的时候会直接交还给操作系统。")]),t._v(" "),e("ul",[e("li",[t._v("小内存： 获取分配区(arena)并加锁 -> fast bin -> unsorted bin -> small bin -> large bin -> top chunk -> 扩展堆")]),t._v(" "),e("li",[t._v("大内存： 直接mmap")])]),t._v(" "),e("h3",{attrs:{id:"sbrk-mmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sbrk-mmap"}},[t._v("#")]),t._v(" sbrk & mmap")]),t._v(" "),e("p",[t._v("ptmalloc 使用两种方法向内存索取内存空间：sbrk 和 mmap。")]),t._v(" "),e("h4",{attrs:{id:"sbrk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sbrk"}},[t._v("#")]),t._v(" sbrk")]),t._v(" "),e("p",[t._v(".bss 段之上的这块分配给用户程序的空间被称为 heap (堆)。start_brk 指向 heap 的开始，而 brk 指向 heap 的顶部。可以使用系统调用 brk 和 sbrk 来增加标识 heap 顶部的 brk 值，从而线性的增加分配给用户的 heap 空间。 ptmalloc 在开始时，若请求的空间小于 DEFAULT_MMAP_THRESHOLD (128K bytes)时，ptmalloc 会调用sbrk增加一块大小为 ( 128 KB + chunk_size ) align 4K 的空间作为heap。这就是ptmalloc 所维护的分配空间，当用户请求内存分配时，首先会在这个区域内找一块合适的 chunk 给用户。当用户释放了 heap 中的 chunk 时，ptmalloc 又会使用 fastbins 和 bins 来组织空闲 chunk。以备用户的下一次分配。若需要分配的 chunk 大小小于 DEFAULT_MMAP_THRESHOLD，而 heap 空间又不够，则此时 ptmalloc 会通过 sbrk 调用来增加 heap 值，也就是增加 top chunk 的大小，每次 heap 增加的值都会 align 到4k bytes。")]),t._v(" "),e("h4",{attrs:{id:"mmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mmap"}},[t._v("#")]),t._v(" mmap")]),t._v(" "),e("p",[t._v("当用户的请求超过 DEFAULT_MMAP_THRESHOLD，并且使用 sbrk 分配失败的时候，ptmalloc 会尝试使用 mmap 直接映射一块内存到进程内存空间。使用 mmap 直接映射的 chunk 在释放时直接解除映射，而不再属于进程的内存空间。任何对该内存的访问都会产生段错误。而在 heap 中分配的空间则可能会留在进程内存空间内。")]),t._v(" "),e("h2",{attrs:{id:"pe-elf-文件格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pe-elf-文件格式"}},[t._v("#")]),t._v(" PE & ELF 文件格式")]),t._v(" "),e("p",[t._v("关于PE格式，之前写过了。"),e("a",{attrs:{href:"http://cjynet.top/2017/09/28/windows/Win32ASM-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PE格式"),e("OutboundLink")],1),t._v("\n关于ELF格式，这里不详细写了。主要是学习一下ELF的常见的节。")]),t._v(" "),e("h3",{attrs:{id:"elf常见区段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elf常见区段"}},[t._v("#")]),t._v(" ELF常见区段")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("区段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可执行指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".bss")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("未初始化的全局变量或静态变量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".data")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("已初始化的全局变量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".rdata")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只读数据")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".fini")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("结束应用程序的指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".init")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("开始应用程序的指令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".got")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GOT表，即全局偏移表")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".plt")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PLT表，即过程链接表")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".dynamic")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("包含动态链接的信息")])])])]),t._v(" "),e("p",[t._v("这里其实没什么东西，主要是要懂plt表和got表之间的关系，已经如何实现覆盖got表来实现缓冲区溢出。\n"),e("a",{attrs:{href:"http://cjynet.top/2017/09/15/pwn/GOT-AND-PLT/",target:"_blank",rel:"noopener noreferrer"}},[t._v("got表和plt表"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);