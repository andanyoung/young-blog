(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1028:function(t,e,a){"use strict";a.r(e);var n=a(4),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"http://md7.admin4j.com/blog/20210222171712367.png",alt:"tomcat 参数调优"}})]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("TIPS")])]),t._v(" "),e("p",[t._v("本文基于 Tomcat 9.0 编写，理论兼容 Tomcat 8.x 及更高版本。")])]),t._v(" "),e("p",[t._v("本文来探讨 Tomcat 的调优。")]),t._v(" "),e("p",[t._v("系统性能的衡量指标，主要是响应时间和吞吐量。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1. **响应时间**：执行某个操作的耗时；\n2. **吞吐量**：系统在给定时间内能够⽀持的事务数量，单位为TPS（Transactions PerSecond的缩写，也就是事务数/秒，⼀个事务是指⼀个客户机向服务器发送请求然后服务器做出反应的过程。\n")])])]),e("p",[t._v("Tomcat 优化从两个方⾯进行")]),t._v(" "),e("ol",[e("li",[t._v("Tomcat ⾃身配置的优化（⽐如是否使⽤了共享线程池？IO 模型？）")]),t._v(" "),e("li",[t._v("JVM 虚拟机优化（优化内存模型）")])]),t._v(" "),e("h2",{attrs:{id:"_1-tomcat-调优参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-tomcat-调优参数"}},[t._v("#")]),t._v(" 1. Tomcat 调优参数")]),t._v(" "),e("h2",{attrs:{id:"_1-1-主要调优参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-主要调优参数"}},[t._v("#")]),t._v(" 1.1 主要调优参数")]),t._v(" "),e("p",[t._v("在做 Tomcat 的调优时，最重要是就是 Connector（连接器）的调优了（少数情况下，也可能会配置 Executor）")]),t._v(" "),e("p",[t._v("下面贴出一段 server.xml 中的配置：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<Executor name="tomcatThreadPool"\n  namePrefix="catalina-exec-"\n  maxThreads="150"\n  minSpareThreads="4"/>\n\n<Connector port="8080"\n  protocol="HTTP/1.1"\n  connectionTimeout="20000"\n  redirectPort="8443"\n  executor="tomcatThreadPool"/>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("blockquote",[e("p",[t._v("一个文件中可以有多个 Connector 以及多个 Executor。")])]),t._v(" "),e("p",[t._v("其中：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Connector：负责接收客户端的请求以及向客户端回送响应的消息")])]),t._v(" "),e("li",[e("p",[t._v("Executor：指定线程池，从而在多个 Connector(主要)及其他组件之间共享")])])]),t._v(" "),e("h3",{attrs:{id:"_1-2-connector-常用属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-connector-常用属性"}},[t._v("#")]),t._v(" 1.2 Connector 常用属性")]),t._v(" "),e("p",[t._v("Connector 负责接收客户端的请求以及向客户端回送响应的消息。Tomcat 9.0 有三类 Connector：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("HTTP/1.1（HTTP Connector）")])]),t._v(" "),e("li",[e("p",[t._v("HTTP/2（HTTP2 Upgrade Protocol）（Tomcat 8.5 引入）")])]),t._v(" "),e("li",[e("p",[t._v("AJP（AJP Connector）")])])]),t._v(" "),e("p",[t._v("但不管哪种 Connector，工作过程都是类似的：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("每个请求都需要 1 个线程去处理")])]),t._v(" "),e("li",[e("p",[t._v("如果接收到的并发请求 > 当前处理请求的线程所能处理的数量，则创建其他线程去处理，直到达到 maxThreads 为止")])]),t._v(" "),e("li",[e("p",[t._v("如果线程数达到 maxThreads 设置的值后，依然接收到更多的请求，那么请求将会堆积在 Connector 创建的 server socket 中（即 accept 队列），直到达到 acceptCount 的值为止。如果堆积的请求数目达到 acceptCount 后，依然受到更多的请求，那么直接返回 connection refused")])])]),t._v(" "),e("p",[t._v("常用属性如下：")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("TIPS")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("加粗的表示 Tomcat 调优常用的参数")])]),t._v(" "),e("li",[e("p",[t._v("这里只列出了 Connector 常用属性，要想阅读完整属性，可使用如下方式：")])]),t._v(" "),e("li",[e("p",[t._v("方式一、访问 http://tomcat.apache.org/tomcat-9.0-doc/config/http.html[2] ，将 9.0 修改为你的 Tomcat 版本即可，比如想看 Tomcat 8 的文档，可将 9.0 改为 8.0；")])]),t._v(" "),e("li",[e("p",[t._v("方式二、下载 Tomcat 并启动，访问 "),e("code",[t._v("/docs/config/http.html")]),t._v(" 路径即可。例如："),e("code",[t._v("http://localhost:8080/docs/config/http.html")])])])])]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("minSpareThreads")]),t._v("：始终保持运行状态的线程数，默认值 10。即便超过了最大空闲时间（maxIdleTime），也不会被回收。如果配置了 Executor，将忽略此属性")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("maxThreads")]),t._v("：Connector 创建来处理请求的最大线程数，此参数决定了可以同时处理的请求的最大数量，默认 200。如果配置了 Executor，将忽略此属性。超过则放入请求队列中进行排队。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("maxConnections")]),t._v("：Tomcat 在任意时间接收和处理的最大连接数。当连接数达到 maxConnections 时，仍可基于 acceptCount 的配置接受连接，但并不会处理，直到 Tomcat 接收的连接数小于 maxConnections。")])])]),t._v(" "),e("blockquote",[e("p",[t._v("默认值与 Connector 使用的协议有关：")]),t._v(" "),e("ul",[e("li",[t._v("NIO 的默认值是 10000")]),t._v(" "),e("li",[t._v("APR 的默认值是 8192")]),t._v(" "),e("li",[t._v("BIO 的默认值为 maxThreads（如果配置了 Executor，则默认值是 Executor 的 maxThreads）")]),t._v(" "),e("li",[t._v("在 Windows 下，APR/native 的 maxConnections 值会自动调整为设置值以下最大的 1024 的整数倍；如设置为 2000，则最大值实际是 1024。如果设置为-1，则连接数不受限制。")])])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[e("strong",[t._v("connectionTimeout")]),t._v("：网络连接超时时间，单位毫秒，默认 60000。设为 0 表示永不超时，一般不建议。除非将 disableUploadTimeout 设置为 false，否则读取 request body 时也会使用该超时。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("acceptCount")]),t._v("：当最大线程数（maxThreads）被使用完时，可以放入请求队列的队列长度，默认 100。一旦队列满了，就会返回 connection refused。因此，如果设置过大，后面进入的请求等待时间会很长；如果设置过小，后面进入的请求立马返回 connection refused。一般可设置成和 maxThreads 相同，但具体还需根据自己的应用实际访问峰值和平均值来权衡。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("enableLookups")]),t._v("：是否启用 DNS 查找功能。如果设为 true，会用 request.getRemoteHost()执行 DNS lookup，从而返回远程客户端的主机名。设为 false 则跳过 DNS lookup,并以字符串形式返回 IP 地址，从而提高性能，默认 false，生产环境建议保持关闭。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("compression")]),t._v("：是否开启 GZIP 压缩。取值 off（禁用）、on（打开，压缩文本数据），force（强制压缩所有格式）、数字（表示数据量达到该值就 GZIP 传输）。")])]),t._v(" "),e("li",[e("p",[t._v("port：指定 Tomcat 监听的端口")])]),t._v(" "),e("li",[e("p",[t._v("protocol：为 Connector 设置使用什么协议处理入口流量，默认值 "),e("code",[t._v("HTTP/1.1")]),t._v(" ，使用此值的话，对于 Tomcat 8 及更高版本，会自动根据当前情况，使用基于 NIOConnector 或基于 APR 的 Connector；对 Tomcat 7 及更低版本会自动根据情况使用基于 BIO 的 Connector 或基于 APR 的 Connector。如果不想自动切换，也可人工指定协议（从 Tomcat 8 开始，一般无需人工设置）：")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('/ BIO，这种模式下，使用传统的I/O操作(即java.io包及其子包)，性能较差。\nprotocol="org.apache.coyote.http11.Http11Protocol"\n\n// NIO，使用NIO操作(即java.nio包及其子包)，比传统I/O拥有更好的并发性能\nprotocol="org.apache.coyote.http11.Http11NioProtocol"\n\n// NIO2，使用NIO2操作(NIO2是JDK 7引入的特性)，Tomcat 8引入\nprotocol="org.apache.coyote.http11.Http11Nio2Protocol"\n\n// APR，使用APR操作。APR即Apache Portable Runtime，这是一个Apache HTTP服务器的支持库。你可以认为：此模式下，Tomcat将以JNI的形式调用 Apache HTTP服务器的核心动态链接库来处理文件读取或网络传输操作，从而提高Tomcat对静态文件的处理性能\nprotocol="org.apache.coyote.http11.Http11AprProtocol"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("下表展示了不同 Connector 之间的区别：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("-")]),t._v(" "),e("th",[t._v("Java Nio Connector NIO")]),t._v(" "),e("th",[t._v("Java Nio2 Connector NIO2")]),t._v(" "),e("th",[t._v("APR/native Connector APR")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Classname")]),t._v(" "),e("td",[e("code",[t._v("Http11NioProtocol")])]),t._v(" "),e("td",[e("code",[t._v("Http11Nio2Protocol")])]),t._v(" "),e("td",[e("code",[t._v("Http11AprProtocol")])])]),t._v(" "),e("tr",[e("td",[t._v("Tomcat Version")]),t._v(" "),e("td",[t._v("since 6.0.x")]),t._v(" "),e("td",[t._v("since 8.0.x")]),t._v(" "),e("td",[t._v("since 5.5.x")])]),t._v(" "),e("tr",[e("td",[t._v("Support Polling")]),t._v(" "),e("td",[t._v("YES")]),t._v(" "),e("td",[t._v("YES")]),t._v(" "),e("td",[t._v("YES")])]),t._v(" "),e("tr",[e("td",[t._v("Polling Size")]),t._v(" "),e("td",[e("code",[t._v("maxConnections")])]),t._v(" "),e("td",[e("code",[t._v("maxConnections")])]),t._v(" "),e("td",[e("code",[t._v("maxConnections")])])]),t._v(" "),e("tr",[e("td",[t._v("Read Request Headers")]),t._v(" "),e("td",[t._v("Non Blocking")]),t._v(" "),e("td",[t._v("Non Blocking")]),t._v(" "),e("td",[t._v("Non Blocking")])]),t._v(" "),e("tr",[e("td",[t._v("Read Request Body")]),t._v(" "),e("td",[t._v("Blocking")]),t._v(" "),e("td",[t._v("Blocking")]),t._v(" "),e("td",[t._v("Blocking")])]),t._v(" "),e("tr",[e("td",[t._v("Write Response Headers and Body")]),t._v(" "),e("td",[t._v("Blocking")]),t._v(" "),e("td",[t._v("Blocking")]),t._v(" "),e("td",[t._v("Blocking")])]),t._v(" "),e("tr",[e("td",[t._v("Wait for next Request")]),t._v(" "),e("td",[t._v("Non Blocking")]),t._v(" "),e("td",[t._v("Non Blocking")]),t._v(" "),e("td",[t._v("Non Blocking")])]),t._v(" "),e("tr",[e("td",[t._v("SSL Support")]),t._v(" "),e("td",[t._v("Java SSL or OpenSSL")]),t._v(" "),e("td",[t._v("Java SSL or OpenSSL")]),t._v(" "),e("td",[t._v("OpenSSL")])]),t._v(" "),e("tr",[e("td",[t._v("SSL Handshake")]),t._v(" "),e("td",[t._v("Non blocking")]),t._v(" "),e("td",[t._v("Non blocking")]),t._v(" "),e("td",[t._v("Blocking")])]),t._v(" "),e("tr",[e("td",[t._v("Max Connections")]),t._v(" "),e("td",[e("code",[t._v("maxConnections")])]),t._v(" "),e("td",[e("code",[t._v("maxConnections")])]),t._v(" "),e("td",[e("code",[t._v("maxConnections")])])])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("TIPS")])]),t._v(" "),e("p",[t._v("表格来自 http://tomcat.apache.org/tomcat-9.0-doc/config/http.html#Connector_Comparison[3]")])]),t._v(" "),e("ol",{attrs:{start:"10"}},[e("li",[e("p",[t._v("connectionUploadTimeout：指定上传时的超时。disableUploadTimeout 需设置成 false 才有效")])]),t._v(" "),e("li",[e("p",[t._v("disableUploadTimeout：设置为 true，上传超时使用 connectionTimeout，设置成 false，上传超时使用 connectionUploadTimeout。默认 true")])]),t._v(" "),e("li",[e("p",[t._v("redirectPort：表示安全通信（https）转发端口")])]),t._v(" "),e("li",[e("p",[t._v("executor：指定 executor 名称。如果设置了此属性，则 Connector 将使用该 Executor 执行程序。如果不设置 executor 属性，则 Connector 将使用内部私有的 Executor 来提供线程池。该属性主要用来实现在多个 Connector 及其他组件之间共享线程池。")])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("TIPS")])]),t._v(" "),e("p",[t._v("压缩带来的好处是减少带宽，但缺点在于增加了服务器的 CPU 开销。就笔者个人的经验，很少直接用 Tomcat 的 GZIP 功能，更多使用 NGINX 的 GZIP。")])]),t._v(" "),e("h3",{attrs:{id:"_1-3-maxconnections、maxthreads、acceptcount-之间的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-maxconnections、maxthreads、acceptcount-之间的关系"}},[t._v("#")]),t._v(" 1.3 maxConnections、maxThreads、acceptCount 之间的关系")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("minSpareThreads, maxThreads 只跟线程数量有关。acceptCount TCP 最大链接数, maxConnections 相当于线程池阻塞队列的大小+maxThreads")])])]),t._v(" "),e("p",[t._v("我们把 Tomcat 想象成是一个餐厅，请求就像是去就餐的顾客。这个餐厅非常火爆，当处理不过来的时候，就会排号。")]),t._v(" "),e("h4",{attrs:{id:"acceptcount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acceptcount"}},[t._v("#")]),t._v(" "),e("strong",[t._v("acceptCount")]),t._v("：")]),t._v(" "),e("p",[t._v("可以类比为餐厅的排号处能够容纳排号的最大数量，排号的数量不是无限制的，一旦达到上限，就说已经客满（直接返回 connection refused）")]),t._v(" "),e("h4",{attrs:{id:"maxconnections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxconnections"}},[t._v("#")]),t._v(" "),e("strong",[t._v("maxConnections")]),t._v("：")]),t._v(" "),e("p",[t._v("可以类比为餐厅的大堂的餐桌数量，也就是可以就餐的桌数。")]),t._v(" "),e("ul",[e("li",[t._v("如果当前连接数尚未达到 maxConnection，说明还有空闲的餐桌，直接上桌即可。")]),t._v(" "),e("li",[t._v("如果所有餐桌都已经坐满，但是排号人数尚未达到 acceptCount，那么就排个号，等着叫号（此时，尽管还能接受请求，但是不会处理你的请求，除非有桌子空闲了）")]),t._v(" "),e("li",[t._v("如果取号的人数已经达到 acceptCount，则取号失败，直接拒绝服务（直接返回 connection refused）")])]),t._v(" "),e("h4",{attrs:{id:"maxthreads"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxthreads"}},[t._v("#")]),t._v(" "),e("strong",[t._v("maxThreads")]),t._v("：")]),t._v(" "),e("p",[t._v("可以类比为厨师的个数。厨师一开始只有 10 个（最少 minSpareThreads 个），如果发现忙不过来的时候，就会增加几个厨师，一致增加到 maxThreads 个厨师。如果还是不够，那就只能慢慢等着上菜了。这就像是你去吃饭，有时候上一道菜都吃完了，下一道菜还没有上。只不过，在计算机的世界，厨师的数量也不能无止境地增加下去。因为线程数目只要超过 CPU 核心数，就会存在 CPU 切换的开销，线程数越多，切换开销越大，所以说 maxThreads 设置也不能太大。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("maxConnections")]),t._v(" "),e("td",[t._v("最大连接数，当到达该值后，服务器接收但不会处理更多的请求， 额外的请 求将会阻塞直到连接数低于 maxConnections 。可通过 ulimit -a 查看服务器限制。对于 CPU 要求更⾼(计算密集型)时，建议不要配置过大 ; 对于 CPU 要求不是特别⾼时，建议配置在"),e("strong",[t._v("2000")]),t._v("左右(受服务器性能影响)。 当然这个需要服务器硬件的⽀持")])]),t._v(" "),e("tr",[e("td",[t._v("maxThreads")]),t._v(" "),e("td",[t._v("最大线程数,需要根据服务器的硬件情况，进行⼀个合理的设置")])]),t._v(" "),e("tr",[e("td",[t._v("acceptCount")]),t._v(" "),e("td",[t._v("最大排队等待数,当服务器接收的请求数量到达 maxConnections ，此时 Tomcat 会将后⾯的请求，存放在任务队列中进行排序， acceptCount 指的就是任务队列中排队等待的请求数 。 ⼀台 Tomcat 的最大的请求处理数量， 是 maxConnections+acceptCount")])])])]),t._v(" "),e("h3",{attrs:{id:"_1-4-executor-常用属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-executor-常用属性"}},[t._v("#")]),t._v(" 1.4 Executor 常用属性")]),t._v(" "),e("p",[t._v("定义线程池，从而在多个 Connector(主要)及其他组件之间共享。Executor 必须实现 org.apache.catalina.Executor 接口。")]),t._v(" "),e("p",[t._v("常用属性如下：")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("TIPS")])]),t._v(" "),e("p",[t._v("这里只列出了 Connector 常用属性，，要想阅读完整属性，可使用如下方式：")]),t._v(" "),e("p",[t._v("•方式一、访问 http://tomcat.apache.org/tomcat-9.0-doc/config/executor.html[4] ，将 9.0 修改为你的 Tomcat 版本即可，比如想看 Tomcat 8 的文档，可将 9.0 改为 8.0•方式二、下载 Tomcat 并启动，访问 "),e("code",[t._v("/docs/config/executor.html")]),t._v(" 路径即可。例如："),e("code",[t._v("http://localhost:8080/docs/config/executor.html")])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("className：Executor 的实现类。必须实现 org.apache.catalina.Executor 接口。默认值为 org.apache.catalina.core.StandardThreadExecutor")])]),t._v(" "),e("li",[e("p",[t._v("name：Executor 名称，必填且必须唯一")])]),t._v(" "),e("li",[e("p",[t._v("threadPriority：指定线程的优先级，默认 5（Thread.NORM_PRIORITY）")])]),t._v(" "),e("li",[e("p",[t._v("daemon：是否为守护线程，默认 true")])]),t._v(" "),e("li",[e("p",[t._v("namePrefix：指定 Executor 创建的线程的名称前缀。线程名称格式为 namePrefix+threadNumber")])]),t._v(" "),e("li",[e("p",[t._v("maxThreads：活动线程的最大数量，默认 200")])]),t._v(" "),e("li",[e("p",[t._v("minSpareThreads：使用保持活动状态的最小线程数（空闲和活动），默认 25")])]),t._v(" "),e("li",[e("p",[t._v("maxIdleTime：线程最大空闲时间，单位毫秒，默认 60000（1 分钟）。达到该时间后就会把该线程关闭（当然如果当前活动线程数 < minSpareThreads 不会关闭）")])]),t._v(" "),e("li",[e("p",[t._v("maxQueueSize：拒绝执行之前可以排队等待执行的任务数量，默认 Integer.MAX_VALUE")])]),t._v(" "),e("li",[e("p",[t._v("prestartminSpareThreads：在启动 Executor 时是否就启动 minSpareThreads 个线程，默认 false")])]),t._v(" "),e("li",[e("p",[t._v("threadRenewalDelay：如果配置了 ThreadLocalLeakPreventionListener，它将会通知 Executor 有关上下文停止的信息。一旦上下文停止后，线程池中的线程将会被更新。为了避免同时更新线程，可用此属性设置更新的延迟。默认 1000，单位毫秒，如果设成负数，则线程不会被更新。")])])]),t._v(" "),e("h2",{attrs:{id:"_1-5-其他调优参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-其他调优参数"}},[t._v("#")]),t._v(" 1.5 其他调优参数")]),t._v(" "),e("h3",{attrs:{id:"host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" Host")]),t._v(" "),e("p",[t._v("Host 表示虚拟主机。")]),t._v(" "),e("ul",[e("li",[t._v("server.xml")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<Host name="localhost" autoDeploy="true"></Host>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("blockquote",[e("p",[t._v("这里只列出了 Host 的调优属性，，要想阅读完整属性，可使用如下方式：")]),t._v(" "),e("p",[t._v("•方式一、访问 http://tomcat.apache.org/tomcat-9.0-doc/config/host.html[5] ，将 9.0 修改为你的 Tomcat 版本即可，比如想看 Tomcat 8 的文档，可将 9.0 改为 8.0•方式二、下载 Tomcat 并启动，访问 "),e("code",[t._v("/docs/config/host.html")]),t._v(" 路径即可。例如："),e("code",[t._v("http://localhost:8080/docs/config/host.html")])])]),t._v(" "),e("ul",[e("li",[t._v("autoDeploy：是否要让 Tomcat 周期性检查新的或更新了的 Web 应用程序。如果设为 true，则 Tomcat 会定期检查 appBase 和 xmlBase 目录，并自动部署。默认 true。由于 autoDeploy=true 时，会启用一个定时任务，如果没有“自动部署”的需求，可将其设为 false。")])]),t._v(" "),e("h2",{attrs:{id:"_1-6-spring-boot-spring-cloud-项目支持的调优参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-spring-boot-spring-cloud-项目支持的调优参数"}},[t._v("#")]),t._v(" 1.6 Spring Boot/Spring Cloud 项目支持的调优参数")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# 开发环境配置\nserver:\n  tomcat:\n    # tomcat的URI编码\n    uri-encoding: UTF-8\n    # 等价于Connector.acceptCount,连接数满后的排队数，默认为100\n    accept-count: 1000\n    # 等价于Connector.maxConnections 默认 8192\n    max-connections: 1000\n    connection-timeout: 60s\n    threads:\n      # 等价于Connector.maxThreads tomcat最大线程数，默认为200\n      max: 1000\n      # 等价于Connector.minSpareThreads Tomcat启动初始化的线程数，默认值10\n      min-spare: 10\n  # TIPS：压缩带来的好处是减少带宽，但缺点在于增加了服务器的CPU开销。就笔者个人的经验，很少直接用Tomcat的GZIP功能，更多使用NGINX的GZIP。\n  compression:\n    # 是否开启GZIP，默认关闭\n    enabled: false\n    # 执行压缩所需的最小响应大小，默认2KB\n    min-response-size: 2KB\n    # 想要GZIP的格式，默认"text/html", "text/xml", "text/plain",\n            "text/css", "text/javascript", "application/javascript", "application/json",\n            "application/xml"\n    mime-types: "text/html", "text/xml"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br")])]),e("h2",{attrs:{id:"_1-7-其他调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-其他调优"}},[t._v("#")]),t._v(" 1.7 其他调优")]),t._v(" "),e("h3",{attrs:{id:"tomcat-session-调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-session-调优"}},[t._v("#")]),t._v(" Tomcat Session 调优")]),t._v(" "),e("h4",{attrs:{id:"一、jsp-与-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、jsp-与-session"}},[t._v("#")]),t._v(" "),e("strong",[t._v("一、JSP 与 Session")])]),t._v(" "),e("p",[t._v("如果使用 JSP 的话，如果业务允许，考虑考虑加上以下内容：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%@ page session="false" %>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("高并发场景下，可能会导致内存溢出。")]),t._v(" "),e("h4",{attrs:{id:"二、为-session-设置合理的超时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、为-session-设置合理的超时"}},[t._v("#")]),t._v(" "),e("strong",[t._v("二、为 Session 设置合理的超时")])]),t._v(" "),e("p",[t._v("超时时间不宜过长，否则也可能会造成内存上的压力。")]),t._v(" "),e("p",[t._v("对于传统 Tomcat 项目，只需在应用的 "),e("code",[t._v("web.xml")]),t._v(" 中添加如下内容：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- 配置Session失效时间，单位分钟 --\x3e\n<session-config>\n        <session-timeout>30</session-timeout>\n</session-config>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("对于 Spring Boot 项目，通过如下配置设置 Session 即可。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server:\n  servlet:\n    session:\n      timeout: 30m\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("blockquote",[e("p",[e("strong",[t._v("拓展阅读")])]),t._v(" "),e("p",[t._v("其他设置 Session 超时时间的方法详见 https://www.iteye.com/blog/jiangshuiy-1843622[7]")])]),t._v(" "),e("h1",{attrs:{id:"_2-虚拟机运行优化-参数调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-虚拟机运行优化-参数调整"}},[t._v("#")]),t._v(" 2. 虚拟机运行优化（参数调整）")]),t._v(" "),e("h2",{attrs:{id:"_1-虚拟机运行优化-参数调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-虚拟机运行优化-参数调整"}},[t._v("#")]),t._v(" 1 虚拟机运行优化（参数调整）")]),t._v(" "),e("p",[t._v("Java 虚拟机的运行优化主要是内存分配和垃圾回收策略的优化：")]),t._v(" "),e("ul",[e("li",[t._v("内存直接影响服务的运行效率和吞吐量")]),t._v(" "),e("li",[t._v("垃圾回收机制会不同程度地导致程序运行中断（垃圾回收策略不同，垃圾回收次数和回收效率都是 不同的）")])]),t._v(" "),e("h3",{attrs:{id:"_1-1java-虚拟机内存相关参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1java-虚拟机内存相关参数"}},[t._v("#")]),t._v(" 1.1Java 虚拟机内存相关参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("参数作⽤")]),t._v(" "),e("th",[t._v("优化建议")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-server")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动 Server，以服务端模式运行")]),t._v(" "),e("td",[t._v("服务端模式建议开启")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-Xms")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("最⼩堆内存")]),t._v(" "),e("td",[t._v("建议与-Xmx 设置相 同")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-Xmx")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("最大堆内存")]),t._v(" "),e("td",[t._v("建议设置为可⽤内存 的 80%")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-XX:MetaspaceSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("元空间初始值")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("- XX:MaxMetaspaceSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("元空间最大内存")]),t._v(" "),e("td",[t._v("默认⽆限")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-XX:NewRatio")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("年轻代和⽼年代大⼩⽐值，取值为整数，默 认为 2")]),t._v(" "),e("td",[t._v("不需要修改")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-XX:SurvivorRatio")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Eden 区与 Survivor 区大⼩的⽐值，取值为整 数，默认为 8")]),t._v(" "),e("td",[t._v("不需要修改")])])])]),t._v(" "),e("p",[e("strong",[t._v("参数调整示例")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('JAVA_OPTS="-server -Xms2048m -Xmx2048m -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=512m"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-垃圾回收-gc-策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-垃圾回收-gc-策略"}},[t._v("#")]),t._v(" 2. 垃圾回收（GC）策略")]),t._v(" "),e("p",[e("strong",[t._v("垃圾回收性能指标")])]),t._v(" "),e("ul",[e("li",[t._v("吞吐量：工作时间（排除 GC 时间）占总时间的百分⽐， 工作时间并不仅是程序运行的时间，还包含内存分配时间。")]),t._v(" "),e("li",[t._v("暂停时间：由垃圾回收导致的应⽤程序停⽌响应次数/时间。")])]),t._v(" "),e("p",[e("strong",[t._v("垃圾收集器")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("串行收集器（Serial Collector）")]),t._v(" "),e("p",[t._v("单线程执行所有的垃圾回收工作， 适⽤于单核 CPU 服务器")]),t._v(" "),e("p",[e("strong",[t._v("工作进程-----|（单线程）垃圾回收线程进行垃圾收集|---工作进程继续")])])]),t._v(" "),e("li",[e("p",[t._v("并行收集器（Parallel Collector)")]),t._v(" "),e("p",[e("strong",[t._v("工作进程-----|（多线程）垃圾回收线程进行垃圾收集|---工作进程继续")])]),t._v(" "),e("p",[t._v("⼜称为吞吐量收集器（关注吞吐量）， 以并行的方式执行年轻代的垃圾回收， 该方式可以显著降低垃圾回收的开销(指多条垃圾收集线程并行工作，但此时⽤户线程仍然处于等待状态)。适⽤于多处理器或多线程硬件上运行的数据量较大的应⽤")])]),t._v(" "),e("li",[e("p",[t._v("并发收集器（Concurrent Collector）")]),t._v(" "),e("p",[t._v("以并发的方式执行大部分垃圾回收工作，以缩短垃圾回收的暂停时间。适⽤于那些"),e("strong",[t._v("响应时间优先于吞吐量")]),t._v("的应⽤， 因为该收集器虽然最⼩化了暂停时间("),e("strong",[t._v("指⽤户线程与垃圾收集线程同时执行,但不⼀定是并行的，可能会交替进行")]),t._v(")， 但是会降低应⽤程序的性能")])]),t._v(" "),e("li",[e("p",[t._v("CMS 收集器（Concurrent Mark Sweep Collector）")]),t._v(" "),e("p",[t._v("并发标记清除收集器， 适⽤于那些更愿意缩短垃圾回收暂停时间并且负担的起与垃圾回收共享处理器资源的应⽤。"),e("strong",[t._v("低延迟")])])]),t._v(" "),e("li",[e("p",[t._v("G1 收集器（Garbage-First Garbage Collector）")]),t._v(" "),e("p",[t._v("适⽤于大容量内存的多核服务器， 可以在满⾜垃圾回收暂停时间⽬标的同时， 以最大可能性实现 ⾼吞吐量(JDK1.7 之后)。"),e("strong",[t._v("高并发")]),t._v("，高吞吐量")])])]),t._v(" "),e("h3",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("p",[e("code",[t._v("[1]")]),t._v(": "),e("em",[t._v("https://blog.csdn.net/zzzgd_666/article/details/88740198")]),t._v(" "),e("code",[t._v("[2]")]),t._v(": "),e("em",[t._v("http://tomcat.apache.org/tomcat-9.0-doc/config/http.html")]),t._v(" "),e("code",[t._v("[3]")]),t._v(": "),e("em",[t._v("http://tomcat.apache.org/tomcat-9.0-doc/config/http.html#Connector_Comparison")]),t._v(" "),e("code",[t._v("[4]")]),t._v(": "),e("em",[t._v("http://tomcat.apache.org/tomcat-9.0-doc/config/executor.html")]),t._v(" "),e("code",[t._v("[5]")]),t._v(": "),e("em",[t._v("http://tomcat.apache.org/tomcat-9.0-doc/config/host.html")]),t._v(" "),e("code",[t._v("[6]")]),t._v(": "),e("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/127792067",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomcat 调优之从 Linux 内核源码层面看 Tcp backlog"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);