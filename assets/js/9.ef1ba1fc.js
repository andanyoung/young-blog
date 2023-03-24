(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{334:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"面向对象三大特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象三大特征"}},[s._v("#")]),s._v(" 面向对象三大特征")]),s._v(" "),a("h3",{attrs:{id:"封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[s._v("#")]),s._v(" 封装")]),s._v(" "),a("p",[s._v("封装是指把一个对象的状态信息（也就是属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性。就好像我们看不到挂在墙上的空调的内部的零件信息（也就是属性），但是可以通过遥控器（方法）来控制空调。如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。就好像如果没有空调遥控器，那么我们就无法操控空凋制冷，空调本身就没有意义了（当然现在还有很多其他方法 ，这里只是为了举例子）。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//id属性私有化")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//name属性私有化")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取id的方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置id的方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取name的方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置name的方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[s._v("#")]),s._v(" 继承")]),s._v(" "),a("p",[s._v("不同类型的对象，相互之间经常有一定数量的共同点。例如，小明同学、小红同学、小李同学，都共享学生的特性（班级、学号等）。同时，每一个对象还定义了额外的特性使得他们与众不同。例如小明的数学比较好，小红的性格惹人喜爱；小李的力气比较大。继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承，可以快速地创建新的类，可以提高代码的重用，程序的可维护性，节省大量创建新类的时间 ，提高我们的开发效率。")]),s._v(" "),a("p",[a("strong",[s._v("关于继承如下 3 点请记住：")])]),s._v(" "),a("ol",[a("li",[a("mark",[s._v("子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，"),a("strong",[s._v("只是拥有")]),s._v("。")])]),s._v(" "),a("li",[s._v("子类可以拥有自己属性和方法，即子类可以对父类进行扩展。")]),s._v(" "),a("li",[s._v("子类可以用自己的方式实现父类的方法。（以后介绍）。")])]),s._v(" "),a("h3",{attrs:{id:"多态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[s._v("#")]),s._v(" 多态")]),s._v(" "),a("p",[s._v("多态，顾名思义，表示一个对象具有多种的状态，具体表现为父类的引用指向子类的实例。")]),s._v(" "),a("p",[a("strong",[s._v("多态的特点:")])]),s._v(" "),a("ul",[a("li",[s._v("对象类型和引用类型之间具有继承（类）/实现（接口）的关系；")]),s._v(" "),a("li",[s._v("引用类型变量发出的方法调用的到底是哪个类中的方法，必须在程序运行期间才能确定；")]),s._v(" "),a("li",[s._v("多态不能调用“只在子类存在但在父类不存在”的方法；")]),s._v(" "),a("li",[s._v("如果子类重写了父类的方法，真正执行的是子类覆盖的方法，如果子类没有覆盖父类的方法，执行的是父类的方法。")])]),s._v(" "),a("h2",{attrs:{id:"接口和抽象类有什么共同点和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口和抽象类有什么共同点和区别"}},[s._v("#")]),s._v(" 接口和抽象类有什么共同点和区别？")]),s._v(" "),a("p",[a("strong",[s._v("共同点")]),s._v(" ：")]),s._v(" "),a("ul",[a("li",[s._v("都不能被实例化。")]),s._v(" "),a("li",[s._v("都可以包含抽象方法。")]),s._v(" "),a("li",[s._v("都可以有默认实现的方法（Java 8 可以用 "),a("code",[s._v("default")]),s._v(" 关键字在接口中定义默认方法）。")])]),s._v(" "),a("p",[a("strong",[s._v("区别")]),s._v(" ：")]),s._v(" "),a("ul",[a("li",[s._v("接口主要用于对类的行为进行约束，你实现了某个接口就具有了对应的行为。抽象类主要用于代码复用，强调的是所属关系。")]),s._v(" "),a("li",[s._v("一个类只能继承一个类，但是可以实现多个接口。")]),s._v(" "),a("li",[s._v("接口中的成员变量只能是 "),a("code",[s._v("public static final")]),s._v(" 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认 default，可在子类中被重新定义，也可被重新赋值。")])]),s._v(" "),a("h2",{attrs:{id:"java-变量命名规则为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-变量命名规则为"}},[s._v("#")]),s._v(" Java 变量命名规则为")]),s._v(" "),a("p",[s._v("1、Java 变量命名只能使用字母、数字、下划线、美元符号($)组成。")]),s._v(" "),a("p",[s._v("2、变量名以字母、下划线或者美元符号开头，其中以美元符号开头命名的变量虽然能够编译通过但是不建议使用。")]),s._v(" "),a("p",[s._v("3、变量的名字可大小写混用，但首字符应小写。")]),s._v(" "),a("p",[s._v("4、Java 变量名不限制长度，在命名的时候，尽量使用完整的单词进行命名，不要使用缩写。")]),s._v(" "),a("p",[s._v("5、变量名不可以和 java 关键字冲突，但是可以包含关键字。")])])}),[],!1,null,null,null);a.default=e.exports}}]);