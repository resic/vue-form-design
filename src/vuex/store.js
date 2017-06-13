import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
  design:{
    componentList1:[{"componentKey":"slot","name":"占位框","classI":"el-icon-menu"},{"componentKey":"label","name":"标签名称","classI":"el-icon-share"},{"componentKey":"text","name":"文本输入框","classI":"el-icon-edit"},{"componentKey":"textarea","name":"多行输入框","classI":"el-icon-edit"},{"componentKey":"radio","name":"单选框","classI":"el-icon-setting"},{"componentKey":"checkbox","name":"复选框","classI":"el-icon-circle-check"},],
    componentList2: [{"componentKey": "slot","longer":8}, {"componentKey":"hover"},{"componentKey": "label","longer":8,"label":"默认标签名"}, {"componentKey": "text","longer":8,"place":"单行placeholder信息","length":50}, {"componentKey": "textarea","longer":8,"place":"多行占位信息","length":200}, {"componentKey": "radio","longer":8,"radio":"","textArray":"一行"+"\n"+"一个选项","items":[]},{"componentKey": "slot","longer":10}, {"componentKey": "checkbox","longer":8,"checkList":[],"textArray":"一行"+"\n"+"一个选项","items":[]}],
    showNum: -1,
  }
}
const mutations={
  /**
   *控件设置信息的显示隐藏
   * */
  hideControl(state){
    state.design.showNum=-1
  },
  showControl(state,obj){
    state.design.showNum=obj.index
  },
  /**
   *页面中更改值得操作，通过判定数组中的位置index更改ele类型的值为value
   * */
  updateValue(state,obj){
    state.design.componentList2[obj.index][obj.ele]=obj.value
  }
}


export default new Vuex.Store({
  state,
mutations
})
