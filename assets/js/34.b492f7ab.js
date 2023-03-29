(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{359:function(t,a,s){"use strict";s.r(a);var n=s(4),l=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"location-匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-匹配规则"}},[t._v("#")]),t._v(" location 匹配规则：")]),t._v(" "),a("p",[t._v("location 路径正则匹配：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("符号")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("~")])]),t._v(" "),a("td",[t._v("正则匹配，区分大小写")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("~*")])]),t._v(" "),a("td",[t._v("正则匹配，不区分大小写")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("^~")])]),t._v(" "),a("td",[t._v("普通字符匹配，如果该选项匹配，则，只匹配该选项，不再向下匹配其他选项")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("=")])]),t._v(" "),a("td",[t._v("普通字符匹配，精确匹配")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("@")])]),t._v(" "),a("td",[t._v("定义一个命名的 location，用于内部定向，例如 error_page，try_files")])])])]),t._v(" "),a("h2",{attrs:{id:"location-匹配优先级顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-匹配优先级顺序"}},[t._v("#")]),t._v(" location 匹配优先级顺序")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1."),a("strong",[t._v("精确匹配")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t*   `=` 前缀指令匹配，如果匹配成功，则停止其他匹配\n")])])])]),t._v(" "),a("li",[a("p",[t._v("2."),a("strong",[t._v("普通字符匹配")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t* 普通字符串指令匹配，顺序是从长到短，匹配成功的location如果使用^~，则停止其他匹配（正则匹配）\n")])])])]),t._v(" "),a("li",[a("p",[t._v("3."),a("strong",[t._v("正则匹配")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t* 正则表达式指令匹配，按照配置文件里的顺序，成功就停止其他匹配\n")])])])]),t._v(" "),a("li",[a("p",[t._v("4."),a("strong",[t._v("默认匹配")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t* 如果第三步中有匹配成功，则使用该结果，否则使用第二步结果\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),a("blockquote",[a("p",[t._v("匹配的顺序是先匹配普通字符串，然后再匹配正则表达式。另外普通字符串匹配顺序是根据配置中字符长度从长到短，也就是说使用普通字符串配置的 location 顺序是无关紧要的，反正最后 nginx 会根据配置的长短来进行匹配，但是需要注意的是"),a("strong",[t._v("正则表达式按照配置文件里的顺序测试")]),t._v("。找到第一个匹配的正则表达式将停止搜索。")])]),t._v(" "),a("p",[t._v("一般情况下，匹配成功了普通字符串 location 后还会进行正则表达式 location 匹配。有两种方法改变这种行为，其一就是使用"),a("code",[t._v("=")]),t._v("前缀，这时执行的是严格匹配，并且匹配成功后立即停止其他匹配，同时处理这个请求；另外一种就是使用"),a("code",[t._v("^~")]),t._v("前缀，如果把这个前缀用于一个常规字符串那么告诉 nginx 如果路径匹配那么不测试正则表达式。")]),t._v(" "),a("ul",[a("li",[t._v("匹配模式及顺序")])]),t._v(" "),a("blockquote",[a("p",[t._v("location = /uri 　　　=开头表示精确匹配，只有完全匹配上才能生效。\nlocation ^~ /uri 　　^~ 开头对 URL 路径进行前缀匹配，并且在正则之前。\nlocation ~ pattern 　~开头表示区分大小写的正则匹配。\nlocation ~* pattern 　~*开头表示不区分大小写的正则匹配。\nlocation /uri 　　　　不带任何修饰符，也表示前缀匹配，但是在正则匹配之后。\nlocation / 　　　　　通用匹配，任何未匹配到其它 location 的请求都会匹配到，相当于 switch 中的 default。")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"实验案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验案例"}},[t._v("#")]),t._v(" 实验案例")]),t._v(" "),a("ul",[a("li",[t._v('测试"^~" 和 "~"，nginx 配置如下。浏览器输入 http://localhost/helloworld/test，返回 601。如将#1 注释，#2 打开，浏览器输入 http://localhost/helloworld/test，返回 603。注：#1 和#2 不能同时打开，如同时打开，启动 nginx 会报 nginx: [emerg] duplicate location "/helloworld"...，因为这两个都是普通字符串。')])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("location ^~ /helloworld { #1\n\treturn 601;\n}\n#location /helloworld { #2\n# \treturn 602;\n#}\n location ~ /helloworld {\n \t\treturn 603;\n  }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ul",[a("li",[t._v("测试普通字符串的长短（普通字符串的匹配与顺序无关，与长短有关）。浏览器输入 http://localhost/helloworld/test/a.html，返回 601。浏览器输入 http://localhost/helloworld/a.html，返回 602。")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("location /helloworld/test/ {        #1\n    return 601;\n}\n\nlocation /helloworld/ {                #2\n    return 602;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ul",[a("li",[t._v("测试正则表达式的顺序（正则匹配与顺序相关）。浏览器输入 http://localhost/helloworld/test/a.html，返回 602；将#2 和#3 调换顺序，浏览器输入 http://localhost/helloworld/test/a.html，返回 603")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("location /helloworld/test/ { #1\nreturn 601;\n}\n\nlocation ~ /helloworld { #2\nreturn 602;\n}\n\nlocation ~ /helloworld/test { #3\nreturn 603;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"扩展练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展练习"}},[t._v("#")]),t._v(" 扩展练习")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/112541041",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx 中 server_name 参数详解"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=l.exports}}]);