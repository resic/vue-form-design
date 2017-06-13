<template>
  <div class="udLabel">

    <el-col :span="design.componentList2[serial].longer">
      <div class="cover"></div>
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
    padding-right: 20px;
    box-sizing: border-box;
  }
  .cover{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
</style>
