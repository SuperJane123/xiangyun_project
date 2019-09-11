<template>
  <div class="container">
    <div class="main">
      <div class="pay-title">
        支付总金额
        <span class="pay-price">￥{{order.price}}</span>
      </div>
      <div class="pay-main">
        <h4>微信支付</h4>
        <el-row type="flex" justify="space-between" align="middle" class="pay-qrcode">
          <div class="qrcode">
            <!-- 二维码 -->
            <canvas id="qrcode-stage"></canvas>
            <p>请使用微信扫一扫</p>
            <p>扫描二维码支付</p>
          </div>
          <div class="pay-example">
            <img src="http://157.122.54.189:9093/images/wx-sweep2.jpg" alt />
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  data() {
    return {
      order: {},
      timer: null   //定时器变量
    };
  },

  mounted() {
    // toCanvas('qrcode-stage', text, )
    // 因为获取的id是在组件加载后就获取，本地数据回传到store没有那么块，所以要用定时
    setTimeout(() => {
      const { id } = this.$route.query;
      this.$axios({
        url: "/airorders/" + id,
        headers: {
          Authorization: `Bearer ${this.$store.state.user.loginFrom.token}`
        }
      }).then(res => {
        console.log(res);
        // 赋值
        this.order = res.data;
        const canvas = document.getElementById("qrcode-stage");
        QRCode.toCanvas(canvas, res.data.payInfo.code_url, {
          width: 200
        });
        this.timer = setInterval(() => {
          // 每3秒执行
          this.checkPay();
        }, 3000);
      });
    }, 10);
  },

  destroyed(){
    // 为了避免跳转到其他页面使，也执行以下代码，需要销毁组件
    clearInterval(this.timer)
    this.timer = null
  },

  methods: {
    checkPay() {
      //查询付款状态
      this.$axios({
        url: "/airorders/checkpay",
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.$store.state.user.loginFrom.token}`
        },
        data: {
          id: this.$route.query.id, //订单id
          nonce_str: this.order.price, //支付接口返回的订单金额
          out_trade_no: this.order.orderNo //订单编号
        }
      }).then(res => {
        console.log(res);
        if(res.data.statusTxt === '支付完成'){
          // 清除定时器
          clearInterval(this.timer);
          this.$alert(res.data.statusTxt,'提示')
          this.timer = null

        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.container {
  background: #f5f5f5;
  padding: 30px 0;

  .main {
    width: 1000px;
    margin: 0 auto;

    .pay-title {
      text-align: right;
      span {
        font-size: 28px;
        color: orangered;
      }
    }

    .pay-main {
      background: #fff;
      margin-top: 10px;
      border-top: 5px orange solid;
      padding: 30px;

      h4 {
        font-size: 28px;
        font-weight: normal;
        margin-bottom: 10px;
      }

      .pay-qrcode {
        padding: 0 80px;
      }

      .qrcode {
        border: 1px #ddd solid;
        padding: 15px;
        height: fit-content;

        #qrcode-stage {
          width: 200px;
          height: 200px;
          margin-bottom: 10px;
        }

        p {
          line-height: 2;
          text-align: center;
        }
      }
    }
  }
}
</style>