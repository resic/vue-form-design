<template>
  <div class="home">
    <div class="header">
      <div class="headerWrap">
        <div class="logo">
          <a href="" class="logoA">睿达智能</a>
          <div class="toggleMenu">
            <i class="fa fa-bars"></i>
          </div>
        </div>
        <div class="rightNav">
          <el-dropdown>
            <div class="personWrap clearfix">
              <div class="pic fl">
                <!--<img src="" alt="">-->
              </div>
              <div class="personInfo fl el-dropdown-link">
                <span class="personName">苏雪伟</span>
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </div>
            </div>
            <el-dropdown-menu class="personDown" slot="dropdown">
              <el-dropdown-item><router-link to="main"><i class="fa fa-user"></i>个人信息</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="design"><i class="fa fa-gear"></i>修改密码</router-link></el-dropdown-item>
              <el-dropdown-item ><a @click="logout"><i class="fa fa-sign-out"></i>退出登录</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!--<div class="content clearfix">-->
      <!--<div class="navMenu fl">-->
        <!--<el-menu default-active="2" class="verticalMenu">-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
              <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项6</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
          <!--<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>-->
          <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
          <!--<el-submenu index="4">-->
            <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="4-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="4-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
              <!--<el-menu-item index="4-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="4-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="4-4-1">选项6</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
          <!--<el-menu-item index="5"><i class="el-icon-menu"></i>导航二</el-menu-item>-->
          <!--<el-menu-item index="6"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
        <!--</el-menu>-->
      <!--</div>-->

        <router-view></router-view>

    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    methods:{
      logout(){
        this.$router.push({path:"login"})
      }
    }
  }
</script>
<style scoped>
  .home{
    position: absolute;
    top:0;
    bottom:0;
    width: 100%;
    overflow: hidden;
  }
  /*头部样式*/
  .header {
    width: 100%;
    height:70px;
    box-sizing: border-box;
    border-bottom: 5px solid #1AA094;
    background-color: #fff;
  }
  .header .headerWrap{
    width: auto;
    margin:0 20px;
    position: relative;
  }
  /*左侧logo字符，菜单切换按钮*/
  .logo {
    width: 180px;
    height:70px;
    position: relative;
  }
  .logoA{
    color: #333;
    line-height: 70px;
    font-size: 22px;
  }
  .toggleMenu{
    position: absolute;
    cursor: pointer;
    z-index: 19940201;
    left: 200px;
    color: #fff;
    text-align: center;
    width: 30px;
    height: 30px;
    background-color: #1AA094;
    line-height: 30px;
    top: 25%;
  }
  /*右侧下拉个人信息及菜单*/
  .rightNav{
    height: 70px;
    position: absolute;
    top: 0;
    right:0;
  }
  .personWrap{
    width: 120px;
    height: 70px;
    cursor: pointer;
  }
  .personWrap .pic{
    width: 40px;
    height: 40px;
    margin: 15px 5px;
    border-radius: 20px;
    background-color: #999;
  }

  .personInfo {
    width: 70px;
    height: 70px;
    line-height: 70px;
    color: #999;
  }
.personDown a{
  display: inline-block;
  height:100%;
  color: #999;
}
  .personDown a i{
    padding-right: 5px;
  }
  .content{
    display: flex;
  }
  /*垂直导航栏*/
.navMenu{
  width: 230px;
  min-height: 665px;
}
.verticalMenu{
  height:100%;
}
  .rView{
    flex:1;
    background-color: #999;
  }
</style>
