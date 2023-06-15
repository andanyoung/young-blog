(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{438:function(e,a,s){e.exports=s.p+"assets/img/image-20230502102331528.d73028e1.png"},439:function(e,a,s){e.exports=s.p+"assets/img/image-20230502102400518.e56105f7.png"},440:function(e,a,s){e.exports=s.p+"assets/img/image-20230502102419943.e9fc2a62.png"},441:function(e,a,s){e.exports=s.p+"assets/img/image-20230502102436244.ac9c600c.png"},442:function(e,a,s){e.exports=s.p+"assets/img/image-20230502102521083.d78abec3.png"},443:function(e,a,s){e.exports=s.p+"assets/img/image-20230502102804200.fe999327.png"},444:function(e,a,s){e.exports=s.p+"assets/img/image-20230502102915548.5f535b52.png"},445:function(e,a,s){e.exports=s.p+"assets/img/image-20230502103503206.a0aececa.png"},446:function(e,a,s){e.exports=s.p+"assets/img/image-20230502103559888.75a6e906.png"},447:function(e,a,s){e.exports=s.p+"assets/img/image-20230502135527263.1fbb2ac0.png"},448:function(e,a,s){e.exports=s.p+"assets/img/image-20230502140515134.1e2b1b3a.png"},449:function(e,a,s){e.exports=s.p+"assets/img/image-20230502140543624.d228db16.png"},450:function(e,a,s){e.exports=s.p+"assets/img/image-20230502140658970.fdbe7806.png"},451:function(e,a,s){e.exports=s.p+"assets/img/image-20230502141105345.24c7cda0.png"},452:function(e,a,s){e.exports=s.p+"assets/img/image-20230502142039995.ed5a148a.png"},590:function(e,a,s){"use strict";s.r(a);var t=s(4),_=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_1-索引类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引类型"}},[e._v("#")]),e._v(" 1. 索引类型")]),e._v(" "),a("p",[e._v("索引可以提升查询速度，会影响 where 查询，以及 order by 排序。MySQL 索引类型如下：")]),e._v(" "),a("ul",[a("li",[e._v("从索引存储结构划分：B Tree 索引、Hash 索引、FULLTEXT 全文索引、R Tree 索引")]),e._v(" "),a("li",[e._v("从应用层次划分：普通索引、唯一索引、主键索引、复合索引")]),e._v(" "),a("li",[e._v("从索引键值类型划分：主键索引、辅助索引（二级索引）")]),e._v(" "),a("li",[e._v("从数据存储和索引键值逻辑关系划分：聚集索引（聚簇索引）、非聚集索引（非聚簇索引）")])]),e._v(" "),a("h2",{attrs:{id:"_1-1-普通索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-普通索引"}},[e._v("#")]),e._v(" 1.1 普通索引")]),e._v(" "),a("p",[e._v("这是最基本的索引类型，基于普通字段建立的索引，没有任何限制。")]),e._v(" "),a("p",[e._v("创建普通索引的方法如下：")]),e._v(" "),a("ul",[a("li",[e._v("CREATE INDEX <索引的名字> ON tablename (字段名);")]),e._v(" "),a("li",[e._v("ALTER TABLE tablename ADD INDEX [索引的名字] (字段名);")]),e._v(" "),a("li",[e._v("CREATE TABLE tablename ( [...], INDEX [索引的名字] (字段名) );")])]),e._v(" "),a("h2",{attrs:{id:"_1-2-唯一索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-唯一索引"}},[e._v("#")]),e._v(" 1.2 唯一索引")]),e._v(" "),a("p",[e._v('与"普通索引"类似，不同的就是：索引字段的值必须唯一，但允许有空值 。在创建或修改表时追加唯一约束，就会自动创建对应的唯一索引。')]),e._v(" "),a("p",[e._v("创建唯一索引的方法如下：")]),e._v(" "),a("ul",[a("li",[e._v("CREATE UNIQUE INDEX <索引的名字> ON tablename (字段名);")]),e._v(" "),a("li",[e._v("ALTER TABLE tablename ADD UNIQUE INDEX [索引的名字] (字段名);")]),e._v(" "),a("li",[e._v("CREATE TABLE tablename ( [...], UNIQUE [索引的名字] (字段名) ;")])]),e._v(" "),a("h2",{attrs:{id:"_1-3-主键索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-主键索引"}},[e._v("#")]),e._v(" 1.3 主键索引")]),e._v(" "),a("p",[e._v("它是一种特殊的唯一索引，不允许有空值。在创建或修改表时追加主键约束即可，每个表只能有一个主 键。")]),e._v(" "),a("p",[e._v("创建主键索引的方法如下：")]),e._v(" "),a("ul",[a("li",[e._v("CREATE TABLE tablename ( [...], PRIMARY KEY (字段名) );")]),e._v(" "),a("li",[e._v("ALTER TABLE tablename ADD PRIMARY KEY (字段名);")])]),e._v(" "),a("h2",{attrs:{id:"_1-4-复合索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-复合索引"}},[e._v("#")]),e._v(" 1.4 复合索引")]),e._v(" "),a("p",[e._v("单一索引是指索引列为一列的情况，即新建索引的语句只实施在一列上；用户可以在多个列上建立索引，这种索引叫做组复合索引（组合索引）。复合索引可以代替多个单一索引，相比多个单一索引复合索引所需的开销更小。")]),e._v(" "),a("p",[e._v("索引同时有两个概念叫做窄索引和宽索引，窄索引是指索引列为 1-2 列的索引，宽索引也就是索引列超 过 2 列的索引，设计索引的一个重要原则就是能用窄索引不用宽索引，因为窄索引往往比组合索引更有效。")]),e._v(" "),a("p",[e._v("创建组合索引的方法如下：")]),e._v(" "),a("ul",[a("li",[e._v("CREATE INDEX <索引的名字> ON tablename (字段名 1，字段名 2...);")]),e._v(" "),a("li",[e._v("ALTER TABLE tablename ADD INDEX [索引的名字] (字段名 1，字段名 2...);")]),e._v(" "),a("li",[e._v("CREATE TABLE tablename ( [...], INDEX [索引的名字] (字段名 1，字段名 2...) );")])]),e._v(" "),a("p",[e._v("复合索引使用注意事项：")]),e._v(" "),a("ul",[a("li",[e._v("何时使用复合索引，要根据 where 条件建索引，注意不要过多使用索引，过多使用会对更新操作效 率有很大影响。")]),e._v(" "),a("li",[e._v("如果表已经建立了(col1，col2)，就没有必要再单独建立（col1）；如果现在有(col1)索引，如果查询需要 col1 和 col2 条件，可以建立(col1,col2)复合索引，对于查询有一定提高。")])]),e._v(" "),a("h2",{attrs:{id:"_1-5-全文索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-全文索引"}},[e._v("#")]),e._v(" 1.5 全文索引")]),e._v(" "),a("p",[e._v("查询操作在数据量比较少时，可以使用 like 模糊查询，但是对于大量的文本数据检索，效率很低。如果 使用全文索引，查询速度会比 like 快很多倍。在 MySQL 5.6 以前的版本，只有 MyISAM 存储引擎支持全 文索引，从 MySQL 5.6 开始 MyISAM 和 InnoDB 存储引擎均支持。")]),e._v(" "),a("p",[e._v("创建全文索引的方法如下：")]),e._v(" "),a("ul",[a("li",[e._v("CREATE FULLTEXT INDEX <索引的名字> ON tablename (字段名);")]),e._v(" "),a("li",[e._v("ALTER TABLE tablename ADD FULLTEXT [索引的名字] (字段名);")]),e._v(" "),a("li",[e._v("CREATE TABLE tablename ( [...], FULLTEXT KEY [索引的名字] (字段名) ;")])]),e._v(" "),a("p",[e._v("和常用的 like 模糊查询不同，全文索引有自己的语法格式，使用 match 和 against 关键字，比如")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from user where match(name) against('aaa');\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("全文索引使用注意事项：")]),e._v(" "),a("ul",[a("li",[e._v("全文索引必须在字符串、文本字段上建立。")]),e._v(" "),a("li",[e._v("全文索引字段值必须在最小字符和最大字符之间的才会有效。（innodb：3-84；myisam：4- 84）")]),e._v(" "),a("li",[e._v("全文索引字段值要进行切词处理，按 syntax 字符进行切割，例如 b+aaa，切分成 b 和 aaa 全文索引匹配查询，")]),e._v(" "),a("li",[e._v("默认使用的是等值匹配，例如 a 匹配 a，不会匹配 ab,ac。如果想匹配可以在布尔模式下搜索 a*")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from user where match(name) against('a*' in boolean mode);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h1",{attrs:{id:"_2-索引原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-索引原理"}},[e._v("#")]),e._v(" 2. 索引原理")]),e._v(" "),a("p",[e._v("MySQL 官方对索引定义：是存储引擎用于快速查找记录的一种数据结构。需要额外开辟空间和数据维护工作。")]),e._v(" "),a("p",[e._v("索引是物理数据页存储，在数据文件中（InnoDB，ibd 文件），利用数据页(page)存储。 索引可以加快检索速度，但是同时也会降低增删改操作速度，索引维护需要代价。 索引涉及的理论知识：二分查找法、Hash 和 B+Tree。")]),e._v(" "),a("h2",{attrs:{id:"_2-1-二分查找法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-二分查找法"}},[e._v("#")]),e._v(" 2.1 二分查找法")]),e._v(" "),a("p",[e._v("二分查找法也叫作折半查找法，它是在有序数组中查找指定数据的搜索算法。它的优点是等值查询、范围查询性能优秀，缺点是更新数据、新增数据、删除数据维护成本高。")]),e._v(" "),a("ul",[a("li",[e._v("首先定位 left 和 right 两个指针")]),e._v(" "),a("li",[e._v("计算(left+right)/2")]),e._v(" "),a("li",[e._v("判断除 2 后索引位置值与目标值的大小比对")]),e._v(" "),a("li",[e._v("索引位置值大于目标值就-1，right 移动；如果小于目标值就+1，left 移动")])]),e._v(" "),a("p",[e._v("举个例子，下面的有序数组有 17 个值，查找的目标值是 7，过程如下：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("第一次查找")]),e._v(" "),a("p",[a("img",{attrs:{src:s(438),alt:"image-20230502102331528"}})])]),e._v(" "),a("li",[a("p",[e._v("第二次查找")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(439),alt:"image-20230502102400518"}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("第三次查找")]),e._v(" "),a("p",[a("img",{attrs:{src:s(440),alt:"image-20230502102419943"}})])]),e._v(" "),a("li",[a("p",[e._v("第四次查找")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(441),alt:"image-20230502102436244"}})]),e._v(" "),a("h2",{attrs:{id:"_2-2-hash-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-hash-结构"}},[e._v("#")]),e._v(" 2.2 Hash 结构")]),e._v(" "),a("p",[e._v("Hash 底层实现是由 Hash 表来实现的，是根据键值 存储数据的结构。非常适合根据 key 查找 value 值，也就是单个 key 查询，或者说等值查询。其结构如下所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:s(442),alt:"image-20230502102521083"}})]),e._v(" "),a("p",[e._v("从上面结构可以看出，Hash 索引可以方便的提供等值查询，但是对于范围查询就需要全表扫描了。 Hash 索引在 MySQL 中 Hash 结构主要应用在 Memory 原生的 Hash 索引 、InnoDB 自适应哈希索引。")]),e._v(" "),a("p",[e._v("InnoDB 提供的自适应哈希索引功能强大，接下来重点描述下 InnoDB 自适应哈希索引。 InnoDB 自适应哈希索引是为了提升查询效率，InnoDB 存储引擎会监控表上各个索引页的查询，当 InnoDB 注意到某些索引值访问非常频繁时，会在内存中基于 B+Tree 索引再创建一个哈希索引，使得内存中的 B+Tree 索引具备哈希索引的功能，即能够快速定值访问频繁访问的索引页。")]),e._v(" "),a("p",[e._v("InnoDB 自适应哈希索引：在使用 Hash 索引访问时，一次性查找就能定位数据，等值查询效率要优于 B+Tree。 自适应哈希索引的建立使得 InnoDB 存储引擎能自动根据索引页访问的频率和模式自动地为某些热点页 建立哈希索引来加速访问。另外 InnoDB 自适应哈希索引的功能，用户只能选择开启或关闭功能，无法进行人工干涉。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("show engine innodb status \\G;\nshow variables like '%innodb_adaptive%';\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-3-b-tree-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-b-tree-结构"}},[e._v("#")]),e._v(" 2.3 B+Tree 结构")]),e._v(" "),a("p",[e._v("MySQL 数据库索引采用的是 B+Tree 结构，在 B-Tree 结构上做了优化改造。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("B-Tree 结构")]),e._v(" "),a("ul",[a("li",[e._v("索引值和 data 数据分布在整棵树结构中")]),e._v(" "),a("li",[e._v("每个节点可以存放多个索引值及对应的 data 数据")]),e._v(" "),a("li",[e._v("树节点中的多个索引值从左到右升序排列")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(443),alt:"image-20230502102804200"}})])])]),e._v(" "),a("p",[e._v("B 树的搜索：从根节点开始，对节点内的索引值序列采用二分法查找，如果命中就结束查找。没有 命中会进入子节点重复查找过程，直到所对应的的节点指针为空，或已经是叶子节点了才结束。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("B+Tree 结构")]),e._v(" "),a("ul",[a("li",[e._v("非叶子节点不存储 data 数据，只存储索引值，这样便于存储更多的索引值")]),e._v(" "),a("li",[e._v("叶子节点包含了所有的索引值和 data 数据")]),e._v(" "),a("li",[e._v("叶子节点用指针连接，提高区间的访问性能")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(444),alt:"image-20230502102915548"}})]),e._v(" "),a("p",[e._v("相比 B 树，B+树进行范围查找时，只需要查找定位两个节点的索引值，然后利用叶子节点的指针进 行遍历即可。而 B 树需要遍历范围内所有的节点和数据，显然 B+Tree 效率高。")])])]),e._v(" "),a("h2",{attrs:{id:"_2-4-聚簇索引和辅助索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-聚簇索引和辅助索引"}},[e._v("#")]),e._v(" 2.4 聚簇索引和辅助索引")]),e._v(" "),a("p",[e._v("聚簇索引和非聚簇索引：B+Tree 的叶子节点存放主键索引值和行记录就属于聚簇索引；如果索引值和行记录分开存放就属于非聚簇索引。")]),e._v(" "),a("p",[e._v("主键索引和辅助索引：B+Tree 的叶子节点存放的是主键字段值就属于主键索引；如果存放的是非主键值就属于辅助索引（二级索引）。")]),e._v(" "),a("p",[e._v("在 InnoDB 引擎中，主键索引采用的就是聚簇索引结构存储。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("聚簇索引（聚集索引）")]),e._v(" "),a("p",[e._v("聚簇索引是一种数据存储方式，InnoDB 的聚簇索引就是按照主键顺序构建 B+Tree 结构。B+Tree 的叶子节点就是行记录，行记录和主键值紧凑地存储在一起。 这也意味着 InnoDB 的主键索引就是数据表本身，它按主键顺序存放了整张表的数据，占用的空间就是整个表数据量的大小。通常说的"),a("strong",[e._v("主键索引")]),e._v("就是聚集索引。")]),e._v(" "),a("p",[e._v("InnoDB 的表要求必须要有聚簇索引：")]),e._v(" "),a("ul",[a("li",[e._v("如果表定义了主键，则主键索引就是聚簇索引")]),e._v(" "),a("li",[e._v("如果表没有定义主键，则第一个非空 unique 列作为聚簇索引")]),e._v(" "),a("li",[e._v("否则 InnoDB 会从建一个隐藏的 row-id 作为聚簇索引")])])]),e._v(" "),a("li",[a("p",[e._v("辅助索引")]),e._v(" "),a("p",[e._v("InnoDB 辅助索引，也叫作二级索引，是根据索引列构建 B+Tree 结构。但在 B+Tree 的叶子节点中只存了索引列和主键的信息。二级索引占用的空间会比聚簇索引小很多， 通常创建辅助索引就是为了提升查询效率。一个表 InnoDB 只能创建一个聚簇索引，但可以创建多个辅助索引。")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(445),alt:"image-20230502103503206"}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("非聚簇索引")]),e._v(" "),a("p",[e._v("与 InnoDB 表存储不同，MyISAM 数据表的索引文件和数据文件是分开的，被称为非聚簇索引结构。")]),e._v(" "),a("p",[a("img",{attrs:{src:s(446),alt:"image-20230502103559888"}})])])]),e._v(" "),a("h1",{attrs:{id:"_3-索引分析与优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引分析与优化"}},[e._v("#")]),e._v(" 3. 索引分析与优化")]),e._v(" "),a("h2",{attrs:{id:"_3-1-explain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-explain"}},[e._v("#")]),e._v(" 3.1 EXPLAIN")]),e._v(" "),a("p",[e._v("MySQL 提供了一个 EXPLAIN 命令，它可以对 SELECT 语句进行分析，并输出 SELECT 执行的详细信息，供开发人员有针对性的优化。例如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXPLAIN SELECT * from user WHERE id < 3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("EXPLAIN 命令的输出内容大致如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:s(447),alt:"image-20230502135527263"}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("select_type")]),e._v(" "),a("p",[e._v("表示查询的类型。常用的值如下：")]),e._v(" "),a("ul",[a("li",[e._v("SIMPLE ： 表示查询语句不包含子查询或 union")]),e._v(" "),a("li",[e._v("PRIMARY：表示此查询是最外层的查询")]),e._v(" "),a("li",[e._v("UNION：表示此查询是 UNION 的第二个或后续的查询")]),e._v(" "),a("li",[e._v("DEPENDENT UNION：UNION 中的第二个或后续的查询语句，使用了外面查询结果")]),e._v(" "),a("li",[e._v("UNION RESULT：UNION 的结果")]),e._v(" "),a("li",[e._v("SUBQUERY：SELECT 子查询语句")]),e._v(" "),a("li",[e._v("DEPENDENT SUBQUERY：SELECT 子查询语句依赖外层查询的结果。")])]),e._v(" "),a("p",[e._v("最常见的查询类型是 SIMPLE，表示我们的查询没有子查询也没用到 UNION 查询。")])]),e._v(" "),a("li",[a("p",[e._v("type")]),e._v(" "),a("p",[e._v("表示存储引擎查询数据时采用的方式。比较重要的一个属性，通过它可以判断出查询是全表扫描还是基于索引的部分扫描。常用属性值如下，从上至下效率依次增强。")]),e._v(" "),a("ul",[a("li",[e._v("ALL：表示全表扫描，性能最差。")]),e._v(" "),a("li",[e._v("index：表示基于索引的全表扫描，先扫描索引再扫描全表数据。")]),e._v(" "),a("li",[e._v("range：表示使用索引范围查询。使用>、>=、<、<=、in 等等。")]),e._v(" "),a("li",[e._v("ref：表示使用非唯一索引进行单值查询。")]),e._v(" "),a("li",[e._v("eq_ref：一般情况下出现在多表 join 查询，表示前面表的每一个记录，都只能匹配后面表的一行结果。")]),e._v(" "),a("li",[e._v("const：表示使用主键或唯一索引做等值查询，常量查询。")]),e._v(" "),a("li",[e._v("NULL：表示不用访问表，速度最快。")])])]),e._v(" "),a("li",[a("p",[e._v("possible_keys")]),e._v(" "),a("p",[e._v("表示查询时能够使用到的索引。注意并不一定会真正使用，显示的是索引名称。")])]),e._v(" "),a("li",[a("p",[e._v("key")]),e._v(" "),a("p",[e._v("表示查询时真正使用到的索引，显示的是索引名称。")])]),e._v(" "),a("li",[a("p",[e._v("rows")]),e._v(" "),a("p",[e._v("MySQL 查询优化器会根据统计信息，估算 SQL 要查询到结果需要扫描多少行记录。原则上 rows 是越少效率越高，可以直观的了解到 SQL 效率高低。")])]),e._v(" "),a("li",[a("p",[e._v("key_len")]),e._v(" "),a("p",[e._v("表示查询使用了索引的字节数量。可以判断是否全部使用了组合索引。")]),e._v(" "),a("p",[e._v("key_len 的计算规则如下：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("字符串类型")]),e._v(" "),a("p",[e._v("字符串长度跟字符集有关：latin1=1、gbk=2、utf8=3、utf8mb4=4")]),e._v(" "),a("p",[e._v("char(n)：n*字符集长度")]),e._v(" "),a("p",[e._v("varchar(n)：n * 字符集长度 + 2 字节")])]),e._v(" "),a("li",[a("p",[e._v("数值类型")]),e._v(" "),a("p",[e._v("TINYINT：1 个字节")]),e._v(" "),a("p",[e._v("SMALLINT：2 个字节")]),e._v(" "),a("p",[e._v("MEDIUMINT：3 个字节")]),e._v(" "),a("p",[e._v("INT、FLOAT：4 个字节")]),e._v(" "),a("p",[e._v("BIGINT、DOUBLE：8 个字节")])]),e._v(" "),a("li",[a("p",[e._v("时间类型")]),e._v(" "),a("p",[e._v("DATE：3 个字节")]),e._v(" "),a("p",[e._v("TIMESTAMP：4 个字节")]),e._v(" "),a("p",[e._v("DATETIME：8 个字节")])]),e._v(" "),a("li",[a("p",[e._v("字段属性")]),e._v(" "),a("p",[e._v("NULL 属性占用 1 个字节，如果一个字段设置了 NOT NULL，则没有此项。")])])])]),e._v(" "),a("li",[a("p",[e._v("Extra")]),e._v(" "),a("p",[e._v("Extra 表示很多额外的信息，各种操作会在 Extra 提示相关信息，常见几种如下：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Using where")]),e._v(" "),a("p",[e._v("表示查询需要通过索引回表查询数据。")])]),e._v(" "),a("li",[a("p",[e._v("Using index")]),e._v(" "),a("p",[e._v("表示查询需要通过索引，索引就可以满足所需数据。")])]),e._v(" "),a("li",[a("p",[e._v("Using index condition\nMySQL5.6 之后新增的 ICP，using index condtion 就是使用了 ICP（索引下推），在存储引擎层进行数据过滤，而不是在服务层过滤，利用索引现有的数据减少回表的数据。")])]),e._v(" "),a("li",[a("p",[e._v("Using filesort")]),e._v(" "),a("p",[e._v("表示查询出来的结果需要额外排序，数据量小在内存，大的话在磁盘，因此有 Using filesort 建议优化。")])]),e._v(" "),a("li",[a("p",[e._v("Using temprorary")]),e._v(" "),a("p",[e._v("查询使用到了临时表，一般出现于去重、分组等操作。性能特别差，需要重点优化；")])]),e._v(" "),a("li",[a("p",[e._v("Using join buffer\n在我们联表查询的时候，如果表的连接条件没有用到索引，需要有一个连接缓冲区来存储中间结果。")])])])])]),e._v(" "),a("h2",{attrs:{id:"_3-2-回表查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-回表查询"}},[e._v("#")]),e._v(" 3.2 回表查询")]),e._v(" "),a("p",[e._v("在之前介绍过，InnoDB 索引有聚簇索引和辅助索引。聚簇索引的叶子节点存储行记录，InnoDB 必须要有，且只有一个。辅助索引的叶子节点存储的是主键值和索引字段值，通过辅助索引无法直接定位行记录，通常情况下，需要扫码两遍索引树。先通过辅助索引定位主键值，然后再通过聚簇索引定位行记录，这就叫做回表查询，它的性能比扫一遍索引树低。")]),e._v(" "),a("p",[e._v("总结：通过索引查询主键值，然后再去聚簇索引查询记录信息")]),e._v(" "),a("h2",{attrs:{id:"_3-3-覆盖索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-覆盖索引"}},[e._v("#")]),e._v(" 3.3 覆盖索引")]),e._v(" "),a("p",[e._v("在 SQL-Server 官网的介绍如下")]),e._v(" "),a("p",[a("img",{attrs:{src:s(448),alt:"image-20230502140515134"}})]),e._v(" "),a("p",[e._v("在 MySQL 官网，类似的说法出现在 explain 查询计划优化章节，即 explain 的输出结果 Extra 字段为 Using index 时，能够触发索引覆盖。")]),e._v(" "),a("p",[a("img",{attrs:{src:s(449),alt:"image-20230502140543624"}})]),e._v(" "),a("p",[e._v("不管是 SQL-Server 官网，还是 MySQL 官网，都表达了："),a("strong",[e._v("只需要在一棵索引树上就能获取 SQL 所需的所 有列数据，无需回表，速度更快，这就叫做索引覆盖。")])]),e._v(" "),a("p",[e._v("实现索引覆盖最常见的方法就是：将被查询的字段，建立到组合索引。")]),e._v(" "),a("h2",{attrs:{id:"_3-4-最左前缀原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-最左前缀原则"}},[e._v("#")]),e._v(" 3.4 最左前缀原则")]),e._v(" "),a("p",[e._v("复合索引使用时遵循最左前缀原则，最左前缀顾名思义，就是最左优先，即查询中使用到最左边的列， 那么查询就会使用到索引，如果从索引的第二列开始查找，索引将失效")]),e._v(" "),a("p",[a("img",{attrs:{src:s(450),alt:"image-20230502140658970"}})]),e._v(" "),a("h2",{attrs:{id:"_3-5-like-查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-like-查询"}},[e._v("#")]),e._v(" 3.5 LIKE 查询")]),e._v(" "),a("p",[a("strong",[e._v("面试题：MySQL 在使用 like 模糊查询时，索引能不能起作用？")])]),e._v(" "),a("p",[e._v("回答：MySQL 在使用 Like 模糊查询时，索引是可以被使用的，只有把%字符写在后面才会使用到索引。")]),e._v(" "),a("p",[e._v("select * from user where name like '%o%'; //不起作用")]),e._v(" "),a("p",[e._v("select * from user where name like 'o%'; //起作用")]),e._v(" "),a("p",[e._v("select * from user where name like '%o'; //不起作用")]),e._v(" "),a("h2",{attrs:{id:"_3-6-null-查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-null-查询"}},[e._v("#")]),e._v(" 3.6 NULL 查询")]),e._v(" "),a("p",[a("strong",[e._v("面试题：如果 MySQL 表的某一列含有 NULL 值，那么包含该列的索引是否有效？")])]),e._v(" "),a("p",[e._v("对 MySQL 来说，NULL 是一个特殊的值，从概念上讲，NULL 意味着“一个未知值”，它的处理方式与其他值有些不同。比如：不能使用=，<，>这样的运算符，对 NULL 做算术运算的结果都是 NULL，count 时不会包括 NULL 行等，NULL 比空字符串需要更多的存储空间等。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("“NULL columns require additional space in the row to record whether their values\nare NULL. For MyISAM tables, each NULL column takes one bit extra, rounded up to\nthe nearest byte.”\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("NULL 列需要增加额外空间来记录其值是否为 NULL。对于 MyISAM 表，每一个空列额外占用一位，四舍五入到最接近的字节。")]),e._v(" "),a("p",[a("img",{attrs:{src:s(451),alt:"image-20230502141105345"}})]),e._v(" "),a("p",[e._v("虽然 MySQL 可以在含有 NULL 的列上使用索引，但 NULL 和其他数据还是有区别的，不建议列上允许为 NULL。最好设置 NOT NULL，并给一个默认值，比如 0 和 ‘’ 空字符串等，如果是 datetime 类型，也可以 设置系统当前时间或某个固定的特殊值，例如'1970-01-01 00:00:00'。")]),e._v(" "),a("h2",{attrs:{id:"_3-7-索引与排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-索引与排序"}},[e._v("#")]),e._v(" 3.7 索引与排序")]),e._v(" "),a("p",[e._v("MySQL 查询支持 filesort 和 index 两种方式的排序，filesort 是先把结果查出，然后在缓存或磁盘进行排序操作，效率较低。使用 index 是指利用索引自动实现排序，不需另做排序操作，效率会比较高。")]),e._v(" "),a("p",[e._v("filesort 有两种排序算法：双路排序和单路排序。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("双路排序：需要两次磁盘扫描读取，最终得到用户数据。第一次将排序字段读取出来，然后排序；第二次去读取其他字段数据。")])]),e._v(" "),a("li",[a("p",[e._v("单路排序：从磁盘查询所需的所有列数据，然后在内存排序将结果返回。如果查询数据超出缓存 sort_buffer，会导致多次磁盘读取操作，并创建临时表，最后产生了多次 IO，反而会增加负担。解决方案：少使用 select *；增加 sort_buffer_size 容量和 max_length_for_sort_data 容量。")])])]),e._v(" "),a("p",[e._v("如果我们 Explain 分析 SQL，结果中 Extra 属性显示 Using filesort，表示使用了 filesort 排序方式，需要优 化。如果 Extra 属性显示 Using index 时，表示覆盖索引，也表示所有操作在索引上完成，也可以使用 index 排序方式，建议大家尽可能采用覆盖索引。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("以下几种情况，会使用 index 方式的排序。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("ORDER BY 子句索引列组合满足索引最左前列")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user order by id; //对应(id)、(id,name)索引有效\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("WHERE 子句+ORDER BY 子句索引列组合满足索引最左前列")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user where age=18 order by name; //对应\n(age,name)索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])])])]),e._v(" "),a("li",[a("p",[e._v("以下几种情况，会使用 filesort 方式的排序。")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("对索引列同时使用了 ASC 和 DESC")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user order by age asc,name desc; //对应\n(age,name)索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("WHERE 子句和 ORDER BY 子句满足最左前缀，但 where 子句使用了范围查询（例如>、<、in 等）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user where age>10 order by name; //对应\n(age,name)索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("ORDER BY 或者 WHERE+ORDER BY 索引列没有满足索引最左前列")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user order by name; //对应(age,name)索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("使用了不同的索引，MySQL"),a("strong",[e._v("每次只采用一个索引")]),e._v("，ORDER BY 涉及了两个索引")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user order by name,age; //对应(name)、(age)两个索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("WHERE 子句与 ORDER BY 子句，使用了不同的索引")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user where name='tom' order by age; //对应\n(name)、(age)索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("WHERE 子句或者 ORDER BY 子句中索引列使用了表达式，包括函数表达式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explain select id from user order by abs(age); //对应(age)索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])])])]),e._v(" "),a("h1",{attrs:{id:"_4-查询优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查询优化"}},[e._v("#")]),e._v(" 4. 查询优化")]),e._v(" "),a("h2",{attrs:{id:"_4-1-慢查询定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-慢查询定位"}},[e._v("#")]),e._v(" 4.1 慢查询定位")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("开启慢查询日志")]),e._v(" "),a("p",[e._v("查看 MySQL 数据库是否开启了慢查询日志和慢查询日志文件的存储位置的命令如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SHOW VARIABLES LIKE 'slow_query_log%'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通过如下命令开启慢查询日志：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SET global slow_query_log = ON;\nSET global slow_query_log_file = 'OAK-slow.log';\nSET global log_queries_not_using_indexes = ON;\nSET long_query_time = 10;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ul",[a("li",[e._v("long_query_time：指定慢查询的阀值，单位秒。如果 SQL 执行时间超过阀值，就属于慢查询 记录到日志文件中。")]),e._v(" "),a("li",[e._v("log_queries_not_using_indexes：表示会记录没有使用索引的查询 SQL。前提是 slow_query_log 的值为 ON，否则不会奏效。")])])]),e._v(" "),a("li",[a("p",[e._v("查看慢查询日志")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("文本方式查看")]),e._v(" "),a("p",[e._v("直接使用文本编辑器打开 slow.log 日志即可。")]),e._v(" "),a("p",[a("img",{attrs:{src:s(452),alt:"image-20230502142039995"}})]),e._v(" "),a("ul",[a("li",[e._v("time：日志记录的时间")]),e._v(" "),a("li",[e._v("User@Host：执行的用户及主机")]),e._v(" "),a("li",[e._v("Query_time：执行的时间")]),e._v(" "),a("li",[e._v("Lock_time：锁表时间")]),e._v(" "),a("li",[e._v("Rows_sent：发送给请求方的记录数，结果数量")]),e._v(" "),a("li",[e._v("Rows_examined：语句扫描的记录条数")]),e._v(" "),a("li",[e._v("SET timestamp：语句执行的时间点")]),e._v(" "),a("li",[e._v("select....：执行的具体的 SQL 语句")])])]),e._v(" "),a("li",[a("p",[e._v("使用 mysqldumpslow 查看")]),e._v(" "),a("p",[e._v("MySQL 提供了一个慢查询日志分析工具 mysqldumpslow，可以通过该工具分析慢查询日志内容。")]),e._v(" "),a("p",[e._v("在 MySQL bin 目录下执行下面命令可以查看该使用格式。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perl mysqldumpslow.pl --help\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("运行如下命令查看慢查询日志信息：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perl mysqldumpslow.pl -t 5 -s at C:\\ProgramData\\MySQL\\Data\\OAK-slow.log\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("除了使用 mysqldumpslow 工具，也可以使用第三方分析工具，比如 pt-query-digest、 mysqlsla 等。")])])])])]),e._v(" "),a("h2",{attrs:{id:"_4-2-慢查询优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-慢查询优化"}},[e._v("#")]),e._v(" 4.2 慢查询优化")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("索引和慢查询")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("如何判断是否为慢查询？")]),e._v(" "),a("p",[e._v("MySQL 判断一条语句是否为慢查询语句，主要依据 SQL 语句的执行时间，它把当前语句的执行时间跟 long_query_time 参数做比较，如果语句的执行时间 > long_query_time，就会把这条执行语句记录到慢查询日志里面。long_query_time 参数的默认值是 10s，该参数值可以根据自己的业务需要进行调整。")])]),e._v(" "),a("li",[a("p",[e._v("如何判断是否应用了索引？")]),e._v(" "),a("p",[e._v("SQL 语句是否使用了索引，可根据 SQL 语句执行过程中有没有用到表的索引，可通过 explain 命令分析查看，检查结果中的 key 值，是否为 NULL。")])]),e._v(" "),a("li",[a("p",[e._v("应用了索引是否一定快？")]),e._v(" "),a("p",[e._v("下面我们来看看下面语句的 explain 的结果，你觉得这条语句有用上索引吗？比如")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from user where id>0;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("虽然使用了索引，但是还是从主键索引的最左边的叶节点开始向右扫描整个索引树，进行了全表扫描，此时索引就失去了意义。")]),e._v(" "),a("p",[e._v("而像 select * from user where id = 2; 这样的语句，才是我们平时说的使用了索引。它表示的意思是，我们使用了索引的快速搜索功能，并且有效地减少了扫描行数。")])])])])]),e._v(" "),a("p",[e._v("查询是否使用索引，只是表示一个 SQL 语句的执行过程；而是否为慢查询，是由它执行的时间决定的，也就是说是否使用了索引和是否是慢查询两者之间没有必然的联系。")]),e._v(" "),a("p",[e._v("我们在使用索引时，不要只关注是否起作用，应该关心索引是否减少了查询扫描的数据行数，如果扫描行数减少了，效率才会得到提升。对于一个大表，不止要创建索引，还要考虑索引过滤性，过滤性好，执行速度才会快。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("提高索引过滤性")]),e._v(" "),a("p",[e._v("假如有一个 5000 万记录的用户表，通过 sex='男'索引过滤后，还需要定位 3000 万，SQL 执行速度也 不会很快。其实这个问题涉及到索引的过滤性，比如 1 万条记录利用索引过滤后定位 10 条、100 条、1000 条，那他们过滤性是不同的。索引过滤性与索引字段、表的数据量、表设计结构都有关 系。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("下面我们看一个案例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("表：student\n字段：id,name,sex,age\n造数据：insert into student (name,sex,age) select name,sex,age from student;\nSQL案例：select * from student where age=18 and name like '张%';（全表扫描）\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("优化 1")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("alter table student add index(name); //追加name索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("优化 2")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("alter table student add index(age,name); //追加age,name索引\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[e._v("优化 3")]),e._v(" "),a("p",[e._v("可以看到，index condition pushdown 优化的效果还是很不错的。再进一步优化，我们可以把名 字的第一个字和年龄做一个联合索引，这里可以使用 MySQL 5.7 引入的虚拟列来实现。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//为user表添加first_name虚拟列，以及联合索引(first_name,age)\nalter table student add first_name varchar(2) generated always as\n(left(name, 1)), add index(first_name, age);\nexplain select * from student where first_name='张' and age=18;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])])])])]),e._v(" "),a("h3",{attrs:{id:"慢查询原因总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢查询原因总结"}},[e._v("#")]),e._v(" 慢查询原因总结")]),e._v(" "),a("ul",[a("li",[e._v("全表扫描：explain 分析 type 属性 all")]),e._v(" "),a("li",[e._v("全索引扫描：explain 分析 type 属性 index")]),e._v(" "),a("li",[e._v("索引过滤性不好：靠索引字段选型、数据量和状态、表设计")]),e._v(" "),a("li",[e._v("频繁的回表查询开销：尽量少用 select *，使用覆盖索引")])]),e._v(" "),a("h2",{attrs:{id:"_4-3-分页查询优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-分页查询优化"}},[e._v("#")]),e._v(" 4.3 分页查询优化")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("一般性分页")]),e._v(" "),a("p",[e._v("一般的分页查询使用简单的 limit 子句就可以实现。limit 格式如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * FROM 表名 LIMIT [offset,] rows\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("第一个参数指定第一个返回记录行的偏移量，注意从 0 开始；")]),e._v(" "),a("li",[e._v("第二个参数指定返回记录行的最大数目；")]),e._v(" "),a("li",[e._v("如果只给定一个参数，它表示返回最大的记录行数目；")])])])]),e._v(" "),a("p",[a("strong",[e._v("思考 1：如果偏移量固定，返回记录量对执行时间有什么影响？")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from user limit 10000,1;\nselect * from user limit 10000,10;\nselect * from user limit 10000,100;\nselect * from user limit 10000,1000;\nselect * from user limit 10000,10000;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("结果：在查询记录时，返回记录量低于 100 条，查询时间基本没有变化，差距不大。随着查询记录量越大，所花费的时间也会越来越多。")]),e._v(" "),a("p",[a("strong",[e._v("思考 2：如果查询偏移量变化，返回记录数固定对执行时间有什么影响？")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from user limit 1,100;\nselect * from user limit 10,100;\nselect * from user limit 100,100;\nselect * from user limit 1000,100;\nselect * from user limit 10000,100;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("结果：在查询记录时，如果查询记录量相同，偏移量超过 100 后就开始随着偏移量增大，查询时间 急剧的增加。（这种分页查询机制，每次都会从数据库第一条记录开始扫描，越往后查询越慢，而 且查询的数据越多，也会拖慢总查询速度。）")]),e._v(" "),a("h3",{attrs:{id:"分页优化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页优化方案"}},[e._v("#")]),e._v(" 分页优化方案")]),e._v(" "),a("p",[e._v("第一步：利用覆盖索引优化")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from user limit 10000,100;\nselect id from user limit 10000,100;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("第二步：利用子查询优化")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from user limit 10000,100;\nselect * from user where id>= (select id from user limit 10000,1) limit 100;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("原因：使用了 id 做主键比较(id>=)，并且子查询使用了覆盖索引进行优化。")]),e._v(" "),a("h1",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/124859896",target:"_blank",rel:"noopener noreferrer"}},[e._v("索引很难么？带你从头到尾捋一遍 MySQL 索引结构，不信你学不会"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/122333014",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里规范说 MySQL 单表行数不要超过 2000w，为啥?"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/126094568",target:"_blank",rel:"noopener noreferrer"}},[e._v("InnoDB 原理篇：聊聊数据页变成索引这件事"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/123897779",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL 索引底层：B+树详解"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/107026646",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL 优化必经之路， Explain 执行计划 ？"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/agonie201218/article/details/106882132",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL IN、Exist 关联查询时，我们为什么建议小表驱动大表？"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/124880017",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入分析 mysql 为什么不推荐使用 uuid 或者雪花 id 作为主键"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);