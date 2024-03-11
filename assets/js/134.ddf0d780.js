(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1382:function(e,a,n){"use strict";n.r(a);var t=n(4),s=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://javaguide.cn/java/collection/concurrent-hash-map-source-code.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://javaguide.cn/java/collection/concurrent-hash-map-source-code.html"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("两个类设计者不同，对功能构思想法不同")]),e._v(" "),a("li",[e._v("get 方法，返回的结果为 null 有二义性\n"),a("ul",[a("li",[e._v("值没有在集合中 ；")]),e._v(" "),a("li",[e._v("值本身就是 null。")]),e._v(" "),a("li",[a("code",[e._v("contains(key)")]),e._v(" 再多线程情况下无法判断 是否真的存在\n单线程下可以容忍歧义，而多线程下无法容忍")])])])])]),e._v(" "),a("p",[e._v("整个提问看着非常复杂，其实归纳来说就是两个问题：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("ConcurrentHashMap")]),e._v(" 为什么 key 和 value 不能为 null？")]),e._v(" "),a("li",[a("code",[e._v("ConcurrentHashMap")]),e._v(" 能保证复合操作的原子性吗？")])]),e._v(" "),a("p",[e._v("下面我会以此提供这两个问题的详细答案，希望对你有帮助。")]),e._v(" "),a("h3",{attrs:{id:"concurrenthashmap-为什么-key-和-value-不能为-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-为什么-key-和-value-不能为-null"}},[e._v("#")]),e._v(" ConcurrentHashMap 为什么 key 和 value 不能为 null？")]),e._v(" "),a("p",[a("code",[e._v("ConcurrentHashMap")]),e._v(" 的 key 和 value 不能为 null 主要是为了避免二义性。null 是一个特殊的值，表示没有对象或没有引用。如果你用 null 作为键，那么你就无法区分这个键是否存在于 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 中，还是根本没有这个键。同样，如果你用 null 作为值，那么你就无法区分这个值是否是真正存储在 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 中的，还是因为找不到对应的键而返回的。")]),e._v(" "),a("p",[e._v("拿 get 方法取值来说，返回的结果为 null 存在两种情况：")]),e._v(" "),a("ul",[a("li",[e._v("值没有在集合中 ；")]),e._v(" "),a("li",[e._v("值本身就是 null。")])]),e._v(" "),a("p",[e._v("这也就是二义性的由来。")]),e._v(" "),a("p",[e._v("具体可以参考 ConcurrentHashMap 源码分析（ "),a("em",[e._v("https://javaguide.cn/java/collection/concurrent-hash-map-source-code.html")]),e._v("）这篇文章。")]),e._v(" "),a("p",[e._v("多线程环境下，存在一个线程操作该 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 时，其他的线程将该 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 修改的情况，所以无法通过 "),a("code",[e._v("containsKey(key)")]),e._v(" 来判断否存在这个键值对，也就没办法解决二义性问题了。")]),e._v(" "),a("blockquote",[a("p",[e._v("与此形成对比的是，"),a("code",[e._v("HashMap")]),e._v(" 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个。如果传入 null 作为参数，就会返回 hash 值为 0 的位置的值。单线程环境下，不存在一个线程操作该 HashMap 时，其他的线程将该 "),a("code",[e._v("HashMap")]),e._v(" 修改的情况，所以可以通过 "),a("code",[e._v("contains(key)")]),e._v("来做判断是否存在这个键值对，从而做相应的处理，"),a("strong",[e._v("也就不存在二义性问题")]),e._v("。")])]),e._v(" "),a("p",[e._v("也就是说，多线程下无法正确判定键值对是否存在（存在其他线程修改的情况），单线程是可以的（不存在其他线程修改的情况）。")]),e._v(" "),a("p",[e._v("如果你确实需要在 ConcurrentHashMap 中使用 null 的话，可以使用一个特殊的静态空对象来代替 null。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public static final Object NULL = new Object();\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("最后，再分享一下 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 作者本人 (Doug Lea)对于这个问题的回答：")]),e._v(" "),a("blockquote",[a("p",[e._v("The main reason that nulls aren't allowed in ConcurrentMaps (ConcurrentHashMaps, ConcurrentSkipListMaps) is that ambiguities that may be just barely tolerable in non-concurrent maps can't be accommodated. The main one is that if "),a("code",[e._v("map.get(key)")]),e._v(" returns "),a("code",[e._v("null")]),e._v(", you can't detect whether the key explicitly maps to "),a("code",[e._v("null")]),e._v(" vs the key isn't mapped. In a non-concurrent map, you can check this via "),a("code",[e._v("map.contains(key)")]),e._v(", but in a concurrent one, the map might have changed between calls.")])]),e._v(" "),a("p",[e._v("翻译过来之后的，大致意思还是单线程下可以容忍歧义，而多线程下无法容忍。")]),e._v(" "),a("h3",{attrs:{id:"concurrenthashmap-能保证复合操作的原子性吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-能保证复合操作的原子性吗"}},[e._v("#")]),e._v(" ConcurrentHashMap 能保证复合操作的原子性吗？")]),e._v(" "),a("p",[a("code",[e._v("ConcurrentHashMap")]),e._v(" 是线程安全的，意味着它可以保证多个线程同时对它进行读写操作时，不会出现数据不一致的情况，也不会导致 JDK1.7 及之前版本的 "),a("code",[e._v("HashMap")]),e._v(" 多线程操作导致死循环问题。但是，这并不意味着它可以保证所有的复合操作都是原子性的，一定不要搞混了！")]),e._v(" "),a("p",[e._v("复合操作是指由多个基本操作(如"),a("code",[e._v("put")]),e._v("、"),a("code",[e._v("get")]),e._v("、"),a("code",[e._v("remove")]),e._v("、"),a("code",[e._v("containsKey")]),e._v("等)组成的操作，例如先判断某个键是否存在"),a("code",[e._v("containsKey(key)")]),e._v("，然后根据结果进行插入或更新"),a("code",[e._v("put(key, value)")]),e._v("。这种操作在执行过程中可能会被其他线程打断，导致结果不符合预期。")]),e._v(" "),a("p",[e._v("例如，有两个线程 A 和 B 同时对 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 进行复合操作，如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 线程 A\nif (!map.containsKey(key)) {\nmap.put(key, value);\n}\n// 线程 B\nif (!map.containsKey(key)) {\nmap.put(key, anotherValue);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("如果线程 A 和 B 的执行顺序是这样：")]),e._v(" "),a("ol",[a("li",[e._v("线程 A 判断 map 中不存在 key")]),e._v(" "),a("li",[e._v("线程 B 判断 map 中不存在 key")]),e._v(" "),a("li",[e._v("线程 B 将 (key, anotherValue) 插入 map")]),e._v(" "),a("li",[e._v("线程 A 将 (key, value) 插入 map")])]),e._v(" "),a("p",[e._v("那么最终的结果是 (key, value)，而不是预期的 (key, anotherValue)。这就是复合操作的非原子性导致的问题。")]),e._v(" "),a("p",[a("strong",[e._v("那如何保证 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 复合操作的原子性呢？")])]),e._v(" "),a("p",[a("code",[e._v("ConcurrentHashMap")]),e._v(" 提供了一些原子性的复合操作，如 "),a("code",[e._v("putIfAbsent")]),e._v("、"),a("code",[e._v("compute")]),e._v("、"),a("code",[e._v("computeIfAbsent")]),e._v(" 、"),a("code",[e._v("computeIfPresent")]),e._v("、"),a("code",[e._v("merge")]),e._v("等。这些方法都可以接受一个函数作为参数，根据给定的 key 和 value 来计算一个新的 value，并且将其更新到 map 中。")]),e._v(" "),a("p",[e._v("上面的代码可以改写为：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 线程 A\nmap.putIfAbsent(key, value);\n// 线程 B\nmap.putIfAbsent(key, anotherValue);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("或者：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 线程 A\nmap.computeIfAbsent(key, k -> value);\n// 线程 B\nmap.computeIfAbsent(key, k -> anotherValue);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("很多同学可能会说了，这种情况也能加锁同步呀！确实可以，但不建议使用加锁的同步机制，违背了使用 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 的初衷。在使用 "),a("code",[e._v("ConcurrentHashMap")]),e._v(" 的时候，尽量使用这些原子性的复合操作方法来保证原子性。")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("总结\nJava7 中 ConcurrentHashMap 使用的分段锁，也就是每一个 Segment 上同时只有一个线程可以操作，每一个 Segment 都是一个类似 HashMap 数组的结构，它可以扩容，它的冲突会转化为链表。但是 Segment 的个数一但初始化就不能改变。\nJava8 中的 ConcurrentHashMap 使用的 Synchronized 锁加 CAS 的机制。结构也由 Java7 中的 Segment 数组 + HashEntry 数组 + 链表 进化成了 Node 数组 + 链表 / 红黑树，Node 是类似于一个 HashEntry 的结构。它的冲突再达到一定大小时会转化成红黑树，在冲突小于一定数量时又回退链表。\n有些同学可能对 Synchronized 的性能存在疑问，其实 Synchronized 锁自从引入锁升级策略后，性能不再是问题，有兴趣的同学可以自己了解下 Synchronized 的锁升级。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);