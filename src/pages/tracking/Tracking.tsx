import { Box } from '@/shared/ui/Box'
import { TrackingSidebar } from '@/features/tracking-sidebar/index'
import { Sidebar } from '@/widgets/Sidebar/index'
import { colors } from '@/app/token'
import { TrackingMain } from '@/features/tracking-main/index'
import { useEffect, useState } from 'react'
import { getTeams } from '@/entities/file/api/file'
import {
    ITrackingProject,
    ITrackingTeam,
    ITrackingTeamResponse,
} from '@/entities/tracking/type/tracking.type'
import { getProject } from '@/entities/tracking/api/tracking'
/**
 * 추적페이지
 * @type {{ name: string, path: string }}
 * @returns {JSX.Element}
 */
export const Tracking = () => {
    const [selectedTeam, setSelectedTeam] = useState<ITrackingTeam | null>(null)
    const [selectedProject, setSelectedProject] =
        useState<ITrackingProject | null>(null)
    const [teamsData, setTeamsData] = useState<ITrackingTeam[]>([])

    useEffect(() => {
        const fetchTeamsAndProjects = async () => {
            try {
                const response = await getTeams()
                const mappedTeams = response.data.map(
                    (team: ITrackingTeamResponse) => ({
                        id: team.teamId,
                        name: team.teamName,
                        projects: [],
                    })
                )

                const teamsWithProjects = await Promise.all(
                    mappedTeams.map(async (team: ITrackingTeam) => {
                        try {
                            const projectsResponse = await getProject(team.id)
                            return {
                                ...team,
                                projects: projectsResponse.data,
                            }
                        } catch (error) {
                            console.error(
                                `프로젝트 데이터를 가져오는 중 오류 발생 (팀 ID: ${team.id}):`,
                                error
                            )
                            return team
                        }
                    })
                )

                setTeamsData(teamsWithProjects)
            } catch (error) {
                console.error(error)
                setTeamsData([])
            }
        }

        fetchTeamsAndProjects()
    }, [])

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
                    teamsData={teamsData}
                    onTeamSelect={setSelectedTeam}
                    onProjectSelect={setSelectedProject}
                    setTeamsData={setTeamsData}
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
