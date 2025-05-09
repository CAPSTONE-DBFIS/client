import { Box } from '@/shared/ui/Box'
import { TrackingSidebar } from '@/features/tracking-sidebar/index'
import { Sidebar } from '@/widgets/Sidebar/index'
import { colors } from '@/app/token'
import { TrackingMain } from '@/features/tracking-main/index'
import { useState } from 'react'
import { IProject, ITeam } from './types/team.types'
/**
 * 추적페이지
 * @type {{ name: string, path: string }}
 * @returns {JSX.Element}
 */
export const Tracking = () => {
    const [selectedTeam, setSelectedTeam] = useState<ITeam | null>(null) // 선택된 팀
    const [selectedProject, setSelectedProject] = useState<IProject | null>(
        null
    ) // 선택된 프로젝트

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
                <TrackingSidebar
                    onTeamSelect={setSelectedTeam}
                    onProjectSelect={setSelectedProject}
                />
            </Sidebar>
            {/* 메인콘텐츠 */}
            <TrackingMain
                projectName={selectedTeam?.name || '팀'}
                projectPath={selectedProject?.name || '프로젝트'}
            />
        </Box>
    )
}
