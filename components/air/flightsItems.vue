<template>
  <div class="flights_content">
    <!-- 显示的机票信息 -->
    <div class="flights_item">
      <el-row class="flights_info" type="flex" justify="space-between" align="middle">
        <el-col :span="6">东航 MU5316</el-col>
        <el-col :span="12">
          <el-row type="flex" justify="space-between">
            <el-col :span="8" class="airport">
              <strong>20:30</strong>
              <span>白云机场T1</span>
            </el-col>
            <el-col :span="8" class="air_time">
              <span>2时20分</span>
            </el-col>
            <el-col :span="8" class="airport">
              <strong>22:50</strong>
              <span>虹桥机场T2</span>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6" class="air_price">
          ￥
          <span>810</span>起
        </el-col>
      </el-row>
      <!-- 隐藏的算机票座位信息 -->
      <el-row class="fights_record" 
      type="flex"
       justify="space-between" 
       align="middle"
       v-show="isShow">
        <el-col :span="4">低价推荐</el-col>
        <el-col :span="20">
          <el-row class="fights_sell" type="flex" justify="space-between" align="middle">
            <el-col :span="16" class="air_compony">
              <span>经济舱</span> | 上海一诺千金航空服务有限公司
            </el-col >
            <el-col :span="5" class="price">￥1345</el-col>
            <el-col :span="3" class="choose">
              <el-button type="warning" size="small" class="choose_button">选定</el-button>
              <p>剩余：83</p>
            </el-col>
          </el-row>
          <el-row class="fights_sell" type="flex" justify="space-between" align="middle">
            <el-col :span="16" class="air_compony">
              <span>经济舱</span> | 上海一诺千金航空服务有限公司
            </el-col>
            <el-col :span="5" class="price">￥1345</el-col>
            <el-col :span="3" class="choose">
              <el-button type="warning" size="small" class="choose_button">选定</el-button>
              <p>剩余：83</p>
            </el-col>
          </el-row>
          <el-row class="fights_sell" type="flex" justify="space-between" align="middle">
            <el-col :span="16" class="air_compony">
              <span>经济舱</span> | 上海一诺千金航空服务有限公司
            </el-col>
            <el-col :span="5" class="price">￥1345</el-col>
            <el-col :span="3" class="choose">
              <el-button type="warning" size="small" class="choose_button">选定</el-button>
              <p>剩余：83</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false
        }
    }
};
</script>

<style lang="less">
.flights_content {
  width: 745px;
  text-align: center;
  font-size: 14px;
  .flights_item {
    border: 1px solid #ddd;
    .flights_info {
      padding: 15px;
      .airport {
        strong {
          display: block;
          font-weight: normal;
          font-size: 24px;
        }
        > span {
          font-size: 12px;
          color: #999;
        }
      }
      .air_time {
        > span {
          display: inline-block;
          border-bottom: 1px solid #eee;
          font-size: 14px;
          color: #999;
          padding: 10px 0;
        }
      }
      .air_price {
        > span {
          font-size: 24px;
          color: orange;
        }
      }
    }
    .fights_record {
        padding: 0 20px;
      width: 100%;
      border-top: 1px solid #eee;
      background: #f6f6f6;
      .fights_sell {
          height: 74px;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          
        .air_compony {
          font-size: 12px;
          text-align: left;
          > span {
            color: #008000;
          }
        }
        .price {
          font-size: 20px;
          text-align: left;
          color: #ffa500;
        }
        .choose {
          color: #fff;
          .choose_button{
              padding: 7px 15px;
              width: 73px;
              margin-bottom: 5px;
          }
          > p {
            color: #666;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>