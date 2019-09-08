<template>
  <el-row type="flex" justify="space-between" class="screen">
    <el-col :span="8">
      <p>单程： {{data.info.departCity}} - {{data.info.destCity}} / {{data.info.departDate}}</p>
      <span>筛选:</span>
      <el-button type="primary" plain round size="mini" @click="handelClear">撤销</el-button>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select
        size="mini"
        placeholder="起飞机场"
        v-model="flightsList.airport"
        @change="handelAirport"
      >
        <el-option
          v-for="(item,index) in data.options.airport"
          :key="index"
          :label="item"
          :value="item"
          class="selecter_content"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select
        size="mini"
        v-model="flightsList.flightTimes"
        placeholder="起飞时间"
        @change="handleDepTime"
      >
        <el-option
          v-for="(item,index) in data.options.flightTimes"
          :key="index"
          :label="`${item.from}:00-${item.to}:00`"
          :value="`${item.from},${item.to}`"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select
        size="mini"
        v-model="flightsList.company"
        placeholder="航空公司"
        @change="handleCompany"
      >
        <el-option
          v-for="(item,index) in data.options.company"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="4" class="selector_data">
      <el-select
        size="mini"
        v-model="flightsList.airModel"
        placeholder="机型"
        @change="handleAirsize"
      >
        <el-option
          v-for="(item,index) in airModelInfo"
          :key="index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>
  </el-row>
</template>


<script>
export default {
  props: {
    data: {
      // 接收数据的类型
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      // 每个选择器所绑定的数据
      flightsList: {
        airport: "", //起飞机场
        flightTimes: "", //  起飞时间
        company: "",
        airModel: "" //机型
      },

      // 机型数据
      airModelInfo: [
        {
          label: "大",
          value: "L"
        },
        {
          label: "中",
          value: "M"
        },
        {
          label: "小",
          value: "S"
        }
      ]
    };
  },

  methods: {
    // 点击起飞机场时，触发的函数
    handelAirport(val) {
      // 筛选出匹配的机场名
      const arr = this.data.flights.filter(e => {
        return e.org_airport_name === val;
      });
      // 调用父组件的方法
      this.$emit("setFlightsItem", arr);
    },

    // 点击起飞时间时出触发的函数

    handleDepTime() {
      //  console.log(val); //比如6，12
      //  const Hour = val.split(',')
      //  const dep_time = this.data.flights.map(e=>{
      //    return e.dep_time.split('')
      //})
    },

    // 选择航空公司时触发的函数
    handleCompany(val) {
      // console.log(val)
      // 从数组中筛选出机场航空名称符合的数据，重新赋值到另一个数组中
      const arr = this.data.flights.filter(e => {
        return e.airline_name === val;
      });
      this.$emit("setFlightsItem", arr);
      console.log(arr);
    },

    // 点击选择机型时触发的函数
    handleAirsize(val) {
      console.log(val);
      // 筛选出机型匹配的内容
      const arr = this.data.flights.filter(e => {
        return e.plane_size === val;
      });
      // 调用组件的方法
      this.$emit("setFlightsItem", arr);
    },

    // 点击撤销按钮时触发的函数
    handelClear(){
      console.log(123)
      for(var key in this.flightsList){
        this.flightsList[key] = ""
      }
    }
  }
};
</script>

<style lang="less">
.screen {
  margin-bottom: 20px;
  width: 745px;
  font-size: 14px;
  p {
    margin-bottom: 10px;
  }
  .selector_data {
    width: 114px;
  }
}
</style>