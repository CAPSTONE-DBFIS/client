import { llmModelType } from '@/features/chat/type/chat.type'
import axiosInstance from '@/shared/api/axios'

export const chatQuery = async (
    chatId: number,
    query: string,
    personaId: number,
    llmModelType: llmModelType,
    files: string[]
) => {
    const params = new URLSearchParams({
        query,
        personaId: personaId.toString(),
        llmModelType,
    })

    const response = await axiosInstance.post(
        `/api/chat/chatroom/${chatId}/agent-query?${params.toString()}`,
        { files }
    )

    return response
}

export const chatMessageList = async (chatId: number) => {
    const response = await axiosInstance.get(
        `/api/chatbot/chatroom/${chatId}/messages`
    )

    return response
}
