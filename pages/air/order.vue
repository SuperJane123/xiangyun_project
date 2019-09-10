<template>
  <div class="order">
    <el-row type="flex" justify="space-between">
      <!-- 左边订单表格 -->
      <OrderForm class="orderFrom" :data="infoData"/>

      <!-- 右侧栏 -->
      <OrderAside/>
    </el-row>
  </div>
</template>

<script>
// 引入组件
import OrderForm from "@/components/air/orderForm";
import OrderAside from '@/components/air/orderAside'
export default {
  data(){
    return {
      // 订单页面的数据总对像
      infoData:{}
    }
  },
  components: {
    OrderForm,
    OrderAside
  },

  mounted() {
    const { id, seat_xid } = this.$route.query;
    // 获取订单详情信息
    this.$axios({
      url: "/airs/" + id,
      params: {
        seat_xid
      }
    }).then(res => {
      console.log(res);
      this.infoData = res.data;
    });
  }
};
</script>

<style lang="less" scoped>
.order {
  width: 1000px;
  margin: 20px auto;
  .orderFrom {
    width: 590px;
  }
  
}
</style>