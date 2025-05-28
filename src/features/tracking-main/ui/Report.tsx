import { useEffect, useState } from 'react'
//components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
//icon
import Calendar from '@/shared/asset/icon/calendar.svg?react'
import Search from '@/shared/asset/icon/search.svg?react'
import Data from '@/shared/asset/icon/chart-square-bar.svg?react'
import Right from '@/shared/asset/icon/cheveron-right.svg?react'
import Back from '@/shared/asset/icon/x 2.svg?react'

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
    const [indicatorIndex, setIndicatorIndex] = useState(0)

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
        }
        fetchReport()
    }, [id])

    useEffect(() => {
        const keywordData: KeywordData[] = llm
            .map((item: IReportLlm) => ({
                ...item,
                relatedWord: relatedWord.filter(
                    (r: IReportKeyword) => r.createdOrder === item.createdOrder
                ),
                setiments: sentiments.filter(
                    (s: IReportSentiments) =>
                        s.createOrder === item.createdOrder
                ),
            }))
            .sort((a, b) => b.createdOrder - a.createdOrder)
        setKeywordData(keywordData)

        const overviewData: OverViewData[] = llm
            .map((item: IReportLlm) => ({
                ...item,
                media: media.filter(
                    (m: IReportNews) => m.createdOrder === item.createdOrder
                ),
                article: article.filter(
                    (a: IReportArticle) => a.createOrder === item.createdOrder
                ),
            }))
            .sort((a, b) => b.createdOrder - a.createdOrder)
        setOverviewData(overviewData)
    }, [llm, sentiments, relatedWord, media, article])

    const totalArticleCount = article.reduce(
        (sum, item) => sum + item.articleCount,
        0
    )

    const weekLabels = () => {
        return [...overviewData].reverse().map((item) => `${item.createdOrder}`)
    }

    const handleIndex = (index: number) => {
        setIndicatorIndex(index)
    }

    return (
        <Box style={{ width: '1200px', padding: '36px' }}>
            <Box display="flex" flexDirection="column">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    color={'neutral-900'}
                    style={{ gap: '8px', fontWeight: '500' }}
                >
                    <Text fontSize="title1" fontWeight="semibold">
                        {llm[0]?.keyword}
                    </Text>
                    <Box as={'button'} onClick={onClose}>
                        <Back
                            width={25}
                            height={25}
                            fill={colors['neutral-300']}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        className={style.teamWrapper}
                        onClick={onClose}
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
                            기간:
                            {`${article[0]?.date}~${article[article.length - 1]?.date}`}
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        style={{ gap: '4px' }}
                    >
                        <Search width={14} height={14} />
                        <Text fontSize="subHeadline">
                            연관 키워드: {relatedWord.length}개
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        style={{ gap: '4px' }}
                    >
                        <Data width={14} height={14} />
                        <Text fontSize="subHeadline" align="center">
                            데이터 포인트: {totalArticleCount}
                        </Text>
                    </Box>
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
                    {keywordData.length > 0 && (
                        <>
                            {keywordData[indicatorIndex] && (
                                <Keyword
                                    key={
                                        keywordData[indicatorIndex].createdOrder
                                    }
                                    keyData={keywordData[indicatorIndex]}
                                />
                            )}

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                style={{ gap: '12px', padding: '20px 0' }}
                            >
                                {weekLabels().map((label, index) => (
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        key={index}
                                        onClick={() => handleIndex(index)}
                                        className={style.indicator}
                                        style={{
                                            backgroundColor:
                                                indicatorIndex === index
                                                    ? colors['neutral-40']
                                                    : colors['neutral-20'],
                                        }}
                                    >
                                        <Text fontSize="title3">{label}</Text>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    )}
                </Box>
            ) : (
                // 요약대시보드
                <Box>
                    {overviewData.length > 0 && (
                        <>
                            {overviewData[indicatorIndex] && (
                                <OverView
                                    key={
                                        overviewData[indicatorIndex]
                                            .createdOrder
                                    }
                                    overData={overviewData[indicatorIndex]}
                                />
                            )}

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                style={{ gap: '12px', padding: '20px 0' }}
                            >
                                {weekLabels().map((label, index) => (
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        key={index}
                                        onClick={() => handleIndex(index)}
                                        className={style.indicator}
                                        style={{
                                            backgroundColor:
                                                indicatorIndex === index
                                                    ? colors['neutral-40']
                                                    : colors['neutral-20'],
                                        }}
                                    >
                                        <Text fontSize="title3">{label}</Text>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    )}
                </Box>
            )}
        </Box>
    )
}
