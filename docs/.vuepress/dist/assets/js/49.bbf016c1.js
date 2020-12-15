(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{412:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"函数节流与函数防抖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数节流与函数防抖"}},[t._v("#")]),t._v(" 函数节流与函数防抖")]),t._v(" "),n("h2",{attrs:{id:"什么是函数节流与函数防抖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是函数节流与函数防抖"}},[t._v("#")]),t._v(" 什么是函数节流与函数防抖")]),t._v(" "),n("p",[t._v("举个栗子，我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。")]),t._v(" "),n("p",[t._v("再举个栗子，假设电梯一次只能载一人的话，10 个人要上楼的话电梯就得走 10 次，是一种浪费资源的行为；而实际生活正显然不是这样的，当电梯里有人准备上楼的时候如果外面又有人按电梯的话，电梯会再次打开直到满载位置，从电梯的角度来说，这时一种节约资源的行为（相对于一次只能载一个人）。")]),t._v(" "),n("ul",[n("li",[t._v("函数节流: 指定时间间隔内只会执行一次任务；")]),t._v(" "),n("li",[t._v("函数防抖: 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。")])]),t._v(" "),n("h2",{attrs:{id:"函数节流-throttle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数节流-throttle"}},[t._v("#")]),t._v(" 函数节流(throttle)")]),t._v(" "),n("p",[t._v("这里以判断页面是否滚动到底部为例，普通的做法就是监听 "),n("code",[t._v("window")]),t._v(" 对象的 "),n("code",[t._v("scroll")]),t._v(" 事件，然后再函数体中写入判断是否滚动到底部的逻辑：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$(window).on('scroll', function () {\n    // 判断是否滚动到底部的逻辑\n    let pageHeight = $('body').height(),\n        scrollTop = $(window).scrollTop(),\n        winHeight = $(window).height(),\n        thresold = pageHeight - scrollTop - winHeight;\n    if (thresold > -100 && thresold <= 20) {\n        console.log('end');\n    }\n});\n")])])]),n("p",[n("img",{attrs:{src:"img/16333387f76fbab5",alt:"throttle"}})]),t._v(" "),n("p",[t._v("这样做的一个缺点就是比较消耗性能，因为当在滚动的时候，浏览器会无时不刻地在计算判断是否滚动到底部的逻辑，而在实际的场景中是不需要这么做的，在实际场景中可能是这样的：在滚动过程中，每隔一段时间在去计算这个判断逻辑。而函数节流所做的工作就是每隔一段时间去执行一次原本需要无时不刻地在执行的函数，所以在滚动事件中引入函数的节流是一个非常好的实践：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$(window).on('scroll', throttle(function () {\n    // 判断是否滚动到底部的逻辑\n    let pageHeight = $('body').height(),\n        scrollTop = $(window).scrollTop(),\n        winHeight = $(window).height(),\n        thresold = pageHeight - scrollTop - winHeight;\n    if (thresold > -100 && thresold <= 20) {\n        console.log('end');\n    }\n}));\n")])])]),n("p",[n("img",{attrs:{src:"img/16333387f74f7cba",alt:"throttle"}})]),t._v(" "),n("p",[t._v("加上函数节流之后，当页面再滚动的时候，每隔 "),n("code",[t._v("300ms")]),t._v(" 才会去执行一次判断逻辑。")]),t._v(" "),n("p",[t._v("简单来说，函数的节流就是通过闭包保存一个标记（"),n("code",[t._v("canRun = true")]),t._v("），在函数的开头"),n("strong",[t._v("判断")]),t._v("这个标记是否为 "),n("code",[t._v("true")]),t._v("，如果为 "),n("code",[t._v("true")]),t._v(" 的话就继续执行函数，否则则 return 掉，判断完标记后立即把这个标记设为 "),n("code",[t._v("false")]),t._v("，然后把外部传入的函数的执行包在一个 "),n("code",[t._v("setTimeout")]),t._v(" 中，最后在 "),n("code",[t._v("setTimeout")]),t._v(" 执行完毕后再把标记设置为 "),n("code",[t._v("true")]),t._v("（这里很关键），表示可以执行下一次的循环了。当 "),n("code",[t._v("setTimeout")]),t._v(" 还未执行的时候，"),n("code",[t._v("canRun")]),t._v(" 这个标记始终为 "),n("code",[t._v("false")]),t._v("，在开头的判断中被 return 掉。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function throttle(fn, interval = 300) {\n    let canRun = true;\n    return function () {\n        if (!canRun) return;\n        canRun = false;\n        setTimeout(() => {\n            fn.apply(this, arguments);\n            canRun = true;\n        }, interval);\n    };\n}\n")])])]),n("h2",{attrs:{id:"函数防抖-debounce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数防抖-debounce"}},[t._v("#")]),t._v(" 函数防抖(debounce)")]),t._v(" "),n("p",[t._v("这里以用户注册时验证用户名是否被占用为例，如今很多网站为了提高用户体验，不会再输入框失去焦点的时候再去判断用户名是否被占用，而是在输入的时候就在判断这个用户名是否已被注册：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$('input.user-name').on('input', function () {\n    $.ajax({\n        url: `https://just.com/check`,\n        method: 'post',\n        data: {\n            username: $(this).val(),\n        },\n        success(data) {\n            if (data.isRegistered) {\n                $('.tips').text('该用户名已被注册！');\n            } else {\n                $('.tips').text('恭喜！该用户名还未被注册！');\n            }\n        },\n        error(error) {\n            console.log(error);\n        },\n    });\n});\n")])])]),n("p",[n("img",{attrs:{src:"img/16333387f758adb0",alt:"throttle"}})]),t._v(" "),n("p",[t._v("很明显，这样的做法不好的是当用户输入第一个字符的时候，就开始请求判断了，不仅对服务器的压力增大了，对用户体验也未必比原来的好。而理想的做法应该是这样的，当用户输入第一个字符后的一段时间内如果还有字符输入的话，那就暂时不去请求判断用户名是否被占用。在这里引入函数防抖就能很好地解决这个问题：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$('input.user-name').on('input', debounce(function () {\n    $.ajax({\n        url: `https://just.com/check`,\n        method: 'post',\n        data: {\n            username: $(this).val(),\n        },\n        success(data) {\n            if (data.isRegistered) {\n                $('.tips').text('该用户名已被注册！');\n            } else {\n                $('.tips').text('恭喜！该用户名还未被注册！');\n            }\n        },\n        error(error) {\n            console.log(error);\n        },\n    });\n}));\n")])])]),n("p",[n("img",{attrs:{src:"img/16333387f75dc4e0",alt:"throttle"}})]),t._v(" "),n("p",[t._v("其实函数防抖的原理也非常地简单，通过闭包保存一个标记来保存 "),n("code",[t._v("setTimeout")]),t._v(" 返回的值，每当用户输入的时候把前一个 "),n("code",[t._v("setTimeout")]),t._v(" clear 掉，然后又创建一个新的 "),n("code",[t._v("setTimeout")]),t._v("，这样就能保证输入字符后的 "),n("code",[t._v("interval")]),t._v(" 间隔内如果还有字符输入的话，就不会执行 "),n("code",[t._v("fn")]),t._v(" 函数了。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function debounce(fn, interval = 300) {\n    let timeout = null;\n    return function () {\n        clearTimeout(timeout);\n        timeout = setTimeout(() => {\n            fn.apply(this, arguments);\n        }, interval);\n    };\n}\n")])])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("其实函数节流与函数防抖的原理非常简单，巧妙地使用 "),n("code",[t._v("setTimeout")]),t._v(" 来存放待执行的函数，这样可以很方便的利用 "),n("code",[t._v("clearTimeout")]),t._v(" 在合适的时机来清除待执行的函数。")]),t._v(" "),n("p",[t._v("使用函数节流与函数防抖的目的，在开头的栗子中应该也能看得出来，就是为了节约计算机资源。")])])}),[],!1,null,null,null);e.default=s.exports}}]);