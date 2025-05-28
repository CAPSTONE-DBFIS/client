/* eslint-disable @typescript-eslint/no-explicit-any */

import { Treemap, ResponsiveContainer, Tooltip } from 'recharts'

interface IArticle {
    data: {
        date: string
        companyName: string
        frequency: number
    }
}

export default function ArticleTreemap({ data }: { data: IArticle[] }) {
    const companyMap: Record<
        string,
        { companyName: string; frequency: number }
    > = {}

    data.forEach((item) => {
        if (!companyMap[item.data.companyName]) {
            companyMap[item.data.companyName] = {
                companyName: item.data.companyName,
                frequency: 0,
            }
        }
        companyMap[item.data.companyName].frequency += item.data.frequency
    })

    const top10 = Object.values(companyMap)
        .sort((a, b) => b.frequency - a.frequency)
        .slice(0, 10)

    const CustomTreemap = createCustomTreemapContent()

    return (
        <ResponsiveContainer width="100%" height={400}>
            <Treemap
                data={top10}
                dataKey="frequency"
                nameKey="companyName"
                stroke="#ffffff"
                aspectRatio={4 / 4}
                content={<CustomTreemap />}
            >
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: 8,
                        fontSize: 12,
                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                    }}
                    labelStyle={{
                        fontWeight: 600,
                        color: '#222',
                    }}
                />
            </Treemap>
        </ResponsiveContainer>
    )
}

function createCustomTreemapContent(): React.FC<any> {
    return function CustomTreemapContent(props) {
        const { x, y, width, height, companyName, index, root } = props
        const total = root?.children?.length || 1
        const fillColor = getColorByIndex(index, total)
        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fillColor}
                    fillOpacity={0.5}
                    stroke="#F5F6F7"
                />
                {width > 60 && height > 20 && (
                    <text
                        x={x + 12}
                        y={y + 25}
                        fill="#fbfdfe"
                        fontSize={13}
                        stroke="none"
                    >
                        {companyName}
                    </text>
                )}
            </g>
        )
    }
}

function getColorByIndex(index: number, total: number) {
    const ratio = index / (total - 1 || 1)

    const startColor = [232, 138, 135]
    const endColor = [249, 233, 230]
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio)
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio)
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio)

    return `rgb(${r}, ${g}, ${b})`
}
