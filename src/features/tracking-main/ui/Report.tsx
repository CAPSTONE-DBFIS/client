import { useEffect, useState } from 'react'
//components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
//icon
import Calendar from '@/shared/asset/icon/calendar.svg?react'
import Search from '@/shared/asset/icon/search.svg?react'
import Data from '@/shared/asset/icon/chart-square-bar.svg?react'
import Right from '@/shared/asset/icon/cheveron-right.svg?react'

//css
import { colors } from '@/app/token'
import * as style from './styles/report.css'
import {
    getArticle,
    getLlm,
    getMedia,
    getRelatedWord,
    getSentiments,
} from '@/entities/tracking/api/report'
import {
    IReportArticle,
    IReportKeyword,
    IReportLlm,
    IReportNews,
    IReportSentiments,
    KeywordData,
    OverViewData,
} from '@/entities/tracking/type/report.type'
import { Keyword } from '@/entities/tracking/ui/Keyword'
import { OverView } from '@/entities/tracking/ui/OverView'
import { useTrackingState } from '@/entities/tracking/store/trackingStore'
interface IReportProps {
    id: number // 선택된 리스트 ID
    onClose: () => void
}

/**
 * Report 컴포넌트
 * 요약 대시보드와 키워드 분석을 표시
 * @param {number} id - 선택된 리스트 id
 * @returns {JSX.Element}
 */

export const Report: React.FC<IReportProps> = ({ id, onClose }) => {
    const [selectedTaps, setSelctedTaps] = useState(false)

    const [llm, setLlm] = useState<IReportLlm[]>([])
    const [sentiments, setSentiments] = useState<IReportSentiments[]>([])
    const [relatedWord, setRelatedWord] = useState<IReportKeyword[]>([])
    const [media, setMedia] = useState<IReportNews[]>([])
    const [article, setArticle] = useState<IReportArticle[]>([])
    const [overviewData, setOverviewData] = useState<OverViewData[]>([])
    const [keywordData, setKeywordData] = useState<KeywordData[]>([])
    const selectedTeam = useTrackingState((state) => state.selectedTeam)
    const selectedProject = useTrackingState((state) => state.selectedProject)

    const onTapsChange = () => {
        setSelctedTaps((prev) => !prev)
    }
    useEffect(() => {
        const fetchReport = async () => {
            const llmRes = await getLlm(id)
            const sentimentsRes = await getSentiments(id)
            const relatedRes = await getRelatedWord(id)
            const mediaRes = await getMedia(id)
            const articleRes = await getArticle(id)

            setLlm(llmRes.data) //요약+키워드드
            setSentiments(sentimentsRes.data) //요약약
            setRelatedWord(relatedRes.data) //요약
            setMedia(mediaRes.data) //키워드
            setArticle(articleRes.data) //키워드
            // console.log(llmRes.data)
            console.log(sentimentsRes.data)
            // console.log(relatedRes.data)
            // console.log(mediaRes.data)
            // console.log(articleRes.data)
        }
        fetchReport()
    }, [id])

    useEffect(() => {
        const keywordData: KeywordData[] = llm.map((item: IReportLlm) => ({
            ...item,
            relatedWord: relatedWord.filter(
                (r: IReportKeyword) => r.createdOrder === item.createdOrder
            ),
            setiments: sentiments.filter(
                (s: IReportSentiments) => s.createOrder === item.createdOrder
            ),
        }))
        setKeywordData(keywordData)

        const overviewData: OverViewData[] = llm.map((item: IReportLlm) => ({
            ...item,
            media: media.filter(
                (m: IReportNews) => m.createdOrder === item.createdOrder
            ),
            article: article.filter(
                (a: IReportArticle) => a.createOrder === item.createdOrder
            ),
        }))
        setOverviewData(overviewData)
    }, [llm, sentiments, relatedWord, media, article])

    console.log(overviewData)
    console.log(keywordData)
    return (
        <Box style={{ width: '1200px', padding: '36px' }}>
            <Box display="flex" flexDirection="column">
                <Box
                    display="flex"
                    alignItems="center"
                    color={'neutral-900'}
                    style={{ gap: '8px', fontWeight: '500' }}
                >
                    <Text fontSize="title1" fontWeight="semibold">
                        {llm[0]?.keyword}
                    </Text>
                </Box>
                <Box>
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        className={style.teamWrapper}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            className={style.team}
                        >
                            <Right
                                width={17}
                                height={17}
                                fill={colors['neutral-60']}
                            />
                            <Text fontSize="body" color={'neutral-60'}>
                                {selectedTeam?.name || '팀'}
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={style.team}
                        >
                            <Right
                                width={17}
                                height={17}
                                fill={colors['neutral-60']}
                            />
                            <Text fontSize="body" color={'neutral-60'}>
                                {selectedProject?.name || '프로젝트'}
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={style.team}
                        >
                            <Right
                                width={17}
                                height={17}
                                fill={colors['neutral-60']}
                            />
                            <Text fontSize="body" color={'neutral-60'}>
                                {llm[0]?.keyword}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ padding: '16px 0' }}>
                <Box display="flex" alignItems="center" style={{ gap: '16px' }}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        style={{ gap: '4px' }}
                    >
                        <Calendar width={14} height={14} />
                        <Text fontSize="subHeadline">
                            기간: {'2025-05-13 ~ 2025-05-28'}
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        style={{ gap: '4px' }}
                    >
                        <Search width={14} height={14} />
                        <Text fontSize="subHeadline">연관 키워드: {0}개</Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        style={{ gap: '4px' }}
                    >
                        <Data width={14} height={14} />
                        <Text fontSize="subHeadline" align="center">
                            데이터 포인트: {}
                        </Text>
                    </Box>
                    <button onClick={onClose}>닫기</button>
                </Box>
            </Box>
            <Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    style={{ width: '100%' }}
                >
                    <Box
                        onClick={() => onTapsChange()}
                        className={`${style.tap} ${selectedTaps == false ? style.selectedTap : ''}`}
                    >
                        <Text fontSize="title2" fontWeight="semibold">
                            요약 대시보드
                        </Text>
                    </Box>
                    <Box
                        onClick={() => onTapsChange()}
                        className={`${style.tap} ${selectedTaps == true ? style.selectedTap : ''}`}
                    >
                        <Text fontSize="title2" fontWeight="semibold">
                            키워드 분석
                        </Text>
                    </Box>
                </Box>
            </Box>
            {selectedTaps ? (
                // 키워드분석

                <Box>
                    {keywordData.length === 0 ? (
                        <Text>키워드 데이터가 없습니다.</Text>
                    ) : (
                        keywordData.map((item) => (
                            <Keyword key={item.createdOrder} keyData={item} />
                        ))
                    )}
                </Box>
            ) : (
                // 요약대시보드
                <Box>
                    {overviewData.length === 0 ? (
                        <Text>요약 데이터가 없습니다.</Text>
                    ) : (
                        overviewData.map((item) => (
                            <OverView key={item.createdOrder} overData={item} />
                        ))
                    )}
                </Box>
            )}
        </Box>
    )
}
