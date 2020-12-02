(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{382:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"generator-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generator-iterator"}},[t._v("#")]),t._v(" Generator&Iterator")]),t._v(" "),a("p",[t._v("其实这Generator和Iterator应该分开来总结的，但由于这两个知识点的可扩展面太广，我的知识储备也并不充足。因此就合二为一，总结一些它们最基本的知识。")]),t._v(" "),a("h2",{attrs:{id:"generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generator"}},[t._v("#")]),t._v(" Generator")]),t._v(" "),a("p",[t._v("先看一段代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fn {<suspended>}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{value: 10, done: false}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//10 这时调用函数中的console.log")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{value: undefined, done: true}")]),t._v("\n")])])]),a("p",[t._v("可以看到上面的代码多出了奇形怪状的语法。那这些代码的含义是什么呢？")]),t._v(" "),a("p",[t._v("先从 "),a("code",[t._v("*")]),t._v(" 说起，"),a("code",[t._v("function *")]),t._v("这种声明方式呢，会定义一个"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("生成器函数")])]),a("font",{attrs:{color:"#FA8072"}},[t._v("(generator function)")]),t._v("。而这个生成器函数的返回值是一个 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 对象。如上代码的 "),a("code",[t._v("console.log(f)")]),t._v(" 可以得知。但调用一个生成器函数并不会马上执行里面的语句，而是返回一个这个生成器的"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("迭代器对象")])]),t._v("。那么迭代器又是什么鬼？")],1),t._v(" "),a("p",[t._v("这要从 ES6 的新增功能，迭代协议说起，只要遵循一些约定，任何对象都可以实现这些协议。有两种协议："),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("可迭代协议")])]),t._v("和"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("迭代器协议")])]),t._v("。")],1),t._v(" "),a("p",[t._v("如果想让对象具有可迭代性，在可迭代协议中规定，对象必须实现 "),a("font",{attrs:{color:"#FA8072"}},[t._v("@@iterator")]),t._v(" 方法，意味着该对象(或其原型链中的一个对象)必须带有 "),a("font",{attrs:{color:"#FA8072"}},[t._v("@@iterator")]),t._v(" 键的属性，可以通过常量来使用该键。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//零参数函数，它的值是返回符合迭代器协议的对象。")]),t._v("\n")])])]),a("p",[t._v("迭代器协议实际上就是规定了，当一个对象按照规定实现 "),a("font",{attrs:{color:"#FA8072"}},[t._v("next()")]),t._v(" 方法时，它就是"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("迭代器")])]),t._v("。")],1),t._v(" "),a("p",[t._v("而迭代器对象实现的next()方法必须包含两个属性才符合协议。")]),t._v(" "),a("p",[t._v("1."),a("strong",[t._v("done(布尔值)")]),a("br"),t._v("\n如果为 false，表示迭代器能够产生序列中的下一个值。"),a("br"),t._v("\n如果为 true，表示迭代器已完成其序列。")]),t._v(" "),a("p",[t._v("2."),a("strong",[t._v("value()")]),t._v("\n迭代器返回的任何js值。")]),t._v(" "),a("p",[t._v("在回到生成器函数，刚才说了调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的迭代器对象。当这个迭代器的 "),a("font",{attrs:{color:"#FA8072"}},[t._v("next()")]),t._v(" 方法被首次调用时，其内的语句会执行到第一个出现的 "),a("font",{attrs:{color:"#FA8072"}},[t._v("yield")]),t._v(" 的位置为止。而 yield 后紧跟迭代器要返回的值。再来看看代码：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    conosle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此时next第一次被调用，然后代码才开始执行，执行到yield时停止")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//然后返回一个迭代器对象，对象的value属性的属性值，就是传进来的10。")]),t._v("\n\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此时进行执行代码，没有遇到yield，代码一直执行完。打印 10,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回迭代器对象，对象的value属性的属性值为undefined。")]),t._v("\n")])])]),a("p",[t._v("由此看来 yield 表达式和 return 语句还是有相似之处。")]),t._v(" "),a("p",[a("strong",[t._v("相似之处")]),a("br"),t._v("\n在于都能返回紧跟在后面的值。")]),t._v(" "),a("p",[a("strong",[t._v("区别")]),a("br"),t._v("\n1.在于每次遇到 "),a("font",{attrs:{color:"#FA8072"}},[t._v("yield")]),t._v(" ，函数会暂停执行，而"),a("font",{attrs:{color:"#FA8072"}},[t._v("return")]),t._v(" 语句不具备为止记忆的功能。"),a("br"),t._v("\n2.一个函数里面，只能执行一次（或者说一个）"),a("font",{attrs:{color:"#FA8072"}},[t._v("return")]),t._v(" 语句，但是可以执行多次（或者说多个）"),a("font",{attrs:{color:"#FA8072"}},[t._v("yield")]),t._v(" 表达式。\n3.正常函数只能返回一个值，因为只能执行一次 "),a("font",{attrs:{color:"#FA8072"}},[t._v("return")]),t._v("；Generator 函数可以返回一系列的值，因为可以有任意多个 "),a("font",{attrs:{color:"#FA8072"}},[t._v("ieldy")]),t._v("。从另一个角度看，也可以说 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 生成了一系列的值，这也就是它的名称的来历（英语中，"),a("font",{attrs:{color:"#FA8072"}},[t._v("generator")]),t._v(" 这个词是“生成器”的意思）。")],1),t._v(" "),a("h3",{attrs:{id:"yield-表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yield-表达式"}},[t._v("#")]),t._v(" yield* 表达式")]),t._v(" "),a("p",[t._v("如果在 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数内部，调用另一个 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数。需要在前者的函数体内部，自己手动完成遍历。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动遍历 foo()")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y")]),t._v("\n")])])]),a("p",[t._v("上面代码中需要需手动遍历 f"),a("font",{attrs:{color:"#FA8072"}},[t._v("oo")]),t._v("，如果有多个 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数嵌套，就非常麻烦。")],1),t._v(" "),a("p",[t._v("ES6 提供了 "),a("code",[t._v("yield*")]),t._v(" 表达式，作为解决办法，用来在一个 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数里面执行另一个 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "x"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "a"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "b"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "y"')]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Generator 与上下文")]),t._v(" "),a("p",[a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数的执行产生的上下文环境，一旦遇到 "),a("font",{attrs:{color:"#FA8072"}},[t._v("yield")]),t._v(" 命令，就会暂时退出堆栈，但是并不会消失，里面的所有变量和对象会冻结在当前状态。等到对它执行 "),a("font",{attrs:{color:"#FA8072"}},[t._v("next")]),t._v(" 命令的时候，这个上下文环境又会重新假如调用栈，冻结的变量和对象恢复执行。")],1)]),t._v(" "),a("h2",{attrs:{id:"iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterator"}},[t._v("#")]),t._v(" Iterator")]),t._v(" "),a("p",[t._v("上面也有简单的提到了 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v("，它的作用有三个：")],1),t._v(" "),a("blockquote",[a("p",[t._v("1.为各种数据结构，提供一个统一的、简便的访问接口；"),a("br"),t._v("\n2.使得数据结构的成员能够按某种次序排列；"),a("br"),t._v("\n3. ES6 创造了一种新的遍历命令 "),a("code",[t._v("for...of")]),t._v(" 循环，"),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v(" 接口主要供 "),a("code",[t._v("for...of")]),t._v(" 消费。\n如下：")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          done"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面代码中，对象是可遍历的，因为具有 "),a("code",[t._v("Symbol.iterator")]),t._v(" 属性。执行这个属性，会返回一个遍历器对象。该对象的根本特征就是具有 "),a("font",{attrs:{color:"#FA8072"}},[t._v("next")]),t._v(" 方法。每次调用 "),a("font",{attrs:{color:"#FA8072"}},[t._v("next")]),t._v(" 方法，都会返回一个代表当前成员的信息对象，具有 "),a("font",{attrs:{color:"#FA8072"}},[t._v("value")]),t._v(" 和 "),a("font",{attrs:{color:"#FA8072"}},[t._v("done")]),t._v(" 两个属性。")],1),t._v(" "),a("p",[t._v("ES6 中有些数据结构原生具备 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v(" 接口，即不用任何处理，就可以被 "),a("code",[t._v("for...of")]),t._v(" 循环遍历。原因在于，这些数据结构原生部署了 "),a("code",[t._v("Symbol.iterator")]),t._v(" 属性，另外一些数据结构没有（比如对象）。")],1),t._v(" "),a("p",[t._v("原生具备 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v(" 接口的数据结构如下：")],1),t._v(" "),a("ul",[a("li",[t._v("Array")]),t._v(" "),a("li",[t._v("Map")]),t._v(" "),a("li",[t._v("Set")]),t._v(" "),a("li",[t._v("String")]),t._v(" "),a("li",[t._v("TypedArray")]),t._v(" "),a("li",[t._v("函数的 arguments 对象")]),t._v(" "),a("li",[t._v("NodeList 对象")])]),t._v(" "),a("p",[t._v("如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{value: 1, done: false}")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{value: 1, done: false}")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{value: undefined, done: true}")]),t._v("\n")])])]),a("p",[t._v("上面代码中，变量 "),a("font",{attrs:{color:"#FA8072"}},[t._v("arr")]),t._v(" 是一个数组，原生就具有遍历器接口，部署在 "),a("font",{attrs:{color:"#FA8072"}},[t._v("arr")]),t._v(" 的 "),a("code",[t._v("Symbol.iterator")]),t._v(" 属性上面。所以，调用这个属性，就得到遍历器对象。")],1),t._v(" "),a("p",[t._v("那为什么对象没有默认部署的 Iterator 接口呢？"),a("br"),t._v("\n因为对象哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。本质上，遍历器是一种"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("线性处理")])]),t._v("，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("线性转换")])]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"默认调用的-iterator-接口的场合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认调用的-iterator-接口的场合"}},[t._v("#")]),t._v(" 默认调用的 Iterator 接口的场合")]),t._v(" "),a("p",[t._v("有一些场合会默认调用 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v(" 接口（即 "),a("code",[t._v("Symbol.iterator")]),t._v(" 方法）\n"),a("strong",[t._v("1.解构赋值")])],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[1,2,3]")]),t._v("\n")])])]),a("p",[a("strong",[t._v("2.扩展运算符")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconosle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//h e l l o")]),t._v("\n")])])]),a("p",[t._v("上面代码之所以没有逗号的原因时因为逗号被 "),a("code",[t._v("console.log()")]),t._v("当成参数分割符了。")]),t._v(" "),a("p",[t._v("实际上，这提供了一种简便机制，可以将任何部署了 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v(" 接口的数据结构，转为数组。也就是说，只要某个数据结构部署了 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v(" 接口，就可以对它使用扩展运算符，将其转为数组。")],1),t._v(" "),a("p",[a("strong",[t._v("3.yield")]),t._v("\nyield* 后面跟的是一个可遍历的结构的话，它会调用该结构的遍历器接口。")]),t._v(" "),a("p",[a("strong",[t._v("4.其他场合")]),t._v("\n由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。比如：")]),t._v(" "),a("ul",[a("li",[t._v("for...of")]),t._v(" "),a("li",[t._v("Array.from()")]),t._v(" "),a("li",[t._v("Map(), Set(), WeakMap(), WeakSet()")]),t._v(" "),a("li",[t._v("Promise.all()")]),t._v(" "),a("li",[t._v("Promise.race()")])]),t._v(" "),a("h2",{attrs:{id:"async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async"}},[t._v("#")]),t._v(" async")]),t._v(" "),a("p",[t._v("ES2017 标准引入了"),a("font",{attrs:{color:"#FA8072"}},[t._v(" async")]),t._v(" 函数，使得异步操作变得更加方便。")],1),t._v(" "),a("p",[a("font",{attrs:{color:"#FA8072"}},[t._v("async")]),t._v(" 函数实际上是"),a("font",{attrs:{color:"#FA8072"}},[t._v(" Generator")]),t._v(" 函数的语法糖。")],1),t._v(" "),a("p",[a("font",{attrs:{color:"#FA8072"}},[t._v("async")]),t._v(" 函数就是将 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数的星号（*）替换成 "),a("font",{attrs:{color:"#FA8072"}},[t._v("async")]),t._v("，将 "),a("font",{attrs:{color:"#FA8072"}},[t._v("yield")]),t._v(" 替换成 "),a("font",{attrs:{color:"#FA8072"}},[t._v("await")]),t._v("，仅此而已。")],1),t._v(" "),a("p",[a("font",{attrs:{color:"#FA8072"}},[t._v("async")]),t._v(" 函数的返回值是 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Promise")]),t._v(" 对象，这比 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Generator")]),t._v(" 函数的返回值是 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Iterator")]),t._v(" 对象方便多了。可以用 "),a("font",{attrs:{color:"#FA8072"}},[t._v("then")]),t._v(" 方法指定下一步的操作。")],1),t._v(" "),a("h3",{attrs:{id:"await命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#await命令"}},[t._v("#")]),t._v(" await命令")]),t._v(" "),a("p",[t._v("正常情况下，"),a("font",{attrs:{color:"#FA8072"}},[t._v("await")]),t._v(" 命令后面是一个 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Promise")]),t._v(" 对象，返回该对象的结果。如果不是 "),a("font",{attrs:{color:"#FA8072"}},[t._v("Promise")]),t._v(" 对象，就直接返回对应的值。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return 123;")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);