(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{947:function(m,_,v){"use strict";v.r(_);var a=v(4),p=Object(a.a)({},(function(){var m=this,_=m._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":m.$parent.slotKey}},[_("h2",{attrs:{id:"_1-mmap-基础概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-mmap-基础概念"}},[m._v("#")]),m._v(" 1. mmap 基础概念")]),m._v(" "),_("p",[m._v("mmap 即 memory map，也就是内存映射。")]),m._v(" "),_("p",[m._v("mmap 是一种内存映射文件的方法，即"),_("strong",[m._v("将一个文件或者其它对象映射到进程的地址空间，实现文件磁盘地址和进程虚拟地址空间中一段虚拟地址的一一对映关系")]),m._v("。实现这样的映射关系后，进程就可以采用指针的方式读写操作这一段内存，而系统会自动回写脏页面到对应的文件磁盘上，即完成了对文件的操作而不必再调用 read、write 等系统调用函数。相反，内核空间对这段区域的修改也直接反映用户空间，从而可以实现不同进程间的文件共享。如下图所示：")]),m._v(" "),_("p",[_("img",{attrs:{src:"http://md7.admin4j.com/blog/mysql/241fc1832b779eb857d02e0a4ef6cbb5.png",alt:"img"}})]),m._v(" "),_("p",[m._v("mmap 具有如下的特点：")]),m._v(" "),_("ol",[_("li",[m._v("mmap 向应用程序提供的内存访问接口是内存地址连续的，但是对应的磁盘文件的 block 可以不是地址连续的；")]),m._v(" "),_("li",[m._v("mmap 提供的内存空间是虚拟空间（虚拟内存），而不是物理空间（物理内存），因此完全可以分配远远大于物理内存大小的虚拟空间（例如 16G 内存主机分配 1000G 的 mmap 内存空间）；")]),m._v(" "),_("li",[m._v("mmap 负责映射文件逻辑上一段连续的数据（物理上可以不连续存储）映射为连续内存，而这里的文件可以是磁盘文件、驱动假造出的文件（例如 DMA 技术）以及设备；")]),m._v(" "),_("li",[m._v("mmap 由操作系统负责管理，对同一个文件地址的映射将被所有线程共享，操作系统确保线程安全以及线程可见性；")])]),m._v(" "),_("p",[m._v("mmap 的设计很有启发性。基于磁盘的读写单位是 block（一般大小为 4KB），而基于内存的读写单位是地址（虽然内存的管理与分配单位是 4KB）。换言之，CPU 进行一次磁盘读写操作涉及的数据量至少是 4KB，但是进行一次内存操作涉及的数据量是基于地址的，也就是通常的 64bit（64 位操作系统）。mmap 下进程可以采用指针的方式进行读写操作，这是值得注意的。")]),m._v(" "),_("h2",{attrs:{id:"_2-mmap-的-i-o-模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-mmap-的-i-o-模型"}},[m._v("#")]),m._v(" 2. mmap 的 I/O 模型")]),m._v(" "),_("p",[m._v("mmap 也是一种零拷贝技术，其 I/O 模型如下图所示：")]),m._v(" "),_("p",[_("img",{attrs:{src:"http://md7.admin4j.com/blog/mysql/f74658a07608458bc5c508cb1044d172.png",alt:"mmap"}})]),m._v(" "),_("p",[m._v("mmap 技术有如下特点：")]),m._v(" "),_("ol",[_("li",[m._v("利用 DMA 技术来取代 CPU 来在内存与其他组件之间的数据拷贝，例如从磁盘到内存，从内存到网卡；")]),m._v(" "),_("li",[m._v("用户空间的 mmap file 使用虚拟内存，实际上并不占据物理内存，只有在内核空间的 kernel buffer cache 才占据实际的物理内存；")]),m._v(" "),_("li",[_("code",[m._v("mmap()")]),m._v(" 函数需要配合 "),_("code",[m._v("write()")]),m._v(" 系统调动进行配合操作，这与 "),_("code",[m._v("sendfile()")]),m._v(" 函数有所不同，后者一次性代替了 "),_("code",[m._v("read()")]),m._v(" 以及 "),_("code",[m._v("write()")]),m._v("；因此 mmap 也至少需要 4 次上下文切换；")]),m._v(" "),_("li",[m._v("mmap 仅仅能够避免内核空间到用户空间的全程 CPU 负责的数据拷贝，但是内核空间内部还是需要全程 CPU 负责的数据拷贝；")])]),m._v(" "),_("p",[m._v("利用 "),_("code",[m._v("mmap()")]),m._v(" 替换 "),_("code",[m._v("read()")]),m._v("，配合 "),_("code",[m._v("write()")]),m._v(" 调用的整个流程如下：")]),m._v(" "),_("ol",[_("li",[m._v("用户进程调用 "),_("code",[m._v("mmap()")]),m._v("，从用户态陷入内核态，将内核缓冲区映射到用户缓存区；")]),m._v(" "),_("li",[m._v("DMA 控制器将数据从硬盘拷贝到内核缓冲区（可见其使用了 Page Cache 机制）；")]),m._v(" "),_("li",[_("code",[m._v("mmap()")]),m._v(" 返回，上下文从内核态切换回用户态；")]),m._v(" "),_("li",[m._v("用户进程调用 "),_("code",[m._v("write()")]),m._v("，尝试把文件数据写到内核里的套接字缓冲区，再次陷入内核态；")]),m._v(" "),_("li",[m._v("CPU 将内核缓冲区中的数据拷贝到的套接字缓冲区；")]),m._v(" "),_("li",[m._v("DMA 控制器将数据从套接字缓冲区拷贝到网卡完成数据传输；")]),m._v(" "),_("li",[_("code",[m._v("write()")]),m._v(" 返回，上下文从内核态切换回用户态。")])]),m._v(" "),_("h2",{attrs:{id:"_3-mmap-的优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-mmap-的优势"}},[m._v("#")]),m._v(" 3. mmap 的优势")]),m._v(" "),_("p",[_("strong",[m._v("1.简化用户进程编程")])]),m._v(" "),_("p",[m._v("在用户空间看来，通过 mmap 机制以后，磁盘上的文件仿佛直接就在内存中，把访问磁盘文件简化为按地址访问内存。这样一来，应用程序自然不需要使用文件系统的 write（写入）、read（读取）、fsync（同步）等系统调用，因为现在只要面向内存的虚拟空间进行开发。")]),m._v(" "),_("p",[m._v("但是，这并不意味着我们不再需要进行这些系统调用，而是说这些系统调用由操作系统在 mmap 机制的内部封装好了。")]),m._v(" "),_("p",[_("strong",[m._v("（1）基于缺页异常的懒加载")])]),m._v(" "),_("p",[m._v("出于节约物理内存以及 mmap 方法快速返回的目的，mmap 映射采用懒加载机制。具体来说，通过 mmap 申请 1000G 内存可能仅仅占用了 100MB 的虚拟内存空间，甚至没有分配实际的物理内存空间。当你访问相关内存地址时，才会进行真正的 write、read 等系统调用。CPU 会通过陷入缺页异常的方式来将磁盘上的数据加载到物理内存中，此时才会发生真正的物理内存分配。")]),m._v(" "),_("p",[_("strong",[m._v("（2）数据一致性由 OS 确保")])]),m._v(" "),_("p",[m._v("当发生数据修改时，内存出现脏页，与磁盘文件出现不一致。mmap 机制下由操作系统自动完成内存数据落盘（脏页回刷），用户进程通常并不需要手动管理数据落盘。")]),m._v(" "),_("p",[_("strong",[m._v("2.读写效率提高：避免内核空间到用户空间的数据拷贝")])]),m._v(" "),_("p",[m._v("简而言之，mmap 被认为快的原因是因为建立了页到用户进程的虚地址空间映射，以读取文件为例，避免了页从内核空间拷贝到用户空间。")]),m._v(" "),_("p",[_("strong",[m._v("3.避免只读操作时的 swap 操作")])]),m._v(" "),_("p",[m._v("虚拟内存带来了种种好处，但是一个最大的问题在于所有进程的虚拟内存大小总和可能大于物理内存总大小，因此当操作系统物理内存不够用时，就会把一部分内存 swap 到磁盘上。")]),m._v(" "),_("p",[m._v("在 mmap 下，如果虚拟空间没有发生写操作，那么由于通过 mmap 操作得到的内存数据完全可以通过再次调用 mmap 操作映射文件得到。但是，通过其他方式分配的内存，在没有发生写操作的情况下，操作系统并不知道如何简单地从现有文件中（除非其重新执行一遍应用程序，但是代价很大）恢复内存数据，因此必须将内存 swap 到磁盘上。")]),m._v(" "),_("p",[_("strong",[m._v("4.节约内存")])]),m._v(" "),_("p",[m._v("由于用户空间与内核空间实际上共用同一份数据，因此在大文件场景下在实际物理内存占用上有优势。")]),m._v(" "),_("h2",{attrs:{id:"_4-mmap-不是银弹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-mmap-不是银弹"}},[m._v("#")]),m._v(" 4. mmap 不是银弹")]),m._v(" "),_("p",[m._v("mmap 不是银弹，这意味着 mmap 也有其缺陷，在相关场景下的性能存在缺陷：")]),m._v(" "),_("ol",[_("li",[m._v("由于 mmap 使用时必须实现指定好内存映射的大小，因此 mmap 并不适合变长文件；")]),m._v(" "),_("li",[m._v("如果更新文件的操作很多，mmap 避免两态拷贝的优势就被摊还，最终还是落在了大量的脏页回写及由此引发的随机 I/O 上，所以在随机写很多的情况下，mmap 方式在效率上不一定会比带缓冲区的一般写快；")]),m._v(" "),_("li",[m._v("读/写小文件（例如 16K 以下的文件），mmap 与通过 read 系统调用相比有着更高的开销与延迟；同时 mmap 的刷盘由系统全权控制，但是在小数据量的情况下由应用本身手动控制更好；")]),m._v(" "),_("li",[m._v("mmap 受限于操作系统内存大小：例如在 32-bits 的操作系统上，虚拟内存总大小也就 2GB，但由于 mmap 必须要在内存中找到一块连续的地址块，此时你就无法对 4GB 大小的文件完全进行 mmap，在这种情况下你必须分多块分别进行 mmap，但是此时地址内存地址已经不再连续，使用 mmap 的意义大打折扣，而且引入了额外的复杂性；")])]),m._v(" "),_("h2",{attrs:{id:"_5-mmap-的适用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-mmap-的适用场景"}},[m._v("#")]),m._v(" 5. mmap 的适用场景")]),m._v(" "),_("p",[m._v("mmap 的适用场景实际上非常受限，在如下场合下可以选择使用 mmap 机制：")]),m._v(" "),_("ol",[_("li",[m._v("多个线程以只读的方式同时访问一个文件，这是因为 mmap 机制下多线程共享了同一物理内存空间，因此节约了内存。案例：多个进程可能依赖于同一个动态链接库，利用 mmap 可以实现内存仅仅加载一份动态链接库，多个进程共享此动态链接库。")]),m._v(" "),_("li",[m._v("mmap 非常适合用于进程间通信，这是因为对同一文件对应的 mmap 分配的物理内存天然多线程共享，并可以依赖于操作系统的同步原语；")]),m._v(" "),_("li",[m._v("mmap 虽然比 sendfile 等机制多了一次 CPU 全程参与的内存拷贝，但是用户空间与内核空间并不需要数据拷贝，因此在正确使用情况下并不比 sendfile 效率差；")])])])}),[],!1,null,null,null);_.default=p.exports}}]);