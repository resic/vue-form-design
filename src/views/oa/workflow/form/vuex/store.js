import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
  design: {
    componentList1: [{
      "componentKey": "slot", "name": "占位框",
      "classI": "el-icon-menu",
      "longer": 8,
      "high":"low"
    }, {
      "componentKey": "label", "name": "标签名称",
      "classI": "el-icon-share",
      "longer": 8,
      "label": "默认标签名",
      "high":"low"
    }, {
      "componentKey": "text",
      "name": "文本输入框",
      "classI": "el-icon-edit",
      "longer": 8,
      "marks": "",
      "value":"",
      "place": "单行placeholder信息",
      "length": 50
    }, {
      "componentKey": "textarea",
      "name": "多行输入框",
      "classI": "el-icon-edit",
      "longer": 8,
      "marks": "",
      "value":"",
      "place": "多行占位信息",
      "length": 200
    }, {
      "componentKey": "radio",
      "name": "单选框",
      "classI": "el-icon-setting",
      "longer": 8,
      "marks": "",
      "value": "",
      "textArray": "一行" + "\n" + "一个选项",
      "items": []
    }, {
      "componentKey": "checkbox",
      "name": "复选框",
      "classI": "el-icon-circle-check",
      "longer": 8,
      "marks": "",
      "value": [],
      "textArray": "一行" + "\n" + "一个选项",
      "items": []
    }],
    componentList3: [{"componentKey": "header", "formName": "表单名称", "formDesc": "表单描述","formNamePlace":"tl","formDescPlace":"tl","formHeight":"615px"},],
    controlNum: -1,
    componentName: "",
    addOrNot: 0,
    showName:"design",
    //List3为测试，记得最后将List2和List3改回来
    componentList2:[{"componentKey": "header", "formName": "请假单", "formDesc": "员工请假详细表单信息","formNamePlace":"tc","formDescPlace":"tc","formHeight":"615px"},{
      "componentKey": "label", "name": "标签名称",
      "classI": "el-icon-share",
      "longer": 6,
      "label": "用户名：",
      "high":"low"
    }, {
      "componentKey": "text", "name": "文本输入框",
      "classI": "el-icon-edit",
      "longer": 18,
      "marks": "",
      "value":"",
      "place": "请输入用户名",
      "length": 50
    },{
      "componentKey": "label", "name": "标签名称",
      "classI": "el-icon-share",
      "longer": 6,
      "label": "请假天数：",
      "high":"low"
    }, {
      "componentKey": "text", "name": "文本输入框",
      "classI": "el-icon-edit",
      "longer": 18,
      "marks": "",
      "value":"",
      "place": "输入请假天数",
      "length": 50
    },{
      "componentKey": "label", "name": "标签名称",
      "classI": "el-icon-share",
      "longer": 6,
      "label": "类型：",
      "high":"low"
    },{
      "componentKey": "radio", "name": "单选框",
      "classI": "el-icon-setting",
      "longer": 18,
      "marks": "",
      "value": "",
      "textArray": "事假" + "\n" + "病假"+"\n" + "婚假"+"\n" + "产假",
      "items": []
    },{
      "componentKey": "label", "name": "标签名称",
      "classI": "el-icon-share",
      "longer": 6,
      "label": "请假原因：",
      "high":"tall"
    }, {
      "componentKey": "textarea", "name": "多行输入框",
      "classI": "el-icon-edit",
      "longer": 18,
      "marks": "",
      "value":"",
      "place": "详细原因",
      "length": 200
    }, {
      "componentKey": "label", "name": "标签名称",
      "classI": "el-icon-share",
      "longer": 6,
      "label": "爱好：",
      "high":"low"
    },
      {
        "componentKey": "checkbox", "name": "复选框",
        "classI": "el-icon-circle-check",
        "longer": 18,
        "marks": "",
        "value": [],
        "textArray": "抽烟" + "\n" + "喝酒"+"\n"+"烫头",
        "items": []
      }]
  }
}
 const actions={
  emptyList({commit}){
    let list=state.design.componentList2
    for(let i=0,len=list.length;i<len;i++){
      commit({
        type:"emptyList",
        index:i
      })
    }
  }
}
const mutations = {
  /**
   *页面中更改值得操作，通过判定数组中的位置index更改ele类型的值为value
   * */
  updateValue(state, obj){
    state.design.componentList2[obj.index][obj.ele] = obj.value
  },
  updateList(state,obj){
    state.design[obj.ele]=obj.value
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
  },
  //清空表单设计列表里面的控件具体值
  emptyList(state,obj){
    if(state.design.componentList2[obj.index].componentKey==="checkbox"){
      state.design.componentList2[obj.index].value=[]
    }else{
      state.design.componentList2[obj.index].value=""
    }
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})
