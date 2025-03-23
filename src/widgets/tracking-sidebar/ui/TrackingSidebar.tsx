import { Box } from '@/shared/ui/Box'
import { Sidebar } from '@/shared/ui/Sidebar'
import * as style from './tracking-sidebar.css'
export const TrackingSidebar = () => {
    return (
        <Box className={style.layout}>
            <Sidebar headerText="추적"></Sidebar>
        </Box>
    )
}
