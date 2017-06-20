<template>
  <div class=" container clearfix">
    <!--表单控件组件盒子-->
    <form-components ></form-components>
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
  import FormComponents from "@/components/form/formComponents.vue"
  //用户自定义表单组件
  import FormDesign from "@/components/form/FormDesign.vue"
  //表单组件控制信息组件
  import ControlTools from "@/components/control/ControlTools.vue"
  //用户预览表单组件（表单解析器）
  import FormParser from "@/components/parser/formParser.vue"
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
    },
    mounted(){
      console.log(this.design);
    }
  }
</script>
<style scoped>
  .container .fl {
    box-sizing: border-box;
    min-height: 655px;
  }

</style>
