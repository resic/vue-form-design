<template>
  <div class="udCheckbox">
 <el-col :span="design.componentList2[serial].longer">
   <div class="cover"></div>
   <el-checkbox-group v-model="design.componentList2[serial].checkList">
     <el-checkbox v-for="(item,index) in design.componentList2[serial].items" :key="index"  :label="item"></el-checkbox>
   </el-checkbox-group>
 </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    methods:{
    },
    props:["serial"],
    computed:{
      design(){
        return this.$store.state.design
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
