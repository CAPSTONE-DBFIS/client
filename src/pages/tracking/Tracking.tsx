import { Box } from '@/shared/ui/Box'
import { TrackingSidebar } from '@/widgets/tracking-sidebar/ui/TrackingSidebar'
import * as style from './tracking.css'
export const Tracking = () => {
    return (
        <Box className={style.layout}>
            <TrackingSidebar />
        </Box>
    )
}
