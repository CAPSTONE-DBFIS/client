import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './NoneChatList.css'

const exampleMessages = [
    '이번 주 인기 키워드 알려줘',
    'IT 관련 트렌드 분석해줘',
    '이번주 뉴스에서 가장 많이 언급된 주제는?',
]

export const NoneChatList = () => {
    return (
        <Box
            className={S.emptyContainer}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Text fontSize="title1" fontWeight="bold">
                🤖 TRENDB에게 궁금한 내용을 물어보세요!
            </Text>
            <Text
                fontSize="body"
                color="neutral-300"
                style={{ marginTop: '8px', marginBottom: '16px' }}
            >
                트렌드 분석, 키워드 통계, 인사이트 등 다양한 질문이 가능합니다.
            </Text>
            <Box
                display="flex"
                style={{ gap: '8px', marginTop: '24px' }}
                justifyContent="center"
            >
                {exampleMessages.map((msg) => (
                    <Box as="div" className={S.exampleButton} key={msg}>
                        {msg}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
