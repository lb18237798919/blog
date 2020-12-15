(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{429:function(t,v,_){"use strict";_.r(v);var s=_(42),r=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"五、https实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、https实现原理"}},[t._v("#")]),t._v(" 五、HTTPS实现原理")]),t._v(" "),_("p",[_("strong",[t._v("SSL建立连接过程")]),t._v(" "),_("img",{attrs:{src:"img/20190803111825690.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("ol",[_("li",[t._v("client向server发送请求https://baidu.com，然后连接到server的443端口，发送的信息主要是随机值1和客户端支持的加密算法。")]),t._v(" "),_("li",[t._v("server接收到信息之后给予client响应握手信息，包括随机值2和匹配好的协商加密算法，这个加密算法一定是client发送给server加密算法的子集。")]),t._v(" "),_("li",[t._v("随即server给client发送第二个响应报文是数字证书。服务端必须要有一套数字证书，可以自己制作，也可以向组织申请。区别就是自己颁发的证书需要客户端验证通过，才可以继续访问，而使用受信任的公司申请的证书则不会弹出提示页面，这套证书其实就是一对公钥和私钥。传送证书，这个证书其实就是公钥，只是包含了很多信息，如证书的颁发机构，过期时间、服务端的公钥，第三方证书认证机构(CA)的签名，服务端的域名信息等内容。")]),t._v(" "),_("li",[t._v("客户端解析证书，这部分工作是由客户端的TLS来完成的，首先会验证公钥是否有效，比如颁发机构，过期时间等等，如果发现异常，则会弹出一个警告框，提示证书存在问题。如果证书没有问题，那么就生成一个随即值（预主秘钥）。")]),t._v(" "),_("li",[t._v("客户端认证证书通过之后，接下来是通过随机值1、随机值2和预主秘钥组装会话秘钥。然后通过证书的公钥加密会话秘钥。")]),t._v(" "),_("li",[t._v("传送加密信息，这部分传送的是用证书加密后的会话秘钥，目的就是让服务端使用秘钥解密得到随机值1、随机值2和预主秘钥。")]),t._v(" "),_("li",[t._v("服务端解密得到随机值1、随机值2和预主秘钥，然后组装会话秘钥，跟客户端会话秘钥相同。")]),t._v(" "),_("li",[t._v("客户端通过会话秘钥加密一条消息发送给服务端，主要验证服务端是否正常接受客户端加密的消息。")]),t._v(" "),_("li",[t._v("同样服务端也会通过会话秘钥加密一条消息回传给客户端，如果客户端能够正常接受的话表明SSL层连接建立完成了。")])]),t._v(" "),_("p",[t._v("问题：\n"),_("strong",[t._v("1.怎么保证保证服务器给客户端下发的公钥是真正的公钥，而不是中间人伪造的公钥呢？")])]),t._v(" "),_("p",[_("img",{attrs:{src:"img/20180724090424143",alt:"这里写图片描述"}}),t._v(" "),_("strong",[t._v("2.证书如何安全传输，被掉包了怎么办？")]),t._v(" "),_("img",{attrs:{src:"img/20180719095555854",alt:"身份认证"}})]),t._v(" "),_("p",[_("strong",[t._v("数字证书内容")]),t._v("\n包括了加密后服务器的公钥、权威机构的信息、服务器域名，还有经过CA私钥签名之后的证书内容（经过先通过Hash函数计算得到证书数字摘要，然后用权威机构私钥加密数字摘要得到数字签名)，签名计算方法以及证书对应的域名。")]),t._v(" "),_("p",[_("strong",[t._v("验证证书安全性过程")])]),t._v(" "),_("ol",[_("li",[t._v("当客户端收到这个证书之后，使用本地配置的权威机构的公钥对证书进行解密得到服务端的公钥和证书的数字签名，数字签名经过CA公钥解密得到证书信息摘要。")]),t._v(" "),_("li",[t._v("然后证书签名的方法计算一下当前证书的信息摘要，与收到的信息摘要作对比，如果一样，表示证书一定是服务器下发的，没有被中间人篡改过。因为中间人虽然有权威机构的公钥，能够解析证书内容并篡改，但是篡改完成之后中间人需要将证书重新加密，但是中间人没有权威机构的私钥，无法加密，强行加密只会导致客户端无法解密，如果中间人强行乱修改证书，就会导致证书内容和证书签名不匹配。")])]),t._v(" "),_("p",[_("strong",[t._v("那第三方攻击者能否让自己的证书显示出来的信息也是服务端呢？")]),t._v("（伪装服务端一样的配置）显然这个是不行的，因为当第三方攻击者去CA那边寻求认证的时候CA会要求其提供例如域名的whois信息、域名管理邮箱等证明你是服务端域名的拥有者，而第三方攻击者是无法提供这些信息所以他就是无法骗CA他拥有属于服务端的域名。")])])}),[],!1,null,null,null);v.default=r.exports}}]);