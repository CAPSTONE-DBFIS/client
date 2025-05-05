import { Box } from '@/shared/ui/Box'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

import Plus from '@/shared/asset/icon/plus.svg?react'
import Chat from '@/shared/asset/icon/chat.svg?react'
import Star from '@/shared/asset/icon/star.svg?react'
import Trash from '@/shared/asset/icon/trash.svg?react'
import Edit from '@/shared/asset/icon/pencil-alt.svg?react'
import { colors } from '@/app/token'
import * as S from './AnalysisSidebar.css'
import { useState } from 'react'

export const AnalysisSidebar = () => {
    const [index, setIndex] = useState(0)
    return (
        <Box
            style={{ width: '100%' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box className={S.cell} style={{ padding: '24px 16px' }}>
                <Button size="medium" type="primary" width="225px">
                    <Plus fill={colors.white} width={20} height={20} />
                    <Text color="white">채팅 추가</Text>
                </Button>
            </Box>
            <Box className={S.cell} style={{ padding: '24px 16px' }}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{ width: '100%' }}
                >
                    <Text fontSize="subHeadline" color="neutral-60">
                        채팅 내역 지우기
                    </Text>
                    <Box as={'button'}>
                        <Text fontSize="subHeadline" color="teal-500">
                            Clear All
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box className={`${S.cell} ${S.chatList}`}>
                <Box
                    as="button"
                    style={{ gap: '6px' }}
                    className={`${S.chat} ${index === 0 ? S.selectedChat : ''}`}
                >
                    <Chat
                        width={16}
                        height={16}
                        fill={
                            index === 0
                                ? colors['teal-500']
                                : colors['neutral-900']
                        }
                    />
                    <Text
                        className={S.chatName}
                        color={index === 0 ? 'teal-500' : 'neutral-900'}
                    >
                        내용내용내용내용내용내용내용내용내용내용내용내용
                    </Text>
                    <Box className={S.selectedEdit}>
                        <Star width={16} height={16} />
                        <Trash width={16} height={16} />
                        <Edit width={16} height={16} />
                    </Box>
                </Box>
                <Box
                    as="button"
                    style={{ gap: '6px' }}
                    className={`${S.chat} ${index !== 0 ? S.selectedChat : ''}`}
                    onClick={() => setIndex(1)}
                >
                    <Chat
                        width={16}
                        height={16}
                        fill={
                            index !== 0
                                ? colors['teal-500']
                                : colors['neutral-900']
                        }
                    />
                    <Text
                        className={S.chatName}
                        color={index !== 0 ? 'teal-500' : 'neutral-900'}
                    >
                        내용내용내용내용내용내용내용내용내용내용내용내용
                    </Text>
                    {index !== 0 && (
                        <Box className={S.selectedEdit}>
                            <Star width={16} height={16} />
                            <Trash width={16} height={16} />
                            <Edit width={16} height={16} />
                        </Box>
                    )}
                </Box>
                <Box
                    as="button"
                    style={{ gap: '6px' }}
                    className={`${S.chat} ${index !== 0 ? S.selectedChat : ''}`}
                >
                    <Chat
                        width={16}
                        height={16}
                        fill={
                            index !== 0
                                ? colors['teal-500']
                                : colors['neutral-900']
                        }
                    />
                    <Text
                        className={S.chatName}
                        color={index !== 0 ? 'teal-500' : 'neutral-900'}
                    >
                        내용내용내용내용내용내용내용내용내용내용내용내용
                    </Text>
                    {index !== 0 && (
                        <Box className={S.selectedEdit}>
                            <Star width={16} height={16} />
                            <Trash width={16} height={16} />
                            <Edit width={16} height={16} />
                        </Box>
                    )}
                </Box>
            </Box>
            <Box className={S.cell} style={{ padding: '24px 16px' }}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{ width: '100%' }}
                >
                    <Text fontSize="subHeadline" color="neutral-60">
                        즐겨 찾기
                    </Text>
                    <Box as={'button'}>
                        <Text fontSize="subHeadline" color="teal-500">
                            Clear All
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box className={`${S.cell} ${S.chatList}`}></Box>
        </Box>
    )
}
