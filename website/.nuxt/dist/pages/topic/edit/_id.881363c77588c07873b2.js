webpackJsonp([11],{"/myT":function(t,e,a){"use strict";var i=a("V8bM"),n=a("y8ae");a("9oAv");e.a={props:["user"],data:function(){return{q:"",userData:this.user,isInputFocus:!1}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;i.a.logout().then(function(e){e.errNo===n.a.SUCCESS&&(t.userData=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){}}},"3G8Z":function(t,e,a){"use strict";var i=a("EuWz"),n=a("s+Te"),s=a("VU/8"),o=s(i.a,n.a,!1,null,null,null);e.a=o.exports},"7EVb":function(t,e,a){"use strict";e.a={STATUS_IN_ACTIVE:1,STATUS_ACTIVE:2,STATUS_FROZEN:3}},"973A":function(t,e,a){"use strict";function i(t){a("BTwo")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Eshb"),s=a("i6jM"),o=a("VU/8"),r=i,l=o(n.a,s.a,!1,r,null,null);e.default=l.exports},"9IHU":function(t,e,a){"use strict";var i=a("lERW"),n=a("fPCn"),s=a("VU/8"),o=s(i.a,n.a,!1,null,null,null);e.a=o.exports},"9oAv":function(t,e,a){"use strict";var i=a("FhoZ"),n=a.n(i);if(n.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+n.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},BTwo:function(t,e,a){var i=a("Zz0F");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("8af4beae",i,!0)},Eshb:function(t,e,a){"use strict";var i=a("//Fk"),n=a.n(i),s=a("V8bM"),o=a("YXP+"),r=a("yqLL"),l=a("9IHU");e.a={data:function(){},validate:function(t){return!!t.params.id},asyncData:function(t){return n.a.all([s.a.getCategories({client:t.req}),s.a.getArticle({client:t.req,params:{id:t.params.id},query:{f:"md"}}),s.a.getUserArticles({client:t.req,params:{userID:t.user.id},query:{orderType:1,desc:1,pageSize:5}})]).then(function(e){var a=e[0].data.categories,i=e[1].data.article,n=e[2].data.articles,s=!1;return n&&n.length>0&&(s=!0),i?{user:t.user,categories:a,article:i,recentArticles:n,hasRecentArticles:s,id:i.id}:void t.error({statusCode:404,message:"Page not found"})}).catch(function(e){console.log(e),t.error({statusCode:404,message:"Page not found"})})},head:function(){return{title:"编辑话题",link:[{rel:"stylesheet",href:"/styles/editor/simplemde.min.css"}]}},methods:{},middleware:"userRequired",components:{"app-header":o.a,"app-footer":r.a,"article-save":l.a}}},EuWz:function(t,e,a){"use strict";e.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{inputValue:this.value||""}},methods:{onSave:function(){this.$emit("save")},onChange:function(){this.$emit("change",this.inputValue)}},head:function(){return{}},mounted:function(){console.log(11111,this.value)}}},J3Se:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-footer"},[a("div",{staticClass:"golang-footer-page-link"},[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[a("div",{staticClass:"golang-footer-github"},[a("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),a("span",[t._v("  | ")]),a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/vote"}},[t._v("投票")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/links"}},[t._v("友情链接")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-footer-copyright"},[a("span",[t._v("© 2017 "),a("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" "),a("a",{attrs:{href:"/"}},[t._v("golang123.com")]),t._v(" 版权所有")]),a("span",[t._v(" | ")]),a("span",[t._v("京ICP备12045181号-2")])])}],s={render:i,staticRenderFns:n};e.a=s},MyuZ:function(t,e,a){"use strict";var i=a("pq6b"),n=a("UNwd"),s=a("VU/8"),o=s(i.a,n.a,!1,null,null,null);e.a=o.exports},UNwd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang123-editor"},[t.isMounted?a("textarea",{ref:"textarea"}):t._e(),a("Modal",{attrs:{title:"上传图片"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[a("Upload",{attrs:{"on-success":t.onUploadCallback,name:"upFile",format:["jpg","jpeg","png","gif"],action:t.uploadURL}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传图片")])],1)],1),t.isFullscreen?a("div",{staticClass:"editor-fullScreen-save"},[a("Button",{attrs:{type:"primary"},on:{click:t.onSave}},[t._v("保  存")])],1):t._e()],1)},n=[],s={render:i,staticRenderFns:n};e.a=s},"YXP+":function(t,e,a){"use strict";function i(t){a("eYSP")}var n=a("/myT"),s=a("pdRQ"),o=a("VU/8"),r=i,l=o(n.a,s.a,!1,r,null,null);e.a=l.exports},Zz0F:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"body{background-color:#e1e1e1}.topic-box{width:1200px;overflow:hidden;font-size:0;margin-left:auto;margin-right:auto;margin-top:20px}.topic-main{font-size:0}.topic-main,.topic-nav{width:900px;display:inline-block}.topic-nav{height:40px;padding-left:20px;background:#f6f6f6}.topic-nav a{color:#80bd01}.topic-nav li{float:left;line-height:40px}.topic-nav span{font-size:14px}.topic-nav-sep{padding:0 8px}.publish-label{color:#999}.editor-box-wrap{width:900px;padding-top:24px;min-height:720px;background:#fff}.topic-area{clear:both;padding:0 20px 1px}.topic-content .ivu-form-item-content,.topic-submit .ivu-form-item-content{margin-left:0!important}.topic-sidebar{width:280px;margin-left:20px;display:inline-block;vertical-align:top}.topic-sidebar li{background:#fff;font-size:14px;line-height:40px;margin-bottom:20px}.topic-sidebar-item p{padding-left:12px;padding-right:12px}.markdown-codeblock p{padding-top:6px;line-height:normal;font-size:14px}.topic-sidebar-my{padding:8px 0;line-height:normal}.topic-sidebar-my a{line-height:22px}.topic-sidebar-title{padding-left:12px;background:#f6f6f6;height:40px}.editor-fullScreen-save{position:fixed;top:7px;right:20px;z-index:9}.topic-none{text-align:center;color:#a8a8a8}.CodeMirror{height:400px}",""])},eYSP:function(t,e,a){var i=a("suZm");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("df0e4074",i,!0)},fPCn:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic-box"},[a("div",{staticClass:"topic-main"},[a("ul",{staticClass:"topic-nav"},[t._m(0),t._m(1),a("li",[a("span",{staticClass:"publish-label"},[t._v(t._s(t.id?"编辑":"发布")+"话题")])])]),a("div",{staticClass:"editor-box-wrap"},[a("div",{staticClass:"topic-area"},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleInline,"label-width":80}},[a("Form-item",{attrs:{label:"话题名称",prop:"topicName"}},[a("Input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入话题名称"},model:{value:t.formValidate.topicName,callback:function(e){t.formValidate.topicName=e},expression:"formValidate.topicName"}})],1),a("Form-item",{attrs:{label:"选择版块",prop:"selected"}},[a("Select",{staticStyle:{width:"400px"},model:{value:t.formValidate.selected,callback:function(e){t.formValidate.selected=e},expression:"formValidate.selected"}},t._l(t.formValidate.categories,function(e){return a("Option",{key:e.id,attrs:{value:e.id+""}},[t._v(t._s(e.name))])}))],1),a("Form-item",{staticClass:"topic-content",attrs:{"label-width":0,prop:"content"}},[t.article&&2==t.article.contentType?a("html-editor",{attrs:{value:t.formValidate.content,user:t.user},on:{save:t.onContentSave,change:t.onContentChage}}):a("md-editor",{attrs:{value:t.formValidate.content,user:t.user},on:{save:t.onContentSave,change:t.onContentChage}})],1),a("Form-item",{staticClass:"topic-submit",attrs:{"label-width":0}},[t.isMounted?a("Button",{attrs:{size:"large",type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.id?"保存话题":"发布话题"))]):t._e()],1)],1)],1)])]),a("ul",{staticClass:"topic-sidebar"},[t._m(2),a("li",{staticClass:"topic-sidebar-item"},[a("div",{staticClass:"topic-sidebar-title"},[t._v("我的近期话题")]),t._l(t.recentArticles,function(e,i){return t.hasRecentArticles?a("p",{staticClass:"topic-sidebar-my",style:{"border-top":0==i?"none;":"1px solid #f0f0f0;"}},[a("a",{attrs:{href:"/topic/"+e.id,target:"_blank"}},[t._v(t._s(e.name))])]):a("p",{staticClass:"topic-none",staticStyle:{"padding-left":"0"}},[t._v("暂无话题")])})],2)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/"}},[a("span",[t._v("主页")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"topic-nav-sep"},[a("span",[t._v("/")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"topic-sidebar-item"},[a("div",{staticClass:"topic-sidebar-title"},[t._v("Markdown 语法参考")]),a("p",[t._v("### 单行的标题")]),a("p",[t._v("**粗体**")]),a("p",[t._v("[链接](https://www.go.com)")]),a("p",[t._v("![图片](https://www.go.com/1.jpg)")]),a("div",{staticClass:"markdown-codeblock"},[a("p",[t._v("```")]),a("p",[t._v("if (a > 1) {")]),a("p",[t._v('    doSomething("代码")')]),a("p",[t._v("}")]),a("p",[t._v("```")])]),a("p",[a("a",{attrs:{href:"/markdown",target:"_blank"}},[t._v("Markdown参考文档")])])])}],s={render:i,staticRenderFns:n};e.a=s},i6jM:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-header",{attrs:{user:t.user}}),a("article-save",{attrs:{categories:t.categories,article:t.article,recentArticles:t.recentArticles,hasRecentArticles:t.hasRecentArticles,id:t.id,user:t.user}}),a("app-footer")],1)},n=[],s={render:i,staticRenderFns:n};e.a=s},lERW:function(t,e,a){"use strict";var i=a("V8bM"),n=a("MyuZ"),s=a("3G8Z"),o=a("y8ae"),r=a("7EVb"),l=a("FhoZ"),c=a.n(l);e.a={props:["categories","article","recentArticles","hasRecentArticles","id","user"],data:function(){return{isMounted:!1,formValidate:{topicName:this.article&&this.article.name||"",categories:this.categories,selected:this.article&&this.article.categories[0].id+""||"",content:this.article&&(this.article.content||this.article.htmlContent)||""},ruleInline:{topicName:[{required:!0,message:"请输入话题名称",trigger:"blur"}],selected:[{required:!0,message:"请选择板块",trigger:"change"}],content:[{required:!0,message:"请输入话题内容",trigger:"blur"}]}}},mounted:function(){this.isMounted=!0},methods:{onContentChage:function(t){this.formValidate.content=t},onSubmit:function(){var t=this;return this.user.status===r.a.STATUS_IN_ACTIVE?void(this.id?this.$Message.error({duration:c.a.messageDuration,closable:!0,content:"账号未激活，不能保存话题"}):this.$Message.error({duration:c.a.messageDuration,closable:!0,content:"账号未激活，不能发布话题"})):(this.$refs.formValidate.validate(function(e){if(e){var a=t;(t.id?i.a.updateArticle:i.a.createArticle)({body:{id:t.id,name:t.formValidate.topicName,content:t.formValidate.content,categories:[{id:parseInt(t.formValidate.selected)}]}}).then(function(t){t.errNo===o.a.ERROR?a.$Message.error({duration:c.a.messageDuration,closable:!0,content:t.msg}):t.errNo===o.a.IN_ACTIVE?a.id?a.$Message.error("账号未激活，不能保存话题"):a.$Message.error("账号未激活，不能发布话题"):t.errNo===o.a.LOGIN_TIMEOUT?location.href="/signin?ref="+encodeURIComponent(location.href):t.errNo===o.a.SUCCESS&&setTimeout(function(){location.href="/topic/"+t.data.id},500)}).catch(function(t){a.$Message.error({duration:c.a.messageDuration,closable:!0,content:t.message||t.msg})})}}),!1)},onContentSave:function(){this.onSubmit()}},components:{"md-editor":n.a,"html-editor":s.a}}},pdRQ:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-top-header"},[a("div",{staticClass:"golang-top-box"},[a("div",{staticClass:"golang-top-header-left"},[t._m(0),a("div",{staticClass:"golang-header-search"},[a("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[a("p",{staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",style:{border:t.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{focus:t.onInputFocus,blur:t.onInputBlur,input:function(e){e.target.composing||(t.q=e.target.value)}}}),a("span",{staticClass:"search-icon"})])])])]),t._m(1),a("div",{staticClass:"golang-top-header-right"},[a("ul",[t._m(2),t._m(3),t.userData?[a("li",[a("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[a("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[a("span",{staticClass:"header-avatar"},[a("img",{attrs:{src:t.user.avatarURL,alt:""}})]),a("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),a("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[a("li",[a("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人主页")])]),a("li",[a("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),a("li",{on:{click:t.onSignout}},[t._v("退  出")])])])],1)]:[a("a",{on:{click:t.onSignin}},[a("li",{staticStyle:{color:"#333"}},[t._v("登录")])]),t._m(4)]],2)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-logo-container"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/logo.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-top-header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:"/"}},[t._v("首页")])]),a("li",[a("a",{attrs:{href:"/vote"}},[t._v("投票")])]),a("li",[a("a",{attrs:{href:"/timeline"}},[t._v("成长历史")])]),a("li",[a("a",{attrs:{href:"/about"}},[t._v("关于")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/signup"}},[a("li",{staticStyle:{color:"#333"}},[t._v("注册")])])}],s={render:i,staticRenderFns:n};e.a=s},pq6b:function(t,e,a){"use strict";var i=a("y8ae"),n=a("7EVb"),s=a("FhoZ"),o=a.n(s);e.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{isMounted:!1,host:"",simplemde:null,SimpleMDE:null,uploadURL:o.a.apiURL+"/upload",modalVisible:!1,toolbar:null,isFullscreen:!1}},methods:{ok:function(){},cancel:function(){},showUpload:function(){if(this.user.status===n.a.STATUS_IN_ACTIVE)return void this.$Message.error({duration:o.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"});this.modalVisible=!0},onToggleFullScreen:function(t){t.toggleFullScreen(),this.isFullscreen=!this.isFullscreen},onSave:function(){this.$emit("save")},onUploadCallback:function(t,e){if(t)if(t.errNo===i.a.SUCCESS){var a=t.data.url;this.simplemde.setImageURL(a),this.SimpleMDE.drawImage(this.simplemde)}else t.errNo===i.a.IN_ACTIVE?(this.modalVisible=!1,this.$Message.error({duration:o.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"})):t.errNo===i.a.ERROR?(this.modalVisible=!1,this.$Message.error({duration:o.a.messageDuration,closable:!0,content:t.msg})):t.errNo===i.a.LOGIN_TIMEOUT&&(location.href="/signin")}},head:function(){return{script:[{src:"/javascripts/editor/simplemde.js"}]}},mounted:function(){this.isMounted=!0,this.$nextTick(function(){this.host=document.location.hostname;var t=window.SimpleMDE;this.toolbar=[{name:"bold",action:t.toggleBold,className:"fa fa-bold",title:"粗体"},{name:"italic",action:t.toggleItalic,className:"fa fa-italic",title:"斜体"},{name:"heading",action:t.toggleHeadingSmaller,className:"fa fa-header",title:"标题"},"|",{name:"unordered-list",action:t.toggleUnorderedList,className:"fa fa-list-ul",title:"无序列表"},{name:"ordered-list",action:t.toggleOrderedList,className:"fa fa-list-ol",title:"有序列表"},{name:"table",action:t.drawTable,className:"fa fa-table",title:"表格"},{name:"horizontal-rule",action:t.drawHorizontalRule,className:"fa fa-minus",title:"水平分隔线"},"|",{name:"code",action:t.toggleCodeBlock,className:"fa fa-code",title:"代码"},{name:"quote",action:t.toggleBlockquote,className:"fa fa-quote-left",title:"块引用"},{name:"link",action:t.drawLink,className:"fa fa-link",title:"链接"},{name:"image",action:this.showUpload,className:"fa fa-picture-o",title:"上传图片"},"|",{name:"preview",action:t.togglePreview,className:"fa fa-eye no-disable",title:"预览"},{name:"fullscreen",action:this.onToggleFullScreen,className:"fa fa-arrows-alt no-disable no-mobile",title:"全屏"}],this.SimpleMDE=t;var e=new t({element:this.$refs.textarea,promptURLs:!1,spellChecker:!1,toolbar:this.toolbar});this.simplemde=e;var a=t.prototype;a.getImageURL||(a.getImageURL=function(){return this.imageURL},a.setImageURL=function(t){this.imageURL=t});var i=this;this.simplemde.codemirror.on("change",function(){i.$emit("change",i.simplemde.value())}),this.simplemde.value(this.value)})},watch:{value:function(t,e){t!==e&&""===t&&this.simplemde.value("")}}}},"s+Te":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang123-editor"},[a("Input",{attrs:{type:"textarea",rows:40},on:{"on-change":t.onChange},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1)},n=[],s={render:i,staticRenderFns:n};e.a=s},suZm:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},yqLL:function(t,e,a){"use strict";var i=a("J3Se"),n=a("VU/8"),s=n(null,i.a,!1,null,null,null);e.a=s.exports}});
//# sourceMappingURL=_id.881363c77588c07873b2.js.map