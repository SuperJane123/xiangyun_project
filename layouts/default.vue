<template>
  <div>
    <!-- 头部 -->
   <Header/>
    <!-- 内容占位符，相等于router-view -->
    <nuxt />
    <!-- 脚步 -->
    <Footer/>
  </div>
</template>


<script>
// 引入组件
import Header from '@/components/header'
import Footer from '@/components/footer'


export default {
    // 注册组件
    components: {
      Header,Footer
    }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;  /**这个属性可以使页面上的字体抗锯齿，使用后字体看起来更清晰舒服 */
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}


ul,li,ol {
  list-style: none
}

a {
  /* 继承父级颜色 */
  color: inherit;
  text-decoration: none
}
a :hover{
   color: inherit;
}

em,i {
  font-style: normal
}



</style>
