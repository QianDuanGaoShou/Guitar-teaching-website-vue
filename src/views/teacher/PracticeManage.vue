<template>
  <el-card>
    <el-table :data="list">
      <el-table-column prop="student" label="学员" />
      <el-table-column prop="course" label="课程" />
      <el-table-column prop="time" label="提交时间" />
      <el-table-column label="操作">
        <el-button type="primary" size="small">查看点评</el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
const list = [
  { student: '张三', course: '民谣吉他入门', time: '2025-01-10' }
]
</script>
