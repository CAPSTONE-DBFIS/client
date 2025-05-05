import { ChatLists } from '@/entities/chat/ui/ChatLists'
import { Box } from '@/shared/ui/Box'
import { useRef, useEffect, useState } from 'react'

export const ChatRoom = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [isBottom, setIsBottom] = useState(true)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const handleScroll = () => {
            const isAtBottom = true
            setIsBottom(isAtBottom)
        }

        el.addEventListener('scroll', handleScroll)
        return () => el.removeEventListener('scroll', handleScroll)
    }, [])
    console.log(isBottom)
    return (
        <Box as="main">
            <ChatLists ref={ref} />
            <input placeholder="rasrasrasr" />
        </Box>
    )
}
