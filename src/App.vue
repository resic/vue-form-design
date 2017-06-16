<template>
  <div id="app">
    <div class="header">
      <div class="title">睿达智能</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {},
    components: {}
  }
</script>

<style>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset, img {
    border: 0
  }

  address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal
  }

  ol, ul {
    list-style: none
  }

  caption, th {
    text-align: left
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal
  }

  abbr, acronym {
    border: 0
  }

  .clearfix:after {
    content: " ";
    height: 0;
    line-height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }

  .clearfix {
    zoom: 1; /* 针对IE浏览器设置*/
  }

  /*i标签，s标签初始化*/
  i, s {
    font-style: normal;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
  }

  /*左右浮动类名*/
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  /*文档对齐方式类名*/
  .tl {
    text-align: left;
  }

  .tc {
    text-align: center;
  }

  .tr {
    text-align: right;
  }

  .header {
    width: 100%;
    background-color: #199F93;
  }

  .title {
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    color: #fff;
    font-weight: 700;
  }

  .el-col {
    min-height: 59px;
    border: 1px dashed #999;
    border-radius: 5px;
    padding: 10px;
    position: relative;
  }
</style>
