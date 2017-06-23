<template>
  <!--每一个item为一个表单控件选项，componentKey为控件标识-->
  <div class="build fl" @click="hideControl">
    <div id="formDesign" >
      <div class="formHeader" @click="showControl(0)">
        <div :class="formNameObj" v-html="design.componentList2[0].formName"></div>
        <div :class="formDescObj" v-html="design.componentList2[0].formDesc"></div>
        <ul class="btn">
          <li><el-button  type="danger" :plain="true" @click="reset">重置</el-button></li>
          <li><el-button  type="info" :plain="true"  @click="preview">预览</el-button></li>
        </ul>
      </div>
      <draggable v-model="componentList2" :options="{
      group:'formDesign'
        }" class="dragArea" :style="formHeight">
        <div  v-for="(list,index) in componentList2" @click="showControl(index)">
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
</template>

<script type="text/ecmascript-6">
  //用户定义表单设计控件组件
  import UdLabel from "@/views/oa/workflow/form/formcomponents/udform/UdLabel.vue"
  import UdText from "@/views/oa/workflow/form/formcomponents/udform/UdText.vue"
  import UdTextarea from "@/views/oa/workflow/form/formcomponents/udform/UdTextarea.vue"
  import UdRadio from "@/views/oa/workflow/form/formcomponents/udform/UdRadio.vue"
  import UdCheckbox from "@/views/oa/workflow/form/formcomponents/udform/UdCheckbox.vue"
  import UdSlot from "@/views/oa/workflow/form/formcomponents/udform/UdSlot.vue"
  import UdHover from "@/views/oa/workflow/form/formcomponents/udform/UdHover.vue"

  //引入拖拽组件
  import Draggable from "vuedraggable"
  export default {
    data () {
      return {}
    },
    computed: {
      design(){
        return this.$store.state.design
      },
      componentList2:{
        get(){
          return this.$store.state.design.componentList2
        },
        set(value){
          this.$store.commit({
            type:"updateList",
            ele:"componentList2",
            value:value
          })
        }
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
      },
      formHeight(){
        return{
          height:parseInt(this.$store.state.design.componentList2[0].formHeight)-100+"px"
        }
      }

    },
    methods: {
      /**
       * 点击相应组件绑定的事件，控制相应的控件设置信息显示
       * */
      showControl(index){
        this.$store.commit({
          type: "updateAttr",
          name:"controlNum",
          value: index
        }) //点击的相应控件的信息显示
      },
      /**
       * 点击表单设计页面空白部分绑定的事件，隐藏所有控件信息
       * */
      hideControl(event){
        if (event.target.className === "dragArea") {   //如果点击的是表单设计页面中的空白部分，则没有控件设置信息显示
          this.$store.commit({
            type:"updateAttr",
            name:"controlNum",
            value:-1
          });
        }
      },
      /**
       * 点击预览改变展示组件，将组件控制信息隐藏，展示预览界面给用户
       * */
      preview(){
        this.$store.commit({
          type:"updateAttr",
          name:"showName",
          value:"preview"
        })
      },
      reset(){
        this.$store.commit({
          type:"updateAttr",
          name:"componentList2",
          value:[{"componentKey": "header", "formName": "表单名称", "formDesc": "表单描述","formNamePlace":"tl","formDescPlace":"tl","formHeight":"615px"},]
        })
      }
    },
    components:{
      UdLabel,
      UdText,
      UdTextarea,
      UdRadio,
      UdCheckbox,
      UdSlot,
      UdHover,
      Draggable
    }
  }
</script>
<style scoped>
  .build {
    width: 55%;
    background-color: #95E4C5;
  }

  #formDesign {
    margin: 20px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, .2);
  }

  .formHeader {
    padding: 15px;
    cursor: pointer;
    border-bottom: 1px solid #999;
    position: relative;
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
  .tr{
    margin-right: 100px;
  }
  .dragArea{
    width: 100%;
  }
.btn{
  position: absolute;
  top:30px;
  right: 30px;
}
  .btn li{
    float: left;
    margin-right: 10px;
  }

</style>



