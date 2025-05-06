import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import SuggestionIcon from '@/shared/asset/icon/eye.svg?react'
import SuggestionItem from '@/widgets/management/ui/SuggestionItem'

export default function Suggestions() {
    return (
        <Box display="flex" flexDirection="column" style={{ gap: '12px' }}>
            <Box display="flex" style={{ gap: '10px' }}>
                <Box display="flex" alignItems="center" style={{ gap: '2px' }}>
                    <Text fontSize="body">제안</Text>
                    <SuggestionIcon width={12} height={12} />
                </Box>
                <Text fontSize="body" color='neutral-100'>
                    TRENDB에서 자주 사용되는 파일들을 모아놓았습니다.
                </Text>
            </Box>
            <Box display="flex" style={{ gap: '32px', overflowX: 'auto' }}>
                <SuggestionItem/>
                <SuggestionItem/>
                <SuggestionItem/>
                <SuggestionItem/>
                <SuggestionItem/>
            </Box>
        </Box>
    )
}
