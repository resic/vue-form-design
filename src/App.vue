<template>
  <div id="app">
 <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {

    },
    components: {}
  }
</script>

<style>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
div{
  box-sizing: border-box;
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
a{
  text-decoration: none;
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
  #app{
    position: absolute;
    top:0;
    bottom:0;
    width: 100%;
  }


  ::-webkit-scrollbar {
    width: 5px;
    height: 4px;
    background-color: #F5F5F5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background: #fff ;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color:rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb:hover {
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
  }
</style>
