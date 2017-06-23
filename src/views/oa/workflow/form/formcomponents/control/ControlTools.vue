<template>
  <div class="control fl" id="control">
    <div class="caption">控件设置</div>
    <div class="control-content">
      <div class="null" v-show="design.controlNum===-1">
        <i class="el-icon-information"></i>请选择控件
      </div>
      <div v-for="(item,index) in design.componentList2" v-show="design.controlNum===index">
        <ct-header :serial="index" v-if="item.componentKey==='header'"></ct-header>
        <ct-slot :serial="index" v-if="item.componentKey==='slot'"></ct-slot>
        <ct-label :serial="index" v-if="item.componentKey==='label'"></ct-label>
        <ct-text :serial="index" v-if="item.componentKey==='text'"></ct-text>
        <ct-textarea :serial="index" v-if="item.componentKey==='textarea'"></ct-textarea>
        <ct-radio :serial="index" v-if="item.componentKey==='radio'"></ct-radio>
        <ct-checkbox :serial="index" v-if="item.componentKey==='checkbox'"></ct-checkbox>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  //用户定义表单设计控件组件相应设置信息控制工具组件
  import CtLabel from "@/views/oa/workflow/form/formcomponents/control/CtLabel.vue"
  import CtText from "@/views/oa/workflow/form/formcomponents/control/CtText.vue"
  import CtTextarea from "@/views/oa/workflow/form/formcomponents/control/CtTextarea.vue"
  import CtRadio from "@/views/oa/workflow/form/formcomponents/control/CtRadio.vue"
  import CtCheckbox from "@/views/oa/workflow/form/formcomponents/control/CtCheckbox.vue"
  import CtSlot from "@/views/oa/workflow/form/formcomponents/control/CtSlot.vue"
  import CtHeader from "@/views/oa/workflow/form/formcomponents/control/CtHeader.vue"

  export default {
    data () {
      return {}
    },
    computed: {
      design(){
        return this.$store.state.design
      }
    },
    components:{
      CtLabel,
      CtText,
      CtTextarea,
      CtRadio,
      CtCheckbox,
      CtSlot,
      CtHeader
    }
  }
</script>
<style scoped>
  #control {
    width: 25%;
  }
  .null {
    padding: 5px 10px;
    color: #a94442;
    margin:10px 0;
    background-color: #f2dede;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .control-content{
    padding:0 20px;
  }
  .caption {
    background-color: #BEE4D1;
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding-left: 40px;
    line-height: 40px;
    box-sizing: border-box;
  }
</style>
