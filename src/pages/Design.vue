<template>
  <div class=" container clearfix">
    <!--表单控件盒子，每一个item为一个表单控件选项，componentKey为控件标识-->
    <div class="components fl" id="components">
      <div class="caption">表单控件</div>
      <div class="content clearfix">
        <div class="item" v-for="(item,index) in design.componentList1"  :draggable="true" v-drag :componentKey="item.componentKey">
          <span v-html="item.name"></span>
          <i :class="item.classI"></i>
        </div>
       </div>
    </div>
    <!--自定义表单盒子-->
    <div class="build fl" @click="hideControl">
      <div id="formDesign" >
        <div class="formHeader" @click="showControl(0)">
          <div :class="formNameObj" v-html="design.componentList2[0].formName"></div>
          <div :class="formDescObj" v-html="design.componentList2[0].formDesc"></div>
        </div>
        <draggable  :options="{
      group:'formDesign'
        }" class="dragArea">
        <div  v-for="(list,index) in design.componentList2" @click="showControl(index)">
          <ud-hover v-if="list.componentKey==='hover'"></ud-hover>
          <ud-slot :serial='index' :id="index" v-if="list.componentKey==='slot'"></ud-slot>
          <ud-label :serial='index' :id="index" v-if="list.componentKey==='label'"></ud-label>
          <ud-text :serial='index' :id="index" v-if="list.componentKey==='text'"></ud-text>
          <ud-textarea :serial='index' :id="index" v-if="list.componentKey==='textarea'"></ud-textarea>
          <ud-radio :serial='index' :id="index" v-if="list.componentKey==='radio'"></ud-radio>
          <ud-checkbox :serial='index':id="index"  v-if="list.componentKey==='checkbox'"></ud-checkbox>
        </div>
        </draggable>
      </div>
    </div>
    <!--右侧控件信息盒子-->
    <div class="control fl" id="control">
      <div class="caption">控件设置</div>
      <div class="control-content">
        <div class="null" v-show="design.showNum===-1">
          <i class="el-icon-information"></i>请选择控件
      </div>
        <div v-for="(item,index) in design.componentList2" v-show="design.showNum===index">
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
  import UdHover from "@/components/form/UdHover.vue"

  //用户定义表单设计控件组件相应设置信息控制工具组件
  import CtLabel from "@/components/control/CtLabel.vue"
  import CtText from "@/components/control/CtText.vue"
  import CtTextarea from "@/components/control/CtTextarea.vue"
  import CtRadio from "@/components/control/CtRadio.vue"
  import CtCheckbox from "@/components/control/CtCheckbox.vue"
  import CtSlot from "@/components/control/CtSlot.vue"
  import CtHeader from "@/components/control/CtHeader.vue"

  //引入拖拽组件
  import Draggable from "vuedraggable"
  export default {
    name: 'design',
    data () {
      return {

      }
    },
    computed: {
      design(){
        return this.$store.state.design
      },
      formNameObj(){
        return{
          formName:true,
          tl:this.$store.state.design.componentList2[0].formNamePlace==="tl",
          tc:this.$store.state.design.componentList2[0].formNamePlace==="tc",
          tr:this.$store.state.design.componentList2[0].formNamePlace==="tr"
        }
      },
      formDescObj(){
        return{
          formDesc:true,
          tl:this.$store.state.design.componentList2[0].formDescPlace==="tl",
          tc:this.$store.state.design.componentList2[0].formDescPlace==="tc",
          tr:this.$store.state.design.componentList2[0].formDescPlace==="tr"
        }
      }

    },
    methods: {
      /**
       * 点击相应组件绑定的事件，控制相应的控件设置信息显示
       * */
      showControl(index){
        this.$store.commit({
          type: "showControl",
          index: index
        }) //点击的相应控件的信息显示
      },
      /**
       * 点击表单设计页面空白部分绑定的事件，隐藏所有控件信息
       * */
      hideControl(event){
        if (event.target.className === "dragArea") {   //如果点击的是表单设计页面中的空白部分，则没有控件设置信息显示
          this.$store.commit("hideControl");
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
      UdHover,
      CtLabel,
      CtText,
      CtTextarea,
      CtRadio,
      CtCheckbox,
      CtSlot,
      CtHeader,
      Draggable
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
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, .2);
  }

  .formHeader {
    padding: 15px;
    cursor: pointer;
  }
  .formName{
    font-size: 30px;
    color: #333;
  }
  .formDesc{
    font-size: 14px;
    padding:5px;
    color: #999;
  }

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
.dragArea{
  width: 100%;
  height: 545px;
}
</style>
