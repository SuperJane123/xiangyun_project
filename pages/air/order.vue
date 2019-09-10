<template>
  <div class="order">
    <el-row type="flex" justify="spce-between">
      <!-- 左边订单表格 -->
      <OrderForm class="orderFrom" />

      <!-- 右侧栏 -->
      <div class="aside"></div>
    </el-row>
  </div>
</template>

<script>
// 引入组件
import OrderForm from "@/components/air/orderForm";
export default {
  components: {
    OrderForm
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