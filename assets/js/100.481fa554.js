(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1053:function(s,n,t){"use strict";t.r(n);var a=t(4),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"第-1-章-java-基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第-1-章-java-基础"}},[s._v("#")]),s._v(" 第 1 章 Java 基础")]),s._v(" "),n("blockquote",[n("p",[s._v("在学习 Spring 之前我们需要对 Java 基础语法有一定的了解，Java 中最重要的两个知识点是注解和反射。注解和反射在 Spring 框架中应用的最广泛。掌握注解和反射，有助于后面 Spring 的学习。")])]),s._v(" "),n("p",[s._v("本章主要涉及的知识点：")]),s._v(" "),n("ul",[n("li",[s._v("注解基础：什么是注？怎么理解注解？什么是元注解？")]),s._v(" "),n("li",[s._v("注解应用：自定义注解、注解的应用场景。")]),s._v(" "),n("li",[s._v("反射：反射的定义、反射的应用。")])]),s._v(" "),n("blockquote",[n("p",[s._v("注意\n不管学习什么框架都需要先把 Java 基础夯实，基础打好之后才能厚积薄发。用到的时候不能只会用，不知道为什么这样用。学习编程还有最重要的一点就是需要勤动手，不能眼高手低，看着会做，真要动手时无从下手。")])]),s._v(" "),n("h2",{attrs:{id:"_1-1-注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-注解"}},[s._v("#")]),s._v(" 1.1 注解")]),s._v(" "),n("p",[s._v("本节首先介绍注解的基本概念，理解什么是注解、注解的作用是什么。在此基础上通过示例动手操作加深理解。")]),s._v(" "),n("h3",{attrs:{id:"_1-1-1-什么是注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-什么是注解"}},[s._v("#")]),s._v(" 1.1.1 什么是注解")]),s._v(" "),n("p",[s._v("我们先看官方解释：它提供了一种安全的类似注释的机制，用来将任何的信息或元数据（metadata）与程序元素（类、方法、成员变量等）进行关联。为程序的元素（类、方法、成员变量）加上更直观、更明了的说明，这些说明信息与程序的业务逻辑无关，并且供指定的工具或框架使用。Annontation 像一种修饰符一样，应用于包、类型、构造方法、方法、成员变量、参数及本地变量的声明语句中。")]),s._v(" "),n("p",[s._v("Java 注解是附加在代码中的一些元信息，便于一些工具在编译、运行时进行解析和使用，起到说明、配置的功能。注解不会也不能影响代码的实际逻辑，仅仅起到辅助性的作用，包含在 java.lang.annotation 包中。\n看着上面的解释是不是还是一头雾水？其实我们可以更通俗地理解一下。最近几年出现一个词“斜杠青年”，还有黄某某拍摄的广告语：给人贴标签、下定义，总是很容易，而我却不会因为一件事被定性。这里的斜杠青年、贴标签都是把某些属性附加给对象，和注解功能差不多，它提供了一种安全的类似注释的机制，用来将任何信息或元数据（metadata）与程序元素（类、方法、成员变量等）进行关联。我们可以再来理解一下这句话，这里的程序元素可以理解为人，信息或元数据理解为标签，把标签属性（信息或元数据）赋给人（程序元素）。\n上面两段基本把什么注解解释出来了，如果还是不知道注解是什么，那也没关系。其实我们在编程中已经用到或者看到过了，比如@Override、@Deprecated。是不是很熟悉？其实它们就是注解。")]),s._v(" "),n("h3",{attrs:{id:"_1-1-2-内置注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-内置注解"}},[s._v("#")]),s._v(" 1.1.2 内置注解")]),s._v(" "),n("p",[s._v("上面的@Override、@Deprecated 都是 Java 中内置的注解，除了这两个还有其他的内置注解。这里列举了几个常用的内置注解以及它们的作用。")]),s._v(" "),n("ul",[n("li",[s._v("@Deprecated：编译器在编译阶段遇到这个注解时会发出提醒警告，告诉开发者正在调用一个过时的元素，比如过时的方法、过时的类、过时的成员变量。")]),s._v(" "),n("li",[s._v("@Override：提示子类要复写父类中被@Override 修饰的方法。")]),s._v(" "),n("li",[s._v("@SuppressWarnings：阻止警告的意思。调用被@Deprecated 注解的方法后，编译器会警告提醒，而有时候开发者会忽略这种警告，他们可以在调用的地方通过@SuppressWarnings：达到目的。")]),s._v(" "),n("li",[s._v("@SafeVarargs：参数安全类型注解。它的目的是提醒开发者不要用参数做一些不安全的操作，它的存在会阻止编译器产生 unchecked 这样的警告。它是在 Java 1.7 的版本中加入的。")]),s._v(" "),n("li",[s._v("@FunctionalInterface：函数式接口注解，这个是 Java 1.8 版本引入的新特性。函数式编程很火，所以 Java 8 也及时添加了这个特性。函数式接口（Functional Interface）就是一个具有一个方法的普通接口。")])]),s._v(" "),n("h3",{attrs:{id:"_1-1-3-元注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-元注解"}},[s._v("#")]),s._v(" 1.1.3 元注解")]),s._v(" "),n("p",[s._v("通过前面的两小节，我们应该对注解有了一定的认识，下面进一步地了解一下注解。我们在自定义注解时会出现图 1-1 所示的一些选项。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/d1a40d66cf71ebe63cc6b63d608a89a6.png",alt:"图1-1"}})]),s._v(" "),n("p",[s._v("图 1-1\n这些选项@Retention、@Target、@Documented 其实就是元注解。在创建时配置这些元注解，我们也可以推断出元注解的作用是什么。元注解负责注解自定义注解。java.lang.annotation 提供了 5 种元注解，专门注解其他的注解：")]),s._v(" "),n("ul",[n("li",[s._v("@Retention：什么时候使用该注解。")]),s._v(" "),n("li",[s._v("@Target：注解用于什么地方。")]),s._v(" "),n("li",[s._v("@Documented：注解是否将包含在 JavaDoc 中。")]),s._v(" "),n("li",[s._v("@Inherited：是否允许子类继承该注解。")]),s._v(" "),n("li",[s._v("@Repeatable：指定注解可重复使用。")])]),s._v(" "),n("h5",{attrs:{id:"_1-retention-定义注解的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-retention-定义注解的生命周期"}},[s._v("#")]),s._v(" 1．@Retention 定义注解的生命周期")]),s._v(" "),n("ul",[n("li",[s._v("RetentionPolicy.SOURCE：在编译阶段丢弃。这些注解在编译结束之后不再有任何意义，所以它们不会写入字节码。@Override 和@SuppressWarnings 都属于这类注解。")]),s._v(" "),n("li",[s._v("RetentionPolicy.CLASS：在类加载的时候丢弃。在字节码文件的处理中有用。注解默认使用这种方式。")]),s._v(" "),n("li",[s._v("RetentionPolicy.RUNTIME：始终不会丢弃，运行期也保留该注解，因此可以使用反射机制读取该注解的信息。我们自定义的注解通常使用这种方式。")])]),s._v(" "),n("h4",{attrs:{id:"_2-target-表示注解用于什么地方"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-target-表示注解用于什么地方"}},[s._v("#")]),s._v(" 2．@Target 表示注解用于什么地方")]),s._v(" "),n("p",[s._v("默认值为任何元素，表示该注解用于什么地方。可用的 ElementType 参数包括：")]),s._v(" "),n("ul",[n("li",[s._v("ElementType.CONSTRUCTOR：用于描述构造器。")]),s._v(" "),n("li",[s._v("ElementType.FIELD：成员变量、对象、属性（包括 enum 实例）。")]),s._v(" "),n("li",[s._v("ElementType.LOCAL_VARIABLE：用于描述局部变量。")]),s._v(" "),n("li",[s._v("ElementType.METHOD：用于描述方法。")]),s._v(" "),n("li",[s._v("ElementType.PACKAGE：用于描述包。")]),s._v(" "),n("li",[s._v("ElementType.PARAMETER：用于描述参数。")]),s._v(" "),n("li",[s._v("ElementType.TYPE：用于描述类、接口（包括注解类型）或 enum 声明。")])]),s._v(" "),n("h4",{attrs:{id:"_3-documented-是一个简单的-annotations-标记注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-documented-是一个简单的-annotations-标记注解"}},[s._v("#")]),s._v(" 3．@Documented 是一个简单的 Annotations 标记注解")]),s._v(" "),n("p",[s._v("表示是否将注解信息添加在 Java 文档中。")]),s._v(" "),n("h4",{attrs:{id:"_4-inherited-定义注解和子类的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-inherited-定义注解和子类的关系"}},[s._v("#")]),s._v(" 4．@Inherited 定义注解和子类的关系")]),s._v(" "),n("p",[s._v("@Inherited 元注解是一个标记注解，阐述了某个被标注的类型是被继承的。如果一个使用了@Inherited 修饰的 annotation 类型被用于一个 class，那么这个 annotation 将被用于该 class 的子类。")]),s._v(" "),n("h4",{attrs:{id:"_5-repeatable-指定注解可重复使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-repeatable-指定注解可重复使用"}},[s._v("#")]),s._v(" 5．@Repeatable 指定注解可重复使用")]),s._v(" "),n("p",[s._v("使用@Repeatable 修饰表示该注解可以为重复使用。")]),s._v(" "),n("h3",{attrs:{id:"_1-1-4-自定义注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-自定义注解"}},[s._v("#")]),s._v(" 1.1.4 自定义注解")]),s._v(" "),n("p",[s._v("元注解是负责注解自定义注解的。自定义注解时是有一些规则限制的，具体如下：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Annotation 型定义为@interface，所有的 Annotation 会自动继承 java.lang.Annotation 这一接口，并且不能再去继承别的类或是接口。")])]),s._v(" "),n("li",[n("p",[s._v("参数成员只能用 public 或默认（default）这两个访问权修饰。")])]),s._v(" "),n("li",[n("p",[s._v("参数成员只能用基本类型 byte、short、char、int、long、float、double、boolean 八种基本数据类型和 String、Enum、Class、annotations 等数据类型，以及这一些类型的数组。")])]),s._v(" "),n("li",[n("p",[s._v("要获取类方法和字段的注解信息，必须通过 Java 的反射技术来获取 Annotation 对象，因为除此之外没有其他获取注解对象的方法。")])]),s._v(" "),n("li",[n("p",[s._v("注解也可以没有定义成员。\n我们这里自定义一个注解来练习一下，主要用来演示自定义注解以及注解的继承。")])])]),s._v(" "),n("h4",{attrs:{id:"_1-定义-customdescription-注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义-customdescription-注解"}},[s._v("#")]),s._v(" 1．定义 CustomDescription 注解")]),s._v(" "),n("p",[s._v("CustomDescription 注解相当于标签。为了能多贴标签，又定义了注解容器 CustomDescriptions。其中，"),n("code",[s._v("@Retention(RUNTIME)")]),s._v("表示在运行时环境也可以获取注解，"),n("code",[s._v("@Inherited")]),s._v("表示可继承，"),n("code",[s._v("@Repeatable(CustomDescriptions.class)")]),s._v("表示该注解可多次使用。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\n@Inherited\n@Repeatable(CustomDescriptions.class)\npublic @interface CustomDescription {\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("blockquote",[n("p",[s._v("CustomDescriptions 容器：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\n@Inherited\npublic @interface CustomDescriptions {\n    CustomDescription[] value();\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"_2-实现继承关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现继承关系"}},[s._v("#")]),s._v(" 2．实现继承关系")]),s._v(" "),n("p",[s._v("这里为了演示，我们创建了两个类：一个基类 Person，一个子类 Student。在 Person 类加两个自定义注解，在 Student 中加一个自定义注解。")]),s._v(" "),n("blockquote",[n("p",[s._v("Person：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@CustomDescription(description = "基类")\n@CustomDescription(description = "人")\npublic class Person {\n    private String name;\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("blockquote",[n("p",[s._v("Student:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@CustomDescription(description = "学生")\npublic class Student extends Person {\n\n    private String StudentId;\n\n    public String getStudentId() {\n        return StudentId;\n    }\n\n    public void setStudentId(String studentId) {\n        StudentId = studentId;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h4",{attrs:{id:"_3-通过反射获取注解属性值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过反射获取注解属性值"}},[s._v("#")]),s._v(" 3．通过反射获取注解属性值")]),s._v(" "),n("p",[s._v("这里我们想通过反射（可以先不要理解）获取 Student 类的注解值，那么问题来了，它是输出什么的呢？会输出“description:学生”吗？并不是，而是输出父类 Person 的注解。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static void main(String[] args) {\n// write your code here\n       CustomDescriptions annotation = new Student().getClass().getAnnotation(CustomDescriptions.class);\n       for (CustomDescription h: annotation.value()){\n     System.out.println("description" + h.description());\n       }\n   }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("blockquote",[n("p",[s._v("输出：\ndescription:基类\ndescription:人")])]),s._v(" "),n("p",[s._v("如果想输出子类 Student 的注解该怎么设置呢？很简单，只需在子类 Student 上覆盖父类的注解就好。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@CustomDescription(description="学生")\n@CustomDescription(description="人")\npublic classStudent extendsPerson\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输出：\ndescription:学生\ndescription:人\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("此时输出的就是子类的注解值了。这里我们还可以验证@Retention 生命周期的作用，只需要把@Retention(RUNTIME)改成 CLASS，再运行就会报错，因为 main 方法中的 custormDescriptions 对象是一个 null 空值。不过自定义注解一般来说都是使用@Retention(RUNTIME)。")]),s._v(" "),n("h3",{attrs:{id:"_1-1-5-注解使用场景介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-注解使用场景介绍"}},[s._v("#")]),s._v(" 1.1.5 注解使用场景介绍")]),s._v(" "),n("p",[s._v("在上一小节通过实例学习了自定义注解的使用，之后就该解决怎么用的问题了。其实，注解应用的场景还是挺多的。\n（1）使用注解做 bean 的属性值校验，例如在开发 Java 服务器端代码时，会要求对外部传来的参数合法性进行验证。hibernate-validator 提供了一些常用的参数校验注解。\n（2）使用注解做权限控制。例如，shiro 框架中有 5 个权限注解，我们也可以自定义注解进行权限控制。\n（3）代替配置文件功能，像 Spring 基于注解的配置，减少了 xml 的配置。\n（4）可以生成文档，像 Java 代码注释中的@see、@param 等。\n这里只是列举了几个使用场景，其实还有很多地方可以使用注解。")]),s._v(" "),n("h2",{attrs:{id:"_1-2-反射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-反射"}},[s._v("#")]),s._v(" 1.2 反射")]),s._v(" "),n("p",[s._v("本节首先介绍反射的基本概念，理解什么是反射，以及 Class 类和反射常用 API，通过实例操作来学习反射的使用。")]),s._v(" "),n("h3",{attrs:{id:"_1-2-1-反射机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-反射机制"}},[s._v("#")]),s._v(" 1.2.1 反射机制")]),s._v(" "),n("p",[s._v("在上面自定义注解时我们也有提到反射，要获取类方法和字段的注解信息，必须通过 Java 的反射技术来获取 Annotation 对象。那么什么是反射呢？在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性，这种动态获取的信息以及动态调用对象的方法的功能称为 Java 语言的反射机制。它有点类似照妖镜的作用，不管是什么妖魔鬼怪（类或对象）都能看到它的真面目（获取类的属性方法、调用对象的属性方法）。")]),s._v(" "),n("h3",{attrs:{id:"_1-2-2-理解-class-类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-理解-class-类"}},[s._v("#")]),s._v(" 1.2.2 理解 Class 类")]),s._v(" "),n("p",[s._v("反射机制可以动态获取类信息以及调用对象方法，那它是通过什么实现的呢？这就要介绍一下 Class 类了。首先明确 Class 也是一个类，只是它是一个描述类的类，也可以生成对象。对于每个类而言，在 JRE 中有且仅有一个不变的 Class 类型的对象，而这个 Class 类型的对象只能由系统建立，封装了当前对象所对应的类的信息，有哪些属性、方法、构造器以及实现了哪些接口等。每个类的实例都会记得自己是由哪个 Class 实例所生成的。\n要获取类信息或调用对象方法，肯定首先要获取到该类或对象对应的 Class 类的实例。一般获取 Class 对象有 3 种方式。")]),s._v(" "),n("ul",[n("li",[s._v("通过类名获取，类名.class。")]),s._v(" "),n("li",[s._v("通过对象获取，对象.getClass()。")]),s._v(" "),n("li",[s._v("通过全类名获取，Class.forName（全类名）。\n这里我们可以使用字符串来做验证。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public static void main(String[] args) throws ClassNotFoundException {\n\n        //字符串的列子\n        Class clazz = null;\n        //通过类名获取，类名.class。\n        clazz = String.class;\n        System.out.println(clazz);\n        //通过对象获取，对象.getClass()。\n        clazz = "ReflectionTest".getClass();\n        //通过全类名获取，Class.forName（全类名）。\n        clazz = Class.forName("java.lang.String");\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("blockquote",[n("p",[s._v("输出结果：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class java.lang.String\nclass java.lang.String\nclass java.lang.String\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("通过 3 种方式获取到 Class 实例后，再了解一下 Class 类常用的方法（见表 1-1）。")]),s._v(" "),n("p",[s._v("表 1-1 Class 类常用的方法")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/8a52b29377d19a2b824adddb5b7c252c.png",alt:"表1-1 Class类常用的方法"}})]),s._v(" "),n("h3",{attrs:{id:"_1-2-3-反射的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-反射的使用"}},[s._v("#")]),s._v(" 1.2.3 反射的使用")]),s._v(" "),n("p",[s._v("这里要着重介绍一下上面 API 的使用，因为在后面要学习的 Spring 中 IOC 的原理就是反射加工厂模式。学好反射 API 有助于理解 Spring 框架内部实现。为了演示 Class 方法的使用，在注解 demo 的基础上对 Person、Student 类进行了修改。")]),s._v(" "),n("blockquote",[n("p",[s._v("Person 类：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@CustomDescription(description = "基类")\n@CustomDescription(description = "人")\npublic class Person {\n    private String name;\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public Person(){\n        super();\n    }\n\n    public Person(String name){\n        this.name = name;\n    }\n\n    public String PersonPublicMethod(String str){\n        return str;\n    }\n\n    private String PersonPrivateMethod(String str){\n        return str;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("blockquote",[n("p",[s._v("Student")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@CustomDescription(description = "学生")\npublic class Student extends Person {\n\n    private String StudentId;\n\n    public String getStudentId() {\n        return StudentId;\n    }\n\n    public void setStudentId(String studentId) {\n        StudentId = studentId;\n    }\n\n\n    public Student(String name,String studentId){\n        super(name);\n        StudentId = studentId;\n    }\n\n    public Student(String name){\n        super(name);\n        StudentId = "123456";\n    }\n\n    public String PersonPublicMethod(String str){\n        return str;\n    }\n\n    private String PersonPrivateMethod(String str){\n        return str;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h4",{attrs:{id:"_1-描述方法-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-描述方法-method"}},[s._v("#")]),s._v(" 1．描述方法 Method")]),s._v(" "),n("p",[s._v("描述方法主要是 4 个获取方法（getMethods、getMethod、getDeclaredMethods、getDeclaredMethod）和 1 个调用方法（invoke）。")]),s._v(" "),n("ul",[n("li",[s._v("getMethods：获取 clazz 对应类中的所有方法，不能获取 private 方法，且获取从父类继承来的所有方法，包括私有父类的私有方法。")]),s._v(" "),n("li",[s._v("getMethod：获取 clazz 对应类中指定方法名和参数类型的方法，不能获取 private 方法，且获取从父类继承来的所有方法，包括私有父类的私有方法。因为存在同方法名不同参数这种情况，所以只有同时指定方法名和参数类型才能唯一确定一个方法。")]),s._v(" "),n("li",[s._v("getDeclaredMethods：获取所有方法，包括私有方法，所有声明的方法，都可以获取到，且只获取当前类的方法。")]),s._v(" "),n("li",[s._v("getDeclaredMethod：获取 clazz 对应类中指定方法名和参数类型的方法，包括私有方法，所有声明的方法，都可以获取到，且只获取当前类的方法。")]),s._v(" "),n("li",[s._v("invoke：执行方法，第一个参数表示执行哪个对象的方法，剩下的参数是执行方法时需要传入的参数，私有方法的执行必须在调用 invoke 之前加上一句“method.setAccessible(true);”")])]),s._v(" "),n("blockquote",[n("p",[s._v("测试 Method")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Class<?> clazz = Class.forName("spring.tutorial.CusAnnontation.Student");\nMethod method = null;\nMethod[] methods = null;\n\nmethods = clazz.getMethods();\nfor (Method mth : methods){\n    System.out.print(mth.getName() + " ");\n}\nSystem.out.println();\n\nmethod = clazz.getMethod("StudentPublicMethod",String.class);\nSystem.out.print(method.getName() + " ");\nSystem.out.println();\n\nmethods = clazz.getDeclaredMethods();\nfor (Method mth : methods){\n    System.out.print(mth.getName() + " ");\n}\nSystem.out.println();\n\nmethod = clazz.getDeclaredMethod("StudentPrivateMethod",String.class);\nSystem.out.print(method.getName() + " ");\nSystem.out.println();\n\nObject obj = clazz.newInstance();\nmethod.setAccessible(true);\nString result = (String) method.invoke(obj, "inputParams");\nSystem.out.println(result);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("blockquote",[n("p",[s._v("输出结果")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("getStudentId setStudentId StudentPublicMethod getName setName PersonPublicMethod wait wait wait equals toString hashCode getClass notify notifyAll\nStudentPublicMethod\ngetStudentId setStudentId StudentPublicMethod StudentPrivateMethod\nStudentPrivateMethod\ninputParams\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("上面我们基本可以实现通过类名创建对象、通过方法名执行方法。类名和方法名都是字符串，我们可以把它们放到一个配置文件中，根据配置文件来执行方法，这样就有点类似基于 XML 的 Spring 了。")]),s._v(" "),n("h4",{attrs:{id:"_2-描述字段-field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-描述字段-field"}},[s._v("#")]),s._v(" 2．描述字段 Field")]),s._v(" "),n("p",[s._v("描述字段 Field 方法的使用和描述方法 Method 中方法的使用有点类似，也是 4 个获取字段的方法（getFields、getField、getDeclaredFields、getDeclaredField）。")]),s._v(" "),n("ul",[n("li",[s._v("getFields：获得某个类的所有公共（public）字段，包括父类中的字段。")]),s._v(" "),n("li",[s._v("getField：获取某个类 public 成员变量中指定变量名的字段，包括基类。")]),s._v(" "),n("li",[s._v("getDeclaredFields：获得某个类所有声明的字段，包括 public、private 和 protected，但是不包括父类的声明字段。")]),s._v(" "),n("li",[s._v("getDeclaredField：获取某个类的所有成员变量指定变量名的字段，不包括基类。")])]),s._v(" "),n("h4",{attrs:{id:"_3-描述构造器-constructor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-描述构造器-constructor"}},[s._v("#")]),s._v(" 3．描述构造器 Constructor")]),s._v(" "),n("p",[s._v("先介绍一下描述构造函数 Constructor 用到的方法，主要还是 4 个：getConstructors、getDeclaredConstructors、getConstructor、getDeclaredConstructor。和前面 Method、Field 用的方法进行比较，举一反三，我们也能大概了解这几个方法的使用。其实，在编程中有好多体现哲学思想的地方，有正有反，有阴有阳，学会思考，这样可以以点带面、触类旁通。")]),s._v(" "),n("ul",[n("li",[s._v("getConstructors：获取对应类中 public 类型的构造函数，且只获取当前类的构造函数。")]),s._v(" "),n("li",[s._v("getConstructor：获取对应类中 public 指定参数类型的构造函数，且只获取当前类的构造函数。")]),s._v(" "),n("li",[s._v("getDeclaredConstructors：获取对应类中所有构造函数，包括私有构造函数，且只获取当前类的构造函数。")]),s._v(" "),n("li",[s._v("getDeclaredConstructor：获取对应类中指定参数类型的方法，包括私有构造函数，且只获取当前类的方法。")])]),s._v(" "),n("h4",{attrs:{id:"_4-描述注解-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-描述注解-annotation"}},[s._v("#")]),s._v(" 4．描述注解 Annotation")]),s._v(" "),n("p",[s._v("描述注解主要用到"),n("code",[s._v("getAnnotation(Class<A> annotationClass)")]),s._v("方法，返回该元素指定类型的注解，否则返回 null。")]),s._v(" "),n("h2",{attrs:{id:"_1-3-小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-小结"}},[s._v("#")]),s._v(" 1.3 小结")]),s._v(" "),n("p",[s._v("我们回顾一下这一章的主要内容：在注解部分，学习了注解的定义、注解的理解、内置注解、元注解，通过自定义注解理解注解继承、多注解及注解生命周期；在反射部分，了解反射机制、Class 类的理解，通过实例掌握反射中 Method、Field、Constructor、Annotation 相关 API 的使用，为后续学习 Spring 框架打下基础。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/andanyoung/spring-tutorial",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码下载"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);