import { useState } from 'react'
//components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
//icon
import Calendar from '@/shared/asset/icon/calendar.svg?react'
import Search from '@/shared/asset/icon/search.svg?react'
import Data from '@/shared/asset/icon/chart-square-bar.svg?react'
import Speak from '@/shared/asset/icon/speakerphone.svg?react'
//css
import { colors } from '@/app/token'
import * as style from './styles/report.css'
interface IReportProps {
    id: string // 선택된 리스트 ID
}

export const Report: React.FC<IReportProps> = ({ id }) => {
    const [selectedTaps, setSelctedTaps] = useState(false)
    const onTapsChange = () => {
        setSelctedTaps((prev) => !prev)
    }
    console.log(id)
    return (
        <Box>
            <Box style={{ padding: '16px 0' }}>
                <Box display="flex" alignItems="center" style={{ gap: '16px' }}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Calendar width={12} height={12} />
                        <Text fontSize="subHeadline">
                            기간: {'2025-00-00 ~ 2025-00-00'}
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Search width={12} height={12} />
                        <Text fontSize="subHeadline">연관 키워드: {24}개</Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Data width={12} height={12} />
                        <Text fontSize="subHeadline">데이터 포인트: {123}</Text>
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
                <Box style={{ padding: '24px 0' }}>
                    <Text fontSize="title1" fontWeight="bold">
                        {'n'}주차 핵심 트렌드 인사이트
                    </Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '25px', marginTop: '25px' }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            className={style.graphContainer}
                        >
                            <Box className={style.graph}>
                                <Text fontSize="title2">
                                    연관 키워드 언급량 통계
                                </Text>
                                <Box
                                    style={{
                                        background: colors['neutral-30'],
                                    }}
                                />
                            </Box>
                            <Box className={style.graph}>
                                <Text fontSize="title2">키워드 긍부정도</Text>
                                <Box
                                    style={{
                                        background: colors['neutral-30'],
                                        width: '100%',
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className={style.textBox}>
                            <Box
                                display="flex"
                                style={{ gap: '8px', marginBottom: '16px' }}
                            >
                                <Speak />
                                <Text fontSize="title2">한줄 요약</Text>
                            </Box>
                            <Text>
                                {' '}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            ) : (
                // 요약대시보드
                <Box style={{ padding: '24px 0' }}>
                    <Text fontSize="title1" fontWeight="bold">
                        {'n'}주차 핵심 트렌드 인사이트
                    </Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '25px', marginTop: '25px' }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            className={style.graphContainer}
                        >
                            <Box className={style.graph}>
                                <Text fontSize="title2">
                                    키워드 언급량 통계
                                </Text>
                                <Box
                                    style={{
                                        background: colors['neutral-30'],
                                    }}
                                />
                            </Box>
                            <Box className={style.graph}>
                                <Text fontSize="title2">언급 분포</Text>
                                <Box
                                    style={{
                                        background: colors['neutral-30'],
                                        width: '100%',
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className={style.textBox}>
                            <Box
                                display="flex"
                                style={{ gap: '8px', marginBottom: '16px' }}
                            >
                                <Speak />
                                <Text fontSize="title2">한줄 요약</Text>
                            </Box>
                            <Text>
                                {' '}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
