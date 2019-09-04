<template>
  <div class="loginFrom">
    <el-form :model="loginFrom" :rules="rules" ref="loginFrom" width="350px" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="loginFrom.username" placeholder="用户名/手机"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginFrom.password" placeholder="密码"  @keydown.enter.native="handleLogin"></el-input>
      </el-form-item>
      <p class="forget-password">
        <!-- <a href="#">忘记密码</a> -->
        <nuxt-link to="#">忘记密码</nuxt-link>
      </p>
      <el-button type="primary" class="login-btn" @click="handleLogin">登陆</el-button>
    </el-form>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
        loginFrom: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" }
          ],
          password: [{ required: true, message: "请输入密码", trigger: "blur" }]
        }

    
    }
  },
  methods: {
      handleLogin(){
      this.$refs.loginFrom.validate(valid=>{
          console.log(valid)
          if(valid){
              this.$axios({
                  url: '/accounts/login',
                  method: 'POST',
                  data: this.loginFrom
              })
              .then(res=>{
                  console.log(res)
                  if(res.status === 200){
                    this.$store.commit('user/setUserInfo',res.data)
                    console.log(this.$store.state)
                  }
              })
          }
      })
  }
  }
  
};
</script>

<style lang="less" scoped>
.loginFrom {
  padding: 25px;
  .forget-password {
    font-size: 12px;
    color: #409eff;
    text-align: right;
  }
  .login-btn {
    width: 350px;
    margin-top: 10px;
  }
}
</style>