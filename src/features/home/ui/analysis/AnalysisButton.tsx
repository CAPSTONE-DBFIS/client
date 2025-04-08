import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './AnalysisButton.css'

import SearchCircle from '@/shared/asset/icon/search-circle.svg?react'

import SortDown from '@/shared/asset/icon/sort-descending.svg?react'
import SortUp from '@/shared/asset/icon/sort-ascending.svg?react'
import Help from '@/shared/asset/icon/question-mark-circle.svg?react'

import { colors } from '@/app/token'
import { useId, useRef, useState } from 'react'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'

export const AnalysisButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)
    useClickOutside(ref, () => setIsOpen(false))
    return (
        <Box
            className={S.container}
            onClick={() => setIsOpen(true)}
            ref={ref}
            style={{ borderRadius: isOpen ? '20px' : '50px' }}
        >
            {!isOpen ? (
                <Box display="flex" alignItems="center" style={{ gap: '10px' }}>
                    <SearchCircle fill={colors.white} />
                    <Text color="white">
                        원하시는 트렌드 정보를 검색해보세요
                    </Text>
                </Box>
            ) : (
                <AnalysisButtonOpen />
            )}
            <Box style={{ height: '100%' }}>
                {isOpen ? (
                    <SortUp fill={colors.white} style={{ marginTop: '6px' }} />
                ) : (
                    <SortDown
                        fill={colors.white}
                        style={{ marginTop: '6px' }}
                    />
                )}
            </Box>
        </Box>
    )
}

const AnalysisButtonOpen = () => {
    const id = useId()
    return (
        <Box className={S.openedContainer}>
            <Box
                as="label"
                display="flex"
                alignItems="center"
                htmlFor={id}
                style={{ gap: '10px' }}
            >
                <SearchCircle fill={colors.white} />
                <Box
                    as="input"
                    color="white"
                    fontSize="body"
                    placeholder="원하시는 트렌드 정보를 검색해보세요"
                    className={S.input}
                    id={id}
                />
            </Box>
            <Text fontSize="subHeadline" color="neutral-90">
                내용입력 - 챗봇 타입 선택 - 검색
            </Text>
            <Box display="flex" flexDirection="column" style={{ gap: '8px' }}>
                <Box display="flex" alignItems="center" style={{ gap: '6px' }}>
                    <Box className={S.chatbotBtn}>
                        <Text color="white">RAG 챗봇</Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: '3px' }}
                    >
                        <Help
                            width={12}
                            height={12}
                            fill={colors['neutral-50']}
                        />
                        <Text fontSize="subHeadline" color="neutral-50">
                            Milvus에 저장된 뉴스 기사 내용을 기반으로, 사용자의
                            질문에 맞는 정보를 찾아 쉽고 친절한 말로 답변해주는
                            시스템
                        </Text>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" style={{ gap: '6px' }}>
                    <Box className={S.chatbotBtn}>
                        <Text color="white">Agent Type.1</Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: '3px' }}
                    >
                        <Help
                            width={12}
                            height={12}
                            fill={colors['neutral-50']}
                        />
                        <Text fontSize="subHeadline" color="neutral-50">
                            여러 가지 Tool을 준비해 두고, 모델이 질문을 스스로
                            분석하여 알맞은 Tool을 선택한 다음, 사용자의 질문에
                            대한 답변해주는 시스템
                        </Text>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" style={{ gap: '6px' }}>
                    <Box className={S.chatbotBtn}>
                        <Text color="white">Agent Type.2</Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: '3px' }}
                    >
                        <Help
                            width={12}
                            height={12}
                            fill={colors['neutral-50']}
                        />
                        <Text fontSize="subHeadline" color="neutral-50">
                            LangGraph를 사용해 여러 Tool을 병렬(비동기)로
                            실행하고, 빠르게 결과를 수집한 뒤, 이를 통합하여
                            사용자가 이해하기 쉬운 답변해주는 시스템
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
