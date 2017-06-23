// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import  Vuex from "vuex"
import store from "./views/oa/workflow/form/vuex/store"
import App from './App.vue'
import router from './router'
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
Vue.use(ElementUI)
Vue.use(Vuex)


Vue.config.productionTip = false

Vue.directive('drag', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    var box1 = el
    var box2 = document.querySelector(".dragArea");
    var box3=document.querySelector("#components");
    box1.ondragstart = function (event) {
      //只有从控件组件栏里拖拽的组件才会触发该事件
      //首先将添加变量变为1，
      vm.$store.commit({
        type: "updateAttr",
        name: "addOrNot",
        value: 1
      })
      //然后获取要添加的组件的组件Key并更改状态树里的相应值
      var component = event.target.getAttribute("componentKey");
      vm.$store.commit({
        type: "updateAttr",
        name: "componentName",
        value: component
      })
    }
    box2.ondragenter = function (event) {
//清除所有拖拽时产生的componentList2数据里面的hover栏数据
      for (var i = 0; i < vm.$store.state.design.componentList2.length; i++) {
        if (vm.$store.state.design.componentList2[i].componentKey === "hover") {
          vm.$store.commit({
            type: "removeArray",
            index: i
          })
        }
      }
      //获取添加与否数据，若数据为1则证明是从组件栏里拖拽产生，则添加hover指示栏，反之则是在表单设计栏进行的排序，不添加指示栏
      var addOrNot=vm.$store.state.design.addOrNot
      if(addOrNot===1){
        vm.$store.commit({
          type: "pushArray",
          value: {"componentKey": "hover"},
        })
      }
    }
    box2.ondragover = function (event) {
      //取消浏览器默认行为
      event.preventDefault();
    }

    box2.ondrop = function (event) {
   //放置控件时首先清除所有hover栏数据
      for (var i = 0; i < vm.$store.state.design.componentList2.length; i++) {
        if (vm.$store.state.design.componentList2[i].componentKey === "hover") {
          vm.$store.commit({
            type: "removeArray",
            index: i
          })
        }
      }
      //获取状态树中组件Key的值和添加与否的值
      var component=vm.$store.state.design.componentName
      var addOrNot=vm.$store.state.design.addOrNot
      //如果添加值为1则证明是从组件栏中拖拽，则在表单设计栏添加组件
      if(addOrNot===1){
        //通过判断组件Key添加相应的组件数据进入componentList2中
        switch (component) {
          case "label":
            vm.$store.commit({
              type: "pushArray",
              value: {"componentKey": "label", "longer": 8, "label": "默认标签名", "name": "标签名称", "classI": "el-icon-share","high":"low"},
            })

            break;
          case "text":
            vm.$store.commit({
              type: "pushArray",
              value: {
                "componentKey": "text",
                "name": "文本输入框",
                "classI": "el-icon-edit",
                "longer": 8,
                "marks": "",
                "value":"",
                "place": "单行placeholder信息",
                "length": 50
              },
            })

            break;
          case "textarea":
            vm.$store.commit({
              type: "pushArray",
              value: {
                "componentKey": "textarea",
                "name": "多行输入框",
                "classI": "el-icon-edit",
                "longer": 8,
                "marks": "",
                "value":"",
                "place": "多行占位信息",
                "length": 200
              },
            })

            break;
          case "radio":
            vm.$store.commit({
              type: "pushArray",
              value: {
                "componentKey": "radio",
                "name": "单选框",
                "classI": "el-icon-setting",
                "longer": 8,
                "marks": "",
                "value": "",
                "textArray": "一行" + "\n" + "一个选项",
                "items": []
              },
            })
            break;
          case "checkbox":
            vm.$store.commit({
              type: "pushArray",
              value: {
                "componentKey": "checkbox",
                "name": "复选框",
                "classI": "el-icon-circle-check",
                "longer": 8,
                "marks": "",
                "value": [],
                "textArray": "一行" + "\n" + "一个选项",
                "items": []
              },
            })
            break;
          case "slot":
            vm.$store.commit({
              type: "pushArray",
              value: {"componentKey": "slot", "longer": 8, "name": "占位框", "classI": "el-icon-menu","high":"low"}
            })
            break;
          default:
            console.log("找不到组件！");
            break;

        }
        //最后将添加与否数据重置为0
        vm.$store.commit({
          type:"updateAttr",
          name:"addOrNot",
          value:0
        })
      }

    }
      //
      box3.ondragenter=function () {
        for (var i = 0; i < vm.$store.state.design.componentList2.length; i++) {
          if (vm.$store.state.design.componentList2[i].componentKey === "hover") {
            vm.$store.commit({
              type: "removeArray",
              index: i
            })
          }
        }
      }

  }
})
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
