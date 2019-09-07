<template>
      <el-row class="flight_title" >
        <el-col :span="5">航空信息</el-col>
        <el-col :span="14">
          <el-row type="flex" justify="space-between">
            <el-col :span="12">起飞时间</el-col>
            <el-col :span="12">到达时间</el-col>
          </el-row>
        </el-col>
        <el-col :span="5">价格</el-col>
      </el-row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
    .flight_title {
        margin-bottom: 10px;
        width: 745px;
        height: 38px;
        font-size: 12px;
        color: #666;
        line-height: 38px;
        border: 1px solid #ddd; 
        text-align:center;
        background-color: #f6f6f6;
    }
  

</style>