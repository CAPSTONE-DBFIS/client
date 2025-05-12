import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './NoneChatList.css'

const exampleMessages = [
    {
        title: '🔍 뉴스 및 트렌드 분석',
        summary: '국내외 IT 뉴스를 검색하고, 키워드 트렌드를 분석해 시각화 및 자동 보고서 생성까지 지원합니다',
        example: ['[국내/해외] 뉴스 찾아줘', '[국내/해외] 기사 찾아줘'],
    },
    {
        title: '🌐 외부 정보 검색 및 콘텐츠 추출',
        summary: '웹 문서 및 블로그를 검색하고, 요약 및 분석을 지원합니다',
        example: ['웹 문서 찾아줘', '[URL] 요약해줘'],
    },
    {
        title: '📚 백과 정보 검색',
        summary: '위키피디아, 나무위키 등 사전 정보를 검색하고, 요약 및 분석을 지원합니다',
        example: ['정의 찾아줘'],
    },
    {
        title: '📊 시계열 데이터 및 시각화',
        summary: '시계열 데이터를 검색하고, 시각화 및 분석을 지원합니다',
        example: ['Google Trends', '주식 시세'],
    },
    {
        title: '📺 커뮤니티 및 블로그 검색',
        summary: '커뮤니티 및 블로그를 검색하고, 요약 및 분석을 지원합니다',
        example: ['다음', '네이버', 'Reddit', '트위터(X)', '유튜브'],
    },
    {
        title: '🎨 멀티미디어 및 이미지',
        summary: '한국어 프롬프트 → 영어 상세 묘사 생성 → 이미지 생성 과정을 통해 고품질 이미지를 생성합니다',
        example: ['DALL·E 3 이미지'],
    },
    {
        title: '🧠 학술 논문 검색',
        summary: '학술 논문을 검색하고, 요약 및 분석을 지원합니다',
        example: ['전 세계 학술 논문 검색'],
    },
]

export const NoneChatList = () => {
    return (
        <Box
            className={S.emptyContainer}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ gap: '36px' }}
        >
            <Text fontSize="title1" fontWeight="bold">
                🤖 TRENDB에게 궁금한 내용을 물어보세요!
            </Text>
            <Box
                display="flex"
                style={{
                    gap: '24px',
                    marginTop: '24px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
                justifyContent="center"
            >
                {exampleMessages.map((msg) => (
                    <Box
                        display="flex"
                        flexDirection="column"
                        key={msg.title}
                        alignItems="center"
                        style={{
                            maxWidth: '400px',
                            minHeight: '160px',
                            padding: '16px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '12px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <Text
                            fontSize="title2"
                            fontWeight="semibold"
                            color="neutral-500"
                        >
                            {msg.title}
                        </Text>
                        <Text align='center' fontSize='subHeadline' color='neutral-100'>
                            {msg.summary}
                        </Text>
                        <Box
                            display="flex"
                            style={{ gap: '8px', marginTop: '8px' }}
                        >
                            {msg.example.map((example) => (
                                <Box
                                    as="div"
                                    className={S.exampleButton}
                                    key={example}
                                >
                                    {example}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
