<template>
  <div class="order">
    <el-row type="flex" justify="space-between">
      <!-- 左边订单表格 -->
      <OrderForm class="orderFrom" />

      <!-- 右侧栏 -->
      <OrderAside :data="$store.state.order.infodata"/>
    </el-row>
  </div>
</template>

<script>
// 引入组件
import OrderForm from "@/components/air/orderForm";
import OrderAside from '@/components/air/orderAside'
export default {
  components: {
    OrderForm,
    OrderAside
  },

 
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