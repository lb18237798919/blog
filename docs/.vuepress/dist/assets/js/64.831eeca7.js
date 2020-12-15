(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{427:function(t,a,e){"use strict";e.r(a);var r=e(42),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h5",{attrs:{id:"什么是https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是https"}},[t._v("#")]),t._v(" 什么是HTTPS？")]),t._v(" "),e("blockquote",[e("p",[t._v("《图解HTTP》这本书中曾提过HTTPS是身披SSL外壳的HTTP。HTTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。")]),t._v(" "),e("p",[t._v("PS:TLS是传输层加密协议，前身是SSL协议，由网景公司1995年发布，有时候两者不区分。")])]),t._v(" "),e("h5",{attrs:{id:"参考连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考连接"}},[t._v("#")]),t._v(" 参考连接：")]),t._v(" "),e("p",[t._v("1."),e("a",{attrs:{href:"https://blog.csdn.net/xiaoming100001/article/details/81109617",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kamranahmed.info/blog/2016/08/13/http-in-depth/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("2."),e("a",{attrs:{href:"https://blog.csdn.net/xiaoming100001/article/details/81109617",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("3."),e("a",{attrs:{href:"https://blog.csdn.net/xiaoming100001/article/details/81109617",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tools.ietf.org/html/rfc1945"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("4."),e("a",{attrs:{href:"https://blog.csdn.net/xiaoming100001/article/details/81109617",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://http2.github.io/http2-spec/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("5."),e("a",{attrs:{href:"https://blog.csdn.net/xiaoming100001/article/details/81109617",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/34074946"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"三、http-vs-https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、http-vs-https"}},[t._v("#")]),t._v(" 三、HTTP VS HTTPS")]),t._v(" "),e("h5",{attrs:{id:"http特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http特点"}},[t._v("#")]),t._v(" HTTP特点：")]),t._v(" "),e("ol",[e("li",[t._v("无状态：协议对客户端没有状态存储，对事物处理没有“记忆”能力，比如访问一个网站需要反复进行登录操作")]),t._v(" "),e("li",[t._v("无连接：HTTP/1.1之前，由于无状态特点，每次请求需要通过TCP三次握手四次挥手，和服务器重新建立连接。比如某个客户机在短时间多次请求同一个资源，服务器并不能区别是否已经响应过用户的请求，所以每次需要重新响应请求，需要耗费不必要的时间和流量。")]),t._v(" "),e("li",[t._v("基于请求和响应：基本的特性，由客户端发起请求，服务端响应")]),t._v(" "),e("li",[t._v("简单快速、灵活")]),t._v(" "),e("li",[t._v("通信使用明文、请求和响应不会对通信方进行确认、无法保护数据的完整性")])]),t._v(" "),e("p",[e("strong",[t._v("下面通过一个简单的抓包实验观察使用HTTP请求传输的数据：")]),t._v(" "),e("img",{attrs:{src:"img/20180723103319469",alt:"这里写图片描述"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdn.net/20180719135617449?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW9taW5nMTAwMDAx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),t._v(" "),e("h6",{attrs:{id:"结果分析-http协议传输数据以明文形式显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结果分析-http协议传输数据以明文形式显示"}},[t._v("#")]),t._v(" 结果分析：HTTP协议传输数据以明文形式显示")]),t._v(" "),e("h6",{attrs:{id:"针对无状态的一些解决策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对无状态的一些解决策略"}},[t._v("#")]),t._v(" 针对无状态的一些解决策略：")]),t._v(" "),e("h6",{attrs:{id:"场景-逛电商商场用户需要使用的时间比较长-需要对用户一段时间的http通信状态进行保存-比如执行一次登陆操作-在30分钟内所有的请求都不需要再次登陆。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景-逛电商商场用户需要使用的时间比较长-需要对用户一段时间的http通信状态进行保存-比如执行一次登陆操作-在30分钟内所有的请求都不需要再次登陆。"}},[t._v("#")]),t._v(" 场景：逛电商商场用户需要使用的时间比较长，需要对用户一段时间的HTTP通信状态进行保存，比如执行一次登陆操作，在30分钟内所有的请求都不需要再次登陆。")]),t._v(" "),e("ol",[e("li",[t._v("通过Cookie/Session技术")]),t._v(" "),e("li",[t._v("HTTP/1.1持久连接（HTTP keep-alive）方法，只要任意一端没有明确提出断开连接，则保持TCP连接状态，在请求首部字段中的Connection: keep-alive即为表明使用了持久连接")])]),t._v(" "),e("h4",{attrs:{id:"https特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https特点"}},[t._v("#")]),t._v(" HTTPS特点：")]),t._v(" "),e("p",[t._v("基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护")]),t._v(" "),e("p",[e("img",{attrs:{src:"img/20180719135629906",alt:"这里写图片描述"}}),t._v("\n通过抓包可以看到数据不是明文传输，而且HTTPS有如下特点：")]),t._v(" "),e("ol",[e("li",[t._v("内容加密：采用混合加密技术，中间者无法直接查看明文内容")]),t._v(" "),e("li",[t._v("验证身份：通过证书认证客户端访问的是自己的服务器")]),t._v(" "),e("li",[t._v("保护数据完整性：防止传输的内容被中间人冒充或者篡改")])]),t._v(" "),e("blockquote",[e("p",[t._v("**混合加密：**结合非对称加密和对称加密技术。客户端使用对称加密生成密钥对传输数据进行加密，然后使用非对称加密的公钥再对秘钥进行加密，所以网络上传输的数据是被秘钥加密的密文和用公钥加密后的秘密秘钥，因此即使被黑客截取，由于没有私钥，无法获取到加密明文的秘钥，便无法获取到明文数据。")]),t._v(" "),e("p",[t._v("**数字摘要：**通过单向hash函数对原文进行哈希，将需加密的明文“摘要”成一串固定长度(如128bit)的密文，不同的明文摘要成的密文其结果总是不相同，同样的明文其摘要必定一致，并且即使知道了摘要也不能反推出明文。")]),t._v(" "),e("p",[t._v("**数字签名技术：**数字签名建立在公钥加密体制基础上，是公钥加密技术的另一类应用。它把公钥加密技术和数字摘要结合起来，形成了实用的数字签名技术。")])]),t._v(" "),e("ul",[e("li",[t._v("收方能够证实发送方的真实身份；")]),t._v(" "),e("li",[t._v("发送方事后不能否认所发送过的报文；")]),t._v(" "),e("li",[t._v("收方或非法者不能伪造、篡改报文。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"img/20180719103559793",alt:"内容加密和数据完整性保护"}})]),t._v(" "),e("p",[t._v("非对称加密过程需要用到公钥进行加密，那么公钥从何而来？其实公钥就被包含在数字证书中，数字证书通常来说是由受信任的数字证书颁发机构CA，在验证服务器身份后颁发，证书中包含了一个密钥对（公钥和私钥）和所有者识别信息。数字证书被放到服务端，具有服务器身份验证和数据传输加密功能。")])])}),[],!1,null,null,null);a.default=s.exports}}]);