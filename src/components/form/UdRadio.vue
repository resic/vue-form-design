<template>
  <div class="udRadio">
  <el-col :span="design.componentList2[serial].longer">
    <div class="cover"></div>
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
  padding:7px 0 7px 10px ;
}
.cover{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
