(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{883:function(t,e,a){"use strict";a.r(e);var s=a(6),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"安装-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-x"}},[t._v("#")]),t._v(" 安装 x")]),t._v(" "),a("p",[t._v("sudo apt install xinit --no-install-recommends")]),t._v(" "),a("p",[t._v("scp.exe  .\\st.zip  zjgcjy@192.168.123.92:/home/zjgcjy\nscp.exe  .\\dwm.zip  zjgcjy@192.168.123.92:/home/zjgcjy")]),t._v(" "),a("h2",{attrs:{id:"安装dwm和st"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装dwm和st"}},[t._v("#")]),t._v(" 安装dwm和st")]),t._v(" "),a("p",[t._v("unzip dwm -d ./dwm\nunzi st -d ./st\nsudo apt install libx11-dev libxinerama-dev libxft-dev")]),t._v(" "),a("p",[t._v("~/.xinitrc\n/etc/X11/xinit/xinitrc")]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("X11INC = /usr/include/X11\nX11LIB = /usr/include/X11")]),t._v(" "),a("p",[t._v("sudo make clean install")]),t._v(" "),a("p",[t._v("rm config.def.h")]),t._v(" "),a("p",[t._v("sudo apt install x11-xserver-utils")]),t._v(" "),a("h3",{attrs:{id:"修改分辨率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改分辨率"}},[t._v("#")]),t._v(" 修改分辨率")]),t._v(" "),a("p",[t._v("xrandr --output Virtual1 --mode 1600x1200 --rate 60")]),t._v(" "),a("p",[t._v("cvt 1024 768")]),t._v(" "),a("p",[t._v('xrandr --newmode "1024x768_60.00"   63.50  1024 1072 1176 1328  768 771 775 798 -hsync +vsync\nxrandr --addmode Virtual1 "1024x768_60.00"\nxrandr --output Virtual1 --mode "1024x768_60.00"')]),t._v(" "),a("p",[t._v("sudo vim /etc/X11/xorg.conf")]),t._v(" "),a("p",[t._v("发现其实不用修改，可能是安装了open-vm-tools的缘故。")]),t._v(" "),a("h3",{attrs:{id:"高dpi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高dpi"}},[t._v("#")]),t._v(" 高dpi")]),t._v(" "),a("p",[t._v("vim ~/.Xresources\nXdp.dpi: 200\nxrdb -merge ~/.Xresources")]),t._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("xsetroot -solid blue")]),t._v(" "),a("h4",{attrs:{id:"图片背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片背景"}},[t._v("#")]),t._v(" 图片背景")]),t._v(" "),a("p",[t._v("feh --bg-scale   ~/images/bg.jpg")]),t._v(" "),a("h3",{attrs:{id:"字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),a("p",[t._v("sudo apt install fontconfig")]),t._v(" "),a("p",[t._v("sudo cp ./Hack /usr/share/fonts/truetype/Hack\nsudo fc-cache -f -v\nsudo fc-list|grep Hack")]),t._v(" "),a("h2",{attrs:{id:"键位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键位"}},[t._v("#")]),t._v(" 键位")]),t._v(" "),a("p",[t._v("xmodmap")]),t._v(" "),a("h2",{attrs:{id:"透明度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透明度"}},[t._v("#")]),t._v(" 透明度")]),t._v(" "),a("p",[t._v("参见st的alpha补丁，需要compton或者xcompmgr支持，也可以用picom")]),t._v(" "),a("p",[t._v("libxext-dev libxcb1-dev libxcb-damage0-dev libxcb-xfixes0-dev libxcb-shape0-dev libxcb-render-util0-dev libxcb-render0-dev libxcb-randr0-dev libxcb-composite0-dev libxcb-image0-dev libxcb-present-dev libxcb-xinerama0-dev libxcb-glx0-dev libpixman-1-dev libdbus-1-dev libconfig-dev libgl1-mesa-dev  libpcre2-dev  libevdev-dev uthash-dev libev-dev libx11-xcb-dev")]),t._v(" "),a("p",[t._v("libxcomposite\nlibxdamage")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[t._v("https://dev.to/l04db4l4nc3r/dwm-the-suckless-window-manager-1ji")]),t._v(" "),a("p",[t._v("https://doc.ubuntu-fr.org/feh\nhttps://revadig.blogspot.com/2017/09/x11-xorg-set-screen-background-or.html\nhttp://ocdman.github.io/2017/11/16/xwindow%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%88%86%E8%BE%A8%E7%8E%87/")])])}),[],!1,null,null,null);e.default=r.exports}}]);