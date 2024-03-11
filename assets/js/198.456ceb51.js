(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1521:function(e,a,r){"use strict";r.r(a);var t=r(4),s=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_1-beeline-建表建库权限问题导致的报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-beeline-建表建库权限问题导致的报错"}},[e._v("#")]),e._v(" 1. beeline 建表建库权限问题导致的报错")]),e._v(" "),a("h2",{attrs:{id:"报错详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错详情"}},[e._v("#")]),e._v(" 报错详情：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ERROR : FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. MetaException(message:Got exception: org.apache.hadoop.security.AccessControlException Permission denied: user=node1, access=WRITE, inode="/user":root:supergroup:drwxr-xr-x\n\tat org.apache.hadoop.hdfs.server.namenode.FSPermissionChecker.check(FSPermissionChecker.java:399)\n\tat org.apache.hadoop.hdfs.server.namenode.FSPermissionChecker.checkPermission(FSPermissionChecker.java:255)\n\tat org.apache.hadoop.hdfs.server.namenode.FSPermissionChecker.checkPermission(FSPermissionChecker.java:193)\n\tat org.apache.hadoop.hdfs.server.namenode.FSDirectory.checkPermission(FSDirectory.java:1852)\n\tat org.apache.hadoop.hdfs.server.namenode.FSDirectory.checkPermission(FSDirectory.java:1836)\n\tat org.apache.hadoop.hdfs.server.namenode.FSDirectory.checkAncestorAccess(FSDirectory.java:1795)\n\tat org.apache.hadoop.hdfs.server.namenode.FSDirMkdirOp.mkdirs(FSDirMkdirOp.java:59)\n\tat org.apache.hadoop.hdfs.server.namenode.FSNamesystem.mkdirs(FSNamesystem.java:3192)\n\tat org.apache.hadoop.hdfs.server.namenode.NameNodeRpcServer.mkdirs(NameNodeRpcServer.java:1157)\n\tat org.apache.hadoop.hdfs.protocolPB.ClientNamenodeProtocolServerSideTranslatorPB.mkdirs(ClientNamenodeProtocolServerSideTranslatorPB.java:714)\n\tat org.apache.hadoop.hdfs.protocol.proto.ClientNamenodeProtocolProtos$ClientNamenodeProtocol$2.callBlockingMethod(ClientNamenodeProtocolProtos.java)\n\tat org.apache.hadoop.ipc.ProtobufRpcEngine$Server$ProtoBufRpcInvoker.call(ProtobufRpcEngine.java:527)\n\tat org.apache.hadoop.ipc.RPC$Server.call(RPC.java:1036)\n\tat org.apache.hadoop.ipc.Server$RpcCall.run(Server.java:1015)\n\tat org.apache.hadoop.ipc.Server$RpcCall.run(Server.java:943)\n\tat java.security.AccessController.doPrivileged(Native Method)\n\tat javax.security.auth.Subject.doAs(Subject.java:422)\n\tat org.apache.hadoop.security.UserGroupInformation.doAs(UserGroupInformation.java:1729)\n\tat org.apache.hadoop.ipc.Server$Handler.run(Server.java:2943)\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("p",[e._v("很明显是用户权限的问题。")]),e._v(" "),a("p",[e._v("解决方案：")]),e._v(" "),a("p",[e._v("为 user 添加权限，"),a("code",[e._v("hadoop fs -chmod 777 /user")])]),e._v(" "),a("p",[e._v("创建数据库是加在有权限的目录下面（修改 hdfs 的权限 "),a("code",[e._v("hadoop fs -chown xxx:xxx /user/hive/xxx")]),e._v("）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hive (default)> create database db_hive2 location '/db_hive2';\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-java-sql-sqlexception-error-while-processing-statement-failed-execution-error-return-code-1-from-org-apache-hadoop-hive-ql-exec-mr-mapredtask-no-such-file-or-directory-at-org-apache-hive-jdbc-hivestatement-waitforoperationtocomplete-hivestatement-java-401"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-sql-sqlexception-error-while-processing-statement-failed-execution-error-return-code-1-from-org-apache-hadoop-hive-ql-exec-mr-mapredtask-no-such-file-or-directory-at-org-apache-hive-jdbc-hivestatement-waitforoperationtocomplete-hivestatement-java-401"}},[e._v("#")]),e._v(" 2. java.sql.SQLException: Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.mr.MapRedTask. No such file or directory at org.apache.hive.jdbc.HiveStatement.waitForOperationToComplete(HiveStatement.java:401)")]),e._v(" "),a("p",[e._v("由于一开始 hadoop 和 hive 使用 root 用户启动的，改用 其他用户启动之后，提交任务文件夹没有权限了。")]),e._v(" "),a("p",[e._v("解决方法： 删除 /tmp 下的 hive hadoop 文件 。推荐 hive 和hadoop使用同个用户或者用户组执行")]),e._v(" "),a("h1",{attrs:{id:"_3-execution-error-return-code-1-from-org-apache-hadoop-hive-ql-exec-statstask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-execution-error-return-code-1-from-org-apache-hadoop-hive-ql-exec-statstask"}},[e._v("#")]),e._v(" 3.Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.StatsTask")]),e._v(" "),a("p",[e._v("之前的insert语句虽然报错了，但是已经向表里插入数据了，有可能会造成重复的数据。")]),e._v(" "),a("p",[e._v("设置 "),a("code",[e._v("set set hive.stats.column.autogather=false")])]),e._v(" "),a("p",[e._v("可以通过设置 "),a("code",[e._v("hive.stats.column.autogather")]),e._v(" 参数来控制是否自动收集列的统计信息。如果你想禁用自动收集，可以将此参数设置为 "),a("code",[e._v("false")]),e._v("。")]),e._v(" "),a("p",[e._v("hive-site.xml")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<property>  \n    <name>hive.stats.column.autogather</name>  \n    <value>false</value>  \n</property>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("blockquote",[a("p",[a("code",[e._v("StatsTask")]),e._v(" 类的主要职责是执行统计任务。它通过分析表的元数据信息和表的分区信息来收集统计信息。然后，它会将统计信息存储在 Hive 的元数据中，以便在执行查询时使用。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);