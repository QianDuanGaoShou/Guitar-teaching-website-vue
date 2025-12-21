import axios from 'axios'
import router from '@/router'
import { useUserStore } from '@/store/user'

const service = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(config => {
    const userStore = useUserStore()
    if (userStore.token) {
        config.headers.Authorization = 'Bearer ' + userStore.token
    }
    return config
})

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            if (res.code === 401) {
                const userStore = useUserStore()
                userStore.logout()
                router.push('/login')
            }
            return Promise.reject(res.message || '请求失败')
        }
        return res.data
    },
    error => Promise.reject(error)
)

export default service
