<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <div class="left">
      <!-- 过滤器 -->
    <Screen></Screen>
      <!-- 航班信息标题 -->
      <div>
        <FlightsHeader />
        <!-- 航班信息内容 -->
        <FlightsItems v-for="(item,index) in dataList" :key="index" :data="item" />
        <!-- 分页标签 -->
        <!-- size-change 切换页面数时调用的函数 
        current-change  点击当前页数时调用函数
        -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
</div>
      <!-- 右侧航班历史记录 -->
      <div class="aside"></div>
    </el-row>
  </div>
</template>

<script>
import Screen from '@/components/air/screen'
import FlightsHeader from "@/components/air/flightsHeader";
import FlightsItems from "@/components/air/flightsItems";

export default {
  data() {
    return {
        dataList: [],
        // 当前显示的页面数
        pageSize: 5,
        // 当前页面
        pageIndex: 1,
        // 总的记录数
        total: 0,
        // 这是一个总数据
      flightsList: {}
    };
  },



  // 注册组件
  components: {
    FlightsHeader,
    FlightsItems,
    Screen
  },



methods: {
     handleSizeChange(val) {
    console.log(`每页 ${val} 条`);   //比如每页 10 条
    this.pageSize = val
    // 切换页数时显示的数据
    this.dataList = this.flightsList.flights.slice(0,val)
  },
  handleCurrentChange(val) {
    console.log(`当前页: ${val}`);  //当前页面1
 
    // 0,5 (1-1)*5,5
    // 5,10(2-1)*5
    // 10,15(3-1)*5
    this.pageIndex = val
    this.dataList = this.flightsList.flights.slice((this.pageIndex-1)*this.pageSize,
    this.pageIndex*this.pageSize)
    
  },
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
      this.flightsList = res.data;
    //   分页总页数
    this.total = this.flightsList.flights.length

        //   复制给另一个数组，这是显示当前页面数据的数组
    this.dataList = this.flightsList.flights.slice(0,this.pageSize)

    });
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

.aside {
  width: 240px;
}
</style>
