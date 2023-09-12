(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1102:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Java 的 HashMap 是非线程安全的。多线程下应该用 ConcurrentHashMap。")]),s._v(" "),a("p",[s._v("多线程下[HashMap]的问题（这里主要说死循环问题）：")]),s._v(" "),a("ul",[a("li",[s._v("多线程 put 操作后，get 操作导致死循环。")]),s._v(" "),a("li",[s._v("多线程 put 非 NULL 元素后，get 操作得到 NULL 值。")]),s._v(" "),a("li",[s._v("多线程 put 操作，导致元素丢失。")])]),s._v(" "),a("h3",{attrs:{id:"_1、为何出现死循环-在多线程下使用非线程安全的-hashmap-单线程根本不会出现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、为何出现死循环-在多线程下使用非线程安全的-hashmap-单线程根本不会出现"}},[s._v("#")]),s._v(" 1、为何出现死循环？（在多线程下使用非线程安全的 HashMap，单线程根本不会出现）")]),s._v(" "),a("ul",[a("li",[s._v("HashMap 是采用链表解决 Hash 冲突，"),a("strong",[s._v("因为是链表结构，那么就很容易形成闭合的链路")]),s._v("，这样在循环的时候只要有线程对这个 HashMap 进行 get 操作就会产生死循环。")]),s._v(" "),a("li",[s._v("在单线程情况下，只有一个线程对 HashMap 的数据结构进行操作，是不可能产生闭合的回路的。")]),s._v(" "),a("li",[s._v("那就只有在多线程并发的情况下才会出现这种情况，那就是在 put 操作的时候，如果"),a("code",[s._v("size>initialCapacity*loadFactor")]),s._v("，那么这时候 HashMap 就会进行 rehash 操作，随之 HashMap 的结构就会发生翻天覆地的变化。很有可能就是在两个线程在这个时候同时触发了 rehash 操作，产生了闭合的回路。")])]),s._v(" "),a("h3",{attrs:{id:"_2、如何产生的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何产生的"}},[s._v("#")]),s._v(" 2、如何产生的：")]),s._v(" "),a("p",[s._v("存储数据"),a("code",[s._v("put()")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" public V put(K key, V value)\n {\n  ......\n  //算Hash值\n  int hash = hash(key.hashCode());\n  int i = indexFor(hash, table.length);\n  //如果该key已被插入，则替换掉旧的value （链接操作）\n  for (Entry<K,V> e = table[i]; e != null; e = e.next) {\n   Object k;\n   if (e.hash == hash && ((k = e.key) == key || key.equals(k))) {\n    V oldValue = e.value;\n    e.value = value;\n    e.recordAccess(this);\n    return oldValue;\n   }\n  }\n  modCount++;\n  //该key不存在，需要增加一个结点\n  addEntry(hash, key, value, i);\n  return null;\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("当我们往 HashMap 中 put 元素的时候，先根据 key 的 hash 值得到这个元素在数组中的位置（即下标），然后就可以把这个元素放到对应的位置中了。")]),s._v(" "),a("p",[s._v("如果这个元素所在的位置上已经存放有其他元素了，那么在同一个位子上的元素将以链表的形式存放，新加入的元素放在链头，而先前加入的放在链尾。")]),s._v(" "),a("p",[s._v("检查容量是否超标 addEntry：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" void addEntry(int hash, K key, V value, int bucketIndex)\n {\n  Entry<K,V> e = table[bucketIndex];\n  table[bucketIndex] = new Entry<K,V>(hash, key, value, e);\n  //查看当前的size是否超过了我们设定的阈值threshold，如果超过，需要resize\n  if (size++ >= threshold)\n   resize(2 * table.length);\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果现在 size 已经超过了 threshold，那么就要进行 resize 操作,新建一个更大尺寸的 hash 表，然后把数据从老的 Hash 表中迁移到新的 Hash 表中。")]),s._v(" "),a("p",[s._v("调整 Hash 表大小 resize：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" void resize(int newCapacity)\n {\n  Entry[] oldTable = table;\n  int oldCapacity = oldTable.length;\n  ......\n  //创建一个新的Hash Table\n  Entry[] newTable = new Entry[newCapacity];\n  //将Old Hash Table上的数据迁移到New Hash Table上\n  transfer(newTable);\n  table = newTable;\n  threshold = (int)(newCapacity * loadFactor);\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("当 table[]数组容量较小，容易产生哈希碰撞，所以，Hash 表的尺寸和容量非常的重要。")]),s._v(" "),a("p",[s._v("一般来说，Hash 表这个容器当有数据要插入时，都会检查容量有没有超过设定的 thredhold，如果超过，需要增大 Hash 表的尺寸，这个过程称为 resize。")]),s._v(" "),a("p",[s._v("多个线程同时往 HashMap 添加新元素时，多次 resize 会有一定概率出现死循环，因为每次 resize 需要把旧的数据映射到新的哈希表，这一部分代码在"),a("code",[s._v("HashMap#transfer()")]),s._v(" 方法，如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" void transfer(Entry[] newTable)\n {\n  Entry[] src = table;\n  int newCapacity = newTable.length;\n  //下面这段代码的意思是：\n  //  从OldTable里摘一个元素出来，然后放到NewTable中\n  for (int j = 0; j < src.length; j++) {\n   Entry<K,V> e = src[j];\n   if (e != null) {\n    src[j] = null;\n    do {\n     Entry<K,V> next = e.next;//取出第一个元素\n     int i = indexFor(e.hash, newCapacity);\n     e.next = newTable[i];\n     newTable[i] = e;\n     e = next;\n    } while (e != null);\n   }\n  }\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("标红代码是导致多线程使用 hashmap 出现 CUP 使用率骤增，出现死循环，从而多个线程阻塞的罪魁祸首。")]),s._v(" "),a("h3",{attrs:{id:"_3、图解-hashmap-死循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、图解-hashmap-死循环"}},[s._v("#")]),s._v(" 3、图解 HashMap 死循环：")]),s._v(" "),a("p",[s._v("正常的 ReHash 的过程（单线程）：假设了我们的 hash 算法就是简单的用 key mod 一下表的大小（也就是数组的长度）。")]),s._v(" "),a("p",[s._v("最上面的是 old hash 表，其中的 Hash 表的 size=2, 所以"),a("code",[s._v("key = 3, 7, 5")]),s._v("，在 mod 2 以后都冲突在"),a("code",[s._v("table[1]")]),s._v("这里了。接下来的三个步骤是 Hash 表 resize 成 4，然后所有的"),a("code",[s._v("<key,value>")]),s._v(" 重新 rehash 的过程。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(503),alt:"图片"}})]),s._v(" "),a("p",[s._v("并发下的 Rehash（多线程）")]),s._v(" "),a("p",[a("strong",[s._v("1）假设我们有两个线程。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" do {\n  Entry<K,V> next = e.next; // <--假设线程一执行到这里就被调度挂起了，执行其他操作\n  int i = indexFor(e.hash, newCapacity);\n  e.next = newTable[i];\n  newTable[i] = e;\n  e = next;\n } while (e != null);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("而我们的线程二执行完成了。于是我们有下面的这个样子：")]),s._v(" "),a("p",[a("img",{attrs:{src:e(504),alt:"图片"}})]),s._v(" "),a("blockquote",[a("p",[s._v("注意，因为 Thread1 的 e 指向了 key(3)，而 next 指向了 key(7)，其在线程二 rehash 后，指向了线程二重组后的链表。我们可以看到链表的顺序被反转后。在这里线程一变成了操作经过线程二操作后的 HashMap。")])]),s._v(" "),a("p",[a("strong",[s._v("2）线程一被调度回来执行。")])]),s._v(" "),a("ul",[a("li",[s._v("先是执行 "),a("code",[s._v("newTalbe[i] = e;")])]),s._v(" "),a("li",[s._v("然后是"),a("code",[s._v("e = next")]),s._v("，导致了 e 指向了"),a("code",[s._v("key(7)")]),s._v("，")]),s._v(" "),a("li",[s._v("而下一次循环的"),a("code",[s._v("next = e.next")]),s._v("导致了 next 指向了"),a("code",[s._v("key(3)")]),s._v("。")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(505),alt:"图片"}})]),s._v(" "),a("p",[a("strong",[s._v("3）一切安好。")])]),s._v(" "),a("p",[s._v("线程一接着工作。把"),a("code",[s._v("key(7)")]),s._v("摘下来，放到"),a("code",[s._v("newTable[i]")]),s._v("的第一个，然后把 e 和 next 往下移。这个元素所在的位置上已经存放有其他元素了，那么在同一个位子上的元素将以链表的形式存放，新加入的放在链头，而先前加入的放在链尾。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(506),alt:"图片"}})]),s._v(" "),a("p",[a("strong",[s._v("4）环形链接出现。")])]),s._v(" "),a("p",[a("code",[s._v("e.next = newTable[i]")]),s._v(" 导致 "),a("code",[s._v("key(3).next")]),s._v(" 指向了 "),a("code",[s._v("key(7)")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：此时的"),a("code",[s._v("key(7).next")]),s._v(" 已经指向了"),a("code",[s._v("key(3)")]),s._v("， 环形链表就这样出现了。")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(507),alt:"图片"}})]),s._v(" "),a("p",[s._v("于是，当我们的线程一调用到，"),a("code",[s._v("HashTable.get(11)")]),s._v("时，悲剧就出现了——Infinite Loop。")]),s._v(" "),a("p",[s._v("这里介绍了在多线程下为什么 HashMap 会出现死循环，不过在真实的生产环境下，不会使用线程不安全的 HashMap 的。")])])}),[],!1,null,null,null);a.default=t.exports},503:function(s,a,e){s.exports=e.p+"assets/img/640-121adqwqw.94c7a124.png"},504:function(s,a,e){s.exports=e.p+"assets/img/640-1685331017703-3.f315df3c.png"},505:function(s,a,e){s.exports=e.p+"assets/img/640-1685331020349-6.3816232a.png"},506:function(s,a,e){s.exports=e.p+"assets/img/640-1685331023062-9.0853cdca.png"},507:function(s,a,e){s.exports=e.p+"assets/img/640-1685331025878-12.20705203.png"}}]);