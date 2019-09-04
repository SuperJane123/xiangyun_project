<template>
  <div class="container">
    <el-row type="flex" class="main" justify="center" align="middle">
      <!-- 表单 -->
      <div class="from-wapper">
        <!-- 表单头部tab -->
        <el-row type="flex" justify="center" class="tab" >
          <span
            v-for="(item,index) in ['登陆','注册']"
            :key="index"
            @click="current = index"
            :class="{active:current === index}"
          >{{item}}</span>
        </el-row>

       

        <!-- 登陆组件功能 -->
        <loginFrom v-show="current===0"></loginFrom>
      </div>
    </el-row>
  </div>
</template>

<script>
import loginFrom from "@/components/user/loginFrom";
export default {
  data() {
    return {
      current: 0
    };
  },

  // 注入组件
  components: {
    loginFrom
  }
};
</script>

<style lang="less" scoped>
.container {
  min-width: 1000px;
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  height: 700px;
  .main {
    width: 1000px;
    height: 100%;
    margin: 0 auto;

    .from-wapper {
      width: 400px;
      margin: 0 auto;
      background-color: #fff;
      .tab {
        span {
          display: block;
          width: 50%;
          height: 50px;
          color: #666;
          font-weight: 700;
          background-color: #eee;
          text-align: center;
          line-height: 50px;
          border-top: 2px solid #eee;
        }
        .active {
          border-top-color: orange;
          background-color: #fff;
          color: orange;
        }
      }
    }
  }
}
</style>
