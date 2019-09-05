<template>
  <div class="air_container">
    <!-- 国内机票标题 -->
    <h2 class="guonei_tikect">
      <i class="iconfont iconfeiji"></i>
      <span>国内机票</span>
    </h2>
    <el-row type="flex" class="main" justify="space-between">
      <!-- 中间表格+广告部分 -->
      <div class="from-wapper">
        <el-row type="flex" class="from_header">
          <!-- 表格tab栏 -->
          <span
            v-for="(val,index) in ['单程','往返']"
            :key="index"
            @click="handleCurret(index)"
            :class="{active: current === index}"
          >
            <i class="iconfont icondancheng" v-show="current === 0">
              <i class="iconfont iconshuangxiang" v-show="current === 1"></i>
            </i>
            {{val}}
          </span>
        </el-row>

        <!-- 单程表格部分 -->
        <singelFrom v-show="current===0"></singelFrom>
        <!-- 往返部分不用做 -->
      </div>

      <!-- 右边广告图 -->
      <div class="banner">
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt />
      </div>
    </el-row>

  <!-- 中间3个信息部分 -->
    <el-row class="info">
      <el-col :span="8" class="content">
        <i class="iconfont iconweibiaoti-_huabanfuben" style="color: rgb(64, 158, 255);font-size:20px"></i>
        <span>100%航协认证</span>
      </el-col>
      <el-col :span="8"  class="content">
         <i class="iconfont iconbaozheng" style="color: green;font-size:20px"></i>
        <span>出行保证</span>
      </el-col>
      <el-col :span="8"  class="content">
         <i class="iconfont icondianhua" style="color: rgb(64, 158, 255);font-size:20px"></i>
        <span> 7x24小时服务</span>
      </el-col>
    </el-row>


    <!-- 国内机票标题 -->
    <h2 class="tejia_tikect">
      <i class="iconfont icontejiajipiao"></i>
      <span>特价机票</span>
    </h2>
  </div>
</template>

<script>
import singelFrom from "@/components/air/airFrom";
export default {
  data() {
    return {
      // tab栏当前页面
      current: 0
    };
  },

  // 注册组件
  components: {
    singelFrom
  },

  methods: {
    handleCurret(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.air_container {
  width: 1000px;
  margin: 0 auto;

  .guonei_tikect {
    margin: 15px 0;
    color: orange;
    font-size: 20px;
    font-weight: 400;

    i {
      font-size: 20px;
    }
  }
  .main {
    width: 1000px;
    .from-wapper {
      width: 360px;
      height: 350;
      background-color: #fff;
      border: 1px solid #eee;
      .from_header {
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        span {
          width: 50%;
          height: 100%;
          font-size: 16px;
          background: #eee;
          box-sizing: border-box;
          border-top: 3px solid #eee;
          &:hover {
            cursor: pointer;
          }
        }
        .active {
          border-top-color: orange;
          background: #fff;
        }
      }
    }
  }
  
  .info {
    padding:10px 0;
    margin: 15px 0;
    border: 1px solid #ddd;
    background: #f5f5f5;
    text-align: center;
     
    .content{
      border-right: 1px solid #ddd;
      line-height: 38px;
      font-size: 20px;
      &:last-child{
        border-right:0
      }
    }
  }
  .tejia_tikect {
    margin-bottom: 15px;
    color: #409eff;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>