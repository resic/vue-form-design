<template>
  <div id="ctLabel">
    <el-form v-model="form"  ref="form" label-width="100px">
          <div class="info" @mouseenter="change" @mouseleave="ret">
            控件使用说明
            <ul v-show="form.bur===1">
              <li>1.可通过调整控件长度控制所选组件长度</li>
              <li>2.标签名称字数限制最大为20个字</li>
            </ul>
          </div>

      <el-form-item label="控件长度">
        <el-input-number  v-model="form.num" :min="2" :max="24"></el-input-number>
      </el-form-item>
      <el-form-item label="标签名称" >
        <el-input  :maxlength="20"  v-model="form.place"  ></el-input>
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
          place:"",
        }
      }
    },
    methods:{
      change(){
        this.form.bur=1
      },
      ret(){
        this.form.bur=-1
      }
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
