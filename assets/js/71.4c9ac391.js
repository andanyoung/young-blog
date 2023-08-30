(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1031:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_4-1-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-概述"}},[t._v("#")]),t._v(" 4.1 概述")]),t._v(" "),s("p",[s("strong",[t._v("1）压缩的好处和坏处")])]),t._v(" "),s("p",[t._v("压缩的优点：以减少磁盘 IO、减少磁盘存储空间。")]),t._v(" "),s("p",[t._v("压缩的缺点：增加 CPU 开销。")]),t._v(" "),s("p",[t._v("4.1 概述 1）压缩的好处和坏处 压缩的优点：以减少磁盘 IO、减少磁盘存储空间。 压缩的缺点：增加 CPU 开销。 2）压缩原则 （1）运算密集型的 Job，少用压缩 （2）IO 密集型的 Job，多用压缩")]),t._v(" "),s("p",[t._v("（1）运算密集型的 Job，少用压缩")]),t._v(" "),s("p",[t._v("（2）IO 密集型的 Job，多用压缩")]),t._v(" "),s("h2",{attrs:{id:"_4-2-mr-支持的压缩编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-mr-支持的压缩编码"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.2")]),t._v(" "),s("strong",[t._v("MR 支持的压缩编码")])]),t._v(" "),s("p",[t._v("1）压缩算法对比介绍")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("压缩格式")]),t._v(" "),s("th",[t._v("Hadoop 自带？")]),t._v(" "),s("th",[t._v("算法")]),t._v(" "),s("th",[t._v("文件扩展名")]),t._v(" "),s("th",[t._v("是否可切片")]),t._v(" "),s("th",[t._v("换成压缩格式后，原来的程序是否需要修改")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DEFLATE")]),t._v(" "),s("td",[t._v("是，直接使用")]),t._v(" "),s("td",[t._v("DEFLATE")]),t._v(" "),s("td",[t._v(".deflate")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("和文本处理一样，不需要修改")])]),t._v(" "),s("tr",[s("td",[t._v("Gzip")]),t._v(" "),s("td",[t._v("是，直接使用")]),t._v(" "),s("td",[t._v("DEFLATE")]),t._v(" "),s("td",[t._v(".gz")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("和文本处理一样，不需要修改")])]),t._v(" "),s("tr",[s("td",[t._v("bzip2")]),t._v(" "),s("td",[t._v("是，直接使用")]),t._v(" "),s("td",[t._v("bzip2")]),t._v(" "),s("td",[t._v(".bz2")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("和文本处理一样，不需要修改")])]),t._v(" "),s("tr",[s("td",[t._v("LZO")]),t._v(" "),s("td",[t._v("否，需要安装")]),t._v(" "),s("td",[t._v("LZO")]),t._v(" "),s("td",[t._v(".lzo")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("需要建索引，还需要指定输入格式")])]),t._v(" "),s("tr",[s("td",[t._v("Snappy")]),t._v(" "),s("td",[t._v("是，直接使用")]),t._v(" "),s("td",[t._v("Snappy")]),t._v(" "),s("td",[t._v(".snappy")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("和文本处理一样，不需要修改")])])])]),t._v(" "),s("p",[t._v("2）压缩性能的比较")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("压缩算法")]),t._v(" "),s("th",[t._v("原始文件大小")]),t._v(" "),s("th",[t._v("压缩文件大小")]),t._v(" "),s("th",[t._v("压缩速度")]),t._v(" "),s("th",[t._v("解压速度")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("gzip")]),t._v(" "),s("td",[t._v("8.3GB")]),t._v(" "),s("td",[t._v("1.8GB")]),t._v(" "),s("td",[t._v("17.5MB/s")]),t._v(" "),s("td",[t._v("58MB/s")])]),t._v(" "),s("tr",[s("td",[t._v("bzip2")]),t._v(" "),s("td",[t._v("8.3GB")]),t._v(" "),s("td",[t._v("1.1GB")]),t._v(" "),s("td",[t._v("2.4MB/s")]),t._v(" "),s("td",[t._v("9.5MB/s")])]),t._v(" "),s("tr",[s("td",[t._v("LZO")]),t._v(" "),s("td",[t._v("8.3GB")]),t._v(" "),s("td",[t._v("2.9GB")]),t._v(" "),s("td",[t._v("49.3MB/s")]),t._v(" "),s("td",[t._v("74.6MB/s")])])])]),t._v(" "),s("p",[t._v("http://google.github.io/snappy/")]),t._v(" "),s("p",[t._v("Snappy is a compression/decompression library. It does not aim for maximum compression, or compatibility with any other compression library; instead, it aims for very high speeds and reasonable compression. For instance, compared to the fastest mode of zlib, Snappy is an order of magnitude faster for most inputs, but the resulting compressed files are anywhere from 20% to 100% bigger.On a single core of a Core i7 processor in 64-bit mode, Snappy compresses at about 250 MB/sec or more and decompresses at about 500 MB/sec or more.")]),t._v(" "),s("h2",{attrs:{id:"_4-3-压缩方式选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-压缩方式选择"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.3")]),t._v(" "),s("strong",[t._v("压缩方式选择")])]),t._v(" "),s("p",[t._v("压缩方式选择时重点考虑："),s("strong",[t._v("压缩/解压缩速度、压缩率（压缩后存储大小）、压缩后是否可以支持切片。")])]),t._v(" "),s("h3",{attrs:{id:"_4-3-1-gzip-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-gzip-压缩"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.3.1")]),t._v(" "),s("strong",[t._v("Gzip 压缩")])]),t._v(" "),s("p",[t._v("优点：压缩率比较高；")]),t._v(" "),s("p",[t._v("缺点：不支持 Split；压缩/解压速度一般；")]),t._v(" "),s("h3",{attrs:{id:"_4-3-2-bzip2-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-bzip2-压缩"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.3.2 Bzip2 压缩")])]),t._v(" "),s("p",[t._v("优点：压缩率高；支持 Split；")]),t._v(" "),s("p",[t._v("缺点：压缩/解压速度慢。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-3-lzo-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-lzo-压缩"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.3.3 Lzo 压缩")])]),t._v(" "),s("p",[t._v("优点：压缩/解压速度比较快；支持 Split；")]),t._v(" "),s("p",[t._v("缺点：压缩率一般；想支持切片需要额外创建索引。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-4-snappy-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-snappy-压缩"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.3.4 Snappy 压缩")])]),t._v(" "),s("p",[t._v("优点：压缩和解压缩速度快；")]),t._v(" "),s("p",[t._v("缺点：不支持 Split；压缩率一般；")]),t._v(" "),s("h3",{attrs:{id:"_4-3-5-压缩位置选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-5-压缩位置选择"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.3.5")]),t._v(" "),s("strong",[t._v("压缩位置选择")])]),t._v(" "),s("p",[t._v("压缩可以在 MapReduce 作用的任意阶段启用。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(422),alt:"image-20230619230836678"}})]),t._v(" "),s("h2",{attrs:{id:"_4-4-压缩参数配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-压缩参数配置"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.4 压缩参数配置")])]),t._v(" "),s("p",[t._v("1）为了支持多种压缩/解压缩算法，Hadoop 引入了编码/解码器")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("压缩格式")]),t._v(" "),s("th",[t._v("对应的编码/解码器")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DEFLATE")]),t._v(" "),s("td",[t._v("org.apache.hadoop.io.compress.DefaultCodec")])]),t._v(" "),s("tr",[s("td",[t._v("gzip")]),t._v(" "),s("td",[t._v("org.apache.hadoop.io.compress.GzipCodec")])]),t._v(" "),s("tr",[s("td",[t._v("bzip2")]),t._v(" "),s("td",[t._v("org.apache.hadoop.io.compress.BZip2Codec")])]),t._v(" "),s("tr",[s("td",[t._v("LZO")]),t._v(" "),s("td",[t._v("com.hadoop.compression.lzo.LzopCodec")])]),t._v(" "),s("tr",[s("td",[t._v("Snappy")]),t._v(" "),s("td",[t._v("org.apache.hadoop.io.compress.SnappyCodec")])])])]),t._v(" "),s("p",[t._v("2）要在 Hadoop 中启用压缩，可以配置如下参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("阶段")]),t._v(" "),s("th",[t._v("建议")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("io.compression.codecs （在 core-site.xml 中配置）")]),t._v(" "),s("td",[t._v("无，这个需要在命令行输入 hadoop checknative 查看")]),t._v(" "),s("td",[t._v("输入压缩")]),t._v(" "),s("td",[t._v("Hadoop 使用文件扩展名判断是否支持某种编解码器")])]),t._v(" "),s("tr",[s("td",[t._v("mapreduce.map.output.compress（在 mapred-site.xml 中配置）")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("mapper 输出")]),t._v(" "),s("td",[t._v("这个参数设为 true 启用压缩")])]),t._v(" "),s("tr",[s("td",[t._v("mapreduce.map.output.compress.codec（在 mapred-site.xml 中配置）")]),t._v(" "),s("td",[t._v("org.apache.hadoop.io.compress.DefaultCodec")]),t._v(" "),s("td",[t._v("mapper 输出")]),t._v(" "),s("td",[t._v("企业多使用 LZO 或 Snappy 编解码器在此阶段压缩数据")])]),t._v(" "),s("tr",[s("td",[t._v("mapreduce.output.fileoutputformat.compress（在 mapred-site.xml 中配置）")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("reducer 输出")]),t._v(" "),s("td",[t._v("这个参数设为 true 启用压缩")])]),t._v(" "),s("tr",[s("td",[t._v("mapreduce.output.fileoutputformat.compress.codec（在 mapred-site.xml 中配置）")]),t._v(" "),s("td",[t._v("org.apache.hadoop.io.compress.DefaultCodec")]),t._v(" "),s("td",[t._v("reducer 输出")]),t._v(" "),s("td",[t._v("使用标准工具或者编解码器，如 gzip 和 bzip2")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-5-压缩实操案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-压缩实操案例"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.5")]),t._v(" "),s("strong",[t._v("压缩实操案例")])]),t._v(" "),s("h3",{attrs:{id:"_4-5-1-map-输出端采用压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-1-map-输出端采用压缩"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4.5.1 Map 输出端采用压缩")])]),t._v(" "),s("p",[t._v("即使你的 MapReduce 的输入输出文件都是未压缩的文件，你仍然可以对 Map 任务的中间结果输出做压缩，因为它要写在硬盘并且通过网络传输到 Reduce 节点，对其压缩可以提高很多性能，这些工作只要设置两个属性即可，我们来看下代码怎么设置。")]),t._v(" "),s("p",[t._v("1）给大家提供的 Hadoop 源码支持的压缩格式有："),s("strong",[t._v("BZip2Codec、DefaultCodec")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('import org.apache.hadoop.conf.Configuration;\nimport org.apache.hadoop.fs.Path;\nimport org.apache.hadoop.io.IntWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.io.compress.*;\nimport org.apache.hadoop.mapreduce.Job;\nimport org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\nimport java.io.IOException;\n\npublic class WordCountDriver {\n\n    public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {\n\n        // 1 获取job\n        Configuration conf = new Configuration();\n\n        // 开启map端输出压缩\n        conf.setBoolean("mapreduce.map.output.compress", true);\n\n        // 设置map端输出压缩方式\n        conf.setClass("mapreduce.map.output.compress.codec", SnappyCodec.class, CompressionCodec.class);\n\n        Job job = Job.getInstance(conf);\n\n        // 2 设置jar包路径\n        job.setJarByClass(WordCountDriver.class);\n\n        // 3 关联mapper和reducer\n        job.setMapperClass(WordCountMapper.class);\n        job.setReducerClass(WordCountReducer.class);\n\n        // 4 设置map输出的kv类型\n        job.setMapOutputKeyClass(Text.class);\n        job.setMapOutputValueClass(IntWritable.class);\n\n        // 5 设置最终输出的kV类型\n        job.setOutputKeyClass(Text.class);\n        job.setOutputValueClass(IntWritable.class);\n\n        // 6 设置输入路径和输出路径\n        FileInputFormat.setInputPaths(job, new Path("D:\\\\input\\\\inputword"));\n        FileOutputFormat.setOutputPath(job, new Path("D:\\\\hadoop\\\\output888"));\n\n\n        // Reduce 输出端采用压缩 设置reduce端输出压缩开启\n        FileOutputFormat.setCompressOutput(job, true);\n\n        // Reduce 输出端采用压缩 设置压缩的方式\n//        FileOutputFormat.setOutputCompressorClass(job, BZip2Codec.class);\n//\t    FileOutputFormat.setOutputCompressorClass(job, GzipCodec.class);\n\t    FileOutputFormat.setOutputCompressorClass(job, DefaultCodec.class);\n\n\n        // 7 提交job\n        boolean result = job.waitForCompletion(true);\n\n        System.exit(result ? 0 : 1);\n    }\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br")])]),s("p",[t._v("2）Mapper 保持不变")]),t._v(" "),s("p",[t._v("3）Reducer 保持不变")])])}),[],!1,null,null,null);s.default=r.exports},422:function(t,s,a){t.exports=a.p+"assets/img/image-20230619230836678.50d40639.png"}}]);