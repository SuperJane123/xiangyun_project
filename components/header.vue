<template>
  <div class="container">
    <!-- logo -->
    <el-row type="flex" class="header" justify="space-between">
      <div class="logo">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
      </div>

      <!-- 导航 -->
      <el-row type="flex" class="nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <!-- 登陆注册 -->
      <div class="login" v-if="!$store.state.user.loginFrom.token">
        <nuxt-link to="/user/login">登陆&nbsp;/&nbsp;注册</nuxt-link>
      </div>
      <!-- 登陆成功后显示的头像 -->

      <el-dropdown v-else class="Dropdown">
        <span class="el-dropdown-link">
          <nuxt-link to>
            <img :src="`http://127.0.0.1:1337${loginFrom.user.defaultAvatar}`" alt class />
          </nuxt-link>
          {{loginFrom.user.nickname}}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="handleLoginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    loginFrom() {
      return this.$store.state.user.loginFrom;
    }
  },

  methods:{
    handleLoginOut(){
      // 清除store中的用户信息
      this.$store.commit('user/clearUserInfo')
    }
  },
};
</script>


<style lang="less" scoped>
.container {
  width: 100%;
  // border-bottom: 1px solid #eee;
  box-shadow: 2px 2px 3px #eee;
  box-sizing: border-box;

  .header {
    margin: 0 auto;
    width: 1000px;
    height: 60px;
    line-height: 60px;

    .logo {
      img {
        display: block;
        margin-top: 9px;
        width: 156px;
        height: 42px;
      }
    }

    .nav {
      flex: 1;
      margin: 0 20px;

      a {
        padding: 0 20px;

        &:hover {
          color: #409eff;
          border-bottom: 5px solid #409eff;
        }
      }
      // 该class是nuxt会自动去匹配的nuxt-link的to的值，如果url和to的值相等会自动加上上面的class
      .nuxt-link-exact-active {
        background-color: #409eff;
        color: #fff;

        &:hover {
          color: #fff;
        }
      }
    }
    .login {
      font-size: 14px;
      color: #666;
      a {
        display: inline;

        &:hover {
          color: #409eff;
          text-decoration: underline;
        }
      }
    }
  }
}

.Dropdown {
  img {
    width: 36px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #fff;
    box-sizing: border-box;

    &:hover {
      border: 1px solid #409eff;
    }
  }
}

</style>