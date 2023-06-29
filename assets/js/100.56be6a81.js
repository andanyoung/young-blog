(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{691:function(s,v,_){"use strict";_.r(v);var t=_(4),i=Object(t.a)({},(function(){var s=this,v=s._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"_1-什么是-gossip-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-gossip-协议"}},[s._v("#")]),s._v(" 1 什么是 Gossip 协议")]),s._v(" "),v("p",[s._v("Gossip 协议也叫 Epidemic 协议 （流行病协议）。原本用于分布式数据库中节点同步数据使用， 后被广泛用于数据库复制、信息扩散、集群成员身份确认、故障探测等。")]),s._v(" "),v("p",[s._v("从 gossip 单词就可以看到，其中文意思是八卦、流言等意思，我们可以想象下绯闻的传播（或者流 行病的传播）；gossip 协议的工作原理就类似于这个。gossip 协议利用一种随机的方式将信息传播到整 个网络中，并在一定时间内使得系统内的所有节点数据一致。Gossip 其实是一种去中心化思路的分布式 协议，解决状态在集群中的传播和状态一致性的保证两个问题。")]),s._v(" "),v("p",[v("img",{attrs:{src:"http://md7.admin4j.com/blog/image-20230403170921823.png",alt:"image-20230403170921823"}})]),s._v(" "),v("h1",{attrs:{id:"_2-gossip-原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-gossip-原理"}},[s._v("#")]),s._v(" 2 Gossip 原理")]),s._v(" "),v("p",[s._v("Gossip 协议的消息传播方式有两种：反熵传播 和 谣言传播")]),s._v(" "),v("ol",[v("li",[v("p",[s._v("反熵传播")]),s._v(" "),v("p",[s._v("是以固定的概率传播所有的数据。所有参与节点只有两种状态：Suspective(病原)、 Infective(感染)。过程是种子节点会把所有的数据都跟其他节点共享，以便消除节点之间数据的任何不一致，它可以保证最终、完全的一致。缺点是消息数量非常庞大，且无限制；通常只用于新加入节点的数据初始化。")])]),s._v(" "),v("li",[v("p",[s._v("谣言传播\n是以固定的概率仅传播新到达的数据。所有参与节点有三种状态：Suspective(病原)、 Infective(感染)、Removed(愈除)。过程是消息只包含最新 update，谣言消息在某个时间点之后会被标记为 removed，并且不再被传播。缺点是系统有一定的概率会不一致，通常用于节点间数据增量同步。")])])]),s._v(" "),v("h1",{attrs:{id:"_3-通信方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-通信方式"}},[s._v("#")]),s._v(" 3 通信方式")]),s._v(" "),v("p",[s._v("Gossip 协议最终目的是将数据分发到网络中的每一个节点。"),v("strong",[s._v("根据不同的具体应用场景，网络中两个节点之间存在三种通信方式：推送模式、拉取模式、推/拉模式")])]),s._v(" "),v("ol",[v("li",[v("p",[s._v("Push")]),s._v(" "),v("p",[s._v("节点 A 将数据 (key,value,version) 及对应的版本号推送给 B 节点，B 节点更新 A 中比自己新的数据")]),s._v(" "),v("p",[v("img",{attrs:{src:"http://md7.admin4j.com/blog/image-20230403171211720.png",alt:"Push"}})])]),s._v(" "),v("li",[v("p",[s._v("Pull")]),s._v(" "),v("p",[s._v("A 仅将数据 key, version 推送给 B，B 将本地比 A 新的数据（Key, value, version）推送给 A，A 更 新本地")]),s._v(" "),v("p",[v("img",{attrs:{src:"http://md7.admin4j.com/blog/image-20230403171248743.png",alt:"Pull"}})])])]),s._v(" "),v("h1",{attrs:{id:"_4-优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-优缺点"}},[s._v("#")]),s._v(" 4 优缺点")]),s._v(" "),v("p",[s._v("综上所述，我们可以得出 Gossip 是一种去中心化的分布式协议，数据通过节点像病毒一样逐个传 播。因为是指数级传播，整体传播速度非常快。")]),s._v(" "),v("ol",[v("li",[v("p",[s._v("优点")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("扩展性：允许节点的任意增加和减少，新增节点的状态最终会与其他节点一致")])]),s._v(" "),v("li",[v("p",[s._v("容错：任意节点的宕机和重启都不会影响 Gossip 消息的传播，具有天然的分布式系统容错特性")])]),s._v(" "),v("li",[v("p",[s._v("去中心化：无需中心节点，所有节点都是对等的，任意节点无需知道整个网络状况，只要网络连通，任意节点可把消息散播到全网")])]),s._v(" "),v("li",[v("p",[s._v("最终一致性：Gossip 协议实现信息指数级的快速传播，因此在有新信息需要传播时，消息可以快速地发送到全局节点，在有限的时间内能够做到所有节点都拥有最新的数据。")])])])]),s._v(" "),v("li",[v("p",[s._v("缺点")]),s._v(" "),v("ul",[v("li",[s._v("消息延迟:节点随机向少数几个节点发送消息，消息最终是通过多个轮次的散播而到达全网； 不可避免的造成消息延迟。")]),s._v(" "),v("li",[s._v("消息冗余:节点定期随机选择周围节点发送消息，而收到消息的节点也会重复该步骤；不可避免的引起同一节点消息多次接收，增加消息处理压力")])])])]),s._v(" "),v("p",[s._v("Gossip 协议由于以上的优缺点，所以"),v("strong",[s._v("适合于 AP 场景的数据一致性处理")]),s._v("，常见应用有：P2P 网络通信、 Redis Cluster、Consul。")])])}),[],!1,null,null,null);v.default=i.exports}}]);