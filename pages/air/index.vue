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
        <i
          class="iconfont iconweibiaoti-_huabanfuben"
          style="color: rgb(64, 158, 255);font-size:30px"
        ></i>
        <span>100%航协认证</span>
      </el-col>
      <el-col :span="8" class="content">
        <i class="iconfont iconbaozheng" style="color: green;font-size:30px"></i>
        <span>出行保证</span>
      </el-col>
      <el-col :span="8" class="content">
        <i class="iconfont icondianhua" style="color: rgb(64, 158, 255);font-size:30px"></i>
        <span>7x24小时服务</span>
      </el-col>
    </el-row>

    <!-- 国内机票标题 -->
    <h2 class="tejia_tikect">
      <i class="iconfont icontejiajipiao" style="font-size:20px"></i>
      <span>特价机票</span>
    </h2>

    <!-- 图片部分 -->
    <el-row class="PrewImg" type="flex" justify="space-between">
      <el-col :span="6" class="imgInfo" v-for="(item,index) in imgList" :key="index">
       <nuxt-link :to='`/air/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`'>
         <img :src="item.cover" alt />
        <el-row type="flex" justify="space-between" class="textInfo">
          <span style="font-size:14px">{{item.departCity}}-{{item.destCity}}</span>
          <span style="font-size:18px">¥{{item.price}}</span>
        </el-row>
       </nuxt-link>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import singelFrom from "@/components/air/airFrom";
export default {
  data() {
    return {
      // tab栏当前页面
      current: 0,

      // 图片数组
      imgList: []
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
  },
  mounted() {
    this.$axios({
      url: "/airs/sale",
      method: "GET"
    }).then(res => {
      console.log(res);
      if (res.status === 200) {
        const { data } = res.data;
        this.imgList = data;
      }
    });
  }
};
</script>

<style lang="less" scoped>
.air_container {
  width: 1000px;
  margin: 0 auto;

  // 国内机票
  .guonei_tikect {
    margin: 15px 0;
    color: orange;
    font-size: 20px;
    font-weight: 400;

    i {
      font-size: 20px;
    }
  }

  // 中加表单和图片部分
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

  // 三个信息
  .info {
    padding: 10px 0;
    margin: 15px 0;
    border: 1px solid #ddd;
    background: #f5f5f5;
    text-align: center;

    .content {
      border-right: 1px solid #ddd;
      line-height: 38px;
      font-size: 16px;
      &:last-child {
        border-right: 0;
      }
    }
  }
  // 特价机票
  .tejia_tikect {
    margin-bottom: 15px;
    color: #409eff;
    font-size: 20px;
    font-weight: 400;
  }

  // 底部图片
  .PrewImg {
    border: 1px solid #eee;
    padding: 20px 20px;

    margin-bottom: 50px;
    .imgInfo {
      position: relative;
      width: 225px;
      height: 140px;
      overflow: hidden;
      img {
        width: 100%;
      }
      .textInfo {
        padding: 0 15px;
        height: 30px;
        width: 100%;
        line-height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
      }
    }
  }
}
</style>