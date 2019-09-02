<template>
  <div class="container">
    <!-- 轮播图 -->
    <el-carousel arrow="always">
      <!-- 轮播图的每张图片 -->
      <el-carousel-item v-for="(item,index) in bannerImg" :key="index">
        <div
          class="banner-images"
          :style="`background:url(${$axios.defaults.baseURL+item.url}) center center no-repeat;
           background-size: contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索输入 -->
    <div class="banner-content">
      <div class="banner-search">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span v-for="(item,index) in options" :key="index" @click="current = index">
            <i>{{item.title}}</i>
          </span>
        </el-row>
        <!-- 搜索框 -->
        <el-row type="flex" class="search-input" align="middle">
          <input type="text" :placeholder="options[current].placeholder" />
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      bannerImg: [],
      options: [
        {
          title: "攻略",
          placeholder: "搜索城市"
        },
        {
          title: "酒店",
          placeholder: "请输入城市搜索酒店"
        },
        {
          title: "机票"
        }
      ],
      current: 0
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
// 总盒子
.container {
  min-width: 1000px;
  position: relative;
  //  这是幻灯片的类名
  /deep/ .el-carousel__container {
    height: 700px;
  }
  //   每张的图片盒子
  .banner-images {
    width: 100%;
    height: 100%;
  }
  .banner-content {
    z-index: 9;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -277px;

    // transform: translate(50% ,50%);

    .banner-search {
      //   输入样式
      .search-input {
        border-radius: 10px;
        width: 552px;
        height: 46px;
        background-color: #fff;

        border-radius: 0 4px 4px 4px;
        border: 1px rgba(255, 255, 255, 0.2) solid;
        border-top: none;
        box-sizing: unset;
        input {
          flex: 1;
          height: 20px;
          padding: 13px 15px;
          outline: none;
          border: 0;
          font-size: 16px;
        }
        i {
          //   display: block;
          width: 44px;
          line-height: 44px;
          text-align: center;
          font-size: 22px;
        }
      }
      //   搜索标题样式
      .search-tab {
        span {
          display: block;
          width: 82px;
          height: 36px;
          margin-right: 8px;
          position: relative;
          color: #fff;
          cursor: pointer;
          text-align: center;
          i {
            z-index: 2;
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            line-height: 30px;
            color: #fff !important;
          }
          ::after {
            position: absolute;
            content: "";
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-bottom: none;
            background-color: rgba(0, 0, 0, 0.5);
            transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
            transform-origin: bottom left;
            border-radius: 1px 2px 0 0;
            box-sizing: border-box
          }
        }
      }
    }
    //
  }
}
</style>