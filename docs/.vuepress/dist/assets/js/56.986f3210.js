(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{419:function(t,v,_){"use strict";_.r(v);var a=_(42),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"前端与数据埋点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端与数据埋点"}},[t._v("#")]),t._v(" 前端与数据埋点")]),t._v(" "),_("p",[t._v("所谓埋点就是在应用中特定的流程收集一些信息，用来跟踪应用使用的状况，后续用来进一步优化产品或是提供运营的数据支撑，包括访问数（Visits），访客数（Visitor），停留时长（Time On Site），页面浏览数（Page Views）和跳出率（Bounce Rate）。这样的信息收集可以大致分为两种：页面统计（track this virtual page view），统计操作行为（track this button by an event）。")]),t._v(" "),_("blockquote",[_("p",[t._v("数据埋点的方式")])]),t._v(" "),_("p",[t._v("现在埋点的主流有两种方式：")]),t._v(" "),_("ul",[_("li",[t._v("第一种：自己公司研发在产品中注入代码统计，并搭建起相应的后台查询。")]),t._v(" "),_("li",[t._v("第二种：第三方统计工具，如友盟、神策、Talkingdata、GrowingIO等。")])]),t._v(" "),_("p",[t._v("如果是产品早期，通常会使用第二种方式来采集数据，并直接使用第三方分析工具进行基本的分析。而对于那些对数据安全比较重视，业务又相对复杂的公司则通常是使用第一种方式采集数据，并搭建相应的数据产品实现其数据应用或是分析的诉求。")]),t._v(" "),_("blockquote",[_("p",[t._v("关键指标")])]),t._v(" "),_("p",[t._v("我们先看看无论是APP，H5还是小程序都会关注的指标，了解这些指标的计算方法的细微差异以及复杂性，换个角度来思考埋点的意义")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"访问与访客"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问与访客"}},[t._v("#")]),t._v(" 访问与访客")])])]),t._v(" "),_("p",[t._v("访问次数（Visits）与访问人数（Vistors）是几乎所有应用都需要统计的指标，这也是最基础的指标。")]),t._v(" "),_("p",[t._v("对于应用的统计来说，经常看到的DAU，MAU，UV等指标都是指统计访客（Vistors）。访问（Visits）是指会话层，用户打开应用花一段时间浏览又离开，从指标定义（访问次数）来说这被称之为统计会话（Session）数。")]),t._v(" "),_("p",[t._v("一次会话（Session 或 Visit）是打开应用的第一个请求（打开应用）和最后一个请求决定的。如果用户打开应用然后放下手机或是离开电脑，并在接下来30分钟内没有任何动作，此次会话自动结束，通常也算作一次访问或会话期（30分钟是早起网页版应用约定俗成的会话数定义，目前用户停留在应用的时长变长，30分钟的限定也可能随之不同，总之是能代表一次用户访问的时长）。")]),t._v(" "),_("p",[t._v("在计算访问人数（Vistors）时，埋点上报的数据是"),_("strong",[t._v("尽可能接近真实")]),t._v("访客的人数。对于有需要统计独立访客这个指标的场景，这里还是需要强调一下，访问人数（Vistors）并不是真实独立的人，因此收集数据时必须知道访问人数虽然能够很好的反映使用应用的真实访问者的数量，但不等于使用应用的真实人数。（原因是，重复安装的应用，或是手机参数被修改都会使得独立访客的指标收到影响。计算访问人数的埋点都是依赖Cookie，用户打开应用，应用都会在此人的终端创建一个独立Cookie, Cookie会被保留，但还是难免会被用户手动清理或是Cookie被禁用导致同一用户使用应用Cookie不一致，所以独立访客只能"),_("strong",[t._v("高度接近于")]),t._v("使用应用的真实人数。）")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"停留时长"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#停留时长"}},[t._v("#")]),t._v(" 停留时长")])])]),t._v(" "),_("p",[t._v("停留时长用来衡量用户在应用的某一个页面或是一次访问（会话）所停留的时间。")]),t._v(" "),_("p",[t._v("页面停留时长，表示在每个页面所花费的时间；例如：首页就是进入首页（10：00）到离开首页进入下一个页面(10:01)的时长，首页停留时长计算为1分钟。页面A是2分钟。停留时长的数据并不都是一定采集得到的，比如"),_("strong",[t._v("页面B")]),t._v("进入时间（10：03），离开出现异常或是退出时间没有记录，这时候计算就是0 （所以指标计算时需要了解埋点的状况，剔除这样的无效数据）。")]),t._v(" "),_("p",[t._v("应用的停留时长，表示一次访问（会话）所停留的时间，计算起来就是所有页面的访问时长，同样是上一个流程，应用的停留时长就是4分钟。")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"跳出率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跳出率"}},[t._v("#")]),t._v(" 跳出率")])])]),t._v(" "),_("p",[t._v("跳出率的计算方法现在在各个公司还是很多种，最经常被使用的是：用户只访问了一个页面所占的会话比例（原因是：假设这种场景，用户来了访问了一个页面就离开了，想想用户使用的心里画面应该是：打开应用，心想什么鬼，然后关闭应用甚至卸载了。这个场景多可怕，这也是为什么跳出率指标被如此关注）")]),t._v(" "),_("p",[t._v("跳出率可以分解到两个层次：一是整个应用的跳出率，二是重点的着陆页的跳出率，甚至是搜索关键词的跳出率。跳出率的指标可操作性非常强，通过统计跳出率可以直接发现页面的问题发现关键词的问题。")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"退出率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#退出率"}},[t._v("#")]),t._v(" 退出率")])])]),t._v(" "),_("p",[t._v("退出率是针对页面的，这个指标的目标很简单，就是在针对某个页面有多少用户离开了应用，主要用户反映用户从应用离开的情况。哪些页面需要被改进最快的方式被发掘。（**注意：退出率高不一定是坏事。**例如：预测流程的最终节点的退出率就应该是高的）")]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"转化率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#转化率"}},[t._v("#")]),t._v(" 转化率")])])]),t._v(" "),_("p",[t._v("我们在产品上投入这么多，不就是为了衡量产出么？所以对于电商类应用，还有比转化率更值得关注的指标吗？转化率的计算方法是某种产出除以独立访客或是访问量，对于电商产品来说，就是提交订单用户数除以独立访客。")]),t._v(" "),_("p",[t._v("转化率的计算看起来想到那简单，但却是埋点中最贴近业务的数据收集。这也是最体现埋点技巧的指标，需要结合业务特点制定计算方法。提交订单量/访客数是最基本的转化率，转化率还可以分层次，指定用户路径的，如：完成某条路径的提交订单数/访客数。")]),t._v(" "),_("p",[_("strong",[t._v("试着找一条路径，想想转化率的数据怎么得来的吧，埋点都收集了什么样的数据吧？")])]),t._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"参与度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参与度"}},[t._v("#")]),t._v(" 参与度")])])]),t._v(" "),_("p",[t._v("参与度并不是一个指标，而是一系列的指标的统称，例如访问深度，访问频次，针对电商的下单次数，针对内容服务商的播放次数，及用户行为序列这些都可以是衡量参与度的指标。之所以把参与度列为一个指标，是希望大家明白把指标结合业务，产生化学反应，活学活用去发现事物的本质。")]),t._v(" "),_("blockquote",[_("h3",{attrs:{id:"埋点的内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#埋点的内容"}},[t._v("#")]),t._v(" 埋点的内容")])]),t._v(" "),_("p",[t._v("看完关键的这些指标后，其实埋点大致分为两部分，一部分是统计应用页面访问情况，即页面统计，随页面访问动作发生时进行上报；另外一部分是统计应用内的操作行为，在页面中操作时进行上报（例如：组件曝光时，组件点击时，上滑，下滑时）。")]),t._v(" "),_("p",[t._v("为了统计到所需要的指标，应用中的所有页面，事件都被唯一标记，用户的信息，设备的信息，时间参数以及符合业务需要的参数具体内容被附加上报，就是埋点。")]),t._v(" "),_("blockquote",[_("p",[t._v("关于埋点的数据的注意事项")])]),t._v(" "),_("h3",{attrs:{id:"如何埋点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何埋点"}},[t._v("#")]),t._v(" 如何埋点")]),t._v(" "),_("p",[t._v("关于埋点数据有一点至关重要，埋点是为了更好地使用数据，不要试图得到精准的数据要得到的是高质量的埋点数据，前面讨论跳出率就是这个例子，得到能得到的数据，用不完美的数据来达成下一步的行动，追求的是高质量而不是精确。这是很多数据产品容易入坑的地，要经常提醒自己。")]),t._v(" "),_("ol",[_("li",[t._v("避免跨域（img 天然支持跨域）")]),t._v(" "),_("li",[t._v("利用空白gif或1x1 px的img是互联网广告或网站监测方面常用的手段，简单、安全、相比PNG/JPG体积小，1px 透明图，对网页内容的影响几乎没有影响，这种请求用在很多地方，比如浏览、点击、热点、心跳、ID颁发等等，")]),t._v(" "),_("li",[t._v("图片请求不占用 Ajax 请求限额")]),t._v(" "),_("li",[t._v("不会阻塞页面加载，影响用户的体验，只要new Image对象就好了，一般情况下也不需要append到DOM中，通过它的onerror和onload事件来检测发送状态。 示例")])])])}),[],!1,null,null,null);v.default=s.exports}}]);