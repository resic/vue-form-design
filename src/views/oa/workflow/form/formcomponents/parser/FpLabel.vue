<template>
  <div class="fpLabel">
    <el-col :span="design.componentList2[serial].longer">
      <div :class="labelClass" v-html="design.componentList2[serial].label"></div>
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
      },
      labelClass(){
        return{
          label:true,
          low:this.$store.state.design.componentList2[this.serial].high==="low",
          tall:this.$store.state.design.componentList2[this.serial].high==="tall"
        }
      }
    },
    methods:{
    }

  }
</script>
<style scoped>
  .label {
    width: 100%;
    text-align: right;
    box-sizing: border-box;
    line-height: 36px;
  }
  .low{
    height:36px;

  }
  .tall{
    height:102px;
  }
</style>
