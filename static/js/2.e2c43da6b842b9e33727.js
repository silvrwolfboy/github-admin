webpackJsonp([2],{XXZF:function(e,t){},lZsw:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"timeline"}},[i("div",{ref:"autoHeight"},[i("el-steps",{attrs:{direction:"vertical",active:e.eventTotal}},[e._l(e.events,function(t,s){return[i("div",{staticClass:"scope"},[e._v(e._s(t.scope))]),e._v(" "),i("el-step",{attrs:{title:t.title,description:t.desc}})]})],2)],1)])},staticRenderFns:[]};var n=i("VU/8")({name:"timeline",data:function(){return{fixedHeight:80,eventTotal:0,events:[{id:1,title:"明确需求",scope:"2018.05.06 - 2018.05.12",desc:"使用element-ui并结合vue搭建一个后台的项目，然后调用github的接口获取数据，再使用d3js进行数据的图形展示。【注意⚠️】重点是d3，本仓库主要目的是学习使用d3js，为可视化界面打下基础。"},{id:2,title:"项目搭建",scope:"2018.05.13 - 2018.05.19",desc:"在vue-cli的脚手架上搭建项目，使用到vue-router和vuex，然后就是使用less预处理器编写样式，axios处理http，d3js的引入等。各个文件的存放请参考https://github.com/reng99/github-admin"},{id:3,title:"d3js的学习",scope:"2018.05.20 - 2018.05.26",desc:"工作之余学习，有待完善..."}]}},created:function(){var e=this;e.eventTotal=e.events.length,e.$nextTick(function(){e.$refs.autoHeight.style.height=e.fixedHeight*e.eventTotal+"px"})},methods:{},components:{}},s,!1,function(e){i("XXZF")},"data-v-dab9e5da",null);t.default=n.exports}});
//# sourceMappingURL=2.e2c43da6b842b9e33727.js.map