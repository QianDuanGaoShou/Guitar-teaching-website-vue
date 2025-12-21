<template>
  <el-card class="login-card">
    <h2>吉他教学平台登录</h2>

    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.username" placeholder="账号" />
      </el-form-item>

      <el-form-item>
        <el-input v-model="form.password" type="password" placeholder="密码" />
      </el-form-item>

      <el-form-item>
        <el-select v-model="form.role" placeholder="角色">
          <el-option label="学员" value="student" />
          <el-option label="讲师" value="teacher" />
          <el-option label="管理员" value="admin" />
        </el-select>
      </el-form-item>

      <el-button type="primary" @click="login" style="width:100%">
        登录
      </el-button>
    </el-form>
  </el-card>
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

<style scoped>
.login-card {
  width: 400px;
  margin: 120px auto;
}
</style>
