(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{407:function(t,n,e){"use strict";e.r(n);var a=e(42),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"div水平垂直居中的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#div水平垂直居中的方法"}},[t._v("#")]),t._v(" div水平垂直居中的方法")]),t._v(" "),e("p",[t._v("在平时，我们经常会碰到让一个div框针对某个模块上下左右都居中（水平垂直居中），其实针对这种情况，我们有多种方法实现。")]),t._v(" "),e("p",[e("strong",[t._v("方法一:")])]),t._v(" "),e("p",[t._v("绝对定位方法：不确定当前div的宽度和高度，采用 transform: translate(-50%,-50%); 当前div的父级添加相对定位（position: relative;）")]),t._v(" "),e("p",[t._v("图片展示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"img/1337908-20180510132530310-507426098.png",alt:"img"}})]),t._v(" "),e("p",[t._v("代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("div{\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%, -50%);\n}\n")])])]),e("p"),t._v(" "),e("p",[e("strong",[t._v("方法二:")])]),t._v(" "),e("p",[t._v("绝对定位方法：确定了当前div的宽度，margin值为当前div宽度一半的负值")]),t._v(" "),e("p",[t._v("图片展示： 如方法一的图片展示")]),t._v(" "),e("p",[t._v("代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("div{\n    width:600px;\n    height: 600px;\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    margin-left:-300px;\n    margin-top:-300px;\n}\n")])])]),e("p"),t._v(" "),e("p",[e("strong",[t._v("方法三：")])]),t._v(" "),e("p",[t._v("绝对定位方法：绝对定位下top left right bottom 都设置0")]),t._v(" "),e("p",[t._v("图片展示： 如方法一的图片展示")]),t._v(" "),e("p",[t._v("代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("div.child{\n    width: 600px;\n    height: 600px;\n    background: red;\n    position:absolute;\n    left:0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n}\n")])])]),e("p"),t._v(" "),e("p",[e("strong",[t._v("方法四:")])]),t._v(" "),e("p",[t._v("flex布局方法：当前div的父级添加flex css样式")]),t._v(" "),e("p",[t._v("展示图如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"img/1337908-20180510131947523-2121210494.png",alt:"img"}})]),t._v(" "),e("p",[t._v("代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".box{\n    height:800px;\n    -webkit-display:flex;\n    display:flex;\n    -webkit-align-items:center;\n    align-items:center;\n    -webkit-justify-content:center;\n    justify-content:center;\n    border:1px solid #ccc;\n}\ndiv.child{\n    width:600px;\n    height:600px;\n    background-color:red;\n}\n")])])]),e("p"),t._v(" "),e("p",[e("strong",[t._v("方法五:")])]),t._v(" "),e("p",[t._v("table-cell实现水平垂直居中: table-cell middle center组合使用")]),t._v(" "),e("p",[t._v("展示图如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"img/1337908-20180510131450441-915853082.png",alt:"img"}})]),t._v(" "),e("p",[t._v("代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".table-cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    width: 240px;\n    height: 180px;\n    border:1px solid #666;\n}\n")])])]),e("p"),t._v(" "),e("p",[e("strong",[t._v("方法六:")])]),t._v(" "),e("p",[t._v("绝对定位：calc() 函数动态计算实现水平垂直居中")]),t._v(" "),e("p",[t._v("展示图如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"img/1337908-20180510131414396-1900857513.png",alt:"img"}})]),t._v(" "),e("p",[t._v("代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".calc{\n  position: relative;\n  border: 1px solid #ccc;\n  width: 400px;\n  height: 160px;\n}\n.calc .child{\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left:-webkit-calc((400px - 200px)/2);\n  top:-webkit-calc((160px - 50px)/2);\n  left:-moz-calc((400px - 200px)/2);\n  top:-moz-calc((160px - 50px)/2);\n  left:calc((400px - 200px)/2);\n  top:calc((160px - 50px)/2);\n}　　\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);