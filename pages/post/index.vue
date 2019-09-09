<template>
  <div class="menus_index">
      <el-row>
          <!-- 左边菜单导航栏 -->
<Menus/>
          <!-- 输入框 -->

          <!-- 旅游攻略标题 -->

          <!-- 旅游攻略内容展示 -->



      </el-row>


  </div>
</template>

<script>
// 引入组件
import Menus from '@/components/post/menus'
export default {

  // 注册组件
  components: {
    Menus
  }

}
</script>

<style lang="less" scoped>
.menus_index {
  min-width: 1000px;
  padding: 20px 0;
}

</style>