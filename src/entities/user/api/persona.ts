import axiosInstance from '@/shared/api/axios'

export const putPersona = async (
    id: number,
    body: { name: string; prompt: string; active: boolean }
) => {
    const response = await axiosInstance.put(`/api/persona/${id}`, body)
    return response
}

export const delPersona = async (id: number) => {
    const response = await axiosInstance.delete(`/api/persona/${id}`)
    return response
}

export const getPersona = async () => {
    const response = await axiosInstance.get(`/api/persona`)
    return response
}

export const postPersona = async (data: {
    name: string
    prompt: string
    preset: boolean
}) => {
    const response = await axiosInstance.post(`/api/persona`, data)
    return response
}
