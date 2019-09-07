<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 过滤器 -->

      <!-- 航班信息标题 -->
      <div>
      <FlightsHeader />
      <!-- 航班信息内容 -->
      <FlightsItems v-for="(item,index) in flightsList.flights" 
      :key="index"
      :data="item"/>
      </div>

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
    return {
        flightsList: {}
    };
  },
  // 注册组件
  components: {
    FlightsHeader,
    FlightsItems
  },
  mounted() {
    //   获取路由地址上的参数
    //   console.log(this.$route)
    // 获取机票列表数据
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightsList = res.data
      console.log(this.flightsList)
    });
  }
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
