(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1006:function(s,e,n){"use strict";n.r(e);var a=n(4),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("有的时候我们在操作数据库时会将两个或多个数据表关联起来通过一些条件筛选数据，在关联表时我们要遵循一些原则，这样会使我们编写的 SQL 语句在效率上快很多。")]),s._v(" "),e("h2",{attrs:{id:"一、优化原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、优化原则"}},[s._v("#")]),s._v(" 一、优化原则")]),s._v(" "),e("p",[e("strong",[s._v("小表驱动大表")]),s._v("，即小的数据集驱动大得数据集。在知道什么是小表驱动达大表之前，我们先来了解两个查询关键字，IN 与 EXISTS。我们通过两段查询语句先来了解一下它们的作用。我建立了两张表，一张员工表，一张部门表，员工表中有部门 id 这个属性，将这两张表关联起来。")]),s._v(" "),e("p",[s._v("我们先使用 IN 来查询数据：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT *\nFROM t_emp\nWHERE dept_id IN (SELECT dept_id FROM t_dept)\nLIMIT 5;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("查询结果：由于有很多的员工信息，在这里我就只查询 5 条数据。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-------------+----------+------------+--------------+---------+\n| emp_id      | emp_name | emp_gender | emp_email    | dept_id |\n+-------------+----------+------------+--------------+---------+\n| 00000000177 | 41d80    | m          | 41d80@zc.com |       1 |\n| 00000000178 | a74b8    | m          | a74b8@zc.com |       1 |\n| 00000000179 | 661ca    | m          | 661ca@zc.com |       1 |\n| 00000000180 | 9413d    | m          | 9413d@zc.com |       1 |\n| 00000000181 | 7d577    | m          | 7d577@zc.com |       1 |\n+-------------+----------+------------+--------------+---------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("接下里使用 EXISTS 来查询数据：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" SELECT *\n FROM t_emp\n WHERE EXISTS\n     (SELECT 1\n     FROM t_dept\n     WHERE t_dept.dept_id = t_emp.dept_id)\n LIMIT 5;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("查询结果：与上面的结果一样。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-------------+----------+------------+--------------+---------+\n| emp_id      | emp_name | emp_gender | emp_email    | dept_id |\n+-------------+----------+------------+--------------+---------+\n| 00000000177 | 41d80    | m          | 41d80@zc.com |       1 |\n| 00000000178 | a74b8    | m          | a74b8@zc.com |       1 |\n| 00000000179 | 661ca    | m          | 661ca@zc.com |       1 |\n| 00000000180 | 9413d    | m          | 9413d@zc.com |       1 |\n| 00000000181 | 7d577    | m          | 7d577@zc.com |       1 |\n+-------------+----------+------------+--------------+---------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("既然 IN 和 EXISTS 都可以用来查询数据，那它们两个有什么区别呢？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT *\nFROM t_emp\nWHERE dept_id IN\n    (SELECT dept_id\n    FROM t_dept);\n\n// 这条SQL 语句相当于：\nfor SELECT dept_id FROM t_dept\n    for SELECT * FROM t_emp WHERE t_emp.dept_id = t_dept.dept_id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("这里虽然我们编写的 SQL 语句是主查询员工信息，子查询部门 id ，但是 MySql 的执行顺序会先执行子查询，再执行主查询，然后获得我们要查询的数据。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" SELECT *\n FROM t_emp\n WHERE EXISTS\n     (SELECT 1\n     FROM t_dept\n     WHERE t_dept.dept_id = t_emp.dept_id);\n\n// 这条SQL 语句相当于：\nfor SELECT * FROM t_emp\n    for SELECT * FROM t_dept  WHERE t_dept.dept_id = t_emp.dept_id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("我们可以将 EXISTS 语法理解为：将主查询的数据放在子查询中做条件验证，根据结果 TRUE 和 FALSE 来决定主查询中的数据是否需要保留。EXISTS 子查询只返回 TRUE 或 FALSE ，因此子查询中的 SELECT * 可以是 SELECT 1 或者其他，MySql 的官方说在实际执行时会忽略 SELECT 清单，因此是没有 什么区别的。EXISTS 子查询其实在执行时，MySql 已经对它做了一些优化并不是对每条数据进行对比。")]),s._v(" "),e("h2",{attrs:{id:"二、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、总结"}},[s._v("#")]),s._v(" 二、总结")]),s._v(" "),e("p",[s._v("在实际操作过程中我们要对两张表的 dept_id 都设置索引。在一开始我们就讲了一个优化原则即："),e("strong",[s._v("小表驱动大表")]),s._v("，在我们使用 IN 进行关联查询时，通过上面 IN 操作的执行顺序，我们是先查询部门表再根据部门表查出来的 id 信息查询员工信息。我们都知道员工表肯定会有很多的员工信息，但是部门表一般只会有很少的数据信息，我们事先通过查询部门表信息查询员工信息，以小表(t_dept)的查询结果，去驱动大表(t_emp)，这种查询方式是效率很高的，也是值得提倡的。")]),s._v(" "),e("p",[s._v("但是我们使用 EXISTS 查询时，首先查询员工表，然后根据部门表的查询条件返回的 TRUE 或者 FALSE ，再决定员工表中的信息是否需要保留。这不就是用大的数据表(t_emp) 去驱动小的数据表小的数据表(t_dept)了吗？虽然这种方式也可以查出我们想要的数据，但是这种查询方式是不值得提倡的。")]),s._v(" "),e("p",[s._v("当 t_emp（外层大表） 表中数据多于 t_dept（子表小表） 表中的数据时，这时我们使用 IN 优于 EXISTS。当 t_dept（子表小表） 表中数据多于 t_emp（外层大表） 表中的数据时(我们这里只是假设)，这时我们使用 EXISTS 优于 IN。因此是使用 IN 还是使用 EXISTS 就需要根据我们的需求决定了。但是如果两张表中的数据量差不多时那么是使用 IN 还是使用 EXISTS 差别不大。")]),s._v(" "),e("h3",{attrs:{id:"exists-和-not-exists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exists-和-not-exists"}},[s._v("#")]),s._v(" exists 和 not exists")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user where exists (select 1);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("对 user 表的记录逐条取出，由于子条件中的 select 1 永远能返回记录行，那么 user 表的所有记录都将被加入结果集，所以与 select * from user;是一样的\nnot exists 与 exists 相反，也就是当 exists 条件有结果集返回时，loop 到的记录将被丢弃，否则将 loop 到的记录加入结果集\n总的来说，如果 A 表有 n 条记录，那么 exists 查询就是将这 n 条记录逐条取出，然后判断 n 遍 exists 条件")])]),s._v(" "),e("h3",{attrs:{id:"in-和-not-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-和-not-in"}},[s._v("#")]),s._v(" in 和 not in")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user where userId in (1, 2, 3);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("等效于")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user where userId = 1 or userId = 2 or userId = 3;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("not in 与 in 相反，如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user where userId not in (1, 2, 3);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("等效于")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user where userId != 1 and userId != 2 and userId != 3;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("总的来说，in 查询就是先将子查询条件的记录全都查出来，假设结果集为 B，共有 m 条记录，然后在将子查询条件的结果集分解成 m 个，再进行 m 次查询")]),s._v(" "),e("p",[s._v("值得一提的是，in 查询的子条件返回结果必须只有一个字段，例如")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user where userId in (select id from B);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("而不能是")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user where userId in (select id, age from B);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("而 exists 就没有这个限制")]),s._v(" "),e("h2",{attrs:{id:"三、exists-和-in-的性能对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、exists-和-in-的性能对比"}},[s._v("#")]),s._v(" 三、exists 和 in 的性能对比")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1: select * from A where exists (select * from B where B.id = A.id);\n\n2: select * from A where A.id in (select id from B);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("查询 1.可以转化以下伪代码，便于理解")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("for ($i = 0; $i < count(A); $i++) {\n\n　　$a = get_record(A, $i); #从A表逐条获取记录\n\n　　if (B.id = $a[id]) #如果子条件成立\n\n　　　　$result[] = $a;\n\n}\n\nreturn $result;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("大概就是这么个意思，其实可以看到,查询 1 主要是用到了 B 表的索引，A 表如何对查询的效率影响应该不大\n假设 B 表的所有 id 为 1,2,3,查询 2 可以转换为")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from A where A.id = 1 or A.id = 2 or A.id = 3;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个好理解了，这里主要是用到了 A 的索引，B 表如何对查询影响不大")]),s._v(" "),e("h2",{attrs:{id:"四、下面再看-not-exists-和-not-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、下面再看-not-exists-和-not-in"}},[s._v("#")]),s._v(" 四、下面再看 not exists 和 not in")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1. select * from A where not exists (select * from B where B.id = A.id);\n\n2. select * from A where A.id not in (select id from B);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("看查询 1，还是和上面一样，用了 B 的索引")]),s._v(" "),e("p",[s._v("而对于查询 2，可以转化成如下语句")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from A where A.id != 1 and A.id != 2 and A.id != 3;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可以知道 not in 是个范围查询，这种!=的范围查询无法使用任何索引,等于说 A 表的每条记录，都要在 B 表里遍历一次，查看 B 表里是否存在这条记录")]),s._v(" "),e("p",[e("strong",[s._v("故 not exists 比 not in 效率高")])]),s._v(" "),e("blockquote",[e("p",[s._v("mysql 中的 in 语句是把外表和内表作 hash 连接，而 exists 语句是对外表作 loop 循环，每次 loop 循环再对内表进行查询。一直大家都认为 exists 比 in 语句的效率要高，这种说法其实是不准确的。这个是要区分环境的。")])]),s._v(" "),e("ul",[e("li",[s._v("如果查询的两个表大小相当，那么用 in 和 exists 差别不大。")]),s._v(" "),e("li",[s._v("所以无论那个表大，用 not exists 都比 not in 要快。")])])])}),[],!1,null,null,null);e.default=t.exports}}]);