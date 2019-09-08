<template>
  <el-row type="flex" justify="space-between" class="screen">
    <el-col :span="8">
      <p>单程： 广州 - 上海 / 2019-09-07</p>
      <span>筛选:</span>
      <el-button type="primary" plain round size="mini">撤销</el-button>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select v-model="value" placeholder="起飞机场" >
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
      <el-select v-model="value" placeholder="起飞时间" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select v-model="value" placeholder="航空公司" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select v-model="value" placeholder="机型" >
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
      text-align: right;
      
      width: 114px;
      
       input {
           height: 28px;
           font-size: 12px;
       }
       
  
  }
}
</style>