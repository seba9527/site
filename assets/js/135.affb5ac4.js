(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{907:function(s,a,n){"use strict";n.r(a);var t=n(6),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("vps配置k3s")])]),s._v(" "),n("p",[s._v("首先安装rancher")]),s._v(" "),n("h2",{attrs:{id:"rancher"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rancher"}},[s._v("#")]),s._v(" rancher")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("docker run -d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rancher "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("34839")]),s._v(":80 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26495")]),s._v(":443 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("unless-stopped "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/ubuntu/cert/Apache/1_root_bundle.crt:/etc/rancher/ssl/cacerts.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/ubuntu/cert/Apache/3_www.zjgcjy.top.key:/etc/rancher/ssl/key.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/ubuntu/cert/Apache/2_www.zjgcjy.top.crt:/etc/rancher/ssl/cert.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/ubuntu/docker/rancher/rancher:/var/lib/rancher "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/ubuntu/docker/rancher/auditlog:/var/log/auditlog "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    rancher/rancher\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"安装k3s"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装k3s"}},[s._v("#")]),s._v(" 安装k3s")]),s._v(" "),n("p",[s._v("从国内的cdn安装")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sfL https://docs.rancher.cn/k3s/k3s-install.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_MIRROR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cn "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -\n``\n\n\nkubectl apply -f https://zjgcjy.top:26495/v3/import/mm6s52g4d9gjkqrtqdzcvzz66pnzrqq2x8lnqx6lzj46brphc66lrk.yaml\n\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --insecure -sfL https://zjgcjy.top:26495/v3/import/mm6s52g4d9gjkqrtqdzcvzz66pnzrqq2x8lnqx6lzj46brphc66lrk.yaml "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" kubectl apply -f -\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);