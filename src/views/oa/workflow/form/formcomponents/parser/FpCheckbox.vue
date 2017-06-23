<template>
  <div class="fpCheckbox">
 <el-col :span="design.componentList2[serial].longer">
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

</style>
