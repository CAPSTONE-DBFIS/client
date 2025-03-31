import { Box } from '@/shared/ui/Box'
import * as style from './styles/sidebar.css'
import { SidebarFooter } from './SidebarFooter'
import React from 'react'

interface ISidebarProps {
    headerText: string //로고 옆 제목 텍스트
    children?: React.ReactNode //사이드바의 메인 콘텐츠 영역
}

export const Sidebar = ({ headerText, children }: ISidebarProps) => {
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
