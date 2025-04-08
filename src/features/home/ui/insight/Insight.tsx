import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import * as T from './Insight.css'
import { InsightGraph } from '@/features/home/ui/insight/InsightGraph'

export const Insight = () => {
    return (
        <Box className={T.container}>
            <Box display="flex" flexDirection="column" style={{ gap: '12px' }}>
                <Text fontSize="title2" color="neutral-600">
                    인사이트
                </Text>
                <Text fontSize="title1">트렌드 한눈에 보기</Text>
                <Text fontSize="title3" color="neutral-300">
                    다양한 트렌드 정보를 한 눈에 볼 수 있어요!
                </Text>
            </Box>
            <Box display="flex" alignItems="center" style={{ gap: '8px' }}>
                <Text className={T.logoSpan}>TRENDB</Text>
                <Text color="neutral-90">
                    TRENDB만의 데이터 스크래핑을 통해 추출된 데이터로 다양한
                    분야의 트렌드를 한 눈에 볼 수 있게 정리하고 있어요.
                </Text>
            </Box>
            <InsightGraph />
        </Box>
    )
}
