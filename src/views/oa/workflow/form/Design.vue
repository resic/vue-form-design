<template>
  <div class="designContent clearfix">
    <!--占位盒子，模拟菜单-->
    <!--表单控件组件盒子-->
    <form-components v-show="true"></form-components>
    <!--用户自定义表单盒子-->
    <form-design v-show="design.showName==='design'"></form-design>
    <!--右侧控件信息盒子-->
    <control-tools v-show="design.showName==='design'"></control-tools>
    <!--用户预览表单盒子-->
    <form-parser v-show="design.showName==='preview'"></form-parser>
  </div>
</template>

<script>
  //表单元素组件
  import FormComponents from "@/views/oa/workflow/form/formcomponents/udform/formComponents.vue"
  //用户自定义表单组件
  import FormDesign from "@/views/oa/workflow/form/formcomponents/udform/FormDesign.vue"
  //表单组件控制信息组件
  import ControlTools from "@/views/oa/workflow/form/formcomponents/control/ControlTools.vue"
  //用户预览表单组件（表单解析器）
  import FormParser from "@/views/oa/workflow/form/formcomponents/parser/formParser.vue"
  export default {
    name: 'design',
    data () {
      return {}
    },
    computed:{
      design(){
        return this.$store.state.design
      }
    },
    methods: {},
    components: {
      FormComponents,
      FormDesign,
      ControlTools,
      FormParser
    }
  }
</script>
<style >

  a{
    text-decoration: none;
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
  i, s {
    font-style: normal;
    text-decoration: none;
  }
  .designContent{

  }
  .designContent .fl{
    box-sizing: border-box;
    min-height: 655px;
  }
  .el-col {
    min-height: 60px;
    border: 1px dashed #999;
    border-radius: 5px;
    padding: 10px;
    position: relative;
  }

</style>
