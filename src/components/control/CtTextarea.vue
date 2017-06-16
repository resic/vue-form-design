<template>
  <div class="ctTextArea">
    <el-form label-width="100px">
          <div class="info" @mouseenter="change" @mouseleave="ret">
            控件使用说明
            <ul v-show="bur===1">
            <li>1.可通过调整控件长度控制所选组件长度</li>
            <li>2.标识名称为控件所代表的的意义，比如电话，邮箱，性别等等，若前方有label标签则建议与label标签一致</li>
            <li>3.可以通过设置最大长度限制用户输入字数</li>
            <li>4.默认提示值并非文本框的值，所以并不受字数限制</li>
            </ul>
          </div>

      <el-form-item label="控件长度">
        <el-input-number  v-model="longer" :min="2" :max="24"></el-input-number>
      </el-form-item>
      <el-form-item label="标识名称">
        <el-input v-model="marks"></el-input>
      </el-form-item>
      <el-form-item label="默认提示值" >
        <el-input   v-model="place"></el-input>
      </el-form-item>
      <el-form-item label="最大限制字数" >
        <el-input-number  :step="10" :min="0" v-model="length"  ></el-input-number>
      </el-form-item>
      <el-form-item label="删除组件">
        <el-button type="danger"  @click="removeComponent">删除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
          bur:-1
      }
    },
    methods:{
      change(){
        this.bur=1
      },
      ret(){
        this.bur=-1
      },
      removeComponent(){
        this.$store.commit({
          type: "removeArray",
          index: this.serial
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
      marks:{
        get(){
          return this.$store.state.design.componentList2[this.serial].marks
        },
        set(value){
          this.$store.commit({
            type:"updateValue",
            ele:"marks",
            value:value,
            index:this.serial
          })
        }
      },
      place:{
        get () {
          return this.$store.state.design.componentList2[this.serial].place
        },
        set (value) {
          this.$store.commit({
            type:"updateValue",
            ele:"place",
            value:value,
            index:this.serial
          })
        }
      },
      length:{
        get () {
          return this.$store.state.design.componentList2[this.serial].length
        },
        set (value) {
          this.$store.commit({
            type:"updateValue",
            ele:"length",
            value:value,
            index:this.serial
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
