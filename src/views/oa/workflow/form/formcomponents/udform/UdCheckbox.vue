<template>
  <div class="udCheckbox">
 <el-col :span="design.componentList2[serial].longer">
   <div class="cover" :serial="serial" title="点击设置控件信息"></div>
   <el-checkbox-group v-model="value">
     <el-checkbox v-for="(item,index) in design.componentList2[serial].items" :key="index"  :label="item"></el-checkbox>
   </el-checkbox-group>
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
    },
    props:["serial"],
    computed:{
      design(){
        return this.$store.state.design
      },
      value:{
        get(){
          return this.$store.state.design.componentList2[this.serial].value
        },
        set(value){
          this.$store.commit({
            type:"updateValue",
            ele:"value",
            value:value,
            index:this.serial
          })
        }
      }
    }

  }
</script>
<style scoped>
.el-checkbox-group{
  padding:6px 0 6px 10px;
}
.cover{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  cursor: pointer;
  z-index: 10;
}
</style>
