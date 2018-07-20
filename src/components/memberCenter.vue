<template>
  <div class="member">
    <el-container>
      <el-aside width="220px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(47,64,80)"
          text-color="#a7b1c2"
          active-text-color="#ffd04b">
          <span class="llx">流量侠</span>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">淘宝APP</template>
            <el-menu-item index="2-1">
              <i class="el-icon-location"></i>
              <span>刷淘宝APP流量</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">移动任务管理</template>
            <el-menu-item index="3-1">
              <i class="el-icon-location"></i>
              <span>移动端普通量</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-location"></i>
              <span>移动端点击量</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">刷京东流量</template>
            <el-menu-item index="4-1">
              <i class="el-icon-location"></i>
              <span>刷手机京东APP流量</span>
            </el-menu-item>
            <el-menu-item index="4-2">
              <i class="el-icon-location"></i>
              <span>刷微信京东流量</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">PC任务</template>
            <el-menu-item index="5-1">
              <i class="el-icon-location"></i>
              <span>刷PC点击量</span>
            </el-menu-item>
            <el-menu-item index="5-2">
              <i class="el-icon-location"></i>
              <span>刷PC普通量</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">账户管理</template>
            <el-menu-item index="6-1">
              <i class="el-icon-location"></i>
              <span>账户验证</span>
            </el-menu-item>
            <el-menu-item index="6-2">
              <i class="el-icon-location"></i>
              <span>修改密码</span>
            </el-menu-item>
            <el-menu-item index="6-3">
              <i class="el-icon-location"></i>
              <span>账户充值</span>
            </el-menu-item>
            <el-menu-item index="6-4">
              <i class="el-icon-location"></i>
              <span>会员转账</span>
            </el-menu-item>
            <el-menu-item index="6-5">
              <i class="el-icon-location"></i>
              <span>安全退出</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MemberCenter',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  height: 1000px;
  background-color: rgb(47,64,80);
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-menu {
  border: none;
}
.el-menu-item, .el-submenu__title {
  height: 46px !important;
}
.el-menu-item:focus, .el-menu-item:hover {
  background-color: rgb(39, 58, 74) !important;
  color: burlywood !important;
}
.el-submenu__title:focus, .el-submenu__title:hover {
  background-color: rgb(39, 58, 74) !important;
  color: burlywood !important;
}
.llx {
  display: inline-block;
  width: 100%;
  background-color: rgb(39, 58, 74);
  color: #fff;
  font-size: 24px;
  line-height: 76px;
}
</style>
