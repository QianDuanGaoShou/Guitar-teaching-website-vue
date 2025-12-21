<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card>
        <el-statistic title="课程总数" :value="12" />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <el-statistic title="在售课程" :value="8" />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <el-statistic title="本月收益" :value="5600" />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <el-statistic title="待点评练习" :value="5" />
      </el-card>
    </el-col>
  </el-row>
</template>
