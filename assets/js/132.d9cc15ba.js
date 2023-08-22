(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1114:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("使用 Nginx 时，需要为部分站点添加密码认证，本文介绍如何配置。")])]),s._v(" "),n("h2",{attrs:{id:"nginx-密码认证场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-密码认证场景"}},[s._v("#")]),s._v(" Nginx 密码认证场景")]),s._v(" "),n("ul",[n("li",[s._v("一些非公开的页面，只想给特定的用户访问，但是又不想写权限控制")]),s._v(" "),n("li",[s._v("临时需要请求线上的调试接口，但是这些接口不能直接暴露")])]),s._v(" "),n("h2",{attrs:{id:"nginx-启用密码认证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-启用密码认证"}},[s._v("#")]),s._v(" Nginx 启用密码认证")]),s._v(" "),n("ul",[n("li",[s._v("安装一个生成账号密码的小工具")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install httpd-tools\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("生成一个账号密码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("htpasswd -bc 生成账号密码文件路径 账号名 密码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("htpasswd -bc /tmp/user.db admin 123456\n\n# 示例\nhtpasswd -c /data/github.com/ady/configs.ady.cn/etc/tengine/tengine-passwd x\nNew password:\nRe-type new password:\nAdding password for user x\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("在 nginx 配置启用密码认证")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('location / {\n\n    root   /usr/share/nginx/html;\n    index  index.html index.htm;\n\n    auth_basic "Personal notes, do not consciously bypass";  # 这里是提示信息\n    auth_basic_user_file /var/local/jekyll-docker/user.db;  # 这里填写刚才生成的文件路径\n\n}\n\ntry_files $uri $uri.html $uri/ =404;\nlocation ~ ^/bk/ {\n    auth_basic "Please input password";\n    auth_basic_user_file /data/github.com/ady/configs.ady.cn/etc/tengine/tengine-passwd;\n    root      /data/github.com/ady/docs.ady.cn/public/;\n    index     index.html index.htm;\n    include   /etc/tengine/conf.d/proxy.conf;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("重新加载配置文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nginx -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"如何退出验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何退出验证"}},[s._v("#")]),s._v(" 如何退出验证")]),s._v(" "),n("p",[s._v("登录凭证并不是放在 cookie 而是在 header（字段是 Authorization）。所以重新打开浏览器的时候就需要重新登录了。")])])}),[],!1,null,null,null);n.default=t.exports}}]);