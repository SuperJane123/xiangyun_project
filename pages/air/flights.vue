<template>
  <div class="container">
    <el-row>
      <!-- 过滤器 -->

      <!-- 航班信息标题 -->
      <FlightsHeader></FlightsHeader>
      <!-- 航班信息内容 -->
      <FlightsItems />

      <!-- 右侧航班历史记录 -->
      <div class="aside"></div>
    </el-row>
  </div>
</template>

<script>
import FlightsHeader from "@/components/air/flightsHeader";
import FlightsItems from "@/components/air/flightsItems";
export default {
  data() {
    return {};
  },
  // 注册组件
  components: {
    FlightsHeader,
    FlightsItems
  },

  
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}



.aside {
    width: 240px;
}
</style>
