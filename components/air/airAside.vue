<template>
  <div class="aside">
    <!-- 服务信息部分 -->
    <div class="service">
      <el-row class="icont">
        <el-col :span="8">
          <i class="iconfont iconweibiaoti-_huabanfuben" style="color: rgb(64, 158, 255)"></i>
          <p>航协认证</p>
        </el-col>
        <el-col :span="8">
          <i class="iconfont iconbaozheng" style="color: green"></i>
          <p>出行保证</p>
        </el-col>
        <el-col :span="8">
          <i class="iconfont icondianhua" style="color: rgb(64, 158, 255)"></i>
          <p>7x24</p>
        </el-col>
      </el-row>
      <p class="free_tel">免费客服电话：4006345678转2</p>
    </div>

    <!-- 历史查询部分 -->
    <div class="history">
      <h3>历史查询</h3>
      <nuxt-link
        v-for="(item,index) in flightsHistroy" :key="index"
        :to="`/air/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`"
>
        <el-row
          class="choose_info"
          type="flex"
          align="middle"
          justify="sapce-between"
        >
          <el-col :span="19">
            <span>{{item.departCity}}-{{item.destCity}}</span>
            <p>{{item.departDate}}</p>
          </el-col>
          <el-col :span="5">
            <span class="choose_button">选择</span>
          </el-col>
        </el-row>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flightsHistroy: []
    };
  },

  mounted() {
    //  获取本地数据
    this.flightsHistroy = JSON.parse(localStorage.getItem("flightsData"));
  }
};
</script>

<style lang="less" scoped>
.aside {
  .service {
    width: 238px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 12px;
    .icont {
      padding: 10px 0;
      i {
        font-size: 40px;
      }
    }
    .free_tel {
      line-height: 32px;
      font-size: 14px;
      background: #f6f6f6;
    }
  }
  .history {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    h3 {
      font-weight: normal;
      font-size: 16px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    .choose_info {
      padding: 10px 0;
      font-size: 14px;
      cursor: pointer;
      border-bottom: 1px dashed #ddd;
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #666;
      }
      .choose_button {
        display: block;
        width: 44px;
        line-height: 21px;
        background-color: orange;
        color: #fff;
        font-size: 12px;
        text-align: center;
        border-radius: 5px;
      }
    }
  }
}
</style>