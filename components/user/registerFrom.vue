<template>
  <div class="register">
    <main>
      <!-- 表单 -->
      <el-form :model="from" :rules="rules" ref="from" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input placeholder="用户手机号" v-model="from.username"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <el-input placeholder="验证码" class="input-with-select" v-model="from.captcha">
            <el-button slot="append" @click="getCaptchas">发送验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="nickname">
          <el-input placeholder="你的名字" v-model="from.nickname"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" v-model="from.password"></el-input>
        </el-form-item>
        <el-form-item prop="checkpassword">
          <el-input placeholder="确认密码" v-model="from.checkpassword"></el-input>
        </el-form-item>
        <el-button
          type="primary"
          class="registerBtn"
          style="width:100%"
          @click.native="handleRegister"
        >注册</el-button>
      </el-form>
    </main>
  </div>
</template>


<script>
export default {
  data() {
    var checkpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.from.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      from: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        checkpassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkpassword: [{ validator: checkpassword, trigger: "blur" }]
      }
    };
  },

  methods: {
    // 发送手机验证码
    getCaptchas() {
        console.log(this.from.username)
      this.$axios({
        url: "/captchas",
        method: 'POST',
        data: {tel:this.from.username}
      }).then(res=>{
          console.log(res)
          if(res.status === 200){
              this.$alert(`模拟验证码:${res.data.code}`,'提示',{ confirmButtonText: '确定'})
            
          }
      })
    },

    //   请求注册接口
    handleRegister() {
        console.log(this.from)
      // 移除再次确认密码对象
    //   const { checkpassword, ...res } = this.from;
    //   this.$axios({
    //     url: "/accounts/register",
    //     method: "POST",
    //     data: res
    //   }).then(res => {
    //     console.log(res);
    //   });
    }
  }
};
</script>


<style lang="less" scoped>
.register {
  main {
    padding: 25px;
  }
}
</style>