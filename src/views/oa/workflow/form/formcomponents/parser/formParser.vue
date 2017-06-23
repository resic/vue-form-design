<template>
  <div class="parser fl">
    <div class="formPreview">
      <div class="wrap">
        <div class="formHeader">
          <div :class="formNameObj" v-html="design.componentList2[0].formName"></div>
          <div :class="formDescObj" v-html="design.componentList2[0].formDesc"></div>
          <el-button class="btn" type="warning" :plain="true" @click="back">返回</el-button>
        </div>
        <div class="formArea" :style="formHeight">
          <div v-for="(list,index) in design.componentList2">
            <fp-slot :serial='index' :id="index" v-if="list.componentKey==='slot'"></fp-slot>
            <fp-label :serial='index' :id="index" v-if="list.componentKey==='label'"></fp-label>
            <fp-text :serial='index' :id="index" v-if="list.componentKey==='text'"></fp-text>
            <fp-textarea :serial='index' :id="index" v-if="list.componentKey==='textarea'"></fp-textarea>
            <fp-radio :serial='index' :id="index" v-if="list.componentKey==='radio'"></fp-radio>
            <fp-checkbox :serial='index' :id="index" v-if="list.componentKey==='checkbox'"></fp-checkbox>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import FpSlot from "@/views/oa/workflow/form/formcomponents/parser/FpSlot.vue"
  import FpLabel from "@/views/oa/workflow/form/formcomponents/parser/FpLabel.vue"
  import FpText from "@/views/oa/workflow/form/formcomponents/parser/FpText.vue"
  import FpTextarea from "@/views/oa/workflow/form/formcomponents/parser/FpTextarea.vue"
  import FpRadio from "@/views/oa/workflow/form/formcomponents/parser/FpRadio.vue"
  import FpCheckbox from "@/views/oa/workflow/form/formcomponents/parser/FpCheckbox.vue"

  export default {
    data () {
      return {}
    },
    computed: {
      design(){
        return this.$store.state.design
      },
      formNameObj(){
        return {
          formName: true,
          tl: this.$store.state.design.componentList2[0].formNamePlace === "tl",
          tc: this.$store.state.design.componentList2[0].formNamePlace === "tc",
          tr: this.$store.state.design.componentList2[0].formNamePlace === "tr"
        }
      },
      formDescObj(){
        return {
          formDesc: true,
          tl: this.$store.state.design.componentList2[0].formDescPlace === "tl",
          tc: this.$store.state.design.componentList2[0].formDescPlace === "tc",
          tr: this.$store.state.design.componentList2[0].formDescPlace === "tr"
        }
      },
      formHeight(){
        return {
          height: parseInt(this.$store.state.design.componentList2[0].formHeight) - 100 + "px"
        }
      }
    },
    methods: {
      back(){
        this.$store.dispatch("emptyList");
        this.$store.commit({
          type: "updateAttr",
          name: "showName",
          value: "design"
        })
      }
    },
    components: {
      FpSlot,
      FpLabel,
      FpText,
      FpTextarea,
      FpRadio,
      FpCheckbox,
    }
  }
</script>
<style>
  .parser {
    width: 80%;
    background-color: #95E4C5;
  }

  .formPreview {
    margin: 20px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, .2);
  }
.wrap{
  padding: 20px;
}
  .formHeader .btn {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .formPreview .formHeader {
    padding: 15px;
    cursor: pointer;
    border: 1px solid #999;
    border-bottom: none;
    position: relative;
    background-color: #fafafa;

  }

  .formName {
    font-size: 30px;
    color: #333;
  }

  .formDesc {
    font-size: 14px;
    padding: 5px;
    color: #999;
  }

  .formHeader .tr {
    margin-right: 100px;
  }

  .formArea {
    width: 100%;
    border:1px solid #999;
    box-sizing: border-box;
  }

  .parser .el-col {
    border: none;
    border-bottom: 1px solid #999;
    border-left: 1px solid #999;
    border-radius: 0;
    margin-left: -1px;
  }
  .fpTextarea .el-col{
    height:123px;
  }
</style>
