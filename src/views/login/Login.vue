<template>
  <div>
    <h2>吉他教学平台登录</h2>
    <input v-model="form.username" placeholder="账号" />
    <input v-model="form.password" type="password" placeholder="密码" />
    <select v-model="form.role">
      <option value="student">学员</option>
      <option value="teacher">讲师</option>
      <option value="admin">管理员</option>
    </select>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  role: 'student'
})

const login = () => {
  router.push(`/${form.role}`)
}
</script>
