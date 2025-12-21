<template>
  <el-card>
    <el-table :data="videos">
      <el-table-column prop="title" label="视频名称" />
      <el-table-column prop="course" label="所属课程" />
      <el-table-column prop="duration" label="时长" />
      <el-table-column prop="status" label="状态" />
      <el-table-column label="操作">
        <el-button size="small">替换</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
const videos = [
  { title: '和弦基础', course: '民谣吉他入门', duration: '10:32', status: '已通过' }
]
</script>
