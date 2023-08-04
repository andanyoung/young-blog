(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1008:function(v,_,s){"use strict";s.r(_);var t=s(4),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("作为开发人员，我们每天都要开发大量的接口，其中包括了读接口和写接口，而对于写接口来说，除了要保证他的性能、可用性以外，还需要有一个重要的问题，那就是考虑如何保证接口的幂等性")]),v._v(" "),_("p",[v._v("Innodb 是 MySQL 的执行引擎，MySQL 是一种关系型数据库，而 Redis 是一种非关系型数据库。这两者之间比较大的区别是：关系型数据库以表的形式进行存储数据，而非关系型数据库以 Key-value 的形式存储数据。")]),v._v(" "),_("p",[v._v("在 InnoDB 中，索引是采用 B + 树实现的，在 Redis 中，ZSET 是采用跳表（不只是跳表）实现的，无论是 B + 树，还是跳表，都是性能很好的数据结构，那么，为什么 InnoDB 为什么不用跳表，Redis 为什么不用 B + 树？")]),v._v(" "),_("p",[v._v("我们都知道，MySQL 是基于磁盘存储的，Redis 是基于内存存储的。")]),v._v(" "),_("p",[v._v("而之所以 Innodb 用 B + 树，主要是因为 B + 树是一种磁盘 IO 友好型的数据结构，而 Redis 使用跳表，是因为跳表则是一种内存友好型的数据结构。")]),v._v(" "),_("h1",{attrs:{id:"b-树次磁盘友好"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#b-树次磁盘友好"}},[v._v("#")]),v._v(" "),_("strong",[v._v("B + 树次磁盘友好？")])]),v._v(" "),_("p",[v._v("首先，B + 树的叶子节点形成有序链表，可以方便地进行范围查询操作。对于磁盘存储来说，顺序读取的效率要高于随机读取，因为它可以充分利用磁盘预读和缓存机制，减少磁盘 I/O 的次数。")]),v._v(" "),_("p",[v._v("其次，由于 B + 树的节点大小是固定的，因此可以很好地利用磁盘预读特性，一次性读取多个节点到内存中，这样可以减少 IO 操作次数，提高查询效率。")]),v._v(" "),_("p",[v._v("还有就是，B + 树的叶子节点都存储数据，而非数据和指针混合，所以叶子节点的大小是固定的，而且节点的大小一般都会设置为一页的大小，这就使得节点分裂和合并时，IO 操作很少，只需读取和写入一页。")]),v._v(" "),_("p",[v._v("所以，B + 树在设计上考虑了磁盘存储的特点和性能优化，我曾经分析过，当 Innodb 中存储 2000 万数据的时候，"),_("strong",[v._v("只需要 3 次磁盘就够了")]),v._v("。")]),v._v(" "),_("p",[v._v("而跳表就不一样了，跳表的索引节点通过跳跃指针连接，形成多级索引结构。这导致了跳表的索引节点在磁盘上存储时会出现数据分散的情况，即索引节点之间的物理距离可能较远。对于磁盘存储来说，随机访问分散的数据会增加磁头的寻道时间，导致磁盘 I/O 的性能下降。")]),v._v(" "),_("h1",{attrs:{id:"为啥-redis-用跳表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为啥-redis-用跳表"}},[v._v("#")]),v._v(" "),_("strong",[v._v("为啥 Redis 用跳表？")])]),v._v(" "),_("p",[v._v("既然 B + 树这么多优点，为啥 Redis 要用跳表实现 ZSET 呢（不只是跳表，详见下面链接）？而不是 B + 树呢？")]),v._v(" "),_("p",[v._v("主要是因为 Redis 是一种基于内存的数据结构。他其实不需要考虑磁盘 IO 的性能问题，所以，他完全可以选择一个简单的数据结构，并且性能也能接受的 ，那么跳表就很合适。")]),v._v(" "),_("p",[v._v("因为跳表相对于 B + 树来说，更简单。相比之下，B + 树作为一种复杂的索引结构，需要考虑节点分裂和合并等复杂操作，增加了实现和维护的复杂度。")]),v._v(" "),_("p",[v._v("而且，Redis 的有序集合经常需要进行插入、删除和更新操作。跳表在动态性能方面具有良好的表现，特别是在插入和删除操作上。相比之下，B + 树的插入和删除需要考虑平衡性，所以还是成本挺高的。")]),v._v(" "),_("h1",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" "),_("strong",[v._v("总结")])]),v._v(" "),_("p",[v._v("以上，就是关于《InnoDB 为什么不用跳表，Redis 为什么不用 B + 树？》这个问题的我的一些理解，其实这个问题想要回答好还挺难的。")]),v._v(" "),_("p",[v._v("首先要知道为啥 Innodb 使用红黑树，其次还要了解 Redis 中的 Zset 数据结构，还需要知道跳表的原理。")]),v._v(" "),_("p",[v._v("和这个问题类似的问题还有：")]),v._v(" "),_("p",[v._v("《Innodb 为什么不用红黑树？》")]),v._v(" "),_("p",[v._v("《Innodb 为什么不用 B 树？》")]),v._v(" "),_("p",[v._v("《Redis 的 ZSet 中 zipList 和 skipList 是什么？》")]),v._v(" "),_("p",[v._v("《为什么 Redis 7.0 中使用 ListPack 实现 ZSet？》")])])}),[],!1,null,null,null);_.default=e.exports}}]);