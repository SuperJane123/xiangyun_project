<template>
  <div class="meuns_wapper">
    <div class="meuns_body">
      <el-row type="flex" justify="space-between" class="menu-item" align="middle" @mouseover="showCard">
        <span>热门城市</span>
        <i class="wn el-icon-arrow-right"></i>
      </el-row>

      <el-row type="flex" justify="space-between" class="menu-item" align="middle">
        <span>推荐城市</span>
        <i class="wn el-icon-arrow-right"></i>
      </el-row>
      <el-row type="flex" justify="space-between" class="menu-item" align="middle">
        <span>奔向海岛</span>
        <i class="wn el-icon-arrow-right"></i>
      </el-row>
      <el-row type="flex" justify="space-between" class="menu-item" align="middle">
        <span>主题推荐</span>
        <i class="wn el-icon-arrow-right"></i>
      </el-row>
    </div>
    <div class="menus_recommend">
      <h3>推荐城市</h3>
      <nuxt-link to="#">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
      </nuxt-link>
    </div>

    <div class="menus_item_card" v-show="isShow">
      <nuxt-link to="#">
        <el-row class="card_info">
          <el-col :span="2" class="num">1</el-col>
          <el-col :span="3" class="city">北京</el-col>
          <el-col :span="19" class="introduction">世界著名古都和现代化国际城市</el-col>
        </el-row>
        <el-row class="card_info">
          <el-col :span="2" class="num">2</el-col>
          <el-col :span="3" class="city">广州</el-col>
          <el-col :span="19   " class="introduction">粤港澳大湾区、泛珠江三角洲经济区</el-col>
        </el-row>
        <el-row class="card_info">
          <el-col :span="2" class="num">3</el-col>
          <el-col :span="3" class="city">上海</el-col>
          <el-col :span="19" class="introduction">长江入海口，东隔东中国海</el-col>
        </el-row>
        <el-row class="card_info">
          <el-col :span="2" class="num">4</el-col>
          <el-col :span="3" class="city">成都</el-col>
          <el-col :span="19" class="introduction">国家历史文化名城</el-col>
        </el-row>
        <el-row class="card_info">
          <el-col :span="2" class="num">5</el-col>
          <el-col :span="3" class="city">西安</el-col>
          <el-col :span="19" class="introduction">中国国际形象最佳城市之一</el-col>
        </el-row>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: false
    }
  },

  methods: {
    showCard(){
      this.isShow = !this.isShow
    }
  }
};
</script>


<style lang="less" scoped>
.meuns_wapper {
  width: 260px;
  .meuns_body {
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    .menu-item {
      position: relative;
      height: 40px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      border-top: 1px solid #ddd;
      > i {
        font-size: 20px;
        color: #999;
        position: absolute;
        right: 15px;
      }
    }
    .active {
        color: orange;
        border-right: #fff;
        > i {
          color: orange;
        }
      }
  }
  .menus_recommend {
    margin-top: 20px;
    h3 {
      font-weight: normal;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    a {
      display: block;
      width: 100%;
    }
    img {
      width: 100%;
    }
  }

  .menus_item_card {
      padding-top: 11px;
    //   display: none;
    position: absolute;
    left: 259px;
    top: 0;
    width: 350px;
    font-size: 14px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    .card_info {
      padding:0 20px;
      line-height: 37px;
    //   border-right: 1px solid #ddd;
      color: orange;
      &:last-child {
          padding-bottom: 10px;
        border-left: 1px solid #ddd;
      }
      .num {
        font-size: 25px;
        font-style: italic;
      }
      .city {
        &:hover {
          text-decoration: underline;
        }
      }
      .introduction {
        color: #999;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>