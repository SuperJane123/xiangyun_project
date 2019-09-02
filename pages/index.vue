<template>
  <div class="container">
    <!-- 轮播图 -->
    <el-carousel  arrow="always">
      <!-- 轮播图的每张图片 -->
      <el-carousel-item v-for="(item,index) in bannerImg" :key="index">
        <div class="banner-images"
          :style="`background:url(${$axios.defaults.baseURL+item.url}) center center no-repeat;
           background-size: contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索输入 -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      bannerImg: []
    };
  },

  mounted() {
    this.$axios({
      url: "/scenics/banners"
    })
      .then(res => {
        // console.log(res)
        this.bannerImg = res.data.data;
        console.log(this.bannerImg);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style lang="less" scoped>
.container {
 min-width: 1000px;
  /deep/ .el-carousel__container {
    height: 700px;
  }
  .banner-images {
    width: 100%;
    height: 100%;
  }
}
</style>