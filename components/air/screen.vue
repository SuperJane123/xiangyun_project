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
      // 把每个选择器选中的值，放到这个数组中
      // slector:[],

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
      ],

      // 多级筛选功能的数据
      filters: {
        company: {key: "airline_name", value: ""},
        airModel: {key: "plane_size", value: ""},
        airport: {key: "org_airport_name", value: ""},
        flightTimes: {key: "dep_time", value: ""}
      }
    };
  },

  methods: {
    // 点击起飞机场时，触发的函数
    handelAirport(val) {
      this.filters.airport.value = val
      this.handelFilters()
      // 筛选出匹配的机场名
      // const arr = this.data.flights.filter(e => {
      //   return e.org_airport_name === val;
      // });
      // 调用父组件的方法
      // this.$emit("setFlightsItem", arr);
    },

    // 点击起飞时间时出触发的函数

    handleDepTime(val) {
       this.filters.flightTimes.value = val.split(",");
      //  console.log(this.filters.flightTimes.value)
       const from = this.filters.flightTimes.value[0]
       const to = this.filters.flightTimes.value[1]
       const det_time = this.filters.flightTimes.key
      this.handelFilters(from,to,det_time)
      //  console.log(val); //比如6，12
      //  const Hour = val.split(',')
      // const [from, to] = val.split(",");
      // console.log(form, to);
      // const dep_time = this.data.flights.filter(e => {
      //   const current = e.dep_time.split(":")[0];
      //   return +from <= +current && +current < +to;
      // }); [6,12]
     

      // console.log(dep_time);
      // this.$emit("setFlightsItem", dep_time);
      // console.log(this.flightsList.flightTimes)
    },

    // 选择航空公司时触发的函数
    handleCompany(val) {
      this.filters.company.value = val
      this.handelFilters()
      // console.log(val)
      // 从数组中筛选出机场航空名称符合的数据，重新赋值到另一个数组中
      // const arr = this.data.flights.filter(e => {
      //   return e.airline_name === val;
      // });
      // this.$emit("setFlightsItem", arr);
    },

    // 点击选择机型时触发的函数
    handleAirsize(val) {
      this.filters.airModel.value = val
      this.handelFilters()
      // console.log(val);
      // 筛选出机型匹配的内容
      // const arr = this.data.flights.filter(e => {
      //   return e.plane_size === val;
      // });
      // 调用组件的方法
      // this.$emit("setFlightsItem", arr);
    },

    // 点击撤销按钮时触发的函数
    handelClear() {
      console.log(123);
      for (var key in this.flightsList) {
        this.flightsList[key] = "";
      }
      // 刷新数据
      this.$emit("setFlightsItem", this.data.flights);
    },

    // 处理多种筛选功能
    handelFilters(from,to){
      // 定义一个数组，用来装符合条件的数据
      const arr = []
      this.data.flights.forEach(item=>{
        // 先假设条件是成立的
        let vaild = true;
        let vaild1 = false
        // 通过以下方法返回的数据是["company","airModel"]
        Object.keys(this.filters).forEach(v=>{
          //  判断filters中的value值是否为空,如果为空，就不需要循环
          if(!this.filters[v].value) return
          if(item[this.filters[v].key] !== this.filters[v].value ){
            vaild = false
          }
          if(+from <= +item[this.filters[v].key].split(':')[0] && +item[this.filters[v].key].split(':')[0] < +to){
            vaild1 = true
              arr.push(item)
             return
            console.log(123)
          }
         
        })
        if(vaild){
          arr.push(item)
        }
      })

      this.$emit('setFlightsItem',arr)
    }
    
  },

  mounted() {
    console.log();
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