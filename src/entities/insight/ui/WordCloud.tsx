import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './WordCloud.css'

export default function WordCloud() {
    return (
        <Box className={S.container}>
            <Text fontSize="title2" fontWeight="semibold">
                워드 클라우드
            </Text>
            <img src="" alt="word-cloud" className={S.image} />
        </Box>
    )
}
