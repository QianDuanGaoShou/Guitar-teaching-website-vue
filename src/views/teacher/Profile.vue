<template>
  <el-card>
    <el-form label-width="80px">
      <el-form-item label="姓名">
        <el-input />
      </el-form-item>
      <el-form-item label="领域">
        <el-input placeholder="民谣 / 电吉他" />
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" />
      </el-form-item>
      <el-button type="primary">保存</el-button>
    </el-form>
  </el-card>
</template>
