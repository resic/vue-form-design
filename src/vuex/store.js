import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
  design: {
    componentList1: [{
      "componentKey": "slot", "name": "占位框",
      "classI": "el-icon-menu",
      "longer": 8
    }, {
      "componentKey": "label", "name": "标签名称",
      "classI": "el-icon-share",
      "longer": 8,
      "label": "默认标签名"
    }, {
      "componentKey": "text", "name": "文本输入框",
      "classI": "el-icon-edit",
      "longer": 8,
      "marks": "",

      "place": "单行placeholder信息",
      "length": 50
    }, {
      "componentKey": "textarea", "name": "多行输入框",
      "classI": "el-icon-edit",
      "longer": 8,
      "marks": "",
      "place": "多行占位信息",
      "length": 200
    }, {
      "componentKey": "radio", "name": "单选框",
      "classI": "el-icon-setting",
      "longer": 8,
      "marks": "",
      "radio": "",
      "textArray": "一行" + "\n" + "一个选项",
      "items": []
    }, {
      "componentKey": "checkbox", "name": "复选框",
      "classI": "el-icon-circle-check",
      "longer": 8,
      "marks": "",
      "checkList": [],
      "textArray": "一行" + "\n" + "一个选项",
      "items": []
    }],
    componentList2: [{"componentKey": "header", "formName": "表单名称", "formDesc": "表单描述","formNamePlace":"tl","formDescPlace":"tl"}],
    showNum: -1,
    componentName: "",
    addOrNot: 0
  }
}
const mutations = {
  /**
   *控件设置信息的显示隐藏
   * */
  hideControl(state){
    state.design.showNum = -1
  },
  showControl(state, obj){
    state.design.showNum = obj.index
  },
  /**
   *页面中更改值得操作，通过判定数组中的位置index更改ele类型的值为value
   * */
  updateValue(state, obj){
    state.design.componentList2[obj.index][obj.ele] = obj.value
  },
  /**
   * 拖拽修改数组方法，生成的push和删除的remove
   * */
  pushArray(state, obj){
    state.design.componentList2.push(obj.value)
  },
  removeArray(state, obj){
    state.design.componentList2.splice(obj.index, 1)
  },
  //更改状态树中表单设计变量的一级变量时的方法
  updateAttr(state, obj){
    state.design[obj.name] = obj.value
  }
}


export default new Vuex.Store({
  state,
  mutations
})
