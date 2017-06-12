<template>
  <div class="udTextarea">
   <el-col :span="8">
     <div class="cover"></div>
     <el-input type="textarea" :autosize="{minRows:2}" placeholder="多行文本框"></el-input>
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
