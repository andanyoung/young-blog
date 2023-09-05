(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1058:function(a,t,e){"use strict";e.r(t);var s=e(4),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ERROR org.apache.hadoop.hdfs.server.datanode.DataNode:\nInitialization failed for Block pool <registering>\n(Datanode Uuid 1098277a-8189-4b88-9a9b-31dbb7cdd27f) service to hadoop162/192.168.1.162:8020. Exiting.\njava.io.IOException: All specified directories have failed to load.\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"问题描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[a._v("#")]),a._v(" 问题描述")]),a._v(" "),t("p",[a._v("开机启动集群时，发现有节点的 DataNode 没有启动。")]),a._v(" "),t("p",[a._v("确认配置信息没问题后，观察节点的中的 datanode 日志(配置文件中指定)发现：Initialization failed for Block pool")]),a._v(" "),t("h2",{attrs:{id:"问题分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),t("p",[a._v("在第一次格式化 dfs 后,启动并使用了 hadoop,后来又重新执行了格式化命令（hdfs namenode -format)，这时 NameNode 的 clusterID 会重新生成，而 DataNode 的 clusterID 保持不变。")]),a._v(" "),t("p",[a._v("每次 namenode format 会重新创建一个 namenodeId,而 data 目录包含了上次 format 时的 id，namenode format 清空了 NameNode 下的数据,但是没有清空 datanode 下的数据，导致启动时失败,所要做的就是每次 fotmat 前,清空 data 下的所有目录。")]),a._v(" "),t("h2",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法：")]),a._v(" "),t("h3",{attrs:{id:"方法一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[a._v("#")]),a._v(" 方法一：")]),a._v(" "),t("p",[a._v("停掉集群，删除问题节点的 data 目录下的所有内容。即 hdfs-site.xml 文件中配置的 dfs.data.dir 目录（我的目录：/opt/hadoopdata）。重新格式化 NameNode。")]),a._v(" "),t("h3",{attrs:{id:"方法二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[a._v("#")]),a._v(" 方法二：")]),a._v(" "),t("p",[a._v("停掉集群，然后将出现问题的 DataNode 节点目录/opt/hadoopdata/dfs/data/current/下的 VERSION 中 clusterID 的修改为与 NameNode 中/opt/hadoopdata/dfs/name/current/下的 VERSION 中 clusterID 一致即可。")]),a._v(" "),t("p",[a._v("其实只需要把 data/current/VERSION 中的 clusterID 改为和 name/current/VERSION 中的 clusterID 一致。")])])}),[],!1,null,null,null);t.default=r.exports}}]);