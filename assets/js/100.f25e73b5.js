(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1373:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一、摘要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、摘要"}},[s._v("#")]),s._v(" 一、摘要")]),s._v(" "),n("p",[s._v("在之前的文章中，我们了解到在 Java I/O 体系中，"),n("strong",[s._v("File 类是唯一代表磁盘文件本身的对象")]),s._v("。")]),s._v(" "),n("p",[s._v("File 类定义了一些与平台无关的方法来操作文件，包括检查一个文件是否存在、创建、删除文件、重命名文件、判断文件的读写权限是否存在、设置和查询文件的最近修改时间等等操作。")]),s._v(" "),n("p",[s._v("值得注意的地方是，"),n("strong",[s._v("Java 中通常的 File 并不代表一个真实存在的文件对象，当你通过指定一个路径描时，它就会返回一个代表这个路径相关联的一个虚拟对象，这个可能是一个真实存在的文件或者是一个包含多个文件的目录")]),s._v("。")]),s._v(" "),n("p",[s._v("下面我们一起来看看 File 类有哪些操作方法，以及实际使用过程中如何避坑。")]),s._v(" "),n("h2",{attrs:{id:"二、file-类介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、file-类介绍"}},[s._v("#")]),s._v(" 二、File 类介绍")]),s._v(" "),n("p",[s._v("大家 JDK 中源代码，你会发现 File 类没有无参构造方法，最常用的是使用下面的构造方法来生成 File 对象。")]),s._v(" "),n("p",[s._v("以 windows 操作系统为例，操作文件的方式如下！")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 指定一个完整路径，获取文件对象\nFile file = new File("D:\\\\Files\\\\test.txt");\nSystem.out.println(file1.getName());\n\n// 指定一个父文件路径和子文件名称，获取文件对象\nFile file = new File("D:\\\\Files", "test.txt");\nSystem.out.println(file2.getName());\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("File 类中定义了很多关于 File 对象的一些操作方法，我们通过一段代码一起来看看。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static void main(String[] args) throws Exception {\n    // 指定一个文件完整路径，获取文件对象\n    File file = new File("D:\\\\Files\\\\test.txt");\n\n    // 获取文件父节点目录对象\n    File parentFile = file.getParentFile();\n\n    // 判断指定路径的文件目录是否存在\n    if(parentFile.exists()){\n        System.out.println("文件目录存在");\n    } else {\n        // 创建文件夹，可以自动创建多级文件夹\n        parentFile.mkdirs();\n        System.out.println("文件目录不存在，创建一个文件目录");\n    }\n\n    // 判断指定父节点路径的是否是一个目录\n    if(parentFile.isDirectory()){\n        System.out.println("父节点路径是一个目录");\n    }\n\n    // 判断指定路径的文件是否存在\n    if(file.exists()){\n        System.out.println("文件存在");\n    } else {\n        // 创建文件\n        file.createNewFile();\n        System.out.println("文件不存在，创建一个文件");\n    }\n\n    // 获取目录下的所有文件/文件夹（仅该层路径下）\n    File[] files = parentFile.listFiles();\n    System.out.print("路径下有文件：");\n    for (File f : files) {\n        System.out.print(f + "；");\n    }\n    System.out.println();\n\n    // 获取文件名、文件夹名\n    System.out.println("files[0]的文件名：" + files[0].getName());\n    // 获取文件、文件夹路径\n    System.out.println("files[0]的文件路径：" + files[0].getPath());\n    // 获取文件、文件夹绝对路径\n    System.out.println("files[0]的绝对路径：" + files[0].getAbsolutePath());\n    // 获取文件父目录路径\n    System.out.println("files[0]的父文件夹名：" + files[0].getParent());\n    // 判断文件、文件夹是否存在\n    System.out.println(files[0].exists() ? "files[0]的存在" : "files[0]的不存在");\n    // 判断文件是否可写\n    System.out.println(files[0].canWrite() ? "files[0]的可写" : "files[0]的不可写");\n    // 判断文件是否可读\n    System.out.println(files[0].canRead() ? "files[0]的可读" : "files[0]的不可读");\n    // 判断文件是否可执行\n    System.out.println(files[0].canExecute() ? "file[0]可执行" : "file[0]不可执行");\n    // 判断文件、文件夹是不是目录\n    System.out.println(files[0].isDirectory() ? "files[0]的是目录" : "files[0]的不是目录");\n    // 判断拿文件、文件夹是不是标准文件\n    System.out.println(files[0].isFile() ? "files[0]的是文件" : "files[0]的不是文件");\n    // 判断路径名是不是绝对路径\n    System.out.println(files[0].isAbsolute() ? "files[0]的路径名是绝对路径" : "files[0]的路径名不是绝对路径");\n    // 获取文件、文件夹上一次修改时间\n    System.out.println("files[0]的最后修改时间：" + files[0].lastModified());\n    // 获取文件的字节数，如果是一个文件夹则这个值为0\n    System.out.println("files[0]的大小：" + files[0].length() + " Bytes");\n    // 获取文件路径URI后的路径名\n    System.out.println("files[0]的路径转换为URI：" + files[0].toURI());\n\n    // 下面的代码逻辑，假设目录下有3个以上文件\n\n    // 对文件重命名\n    File newfile = new File(file.getParentFile(), "22.txt");  //新的文件名称\n    files[0].renameTo(newfile);\n\n    // 删除指定的文件、文件夹\n    files[1].delete();\n\n    // 当虚拟机终止时删除指定的文件、文件夹\n    files[2].deleteOnExit();\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("文件目录存在\n父节点路径是一个目录\n文件存在\n路径下有文件：D:\\Files\\1.txt；D:\\Files\\2.txt；D:\\Files\\3.txt；\nfiles[0]1.txt\nfiles[0]的文件路径：D:\\Files\\1.txt\nfiles[0]的绝对路径：D:\\Files\\1.txt\nfiles[0]的父文件夹名：D:\\Files\nfiles[0]的存在\nfiles[0]的可写\nfiles[0]的可读\nfile[0]不可执行\nfiles[0]的不是目录\nfiles[0]的是文件\nfiles[0]的路径名是绝对路径\nfiles[0]的最后修改时间：1686814709000\nfiles[0]的大小：8 Bytes\nfiles[0]的路径转换为URI：file:/D:/Files/1.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("示例代码中，基本比较全面地演示了 File 的一些基本用法，比如文件或者文件夹的新增、重命名、删除，以及获取文件或者文件夹相关信息等操作。")]),s._v(" "),n("p",[s._v("其中有两点地方，值得注意：")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("第一个就是分隔符的问题。不同的操作系统，路径分隔符是不一样的，这个可以通过"),n("code",[s._v("File.separator")]),s._v("解决，具体实现看下面")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("第二个就是删除的如果是一个文件夹的话，文件夹下还有文件 / 文件夹，是无法删除成功的")])])])]),s._v(" "),n("p",[s._v("关于不同操作系统下的路径符号问题解决办法！（windows->“\\”;Linux->“/”）")]),s._v(" "),n("p",[s._v("在实际的编程过程中，我们不可能为了区分操作系统，然后又单独写一份文件路径。")]),s._v(" "),n("p",[s._v("可以通过"),n("code",[s._v("File.separator")]),s._v("来实现跨平台的编程逻辑，"),n("code",[s._v("File.separator")]),s._v("会根据不同的操作系统取不同操作系统下的分隔符。")]),s._v(" "),n("p",[s._v("以上面的示范代码为例，我们可以对写法进行如下改造！")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// windows 系统下的文件绝对路径定义方式\nString path = "d:"+File.separator +"Files"+File.separator+"text.txt";\nFile file = new File(path);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("文件的路径结果会与预期一致！")]),s._v(" "),n("h2",{attrs:{id:"三、文件的读写操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、文件的读写操作"}},[s._v("#")]),s._v(" 三、文件的读写操作")]),s._v(" "),n("p",[s._v("对文件的读写，可以通过字节流或者字符流接口来完成，但不管哪种方式，大致分以下几个步骤完成。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("第一步：获取一个文件 file 对象")])]),s._v(" "),n("li",[n("p",[s._v("第二步：通过 file 对象，获取一个字节流或者字符流接口的对象，进行读写操作")])]),s._v(" "),n("li",[n("p",[s._v("第三步：关闭文件流")])])]),s._v(" "),n("p",[s._v("具体的代码实践如下！")]),s._v(" "),n("h4",{attrs:{id:"_3-1、通过字节流接口写入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、通过字节流接口写入"}},[s._v("#")]),s._v(" 3.1、通过字节流接口写入")]),s._v(" "),n("p",[s._v("字节流接口的文件写入，可以通过"),n("code",[s._v("OutputStream")]),s._v("下的子类"),n("code",[s._v("FileOutputStream")]),s._v("来实现文件的数据写入操作。")]),s._v(" "),n("p",[s._v("具体实例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 创建一个 readWriteDemo.txt 文件\nFile file = new File("readWriteDemo.txt");\nif(!file.exists()){\n    file.createNewFile();\n}\n\n// 向文件中写入数据(这种方式会覆盖原始数据)\nOutputStream outputStream = new FileOutputStream(file);\nString str = "我们一起学习Java";\noutputStream.write(str.getBytes(StandardCharsets.UTF_8));\noutputStream.close();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("上面的操作方式会覆盖原始数据，如果想在已有的文件里面，进行追加写入数据，可以如下方式实现。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 追加数据写入(这种方式不会覆盖原始数据)\nOutputStream appendOutputStream = new FileOutputStream(file, true);\nString str = "-----这是追加的内容------";\nappendOutputStream.write(str.getBytes(StandardCharsets.UTF_8));\nappendOutputStream.close();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"_3-2、通过字节流接口读取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、通过字节流接口读取"}},[s._v("#")]),s._v(" 3.2、通过字节流接口读取")]),s._v(" "),n("p",[s._v("字节流方式的文件读取，可以通过"),n("code",[s._v("InputStream")]),s._v("下的子类"),n("code",[s._v("FileInputStream")]),s._v("来实现文件的数据读取操作。")]),s._v(" "),n("p",[s._v("具体实例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 获取 readWriteDemo.txt 文件\nFile file = new File("readWriteDemo.txt");\nif(file.exists()){\n    // 获取文件流\n    InputStream input = new FileInputStream(file);\n\n    // 临时区\n    byte[] buffer = new byte[1024];\n\n    // 分次读取数据，每次最多读取1024个字节，将数据读取到临时区之中，同时返回读取的字节个数，如果遇到文件末尾，会返回-1\n    int len;\n    while ((len = input.read(buffer)) > -1) {\n        // 字节转为字符串\n        String msg = new String(buffer, 0, len, StandardCharsets.UTF_8);\n        System.out.println(msg);\n    }\n\n    // 数据读取完毕之后，关闭输入流\n    input.close();\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h4",{attrs:{id:"_3-3、通过字符流接口写入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、通过字符流接口写入"}},[s._v("#")]),s._v(" 3.3、通过字符流接口写入")]),s._v(" "),n("p",[s._v("在之前的文章中，我们了解到为了简化字符的数据传输操作，JDK 提供了 Writer 与 Reader 字符流接口。")]),s._v(" "),n("p",[s._v("字符流方式的文件写入，可以通过"),n("code",[s._v("Writer")]),s._v("下的子类"),n("code",[s._v("FileWriter")]),s._v("来实现文件的数据写入操作。")]),s._v(" "),n("p",[s._v("具体实例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 创建一个 newReadWriteDemo.txt 文件\nFile file = new File("newReadWriteDemo.txt");\nif(!file.exists()){\n    file.createNewFile();\n}\n// 实例化Writer类对象\nWriter out = new FileWriter(file) ;\n// 输出字符串\nout.write("Hello");\n// 输出换行\nout.write("\\n");\n// 追加信息，append 方法底层本质调用的是 write 方法\nout.append("我们一起来学习Java");\n\n// 关闭输出流\nout.close();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h4",{attrs:{id:"_3-4、通过字符流接口读取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、通过字符流接口读取"}},[s._v("#")]),s._v(" 3.4、通过字符流接口读取")]),s._v(" "),n("p",[s._v("字符流方式的文件读取，可以通过"),n("code",[s._v("Reader")]),s._v("下的子类"),n("code",[s._v("FileReader")]),s._v("来实现文件的数据读取操作。")]),s._v(" "),n("p",[s._v("具体实例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 创建一个 newReadWriteDemo.txt 文件\nFile file = new File("newReadWriteDemo.txt");\nif(file.exists()){\n    // 实例化输入流\n    Reader reader = new FileReader(file);\n    // 临时区\n    char[] buffer = new char[1024];\n\n    // 分次读取数据，每次最多读取1024个字符，将数据读取到临时区之中，同时返回读取的字节个数，如果遇到文件末尾，会返回-1\n    int len;\n    while ((len = reader.read(buffer)) > -1) {\n        // 字符转为字符串\n        String msg = new String(buffer, 0, len);\n        System.out.println(msg);\n    }\n\n    // 关闭输入流\n    reader.close();\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h4",{attrs:{id:"_3-5、文件拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5、文件拷贝"}},[s._v("#")]),s._v(" 3.5、文件拷贝")]),s._v(" "),n("p",[s._v("在实际的软件开发过程中，避免不了文件拷贝。通过以上的接口方法，我们可以很容易的写出一个文件复制的方法。")]),s._v(" "),n("p",[s._v("比如以字节流操作为例，具体实例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 1. 创建一个字节数组作为数据读取的临时区\nbyte[] buffer = new byte[1024];\n// 2. 创建一个 FileInputStream 对象用于读取文件\nInputStream input = new FileInputStream(new File("input.txt"));\n// 3. 创建一个 FileOutputStream 对象用于写入文件\nOutputStream output = new FileOutputStream(new File("output.txt"));\n// 4. 循环读取文件内容到临时区，并将临时区中的数据写入到输出文件中\nint length;\nwhile ((length = input.read(buffer)) != -1) {\n    output.write(buffer, 0, length);\n}\n// 5. 关闭输入流\ninput.close();\n// 6. 关闭输出流\noutput.close()\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("除此之外，JDK 也支持采用"),n("strong",[s._v("缓存流读写技术来实现数据的高效读写")]),s._v("。")]),s._v(" "),n("p",[s._v("之所为高效，是因为字节缓冲流内部维护了一个缓冲区，读写时先将数据存入缓冲区中，当缓冲区满时再将数据一次性读取出来或者写入进去，这样可以减少与磁盘实际的 I/O 操作次数，可以显著提升读写操作的效率。")]),s._v(" "),n("p",[s._v("比如以字节流缓冲流为例，包装类分别是："),n("strong",[s._v("BufferedInputStream（字节缓存输入流） 和 BufferedOutputStream（字符缓存输入流）")]),s._v("。")]),s._v(" "),n("p",[s._v("采用缓冲流拷贝文件，具体实例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 1. 创建一个字节数组作为数据读取的临时区\nbyte[] buffer = new byte[1024];\n// 2. 创建一个 BufferedInputStream 缓存输入流对象用于读取文件\nInputStream bis = new BufferedInputStream(new FileInputStream(new File("input.txt")));\n// 3. 创建一个 BufferedOutputStream 缓存输出流对象用于写入文件\nOutputStream bos = new BufferedOutputStream(new FileOutputStream(new File("output.txt")));\n\n// 4. 循环读取文件内容到临时区，并将缓冲区中的数据写入到输出文件中\nint length;\nwhile ((length = bis.read(buffer)) != -1) {\n    bos.write(buffer, 0, length);\n}\n// 5. 关闭输入流\nbis.close();\n// 6. 关闭输出流\nbos.close();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("strong",[s._v("在大文件的拷贝中，使用缓存流比不使用缓存流技术至少快 10 倍")]),s._v("，耗时是很明显的，大家可以亲自试一下。")]),s._v(" "),n("h2",{attrs:{id:"四、字节流与字符流的互转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、字节流与字符流的互转"}},[s._v("#")]),s._v(" 四、字节流与字符流的互转")]),s._v(" "),n("p",[s._v("在之前的文章中，我们了解到字节流与字符流，两者其实是可以互转的。")]),s._v(" "),n("p",[s._v("其中 InputStreamReader 和 OutputStreamWriter 就是转化桥梁。")]),s._v(" "),n("h4",{attrs:{id:"_4-1、字节流转字符流的操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、字节流转字符流的操作"}},[s._v("#")]),s._v(" 4.1、字节流转字符流的操作")]),s._v(" "),n("p",[s._v("字节流转字符流的操作，主要体现在数据的读取阶段，转化过程如下图所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:e(353),alt:""}})]),s._v(" "),n("p",[s._v("以上文中的字节流接口读取文件为例，如果我们想要转换字符流接口来读取数据，具体的操作方式如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 获取 readWriteDemo.txt 文件\nFile file = new File("readWriteDemo.txt");\nif(file.exists()){\n    // 获取字节输入流\n    InputStream inputStream = new FileInputStream(file);\n    // 转字符流输入流，指定 UTF_8 编码规则，读取数据\n    Reader reader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);\n\n    // 缓冲区\n    char[] buffer = new char[1024];\n\n    // 分次读取数据，每次最多读取1024个字符，将数据读取到缓冲区之中，同时返回读取的字节个数\n    int len;\n    while ((len = reader.read(buffer)) > -1) {\n        // 字符转为字符串\n        String msg = new String(buffer, 0, len);\n        System.out.println(msg);\n    }\n\n    // 关闭输入流\n    reader.close();\n    inputStream.close();\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("当读取数据的时候，先通过字节流读取，再转成字符流读取。")]),s._v(" "),n("p",[s._v("字节流转字符流，需要指定编码规则，如果没有指定，会取当系统默认的编码规则。")]),s._v(" "),n("h4",{attrs:{id:"_4-2、字符流转字节流的操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、字符流转字节流的操作"}},[s._v("#")]),s._v(" 4.2、字符流转字节流的操作")]),s._v(" "),n("p",[s._v("字符流转字节流的操作，主要体现在数据的写入阶段，转化过程如下图所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:e(354),alt:""}})]),s._v(" "),n("p",[s._v("以上文中的字节流接口写入文件为例，如果我们想要转换字符流接口来写入数据，具体的操作方式如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 创建一个 newReadWriteDemo.txt 文件\nFile file = new File("readWriteDemo.txt");\nif(!file.exists()){\n    file.createNewFile();\n}\n\n// 获取字节输出流\nOutputStream outputStream = new FileOutputStream(file);\n// 转字符流输出流，指定 UTF_8 编码规则,写入数据\nWriter out = new OutputStreamWriter(outputStream, StandardCharsets.UTF_8);\n// 输出字符串\nout.write("Hello");\n// 输出换行\nout.write("\\n");\n// 追加信息，append 方法底层本质调用的是 write 方法\nout.append("我们一起来学习Java");\n\n// 关闭输出流\nout.close();\noutputStream.close();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("同样的，当写入数据的时候，先通过字符流写入，再转成字节流输出。")]),s._v(" "),n("p",[s._v("字符流转字节流，也需要指定编码规则，如果没有指定，会取当系统默认的编码规则。")])])}),[],!1,null,null,null);n.default=t.exports},353:function(s,n,e){s.exports=e.p+"assets/img/u_1395356888-3309539893.ea1057f5.png"},354:function(s,n,e){s.exports=e.p+"assets/img/file-121212101212-format,png.b5c01c2a.png"}}]);