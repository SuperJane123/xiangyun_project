<template>
  <div class="tab">
      <div class="title">
          <span v-for="(val,index) in ['新闻','体育','娱乐']" 
          :key="index" @click = "handleclidk(index)" :class="{active:current===index}">
          {{val}}
          </span>
      </div>
      <div class="content" v-show="current===0">
          <ul>
              <li>123</li>
              <li>123</li>
              <li>123</li>
          </ul>
      </div>
      <div class="content" v-show="current===1">
          <ul>
              <li>456</li>
              <li>456</li>
              <li>456</li>
          </ul>
      </div>
      <div class="content" v-show="current===2">
          <ul>
              <li>789</li>
              <li>789</li>
              <li>789</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            current : 0
        }
    },

    methods: {
        handleclidk(index){
            this.current = index
        }
    }

}
</script>

<style lang="less" scoped>
        .tab {
            margin: 50px 0 0 50px;
            .title {
                cursor: pointer;
                span {
                    padding: 0 10px
                }
            }
            .content {
                margin: 20px 0 0 40px;
                ul {
                    li {
                        padding: 10px;
                    }
                }
            }
        }
        .active {
            border-bottom: 1px solid red;
        }
</style>