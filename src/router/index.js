import { createRouter, createWebHistory } from 'vue-router'

// ====================
// 公共页面
// ====================
import Login from '@/views/login/Login.vue'

// ====================
// 布局
// ====================
import MainLayout from '@/layout/MainLayout.vue'
import TeacherLayout from '@/layout/TeacherLayout.vue'
import AdminLayout from '@/layout/AdminLayout.vue'

// ====================
// 学员端页面
// ====================
import StudentHome from '@/views/student/StudentHome.vue'
import CourseList from '@/views/student/CourseList.vue'
import CourseDetail from '@/views/student/CourseDetail.vue'
import VideoPlay from '@/views/student/VideoPlay.vue'
import Practice from '@/views/student/Practice.vue'
import Exam from '@/views/student/Exam.vue'

// ====================
// 讲师端页面（⚠️全部真实存在）
// ====================
import TeacherHome from '@/views/teacher/TeacherHome.vue'
import CourseManage from '@/views/teacher/CourseManage.vue'
import VideoManage from '@/views/teacher/VideoManage.vue'
import PracticeManage from '@/views/teacher/PracticeManage.vue'
import Income from '@/views/teacher/Income.vue'
import Profile from '@/views/teacher/Profile.vue'

// ====================
// 管理员端页面
// ====================
import AdminHome from '@/views/admin/AdminHome.vue'
import ContentAudit from '@/views/admin/ContentAudit.vue'
import IncomeAudit from '@/views/admin/IncomeAudit.vue'

const routes = [
    // 默认重定向
    {
        path: '/',
        redirect: '/login'
    },

    // 登录
    {
        path: '/login',
        component: Login
    },

    /**
     * =====================
     * 学员端
     * =====================
     */
    {
        path: '/student',
        component: MainLayout,
        children: [
            { path: '', component: StudentHome },
            { path: 'courses', component: CourseList },
            { path: 'course/:id', component: CourseDetail },
            { path: 'video/:id', component: VideoPlay },
            { path: 'practice', component: Practice },
            { path: 'exam', component: Exam }
        ]
    },

    /**
     * =====================
     * 讲师端（重点）
     * =====================
     */
    {
        path: '/teacher',
        component: TeacherLayout,
        children: [
            { path: '', component: TeacherHome },
            { path: 'course', component: CourseManage },
            { path: 'video', component: VideoManage },
            { path: 'practice', component: PracticeManage },
            { path: 'income', component: Income },
            { path: 'profile', component: Profile }
        ]
    },

    /**
     * =====================
     * 管理员端
     * =====================
     */
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', component: AdminHome },
            { path: 'audit', component: ContentAudit },
            { path: 'income', component: IncomeAudit }
        ]
    },

    // 兜底
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
