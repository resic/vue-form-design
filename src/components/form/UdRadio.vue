<template>
  <div class="udRadio">
  <el-col :span="design.componentList2[serial].longer">
    <div class="cover" :serial="serial" title="点击设置控件信息"></div>
    <el-radio-group v-model="design.componentList2[serial].radio"  >
      <el-radio v-for="(item,index) in design.componentList2[serial].items" :key="index" :label="item" >{{item}}</el-radio>
    </el-radio-group>
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
.el-radio-group{
  padding:9px 0 7px 10px ;
}
.cover{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  cursor: pointer;
  z-index: 10;
}
</style>
