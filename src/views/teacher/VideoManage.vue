<template>
  <div class="video-manage">
    <el-card>
      <template #header>
        <div class="header">
          <span>视频管理</span>
          <el-button type="primary" @click="openUploadDialog">
            上传视频
          </el-button>
        </div>
      </template>

      <el-table :data="videoList" border style="width: 100%">
        <el-table-column prop="title" label="视频标题" />
        <el-table-column prop="course" label="所属课程" />
        <el-table-column prop="duration" label="时长" width="100" />
        <el-table-column prop="createTime" label="上传时间" width="160" />

        <el-table-column label="操作" width="180">
          <template #default="{ row }">
            <el-button size="small" @click="editVideo(row)">
              编辑
            </el-button>
            <el-button
                size="small"
                type="danger"
                @click="deleteVideo(row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 上传视频弹窗 -->
    <el-dialog
        v-model="uploadVisible"
        title="上传视频"
        width="500px"
    >
      <el-form :model="uploadForm" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="uploadForm.title" />
        </el-form-item>

        <el-form-item label="课程">
          <el-input v-model="uploadForm.course" />
        </el-form-item>

        <el-form-item label="视频文件">
          <el-upload
              drag
              action="#"
              :auto-upload="false"
          >
            <el-icon><UploadFilled /></el-icon>
            <div>点击或拖拽上传</div>
          </el-upload>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="uploadVisible = false">取消</el-button>
        <el-button type="primary" @click="submitUpload">
          确认上传
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

const uploadVisible = ref(false)

const videoList = ref([
  {
    id: 1,
    title: '基础和弦教学',
    course: '吉他入门',
    duration: '12:30',
    createTime: '2025-01-01'
  },
  {
    id: 2,
    title: '扫弦技巧',
    course: '进阶技巧',
    duration: '18:45',
    createTime: '2025-01-05'
  }
])

const uploadForm = ref({
  title: '',
  course: ''
})

const openUploadDialog = () => {
  uploadVisible.value = true
}

const submitUpload = () => {
  ElMessage.success('上传成功（示例）')
  uploadVisible.value = false
}

const editVideo = (row) => {
  ElMessage.info(`编辑视频：${row.title}`)
}

const deleteVideo = (row) => {
  ElMessageBox.confirm(
      `确定删除视频「${row.title}」吗？`,
      '提示',
      { type: 'warning' }
  ).then(() => {
    videoList.value = videoList.value.filter(v => v.id !== row.id)
    ElMessage.success('删除成功')
  })
}
</script>

<style scoped>
.video-manage {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
