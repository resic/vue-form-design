<template>
  <div class=" container clearfix">
    <!--表单控件盒子，每一个item为一个表单控件选项，componentKey为控件标识-->
    <div class="components fl" id="components">
      <div class="caption">表单控件</div>
      <div class="content clearfix">
        <div class="item" v-for="(item,index) in componentList1" draggable=true  :componentKey="item.componentKey">
          <span v-html="item.name"></span>
          <i :class="item.classI"></i>
        </div>
      </div>
    </div>
    <!--自定义表单盒子-->
    <div class="build fl" @click="hideControl">
      <div id="formDesign">
        <div class="formName">表单标题</div>
        <div v-for="(list,index) in componentList2" :serial='index' @click="showControl(index)">
          <ud-slot v-if="list.componentKey==='slot'"></ud-slot>
          <ud-label v-if="list.componentKey==='label'"></ud-label>
          <ud-text v-if="list.componentKey==='text'"></ud-text>
          <ud-textarea v-if="list.componentKey==='textarea'"></ud-textarea>
          <ud-radio v-if="list.componentKey==='radio'"></ud-radio>
          <ud-checkbox v-if="list.componentKey==='checkbox'"></ud-checkbox>
        </div>
      </div>
    </div>
    <div class="control fl" id="control">
      <div class="caption">控件设置</div>
      <div class="null" v-show="showNum===-1">
        <i class="el-icon-information"></i>请选择控件

      </div>
      <div v-for="(item,index) in componentList2" :serial="index" v-show="showNum===index">
        <ct-label v-if="item.componentKey==='label'"></ct-label>
        <ct-text v-if="item.componentKey==='text'"></ct-text>
        <ct-textarea v-if="item.componentKey==='textarea'"></ct-textarea>
        <ct-radio v-if="item.componentKey==='radio'"></ct-radio>
        <ct-checkbox v-if="item.componentKey==='checkbox'"></ct-checkbox>
      </div>
    </div>
  </div>
</template>

<script>

  //用户定义表单设计控件组件
  import UdLabel from "@/components/form/UdLabel.vue"
  import UdText from "@/components/form/UdText.vue"
  import UdTextarea from "@/components/form/UdTextarea.vue"
  import UdRadio from "@/components/form/UdRadio.vue"
  import UdCheckbox from "@/components/form/UdCheckbox.vue"
  import UdSlot from "@/components/form/UdSlot.vue"

  //用户定义表单设计控件组件相应设置信息控制工具组件
  import CtLabel from "@/components/control/CtLabel.vue"
  import CtText from "@/components/control/CtText.vue"
  import CtTextarea from "@/components/control/CtTextarea.vue"
  import CtRadio from "@/components/control/CtRadio.vue"
  import CtCheckbox from "@/components/control/CtCheckbox.vue"

  export default {
    name: 'design',
    data () {
      return {
        componentList1:[{"componentKey":"label","name":"标签名称","classI":"el-icon-share"},{"componentKey":"text","name":"文本输入框","classI":"el-icon-edit"},{"componentKey":"textarea","name":"多行输入框","classI":"el-icon-edit"},{"componentKey":"radio","name":"单选框","classI":"el-icon-setting"},{"componentKey":"checkbox","name":"复选框","classI":"el-icon-circle-check"},]
        ,
        componentList2: [{"componentKey": "slot"}, {"componentKey": "label"}, {"componentKey": "text"}, {"componentKey": "textarea"}, {"componentKey": "radio"}, {"componentKey": "checkbox"}],
        showNum: -1  //控制右侧相应控件显示隐藏变量
      }
    },
    computed: {},
    methods: {
      /**
       * 点击相应组件绑定的事件，控制相应的控件设置信息显示
       * */
      showControl(index){
        this.showNum = index //点击的相应控件的信息显示
      },
      /**
       * 点击表单设计页面空白部分绑定的事件，隐藏所有控件信息
       * */
      hideControl(event){
        if (event.target.id === "formDesign") {   //如果点击的是表单设计页面中的空白部分，则没有控件设置信息显示
          this.showNum = -1
        }
      }
    },
    components: {
      UdLabel,
      UdText,
      UdTextarea,
      UdRadio,
      UdCheckbox,
      UdSlot,
      CtLabel,
      CtText,
      CtTextarea,
      CtRadio,
      CtCheckbox
    }
  }
</script>

<style scoped>
  .container .fl {
    box-sizing: border-box;
    min-height: 655px;
  }

  .container .caption {
    background-color: #BEE4D1;
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding-left: 40px;
    line-height: 40px;
    box-sizing: border-box;
  }

  .container .content {
    padding-top: 10px;
  }

  .container .item {
    height: 40px;
    box-sizing: border-box;
    border: 1px dashed #999;
    font-size: 16px;
    padding: 8px 15px;
    background-color: #F5F5F5;
    width: 46%;
    float: left;
    margin: 5px 2%;
    cursor: pointer;
  }

  .container .item i {
    float: right;
    margin-top: 3px;
  }

  #components {
    width: 20%;
  }

  .build {
    width: 55%;
    background-color: #95E4C5;
  }

  #formDesign {
    margin: 20px;
    height: 615px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, .2);
  }

  .formName {
    font-size: 30px;
    padding: 15px;

  }

  #control {
    width: 25%;
  }

  .null {
    margin: 10px;
    padding: 5px 10px;
    color: #a94442;
    background-color: #f2dede;
    border-radius: 10px;
    box-sizing: border-box;
  }

</style>
