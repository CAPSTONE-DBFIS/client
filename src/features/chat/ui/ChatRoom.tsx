import { chatMessageList } from '@/entities/chat/api/chat'
import { messagesType, sourceType } from '@/entities/chat/type/chat.type'
import { ChatInput } from '@/entities/chat/ui/ChatInput'
import { ChatLists } from '@/entities/chat/ui/ChatLists'
import { Box } from '@/shared/ui/Box'
import { useEffect, useRef, useState } from 'react'

export const ChatRoom = ({
    id,
    setUserAnalysisStart,
}: {
    id: number
    setUserAnalysisStart: (val: boolean) => void
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [chat, setChat] = useState('') // 화면에 표시할 채팅 텍스트
    const chatRef = useRef('')
    const [messages, setMessages] = useState<messagesType[]>([])
    const [isFixedDisabled, setIsFixedDisabled] = useState(false)

    const scrollToBottom = () => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        const getMessages = async () => {
            try {
                if (id !== null && id !== -1) {
                    const response = await chatMessageList(id)
                    setMessages(response.data)
                }
            } catch (error) {
                console.error('메시지 불러오기 실패:', error)
            } finally {
                scrollToBottom() // 메시지 로딩 후 스크롤을 맨 아래로 이동;
            }
        }
        getMessages()
    }, [id])

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop
            setIsFixedDisabled(window.innerHeight - scrollY <= 400)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const onStreamStart = (query: string) => {
        const newMessage: messagesType = {
            id: new Date().getTime(),
            message: query,
            response: chat,
            createdAt: new Date().toISOString(),
            sender: 'current-client',
            source: [],
            log: [],
        }
        setMessages((prevMessages) => [...prevMessages, newMessage]) // 새로운 메시지를 추가
        scrollToBottom() // 스크롤을 맨 아래로 이동
    }

    const onStreamUpdate = (
        token?: string,
        list?: sourceType[],
        log?: string
    ) => {
        chatRef.current += token
        setMessages((prev) => {
            const updated = [...prev]
            const lastIndex = updated.length - 1
            if (lastIndex >= 0) {
                updated[lastIndex] = {
                    ...updated[lastIndex],
                    response: chatRef.current,
                    source:
                        list && list.length > 0
                            ? list
                            : updated[lastIndex].source,
                    log: log
                        ? [...(updated[lastIndex].log || []), log]
                        : updated[lastIndex].log,
                }
            }
            return updated
        })
        scrollToBottom() // 스크롤을 맨 아래로 이동
    }

    const onStreamEnd = () => {
        chatRef.current = ''
        setChat('')
        console.log('END')
        setUserAnalysisStart(true)
    }

    return (
        <Box as="main" style={{ height: '100%', width: '1200px' }}>
            <ChatLists ref={ref} messages={messages} id={id} />
            {id !== -1 && (
                <ChatInput
                    chatId={id}
                    onStreamStart={onStreamStart}
                    onStreamUpdate={onStreamUpdate}
                    onStreamEnd={onStreamEnd}
                    isfixedDisabled={isFixedDisabled}
                />
            )}
        </Box>
    )
}
