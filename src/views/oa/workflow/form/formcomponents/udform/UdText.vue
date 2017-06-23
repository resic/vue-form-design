<template>
  <div class="udText">
    <el-col :span="design.componentList2[serial].longer">
      <div class="cover" :serial="serial" title="点击设置控件信息"></div>
      <el-input :maxlength="50" v-model="value" :placeholder="design.componentList2[serial].place"></el-input>
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
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
