// module.exports = {
//     '/html_css/':['','html','css'],
//     '/javascript/':[''],
//     '/javascript/grammar/':['','1.data_type','2.variable']
//   }

module.exports = [
  //html&css
  {
    title: 'html&css指南',
    path: '/html_css/',
    collapsable: false,
    children: [
      {
        title: 'html 面试题',
        path: '/html_css/html',
      },
      {
        title: 'css 面试题',
        path: '/html_css/css',
      },
      {
        title: 'css 布局',
        path: '/html_css/css布局',
      }
    ],
    sidebarDepth: 1,
  },
  {
    title: 'JavaScript指南',
    path: '/javascript/',
    collapsable: false,
    children: [
      {
        title: 'JavaScript基础',
        path: '/javascript/grammar/1.data_type.html#数据类型',
        children: [
          {
            title: '数据类型',
            path: '/javascript/grammar/1.data_type.html#数据类型'
          },
          {
            title: '相等运算符与比较运算符',
            path: '/javascript/grammar/2.oc.html#相等运算符与比较运算符'
          },
          {
            title: '变量',
            path: '/javascript/grammar/3.variable.html#变量'
          },
          {
            title: '闭包',
            path: '/javascript/grammar/4.闭包.html#闭包'
          },
          {
            title: 'this',
            path: '/javascript/grammar/5.this.html#this'
          },
          {
            title: '循环和遍历',
            path: '/javascript/grammar/6.循环和遍历.html#循环和遍历'
          },
          {
            title: '对象',
            path: '/javascript/grammar/7.对象.html#对象'
          },
          {
            title: '对象&类&函数',
            path: '/javascript/grammar/8.对象&类&函数.html#对象&类&函数'
          }
        ]
      },
      {
        title: 'ES6',
        path: '/javascript/ES6/1.变量的解构赋值.html#变量的解构赋值',
        children: [
          {
            title: '变量的解构赋值',
            path: '/javascript/ES6/1.变量的解构赋值.html#变量的解构赋值'
          },
          {
            title: '函数的扩展',
            path: '/javascript/ES6/2.函数的扩展.html#函数的扩展'
          },
          {
            title: 'Set和Map数据结构',
            path: '/javascript/ES6/3.Set和Map数据结构.html#Set和Map数据结构'
          },
          {
            title: 'Proxy&Reflect',
            path: '/javascript/ES6/4.Proxy&Reflect.html#Proxy&Reflect'
          },
          {
            title: 'Generator&Iterator',
            path: '/javascript/ES6/5.Generator.html#Grnerator&Iterator'
          },
          {
            title: 'Class',
            path: '/javascript/ES6/6.Class.html#Class'
          },
          {
            title: 'Module',
            path: '/javascript/ES6/7.Module.html#Module'
          }
        ]
      },
      {
        title: 'JS手写系列',
        path: '/javascript/JSWrite/1.数组常用api.html#数组常用api',
        children: [
          {
            title: '数组常用api',
            path: '/javascript/JSWrite/1.数组常用api.html#数组常用api'
          },
          {
            title: 'Promises/A+规范',
            path: '/javascript/JSWrite/2.Promises/A+规范.html#Promises/A+规范'
          }
        ]
      }
    ],
    sidebarDepth: 2,
  },
  {
    title: 'git命令大全',
    path: '/git/',
    collapsable: false,
    children: [
      {
        title: 'git',
        path: '/git/git命令大全',
      },

    ],
    sidebarDepth: 1,
  },
  {
    title: 'note笔记',
    path: '/note/',
    collapsable: false,
    children: [
      {
        title: 'base',
        path: '/note/base/1.创建对象的四种方式.html',
        children: [
          {
            title: '1.创建对象的四种方式',
            path: '/note/base/1.创建对象的四种方式.html#1.创建对象的四种方式'
          },
          {
            title: '2.DIV水平垂直居中',
            path: '/note/base/2.DIV水平垂直居中.html#2.DIV水平垂直居中'
          },
          {
            title: '3.opacity_visibility_display优劣',
            path: '/note/base/3.opacity_visibility_display优劣.html#3.opacity_visibility_display优劣'
          },
          {
            title: '4.内联覆盖元素宽度',
            path: '/note/base/4.内联覆盖元素宽度.html#04.内联覆盖元素宽度'
          },
          {
            title: '5.retina屏幕1px边框问题',
            path: '/note/base/5.retina屏幕1px边框问题.html#5.retina屏幕1px边框问题'
          },
          {
            title: '6.map_parseInt',
            path: '/note/base/6.map_parseInt.html#6.map_parseInt'
          },
          {
            title: '7.函数防抖与节流',
            path: '/note/base/7.函数防抖与节流.html#7.函数防抖与节流'
          },
          {
            title: '8.介绍下Set_Map_WeakSet和WeakMap的区别',
            path: '/note/base/8.介绍下Set_Map_WeakSet和WeakMap的区别.html#8.介绍下Set_Map_WeakSet和WeakMap的区别'
          },
          {
            title: '9.判断数组的方法',
            path: '/note/base/9.判断数组的方法.html#9.判断数组的方法'
          },
          {
            title: '10.let与const定义的变量到哪里去了',
            path: '/note/base/10.let与const定义的变量到哪里去了.html#10.let与const定义的变量到哪里去了'
          },
          {
            title: '11.如何解决浏览器兼容性问题',
            path: '/note/base/11.如何解决浏览器兼容性问题.html#11.如何解决浏览器兼容性问题'
          },
          {
            title: '12.前端性能优化',
            path: '/note/base/12.前端性能优化.html#12.前端性能优化'
          },
          {
            title: '13.ajax与fetch',
            path: '/note/base/13.ajax与fetch.html#13.ajax与fetch'
          },
          {
            title: '14.前端传统布局',
            path: 'note/base/14.前端传统布局.html#14.前端传统布局'
          },
          {
            title: '15.前端如何解决跨域问题',
            path: '/note/base/15.前端如何解决跨域问题.html#15.前端如何解决跨域问题'
          },
          {
            title: '16.事件绑定和事件委托',
            path: '/note/base/16.事件绑定和事件委托.html#16.事件绑定和事件委托'
          },
          {
            title: '17.改变this的指向',
            path: '/note/base/17.改变this的指向.html#17.改变this的指向'
          },
          {
            title: '18.什么是闭包',
            path: '/note/base/18.什么是闭包.html#18.什么是闭包'
          }
        ]
      },
      {
        title: 'browser',
        path: '/note/browser/1.介绍重绘和回流.html',
        children: [
          {
            title: '1.介绍重绘和回流',
            path: '/note/browser/1.介绍重绘和回流.html#1.介绍重绘和回流'
          },
          {
            title: '2.浏览器与node的宏任务与微任务',
            path: '/note/browser/2.浏览器与node的宏任务与微任务.html#2.浏览器与node的宏任务与微任务'
          },
          {
            title: '3.浏览器缓存详解',
            path: '/note/browser/3.浏览器缓存详解.html#3.浏览器缓存详解'
          },
          {
            title: '4.Token服务端身份验证的流行方案',
            path: '/note/browser/4.Token服务端身份验证的流行方案.html#4.Token服务端身份验证的流行方案'
          },
          {
            title: '5.前端与数据埋点',
            path: '/note/browser/5.前端与数据埋点.html#5.前端与数据埋点'
          }

        ]
      },
      {
        title: 'frame',
        path: '/note/frame/1.vue面试常见面试题123.html',
        children: [
          {
            title: '1.vue面试常见面试题123',
            path: '/note/frame/1.vue面试常见面试题123.html#1.vue面试常见面试题123'
          },
          {
            title: '4.Vue框架中使用nextTick原理',
            path: '/note/frame/4.Vue框架中使用nextTick原理.html#4.Vue框架中使用nextTick原理'
          },
          {
            title: '5.vue如何优化首页加载速度',
            path: '/note/frame/5.vue如何优化首页加载速度.html#5.vue如何优化首页加载速度'
          },
          {
            title: '6.框架的导航标签跟a标签有什么区别',
            path: '/note/frame/6.框架的导航标签跟a标签有什么区别.html#6.框架的导航标签跟a标签有什么区别'
          },
          {
            title: '7.框架中列表组件key的作用',
            path: '/note/frame/7.框架中列表组件key的作用.html#7.框架中列表组件key的作用'
          }
        ]
      },
      {
        title: 'http＆https',
        path: '/note/http＆https/1.了解HTTP与历史发展.html',
        children: [
          {
            title: '1.了解HTTP与历史发展',
            path: '/note/http＆https/1.了解HTTP与历史发展.html#1.了解HTTP与历史发展'
          },
          {
            title: '2.HTTP报文格式',
            path: '/note/http＆https/2.HTTP报文格式.html#2.HTTP报文格式'
          },
          {
            title: '3.https与http的区别',
            path: '/note/http＆https/3.https与http的区别.html#3.https与http的区别'
          },
          {
            title: '4.HTTP通讯传输过程',
            path: '/note/http＆https/4.HTTP通讯传输过程.html#4.HTTP通讯传输过程'
          },
          {
            title: '5.HTTPS原理',
            path: '/note/http＆https/5.HTTPS原理.html#5.HTTPS原理'
          },
          {
            title: '6.接口如何防刷',
            path: '/note/http＆https/6.接口如何防刷.html#6.接口如何防刷'
          },
          {
            title: '7.HTTP与HTTPS',
            path: '/note/http＆https/7.HTTP与HTTPS.html#7.HTTP与HTTPS'
          }
        ]
      }
    ],
    sidebarDepth: 2,
  }

]
