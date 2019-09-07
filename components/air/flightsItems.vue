<template>
  <div class="flights_content">
    <!-- 显示的机票信息 -->
    <div class="flights_item">
      <el-row class="flights_info" 
      type="flex"
       justify="space-between" 
       align="middle"
       @click="isShow = !isShow"
       >
        <el-col :span="6">{{data.airline_name}} {{data.flight_no}}</el-col>
        <el-col :span="12">
          <el-row type="flex" justify="space-between">
            <el-col :span="8" class="airport">
              <strong>{{data.dep_time}}</strong>
              <span>{{data.org_airport_name}}{{data.org_airport_quay}}</span>
            </el-col>
            <el-col :span="8" class="air_time">
              <!-- 抵达时间-出发时间 -->
             
              <span>{{rangeTime}}</span>
            </el-col>
            <el-col :span="8" class="airport">
              <strong>{{data.arr_time}}</strong>
              <span>{{data.dst_airport_name}}{{data.dst_airport_quay}}</span>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6" class="air_price">
          ￥
          <span>{{data.base_price}}</span>起
        </el-col>
      </el-row>
      <!-- 隐藏的算机票座位信息 -->
      <el-row
        class="fights_record"
        type="flex"
        justify="space-between"
        align="middle"
        v-show="isShow"
      >
        <el-col :span="4">低价推荐</el-col>
        <el-col :span="20">
          <el-row class="fights_sell" type="flex" justify="space-between" align="middle" v-for="(item,index) in data.seat_infos" :key="index">
            <el-col :span="16" class="air_compony">
              <span>{{item.name}}</span> | {{item.supplierName}}
            </el-col>
            <el-col :span="5" class="price">¥{{item.settle_price}}</el-col>
            <el-col :span="3" class="choose">
              <el-button type="warning" size="small" class="choose_button">选定</el-button>
              <p>剩余：{{item.discount}}</p>
            </el-col>
          </el-row>
          <!-- <el-row class="fights_sell" type="flex" justify="space-between" align="middle">
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
          </el-row> -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  // 接收父组件的参数
  props: {
    // data表示组件可以接收的属性
    data: {
      // 接收数据的类型
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isShow: true
    };
  },

  computed: {
    rangeTime() {
       
     
        // 获取出发的时间
        const dep = this.data.dep_time.split(':')
        // 获取抵达时间
        const dst = this.data.arr_time.split(':')
         // 要判断如果抵达时间小于了出发时间时，要补加24个小时
         if(dst[0] < dep[0]){
             dst[0] += 24
         }
        // 两个时间相差的分钟数
        const rangeMin = (dst[0] * 60 + +dst[1]) - (dep[0] * 60 + +dep[1])
        const hour = Math.floor(rangeMin / 60)
        const min = rangeMin % 60
        return hour +'时'+ min + '分'
      
    }
  },

};
</script>
 <!-- 22:50 - 20:30
 (22*60 + 50 )-  (20*60 + 30 ) =-->

<style lang="less">
.flights_content {
  width: 745px;
  text-align: center;
  font-size: 14px;
  .flights_item {
    border: 1px solid #ddd;
    .flights_info {
        cursor: pointer;
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
          .choose_button {
            padding: 7px 15px;
            width: 73px;
            margin-bottom: 5px;
            cursor: pointer;
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