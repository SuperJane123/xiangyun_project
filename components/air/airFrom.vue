<template>
  <div class="single">
    <el-form ref="form" :model="singleForm" label-width="80px">
      <el-form-item label="出发城市">
        <el-autocomplete
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          @select="handleDepartSelect"
          style="width: 100%"
          v-model="singleForm.departCity"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          @select=" handleDestSelect"
          style="width: 100%"
          v-model="singleForm.destCity"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="出发时间">
        <el-date-picker
          type="date"
          :placeholder="time"
          style="width: 100%"
          v-model="singleForm.departDate"
          @change="handledepartDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="handelSearch">
          <i class="el-icon-search"></i> 搜索
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import monent from "moment";
export default {
  data() {
    const value = new Date();
    return {
      singleForm: {
        departCity: "", //出发城市
        departCode: "", //出发城市代码
        destCity: "", //目标城市
        destCode: "", //目标城市代码
        departDate: "" //日期
      },
      time: ""
    };
  },

  methods: {
    // 出发城市
    // 这是输入时就会出发的函数，
    // cb就是callback函数 返回的数据是数组类型，里面是对象，并且需要包含value属性
    queryDepartSearch(val, cb) {
      if (!val) {
        cb([]);
        return;
      }
      // this.singleForm.departCity = val
      //   console.log(val);
      //   请求出发城市数据
      this.$axios({
        url: "/airs/city",
        method: "GET",
        params: { name: val }
      }).then(res => {
        // console.log(res)
        if (res.status === 200) {
          const { data } = res.data;
          for (var i of data) {
            i.value = i.name.replace("市", "");
          }
          // 用callback返回数据到下拉菜单中
          cb(data);
        }
      });
    },

    // 到达城市输入时就会触发的函数
    queryDestSearch(val, cb) {
      //   console.log(val);
      if (!val) {
        cb([]);
        return;
      }
      //   请求到达城市的数据
      this.$axios({
        url: "/airs/city",
        method: "GET",
        params: { name: val }
      }).then(res => {
        console.log(res);
        if (res.status === 200) {
          const { data } = res.data;
          data.forEach(e => {
            e.value = e.name.replace("市", "");
          });
          // 用callback返回数据到下拉菜单中
          cb(data);
        }
      });
    },

    // 出发城市----选中时触发的函数
    handleDepartSelect(item) {
      console.log(item);
      //   储存出发城市的code
      this.singleForm.departCode = item.sort;
    },

    // 到达城市----选中时触发的函数
    handleDestSelect(item) {
      console.log(item);
      this.singleForm.destCode = item.sort;
    },

    // 选则日期时触发的函数

    handledepartDate(val) {
      console.log(val);
      // 参数val代表的时当前时间
      this.singleForm.departDate = monent(val).format("YYYY-MM-DD");
    },

    // 搜索方法
    handelSearch() {
      console.log(this.singleForm);
      if (!this.singleForm.departCity) {
        this.$alert("请选择出发城市", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      if (!this.singleForm.destCity) {
        this.$alert("请选择目的城市", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      if (!this.singleForm.departDate) {
        this.$alert("请选择出发时间", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
     
    }
  },
  mounted(value) {
    this.time = monent(value).format("YYYY-MM-DD");
  }
};
</script>



<style lang="less" scoped>
.single {
  padding: 15px 50px 15px 15px;
}
</style>