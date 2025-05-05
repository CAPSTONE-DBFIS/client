import { Message } from '@/entities/message/type/message.type'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import Recommend from '@/shared/asset/icon/thumb-up.svg?react'
import UnRecommend from '@/shared/asset/icon/thumb-down.svg?react'
import Copy from '@/shared/asset/icon/copy.svg?react'
import Management from '@/shared/asset/icon/cloud-upload.svg?react'

import * as S from './Chat.css'

export const ChatListItem = (message: Message) => {
    return (
        <Box display="flex" flexDirection="column" className={S.list}>
            <Box display="flex" flexDirection="column" style={{ gap: '6px' }}>
                <Box display="flex" alignItems="center" style={{ gap: '8px' }}>
                    <Box className={S.profile} background="neutral-900"></Box>
                    <Text fontSize="subHeadline" color="neutral-500">
                        {message.title}
                    </Text>
                </Box>
                <Box>
                    <Text>{message.content}</Text>
                </Box>
            </Box>
            <ChatListItemButtons />
        </Box>
    )
}

const ChatListItemButtons = () => {
    return (
        <Box display="flex" justifyContent="space-between">
            <Box display="flex" style={{ gap: '4px' }}>
                <Box as={'button'} className={S.button} background="neutral-20">
                    <Recommend width={16} height={16} />
                </Box>
                <Box as={'button'} className={S.button} background="neutral-20">
                    <UnRecommend width={16} height={16} />
                </Box>
                <Box as={'button'} className={S.button} background="neutral-20">
                    <Copy width={16} height={16} />
                </Box>
            </Box>
            <Box as={'button'} className={S.button} background="white">
                <Management width={16} height={16} />
                <Text fontSize="subHeadline" color="neutral-80">
                    관리로 이동
                </Text>
            </Box>
        </Box>
    )
}
