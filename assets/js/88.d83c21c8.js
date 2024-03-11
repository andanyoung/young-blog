(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1098:function(t,e,a){t.exports=a.p+"assets/img/image-20231017230655624.fb9c2f33.png"},1099:function(t,e,a){t.exports=a.p+"assets/img/image-20231017230849313.4f42995b.png"},1100:function(t,e,a){t.exports=a.p+"assets/img/image-20231017231138673.7ba54274.png"},1518:function(t,e,a){"use strict";a.r(e);var s=a(4),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"第11章-文件格式和压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第11章-文件格式和压缩"}},[t._v("#")]),t._v(" 第11章 文件格式和压缩")]),t._v(" "),e("h2",{attrs:{id:"_11-1-hadoop压缩概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-hadoop压缩概述"}},[t._v("#")]),t._v(" "),e("strong",[t._v("11.1 Hadoop压缩概述")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("压缩格式")])]),t._v(" "),e("th",[e("strong",[t._v("算法")])]),t._v(" "),e("th",[e("strong",[t._v("文件扩展名")])]),t._v(" "),e("th",[e("strong",[t._v("是否可切分")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("DEFLATE")]),t._v(" "),e("td",[t._v("DEFLATE")]),t._v(" "),e("td",[t._v(".deflate")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("Gzip")]),t._v(" "),e("td",[t._v("DEFLATE")]),t._v(" "),e("td",[t._v(".gz")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("bzip2")]),t._v(" "),e("td",[t._v("bzip2")]),t._v(" "),e("td",[t._v(".bz2")]),t._v(" "),e("td",[e("strong",[t._v("是")])])]),t._v(" "),e("tr",[e("td",[t._v("LZO")]),t._v(" "),e("td",[t._v("LZO")]),t._v(" "),e("td",[t._v(".lzo")]),t._v(" "),e("td",[e("strong",[t._v("是")])])]),t._v(" "),e("tr",[e("td",[t._v("Snappy")]),t._v(" "),e("td",[t._v("Snappy")]),t._v(" "),e("td",[t._v(".snappy")]),t._v(" "),e("td",[t._v("否")])])])]),t._v(" "),e("p",[t._v("为了支持多种压缩/解压缩算法，Hadoop引入了编码/解码器，如下表所示：")]),t._v(" "),e("p",[t._v("Hadoop查看支持压缩的方式hadoop checknative。")]),t._v(" "),e("p",[t._v("Hadoop在driver端设置压缩。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("压缩格式")])]),t._v(" "),e("th",[e("strong",[t._v("对应的编码/解码器")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("DEFLATE")]),t._v(" "),e("td",[t._v("org.apache.hadoop.io.compress.DefaultCodec")])]),t._v(" "),e("tr",[e("td",[t._v("gzip")]),t._v(" "),e("td",[t._v("org.apache.hadoop.io.compress.GzipCodec")])]),t._v(" "),e("tr",[e("td",[t._v("bzip2")]),t._v(" "),e("td",[t._v("org.apache.hadoop.io.compress.BZip2Codec")])]),t._v(" "),e("tr",[e("td",[t._v("LZO")]),t._v(" "),e("td",[t._v("com.hadoop.compression.lzo.LzopCodec")])]),t._v(" "),e("tr",[e("td",[t._v("Snappy")]),t._v(" "),e("td",[t._v("org.apache.hadoop.io.compress.SnappyCodec")])])])]),t._v(" "),e("p",[t._v("压缩性能的比较：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("压缩算法")])]),t._v(" "),e("th",[e("strong",[t._v("原始文件大小")])]),t._v(" "),e("th",[e("strong",[t._v("压缩文件大小")])]),t._v(" "),e("th",[e("strong",[t._v("压缩速度")])]),t._v(" "),e("th",[e("strong",[t._v("解压速度")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("gzip")]),t._v(" "),e("td",[t._v("8.3GB")]),t._v(" "),e("td",[t._v("1.8GB")]),t._v(" "),e("td",[t._v("17.5MB/s")]),t._v(" "),e("td",[t._v("58MB/s")])]),t._v(" "),e("tr",[e("td",[t._v("bzip2")]),t._v(" "),e("td",[t._v("8.3GB")]),t._v(" "),e("td",[t._v("1.1GB")]),t._v(" "),e("td",[t._v("2.4MB/s")]),t._v(" "),e("td",[t._v("9.5MB/s")])]),t._v(" "),e("tr",[e("td",[t._v("LZO")]),t._v(" "),e("td",[t._v("8.3GB")]),t._v(" "),e("td",[t._v("2.9GB")]),t._v(" "),e("td",[t._v("49.3MB/s")]),t._v(" "),e("td",[t._v("74.6MB/s")])])])]),t._v(" "),e("p",[t._v("http://google.github.io/snappy/")]),t._v(" "),e("p",[t._v("On a single core of a Core i7 processor in 64-bit mode, Snappy compresses at about 250 MB/sec or more and decompresses at about 500 MB/sec or more.")]),t._v(" "),e("h2",{attrs:{id:"_11-2-hive文件格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-hive文件格式"}},[t._v("#")]),t._v(" 11.2 Hive文件格式")]),t._v(" "),e("p",[t._v("为Hive表中的数据选择一个合适的文件格式，对提高查询性能的提高是十分有益的。Hive表数据的存储格式，可以选择text file、orc、parquet、sequence file等。")]),t._v(" "),e("h3",{attrs:{id:"_11-2-1-text-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-1-text-file"}},[t._v("#")]),t._v(" 11.2.1 Text File")]),t._v(" "),e("p",[t._v("文本文件是Hive默认使用的文件格式，文本文件中的一行内容，就对应Hive表中的一行记录。")]),t._v(" "),e("p",[t._v("可通过以下建表语句指定文件格式为文本文件:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table textfile_table\n(column_specs)\nstored as textfile;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"_11-2-2-orc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-2-orc"}},[t._v("#")]),t._v(" 11.2.2 ORC")]),t._v(" "),e("h4",{attrs:{id:"_1-文件格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件格式"}},[t._v("#")]),t._v(" 1）文件格式")]),t._v(" "),e("p",[t._v("ORC（Optimized Row Columnar）file format是Hive 0.11版里引入的一种"),e("strong",[t._v("列式存储")]),t._v("的文件格式。ORC文件能够提高Hive读写数据和处理数据的性能。")]),t._v(" "),e("p",[t._v("与列式存储相对的是行式存储，下图是两者的对比：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1098),alt:"ORC"}})]),t._v(" "),e("p",[t._v("如图所示左边为逻辑表，右边第一个为行式存储，第二个为列式存储。")]),t._v(" "),e("h5",{attrs:{id:"_1-行存储的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-行存储的特点"}},[t._v("#")]),t._v(" （1）行存储的特点")]),t._v(" "),e("p",[t._v("查询满足条件的一整行数据的时候，列存储则需要去每个聚集的字段找到对应的每个列的值，行存储只需要找到其中一个值，其余的值都在相邻地方，所以此时行存储查询的速度更快。")]),t._v(" "),e("h5",{attrs:{id:"_2-列存储的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-列存储的特点"}},[t._v("#")]),t._v(" （2）列存储的特点")]),t._v(" "),e("p",[t._v("因为每个字段的数据聚集存储，在查询只需要少数几个字段的时候，能大大减少读取的数据量；每个字段的数据类型一定是相同的，列式存储可以针对性的设计更好的设计压缩算法。")]),t._v(" "),e("p",[t._v("前文提到的text file和sequence file都是基于行存储的，orc和parquet是基于列式存储的。")]),t._v(" "),e("p",[t._v("orc文件的具体结构如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1099),alt:"image-20231017230849313"}}),t._v("每个Orc文件由Header、Body和Tail三部分组成。")]),t._v(" "),e("p",[t._v("其中Header内容为ORC，用于表示文件类型。")]),t._v(" "),e("p",[t._v("Body由1个或多个stripe组成，每个stripe一般为HDFS的块大小，每一个stripe包含多条记录，这些记录按照列进行独立存储，每个stripe里有三部分组成，分别是Index Data，Row Data，Stripe Footer。")]),t._v(" "),e("p",[t._v("**Index Data：**一个轻量级的index，默认是为各列每隔1W行做一个索引。每个索引会记录第n万行的位置，和最近一万行的最大值和最小值等信息。")]),t._v(" "),e("p",[t._v("**Row Data：**存的是具体的数据，按列进行存储，并对每个列进行编码，分成多个Stream来存储。")]),t._v(" "),e("p",[t._v("**Stripe Footer：**存放的是各个Stream的位置以及各column的编码信息。")]),t._v(" "),e("p",[t._v("Tail由File Footer和PostScript组成。File Footer中保存了各Stripe的其实位置、索引长度、数据长度等信息，各Column的统计信息等；PostScript记录了整个文件的压缩类型以及File Footer的长度信息等。\n在读取ORC文件时，会先从最后一个字节读取PostScript长度，进而读取到PostScript，从里面解析到File Footer长度，进而读取FileFooter，从中解析到各个Stripe信息，再读各个Stripe，即从后往前读。")]),t._v(" "),e("h4",{attrs:{id:"_3-建表语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-建表语句"}},[t._v("#")]),t._v(" 3）建表语句")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table orc_table\n(column_specs)\nstored as orc\ntblproperties (property_name=property_value, ...);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("ORC文件格式支持的参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("参数")])]),t._v(" "),e("th",[e("strong",[t._v("默认值")])]),t._v(" "),e("th",[e("strong",[t._v("说明")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("orc.compress")]),t._v(" "),e("td",[t._v("ZLIB")]),t._v(" "),e("td",[t._v("压缩格式，可选项：NONE、ZLIB,、SNAPPY")])]),t._v(" "),e("tr",[e("td",[t._v("orc.compress.size")]),t._v(" "),e("td",[t._v("262,144")]),t._v(" "),e("td",[t._v("每个压缩块的大小（ORC文件是分块压缩的）")])]),t._v(" "),e("tr",[e("td",[t._v("orc.stripe.size")]),t._v(" "),e("td",[t._v("67,108,864")]),t._v(" "),e("td",[t._v("每个stripe的大小")])]),t._v(" "),e("tr",[e("td",[t._v("orc.row.index.stride")]),t._v(" "),e("td",[t._v("10,000")]),t._v(" "),e("td",[t._v("索引步长（每隔多少行数据建一条索引）")])])])]),t._v(" "),e("h3",{attrs:{id:"_11-1-3-parquet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-3-parquet"}},[t._v("#")]),t._v(" 11.1.3 Parquet")]),t._v(" "),e("p",[t._v("Parquet文件是Hadoop生态中的一个通用的文件格式，它也是一个列式存储的文件格式。")]),t._v(" "),e("p",[t._v("Parquet文件的格式如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1100),alt:"Parquet"}})]),t._v(" "),e("p",[t._v("上图展示了一个Parquet文件的基本结构，文件的首尾都是该文件的Magic Code，用于校验它是否是一个Parquet文件。")]),t._v(" "),e("p",[t._v("首尾中间由若干个Row Group和一个Footer（File Meta Data）组成。")]),t._v(" "),e("p",[t._v("每个Row Group包含多个Column Chunk，每个Column Chunk包含多个Page。以下是Row Group、Column Chunk和Page三个概念的说明：")]),t._v(" "),e("p",[e("strong",[t._v("行组 （ Row Group ）")]),t._v(" ： 一个行组对应逻辑表中的若干行。")]),t._v(" "),e("p",[e("strong",[t._v("列块（Column Chunk）")]),t._v("：一个行组中的一列保存在一个列块中。")]),t._v(" "),e("p",[e("strong",[t._v("页（Page）")]),t._v("：一个列块的数据会划分为若干个页。")]),t._v(" "),e("p",[t._v("Footer（File Meta Data）中存储了每个行组（Row Group）中的每个列快（Column Chunk）的元数据信息，元数据信息包含了该列的数据类型、该列的编码方式、该类的Data Page位置等信息。")]),t._v(" "),e("h4",{attrs:{id:"_3-建表语句-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-建表语句-2"}},[t._v("#")]),t._v(" 3）建表语句")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Create table parquet_table\n(column_specs)\nstored as parquet\ntblproperties (property_name=property_value, ...);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("支持的参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("em",[e("strong",[t._v("*参数*")])])]),t._v(" "),e("th",[e("em",[e("strong",[t._v("*默认值*")])])]),t._v(" "),e("th",[e("em",[e("strong",[t._v("*说明*")])])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("parquet.compression")]),t._v(" "),e("td",[t._v("uncompressed")]),t._v(" "),e("td",[t._v("压缩格式，可选项：uncompressed，snappy，gzip，lzo，brotli，lz4")])]),t._v(" "),e("tr",[e("td",[t._v("parquet.block.size")]),t._v(" "),e("td",[t._v("134217728")]),t._v(" "),e("td",[t._v("行组大小，通常与HDFS块大小保持一致")])]),t._v(" "),e("tr",[e("td",[t._v("parquet.page.size")]),t._v(" "),e("td",[t._v("1048576")]),t._v(" "),e("td",[t._v("页大小")])])])]),t._v(" "),e("h2",{attrs:{id:"_11-3-压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-压缩"}},[t._v("#")]),t._v(" 11.3 压缩")]),t._v(" "),e("p",[t._v("在Hive表中和计算过程中，保持数据的压缩，对磁盘空间的有效利用和提高查询性能都是十分有益的。")]),t._v(" "),e("h3",{attrs:{id:"_11-2-1-hive表数据进行压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-1-hive表数据进行压缩"}},[t._v("#")]),t._v(" 11.2.1 Hive表数据进行压缩")]),t._v(" "),e("p",[t._v("在Hive中，不同文件类型的表，声明数据压缩的方式是不同的。")]),t._v(" "),e("h5",{attrs:{id:"_1-textfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-textfile"}},[t._v("#")]),t._v(" 1）TextFile")]),t._v(" "),e("p",[t._v("若一张表的文件类型为TextFile，若需要对该表中的数据进行压缩，多数情况下，无需在建表语句做出声明。"),e("strong",[t._v("直接将压缩后的文件")]),t._v("导入到该表即可，Hive在查询表中数据时，"),e("strong",[t._v("可自动识别其压缩格式")]),t._v("，进行解压。")]),t._v(" "),e("p",[t._v("需要注意的是，在执行往表中导入数据的SQL语句时，用户需设置以下参数，来保证写入表中的数据是被压缩的。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--SQL语句的最终输出结果是否压缩\nset hive.exec.compress.output=true;\n--输出结果的压缩格式（以下示例为snappy）\nset mapreduce.output.fileoutputformat.compress.codec =org.apache.hadoop.io.compress.SnappyCodec;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h5",{attrs:{id:"_2-orc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-orc"}},[t._v("#")]),t._v(" 2）ORC")]),t._v(" "),e("p",[t._v("若一张表的文件类型为ORC，若需要对该表数据进行压缩，需在建表语句中声明压缩格式如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('create table orc_table\n(column_specs)\nstored as orc\ntblproperties ("orc.compress"="snappy");\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h5",{attrs:{id:"_3-parquet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-parquet"}},[t._v("#")]),t._v(" 3）Parquet")]),t._v(" "),e("p",[t._v("若一张表的文件类型为Parquet，若需要对该表数据进行压缩，需在建表语句中声明压缩格式如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('create table orc_table\n(column_specs)\nstored as parquet\ntblproperties ("parquet.compression"="snappy");\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"_11-2-2-计算过程中使用压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-2-计算过程中使用压缩"}},[t._v("#")]),t._v(" 11.2.2 计算过程中使用压缩")]),t._v(" "),e("h4",{attrs:{id:"_1-单个mr的中间结果进行压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-单个mr的中间结果进行压缩"}},[t._v("#")]),t._v(" 1）单个MR的中间结果进行压缩")]),t._v(" "),e("p",[t._v("单个MR的中间结果是指Mapper输出的数据，对其进行压缩可降低shuffle阶段的网络IO，可通过以下参数进行配置：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--开启MapReduce中间数据压缩功能\nset mapreduce.map.output.compress=true;\n--设置MapReduce中间数据数据的压缩方式（以下示例为snappy）\nset mapreduce.map.output.compress.codec=org.apache.hadoop.io.compress.SnappyCodec;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"_2-单条sql语句的中间结果进行压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-单条sql语句的中间结果进行压缩"}},[t._v("#")]),t._v(" 2）单条SQL语句的中间结果进行压缩")]),t._v(" "),e("p",[t._v("单条SQL语句的中间结果是指，两个MR（一条SQL语句可能需要通过MR进行计算）之间的临时数据，可通过以下参数进行配置：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--是否对两个MR之间的临时数据进行压缩\nset hive.exec.compress.intermediate=true;\n--压缩格式（以下示例为snappy）\nset hive.intermediate.compression.codec= org.apache.hadoop.io.compress.SnappyCodec;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);