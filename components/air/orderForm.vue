<template>
  <div class="orderFrom">
    <!-- 乘机人 -->
    <div class="air-column">
      <h2>乘机人</h2>
      <el-form>
        <div class="info_item" v-for="(item,index) in users" :key="index">
          <el-form-item label="乘机人类型">
            <el-input placeholder="姓名" class="input-with-select" v-model="item.username">
              <el-select value="1" slot="prepend" placeholder="成人">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <el-input placeholder="证件号码" class="input-with-select" v-model="item.id">
              <el-select value="1" slot="prepend" placeholder="身份证">
                <el-option label="身份证" value="1"></el-option>
                <el-option label="护照" value="2"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <span class="del_user" @click="handleDelUser(index)">-</span>
        </div>

        <!-- <div class="info_item">
          <el-form-item label="乘机人类型">
            <el-input placeholder="姓名" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="成人">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <el-input placeholder="证件号码" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="身份证">
                <el-option label="身份证" value="1"></el-option>
                <el-option label="护照" value="2"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <span class="del_user">-</span>
        </div>-->

        <el-button type="primary" class="addMenber" @click="addMenber">添加乘机人</el-button>
      </el-form>
    </div>

    <!-- 保险 -->
    <div class="air-column">
      <h2>保险</h2>
      <div class="insurance">
        <div class="insurance_item" v-for="(item,index) in infoData.insurances" :key="index">
          <el-checkbox
            :label="`${item.type}: ¥${item.price}/份x1 最高赔付${item.compensation}元`"
            border
            @change="handelsplice(item.id)"
          ></el-checkbox>
        </div>
        <!-- <div class="insurance_item">
          <el-checkbox label="航空意外险：¥30/份x2 最高赔付260万" border></el-checkbox>
        </div>-->
      </div>
    </div>

    <!-- 联系人 -->
    <div class="air-column">
      <h2>联系人</h2>
      <div class="contact">
        <el-form ref="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="contactName"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input placeholder="请输入手机号码" v-model="contactPhone" class="input-with-select">
              <el-button slot="append" @click="getCode">发送验证码</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="captcha"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="warning" class="submit" @click="handelSubmit">提交订单</el-button>
      </div>
    </div>
    <span v-show="false">{{ allPrice}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 乘机人信息数据
      users: [
        {
          username: "",
          id: ""
        }
      ],

      // 保险数据信息
      insurances: [],

      // 联系人姓名
      contactName: "",

      // 联系人电弧
      contactPhone: "",

      // 是否需要发票
      invoice: false,
      // 作为id
      seat_xid: "",

      // 航班id
      air: "",

      // 验证码
      captcha: "",

      // 机票数据
      infoData: {}
    };
  },

  methods: {
    // 添加新乘机人列表
    addMenber() {
      // this.users = [
      //   ...this.users,
      //   {
      //     username: "",
      //     id: ""
      //   }
      // ]
      this.users.push({
        username: "",
        id: ""
      });
    },

    handleDelUser(index) {
      // 删除乘机人列表
      this.users.splice(index, 1);
    },

    // 点击保险单选框时，可随机添加
    handelsplice(id) {
      // 要判断数据里面是否有存在相同的id，如果有，相同id，再次点击时，就去掉
      // indexof返回的值是索引
      if (this.insurances.indexOf(id) > -1) {
        this.insurances.splice(this.insurances.indexOf(id), 1);
        // 否则就添加id
      } else {
        this.insurances.push(id);
      }
    },

    // 点击获取验证码
    getCode() {
      // 判断是否有填写手机号码
      if (!this.contactPhone) {
        this.$message.error("请输入手机号码！");
        return;
      }
      this.$axios({
        url: "captchas",
        method: "POST",
        data: { tel: this.contactPhone }
      }).then(res => {
        // console.log(res)
        this.$alert(res.data.code, "提示", {
          confirmButtonText: "确定"
        });
      });
    },

    // 点击提交订单
    handelSubmit() {
      // 提交订单时，要对表单进行验证
      if (!this.users[0].username || !this.users[0].id) {
        this.$message.error("乘机人不能为空");
        return;
      }

      if (!this.contactName) {
        this.$message.error("联系人不能为空");
        return;
      }

      if (!this.contactPhone) {
        this.$message.error("手机号不能为空");
        return;
      }

      if (!this.captcha) {
        this.$message.error("验证码不能为空");
        return;
      }

      const { id, seat_xid } = this.$route.query;
      // 拼接参数
      const data = {
        users: this.users,
        insurances: this.insurances,
        contactName: this.contactName,
        contactPhone: this.contactPhone,
        invoice: this.invoice,
        captcha: this.captcha,
        seat_xid,
        air: id
      };
      //  const {id,seat_xid} = this.$route.query
      this.$axios({
        url: "/airorders",
        method: "POST",
        // 设置token值
        headers: {
          Authorization: `Bearer ${this.$store.state.user.loginFrom.token}`
        },
        data
      }).then(res => {
        // console.log(res);
        const { id } = res.data.data;
        //   this.$router.push({path:'/air/pay',query:{id}})
        // this.$message.success('页面正在跳中...')
        this.$router.push({
          path: "/air/pay",
          query: { id }
        });
      });
    }
  },

  computed: {
   
    // 计算总价
    allPrice() {
      // 因为一开始是没有数据的，所以要判断，是否有值先
      if (!this.infoData.seat_infos) {
        return 0;
      }
      let allPrice = 0;
      // 票价
      allPrice += this.infoData.seat_infos.org_settle_price;
      // 燃油费
      allPrice += this.infoData.airport_tax_audlet;
      // 保险费
      allPrice += 30 * this.insurances.length;
      allPrice *= this.users.length;

      // 把值存到store中
      this.$store.commit("order/setAllPrice", allPrice);
      return allPrice;
    }
  },

  mounted() {
    const { id, seat_xid } = this.$route.query;
    // 获取订单详情信息
    this.$axios({
      url: "/airs/" + id,
      params: {
        seat_xid
      }
    }).then(res => {
      // console.log(res);
      this.infoData = res.data;
      // 调用$store的方法，把值存到stroe中
      this.$store.commit("order/setInfoData", this.infoData);
    });
  }
};
</script>

<style lang="less" scoped>
.orderFrom {
  h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: normal;
  }
  .air-column {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px dashed #eee;

    .info_item {
      position: relative;
      padding-bottom: 20px;
      border-bottom: 1px dashed #eee;
      &:first-child {
        .del_user {
          display: none;
        }
      }
      .del_user {
        position: absolute;
        top: 50%;
        right: -30px;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #ddd;
        color: #fff;
        text-align: center;
        line-height: 15px;
        cursor: pointer;
      }
    }

    .addMenber {
      margin-top: 20px;
    }
  }

  .insurance_item {
    margin-bottom: 20px;
  }

  .contact {
    .el-form-item {
      margin-bottom: 22px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-input {
        width: 50%;
      }
    }
  }
  .submit {
    margin: 50px auto;
    display: block;
    width: 250px;
    height: 50px;
  }
}

/deep/ .el-select {
  width: 130px;
}
/deep/ .el-input {
  width: 100%;
}
/deep/ .el-input-group__prepend {
  background-color: #fff;
}
/deep/.el-form-item {
  margin-bottom: 0;
}
</style>