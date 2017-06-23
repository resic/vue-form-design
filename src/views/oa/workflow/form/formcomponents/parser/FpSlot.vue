<template>
  <div class="fpSlot">
    <el-col :class="slotClass" :span="design.componentList2[serial].longer">
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    props:["serial"],
    computed:{
      design(){
        return this.$store.state.design
      },
      slotClass(){
        return{
          tall:this.$store.state.design.componentList2[this.serial].high==="tall",
          low:this.$store.state.design.componentList2[this.serial].high==="low"
        }
      }
    }
  }
</script>
<style scoped>
  .low{
    height:59px;

  }
  .tall{
    height:117px;
  }
</style>
