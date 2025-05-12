/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@/shared/ui/Box'
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts'
import * as S from './Treemap.css'
import { Text } from '@/shared/ui/Text'
import CursorIcon from '@/shared/asset/icon/cursor-click.svg?react'
import { RelatedDataType } from '@/entities/insight/type/data.type'
import React from 'react'

export default function KeywordTreemap({
    data,
    isDaily,
    currentKeyword,
}: {
    data: RelatedDataType[]
    isDaily: boolean
    currentKeyword: string
}) {
    if (!data || data.length === 0) {
        return (
            <Box className={S.container}>
                <Text fontSize="title2" fontWeight="semibold">
                    연관 데이터
                </Text>
                <Text fontSize="subHeadline" color="neutral-100">
                    키워드 막대 차트를 클릭해보세요!
                </Text>
                <Box display="flex" style={{ gap: '4px' }} alignItems="center">
                    <CursorIcon />
                    <Text>{currentKeyword}</Text>
                </Box>
                <Box
                    style={{ width: '100%', height: '100%' }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text fontSize="title2" color="neutral-50">
                        연관 데이터가 없습니다.
                    </Text>
                </Box>
            </Box>
        )
    }
    const CustomTreemap = createCustomTreemapContent(isDaily)
    return (
        <Box className={S.container}>
            <Box display="flex" flexDirection="column" style={{ gap: '4px' }}>
                <Text fontSize="title2" fontWeight="semibold">
                    연관 데이터
                </Text>
                <Text fontSize="subHeadline" color="neutral-100">
                    키워드 막대 차트를 클릭해보세요!
                </Text>
                <Box display="flex" style={{ gap: '4px' }} alignItems="center">
                    <CursorIcon />
                    <Text fontSize="title2">{currentKeyword}</Text>
                </Box>
            </Box>

            <Box className={S.wrapper}>
                <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                        data={data}
                        dataKey="frequency"
                        nameKey="relatedKeyword"
                        stroke="#fff"
                        aspectRatio={4 / 3}
                        content={<CustomTreemap />}
                    >
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                borderRadius: 8,
                                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                            }}
                            labelStyle={{ fontWeight: 600, color: '#bf2600' }}
                        />
                    </Treemap>
                </ResponsiveContainer>
            </Box>
        </Box>
    )
}

function createCustomTreemapContent(isDaily: boolean): React.FC<any> {
    return function CustomTreemapContent(props) {
        const { x, y, width, height, relatedKeyword, index, root } = props
        const total = root?.children?.length || 1
        const fillColor = getColorByIndex(index, total, isDaily)
        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fillColor}
                    stroke="#ccc"
                />
                {width > 60 && height > 20 && (
                    <text
                        x={x + 8}
                        y={y + 20}
                        fill="#5D6B82"
                        fontSize={18}
                        stroke="none"
                    >
                        {relatedKeyword}
                    </text>
                )}
            </g>
        )
    }
}

function getColorByIndex(index: number, total: number, isDaily: boolean) {
    const ratio = index / (total - 1 || 1)

    const endColor = isDaily ? [208, 231, 255] : [249, 233, 230] // 파랑 / 살구
    const startColor = isDaily ? [43, 127, 255] : [202, 75, 43] // 파랑 / 빨강

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio)
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio)
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio)

    return `rgb(${r}, ${g}, ${b})`
}
