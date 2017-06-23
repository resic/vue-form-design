<template>
  <div class="fpTextarea">
   <el-col :span="design.componentList2[serial].longer">
     <el-input type="textarea" :rows="4" v-model="value" resize="none" style="height:96px;" :placeholder="design.componentList2[serial].place"></el-input>
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
</style>
