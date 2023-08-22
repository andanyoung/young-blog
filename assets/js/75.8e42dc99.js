(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1098:function(_,t,v){"use strict";v.r(t);var s=v(4),r=Object(s.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-优化步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-优化步骤"}},[_._v("#")]),_._v(" mysql 优化步骤")]),_._v(" "),t("p",[t("img",{attrs:{src:v(778),alt:""}})]),_._v(" "),t("p",[_._v("正如上图所示，数据库优化可以从架构优化，硬件优化，DB 优化，SQL 优化四个维度入手。")]),_._v(" "),t("p",[_._v("此上而下，位置越靠前优化越明显，对数据库的性能提升越高。我们常说的 SQL 优化反而是对性能提高最小的优化。")]),_._v(" "),t("blockquote",[t("p",[_._v("业务优化")]),_._v(" "),t("ul",[t("li",[_._v("查询跨度不能太大，限制三个月")]),_._v(" "),t("li",[_._v("数据归档，只查询最近一年的数据，老数据去历史数据里查询")]),_._v(" "),t("li",[_._v("导数数据，异步任务进行。")])])]),_._v(" "),t("h3",{attrs:{id:"最后那-监控不能说少-即时报警-即时处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后那-监控不能说少-即时报警-即时处理"}},[_._v("#")]),_._v(" 最后那，监控不能说少，即时报警，即时处理")]),_._v(" "),t("p",[_._v("接下来我们再看看每种优化该如何实施。")]),_._v(" "),t("h2",{attrs:{id:"架构优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构优化"}},[_._v("#")]),_._v(" 架构优化")]),_._v(" "),t("p",[_._v("一般来说在高并发的场景下对架构层进行优化其效果最为明显，常见的优化手段有：分布式缓存，读写分离，分库分表,主备切换等，每种优化手段又适用于不同的应用场景。")]),_._v(" "),t("p",[_._v("要点：")]),_._v(" "),t("ul",[t("li",[t("ol",[t("li",[_._v("读多，读写分离")])])]),_._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[_._v("读多写少，加分布式缓存（redis）")])])]),_._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[_._v("写多、海量数据：")])]),_._v(" "),t("ul",[t("li",[_._v("千万级数据（几个 G 数据）/ 或者一两个亿几十 G 数据 "),t("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/110823552",target:"_blank",rel:"noopener noreferrer"}},[_._v("分库分表"),t("OutboundLink")],1)]),_._v(" "),t("li",[_._v("海量大数据（增量数据多），使用 hbase（不适合索引，要是用索引在 es 里面建立索引）等大数据数据库，")]),_._v(" "),t("li",[_._v("查询麻烦使用 ETL 数据清洗")]),_._v(" "),t("li",[_._v("在海量数据下支持事务，可以用分布式数据库，比如 TiDB。海量数据下支持复制 SQL 试试分析，可以使用 clickhouse，或者是 druid 之类的")]),_._v(" "),t("li",[_._v("mq 消峰")])])]),_._v(" "),t("li",[t("ol",{attrs:{start:"4"}},[t("li",[_._v("复杂查询，es 全文索引")])])]),_._v(" "),t("li",[t("ol",{attrs:{start:"5"}},[t("li",[_._v("高可用，主备切换")])])])]),_._v(" "),t("h2",{attrs:{id:"硬件优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件优化"}},[_._v("#")]),_._v(" 硬件优化")]),_._v(" "),t("p",[_._v("我们使用数据库，不管是读操作还是写操作，最终都是要访问磁盘，所以说磁盘的性能决定了数据库的性能。一块 PCIE 固态硬盘的性能是普通机械硬盘的几十倍不止。这里我们可以从"),t("strong",[_._v("吞吐率")]),_._v("、"),t("strong",[_._v("IOPS")]),_._v("两个维度看一下机械硬盘、普通固态硬盘、PCIE 固态硬盘之间的性能指标。")]),_._v(" "),t("p",[t("strong",[_._v("吞吐率：单位时间内读写的数据量")])]),_._v(" "),t("ul",[t("li",[_._v("机械硬盘：约 100MB/s ～ 200MB/s")]),_._v(" "),t("li",[_._v("普通固态硬盘：200MB/s ～ 500MB/s")]),_._v(" "),t("li",[_._v("PCIE 固态硬盘：900MB/s ～ 3GB/s")])]),_._v(" "),t("p",[t("strong",[_._v("IOPS：每秒 IO 操作的次数")])]),_._v(" "),t("ul",[t("li",[_._v("机械硬盘：100 ～ 200")]),_._v(" "),t("li",[_._v("普通固态硬盘：30000 ～ 50000")]),_._v(" "),t("li",[_._v("PCIE 固态硬盘：数十万")])]),_._v(" "),t("p",[_._v("通过上面的数据可以很直观的看到不同规格的硬盘之间的性能差距非常大。")]),_._v(" "),t("p",[_._v("不仅仅只有硬盘要优化，还有 CPU，内存，网络等，具体看哪个是瓶颈。")]),_._v(" "),t("h2",{attrs:{id:"db-优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-优化"}},[_._v("#")]),_._v(" DB 优化")]),_._v(" "),t("p",[_._v("SQL 执行慢有时候不一定完全是 SQL 问题，手动安装一台数据库而不做任何参数调整，再怎么优化 SQL 都无法让其性能最大化。要让一台数据库实例完全发挥其性能，首先我们就得先优化数据库的实例参数。")]),_._v(" "),t("p",[_._v("数据库实例参数优化遵循三句口诀："),t("strong",[_._v("日志不能小、缓存足够大、连接要够用。")])]),_._v(" "),t("p",[_._v("数据库事务提交后需要将事务对数据页的修改刷（ fsync）到磁盘上，才能保证数据的持久性。这个刷盘，是一个随机写，性能较低，如果每次事务提交都要刷盘，会极大影响数据库的性能。数据库在架构设计中都会采用如下两个优化手法：")]),_._v(" "),t("ul",[t("li",[_._v("先将事务写到日志文件 RedoLog（WAL），将随机写优化成顺序写")]),_._v(" "),t("li",[_._v("加一层缓存结构 Buffer，将单次写优化成顺序写")])]),_._v(" "),t("p",[_._v("所以日志跟缓存对数据库实例尤其重要。而连接如果不够用，数据库会直接抛出异常，系统无法访问。")]),_._v(" "),t("p",[_._v("接下来我们以 Oracle、MySQL（InnoDB）、POSTGRES、达梦为例，看看每种数据库的参数该如何配置。")]),_._v(" "),t("h3",{attrs:{id:"oracle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[_._v("#")]),_._v(" Oracle")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数分类")]),_._v(" "),t("th",[_._v("参数名")]),_._v(" "),t("th",[_._v("参数值")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("SGA_TAGET、MEMORY_TARGET")]),_._v(" "),t("td",[_._v("物理内存 70-80%")]),_._v(" "),t("td",[_._v("越大越好")])]),_._v(" "),t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("DB_CACHE_SIZE")]),_._v(" "),t("td",[_._v("物理内存 70-80%")]),_._v(" "),t("td",[_._v("越大越好")])]),_._v(" "),t("tr",[t("td",[_._v("SQL 解析")]),_._v(" "),t("td",[_._v("SHARED_POOL_SIZE")]),_._v(" "),t("td",[_._v("4-16G")]),_._v(" "),t("td",[_._v("不建议设置过大")])]),_._v(" "),t("tr",[t("td",[_._v("监听及连接")]),_._v(" "),t("td",[_._v("PROCESSES、SESSIONS、OPEN_CURSORS")]),_._v(" "),t("td",[_._v("根据业务需求设置")]),_._v(" "),t("td",[_._v("一般为业务预估连接数的 120%")])]),_._v(" "),t("tr",[t("td",[_._v("其他")]),_._v(" "),t("td",[_._v("SESSION_CACHED_CURSORS")]),_._v(" "),t("td",[_._v("大于 200")]),_._v(" "),t("td",[_._v("软软解析")])])])]),_._v(" "),t("h3",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[_._v("#")]),_._v(" MySQL")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数分类")]),_._v(" "),t("th",[_._v("参数名")]),_._v(" "),t("th",[_._v("参数值")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("INNODB_BUFFER_POOL_SIZE")]),_._v(" "),t("td",[_._v("物理内存 50-80%")]),_._v(" "),t("td",[_._v("一般来说越大性能越好")])]),_._v(" "),t("tr",[t("td",[_._v("日志相关")]),_._v(" "),t("td",[_._v("Innodb_log_buffer_size")]),_._v(" "),t("td",[_._v("16-32M")]),_._v(" "),t("td",[_._v("根据运行情况调整")])]),_._v(" "),t("tr",[t("td",[_._v("日志相关")]),_._v(" "),t("td",[_._v("sync_binlog")]),_._v(" "),t("td",[_._v("1、100、0")]),_._v(" "),t("td",[_._v("1 安全性最好")])]),_._v(" "),t("tr",[t("td",[_._v("监听及连接")]),_._v(" "),t("td",[_._v("max_connections")]),_._v(" "),t("td",[_._v("根据业务情况调整")]),_._v(" "),t("td",[_._v("可以预留一部分值")])]),_._v(" "),t("tr",[t("td",[_._v("文件读写性能")]),_._v(" "),t("td",[_._v("innodb_flush_log_at_trx_commit")]),_._v(" "),t("td",[_._v("2")]),_._v(" "),t("td",[_._v("安全和性能的折中考虑")])]),_._v(" "),t("tr",[t("td",[_._v("其他")]),_._v(" "),t("td",[_._v("wait_timeout，interactive_timeout")]),_._v(" "),t("td",[_._v("28800")]),_._v(" "),t("td",[_._v("避免应用连接定时中断")])])])]),_._v(" "),t("h3",{attrs:{id:"postgres"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgres"}},[_._v("#")]),_._v(" POSTGRES")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数分类")]),_._v(" "),t("th",[_._v("参数名")]),_._v(" "),t("th",[_._v("参数值")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("SHARED_BUFFERS")]),_._v(" "),t("td",[_._v("物理内存 10-25%")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("CACHE_BUFFER_SIZE")]),_._v(" "),t("td",[_._v("物理内存 50-60%")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("日志相关")]),_._v(" "),t("td",[_._v("wal_buffer")]),_._v(" "),t("td",[_._v("8-64M")]),_._v(" "),t("td",[_._v("不建议设置过大过小")])]),_._v(" "),t("tr",[t("td",[_._v("监听及连接")]),_._v(" "),t("td",[_._v("max_connections")]),_._v(" "),t("td",[_._v("根据业务情况调整")]),_._v(" "),t("td",[_._v("一般为业务预估连接数的 120%")])]),_._v(" "),t("tr",[t("td",[_._v("其他")]),_._v(" "),t("td",[_._v("maintenance_work_mem")]),_._v(" "),t("td",[_._v("512M 或更大")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("其他")]),_._v(" "),t("td",[_._v("work_mem")]),_._v(" "),t("td",[_._v("8-16M")]),_._v(" "),t("td",[_._v("原始配置 1M 过小")])]),_._v(" "),t("tr",[t("td",[_._v("其他")]),_._v(" "),t("td",[_._v("checkpoint_segments")]),_._v(" "),t("td",[_._v("32 或者更大")]),_._v(" "),t("td")])])]),_._v(" "),t("h3",{attrs:{id:"达梦数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#达梦数据库"}},[_._v("#")]),_._v(" 达梦数据库")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("参数分类")]),_._v(" "),t("th",[_._v("参数名")]),_._v(" "),t("th",[_._v("参数值")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("MEMROY_TARGET、MEMROY_POOL")]),_._v(" "),t("td",[_._v("物理内存 90%")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("BUFFER")]),_._v(" "),t("td",[_._v("物理内存 60%")]),_._v(" "),t("td",[_._v("数据缓存")])]),_._v(" "),t("tr",[t("td",[_._v("数据缓存")]),_._v(" "),t("td",[_._v("MAX_BUFFER")]),_._v(" "),t("td",[_._v("物理内存 70%")]),_._v(" "),t("td",[_._v("最大数据缓存")])]),_._v(" "),t("tr",[t("td",[_._v("监听及连接")]),_._v(" "),t("td",[_._v("max_sessions")]),_._v(" "),t("td",[_._v("根据业务需求设置")]),_._v(" "),t("td",[_._v("一般为业务预估连接数的 120%")])])])]),_._v(" "),t("h2",{attrs:{id:"sql-优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-优化"}},[_._v("#")]),_._v(" SQL 优化")]),_._v(" "),t("p",[_._v("SQL 优化很容易理解，就是通过给查询字段添加索引或者改写 SQL 提高其执行效率，一般而言，SQL 编写有以下几个通用的技巧：")]),_._v(" "),t("h3",{attrs:{id:"_1-查询慢-sql-日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询慢-sql-日志"}},[_._v("#")]),_._v(" 1. 查询慢 SQL 日志")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> SHOW VARIABLES LIKE 'slow_query%';\n+---------------------+---------------------------------------------------------------------+\n| Variable_name       | Value                                                               |\n+---------------------+---------------------------------------------------------------------+\n| slow_query_log      | OFF                                                                 |\n| slow_query_log_file | C:\\ProgramData\\MySQL\\MySQL Server 5.7\\Data\\LAPTOP-UHQ6V8KP-slow.log |\n+---------------------+---------------------------------------------------------------------+\n2 rows in set, 1 warning (0.02 sec)\n\nmysql> SHOW VARIABLES LIKE 'long_query_time';\n+-----------------+-----------+\n| Variable_name   | Value     |\n+-----------------+-----------+\n| long_query_time | 10.000000 |\n+-----------------+-----------+\n1 row in set, 1 warning (0.01 sec)\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br"),t("span",{staticClass:"line-number"},[_._v("10")]),t("br"),t("span",{staticClass:"line-number"},[_._v("11")]),t("br"),t("span",{staticClass:"line-number"},[_._v("12")]),t("br"),t("span",{staticClass:"line-number"},[_._v("13")]),t("br"),t("span",{staticClass:"line-number"},[_._v("14")]),t("br"),t("span",{staticClass:"line-number"},[_._v("15")]),t("br"),t("span",{staticClass:"line-number"},[_._v("16")]),t("br")])]),t("p",[_._v("参数说明如下：")]),_._v(" "),t("ul",[t("li",[_._v("slow_query_log：慢查询开启状态")]),_._v(" "),t("li",[_._v("slow_query_log_file：慢查询日志存放的位置（一般设置为 MySQL 的数据存放目录）")]),_._v(" "),t("li",[_._v("long_query_time：查询超过多少秒才记录")])]),_._v(" "),t("h6",{attrs:{id:"启动和设置慢查询日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动和设置慢查询日志"}},[_._v("#")]),_._v(" 启动和设置慢查询日志")]),_._v(" "),t("ul",[t("li",[_._v("配置文件")])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("[mysqld]\nlog-slow-queries=dir\\filename\nlong_query_time=n\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("ul",[t("li",[_._v("sql")])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("SET GLOBAL slow_query_log=ON/OFF;\nSET GLOBAL long_query_time=n;\nset global log_queries_not_using_indexes=on; 默认值为off 表示没有使用索引的sql查询也会记录下来\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2-得到慢-sql-进行慢-sql-分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-得到慢-sql-进行慢-sql-分析"}},[_._v("#")]),_._v(" 2.得到慢 SQL 进行慢 sql 分析")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("使用 "),t("strong",[_._v("explain")]),_._v(" "),t("strong",[_._v("分析 SQL 的执行计划")]),_._v("，是否索引失效")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/122412683",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://andyoung.blog.csdn.net/article/details/122412683"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/123683536",target:"_blank",rel:"noopener noreferrer"}},[_._v("sql 优化 5 大步骤+10 个案例，堪称 SQL 优化万能公式"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/121271976",target:"_blank",rel:"noopener noreferrer"}},[_._v("聊聊 sql 优化的 15 个小技巧"),t("OutboundLink")],1)])])]),_._v(" "),t("li",[t("p",[_._v("以小表驱动大表")]),_._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/106993948",target:"_blank",rel:"noopener noreferrer"}},[_._v("详解 Mysql LEFT JOIN 和 JOIN 查询区别及原理"),t("OutboundLink")],1)])]),_._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/agonie201218/article/details/106882132",target:"_blank",rel:"noopener noreferrer"}},[_._v("MySQL IN、Exist 关联查询时，我们为什么建议小表驱动大表？"),t("OutboundLink")],1)])])])]),_._v(" "),t("li",[t("p",[_._v("使用 UNION ALL 替代 UNION")])]),_._v(" "),t("li",[t("p",[_._v("避免使用 NOT、!=、<>、!<、!>、NOT EXISTS、NOT IN、NOT LIKE。可以是话用 UNION 代替")])]),_._v(" "),t("li",[t("p",[_._v("减少数据回表")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://andyoung.blog.csdn.net/article/details/123846362",target:"_blank",rel:"noopener noreferrer"}},[_._v("生动的解释下什么是 MySQL 的“回表”？"),t("OutboundLink")],1)])])]),_._v(" "),t("li",[t("p",[_._v("主键 id 优先自增，分布式使用 雪花 ID，或者 redis 自增，自增步长")])]),_._v(" "),t("li",[t("p",[_._v("避免使用子查询，可以把子查询优化为 join 操作通常子查询在 in 子句中，且子查询中为简单 SQL(不包含 union、group by、order by、limit 从句) 时,才可以把子查询转化为关联查询进行优化。\n"),t("strong",[_._v("子查询性能差的原因：")]),_._v(" 子查询的结果集无法使用索引，通常子查询的结果集会被存储到"),t("strong",[_._v("临时表")]),_._v("中，不论是内存临时表还是磁盘临时表都不会存在索引，所以查询性能会受到一定的影响。特别是对于返回结果集比较大的子查询，其对查询性能的影响也就越大。由于子查询会产生大量的临时表也没有索引，所以会消耗过多的 CPU 和 IO 资源，产生大量的慢查询。")])])]),_._v(" "),t("h3",{attrs:{id:"_3-大事务优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-大事务优化"}},[_._v("#")]),_._v(" 3. 大事务优化")]),_._v(" "),t("h3",{attrs:{id:"_4-深分页优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-深分页优化"}},[_._v("#")]),_._v(" 4. 深分页优化")]),_._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),t("p",[_._v("我们今天分别从架构优化、硬件优化、DB 优化、SQL 优化四个角度探讨了如何实施优化，提升数据库性能。但是大家还是要记住一句话，数据库系统没有银弹， 要让"),t("strong",[_._v("适合")]),_._v("的系统，做"),t("strong",[_._v("合适")]),_._v("的事情。")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/_E6szZ0WFtCImYKUfygSMA",target:"_blank",rel:"noopener noreferrer"}},[_._v("MySQL 如何优化？ https://mp.weixin.qq.com/s/_E6szZ0WFtCImYKUfygSMA"),t("OutboundLink")],1),_._v(" "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/ZjwTMvdCJSVGmLIpJJ5P5w",target:"_blank",rel:"noopener noreferrer"}},[_._v("完爆 90%的性能毛病，收好数据库优化八大通用绝招"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports},778:function(_,t,v){_.exports=v.p+"assets/img/8cea57b890c1b01263b83d82ac6ea280.634755f0.png"}}]);