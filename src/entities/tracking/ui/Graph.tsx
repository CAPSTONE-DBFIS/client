import { Box } from '@/shared/ui/Box'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

type RelatedWordData = {
    word?: string
    frequency?: number
    date?: string
    articleCount?: number
}
export interface IGraph {
    data: RelatedWordData[]
}

export const Graph: React.FC<IGraph> = ({ data }) => {
    const axisStyle = {
        fontSize: 12,
        fontWeight: 500,
        color: '#ffffff',
    }
    const keyword = data
        .map((item) => ({
            ...item,
            word: item.word ?? (item.date && item.date.slice(5)),
            frequency: item.frequency ?? item.articleCount ?? 0,
        }))
        .slice(0, 10)
    return (
        <Box>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={keyword}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="word"
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
                    <Bar dataKey="frequency" fill="#96C0FF" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}
