import { Box } from '@/shared/ui/Box'
import * as S from './Chat.css'
import Send from '@/shared/asset/icon/paper-airplane.svg?react'
import { useId } from 'react'

export const ChatInput = () => {
    const id = useId()
    return (
        <Box
            as={'label'}
            className={S.inputContainer}
            background="white"
            htmlFor={id}
        >
            <Box
                as={'input'}
                placeholder="검색어를 입력해주세요."
                className={S.input}
                id={id}
            />
            <Box as={'button'} className={S.inputBtn}>
                <Send
                    width={16}
                    height={16}
                    style={{ transform: 'rotate(45deg)' }}
                    fill="#ffffff"
                />
            </Box>
        </Box>
    )
}
