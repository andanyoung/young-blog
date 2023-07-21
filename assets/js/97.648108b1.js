(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{920:function(n,e,a){"use strict";a.r(e);var t=a(4),r=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"netty-组件介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netty-组件介绍"}},[n._v("#")]),n._v(" Netty 组件介绍")]),n._v(" "),e("p",[n._v("Netty 有 Bootstrap/ServerBootstrap，Channel，EventLoop，ChannelFuture，\nChannelHandler，ChannelPipeline，编码器和解码器等核心组件。")]),n._v(" "),e("h4",{attrs:{id:"bootstrap-serverbootstrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-serverbootstrap"}},[n._v("#")]),n._v(" Bootstrap/ServerBootstrap")]),n._v(" "),e("p",[n._v("Bootstrap 和 ServerBootstrap 是 Netty 应用程序的引导类，它提供了用于应用程序网络层的配置。\n一般的 Netty 应用程序总是分为客户端和服务端，所以引导分为客户端引导 Bootstrap 和服务端引导 ServerBootstrap，\nServerBootstrap 作为服务端引导，它将服务端进程绑定到指定的端口，而 Bootstrap 则是将客户端连接到\n指定的远程服务器。\nBootstrap 和 ServerBootstrap 除了职责不同，它们所需的 EventLoopGroup 的数量也不同，\nBootstrap 引导客户端只需要一个 EventLoopGroup，而 ServerBootstrap 则需要两个 EventLoopGroup。")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://md7.admin4j.com/blog/2021020318154762.png",alt:"Bootstrap引导类功能"}})]),n._v(" "),e("h4",{attrs:{id:"channel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[n._v("#")]),n._v(" Channel")]),n._v(" "),e("p",[n._v("在我们使用某种语言，如 c/c++,java,go 等，进行网络编程的时候，我们通常会使用到 Socket，\nSocket 是对底层操作系统网络 IO 操作(如 read,write,bind,connect 等)的封装，\n因此我们必须去学习 Socket 才能完成网络编程，而 Socket 的操作其实是比较复杂的，想要使用好它有一定难度，\n所以 Netty 提供了 Channel(io.netty.Channel，而非 java nio 的 Channel)，更加方便我们处理 IO 事件。")]),n._v(" "),e("h4",{attrs:{id:"eventloop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eventloop"}},[n._v("#")]),n._v(" EventLoop")]),n._v(" "),e("p",[n._v("EventLoop 用于服务端与客户端连接的生命周期中所发生的事件。\nEventLoop 与 EventLoopGroup，Channel 的关系模型如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://md7.admin4j.com/blog/20210203181634780.png",alt:"EventLoop模型"}})]),n._v(" "),e("p",[n._v("一个 EventLoopGroup 通常包含一个或多个 EventLoop，一个 EventLoop 可以处理多个 Channel 的 IO 事件，\n一个 Channel 也只会被注册到一个 EventLoop 上。"),e("strong",[n._v("在 EventLoop 的生命周期中，它只会和一个 Thread 线程绑定，这个\nEventLoop 处理的 IO 事件都将在与它绑定的 Thread 内被处理。")])]),n._v(" "),e("h4",{attrs:{id:"channelfuture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channelfuture"}},[n._v("#")]),n._v(" ChannelFuture")]),n._v(" "),e("p",[n._v("在 Netty 中，所有的 IO 操作都是异步执行的，所以一个操作会立刻返回，但是如何获取操作执行完的结果呢？\nNetty 就提供了 ChannelFuture 接口，它的 addListener 方法会向 Channel 注册 ChannelFutureListener，\n以便在某个操作完成时得到通知结果。")]),n._v(" "),e("h4",{attrs:{id:"channelhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channelhandler"}},[n._v("#")]),n._v(" ChannelHandler")]),n._v(" "),e("p",[n._v("我们知道 Netty 是一个款基于事件驱动的网络框架，当特定事件触发时，我们能够按照自定义的逻辑去处理数据。\n"),e("strong",[n._v("ChannelHandler 则正是用于处理入站和出站数据钩子")]),n._v("，它可以处理几乎所有类型的动作，所以 ChannelHandler 会是\n我们开发者更为关注的一个接口。")]),n._v(" "),e("p",[n._v("ChannelHandler 主要分为处理入站数据的 ChannelInboundHandler 和出站数据的 ChannelOutboundHandler 接口。")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://md7.admin4j.com/blog/20210203181851215.png",alt:"ChannelHandler接口层次图"}})]),n._v(" "),e("p",[n._v("Netty 以适配器的形式提供了大量默认的 ChannelHandler 实现，主要目的是为了简化程序开发的过程，我们只需要\n重写我们关注的事件和方法就可以了。 通常我们会以继承的方式使用以下适配器和抽象:")]),n._v(" "),e("ul",[e("li",[n._v("ChannelHandlerAdapter")]),n._v(" "),e("li",[n._v("ChannelInboundHandlerAdapter")]),n._v(" "),e("li",[n._v("ChannelDuplexHandler")]),n._v(" "),e("li",[n._v("ChannelOutboundHandlerAdapter")])]),n._v(" "),e("h4",{attrs:{id:"channelpipeline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channelpipeline"}},[n._v("#")]),n._v(" ChannelPipeline")]),n._v(" "),e("p",[n._v("上面介绍了 ChannelHandler 的作用，它使我们更关注于特定事件的数据处理，但如何使我们自定义的\nChannelHandler 能够在事件触发时被使用呢？ Netty 提供了 ChannelPipeline 接口，它\n提供了存放 ChannelHandler 链的容器，且 ChannelPipeline 定义了在这条 ChannelHandler 链上\n管理入站和出站事件流的 API。\n当一个 Channel 被初始化时，会使用 ChannelInitializer 接口的 initChannel 方法在 ChannelPipeline 中\n添加一组自定义的 ChannelHandler。")]),n._v(" "),e("h4",{attrs:{id:"入站事件和出站事件的流向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入站事件和出站事件的流向"}},[n._v("#")]),n._v(" 入站事件和出站事件的流向")]),n._v(" "),e("p",[n._v("从服务端角度来看，如果一个事件的运动方向是从客户端到服务端，那么这个事件是入站的，如果事件运动的方向\n是从服务端到客户端，那么这个事件是出站的。")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://md7.admin4j.com/blog/20210203181921531.png",alt:"Netty出站入站"}})]),n._v(" "),e("p",[n._v("上图是 Netty 事件入站和出站的大致流向，入站和出站的 ChannelHandler 可以被安装到一个 ChannelPipeline 中，\n"),e("strong",[n._v("如果一个消息或其他的入站事件被[读取]，那么它会从 ChannelPipeline 的头部开始流动，并传递给第一个 ChannelInboundHandler\n，这个 ChannelHandler 的行为取决于它的具体功能，不一定会修改消息。 在经历过第一个 ChannelInboundHandler 之后，\n消息会被传递给这条 ChannelHandler 链的下一个 ChannelHandler，最终消息会到达 ChannelPipeline 尾端，消息的读取也就结束了。")])]),n._v(" "),e("p",[e("strong",[n._v("数据的出站(消息被[写出])流程与入站是相似的，在出站过程中，消息从 ChannelOutboundHandler 链的尾端开始流动，\n直到到达它的头部为止，在这之后，消息会到达网络传输层进行后续传输。")])]),n._v(" "),e("h4",{attrs:{id:"进一步了解-channelhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进一步了解-channelhandler"}},[n._v("#")]),n._v(" 进一步了解 ChannelHandler")]),n._v(" "),e("p",[n._v("鉴于入站操作和出站操作是不同的，可能有同学会疑惑：为什么入站 ChannelHandler 和出站 ChannelHandler 的数据\n不会窜流呢(为什么入站的数据不会到出站 ChannelHandler 链中)？ 因为 Netty 可以区分 ChannelInboundHandler 和\nChannelOutboundHandler 的实现，并确保"),e("strong",[n._v("数据只在两个相同类型的 ChannelHandler 直接传递，即数据要么在\nChannelInboundHandler 链之间流动，要么在 ChannelOutboundHandler 链之间流动。")])]),n._v(" "),e("p",[e("strong",[n._v("当 ChannelHandler 被添加到 ChannelPipeline 中后，它会被分配一个 ChannelHandlerContext，\n它代表了 ChannelHandler 和 ChannelPipeline 之间的绑定。 我们可以使用 ChannelHandlerContext\n获取底层的 Channel，但它最主要的作用还是用于写出数据。")])]),n._v(" "),e("h4",{attrs:{id:"编码器和解码器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码器和解码器"}},[n._v("#")]),n._v(" 编码器和解码器")]),n._v(" "),e("p",[n._v("当我们通过 Netty 发送(出站)或接收(入站)一个消息时，就会发生一次数据的转换，因为数据在网络中总是通过字节传输的，\n所以当数据入站时，Netty 会解码数据，即把数据从字节转为为另一种格式(通常是一个 Java 对象)，\n当数据出站时，Netty 会编码数据，即把数据从它当前格式转为为字节。")]),n._v(" "),e("p",[n._v("Netty 为编码器和解码器提供了不同类型的抽象，这些编码器和解码器其实都是 ChannelHandler 的实现，\n它们的名称通常是 ByteToMessageDecoder 和 MessageToByteEncoder。")]),n._v(" "),e("p",[n._v("对于入站数据来说，解码其实是解码器通过重写 ChannelHandler 的 read 事件，然后调用它们自己的\ndecode 方法完成的。\n对于出站数据来说，编码则是编码器通过重写 ChannelHandler 的 write 事件，然后调用它们自己的\nencode 方法完成的。")]),n._v(" "),e("p",[e("strong",[n._v("为什么编码器和解码器被设计为 ChannelHandler 的实现呢?")])]),n._v(" "),e("p",[n._v("我觉得这很符合 Netty 的设计，上面已经介绍过 Netty 是一个事件驱动的框架，其事件由特定的 ChannelHandler\n完成，我们从用户的角度看，编码和解码其实是属于应用逻辑的，按照应用逻辑实现自定义的编码器和解码器就是\n理所应当的。")]),n._v(" "),e("h4",{attrs:{id:"simplechannelinboundhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simplechannelinboundhandler"}},[n._v("#")]),n._v(" SimpleChannelInboundHandler")]),n._v(" "),e("p",[n._v("在我们编写 Netty 应用程序时，会使用某个 ChannelHandler 来接受入站消息，非常简单的一种方式\n是扩展 SimpleChannelInboundHandler< T >，T 是我们需要处理消息的类型。 继承 SimpleChannelInboundHandler\n后，我们只需要重写其中一个或多个方法就可以完成我们的逻辑。")])])}),[],!1,null,null,null);e.default=r.exports}}]);