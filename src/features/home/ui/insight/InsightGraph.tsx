import { Box } from '@/shared/ui/Box'

import { Button } from '@/shared/ui/Button'
import { useEffect, useState } from 'react'
import Chart from '@/entities/insight/ui/Chart'
import {
    CurrentKeywordType,
    InsightDataDailyType,
    RelatedDataType,
} from '@/entities/insight/type/data.type'
import {
    getDomesticInsight,
    getDomesticWeeklyInsight,
} from '@/entities/insight/api/insight'
import KeywordTreemap from '@/entities/insight/ui/Treemap'
import { useNavigate } from 'react-router-dom'

export const InsightGraph = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState('')
    const [dailyData, setDailyData] = useState<InsightDataDailyType[]>([])
    const [weeklyData, setWeeklyData] = useState<InsightDataDailyType[]>([])
    const [relatedData, setRelatedData] = useState<RelatedDataType[]>([])
    const [currentKeyword, setCurrentKeyword] = useState<CurrentKeywordType>({
        isDaily: true,
        keyword: '',
    })
    useEffect(() => {
        if (currentKeyword.keyword) {
            if (currentKeyword.isDaily) {
                dailyData.filter((data) => {
                    if (data.keyword === currentKeyword.keyword) {
                        setRelatedData(data.relatedKeywords)
                    }
                })
            } else {
                weeklyData.filter((data) => {
                    if (data.keyword === currentKeyword.keyword) {
                        setRelatedData(data.relatedKeywords)
                    }
                })
            }
        }
    }, [currentKeyword, dailyData, weeklyData])

    useEffect(() => {
        setRelatedData([])
        setCurrentKeyword({ isDaily: true, keyword: '' })
    }, [date])

    useEffect(() => {
        if (date === '') {
            const today = new Date()
            const year = today.getFullYear()
            const month = String(today.getMonth() + 1).padStart(2, '0')
            const day = String(today.getDate()).padStart(2, '0')
            setDate(`${year}-${month}-${day}`)
            handleCheckButtonForDate(`${year}-${month}-${day}`)
        }
    }, [date])

    const handleCheckButtonForDate = async (targetDate: string) => {
        const dailyResponse = await getDomesticInsight(targetDate)
        const weeklyResponse = await getDomesticWeeklyInsight(targetDate)

        if (dailyResponse.status === 200) {
            setDailyData(dailyResponse.data?.top_keywords)
            setWeeklyData(weeklyResponse.data?.top_weekly_keywords)
        } else {
            alert('조회에 실패했습니다. 다시 시도해주세요.')
        }
    }

    return (
        <Box display="flex" flexDirection="column" style={{ gap: '24px' }}>
            <Chart
                dailyData={dailyData}
                weeklyData={weeklyData}
                date={date}
                setCurrentKeyword={(isDaily: boolean, keyword: string) =>
                    setCurrentKeyword({ isDaily, keyword })
                }
            />
            <KeywordTreemap
                data={relatedData}
                isDaily={currentKeyword.isDaily}
                currentKeyword={currentKeyword.keyword}
            />
            <Button
                type="secondary"
                size="medium"
                width="100%"
                onClickFunc={() => {
                    navigate('/insight')
                    window.scrollTo(0, 0)
                }}
            >
                다양한 인사이트 보러가기
            </Button>
        </Box>
    )
}
