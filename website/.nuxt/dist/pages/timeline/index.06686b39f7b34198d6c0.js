webpackJsonp([28],{"/myT":function(t,e,i){"use strict";var n=i("V8bM"),a=i("y8ae");i("9oAv");e.a={props:["user"],data:function(){return{q:"",userData:this.user,isInputFocus:!1}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;n.a.logout().then(function(e){e.errNo===a.a.SUCCESS&&(t.userData=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){}}},"5X1F":function(t,e,i){"use strict";function n(t){i("oOhE")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("nisC"),r=i("91W+"),o=i("VU/8"),s=n,l=o(a.a,r.a,!1,s,null,null);e.default=l.exports},"91W+":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("app-header",{attrs:{user:t.user}}),i("div",{staticClass:"timeline-box"},[i("h1",{staticClass:"timeline-title"},[t._v("Golang中文社区成长历史")]),i("div",[i("ul",t._l(t.list,function(e,n){return i("li",[0==n||t.list[n].year!=t.list[n-1].year?i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-item-year"},[i("div",[t._v(t._s(t._f("formatYear")(e.date)))])])]):t._e(),i("div",{staticClass:"timeline-item"},[i("div",{staticClass:"timeline-item-content"},[t._m(0,!0),i("div",{staticClass:"timeline-item-bubble",class:[n%2==0?"timeline-item-bubble-even":"timeline-item-bubble-odd"]},[i("p",{staticClass:"timeline-item-title"},[t._v(t._s(e.name))]),i("p",{staticClass:"timeline-item-time"},[i("Icon",{attrs:{type:"ios-clock-outline"}}),i("span",{staticClass:"timeline-item-time-text"},[t._v(t._s(t._f("formatDate")(e.date)))])],1),i("div",{staticClass:"timeline-item-editor",domProps:{innerHTML:t._s(e.content)}})])])])])}))])]),i("app-footer")],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline-item-line"},[i("div",{staticClass:"timeline-item-circle"})])}],r={render:n,staticRenderFns:a};e.a=r},"9oAv":function(t,e,i){"use strict";var n=i("FhoZ"),a=i.n(n);if(a.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+a.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},J3Se:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-footer"},[i("div",{staticClass:"golang-footer-page-link"},[i("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[i("div",{staticClass:"golang-footer-github"},[i("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),i("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),i("span",[t._v("  | ")]),i("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/vote"}},[t._v("投票")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/links"}},[t._v("友情链接")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),i("span",[t._v("  |  ")]),i("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-footer-copyright"},[i("span",[t._v("© 2017 "),i("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" "),i("a",{attrs:{href:"/"}},[t._v("golang123.com")]),t._v(" 版权所有")]),i("span",[t._v(" | ")]),i("span",[t._v("京ICP备12045181号-2")])])}],r={render:n,staticRenderFns:a};e.a=r},MOSl:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,'body{background:#e1e1e1}.timeline-box{width:1200px;padding-bottom:60px;margin:0 auto;background:#fff;min-height:400px}.timeline-title{font-size:26px;padding-top:30px;text-align:center;margin-top:20px;margin-bottom:24px}.timeline-item-year{width:1px;height:60px;margin-left:599px;background:#e9eaec}.timeline-item-year div{text-align:center;width:100px;height:24px;line-height:24px;margin-left:-49px;background:#2d8cf0;color:#fff}.timeline-item-content{position:relative}.timeline-item-line{width:1px;background:#e9eaec;position:absolute;margin-left:599px;left:0;right:0;top:0;bottom:0}.timeline-item-circle{border:1px solid #19be6b;background:#a7f2cc;margin-left:-8px;margin-top:41px;width:16px;height:16px;border-radius:8px;display:inline-block;vertical-align:top}.timeline-item-bubble{-webkit-box-shadow:0 1px 6px rgba(14,22,30,.3);box-shadow:0 1px 6px rgba(14,22,30,.3);position:relative;margin-left:10px;margin-right:10px;margin-top:20px;width:520px;background:#fff;padding:20px;border-radius:6px;display:inline-block;vertical-align:top;border:1px solid #e2e2e2}.timeline-item-bubble-odd{margin-left:630px}.timeline-item-bubble-odd:before{border:8px solid transparent;border-right:10px solid #000}.timeline-item-bubble-odd:after,.timeline-item-bubble-odd:before{content:"";display:block;position:absolute;width:0;height:0;top:20px;left:-18px;-webkit-box-sizing:border-box;box-sizing:border-box}.timeline-item-bubble-odd:after{border:8px solid transparent;border-right:10px solid #fff}.timeline-item-bubble-even{margin-left:48px}.timeline-item-bubble-even:before{border:8px solid transparent;border-left:10px solid #000}.timeline-item-bubble-even:after,.timeline-item-bubble-even:before{content:"";display:block;position:absolute;width:0;height:0;top:20px;right:-18px;-webkit-box-sizing:border-box;box-sizing:border-box}.timeline-item-bubble-even:after{border:8px solid transparent;border-left:10px solid #fff}.timeline-item-title{font-size:20px;color:#000}.timeline-item-time{margin:5px 0 10px;font-size:14px}.timeline-item-time-text{margin-left:4px}.timeline-item-editor{font-size:16px;line-height:22px}.timeline-item-editor a{text-decoration:underline}',""])},"YXP+":function(t,e,i){"use strict";function n(t){i("eYSP")}var a=i("/myT"),r=i("pdRQ"),o=i("VU/8"),s=n,l=o(a.a,r.a,!1,s,null,null);e.a=l.exports},eYSP:function(t,e,i){var n=i("suZm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("df0e4074",n,!0)},nisC:function(t,e,i){"use strict";var n=i("YXP+"),a=i("yqLL");e.a={data:function(){return{list:[{name:"golang123 v0.6发布",date:{year:2018,month:1,date:13},content:"1.web框架切换到gin<br/>2.登录验证由session改为jwt<br/>3.使用dep来管理第三方包依赖"},{name:"回复功能",date:{year:2017,month:12,date:30},content:"回复话题或回复投票，同时支持对回复进行回复"},{name:"个人中心",date:{year:2017,month:12,date:18},content:"个人主页、发表的话题、参与的回复、参与的投票、收藏"},{name:"升级后台管理",date:{year:2017,month:11,date:26},content:"后台管理增加话题管理、回复管理"},{name:"话题置顶",date:{year:2017,month:10,date:18},content:"增加话题置顶功能，话题列表支持分页"},{name:"iris升级",date:{year:2017,month:8,date:28},content:"golang123升级iris框架到最新版8.4.0"},{name:"支持投票功能",date:{year:2017,month:8,date:20},content:'对拿不准的功能, 会定期在&nbsp;<a href="/vote" target="_blank">投票专栏</a>&nbsp;发起投票, 征求大家的意见'},{name:"架构调整，支持前后端同构渲染",date:{year:2017,month:8,date:9},content:"基于nuxt框架，支持前后端同构渲染"},{name:"集成 Markdown 编辑器",date:{year:2017,month:7,date:28},content:"集成 Markdown 编辑器，支持图片上传、表格、全屏模式"},{name:"golang123首次提交代码",date:{year:2017,month:7,date:21},content:'代码地址: <a href="https://github.com/shen100/golang123" target="_blank">https://github.com/shen100/golang123</a>'}]}},asyncData:function(t){return{user:t.user}},head:function(){return{title:"Golang中文社区成长历史"}},mounted:function(){},filters:{formatYear:function(t){return""+t.year},formatDate:function(t){var e=t.year,i=t.month,n=t.date;return i<10&&(i="0"+i),n<10&&(n="0"+n),e+"-"+i+"-"+n}},middleware:"userInfo",components:{"app-header":n.a,"app-footer":a.a}}},oOhE:function(t,e,i){var n=i("MOSl");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("68e976da",n,!0)},pdRQ:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-top-header"},[i("div",{staticClass:"golang-top-box"},[i("div",{staticClass:"golang-top-header-left"},[t._m(0),i("div",{staticClass:"golang-header-search"},[i("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[i("p",{staticStyle:{position:"relative"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",style:{border:t.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{focus:t.onInputFocus,blur:t.onInputBlur,input:function(e){e.target.composing||(t.q=e.target.value)}}}),i("span",{staticClass:"search-icon"})])])])]),t._m(1),i("div",{staticClass:"golang-top-header-right"},[i("ul",[t._m(2),t._m(3),t.userData?[i("li",[i("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[i("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[i("span",{staticClass:"header-avatar"},[i("img",{attrs:{src:t.user.avatarURL,alt:""}})]),i("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),i("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[i("li",[i("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人主页")])]),i("li",[i("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),i("li",{on:{click:t.onSignout}},[t._v("退  出")])])])],1)]:[i("a",{on:{click:t.onSignin}},[i("li",{staticStyle:{color:"#333"}},[t._v("登录")])]),t._m(4)]],2)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-logo-container"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:"/images/logo.png"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"golang-top-header-nav"},[i("ul",[i("li",[i("a",{attrs:{href:"/"}},[t._v("首页")])]),i("li",[i("a",{attrs:{href:"/vote"}},[t._v("投票")])]),i("li",[i("a",{attrs:{href:"/timeline"}},[t._v("成长历史")])]),i("li",[i("a",{attrs:{href:"/about"}},[t._v("关于")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"/signup"}},[i("li",{staticStyle:{color:"#333"}},[t._v("注册")])])}],r={render:n,staticRenderFns:a};e.a=r},suZm:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"",""])},yqLL:function(t,e,i){"use strict";var n=i("J3Se"),a=i("VU/8"),r=a(null,n.a,!1,null,null,null);e.a=r.exports}});
//# sourceMappingURL=index.06686b39f7b34198d6c0.js.map