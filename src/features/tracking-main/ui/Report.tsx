import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

interface IReportProps {
    id: string // 선택된 리스트 ID
}

export const Report: React.FC<IReportProps> = ({ id }) => {
    return (
        <Box>
            <Text fontSize="title1" fontWeight="bold">
                {id}
            </Text>
        </Box>
    )
}
