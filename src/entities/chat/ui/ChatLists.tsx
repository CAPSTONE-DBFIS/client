import { ChatListItem } from '@/entities/chat/ui/ChatListItem'
import { Box } from '@/shared/ui/Box'
import { forwardRef } from 'react'
import * as S from './Chat.css'
import { messagesType } from '@/entities/chat/type/chat.type'
import { NoneChatList } from '@/entities/chat/ui/NoneChatList'
interface ChatListsProps {
    messages: messagesType[]
    id: number
}

export const ChatLists = forwardRef<HTMLDivElement, ChatListsProps>(
    ({ messages, id }, ref) => {
        if (messages.length === 0 || id === -1) {
            return <NoneChatList />
        }
        return (
            <Box className={S.listContainer}>
                <Box className={S.lists} ref={ref}>
                    {messages?.map((message) => {
                        return (
                            <ChatListItem key={message.id} message={message} />
                        )
                    })}
                    <Box className={S.bottomPadding} />
                </Box>
            </Box>
        )
    }
)
