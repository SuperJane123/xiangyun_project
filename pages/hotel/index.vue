<template>
  <div class="index">酒店首页</div>
</template>

<script>
export default {
   mounted(){
        this.$axios({
            url:'/hotels/options',

        }).then(res=>{
            console.log(res)
        })
    }
}
</script>

<style>

</style>