<template>
  <el-card>
    <el-button type="primary" style="margin-bottom: 10px">新增课程</el-button>

    <el-table :data="list">
      <el-table-column prop="name" label="课程名称" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag>{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <el-button size="small">编辑</el-button>
        <el-button size="small" type="danger">下架</el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
const list = [
  { name: '民谣吉他入门', price: 199, status: '已上架' },
  { name: '指弹进阶', price: 299, status: '审核中' }
]
</script>
