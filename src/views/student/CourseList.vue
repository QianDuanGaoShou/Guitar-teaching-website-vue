<template>
  <el-card>
    <h3>课程列表</h3>
    <el-table :data="courses" style="width: 100%">
      <el-table-column prop="name" label="课程名称" />
      <el-table-column prop="teacher" label="讲师" />
      <el-table-column prop="price" label="价格" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="go(scope.row.id)">学习</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const courses = [
  { id: 1, name: '民谣吉他入门', teacher: '张老师', price: '免费' },
  { id: 2, name: '电吉他进阶', teacher: '李老师', price: '￥199' }
]

const go = id => {
  router.push(`/student/course/${id}`)
}
</script>
