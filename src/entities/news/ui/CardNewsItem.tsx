import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import {
    CardNewsProps,
    CardNewsPropsWithColor,
} from '@/entities/news/type/news.type'
import * as S from './CardNewsItem.css'
import { CategoryList } from '@/entities/news/type/tab.type'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import SearchIcon from '@/shared/asset/icon/search.svg?react'

const sentimentColorMap = {
    positive: '#2b7fff',
    neutral: '#98a1b0',
    negative: '#ca4b2b',
}

const categoryColors = [
    '#37474F', // 다크 블루그레이
    '#2962FF', // 진한 블루
    '#00897B', // 청록 계열 (지식, 논리)
    '#FF6D00', // 진한 오렌지 (에너지)
    '#D32F2F', // 강렬한 레드 (경고/보안)
    '#7C4DFF', // 보라 계열 (연결, 커뮤니케이션)
    '#455A64', // 블루그레이 (기술적 중립성)
    '#0091EA', // 시안 블루 (미디어/속도/전달)
]

export default function CardNews({
    news,
    categories,
}: {
    news: CardNewsProps[]
    categories: CategoryList[]
}) {
    if (!news || news.length === 0) {
        return <NoneCardNewsItem />
    }
    return (
        <Box as={'ul'} className={S.newsContainer}>
            {news.map((item, index) => (
                <CardNewsItem
                    key={index}
                    image_url={item.image_url}
                    category={item.category}
                    title={item.title}
                    content={item.content}
                    url={item.url}
                    date={item.date}
                    sentiment={item.sentiment}
                    sentiment_confidence={item.sentiment_confidence}
                    media_company={item.media_company}
                    colorIndex={
                        item.category
                            ? categories.findIndex(
                                  (cat) => cat.name === item.category
                              )
                            : 0
                    }
                />
            ))}
        </Box>
    )
}

function CardNewsItem({
    image_url,
    category,
    title,
    content,
    url,
    date,
    colorIndex,
    sentiment,
    sentiment_confidence,
    media_company,
}: CardNewsPropsWithColor) {
    const percent = Math.round(sentiment_confidence * 100)
    const pieData = [
        { name: sentiment, value: percent },
        { name: 'default', value: 100 - percent },
    ]
    console.log(sentiment_confidence, sentiment)
    return (
        <Box
            className={S.container}
            as={'li'}
            onClick={() => window.open(url, '_blank')}
        >
            <Box className={S.wrapper}>
                <Box display="flex" style={{ width: '1300px' }}>
                    <img src={image_url} alt={title} className={S.image} />

                    <Box
                        style={{
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            className={S.typeLabel}
                            style={{
                                backgroundColor: categoryColors[colorIndex],
                            }}
                        >
                            <Text color="white" fontSize="subHeadline">
                                {category}
                            </Text>
                        </Box>

                        <Text fontSize="title1" fontWeight="bold">
                            {title}
                        </Text>
                        <Text
                            fontSize="title3"
                            color="neutral-100"
                            fontWeight="semibold"
                        >
                            {media_company}
                        </Text>
                        <Text fontSize="caption" color="neutral-60">
                            {url}
                        </Text>
                        <Box style={{ height: '150px' }}>
                            <Text
                                fontSize="body"
                                color="neutral-60"
                                className={S.content}
                            >
                                {content}
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Text fontSize="caption" color="neutral-60">
                        {date}
                    </Text>
                </Box>
            </Box>
            <Box
                style={{ width: '500px', height: '100%', position: 'relative' }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                            innerRadius={24}
                            outerRadius={32}
                            stroke="none"
                        >
                            <Cell fill={sentimentColorMap[sentiment]} />
                            <Cell fill="#eaeef3" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <Text
                        fontSize="caption"
                        fontWeight="bold"
                        color="neutral-100"
                    >
                        {sentiment ? sentiment : ''}
                    </Text>
                    <Text fontSize="caption" color="neutral-60">
                        {sentiment && (sentiment_confidence * 100).toFixed(0)}
                        {sentiment && '%'}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

function NoneCardNewsItem() {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '64px 0',
                width: '100%',
                height: '300px',
                gap: '12px',
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center">
                <SearchIcon width={40} height={40} />
                <Text fontSize="title1" fontWeight="bold">
                    검색 결과가 없습니다
                </Text>
            </Box>

            <Text fontSize="body" color="neutral-60" style={{ marginTop: 8 }}>
                키워드를 다시 확인하거나 검색 조건을 변경해보세요.
            </Text>
        </Box>
    )
}
