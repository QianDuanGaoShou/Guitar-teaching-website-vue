<template>
  <el-card>
    <el-table :data="list">
      <el-table-column prop="course" label="课程" />
      <el-table-column prop="amount" label="收益" />
      <el-table-column prop="month" label="月份" />
    </el-table>
  </el-card>
</template>

<script setup>
const list = [
  { course: '民谣吉他入门', amount: 2300, month: '2025-01' }
]
</script>
