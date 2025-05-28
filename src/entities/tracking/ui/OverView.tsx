import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import Speak from '@/shared/asset/icon/speakerphone.svg?react'
import * as style from './KeyOver.css'
import { OverViewData } from '../type/report.type'
import ReactMarkdown from 'react-markdown'
import { Graph } from './Graph'
import ArticleTreemap from './Article'
interface IOverViewReport {
    overData: OverViewData
}
export const OverView: React.FC<IOverViewReport> = ({ overData }) => {
    const articleCntChange = JSON.parse(overData.articleCntChange)
    return (
        <Box style={{ padding: '24px 0', position: 'relative' }}>
            <Box style={{ padding: '0 24px' }}>
                <Text fontSize="title1" fontWeight="bold">
                    {overData.createdOrder}주차 핵심 트렌드 인사이트
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
                        <Text fontSize="title2">기사 언급량 통계</Text>
                        <Box
                            style={{
                                paddingTop: '20px',
                            }}
                        >
                            <Graph
                                data={overData.article.map(
                                    ({ date, articleCount }) => ({
                                        date,
                                        articleCount,
                                    })
                                )}
                            />
                        </Box>
                    </Box>
                    <Box className={style.graph}>
                        <Text fontSize="title2">언론사별 보도량</Text>
                        <Box
                            style={{
                                paddingTop: '20px',
                            }}
                        >
                            <ArticleTreemap
                                data={overData.media.map(
                                    ({ date, companyName, frequency }) => ({
                                        data: {
                                            date,
                                            companyName,
                                            frequency,
                                        },
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
                        <ReactMarkdown>{articleCntChange}</ReactMarkdown>
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
