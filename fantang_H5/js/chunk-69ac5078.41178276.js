(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69ac5078"],{"0584":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-board"},[t._l(t.localData,function(s,e){return 0===t.type?a("div",{key:e,staticClass:"three-list-li"},[a("div",{staticClass:"ranking"},[t._v(t._s(e+1))]),s.userHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.userHeadUrl,alt:""}}):t._e(),s.singerHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.singerHeadUrl,alt:""}}):t._e(),s.lyricImgUrl?a("img",{staticClass:"header-img",attrs:{src:s.lyricImgUrl,alt:""}}):t._e(),a("div",{staticClass:"star-hots"},[a("p",{staticClass:"song-name"},[t._v(t._s(s.songName))]),a("p",{staticClass:"supNum"},[t._v(t._s(s.singerName)+" "),a("span",{staticClass:"iconfont icon-shipinbofangyingpian view-num"},[t._v(t._s(s.playNum))])])]),a("div",{staticClass:"play-btn iconfont icon-bofang",on:{click:t.$isApp}})]):t._e()}),t._l(t.localData,function(s,e){return 1===t.type?a("div",{key:e,staticClass:"three-list-li"},[a("div",{staticClass:"ranking"},[t._v(t._s(e+1))]),s.userHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.userHeadUrl,alt:""}}):t._e(),s.singerHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.singerHeadUrl,alt:""}}):t._e(),s.lyricImgUrl?a("img",{staticClass:"header-img",attrs:{src:s.lyricImgUrl,alt:""}}):t._e(),a("div",{staticClass:"star-hots"},[a("p",{staticClass:"song-name"},[t._v(t._s(s.songName))]),a("p",{staticClass:"supNum"},[t._v(t._s(s.singerName))])]),s.lastRank?a("div",{staticClass:"up-color",class:{"down-color":s.nowRank-s.lastRank<0}},[t._v("\n            "+t._s(s.nowRank-s.lastRank>0?"↑":"↓")+"\n        ")]):a("div",{staticClass:"new-color"},[t._v("new")]),s.lastRank?a("div",{staticClass:"rank-range"},[t._v(t._s(s.nowRank-s.lastRank))]):t._e(),a("div",{staticClass:"play-btn iconfont icon-bofang",on:{click:t.$isApp}})]):t._e()}),t._l(t.localData,function(s,e){return 2===t.type?a("div",{key:e,staticClass:"three-list-li"},[a("div",{staticClass:"ranking"},[t._v(t._s(e+1))]),s.userHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.userHeadUrl,alt:""}}):t._e(),s.singerHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.singerHeadUrl,alt:""}}):t._e(),s.lyricImgUrl?a("img",{staticClass:"header-img",attrs:{src:s.lyricImgUrl,alt:""}}):t._e(),s.lyricImgUrl?a("div",{staticClass:"star-hots",staticStyle:{width:"71%"}},[a("p",{staticClass:"song-name"},[t._v(t._s(s.songName))]),a("p",{staticClass:"supNum"},[t._v(t._s(s.singerName))])]):a("div",{staticClass:"star-hots"},[a("p",{staticClass:"song-name"},[t._v(t._s(s.singerName))]),a("p",{staticClass:"supNum"},[t._v("人气值："+t._s(s.popularityNum))])])]):t._e()}),t._l(t.localData,function(s,e){return 3===t.type?a("div",{key:e,staticClass:"three-list-li"},[a("div",{staticClass:"ranking"},[t._v(t._s(e+1))]),a("div",{staticClass:"header-img-box"},[s.userHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.userHeadUrl,alt:""}}):t._e(),1===s.isVip?a("div",{staticClass:"v-point"},[t._v("v")]):t._e()]),s.singerHeadUrl?a("img",{staticClass:"header-img",attrs:{src:s.singerHeadUrl,alt:""}}):t._e(),s.lyricImgUrl?a("img",{staticClass:"header-img",attrs:{src:s.lyricImgUrl,alt:""}}):t._e(),a("div",{staticClass:"star-hots"},[a("p",{class:{vipStatus:1===s.isVip},staticStyle:{height:"100%","line-height":"1.16rem"}},[t._v(t._s(s.userName))])])]):t._e()})],2)},i=[],n=(a("c5f6"),{name:"ListBoard",props:{listData:Array,type:[String,Number]},computed:{localData:function(){for(var t=0;t<this.listData.length;t++)null!==this.listData[t].lyricImgUrl&&null!==this.listData[t].userHeadUrl&&null!==this.listData[t].singerHeadUrl||(this.listData[t].lyricImgUrl=a("a442"));return this.listData}},mounted:function(){}}),r=n,l=(a("8640"),a("2877")),A=Object(l["a"])(r,e,i,!1,null,"ee68f768",null);s["a"]=A.exports},"0da7":function(t,s,a){t.exports=a.p+"img/gongxianbang.e5800b86.png"},"1d72":function(t,s,a){"use strict";var e=a("309c"),i=a.n(e);i.a},"25bb":function(t,s,a){"use strict";var e=a("eda3"),i=a.n(e);i.a},"309c":function(t,s,a){},4104:function(t,s,a){},"7e29":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("img",{staticClass:"DafultPage",attrs:{src:t.imgUrl}})},i=[],n={name:"DafultPage",props:{imgUrl:{type:String,required:!0}}},r=n,l=(a("1d72"),a("2877")),A=Object(l["a"])(r,e,i,!1,null,"37d44e7b",null);s["a"]=A.exports},8640:function(t,s,a){"use strict";var e=a("4104"),i=a.n(e);i.a},a0ad:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ranking"},[e("img",{staticClass:"top-type-img",attrs:{src:a("0da7"),alt:""}}),t._m(0),e("van-tabs",{staticClass:"tab-box",attrs:{sticky:"",color:"#FF2E4D",lineWidth:20,swipeable:""},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[e("van-tab",{staticClass:"tabs",attrs:{title:"实时"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"more-three-list"},[e("div",{staticClass:"after-three"},[e("list-li",{attrs:{listData:this.nowList,type:3}}),e("default-page",{directives:[{name:"show",rawName:"v-show",value:this.nowList.length<=0,expression:"this.nowList.length<=0"}],attrs:{"img-url":a("cfc3")}})],1)])])]),e("van-tab",{attrs:{title:"周榜"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"more-three-list"},[e("div",{staticClass:"after-three"},[e("list-li",{attrs:{listData:this.weekList,type:3}}),e("default-page",{directives:[{name:"show",rawName:"v-show",value:this.weekList.length<=0,expression:"this.weekList.length<=0"}],attrs:{"img-url":a("cfc3")}})],1)])])]),e("van-tab",{attrs:{title:"月榜"}},[e("div",{staticClass:"list"},[e("div",{staticClass:"more-three-list"},[e("div",{staticClass:"after-three"},[e("list-li",{attrs:{listData:this.monthList,type:3}}),e("default-page",{directives:[{name:"show",rawName:"v-show",value:this.monthList.length<=0,expression:"this.monthList.length<=0"}],attrs:{"img-url":a("cfc3")}})],1)])])])],1)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"../noteContribute"}},[a("div",{staticClass:"active-rule"},[t._v("i")])])}],n=a("0584"),r=a("7e29"),l={name:"DetailRanking",components:{ListLi:n["a"],defaultPage:r["a"]},data:function(){return{active:0,afterThree:[],nowList:[],weekList:[],monthList:[]}},mounted:function(){this.getNowList(),this.getWeekList(),this.getMonthList()},created:function(){document.title="榜单详情"},methods:{getNowList:function(){var t=this;this.$axios({method:"get",url:"http://hoowe.sweetfans.cn:32288/list/userContribute/queryUserContribute"}).then(function(s){if(1e3!==s.data.status)return!1;null!==s.data.data&&(t.nowList=s.data.data)}).catch(function(t){console.log(t)})},getWeekList:function(){var t=this;this.$axios({method:"get",url:"http://hoowe.sweetfans.cn:32288/list/userContribute/getWeekUserContribute"}).then(function(s){if(1e3!==s.data.status)return!1;null!==s.data.data&&(t.weekList=s.data.data)}).catch(function(t){console.log(t)})},getMonthList:function(){var t=this;this.$axios({method:"get",url:"http://hoowe.sweetfans.cn:32288/list/userContribute/getMonthUserContribute"}).then(function(s){if(1e3!==s.data.status)return!1;null!==s.data.data&&(t.monthList=s.data.data)}).catch(function(t){console.log(t)})}},computed:{}},A=l,o=(a("25bb"),a("2877")),c=Object(o["a"])(A,e,i,!1,null,"e98b0bf8",null);s["default"]=c.exports},a442:function(t,s){t.exports="data:image/jpeg;base64,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"},aa77:function(t,s,a){var e=a("5ca1"),i=a("be13"),n=a("79e5"),r=a("fdef"),l="["+r+"]",A="​",o=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),u=function(t,s,a){var i={},l=n(function(){return!!r[t]()||A[t]()!=A}),o=i[t]=l?s(d):r[t];a&&(i[a]=o),e(e.P+e.F*l,"String",i)},d=u.trim=function(t,s){return t=String(i(t)),1&s&&(t=t.replace(o,"")),2&s&&(t=t.replace(c,"")),t};t.exports=u},c5f6:function(t,s,a){"use strict";var e=a("7726"),i=a("69a8"),n=a("2d95"),r=a("5dbc"),l=a("6a99"),A=a("79e5"),o=a("9093").f,c=a("11e9").f,u=a("86cc").f,d=a("aa77").trim,g="Number",f=e[g],m=f,h=f.prototype,p=n(a("2aeb")(h))==g,v="trim"in String.prototype,C=function(t){var s=l(t,!1);if("string"==typeof s&&s.length>2){s=v?s.trim():d(s,3);var a,e,i,n=s.charCodeAt(0);if(43===n||45===n){if(a=s.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(s.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+s}for(var r,A=s.slice(2),o=0,c=A.length;o<c;o++)if(r=A.charCodeAt(o),r<48||r>i)return NaN;return parseInt(A,e)}}return+s};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var s=arguments.length<1?0:t,a=this;return a instanceof f&&(p?A(function(){h.valueOf.call(a)}):n(a)!=g)?r(new m(C(s)),a,f):C(s)};for(var b,N=a("9e1e")?o(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),U=0;N.length>U;U++)i(m,b=N[U])&&!i(f,b)&&u(f,b,c(m,b));f.prototype=h,h.constructor=f,a("2aba")(e,g,f)}},cfc3:function(t,s,a){t.exports=a.p+"img/default-data.bf825cd6.png"},eda3:function(t,s,a){},fdef:function(t,s){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-69ac5078.41178276.js.map