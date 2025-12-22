<template>
  <el-container style="height: 100vh">
    <el-header class="header">
      <span>🎸 讲师后台</span>
      <el-button type="danger" size="small" @click="logout">退出</el-button>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu router default-active="/teacher">
          <el-menu-item index="/teacher">
            首页
          </el-menu-item>

          <el-menu-item index="/teacher/course">
            课程管理
          </el-menu-item>

          <!-- ✅ 改这里：视频管理 -->
          <el-menu-item index="/teacher/video">
            视频管理
          </el-menu-item>

          <el-menu-item index="/teacher/income">
            收益统计
          </el-menu-item>
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

const router = useRouter()
const userStore = useUserStore()

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
</style>
