<template>
  <div>
    <div style="display: flex">
      <el-button type="primary">市场部</el-button>
      <el-button type="primary">人事部</el-button>
      <el-button type="primary">运维部</el-button>
    </div>
    <div style="margin-top: 10px">
      <el-table :data="salaries" border stripe>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          width="100"
          prop="id"
          label="员工编号"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="name"
          label="员工姓名"
        ></el-table-column>
        <el-table-column
          width="120"
          prop="basicSalary"
          label="基本工资"
        ></el-table-column>
        <el-table-column
          width="120"
          prop="bonus"
          label="奖金"
        ></el-table-column>
        <el-table-column
          width="80"
          prop="lunchSalary"
          label="午餐补助"
        ></el-table-column>
        <el-table-column
          width="80"
          prop="trafficSalary"
          label="交通补助"
        ></el-table-column>
        <el-table-column
          width="120"
          prop="allSalary"
          label="应发工资"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="showEditSalaryView(scope.row)">编辑</el-button>
            <el-button type="danger" @click="deleteSalary(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalTable",
  data() {
    return {
      salaries: [],
      activeItemIndex: 0,
      salaryItemName: [
        '员工编号',
        '员工姓名',
        '基本工资',
        '奖金',
        '午餐补助',
        '交通补助',
        '应发工资'
      ],
      salary: {
        id: 0,
        name :'',
        basicSalary: 0,
        bonus: 0,
        lunchSalary: 0,
        trafficSalary: 0,
        allSalary: 0
      }
    }
  },
  mounted() {
    this.initSalaries();
  },
  methods: {
    showAddSalaryView() {
      //数据初始化
      this.salary = {
        id: 0,
        name :'',
        basicSalary: 0,
        trafficSalary: 0,
        lunchSalary: 0,
        bonus: 0,
        allSalary: 0
      }
    },
    initSalaries() {
      this.getRequest("/salary/table/").then(resp => {
        if (resp) {
          this.salaries = resp;
        }
      })
    }
  }
};
</script>

<style scoped>

</style>