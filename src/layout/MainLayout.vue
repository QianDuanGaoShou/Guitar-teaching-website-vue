<template>
  <el-container style="height: 100vh">
    <el-header class="header">
      <div class="logo">🎸 吉他教学平台</div>
      <el-button type="danger" size="small" @click="logout">退出</el-button>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-menu-item index="/student">学员首页</el-menu-item>
          <el-menu-item index="/student/courses">课程列表</el-menu-item>
          <el-menu-item index="/student/practice">练习</el-menu-item>
          <el-menu-item index="/student/exam">考试</el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 18px;
  font-weight: bold;
}
</style>
