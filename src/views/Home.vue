<template>
  <div style="padding: 40px">
    <h2>首页</h2>
    <p>已登录</p>
    <button @click="logout">退出登录</button>
  </div>
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
