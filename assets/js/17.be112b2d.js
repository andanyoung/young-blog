(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1158:function(A,t,v){"use strict";v.r(t);var s=v(4),r=Object(s.a)({},(function(){var A=this,t=A._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[t("h1",{attrs:{id:"一、erp-基础信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、erp-基础信息"}},[A._v("#")]),A._v(" "),t("strong",[A._v("一、ERP 基础信息")])]),A._v(" "),t("p",[A._v("ERP ，Enterprise Resource Planning ，"),t("strong",[A._v("企业资源计划")]),A._v("。\n通过软件把企业的人、财、物、产、供、销及相应的物流、信息流、资源流、管理流等紧密地集成起来，实现资源优化和共享。")]),A._v(" "),t("p",[A._v("ERP 系统发展是一个信息发展历程的缩影，从初始的库存信息记录，到物料信息的支持，到制造资源计划管理，到企业资源管理。ERP 一步步完善自身，扩展自身的业务范围，最终成就当前信息建设三驾马车的地位。")]),A._v(" "),t("p",[t("strong",[A._v("生产制造")]),A._v("就是将买进的"),t("strong",[A._v("物料")]),A._v("生产加工成为"),t("strong",[A._v("产品")]),A._v("。主要包含三大模块："),t("strong",[A._v("物料管理、生产加工、产品管理。")])]),A._v(" "),t("p",[t("img",{attrs:{src:v(966),alt:"img"}})]),A._v(" "),t("p",[A._v("物料管理具象表现在物料库存上，通过采购订单购进物料，增加库存；通过生产领料单进入生产加工，减少库存。产品管理具象表现在产品库存上，通过生产加工完成，增加库存；通过客户订单销售，减少库存。\n生产中心落地于生产制造管理，当前用"),t("strong",[A._v("MES")]),A._v("系统去承载，也是下一篇文章将拆解的系统。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(967),alt:"img"}})]),A._v(" "),t("p",[A._v("以业务模型为框架，针对单模块扩展，可以逐渐完善、细化业务模型；再基于各个模块的相互约束关系，通过数据处理平台、报表、图表等支持，实现多复杂条件下的降本增效，是系统建设、信息化一直来的追求。")]),A._v(" "),t("h1",{attrs:{id:"二、erp-发展历程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、erp-发展历程"}},[A._v("#")]),A._v(" "),t("strong",[A._v("二、ERP 发展历程")])]),A._v(" "),t("p",[t("img",{attrs:{src:v(968),alt:"img"}})]),A._v(" "),t("p",[t("strong",[A._v("（1）库存订货点")]),A._v("：企业通过控制"),t("strong",[A._v("物料库存")]),A._v("的方法来控制物料需求，为每种物料设置"),t("strong",[A._v("最大库存量")]),A._v("和"),t("strong",[A._v("安全库存")]),A._v("。基于库存容量、库存占用金设置"),t("strong",[A._v("最大库存量")]),A._v("；基于物料消耗不能小于安全库存量设置"),t("strong",[A._v("安全库存")]),A._v("。\n物料的供应需要一定周期，如采购周期、生产周期（本司需要的物料可能为另外企业的产品，需要有生产过程），就需要物料还有一定量的情况下采购补充库存，保证生产正常进行。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(969),alt:"img"}})]),A._v(" "),t("p",[A._v("该方法关键点在"),t("strong",[A._v("订货点")]),A._v("和"),t("strong",[A._v("订货批量")]),A._v("。\n该方法要求物料消耗相对稳定、物料供应相对稳定，但现实中常出现多种异常因素，为确保生产的正常进行，就需要提前订货点、增大订货批量。")]),A._v(" "),t("p",[t("strong",[A._v("（2）基本 MRP")]),A._v("：物料需求计划理论，在需要的时候提供需要的数量，解决库存订货点的库存积压问题，增强企业竞争力。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(970),alt:"img"}})]),A._v(" "),t("p",[A._v("通过"),t("strong",[A._v("产品清单 BOM")]),A._v(" 梳理清楚产品与物料之间的关系，顶级节点是产品，下级节点为物料，梳理物料生产时长及配比关系（如：一辆车需要 4 个轮子，5 个座椅），从而践行关键路径法。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(971),alt:"img"}})]),A._v(" "),t("p",[t("strong",[A._v("（3）闭环 MRP")]),A._v("：基于"),t("strong",[A._v("物料需求计划（MRP）")]),A._v(" 主生产计划与物料需求计划可行，提出满足能力约束前提下，确保物料需求计划的执行和实现。通过"),t("strong",[A._v("产能负荷分析")]),A._v(" 判断是否调整主生产计划；通过"),t("strong",[A._v("能力需求计划")]),A._v(" 平衡各加工工序，实现输入输出控制，并根据作业执行结果反馈到计划层。\n闭环 MRP 很好地解决计划与控制的问题。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(972),alt:"img"}})]),A._v(" "),t("p",[t("strong",[A._v("（4）MRP-II")]),A._v("：制造资源计划，即是广义 MRP，是一个围绕企业基本经营目标，以生产计划为主线，对企业制造的各种资源进行统一计划和控制的有效系统，实现企业信息、物流、资金流畅通运行并动态反馈的系统。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(973),alt:"img"}})]),A._v(" "),t("p",[A._v("MRP-II 集成财务管理，通过对企业成本、资金运作过程加以掌控，调整企业生产计划，使得生产计划更为可行、可靠。MRP-II 的核心是"),t("strong",[A._v("物流")]),A._v("，主线是"),t("strong",[A._v("计划")]),A._v("，伴随物流过程，存在资金流和信息流。")]),A._v(" "),t("p",[t("strong",[A._v("（5）ERP")]),A._v("：企业资源计划，以信息技术为基础，利用现代化管理思想，全面集成企业所有资源信息，为企业提供决策、计划、控制与经营评估的全方位、系统化管理平台。ERP 主线是计划，核心是财务，整个过程贯穿财务成本控制的概念。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(974),alt:"img"}})]),A._v(" "),t("h1",{attrs:{id:"三、erp-核心模块及功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、erp-核心模块及功能"}},[A._v("#")]),A._v(" "),t("strong",[A._v("三、ERP 核心模块及功能")])]),A._v(" "),t("p",[t("img",{attrs:{src:v(975),alt:"img"}})]),A._v(" "),t("p",[A._v("ERP 系统业务核心主要是物料库存、产品库存的管理，采购实现物料的输入，客户订单实现产品的销售，达成物料采购、生产制造、产品销售的核心流程。\n系统建设支持业务的执行，对应设计"),t("strong",[A._v("采购管理、销售管理、库存管理")]),A._v("模块；各业务的执行，需要"),t("strong",[A._v("财务管理")]),A._v("支持支付、收款。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(976),alt:"img"}})]),A._v(" "),t("p",[A._v("系统建设总体要实现"),t("strong",[A._v("业务流、资金流")]),A._v("的串通，内在核心需要实现"),t("strong",[A._v("数据流")]),A._v("的串通。针对各个模块，扩展对应的功能，其中以销售管理，进行模块内容扩展讲解。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(977),alt:"img"}})]),A._v(" "),t("p",[A._v("销售的初步是达成合作的共识，并签订法律文件作为运营契约。由产品生产者提供"),t("strong",[A._v("报价")]),A._v("，分发给潜在"),t("strong",[A._v("客户")]),A._v("；基于客户合作意愿，双方协定签订"),t("strong",[A._v("销售合同")]),A._v("，明确双方交易"),t("strong",[A._v("产品价格")]),A._v("。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(978),alt:"img"}})]),A._v(" "),t("p",[A._v("在签约好的基础上，直接按照批次进行交易，按"),t("strong",[A._v("订单")]),A._v("记录、跟进交易过程；完成财务基础条件后，进行"),t("strong",[A._v("发货")]),A._v("；若是产品异常，存在"),t("strong",[A._v("退货")]),A._v("情况；实现产品交易过程。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(979),alt:"img"}})]),A._v(" "),t("p",[A._v("在有合作基础条件下，可以扩展合作意愿。客户可以代理产品，帮助企业"),t("strong",[A._v("分销")]),A._v("。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(980),alt:"img"}})]),A._v(" "),t("p",[A._v("各模块只是业务的关键，本身单模块有多业务内容的实现，需要再次细化为各个功能。")]),A._v(" "),t("p",[A._v("ERP 不仅仅是一套软件，还是一套管理思想。各个企业的业务具体模式存在不同，不能完全照搬。在系统实施落地中，需要以客户业务为基础，ERP 管理思想为支撑，以企业降本增效为目标，来进行系统实施建设。这也是市面上会存有多个 ERP 产品的来源。")]),A._v(" "),t("p",[A._v("经验可以借鉴，产品可以实施部署，但 ERP 是否真正适合企业，还需要企业深入分析、审慎选择。")])])}),[],!1,null,null,null);t.default=r.exports},966:function(A,t){A.exports="data:image/jpeg;base64,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"},967:function(A,t,v){A.exports=v.p+"assets/img/v2-1ad3da947929e5d2496a4de9cab01d09_b.b1768476.jpg"},968:function(A,t,v){A.exports=v.p+"assets/img/v2-cb6333dc1e7f95849c7ca5702f26444d_b.cf14aa48.jpg"},969:function(A,t,v){A.exports=v.p+"assets/img/v2-f1fcf1f6818e55b144030e58b95e2825_b.a147f1a8.jpg"},970:function(A,t,v){A.exports=v.p+"assets/img/v2-c9f57d91d71726070b5a5822352fa6fc_b.d864ff61.jpg"},971:function(A,t,v){A.exports=v.p+"assets/img/v2-529fcafcad996d34c4f4b021e1cde279_b.855b2f90.jpg"},972:function(A,t,v){A.exports=v.p+"assets/img/v2-de2ff944515961329463ad1e0edf675d_b.75501dd6.jpg"},973:function(A,t,v){A.exports=v.p+"assets/img/v2-58b00d1a5590c8bddea638be2bdb8346_b.6f779614.jpg"},974:function(A,t,v){A.exports=v.p+"assets/img/v2-3e075df858a16d5e6d17c037f1a8b6c0_b.8aab8047.jpg"},975:function(A,t,v){A.exports=v.p+"assets/img/v2-7cdd6c20975c1b60fd490ac188e2e036_b.a7c47ba6.jpg"},976:function(A,t,v){A.exports=v.p+"assets/img/v2-3c868733bfdeb0a82025fc3252d7e255_b.31ad79ae.jpg"},977:function(A,t,v){A.exports=v.p+"assets/img/v2-c3965e9f47bf2219fd5f2ab8a3e0d491_b.0335794b.jpg"},978:function(A,t){A.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAvEAAABECAIAAACHwv1ZAAAKS0lEQVR4nO3dT2gb2R3A8efdbQLNQpYeEhkXAj2YUGKXAbXdXnxzsKhKL0UNAgdBmZsvMcnclIsOBSUosAy9mIKwQJShh5b1IhHdRKGlFRVJLkG3LBiPAy3FWSjNIenhhx9vR388dvRvnr6fkzQez4yYn3/v9/6MvHRycqIAAAAS7qNZXwAAAMAYUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbUNMAAAAbfBJnp8PDw0lfB6ZpZWVlaud68urSsB/du/GW3ZK429SQeSxD5mG3D9ktjqWTk5Mzdzo8PLx58+a5jou59fLlyylnloe3Lk/tdJioN2/eTPN0ZB6bkHlwYfEzD3NPAOIa0Z0CgAmJn3moaQAAgA2oaQAAgA2oaQAAgA2oaTBZM3leBsCCI/MsJmoaAABgA2oaAABgA2oaAABgA2oaTBbfaAJg+sg8i4maBmPT+2bWV4AJm9y6S4IHF0bwWC9+5rGhpvF93/d9c0sQBMVisX9P13WDIFBK9Xq9bDY7+mi+76f7mCdyXbfdbuu32WxWDr6wfvX3d8f/m/VFfIBsNtvr9T5kt2KxGIkr13XNmGm325FwGh1jiyOJwTPezBM5cjqd7g+zgQFjWswUlMTgUfFakEhEDWtlyDyaDTVNs9m8ffu26ruLSqkgCFzXlde+73e73Vwup5RaXV11HGdg9jEVCoWOoVAomD/tdrsbGxv6RI7j7O/vj+kzJdLX/1W/+Fsik4vY2tp69OjRmbvdvXt3d3e3f3sQBI1GIwxDnSNc1+12u9VqVW8Jw1ACSULr2rVrmUym0+l4nicvIjG2OJIYPBPKPEEQNJvNQqEwMBojScmUyWTG9tkSJYnBo87fgvi+H4ZhuVyOVCFkHlOs/8s9z4IgCMMwn88rpSqVyvPnz4vF4tramlLK9/3j4+O9vT15Xa1WlVLpdNr89UajIS9SqVSlUpHjKKWq1Womk7l+/bq58/HxsRxZzqszSK/XK5fLnU5H+m07OzsT+7jzrveNKvzz/R9/snTl41lfSgzFYlEHgGZGiOM4Ej+SI4btVqlUUqlUuVz2PC+VSu3u7tbr9Vqt1mg06vX606dPm83mwcHBwGtoNBr6GuSFNcnlvJIVPGPMPGZsBEHQarVki+/7xWKxVCpN6SMlWbKCR8VoQdrttu47NRqNQqFQrVbNaEmn0+vr6/K7ZB4t8TXN/v5+vV5fXV2Vt1L2yuicri3a7baklUqloutiSUDSedIkquR3dcfLbPl0fmm1Wpubm/I6n89XKhX5rWw2u76+rs+ygP767/e//of600+XPlma9aXE4HleLpcrFothGEojpLXb7Vqtpt+awWOS7rj0v8vlsmzUxbF+kU6ndYVkymQypVIpCIIXL16USqU5H/598urSRL/KLEHBM97Mo3+klNJBsrOzI1MPkbKmv8JWSjmOk0qlxvPZkilBwaNitCAbGxvSHh0fH5dKpWKx6Hne69evXdd98OBBPp/3PE+CisxjSnZNI5OR+uZ5nqdvrTqtPeV2djod13UjUwaNRkPvXygUho2vlEqlSE7p9Xrdbndzc7PX60k46oR1cHCQTqeHtX8L4i//ev+brvq9M+/JpVQq9Xo93YGO9KTr9Xp/IhhtxH2PVEgYJhHBM4nMo8Ovf+yw0Wh0Oh39dlhYnjmZbr1EBI86TwvSbDbDMFRGd9r3fSlozLKYzKMlu6aRYlaPrMhonll/jOhqj+gtVavVarUqY33SzdLk+LVazXEcpVQ+nzf7aqLT6VDW/Pno/dXvqC/W5jq1yLyA4zhHR0eO40jkSJbxPC9yW8+0t7cXBEGkMBLSbm1sbMjBZaPEmK0jwB9i/oNnvJlHZhnMqqWfpBT9NjJUM7AjvpjmP3iUUjFbkDAMl5eXHcdZW1sLguD169cy/VSpVHZ3d1utltx0Mo8p2TVNP/M+CQkdMaK3pJS6f//+48eP1Wkc+L5fKBSePXv24MEDiTlJYb1eLwxDGeaVNOS67vb2tsTN7u7uwcHB6PQ0c5999W4KZ9n/+v2Vj9W1K1M41QXt7OzowTmdFFKp1MDbN3BdsNje3tavI22bOg0bsbq6as5v6rYwKSPAarrBs3N1Cqcajw/JPPV6/cyMITs8f/5cb9F1UoI64mQedZ4WJJ1Oe5734sWLXC4nc9w6TjqdjqQsHQbWZ56Ykl3TmKuoZFXviN5SnH7MnTt3Ird2c3OzVqvJMavVaqfTabfb29vbrVbL3G3BZ7JHuHfjrVKXZ30VAwRBYLYrsvhfnT4uq7fLGO/R0VF/d0rox1tEf9umhneAcrlcZKRwkReYJ8jYM48yVhP3i0w0II65zTxhGMZpQdrttud5+u3e3p48wWTuY47/kXlEsmsavYpKndae5XJ5WG9p4MI6EXn0wJTL5VqtlhSzEh8SQ2ZEHh0djeHDTNF/fj6RZ/gjnbD895d++8P5HQGWv2o9JNufEcx8EYbhsKmoSIvV31saIfLglbkOI/bnmLZpBs/h4SRONQYTyjwDV/UNWyVjjv2YY0LzjMyjYrcg5qpzzRzPi/SmrM88MSW7pukXf1Zbk+G+EceUAjmTyQysZGW14HnXXljvl8tLX6zPb1oxDaxozXwhXx0R82gDe0uqLzJlqVa9XpeNegT43FdvowQFjzaJzDPagq/YGyZxwTOuFoTMI+ypaaTsGL3PsAwyYuZI+vGFQqHZbLqu21/Glsvlu3fvnvdq7faz7y397kfz/uiBJt9V1b9dr5LZ39+Pf4sH9pYkcShjzmLOV1zNULKCR4018/Q/lCD012JpFvSnJyFxwaPO2YJEMtXolXxqITOPDTXNs2fPut2urJmS+6eUymaz8gicOaF4Zm9JIkY/XyApRoJARpgjDzQVi8WtrS2muk3rV5fMb7568urSw1szvaCzjB6nabfby8vL8W/xiN6SOp2zkC2RBT3KeIh3YddPRIJnzo0x84hzzT1p5uIes5FbNInLPOr8LciIuScyj1g6OTk5c6fDw8ObN29O4WowBS9fvlxZWZnEkT/76t3qp+rLzz+6bqzMe/Lq0sNb87hSDxfw5s2bCR15YPCQeWxC5sGFxc88Nvy/J8yJ65fVH378rbQCxETw4MIIHmjUNBibLz//6AffnfVFIJkIHlwYwQONmgZjs/rprK8AiUXw4MIIHmjUNADievLq0qwvAcDCiZ95qGkAAIANqGkAAIANqGkAAIANqGkwWfduvJ31JQBYOGSexURNAwAAbEBNAwAAbEBNAwAAbEBNg8niG00ATB+ZZzHF/R+WU7gUTM2E/pPcQMMyi7mCb0T2Ybd5222ayDyWIfOw24V3iylWTQMAADDnmHsCAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2oKYBAAA2+D/V4IryI1WvrwAAAABJRU5ErkJggg=="},979:function(A,t,v){A.exports=v.p+"assets/img/v2-4170fca9111b6e3479b53255ba5f7d99_b.59e91175.jpg"},980:function(A,t,v){A.exports=v.p+"assets/img/v2-69ab93133868c47903ce067d84cbf9b8_b.9fdac28c.jpg"}}]);