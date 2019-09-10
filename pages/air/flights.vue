<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <div class="left">
        <!-- 过滤器 -->
        <Screen :data="cacheList" @setFlightsItem="setFlightsItem"></Screen>
        <!-- 航班信息标题 -->
        <div>
          <FlightsHeader />
          <!-- 航班信息内容 -->
          <FlightsItems v-for="(item,index) in dataList" :key="index" :data="item" />
          <div class="empty" v-show="dataList.length === 0">暂无航班信息！</div>
          <!-- 分页标签 -->
          <!-- size-change 切换页面数时调用的函数 
        current-change  点击当前页数时调用函数
          -->
          <el-row type="flex" justify="center" v-show="dataList.length > 0">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </el-row>
        </div>
      </div>
      <!-- 右侧航班历史记录 -->
      <Aside />
    </el-row>
  </div>
</template>

<script>
import Screen from "@/components/air/screen";
import FlightsHeader from "@/components/air/flightsHeader";
import FlightsItems from "@/components/air/flightsItems";
import Aside from "../../components/air/airAside";

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
      flightsList: {
        info: {},
        options: {}
      },

      // 需要一个不会改变的总数据传值给子组件
      cacheList: {
        info: {},
        options: {}
      }
    };
  },

  // 注册组件
  components: {
    FlightsHeader,
    FlightsItems,
    Screen,
    Aside
  },

  methods: {
    // 获取机票数据列表
    init() {
      // 获取机票列表数据
      this.$axios({
        url: "/airs",
        params: this.$route.query
      }).then(res => {
        console.log(res);
        // 这是总数据,里面有四个选项
        this.flightsList = res.data;

        // 这是为了方便给子组件传递数组，并且是不会改变的数据
        this.cacheList = { ...res.data };

        // 赋值给vuex
        this.$store.commit('air/setAirInfo',res.data)

//   分页总页数
        this.total = this.flightsList.flights.length;

        //   复制给另一个数组，这是显示当前页面数据的数组
        this.dataList = this.flightsList.flights.slice(0, this.pageSize);
      });
    },

    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`); //比如每页 10 条
      this.pageSize = val;
      // 切换页数时显示的数据
      this.dataList = this.flightsList.flights.slice(0, val);
    },
    handleCurrentChange(val) {
     // console.log(`当前页: ${val}`); //当前页面1

      // 0,5 (1-1)*5,5
      // 5,10(2-1)*5
      // 10,15(3-1)*5
      this.pageIndex = val;
      this.dataList = this.flightsList.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    },

    // 传值给组件的事件
    setFlightsItem(arr) {
      // 每次点击切换时，还要把页码数切换到第一页
      this.pageIndex = 1;
      // console.log(val)
      this.flightsList.flights = arr;
      this.dataList = this.flightsList.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );

      // 总页数要重新复制
      this.total = this.flightsList.flights.length;
    }
  },

  watch: {
    $route() {
      this.init()
    }
  },

  mounted() {

    // 调用方法获取机票数据列表
    this.init()
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

.empty {
  text-align: center;
  color: #999;
  font-size: 14px;
}
.aside {
  width: 240px;
}
</style>
