(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1091:function(t,_,v){"use strict";v.r(_);var e=v(4),r=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("a",{attrs:{href:"https://xiaolincoding.com/mysql/",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 MySQL 介绍"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("https://xiaolincoding.com/mysql/index/index_interview.html#%E6%8C%89%E5%AD%97%E6%AE%B5%E4%B8%AA%E6%95%B0%E5%88%86%E7%B1%BB")]),t._v(" "),_("blockquote",[_("p",[t._v("联合索引\n索引下推")])]),t._v(" "),_("h2",{attrs:{id:"什么时候需要-不需要创建索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么时候需要-不需要创建索引"}},[t._v("#")]),t._v(" 什么时候需要 / 不需要创建索引？")]),t._v(" "),_("p",[t._v("索引最大的好处是提高查询速度，但是索引也是有缺点的，比如：")]),t._v(" "),_("ul",[_("li",[t._v("需要占用物理空间，数量越大，占用空间越大；")]),t._v(" "),_("li",[t._v("创建索引和维护索引要耗费时间，这种时间随着数据量的增加而增大；")]),t._v(" "),_("li",[t._v("会降低表的增删改的效率，因为每次增删改索引，B+ 树为了维护索引有序性，都需要进行动态维护。\n所以，索引不是万能钥匙，它也是根据场景来使用的。")])]),t._v(" "),_("h2",{attrs:{id:"什么时候适用索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么时候适用索引"}},[t._v("#")]),t._v(" 什么时候适用索引？")]),t._v(" "),_("ul",[_("li",[t._v("字段有唯一性限制的，比如商品编码；")]),t._v(" "),_("li",[t._v("经常用于 WHERE 查询条件的字段，这样能够提高整个表的查询速度，如果查询条件不是一个字段，可以建立联合索引。")]),t._v(" "),_("li",[t._v("经常用于 GROUP BY 和 ORDER BY 的字段，这样在查询的时候就不需要再去做一次排序了，因为我们都已经知道了建立索引之后在 B+Tree 中的记录都是排序好的。")])]),t._v(" "),_("h1",{attrs:{id:"什么时候不需要创建索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么时候不需要创建索引"}},[t._v("#")]),t._v(" 什么时候不需要创建索引？")]),t._v(" "),_("ul",[_("li",[t._v("WHERE 条件，GROUP BY，ORDER BY 里用不到的字段，索引的价值是快速定位，如果起不到定位的字段通常是不需要创建索引的，因为索引是会占用物理空间的。")]),t._v(" "),_("li",[t._v("字段中存在大量重复数据，不需要创建索引，比如性别字段，只有男女，如果数据库表中，男女的记录分布均匀，那么无论搜索哪个值都可能得到一半的数据。在这些情况下，还不如不要索引，因为 MySQL 还有一个查询优化器，查询优化器发现某个值出现在表的数据行中的百分比很高的时候，它一般会忽略索引，进行全表扫描。")]),t._v(" "),_("li",[t._v("表数据太少的时候，不需要创建索引；")]),t._v(" "),_("li",[t._v("经常更新的字段不用创建索引，比如不要对电商项目的用户余额建立索引，因为索引字段频繁修改，由于要维护 B+Tree 的有序性，那么就需要频繁的重建索引，这个过程是会影响数据库性能的。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);