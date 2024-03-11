(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1383:function(a,s,e){"use strict";e.r(s);var n=e(4),t=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"一、卸载-openjdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、卸载-openjdk"}},[a._v("#")]),a._v(" 一、卸载 openjdk")]),a._v(" "),s("h2",{attrs:{id:"_1、查看-java-版本时-显示已经安装了-openjdk-需要卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看-java-版本时-显示已经安装了-openjdk-需要卸载"}},[a._v("#")]),a._v(" 1、查看 java 版本时，显示已经安装了 openjdk，需要卸载")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[root@xxx ~]# java -version\nopenjdk version "1.8.0_292"\nOpenJDK Runtime Environment (build 1.8.0_292-b10)\nOpenJDK 64-Bit Server VM (build 25.292-b10, mixed mode)\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"_2、查询当前跟-java-相关的-rpm-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、查询当前跟-java-相关的-rpm-包"}},[a._v("#")]),a._v(" 2、查询当前跟 java 相关的 rpm 包")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@xxx ~]# rpm -qa|grep java\njavapackages-tools-3.4.1-11.el7.noarch\njava-1.8.0-openjdk-1.8.0.292.b10-1.el7_9.x86_64\njava-1.8.0-openjdk-headless-1.8.0.292.b10-1.el7_9.x86_64\npython-javapackages-3.4.1-11.el7.noarch\ntzdata-java-2021a-1.el7.noarch\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"_3、卸载-openjdk-相关文件-除了-noarch-的文件-其他的都卸载-要使用-root-权限-sudo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、卸载-openjdk-相关文件-除了-noarch-的文件-其他的都卸载-要使用-root-权限-sudo"}},[a._v("#")]),a._v(" 3、卸载 openjdk 相关文件，除了 .noarch 的文件，其他的都卸载 ，要使用 root 权限 sudo")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.342.b07-1.el7_9.x86_64\n sudo rpm -e --nodeps java-1.8.0-openjdk-1.8.0.342.b07-1.el7_9.x86_64\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("4、查看卸载完成\n\n\n[root@xxx ~]# java -version\n-bash: /usr/bin/java: No such file or directory\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h1",{attrs:{id:"二、安装步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、安装步骤"}},[a._v("#")]),a._v(" 二、安装步骤")]),a._v(" "),s("h2",{attrs:{id:"第一步-下载-jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步-下载-jdk"}},[a._v("#")]),a._v(" 第一步：下载 JDK")]),a._v(" "),s("p",[a._v("1、下载 LInux 环境下的 jdk,请去 官网 中下载 jdk 的安装文件，选择自己要安装的版本 JDK 下载 - "),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("oracle 官方下载"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"第二步-解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步-解压"}},[a._v("#")]),a._v(" 第二步：解压")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tar  -zxvf  jdk-8u131-linux-x64.tar.gz\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"第三步-修改环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步-修改环境变量"}},[a._v("#")]),a._v(" 第三步：修改环境变量")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd /\nvi /etc/profile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v('用 vi 编辑器来编辑 profile 文件，在文件末尾添加一下内容（按“i”进入编辑，编辑完之后先按“Esc”,再“Shift+:” ,然后"wq"回车）')]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("export JAVA_HOME=/usr/javaJDK/jdk1.8.0_131\nexport JRE_HOME=${JAVA_HOME}/jre\nexport CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH\nexport JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin\nexport PATH=$PATH:${JAVA_PATH}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("保存完之后，我们还需要让这个环境变量配置信息里面生效，要不然只能重启电脑生效了。通过命令 source /etc/profile 让 profile 文件立即生效，如图所示")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source /etc/profile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:e(363),alt:"img"}})])])}),[],!1,null,null,null);s.default=t.exports},363:function(a,s,e){a.exports=e.p+"assets/img/16ce526c54f864c163733d77c79361bd.d1794110.png"}}]);