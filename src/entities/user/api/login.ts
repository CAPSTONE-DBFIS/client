import { login as loginProps } from '@/entities/user/login.type'
import { useAuthStore } from '@/entities/user/stores/AuthStore'
import axiosInstance from '@/shared/api/axios'

export const login = async (data: loginProps) => {
    const response = await axiosInstance.post('/api/login', data)

    return response
}

export const refreshToken = async () => {
    const refreshToken = useAuthStore.getState().refreshToken
    const response = await axiosInstance.post('/api/token', {
        refreshToken,
    })
    if (response.status === 200) {
        useAuthStore.setState((state) => ({
            ...state,
            accessToken: response.data.accessToken,
        }))
    }
}
