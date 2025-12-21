<template>
  <el-card>
    <el-table :data="list">
      <el-table-column prop="name" label="课程" />
      <el-table-column prop="teacher" label="讲师" />
      <el-table-column label="操作">
        <template #default>
          <el-button type="success" size="small">通过</el-button>
          <el-button type="danger" size="small">驳回</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
const list = [
  { name: '指弹吉他进阶', teacher: '王老师' }
]
</script>
