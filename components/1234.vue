<template>
  <div class="container">
    <div class="footer">
      <el-row :gutter="20" class="footer_info">
        <el-col :span="6">
          <h3>闲云旅游旅游网</h3>
          <p>上亿旅行者共同打造的"旅行神器"</p>
          <p>
            <i>60,000</i> 多个全球旅游目的地
          </p>
          <p>
            <i>760,000,000</i> 次攻略下载
          </p>
          <p>
            <i>600,000</i> 个细分目的地新玩法
          </p>
          <p>
            <i>38,000</i> 家旅游产品供应商
          </p>
        </el-col>
        <el-col :span="6">
          <h3>关于我们</h3>
          <p>隐私政策 商标声明</p>
          <p>
            服务协议 游记协议
          </p>
          <p>
            商城平台服务协议
          </p>
          <p>
            网络信息侵权通知指引
          </p>
          <p>
            闲云旅游旅游网服务监督员
          </p>
          <p>网站地图加入闲云旅游</p>
        </el-col>
        <el-col :span="6">
          <h3>旅行服务</h3>
          <p>旅游攻略 酒店预订</p>
          <p>
            旅游特价 国际租车
          </p>
          <p>
           旅游问答 旅游保险
          </p>
          <p>
           旅游指南 订火车票
          </p>
          <p>
            旅游资讯 APP下载
          </p>
        </el-col>
        <el-col :span="6" class="followUs">
          <img src="http://157.122.54.189:9093/images/1556522965.png" alt style="width:140px" />
          <p>关注我们</p>
        </el-col>
      </el-row>
      <div
        class="footer_copy"
      >京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
.container {
  min-width: 1000px;
  background-color: #333;

  .footer {
    width: 1000px;
    margin: 0 auto;
    color: #ccc;
    font-size: 12px;
    .footer_info {
      padding: 25px 0;

      h3 {
        font-weight: normal;
        font-size: 20px;
        margin-bottom: 10px;
      }
      p {
        padding-bottom: 5px;
        i {
          color: orange;
        }
      }
      .followUs {
        text-align: center;
      }
    }
    .footer_copy {
      width: 1000px;
      height: 110px;
      text-align: center;
      font-size: 12px;
      line-height: 110px;
      border-top: 1px solid #666;
    }
  }
}
</style>