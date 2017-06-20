<template>
  <div id="header">
    <el-form  label-width="100px">
      <div class="info" @mouseenter="change" @mouseleave="ret">
        控件使用说明
        <ul v-show="bur===1">
        <li>1.可通过设置表单名称更改表单名</li>
        <li>2.可以给表单增加相应描述</li>
        <li>3.设置对齐方式更改表单名和描述所在的位置</li>
      </ul>
      </div>

      <el-form-item label="表单名" >
        <el-input   v-model="formName"  ></el-input>
      </el-form-item>
      <el-form-item label="表单描述" >
        <el-input  v-model="formDesc"  ></el-input>
      </el-form-item>
      <el-form-item label="表单名位置">
        <el-radio-group v-model="formNamePlace" >
          <el-radio label="tl">左</el-radio>
          <el-radio label="tc">居中</el-radio>
          <el-radio label="tr">右</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="表单描述位置">
        <el-radio-group v-model="formDescPlace" >
          <el-radio label="tl">左</el-radio>
          <el-radio label="tc">居中</el-radio>
          <el-radio label="tr">右</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        bur: -1
      }
    },
    methods: {
      change(){
        this.bur = 1
      },
      ret(){
        this.bur = -1
      }
    },
    computed: {
      design(){
        return this.$store.state.design
      },
      formName:{
        get(){
          return this.$store.state.design.componentList2[0].formName
        },
        set(value){
          this.$store.commit({
            type:"updateValue",
            ele:"formName",
            value:value,
            index:0
          })
        }
      },
      formDesc:{
        get(){
          return this.$store.state.design.componentList2[0].formDesc
        },
        set(value){
          this.$store.commit({
            type:"updateValue",
            ele:"formDesc",
            value:value,
            index:0
          })
        }
      },
      formNamePlace:{
        get(){
          return this.$store.state.design.componentList2[0].formNamePlace
        },
        set(value){
          this.$store.commit({
            type:"updateValue",
            ele:"formNamePlace",
            value:value,
            index:0
          })
        }
      },
      formDescPlace:{
        get(){
          return this.$store.state.design.componentList2[0].formDescPlace
        },
        set(value){
          this.$store.commit({
            type:"updateValue",
            ele:"formDescPlace",
            value:value,
            index:0
          })
        }
      }

    }
  }
</script>
<style scoped>
  .info{
    background-color: #dff0d8;
    color: #3c763d;
    margin:10px 0;
    padding: 5px 10px;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: help;
  }
  ul,li{
    list-style: none;
  }
  li{
    margin:5px 10px;
  }
</style>
