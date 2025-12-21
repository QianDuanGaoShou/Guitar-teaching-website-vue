import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/Login.vue'

import StudentHome from '@/views/student/StudentHome.vue'
import CourseList from '@/views/student/CourseList.vue'
import CourseDetail from '@/views/student/CourseDetail.vue'
import VideoPlay from '@/views/student/VideoPlay.vue'
import Practice from '@/views/student/Practice.vue'
import Exam from '@/views/student/Exam.vue'

import TeacherHome from '@/views/teacher/TeacherHome.vue'
import CourseManage from '@/views/teacher/CourseManage.vue'
import VideoUpload from '@/views/teacher/VideoUpload.vue'
import Income from '@/views/teacher/Income.vue'

import AdminHome from '@/views/admin/AdminHome.vue'
import ContentAudit from '@/views/admin/ContentAudit.vue'
import IncomeAudit from '@/views/admin/IncomeAudit.vue'

const routes = [
    { path: '/login', component: Login },

    { path: '/student', component: StudentHome },
    { path: '/student/courses', component: CourseList },
    { path: '/student/course/:id', component: CourseDetail },
    { path: '/student/video/:id', component: VideoPlay },
    { path: '/student/practice', component: Practice },
    { path: '/student/exam', component: Exam },

    { path: '/teacher', component: TeacherHome },
    { path: '/teacher/course', component: CourseManage },
    { path: '/teacher/upload', component: VideoUpload },
    { path: '/teacher/income', component: Income },

    { path: '/admin', component: AdminHome },
    { path: '/admin/audit', component: ContentAudit },
    { path: '/admin/income', component: IncomeAudit }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
