import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Chat } from '@/entities/chat/type/chat.type'

export type message = Record<'title' | 'content', string>

interface ChatState {
    currentChat: Chat<string> | null
    setCurrentChat: (chat: Chat<string>) => void
    clearCurrentChat: () => void
}

export const useCurrentChat = create<ChatState>()(
    devtools((set) => ({
        currentChat: null,
        setCurrentChat: (chat: Chat<string>) => set({ currentChat: chat }),
        clearCurrentChat: () => set({ currentChat: null }),
    }))
)
