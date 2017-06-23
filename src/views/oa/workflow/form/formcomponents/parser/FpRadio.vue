<template>
  <div class="fpRadio">
  <el-col :span="design.componentList2[serial].longer">
    <el-radio-group v-model="value"  >
      <el-radio v-for="(item,index) in design.componentList2[serial].items" :key="index" :label="item" >{{item}}</el-radio>
    </el-radio-group>
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
.el-radio-group{
  padding:9px 0 7px 10px ;
}

</style>
