import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import Recommend from '@/shared/asset/icon/thumb-up.svg?react'
import UnRecommend from '@/shared/asset/icon/thumb-down.svg?react'
import Copy from '@/shared/asset/icon/copy.svg?react'
import LinkIcon from '@/shared/asset/icon/link.svg?react'

import * as S from './Chat.css'
import { messagesType } from '@/entities/chat/type/chat.type'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'
import { Popup } from '@/shared/ui/Popup'
import { usePopup } from '@/shared/lib/hooks/usePopup'

export const ChatListItem = ({ message }: { message: messagesType }) => {
    const hadleCopy = () => {
        navigator.clipboard.writeText(message.response)
    }
    return (
        <Box display="flex" flexDirection="column" className={S.list}>
            <Box display="flex" flexDirection="column" style={{ gap: '6px' }}>
                <Box display="flex" alignItems="center" style={{ gap: '8px' }}>
                    <Box className={S.profile} background="neutral-900"></Box>
                    <Text fontSize="subHeadline" color="neutral-500">
                        {message.message}
                    </Text>
                </Box>
                <Box>
                    <Box className={S.response}>
                        {message.response ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    a: ({ href, children, ...props }) => (
                                        <CustomAnchor
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            {...props}
                                        >
                                            <LinkIcon
                                                width={10}
                                                height={10}
                                                style={{ marginLeft: '4px' }}
                                            />
                                            {children}
                                        </CustomAnchor>
                                    ),
                                }}
                            >
                                {message.response}
                            </ReactMarkdown>
                        ) : (
                            <LoadingDots />
                        )}
                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" style={{ gap: '4px' }}>
                    <Box
                        as={'button'}
                        className={S.button}
                        background="neutral-20"
                    >
                        <Recommend width={16} height={16} />
                    </Box>
                    <Box
                        as={'button'}
                        className={S.button}
                        background="neutral-20"
                    >
                        <UnRecommend width={16} height={16} />
                    </Box>
                    <Box
                        as={'button'}
                        className={S.button}
                        background="neutral-20"
                        onClick={hadleCopy}
                    >
                        <Copy width={16} height={16} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export const LoadingDots = () => {
    const [dotCount, setDotCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4) // 0 ~ 3
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return <Text color="neutral-100">분석 중{'.'.repeat(dotCount)}</Text>
}

const CustomAnchor = ({
    href,
    children,
    ...props
}: {
    href: string | undefined
    children: React.ReactNode
    [key: string]: unknown
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { showPopup, hidePopup, config } = usePopup()

    const hanldeMouseEnter = () => {
        showPopup()
    }
    const hanldeMouseLeave = () => {
        hidePopup()
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={hanldeMouseEnter}
            onMouseLeave={hanldeMouseLeave}
            {...props}
        >
            {children}
            <Popup config={config} LEFT={-15} TOP={20}>
                <Text fontSize="subHeadline" color="neutral-500">
                    {href}
                </Text>
            </Popup>
        </a>
    )
}
