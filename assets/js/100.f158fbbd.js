(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{923:function(n,t,s){"use strict";s.r(t);var a=s(4),i=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-基础"}},[n._v("#")]),n._v(" nginx 基础")]),n._v(" "),t("p",[n._v("Nginx 是⼀个⾼性能的 HTTP 和反向代理 web 服务器，核⼼特点是占有内存少，并发能⼒强")]),n._v(" "),t("h2",{attrs:{id:"nginx-又能做什么事情-应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-又能做什么事情-应用场景"}},[n._v("#")]),n._v(" Nginx ⼜能做什么事情（应⽤场景）")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("Http 服务器（Web 服务器）")]),n._v(" "),t("p",[n._v("性能⾮常⾼，⾮常注重效率，能够经受⾼负载的考验。")]),n._v(" "),t("p",[n._v("⽀持 50000 个并发连接数，不仅如此，CPU 和内存的占⽤也⾮常的低，10000 个没有活动的连接才占⽤ 2.5M 的内存")])]),n._v(" "),t("li",[t("p",[n._v("反向代理服务器")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("正向代理")]),n._v(" "),t("p",[n._v("在浏览器中配置代理服务器的相关信息，通过代理服务器访问⽬标网站，代理服务器收到⽬标网站的响应之后，会把响应信息返回给我们⾃⼰的浏览器客户端")]),n._v(" "),t("p",[t("img",{attrs:{src:"http://md7.admin4j.com/blog/image-20230329112825491.png",alt:"正向代理"}})])]),n._v(" "),t("li",[t("p",[n._v("反向代理")]),n._v(" "),t("p",[n._v("浏览器客户端发送请求到反向代理服务器（⽐如 Nginx），由反向代理服务器选择原始服务器提供服务获取结果响应，最终再返回给客户端浏览器")]),n._v(" "),t("p",[t("img",{attrs:{src:"http://md7.admin4j.com/blog/image-20230329112939819.png",alt:"反向代理"}})])]),n._v(" "),t("li",[t("p",[n._v("负载均衡服务器")]),n._v(" "),t("p",[n._v("负载均衡，当⼀个请求到来的时候（结合上图），Nginx 反向代理服务器根据请求去找到⼀个 原始服务器来处理当前请求，那么这叫做反向代理。那么，如果⽬标服务器有多台（⽐如上 图中的 tomcat1，tomcat2，tomcat3...），找哪⼀个⽬标服务器来处理当前请求呢，这样⼀ 个寻找确定的过程就叫做负载均衡。")]),n._v(" "),t("p",[n._v("⽣活中也有很多这样的例⼦，⽐如，我们去银⾏，可以处理业务的窗⼝有多个，那么我们会 被分配到哪个窗⼝呢到底，这样的⼀个过程就叫做负载均衡。")]),n._v(" "),t("blockquote",[t("p",[n._v("负载均衡就是为了解决⾼负载的问题")])])]),n._v(" "),t("li",[t("p",[n._v("动静分离")])])])])]),n._v(" "),t("h2",{attrs:{id:"nginx-的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的特点"}},[n._v("#")]),n._v(" Nginx 的特点")]),n._v(" "),t("ul",[t("li",[n._v("跨平台：Nginx 可以在⼤多数类 unix 操作系统上编译运⾏，⽽且也有 windows 版本")]),n._v(" "),t("li",[n._v("Nginx 的上⼿⾮常容易，配置也⽐较简单⾼并发，性能好")]),n._v(" "),t("li",[n._v("稳定性也特别好，宕机概率很低")])]),n._v(" "),t("h2",{attrs:{id:"nginx-的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的安装"}},[n._v("#")]),n._v(" Nginx 的安装")]),n._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/agonie201218/article/details/120860247",target:"_blank",rel:"noopener noreferrer"}},[n._v("Centos nginx 安装 源码方式安装"),t("OutboundLink")],1)])]),n._v(" "),t("li",[t("p",[n._v("包管理器")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("# CentOS/Redhat\nyum install nginx -y\n\n# Ubuntu\napt install nginx -y\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br")])])])]),n._v(" "),t("h2",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[n._v("#")]),n._v(" 命令")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("systemctl start nginx\nsystemctl restart nginx\nsystemctl stop nginx\nsystemctl reload nginx\nnginx -s reload\nnginx stop\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br")])])])}),[],!1,null,null,null);t.default=i.exports}}]);