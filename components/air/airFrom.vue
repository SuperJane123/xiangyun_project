<template>
  <div class="single">
    <el-form ref="form" :model="singleForm" label-width="80px">
      <el-form-item label="出发城市">
        <el-autocomplete
          :fetch-suggestions="querySearchAsync"
          placeholder="请搜索出发城市"
          @select="handleSelect"
          style="width: 100%"
          v-model="singleForm.departCity"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          :fetch-suggestions="querySearchAsync"
          placeholder="请搜索到达城市"
          @select="handleSelect"
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
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%">
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
    querySearchAsync(queryString, cb) {
      console.log(queryString);
    },
    createStateFilter(queryString) {},
    handleSelect(item) {
      console.log(item);
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