import { Box } from '@/shared/ui/Box'
import * as style from './sidebar.css'
import { SidebarFooter } from './Sidebar-Footer'

export const Sidebar = ({
    headerText,
    children,
}: {
    children?: React.ReactNode
    headerText: string
}) => {
    return (
        <Box
            as={'aside'}
            display="flex"
            alignItems="flex-start"
            className={style.sidebarContainer}
        >
            <Box className={style.header}>
                TRENDB. <Box as={'span'}>{headerText}</Box>{' '}
            </Box>
            <Box className={style.main}>{children}</Box>
            <SidebarFooter userName="사용자이름" />
        </Box>
    )
}
