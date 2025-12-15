import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'

import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import Home from '@/pages/home/Home.vue'
import CourseDetail from '@/pages/course/CourseDetail.vue'
import LessonPlayer from '@/pages/course/LessonPlayer.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },

    {
        path: '/',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/course/:id',
        component: CourseDetail,
        meta: { requiresAuth: true }
    },
    {
        path: '/course/:id/lesson/:lessonId',
        component: LessonPlayer,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    if (to.meta.requiresAuth && !userStore.token) {
        next('/login')
    } else {
        next()
    }
})

export default router
