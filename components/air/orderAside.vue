<template>
  <div class="aside">
    <div class="air_info">
      <el-row type="flex" justify="space-between" class="info_top">
        <strong>2019-04-15</strong>
        <span>广州 - 上海</span>
      </el-row>
      <el-row type="flex" justify="space-between" class="info_foot">
        <el-col :span="5">
          <p>20:30</p>
          <span>白云机场T1</span>
        </el-col>
        <el-col :span="14">
          <span>--- 2时20分 ---</span>
          <span>东航MU5316</span>
        </el-col>
        <el-col :span="5">
          <p>22:50</p>
          <span>浦东机场T2</span>
        </el-col>
      </el-row>
    </div>
    <div class="order_info">
      <el-row class="order_item" type="flex" justify="space-between"  > 
          <span>订单总价</span>
          <span>金额</span>
          <span>数量</span>
      </el-row>
      <el-row class="order_item" type="flex" justify="space-between"  > 
          <span>成人机票</span>
          <span>¥2740</span>
          <span>x1</span>
      </el-row>
      <el-row class="order_item" type="flex" justify="space-between"  > 
          <span>机建+燃油</span>
          <span>¥50/人/单程</span>
          <span>x1</span>
      </el-row>
       <el-row class="order_item" type="flex" justify="space-between" align="middle" > 
          <span>应付总额：</span>

          <span class="price">￥2790</span>
      </el-row>
      
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.aside {
  width: 350px;
  height: -webkit-fit-content;
  border: 1px solid #ddd;
  .air_info {
    padding: 15px;
    border-bottom: 1px dashed #ddd;
    .info_top {
      margin-bottom: 10px;
      strong {
        font-weight: normal;
        font-size: 16px;
      }
      > span {
        font-size: 14px;
      }
    }
    .info_foot {
      text-align: center;
      p {
        font-size: 22px;
      }
      span {
        display: block;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .order_info {
      font-size: 14px;
      color: #666;
      .order_item {
          padding: 10px 15px;
          border-bottom: 1px dashed #ddd;
          &:last-child{
              border-bottom: 0;
          }
          .price {
              font-size: 28px;
              color: #ffa500
          }
      }
  }
}
</style>