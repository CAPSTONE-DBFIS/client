/* eslint-disable react-hooks/exhaustive-deps */
import TabToggle from '@/entities/insight/ui/TabToggle'
import Domestic from '@/shared/asset/icon/presentation-chart-bar.svg?react'
import Overseas from '@/shared/asset/icon/presentation-chart-line.svg?react'
import { useEffect, useState } from 'react'
import { colors } from '@/app/token'
import * as S from './Insight.css'
import { Box } from '@/shared/ui/Box'
import NewsSearch from '@/entities/news/ui/NewsSearch'
import { Text } from '@/shared/ui/Text'
import Chart from '@/entities/insight/ui/Chart'
import KeywordTreemap from '@/entities/insight/ui/Treemap'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Button } from '@/shared/ui/Button'
import {
    getDomesticInsight,
    getDomesticWeeklyInsight,
    getOverseasInsight,
    getOverseasWeeklyInsight,
} from '@/entities/insight/api/insight'
import {
    CurrentKeywordType,
    InsightDataDailyType,
    RelatedDataType,
} from '@/entities/insight/type/data.type'

const tabs: TabContentProps[] = [
    {
        title: '국내 소식',
        id: 'domestic',
        icon: <Domestic width={30} height={30} />,
        color: '#2b7fff',
        colorName: 'blue-200',
        bgColor: '#e6f0ff',
    },
    {
        title: '해외 소식',
        id: 'overseas',
        icon: <Overseas width={30} height={30} />,
        color: '#ff9f2b',
        colorName: 'yellow-200',
        bgColor: '#fff3e6',
    },
]

export type TabContentProps = {
    title: string
    id: string
    icon: React.ReactNode
    color: string
    colorName: keyof typeof colors
    bgColor: string
}

export const Insight = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [date, setDate] = useState('')
    const [dailyData, setDailyData] = useState<InsightDataDailyType[]>([])
    const [weeklyData, setWeeklyData] = useState<InsightDataDailyType[]>([])
    const [relatedData, setRelatedData] = useState<RelatedDataType[]>([])
    const [currentKeyword, setCurrentKeyword] = useState<CurrentKeywordType>({
        isDaily: true,
        keyword: '',
    })

    useEffect(() => {
        if (date) {
            handleCheckButton()
        }
    }, [activeTabIndex])

    useEffect(() => {
        if (date === '') {
            const today = new Date()
            const year = today.getFullYear()
            const month = String(today.getMonth() + 1).padStart(2, '0')
            const day = String(today.getDate()).padStart(2, '0')
            setDate(`${year}-${month}-${day}`)
            handleCheckButtonForDate(`${year}-${month}-${day}`)
        }
    }, [])

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
    }, [currentKeyword])

    useEffect(() => {
        setRelatedData([])
        setCurrentKeyword({ isDaily: true, keyword: '' })
    }, [activeTabIndex, date])

    const handleCheckButtonForDate = async (targetDate: string) => {
        const dailyResponse =
            activeTabIndex === 0
                ? await getDomesticInsight(targetDate)
                : await getOverseasInsight(targetDate)

        const weeklyResponse =
            activeTabIndex === 0
                ? await getDomesticWeeklyInsight(targetDate)
                : await getOverseasWeeklyInsight(targetDate)

        if (dailyResponse.status === 200) {
            if (activeTabIndex === 0) {
                setDailyData(dailyResponse.data?.top_keywords)
                setWeeklyData(weeklyResponse.data?.top_weekly_keywords)
            } else {
                setDailyData(dailyResponse.data?.top_foreign_keywords)
                setWeeklyData(weeklyResponse.data?.top_weekly_foreign_keywords)
            }
        } else {
            alert('조회에 실패했습니다. 다시 시도해주세요.')
        }
    }
    const handleCheckButton = async () => {
        if (!date) {
            alert('날짜를 선택해주세요.')
            return
        }
        const dailyResponse =
            activeTabIndex === 0
                ? await getDomesticInsight(date)
                : await getOverseasInsight(date)
        const weeklyResponse =
            activeTabIndex === 0
                ? await getDomesticWeeklyInsight(date)
                : await getOverseasWeeklyInsight(date)
        if (dailyResponse.status === 200) {
            if (activeTabIndex === 0) {
                setDailyData(dailyResponse.data?.top_keywords)
                setWeeklyData(weeklyResponse.data?.top_weekly_keywords)
            } else {
                setDailyData(dailyResponse.data?.top_foreign_keywords)
                setWeeklyData(weeklyResponse.data?.top_weekly_foreign_keywords)
            }
        } else {
            alert('조회에 실패했습니다. 다시 시도해주세요.')
        }
    }

    return (
        <Box
            style={{ background: tabs[activeTabIndex].bgColor }}
            className={S.container}
        >
            <Box className={S.wrapper}>
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '4px' }}
                >
                    <Text fontSize="subHeadline" color="neutral-100">
                        트렌드 한눈에 보기
                    </Text>
                    <Text fontSize="largeTitle" fontWeight="bold">
                        인사이트
                    </Text>
                </Box>
                <TabToggle
                    tabs={tabs}
                    tabIndex={activeTabIndex}
                    setTabIndex={setActiveTabIndex}
                />
                <Box
                    display="flex"
                    style={{ gap: '12px' }}
                    justifyContent="center"
                >
                    <TextInput
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                    <Button
                        type="primary"
                        size="medium"
                        onClickFunc={handleCheckButton}
                    >
                        조회
                    </Button>
                </Box>

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
                <NewsSearch activeTabIndex={activeTabIndex} />
            </Box>
        </Box>
    )
}
