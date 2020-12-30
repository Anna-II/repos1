<template>
  <div>
    <div style="display: flex">
      <el-button type="primary" @click="showSalaryByDep(78)">市场部</el-button>
      <el-button type="primary" @click="showSalaryByDep(56)">人事部</el-button>
      <el-button type="primary" @click="showSalaryByDep(92)">运维部</el-button>
      <el-button icon="el-icon-plus" type="primary" @click="showAddSalaryView">增加员工工资信息</el-button>
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
    <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="50%">
      <div style="display: flex;justify-content: space-around;align-items: center">
        <el-steps direction="vertical" :active="activeItemIndex">
          <el-step :title="itemName" v-for="(itemName,index) in salaryItemName" :key="index"></el-step>
        </el-steps>
        <el-input v-model="salary[title]" :placeholder="'请输入'+salaryItemName[index]+'...'"
                  v-for="(value,title,index) in salary"
                  :key="index" v-show="activeItemIndex==index" style="width: 200px"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button @click="preStep">{{ activeItemIndex == 6 ? '取消' : '上一步' }}</el-button>
      <el-button type="primary" @click="nextStep">{{ activeItemIndex == 6 ? '完成' : '下一步' }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SalTable",
  data() {
    return {
      departmentId: 78,
      dialogVisible: false,
      dialogTitle: '修改员工工资',
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
        bonus: 0,
        lunchSalary: 0,
        trafficSalary: 0,
        allSalary: 0
      }
      this.dialogTitle = '增加员工工资信息';
      this.activeItemIndex = 0;
      this.dialogVisible = true;
    },
    initSalaries() {
      this.getRequest("/salary/table/").then(resp => {
        if (resp) {
          this.salaries = resp;
        }
      })
    },
    showSalaryByDep(departmentId) {
      this.getRequest("/salary/table/getByDep/" + departmentId).then(resp => {
        if (resp) {
          this.salaries = resp;
        }
      })
    },
    showEditSalaryView(data) {
      this.dialogTitle = '修改员工工资';
      this.dialogVisible = true;
      this.salary.id = data.id;
      this.salary.name=data.name;
      this.salary.basicSalary = data.basicSalary;
      this.salary.bonus = data.bonus;
      this.salary.lunchSalary = data.lunchSalary;
      this.salary.trafficSalary = data.trafficSalary;
      this.salary.allSalary=data.allSalary
    },
    deleteSalary(data) {
      this.$confirm('此操作将删除【' + data.name + '】工资信息，是否继续？', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定'
      }).then(() => {
        this.deleteRequest("/salary/table/" + data.id).then(resp => {
          if (resp) {
            this.initSalaries();
          }
        })
      }).catch(() => {
        this.$message.info("取消删除!");
      })
    },
     preStep() {
      if (this.activeItemIndex == 0) {
        return;
      } else if (this.activeItemIndex == 6) {
        //关闭对话框
        this.dialogVisible = false;
        return;
      }
      this.activeItemIndex--;
    },
    nextStep() {
      if (this.activeItemIndex == 6) {
        if (this.salary.id) {
          this.putRequest("/salary/table/", this.salary).then(resp => {
            if (resp) {
              this.initSalaries();
              this.dialogVisible = false;
            }
          })
        } else {
          this.postRequest("/salary/table/", this.salary).then(resp => {
            if (resp) {
              this.initSalaries();
              this.dialogVisible = false;
            }
          });
        }
        return;
      }
      this.activeItemIndex++;
    },
  }
};
</script>

<style scoped>

</style>