<template>
  <div class="components fl" id="components">
    <div class="caption">表单控件</div>
    <div class="content clearfix">
      <div class="item" v-for="(item,index) in design.componentList1"  :draggable="true" v-drag :componentKey="item.componentKey">
        <span v-html="item.name"></span>
        <i :class="item.classI"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    computed:{
      design(){
        return this.$store.state.design
      }
    }
  }
</script>
<style scoped>
  .caption {
    background-color: #BEE4D1;
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding-left: 40px;
    line-height: 40px;
    box-sizing: border-box;
  }

  .content {
    padding-top: 10px;
  }

  .item {
    height: 40px;
    box-sizing: border-box;
    border: 1px dashed #999;
    padding: 8px 10px;
    background-color: #F5F5F5;
    width: 46%;
    float: left;
    margin: 5px 2%;
    cursor: pointer;
  }

  .item i {
    float: right;
    margin-top: 3px;
  }

  #components {
    width: 20%;
  }
</style>
