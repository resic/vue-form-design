<template>
  <div class="udLabel">

    <el-col :span="design.componentList2[serial].longer">
      <div class="cover" :serial="serial" title="点击设置控件信息"></div>
      <div class="label" v-html="design.componentList2[serial].label"></div>
    </el-col>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    props:["serial"],
    computed:{
      design(){
        return this.$store.state.design
      }
    },
    methods:{
    },


  }
</script>
<style scoped>
  .label {
    width: 100%;
    height: 36px;
    line-height:36px;
    text-align: right;
    box-sizing: border-box;
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
