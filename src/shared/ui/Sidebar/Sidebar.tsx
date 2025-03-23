import { Box } from '@/shared/ui/Box'
import * as style from './sidebar.css'
import { SidebarFooter } from '../Sidebar-Footer/SidebarFooter'

export const Sidebar = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Box
            display="flex"
            alignItems="flex-start"
            className={style.sidebarContainer}
        >
            <Box className={style.header}>
                TRENDB. <Box as={'span'}>추적</Box>{' '}
            </Box>
            <Box className={style.main}>{children}</Box>
            <SidebarFooter />
        </Box>
    )
}
