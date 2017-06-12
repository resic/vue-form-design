<template>
  <div class="udCheckbox">
 <el-col :span="8">
   <div class="cover" @click="showControl"></div>
   <el-checkbox-group v-model="checkList">
     <el-checkbox v-for="(item,index) in items" :key="index"  :label="item"></el-checkbox>
   </el-checkbox-group>
 </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        checkList:["选项一"],
        items:["选项一","选项二","选项三"]
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
.el-checkbox-group{
  padding:6px 0 6px 10px;
}
.cover{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
