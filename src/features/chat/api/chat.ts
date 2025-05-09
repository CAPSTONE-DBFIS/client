import axiosInstance from '@/shared/api/axios'

export const chatList = async () => {
    const response = await axiosInstance('/api/chatbot/dashboard')
    return response
}

export const addChat = async (type = 'PERSONAL') => {
    const response = await axiosInstance.post(
        `/api/chatbot/chatroom?type=${type}`
    )

    return response
}

export const deleteChat = async (id: number) => {
    const response = await axiosInstance.delete('/api/chatbot/chatroom/' + id)
    return response
}

export const patchFavoriteChat = async (id: number, value: boolean) => {
    const response = await axiosInstance.patch(
        `/api/chatbot/chatroom/${id}/favorite?favorite=${value}`
    )
    return response
}

export const renameChat = async (id: number, value: string) => {
    const response = await axiosInstance.patch(
        `/api/chatbot/chatroom/${id}/rename?newChatroomName=${value}`
    )
    return response
}
