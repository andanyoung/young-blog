(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1191:function(e,s,n){"use strict";n.r(s);var t=n(4),a=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"阻塞-i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞-i-o"}},[e._v("#")]),e._v(" 阻塞 I/O")]),e._v(" "),s("p",[e._v("在这种 IO 模型的场景下，我们是给每一个客户端连接创建一个线程去处理它。不管这个客户端建立了连接有没有在做事（发送读取数据之类），都要去维护这个连接，直到连接断开为止。创建过多的线程就会消耗过高的资源，以 Java BIO 为例")]),e._v(" "),s("ul",[s("li",[e._v("BIO 是一个同步阻塞 IO")]),e._v(" "),s("li",[e._v("Java 线程的实现取决于底层操作系统的实现在 linux 系统中，一个线程映射到一个轻量级进程（用户态中）然后去调用内核线程执行操作")]),e._v(" "),s("li",[e._v("对线程的调度，切换时刻状态的存储等等都要消耗很多 CPU 和缓存资源")]),e._v(" "),s("li",[e._v("同步：客户端请求服务端后，服务端开始处理假设处理 1 秒钟，这一秒钟就算客户端再发送很多请求过来，服务端也忙不过来，它必须等到之前的请求处理完毕后再去处理下一个请求，当然我们可以使用伪异步 IO 来实现，也就是实现一个线程池，客户端请求过来后就丢给线程池处理，那么就能够继续处理下一个请求了")]),e._v(" "),s("li",[e._v("阻塞：inputStream.read(data) 会通过 recvfrom 去接收数据，如果内核数据还没有准备好就会一直处于阻塞状态")])]),e._v(" "),s("p",[e._v("由此可见阻塞 I/O 难以支持高并发的场景")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    public static void main(String[] args) throws IOException {\n        ServerSocket serverSocket = new ServerSocket(9999);\n        // 新建一个线程用于接收客户端连接\n        // 伪异步 IO\n        new Thread(() -> {\n            while (true) {\n                System.out.println("开始阻塞, 等待客户端连接");\n                try {\n                    Socket socket = serverSocket.accept();\n                    // 每一个新来的连接给其创建一个线程去处理\n                    new Thread(() -> {\n                        byte[] data = new byte[1024];\n                        int len = 0;\n                        System.out.println("客户端连接成功，阻塞等待客户端传入数据");\n                        try {\n                            InputStream inputStream = socket.getInputStream();\n                            // 阻塞式获取数据直到客户端断开连接\n                            while ((len = inputStream.read(data)) != -1) {\n                                // 或取到数据\n                                System.out.println(new String(data, 0, len));\n                                // 处理数据\n                            }\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                        }\n                    }).start();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n        }).start();\n    }\n复制代码\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br")])]),s("p",[e._v("如果接受到了一个客户端连接而不采用对应的一个线程去处理的话，首先 serverSocket.accept(); 无法去获取其它连接，其次 inputStream.read() 可以看到获取到数据后需要处理完成后才能处理接收下一份数据，正因如此在阻塞 I/O 模型的场景下我们需要为每一个客户端连接创建一个线程去处理")]),e._v(" "),s("h2",{attrs:{id:"非阻塞-i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞-i-o"}},[e._v("#")]),e._v(" 非阻塞 I/O")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://md7.admin4j.com/blog/906a8a49b60476b1890c8586a269af0c.png",alt:"img"}})]),e._v(" "),s("p",[e._v("可以看到是通过服务端应用程序不断的轮询内核数据是否准备好，如果数据没有准备好的话，内核就返回一个 BWOULDBLOCK 错误，那么应用程序就继续轮询直到数据准备好了为止，在 Java 中的 NIO(非阻塞 I/O, New I/O) 底层是通过多路复用 I/O 模型实现的。而现实的场景也是诸如 netty，redis，nginx，nodejs 都是采用的多路复用 I/O 模型，因为在非阻塞 I/O 这种场景下需要我们不断的去轮询，也是会消耗大量的 CPU 资源的，一般很少采用这种方式。我们这里手写一段伪代码来看下")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    Socket socket = serverSocket.accept();\n    // 不断轮询内核，哪个 socket 的数据是否准备好了\n    while (true) {\n        data = socket.read();\n        if (data != BWOULDBLOCK) {\n            // 表示获取数据成功\n            doSomething();\n        }\n    }\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h2",{attrs:{id:"多路复用-i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路复用-i-o"}},[e._v("#")]),e._v(" 多路复用 I/O")]),e._v(" "),s("p",[e._v("Java 中的 NIO 就是采用的多路复用机制，他在不同的操作系统有不同的实现，在 windows 上采用的是 select 在 unix，linux 上是 epoll。而 poll 模型是对 select 稍许升级大致相同。最先出现的是 select 后由于 select 的一些痛点比如它在 32 为系统下，单进程支持最多打开 1024 个文件描述符（linux 对 IO 等操作都是通过对应的文件描述符实现的 socket 对应的是 socket 文件描述符），poll 对其进行了一些优化，比如突破了 1024 这个限制，他能打开的文件描述符不受限制（但还是要取决于系统资源），而上述 2 中模型都有一个很大的性能问题导致产生出了 epoll。后面会详细分析")]),e._v(" "),s("h3",{attrs:{id:"select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[e._v("#")]),e._v(" select")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://md7.admin4j.com/blog/49bc8c8608bf1c026cbaf71340f8287e.png",alt:"img"}})]),e._v(" "),s("p",[e._v("解释下上图")]),e._v(" "),s("ul",[s("li",[e._v("文件列表对应的就是创建的 socket 在 Linux 中对应 IO 等操作都映射到一个对应的文件描述符中")]),e._v(" "),s("li",[e._v("工作队列就是 CPU 需要执行的一些进程，这些进程需要获得对应的时间片后执行")]),e._v(" "),s("li",[e._v("阻塞是不消耗 CPU 资源的")]),e._v(" "),s("li",[e._v("调用 select 陷入阻塞，进程从工作队列移除，传递需要监视的 sockets 到内核，然后在每一个 socket 中放入进程 A")])]),e._v(" "),s("p",[e._v("只要操作系统内核发现有一个 socket 对应的数据准备就绪了，那么立马就会唤醒进程 A，所谓的唤醒也就是将进程从对应的 sockets 的等待队列中移除，然后唤醒进程 A，让进程 A 放入工作队列中，等待 CPU 调度。")]),e._v(" "),s("p",[e._v("这个时候进程 A 是不知道到底哪个 socket 准备就绪的，那么它就需要再遍历一遍之前的 sockets 看下哪几个数据准备就绪了，然后进行处理。 看下图")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://md7.admin4j.com/blog/16cdcaa2a03558e3c83de53a14de987a.png",alt:"img"}})]),e._v(" "),s("p",[e._v("用一段伪代码来实现")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 假设现目前获得了很多 serverSocket.accept(); 后的客户端连接 List<Socket> sockets;\nsockets = getSockets();\nwhile (true) {\n    // 阻塞，将所有的 sockets 传入内核让它帮我们检测是否有数据准备就绪\n    // n 表示有多少个 socket 准备就绪了\n    int n = select(sockets);\n    for (int i = 0; i < sockets.length; i++) {\n        // FD_ISSET 挨个检查 sockets 查看下内核数据是否准备就绪\n        if (FD_ISSET(sockets[i]) {\n            // 准备就绪了，挨个处理就绪的 socket\n            doSomething();\n        }\n    }\n}\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("p",[e._v("由此也能看出 select 的一些缺陷")]),e._v(" "),s("ul",[s("li",[e._v("单进程能打开的最大文件描述符为 1024")]),e._v(" "),s("li",[e._v("监视 sockets 的时候需要将所有的 sockets 的文件描述符传入内核并且设置对应的进程")]),e._v(" "),s("li",[e._v("唤醒的时候由于进程不知道是哪个 socket 获得了数据又需要进行一次遍历")])]),e._v(" "),s("h3",{attrs:{id:"poll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[e._v("#")]),e._v(" poll")]),e._v(" "),s("p",[e._v("poll 跟 select 相似对其进行了部分优化，比如单进程能打开的文件描述符不受限制，底层是采用的链表实现")]),e._v(" "),s("h3",{attrs:{id:"epoll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#epoll"}},[e._v("#")]),e._v(" epoll")]),e._v(" "),s("p",[e._v("epoll 的出现相较于 select 晚了几年，它对 select，poll 进行了大幅度的优化。如下")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://md7.admin4j.com/blog/5bef6cac108ef4aaaffa170fba2e70cd.png",alt:"img"}})]),e._v(" "),s("p",[e._v("就上图说明，相较于 select 可以发现主要是多了一个 eventpoll（rdlist），之前的需要监视的 socket 都需要绑定一个进程，现在都改为指向了 eventpoll，它是什么呢，我们看下 epoll 实现的伪代码")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 假设现目前获得了很多 serverSocket.accept(); 后的客户端连接 List<Socket> sockets;\nsockets = getSockets();\n// 这里就是在创建 eventpoll\nint epfd = epoll_create();\n// 将所有需要监视的 socket 都加入到 eventpoll 中\nepoll_ctl(epfd, sockets);\nwhile (true) {\n    // 阻塞返回准备好了的 sockets\n    int n = epoll_wait();\n    // 这里就直接对收到数据的 socket 进行遍历不需要再遍历所有的 sockets\n    // 是怎么做到的呢，下面继续分析\n    for (遍历接收到数据的 socket) {\n\n    }\n}\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("h3",{attrs:{id:"就绪队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#就绪队列"}},[e._v("#")]),e._v(" 就绪队列")]),e._v(" "),s("p",[e._v("这里的等待队列和 select 的是一个意思，表示 eventpoll 上面挂起的进程 A，此时进程 A 是处于被阻塞状态的从工作队列移除的，需要被唤醒。")]),e._v(" "),s("p",[e._v("就绪队列就是上图的 rdlist 它是 eventpoll 的一个成员，指的是内核中有哪些数据已经准备就绪。这个是怎么做到的呢，当我们调用 epoll_ctl() 的时候会为每一个 socket 注册一个回调函数，当某个 socket 准备好了就会回调然后加入 rdlist 中的，rdlist 的数据结构是一个双向链表。")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://md7.admin4j.com/blog/bd3f2121e104e477e18b727e37d46857.png",alt:"img"}})]),e._v(" "),s("p",[e._v("这下我们就可以直接从 rdlist 中通过一次系统调用直接获取数据了而不需要再去遍历所有的 sockets 了。")]),e._v(" "),s("p",[e._v("epoll 提升了系统的并发，有限的资源提供更多的服务较于 select、poll 优势总结如下")]),e._v(" "),s("ul",[s("li",[e._v("内核监视 sockets 的时候不再需要每次传入所有的 sockets 文件描述符，然后又全部断开（反复）的操作了，它只需通过一次 epoll_ctl 即可")]),e._v(" "),s("li",[e._v("select、poll 模型下进程收到了 sockets 准备就绪的指令执行后，它不知道到底是哪个 socket 就绪了，需要去遍历所有的 sockets，而 epoll 维护了一个 rdlist 通过回调的方式将就绪的 socket 插入到 rdlist 链表中，我们可以直接获取 rdlist 即可，无需遍历其它的 socket 提升效率")])]),e._v(" "),s("p",[e._v("最后我们考虑下 epoll 的适用场景，只要同一时间就绪列表不要太长都适合。比如 Nginx 它的处理都是及其快速的，如果它为每一个请求还创建一个线程，这个开销情况下它还如何支持高并发。")]),e._v(" "),s("p",[e._v("最后我们来看下 netty， netty 也是采用的多路复用模型我们讨论在 linux 情况下的 epoll 使用情况，netty 要如何使用才能更加高效呢？如果某一个 socket 请求时间相对较长比如 100MS 会大幅度降低模型对应的并发性，该如何处理呢，代码如下。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public class NIOServer {\n    public static void main(String[] args) throws IOException {\n        Selector serverSelector = Selector.open();\n        Selector clientSelector = Selector.open();\n\n        new Thread(() -> {\n            try {\n                // 对应IO编程中服务端启动\n                ServerSocketChannel listenerChannel = ServerSocketChannel.open();\n                listenerChannel.socket().bind(new InetSocketAddress(8000));\n                listenerChannel.configureBlocking(false);\n                listenerChannel.register(serverSelector, SelectionKey.OP_ACCEPT);\n\n                while (true) {\n                    // 一致处于阻塞直到有 socket 数据准备就绪\n                    if (serverSelector.select() > 0) {\n                        Set<SelectionKey> set = serverSelector.selectedKeys();\n                        Iterator<SelectionKey> keyIterator = set.iterator();\n\n                        while (keyIterator.hasNext()) {\n                            SelectionKey key = keyIterator.next();\n\n                            if (key.isAcceptable()) {\n                                try {\n                                    // (1) 每来一个新连接，不需要创建一个线程，而是直接注册到clientSelector\n                                    SocketChannel clientChannel = ((ServerSocketChannel) key.channel()).accept();\n                                    clientChannel.configureBlocking(false);\n                                    clientChannel.register(clientSelector, SelectionKey.OP_READ);\n                                } finally {\n                                    keyIterator.remove();\n                                }\n                            }\n\n                        }\n                    }\n                }\n            } catch (IOException ignored) {\n            }\n\n        }).start();\n\n\n        new Thread(() -> {\n            try {\n                while (true) {\n                    // 阻塞等待读事件准备就绪\n                    if (clientSelector.select() > 0) {\n                        Set<SelectionKey> set = clientSelector.selectedKeys();\n                        Iterator<SelectionKey> keyIterator = set.iterator();\n\n                        while (keyIterator.hasNext()) {\n                            SelectionKey key = keyIterator.next();\n\n                            if (key.isReadable()) {\n                                try {\n                                    SocketChannel clientChannel = (SocketChannel) key.channel();\n                                    ByteBuffer byteBuffer = ByteBuffer.allocate(1024);\n                                    // (3) 面向 Buffer\n                                    clientChannel.read(byteBuffer);\n                                    byteBuffer.flip();\n                                    System.out.println(Charset.defaultCharset().newDecoder().decode(byteBuffer)\n                                            .toString());\n                                } finally {\n                                    keyIterator.remove();\n                                    key.interestOps(SelectionKey.OP_READ);\n                                }\n                            }\n\n                        }\n                    }\n                }\n            } catch (IOException ignored) {\n            }\n        }).start();\n    }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br"),s("span",{staticClass:"line-number"},[e._v("65")]),s("br"),s("span",{staticClass:"line-number"},[e._v("66")]),s("br"),s("span",{staticClass:"line-number"},[e._v("67")]),s("br"),s("span",{staticClass:"line-number"},[e._v("68")]),s("br"),s("span",{staticClass:"line-number"},[e._v("69")]),s("br"),s("span",{staticClass:"line-number"},[e._v("70")]),s("br"),s("span",{staticClass:"line-number"},[e._v("71")]),s("br"),s("span",{staticClass:"line-number"},[e._v("72")]),s("br"),s("span",{staticClass:"line-number"},[e._v("73")]),s("br"),s("span",{staticClass:"line-number"},[e._v("74")]),s("br"),s("span",{staticClass:"line-number"},[e._v("75")]),s("br"),s("span",{staticClass:"line-number"},[e._v("76")]),s("br")])]),s("p",[e._v("来分析下上面这段代码")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("用 serverSelector 来处理所有客户端的连接请求")])]),e._v(" "),s("li",[s("p",[e._v("用 clientSelector 来处理所有客户端连接成功后的读操作")])]),e._v(" "),s("li",[s("ol",[s("li",[e._v("将 SelectionKey.OP_ACCEPT 这个操作注册到了 serverSelector 上面")])]),e._v(" "),s("blockquote",[s("p",[e._v("相当于上述将的将我们去创建 eventpoll 并且将当前 serverSocket 进行监视并且注册的是 ACCEPT 建立连接这个事件，将当前 Thread 移除工作队列挂入 eventpoll 的等待队列")])])]),e._v(" "),s("li",[s("ol",[s("li",[e._v("serverSelector.select() > 0 就是有 socket 数据准备就绪这里也就是有连接建立准备就绪")])]),e._v(" "),s("blockquote",[s("p",[e._v("相当于 epoll_wait 返回了可读数量（建立连接的数量），然后我们通过 clientSelector.selectedKeys(); 拿到了就绪队列里面的 socket")])])]),e._v(" "),s("li",[s("ol",[s("li",[e._v("我们知道建立连接这个操作是很快的，建立成功后给 socket 注册到 clientSelector 上并且注册 READ 事件")])]),e._v(" "),s("blockquote",[s("p",[e._v("就相当于我们又建立了一个 eventpoll 传入的就是需要监视读取事件的 socket（这其实就是之前讲的列子 sockets = getSockets()），然后 eventpoll 从工作队列中移除，需要监视的 sockets 全部指向 eventpoll ，eventpoll 的等待队列就是当前 new Thread 这个线程。")])])]),e._v(" "),s("li",[s("ol",[s("li",[e._v("一旦某个 socket 读准备就绪，那么 eventpoll 的 rdlist 数据就会准备好，同时会唤醒当前等待的线程来处理数据")])])])]),e._v(" "),s("p",[e._v("这里思考下由于建立连接的那个线程非常快速只有绑定读取事件给 clientSelector，所以时间可以忽略。但是在 clientSelector 中获取到数据后一般需要进行业务逻辑操作，比如")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("if (key.isReadable()) {\n    doSomething();\n}\n\nvoid doSomething() {\n    Thread.sleep(500);\n}\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("如果出现这种情况由于是单线程的，那么其它 socket 的读就绪事件可能就无法得到及时的响应，所以一般的做法是，不要在这个线程中处理过于耗时的操作因为会极大的降低其并发性，对于那种可能相对较慢的操作我们就丢给线程池去处理。"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/homepage?__biz%3DMzIzNzgyMjYxOQ%3D%3D%26hid%3D3%26sn%3De09cc30d43246842fde82da2c7671553",target:"_blank",rel:"noopener noreferrer"}},[e._v("label"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("if (key.isReadable()) {\n    // 耗时就扔进线程池中\n    executor.execute(task);\n}\n复制代码\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("其实这也就是 netty 的处理方式，我们默认使用 netty 的时候，会创建 "),s("code",[e._v("serverBootstrap.group(boosGroup, workerGroup)")]),e._v(" 其中默认情况 boosGroup 是一个线程在处理，workerGroup 是 n * cup 个线程在处理这样就能大幅度的提升并发性了。")]),e._v(" "),s("p",[e._v("另外有的小伙伴会说，netty 这样处理，最终又将客户端的操作去建立一个线程又丢给线程池了，这和我们使用阻塞式 I/O 每个请求建立一个连接一样扔进线程池有撒区别。")]),e._v(" "),s("p",[e._v("区别就在于，对于阻塞 I/O 每一个请求过来会创建一个连接（就算有线程池一样有很多线程创建维护的开销），而对于多路复用来说建立连接只是一个线程在处理，并且它会将对于的 read 事件注入到其它 selector 中，对于用户来说，肯定不会建立了连接那我就时时刻刻我不停的在发送请求了，多路复用的好处就体现出来了，连接你建立 OK linux 内核维护，我不去创建线程开销。当你真正有读的请求来的时候，我再给你取分配资源执行（如果耗时就走线程池），这里真正的请求过来的数量是远远低于建立成功的 sockets 数目的。那么对于的线程池线程开销也会远远低于每个请求建立一个线程的开销。")]),e._v(" "),s("p",[e._v("但是如果对于那种每次获取就绪队列的时候都是接近满负荷的话就不太适用于了多路复用的场景了。")])])}),[],!1,null,null,null);s.default=a.exports}}]);