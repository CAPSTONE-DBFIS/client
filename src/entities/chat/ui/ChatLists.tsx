import { useCurrentChat } from '@/entities/chat/model/useCurrentChat'
import { ChatListItem } from '@/entities/chat/ui/ChatListItem'
import { Box } from '@/shared/ui/Box'
import { forwardRef, useEffect } from 'react'

import { MOCK_MESSAGE } from '@/entities/chat/const/mock'

import * as S from './Chat.css'

export const ChatLists = forwardRef<HTMLDivElement>((_, ref) => {
    const currentChat = useCurrentChat((state) => state.currentChat)
    const setCurrentChat = useCurrentChat((state) => state.setCurrentChat)
    useEffect(() => {
        setCurrentChat({
            id: 'a',
            title: '제목',
            messages: [
                { title: '제목', content: '내용내용' },
                { title: '제목', content: '내용내용' },
                { title: '제목', content: '내용내용' },
                { title: '제목', content: '내용내용' },
            ],
        }) // data fetching
    }, [])

    return (
        <Box className={S.lists} ref={ref}>
            {currentChat?.messages.map((message, index) => {
                console.log(message)
                return (
                    <ChatListItem
                        key={currentChat.id + ':' + index}
                        title={MOCK_MESSAGE.title}
                        content={MOCK_MESSAGE.content}
                    />
                )
            })}
        </Box>
    )
})
