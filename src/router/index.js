import { createRouter, createWebHistory } from 'vue-router'

// 公共页面
import Login from '@/views/login/Login.vue'

// 学员布局
import MainLayout from '@/layout/MainLayout.vue'

// 讲师 / 管理员布局
import TeacherLayout from '@/layout/TeacherLayout.vue'
import AdminLayout from '@/layout/AdminLayout.vue'

// 学员页面
import StudentHome from '@/views/student/StudentHome.vue'
import CourseList from '@/views/student/CourseList.vue'
import CourseDetail from '@/views/student/CourseDetail.vue'
import VideoPlay from '@/views/student/VideoPlay.vue'
import Practice from '@/views/student/Practice.vue'
import Exam from '@/views/student/Exam.vue'

// 讲师页面
import TeacherHome from '@/views/teacher/TeacherHome.vue'
import CourseManage from '@/views/teacher/CourseManage.vue'
import VideoUpload from '@/views/teacher/VideoUpload.vue'
import Income from '@/views/teacher/Income.vue'

// 管理员页面
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
            {
                path: '',
                name: 'StudentHome',
                component: StudentHome
            },
            {
                path: 'courses',
                name: 'CourseList',
                component: CourseList
            },
            {
                path: 'course/:id',
                name: 'CourseDetail',
                component: CourseDetail
            },
            {
                path: 'video/:id',
                name: 'VideoPlay',
                component: VideoPlay
            },
            {
                path: 'practice',
                name: 'Practice',
                component: Practice
            },
            {
                path: 'exam',
                name: 'Exam',
                component: Exam
            }
        ]
    },

    /**
     * =====================
     * 讲师端
     * =====================
     */
    {
        path: '/teacher',
        component: TeacherLayout,
        children: [
            {
                path: '',
                name: 'TeacherHome',
                component: TeacherHome
            },
            {
                path: 'course',
                name: 'CourseManage',
                component: CourseManage
            },
            {
                path: 'upload',
                name: 'VideoUpload',
                component: VideoUpload
            },
            {
                path: 'income',
                name: 'TeacherIncome',
                component: Income
            }
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
            {
                path: '',
                name: 'AdminHome',
                component: AdminHome
            },
            {
                path: 'audit',
                name: 'ContentAudit',
                component: ContentAudit
            },
            {
                path: 'income',
                name: 'IncomeAudit',
                component: IncomeAudit
            }
        ]
    },

    // 兜底 404（可选但推荐）
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
