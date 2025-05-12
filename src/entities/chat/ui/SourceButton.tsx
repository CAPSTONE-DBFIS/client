import { sourceType } from '@/entities/chat/type/chat.type'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './SourceButton.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function SourceButton({ source }: { source?: sourceType[] }) {
    const [isOpen, setIsOpen] = useState(false)

    if (!source || source.length === 0) {
        return null
    }
    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        setIsOpen(false)
    }

    return (
        <Box className={S.container} onClick={() => setIsOpen(true)}>
            <Text color="white">출처 {source.length}개</Text>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={S.modalContainer}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.4,
                            stiffness: 300,
                            damping: 20,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            style={{ gap: '8px', marginBottom: '16px' }}
                            alignItems="center"
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                style={{ width: '100%' }}
                            >
                                <Box
                                    style={{ flex: 1 }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Text
                                        fontSize="largeTitle"
                                        fontWeight="bold"
                                    >
                                        TRENDB
                                    </Text>
                                    <Text
                                        fontSize="title2"
                                        fontWeight="semibold"
                                        color="neutral-50"
                                    >
                                        ase
                                    </Text>
                                </Box>
                                <Box
                                    as={'button'}
                                    onClick={handleClose}
                                    className={S.button}
                                >
                                    <Text fontSize="title2" color="white">
                                        닫기
                                    </Text>
                                </Box>
                            </Box>
                            <Text fontSize="subHeadline" color="neutral-100">
                                해당 출처를 기반으로 신뢰성이 높은 답변을
                                제공합니다
                            </Text>
                        </Box>
                        {source.map((item) => {
                            return (
                                <Box key={item.id} className={S.sourceBox}>
                                    <Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            style={{ gap: '2px' }}
                                        >
                                            <Text
                                                fontSize="title2"
                                                fontWeight="semibold"
                                            >
                                                {item.title}
                                            </Text>
                                        </Box>

                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            style={{ gap: '2px' }}
                                        >
                                            <Text
                                                fontSize="title3"
                                                color="neutral-500"
                                            >
                                                {item.content}
                                            </Text>
                                        </Box>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                width: 'fit-content',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '4px',
                                                padding: '4px 8px',
                                            }}
                                        >
                                            <Text color="white">바로가기</Text>
                                        </a>
                                    </Box>
                                </Box>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    )
}
