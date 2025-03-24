import { Box } from '@/shared/ui/Box'
import { TrackingSidebar } from '@/features/tracking-sidebar/ui/TrackingSidebar'
import { Sidebar } from '@/widgets/Sidebar'
import { colors } from '@/app/token'
export const Tracking = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            style={{ gap: '10px', backgroundColor: `${colors['neutral-10']}` }}
        >
            <Sidebar headerText="추적">
                <TrackingSidebar />
            </Sidebar>
        </Box>
    )
}
