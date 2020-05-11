(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{503:function(a,t,s){"use strict";s.r(t);var e=s(11),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("hr"),a._v(" "),s("blockquote",[s("p",[a._v("Windows 环境32位汇编语言程序设计")])]),a._v(" "),s("p",[a._v("PE文件格式")]),a._v(" "),s("h1",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("首先PE文件分为DOS部分，PE文件头，节表和节数据一共4部分。")]),a._v(" "),s("h2",{attrs:{id:"dos-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dos-header"}},[a._v("#")]),a._v(" DOS_Header")]),a._v(" "),s("p",[a._v("MZ格式的文件头由IMAGE_DOS_HEADER结构体定义。最开始的DOS可执行文件的标记，为MZ。\nDOS_Header的大小为0x40。其中最后为PE文件头的偏移量：LONG AddressOfNewExeHeader，位置为文件头偏移0x003ch，大小为4字节。")]),a._v(" "),s("h3",{attrs:{id:"dos-stub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dos-stub"}},[a._v("#")]),a._v(" DOS_Stub")]),a._v(" "),s("p",[a._v("可执行代码部分称为DOS stub。简单的显示一个“This program cannot be run in DOS mode.”。由于现在是NT结构，就不说了。")]),a._v(" "),s("h2",{attrs:{id:"nt-header-pe文件头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nt-header-pe文件头"}},[a._v("#")]),a._v(" NT_Header (PE文件头)")]),a._v(" "),s("p",[a._v("NT_Header格式由IMAGE_NT_HEADER结构体定义。最开始是signature签名，被定义为00004550h，就是PE和两个0。")]),a._v(" "),s("h3",{attrs:{id:"image-file-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-file-header"}},[a._v("#")]),a._v(" IMAGE_FILE_HEADER")]),a._v(" "),s("p",[a._v("结构体如下。")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IMAGE_FILE_HEADER")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Machine                 运行平台\n    NumberOfSections        节数目\n    TimeDateStamp           创建时间，从 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1970")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("01")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("01")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),a._v(" 开始\n    PointerToSymbolTable    符号表指针，用于调试\n    NumberOfSymbols         符号表中符号数量，用于调试\n    SizeOfOptionalHeader    Optional结构大小，紧挨FILE_HEADER，为"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0xe0")]),a._v("\n    Characteristics         文件属性。exe一般是"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x010f")]),a._v("，dll一般是"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x210e")]),a._v("。\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"image-optinonal-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-optinonal-header"}},[a._v("#")]),a._v(" IMAGE_OPTINONAL_HEADER")]),a._v(" "),s("p",[a._v("optional结构体本意是让开发者在pe文件头中使用自定义的数据，但实际上IMAGE_FILE_HEADER不足以定义PE的属性，所以optional并不是可选的。")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IMAGE_OPTIONAL_HEADER32")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Magic                           "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x107")]),a._v(" ROM Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x108")]),a._v(" EXE Image\n    MajorLinkerVersion\n    MinorLinkerVersion\n    SizeOfCode                      代码节大小\n    SizeOfInitializedData           已初始化代码节大小\n    SizeOfUninitializedData         未初始化代码节大小\n    AddressOfEntryPoint             程序执行入口RVA\n    BaseOfCode                      代码节起始RVA\n    BaseOfData                      数据节其实RVA\n    ImageBase                       装载地址\n    SectionAlignment\n    FileAlignment\n    MajorOperatingSystemVersion\n    MinorOperatingSystemVersion\n    MajorImageVersion\n    MinorImageVersion\n    MajorSubsystemVersion\n    MinorSubsystemVersion\n    Win32VersionValue\n    SizeOfImage                     载入内存PE镜像大小\n    SizeOfHeaders                   载入内存所有头"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("节表大小\n    CheckSum\n    Subsystem                       文件子系统\n    DllCharacteristics\n    SizeOfStackReserve              初始化堆栈大小\n    SizeOfStackCommit               初始化实际提交堆栈大小\n    SizeOfHeapReserve               初始化保留的堆大小\n    SizeOfHeapCommit                初始化实际提交的堆大小\n    LoaderFlags\n    NumberOfRvaAndSizes             下面的数据目录结构数量\n    DataDirArray\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br")])]),s("h4",{attrs:{id:"addressofentrypoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addressofentrypoint"}},[a._v("#")]),a._v(" AddressOfEntryPoint")]),a._v(" "),s("p",[a._v("指出文件执行的入口地址，是RVA地址。如果在exe中附加了一段代码并希望先执行，只需要修改这个入口地址就行了。")]),a._v(" "),s("h4",{attrs:{id:"imagebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imagebase"}},[a._v("#")]),a._v(" ImageBase")]),a._v(" "),s("p",[a._v("文件优先装入的地址，当文件不需要重定位的时候最快。对于exe文件来说，每个文件总是独立使用虚拟地址空间，其地址不可能被其他模块占据，exe一般不需要重定位。对于dll来说，由于多个dll文件全部使用宿主exe文件的地址空间，不能确保地址没有被其他dll占用，所以dll必须包含重定位信息。一般exe默认是0x00400000，dll是0x10000000。")]),a._v(" "),s("h4",{attrs:{id:"subsystem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subsystem"}},[a._v("#")]),a._v(" Subsystem")]),a._v(" "),s("p",[a._v("Windows_CUI     win32控制台\nWindows_GUI     win32图形界面")]),a._v(" "),s("h4",{attrs:{id:"datadirarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datadirarray"}},[a._v("#")]),a._v(" DataDirArray")]),a._v(" "),s("p",[a._v("这个字段是比较重要的字段之一，各个节中的数据按照用途可以分为导出表，导入表，资源，重定位表数据块。要查看某个结构，就到这里查看某结构的位置和大小。")]),a._v(" "),s("h2",{attrs:{id:"节表和节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节表和节"}},[a._v("#")]),a._v(" 节表和节")]),a._v(" "),s("h3",{attrs:{id:"pe文件到内存的映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pe文件到内存的映射"}},[a._v("#")]),a._v(" PE文件到内存的映射")]),a._v(" "),s("p",[a._v("Windows在装载可执行程序时候，对DOS头，PE文件头和节表部分不做任何处理，装载节的时候，根据节的属性做不同的处理。所以在同属一个模块的内存页中，从不同映射过来的内存页的属性的不同的。节是相同属性的数据的集合，所以节在内存中的对齐单位必须是一个页的大小。节的规模有大有小，首先由于磁盘映像和内存映像中节的对齐单位不同，其次是对包含未初始化的节的处理，如.data节。也有不进行映射的节，比如.reloc节，重定位数据对于文件的执行代码来说是透明的，它只对Windows装载器使用。")]),a._v(" "),s("h3",{attrs:{id:"节表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节表"}},[a._v("#")]),a._v(" 节表")]),a._v(" "),s("p",[a._v("PE文件中所有的节的属性都被定义在节表中，有一系列IMAGE_SECTION_HEADER的结构体排列组成，紧跟着PE文件头，从PE文件头开始偏移0x00f8的地方。")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IMAGE_SECTION_HEADER")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Name1                       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("字节的节区名称\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("union")]),a._v(" Misc\n            PhysicalAddress     \n            VirtualSize         节区的实际大小\n    VirtualAddress              节区的RVA地址\n    SizeOfRawData               在文件中对齐的大小\n    PointerToRawData            文件中的偏移\n    PointerToRelocations        \n    PointerToLinenumbers\n    NumberOfRelocations\n    NumberOfLinenumbers\n    Characteristics             节的属性\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("p",[a._v("MASM32产生的exe文件中，代码节被命名为.text，可读写的数据节为.data，只读数据，导入表和导出表的节为.rdata，资源节为.rsrc。也有其他编译器将导入表放在.idata，中，代码节被命名为.code。")]),a._v(" "),s("h4",{attrs:{id:"pointertorawdata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pointertorawdata"}},[a._v("#")]),a._v(" PointerToRawData")]),a._v(" "),s("p",[a._v("PointerToRawData 是指出了节在磁盘文件中的偏移地址，从文件头开始计算。")]),a._v(" "),s("h4",{attrs:{id:"sizeofrawdata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sizeofrawdata"}},[a._v("#")]),a._v(" SizeOfRawData")]),a._v(" "),s("p",[a._v("SizeOfRawData 指出了某个节在磁盘文件中的大小。")]),a._v(" "),s("h3",{attrs:{id:"映射方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#映射方式"}},[a._v("#")]),a._v(" 映射方式")]),a._v(" "),s("p",[a._v("装载器从PE文件中找到某个节，即从PointerToRawData开始的大小为SizeOfRawData 的字节数据，把他们映射到内存中去，位置是从模块基址开始的偏移的VirtualAddress地方，并占用VirtualSize的值按照页大小的对齐。")]),a._v(" "),s("h3",{attrs:{id:"rva和文件偏移的转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rva和文件偏移的转换"}},[a._v("#")]),a._v(" RVA和文件偏移的转换")]),a._v(" "),s("p",[a._v("RVA是 relative virtual address的缩写，表示相对虚拟地址，是某个数据位置相对与文件头的位置。\n对于DOS头，DOS stub，PE头，节表来说，无所谓RVA和文件偏移。因为他们在文件中和内存映射中的大小和偏移都不变。RVA只是对节来说的。\n想要获得RVA对应的文件偏移，唯一的办法就是：如果目标RVA在某个节中，用目标RVA减去节的起始RVA'，获得数据在节中的偏移量。再通过PointerToRawData获得节在文件中的偏移，加上刚刚获得的偏移就是文件偏移量。")]),a._v(" "),s("h2",{attrs:{id:"导入表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入表"}},[a._v("#")]),a._v(" 导入表")]),a._v(" "),s("p",[a._v("导入函数组成导入表，导入函数就是被程序调用的函数，但其代码不在程序中，这些代码位于一个或多个DLL中，调用程序中只保留一些函数信息。\n只有当PE文件装载入内存的时候，Windows装载器才将DLL装入，并调用导入函数指令和函数实际地址，这就是动态链接，这是依靠PE文件中的导入表来完成的。")]),a._v(" "),s("h3",{attrs:{id:"导入表结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入表结构"}},[a._v("#")]),a._v(" 导入表结构")]),a._v(" "),s("p",[a._v("导入表由一系列IMAGE_IMPORT_DESCRIPTOR结构组成，每个结构对应一个DLL文件，")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IMAGE_IMPORT_DESCRIPTOR")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("union")]),a._v("\n        Characteristics\n        OriginalFirstThunk      指向包含一系列IMAGE_THUNK_DATA的数组（不会变）\n    TimeDateStamp\n    ForwarderChain\n    Name1                       对应的DLL名称\n    FirstThunk                  指向包含一系列IMAGE_THUNK_DATA的数组（会改变）\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("IMAGE_THUNK_DATA的数组中每个元素定义了一个导入函数的信息，并且以0结尾。\n当最高位为1时，表示函数以序号方式导入，这时结构体的值是函数的序号。\n当最高位为0时，表示函数以字符串类型的函数名方式导入，这时结构体的值是个RVA，指向一个用来定义导入函数名称的IMAGE_IMPORT_BY_NAME结构。")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IMAGE_IMPORT_BY_NAME")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    Hint    函数的序号，可选字段\n    Name1   导入函数的名称字符串，以"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("结尾。\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("当PE文件装载入内存时，FirstThunk所指向的数组的值都被替换成了真正的函数入口地址，这样做的目的是可以反过来查询地址的对应导入函数名。")]),a._v(" "),s("h3",{attrs:{id:"导入地址表-iat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入地址表-iat"}},[a._v("#")]),a._v(" 导入地址表 IAT")]),a._v(" "),s("p",[a._v("把FirstThunk所指向的数组称为导入地址数组。在PE文件中，所有DLL对应的导入地址数组在位置上排列在一起，数组的组合称为导入地址表IAT。\n导入表中第一个IMAGE_IMPORT_DESCRIPTOR结构的FirstThunk指向的就是IAT的起始地址。\n或者可以通过数据目录表，查找数据目录表中第13项（索引值为12/IMAGE_DIRECTORY_ENTRY_IAT），直接用来定义IAT数据块的位置和大小。")]),a._v(" "),s("h2",{attrs:{id:"导出表和重定位表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出表和重定位表"}},[a._v("#")]),a._v(" 导出表和重定位表")]),a._v(" "),s("h3",{attrs:{id:"导出表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出表"}},[a._v("#")]),a._v(" 导出表")]),a._v(" "),s("p",[a._v("在包含导出函数的DLL中，导出信息位于导出表，通过导出表，DLL文件向系统提供导出函数的名称，序号和入口地址。以便完成动态链接。")]),a._v(" "),s("h3",{attrs:{id:"重定位表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定位表"}},[a._v("#")]),a._v(" 重定位表")]),a._v(" "),s("p",[a._v("首先要明白，在X86下，涉及到直接寻址的指令都是要重定位的。")]),a._v(" "),s("h4",{attrs:{id:"重定位算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定位算法"}},[a._v("#")]),a._v(" 重定位算法")]),a._v(" "),s("p",[a._v("将直接寻址的指令中的双字地址减去建议装载地址，获得RVA，再加上模块的实际装入地址，获得VA。由于建议装载地址在PE文件头中，而实际装入地址由装载器决定，所以重定位所需要的只是需要修正的代码的地址。")]),a._v(" "),s("h4",{attrs:{id:"重定位表的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定位表的位置"}},[a._v("#")]),a._v(" 重定位表的位置")]),a._v(" "),s("p",[a._v("一般单独存放在一个可以丢弃的.reloc节中，和资源差不多，不是必须的。重定位表的位置可以由数据目录表IMAGE_DATA_DIRECTORY结构获取。\n获得重定位表位置后，地址指向的就是很多重定位块，每一块描述一个内存页的所有重定位项。每个重定位块分起始RVA和块长度，之后的重定位项低12位表示数据在当前页面中的RVA，高4为表示重定位项种类。\n假设模块装入地址为00400000h处。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("重定位表偏移")]),a._v(" "),s("th",{staticStyle:{"text-align":"right"}},[a._v("数据")]),a._v(" "),s("th",{staticStyle:{"text-align":"center"}},[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("0000h")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("00001000h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("第一个块，页面地址是00401000h")])]),a._v(" "),s("tr",[s("td",[a._v("0004h")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("00000010h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("该重定位块长度10h")])]),a._v(" "),s("tr",[s("td",[a._v("0008h")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("3012h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("重定位位置00401012h")])]),a._v(" "),s("tr",[s("td",[a._v("000ah")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("3040h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("重定位位置00401040h")])]),a._v(" "),s("tr",[s("td",[a._v("000ch")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("306fh")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("重定位位置0040106fh")])]),a._v(" "),s("tr",[s("td",[a._v("000eh")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("0000h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("用于对齐的空白数据")])]),a._v(" "),s("tr",[s("td",[a._v("0010h")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("00002000h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("第一个块，页面地址是00402000h")])]),a._v(" "),s("tr",[s("td",[a._v("0014h")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("0000000ch")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("该重定位块长度0ch")])]),a._v(" "),s("tr",[s("td",[a._v("0018h")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("3080h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("重定位位置00402080h")])]),a._v(" "),s("tr",[s("td",[a._v("001ah")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("30f0h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("重定位位置004020f0h")])]),a._v(" "),s("tr",[s("td",[a._v("001ch")]),a._v(" "),s("td",{staticStyle:{"text-align":"right"}},[a._v("00000000h")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("重定位数据块结束标志")])])])]),a._v(" "),s("p",[a._v("PE解析到这里就不详细讲了，以后若对这方面深入研究再说，具体资料可以查阅 WindowsPE权威指南。")])])}),[],!1,null,null,null);t.default=n.exports}}]);