<template>
  <div id="ctLabel">
    <el-form v-model="form"  ref="form" label-width="100px">
          <div class="info" @mouseenter="change" @mouseleave="ret">
            控件使用说明
            <ul v-show="form.bur===1">
              <li>1.可通过调整控件长度控制所选组件长度</li>
            <li>2.用户可自定义复选框的值</li>
            <li>3.每一行为复选框的一个选项，点击确定按钮生成所有选项</li>
            </ul>
          </div>

      <el-form-item label="控件长度">
        <el-input-number  v-model="form.num" :min="2" :max="24"></el-input-number>
      </el-form-item>
      <el-form-item label="复选框的值">
        <el-input type="textarea" :autosize="{minRows:2}" v-model="form.textArray" ></el-input>
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
        form:{
          bur:-1,
          num:8,
          place:"复选",
          textArray:"一行"+"\n"
          +"一个选项",
          items:[]
        }
      }
    },
    methods:{
      change(){
        this.form.bur=1
      },
      ret(){
        this.form.bur=-1
      },
      getArray(){
        let str=this.form.textArray.replace(/\n[\s| ]*/g,"\n")
        let str2=str.trim()
        this.form.items =str2.split("\n");
      }
    },mounted(){
      let str=this.form.textArray.replace(/\n[\s| ]*/g,"\n")
      let str2=str.trim()
      this.form.items=str2.split("\n");
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
