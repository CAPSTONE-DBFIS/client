import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './ManangementSideBar.css'

export default function ManagementSideBar() {
    return (
        <Box>
            <Box display="flex" flexDirection="column" style={{ gap: '12px' }}>
                <Text fontSize="subHeadline" color="neutral-100">
                    최근 팀
                </Text>
                <Box className={S.teamList}>
                    <Box className={S.teamItem}>
                        <Box className={S.teamLogo}>A</Box>
                        <Text>팀 이름</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
