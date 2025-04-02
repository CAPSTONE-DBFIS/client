import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import Search from '@/shared/asset/icon/search.svg?react'
import Calendar from '@/shared/asset/icon/calendar.svg?react'
import Chart from '@/shared/asset/icon/chart-bar.svg?react'

import { InfoCell, InfoContainer } from './info.css'

export const Info = () => {
    return (
        <Box className={InfoContainer}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="subHeadline" color="teal-500">
                    TENDB의 서비스
                </Text>
                <Text fontSize="title2">다양한 서비스를 제공하고 있어요!</Text>
            </Box>

            <Box className={InfoCell}>
                <Search width={20} height={20} />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Text fontSize="subHeadline" color="neutral-200">
                        OO에 대한 현재 트렌드는 무엇일까?
                    </Text>
                    <Text fontSize="headline">트렌드 분석</Text>
                </Box>
            </Box>
            <Box className={InfoCell}>
                <Calendar width={20} height={20} />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Text fontSize="subHeadline" color="neutral-200">
                        기간에 따른 트렌드에 흐름이 알고싶다면?{' '}
                    </Text>
                    <Text fontSize="headline">트렌드 추적</Text>
                </Box>
            </Box>
            <Box className={InfoCell}>
                <Chart width={20} height={20} />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Text fontSize="subHeadline" color="neutral-200">
                        다양한 분야에 트렌드를 한 눈에 보고 싶어?
                    </Text>
                    <Text fontSize="headline">인사이트</Text>
                </Box>
            </Box>
        </Box>
    )
}
