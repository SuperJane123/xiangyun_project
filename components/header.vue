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
      <div class="login">
        <nuxt-link to="/user/login">登陆/注册</nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.container {
  width: 100%;
  border-bottom: 1px solid #eee;
  box-shadow: 2px 2px 3px #eee;
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
      .nuxt-link-exact-active {
          background-color: #409eff;
          color: #fff;

          &:hover {
              color: #fff
          }
      }
     
    }
  }
}

// 该class是nuxt会自动去匹配的nuxt-link的to的值，如果url和to的值相等会自动加上上面的class
 
</style>