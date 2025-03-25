import { Box } from '@/shared/ui/Box'
import { TrackingSidebar } from '@/features/tracking-sidebar/index'
import { Sidebar } from '@/widgets/Sidebar/index'
import { colors } from '@/app/token'
import { TrackingMain } from '@/features/tracking-main/index'
export const Tracking = () => {
    return (
        <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="row"
            style={{ gap: '46px', backgroundColor: `${colors['neutral-10']}` }}
        >
            {/* 사이드바 */}
            <Sidebar headerText="추적">
                <TrackingSidebar />
            </Sidebar>
            {/* 메인콘텐츠 */}
            <TrackingMain />
        </Box>
    )
}
