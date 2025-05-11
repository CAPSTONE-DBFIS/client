import { refreshToken } from '@/entities/user/api/login'
import axios from 'axios'

// axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    withCredentials: true, // CORS 요청 시 쿠키를 포함
    headers: {
        'Content-Type': 'application/json',
    },
})

// 요청 인터셉터
axiosInstance.interceptors.request.use(
    (config) => {
        // 로컬 스토리지에서 토큰 가져오기
        const user = localStorage.getItem('userInfoStorage')
        if (user) {
            const parsedUser = JSON.parse(user)
            const accessToken = parsedUser.state?.accessToken

            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
let isRefreshing = false

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !isRefreshing) {
            isRefreshing = true
            try {
                await refreshToken()
                isRefreshing = false
                // 실패한 요청 재시도
                return axiosInstance(error.config)
            } catch (e) {
                isRefreshing = false
                return Promise.reject(e)
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
