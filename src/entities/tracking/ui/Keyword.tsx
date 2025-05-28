import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import Speak from '@/shared/asset/icon/speakerphone.svg?react'
import * as style from './KeyOver.css'
import { KeywordData } from '../type/report.type'
import { Graph } from './Graph'
import ReactMarkdown from 'react-markdown'
import { Sentiment } from './Sentiment'

interface IKeywordReport {
    keyData: KeywordData
}

export const Keyword: React.FC<IKeywordReport> = ({ keyData }) => {
    const llmDescription = JSON.parse(keyData.llmDescription)

    return (
        <Box style={{ padding: '24px 0', position: 'relative' }}>
            <Box style={{ padding: '0 24px' }}>
                <Text fontSize="title1" fontWeight="bold">
                    {keyData.createdOrder}주차 핵심 키워드 인사이트
                </Text>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                style={{ gap: '25px', marginTop: '25px' }}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    className={style.graphContainer}
                >
                    <Box className={style.graph}>
                        <Text fontSize="title2">키워드 언급 추이</Text>
                        <Box
                            style={{
                                paddingTop: '20px',
                            }}
                        >
                            <Graph
                                data={keyData.relatedWord.map(
                                    ({ word, frequency }) => ({
                                        word,
                                        frequency,
                                    })
                                )}
                            />
                        </Box>
                    </Box>
                    <Box className={style.graph}>
                        <Text fontSize="title2">감정 분포</Text>
                        <Box
                            style={{
                                paddingTop: '20px',
                            }}
                        >
                            <Sentiment
                                data={keyData.setiments.map(
                                    ({
                                        date,
                                        positiveCount,
                                        negativeCount,
                                        neutralCount,
                                        createOrder,
                                    }) => ({
                                        date,
                                        positiveCount,
                                        negativeCount,
                                        neutralCount,
                                        createOrder,
                                    })
                                )}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={style.textBox}>
                    <Box
                        display="flex"
                        style={{ gap: '8px', marginBottom: '16px' }}
                    >
                        <Speak />
                        <Text fontSize="title2">한눈에 보는 핵심 요약</Text>
                    </Box>
                    <Text fontSize="title3">
                        <ReactMarkdown>{llmDescription}</ReactMarkdown>
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
