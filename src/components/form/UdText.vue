<template>
  <div class="udText">
    <el-col :span="design.componentList2[serial].longer">
      <div class="cover"></div>
      <el-input :maxlength="50" :placeholder="design.componentList2[serial].place"></el-input>
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
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
.cover{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
