(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{513:function(t,v,_){"use strict";_.r(v);var a=_(11),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("毕业要紧＞﹏＜\n基于侧信道攻击的云系统加解密软件漏洞挖掘")])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"一、选题背景、意义及国内外研究现状："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、选题背景、意义及国内外研究现状："}},[t._v("#")]),t._v(" 一、选题背景、意义及国内外研究现状：")]),t._v(" "),_("p",[t._v("随着互联网技术的发展，云计算的观念已经深入人心，也为我们的生活提供了便捷，已成为当前主流的计算模式，在服务器应用、大数据处理、数据中心领域中得到广泛应用。而云计算的核心思想是通过互联网来提供动态、易拓展的虚拟化资源。使用虚拟化技术能将高性能物理机虚拟成若干并行运行的逻辑计算机，这种方式显著提高了计算机的工作效率，也成就了云计算超强的计算能力。")]),t._v(" "),_("p",[t._v("但虚拟化技术也面临着严重的安全风险，虚拟化的复杂性导致曾经看似简单的安全问题变得复杂，安全问题难以处理，除此以外，包括虚拟机信息窃取和篡改、虚拟机逃逸、Rootkit攻击、侧信道攻击等新安全威胁，也是虚拟化技术所要面临的问题。而侧信道攻击作为一种非常规的攻击方式，因为能简单有效的绕过正面的防御，在近些年得到了国内外安全研究人员的广泛关注。由于虚拟化的作用，逻辑并行的虚拟机之间将在物理层多核之间存在cache数据共享，但cache命中率和失效所对应的响应时间有差别，攻击者可以通过访问时间的差异，推测cache中的信息，从而获得隐私数据，可以进一步做其他攻击。")]),t._v(" "),_("p",[t._v("近几年通过测信道来进行漏洞挖掘的也越来越多，通过电磁分析、能耗分析、时间分析等方式，来获取程序或系统运行期间的关键信息，就能突破安全防护机制的保护。2016年，就有人使用SPA(简单功耗分析攻击)攻击了一个智能保险箱。侧信道攻击对于这种运算单一、时钟频率低的设备中的加密攻击是很有效的。2018年1月，Project Zero安全团队披露出Intel等处理器芯片存在非常严重的安全漏洞，利用了芯片硬件层面执行加速机制的实现缺陷实现侧信道攻击，可以间接通过CPU缓存读取系统内存数据。这就是著名的Meltdown（熔断）与Spectre（幽灵）CPU漏洞。CVE编号为CVE-2017-5754、 CVE-2017-5753和 CVE-2017-5715等。该漏洞的原理就是利用了测信道攻击，对指令执行期间的分支预测机制进行定时攻击。")]),t._v(" "),_("h2",{attrs:{id:"二、主要内容、研究方法及拟要解决的问题："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、主要内容、研究方法及拟要解决的问题："}},[t._v("#")]),t._v(" 二、主要内容、研究方法及拟要解决的问题：")]),t._v(" "),_("p",[t._v("本课题将系统地研究云计算系统中测信道攻击，分析云计算条件下常见的测信道攻击方式，研究云系统中内存、CPU缓存的组成和架构，并对其建模，分析云环境下的安全问题，同时进行漏洞挖掘的相关工作，设计针对密码算法的程序分析和漏洞挖掘框架，改进基于侧信道的漏洞挖掘工具。")]),t._v(" "),_("p",[t._v("本课题准备采用的研究方法主要是查阅文献和阅读文档，由于硬件设备条件的限制，本课题主要将从理论角度分析、发现、解决遇到的困难。同时基于先前的研究成果，改进漏洞挖掘分析工具。")]),t._v(" "),_("p",[t._v("本课题需要解决的问题主要是分析侧信道攻击的成因以及漏洞挖掘的思路，这需要根据前期掌握的知识进行创新和突破。针对该问题，我准备阅读大量文献并尝试提出自己的想法并应用。")]),t._v(" "),_("h2",{attrs:{id:"三、进度安排："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、进度安排："}},[t._v("#")]),t._v(" 三、进度安排：")]),t._v(" "),_("p",[t._v("2019.1.4-2019.2.15查阅相关文献，掌握云系统的组成、架构等相关资料，同时了解常见的测信道攻击方式。")]),t._v(" "),_("p",[t._v("2019.2.16-2019.3.15对cache结构进行分析讨论，归纳总结其在加解密算法中的应用，寻找具有其特征的漏洞成因和相应的挖掘方式。")]),t._v(" "),_("p",[t._v("2019.3.16-2019.4.15 根据相关资料，学习符号执行或其他程序分析和漏洞挖掘方法。")]),t._v(" "),_("p",[t._v("2019.4.16-2019.5.15根据实验思路编程测试，对常见密码算法进行检测并总结其正确性。")]),t._v(" "),_("p",[t._v("2019.5.16-2019.5.30撰写毕业论文。")]),t._v(" "),_("h2",{attrs:{id:"四、参考文献："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、参考文献："}},[t._v("#")]),t._v(" 四、参考文献：")]),t._v(" "),_("p",[t._v("[1]  梁鑫,桂小林,戴慧珺,张晨.云环境中跨虚拟机的Cache侧信道攻击技术研究.计算机学报,2017.40(2):317-336")]),t._v(" "),_("p",[t._v("[2]  孔云生,基于cache的边信道攻击可行性分析符号执行系统的设计与实现[工程硕士学位论文].哈尔滨:哈尔滨工业大学,2015")]),t._v(" "),_("p",[t._v("[3]  王丽娜,章鑫余,荣威,徐来,徐一波,曾强.云环境下基于内存总线的侧信道攻击检测方法.武汉大学学报,2016.62(5):418-424")])])}),[],!1,null,null,null);v.default=e.exports}}]);