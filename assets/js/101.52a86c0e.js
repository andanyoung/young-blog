(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{987:function(e,t,a){"use strict";a.r(t);var r=a(4),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-zookeeper-应用开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-zookeeper-应用开发"}},[e._v("#")]),e._v(" 1. "),t("strong",[e._v("zookeeper 应用开发")])]),e._v(" "),t("p",[e._v("Zookeeper 应用开发，需要使用 Zookeeper 的 java 客户端 API ，去连接和操作 Zookeeper 集群。")]),e._v(" "),t("p",[e._v("可以供选择的 java 客户端 API 有：Zookeeper 官方的 java 客户端 API，第三方的 java 客户端 API。")]),e._v(" "),t("p",[e._v("Zookeeper 官方的客户端 API 提供了基本的操作，比如，创建会话、创建节点、读取节点、更新数据、删除节点和检查节点是否存在等。但对于开发人员来说，Zookeeper 提供的基本操纵还是有一些不足之处。")]),e._v(" "),t("p",[e._v("Zookeeper API 不足之处如下：")]),e._v(" "),t("p",[e._v("（1）Zookeeper 的 Watcher 是一次性的，每次触发之后都需要重新进行注册；")]),e._v(" "),t("p",[e._v("（2）Session 超时之后没有实现重连机制；")]),e._v(" "),t("p",[e._v("（3）异常处理繁琐，Zookeeper 提供了很多异常，对于开发人员来说可能根本不知道该如何处理这些异常信息；")]),e._v(" "),t("p",[e._v("（4）只提供了简单的 byte[]数组的接口，没有提供针对对象级别的序列化；")]),e._v(" "),t("p",[e._v("（5）创建节点时如果节点存在抛出异常，需要自行检查节点是否存在；")]),e._v(" "),t("p",[e._v("（6）删除节点无法实现级联删除；")]),e._v(" "),t("p",[e._v("第三方开源客户端主要有 zkClient 和 Curator。")]),e._v(" "),t("h2",{attrs:{id:"_1-1-zkclient-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-zkclient-简介"}},[e._v("#")]),e._v(" 1.1 ZkClient 简介")]),e._v(" "),t("p",[e._v("ZkClient 是一个开源客户端，在 Zookeeper 原生 API 接口的基础上进行了包装，更便于开发人员使用。zkClient 客户端，在一些著名的互联网开源项目中，得到了应用，比如：阿里的分布式 dubbo 框架，对它进行了集成使用。")]),e._v(" "),t("p",[e._v("zkClient 解决了 Zookeeper 原生 API 接口的很多问题。比如，zkClient 提供了更加简洁的 api，实现了 session 会话超时重连、Watcher 反复注册等问题。虽然 ZkClient 对原生 API 进行了封装，但也有它自身的不足之处。")]),e._v(" "),t("p",[e._v("具体如下：")]),e._v(" "),t("p",[e._v("（1）zkClient 社区不活跃，文档不够完善，几乎没有参考文档；")]),e._v(" "),t("p",[e._v("（2）异常处理简化（抛出 RuntimeException）；")]),e._v(" "),t("p",[e._v("（3）重试机制比较难用；")]),e._v(" "),t("p",[e._v("（4）没有提供各种使用场景的参考实现；")]),e._v(" "),t("h2",{attrs:{id:"_1-2-curator-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-curator-简介"}},[e._v("#")]),e._v(" 1.2 Curator 简介")]),e._v(" "),t("p",[e._v("Curator 是 Netflix 公司开源的一套 Zookeeper 客户端框架，和 ZkClient 一样，解决了非常底层的细节开发工作，包括连接重连、反复注册 Watcher 和 NodeExistsException 异常等。Curator 是 Apache 基金会的顶级项目之一，Curator 具有更加完善的文档，另外还提供了一套易用性和可读性更强的 Fluent 风格的客户端 API 框架。")]),e._v(" "),t("p",[e._v("不止上面这些，Curator 中还提供了 Zookeeper 各种应用场景（Recipe，如共享锁服务、Master 选举机制和分布式计算器等）的抽象封装。")]),e._v(" "),t("p",[e._v("另外，Curator 供了一套非常优雅的链式调用 api，对比 ZkClient 客户端 Api 的使用，发现 Curator 的 api 优雅太多。")]),e._v(" "),t("p",[e._v("使用 ZkClient 客户端，创建节点的代码为：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  ZkClient client = new ZkClient("192.168.1.105:2181",\n\n             10000, 10000, new SerializableSerializer());\n\n     System.out.println("conneted ok!");\n\n     String zkPath = "/test/node-1";\n\n     Stat stat = new Stat();\n\n     User u = client.readData(zkPath, stat);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("使用 Curator 客户端，创建节点的代码如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  CuratorFramework client =  CuratorFrameworkFactory.newClient(\n\n               connectionString, retryPolicy);\n\n       String zkPath = "/test/node-1";\n\n       client.create().withMode(mode).forPath(zkPath);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("总之，由于 Curator 客户端确实非常优秀，Patrixck Hunt（Zookeeper）以一句“Guava is to Java that Curator to Zookeeper”，对 Curator 给予了高度评价。")]),e._v(" "),t("p",[e._v("因此，对于 Zookeeper 的客户端，我们这里只学习和研究 Curator 的使用。而且，在实际的开发场景中，使用 Curator 客户端，就足可以应付日常的 Zookeeper 集群操作需求。")])])}),[],!1,null,null,null);t.default=n.exports}}]);