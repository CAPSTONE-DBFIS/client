import { Box } from '@/shared/ui/Box'
import { TrackingSidebar } from '@/features/tracking-sidebar/index'
import { Sidebar } from '@/widgets/Sidebar/index'
import { colors } from '@/app/token'
import { TrackingMain } from '@/features/tracking-main/index'
import { useState } from 'react'
export const Tracking = () => {
    const [selectedProject] = useState({
        name: '슈퍼프로젝트',
        path: '프로젝트',
    })
    return (
        <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="row"
            style={{ gap: '46px', backgroundColor: colors['neutral-10'] }}
        >
            {/* 사이드바 */}
            <Sidebar headerText="추적">
                <TrackingSidebar />
            </Sidebar>
            {/* 메인콘텐츠 */}
            <TrackingMain
                projectName={selectedProject.name}
                projectPath={selectedProject.path}
            />
        </Box>
    )
}
