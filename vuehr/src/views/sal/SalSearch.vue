<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="员工姓名">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="婚姻情况">
      <el-select v-model="sizeForm.region" placeholder="请选择婚姻情况">
        <el-option label="已婚" value="shanghai"></el-option>
        <el-option label="未婚" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="入职时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="在职状态">
      <el-radio-group v-model="sizeForm.resource" size="medium">
        <el-radio border label="在职"></el-radio>
        <el-radio border label="离职"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">查找工资表</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>

<style scoped>

</style>