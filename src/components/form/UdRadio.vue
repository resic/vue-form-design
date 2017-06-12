<template>
  <div class="udRadio">
  <el-col :span="8">
    <div class="cover" @click="showControl"></div>
    <el-radio-group v-model="radio"  >
      <el-radio v-for="(item,index) in items" :key="index" :label="item" >{{item}}</el-radio>
    </el-radio-group>
  </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        radio:"男",
        items:["男","女"]
      }
    },
    methods:{
      showControl(){
        //显示相应的控件设置
      }
    }
  }
</script>
<style scoped>
.el-radio-group{
  padding:7px 0 7px 10px ;
}
.cover{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
