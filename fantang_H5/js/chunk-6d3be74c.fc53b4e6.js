(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3be74c"],{"69c3":function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"support-list"},[t.list.list.length>0?s("ul",{staticClass:"contribution-list"},t._l(t.list.list,function(i,n){return s("li",{key:n,staticClass:"No"},[s("div",{staticClass:"contribution-No"},[t._v(t._s(n+1))]),s("div",{staticClass:"contribution-info"},[s("img",{staticClass:"contribution-head",attrs:{src:i.userHeadUrl,alt:""}}),s("p",{staticClass:"contribution-name "},[t._v(t._s(i.userName))]),"积分"===t.type?s("div",{staticClass:"contribution-value"},[t._v(t._s(i.contribution)+t._s(t.type))]):t._e(),"元"===t.type?s("div",{staticClass:"contribution-value"},[t._v("¥"+t._s((i.contribution/100).toFixed(2)))]):t._e()])])}),0):t._e(),0===t.list.length?s("div",{staticClass:"default-page"},[t._v("暂无数据")]):t._e()])},a=[],e={name:"SupportList",data:function(){return{type:"",list:[]}},created:function(){document.title="应援榜"},mounted:function(){var t=this.$queryParams(location.href);this.getSupportList(t),this.type=t.type},methods:{getSupportList:function(t){var i=this;this.$axios({method:"post",url:"http://hoowe.sweetfans.cn:32288/support/assistance/singerActivityContributionListPage",data:this.$qs.stringify({id:t.id,pageNum:1,pageSize:20})}).then(function(t){if(1e3!==t.data.status)return!1;if(null!==t.data.data){i.list=t.data.data;for(var s=0;s<i.list.length;s++)0===i.list[s].type&&(i.list[s].contribution=i.list[s].contribution/100)}}).catch(function(t){console.log(t)})}}},o=e,c=(s("9f47"),s("2877")),u=Object(c["a"])(o,n,a,!1,null,"1e894d6c",null);i["default"]=u.exports},"8f06":function(t,i,s){},"9f47":function(t,i,s){"use strict";var n=s("8f06"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-6d3be74c.fc53b4e6.js.map