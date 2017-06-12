<template>
  <div class="udLabel">

    <el-col :span="8">
      <div class="cover"></div>
      <div class="label" v-html="label"></div>
    </el-col>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        label: "一二："
      }
    },
    methods:{
    }
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
