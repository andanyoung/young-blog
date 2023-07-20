(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{814:function(a,s,t){"use strict";t.r(s);var n=t(4),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"面向对象三大特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象三大特征"}},[a._v("#")]),a._v(" 面向对象三大特征")]),a._v(" "),s("h3",{attrs:{id:"封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[a._v("#")]),a._v(" 封装")]),a._v(" "),s("p",[a._v("封装是指把一个对象的状态信息（也就是属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性。就好像我们看不到挂在墙上的空调的内部的零件信息（也就是属性），但是可以通过遥控器（方法）来控制空调。如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。就好像如果没有空调遥控器，那么我们就无法操控空凋制冷，空调本身就没有意义了（当然现在还有很多其他方法 ，这里只是为了举例子）。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Student")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//id属性私有化")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//name属性私有化")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取id的方法")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//设置id的方法")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取name的方法")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//设置name的方法")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("h3",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[a._v("#")]),a._v(" 继承")]),a._v(" "),s("p",[a._v("不同类型的对象，相互之间经常有一定数量的共同点。例如，小明同学、小红同学、小李同学，都共享学生的特性（班级、学号等）。同时，每一个对象还定义了额外的特性使得他们与众不同。例如小明的数学比较好，小红的性格惹人喜爱；小李的力气比较大。继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承，可以快速地创建新的类，可以提高代码的重用，程序的可维护性，节省大量创建新类的时间 ，提高我们的开发效率。")]),a._v(" "),s("p",[s("strong",[a._v("关于继承如下 3 点请记住：")])]),a._v(" "),s("ol",[s("li",[s("mark",[a._v("子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，"),s("strong",[a._v("只是拥有")]),a._v("。")])]),a._v(" "),s("li",[a._v("子类可以拥有自己属性和方法，即子类可以对父类进行扩展。")]),a._v(" "),s("li",[a._v("子类可以用自己的方式实现父类的方法。（以后介绍）。")])]),a._v(" "),s("h3",{attrs:{id:"多态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[a._v("#")]),a._v(" 多态")]),a._v(" "),s("p",[a._v("多态，顾名思义，表示一个对象具有多种的状态，具体表现为父类的引用指向子类的实例。")]),a._v(" "),s("p",[s("strong",[a._v("多态的特点:")])]),a._v(" "),s("ul",[s("li",[a._v("对象类型和引用类型之间具有继承（类）/实现（接口）的关系；")]),a._v(" "),s("li",[a._v("引用类型变量发出的方法调用的到底是哪个类中的方法，必须在程序运行期间才能确定；")]),a._v(" "),s("li",[a._v("多态不能调用“只在子类存在但在父类不存在”的方法；")]),a._v(" "),s("li",[a._v("如果子类重写了父类的方法，真正执行的是子类覆盖的方法，如果子类没有覆盖父类的方法，执行的是父类的方法。")])]),a._v(" "),s("h2",{attrs:{id:"接口和抽象类有什么共同点和区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口和抽象类有什么共同点和区别"}},[a._v("#")]),a._v(" 接口和抽象类有什么共同点和区别？")]),a._v(" "),s("p",[s("strong",[a._v("共同点")]),a._v(" ：")]),a._v(" "),s("ul",[s("li",[a._v("都不能被实例化。")]),a._v(" "),s("li",[a._v("都可以包含抽象方法。")]),a._v(" "),s("li",[a._v("都可以有默认实现的方法（Java 8 可以用 "),s("code",[a._v("default")]),a._v(" 关键字在接口中定义默认方法）。")])]),a._v(" "),s("p",[s("strong",[a._v("区别")]),a._v(" ：")]),a._v(" "),s("ul",[s("li",[a._v("接口主要用于对类的行为进行约束，你实现了某个接口就具有了对应的行为。抽象类主要用于代码复用，强调的是所属关系。")]),a._v(" "),s("li",[a._v("一个类只能继承一个类，但是可以实现多个接口。")]),a._v(" "),s("li",[a._v("接口中的成员变量只能是 "),s("code",[a._v("public static final")]),a._v(" 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认 default，可在子类中被重新定义，也可被重新赋值。")])]),a._v(" "),s("h2",{attrs:{id:"java-变量命名规则为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-变量命名规则为"}},[a._v("#")]),a._v(" Java 变量命名规则为")]),a._v(" "),s("p",[a._v("1、Java 变量命名只能使用字母、数字、下划线、美元符号($)组成。")]),a._v(" "),s("p",[a._v("2、变量名以字母、下划线或者美元符号开头，其中以美元符号开头命名的变量虽然能够编译通过但是不建议使用。")]),a._v(" "),s("p",[a._v("3、变量的名字可大小写混用，但首字符应小写。")]),a._v(" "),s("p",[a._v("4、Java 变量名不限制长度，在命名的时候，尽量使用完整的单词进行命名，不要使用缩写。")]),a._v(" "),s("p",[a._v("5、变量名不可以和 java 关键字冲突，但是可以包含关键字。")]),a._v(" "),s("h2",{attrs:{id:"_3-0-1-0-3-返回值是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-1-0-3-返回值是什么"}},[a._v("#")]),a._v(" "),s("code",[a._v("3*0.1 == 0.3")]),a._v(" 返回值是什么")]),a._v(" "),s("p",[a._v("false,因为有些浮点数不能完全精确的表示出来.")]),a._v(" "),s("h2",{attrs:{id:"a-a-b-与-a-b-有什么区别吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-a-b-与-a-b-有什么区别吗"}},[a._v("#")]),a._v(" a=a+b 与 a+=b 有什么区别吗?")]),a._v(" "),s("p",[s("code",[a._v("+=")]),a._v(" 操作符会进行隐式自动类型转换,此处 a+=b 隐式的将加操作的结果类型强制转换为持有结果的类型,而"),s("code",[a._v("a=a+b")]),a._v("则不会自动进行类型转换.如：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("byte a = 127;\nbyte b = 127;\nb = a + b; // 报编译错误:cannot convert from int to byte\nb += a;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("以下代码是否有错,有的话怎么改？")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("short s1= 1;\ns1 = s1 + 1;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("有错误."),s("mark",[a._v("short/byte 类型在进行运算时会自动提升为 int 类型")]),a._v(",也就是说 s1+1 的运算结果是 int 类型,而 s1 是short 类型,此时编译器会报错\n正确写法：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("short s1= 1;\ns1 += 1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("code",[a._v("+=")]),a._v("操作符会对右边的表达式结果强转匹配左边的数据类型,所以没错.")]),a._v(" "),s("h2",{attrs:{id:"try-catch-finally-try-里有-return-finally-还执行么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-finally-try-里有-return-finally-还执行么"}},[a._v("#")]),a._v(" try catch finally，try 里有 return，finally 还执行么？")]),a._v(" "),s("p",[a._v("执行，并且 finally 的执行早于 try 里面的 return\n结论：\n1、不管有木有出现异常，finally 块中代码都会执行；\n2、当 try 和 catch 中有 return 时，finally 仍然会执行；\n3、finally 是在 return 后面的表达式运算后执行的（此时并没有返回运算后的值，而是先把要返回的值保存起来，管 finally 中的代码怎么样，返回的值都不会改变，任然是之前保存的值），所以函数返回值是在 finally 执行前确定的；\n4、finally 中最好不要包含 return，否则程序会提前退出，返回值不是 try 或 catch 中保存的返回值。")]),a._v(" "),s("h2",{attrs:{id:"oom-你遇到过哪些情况-sof-你遇到过哪些情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oom-你遇到过哪些情况-sof-你遇到过哪些情况"}},[a._v("#")]),a._v(" OOM 你遇到过哪些情况，SOF 你遇到过哪些情况")]),a._v(" "),s("h3",{attrs:{id:"oom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oom"}},[a._v("#")]),a._v(" OOM：")]),a._v(" "),s("p",[a._v("1，OutOfMemoryError 异常\n除了程序计数器外，虚拟机内存的其他几个运行时区域都有发生 OutOfMemoryError(OOM)异常的可能。\nJava Heap 溢出：\n一般的异常信息：java.lang.OutOfMemoryError:Java heap spacess。")]),a._v(" "),s("p",[a._v("java 堆用于存储对象实例，我们只要不断的创建对象，并且保证 GC Roots 到对象之间有可达路径来避免垃圾回收机制清除这些对象，就会在对象数量达到最大堆容量限制后产生内存溢出异常。")]),a._v(" "),s("p",[a._v("出现这种异常，一般手段是先通过内存映像分析工具(如 Eclipse Memory Analyzer、jmap命令)对 dump 出来的堆转存快照进行分析，重点是确认内存中的对象是否是必要的，")]),a._v(" "),s("p",[s("strong",[a._v("先分清是因为内存泄漏(Memory Leak)还是内存溢出(Memory Overflow)。")])]),a._v(" "),s("ul",[s("li",[a._v("如果是内存泄漏，可进一步通过工具查看泄漏对象到 GCRoots 的引用链。于是就能找到泄漏对象是通过怎样的路径与 GC Roots 相关联并导致垃圾收集器无法自动回收。")]),a._v(" "),s("li",[a._v("查看大对象，根据实际情况判断是否有用或者是否可以使用对象池优化等。")]),a._v(" "),s("li",[a._v("如果不存在泄漏，那就应该检查虚拟机的参数(-Xmx 与-Xms)的设置是否适当。")])]),a._v(" "),s("p",[a._v("2，虚拟机栈和本地方法栈溢出\n如果线程请求的栈深度大于虚拟机所允许的最大深度，将抛出 StackOverflowError 异常。\n如果虚拟机在扩展栈时无法申请到足够的内存空间，则抛出 OutOfMemoryError 异常\n这里需要注意当栈的大小越大可分配的线程数就越少。\n3，运行时常量池溢出\n异常信息：java.lang.OutOfMemoryError:PermGenspace\n如果要向运行时常量池中添加内容，最简单的做法就是使用 String.intern()这个 Native 方法。该方法的作用是：如果池中已经包含一个等于此 String 的字符串，则返回代表池中这个字符串的 String 对象；否则，将此 String 对象包含的字符串添加到常量池中，并且返回此 String 对象的引用。由于常量池分配在方法区内，我们可以通过-XX:PermSize 和-XX:MaxPermSize 限制方法区的大小，从而间接限制其中常量池的容量。\n4，方法区溢出\n方法区用于存放 Class 的相关信息，如类名、访问修饰符、常量池、字段描述、方法描述等。也有可能是方法区中保存的 class 对象没有被及时回收掉或者 class 信息占用的内存超过了我们配置。\n异常信息：java.lang.OutOfMemoryError:PermGenspace\n方法区溢出也是一种常见的内存溢出异常，一个类如果要被垃圾收集器回收，判定条件是很苛刻的。在经常动态生成大量 Class 的应用中，要特别注意这点。")]),a._v(" "),s("h3",{attrs:{id:"sof-堆栈溢出-stackoverflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sof-堆栈溢出-stackoverflow"}},[a._v("#")]),a._v(" SOF（堆栈溢出 StackOverflow）：")]),a._v(" "),s("p",[a._v("StackOverflowError 的定义：当应用程序递归太深而发生堆栈溢出时，抛出该错误。\n因为栈一般默认为 1-2m，一旦出现死循环或者是大量的递归调用，在不断的压栈过程中，造成栈容量超过 1m 而导致溢出。\n栈溢出的原因：递归调用，大量循环或死循环，全局变量是否过多，数组、List、map 数据过大。")]),a._v(" "),s("h2",{attrs:{id:"反射机制的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射机制的优缺点"}},[a._v("#")]),a._v(" 反射机制的优缺点")]),a._v(" "),s("p",[s("strong",[a._v("优点：")])]),a._v(" "),s("p",[a._v("1）能够运行时动态获取类的实例，提高灵活性；")]),a._v(" "),s("p",[a._v("2）与动态编译结合")]),a._v(" "),s("p",[s("strong",[a._v("缺点：")])]),a._v(" "),s("p",[a._v("1）使用反射性能较低，需要解析字节码，将内存中的对象进行解析。")]),a._v(" "),s("p",[a._v("​\t\t解决方案：")]),a._v(" "),s("p",[a._v("​\t\t1、通过setAccessible(true) 关闭JDK的安全检查来提升反射速度；")]),a._v(" "),s("p",[a._v("​\t\t2、多次创建一个类的实例时，有缓存会快很多")]),a._v(" "),s("p",[a._v("​\t\t3、 ReflectASM工具类，通过字节码生成的方式加快反射速度")]),a._v(" "),s("p",[a._v("2）相对不安全，破坏了封装性（因为通过反射可以获得私有方法和属性）")])])}),[],!1,null,null,null);s.default=r.exports}}]);