import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        userInfo: null
    }),
    actions: {
        setUser(token, userInfo) {
            this.token = token
            this.userInfo = userInfo
            localStorage.setItem('token', token)
        },
        logout() {
            this.token = ''
            this.userInfo = null
            localStorage.removeItem('token')
        }
    }
})
