<template>
  <el-row type="flex" justify="space-between" class="screen">
    <el-col :span="8">
      <p>单程： {{data.departCity}} - {{data.destCity}} / {{data.departDate}}</p>
      <span>筛选:</span>
      <el-button type="primary" plain round size="mini">撤销</el-button>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select size="mini" v-model="value" placeholder="起飞机场">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="selecter_content"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select size="mini" v-model="value" placeholder="起飞时间">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select size="mini" v-model="value" placeholder="航空公司">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select size="mini" v-model="value" placeholder="机型">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>
  </el-row>
</template>


<script>
export default {
  props: {
    data: {
      // 接收数据的类型
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      value: "",
      options: []
    };
  }
};
</script>

<style lang="less">
.screen {
  margin-bottom: 20px;
  width: 745px;
  font-size: 14px;
  p {
    margin-bottom: 10px;
  }
  .selector_data {
    width: 114px;
  }
}
</style>