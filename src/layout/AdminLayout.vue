<template>
  <el-container style="height: 100vh">
    <el-header class="header">
      <span>🛠 管理员后台</span>
      <el-button type="danger" size="small" @click="logout">退出</el-button>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-menu-item index="/admin">首页</el-menu-item>
          <el-menu-item index="/admin/audit">内容审核</el-menu-item>
          <el-menu-item index="/admin/income">收益发放</el-menu-item>
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
