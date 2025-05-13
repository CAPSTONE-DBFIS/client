import axiosInstance from '@/shared/api/axios'

export const getPersona = () => {
    const response = axiosInstance.get('/api/persona')
    return response
}
