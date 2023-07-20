(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{871:function(_,v,a){"use strict";a.r(v);var s=a(4),e=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTssUJRoXV8HRbXyicfmOz8eiaubEunoglxpicGl4zvcwXV5OWibib4vDB6xaA/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("对了，本文主要是针对 InnoDB 存储引擎进行讲解。")]),_._v(" "),v("h2",{attrs:{id:"索引分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引分类"}},[_._v("#")]),_._v(" 索引分类")]),_._v(" "),v("p",[_._v("索引的分类可以从不同的维度进行分类")]),_._v(" "),v("h5",{attrs:{id:"_1、按使用的数据结构划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、按使用的数据结构划分"}},[_._v("#")]),_._v(" 1、按使用的数据结构划分")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("B + 树索引")])]),_._v(" "),v("li",[v("p",[_._v("Hash 索引")])]),_._v(" "),v("li",[v("p",[_._v("...")])])]),_._v(" "),v("h5",{attrs:{id:"_2、按实际的物理存储数据构划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、按实际的物理存储数据构划分"}},[_._v("#")]),_._v(" 2、按实际的物理存储数据构划分")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("聚簇索引")])]),_._v(" "),v("li",[v("p",[_._v("非聚簇索引（二级索引）")])])]),_._v(" "),v("p",[_._v("聚簇索引和非聚簇索引后面会着重说。")]),_._v(" "),v("h5",{attrs:{id:"_3、按索引特性划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、按索引特性划分"}},[_._v("#")]),_._v(" 3、按索引特性划分")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("主键索引")])]),_._v(" "),v("li",[v("p",[_._v("唯一索引")])]),_._v(" "),v("li",[v("p",[_._v("普通索引")])]),_._v(" "),v("li",[v("p",[_._v("全文索引")])]),_._v(" "),v("li",[v("p",[_._v("...")])])]),_._v(" "),v("h5",{attrs:{id:"_4、按字段个数划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、按字段个数划分"}},[_._v("#")]),_._v(" 4、按字段个数划分")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("单列索引")])]),_._v(" "),v("li",[v("p",[_._v("联合索引")])])]),_._v(" "),v("h2",{attrs:{id:"索引数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引数据结构"}},[_._v("#")]),_._v(" 索引数据结构")]),_._v(" "),v("h4",{attrs:{id:"准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[_._v("#")]),_._v(" 准备")]),_._v(" "),v("p",[_._v("为了接下来文章更好地讲解，这里我准备了一张"),v("code",[_._v("user")]),_._v("表，接下来整篇文章的示例会以这张表来讲解")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("CREATE TABLE `user` (\n  `id` int(10) NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) DEFAULT NULL,\n  `age` int(10) DEFAULT NULL,\n  `city` varchar(255) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br"),v("span",{staticClass:"line-number"},[_._v("6")]),v("br"),v("span",{staticClass:"line-number"},[_._v("7")]),v("br")])]),v("h4",{attrs:{id:"hash-索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hash-索引"}},[_._v("#")]),_._v(" Hash 索引")]),_._v(" "),v("p",[_._v("Hash 索引其实用的不多，最主要是因为最常见的存储引擎 InnoDB "),v("strong",[_._v("不支持显示地创建 Hash 索引，只支持自适应 Hash 索引。")])]),_._v(" "),v("p",[_._v("虽然可以使用 sql 语句在 InnoDB 显示声明 Hash 索引，但是其实是不生效的")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs5LCZp3IV8XlAtzS5MgrWW5qo1DFPwCmdZ7Fje6lEMV3E0p97noHKUg/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("对 name 字段建立 Hash 索引，但是通过"),v("code",[_._v("show index from 表名")]),_._v("就会发现实际还是 B + 树")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs2PYjO23U0vVzcyGAynugM0AZq9iblYWiaNNeD3jGInSicWCqolQoIseAg/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("在存储引擎中，Memory 引擎支持 Hash 索引")]),_._v(" "),v("p",[_._v("Hash 索引其实有点像 Java 中的 HashMap 底层的数据结构，他也有很多的槽，存的也是键值对，键值为索引列，值为数据的这条数据的行指针，通过行指针就可以找到数据")]),_._v(" "),v("p",[_._v("假设现在"),v("code",[_._v("user")]),_._v("表用 Memory 存储引擎，对 name 字段建立 Hash 索引，表中插入三条数据")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs2ZqrovyufsuS8Qou52kWAEGnfGxEnnNjAcabHCJSHEFs80Q5uucCmQ/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("Hash 索引会对索引列 name 的值进行 Hash 计算，然后找到对应的槽下面，如下图所示")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs7piaeDiarzjlazviaYCpIiccxSCuxnsKD73xduicwWPvYbFg1Ry32wgewfA/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("当遇到 name 字段的 Hash 值相同时，也就是 Hash 冲突，就会形成一个链表，比如有 name = 张三有两条数据，就会形成一个链表。")]),_._v(" "),v("p",[_._v("之后如果要查 name = 李四的数据，只需要对李四进行 Hash 计算，找到对应的槽，遍历链表，取出 name = 李四对应的行指针，然后根据行指针去查找对应的数据。")]),_._v(" "),v("p",[v("strong",[_._v("Hash 索引优缺点")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("hash 索引只能用于等值比较，所以查询效率非常高")])]),_._v(" "),v("li",[v("p",[_._v("不支持范围查询，也不支持排序，因为索引列的分布是无序的")])])]),_._v(" "),v("h4",{attrs:{id:"b-树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[_._v("#")]),_._v(" B + 树")]),_._v(" "),v("p",[_._v("B + 树是 mysql 索引中用的最多的数据结构，这里先不介绍，下一节会着重介绍。")]),_._v(" "),v("blockquote",[v("p",[_._v("除了 Hash 和 B + 树之外，还有全文索引等其它索引，这里就不讨论了")])]),_._v(" "),v("h2",{attrs:{id:"聚簇索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引"}},[_._v("#")]),_._v(" 聚簇索引")]),_._v(" "),v("h4",{attrs:{id:"数据页数据存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据页数据存储"}},[_._v("#")]),_._v(" 数据页数据存储")]),_._v(" "),v("p",[_._v("我们知道，我们插入表的数据其实最终都要持久化到磁盘上，InnoDB 为了方便管理这些数据，提出了"),v("strong",[_._v("页")]),_._v("的概念，它会将数据划分到多个页中，每个页大小默认是 "),v("strong",[_._v("16KB")]),_._v("，这个页我们可以称为"),v("strong",[_._v("数据页")]),_._v("。")]),_._v(" "),v("p",[_._v("当我们插入一条数据的时候，数据都会存在数据页中，如下图所示")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTssKJzxpjJxJs0qyiciaMck7V2vxkc4s6pxHdFUiaH4BMAuACUxkrCtfKCA/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("当数据不断地插入数据页中，数据会根据主键（没有的话会自动生成）的大小进行排序，形成一个单向链表")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs601MDPh0kCPMiaROuAU3jKrpVRbYIia8lkjNPaIL5HSzdbW2Nj4Wf6Tg/640?wx_fmt=png",alt:""}})]),_._v(" "),v("blockquote",[v("p",[_._v("数据页中除了会存储我们插入的数据之外，还会有一部分空间用来存储额外的信息，额外的信息类型比较多，后面遇到一个说一个")])]),_._v(" "),v("h4",{attrs:{id:"单个数据页的数据查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单个数据页的数据查找"}},[_._v("#")]),_._v(" 单个数据页的数据查找")]),_._v(" "),v("p",[_._v("既然数据会存在数据页中，那么该如何从数据页中去查数据呢？")]),_._v(" "),v("p",[_._v("假设现在需要在数据页中定位到 id=2 的这条记录的数据，如何快速定位？")]),_._v(" "),v("p",[_._v("有一种笨办法就是从头开始顺着链表遍历就行了，判断 id 是不是等于 2，如果等于 2 就取出数据就行了。")]),_._v(" "),v("p",[_._v("虽然这种方法可行，但是如果一个数据页存储的数据多，几十或者是几百条数据，每次都这么遍历，不是太麻烦了")]),_._v(" "),v("p",[_._v("所以 mysql 想了一个好办法，那就是给这些数据分组")]),_._v(" "),v("p",[_._v("假设数据页中存了 12 条数据，那么整个分组大致如下图所示")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTssCqQ41YNmKwIKiajfZxWeRxjm3oCJQNquvgzYBialsV5z7B8HAia3IbqQ/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("为了方便了，我这里只标出了 id 值，省略了其它字段的值")]),_._v(" "),v("p",[_._v("这里我假设每 4 条数据算一个组，图上就有 3 个组，组分好之后，mysql 会取出每组中"),v("strong",[_._v("最大的 id")]),_._v(" 值，就是图中的 4、8、12，放在一起，在数据页中找个位置存起来，这就是前面提到的数据页存储的额外信息之一，被称为"),v("strong",[_._v("页目录")])]),_._v(" "),v("p",[_._v("假设此时要查询 id=6 的数据之后，此时只需要从页目录中根据二分查找，发现在 4-8 之间，由于 4 和 8 是他们所在分组的最大的 id，那么 id=6 肯定在 8 那个分组中，之后就会到 id=8 的那个分组中，遍历每个数据，判断 id 是不是等于 6 即可。")]),_._v(" "),v("p",[_._v("由于 mysql 规定每个组的数据条数大概为 4~8 条，所以肯定比遍历整个数据页的数据快的多")]),_._v(" "),v("blockquote",[v("p",[_._v("上面分组的情况实际上我做了一点简化，但是不耽误理解")])]),_._v(" "),v("h4",{attrs:{id:"多个数据页中的数据查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多个数据页中的数据查找"}},[_._v("#")]),_._v(" 多个数据页中的数据查找")]),_._v(" "),v("p",[_._v("当我们不断的往表中插入数据的时候，数据占用空间就会不断变大，但是一个数据页的大小是一定的，当一个数据页存不下数据的时候，就会重新创建一个数据页来存储数据")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsIPtFyOWayicPS0iaibayU4ZjHw6pibRFuhfNo6UO5iccx0FJcMrq7vGY0wg/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("mysql 为了区分每个页，会为每个数据页分配一个页号，存在额外信息的存储空间中，同时额外信息还会存储当前数据页的前一个和后一个数据页的位置，从而形成数据页之间的双向链表")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTstX1GLbibT1ov9psmia64qSKNnZIxlAEmoaI5LvDp4mdOMeG0wntyO5Ug/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("数据页 2 的页号就是 2，数据页 3 的页号就是 3，这里我为了方便理解，就直接写数据页几。")]),_._v(" "),v("p",[_._v("并且 mysql 规定，前一个数据页的存储数据 id 的最大值要小于后一个数据页的存储数据 id 的最小值，这样就实现了数据在所有数据页中"),v("strong",[_._v("按照 id 的大小排序")]),_._v("。")]),_._v(" "),v("p",[_._v("现在，如果有多个数据页，当我们需要查找 id=5 的数据，怎么办呢？")]),_._v(" "),v("p",[_._v("当然还是可以用上面的笨办法，那就是从第一个数据页开始遍历，然后遍历每个数据页中的数据，最终也可以找到 id=5 的数据。")]),_._v(" "),v("p",[_._v("但是你仔细想想，这个笨办法就相当于全表扫描了呀，这肯定是不行的。")]),_._v(" "),v("p",[_._v("那么怎么优化呢？")]),_._v(" "),v("p",[_._v("mysql 优化的思路其实跟前面单数据页查找数据的优化思路差不多")]),_._v(" "),v("p",[_._v("它会将每个数据页中"),v("strong",[_._v("最小的 id")]),_._v(" 拿出来，单独放到另一个数据页中，这个数据页不存储我们实际插入的数据，只存储"),v("strong",[_._v("最小的 id")]),_._v(" 和这个 id 所在数据页的页号，如图所示")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsNGibnTRvZkXQlsutD0LNzy0tVpAOtt35oRPibvAOELyxT8hkavXHyB7g/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("为了图更加饱满，我加了一个存放数据的数据页 4")]),_._v(" "),v("p",[_._v("此时数据页 5 就是抽取出来的，存放了下面三个存放数据的数据页的最小的 id 和对应的数据页号")]),_._v(" "),v("p",[_._v("如果此时查找 id=5 的数据就很方便了，大致分为以下几个步骤：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("从数据页 5 直接根据二分查找，发现在 4-7 之间")])]),_._v(" "),v("li",[v("p",[_._v("由于 4 和 7 是所在数据页最小的 id，那么此时 id=5 的数据必在 id=4 的数据页上 (因为 id=7 的数据页最小的 id 就是 7)，")])]),_._v(" "),v("li",[v("p",[_._v("接下来就到 id=4 对应的数据页 2 的页号找到数据页 2")])]),_._v(" "),v("li",[v("p",[_._v("之后再根据前面提到的根据数据的主键 id 从单个数据页查找的流程查找数据")])])]),_._v(" "),v("p",[_._v("这样就实现了根据主键 id 到在多个数据页之间查找数据")]),_._v(" "),v("h4",{attrs:{id:"聚簇索引-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引-2"}},[_._v("#")]),_._v(" 聚簇索引")]),_._v(" "),v("p",[_._v("随着数据量不断增多，存储数据的数据页不断变多，数据页 5 的数据就会越来越多，但是每个数据页默认就 16k，所以数据页 5 也会分裂出多个数据页的情况，如下图")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs9JQmEpx1xu58SDXsaqpWicdKoM68ia6z2lS73vicOh9nick879T7MlLvwA/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("数据页 10 的作用就跟数据页 5 是一样的")]),_._v(" "),v("p",[_._v("此时如还要查找 id=5 的数据，那么应该去数据页 5 进行二分查找呢还是去数据页 10 进行二分查找呢？")]),_._v(" "),v("p",[_._v("笨办法就是遍历，但是真没必要，mysql 会去抽取数据页 5 和数据页 10 存储的最小的数据的 id 和对应的数据页号，单独拎出来放到一个数据页中，如下图")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsbMRfnERT85s2mYJgxnEfgnibkgpNoibgDhfukI64nyYFZ9S68EibKHdtQ/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("数据页 11 就是新抽取的数据页，存储了 id=1 和对应的数据页 5 的页号以及数 id=10 和对应的数据页 10 的页号")]),_._v(" "),v("p",[_._v("而这就是 "),v("strong",[_._v("B + 树")]),_._v("。")]),_._v(" "),v("blockquote",[v("p",[_._v("一般来说，mysql 数据库的 B + 树一般三层就可以放下几千万条数据")])]),_._v(" "),v("p",[_._v("此时查找 id=5 的数据，大致分为以下几个步骤：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("从数据页 11 根据二分查找定位到 id=5 对应数据页 5")])]),_._v(" "),v("li",[v("p",[_._v("再到数据页 5 根据 id=5 二分查找定位到数据页 3")])]),_._v(" "),v("li",[v("p",[_._v("再到数据页 3 根据 id=5 查找数据，具体的逻辑前面也提到很多次了")])])]),_._v(" "),v("p",[_._v("这样就能成功查找到数据了")]),_._v(" "),v("p",[_._v("而这种叶子节点存储实际插入的数据的 B + 树就被称为"),v("strong",[_._v("聚簇索引")]),_._v("，非叶子节点存储的就是记录的 id 和对应的数据页号。")]),_._v(" "),v("p",[_._v("所以对于 InnoDB 存储引擎来说，数据本身就存储在一颗 B + 树中。")]),_._v(" "),v("h2",{attrs:{id:"二级索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二级索引"}},[_._v("#")]),_._v(" 二级索引")]),_._v(" "),v("p",[_._v("二级索引也被称为非聚簇索引，本身也就是一颗 B + 树，一个二级索引对应一颗 B + 树，但是二级索引 B + 树存储的数据跟聚簇索引不一样。")]),_._v(" "),v("p",[_._v("聚簇索引前面也说了，叶子节点存的就是我们插入到数据库的数据，非叶子节点存的就是数据的主键 id 和对应的数据页号。")]),_._v(" "),v("p",[_._v("而二级索引叶子节点存的是索引列的数据和对应的主键 id，非叶子节点除了索引列的数据和 id 之外，还会存数据页的页号。")]),_._v(" "),v("blockquote",[v("p",[_._v("前面提到的数据页，其实真正是叫索引页，因为叶子节点存的是实际表的数据，所以我就叫数据页了，接下来因为真正要讲到索引了，所以我就将二级索引的页称为"),v("strong",[_._v("索引页")]),_._v("，你知道是同一个，但是存储的数据不一样就可以了。")])]),_._v(" "),v("h4",{attrs:{id:"单列索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单列索引"}},[_._v("#")]),_._v(" 单列索引")]),_._v(" "),v("p",[_._v("假设，我们现在对 name 字段加了一个普通非唯一索引，那么 name 就是索引列，同时 name 这个索引也就是单列索引")]),_._v(" "),v("p",[_._v("此时如果往表中插入三条数据，那么 name 索引的叶子节点存的数据就如下图所示")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsibIXXOFOiauUwMkrLgxEsXeqhB947L4Mib90KDcUYuwDryRqvSY8Px9KQ/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("mysql 会根据 name 字段的值进行排序，这里我假设张三排在李四前面，当索引列的值相同时，就会根据 id 排序，所以索引实际上已经根据索引列的值排好序了。")])]),_._v(" "),v("p",[_._v("这里肯定有小伙伴疑问，name 字段存储的中文也可以排序么？")]),_._v(" "),v("p",[_._v("答案是可以的，并且 mysql 支持很多种排序规则，我们在建数据库或者是建表的时候等都可以指定排序规则，"),v("strong",[_._v("并且后面文章涉及到的字符串排序都是我随便排的，实际情况可能不一样")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs9oFETicgVicwPTXHfKqjyBus1HTPhic4vSWC6ribTFxliavIFm2YGFffQ6Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("对于单个索引列数据查找也是跟前面说的聚簇索引一样，也会对数据分组，之后可以根据二分查找在单个索引列来查找数据。")]),_._v(" "),v("p",[_._v("当数据不断增多，一个索引页存储不下数据的时候，也会用多个索引页来存储，并且索引页直接也会形成双向链表")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs9nibCgLXcu2EzAHm22eSYBsKs9oYpMgcWCg9ZQrALQmrxNaCbJVFCxw/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("当索引页不断增多是，为了方便在不同索引页中查找数据，也就会抽取一个索引页，除了存页中 id，同时也会存储这个 id 对应的索引列的值")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs1okyBK5ANeqGia4dQ6kwC9rCLXE6GkhCbXJ7l7e1QD6uZgNJ3pvUKKA/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("当数据越来越多越来越多，还会抽取，也会形成三层的一个 B + 树，这里我就不画了。")]),_._v(" "),v("h4",{attrs:{id:"联合索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联合索引"}},[_._v("#")]),_._v(" 联合索引")]),_._v(" "),v("p",[_._v("除了单列索引，联合索引其实也是一样的，只不过索引页存的数据就多了一些索引列")]),_._v(" "),v("p",[_._v("比如，在 name 和 age 上建立一个联合索引，此时单个索引页就如图所示")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTshgfdOz7dkvW5lFMFwItzs77V0y2hv0EicNU7p1DTstaZATy5ZXmgppQ/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("先以 name 排序，name 相同时再以 age 排序，如果再有其它列，依次类推，最后再以 id 排序。")])]),_._v(" "),v("p",[_._v("相比于只有 name 一个字段的索引来说，索引页就多存了一个索引列。")]),_._v(" "),v("p",[_._v("最后形成的 B + 树简化为如下图")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsfNKjBY4FMenPN8vFuXqey8PwKSeUH1Ly7dBFlLiao7SR3DqDEVUYl1Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),v("p",[_._v("其实从上面的分析可以看出，聚簇索引和非聚簇索引主要区别有以下几点")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("聚簇索引的叶子节点存的是所有列的值，非聚簇索引的叶子节点只存了索引列的值和主键 id")])]),_._v(" "),v("li",[v("p",[_._v("聚簇索引的数据是按照 id 排序，非聚簇索引的数据是按照索引列排序")])]),_._v(" "),v("li",[v("p",[_._v("聚簇索引的非叶子节点存的是主键 id 和页号，非聚簇索引的非叶子节点存的是索引列、主键 id、页号")])])]),_._v(" "),v("p",[_._v("由于后面这个索引树会经常用到，为了你方便比较，所以我根据上面索引树的数据在表中插入了对应的数据，sql 在文末")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsIEo8Jg4w8RQSM0YeQxE3TOpxsekqA0icltgsArMXexXEQglOQic2Kybg/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("实际情况下索引 B + 树可能并不是按照我图中画出来的那样排序，但不耽误理解。")]),_._v(" "),v("h2",{attrs:{id:"回表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回表"}},[_._v("#")]),_._v(" 回表")]),_._v(" "),v("p",[_._v("讲完二级索引，接下来讲一讲如何使用二级索引查找数据。")]),_._v(" "),v("p",[_._v("这里假设对 name 字段创建了一个索引，并且表里就存了上面示例中的几条数据，这里我再把图拿过来")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs1okyBK5ANeqGia4dQ6kwC9rCLXE6GkhCbXJ7l7e1QD6uZgNJ3pvUKKA/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("那么对于下面这条 sql 应该如何执行？")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六';\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("由于查询条件是"),v("code",[_._v("name = '赵六'")]),_._v("，所以会走 name 索引")]),_._v(" "),v("p",[_._v("整个过程大致分为以下几个步骤：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("从最上面那层索引页开始二分查找，我们图中就是索引页 113，如果索引页 113 上面还有一层，就从上面一层二分查找")])]),_._v(" "),v("li",[v("p",[_._v("在索引页 113 查找到"),v("code",[_._v("赵六")]),_._v("在"),v("code",[_._v("王五")]),_._v("和"),v("code",[_._v("刘七")]),_._v("之间，之后到"),v("code",[_._v("王五")]),_._v("对应的索引页 111 上去查找"),v("code",[_._v("赵六")])])]),_._v(" "),v("li",[v("p",[_._v("在索引页 111 找到"),v("code",[_._v("赵六")]),_._v("的第一条记录，也就是 id=4 的那条")])]),_._v(" "),v("li",[v("p",[_._v("由于是"),v("code",[_._v("select *")]),_._v("，还要查其它字段，此时就会根据 id=4 到聚簇索引中查找其它字段数据，这个查找过程前面说了很多次了，这个根据 id=4 到聚簇索引中查找数据的过程就被称为"),v("strong",[_._v("回表")])])]),_._v(" "),v("li",[v("p",[_._v("由于是非唯一索引，所以"),v("code",[_._v("赵六")]),_._v("这个值可能会有重复，所以接着就会在索引页 111 顺着链表继续遍历，如果 name 还是"),v("code",[_._v("赵六")]),_._v("，那么还会根据 id 值进行回表，如此重复，一直这么遍历，直至 name 不再等于"),v("code",[_._v("赵六")]),_._v("为止，对于图示，其实就是两条数据")])])]),_._v(" "),v("p",[_._v("从上面的二级索引的查找数据过程分析，就明白了"),v("strong",[_._v("回表")]),_._v("的意思，就是先从二级索引根据查询条件字段值查找对应的主键 id，之后根据 id 再到聚簇索引查找其它字段的值。")]),_._v(" "),v("h2",{attrs:{id:"覆盖索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引"}},[_._v("#")]),_._v(" 覆盖索引")]),_._v(" "),v("p",[_._v("上一节说当执行"),v("code",[_._v("select * from user where name = '赵六';")]),_._v("这条 sql 的时候，会先从索引页中查出来"),v("code",[_._v("name = '赵六';")]),_._v("对应的主键 id，之后再回表，到聚簇索引中查询其它字段的值。")]),_._v(" "),v("p",[_._v("那么当执行下面这条 sql，又会怎样呢？")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select id from `user` where name = '赵六';\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("这次查询字段从"),v("code",[_._v("select *")]),_._v("变成"),v("code",[_._v("select id")]),_._v("，查询条件不变，所以也会走 name 索引")]),_._v(" "),v("p",[_._v("所以还是跟前面一样了，先从索引页中查出来"),v("code",[_._v("name = '赵六';")]),_._v("对应的主键 id 之后，惊讶的发现，sql 中需要查询字段的 id 值已经查到了，那次此时压根就不需要回表了，已经查到 id 了，还回什么表。")]),_._v(" "),v("p",[_._v("而这种需要查询的字段都在索引列中的情况就被称为"),v("strong",[_._v("覆盖索引")]),_._v("，索引列覆盖了查询字段的意思。")]),_._v(" "),v("p",[_._v("当使用覆盖索引时会减少回表的次数，这样查询速度更快，性能更高。")]),_._v(" "),v("blockquote",[v("p",[_._v("所以，在日常开发中，尽量不要 select * ，需要什么查什么，如果出现覆盖索引的情况，查询会快很多。")])]),_._v(" "),v("h2",{attrs:{id:"索引下推"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引下推"}},[_._v("#")]),_._v(" 索引下推")]),_._v(" "),v("p",[_._v("假设现在对表建立了一个 name 和 age 的联合索引，为了方便理解，我把前面的图再拿过来")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsfNKjBY4FMenPN8vFuXqey8PwKSeUH1Ly7dBFlLiao7SR3DqDEVUYl1Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("接下来要执行如下的 sql")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name > '王五' and age > 22;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("在 MySQL5.6(不包括 5.6) 之前，整个 sql 大致执行步骤如下：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("先根据二分查找，定位到"),v("code",[_._v("name > '王五'")]),_._v("的第一条数据，也就是 id=4 的那个赵六")])]),_._v(" "),v("li",[v("p",[_._v("之后就会根据 id=4 进行回表操作，到聚簇索引中查找 id=4 其它字段的数据，然后判断数据中的 age 是否大于 22，是的话就说明是我们需要查找的数据，否则就不是")])]),_._v(" "),v("li",[v("p",[_._v("之后顺着链表，继续遍历，然后找到一条记录就回一次表，然后判断 age，如此反复下去，直至结束")])])]),_._v(" "),v("p",[_._v("所以对于图上所示，整个搜索过程会经历 5 次回表操作，两个赵六，两个刘七，一个王九，最后符合条件的也就是 id=6 的赵六那条数据，其余 age 不符和。")]),_._v(" "),v("p",[_._v("虽然这么执行没什么问题，但是不知有没有发现其实没必要进行那么多次回表，因为光从上面的索引图示就可以看出，符合"),v("code",[_._v("name > '王五' and age > 22")]),_._v("的数据就 id=6 的赵六那条数据")]),_._v(" "),v("p",[_._v("所以在 MySQL5.6 之后，对上面的"),v("code",[_._v("age > 22")]),_._v("判断逻辑进行了优化")]),_._v(" "),v("p",[_._v("前面还是一样，定位查找到 id=4 的那个赵六，之后就"),v("strong",[_._v("不回表")]),_._v("来判断 age 了，因为索引列有 age 的值了，那么直接根据索引中 age 判断是否大于 22，如果大于的话，再回表查询剩余的字段数据（因为是"),v("code",[_._v("select *")]),_._v("），然后再顺序链表遍历，直至结束")]),_._v(" "),v("p",[_._v("所以这样优化之后，回表次数就成 1 了，相比于前面的 5 次，大大减少了回表的次数。")]),_._v(" "),v("p",[_._v("而这个优化，就被称为"),v("strong",[_._v("索引下推")]),_._v("，就是为了减少回表的次数。")]),_._v(" "),v("blockquote",[v("p",[_._v("之所以这个优化叫索引下推，其实是跟判断"),v("code",[_._v("age > 22")]),_._v("逻辑执行的地方有关，这里就不过多赘述了。")])]),_._v(" "),v("h2",{attrs:{id:"索引合并"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引合并"}},[_._v("#")]),_._v(" 索引合并")]),_._v(" "),v("p",[_._v("索引合并（index merge）是从 MySQL5.1 开始引入的索引优化机制，在之前的 MySQL 版本中，一条 sql 多个查询条件只能使用一个索引，但是引入了索引合并机制之后，MySQL 在"),v("strong",[_._v("某些特殊")]),_._v("的情况下会扫描多个索引，然后将扫描结果进行合并")]),_._v(" "),v("p",[_._v("结果合并会为下面三种情况：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("取交集（intersect）")])]),_._v(" "),v("li",[v("p",[_._v("取并集（union）")])]),_._v(" "),v("li",[v("p",[_._v("排序后取并集（sort-union）")])])]),_._v(" "),v("p",[_._v("为了不耽误演示，删除之前所有的索引，然后为 name 和 age 各自分别创建一个二级索引 idx_name 和 idx_age")]),_._v(" "),v("h4",{attrs:{id:"取交集-intersect"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#取交集-intersect"}},[_._v("#")]),_._v(" 取交集（intersect）")]),_._v(" "),v("p",[_._v("当执行下面这条 sql 就会出现取交集的情况")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六' and age= 22;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("查看执行计划")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsic3XoytmcE6iaCAgVZBfXP9dwaA9ApAkKF9w7a5wwKRF4YlEIy85YqxQ/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("type 是"),v("code",[_._v("index_merge")]),_._v("，并且 possible_key 和 key 都是"),v("code",[_._v("idx_name")]),_._v("和"),v("code",[_._v("idx_age")]),_._v("，说明使用了索引合并，并且 Extra 有"),v("code",[_._v("Using intersect(idx_age,idx_name)")]),_._v("，intersect 就是交集的意思。")]),_._v(" "),v("p",[_._v("整个过程大致是这样的，分别根据"),v("code",[_._v("idx_name")]),_._v("和"),v("code",[_._v("idx_age")]),_._v("取出对应的主键 id，之后将主键 id 取交集，那么这部分交集的 id 一定同时满足查询"),v("code",[_._v("name = '赵六' and age= 22")]),_._v("的查询条件（仔细想想），之后再根据交集的 id 回表")]),_._v(" "),v("p",[_._v("不过要想使用取交集的联合索引，需要满足各自索引查出来的主键 id 是排好序的，这是为了方便可以快速的取交集")]),_._v(" "),v("p",[_._v("比如下面这条 sql 就无法使用联合索引")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六' and age > 22;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsGhZwcg6Dgv9XFcEhSFT9EIA0gnYyXjybicg17MGuWJ9IEECaRT9ynFw/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("只能用 name 这个索引，因为"),v("code",[_._v("age > 22")]),_._v("查出来的 id 是无序的，前面在讲索引的时候有说过索引列的排序规则")]),_._v(" "),v("p",[_._v("由此可以看出，使用联合索引条件还是比较苛刻的。")]),_._v(" "),v("h4",{attrs:{id:"取并集-union"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#取并集-union"}},[_._v("#")]),_._v(" 取并集（union）")]),_._v(" "),v("p",[_._v("取并集就是将前面例子中的"),v("code",[_._v("and")]),_._v("换成"),v("code",[_._v("or")])]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六' or age = 22;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("前面执行的情况都一样，根据条件到各自的索引上去查，之后对查询的 id 取并集去重，之后再回表")]),_._v(" "),v("p",[_._v("同样地，取并集也要求各自索引查出来的主键 id 是排好序的，如果查询条件换成"),v("code",[_._v("age > 22")]),_._v("时就无法使用取并集的索引合并")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六' or age > 22;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("h4",{attrs:{id:"排序后取并集-sort-union"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#排序后取并集-sort-union"}},[_._v("#")]),_._v(" 排序后取并集（sort-union）")]),_._v(" "),v("p",[_._v("虽然取并集要求各自索引查出来的主键 id 是排好序的，但是如果遇到没排好序的情况，mysql 会自动对这种情况进行优化，会先对主键 id 排序，然后再取并集，这种情况就叫 排序后取并集（sort-union）。")]),_._v(" "),v("p",[_._v("比如上面提到的无法直接取并集的 sql 就符合排序后取并集（sort-union）这种情况")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六' or age > 22;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("h2",{attrs:{id:"mysql-如何选择索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-如何选择索引"}},[_._v("#")]),_._v(" mysql 如何选择索引")]),_._v(" "),v("p",[_._v("在日常生产中，一个表可能会存在多个索引，那么 mysql 在执行 sql 的时候是如何去判断该走哪个索引，或者是全表扫描呢？")]),_._v(" "),v("p",[_._v("mysql 在选择索引的时候会根据索引的使用成本来判断")]),_._v(" "),v("p",[_._v("一条 sql 执行的成本大致分为两块")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("IO 成本，因为这些页都是在磁盘的，要想去判断首先得加载到内存，MySQL 规定加载一个页的成本为 1.0")])]),_._v(" "),v("li",[v("p",[_._v("CPU 成本，除了 IO 成本之外，还有条件判断的成本，也就是 CPU 成本。比如前面举的例子，你得判断加载的数据"),v("code",[_._v("name = '赵六'")]),_._v("符不符合条件，MySQL 规定每判断一条数据花费的成本为 0.2")])])]),_._v(" "),v("h4",{attrs:{id:"全表扫描成本计算"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全表扫描成本计算"}},[_._v("#")]),_._v(" 全表扫描成本计算")]),_._v(" "),v("p",[_._v("对于全表扫描来说，成本计算大致如下")]),_._v(" "),v("p",[_._v("mysql 会对表进行数据统计，这个统计是大概，不是特别准，通过"),v("code",[_._v("show table status like '表名'")]),_._v("可以查看统计数据")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsGVgpq1PdaE7ZckBXAlw9bhiabONDhbkuvEXEKUrjPicZC7xv1fhuxk1Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("比如这个表大致有多少条数据 rows，以及聚簇索引所占的字节数 data_length，由于默认是 16kb，所以就可以计算出 (data_length/1024/16) 大概有多少个数据页。")]),_._v(" "),v("p",[_._v("所以全表扫描的成本就这么计算了")]),_._v(" "),v("p",[v("code",[_._v("rows * 0.2 + data_length/1024/16 * 1.0")])]),_._v(" "),v("h4",{attrs:{id:"二级索引-回表成本计算"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二级索引-回表成本计算"}},[_._v("#")]),_._v(" 二级索引 + 回表成本计算")]),_._v(" "),v("p",[_._v("二级索引 + 回表成本计算比较复杂，他的成本数据依赖两部分扫描区间个数和回表次数")]),_._v(" "),v("p",[_._v("为了方便描述扫描区间，这里我再把上面的图拿上来")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsfNKjBY4FMenPN8vFuXqey8PwKSeUH1Ly7dBFlLiao7SR3DqDEVUYl1Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六';\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("对着图看！")]),_._v(" "),v("p",[_._v("查询条件"),v("code",[_._v("name = '赵六'")]),_._v("就会产生一个扫描区间，从 id=4 的赵六扫描到 id=6 的赵六")]),_._v(" "),v("p",[_._v("又比如假设查询条件为"),v("code",[_._v("name > '赵六'")]),_._v("，此时就会产生一个从 id=7 的刘七开始直到数据结束（id=9 的王九）的扫描区间")]),_._v(" "),v("p",[_._v("又比如假设查询条件为"),v("code",[_._v("name < '李四' and name > '赵六'")]),_._v("，此时就会产生两个扫描区间，从 id=2 的张三到 id=3 的张三算一个，从 id=7 的刘七开始直到数据结束算另一个")]),_._v(" "),v("p",[_._v("所以扫描区间的意思就是符合查询条件的记录区间")]),_._v(" "),v("p",[_._v("二级索引计算成本的时候，mysq 规定读取一个区间的成本跟读取一个页的 IO 成本是一样的，都是 1.0")]),_._v(" "),v("p",[_._v("区间有了之后，就会根据统计数据估计在这些区间大致有多少条数据，因为要读写这些数据，那么读取成本大致就是 条数 * 0.2")]),_._v(" "),v("p",[_._v("所以走二级索引的成本就是 "),v("code",[_._v("区间个数 * 1.0 + 条数 * 0.2")])]),_._v(" "),v("p",[_._v("之后这些数据需要回表（如果需要的话），mysql 规定每次回表也跟读取一个页的 IO 成本是一样，也是 1.0")]),_._v(" "),v("p",[_._v("回表的时候需要对从聚簇索引查出来的数据进行剩余查询条件的判断，就是 CPU 成本，大致为 条数 * 0.2")]),_._v(" "),v("p",[_._v("所以回表的成本大致为 "),v("code",[_._v("条数 * 1.0 + 条数 * 0.2")])]),_._v(" "),v("p",[_._v("所以二级索引 + 回表的大致成本为 "),v("code",[_._v("区间个数 * 1.0 + 条数 * 0.2 + 条数 * 1.0 + 条数 * 0.2")])]),_._v(" "),v("p",[_._v("当索引的成本和全表扫描的成本都计算完成之后，mysql 会选择成本最低的索引来执行")]),_._v(" "),v("blockquote",[v("p",[_._v("mysql 对上述成本计算结果还会微调，但是微调的值特别小，所以这里我就省略了，并且这里也只是大致介绍了成本计算的规则，实际情况会更复杂，比如连表查询等等，有感兴趣的小伙伴查阅相关的资料")])]),_._v(" "),v("h4",{attrs:{id:"小结-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结-2"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),v("p",[_._v("总的来说，这一节主要是让你明白一件事，mysql 在选择索引的时候，会根据统计数据和成本计算的规则来计算使用每个索引的成本，然后选择使用最低成本的索引来执行查询")]),_._v(" "),v("h2",{attrs:{id:"索引失效"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引失效"}},[_._v("#")]),_._v(" 索引失效")]),_._v(" "),v("p",[_._v("在日常开发中，肯定或多或少都遇到过索引失效的问题，这里我总结一下几种常见的索引失效的场景")]),_._v(" "),v("p",[_._v("为了方便解释，这里我再把图拿过来")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsfNKjBY4FMenPN8vFuXqey8PwKSeUH1Ly7dBFlLiao7SR3DqDEVUYl1Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("h5",{attrs:{id:"不符和最左前缀匹配原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不符和最左前缀匹配原则"}},[_._v("#")]),_._v(" 不符和最左前缀匹配原则")]),_._v(" "),v("p",[_._v("当不符和最左前缀匹配原则的时候会导致索引失效")]),_._v(" "),v("p",[_._v("比如"),v("code",[_._v("like")]),_._v("以 % 开头，索引失效或者是联合索引没走第一个索引列。")]),_._v(" "),v("p",[_._v("比如 name 和 age 的联合索引，当执行"),v("code",[_._v("select * from user where name > '王五' and age > 22;")]),_._v("时，那么如果要走索引的话，此时就需要扫描整个索引，因为索引列是先以 name 字段排序，再以 age 字段排序的，对于 age 来说，在整个索引中来说是无序的，从图中也可以看出 18、23...9，无序，所以无法根据二分查找定位到"),v("code",[_._v("age > 22")]),_._v("是从哪个索引页开始的，")]),_._v(" "),v("p",[_._v("所以走索引的话要扫描整个索引，一个一个判断，最后还要回表，这就很耗性能，不如直接扫描聚簇索引，也就是全表扫描来的痛快。")]),_._v(" "),v("h5",{attrs:{id:"索引列进行了计算"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引列进行了计算"}},[_._v("#")]),_._v(" 索引列进行了计算")]),_._v(" "),v("p",[_._v("当对索引进行表达式计算或者使用函数时也会导致索引失效")]),_._v(" "),v("p",[_._v("这个主要是因为索引中保存的是索引字段是原始值，从上面画的图可以看出来，当经过函数计算后的值，也就没办法走索引了")]),_._v(" "),v("h5",{attrs:{id:"隐式转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#隐式转换"}},[_._v("#")]),_._v(" 隐式转换")]),_._v(" "),v("p",[_._v("当索引列发生了隐式转换"),v("strong",[_._v("可能会")]),_._v("导致索引失效")]),_._v(" "),v("p",[_._v("举个例子，mysql 规定，当字符串跟数字比较时，会把字符串先转成数字再比较，至于字符串怎么转成数字，mysql 有自己的规则")]),_._v(" "),v("p",[_._v("比如说，当我执行了下面这条 sql 时就会发生隐式转换")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = 9527;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("name 字段是个 varchar 类型，9527，没加引号，是数字，mysql 根据规则会把"),v("code",[_._v("name")]),_._v("字段的值先转换成数字，再与 9527 比较，此时由于"),v("code",[_._v("name")]),_._v("字段发生了转换，所以索引失效了")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsw9P4oibicClPCswFwrD4Yqx482iaw13nwpo0aYoBFIYU3Vg727FZrDo3Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("ALL 说明没走索引，失效了。")]),_._v(" "),v("p",[_._v("但是假设现在对 age 创建一个索引，执行下面这条 sql")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where age = '22';\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("此时 age 索引就不会失效，主要是因为前面说的那句话：")]),_._v(" "),v("p",[_._v("当字符串跟数字比较时，会把字符串先转成数字再比较")]),_._v(" "),v("p",[_._v("于是"),v("code",[_._v("'22'")]),_._v("会被隐式转成数字，之后再跟 age 比较，此时 age 字段并没有发生隐式转换，所以不会失效。")]),_._v(" "),v("p",[_._v("所以说，隐式转换"),v("strong",[_._v("可能会")]),_._v("导致索引失效。")]),_._v(" "),v("h5",{attrs:{id:"mysql-统计数据误差较大"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-统计数据误差较大"}},[_._v("#")]),_._v(" mysql 统计数据误差较大")]),_._v(" "),v("p",[_._v("mysql 统计数据误差较大也可能会导致索引失效，因为前面也说了，mysql 会根据统计数据来计算使用索引的成本，这样一旦统计数据误差较大，那么计算出来的成本误差就大，就可能出现实际走索引的成本小但是计算出来的是走索引的成本大，导致索引失效")]),_._v(" "),v("p",[_._v("当出现这种情况时，可以执行"),v("code",[_._v("analyze table 表名")]),_._v("这条 sql，mysql 就会重新统计这些数据，索引就可以重新生效了")]),_._v(" "),v("h2",{attrs:{id:"索引建立原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引建立原则"}},[_._v("#")]),_._v(" 索引建立原则")]),_._v(" "),v("h4",{attrs:{id:"单个表索引数量不宜过多"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单个表索引数量不宜过多"}},[_._v("#")]),_._v(" 单个表索引数量不宜过多")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("从上面分析我们知道，每个索引都对应一颗 B + 树，并且叶子节点存储了索引列全量的数据，一旦索引数量多，那么就会占有大量磁盘空间")])]),_._v(" "),v("li",[v("p",[_._v("同时前面也提到，在查询之前会对索引成本进行计算，一旦索引多，计算的次数就多，也可能会浪费性能")])])]),_._v(" "),v("h4",{attrs:{id:"经常出现在-where-后的字段应该建立索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#经常出现在-where-后的字段应该建立索引"}},[_._v("#")]),_._v(" 经常出现在 where 后的字段应该建立索引")]),_._v(" "),v("p",[_._v("这个就不用说了，索引就是为了加快速度，如果没有合适索引，就会全表扫描，对于 InnoDB 来说，全表扫描就是从聚簇索引的第一个叶子节点开始，顺着链表一个一个判断数据服不服合查询条件")]),_._v(" "),v("h4",{attrs:{id:"order-by、group-by-后字段可建立索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#order-by、group-by-后字段可建立索引"}},[_._v("#")]),_._v(" order by、group by 后字段可建立索引")]),_._v(" "),v("p",[_._v("比如下面这条 sql")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("select * from `user` where name = '赵六' order by age asc;\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("查询"),v("code",[_._v("name = '赵六'")]),_._v("并且根据"),v("code",[_._v("age")]),_._v("排序，name 和 age 联合索引")]),_._v(" "),v("p",[_._v("你可能记不清索树了，我把那个索引树拿过来")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTsfNKjBY4FMenPN8vFuXqey8PwKSeUH1Ly7dBFlLiao7SR3DqDEVUYl1Q/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("此时对着索引树你可以发现，当"),v("code",[_._v("name = '赵六'")]),_._v("时，"),v("code",[_._v("age")]),_._v("已经排好序了（前面介绍索引的说了排序规则），所以就可以使用"),v("code",[_._v("age")]),_._v("索引列进行排序。")]),_._v(" "),v("h4",{attrs:{id:"频繁更新的字段不宜建索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#频繁更新的字段不宜建索引"}},[_._v("#")]),_._v(" 频繁更新的字段不宜建索引")]),_._v(" "),v("p",[_._v("因为索引需要保证按照索引列的值进行排序，所以一旦索引字段数据频繁更新，那么为了保证索引的顺序，就得频繁挪动索引列在索引页中的位置")]),_._v(" "),v("p",[_._v("比如 name 和 age 联合索引")]),_._v(" "),v("p",[_._v("此时把 id=9 这条数据的 name 从"),v("code",[_._v("王九")]),_._v("改成"),v("code",[_._v("赵六")]),_._v("，那么此时就把这条更改后的数据在索引页上移到王五和 id=4 的赵六之间，因为 name 相同时，得保证顺序性，同时要按照 age 排序，id=9 的 age 为 9，最小，那么排在最前。")]),_._v(" "),v("p",[_._v("所以频繁更新的字段建索引就会增加维护索引的成本。")]),_._v(" "),v("h4",{attrs:{id:"选择区分度高的字段做索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选择区分度高的字段做索引"}},[_._v("#")]),_._v(" 选择区分度高的字段做索引")]),_._v(" "),v("p",[_._v("这个是因为，如果区分度低，那么索引效果不好。")]),_._v(" "),v("p",[_._v("举个例子，假设现在有个性别字段 sex，非男即女，如果对 sex 建索引，假设男排在女之前，那么索引页的数据排列大致如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/B279WL06QYzWib7icY6CN5Rfr7AZibATpTs7XEiaUIpJXHkB0paKicOG6ia8MEONTAS6xHpQMTef6wrxLwlCibfQPs8Tw/640?wx_fmt=png",alt:""}})]),_._v(" "),v("p",[_._v("这里我画了 6 条数据，假设有 10w 条数据那么也是这继续排，男在前，女子在后。")]),_._v(" "),v("p",[_._v("此时如果走 sex 索引，查询 sex = 男的数据，假设男女数据对半，那么就扫描的记录就有 5w，之后如果要回表，那么根据成本计算规则发现成本是巨大的，那么此时还不如直接全表扫描来的痛快。")]),_._v(" "),v("p",[_._v("所以要选择区分度高的字段做索引")]),_._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("到这，本文就结束了，这里回顾一下本文讲的内容")]),_._v(" "),v("p",[_._v("首先主要是讲了聚簇索引和非聚簇索引，随后讲了 MySQL 对于一些常见查询的优化，比如覆盖索引，索引下推，都是为了减少回表次数，从而减少带来的性能消耗，再后面就提到 MySQL 是如何选择索引的，最后介绍了索引失效的场景和索引建立的原则。")]),_._v(" "),v("p",[_._v("最后希望本文对你有所帮助！")]),_._v(" "),v("p",[_._v("最后的最后，表数据 sql 如下")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (1, '李四', 20, '杭州');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (2, '张三', 18, '北京');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (3, '张三', 23, '上海');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (4, '赵六', 22, '杭州');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (5, '王五', 19, '北京');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (6, '赵六', 24, '上海');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (7, '刘七', 20, '上海');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (8, '刘七', 22, '上海');INSERT INTO `user` (`id`, `name`, `age`, `city`) VALUES (9, '王九', 9, '杭州');\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[v("strong",[_._v("参考：")])]),_._v(" "),v("p",[_._v("[1].《MySQL 是怎么样运行的》")]),_._v(" "),v("p",[_._v("[2].https://blog.csdn.net/weixin_44953658/article/details/127878350")])])}),[],!1,null,null,null);v.default=e.exports}}]);