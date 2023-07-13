(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{670:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"一、摘要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、摘要"}},[s._v("#")]),s._v(" 一、摘要")]),s._v(" "),n("p",[s._v("RandomAccessFile 类，也被称为"),n("strong",[s._v("随机访问文件类")]),s._v("。")]),s._v(" "),n("p",[s._v("RandomAccessFile 可以说是 Java 体系中功能最为丰富的文件操作类，相比之前介绍的通过字节流或者字符流接口方式读写文件，"),n("strong",[s._v("RandomAccessFile 类可以跳转到文件的任意位置处进行读写数据，而无需把文件从头读到尾")]),s._v("，但是该类仅限于操作文件，不能访问其他的 IO 设备，如网络、内存映像等。")]),s._v(" "),n("p",[n("strong",[s._v("所以如果需要访问文件的部分内容，而不是把文件从头读到尾，使用 RandomAccessFile 将是更好的选择")]),s._v("。")]),s._v(" "),n("p",[s._v("实际上，虽然"),n("code",[s._v("RandomAccessFile")]),s._v("类具备随机读写数据的功能，但是它既不是"),n("code",[s._v("InputStream")]),s._v("的子类，也不是"),n("code",[s._v("OutputStream")]),s._v("的子类，绝大部分的方法都是从零开始写的，这可能是因为  RandomAccessFile 需要在文件里面前后移动，它的行为与其它的 I/O 类有着根本性的不同，所以相对比较独立。")]),s._v(" "),n("p",[n("code",[s._v("RandomAccessFile")]),s._v("对象类中内置了一个位置指示器，可以指向当前读写处的位置，当读写 n 个字节后，文件指示器将指向这 n 个字节后的下一个字节处。刚打开文件时，文件指示器指向文件的开头处，当移动文件指示器到新的位置时，随后的读写将从新的位置开始，这是它与其他的文件读写方式最大的不同。")]),s._v(" "),n("p",[s._v("基本上，"),n("code",[s._v("RandomAccessFile")]),s._v("的工作方式是，结合"),n("code",[s._v("DataInputStream")]),s._v("和"),n("code",[s._v("DataOutputStream")]),s._v("类完成数据的读写，再加上自己的一些方法，比如定位用的 "),n("code",[s._v("getFilePointer")]),s._v("方法，在文件里移动用的"),n("code",[s._v("seek")]),s._v("方法，以及判断文件大小"),n("code",[s._v("length")]),s._v("方法、跳过多少字节数的"),n("code",[s._v("skipBytes")]),s._v("方法等，来完成文件的随机访问和读写操作。")]),s._v(" "),n("p",[s._v("具体怎么使用呢，我们一起来看看！")]),s._v(" "),n("h1",{attrs:{id:"二、randomaccessfile-类基本介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、randomaccessfile-类基本介绍"}},[s._v("#")]),s._v(" 二、RandomAccessFile 类基本介绍")]),s._v(" "),n("p",[s._v("下面先来看看一个简单的例子。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 获取随机访问文件对象\nRandomAccessFile raf = new RandomAccessFile(new File("randomFileDemo.txt"), "rw");\nfor (int i = 0; i < 10; i++) {\n    // 写入数据，1个int占4个字节\n    raf.writeInt(i);\n}\nraf.close();\n\nSystem.out.println("================修改前的内容===============" );\n// 重新获取随机访问文件对象\nraf = new RandomAccessFile(new File("randomFileDemo.txt"), "rw");\nfor (int i = 0; i < 10; i++) {\n    System.out.println("Value：" + i + ": " + raf.readInt());\n}\nraf.close();\n\n// 重新获取随机访问文件对象\nraf = new RandomAccessFile(new File("randomFileDemo.txt"), "rw");\n// 设置文件指针偏移量，从0开始，直接将文件指针移到第6个int数据后面（1个int占4个字节）\nraf.seek(5 * 4);\n//覆盖第6个int数据\nraf.writeInt(16);\nraf.close();\n\nSystem.out.println("================修改后的内容===============" );\n// 重新获取随机访问文件对象\nraf = new RandomAccessFile(new File("randomFileDemo.txt"), "rw");\nfor (int i = 0; i < 10; i++) {\n    System.out.println("Value：" + i + ": " + raf.readInt());\n}\nraf.close();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("p",[s._v("输出结果：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("================修改前的内容===============\nValue：0: 0\nValue：1: 1\nValue：2: 2\nValue：3: 3\nValue：4: 4\nValue：5: 5\nValue：6: 6\nValue：7: 7\nValue：8: 8\nValue：9: 9\n================修改后的内容===============\nValue：0: 0\nValue：1: 1\nValue：2: 2\nValue：3: 3\nValue：4: 4\nValue：5: 16\nValue：6: 6\nValue：7: 7\nValue：8: 8\nValue：9: 9\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[n("code",[s._v("RandomAccessFile")]),s._v("类为用户提供了两种构造方法，具体操作方式如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/ 第一种构造方法：指定 file 对象和读写模式\nRandomAccessFile raf = new RandomAccessFile(File file, String mode);\n\n// 第二种构造方法：指定 filename 路径和读写模式\nRandomAccessFile raf = new RandomAccessFile(String filename, String mode);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("其实第二种构造方法也是"),n("code",[s._v("new File()")]),s._v("出来，再调用第一种构造方法，两者都可以获取随机访问文件对象。")]),s._v(" "),n("p",[s._v("至于"),n("code",[s._v("mode")]),s._v("，表示以何种方式打开文件，"),n("code",[s._v("Java")]),s._v("给开发者提供了四种"),n("code",[s._v("mode")]),s._v("值，具体解释如下！")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[s._v("模 式")])]),s._v(" "),n("th",[n("strong",[s._v("作 用")])])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("r")]),s._v(" "),n("td",[s._v("表示以只读方式打开，调用结果对象的任何 write 方法都将导致抛出 IOException")])]),s._v(" "),n("tr",[n("td",[s._v("rw")]),s._v(" "),n("td",[s._v("打开以便读取和写入，如果该文件尚不存在，则尝试创建该文件")])]),s._v(" "),n("tr",[n("td",[s._v("rws")]),s._v(" "),n("td",[s._v('打开以便读取和写入，相对于"rw"，还要求对文件内容或元数据的每个更新都同步写入到底层存储设备')])]),s._v(" "),n("tr",[n("td",[s._v("rwd")]),s._v(" "),n("td",[s._v('打开以便读取和写入，相对于"rw"，还要求对文件内容的每个更新都同步写入到底层存储设备')])])])]),s._v(" "),n("p",[s._v('值得注意的地方是，**"rw" 模式下，Java 并不强求指定的路径下一定存在某个文件，假如文件不存在，会自动创建 **。')]),s._v(" "),n("p",[n("code",[s._v("RandomAccessFile")]),s._v("类为用户提供的方法比较多，我们可以关注下几个重要的方法即可，详细方法如下图！")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[s._v("方 法")])]),s._v(" "),n("th",[n("strong",[s._v("作 用")])])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("void close()")]),s._v(" "),n("td",[s._v("重要，关闭此随机访问文件流并释放与该流关联的所有系统资源")])]),s._v(" "),n("tr",[n("td",[s._v("FileChannel getChannel()")]),s._v(" "),n("td",[s._v("返回与此文件关联的唯一 FileChannel 对象，NIO 用到")])]),s._v(" "),n("tr",[n("td",[s._v("long getFilePointer()")]),s._v(" "),n("td",[s._v("返回此文件中的当前偏移量")])]),s._v(" "),n("tr",[n("td",[s._v("long length()")]),s._v(" "),n("td",[s._v("返回此文件的长度")])]),s._v(" "),n("tr",[n("td",[s._v("int read()")]),s._v(" "),n("td",[s._v("从此文件中读取一个数据字节")])]),s._v(" "),n("tr",[n("td",[s._v("int read(byte[] b)")]),s._v(" "),n("td",[s._v("将最多 b.length 个数据字节从此文件读入 byte 数组，返回读入的总字节数，如果由于已经达到文件末尾而不再有数据，则返回-1。在至少一个输入字节可用前，此方法一直阻塞")])]),s._v(" "),n("tr",[n("td",[s._v("int read(byte[] b, int off, int len)")]),s._v(" "),n("td",[s._v("将最多 len 个数据字节从此文件的指定初始偏移量 off 读入 byte 数组")])]),s._v(" "),n("tr",[n("td",[s._v("boolean readBoolean()")]),s._v(" "),n("td",[s._v("从此文件读取一个 boolean，其余 readByte()、readChar()、readDouble()等类似")])]),s._v(" "),n("tr",[n("td",[s._v("String readLine()")]),s._v(" "),n("td",[s._v("从此文件读取文本的下一行")])]),s._v(" "),n("tr",[n("td",[s._v("void seek(long pos)")]),s._v(" "),n("td",[s._v("重要，设置到此文件开头测量到的文件指针偏移量，在该位置发生下一个读取或写入操作")])]),s._v(" "),n("tr",[n("td",[s._v("int skipBytes(int n)")]),s._v(" "),n("td",[s._v("重要，尝试跳过输入的 n 个字节以丢弃跳过的字节，返回跳过的字节数")])]),s._v(" "),n("tr",[n("td",[s._v("void write(byte[] b)")]),s._v(" "),n("td",[s._v("将 b.length 个字节从指定 byte 数组写入到此文件中")])]),s._v(" "),n("tr",[n("td",[s._v("void write(byte[] b, int off, int len)")]),s._v(" "),n("td",[s._v("将 len 个字节从指定 byte 数组写入到此文件，并从偏移量 off 处开始")])]),s._v(" "),n("tr",[n("td",[s._v("void write(int b)")]),s._v(" "),n("td",[s._v("向此文件写入指定的字节")])]),s._v(" "),n("tr",[n("td",[s._v("void writeBoolean(boolean v)")]),s._v(" "),n("td",[s._v("按单字节值将 boolean 写入该文件，其余 writeByte(int v)、writeBytes(String s)、writeChar(int v)等都类似")])])])]),s._v(" "),n("p",[n("strong",[s._v("RandomAccessFile 使用实例")])]),s._v(" "),n("p",[s._v("方法的使用，可以参考如下样例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('RandomAccessFile file = new RandomAccessFile("file.txt", "rw");\n// 以下向file文件中写数据\nfile.writeInt(20);// 占4个字节\nfile.writeDouble(8.236598);// 占8个字节\nfile.writeUTF("这是一个UTF字符串");// 这个长度写在当前文件指针的前两个字节处，可用readShort()读取\nfile.writeBoolean(true);// 占1个字节\nfile.writeShort(395);// 占2个字节\nfile.writeLong(2325451L);// 占8个字节\nfile.writeUTF("又是一个UTF字符串");\nfile.writeFloat(35.5f);// 占4个字节\nfile.writeChar(\'a\');// 占2个字节\n\nfile.seek(0);// 把文件指针位置设置到文件起始处\n\n// 以下从file文件中读数据，要注意文件指针的位置\nSystem.out.println("——————从file文件指定位置读数据——————");\nSystem.out.println(file.readInt());\nSystem.out.println(file.readDouble());\nSystem.out.println(file.readUTF());\n\nfile.skipBytes(3);// 将文件指针跳过3个字节，本例中即跳过了一个boolean值和short值。\nSystem.out.println(file.readLong());\n\nfile.skipBytes(file.readShort()); // 跳过文件中“又是一个UTF字符串”所占字节，注意readShort()方法会移动文件指针，所以不用加2。\nSystem.out.println(file.readFloat());\n\n//以下演示文件复制操作\nSystem.out.println("——————文件复制（从file到fileCopy）——————");\nfile.seek(0);\nRandomAccessFile fileCopy=new RandomAccessFile("fileCopy.txt","rw");\nint len=(int)file.length();//取得文件长度（字节数）\nbyte[] b=new byte[len];\nfile.readFully(b);//读取全部内容\nfileCopy.write(b);//全部写入目标文件\nSystem.out.println("复制完成！");\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("根据以上的方法介绍，我们可以利用"),n("code",[s._v("RandomAccessFile")]),s._v("实现一个在任意位置插入数据的操作，具体实例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class RandomAccessFileTest1 {\n\n    /**\n     * 插入数据\n     * @param skip 跳过多少过字节进行插入数据\n     * @param str 要插入的字符串\n     * @param fileName 文件路径\n     */\n    public static void insert(long skip, String str, String fileName){\n        try {\n            RandomAccessFile raf = new RandomAccessFile(fileName,"rw");\n            if(skip <  0 || skip > raf.length()){\n                System.out.println("跳过字节数无效");\n                return;\n            }\n            byte[] b = str.getBytes();\n            raf.setLength(raf.length() + b.length);\n            // 将尾部数据进行迁移\n            for(long i = raf.length() - 1; i > b.length + skip - 1; i--){\n                raf.seek(i - b.length);\n                byte temp = raf.readByte();\n                raf.seek(i);\n                raf.writeByte(temp);\n            }\n            // 从指定的位置，开始覆写数据\n            raf.seek(skip);\n            raf.write(b);\n            raf.close();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    /**\n     * 方法测试\n     * @param args\n     * @throws Exception\n     */\n    public static void main(String[] args) {\n        insert(0, "一起学习Java", "test.txt");\n        insert(0, "Hello，", "test.txt");\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("p",[s._v("文件内容结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Hello，一起学习Java\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h1",{attrs:{id:"三、randomaccessfile-类的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、randomaccessfile-类的应用"}},[s._v("#")]),s._v(" 三、RandomAccessFile 类的应用")]),s._v(" "),n("p",[s._v("在实际的开发过程中，RandomAccessFile 的一个重要应用场景就是网络请求中的文件多线程下载及断点续传。")]),s._v(" "),n("p",[s._v("首先将文件分成几块，然后每块用不同的线程进行下载，下面是一个利用多线程在写文件时的例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class RandomAccessFileTest2 {\n\n    public static void main(String[] args) throws Exception {\n        // 预分配文件所占的磁盘空间，磁盘中会创建一个指定大小的文件\n        RandomAccessFile raf = new RandomAccessFile("test.txt", "rw");\n        raf.setLength(1024*1024); // 预分配 1M 的文件空间\n        raf.close();\n\n        // 所要写入的文件内容\n        String s1 = "第一个字符串";\n        String s2 = "第二个字符串";\n        String s3 = "第三个字符串";\n        String s4 = "第四个字符串";\n        String s5 = "第五个字符串";\n\n        // 利用多线程同时写入一个文件\n        new FileWriteThread(1024*1,s1.getBytes()).start(); // 从文件的1024字节之后开始写入数据\n        new FileWriteThread(1024*2,s2.getBytes()).start(); // 从文件的2048字节之后开始写入数据\n        new FileWriteThread(1024*3,s3.getBytes()).start(); // 从文件的3072字节之后开始写入数据\n        new FileWriteThread(1024*4,s4.getBytes()).start(); // 从文件的4096字节之后开始写入数据\n        new FileWriteThread(1024*5,s5.getBytes()).start(); // 从文件的5120字节之后开始写入数据\n    }\n}\n\nclass FileWriteThread extends Thread{\n    private int skip;\n    private byte[] content;\n\n    public FileWriteThread(int skip,byte[] content){\n        this.skip = skip;\n        this.content = content;\n    }\n\n    @Override\n    public void run(){\n        RandomAccessFile raf = null;\n        try {\n            // 利用线程在文件的指定位置写入指定数据\n            raf = new RandomAccessFile("test.txt", "rw");\n            raf.seek(skip);\n            raf.write(content);\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            try {\n                raf.close();\n            } catch (Exception e) {\n            }\n        }\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])]),n("h1",{attrs:{id:"四、小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、小结"}},[s._v("#")]),s._v(" 四、小结")]),s._v(" "),n("p",[s._v("本文主要围绕 RandomAccessFile 类的基本概念和常用方法，做了一次简单的知识总结，该类是 IO 流体系中功能最丰富的文件内容访问类，既可以读取文件中任意位置的内容，也可以向文件任意位置写入数据。")]),s._v(" "),n("p",[s._v("当然 RandomAccessFile 当读写大文件的时候，会出现内存溢出问题，此时可以采用"),n("strong",[s._v("内存映射文件")]),s._v("方式进行读写数据，关于技术会在后期的文章中进行介绍。")]),s._v(" "),n("p",[s._v("内容难免有所遗漏，欢迎网友留言指出！")])])}),[],!1,null,null,null);n.default=t.exports}}]);