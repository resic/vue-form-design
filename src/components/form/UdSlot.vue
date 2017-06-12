<template>
  <div class="slot">
    <el-col :span="8">
      <div class="content"></div>
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .content {
    height: 38px;
    width: 100%;
    box-sizing: border-box;
    border: 2px dashed red;
  }
  .el-col{
    border: none;

  }
</style>
