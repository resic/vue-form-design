<template>
  <div class="parser fl">
    <div class="formPreview">
      <div class="formHeader">
        <div :class="formNameObj" v-html="design.componentList2[0].formName"></div>
        <div :class="formDescObj" v-html="design.componentList2[0].formDesc"></div>
        <el-button class="btn" type="warning" :plain="true" @click="back">返回</el-button>
      </div>
      <div class="formArea">

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
      }
    },
    methods: {
      back(){
        this.$store.commit({
          type: "hide",
          attr: "showName",
          index: "design"
        })
      }
    }
  }
</script>
<style scoped>
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

  .btn {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .formHeader {
    padding: 15px;
    cursor: pointer;
    border-bottom: 1px solid #999;
    position: relative;
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

  .tr {
    margin-right: 100px;
  }

  .formArea {
    width: 100%;
    min-height: 515px;
  }
</style>
