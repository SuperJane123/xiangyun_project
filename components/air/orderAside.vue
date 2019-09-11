<template>
  <div class="aside">
    <div class="air_info">
      <el-row type="flex" justify="space-between" class="info_top">
        <strong>{{data.dep_date}}</strong>
        <span>{{data.org_city_name}} - {{data.dst_city_name}}</span>
      </el-row>
      <el-row type="flex" justify="space-between" class="info_foot">
        <el-col :span="5">
          <p>{{data.dep_time}}</p>
          <span>{{data.org_airport_name}}</span>
        </el-col>
        <el-col :span="14">
          <span>--- {{rangeTime}} ---</span>
          <span>{{data.airline_name}}{{data.flight_no}}</span>
        </el-col>
        <el-col :span="5">
          <p>{{data.arr_time}}</p>
          <span>{{data.dst_airport_name}}</span>
        </el-col>
      </el-row>
    </div>
    <div class="order_info">
      <el-row class="order_item" type="flex" justify="space-between">
        <span>订单总价</span>
        <span>金额</span>
        <span>数量</span>
      </el-row>
      <el-row class="order_item" type="flex" justify="space-between">
        <span>成人机票</span>
        <span>¥{{data.seat_infos.org_settle_price}}</span>
        <span>x1</span>
      </el-row>
      <el-row class="order_item" type="flex" justify="space-between">
        <span>机建+燃油</span>
        <span>¥{{data.airport_tax_audlet}}/人/单程</span>
        <span>x1</span>
      </el-row>
      <el-row class="order_item" type="flex" justify="space-between" align="middle">
        <span>应付总额：</span>

        <span class="price">￥{{this.$store.state.order.allPrice}}</span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

  // 这里传值推荐用父传子，因为使用vuex需要延迟获取数据的时间，导致跳转到订单页面时，右侧的订单详情数据无法及时更新
  props: {
    data:{
      type: Object,
      default:{
        seat_infos:{}
      }
    }
  },
  data() {
    return {
      // data: {
      //   seat_infos: {}
      // }
    };
  },

  computed: {
    // 计算到达时间与出发的相差时间
   rangeTime() {
      if(!this.data.dep_time) return
        const dep = this.data.dep_time.split(":");
        const dst = this.data.arr_time.split(":");

        // 要判抵达的时间是否是第二天，如果是，需要+24小时
        if (dst[0] < dep[0]) {
          dst[0] += 24;
        }

        // 算出出发和到达的总分钟,记得要做隐式转换！！！
        const depMin = dep[0] * 60 + +dep[1];
        const dstMin = dst[0] * 60 + +dst[1];
        // 相减
        const rangeMin = dstMin - depMin;
        const hour = Math.floor(rangeMin / 60)
        const min =  rangeMin % 60
      return `${hour}时${min}分`;
    }
   
  },

  // mounted() {
  //   setTimeout(() => {
  //     this.data = this.$store.state.order.infodata;
  //     console.log(this.data);
  //   }, 10);
  // }
};
</script>

<style lang="less" scoped>
.aside {
  width: 350px;
  height: -webkit-fit-content;
  border: 1px solid #ddd;
  .air_info {
    padding: 15px;
    border-bottom: 1px dashed #ddd;
    .info_top {
      margin-bottom: 10px;
      strong {
        font-weight: normal;
        font-size: 16px;
      }
      > span {
        font-size: 14px;
      }
    }
    .info_foot {
      text-align: center;
      p {
        font-size: 22px;
      }
      span {
        display: block;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .order_info {
    font-size: 14px;
    color: #666;
    .order_item {
      padding: 10px 15px;
      border-bottom: 1px dashed #ddd;
      &:last-child {
        border-bottom: 0;
      }
      .price {
        font-size: 28px;
        color: #ffa500;
      }
    }
  }
}
</style>