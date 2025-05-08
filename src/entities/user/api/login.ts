import { login as loginProps } from '@/entities/user/login.type'
import axiosInstance from '@/shared/api/axios'

export const login = async (data: loginProps) => {
    const response = await axiosInstance.post('/api/login', data)

    return response
}
