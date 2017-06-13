<template>
  <div id="ctLabel">
    <el-form  label-width="100px">
          <div class="info" @mouseenter="change" @mouseleave="ret">
            控件使用说明
            <ul v-show="bur===1">
              <li>1.可通过调整控件长度控制所选组件长度</li>
              <li>2.用户可自定义单选框的值</li>
              <li>3.输入框每一行为单选框的一个选项，点击确定按钮生成所有选项</li>
            </ul>
          </div>

      <el-form-item label="控件长度">
        <el-input-number  v-model="longer" :min="2" :max="24"></el-input-number>
      </el-form-item>
      <el-form-item label="单选框的值">
        <el-input type="textarea" :autosize="{minRows:2}" v-model="textArray" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getArray">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
          bur:-1,
      }
    },
    methods:{
      change(){
        this.bur=1
      },
      ret(){
        this.bur=-1
      },
      getArray(){
        let str=this.$store.state.design.componentList2[this.serial].textArray.replace(/\n[\s| ]*/g,"\n")
        //去除字符串空格，并赋值个输入框
        let str2=str.trim()
        this.$store.commit({
          type:"updateValue",
          ele:"textArray",
          value:str2,
          index:this.serial
        })
        //将去除空格后的字符串切成数组并绑定到状态树
        let str3=str2.split("\n");
        this.$store.commit({
          type:"updateValue",
          ele:"items",
          value:str3,
          index:this.serial
        })
      }
    },
  props:["serial"],
  computed:{
      design(){
        return this.$store.state.design
      },
    longer:{
      get () {
        return this.$store.state.design.componentList2[this.serial].longer
      },
      set (value) {
        this.$store.commit({
          type:"updateValue",
          ele:"longer",
          value:value,
          index:this.serial
        })
      }
    },
    textArray:{
      get () {
        return this.$store.state.design.componentList2[this.serial].textArray
      },
      set (value) {
        this.$store.commit({
          type:"updateValue",
          ele:"textArray",
          value:value,
          index:this.serial
        })
      }
    }
  },mounted(){
      let str=this.$store.state.design.componentList2[this.serial].textArray.replace(/\n[\s| ]*/g,"\n")
      let str2=str.trim()
      let str3=str2.split("\n");
      this.$store.commit({
        type:"updateValue",
        ele:"items",
        value:str3,
        index:this.serial
      })
    }
  }
</script>
<style scoped>
.info{
  background-color: #dff0d8;
  color: #3c763d;
  margin:10px;
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
