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
import rehypeHighlight from 'rehype-highlight'
import { useEffect, useState } from 'react'
import { Popup } from '@/shared/ui/Popup'
import { usePopup } from '@/shared/lib/hooks/usePopup'
import SourceButton from '@/entities/chat/ui/SourceButton'
import 'highlight.js/styles/github-dark.css' // 원하는 테마

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
                        <SourceButton source={message.source} />
                        {message.response ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                                components={{
                                    strong: ({ children }) => (
                                        <span
                                            style={{
                                                color: '#243757',
                                                fontWeight: 700,
                                            }}
                                        >
                                            {children}
                                        </span>
                                    ),
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
                                    code: ({
                                        children,
                                        className,
                                        ...props
                                    }) => {
                                        if (className)
                                            return (
                                                <CodeWithCopy>
                                                    {children}
                                                </CodeWithCopy>
                                            )
                                        // 인라인 코드
                                        return (
                                            <code
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                    padding: '2px 6px',
                                                    borderRadius: '4px',
                                                    fontSize: '0.875rem',
                                                    fontFamily: 'monospace',
                                                }}
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        )
                                    },
                                }}
                            >
                                {message.response}
                            </ReactMarkdown>
                        ) : (
                            <LoadingDots log={message.log} />
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

export const LoadingDots = ({ log }: { log: string[] | undefined }) => {
    const [dotCount, setDotCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4) // 0 ~ 3
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <Box display="flex" flexDirection="column" style={{ gap: '4px', height: '300px' }}>
            {log && log.length > 0 ? (
                log.map((line, idx) => (
                    <Text key={idx} fontSize="body" color="neutral-100">
                        {line}
                        {'.'.repeat(dotCount)}
                    </Text>
                ))
            ) : (
                <Text fontSize="body" color="neutral-100">
                    분석 중 {'.'.repeat(dotCount)}
                </Text>
            )}
        </Box>
    )
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

const CodeWithCopy = ({ children }: { children: React.ReactNode }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const text = Array.isArray(children)
            ? children.join('')
            : String(children)
        navigator.clipboard.writeText(text.trim())
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div style={{ position: 'relative' }}>
            <pre
                style={{
                    backgroundColor: '#1e1e1e',
                    padding: '1rem',
                    borderRadius: '8px',
                    overflowX: 'auto',
                    color: '#e6e6e6',
                    fontSize: '0.875rem',
                    fontFamily: 'monospace',
                    margin: '1rem 0',
                }}
            >
                <code>{children}</code>
            </pre>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    padding: '4px 8px',
                    cursor: 'pointer',
                }}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}
