import { Box } from '@/shared/ui/Box'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

interface SentimentData {
    date: string
    positiveCount: number
    negativeCount: number
    neutralCount: number
    createOrder: number
}

interface SentimentProps {
    data: SentimentData[]
}

export const Sentiment: React.FC<SentimentProps> = ({ data }) => {
    const axisStyle = {
        fontSize: 12,
        fontWeight: 500,
        color: '#222',
    }
    return (
        <Box style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        style={axisStyle}
                        tickFormatter={(date: string) => date.slice(5)}
                    />
                    <YAxis style={axisStyle} />
                    <Tooltip />
                    <Legend
                        wrapperStyle={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                    />
                    <Bar
                        dataKey="positiveCount"
                        stackId="a"
                        fill="#96C0FF"
                        name="긍정"
                    />
                    <Bar
                        dataKey="neutralCount"
                        stackId="a"
                        fill="#B0B8C4"
                        name="중립"
                    />
                    <Bar
                        dataKey="negativeCount"
                        stackId="a"
                        fill="#f3ac9a"
                        name="부정"
                    />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}
