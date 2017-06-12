<template>
  <div class="udText">
    <el-col :span="20">
      <div class="cover"></div>
      <el-input :maxlength="50" placeholder="单行文本框"></el-input>
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
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
