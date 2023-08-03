(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1003:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("React 是一个声明式、高效、灵活的用于构建用户界面的 JavaScript library，本文主要对 React 带来的三个颠覆性理念一一展开介绍。")])]),s._v(" "),n("h1",{attrs:{id:"一、react-是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、react-是什么"}},[s._v("#")]),s._v(" 一、React 是什么")]),s._v(" "),n("p",[s._v("在 React 之前前端有三个里程碑意义的 library/framework")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("jQuery 解决了浏览器兼容和 DOM 元素快捷操作问题，其链式操作 API 也对后续前端框架产生了深刻影响；")])]),s._v(" "),n("li",[n("p",[s._v("Knockout 提出了前端代码 MVVM 分层理念，数据通过模板映射为 UI 视图，大幅度减少了 DOM 操作；")])]),s._v(" "),n("li",[n("p",[s._v("AngularJS 在 MVVM 基础上引入了双向绑定，数据变化自动反映到 UI，视图上的操作也反向自动更新数据；其通过指令拓展 HTML 的风格提升了模板引擎的灵活性，可惜作者引入了大量借鉴服务器编程的概念，让 AugularJS 学习成本直线上升，性能也略有不足；")])])]),s._v(" "),n("p",[s._v("React 是一个声明式、高效、灵活的用于构建用户界面的 JavaScript library，React 核心理念在于将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作 “Component”。React 不是 MVC 框架，更像是其中 V，仅仅负责用户交互视图的渲染。")]),s._v(" "),n("p",[s._v("React 带来了三个颠覆性理念，在接下来的章节中将一一介绍：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("JSX，使用 JavaScript 表达 UI + 交互，充分利用 JavaScript 的灵活性；")])]),s._v(" "),n("li",[n("p",[s._v("fx(props) = UI，数据驱动 UI，单向数据流、函数风格的页面组件；")])]),s._v(" "),n("li",[n("p",[s._v("Virtual DOM，服务器、客户端使用同一套代码渲染——同构，解决前端应用 SEO 问题；")])])]),s._v(" "),n("h1",{attrs:{id:"二、快速初始化-react-项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、快速初始化-react-项目"}},[s._v("#")]),s._v(" 二、快速初始化 React 项目")]),s._v(" "),n("p",[s._v("使用  Create React App [1] 可以快速初始化一个 React Web 项目。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npx create-react-app learn-react --template typescript\n$ cd learn-react\n$ npm start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("执行  npm start 后浏览器会在  http://localhost:3000  打开项目首页。")]),s._v(" "),n("h1",{attrs:{id:"三、调试-react-应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、调试-react-应用"}},[s._v("#")]),s._v(" 三、调试 React 应用")]),s._v(" "),n("p",[s._v("React 提供了  React Developer Tools[2]，集成到了 Chrome Dev Tools，借此可以查看 React 组件树及其对应 Props、State。")]),s._v(" "),n("p",[s._v("app.tsx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React, { useState } from 'react';\n\nfunction Button(props: { count: number }): JSX.Element {\n  const [count, setCount] = useState(props.count);\n  return (\n    <button\n      onClick={() => {\n        setCount((c) => c + 1);\n      }}\n      >\n      {count}\n    </button>\n  );\n}\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div class>\n      <Button count={5} />\n    </div>\n  );\n}\n\nexport default App;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("index.tsx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\nimport * as ReactDOMClient from 'react-dom/client';\n\nimport App from './app';\n\nconst rootElement = document.querySelector('body') as Element;\nconst root = ReactDOMClient.createRoot(rootElement);\n\nroot.render(<App />);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("打开 Chrome Dev Tools 可以看到多了一个  Components 选项卡")]),s._v(" "),n("p",[n("img",{attrs:{src:a(780),alt:""}})]),s._v(" "),n("h1",{attrs:{id:"四、todo-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、todo-project"}},[s._v("#")]),s._v(" 四、Todo project")]),s._v(" "),n("p",[s._v("接下来边学习边做一个 Todo 项目体验一下 React。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(781),alt:""}})]),s._v(" "),n("h1",{attrs:{id:"五、使用-jsx-做更好的关注点分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、使用-jsx-做更好的关注点分离"}},[s._v("#")]),s._v(" 五、使用 JSX 做更好的关注点分离")]),s._v(" "),n("p",[s._v("在开始编写 React 程序之前需要了解一下 JSX。JSX 是 React 对 JavaScript 的语法拓展，用来在 JavaScript 文件内通过类 HTML 标签（HTML-like markup）表达页面的视图与交互逻辑。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div class>\n  <CustomComponent\n    onClick={() => {alert('Hello')}}\n  >\n    Hello {props.name}!\n  </CustomComponent>\n</div>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("Web 页面由 HTML 内容、CSS 样式、JavaScript 交互构成，长期以来 Web 开发者将三者放在独立的文件中做分离，这实际上是按照技术实现的分离。")]),s._v(" "),n("table",{attrs:{"data-wrapped":"true"}},[n("thead",[n("tr",[n("th",[n("img",{attrs:{src:a(782)}})]),n("th",[n("img",{attrs:{src:a(783)}})])])])]),s._v(" "),n("p",[s._v("传统页面内容主要由 HTML 定义，JavaScript 逻辑是点缀，随着现代网页交互性增强，页面内容很大程度是由 JavaScript 逻辑动态生成，同时渲染逻辑本质上与其他 UI 逻辑内在耦合，比如在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。")]),s._v(" "),n("p",[s._v("因此 React 使用 JSX 把渲染逻辑和 HTML 标签集成到一起。")]),s._v(" "),n("table",{attrs:{"data-wrapped":"true"}},[n("thead",[n("tr",[n("th",[n("img",{staticStyle:{width:"auto"},attrs:{src:a(784)}})]),n("th",[n("img",{attrs:{src:a(785)}})])])])]),s._v(" "),n("p",[s._v("这样开发者关注的不是 HTML 模板、JavaScript 渲染逻辑这样的技术实现，而是诸如 Sidebar、Form 这样的页面功能单元。")]),s._v(" "),n("h1",{attrs:{id:"六、使用-jsx-编写-react-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、使用-jsx-编写-react-组件"}},[s._v("#")]),s._v(" 六、使用 JSX 编写 React 组件")]),s._v(" "),n("p",[s._v("返回 JSX 的函数就是 React 最简单的组件，可以和 HTML 标签一样嵌套使用。React 使用  props 参数向组件传递数据，提升组件的复用性。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * JSX 语法隐式调用 React.createElement\n * 所以虽然代码中没有调用 React 的语句，仍然需要引入\n */\nimport React from 'react';\n\ninterface IButton {\n  /** 按钮展示文案 */\n  text: string;\n  /** 点击按钮跳转链接 */\n  link?: string;\n  /** 点击按钮自定义事件 */\n  onClick?: (event?: Event) => void\n}\n\nfunction Button(props: IButton) {\n  const { text, link, onClick } = props;\n\n  const redirectHandler = () => {\n    location.href = link;\n  };\n\n  return (\n    <div\n      class\n      onClick={onClick | redirectHandler}\n    >\n      {text}\n    </div>\n  );\n}\n\nexport default Button;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("在使用组件时候，通过其标签的属性组装成 props 对象，传递给组件，语法和 HTML attribute 类似，但值可以是任意的 JavaScript 对象。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\n\n/**\n * 导入 ./button.tsx 中 export 的默认内容，命名为 Button 使用\n * .tsx 拓展名可以省略\n */\nimport Button from './button';\n\ninterface IDialog {\n  title: string;\n  content: Element;\n  showClose: boolean;\n}\n\nfunction Dialog(props: IDialog) {\n  const { title, content, showClose = false, children } = props;\n\n  const hideDialog = () => {\n    // ...\n  }\n\n  return (\n    <div>\n      <div class> {title} </div>\n      <div class> {content | children} </div>\n      {/* 没错，Button props 定义的属性，就是这样通过标签属性开放出来的 */}\n      <Button\n        title=\"取消\"\n        onClick={hideDialog}\n      />\n      <Button\n        title=\"确认\"\n        onClick={() => { }}\n      />\n    </div>\n  );\n}\n\nexport default Dialog;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("p",[s._v("组件写好后通过  react-dom [3] 将组件渲染到页面。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport Dialog from './dialog';\n\n// 把组件渲染到页面 id 为 root 的元素中\nconst rootElement = document.getElementById('root');\nconst root = ReactDOM.createRoot(rootElement);\nroot.render(\n  <Dialog\n    title=\"demo dialog\"\n    content=\"this is a dialog\"\n    showClose={false}\n  />\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h1",{attrs:{id:"七、jsx-规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、jsx-规则"}},[s._v("#")]),s._v(" 七、JSX 规则")]),s._v(" "),n("p",[s._v("React 组件有几个约定：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("组件名称使用 Pascal 风格（首字母大写），以和 HTML 原生标签（div、p、a 等）区分；")])]),s._v(" "),n("li",[n("p",[s._v("组件仅接受  props 一个参数，用来暴露组件可配置属性，其子组件被 React 通过  children 属性注入；")])]),s._v(" "),n("li",[n("p",[s._v("在组件内部 props 是只读的，不允许对其进行修改；")])])]),s._v(" "),n("p",[n("strong",[s._v("1. 必须有根节点")])]),s._v(" "),n("p",[s._v("如同上面写的几个简单 demo，JSX 必须有 root 节点，即使多个同级元素没有父节点，也需要用虚拟节点  <></>  来包裹。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{/* 非法的 JSX */}\n<div id="box1"></div>\n<div id="box2"></div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{/* 合法的 JSX */}\n<>\n    <div id="box1"></div>\n  <div id="box2"></div>\n</>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("2. 所有标签需要闭合")])]),s._v(" "),n("p",[s._v("在 HTML 中标签并不一定需要闭合。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<meta charset="UTF-8">\n<br>\n<img src="https://g.alicdn.com/logo.png">\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("在 JSX 中可以混合 HTML 原生标签，但所有标签必须闭合。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<>\n  <meta charset="UTF-8" />\n  <br/>\n  <img src="https://g.alicdn.com/logo.png"/>\n</>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("3. 和 HTML 属性差异")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("在 React 中常用的 DOM 特性和属性（包括事件处理）都使用小驼峰命名的方式，例如与 HTML 中的 tabindex 属性对应的 React 的属性是 tabIndex；")])]),s._v(" "),n("li",[n("p",[s._v("HTML 部分属性名称与 JavaScript 保留字冲突，在 JSX 中需要使用替代名称；")]),s._v(" "),n("p",[n("img",{attrs:{src:a(786),alt:""}})])]),s._v(" "),n("li",[n("p",[s._v("style 属性 value 是一个 CSS 属性组成的对象，为了让其符合 JavaScript 语法规则，属性名使用驼峰命名（fontSize、backgroundColor），而不是 CSS 属性使用的连字符，这样可以很方便设置动态样式，但静态样式应该依赖 className 和 CSS 文件的配合；")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function HelloWorldComponent(props) {\n    const divStyle = {\n      // 可以很方便设置动态样式\n      backgroundImage: 'url(' + props.imgUrl + ')',\n    // 但静态样式应该尽量通过 className 设置类，通过 css file 解决\n    // 不推荐 color: 'blue' 这种静态样式直接在 JSX 的写法\n    color: 'blue',\n  };\n\n  return (\n    <div style={divStyle}>\n      Hello World!\n    </div>\n  );\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("React 对于 Form 表单支持  defaultValue  属性，设置默认值，在运行时取值使用和 HTML 一致的  value 属性。")])]),s._v(" "),n("p",[n("strong",[s._v("4. 自动转义 content")])]),s._v(" "),n("p",[s._v("为了防止 XSS 攻击，JSX 会对直接设置的文本进行转义。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const content = `\n  这里应该展示一张图片<br>\n  <img src="https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png" />\n`;\n<div>\n  {content}\n</div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("页面效果：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(787),alt:""}})]),s._v(" "),n("p",[s._v("在安全性有保障的时候，可以通过  dangerouslySetInnerHTML 禁用转义效果，展示 raw HTML")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const content = `\n      这里应该展示一张图片<br>\n      <img src="https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png" />\n  `;\n<div dangerouslySetInnerHTML={{ __html: content }}/>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:a(788),alt:""}})]),s._v(" "),n("h1",{attrs:{id:"八、在-jsx-中-todo-使用-支持-javascript-表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八、在-jsx-中-todo-使用-支持-javascript-表达式"}},[s._v("#")]),s._v(" 八、在 JSX 中 TODO 使用 {} 支持 JavaScript 表达式")]),s._v(" "),n("p",[s._v("JSX 中使用 {} 包裹 JavaScript 表达式处理动态逻辑，属性 value、子元素都可以，最常见的几个用法：")]),s._v(" "),n("ul",[n("li",[s._v("{变量名} 读取变量值，双层 {{}} 并不是特殊语法，而是  {对象}  的快捷写法")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div style={{ color: 'red' }}></div>\n\n// 等同于\n\nconst styleObj = { color: 'red' };\n<div style={styleObj}></div>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("三元表达式处理 if-else（if-else 是语句，不是表达式）")])]),s._v(" "),n("li",[n("p",[s._v("map 处理循环逻辑，批量生成元素")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface IStuff {\n  name: string;\n  sex: 'male' | 'female';\n}\n\nfunction App () {\n  const list: Array<IStuff> = [\n    { name: 'Byron', sex: 'male' },\n    { name: 'Casper', sex: 'male' },\n    { name: 'Junice', sex: 'female' },\n  ];\n\n  return (\n    <ul class>\n      {\n        list.map(stuff => { // 生成多个\n          const { name, sex } = stuff;\n          return (\n            {\n            <li\n              /* 实际编程 className 设置有更好的表达方式，这里仅 demo 三元表达式使用 */}\n                className={sex === 'male' ? 'stuff-male' : 'stuff-female'}\n              onClick={() => { alert(name) }}\n            >\n              // 读取变量值\n              {name}\n            </li>\n          );\n        })\n      }\n    </ul>\n  );\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("blockquote",[n("p",[s._v("JSX 中注释也需要使用 {} 包裹，但这种写法过于不方便，大部分编译工具都可以处理双斜线风格 // 注释")])]),s._v(" "),n("h1",{attrs:{id:"九、jsx-的背后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#九、jsx-的背后"}},[s._v("#")]),s._v(" 九、JSX 的背后")]),s._v(" "),n("p",[s._v("JSX 的返回值既不是 DOM 元素，也不是 HTML 字符串，而是对 DOM 的一个 JSON 描述，这就是 React Element：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<button id=\"9527\" class>\n   <span style={{ color: 'red' }}>\n     This is a Button\n   </span>\n</button>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("JSX 用类似这样的结构表达：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "type": "button",\n  "props": {\n    "id": "9527",\n    "className": "btn-primary",\n    "children": [\n      {\n        "type": "span",\n        "props": {\n          "style": { "color": "red" },\n          "children": "This is a Button"\n        }\n      }\n    ]\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("编译后实际是这样的调用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('React.createElement("button", {\n  id: "9527",\n  className: "btn-primary"\n},React.createElement("span", {\n  style: {\n    color: \'red\'\n  }\n}, "This is a Button"));\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("React.createElement(type, props, ...children)，上文提到过 React 会自动把 children 注入到 props，就是在这个过程。")])]),s._v(" "),n("p",[s._v("了解了 JSX 之后可以开始编写静态的 React Component 了。")]),s._v(" "),n("p",[s._v("完整教程见语雀：https://www.yuque.com/sunluyong/fe4java/pwsehvspthh6gtrd")]),s._v(" "),n("p",[n("strong",[s._v("参考链接：")])]),s._v(" "),n("p",[s._v("[1]https://create-react-app.dev/")]),s._v(" "),n("p",[s._v("[2]https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi")]),s._v(" "),n("p",[s._v("[3]https://www.npmjs.com/package/react-dom")]),s._v(" "),n("p",[s._v("https://www.yuque.com/sunluyong/fe4java/pwsehvspthh6gtrd")]),s._v(" "),n("p",[s._v("https://mp.weixin.qq.com/s/QTbQnvzX4MxWbCLO1K4gWg")])])}),[],!1,null,null,null);n.default=e.exports},780:function(s,n,a){s.exports=a.p+"assets/img/640-1688956925360-9.d6d57fc2.png"},781:function(s,n,a){s.exports=a.p+"assets/img/640-1688956927856-12.1159e971.png"},782:function(s,n,a){s.exports=a.p+"assets/img/640-1688957101138-24.83cf7c79.png"},783:function(s,n,a){s.exports=a.p+"assets/img/640-1688957079732-21.84071ba9.png"},784:function(s,n,a){s.exports=a.p+"assets/img/640-1688957017383-15.0c17f7b4.png"},785:function(s,n,a){s.exports=a.p+"assets/img/640-1688957055449-18.6924a95f.png"},786:function(s,n,a){s.exports=a.p+"assets/img/640-1688956903167-6.66bf19a9.png"},787:function(s,n,a){s.exports=a.p+"assets/img/640-1688956900327-3.32318770.png"},788:function(s,n,a){s.exports=a.p+"assets/img/640-1212acvasda.4f0a013d.png"}}]);