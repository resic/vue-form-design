<template>
  <div id="hover">
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
.content{
  width: 100%;
  height: 38px;
  border: 2px dashed red;
  box-sizing: border-box;
}
  .el-col{
    border: none;
  }
</style>
