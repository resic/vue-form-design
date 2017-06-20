<template>
  <div class="ctLabel">
    <el-form ref="form" label-width="100px">
      <div class="info" @mouseenter="change" @mouseleave="ret">
        控件使用说明
        <ul v-show="bur===1">
          <li>1.可通过调整控件长度控制所选组件长度</li>
          <li>2.标签名称字数限制最大为20个字</li>
        </ul>
      </div>

      <el-form-item label="控件长度">
        <el-input-number v-model="longer" :min="2" :max="24"></el-input-number>
      </el-form-item>
      <el-form-item label="标签名称">
        <el-input :maxlength="20" v-model="label"></el-input>
      </el-form-item>
      <el-form-item label="标签高度">
        <el-radio class="radio" v-model="high" label="low">正常</el-radio>
        <el-radio class="radio" v-model="high" label="tall">高</el-radio>
      </el-form-item>
      <el-form-item label="删除组件">
        <el-button type="danger"  @click="removeComponent">删除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        bur: -1,
      }
    },
    methods: {
      change(){
        this.bur = 1
      },
      ret(){
        this.bur = -1
      },
      removeComponent(){
        this.$store.commit({
          type: "removeArray",
          index: this.serial
        })
      }
    },
    props: ["serial"],
    computed: {
      design(){
        return this.$store.state.design
      },
      longer: {
        get () {
          return this.$store.state.design.componentList2[this.serial].longer
        },
        set (value) {
          this.$store.commit({
            type: "updateValue",
            ele: "longer",
            value: value,
            index: this.serial
          })
        }
      },
      label: {
        get () {
          return this.$store.state.design.componentList2[this.serial].label
        },
        set (value) {
          this.$store.commit({
            type: "updateValue",
            ele: "label",
            value: value,
            index: this.serial
          })
        }
      },
      high:{
        get () {
          return this.$store.state.design.componentList2[this.serial].high
        },
        set (value) {
          this.$store.commit({
            type: "updateValue",
            ele: "high",
            value: value,
            index: this.serial
          })
        }
      }
    }
  }
</script>
<style scoped>
  .info {
    background-color: #dff0d8;
    color: #3c763d;
    margin: 10px 0;
    padding: 5px 10px;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: help;
  }

  ul, li {
    list-style: none;
  }

  li {
    margin: 5px 10px;
  }
</style>
