import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import { InsightDataDailyType } from '@/entities/insight/type/data.type'

export default function Chart({
    dailyData,
    weeklyData,
    date,
    setCurrentKeyword,
}: {
    dailyData: InsightDataDailyType[]
    weeklyData: InsightDataDailyType[]
    date: string
    setCurrentKeyword: (isDaily: boolean, keyword: string) => void
}) {
    const axisStyle = {
        fontSize: 12,
        fontWeight: 500,
        color: '#98a1b0',
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
                gap: '24px',
            }}
        >
            {/* 일간 키워드 */}
            <Box style={{ width: '100%' }}>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    style={{ width: '100%', marginBottom: '6px' }}
                >
                    <Text color="neutral-60">
                        ⋇ 키워드에 대한 언급 빈도 막대 차트
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{
                        width: '100%',
                        background: '#fff',
                        borderRadius: 12,
                        padding: '16px 24px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        gap: '24px',
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '4px' }}
                    >
                        <Text fontSize="title2" fontWeight="semibold">
                            일간 키워드
                        </Text>
                        <Text fontSize="subHeadline" color="neutral-50">
                            {date} {date === '' ? '' : '기준'}
                        </Text>
                    </Box>

                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={dailyData}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />
                            <XAxis
                                dataKey="keyword"
                                tickLine={false}
                                axisLine={{ stroke: '#dfe3e8' }}
                                style={axisStyle}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={{ stroke: '#dfe3e8' }}
                                style={axisStyle}
                            />
                            <Tooltip
                                wrapperStyle={{
                                    borderRadius: 8,
                                    fontSize: 12,
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                                }}
                                labelStyle={{
                                    fontWeight: 600,
                                    color: '#96C0FF',
                                }}
                            />
                            <Bar
                                dataKey="frequency"
                                fill="#96C0FF"
                                radius={[4, 4, 0, 0]}
                                onClick={(data) => {
                                    if (data) {
                                        setCurrentKeyword(true, data.keyword)
                                    }
                                }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
            <Box style={{ width: '100%' }}>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    style={{ width: '100%', marginBottom: '6px' }}
                >
                    <Text color="neutral-60">
                        ⋇ 키워드에 대한 언급 빈도를 시각화한 것으로 키워드
                        클릭시 연관데이터를 볼 수 있습니다.
                    </Text>
                </Box>
                {/* 주간 키워드 */}
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{
                        width: '100%',
                        background: '#fff',
                        borderRadius: 12,
                        padding: '16px 24px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        gap: '24px',
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '4px', width: '100%' }}
                    >
                        <Text fontSize="title2" fontWeight="semibold">
                            주간 키워드
                        </Text>
                        <Text fontSize="subHeadline" color="neutral-50">
                            {getOneWeekAgo(date)} {date === '' ? '' : '-'}{' '}
                            {date} {date === '' ? '' : '기준'}
                        </Text>
                    </Box>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={weeklyData}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />
                            <XAxis
                                dataKey="keyword"
                                tickLine={false}
                                axisLine={{ stroke: '#dfe3e8' }}
                                style={axisStyle}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={{ stroke: '#dfe3e8' }}
                                style={axisStyle}
                            />
                            <Tooltip
                                wrapperStyle={{
                                    borderRadius: 8,
                                    fontSize: 12,
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                                }}
                                labelStyle={{
                                    fontWeight: 600,
                                    color: '#E5A696',
                                }}
                            />
                            <Bar
                                dataKey="totalFrequency"
                                fill="#E5A696"
                                radius={[4, 4, 0, 0]}
                                onClick={(data) => {
                                    if (data) {
                                        setCurrentKeyword(false, data.keyword)
                                    }
                                }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
        </div>
    )
}

function getOneWeekAgo(dateStr: string): string | null {
    const baseDate = new Date(dateStr)
    if (isNaN(baseDate.getTime())) return null

    const oneWeekAgo = new Date(baseDate)
    oneWeekAgo.setDate(baseDate.getDate() - 7)

    return oneWeekAgo.toISOString().split('T')[0]
}
