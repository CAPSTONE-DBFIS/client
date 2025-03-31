import { Box } from '@/shared/ui/Box'
import * as style from './styles/List.css'
import { Text } from '@/shared/ui/Text'
import Menu from '@/shared/asset/icon/dots-vertical.svg?react'
/**
 * 대시보드 중 리스트
 *
 * @returns {JSX.Element}
 */
export const List: React.FC = () => {
    return (
        <Box className={style.layout} background={'white'}>
            <Box
                display="flex"
                justifyContent="space-between"
                className={style.header}
            >
                <Text fontSize="title2" fontWeight="medium">
                    00전자 분석
                </Text>
                <Menu />
            </Box>
            <Box display="flex" justifyContent="center">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className={style.mainData}
                >
                    <Text fontSize="title1">16</Text>
                    <Text fontSize="body" color="neutral-90">
                        키워드
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className={style.mainData}
                >
                    <Text fontSize="title1">9,345</Text>
                    <Text fontSize="body" color="neutral-90">
                        데이터 포인트
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className={style.mainData}
                >
                    <Text fontSize="title1">25%</Text>
                    <Text fontSize="body" color="neutral-90">
                        진행률
                    </Text>
                </Box>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                style={{ gap: '16px', margin: '0 24px' }}
            >
                <Text fontSize="headline" fontWeight="medium">
                    진행상황
                </Text>

                <Box>
                    <Box className={style.progressBarContainer}>
                        <Box
                            className={style.progressBar}
                            style={{ width: '25%' }}
                        />
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        style={{ marginTop: '12px' }}
                    >
                        <Text
                            fontSize="headline"
                            fontWeight="bold"
                            color="neutral-90"
                        >
                            시작: 2025.03.10
                        </Text>
                        <Text
                            fontSize="headline"
                            fontWeight="bold"
                            color="neutral-90"
                        >
                            예상 완료: 2025.03.10
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Text className={style.tag}>폴더블</Text>
                    <Text className={style.tag}>폴더블</Text>
                    <Text className={style.tag}>폴더블</Text>
                    <Text className={style.tag}>폴더블</Text>
                </Box>
            </Box>
        </Box>
    )
}
