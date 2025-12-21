<template>
  <el-card>
    <el-table :data="list">
      <el-table-column prop="teacher" label="讲师" />
      <el-table-column prop="amount" label="金额" />
      <el-table-column label="操作">
        <template #default>
          <el-button type="primary" size="small">发放</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
const list = [
  { teacher: '张老师', amount: 1200 }
]
</script>
