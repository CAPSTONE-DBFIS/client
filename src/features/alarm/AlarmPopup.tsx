import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

export const AlarmPopup: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{ width: '160px', padding: '10px 20px', gap: '10px' }}
        >
            <Text fontSize="subHeadline" fontWeight="semibold">
                알림
            </Text>
            <Box display="flex" flexDirection="column">
                <Text fontSize="subHeadline" color="neutral-80">
                    트렌드 추천
                </Text>
                <Text fontSize="subHeadline">어쩌구 저쩌구 랄랄랄라</Text>
            </Box>
            <Box display="flex" flexDirection="column">
                <Text fontSize="subHeadline" color="neutral-80">
                    트렌드 분석
                </Text>
                <Text fontSize="subHeadline">어쩌구 저쩌구 랄랄랄라</Text>
            </Box>
        </Box>
    )
}
