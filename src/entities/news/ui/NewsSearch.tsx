/* eslint-disable react-hooks/exhaustive-deps */
import CategoryTabs from '@/entities/news/ui/CategoryTabs'
import { Box } from '@/shared/ui/Box'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { useEffect, useState } from 'react'
import SearchIcon from '@/shared/asset/icon/search.svg?react'
import { Category, CategoryList } from '@/entities/news/type/tab.type'
import { Button } from '@/shared/ui/Button'
import SentimentBar from '@/entities/news/ui/SentimentBar'
import CardNews from '@/entities/news/ui/CardNewsItem'
import * as S from './NewsSearch.css'
import {
    getCaegoryInsight,
    getInsightSeach,
} from '@/entities/insight/api/insight'
import { getSentiment } from '@/entities/news/api/news'
import { CardNewsProps } from '@/entities/news/type/news.type'

export default function NewsSearch({
    activeTabIndex,
}: {
    activeTabIndex: number
}) {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null
    )
    const [categories, setCategories] = useState<CategoryList[]>([])
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [searchKeyword, setSearchKeyword] = useState('')
    const [sitement, setSentiment] = useState({
        positive_percent: 0,
        positive: 0,
        negative_percent: 0,
        neutral: 0,
        neutral_percent: 0,
        negative: 0,
    })
    const [newsList, setNewsList] = useState<CardNewsProps[]>([])

    useEffect(() => {
        handleGetCategory()
        setNewsList([])
    }, [activeTabIndex])

    const handleGetCategory = async () => {
        const response =
            activeTabIndex === 0
                ? await getCaegoryInsight(false)
                : await getCaegoryInsight(true)
        if (response.status === 200) {
            setCategories(response.data)
        }
    }

    const handlegetSitement = async () => {
        const response = await getSentiment(
            searchKeyword,
            startDate,
            endDate,
            selectedCategory,
            activeTabIndex === 1
        )
        if (response.status === 200) {
            setSentiment(response.data)
        }
    }

    const handleGetSearch = async () => {
        const response = await getInsightSeach(
            searchKeyword,
            startDate,
            endDate,
            selectedCategory,
            activeTabIndex === 1
        )
        console.log('response', response)
        if (response.status === 200) {
            setNewsList(response.data.hits)
        }
    }

    const handleSearchClick = () => {
        if (!startDate || !endDate) {
            alert('시작일과 종료일을 모두 선택해주세요.')
            return
        }

        if (new Date(startDate) > new Date(endDate)) {
            alert('시작일은 종료일보다 이전이어야 합니다.')
            return
        }
        handlegetSitement()
        handleGetSearch()
        setSearchKeyword('')
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{ gap: '12px' }}
            className={S.container}
        >
            <Text fontSize="title2" fontWeight="semibold">
                뉴스 검색
            </Text>
            <CategoryTabs
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            <Box
                display="flex"
                style={{ width: '100%', marginBottom: '32px' }}
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Box
                    display="flex"
                    alignItems="flex-end"
                    style={{ gap: '24px' }}
                >
                    <TextInput
                        placeholder="검색어 입력"
                        leftIcon={<SearchIcon />}
                        width="450px"
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        value={searchKeyword}
                    />
                    <Box display="flex" style={{ gap: '12px' }}>
                        <Box display="flex" flexDirection="column">
                            <Text fontSize="subHeadline" color="neutral-100">
                                시작 날짜
                            </Text>
                            <TextInput
                                type="date"
                                placeholder="날짜 선택"
                                width="200px"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </Box>

                        <Box display="flex" flexDirection="column">
                            <Text fontSize="subHeadline" color="neutral-100">
                                종료 날짜
                            </Text>
                            <TextInput
                                type="date"
                                placeholder="날짜 선택"
                                width="200px"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </Box>
                    </Box>
                </Box>
                <Button
                    type="primary"
                    size="medium"
                    width="200px"
                    onClickFunc={handleSearchClick}
                    disabled={
                        !startDate || !endDate || !searchKeyword ? true : false
                    }
                >
                    검색
                </Button>
            </Box>
            <SentimentBar sentiment={sitement} />
            <CardNews news={newsList} categories={categories} />
        </Box>
    )
}
